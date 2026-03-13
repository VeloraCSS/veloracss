import http from 'node:http';

import { trackerCommandRegistry } from './discord/commandRegistry.js';
import { verifyDiscordSignature } from './discord/verifySignature.js';
import { normalizeGitHubWebhook } from './github/normalizeWebhook.js';
import { verifyGitHubSignature } from './github/verifySignature.js';
import { createAuditLog } from './sync/auditLog.js';
import { createMappingStore } from './sync/mappingStore.js';

const MAX_BODY_SIZE_BYTES = 1024 * 1024;

export function createTrackerServer({
  environment,
  mappingStore = createMappingStore(),
  auditLog = createAuditLog(),
  clock = () => new Date().toISOString()
}) {
  return http.createServer(async (request, response) => {
    try {
      const url = new URL(request.url ?? '/', `http://${request.headers.host ?? 'localhost'}`);

      if (request.method === 'GET' && url.pathname === '/health') {
        return sendJson(response, 200, {
          status: 'ok',
          service: 'veloracss-tracker',
          now: clock(),
          commands: trackerCommandRegistry.map((command) => command.name),
          config: {
            githubWebhookSecret: Boolean(environment.github.webhookSecret),
            githubToken: Boolean(environment.github.token),
            githubOrg: environment.github.org,
            githubProjectNumber: environment.github.projectNumber,
            discordPublicKey: Boolean(environment.discord.publicKey),
            discordApplicationId: Boolean(environment.discord.applicationId),
            discordBotToken: Boolean(environment.discord.botToken),
            discordGuildId: Boolean(environment.discord.guildId)
          },
          state: {
            mappingCount: mappingStore.size(),
            auditEntryCount: auditLog.size()
          }
        });
      }

      if (request.method === 'GET' && url.pathname === '/discord/commands') {
        return sendJson(response, 200, {
          commands: trackerCommandRegistry
        });
      }

      if (request.method === 'POST' && url.pathname === '/discord/interactions') {
        if (!environment.discord.publicKey) {
          return sendJson(response, 503, {
            error: 'discord_not_configured',
            message: 'DISCORD_PUBLIC_KEY is required before Discord interactions can be verified.'
          });
        }

        const payloadBuffer = await readRequestBody(request);
        const signatureCheck = verifyDiscordSignature({
          publicKey: environment.discord.publicKey,
          signatureHeader: getHeaderValue(request.headers['x-signature-ed25519']),
          timestampHeader: getHeaderValue(request.headers['x-signature-timestamp']),
          payloadBuffer
        });

        if (!signatureCheck.ok) {
          return sendJson(response, 401, {
            error: 'invalid_signature',
            reason: signatureCheck.reason
          });
        }

        const payload = parseJson(payloadBuffer);
        const interactionResponse = buildDiscordInteractionResponse(payload, auditLog, clock);
        return sendJson(response, 200, interactionResponse);
      }

      if (request.method === 'GET' && url.pathname === '/mappings') {
        return sendJson(response, 200, {
          items: mappingStore.list()
        });
      }

      if (request.method === 'GET' && url.pathname === '/audit') {
        return sendJson(response, 200, {
          entries: auditLog.list(50)
        });
      }

      if (request.method === 'POST' && url.pathname === '/github/webhook') {
        const payloadBuffer = await readRequestBody(request);
        const signatureCheck = verifyGitHubSignature({
          secret: environment.github.webhookSecret,
          payloadBuffer,
          signatureHeader: getHeaderValue(request.headers['x-hub-signature-256'])
        });

        if (!signatureCheck.ok) {
          return sendJson(response, 401, {
            error: 'invalid_signature',
            reason: signatureCheck.reason
          });
        }

        const payload = parseJson(payloadBuffer);
        const eventName = getHeaderValue(request.headers['x-github-event']) ?? 'unknown';
        const deliveryId = getHeaderValue(request.headers['x-github-delivery']) ?? 'missing-delivery-id';
        const normalizedEvent = normalizeGitHubWebhook({
          eventName,
          deliveryId,
          payload,
          receivedAt: clock()
        });

        const mappingRecord = mappingStore.upsertFromGitHub(normalizedEvent);

        auditLog.record({
          kind: 'github_webhook',
          deliveryId,
          eventName,
          action: normalizedEvent.action,
          receivedAt: normalizedEvent.receivedAt,
          projectItemId: normalizedEvent.github.projectItemId,
          snapshotHash: normalizedEvent.snapshotHash,
          signatureVerified: signatureCheck.verified
        });

        return sendJson(response, eventName === 'ping' ? 200 : 202, {
          accepted: true,
          event: eventName,
          action: normalizedEvent.action,
          signatureVerified: signatureCheck.verified,
          mappingKey: mappingRecord?.githubProjectItemId ?? null,
          snapshotHash: normalizedEvent.snapshotHash
        });
      }

      return sendJson(response, 404, {
        error: 'not_found'
      });
    } catch (error) {
      return sendJson(response, error.statusCode ?? 500, {
        error: 'server_error',
        message: error.message
      });
    }
  });
}

function getHeaderValue(value) {
  if (Array.isArray(value)) {
    return value[0] ?? null;
  }

  return typeof value === 'string' ? value : null;
}

async function readRequestBody(request) {
  const chunks = [];
  let totalBytes = 0;

  for await (const chunk of request) {
    totalBytes += chunk.length;

    if (totalBytes > MAX_BODY_SIZE_BYTES) {
      const error = new Error('Request body exceeded the 1 MB scaffold limit.');
      error.statusCode = 413;
      throw error;
    }

    chunks.push(chunk);
  }

  return Buffer.concat(chunks);
}

function parseJson(payloadBuffer) {
  const serialized = payloadBuffer.toString('utf8');

  if (!serialized.trim()) {
    return {};
  }

  try {
    return JSON.parse(serialized);
  } catch {
    const error = new Error('Request body was not valid JSON.');
    error.statusCode = 400;
    throw error;
  }
}

function buildDiscordInteractionResponse(payload, auditLog, clock) {
  auditLog.record({
    kind: 'discord_interaction',
    interactionId: payload.id ?? null,
    interactionType: payload.type ?? null,
    commandName: payload.data?.name ?? null,
    guildId: payload.guild_id ?? null,
    channelId: payload.channel_id ?? null,
    receivedAt: clock()
  });

  if (payload.type === 1) {
    return {
      type: 1
    };
  }

  if (payload.type === 2) {
    return {
      type: 4,
      data: {
        content: buildInteractionStubMessage(payload.data?.name, payload.data?.options),
        flags: 64
      }
    };
  }

  return {
    type: 4,
    data: {
      content: 'The tracker scaffold received the interaction, but this type is not implemented yet.',
      flags: 64
    }
  };
}

function buildInteractionStubMessage(commandName, options) {
  if (!commandName) {
    return 'The tracker scaffold received an unnamed Discord interaction.';
  }

  const optionSummary = Array.isArray(options)
    ? options
        .map((option) => `${option.name}=${stringifyInteractionOption(option.value)}`)
        .join(', ')
    : '';

  if (!optionSummary) {
    return `Tracker scaffold received ${commandName}.`;
  }

  return `Tracker scaffold received ${commandName} with ${optionSummary}.`;
}

function stringifyInteractionOption(value) {
  if (typeof value === 'string') {
    return value;
  }

  if (typeof value === 'number' || typeof value === 'boolean') {
    return String(value);
  }

  return 'unsupported';
}

function sendJson(response, statusCode, payload) {
  const body = JSON.stringify(payload, null, 2);

  response.writeHead(statusCode, {
    'content-type': 'application/json; charset=utf-8',
    'content-length': Buffer.byteLength(body)
  });

  response.end(body);
}


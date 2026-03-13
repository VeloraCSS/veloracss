import { createPublicKey, verify } from 'node:crypto';

const ED25519_PUBLIC_KEY_PREFIX = '302a300506032b6570032100';

export function verifyDiscordSignature({ publicKey, signatureHeader, timestampHeader, payloadBuffer }) {
  if (!isHexString(publicKey, 64)) {
    return {
      ok: false,
      verified: false,
      reason: 'DISCORD_PUBLIC_KEY must be a 32-byte hex string'
    };
  }

  if (!isHexString(signatureHeader, 128)) {
    return {
      ok: false,
      verified: false,
      reason: 'missing or invalid x-signature-ed25519 header'
    };
  }

  if (typeof timestampHeader !== 'string' || timestampHeader.trim().length === 0) {
    return {
      ok: false,
      verified: false,
      reason: 'missing x-signature-timestamp header'
    };
  }

  const message = Buffer.concat([Buffer.from(timestampHeader, 'utf8'), payloadBuffer]);
  const keyBytes = Buffer.from(`${ED25519_PUBLIC_KEY_PREFIX}${publicKey}`, 'hex');
  const keyObject = createPublicKey({
    key: keyBytes,
    format: 'der',
    type: 'spki'
  });
  const signatureBytes = Buffer.from(signatureHeader, 'hex');
  const verified = verify(null, message, keyObject, signatureBytes);

  return {
    ok: verified,
    verified,
    reason: verified ? 'signature verified' : 'signature mismatch'
  };
}

function isHexString(value, expectedLength) {
  return typeof value === 'string' && value.length === expectedLength && /^[0-9a-f]+$/i.test(value);
}

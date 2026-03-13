export function createMappingStore() {
  const mappings = new Map();

  return {
    upsertFromGitHub(event) {
      if (!event.github.projectItemId) {
        return null;
      }

      const existing = mappings.get(event.github.projectItemId) ?? createEmptyMapping(event.github.projectItemId);
      const nextRecord = {
        ...existing,
        githubProjectId: event.github.projectId ?? existing.githubProjectId,
        githubProjectItemId: event.github.projectItemId,
        githubContentId: event.github.contentId ?? existing.githubContentId,
        lastSnapshotHash: event.snapshotHash,
        lastSyncOrigin: 'github',
        lastSyncTimestamp: event.receivedAt,
        lastProcessedEventId: event.deliveryId
      };

      mappings.set(event.github.projectItemId, nextRecord);
      return nextRecord;
    },

    upsertFromDiscord(update) {
      if (!update.githubProjectItemId) {
        return null;
      }

      const existing = mappings.get(update.githubProjectItemId) ?? createEmptyMapping(update.githubProjectItemId);
      const nextRecord = {
        ...existing,
        ...update,
        githubProjectItemId: update.githubProjectItemId,
        lastSyncOrigin: 'discord'
      };

      mappings.set(update.githubProjectItemId, nextRecord);
      return nextRecord;
    },

    list() {
      return Array.from(mappings.values());
    },

    size() {
      return mappings.size;
    }
  };
}

function createEmptyMapping(githubProjectItemId) {
  return {
    githubProjectId: null,
    githubProjectItemId,
    githubContentId: null,
    discordGuildId: null,
    discordChannelId: null,
    discordMessageId: null,
    discordThreadId: null,
    lastSnapshotHash: null,
    lastSyncOrigin: null,
    lastSyncTimestamp: null,
    lastProcessedEventId: null,
    lastOutgoingMutationFingerprint: null
  };
}

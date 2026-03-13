const DEFAULT_LIMIT = 250;

export function createAuditLog(limit = DEFAULT_LIMIT) {
  const entries = [];
  let nextId = 1;

  return {
    record(entry) {
      const storedEntry = {
        id: nextId++,
        ...entry
      };

      entries.push(storedEntry);

      if (entries.length > limit) {
        entries.splice(0, entries.length - limit);
      }

      return storedEntry;
    },

    list(maxEntries = 50) {
      return entries.slice(-maxEntries).reverse();
    },

    size() {
      return entries.length;
    }
  };
}

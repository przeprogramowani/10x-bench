/**
 * Seed pamięci podręcznej źródeł (P04).
 * Uruchamiany z powłoki: `npm run seed-cache`.
 * Wykonuje ten sam serwerowy potok co build (fetch → walidacja → normalizacja)
 * i zapisuje migawki do data/cache/*.json, które build dołącza jako fallback.
 */
import { SOURCES } from '../src/data/sources.ts';
import { fetchSource, writeCacheFile } from '../src/data/loader.ts';

let failed = false;
for (const key of Object.keys(SOURCES)) {
  const def = SOURCES[key];
  try {
    const live = await fetchSource(def);
    writeCacheFile(key, {
      version: 1,
      key,
      fetchedAt: live.fetchedAt,
      feedUrl: live.feedUrl,
      items: live.items,
    });
    console.log(`[seed-cache] ${key}: zapisano ${live.items.length} elementów (pobrano ${live.fetchedAt})`);
  } catch (err) {
    failed = true;
    console.error(`[seed-cache] ${key}: BŁĄD — ${err instanceof Error ? err.message : err}`);
  }
}
if (failed) process.exit(1);

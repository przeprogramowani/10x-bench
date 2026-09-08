import { mkdir, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');

const { SOURCES } = await import(join(root, 'src/data/sources.ts'));
const { parsePodcastRss, parseYouTubeAtom } = await import(join(root, 'src/data/parse.ts'));

const cacheDir = join(root, 'src/data/cache');
await mkdir(cacheDir, { recursive: true });

const UA =
  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) PrzeprogramowaniSite/1.0 (cache refresh)';

for (const source of Object.values(SOURCES)) {
  const url = process.env[`SOURCE_URL_${source.id.replace(/-/g, '_').toUpperCase()}`] || source.url;
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), 15_000);
  try {
    const res = await fetch(url, { signal: controller.signal, headers: { 'User-Agent': UA } });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const xml = await res.text();
    const all =
      source.kind === 'rss' ? parsePodcastRss(xml, source) : parseYouTubeAtom(xml, source);
    const snapshot = {
      sourceUrl: url,
      fetchedAt: new Date().toISOString(),
      items: all.slice(0, 40),
    };
    const file = join(cacheDir, `${source.id}.json`);
    await writeFile(file, JSON.stringify(snapshot, null, 2));
    console.log(`OK ${source.id}: ${all.length} elementów -> ${file} (zapisano ${snapshot.items.length})`);
  } finally {
    clearTimeout(timer);
  }
}

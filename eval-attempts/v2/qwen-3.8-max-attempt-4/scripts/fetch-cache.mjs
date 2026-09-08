import { writeFileSync, readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import { SOURCES } from '../src/lib/config.ts';
import { parseAtom, parseRss, validateItems } from '../src/lib/parse.ts';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const cachePath = join(root, 'src', 'data', 'cache.json');

let previous = { generatedAt: null, sources: {} };
try {
  previous = JSON.parse(readFileSync(cachePath, 'utf8'));
} catch {
  // brak poprzedniego cache — zaczynamy od pustego
}

const sources = {};
let failures = 0;

for (const key of Object.keys(SOURCES)) {
  const source = SOURCES[key];
  try {
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), 8000);
    const response = await fetch(source.feedUrl, {
      signal: controller.signal,
      headers: { 'User-Agent': 'Mozilla/5.0 (przeprogramowani.pl mirror; build cache)' },
      redirect: 'follow',
    });
    clearTimeout(timer);
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const xml = await response.text();
    const items = source.kind === 'rss'
      ? parseRss(xml, source.sourceName, source.sourceUrl)
      : parseAtom(xml, source.sourceName, source.sourceUrl);
    validateItems(items);
    sources[key] = {
      fetchedAt: new Date().toISOString(),
      requestedUrl: source.feedUrl,
      items: items.slice(0, 10),
    };
    console.log(`[cache] ${key}: OK, ${items.length} elementów -> zapisano ${sources[key].items.length}`);
  } catch (error) {
    failures++;
    console.error(`[cache] ${key}: BŁĄD ${error.message} — zachowuję poprzedni cache`);
    if (previous.sources?.[key]) sources[key] = previous.sources[key];
  }
}

const out = { generatedAt: new Date().toISOString(), sources };
writeFileSync(cachePath, JSON.stringify(out, null, 2));
console.log(`[cache] zapisano ${cachePath} (awarie: ${failures})`);

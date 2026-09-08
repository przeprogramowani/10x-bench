import type { CacheFile, MediaItem, SourceResult } from './types.ts';
import { ATTEMPT_START_ISO, RECENT_WINDOW_DAYS, SOURCES } from './config.ts';
import { parseAtom, parseRss, validateItems } from './parse.ts';
import cacheFile from '../data/cache.json';

const cache = cacheFile as unknown as CacheFile;

const FETCH_TIMEOUT_MS = 6000;
const MEMORY_TTL_MS = 10 * 60 * 1000;

const memory = new Map<string, { at: number; result: SourceResult }>();

function simulateFailure(key: string, env?: Record<string, unknown>): boolean {
  const raw =
    env && typeof env.SIMULATE_SOURCE_FAILURE === 'string'
      ? env.SIMULATE_SOURCE_FAILURE
      : (typeof process !== 'undefined' && process.env?.SIMULATE_SOURCE_FAILURE) || '';
  const parts = raw.split(',').map((p) => p.trim()).filter(Boolean);
  return parts.includes('all') || parts.includes(key);
}

async function fetchFeed(url: string): Promise<string> {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), FETCH_TIMEOUT_MS);
  try {
    const response = await fetch(url, {
      signal: controller.signal,
      headers: { 'User-Agent': 'Mozilla/5.0 (przeprogramowani.pl mirror; research build)' },
      redirect: 'follow',
    });
    if (!response.ok) {
      throw new Error(`Błąd HTTP ${response.status} dla ${url}`);
    }
    const text = await response.text();
    if (!/<(rss|feed)[\s>]/i.test(text)) {
      throw new Error(`Nieprawidłowa odpowiedź (brak XML feeda) dla ${url}`);
    }
    return text;
  } finally {
    clearTimeout(timer);
  }
}

function parseFeed(kind: 'rss' | 'atom', xml: string, sourceName: string, sourceUrl: string): MediaItem[] {
  const items = kind === 'rss' ? parseRss(xml, sourceName, sourceUrl) : parseAtom(xml, sourceName, sourceUrl);
  validateItems(items);
  return items;
}

export async function getSourceResult(
  key: keyof typeof SOURCES,
  env?: Record<string, unknown>
): Promise<SourceResult> {
  const source = SOURCES[key];
  const cachedMem = memory.get(key);
  if (cachedMem && Date.now() - cachedMem.at < MEMORY_TTL_MS && cachedMem.result.status === 'fresh') {
    return cachedMem.result;
  }

  try {
    if (simulateFailure(key, env)) {
      throw new Error('Symulowana awaria źródła (SIMULATE_SOURCE_FAILURE)');
    }
    const xml = await fetchFeed(source.feedUrl);
    const items = parseFeed(source.kind, xml, source.sourceName, source.sourceUrl);
    const result: SourceResult = {
      status: 'fresh',
      fetchedAt: new Date().toISOString(),
      requestedUrl: source.feedUrl,
      sourceName: source.sourceName,
      sourceUrl: source.sourceUrl,
      items,
    };
    memory.set(key, { at: Date.now(), result });
    return result;
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    const block = cache.sources?.[key];
    if (block && Array.isArray(block.items) && block.items.length > 0) {
      return {
        status: 'stale',
        fetchedAt: block.fetchedAt,
        requestedUrl: source.feedUrl,
        sourceName: source.sourceName,
        sourceUrl: source.sourceUrl,
        items: block.items,
        error: message,
      };
    }
    return {
      status: 'error',
      fetchedAt: null,
      requestedUrl: source.feedUrl,
      sourceName: source.sourceName,
      sourceUrl: source.sourceUrl,
      items: [],
      error: message,
    };
  }
}

export function selectRecent(items: MediaItem[], limit = 6): MediaItem[] {
  const attemptStart = new Date(ATTEMPT_START_ISO).getTime();
  const windowStart = attemptStart - RECENT_WINDOW_DAYS * 24 * 60 * 60 * 1000;
  const known = items.filter(
    (item) => item.publishedAt && new Date(item.publishedAt).getTime() <= attemptStart
  );
  const sorted = [...known].sort(
    (a, b) => new Date(b.publishedAt!).getTime() - new Date(a.publishedAt!).getTime()
  );
  const inWindow = sorted.filter((item) => new Date(item.publishedAt!).getTime() >= windowStart);
  if (inWindow.length > 0) return inWindow.slice(0, limit);
  return sorted.slice(0, limit);
}

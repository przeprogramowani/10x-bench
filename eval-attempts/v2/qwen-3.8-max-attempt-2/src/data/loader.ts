/**
 * Serwerowy moduł pobierania danych (P04).
 * Wykonywany po stronie serwera podczas budowania (Astro output: static +
 * adapter Cloudflare — strony są prerenderowane, kod działa w Node w czasie buildu).
 *
 * Potok: fetch (z timeoutem) → walidacja → normalizacja → wybór (P03) →
 * w razie awarii: dane z pamięci podręcznej (data/cache/*.json, dołączane
 * do buildu) oznaczone jako nieaktualne albo stan „niedostępne" z linkiem
 * do źródła. Strony prezentują wyłącznie otrzymane dane strukturalne (SourceResult).
 *
 * Pamięć podręczną odświeża polecenie `npm run seed-cache` (scripts/seed-cache.mjs),
 * które wykonuje ten sam potok pobierania i zapisuje data/cache/*.json.
 *
 * Kontrolowana awaria (eksperyment P04/P08) — dwa mechanizmy:
 *   1. środowiskowo: FORCE_FAIL_SOURCES=youtube npm run build
 *   2. konfiguracyjnie: src/data/failure-injection.ts (lista FORCE_FAIL)
 */
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import type { MediaItem, SourceResult } from './types.ts';
import { SOURCES, type SourceDef } from './sources.ts';
import { extractAttr, extractTag, normalizeDate, splitBlocks, stripHtml, stripLoneSurrogates } from './xml.ts';
import { FORCE_FAIL } from './failure-injection.ts';
// Migawki pamięci podręcznej (zapisywane przez `npm run seed-cache`):
import youtubeCache from '../../data/cache/youtube.json' with { type: 'json' };
import opanujAiCache from '../../data/cache/opanuj-ai.json' with { type: 'json' };
import przeprogramowaniCache from '../../data/cache/przeprogramowani-podcast.json' with { type: 'json' };

/** Moment startu próby (operator) — kotwica okna 90 dni (P03). */
export const ATTEMPT_START = process.env.ATTEMPT_START || '2026-09-08T07:29:49.000Z';
const WINDOW_DAYS = 90;
const MAX_ITEMS = 6;
const TIMEOUT_MS = Number(process.env.SOURCE_TIMEOUT_MS || 15000);

const CACHE_DIR = join(process.cwd(), 'data', 'cache');
const CACHES: Record<string, CacheFile> = {
  youtube: youtubeCache as CacheFile,
  'opanuj-ai': opanujAiCache as CacheFile,
  'przeprogramowani-podcast': przeprogramowaniCache as CacheFile,
};

interface CacheFile {
  version: 1;
  key: string;
  fetchedAt: string | null;
  feedUrl: string;
  items: MediaItem[];
}

async function fetchWithTimeout(url: string): Promise<string> {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), TIMEOUT_MS);
  try {
    const res = await fetch(url, {
      signal: controller.signal,
      headers: { 'User-Agent': 'przeprogramowani-pl-site/1.0 (server-side feed fetch)' },
      redirect: 'follow',
    });
    if (!res.ok) throw new Error(`HTTP ${res.status} ${res.statusText}`);
    const body = await res.text();
    if (!body || body.length < 100) throw new Error('Pusta lub zbyt krótka odpowiedź źródła');
    return body;
  } finally {
    clearTimeout(timer);
  }
}

function parseYoutubeAtom(xml: string, def: SourceDef): MediaItem[] {
  if (!xml.includes('<feed')) throw new Error('Nieprawidłowa odpowiedź: oczekiwano feedu Atom');
  return splitBlocks(xml, 'entry').map((block) => {
    const videoId = extractTag(block, 'yt:videoId');
    const title = extractTag(block, 'title');
    const url =
      extractAttr(block, 'link', 'href') ??
      (videoId ? `https://www.youtube.com/watch?v=${videoId}` : null);
    const description = extractTag(block, 'media:description');
    return {
      id: videoId ?? url ?? title ?? '',
      title: stripLoneSurrogates(title ?? ''),
      sourceName: def.name,
      sourceUrl: def.homeUrl,
      url: url ?? '',
      publishedAt: normalizeDate(extractTag(block, 'published')),
      description: description ? stripLoneSurrogates(stripHtml(description).slice(0, 400)) : '',
      enclosureUrl: null,
      thumbnail: extractAttr(block, 'media:thumbnail', 'url'),
    } satisfies MediaItem;
  });
}

function parsePodcastRss(xml: string, def: SourceDef): MediaItem[] {
  if (!xml.includes('<rss')) throw new Error('Nieprawidłowa odpowiedź: oczekiwano feedu RSS');
  return splitBlocks(xml, 'item').map((block) => {
    const title = extractTag(block, 'title');
    const link = extractTag(block, 'link');
    const enclosure = extractAttr(block, 'enclosure', 'url');
    const description = extractTag(block, 'description') ?? extractTag(block, 'itunes:summary');
    return {
      id: link ?? enclosure ?? title ?? '',
      title: stripLoneSurrogates(title ?? ''),
      sourceName: def.name,
      sourceUrl: def.homeUrl,
      url: link ?? '',
      publishedAt: normalizeDate(extractTag(block, 'pubDate')),
      description: description ? stripLoneSurrogates(stripHtml(description).slice(0, 400)) : '',
      enclosureUrl: enclosure,
      thumbnail: extractAttr(block, 'itunes:image', 'href'),
    } satisfies MediaItem;
  });
}

export function parseSource(xml: string, def: SourceDef): MediaItem[] {
  return def.kind === 'youtube-atom' ? parseYoutubeAtom(xml, def) : parsePodcastRss(xml, def);
}

export function validate(items: MediaItem[]): MediaItem[] {
  const valid = items.filter((i) => i.title.length > 0 && /^https?:\/\//.test(i.url));
  if (valid.length === 0) throw new Error('Walidacja nie powiodła się: brak poprawnych elementów');
  return valid;
}

/**
 * Wybór zgodny z P03: najnowsze materiały z 90 dni przed startem próby;
 * jeśli źródło nic w tym oknie nie opublikowało — najnowszy dostępny
 * materiał z rzeczywistą datą. Publikacje późniejsze niż start próby są
 * pomijane (nie są wymagane).
 */
export function selectRecent(items: MediaItem[]): { items: MediaItem[]; outsideRecentWindow: boolean } {
  const start = Date.parse(ATTEMPT_START);
  const cutoff = start - WINDOW_DAYS * 24 * 60 * 60 * 1000;
  const notFromFuture = items.filter(
    (i) => i.publishedAt === null || Date.parse(i.publishedAt) <= start,
  );
  const recent = notFromFuture.filter(
    (i) => i.publishedAt !== null && Date.parse(i.publishedAt) >= cutoff,
  );
  const pool = recent.length > 0 ? recent : notFromFuture;
  const sorted = [...pool].sort((a, b) => {
    const ta = a.publishedAt ? Date.parse(a.publishedAt) : -Infinity;
    const tb = b.publishedAt ? Date.parse(b.publishedAt) : -Infinity;
    return tb - ta;
  });
  return { items: sorted.slice(0, MAX_ITEMS), outsideRecentWindow: recent.length === 0 };
}

/** Pobranie + walidacja + normalizacja jednego źródła (używane też przez seed-cache). */
export async function fetchSource(def: SourceDef, urlOverride?: string): Promise<{ items: MediaItem[]; fetchedAt: string; feedUrl: string }> {
  const feedUrl = urlOverride || def.feedUrl;
  const raw = await fetchWithTimeout(feedUrl);
  const items = validate(parseSource(raw, def));
  return { items, fetchedAt: new Date().toISOString(), feedUrl };
}

/** Zapis migawki cache — używany przez seed-cache (fs) i best-effort w buildzie. */
export function writeCacheFile(key: string, data: CacheFile): void {
  mkdirSync(CACHE_DIR, { recursive: true });
  writeFileSync(join(CACHE_DIR, `${key}.json`), JSON.stringify(data, null, 2));
}

/** Główny punkt wejścia modułu danych — używany wyłącznie po stronie serwera (build). */
export async function loadSource(key: SourceDef['key']): Promise<SourceResult> {
  const def = SOURCES[key];
  const attemptedAt = new Date().toISOString();
  const forced =
    FORCE_FAIL.includes(key) ||
    (process.env.FORCE_FAIL_SOURCES || '').split(',').map((s) => s.trim()).includes(key);
  const urlOverride = process.env[`SOURCE_URL_${key.replace(/-/g, '_').toUpperCase()}`];

  const base = {
    key,
    sourceName: def.name,
    sourceUrl: def.homeUrl,
    feedUrl: urlOverride || def.feedUrl,
    attemptedAt,
  };

  let liveError: string | null = null;
  if (!forced) {
    try {
      const live = await fetchSource(def, urlOverride);
      try {
        writeCacheFile(key, { version: 1, key, fetchedAt: live.fetchedAt, feedUrl: live.feedUrl, items: live.items });
      } catch (err) {
        console.warn(`[data] ${key}: odświeżenie cache w buildzie pominięte (${err instanceof Error ? err.message : err}); użyj \`npm run seed-cache\``);
      }
      const selection = selectRecent(live.items);
      console.log(
        `[data] ${key}: OK, ${live.items.length} elementów z feedu, ${selection.items.length} wyświetlanych${selection.outsideRecentWindow ? ' (poza oknem 90 dni — najnowsze dostępne)' : ''}`,
      );
      return { ...base, status: 'fresh', items: selection.items, fetchedAt: live.fetchedAt, error: null, ...selection };
    } catch (err) {
      liveError = err instanceof Error ? err.message : String(err);
      console.warn(`[data] ${key}: pobieranie na żywo nie powiodło się (${liveError}) — sięgam do pamięci podręcznej`);
    }
  } else {
    liveError = 'Kontrolowana awaria źródła (eksperyment: FORCE_FAIL)';
    console.warn(`[data] ${key}: ${liveError} — sięgam do pamięci podręcznej`);
  }

  const cached = CACHES[key];
  if (cached && Array.isArray(cached.items) && cached.items.length > 0) {
    const items = validate(cached.items as MediaItem[]);
    const selection = selectRecent(items);
    console.log(`[data] ${key}: fallback na cache z ${cached.fetchedAt} (${selection.items.length} elementów)`);
    return { ...base, status: 'stale', items: selection.items, fetchedAt: cached.fetchedAt, error: liveError, ...selection };
  }

  console.warn(`[data] ${key}: brak danych live i brak cache — stan niedostępności`);
  return {
    ...base,
    status: 'unavailable',
    items: [],
    fetchedAt: null,
    error: liveError ?? 'Brak danych w pamięci podręcznej',
    outsideRecentWindow: false,
  };
}

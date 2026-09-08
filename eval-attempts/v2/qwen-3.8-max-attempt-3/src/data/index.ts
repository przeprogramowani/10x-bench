import type { DataStatus, MediaItem, SourceId, SourceResult } from './sources';
import { SOURCES } from './sources';
import { parsePodcastRss, parseYouTubeAtom } from './parse';
import cacheOpanujAi from './cache/opanuj-ai.json';
import cachePodcast from './cache/przeprogramowani-podcast.json';
import cacheYoutube from './cache/youtube.json';

/**
 * Dedykowany moduł pobierania danych zewnętrznych (server-side, w czasie buildu).
 * Kolejność: sieć (z timeoutem i walidacją) -> pamięć podręczna (oznaczona jako
 * nieaktualna) -> stan niedostępności z linkiem do źródła.
 *
 * Konfiguracja środowiskowa jest wstrzykiwana przez `define: __FEED_ENV__`
 * w astro.config.mjs (zmienne: DATA_OFFLINE, FETCH_TIMEOUT_MS, RECENT_WINDOW_DAYS,
 * SOURCE_URL_OPANUJ_AI, SOURCE_URL_PRZEPROGRAMOWANI_PODCAST, SOURCE_URL_YOUTUBE).
 */

declare const __FEED_ENV__: {
  offline: boolean;
  timeoutMs: number;
  recentWindowDays: number;
  urlOverrides: Record<string, string>;
};

const FEED_ENV =
  typeof __FEED_ENV__ !== 'undefined'
    ? __FEED_ENV__
    : { offline: false, timeoutMs: 10_000, recentWindowDays: 90, urlOverrides: {} };

const CACHES: Record<SourceId, { sourceUrl: string; fetchedAt: string; items: MediaItem[] }> = {
  'opanuj-ai': cacheOpanujAi as any,
  'przeprogramowani-podcast': cachePodcast as any,
  youtube: cacheYoutube as any,
};

function resolveSourceUrl(id: SourceId): string {
  return FEED_ENV.urlOverrides[id] || SOURCES[id].url;
}

async function fetchText(url: string): Promise<string> {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), FEED_ENV.timeoutMs);
  try {
    const res = await fetch(url, {
      signal: controller.signal,
      headers: {
        'User-Agent':
          'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) PrzeprogramowaniSite/1.0 (build-time feed fetch)',
        Accept: 'application/rss+xml, application/atom+xml, application/xml, text/xml, */*',
      },
      redirect: 'follow',
    });
    if (!res.ok) throw new Error(`Błąd HTTP ${res.status} dla ${url}`);
    const text = await res.text();
    if (!text || text.length < 200) {
      throw new Error(`Nieprawidłowa odpowiedź (pusta/za krótka) z ${url}`);
    }
    return text;
  } finally {
    clearTimeout(timer);
  }
}

/** Wybiera materiały z okna 90 dni; jeśli brak — najnowsze dostępne. */
export function selectRecent(items: MediaItem[], now = new Date()): MediaItem[] {
  const sorted = [...items].sort((a, b) => {
    const ta = a.publishedAt ? Date.parse(a.publishedAt) : 0;
    const tb = b.publishedAt ? Date.parse(b.publishedAt) : 0;
    return tb - ta;
  });
  const cutoff = now.getTime() - FEED_ENV.recentWindowDays * 24 * 60 * 60 * 1000;
  const recent = sorted.filter((i) => i.publishedAt && Date.parse(i.publishedAt) >= cutoff);
  const chosen = recent.length > 0 ? recent : sorted.slice(0, 8);
  return chosen.slice(0, 8);
}

function parseSource(id: SourceId, xml: string): MediaItem[] {
  const source = SOURCES[id];
  const parsed =
    source.kind === 'rss' ? parsePodcastRss(xml, source) : parseYouTubeAtom(xml, source);
  return selectRecent(parsed);
}

export async function getSource(id: SourceId): Promise<SourceResult> {
  const source = SOURCES[id];
  const sourceUrl = resolveSourceUrl(id);
  const base = {
    sourceId: id,
    sourceName: source.name,
    sourceUrl,
    homepage: source.homepage,
  };

  if (!FEED_ENV.offline) {
    try {
      const xml = await fetchText(sourceUrl);
      const items = parseSource(id, xml);
      const result: SourceResult = {
        ...base,
        status: 'fresh' as DataStatus,
        fetchedAt: new Date().toISOString(),
        items,
      };
      console.log(`[data] ${id}: fresh, ${items.length} elementów z sieci (${sourceUrl})`);
      return result;
    } catch (err) {
      const message = err instanceof Error ? err.message : String(err);
      console.warn(
        `[data] ${id}: pobieranie z sieci nieudane (${message}) — używam pamięci podręcznej`,
      );
      const cache = CACHES[id];
      if (cache && cache.items?.length > 0) {
        return {
          ...base,
          status: 'stale',
          fetchedAt: cache.fetchedAt,
          items: selectRecent(cache.items, new Date(cache.fetchedAt)),
          error: message,
        };
      }
      return {
        ...base,
        status: 'unavailable',
        fetchedAt: new Date().toISOString(),
        items: [],
        error: message,
      };
    }
  }

  const cache = CACHES[id];
  if (cache && cache.items?.length > 0) {
    return {
      ...base,
      status: 'stale',
      fetchedAt: cache.fetchedAt,
      items: selectRecent(cache.items, new Date(cache.fetchedAt)),
      error: 'Pobieranie z sieci wyłączone (DATA_OFFLINE=1) — dane z pamięci podręcznej.',
    };
  }
  return {
    ...base,
    status: 'unavailable',
    fetchedAt: new Date().toISOString(),
    items: [],
    error: 'Brak danych w pamięci podręcznej.',
  };
}

export function formatDate(iso: string | null): string {
  if (!iso) return 'data nieznana';
  return new Date(iso).toLocaleDateString('pl-PL', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: 'UTC',
  });
}

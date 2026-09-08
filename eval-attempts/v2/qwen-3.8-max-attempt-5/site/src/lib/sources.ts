// Server-side data source modules (P04).
// Fetch, validate and normalize external media feeds. Presentation components
// only consume the structured results returned here.

export interface MediaItem {
  id: string;
  title: string;
  url: string;
  publishedAt: string | null; // ISO date or null when the source does not provide one
  audioUrl: string | null;
  videoId: string | null;
  summary: string;
}

export interface SourceResult {
  sourceId: SourceId;
  sourceLabel: string;
  sourceHomeUrl: string;
  feedUrl: string;
  status: 'live' | 'stale' | 'unavailable';
  fetchedAt: string | null; // when the currently used data was retrieved
  retrievedAt: string; // when this build attempted retrieval
  items: MediaItem[];
  withinWindow: boolean; // true when at least one item falls inside the 90-day window
  error?: string;
}

export type SourceId = 'youtube' | 'opanujai' | 'przeprogramowani';

interface SourceDefinition {
  id: SourceId;
  label: string;
  homeUrl: string;
  feedUrl: string;
  kind: 'youtube-rss' | 'podcast-rss';
}

export const SOURCES: Record<SourceId, SourceDefinition> = {
  youtube: {
    id: 'youtube',
    label: 'YouTube — kanał Przeprogramowani',
    homeUrl: 'https://www.youtube.com/@przeprogramowani',
    feedUrl:
      'https://www.youtube.com/feeds/videos.xml?channel_id=UCb2Y3vMeD6N4WDt5Acw7Arw',
    kind: 'youtube-rss',
  },
  opanujai: {
    id: 'opanujai',
    label: 'Podcast Opanuj.AI',
    homeUrl: 'https://podcasters.spotify.com/pod/show/opanujai',
    feedUrl: 'https://anchor.fm/s/e2cb03d0/podcast/rss',
    kind: 'podcast-rss',
  },
  przeprogramowani: {
    id: 'przeprogramowani',
    label: 'Podcast Przeprogramowani',
    homeUrl: 'https://podcasters.spotify.com/pod/show/przeprogramowani',
    feedUrl: 'https://anchor.fm/s/c72d808/podcast/rss',
    kind: 'podcast-rss',
  },
};

// Bundled fallback cache: verified snapshots retrieved during research
// (see research/NOTES.md in the attempt root). Used when a live fetch fails,
// so a source outage degrades to "stale" instead of breaking pages.
import youtubeCache from '../data/cache/youtube.json';
import opanujaiCache from '../data/cache/opanujai.json';
import przeprogramowaniCache from '../data/cache/przeprogramowani.json';

const CACHES: Record<SourceId, { fetchedAt: string; items: MediaItem[] }> = {
  youtube: youtubeCache as { fetchedAt: string; items: MediaItem[] },
  opanujai: opanujaiCache as { fetchedAt: string; items: MediaItem[] },
  przeprogramowani: przeprogramowaniCache as {
    fetchedAt: string;
    items: MediaItem[];
  },
};

const FETCH_TIMEOUT_MS = 10_000;
const WINDOW_DAYS = 90;
const MAX_LIVE_ITEMS = 6;
const MAX_STALE_ITEMS = 3;

function decodeEntities(value: string): string {
  return value
    .replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, '$1')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#0?39;|&apos;/g, "'")
    .replace(/&amp;/g, '&')
    .replace(/\s+/g, ' ')
    .trim();
}

function firstMatch(block: string, regex: RegExp): string | null {
  const m = block.match(regex);
  return m ? decodeEntities(m[1]) : null;
}

function parseDate(value: string | null): string | null {
  if (!value) return null;
  const d = new Date(value);
  return Number.isNaN(d.getTime()) ? null : d.toISOString();
}

export function parseYoutubeFeed(xml: string): MediaItem[] {
  const entries = xml.match(/<entry>[\s\S]*?<\/entry>/g);
  if (!entries || entries.length === 0) {
    throw new Error('YouTube feed: brak wpisów <entry> — nieprawidłowa odpowiedź');
  }
  return entries.map((entry) => {
    const videoId = firstMatch(entry, /<yt:videoId>([\s\S]*?)<\/yt:videoId>/);
    const title = firstMatch(entry, /<title>([\s\S]*?)<\/title>/);
    const published = firstMatch(entry, /<published>([\s\S]*?)<\/published>/);
    const summary =
      firstMatch(entry, /<media:description>([\s\S]*?)<\/media:description>/) ??
      '';
    if (!videoId || !title) {
      throw new Error('YouTube feed: wpis bez videoId lub tytułu');
    }
    return {
      id: videoId,
      title,
      url: `https://www.youtube.com/watch?v=${videoId}`,
      publishedAt: parseDate(published),
      audioUrl: null,
      videoId,
      summary: summary.slice(0, 240),
    };
  });
}

export function parsePodcastFeed(xml: string): MediaItem[] {
  const items = xml.match(/<item>[\s\S]*?<\/item>/g);
  if (!items || items.length === 0) {
    throw new Error('Feed podcastu: brak elementów <item> — nieprawidłowa odpowiedź');
  }
  return items.map((item) => {
    const title = firstMatch(item, /<title>([\s\S]*?)<\/title>/);
    const link = firstMatch(item, /<link>([\s\S]*?)<\/link>/);
    const pubDate = firstMatch(item, /<pubDate>([\s\S]*?)<\/pubDate>/);
    const enclosure = item.match(/<enclosure[^>]*url="([^"]+)"/);
    const description =
      firstMatch(item, /<description>([\s\S]*?)<\/description>/) ?? '';
    const guid = firstMatch(item, /<guid[^>]*>([\s\S]*?)<\/guid>/);
    if (!title || !link) {
      throw new Error('Feed podcastu: element bez tytułu lub linku');
    }
    return {
      id: guid ?? link,
      title,
      url: link,
      publishedAt: parseDate(pubDate),
      audioUrl: enclosure ? enclosure[1] : null,
      videoId: null,
      summary: description.slice(0, 240),
    };
  });
}

/** Items published within the last `days` days; if none, the newest available ones. */
export function selectRecent(
  items: MediaItem[],
  days = WINDOW_DAYS,
  maxLive = MAX_LIVE_ITEMS,
  maxFallback = MAX_STALE_ITEMS,
  now = Date.now()
): { items: MediaItem[]; withinWindow: boolean } {
  const sorted = [...items].sort((a, b) => {
    const ta = a.publishedAt ? Date.parse(a.publishedAt) : 0;
    const tb = b.publishedAt ? Date.parse(b.publishedAt) : 0;
    return tb - ta;
  });
  const cutoff = now - days * 24 * 60 * 60 * 1000;
  const recent = sorted.filter(
    (i) => i.publishedAt && Date.parse(i.publishedAt) >= cutoff
  );
  if (recent.length > 0) {
    return { items: recent.slice(0, maxLive), withinWindow: true };
  }
  const dated = sorted.filter((i) => i.publishedAt !== null);
  const picked = (dated.length > 0 ? dated : sorted).slice(0, maxFallback);
  return { items: picked, withinWindow: false };
}

declare const __FORCE_SOURCE_FAILURE__: string | undefined;

function forcedFailureSetting(): string {
  // Controlled-failure switch used for resilience testing (P04/P08).
  // Primary channel: build-time define from astro.config.mjs (works in Node and workerd).
  try {
    if (typeof __FORCE_SOURCE_FAILURE__ !== 'undefined' && __FORCE_SOURCE_FAILURE__) {
      return String(__FORCE_SOURCE_FAILURE__).toLowerCase();
    }
  } catch {
    /* define not present */
  }
  try {
    const value = (import.meta as unknown as { env?: Record<string, unknown> }).env
      ?.FORCE_SOURCE_FAILURE;
    if (value) return String(value).toLowerCase();
  } catch {
    /* import.meta.env unavailable */
  }
  try {
    if (typeof process !== 'undefined' && process.env?.FORCE_SOURCE_FAILURE) {
      return String(process.env.FORCE_SOURCE_FAILURE).toLowerCase();
    }
  } catch {
    /* process unavailable */
  }
  return '';
}

function shouldForceFailure(id: SourceId): boolean {
  const value = forcedFailureSetting();
  if (!value) return false;
  return value === 'all' || value.split(',').includes(id);
}

async function fetchFeed(url: string): Promise<string> {
  const response = await fetch(url, {
    signal: AbortSignal.timeout(FETCH_TIMEOUT_MS),
    headers: { 'User-Agent': 'przeprogramowani-pl-site/1.0 (build-time fetch)' },
  });
  if (!response.ok) {
    throw new Error(`HTTP ${response.status} dla ${url}`);
  }
  const text = await response.text();
  if (!text.includes('<')) {
    throw new Error(`Nieprawidłowa odpowiedź (nie-XML) z ${url}`);
  }
  return text;
}

export async function getSource(id: SourceId): Promise<SourceResult> {
  const def = SOURCES[id];
  const cache = CACHES[id];
  const retrievedAt = new Date().toISOString();

  try {
    if (shouldForceFailure(id)) {
      throw new Error(
        `Kontrolowana awaria źródła (FORCE_SOURCE_FAILURE=${forcedFailureSetting()})`
      );
    }
    const xml = await fetchFeed(def.feedUrl);
    const parsed =
      def.kind === 'youtube-rss' ? parseYoutubeFeed(xml) : parsePodcastFeed(xml);
    if (parsed.length === 0) {
      throw new Error('Źródło zwróciło zero elementów');
    }
    const { items, withinWindow } = selectRecent(parsed);
    return {
      sourceId: id,
      sourceLabel: def.label,
      sourceHomeUrl: def.homeUrl,
      feedUrl: def.feedUrl,
      status: 'live',
      fetchedAt: retrievedAt,
      retrievedAt,
      items,
      withinWindow,
    };
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    console.warn(`[sources] ${id}: pobieranie nieudane (${message}) — używam pamięci podręcznej`);
    if (cache && Array.isArray(cache.items) && cache.items.length > 0) {
      const { items, withinWindow } = selectRecent(cache.items as MediaItem[]);
      return {
        sourceId: id,
        sourceLabel: def.label,
        sourceHomeUrl: def.homeUrl,
        feedUrl: def.feedUrl,
        status: 'stale',
        fetchedAt: cache.fetchedAt,
        retrievedAt,
        items,
        withinWindow,
        error: message,
      };
    }
    return {
      sourceId: id,
      sourceLabel: def.label,
      sourceHomeUrl: def.homeUrl,
      feedUrl: def.feedUrl,
      status: 'unavailable',
      fetchedAt: null,
      retrievedAt,
      items: [],
      withinWindow: false,
      error: message,
    };
  }
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

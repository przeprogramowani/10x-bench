import { parseRss, parseAtom, toIsoDate } from './xml';
import type { MediaItem } from './types';

const FETCH_TIMEOUT_MS = 6000;
const USER_AGENT =
  'Mozilla/5.0 (compatible; przeprogramowani-pl-site/1.0; server-side feed fetch)';

async function fetchText(url: string): Promise<string> {
  const response = await fetch(url, {
    signal: AbortSignal.timeout(FETCH_TIMEOUT_MS),
    headers: { 'User-Agent': USER_AGENT, Accept: 'application/rss+xml, application/atom+xml, application/xml, text/xml' },
    redirect: 'follow',
  });
  if (!response.ok) {
    throw new Error(`HTTP ${response.status} dla ${url}`);
  }
  const text = await response.text();
  if (!text || text.length < 100) {
    throw new Error(`Pusta lub nieprawidłowa odpowiedź z ${url}`);
  }
  return text;
}

export async function fetchPodcastItems(sourceName: string, sourceUrl: string): Promise<MediaItem[]> {
  const xml = await fetchText(sourceUrl);
  const { items } = parseRss(xml);
  const normalized: MediaItem[] = items
    .filter((item) => item.title && item.link)
    .map((item) => ({
      id: item.guid || item.link,
      title: item.title,
      url: item.link,
      publishedAt: toIsoDate(item.pubDate),
      audioUrl: item.enclosureUrl,
      videoId: null,
      sourceName,
      sourceUrl,
    }));
  if (normalized.length === 0) {
    throw new Error(`Brak poprawnych elementów w feedzie ${sourceUrl}`);
  }
  return normalized;
}

export async function fetchYouTubeItems(sourceName: string, channelId: string): Promise<MediaItem[]> {
  const sourceUrl = `https://www.youtube.com/feeds/videos.xml?channel_id=${channelId}`;
  const xml = await fetchText(sourceUrl);
  const { entries } = parseAtom(xml);
  const normalized: MediaItem[] = entries
    .filter((entry) => entry.title && entry.videoId)
    .map((entry) => ({
      id: entry.videoId ?? entry.id ?? entry.link,
      title: entry.title,
      url: `https://www.youtube.com/watch?v=${entry.videoId}`,
      publishedAt: toIsoDate(entry.published),
      audioUrl: null,
      videoId: entry.videoId,
      sourceName,
      sourceUrl,
    }));
  if (normalized.length === 0) {
    throw new Error(`Brak poprawnych elementów w feedzie ${sourceUrl}`);
  }
  return normalized;
}

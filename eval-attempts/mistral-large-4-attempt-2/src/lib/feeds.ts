import { XMLParser } from 'fast-xml-parser';

import przeprogramowaniEpisodesFallback from '../data/podcast-przeprogramowani.json';
import opanujAiEpisodesFallback from '../data/podcast-opanuj-ai.json';
import youtubeVideosFallback from '../data/youtube-przeprogramowani.json';
import youtubeOpanujAiVideosFallback from '../data/youtube-opanuj-ai.json';

import { podcastShows, youtubeChannels } from './site';

export interface Episode {
  title: string;
  description: string;
  pubDate: string;
  link: string;
  duration?: string;
  image?: string;
  audioUrl?: string;
}

export interface Video {
  id: string;
  title: string;
  url: string;
  published: string;
  thumbnail: string;
  description: string;
}

const parser = new XMLParser({
  ignoreAttributes: false,
  attributeNamePrefix: '@_',
  trimValues: true,
});

function asArray<T>(value: T | T[] | undefined): T[] {
  if (value === undefined || value === null) return [];
  return Array.isArray(value) ? value : [value];
}

function stripHtml(html: string): string {
  return html
    .replace(/<[^>]*>/g, ' ')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/\s+/g, ' ')
    .trim();
}

export function formatDate(iso: string, locale = 'pl-PL'): string {
  const date = new Date(iso);
  if (Number.isNaN(date.getTime())) return iso;
  return new Intl.DateTimeFormat(locale, {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(date);
}

async function fetchText(url: string): Promise<string | null> {
  try {
    const response = await fetch(url, {
      headers: {
        'user-agent': 'przeprogramowani-website/1.0 (build-time feed fetcher)',
        accept: 'application/rss+xml, application/atom+xml, application/xml, text/xml',
      },
      signal: AbortSignal.timeout(15_000),
    });
    if (!response.ok) {
      console.warn(`[feeds] ${url} -> HTTP ${response.status}`);
      return null;
    }
    return await response.text();
  } catch (error) {
    console.warn(`[feeds] ${url} -> ${(error as Error).message}`);
    return null;
  }
}

function parsePodcastFeed(xml: string): Episode[] {
  const parsed = parser.parse(xml);
  const items = asArray(parsed?.rss?.channel?.item);
  return items.map((item: Record<string, unknown>) => {
    const enclosure = item.enclosure as Record<string, string> | undefined;
    const itunesImage = item['itunes:image'] as Record<string, string> | undefined;
    const image =
      itunesImage?.['@_href'] ??
      (item.image as Record<string, string> | undefined)?.url ??
      undefined;
    return {
      title: String(item.title ?? '').trim(),
      description: stripHtml(String(item.description ?? '')),
      pubDate: String(item.pubDate ?? ''),
      link: String(item.link ?? item.guid ?? ''),
      duration: item['itunes:duration'] ? String(item['itunes:duration']) : undefined,
      image,
      audioUrl: enclosure?.['@_url'],
    };
  });
}

function parseYouTubeFeed(xml: string): Video[] {
  const parsed = parser.parse(xml);
  const entries = asArray(parsed?.feed?.entry);
  return entries.map((entry: Record<string, unknown>) => {
    const videoId = String(entry['yt:videoId'] ?? '');
    const link = entry.link as Record<string, string> | undefined;
    const group = entry['media:group'] as Record<string, unknown> | undefined;
    const thumbnail = group?.['media:thumbnail'] as Record<string, string> | undefined;
    return {
      id: videoId,
      title: String(entry.title ?? '').trim(),
      url: link?.['@_href'] ?? `https://www.youtube.com/watch?v=${videoId}`,
      published: String(entry.published ?? ''),
      thumbnail:
        thumbnail?.['@_url'] ??
        (videoId ? `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg` : ''),
      description: stripHtml(String(group?.['media:description'] ?? '')),
    };
  });
}

async function getPodcastEpisodes(
  feedUrl: string,
  fallback: Episode[],
  limit: number,
): Promise<{ episodes: Episode[]; source: 'live' | 'snapshot' }> {
  const xml = await fetchText(feedUrl);
  if (xml) {
    const episodes = parsePodcastFeed(xml).slice(0, limit);
    if (episodes.length > 0) {
      return { episodes, source: 'live' };
    }
  }
  console.warn(`[feeds] Falling back to bundled snapshot for ${feedUrl}`);
  return { episodes: fallback.slice(0, limit), source: 'snapshot' };
}

async function getYouTubeVideos(
  feedUrl: string,
  fallback: Video[],
  limit: number,
): Promise<{ videos: Video[]; source: 'live' | 'snapshot' }> {
  const xml = await fetchText(feedUrl);
  if (xml) {
    const videos = parseYouTubeFeed(xml).slice(0, limit);
    if (videos.length > 0) {
      return { videos, source: 'live' };
    }
  }
  console.warn(`[feeds] Falling back to bundled snapshot for ${feedUrl}`);
  return { videos: fallback.slice(0, limit), source: 'snapshot' };
}

export async function getAllPodcastEpisodes(limit = 8) {
  const [przeprogramowani, opanujAi] = await Promise.all([
    getPodcastEpisodes(
      podcastShows[0].feedUrl,
      przeprogramowaniEpisodesFallback as Episode[],
      limit,
    ),
    getPodcastEpisodes(
      podcastShows[1].feedUrl,
      opanujAiEpisodesFallback as Episode[],
      limit,
    ),
  ]);
  return {
    przeprogramowani: przeprogramowani.episodes,
    opanujAi: opanujAi.episodes,
    source: przeprogramowani.source === 'live' && opanujAi.source === 'live' ? 'live' : 'snapshot',
  };
}

export async function getLatestVideos(limit = 12) {
  const [main, opanujAi] = await Promise.all([
    getYouTubeVideos(
      youtubeChannels.main.feedUrl,
      youtubeVideosFallback as Video[],
      limit,
    ),
    getYouTubeVideos(
      youtubeChannels.opanujAi.feedUrl,
      youtubeOpanujAiVideosFallback as Video[],
      Math.min(limit, 6),
    ),
  ]);
  return {
    main: main.videos,
    opanujAi: opanujAi.videos,
    source: main.source === 'live' && opanujAi.source === 'live' ? 'live' : 'snapshot',
  };
}

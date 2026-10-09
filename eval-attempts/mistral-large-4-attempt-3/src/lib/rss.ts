import snapshot from '@/data/snapshot.json';
import { podcastShows } from '@/data/site';
import type { Content, Episode, PodcastShow, Video } from './types';

const YT_CHANNEL_ID = 'UCb2Y3vMeD6N4WDt5Acw7Arw'; // youtube.com/@przeprogramowani
const YT_FEED = `https://www.youtube.com/feeds/videos.xml?channel_id=${YT_CHANNEL_ID}`;

const stripHtml = (s: string): string =>
  (s || '').replace(/<[^>]+>/g, ' ').replace(/&[^;]+;/g, ' ').replace(/\s+/g, ' ').trim();

const clean = (s: string | undefined): string =>
  (s || '').replace(/<!\[CDATA\[/g, '').replace(/\]\]>/g, '');

function parseYouTube(xml: string): Video[] {
  const entries = [...xml.matchAll(/<entry>([\s\S]*?)<\/entry>/g)].map((m) => m[1]);
  return entries.map((e) => {
    const id = /<yt:videoId>([^<]*)<\/yt:videoId>/.exec(e)?.[1] ?? '';
    return {
      id,
      title: clean(/<title>([\s\S]*?)<\/title>/.exec(e)?.[1]),
      url: `https://www.youtube.com/watch?v=${id}`,
      published: /<published>([^<]*)<\/published>/.exec(e)?.[1] ?? '',
      description: stripHtml(clean(/<media:description>([\s\S]*?)<\/media:description>/.exec(e)?.[1])).slice(0, 300),
      thumbnail: `https://i3.ytimg.com/vi/${id}/maxresdefault.jpg`,
    };
  });
}

function parsePodcast(xml: string): { cover: string; episodes: Episode[] } {
  const items = [...xml.matchAll(/<item>([\s\S]*?)<\/item>/g)].map((m) => m[1]);
  const cover =
    /<itunes:image[^>]*href="([^"]*)"/.exec(xml)?.[1] ??
    /<image>[\s\S]*?<url>([^<]*)<\/url>/.exec(xml)?.[1] ??
    '';
  const episodes = items.map((it) => {
    const link = /<link>([^<]*)<\/link>/.exec(it)?.[1] ?? '';
    const guid = /<guid[^>]*>([^<]*)<\/guid>/.exec(it)?.[1] ?? link;
    return {
      title: clean(/<title>([\s\S]*?)<\/title>/.exec(it)?.[1]),
      url: link || guid,
      published: /<pubDate>([^<]*)<\/pubDate>/.exec(it)?.[1] ?? '',
      duration: /<itunes:duration>([^<]*)<\/itunes:duration>/.exec(it)?.[1] ?? '',
      description: stripHtml(clean(/<description>([\s\S]*?)<\/description>/.exec(it)?.[1])).slice(0, 400),
    };
  });
  return { cover, episodes };
}

async function fetchText(url: string): Promise<string> {
  const res = await fetch(url, {
    headers: { 'User-Agent': 'Mozilla/5.0 (przeprogramowani.pl build bot)' },
    signal: AbortSignal.timeout(15000),
  });
  if (!res.ok) throw new Error(`HTTP ${res.status} for ${url}`);
  return res.text();
}

function fromSnapshot(): Content {
  const shows: PodcastShow[] = podcastShows.map((meta) => {
    const snap = (snapshot.podcasts as Record<string, { cover: string; episodes: Episode[] }>)[meta.slug];
    return {
      ...meta,
      cover: snap?.cover ?? '',
      episodes: snap?.episodes ?? [],
    };
  });
  return {
    videos: snapshot.youtube.videos as Video[],
    shows,
    source: 'snapshot',
    fetchedAt: snapshot.fetchedAt,
  };
}

async function load(): Promise<Content> {
  try {
    const [ytXml, ...podXmls] = await Promise.all([
      fetchText(YT_FEED),
      ...podcastShows.map((p) => fetchText(p.rss)),
    ]);
    const videos = parseYouTube(ytXml);
    if (videos.length === 0) throw new Error('YouTube feed returned no videos');
    const shows: PodcastShow[] = podcastShows.map((meta, i) => {
      const parsed = parsePodcast(podXmls[i]);
      return { ...meta, cover: parsed.cover, episodes: parsed.episodes };
    });
    return { videos, shows, source: 'live', fetchedAt: new Date().toISOString() };
  } catch (err) {
    console.warn(`[content] Live fetch failed (${(err as Error).message}) — using snapshot from ${snapshot.fetchedAt}`);
    return fromSnapshot();
  }
}

let cache: Promise<Content> | null = null;

/** Dane o filmach YouTube i podcastach — pobierane przy buildzie, z fallbewquem na snapshot. */
export function getContent(): Promise<Content> {
  cache ??= load();
  return cache;
}

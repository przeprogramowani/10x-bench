import { XMLParser } from 'fast-xml-parser';
import {
  fallbackPodcastEpisodes,
  fallbackYouTubeVideos,
  type PodcastEpisode,
  type YouTubeVideo
} from '../data/site';

const parser = new XMLParser({ ignoreAttributes: false, trimValues: true });

const YOUTUBE_FEED_URL =
  'https://www.youtube.com/feeds/videos.xml?channel_id=UCb2Y3vMeD6N4WDt5Acw7Arw';
const PODCAST_RSS_URL = 'https://anchor.fm/s/e2cb03d0/podcast/rss';

function toArray<T>(value: T | T[] | undefined): T[] {
  if (!value) {
    return [];
  }

  return Array.isArray(value) ? value : [value];
}

function extractYoutubeLink(linkNode: Record<string, unknown> | Record<string, unknown>[] | string): string {
  if (typeof linkNode === 'string') {
    return linkNode;
  }

  if (Array.isArray(linkNode)) {
    const alternate = linkNode.find((node) => node?.['@_rel'] === 'alternate');
    return typeof alternate?.['@_href'] === 'string'
      ? (alternate['@_href'] as string)
      : String(linkNode[0]?.['@_href'] ?? '');
  }

  return String(linkNode?.['@_href'] ?? '');
}

export async function getLatestYouTubeVideos(limit = 6): Promise<YouTubeVideo[]> {
  try {
    const response = await fetch(YOUTUBE_FEED_URL, {
      headers: {
        'user-agent': 'PrzeprogramowaniLanding/1.0'
      }
    });

    if (!response.ok) {
      throw new Error(`YouTube feed failed: ${response.status}`);
    }

    const xml = await response.text();
    const data = parser.parse(xml) as {
      feed?: {
        entry?:
          | {
              title?: string;
              link?: Record<string, unknown> | Record<string, unknown>[] | string;
              published?: string;
              'yt:videoId'?: string;
            }
          | {
              title?: string;
              link?: Record<string, unknown> | Record<string, unknown>[] | string;
              published?: string;
              'yt:videoId'?: string;
            }[];
      };
    };

    const entries = toArray(data.feed?.entry)
      .map((entry) => {
        const videoId = entry['yt:videoId'];
        const link = extractYoutubeLink(entry.link ?? '');

        if (!entry.title || !videoId || !entry.published || !link) {
          return null;
        }

        return {
          title: entry.title,
          link,
          published: entry.published,
          videoId
        } satisfies YouTubeVideo;
      })
      .filter((entry): entry is YouTubeVideo => Boolean(entry));

    if (entries.length > 0) {
      return entries.slice(0, limit);
    }
  } catch {
    // Return local fallback below.
  }

  return fallbackYouTubeVideos.slice(0, limit);
}

export async function getLatestPodcastEpisodes(limit = 6): Promise<PodcastEpisode[]> {
  try {
    const response = await fetch(PODCAST_RSS_URL, {
      headers: {
        'user-agent': 'PrzeprogramowaniLanding/1.0'
      }
    });

    if (!response.ok) {
      throw new Error(`Podcast RSS failed: ${response.status}`);
    }

    const xml = await response.text();
    const data = parser.parse(xml) as {
      rss?: {
        channel?: {
          item?:
            | {
                title?: string;
                link?: string;
                pubDate?: string;
                'itunes:duration'?: string;
              }
            | {
                title?: string;
                link?: string;
                pubDate?: string;
                'itunes:duration'?: string;
              }[];
        };
      };
    };

    const items = toArray(data.rss?.channel?.item)
      .map((item) => {
        if (!item.title || !item.link || !item.pubDate) {
          return null;
        }

        return {
          title: item.title,
          link: item.link,
          published: new Date(item.pubDate).toISOString(),
          duration: item['itunes:duration'] ?? 'n/a'
        } satisfies PodcastEpisode;
      })
      .filter((item): item is PodcastEpisode => Boolean(item));

    if (items.length > 0) {
      return items.slice(0, limit);
    }
  } catch {
    // Return local fallback below.
  }

  return fallbackPodcastEpisodes.slice(0, limit);
}

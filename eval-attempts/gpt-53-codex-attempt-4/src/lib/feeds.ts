import {
  fallbackPodcastEpisodes,
  fallbackYoutubeVideos,
  type MediaEntry,
} from "../data/site";

const PODCAST_FEED_URL = "https://anchor.fm/s/c72d808/podcast/rss";
const YOUTUBE_FEED_URL =
  "https://www.youtube.com/feeds/videos.xml?channel_id=UCb2Y3vMeD6N4WDt5Acw7Arw";

function decodeEntities(text: string): string {
  return text
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&#x([0-9a-fA-F]+);/g, (_, hex) => String.fromCodePoint(parseInt(hex, 16)))
    .replace(/&#(\d+);/g, (_, dec) => String.fromCodePoint(parseInt(dec, 10)));
}

function sanitizeText(value: string): string {
  return decodeEntities(value.replace(/<!\[CDATA\[|\]\]>/g, "").trim());
}

function getTagValue(block: string, tagName: string): string | undefined {
  const tagRegex = new RegExp(`<${tagName}>([\\s\\S]*?)<\\/${tagName}>`, "i");
  const match = block.match(tagRegex);
  return match ? sanitizeText(match[1]) : undefined;
}

function getAttrValue(block: string, tagName: string, attrName: string): string | undefined {
  const attrRegex = new RegExp(`<${tagName}[^>]*${attrName}="([^"]+)"`, "i");
  const match = block.match(attrRegex);
  return match ? match[1] : undefined;
}

function toIsoStringOrNow(value?: string): string {
  if (!value) {
    return new Date().toISOString();
  }

  const date = new Date(value);

  if (Number.isNaN(date.getTime())) {
    return new Date().toISOString();
  }

  return date.toISOString();
}

async function fetchText(url: string): Promise<string> {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 7000);

  try {
    const response = await fetch(url, {
      signal: controller.signal,
      headers: {
        "user-agent": "Mozilla/5.0 (compatible; PrzeprogramowaniSiteBot/1.0)",
      },
    });

    if (!response.ok) {
      throw new Error(`Request failed with status ${response.status}`);
    }

    return await response.text();
  } finally {
    clearTimeout(timeout);
  }
}

function parsePodcastFeed(xml: string): MediaEntry[] {
  const items = [...xml.matchAll(/<item>([\s\S]*?)<\/item>/gi)].map((entry) => entry[1]);

  return items
    .map((item) => {
      const title = getTagValue(item, "title");
      const url = getTagValue(item, "link");
      const publishedAt = toIsoStringOrNow(getTagValue(item, "pubDate"));

      if (!title || !url) {
        return null;
      }

      return {
        title,
        url,
        publishedAt,
      } satisfies MediaEntry;
    })
    .filter((item): item is MediaEntry => Boolean(item))
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());
}

function parseYoutubeFeed(xml: string): MediaEntry[] {
  const entries = [...xml.matchAll(/<entry>([\s\S]*?)<\/entry>/gi)].map((entry) => entry[1]);

  return entries
    .map((entry) => {
      const title = getTagValue(entry, "title");
      const url = getAttrValue(entry, "link", "href");
      const publishedAt = toIsoStringOrNow(getTagValue(entry, "published"));

      if (!title || !url || !url.includes("watch?v=")) {
        return null;
      }

      const videoId = new URL(url).searchParams.get("v");

      return {
        title,
        url,
        publishedAt,
        thumbnail: videoId ? `https://i3.ytimg.com/vi/${videoId}/maxresdefault.jpg` : undefined,
      } satisfies MediaEntry;
    })
    .filter((item): item is MediaEntry => Boolean(item))
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());
}

export async function getLatestPodcastEpisodes(limit = 6): Promise<MediaEntry[]> {
  try {
    const xml = await fetchText(PODCAST_FEED_URL);
    const parsed = parsePodcastFeed(xml);

    return parsed.length > 0 ? parsed.slice(0, limit) : fallbackPodcastEpisodes.slice(0, limit);
  } catch {
    return fallbackPodcastEpisodes.slice(0, limit);
  }
}

export async function getLatestYoutubeVideos(limit = 6): Promise<MediaEntry[]> {
  try {
    const xml = await fetchText(YOUTUBE_FEED_URL);
    const parsed = parseYoutubeFeed(xml);

    return parsed.length > 0 ? parsed.slice(0, limit) : fallbackYoutubeVideos.slice(0, limit);
  } catch {
    return fallbackYoutubeVideos.slice(0, limit);
  }
}

import {
  fallbackPodcastEpisodes,
  fallbackYouTubeVideos,
  type PodcastEpisode,
  type YouTubeVideo,
} from "../data/fallback";

const BASE_URL = "https://przeprogramowani.pl";

function decodeEntities(value: string): string {
  return value
    .replaceAll("&amp;", "&")
    .replaceAll("&#38;", "&")
    .replaceAll("&quot;", '"')
    .replaceAll("&#39;", "'")
    .replaceAll("&nbsp;", " ")
    .replaceAll("&lt;", "<")
    .replaceAll("&gt;", ">")
    .trim();
}

function stripTags(value: string): string {
  return decodeEntities(value.replace(/<[^>]+>/g, " ").replace(/\s+/g, " "));
}

function normalizeUrl(url: string): string {
  if (url.startsWith("http")) {
    return url;
  }

  return `${BASE_URL}${url}`;
}

async function fetchHtml(url: string): Promise<string> {
  const response = await fetch(url, {
    headers: {
      "user-agent":
        "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36",
    },
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch ${url}: ${response.status}`);
  }

  return response.text();
}

export async function getLatestYouTubeVideos(limit = 6): Promise<YouTubeVideo[]> {
  try {
    const html = await fetchHtml(`${BASE_URL}/`);
    const blocks = html.match(
      /<a href="https:\/\/www\.youtube\.com\/watch\?v=[^"]+"[\s\S]*?<\/a>/g,
    );

    if (!blocks?.length) {
      return fallbackYouTubeVideos.slice(0, limit);
    }

    const videos: YouTubeVideo[] = [];
    const seen = new Set<string>();

    for (const block of blocks) {
      const hrefMatch = block.match(/href="([^"]+)"/);
      const titleMatch = block.match(/<h3[^>]*>([\s\S]*?)<\/h3>/);
      const altMatch = block.match(/alt="([^"]+)"/);
      const imageMatch = block.match(/<img[^>]*src="([^"]+)"/);

      const url = hrefMatch?.[1];
      const title = titleMatch ? stripTags(titleMatch[1]) : decodeEntities(altMatch?.[1] ?? "");
      const thumbnail = imageMatch?.[1];

      if (!url || !title || !thumbnail || seen.has(url)) {
        continue;
      }

      seen.add(url);
      videos.push({
        url,
        title,
        thumbnail: normalizeUrl(thumbnail),
      });

      if (videos.length >= limit) {
        break;
      }
    }

    return videos.length ? videos : fallbackYouTubeVideos.slice(0, limit);
  } catch {
    return fallbackYouTubeVideos.slice(0, limit);
  }
}

export async function getLatestPodcastEpisodes(limit = 6): Promise<PodcastEpisode[]> {
  try {
    const html = await fetchHtml(`${BASE_URL}/podcast`);
    const blocks = html.match(
      /<a href="https:\/\/podcasters\.spotify\.com\/pod\/show\/[^"]+"[\s\S]*?<\/a>/g,
    );

    if (!blocks?.length) {
      return fallbackPodcastEpisodes.slice(0, limit);
    }

    const episodes: PodcastEpisode[] = [];
    const seen = new Set<string>();

    for (const block of blocks) {
      const hrefMatch = block.match(/href="([^"]+)"/);
      const titleMatch = block.match(/<h3[^>]*>([\s\S]*?)<\/h3>/);
      const imageMatch = block.match(/<img[^>]*src="([^"]+)"/);
      const durationMatch = block.match(/>\s*(\d{2}:\d{2}:\d{2})\s*<\/span>/);
      const descMatch = block.match(/<p class="mt-1[^"]*">([\s\S]*?)<\/p>/);

      const url = hrefMatch?.[1];
      const title = titleMatch ? stripTags(titleMatch[1]) : "";
      const image = imageMatch?.[1];
      const duration = durationMatch?.[1];
      const description = descMatch ? stripTags(descMatch[1]) : undefined;

      if (!url || !title || !image || seen.has(url)) {
        continue;
      }

      seen.add(url);
      episodes.push({
        url,
        title,
        image: normalizeUrl(image),
        duration,
        description,
      });

      if (episodes.length >= limit) {
        break;
      }
    }

    return episodes.length ? episodes : fallbackPodcastEpisodes.slice(0, limit);
  } catch {
    return fallbackPodcastEpisodes.slice(0, limit);
  }
}

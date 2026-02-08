import { XMLParser } from "fast-xml-parser";
import { site } from "../data/site";

export type FeedItem = {
  id: string;
  title: string;
  url: string;
  publishedAt: string;
  description?: string;
  thumbnail?: string;
};

const parser = new XMLParser({
  ignoreAttributes: false,
  attributeNamePrefix: "@_",
  removeNSPrefix: false,
  trimValues: true
});

function toArray<T>(value: T | T[] | undefined): T[] {
  if (!value) {
    return [];
  }

  return Array.isArray(value) ? value : [value];
}

function stripHtml(input?: string): string {
  if (!input) {
    return "";
  }

  return input.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();
}

function pickLink(link: unknown): string {
  const links = toArray(link as { "@_href"?: string; "@_rel"?: string } | undefined);
  return (
    links.find((item) => item?.["@_rel"] === "alternate")?.["@_href"] ??
    links[0]?.["@_href"] ??
    ""
  );
}

export async function getPodcastEpisodes(limit = 6): Promise<FeedItem[]> {
  try {
    const response = await fetch(site.social.podcastRss, {
      headers: { "user-agent": "przeprogramowani-site/1.0" }
    });

    if (!response.ok) {
      return [];
    }

    const xml = await response.text();
    const json = parser.parse(xml) as {
      rss?: { channel?: { item?: Array<Record<string, string>> | Record<string, string> } };
    };

    const items = toArray(json.rss?.channel?.item)
      .slice(0, limit)
      .map((item) => ({
        id: item.guid ?? item.link ?? item.title ?? crypto.randomUUID(),
        title: item.title ?? "Nowy odcinek",
        url: item.link ?? site.social.spotify,
        publishedAt: item.pubDate ?? new Date().toISOString(),
        description: stripHtml(item.description)
      }));

    return items;
  } catch {
    return [];
  }
}

export async function getYoutubeVideos(limit = 6): Promise<FeedItem[]> {
  try {
    const response = await fetch(site.social.youtubeRss, {
      headers: { "user-agent": "przeprogramowani-site/1.0" }
    });

    if (!response.ok) {
      return [];
    }

    const xml = await response.text();
    const json = parser.parse(xml) as {
      feed?: {
        entry?:
          | Array<Record<string, unknown>>
          | Record<string, unknown>;
      };
    };

    const entries = toArray(json.feed?.entry)
      .slice(0, limit)
      .map((entry) => {
        const mediaGroup = entry["media:group"] as
          | { "media:description"?: string; "media:thumbnail"?: { "@_url"?: string } | { "@_url"?: string }[] }
          | undefined;

        const thumbnails = toArray(mediaGroup?.["media:thumbnail"]);

        return {
          id: String(entry["yt:videoId"] ?? entry["id"] ?? crypto.randomUUID()),
          title: String(entry["title"] ?? "Nowy film"),
          url: pickLink(entry["link"]),
          publishedAt: String(entry["published"] ?? new Date().toISOString()),
          description: stripHtml(mediaGroup?.["media:description"]),
          thumbnail: thumbnails[0]?.["@_url"]
        };
      });

    return entries;
  } catch {
    return [];
  }
}

export function formatPolishDate(date: string): string {
  try {
    return new Intl.DateTimeFormat("pl-PL", {
      day: "2-digit",
      month: "long",
      year: "numeric"
    }).format(new Date(date));
  } catch {
    return date;
  }
}

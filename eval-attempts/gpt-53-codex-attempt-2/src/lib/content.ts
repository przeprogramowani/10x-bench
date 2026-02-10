import { XMLParser } from "fast-xml-parser";
import type { Founder, MediaEntry, OrganizationInfo, SocialLink } from "./types";

const SOURCES = {
  homepage: "https://przeprogramowani.pl",
  about: "https://przeprogramowani.pl/o-nas",
  podcast: "https://podcasters.spotify.com/pod/show/przeprogramowani",
  youtubeFeed: "https://www.youtube.com/feeds/videos.xml?channel_id=UCb2Y3vMeD6N4WDt5Acw7Arw"
} as const;

const REQUEST_HEADERS = {
  "accept-language": "pl-PL,pl;q=0.9,en;q=0.7"
};

const FOUNDER_DETAILS: Record<string, Omit<Founder, "name">> = {
  "Przemek Smyrdek": {
    role: "Co-founder",
    bio: "Autor programow edukacyjnych, kursow i podcastow. Lead Engineer i Manager w DAZN i Cabify. Full-stack developer (.NET/C#, Java, Node.js, Angular, TypeScript).",
    linkedin: "https://www.linkedin.com/in/psmyrdek/"
  },
  "Marcin Czarkowski": {
    role: "Co-founder",
    bio: "Lead techniczny platformy frontendowej w SmartRecruiters. Tworca Opanuj AI Podcast i specjalista TypeScript, React i Node.js.",
    linkedin: "https://www.linkedin.com/in/mkczarkowski/"
  }
};

const DEFAULT_ORGANIZATION: OrganizationInfo = {
  name: "Przeprogramowani",
  tagline: "Szersze spojrzenie na programowanie",
  description:
    "Kursy i szkolenia dla programistow - JavaScript, TypeScript, AI i praktyczne podejscie do nowoczesnego software developmentu.",
  foundingDate: "2017",
  founders: [
    {
      name: "Przemek Smyrdek",
      ...FOUNDER_DETAILS["Przemek Smyrdek"]
    },
    {
      name: "Marcin Czarkowski",
      ...FOUNDER_DETAILS["Marcin Czarkowski"]
    }
  ],
  socials: [
    { label: "YouTube", url: "https://www.youtube.com/c/przeprogramowani" },
    { label: "Podcast", url: "https://open.spotify.com/show/3yVvOAXSYq6sQB02w4A4wo" },
    { label: "Instagram", url: "https://www.instagram.com/przeprogramowani" },
    { label: "Facebook", url: "https://www.facebook.com/przeprogramowani" }
  ],
  contactEmail: "kontakt@przeprogramowani.pl"
};

const DEFAULT_YOUTUBE: MediaEntry[] = [
  {
    id: "KAJTsQbqBow",
    title: "Claude Code + GLM-4.7 - Programowanie z darmowym AI wreszcie mozliwe?",
    url: "https://www.youtube.com/watch?v=KAJTsQbqBow",
    description: "Najnowsze materialy o AI i programowaniu.",
    publishedAt: "2026-02-02T18:00:06+00:00",
    thumbnail: "https://i3.ytimg.com/vi/KAJTsQbqBow/maxresdefault.jpg",
    source: "youtube"
  },
  {
    id: "uwi39C2O8NI",
    title: "5 technik, ktore naprawily moj workflow programowania z AI",
    url: "https://www.youtube.com/watch?v=uwi39C2O8NI",
    description: "Praktyczne podejscie do codziennej pracy developera.",
    publishedAt: "2026-01-19T18:00:00+00:00",
    thumbnail: "https://i3.ytimg.com/vi/uwi39C2O8NI/maxresdefault.jpg",
    source: "youtube"
  }
];

const DEFAULT_PODCAST: MediaEntry[] = [
  {
    id: "e38lmlo",
    title: "Programista vs. Angielski: Od strachu do sukcesu",
    url: "https://open.spotify.com/show/3yVvOAXSYq6sQB02w4A4wo",
    description: "Rozmowy o rozwoju kariery i nowoczesnym programowaniu.",
    publishedAt: "2025-09-25T04:00:00.000Z",
    source: "podcast"
  },
  {
    id: "e380adn",
    title: "O dojrzewaniu zawodowym programisty",
    url: "https://open.spotify.com/show/3yVvOAXSYq6sQB02w4A4wo",
    description: "Praktyczne rozmowy i techniczne case study.",
    publishedAt: "2025-09-10T04:00:00.000Z",
    source: "podcast"
  }
];

function decodeEntities(input: string): string {
  return input
    .replaceAll("&amp;", "&")
    .replaceAll("&quot;", '"')
    .replaceAll("&#39;", "'")
    .replaceAll("&lt;", "<")
    .replaceAll("&gt;", ">")
    .replaceAll("&#x27;", "'");
}

function normalizeText(input: string): string {
  return decodeEntities(input.replace(/<[^>]*>/g, " ").replace(/\s+/g, " ")).trim();
}

function toArray<T>(input: T | T[] | undefined | null): T[] {
  if (!input) {
    return [];
  }

  return Array.isArray(input) ? input : [input];
}

async function fetchText(url: string): Promise<string> {
  const response = await fetch(url, {
    headers: REQUEST_HEADERS,
    redirect: "follow"
  });

  if (!response.ok) {
    throw new Error(`Request failed for ${url} (${response.status})`);
  }

  return response.text();
}

function parseJsonLd(html: string): unknown[] {
  const results: unknown[] = [];
  const scriptRegex = /<script type="application\/ld\+json">([\s\S]*?)<\/script>/gi;

  for (const match of html.matchAll(scriptRegex)) {
    const content = match[1]?.trim();

    if (!content) {
      continue;
    }

    try {
      const parsed = JSON.parse(content);
      if (Array.isArray(parsed)) {
        results.push(...parsed);
      } else {
        results.push(parsed);
      }
    } catch {
      // Skip invalid JSON-LD payloads
    }
  }

  return results;
}

function resolveFounder(founder: unknown): Founder | null {
  if (!founder || typeof founder !== "object") {
    return null;
  }

  const name = (founder as { name?: string }).name;
  if (!name) {
    return null;
  }

  const details = FOUNDER_DETAILS[name] ?? {
    role: "Co-founder",
    bio: "Wspoltworca materialow edukacyjnych i kursow dla developerow.",
    linkedin: "https://przeprogramowani.pl/o-nas"
  };

  return {
    name,
    ...details
  };
}

function resolveSocials(urls: unknown): SocialLink[] {
  const sourceUrls = toArray(urls).filter((entry): entry is string => typeof entry === "string");
  return sourceUrls.map((url) => {
    if (url.includes("youtube")) {
      return { label: "YouTube", url };
    }
    if (url.includes("spotify")) {
      return { label: "Podcast", url };
    }
    if (url.includes("instagram")) {
      return { label: "Instagram", url };
    }
    if (url.includes("facebook")) {
      return { label: "Facebook", url };
    }
    if (url.includes("substack")) {
      return { label: "Newsletter", url };
    }

    return { label: "Social", url };
  });
}

function resolveContactEmail(contactPoint: unknown): string | null {
  const entries = toArray(contactPoint).filter((entry): entry is Record<string, unknown> =>
    Boolean(entry && typeof entry === "object")
  );

  for (const entry of entries) {
    if (typeof entry.email === "string" && entry.email.length > 3) {
      return entry.email;
    }
  }

  return null;
}

function getWindowState(html: string): Record<string, unknown> | null {
  const marker = "window.__STATE__ = ";
  const startIndex = html.indexOf(marker);
  if (startIndex < 0) {
    return null;
  }

  const payload = html.slice(startIndex + marker.length);
  const endIndex = payload.indexOf(";</script>");
  if (endIndex < 0) {
    return null;
  }

  try {
    return JSON.parse(payload.slice(0, endIndex)) as Record<string, unknown>;
  } catch {
    return null;
  }
}

function formatDurationMs(value: unknown): string | undefined {
  if (typeof value !== "number" || Number.isNaN(value) || value <= 0) {
    return undefined;
  }

  const totalSeconds = Math.floor(value / 1000);
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  if (hours > 0) {
    return `${hours}h ${String(minutes).padStart(2, "0")}m`;
  }

  return `${minutes}m ${String(seconds).padStart(2, "0")}s`;
}

function extractOgImage(html: string): string | undefined {
  const match = html.match(/<meta property="og:image" content="([^"]+)"/i);
  return match?.[1];
}

export async function getOrganizationInfo(): Promise<OrganizationInfo> {
  try {
    const homepageHtml = await fetchText(SOURCES.homepage);
    const jsonLd = parseJsonLd(homepageHtml);

    const organization = jsonLd.find((entry) => {
      if (!entry || typeof entry !== "object") {
        return false;
      }

      const typeValue = (entry as { ["@type"]?: unknown })["@type"];
      if (Array.isArray(typeValue)) {
        return typeValue.includes("Organization");
      }

      return typeValue === "Organization";
    }) as
      | {
          name?: string;
          description?: string;
          foundingDate?: string;
          founders?: unknown;
          sameAs?: unknown;
          contactPoint?: unknown;
        }
      | undefined;

    if (!organization) {
      return DEFAULT_ORGANIZATION;
    }

    const founders = toArray(organization.founders)
      .map(resolveFounder)
      .filter((entry): entry is Founder => Boolean(entry));

    const socials = resolveSocials(organization.sameAs);

    return {
      name: organization.name ?? DEFAULT_ORGANIZATION.name,
      tagline: "Szersze spojrzenie na programowanie",
      description: organization.description ?? DEFAULT_ORGANIZATION.description,
      foundingDate: organization.foundingDate ?? DEFAULT_ORGANIZATION.foundingDate,
      founders: founders.length > 0 ? founders : DEFAULT_ORGANIZATION.founders,
      socials: socials.length > 0 ? socials : DEFAULT_ORGANIZATION.socials,
      contactEmail: resolveContactEmail(organization.contactPoint) ?? DEFAULT_ORGANIZATION.contactEmail
    };
  } catch {
    return DEFAULT_ORGANIZATION;
  }
}

export async function getPodcastEpisodes(limit = 8): Promise<MediaEntry[]> {
  try {
    const html = await fetchText(SOURCES.podcast);
    const state = getWindowState(html);

    const episodesRaw =
      ((state?.episodePreview as { episodes?: unknown[] } | undefined)?.episodes as unknown[] | undefined) ?? [];

    const cover = extractOgImage(html);

    const episodes = episodesRaw
      .map((entry): MediaEntry | null => {
        if (!entry || typeof entry !== "object") {
          return null;
        }

        const record = entry as {
          episodeId?: string;
          podcastEpisodeUuid?: string;
          title?: string;
          spotifyUrl?: string;
          shareLinkPath?: string;
          descriptionPreview?: string;
          description?: string;
          publishOn?: string;
          created?: string;
          duration?: number;
        };

        const title = record.title ? normalizeText(record.title) : "";
        if (!title) {
          return null;
        }

        const url =
          record.spotifyUrl ??
          (record.shareLinkPath ? `https://podcasters.spotify.com${record.shareLinkPath}` : DEFAULT_ORGANIZATION.socials[1]?.url);

        if (!url) {
          return null;
        }

        return {
          id: record.episodeId ?? record.podcastEpisodeUuid ?? title,
          title,
          url,
          description: normalizeText(record.descriptionPreview ?? record.description ?? "Posluchaj najnowszego odcinka."),
          publishedAt: record.publishOn ?? record.created ?? new Date().toISOString(),
          thumbnail: cover,
          duration: formatDurationMs(record.duration),
          source: "podcast"
        };
      })
      .filter((entry): entry is MediaEntry => Boolean(entry))
      .slice(0, limit);

    return episodes.length > 0 ? episodes : DEFAULT_PODCAST.slice(0, limit);
  } catch {
    return DEFAULT_PODCAST.slice(0, limit);
  }
}

function resolveYoutubeLink(linkNode: unknown, fallbackVideoId: string): string {
  const links = toArray(linkNode).filter((entry): entry is Record<string, unknown> =>
    Boolean(entry && typeof entry === "object")
  );

  for (const link of links) {
    if (typeof link.href === "string" && link.href.includes("youtube.com/watch")) {
      return link.href;
    }
  }

  return `https://www.youtube.com/watch?v=${fallbackVideoId}`;
}

export async function getYoutubeVideos(limit = 8): Promise<MediaEntry[]> {
  try {
    const xml = await fetchText(SOURCES.youtubeFeed);
    const parser = new XMLParser({
      ignoreAttributes: false,
      removeNSPrefix: false,
      attributeNamePrefix: ""
    });

    const parsed = parser.parse(xml) as {
      feed?: {
        entry?:
          | {
              [key: string]: unknown;
            }
          | Array<{
              [key: string]: unknown;
            }>;
      };
    };

    const entries = toArray(parsed.feed?.entry);

    const videos = entries
      .map((entry): MediaEntry | null => {
        const videoId = typeof entry["yt:videoId"] === "string" ? entry["yt:videoId"] : "";
        if (!videoId) {
          return null;
        }

        const mediaGroup = (entry["media:group"] ?? {}) as Record<string, unknown>;
        const thumbnailNode = mediaGroup["media:thumbnail"] as { url?: string } | Array<{ url?: string }> | undefined;
        const thumbnail = Array.isArray(thumbnailNode) ? thumbnailNode[0]?.url : thumbnailNode?.url;

        return {
          id: videoId,
          title:
            typeof entry.title === "string"
              ? normalizeText(entry.title)
              : "Nowy material na kanale Przeprogramowani",
          url: resolveYoutubeLink(entry.link, videoId),
          description:
            typeof mediaGroup["media:description"] === "string"
              ? normalizeText(mediaGroup["media:description"])
              : "Najnowszy material wideo na kanale Przeprogramowani.",
          publishedAt:
            typeof entry.published === "string" ? entry.published : new Date().toISOString(),
          thumbnail: thumbnail ?? `https://i3.ytimg.com/vi/${videoId}/maxresdefault.jpg`,
          source: "youtube"
        };
      })
      .filter((entry): entry is MediaEntry => Boolean(entry))
      .slice(0, limit);

    return videos.length > 0 ? videos : DEFAULT_YOUTUBE.slice(0, limit);
  } catch {
    return DEFAULT_YOUTUBE.slice(0, limit);
  }
}

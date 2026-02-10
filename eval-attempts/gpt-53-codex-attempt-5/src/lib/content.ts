import { XMLParser } from "fast-xml-parser";

export interface PodcastEpisode {
  title: string;
  description: string;
  duration: string;
  show: string;
  image: string;
  url: string;
}

export interface YouTubeVideo {
  id: string;
  title: string;
  url: string;
  thumbnail: string;
  publishedAt: string;
}

export interface Course {
  name: string;
  shortDescription: string;
  details: string[];
  cta: string;
  href: string;
  accent: string;
}

export interface Founder {
  name: string;
  role: string;
  bio: string;
  linkedin: string;
}

const YOUTUBE_FEED_URL =
  "https://www.youtube.com/feeds/videos.xml?channel_id=UCb2Y3vMeD6N4WDt5Acw7Arw";
const PODCAST_PAGE_URL = "https://przeprogramowani.pl/podcast";

const PODCAST_CARD_REGEX =
  /<a href="(https:\/\/podcasters\.spotify\.com\/pod\/show\/[^"\s]+)"[\s\S]*?<\/a>/g;

const YOUTUBE_FALLBACK: YouTubeVideo[] = [
  {
    id: "_kQHwE6zAbM",
    title: "Agent Skills - hype vs rzeczywistosc. Szczera analiza.",
    url: "https://www.youtube.com/watch?v=_kQHwE6zAbM",
    thumbnail: "https://i4.ytimg.com/vi/_kQHwE6zAbM/hqdefault.jpg",
    publishedAt: "2026-02-09T18:00:06+00:00"
  },
  {
    id: "KAJTsQbqBow",
    title: "Claude Code + GLM-4.7 - Programowanie z darmowym AI wreszcie mozliwe?",
    url: "https://www.youtube.com/watch?v=KAJTsQbqBow",
    thumbnail: "https://i4.ytimg.com/vi/KAJTsQbqBow/hqdefault.jpg",
    publishedAt: "2026-02-02T18:00:06+00:00"
  },
  {
    id: "uwi39C2O8NI",
    title: "5 technik, ktore naprawily moj workflow programowania z AI",
    url: "https://www.youtube.com/watch?v=uwi39C2O8NI",
    thumbnail: "https://i2.ytimg.com/vi/uwi39C2O8NI/hqdefault.jpg",
    publishedAt: "2026-01-19T18:00:00+00:00"
  }
];

const PODCAST_FALLBACK: PodcastEpisode[] = [
  {
    title:
      "Programista vs. Angielski: Od strachu do sukcesu, Wiktoria Sitko | Przeprogramowani ft. Gosc",
    description:
      "Rozmowa o barierach jezykowych programistow i skutecznej nauce angielskiego w branzy IT.",
    duration: "00:33:45",
    show: "Przeprogramowani Podcast",
    image:
      "https://d3t3ozftmdmh3i.cloudfront.net/staging/podcast_uploaded_nologo/1988530/1988530-1700599022827-301b808b3e021.jpg",
    url: "https://podcasters.spotify.com/pod/show/przeprogramowani/episodes/Programista-vs--Angielski-Od-strachu-do-sukcesu--Wiktoria-Sitko--Przeprogramowani-ft--Go-e38lmlo"
  },
  {
    title:
      "O dojrzewaniu zawodowym programisty, Wojciech Trawinski | Przeprogramowani ft. Gosc",
    description:
      "Jak przejsc od poczatkujacego entuzjasty do dojrzalego specjalisty i lidera technicznego.",
    duration: "00:45:56",
    show: "Przeprogramowani Podcast",
    image:
      "https://d3t3ozftmdmh3i.cloudfront.net/staging/podcast_uploaded_nologo/1988530/1988530-1700599022827-301b808b3e021.jpg",
    url: "https://podcasters.spotify.com/pod/show/przeprogramowani/episodes/O-dojrzewaniu-zawodowym-programisty--Wojciech-Trawiski--Przeprogramowani-ft--Go-e380adn"
  },
  {
    title:
      "Doktor AI nadchodzi - ChatGPT Health vs Google MedGemma, konstytucja Anthropic i GLM-4.7",
    description:
      "Comiesieczne podsumowanie wydarzen AI i praktyczne spojrzenie na ich znaczenie dla developerow.",
    duration: "01:23:04",
    show: "Opanuj.AI Podcast",
    image:
      "https://d3t3ozftmdmh3i.cloudfront.net/production/podcast_uploaded_nologo/37949556/37949556-1685638211267-077987255082e.jpg",
    url: "https://podcasters.spotify.com/pod/show/opanujai/episodes/Doktor-AI-nadchodzi---ChatGPT-Health-vs-Google-MedGemma--konstytucja-Anthropic-i-GLM-4-7--KIMI-K2-5-z-Chin-e3eg2n4"
  }
];

export const ABOUT_TEXT = {
  kicker: "O nas",
  title: "Laczymy swiat programowania, biznesu i rozwoju.",
  intro:
    "Przeprogramowani to polska platforma edukacyjna tworzona przez aktywnych praktykow IT od 2017 roku. Wspieramy developerow materialami, kursami i podcastami, ktore pomagaja budowac kariere w nowoczesnym software development.",
  mission:
    "Nasza misja: dawac szersze spojrzenie na programowanie - od kodu i architektury po komunikacje, produkty i prace z AI."
};

export const FOUNDERS: Founder[] = [
  {
    name: "Przemek Smyrdek",
    role: "Co-founder, Przeprogramowani",
    bio: "Autor programow edukacyjnych i kursow. Lead Engineer i Manager m.in. w DAZN i Cabify. Tworzy materialy o full-stack development i pracy zespolowej.",
    linkedin: "https://www.linkedin.com/in/psmyrdek/"
  },
  {
    name: "Marcin Czarkowski",
    role: "Co-founder, Przeprogramowani",
    bio: "Lead techniczny i ekspert frontend. Specjalizuje sie w TypeScript, React i Node.js. Wspoltworca tresci edukacyjnych oraz podcastow technologicznych.",
    linkedin: "https://www.linkedin.com/in/mkczarkowski/"
  }
];

export const COURSES: Course[] = [
  {
    name: "Opanuj Frontend: AI Edition",
    shortDescription: "Kluczowa wiedza nowoczesnego frontend developera.",
    details: [
      "Praktyczny frontend z AI i nowoczesnym workflow.",
      "Nacisk na architekture, jakosc i produktywnosc.",
      "Program stworzony pod realia pracy zespolowej."
    ],
    cta: "Sprawdz program",
    href: "https://opanujfrontend.pl",
    accent: "from-cyan-400/30 to-sky-700/20"
  },
  {
    name: "Opanuj TypeScript",
    shortDescription: "TypeScript 5 i React 19 w praktyce produkcyjnej.",
    details: [
      "Bezpieczne API typow i skalowalny kod.",
      "Solidne wzorce dla zespolow frontendowych.",
      "Praktyczne techniki wykorzystywane w projektach."
    ],
    cta: "Zobacz kurs",
    href: "https://opanujtypescript.pl",
    accent: "from-blue-500/30 to-indigo-700/20"
  },
  {
    name: "10xDevs 3.0",
    shortDescription: "Programowanie z Generative AI od strategii po produkcje.",
    details: [
      "Kompletny workflow AI-assisted development.",
      "Praca na narzedziach i scenariuszach z rynku.",
      "Techniki przyspieszajace development bez utraty jakosci."
    ],
    cta: "Dolacz do 10xDevs",
    href: "https://10xdevs.pl",
    accent: "from-orange-400/30 to-amber-700/20"
  }
];

function normalizeArray<T>(value: T | T[] | undefined): T[] {
  if (!value) {
    return [];
  }

  return Array.isArray(value) ? value : [value];
}

function decodeEntities(value: string): string {
  return value
    .replaceAll("&amp;", "&")
    .replaceAll("&#38;", "&")
    .replaceAll("&quot;", '"')
    .replaceAll("&#39;", "'")
    .replaceAll("&nbsp;", " ")
    .replaceAll("&lt;", "<")
    .replaceAll("&gt;", ">")
    .replace(/&#(\d+);/g, (_, dec) => String.fromCharCode(Number(dec)));
}

function cleanText(value: string): string {
  return decodeEntities(value.replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim());
}

function parsePodcastCard(cardHtml: string, href: string): PodcastEpisode | null {
  const titleMatch = cardHtml.match(/<h3[^>]*>([\s\S]*?)<\/h3>/);
  if (!titleMatch) {
    return null;
  }

  const descriptionMatch = cardHtml.match(/<p[^>]*>([\s\S]*?)<\/p>/);
  const durationMatch = cardHtml.match(/<span[^>]*>\s*(\d{2}:\d{2}:\d{2})\s*<\/span>/);
  const imageMatch = cardHtml.match(/<img src="([^"]+)"/);

  return {
    title: cleanText(titleMatch[1]),
    description: cleanText(descriptionMatch?.[1] ?? ""),
    duration: durationMatch?.[1] ?? "00:00:00",
    show: href.includes("/opanujai/") ? "Opanuj.AI Podcast" : "Przeprogramowani Podcast",
    image: imageMatch?.[1] ?? "https://przeprogramowani.pl/img/page-cover.jpg",
    url: href
  };
}

async function fetchText(url: string): Promise<string> {
  const response = await fetch(url, {
    headers: {
      accept: "text/html,application/xml;q=0.9,*/*;q=0.8"
    }
  });

  if (!response.ok) {
    throw new Error(`Fetch failed: ${url}, status: ${response.status}`);
  }

  return response.text();
}

export async function getLatestYouTubeVideos(limit = 8): Promise<YouTubeVideo[]> {
  try {
    const xml = await fetchText(YOUTUBE_FEED_URL);
    const parser = new XMLParser({ ignoreAttributes: false });
    const data = parser.parse(xml) as {
      feed?: {
        entry?: Array<Record<string, unknown>> | Record<string, unknown>;
      };
    };

    const entries = normalizeArray(data.feed?.entry);

    const videos = entries
      .map((entry) => {
        const videoId = String(entry["yt:videoId"] ?? "");
        if (!videoId) {
          return null;
        }

        const mediaGroup = (entry["media:group"] ?? {}) as Record<string, unknown>;
        const thumbnails = normalizeArray(
          mediaGroup["media:thumbnail"] as Record<string, unknown> | Array<Record<string, unknown>>
        );
        const thumbnail =
          String(thumbnails[0]?.["@_url"] ?? "") ||
          `https://i3.ytimg.com/vi/${videoId}/hqdefault.jpg`;

        return {
          id: videoId,
          title: String(entry.title ?? "Nowy film"),
          url: `https://www.youtube.com/watch?v=${videoId}`,
          thumbnail,
          publishedAt: String(entry.published ?? new Date().toISOString())
        } satisfies YouTubeVideo;
      })
      .filter((item): item is YouTubeVideo => Boolean(item))
      .slice(0, limit);

    if (!videos.length) {
      throw new Error("YouTube feed empty");
    }

    return videos;
  } catch (error) {
    console.warn("YouTube fetch fallback:", error);
    return YOUTUBE_FALLBACK.slice(0, limit);
  }
}

export async function getLatestPodcastEpisodes(limit = 8): Promise<PodcastEpisode[]> {
  try {
    const html = await fetchText(PODCAST_PAGE_URL);
    const parsed: PodcastEpisode[] = [];

    for (const match of html.matchAll(PODCAST_CARD_REGEX)) {
      const href = match[1];
      const cardHtml = match[0];
      const episode = parsePodcastCard(cardHtml, href);
      if (episode) {
        parsed.push(episode);
      }
    }

    const deduped = Array.from(new Map(parsed.map((item) => [item.url, item])).values());
    const main = deduped.filter((item) => item.show === "Przeprogramowani Podcast");
    const ai = deduped.filter((item) => item.show === "Opanuj.AI Podcast");
    const ordered = [...main, ...ai];

    if (!ordered.length) {
      throw new Error("Podcast feed empty");
    }

    return ordered.slice(0, limit);
  } catch (error) {
    console.warn("Podcast fetch fallback:", error);
    return PODCAST_FALLBACK.slice(0, limit);
  }
}

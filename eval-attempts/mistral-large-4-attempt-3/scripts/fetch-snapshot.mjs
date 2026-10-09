// Pobiera aktualne dane z kanałów YouTube i podcastów (RSS) i zapisuje snapshot JSON.
// Uruchomienie: node scripts/fetch-snapshot.mjs
// Wynik: src/data/snapshot.json — używany jako fallback przy buildzie offline.
import { mkdirSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');

const YT_CHANNEL_ID = 'UCb2Y3vMeD6N4WDt5Acw7Arw'; // youtube.com/@przeprogramowani
const YT_FEED = `https://www.youtube.com/feeds/videos.xml?channel_id=${YT_CHANNEL_ID}`;
const YT_CHANNEL_URL = 'https://www.youtube.com/@przeprogramowani';

const PODCASTS = [
  {
    slug: 'przeprogramowani',
    name: 'Przeprogramowani ft. Gość',
    tagline: 'Rozmowy dla głodnych wiedzy',
    listeners: '3800+ słuchaczy',
    rss: 'https://anchor.fm/s/c72d808/podcast/rss',
    spotify: 'https://open.spotify.com/show/4qHUZJpeBK8Ij9e2wTVm2o',
    apple: 'https://podcasts.apple.com/pl/podcast/przeprogramowani/id1508387250',
  },
  {
    slug: 'opanuj-ai',
    name: 'Opanuj.AI Podcast',
    tagline: 'Comiesięczne podsumowanie najważniejszych wydarzeń ze świata AI',
    listeners: '4000+ słuchaczy',
    rss: 'https://anchor.fm/s/e2cb03d0/podcast/rss',
    spotify: 'https://open.spotify.com/show/5wCrpdlZkaA6ISlGvjzNbl',
    apple: 'https://podcasts.apple.com/pl/podcast/opanuj-ai/id1687514793',
  },
];

const stripHtml = (s) => (s || '').replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
const clean = (s) => {
  if (!s) return '';
  let out = s.replace(/<!\[CDATA\[/g, '').replace(/\]\]>/g, '');
  return out;
};

function parseYouTube(xml) {
  const entries = [...xml.matchAll(/<entry>([\s\S]*?)<\/entry>/g)].map((m) => m[1]);
  return entries.map((e) => {
    const videoId = /<yt:videoId>([^<]*)<\/yt:videoId>/.exec(e)?.[1] ?? '';
    const title = clean(/<title>([\s\S]*?)<\/title>/.exec(e)?.[1]);
    const published = /<published>([^<]*)<\/published>/.exec(e)?.[1] ?? '';
    const desc = stripHtml(clean(/<media:description>([\s\S]*?)<\/media:description>/.exec(e)?.[1]));
    return {
      id: videoId,
      title,
      url: `https://www.youtube.com/watch?v=${videoId}`,
      published,
      description: desc.slice(0, 300),
      thumbnail: `https://i3.ytimg.com/vi/${videoId}/maxresdefault.jpg`,
    };
  });
}

function parsePodcast(xml) {
  const items = [...xml.matchAll(/<item>([\s\S]*?)<\/item>/g)].map((m) => m[1]);
  const cover =
    /<itunes:image[^>]*href="([^"]*)"/.exec(xml)?.[1] ??
    /<image>[\s\S]*?<url>([^<]*)<\/url>/.exec(xml)?.[1] ??
    '';
  return {
    cover,
    episodes: items.map((it) => {
      const title = clean(/<title>([\s\S]*?)<\/title>/.exec(it)?.[1]);
      const pubDate = /<pubDate>([^<]*)<\/pubDate>/.exec(it)?.[1] ?? '';
      const duration = /<itunes:duration>([^<]*)<\/itunes:duration>/.exec(it)?.[1] ?? '';
      const link = /<link>([^<]*)<\/link>/.exec(it)?.[1] ?? '';
      const guid = /<guid[^>]*>([^<]*)<\/guid>/.exec(it)?.[1] ?? link;
      const desc = stripHtml(clean(/<description>([\s\S]*?)<\/description>/.exec(it)?.[1]));
      return { title, url: link || guid, published: pubDate, duration, description: desc.slice(0, 400) };
    }),
  };
}

async function fetchText(url) {
  const res = await fetch(url, { headers: { 'User-Agent': 'Mozilla/5.0 (przeprogramowani.pl snapshot bot)' } });
  if (!res.ok) throw new Error(`HTTP ${res.status} for ${url}`);
  return res.text();
}

const snapshot = {
  fetchedAt: new Date().toISOString(),
  youtube: { channelUrl: YT_CHANNEL_URL, videos: [] },
  podcasts: {},
};

try {
  snapshot.youtube.videos = parseYouTube(await fetchText(YT_FEED));
  console.log(`YouTube: ${snapshot.youtube.videos.length} filmów`);
} catch (err) {
  console.error('YouTube feed error:', err.message);
}

for (const p of PODCASTS) {
  try {
    const parsed = parsePodcast(await fetchText(p.rss));
    snapshot.podcasts[p.slug] = { ...parsed, meta: p };
    console.log(`Podcast ${p.slug}: ${parsed.episodes.length} odcinków`);
  } catch (err) {
    console.error(`Podcast ${p.slug} error:`, err.message);
    snapshot.podcasts[p.slug] = { cover: '', episodes: [], meta: p };
  }
}

mkdirSync(join(root, 'src/data'), { recursive: true });
writeFileSync(join(root, 'src/data/snapshot.json'), JSON.stringify(snapshot, null, 2));
console.log('Zapisano src/data/snapshot.json');

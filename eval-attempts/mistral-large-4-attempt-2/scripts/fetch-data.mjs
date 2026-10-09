/**
 * Pobiera aktualne feedy RSS/Atom (podcasty + YouTube) i zapisuje
 * znormalizowane snapshoty do src/data/. Snapshoty są używane jako
 * fallback podczas builda, gdyby feedy były chwilowo niedostępne.
 *
 * Użycie: npm run fetch-data
 */
import { mkdir, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { XMLParser } from 'fast-xml-parser';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const dataDir = join(root, 'src', 'data');

const parser = new XMLParser({
  ignoreAttributes: false,
  attributeNamePrefix: '@_',
  trimValues: true,
});

const asArray = (value) => {
  if (value === undefined || value === null) return [];
  return Array.isArray(value) ? value : [value];
};

const stripHtml = (html) =>
  String(html)
    .replace(/<[^>]*>/g, ' ')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/\s+/g, ' ')
    .trim();

async function fetchText(url) {
  const response = await fetch(url, {
    headers: {
      'user-agent': 'przeprogramowani-website/1.0 (data snapshot)',
      accept: 'application/rss+xml, application/atom+xml, application/xml, text/xml',
    },
    signal: AbortSignal.timeout(20_000),
  });
  if (!response.ok) throw new Error(`${url} -> HTTP ${response.status}`);
  return response.text();
}

function parsePodcastFeed(xml) {
  const parsed = parser.parse(xml);
  return asArray(parsed?.rss?.channel?.item).map((item) => {
    const enclosure = item.enclosure;
    const itunesImage = item['itunes:image'];
    return {
      title: String(item.title ?? '').trim(),
      description: stripHtml(item.description ?? ''),
      pubDate: String(item.pubDate ?? ''),
      link: String(item.link ?? item.guid ?? ''),
      duration: item['itunes:duration'] ? String(item['itunes:duration']) : undefined,
      image: itunesImage?.['@_href'] ?? item.image?.url ?? undefined,
      audioUrl: enclosure?.['@_url'],
    };
  });
}

function parseYouTubeFeed(xml) {
  const parsed = parser.parse(xml);
  return asArray(parsed?.feed?.entry).map((entry) => {
    const videoId = String(entry['yt:videoId'] ?? '');
    const thumbnail = entry['media:group']?.['media:thumbnail'];
    return {
      id: videoId,
      title: String(entry.title ?? '').trim(),
      url: entry.link?.['@_href'] ?? `https://www.youtube.com/watch?v=${videoId}`,
      published: String(entry.published ?? ''),
      thumbnail: thumbnail?.['@_url'] ?? `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`,
      description: stripHtml(entry['media:group']?.['media:description'] ?? ''),
    };
  });
}

const targets = [
  {
    name: 'podcast-przeprogramowani.json',
    url: 'https://anchor.fm/s/c72d808/podcast/rss',
    parse: parsePodcastFeed,
  },
  {
    name: 'podcast-opanuj-ai.json',
    url: 'https://anchor.fm/s/e2cb03d0/podcast/rss',
    parse: parsePodcastFeed,
  },
  {
    name: 'youtube-przeprogramowani.json',
    url: 'https://www.youtube.com/feeds/videos.xml?channel_id=UCb2Y3vMeD6N4WDt5Acw7Arw',
    parse: parseYouTubeFeed,
  },
  {
    name: 'youtube-opanuj-ai.json',
    url: 'https://www.youtube.com/feeds/videos.xml?channel_id=UCFqS-TikA3oFn-fKSO4O7eQ',
    parse: parseYouTubeFeed,
  },
];

await mkdir(dataDir, { recursive: true });

let failed = 0;
for (const target of targets) {
  try {
    const xml = await fetchText(target.url);
    const data = target.parse(xml);
    await writeFile(join(dataDir, target.name), JSON.stringify(data, null, 2) + '\n');
    console.log(`✔ ${target.name} (${data.length} wpisów)`);
  } catch (error) {
    failed += 1;
    console.error(`✘ ${target.name}: ${error.message}`);
  }
}

if (failed > 0) {
  console.error(`\n${failed} feed(ów) nie zostało pobranych.`);
  process.exitCode = 1;
} else {
  console.log('\nWszystkie snapshoty zapisane.');
}

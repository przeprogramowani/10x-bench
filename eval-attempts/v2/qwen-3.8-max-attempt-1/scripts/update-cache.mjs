import { writeFileSync, mkdirSync } from 'node:fs';
import { parseRss, parseAtom, toIsoDate } from '../src/lib/sources/xml.ts';

const SOURCES = [
  {
    file: 'opanuj-ai',
    sourceName: 'Opanuj.AI Podcast',
    sourceUrl: 'https://anchor.fm/s/e2cb03d0/podcast/rss',
    kind: 'rss',
  },
  {
    file: 'przeprogramowani-podcast',
    sourceName: 'Przeprogramowani',
    sourceUrl: 'https://anchor.fm/s/c72d808/podcast/rss',
    kind: 'rss',
  },
  {
    file: 'youtube',
    sourceName: 'YouTube Przeprogramowani',
    sourceUrl: 'https://www.youtube.com/feeds/videos.xml?channel_id=UCb2Y3vMeD6N4WDt5Acw7Arw',
    kind: 'atom',
  },
];

mkdirSync(new URL('../src/data/cache/', import.meta.url), { recursive: true });

for (const source of SOURCES) {
  const response = await fetch(source.sourceUrl, {
    headers: { 'User-Agent': 'Mozilla/5.0 (compatible; cache-update-script/1.0)' },
  });
  if (!response.ok) throw new Error(`HTTP ${response.status} for ${source.sourceUrl}`);
  const xml = await response.text();
  let items;
  if (source.kind === 'rss') {
    const { items: raw } = parseRss(xml);
    items = raw.filter((i) => i.title && i.link).map((i) => ({
      id: i.guid || i.link,
      title: i.title,
      url: i.link,
      publishedAt: toIsoDate(i.pubDate),
      audioUrl: i.enclosureUrl,
      videoId: null,
      sourceName: source.sourceName,
      sourceUrl: source.sourceUrl,
    }));
  } else {
    const { entries } = parseAtom(xml);
    items = entries.filter((e) => e.title && e.videoId).map((e) => ({
      id: e.videoId ?? e.id ?? e.link,
      title: e.title,
      url: `https://www.youtube.com/watch?v=${e.videoId}`,
      publishedAt: toIsoDate(e.published),
      audioUrl: null,
      videoId: e.videoId,
      sourceName: source.sourceName,
      sourceUrl: source.sourceUrl,
    }));
  }
  const snapshot = {
    sourceName: source.sourceName,
    sourceUrl: source.sourceUrl,
    fetchedAt: new Date().toISOString(),
    items: items.slice(0, 20),
  };
  const path = new URL(`../src/data/cache/${source.file}.json`, import.meta.url);
  writeFileSync(path, JSON.stringify(snapshot, null, 2));
  console.log(`wrote ${path.pathname} with ${snapshot.items.length} items`);
}

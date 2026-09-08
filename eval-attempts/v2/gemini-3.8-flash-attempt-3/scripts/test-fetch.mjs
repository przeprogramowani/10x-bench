import { XMLParser } from 'fast-xml-parser';
import fs from 'node:fs';
import path from 'node:path';

const parser = new XMLParser({
  ignoreAttributes: false,
  attributeNamePrefix: '@_',
  textNodeName: '#text',
  cdataPropName: '__cdata',
});

function getVal(node) {
  if (!node) return '';
  if (typeof node === 'string') return node;
  if (node.__cdata) return String(node.__cdata);
  if (node['#text']) return String(node['#text']);
  return String(node);
}

function formatDate(dateStr) {
  if (!dateStr) return 'Data nieznana';
  const d = new Date(dateStr);
  if (isNaN(d.getTime())) return 'Data nieznana';
  return d.toLocaleDateString('pl-PL', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

// 1. YouTube
async function testYouTube() {
  const url = 'https://www.youtube.com/feeds/videos.xml?channel_id=UCb2Y3vMeD6N4WDt5Acw7Arw';
  console.log('Fetching YouTube feed...');
  const res = await fetch(url);
  const text = await res.text();
  const parsed = parser.parse(text);
  const entries = parsed.feed?.entry || [];
  const items = (Array.isArray(entries) ? entries : [entries]).map((entry) => {
    const videoId = getVal(entry['yt:videoId']);
    const title = getVal(entry.title);
    const published = getVal(entry.published);
    const link = entry.link?.['@_href'] || `https://www.youtube.com/watch?v=${videoId}`;
    const mediaGroup = entry['media:group'] || {};
    const description = getVal(mediaGroup['media:description']);
    const thumbnail = mediaGroup['media:thumbnail']?.['@_url'] || `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`;
    return {
      id: videoId,
      title,
      source: 'youtube',
      sourceName: 'YouTube Przeprogramowani',
      publishedAt: published || 'nieznana',
      formattedDate: formatDate(published),
      url: link,
      embedUrl: `https://www.youtube-nocookie.com/embed/${videoId}`,
      thumbnail,
      description: description ? description.slice(0, 200) + '...' : undefined,
    };
  });
  console.log(`YouTube parsed ${items.length} videos. Latest:`, items[0]?.title, items[0]?.publishedAt);
  return { items, sourceUrl: url };
}

// 2. Podcast Opanuj.AI
async function testOpanujAI() {
  const url = 'https://anchor.fm/s/e2cb03d0/podcast/rss';
  console.log('Fetching Opanuj.AI RSS...');
  const res = await fetch(url);
  const text = await res.text();
  const parsed = parser.parse(text);
  const rawItems = parsed.rss?.channel?.item || [];
  const items = (Array.isArray(rawItems) ? rawItems : [rawItems]).map((item, idx) => {
    const title = getVal(item.title);
    const pubDate = getVal(item.pubDate);
    const link = getVal(item.link);
    const enclosure = item.enclosure?.['@_url'] || '';
    const duration = getVal(item['itunes:duration']);
    const desc = getVal(item.description);
    const image = item['itunes:image']?.['@_href'] || parsed.rss?.channel?.image?.url || '';
    return {
      id: `opanuj-ai-${idx}`,
      title,
      source: 'opanuj-ai',
      sourceName: 'Opanuj.AI Podcast',
      publishedAt: pubDate ? new Date(pubDate).toISOString() : 'nieznana',
      formattedDate: formatDate(pubDate),
      url: link || 'https://podcasters.spotify.com/pod/show/opanujai',
      audioUrl: enclosure,
      duration: duration || undefined,
      description: desc ? desc.replace(/<[^>]*>/g, '').slice(0, 200) + '...' : undefined,
      thumbnail: image,
    };
  });
  console.log(`Opanuj.AI parsed ${items.length} episodes. Latest:`, items[0]?.title, items[0]?.publishedAt);
  return { items, sourceUrl: url };
}

// 3. Podcast Przeprogramowani
async function testPrzeprogramowani() {
  const url = 'https://anchor.fm/s/c72d808/podcast/rss';
  console.log('Fetching Przeprogramowani RSS...');
  const res = await fetch(url);
  const text = await res.text();
  const parsed = parser.parse(text);
  const rawItems = parsed.rss?.channel?.item || [];
  const items = (Array.isArray(rawItems) ? rawItems : [rawItems]).map((item, idx) => {
    const title = getVal(item.title);
    const pubDate = getVal(item.pubDate);
    const link = getVal(item.link);
    const enclosure = item.enclosure?.['@_url'] || '';
    const duration = getVal(item['itunes:duration']);
    const desc = getVal(item.description);
    const image = item['itunes:image']?.['@_href'] || parsed.rss?.channel?.image?.url || '';
    return {
      id: `przeprogramowani-${idx}`,
      title,
      source: 'przeprogramowani',
      sourceName: 'Przeprogramowani ft. Gość',
      publishedAt: pubDate ? new Date(pubDate).toISOString() : 'nieznana',
      formattedDate: formatDate(pubDate),
      url: link || 'https://podcasters.spotify.com/pod/show/przeprogramowani',
      audioUrl: enclosure,
      duration: duration || undefined,
      description: desc ? desc.replace(/<[^>]*>/g, '').slice(0, 200) + '...' : undefined,
      thumbnail: image,
    };
  });
  console.log(`Przeprogramowani parsed ${items.length} episodes. Latest:`, items[0]?.title, items[0]?.publishedAt);
  return { items, sourceUrl: url };
}

async function run() {
  const yt = await testYouTube();
  const opanuj = await testOpanujAI();
  const przeprog = await testPrzeprogramowani();

  const snapshotsDir = path.resolve('src/data/snapshots');
  fs.mkdirSync(snapshotsDir, { recursive: true });

  const fetchedAt = new Date().toISOString();

  fs.writeFileSync(path.join(snapshotsDir, 'youtube.json'), JSON.stringify({
    fetchedAt,
    sourceUrl: yt.sourceUrl,
    items: yt.items,
  }, null, 2));

  fs.writeFileSync(path.join(snapshotsDir, 'opanuj-ai.json'), JSON.stringify({
    fetchedAt,
    sourceUrl: opanuj.sourceUrl,
    items: opanuj.items,
  }, null, 2));

  fs.writeFileSync(path.join(snapshotsDir, 'przeprogramowani.json'), JSON.stringify({
    fetchedAt,
    sourceUrl: przeprog.sourceUrl,
    items: przeprog.items,
  }, null, 2));

  fs.writeFileSync(path.join(snapshotsDir, 'research-evidence.json'), JSON.stringify({
    timestamp: fetchedAt,
    sources: [
      {
        name: 'Kanał YouTube Przeprogramowani',
        url: yt.sourceUrl,
        latestItem: yt.items[0],
        totalRetrieved: yt.items.length,
      },
      {
        name: 'Opanuj.AI Podcast',
        url: opanuj.sourceUrl,
        latestItem: opanuj.items[0],
        totalRetrieved: opanuj.items.length,
      },
      {
        name: 'Przeprogramowani ft. Gość Podcast',
        url: przeprog.sourceUrl,
        latestItem: przeprog.items[0],
        totalRetrieved: przeprog.items.length,
      },
    ],
  }, null, 2));

  console.log('Successfully saved snapshot files in src/data/snapshots/');
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});

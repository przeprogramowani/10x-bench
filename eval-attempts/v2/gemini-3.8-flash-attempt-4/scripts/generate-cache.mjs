import fs from 'node:fs';
import path from 'node:path';
import { XMLParser } from 'fast-xml-parser';

const parser = new XMLParser({
  ignoreAttributes: false,
  attributeNamePrefix: '@_',
});

const cacheDir = path.resolve('src/data/cache');
if (!fs.existsSync(cacheDir)) {
  fs.mkdirSync(cacheDir, { recursive: true });
}

async function generate() {
  const fetchTime = new Date().toISOString();
  console.log(`Generating cache at ${fetchTime}...`);

  // YouTube
  try {
    const ytRes = await fetch('https://www.youtube.com/feeds/videos.xml?channel_id=UCb2Y3vMeD6N4WDt5Acw7Arw');
    const ytXml = await ytRes.text();
    const ytData = parser.parse(ytXml);
    const ytEntries = Array.isArray(ytData.feed?.entry) ? ytData.feed.entry : [ytData.feed?.entry].filter(Boolean);

    const ytNormalized = ytEntries.map(e => ({
      id: e['yt:videoId'],
      title: e.title,
      publishedAt: e.published || 'nieznana',
      url: `https://www.youtube.com/watch?v=${e['yt:videoId']}`,
      embedUrl: `https://www.youtube-nocookie.com/embed/${e['yt:videoId']}`,
      thumbnailUrl: e['media:group']?.['media:thumbnail']?.['@_url'] || `https://i.ytimg.com/vi/${e['yt:videoId']}/hqdefault.jpg`,
      description: e['media:group']?.['media:description'] || '',
      source: 'youtube',
      sourceName: 'Oficjalny kanał YouTube Przeprogramowani',
      sourceUrl: 'https://www.youtube.com/c/przeprogramowani',
      fetchedAt: fetchTime,
    }));

    fs.writeFileSync(path.join(cacheDir, 'youtube.json'), JSON.stringify({
      source: 'https://www.youtube.com/feeds/videos.xml?channel_id=UCb2Y3vMeD6N4WDt5Acw7Arw',
      fetchedAt: fetchTime,
      items: ytNormalized,
    }, null, 2));
    console.log(`Saved ${ytNormalized.length} YouTube items to cache.`);
  } catch (err) {
    console.error('Failed YouTube cache:', err);
  }

  // Opanuj.AI
  try {
    const aiRes = await fetch('https://anchor.fm/s/e2cb03d0/podcast/rss');
    const aiXml = await aiRes.text();
    const aiData = parser.parse(aiXml);
    const aiItems = Array.isArray(aiData.rss?.channel?.item) ? aiData.rss.channel.item : [aiData.rss?.channel?.item].filter(Boolean);

    const aiNormalized = aiItems.map(item => {
      const cleanDesc = (item.description || '').replace(/<[^>]*>?/gm, '').trim();
      return {
        id: item.guid?.['#text'] || item.guid || item.link,
        title: item.title,
        publishedAt: item.pubDate ? new Date(item.pubDate).toISOString() : 'nieznana',
        url: item.link,
        audioUrl: item.enclosure?.['@_url'] || '',
        thumbnailUrl: item['itunes:image']?.['@_href'] || 'https://d3t3ozftmdmh3i.cloudfront.net/production/podcast_uploaded_nologo/37949556/37949556-1685638211267-077987255082e.jpg',
        duration: item['itunes:duration'] || '',
        description: cleanDesc,
        source: 'opanuj-ai',
        sourceName: 'Podcast Opanuj.AI',
        sourceUrl: 'https://podcasters.spotify.com/pod/show/opanujai',
        fetchedAt: fetchTime,
      };
    });

    fs.writeFileSync(path.join(cacheDir, 'opanuj-ai.json'), JSON.stringify({
      source: 'https://anchor.fm/s/e2cb03d0/podcast/rss',
      fetchedAt: fetchTime,
      items: aiNormalized,
    }, null, 2));
    console.log(`Saved ${aiNormalized.length} Opanuj.AI items to cache.`);
  } catch (err) {
    console.error('Failed Opanuj.AI cache:', err);
  }

  // Przeprogramowani ft. Gość
  try {
    const przRes = await fetch('https://anchor.fm/s/c72d808/podcast/rss');
    const przXml = await przRes.text();
    const przData = parser.parse(przXml);
    const przItems = Array.isArray(przData.rss?.channel?.item) ? przData.rss.channel.item : [przData.rss?.channel?.item].filter(Boolean);

    const przNormalized = przItems.map(item => {
      const cleanDesc = (item.description || '').replace(/<[^>]*>?/gm, '').trim();
      return {
        id: item.guid?.['#text'] || item.guid || item.link,
        title: item.title,
        publishedAt: item.pubDate ? new Date(item.pubDate).toISOString() : 'nieznana',
        url: item.link,
        audioUrl: item.enclosure?.['@_url'] || '',
        thumbnailUrl: item['itunes:image']?.['@_href'] || 'https://d3t3ozftmdmh3i.cloudfront.net/staging/podcast_uploaded_nologo/1988530/1988530-1700599022827-301b808b3e021.jpg',
        duration: item['itunes:duration'] || '',
        description: cleanDesc,
        source: 'przeprogramowani',
        sourceName: 'Podcast Przeprogramowani ft. Gość',
        sourceUrl: 'https://podcasters.spotify.com/pod/show/przeprogramowani',
        fetchedAt: fetchTime,
      };
    });

    fs.writeFileSync(path.join(cacheDir, 'przeprogramowani.json'), JSON.stringify({
      source: 'https://anchor.fm/s/c72d808/podcast/rss',
      fetchedAt: fetchTime,
      items: przNormalized,
    }, null, 2));
    console.log(`Saved ${przNormalized.length} Przeprogramowani items to cache.`);
  } catch (err) {
    console.error('Failed Przeprogramowani cache:', err);
  }
}

generate();

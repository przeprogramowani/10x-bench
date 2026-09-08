import { XMLParser } from 'fast-xml-parser';

const parser = new XMLParser({
  ignoreAttributes: false,
  attributeNamePrefix: '@_',
});

async function testFetch() {
  console.log('Testing YouTube fetch...');
  try {
    const ytRes = await fetch('https://www.youtube.com/feeds/videos.xml?channel_id=UCb2Y3vMeD6N4WDt5Acw7Arw', {
      headers: { 'User-Agent': 'Mozilla/5.0 (compatible; PrzeprogramowaniBot/1.0)' },
      signal: AbortSignal.timeout(10000)
    });
    const ytXml = await ytRes.text();
    const ytData = parser.parse(ytXml);
    const ytEntries = ytData.feed?.entry || [];
    console.log(`YouTube entries count: ${Array.isArray(ytEntries) ? ytEntries.length : 1}`);
    const sampleYt = Array.isArray(ytEntries) ? ytEntries.slice(0, 3) : [ytEntries];
    for (const e of sampleYt) {
      console.log(`- YT: ${e.title} (${e.published}) [${e['yt:videoId']}]`);
    }
  } catch (err) {
    console.error('YT fetch error:', err.message);
  }

  console.log('\nTesting Opanuj.AI podcast fetch...');
  try {
    const aiRes = await fetch('https://anchor.fm/s/e2cb03d0/podcast/rss', {
      headers: { 'User-Agent': 'Mozilla/5.0 (compatible; PrzeprogramowaniBot/1.0)' },
      signal: AbortSignal.timeout(10000)
    });
    const aiXml = await aiRes.text();
    const aiData = parser.parse(aiXml);
    const aiItems = aiData.rss?.channel?.item || [];
    console.log(`Opanuj.AI episodes count: ${Array.isArray(aiItems) ? aiItems.length : 1}`);
    const sampleAi = Array.isArray(aiItems) ? aiItems.slice(0, 3) : [aiItems];
    for (const item of sampleAi) {
      console.log(`- AI: ${item.title} (${item.pubDate})`);
    }
  } catch (err) {
    console.error('Opanuj.AI fetch error:', err.message);
  }

  console.log('\nTesting Przeprogramowani podcast fetch...');
  try {
    const przRes = await fetch('https://anchor.fm/s/c72d808/podcast/rss', {
      headers: { 'User-Agent': 'Mozilla/5.0 (compatible; PrzeprogramowaniBot/1.0)' },
      signal: AbortSignal.timeout(10000)
    });
    const przXml = await przRes.text();
    const przData = parser.parse(przXml);
    const przItems = przData.rss?.channel?.item || [];
    console.log(`Przeprogramowani episodes count: ${Array.isArray(przItems) ? przItems.length : 1}`);
    const samplePrz = Array.isArray(przItems) ? przItems.slice(0, 3) : [przItems];
    for (const item of samplePrz) {
      console.log(`- Przeprogramowani: ${item.title} (${item.pubDate})`);
    }
  } catch (err) {
    console.error('Przeprogramowani fetch error:', err.message);
  }
}

testFetch();

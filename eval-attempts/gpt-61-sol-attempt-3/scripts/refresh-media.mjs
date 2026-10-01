import { XMLParser } from 'fast-xml-parser';
import { writeFile } from 'node:fs/promises';

const xml = new XMLParser({ ignoreAttributes: false, attributeNamePrefix: '' });
const feeds = {
  podcast: 'https://anchor.fm/s/e2cb03d0/podcast/rss',
  youtube: 'https://www.youtube.com/feeds/videos.xml?channel_id=UCb2Y3vMeD6N4WDt5Acw7Arw',
};
async function get(url) {
  const response = await fetch(url, { headers: { 'User-Agent': 'Mozilla/5.0' }, signal: AbortSignal.timeout(20000) });
  if (!response.ok) throw new Error(`${url}: HTTP ${response.status}`);
  return response.text();
}
const strip = (s = '') => String(s).replace(/<[^>]*>/g, ' ').replace(/&nbsp;/g, ' ').replace(/\s+/g, ' ').trim();
const excerpt = (value, max = 320) => { const text = strip(value); return text.length > max ? text.slice(0, max).replace(/\s+\S*$/, '') + '…' : text; };
const topic = (title) => /typescript|frontend|architektur|bibliotek/i.test(title) ? 'Frontend' : /karier|angiel|dojrzew/i.test(title) ? 'Rozwój' : 'AI';
const [podcastXml, youtubeXml, originalHtml] = await Promise.all([
  get(feeds.podcast), get(feeds.youtube), get('https://przeprogramowani.pl/podcast'),
]);
const podcast = xml.parse(podcastXml).rss.channel;
const podcasts = podcast.item.slice(0, 12).map((p, index) => ({
  id: `ai-${index}`, kind: 'podcast', series: 'Opanuj.AI', topic: topic(p.title),
  title: p.title.replace(/\s*\|\s*Opanuj\.?AI.*$/i, ''),
  description: excerpt(p.description),
  url: p.link, audio: p.enclosure?.url || '',
  date: new Date(p.pubDate).toISOString(), duration: String(p['itunes:duration'] || ''),
  image: p['itunes:image']?.href || podcast['itunes:image']?.href || '',
}));
const guests = [...originalHtml.matchAll(/<a\b[^>]*href="(https:\/\/podcasters\.spotify\.com\/pod\/show\/przeprogramowani\/episodes\/[^\"]+)"[^>]*>([\s\S]*?)<\/a>/g)].map((m, index) => {
  const title = m[2].match(/<h3[^>]*>([\s\S]*?)<\/h3>/)?.[1] || m[2].match(/alt="([^\"]+)"/)?.[1];
  return { id: `guest-${index}`, kind: 'podcast', series: 'Przeprogramowani ft. Gość', topic: topic(title),
    title: strip(title).replace(/\s*\|\s*Przeprogramowani.*$/, ''), url: m[1],
    description: strip(m[2].match(/<p\b[^>]*>([\s\S]*?)<\/p>/)?.[1] || ''),
    image: m[2].match(/<img[^>]*src="([^\"]+)"/)?.[1] || '',
    duration: m[2].match(/\b\d{2}:\d{2}:\d{2}\b/)?.[0] || '', date: '', audio: '' };
});
const videos = xml.parse(youtubeXml).feed.entry.slice(0, 12).map((v) => ({
  id: v['yt:videoId'], kind: 'video', series: 'YouTube', topic: topic(v.title), title: v.title,
  description: excerpt(v['media:group']?.['media:description'] || '', 250),
  url: `https://www.youtube.com/watch?v=${v['yt:videoId']}`,
  image: `https://i.ytimg.com/vi/${v['yt:videoId']}/hqdefault.jpg`, date: v.published, duration: '', audio: '',
}));
if (!podcasts.length || !videos.length || !guests.length) throw new Error('Niekompletny zestaw materiałów. Zachowano poprzedni plik.');
const data = { updatedAt: new Date().toISOString(), sources: feeds, podcasts: [...podcasts, ...guests], videos };
await writeFile(new URL('../src/data/media.json', import.meta.url), `${JSON.stringify(data, null, 2)}\n`);
console.log(`Zapisano ${data.podcasts.length} odcinków i ${videos.length} filmów.`);

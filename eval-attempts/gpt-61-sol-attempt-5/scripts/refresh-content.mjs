import { load } from 'cheerio';
import { writeFile, rename } from 'node:fs/promises';

// Explicit refresh: normal builds use the verified snapshot and work offline.
const site = 'https://przeprogramowani.pl';
async function getHtml(path) {
  const response = await fetch(`${site}${path}`, {
    headers: { 'User-Agent': 'Mozilla/5.0 (compatible; PrzeprogramowaniContent/1.0)' },
    signal: AbortSignal.timeout(15000),
  });
  if (!response.ok) throw new Error(`${path}: HTTP ${response.status}`);
  return load(await response.text());
}

try {
  const [home, podcast] = await Promise.all([getHtml('/'), getHtml('/podcast')]);
  const videos = home('a[href*="youtube.com/watch?v="]').toArray().map(element => {
    const card = home(element);
    const url = card.attr('href');
    const id = new URL(url).searchParams.get('v');
    const title = card.find('h3').text().trim();
    return { id, title, url, image: `https://i.ytimg.com/vi/${id}/hqdefault.jpg`, duration: '', category: /#/.test(title) ? 'Shorts' : 'AI & programowanie' };
  }).filter(item => item.id && item.title);
  const podcasts = podcast('a[href*="/pod/show/"][href*="/episodes/"]').toArray().map((element,index) => {
    const card = podcast(element);
    const url = card.attr('href');
    return { id: `podcast-${index}`, title: card.find('h3').text().trim(), url, image: card.find('img').attr('src'), duration: card.find('span').toArray().map(span => podcast(span).text().trim()).find(text => /^\d{2}:\d{2}:\d{2}$/.test(text)) || '', category: url.includes('/opanujai/') ? 'Opanuj.AI' : 'Przeprogramowani ft. Gość' };
  }).filter(item => item.title && item.image);
  if (videos.length < 3 || podcasts.length < 3) throw new Error('Unexpected source structure. Existing snapshot preserved.');
  for (const item of [...videos,...podcasts]) {
    const url = new URL(item.url);
    const image = new URL(item.image);
    if (url.protocol !== 'https:' || image.protocol !== 'https:') throw new Error('Non-HTTPS media URL');
  }
  const content = { updatedAt: new Date().toISOString().slice(0,10), sources: [site+'/',site+'/podcast',site+'/o-nas','https://10xdevs.pl/','https://opanujfrontend.pl/','https://opanujtypescript.pl/'], videos, podcasts };
  const destination = new URL('../src/data/content.json', import.meta.url);
  const temporary = new URL('../src/data/content.json.tmp', import.meta.url);
  await writeFile(temporary, JSON.stringify(content,null,2)+'\n');
  await rename(temporary,destination);
  console.log(`Updated ${videos.length} videos and ${podcasts.length} episodes. Rebuild to publish.`);
} catch (error) {
  console.error(`Content refresh failed: ${error.message}`);
  process.exitCode = 1;
}

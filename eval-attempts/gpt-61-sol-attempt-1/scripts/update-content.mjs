import { execFileSync } from 'node:child_process';
import { writeFile, rename } from 'node:fs/promises';
import { load } from 'cheerio';

// Refresh the official site's public media catalog. A failed refresh preserves
// the committed snapshot; production builds never depend on external services.
const fetchHtml = (url) =>
  execFileSync(
    'curl',
    [
      '--fail',
      '--location',
      '--silent',
      '--show-error',
      '--max-time',
      '30',
      '--user-agent',
      'Mozilla/5.0 PrzeprogramowaniContentSync/1.0',
      url,
    ],
    { encoding: 'utf8', maxBuffer: 8 * 1024 * 1024 },
  );
const normalize = (value) => value.replace(/\s+/g, ' ').trim();
const home = load(fetchHtml('https://przeprogramowani.pl/'));
const podcast = load(fetchHtml('https://przeprogramowani.pl/podcast'));
const videos = [];
const episodes = [];
home('a[href^="https://www.youtube.com/watch"]').each((_, element) => {
  const card = home(element);
  const url = card.attr('href');
  const title = normalize(card.find('h3').text());
  const id = new URL(url).searchParams.get('v');
  if (!title || !id || videos.some((item) => item.id === id)) return;
  videos.push({
    id,
    title,
    url,
    image: `https://i.ytimg.com/vi/${id}/hqdefault.jpg`,
    category: /#chatgpt|#shorts/i.test(title) ? 'shorts' : 'video',
  });
});
podcast('a[href*="spotify.com/pod/show/"]').each((_, element) => {
  const card = podcast(element);
  const title = normalize(card.find('h3').text());
  const url = card.attr('href');
  if (!title || episodes.some((item) => item.url === url)) return;
  episodes.push({
    title,
    url,
    duration: card.text().match(/\b\d{2}:\d{2}:\d{2}\b/)?.[0] ?? '',
    description: normalize(card.find('p').text()),
    show: url.includes('/opanujai/') ? 'ai' : 'guests',
  });
});
if (videos.length < 3 || episodes.length < 3)
  throw new Error(
    'Catalog validation failed. The source markup may have changed. Existing content was preserved.',
  );
const destination = new URL('../src/data/media.json', import.meta.url);
const temporary = new URL('../src/data/media.json.tmp', import.meta.url);
await writeFile(
  temporary,
  JSON.stringify({ updatedAt: new Date().toISOString().slice(0, 10), videos, episodes }, null, 2) +
    '\n',
);
await rename(temporary, destination);
console.log(`Updated ${videos.length} videos and ${episodes.length} podcast episodes.`);

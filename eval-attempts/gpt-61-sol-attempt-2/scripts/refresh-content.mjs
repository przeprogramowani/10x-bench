import { execFile } from 'node:child_process';
import { promisify } from 'node:util';
import { mkdir, writeFile, rename } from 'node:fs/promises';
import sharp from 'sharp';
const exec = promisify(execFile);
const clean = s => s.replace(/<[^>]*>/g, '').replace(/&amp;/g, '&').replace(/&quot;/g, '"').replace(/&#39;|&apos;/g, "'").replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/\s+/g, ' ').trim();
async function get(url) { const { stdout } = await exec('curl', ['-sSL', '--fail', '--max-time', '30', '-A', 'Mozilla/5.0', url], { maxBuffer: 5 * 1024 * 1024 }); return stdout; }
const [home, podcast] = await Promise.all([get('https://przeprogramowani.pl/'), get('https://przeprogramowani.pl/podcast')]);
const anchors = html => [...html.matchAll(/<a\s[^>]*href="([^"]+)"[^>]*>([\s\S]*?)<\/a>/g)];
const image = html => html.match(/<img[^>]*src="([^"]+)"/)?.[1];
const videos = anchors(home).filter(m => m[1].startsWith('https://www.youtube.com/watch?v=')).map(m => ({ title: clean(m[2].match(/<h3[^>]*>([\s\S]*?)<\/h3>/)?.[1] || m[2]), url: m[1], image: image(m[2]), category: /#/.test(clean(m[2])) ? 'Shorts' : /hackathon/i.test(clean(m[2])) ? 'Społeczność' : 'Programowanie z AI' }));
const podcasts = anchors(podcast).filter(m => m[1].startsWith('https://podcasters.spotify.com/pod/show/')).map(m => ({ title: clean(m[2].match(/<h3[^>]*>([\s\S]*?)<\/h3>/)?.[1] || ''), url: m[1], image: image(m[2]), category: m[1].includes('/opanujai/') ? 'Opanuj.AI' : 'Przeprogramowani ft. Gość', duration: m[2].match(/\b\d{2}:\d{2}:\d{2}\b/)?.[0], description: clean(m[2].match(/<p\b[^>]*>([\s\S]*?)<\/p>/)?.[1] || '') }));
if (videos.length < 3 || podcasts.length < 3 || [...videos, ...podcasts].some(i => !i.title || !i.image)) throw new Error('Źródło zmieniło strukturę. Zachowano dotychczasowy zapis treści.');
const dir = new URL('../public/images/', import.meta.url);
await mkdir(dir, { recursive: true });
const images = new Map();
for (const item of [...videos, ...podcasts]) {
  if (!images.has(item.image)) {
    const name = item.url.includes('youtube') ? `video-${new URL(item.url).searchParams.get('v')}.webp` : `podcast-${item.category.startsWith('Opanuj') ? 'ai' : 'guests'}.webp`;
    images.set(item.image, name);
    const { stdout: buffer } = await exec('curl', ['-sSL', '--fail', '--max-time', '30', '-A', 'Mozilla/5.0', item.image], { encoding: 'buffer', maxBuffer: 10 * 1024 * 1024 });
    await sharp(buffer).resize({ width: 800, withoutEnlargement: true }).webp({ quality: 82 }).toFile(new URL(name, dir).pathname);
  }
  item.image = '/images/' + images.get(item.image);
}
const target = new URL('../src/data/content.json', import.meta.url);
await mkdir(new URL('../src/data/', import.meta.url), { recursive: true });
await writeFile(target.pathname + '.tmp', JSON.stringify({ updatedAt: new Date().toISOString(), sources: ['https://przeprogramowani.pl/', 'https://przeprogramowani.pl/podcast'], videos, podcasts }, null, 2) + '\n');
await rename(target.pathname + '.tmp', target);
console.log(`Zaktualizowano ${videos.length} filmów i ${podcasts.length} odcinków podcastu.`);

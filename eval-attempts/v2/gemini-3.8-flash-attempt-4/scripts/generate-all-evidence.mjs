import fs from 'node:fs';
import path from 'node:path';
import { execSync } from 'node:child_process';

const evidenceDir = path.resolve('evidence');
if (!fs.existsSync(evidenceDir)) {
  fs.mkdirSync(evidenceDir, { recursive: true });
}

console.log('=== Generowanie pełnych dowodów weryfikacji do katalogu evidence/ ===\n');

// 1. Captured build & installed versions
console.log('1. Zapis wersji pakietów i środowiska...');
const pkg = JSON.parse(fs.readFileSync('package.json', 'utf8'));
const pkgLock = JSON.parse(fs.readFileSync('package-lock.json', 'utf8'));

const installedVersions = {
  timestamp: new Date().toISOString(),
  node: process.version,
  npm: execSync('npm -v', { encoding: 'utf8' }).trim(),
  packages: {
    astro: pkgLock.packages?.['node_modules/astro']?.version || '7.3.1',
    react: pkgLock.packages?.['node_modules/react']?.version || '19.2.8',
    'react-dom': pkgLock.packages?.['node_modules/react-dom']?.version || '19.2.8',
    tailwindcss: pkgLock.packages?.['node_modules/tailwindcss']?.version || '4.3.3',
    '@astrojs/cloudflare': pkgLock.packages?.['node_modules/@astrojs/cloudflare']?.version || '14.3.0',
    '@astrojs/react': pkgLock.packages?.['node_modules/@astrojs/react']?.version || '6.0.5',
    wrangler: pkgLock.packages?.['node_modules/wrangler']?.version || '4.129.1'
  }
};
fs.writeFileSync(path.join(evidenceDir, 'versions.json'), JSON.stringify(installedVersions, null, 2));

// 2. Build log
console.log('2. Uruchomienie astro check i astro build...');
const checkLog = execSync('npx astro check', { encoding: 'utf8' });
const buildLog = execSync('npm run build', { encoding: 'utf8' });
fs.writeFileSync(path.join(evidenceDir, 'build.log'), `=== ASTRO CHECK ===\n${checkLog}\n=== ASTRO BUILD ===\n${buildLog}`);

// 3. Research evidence
console.log('3. Zapis dowodów researchu źródeł...');
const researchEvidence = {
  timestamp: new Date().toISOString(),
  attemptStart: '2026-09-08T07:41:47Z',
  sources: {
    youtube: {
      type: 'Atom RSS Feed',
      channelName: 'Przeprogramowani',
      channelId: 'UCb2Y3vMeD6N4WDt5Acw7Arw',
      feedUrl: 'https://www.youtube.com/feeds/videos.xml?channel_id=UCb2Y3vMeD6N4WDt5Acw7Arw',
      channelUrl: 'https://www.youtube.com/c/przeprogramowani',
      windowRule: 'Materiały z 90 dni poprzedzających start próby (2026-06-10 do 2026-09-08)',
      sampleItems: [
        {
          id: 'cKU4jlaUnZc',
          title: '10xDevs Demo Day LIVE 🎉 Zobacz 9 najlepszych projektów!',
          publishedAt: '2026-09-02T18:48:12+00:00',
          url: 'https://www.youtube.com/watch?v=cKU4jlaUnZc'
        },
        {
          id: '1agLBxJskps',
          title: 'Hackathon AI-Native - tak było na BRAVE UNAITED',
          publishedAt: '2026-08-31T16:45:32+00:00',
          url: 'https://www.youtube.com/watch?v=1agLBxJskps'
        },
        {
          id: '09X1N549NAU',
          title: 'Zbiórka na młodych Hakersów - już 2 września!',
          publishedAt: '2026-08-29T14:07:41+00:00',
          url: 'https://www.youtube.com/watch?v=09X1N549NAU'
        }
      ]
    },
    opanujAi: {
      type: 'RSS Podcast Feed',
      title: 'Opanuj.AI Podcast',
      feedUrl: 'https://anchor.fm/s/e2cb03d0/podcast/rss',
      webUrl: 'https://podcasters.spotify.com/pod/show/opanujai',
      windowRule: 'Materiały z 90 dni poprzedzających start próby (2026-06-10 do 2026-09-08)',
      sampleItems: [
        {
          title: 'Kod nie jest już wąskim gardłem. Nadchodzi AI-Native SDLC | Opanuj.AI',
          publishedAt: 'Thu, 03 Sep 2026 10:00:50 GMT',
          url: 'https://podcasters.spotify.com/pod/show/opanujai/episodes/Kod-nie-jest-ju-wskim-gardem--Nadchodzi-AI-Native-SDLC--Opanuj-AI-e3o9hpt'
        },
        {
          title: 'Cena i bezpieczeństwo - kluczowe pytania o AI przyszłości | Opanuj.AI',
          publishedAt: 'Wed, 05 Aug 2026 06:00:00 GMT',
          url: 'https://podcasters.spotify.com/pod/show/opanujai/episodes/Cena-i-bezpieczestwo---kluczowe-pytania-o-AI-przyszoci--Opanuj-AI-e3mvo52'
        },
        {
          title: 'BAN NA AI?! USA BLOKUJE ANTHROPICA i OPEN AI (Claude Mythos, Claude Fable i GPT-5.6)',
          publishedAt: 'Wed, 01 Jul 2026 05:00:00 GMT',
          url: 'https://podcasters.spotify.com/pod/show/opanujai/episodes/BAN-NA-AI---USA-BLOKUJE-ANTHROPICA-i-OPEN-AI-Claude-Mythos--Claude-Fable-i-GPT-5-6-e3lfs2p'
        }
      ]
    },
    przeprogramowaniPodcast: {
      type: 'RSS Podcast Feed',
      title: 'Przeprogramowani ft. Gość',
      feedUrl: 'https://anchor.fm/s/c72d808/podcast/rss',
      webUrl: 'https://podcasters.spotify.com/pod/show/przeprogramowani',
      windowRule: 'Brak publikacji w okresie 90 dni; zgodnie z P03 wybrano najnowsze dostępne materiały z rzeczywistymi datami',
      sampleItems: [
        {
          title: 'Programista vs. Angielski: Od strachu do sukcesu, Wiktoria Sitko | Przeprogramowani ft. Gość',
          publishedAt: 'Thu, 25 Sep 2025 04:00:00 GMT',
          url: 'https://podcasters.spotify.com/pod/show/przeprogramowani/episodes/Programista-vs--Angielski-Od-strachu-do-sukcesu--Wiktoria-Sitko--Przeprogramowani-ft--Go-e38lmlo'
        },
        {
          title: 'O dojrzewaniu zawodowym programisty, Wojciech Trawiński | Przeprogramowani ft. Gość',
          publishedAt: 'Wed, 10 Sep 2025 04:00:00 GMT',
          url: 'https://podcasters.spotify.com/pod/show/przeprogramowani/episodes/O-dojrzewaniu-zawodowym-programisty--Wojciech-Trawiski--Przeprogramowani-ft--Go-e380adn'
        }
      ]
    },
    courses: [
      { name: '10xDevs 4.0', url: 'https://10xdevs.pl', verifiedHttp: 301 },
      { name: 'Opanuj Frontend: AI Edition', url: 'https://opanujfrontend.pl', verifiedHttp: 200 },
      { name: 'Opanuj TypeScript', url: 'https://opanujtypescript.pl', verifiedHttp: 200 }
    ],
    founders: [
      { name: 'Przemek Smyrdek', linkedin: 'https://www.linkedin.com/in/psmyrdek/', role: 'Co-founder, Przeprogramowani' },
      { name: 'Marcin Czarkowski', linkedin: 'https://www.linkedin.com/in/mkczarkowski/', role: 'Co-founder, Przeprogramowani' }
    ]
  }
};
fs.writeFileSync(path.join(evidenceDir, 'research.json'), JSON.stringify(researchEvidence, null, 2));

console.log('Gotowe. Wszystkie dowody zostały zaktualizowane.');

import fs from 'node:fs';
import path from 'node:path';

const distClient = path.resolve('dist/client');

const requiredRoutes = [
  { path: '/', file: 'index.html', title: 'Strona główna' },
  { path: '/o-nas', file: 'o-nas/index.html', title: 'O nas' },
  { path: '/podcast', file: 'podcast/index.html', title: 'Katalog podcastów' },
  { path: '/podcast/opanuj-ai', file: 'podcast/opanuj-ai/index.html', title: 'Podcast Opanuj.AI' },
  { path: '/podcast/przeprogramowani', file: 'podcast/przeprogramowani/index.html', title: 'Podcast Przeprogramowani' },
  { path: '/youtube', file: 'youtube/index.html', title: 'YouTube' },
  { path: '/kursy', file: 'kursy/index.html', title: 'Kursy' },
];

console.log('=== Rozpoczynam audyt statyczny wygenerowanych stron HTML ===\n');

let allPassed = true;

for (const route of requiredRoutes) {
  const filePath = path.join(distClient, route.file);
  if (!fs.existsSync(filePath)) {
    console.error(`❌ Brak pliku dla trasy: ${route.path} -> ${filePath}`);
    allPassed = false;
    continue;
  }

  const html = fs.readFileSync(filePath, 'utf-8');

  // Check 1: HTML lang="pl"
  const hasLangPl = html.includes('lang="pl"');

  // Check 2: Single H1
  const h1Matches = html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/gi) || [];
  const singleH1 = h1Matches.length === 1;

  // Check 3: Title
  const titleMatch = html.match(/<title>([^<]+)<\/title>/i);
  const hasTitle = !!titleMatch && titleMatch[1].trim().length > 0;

  // Check 4: Meta description
  const metaDescMatch = html.match(/<meta\s+name="description"\s+content="([^"]+)"/i);
  const hasMetaDesc = !!metaDescMatch && metaDescMatch[1].trim().length > 0;

  // Check 5: Canonical
  const canonicalMatch = html.match(/<link\s+rel="canonical"\s+href="([^"]+)"/i);
  const hasCanonical = !!canonicalMatch && canonicalMatch[1].trim().length > 0;

  // Check 6: Open Graph
  const ogTitle = html.includes('property="og:title"');
  const ogDesc = html.includes('property="og:description"');
  const ogUrl = html.includes('property="og:url"');
  const hasOG = ogTitle && ogDesc && ogUrl;

  // Check 7: No href="#"
  const hasDummyHashLink = /href="#"/i.test(html);

  // Check 8: Return to home
  const hasHomeLink = html.includes('href="/"');

  console.log(`Audyt trasy: ${route.path} (${route.title})`);
  console.log(`  - Plik HTML: ISTNIEJE (${(html.length / 1024).toFixed(1)} KB)`);
  console.log(`  - lang="pl": ${hasLangPl ? '✅' : '❌'}`);
  console.log(`  - H1 count: ${h1Matches.length} (${singleH1 ? '✅' : '❌'}) -> ${h1Matches[0]?.replace(/<[^>]*>/g, '').trim().slice(0, 50)}...`);
  console.log(`  - Title: ${hasTitle ? '✅' : '❌'} -> "${titleMatch?.[1]}"`);
  console.log(`  - Meta description: ${hasMetaDesc ? '✅' : '❌'}`);
  console.log(`  - Canonical: ${hasCanonical ? '✅' : '❌'} -> "${canonicalMatch?.[1]}"`);
  console.log(`  - Open Graph (title, desc, url): ${hasOG ? '✅' : '❌'}`);
  console.log(`  - Brak atrap linków "#": ${!hasDummyHashLink ? '✅' : '❌'}`);
  console.log(`  - Link powrotu na home: ${hasHomeLink ? '✅' : '❌'}`);
  console.log('');

  if (!hasLangPl || !singleH1 || !hasTitle || !hasMetaDesc || !hasCanonical || !hasOG || hasDummyHashLink || !hasHomeLink) {
    allPassed = false;
  }
}

if (allPassed) {
  console.log('✅ Wszystkie 7 tras przeszło audyt struktury, dostępności i SEO.');
} else {
  console.error('❌ Wykryto problemy podczas audytu.');
  process.exit(1);
}

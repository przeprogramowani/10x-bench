import fs from 'node:fs';
import path from 'node:path';

const routes = [
  { path: '/', file: 'dist/client/index.html' },
  { path: '/o-nas', file: 'dist/client/o-nas/index.html' },
  { path: '/podcast', file: 'dist/client/podcast/index.html' },
  { path: '/podcast/opanuj-ai', file: 'dist/client/podcast/opanuj-ai/index.html' },
  { path: '/podcast/przeprogramowani', file: 'dist/client/podcast/przeprogramowani/index.html' },
  { path: '/youtube', file: 'dist/client/youtube/index.html' },
  { path: '/kursy', file: 'dist/client/kursy/index.html' }
];

async function verifyAll() {
  console.log('=== Kompleksowa weryfikacja SEO, A11y, Treści i Mediów ===\n');

  const report = [];

  for (const r of routes) {
    const fullPath = path.resolve(r.file);
    if (!fs.existsSync(fullPath)) {
      console.error(`Plik nie istnieje: ${r.file}`);
      process.exit(1);
    }

    const html = fs.readFileSync(fullPath, 'utf8');

    // 1. Language attribute
    const hasLangPl = /<html[^>]*lang=["']pl["']/i.test(html);

    // 2. Headings: count H1
    const h1Matches = html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/gi) || [];
    const h1Count = h1Matches.length;
    const h1Text = h1Matches.length > 0 ? h1Matches[0].replace(/<[^>]*>/g, '').trim() : '';

    // 3. Title tag
    const titleMatch = html.match(/<title>([^<]*)<\/title>/i);
    const title = titleMatch ? titleMatch[1].trim() : '';

    // 4. Meta description
    const descMatch = html.match(/<meta\s+name=["']description["']\s+content=["']([^"']*)["']/i);
    const description = descMatch ? descMatch[1].trim() : '';

    // 5. Canonical link
    const canonicalMatch = html.match(/<link\s+rel=["']canonical["']\s+href=["']([^"']*)["']/i);
    const canonical = canonicalMatch ? canonicalMatch[1].trim() : '';

    // 6. Open Graph tags
    const ogTitleMatch = html.match(/<meta\s+property=["']og:title["']\s+content=["']([^"']*)["']/i);
    const ogDescMatch = html.match(/<meta\s+property=["']og:description["']\s+content=["']([^"']*)["']/i);
    const ogUrlMatch = html.match(/<meta\s+property=["']og:url["']\s+content=["']([^"']*)["']/i);
    const hasOg = Boolean(ogTitleMatch && ogDescMatch && ogUrlMatch);

    // 7. Skip link
    const hasSkipLink = html.includes('#main-content') && html.includes('Przejdź do treści');

    // 8. Media / Player presence
    const hasAudio = /<audio\b[^>]*>/i.test(html);
    const hasIframe = /<iframe\b[^>]*>/i.test(html);

    // 9. Links to original media
    const hasOriginalLinks =
      html.includes('https://www.youtube.com/watch?v=') ||
      html.includes('https://podcasters.spotify.com/pod/show/');

    const routeReport = {
      route: r.path,
      file: r.file,
      hasLangPl,
      h1Count,
      h1Text,
      hasSingleH1: h1Count === 1,
      title,
      description,
      canonical,
      hasOg,
      ogTitle: ogTitleMatch?.[1],
      hasSkipLink,
      hasAudio,
      hasIframe,
      hasOriginalLinks
    };

    report.push(routeReport);

    console.log(`Ścieżka: ${r.path}`);
    console.log(`- lang="pl": ${hasLangPl}`);
    console.log(`- Liczba H1: ${h1Count} (Tytuł H1: "${h1Text}")`);
    console.log(`- Title: "${title}"`);
    console.log(`- Meta description: "${description.slice(0, 70)}..."`);
    console.log(`- Canonical: ${canonical}`);
    console.log(`- OpenGraph: ${hasOg ? 'OK' : 'BRAK'}`);
    console.log(`- Skip link A11y: ${hasSkipLink ? 'OK' : 'BRAK'}`);
    if (r.path.includes('podcast/')) console.log(`- Odtwarzacz audio: ${hasAudio ? 'OK' : 'BRAK'}`);
    if (r.path === '/youtube') console.log(`- Odtwarzacz wideo: ${hasIframe ? 'OK' : 'BRAK'}`);
    console.log('');
  }

  // Save report to evidence
  fs.writeFileSync('evidence/seo-and-a11y.json', JSON.stringify(report, null, 2));
  console.log('Zapisano pełny raport w: evidence/seo-and-a11y.json');
}

verifyAll();

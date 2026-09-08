const routes = [
  { path: '/', expectedH1: 'programowanie', name: 'Strona główna' },
  { path: '/o-nas', expectedH1: 'programowania', name: 'O nas' },
  { path: '/podcast', expectedH1: 'Podcasty Przeprogramowanych', name: 'Katalog podcastów' },
  { path: '/podcast/opanuj-ai', expectedH1: 'Opanuj.AI Podcast', name: 'Podcast Opanuj.AI' },
  { path: '/podcast/przeprogramowani', expectedH1: 'Podcast Przeprogramowani', name: 'Podcast Przeprogramowani' },
  { path: '/youtube', expectedH1: 'Filmy i webinary na YouTube', name: 'YouTube' },
  { path: '/kursy', expectedH1: 'Edukacja technologiczna w epoce AI', name: 'Kursy' }
];

async function verifyAll() {
  console.log('====================================================');
  console.log('       ROUTING & SEO DETAILED VERIFICATION         ');
  console.log('====================================================\n');

  let allPassed = true;

  for (const r of routes) {
    const url = `http://localhost:4321${r.path}`;
    const res = await fetch(url);
    const html = await res.text();

    const statusOk = res.status === 200;
    const hasLangPl = html.includes('lang="pl"');

    // H1 check
    const h1Matches = html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/gi) || [];
    const h1Count = h1Matches.length;
    const h1Text = h1Count > 0 ? h1Matches[0].replace(/<[^>]*>?/gm, '').trim() : 'NONE';
    const h1Ok = h1Count === 1;

    // Title check
    const titleMatch = html.match(/<title>([\s\S]*?)<\/title>/i);
    const title = titleMatch ? titleMatch[1].trim() : 'NONE';
    const titleOk = title.length > 5;

    // Meta description check
    const descMatch = html.match(/<meta\s+name="description"\s+content="([^"]*)"/i) ||
                      html.match(/<meta\s+content="([^"]*)"\s+name="description"/i);
    const desc = descMatch ? descMatch[1] : 'NONE';
    const descOk = desc.length > 10;

    // Canonical link check
    const canonMatch = html.match(/<link\s+rel="canonical"\s+href="([^"]*)"/i) ||
                       html.match(/<link\s+href="([^"]*)"\s+rel="canonical"/i);
    const canonical = canonMatch ? canonMatch[1] : 'NONE';
    const canonOk = canonical.startsWith('https://przeprogramowani.pl');

    // OG Title check
    const ogTitleMatch = html.match(/<meta\s+property="og:title"\s+content="([^"]*)"/i);
    const ogTitle = ogTitleMatch ? ogTitleMatch[1] : 'NONE';
    const ogTitleOk = ogTitle.length > 5;

    // OG Desc check
    const ogDescMatch = html.match(/<meta\s+property="og:description"\s+content="([^"]*)"/i);
    const ogDesc = ogDescMatch ? ogDescMatch[1] : 'NONE';
    const ogDescOk = ogDesc.length > 10;

    // OG URL check
    const ogUrlMatch = html.match(/<meta\s+property="og:url"\s+content="([^"]*)"/i);
    const ogUrl = ogUrlMatch ? ogUrlMatch[1] : 'NONE';
    const ogUrlOk = ogUrl.startsWith('https://przeprogramowani.pl');

    const routePassed = statusOk && hasLangPl && h1Ok && titleOk && descOk && canonOk && ogTitleOk && ogDescOk && ogUrlOk;

    if (!routePassed) allPassed = false;

    console.log(`[ROUTE: ${r.path}] ${routePassed ? '✅ PASS' : '❌ FAIL'}`);
    console.log(`  - Status: ${res.status} (expected 200)`);
    console.log(`  - lang="pl": ${hasLangPl}`);
    console.log(`  - H1 count: ${h1Count} | H1 text: "${h1Text}"`);
    console.log(`  - Title: "${title}"`);
    console.log(`  - Meta Description: "${desc}"`);
    console.log(`  - Canonical URL: "${canonical}"`);
    console.log(`  - OG Title: "${ogTitle}"`);
    console.log(`  - OG URL: "${ogUrl}"`);
    console.log('----------------------------------------------------');
  }

  if (allPassed) {
    console.log('\n🎉 ALL 7 ROUTES FULLY COMPLIANT WITH HTTP 200, H1 & SEO SPECS!');
  } else {
    console.error('\n⚠️ SOME CHECKS FAILED!');
    process.exit(1);
  }
}

verifyAll().catch(err => {
  console.error(err);
  process.exit(1);
});

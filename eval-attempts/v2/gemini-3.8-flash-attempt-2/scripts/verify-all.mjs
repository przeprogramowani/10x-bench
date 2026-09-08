import http from 'http';
import { spawn } from 'child_process';
import { readFileSync, writeFileSync } from 'fs';

const BASE_URL = 'http://127.0.0.1:8798';

function fetchUrl(path) {
  return new Promise((resolve, reject) => {
    http.get(`${BASE_URL}${path}`, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve({ status: res.statusCode, headers: res.headers, body: data }));
    }).on('error', reject);
  });
}

async function run() {
  console.log('--- Starting verification run ---');
  const results = {
    timestamp: new Date().toISOString(),
    routes: {},
    routesTrailingSlash: {},
    seo: {},
    controlledFailure: {},
    researchEvidence: {
      site: 'https://przeprogramowani.pl',
      opanujAiRss: 'https://anchor.fm/s/e2cb03d0/podcast/rss',
      podcastRss: 'https://anchor.fm/s/c72d808/podcast/rss',
      youtubeFeed: 'https://www.youtube.com/feeds/videos.xml?channel_id=UCb2Y3vMeD6N4WDt5Acw7Arw',
      courses: [
        { id: '10xdevs', url: 'https://10xdevs.pl' },
        { id: 'opanuj-frontend', url: 'https://www.opanujfrontend.pl' },
        { id: 'opanuj-typescript', url: 'https://www.opanujtypescript.pl' }
      ],
      founders: ['Przemek Smyrdek', 'Marcin Czarkowski']
    }
  };

  const requiredRoutes = [
    '/',
    '/o-nas',
    '/podcast',
    '/podcast/opanuj-ai',
    '/podcast/przeprogramowani',
    '/youtube',
    '/kursy'
  ];

  // 1. Verify standard routes
  for (const r of requiredRoutes) {
    try {
      const res = await fetchUrl(r);
      const h1Count = (res.body.match(/<h1[^>]*>[\s\S]*?<\/h1>/gi) || []).length;
      const title = (res.body.match(/<title[^>]*>([\s\S]*?)<\/title>/i) || [])[1] || '';
      const desc = (res.body.match(/<meta\s+name="description"\s+content="([^"]*)"/i) || [])[1] || '';
      const canonical = (res.body.match(/<link\s+rel="canonical"\s+href="([^"]*)"/i) || [])[1] || '';
      const ogTitle = (res.body.match(/<meta\s+property="og:title"\s+content="([^"]*)"/i) || [])[1] || '';
      const lang = (res.body.match(/<html[^>]+lang="([^"]*)"/i) || [])[1] || '';

      results.routes[r] = {
        httpStatus: res.status,
        contentType: res.headers['content-type'],
        h1Count,
        title,
        hasDescription: Boolean(desc),
        canonical,
        ogTitle,
        lang,
        bodyLength: res.body.length
      };
      console.log(`Route ${r}: HTTP ${res.status}, H1: ${h1Count}, Title: "${title}"`);
    } catch (err) {
      results.routes[r] = { error: err.message };
      console.error(`Route ${r} FAILED:`, err.message);
    }
  }

  // 2. Verify routes with trailing slash
  for (const r of requiredRoutes) {
    const pathWithSlash = r === '/' ? '/' : `${r}/`;
    try {
      const res = await fetchUrl(pathWithSlash);
      results.routesTrailingSlash[pathWithSlash] = {
        httpStatus: res.status
      };
      console.log(`Route with slash ${pathWithSlash}: HTTP ${res.status}`);
    } catch (err) {
      results.routesTrailingSlash[pathWithSlash] = { error: err.message };
    }
  }

  // 3. Verify Controlled Failure experiment
  console.log('Testing controlled failure on /podcast/opanuj-ai?simulate_failure=1');
  const failureRes = await fetchUrl('/podcast/opanuj-ai?simulate_failure=1');
  const hasFallbackNotice = failureRes.body.includes('Tryb odporności na awarie');
  const audioCount = (failureRes.body.match(/<audio/gi) || []).length;
  results.controlledFailure = {
    route: '/podcast/opanuj-ai?simulate_failure=1',
    httpStatus: failureRes.status,
    hasFallbackNotice,
    audioPlayersRendered: audioCount,
    success: failureRes.status === 200 && hasFallbackNotice && audioCount > 0
  };
  console.log(`Controlled failure test: HTTP ${failureRes.status}, FallbackNotice: ${hasFallbackNotice}, AudioPlayers: ${audioCount}`);

  writeFileSync('verification-results.json', JSON.stringify(results, null, 2), 'utf-8');
  console.log('Saved verification-results.json');
}

run();

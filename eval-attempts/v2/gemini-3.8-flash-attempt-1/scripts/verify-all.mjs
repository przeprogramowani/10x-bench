import { execSync, spawn } from 'node:child_process';
import { chromium } from 'playwright';
import fs from 'node:fs';

const PORT = 4333;
const BASE_URL = `http://localhost:${PORT}`;

const ROUTES = [
  { path: '/', name: 'home', expectedH1: 'Szersze spojrzenie na programowanie' },
  { path: '/o-nas', name: 'o-nas', expectedH1: 'O nas — Misja i twórcy Przeprogramowani.pl' },
  { path: '/podcast', name: 'podcast-hub', expectedH1: 'Podcasty Przeprogramowanych — Opanuj.AI i Rozmowy z gośćmi' },
  { path: '/podcast/opanuj-ai', name: 'opanuj-ai', expectedH1: 'Opanuj.AI Podcast — Praktyczna sztuczna inteligencja dla inżynierów' },
  { path: '/podcast/przeprogramowani', name: 'podcast-przeprogramowani', expectedH1: 'Podcast Przeprogramowani — Rozmowy o inżynierii i karierze w IT' },
  { path: '/youtube', name: 'youtube', expectedH1: 'Oficjalny kanał YouTube Przeprogramowani' },
  { path: '/kursy', name: 'kursy', expectedH1: 'Programy edukacyjne i kursy dla programistów' },
];

async function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function run() {
  console.log('=== STEP 1: VERIFYING PACKAGES & VERSIONS ===');
  const pkg = JSON.parse(fs.readFileSync('package.json', 'utf8'));
  const lock = JSON.parse(fs.readFileSync('package-lock.json', 'utf8'));

  const installedAstro = lock.packages?.['node_modules/astro']?.version || pkg.dependencies.astro;
  const installedReact = lock.packages?.['node_modules/react']?.version || pkg.dependencies.react;
  const installedTailwind = lock.packages?.['node_modules/tailwindcss']?.version || pkg.dependencies.tailwindcss;
  const installedCloudflare = lock.packages?.['node_modules/@astrojs/cloudflare']?.version || pkg.dependencies['@astrojs/cloudflare'];

  console.log({
    astro: installedAstro,
    react: installedReact,
    tailwindcss: installedTailwind,
    cloudflareAdapter: installedCloudflare,
  });

  console.log('\n=== STEP 2: BUILDING PRODUCTION ARTIFACTS ===');
  const buildStart = Date.now();
  execSync('npm run build', { stdio: 'inherit' });
  const buildDuration = ((Date.now() - buildStart) / 1000).toFixed(2);
  console.log(`Build completed in ${buildDuration}s`);

  console.log('\n=== STEP 3: STARTING LOCAL WORKERS PREVIEW (PORT ' + PORT + ') ===');
  try {
    execSync('npx astro preview stop', { stdio: 'ignore' });
  } catch {}
  execSync(`npx astro preview --port ${PORT}`, { stdio: 'inherit' });
  await sleep(1500);

  console.log('\n=== STEP 4: HTTP ROUTE VERIFICATION ===');
  const httpResults = [];
  for (const r of ROUTES) {
    const res = await fetch(`${BASE_URL}${r.path}`);
    const html = await res.text();
    const cfCache = res.headers.get('cf-cache-status');

    // Check SEO
    const h1Matches = html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/gi) || [];
    const titleMatches = html.match(/<title>([\s\S]*?)<\/title>/i) || [];
    const metaDescMatches = html.match(/<meta[^>]+name=["']description["'][^>]+content=["']([^"']+)["']/i) || [];
    const canonicalMatches = html.match(/<link[^>]+rel=["']canonical["'][^>]+href=["']([^"']+)["']/i) || [];
    const ogTitleMatches = html.match(/<meta[^>]+property=["']og:title["'][^>]+content=["']([^"']+)["']/i) || [];

    const result = {
      path: r.path,
      status: res.status,
      cfCache,
      h1Count: h1Matches.length,
      h1Text: h1Matches[0]?.replace(/<[^>]+>/g, '').trim(),
      title: titleMatches[1]?.trim(),
      description: metaDescMatches[1]?.trim(),
      canonical: canonicalMatches[1]?.trim(),
      ogTitle: ogTitleMatches[1]?.trim(),
      hasPlLang: html.includes('lang="pl"'),
    };
    httpResults.push(result);
    console.log(`[HTTP ${res.status}] ${r.path} | H1 Count: ${h1Matches.length} | Title: ${result.title?.slice(0, 40)}...`);
  }

  console.log('\n=== STEP 5: BROWSER PLAYWRIGHT VERIFICATION (DESKTOP 1440px & MOBILE 390px) ===');
  const browser = await chromium.launch({ headless: true });

  const browserResults = [];
  for (const r of ROUTES) {
    // Desktop Viewport (1440x900)
    const pageDesktop = await browser.newPage({ viewport: { width: 1440, height: 900 } });
    await pageDesktop.goto(`${BASE_URL}${r.path}`, { waitUntil: 'networkidle' });
    const desktopOverflow = await pageDesktop.evaluate(() => document.documentElement.scrollWidth > window.innerWidth);
    const desktopScreenshot = `verification/screenshots/desktop-${r.name}.png`;
    await pageDesktop.screenshot({ path: desktopScreenshot, fullPage: true });

    // Mobile Viewport (390x844)
    const pageMobile = await browser.newPage({ viewport: { width: 390, height: 844 } });
    await pageMobile.goto(`${BASE_URL}${r.path}`, { waitUntil: 'networkidle' });
    const mobileOverflow = await pageMobile.evaluate(() => document.documentElement.scrollWidth > window.innerWidth);
    const mobileScreenshot = `verification/screenshots/mobile-${r.name}.png`;
    await pageMobile.screenshot({ path: mobileScreenshot, fullPage: true });

    // If home or o-nas, test mobile hamburger interaction
    let mobileNavTested = false;
    let mobileNavSuccess = false;
    if (r.path === '/') {
      mobileNavTested = true;
      const toggleBtn = await pageMobile.$('button[aria-controls="mobile-menu"]');
      if (toggleBtn) {
        await toggleBtn.click();
        await pageMobile.waitForSelector('#mobile-menu', { state: 'visible', timeout: 2000 });
        const isMenuVisible = await pageMobile.isVisible('#mobile-menu');
        // Test Escape key closes menu
        await pageMobile.keyboard.press('Escape');
        await sleep(300);
        const isMenuClosed = !(await pageMobile.isVisible('#mobile-menu'));
        mobileNavSuccess = isMenuVisible && isMenuClosed;
      }
    }

    // Check media playback components if on media pages
    let mediaCheck = null;
    if (r.path === '/podcast/opanuj-ai' || r.path === '/podcast/przeprogramowani') {
      const audioElements = await pageDesktop.$$('audio');
      const audioSrcs = await Promise.all(audioElements.map((el) => el.getAttribute('src')));
      mediaCheck = {
        type: 'podcast',
        audioCount: audioElements.length,
        hasAudioUrls: audioSrcs.every((src) => Boolean(src && src.startsWith('http'))),
      };
    } else if (r.path === '/youtube') {
      const iframes = await pageDesktop.$$('iframe');
      const iframeSrcs = await Promise.all(iframes.map((el) => el.getAttribute('src')));
      mediaCheck = {
        type: 'youtube',
        videoCount: iframes.length,
        hasEmbedUrls: iframeSrcs.every((src) => Boolean(src && src.includes('youtube'))),
      };
    }

    browserResults.push({
      path: r.path,
      desktopOverflow,
      mobileOverflow,
      desktopScreenshot,
      mobileScreenshot,
      mobileNavTested,
      mobileNavSuccess,
      mediaCheck,
    });

    console.log(`[Browser OK] ${r.path} | 1440px overflow: ${desktopOverflow} | 390px overflow: ${mobileOverflow}`);

    await pageDesktop.close();
    await pageMobile.close();
  }

  await browser.close();

  console.log('\n=== STEP 6: STOPPING PREVIEW SERVER ===');
  execSync('npx astro preview stop', { stdio: 'inherit' });

  console.log('\n=== STEP 7: CONTROLLED SOURCE FAILURE EXPERIMENT ===');
  console.log('Simulating failure for "opanuj-ai" source via SIMULATE_SOURCE_FAILURE="opanuj-ai"...');
  execSync('SIMULATE_SOURCE_FAILURE="opanuj-ai" npm run build', { stdio: 'inherit' });
  execSync(`npx astro preview --port ${PORT}`, { stdio: 'inherit' });
  await sleep(1500);

  const failRes = await fetch(`${BASE_URL}/podcast/opanuj-ai`);
  const failHtml = await failRes.text();
  const alertFound = failHtml.includes('Informacja o dostępności źródła') && failHtml.includes('Kontrolowana symulacja awarii');

  // Launch browser to capture failure state screenshot
  const failBrowser = await chromium.launch({ headless: true });
  const failPage = await failBrowser.newPage({ viewport: { width: 1440, height: 900 } });
  await failPage.goto(`${BASE_URL}/podcast/opanuj-ai`, { waitUntil: 'networkidle' });
  const failScreenshot = 'verification/screenshots/failure-resilience-opanuj-ai.png';
  await failPage.screenshot({ path: failScreenshot, fullPage: true });
  await failBrowser.close();

  execSync('npx astro preview stop', { stdio: 'inherit' });

  console.log(`Failure recovery status: HTTP ${failRes.status}, Alert rendered: ${alertFound}`);

  console.log('\n=== STEP 8: RESTORING CLEAN PRODUCTION BUILD ===');
  execSync('npm run build', { stdio: 'inherit' });

  return {
    pkg,
    installedAstro,
    installedReact,
    installedTailwind,
    installedCloudflare,
    buildDuration,
    httpResults,
    browserResults,
    failureExperiment: {
      status: failRes.status,
      alertFound,
      failScreenshot,
    },
  };
}

run()
  .then((data) => {
    fs.writeFileSync('verification/results.json', JSON.stringify(data, null, 2));
    console.log('\nVerification completed successfully! Results written to verification/results.json');
  })
  .catch((err) => {
    console.error('Verification failed:', err);
    process.exit(1);
  });

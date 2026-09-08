const { chromium } = require('playwright-core');

const BASE = process.env.BASE_URL || 'http://localhost:8787';
const ROUTES = ['/', '/o-nas', '/podcast', '/podcast/opanuj-ai', '/podcast/przeprogramowani', '/youtube', '/kursy'];

(async () => {
  const browser = await chromium.launch({ channel: 'chrome', headless: true });
  const out = { base: BASE, at: new Date().toISOString(), routes: {} };

  for (const route of ROUTES) {
    const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
    const res = await page.goto(BASE + route, { waitUntil: 'load' });
    const seo = await page.evaluate(() => ({
      lang: document.documentElement.lang,
      h1: [...document.querySelectorAll('h1')].map((h) => h.textContent.trim()),
      title: document.title,
      metaDescription: document.querySelector('meta[name="description"]')?.content ?? null,
      canonical: document.querySelector('link[rel="canonical"]')?.href ?? null,
      ogTitle: document.querySelector('meta[property="og:title"]')?.content ?? null,
      ogDescription: document.querySelector('meta[property="og:description"]')?.content ?? null,
      ogUrl: document.querySelector('meta[property="og:url"]')?.content ?? null,
      overflowX: document.documentElement.scrollWidth > document.documentElement.clientWidth + 1,
      audioPlayers: document.querySelectorAll('audio[controls]').length,
      ytEmbeds: document.querySelectorAll('iframe[src*="youtube"]').length,
      itemLinks: document.querySelectorAll('a[href*="spotify.com/pod/show"], a[href*="youtube.com/watch"]').length,
      navLinks: ['O nas', 'Podcasty', 'YouTube', 'Kursy'].map((l) =>
        !![...document.querySelectorAll('header a')].find((a) => a.textContent.trim() === l),
      ),
      homeLink: !!document.querySelector('header a[href="/"]'),
    }));
    const finalUrl = page.url();
    out.routes[route] = { status: res.status(), finalUrl, ...seo };

    if (route === '/' || route === '/podcast/opanuj-ai' || route === '/youtube') {
      await page.screenshot({ path: `evidence/desktop-1440${route === '/' ? '-home' : route.replaceAll('/', '_')}.png`, fullPage: false });
    }
    await page.close();

    // mobile
    const m = await browser.newPage({ viewport: { width: 390, height: 844 }, hasTouch: true });
    await m.goto(BASE + route, { waitUntil: 'load' });
    const mob = await m.evaluate(() => ({
      overflowX: document.documentElement.scrollWidth > document.documentElement.clientWidth + 1,
      scrollWidth: document.documentElement.scrollWidth,
      clientWidth: document.documentElement.clientWidth,
    }));
    out.routes[route].mobile = mob;
    if (route === '/') {
      // test mobile nav with mouse
      const btn = m.locator('button[aria-controls="mobile-menu"]');
      await btn.click();
      const opened = await m.locator('#mobile-menu').isVisible();
      await m.screenshot({ path: 'evidence/mobile-390-home-menu-open.png' });
      // keyboard: Escape closes
      await m.keyboard.press('Escape');
      const closedAfterEsc = !(await m.locator('#mobile-menu').isVisible());
      // keyboard: open via Enter on focused button
      await btn.focus();
      await m.keyboard.press('Enter');
      const openedViaKeyboard = await m.locator('#mobile-menu').isVisible();
      const firstLinkFocused = await m.evaluate(() => document.activeElement?.textContent?.trim());
      out.routes[route].mobileNav = { opened, closedAfterEsc, openedViaKeyboard, firstLinkFocused };
      await m.screenshot({ path: 'evidence/mobile-390-home-menu-keyboard.png' });
      await m.keyboard.press('Escape');
      await btn.click();
      await m.locator('#mobile-menu a[href="/o-nas"]').click();
      await m.waitForLoadState('load');
      out.routes[route].mobileNavClickNavigatedTo = m.url();
    }
    if (route === '/') {
      await m.screenshot({ path: 'evidence/mobile-390-home.png' });
    }
    await m.close();
  }

  // playback smoke test: audio element can load metadata (oprobanuj-ai)
  const p = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  await p.goto(BASE + '/podcast/opanuj-ai/', { waitUntil: 'load' });
  const audioTest = await p.evaluate(async () => {
    const a = document.querySelector('audio');
    if (!a) return { ok: false, reason: 'no audio element' };
    try {
      await new Promise((resolve, reject) => {
        const t = setTimeout(() => reject(new Error('timeout loading metadata')), 15000);
        a.addEventListener('loadedmetadata', () => { clearTimeout(t); resolve(); }, { once: true });
        a.addEventListener('error', () => { clearTimeout(t); reject(new Error('audio error event')); }, { once: true });
        a.load();
      });
      return { ok: true, duration: a.duration, src: a.currentSrc.slice(0, 120) };
    } catch (e) {
      return { ok: false, reason: String(e && e.message ? e.message : e) };
    }
  });
  out.audioPlayback = audioTest;

  // YouTube embed smoke test
  await p.goto(BASE + '/youtube/', { waitUntil: 'load' });
  const yt = await p.evaluate(() => {
    const f = document.querySelector('iframe[src*="youtube-nocookie"]');
    return { embedPresent: !!f, src: f ? f.getAttribute('src') : null };
  });
  out.youtubeEmbed = yt;
  await p.screenshot({ path: 'evidence/desktop-1440-youtube-embeds.png' });
  await p.close();

  await browser.close();
  require('fs').writeFileSync('evidence/browser-check.json', JSON.stringify(out, null, 2));
  console.log(JSON.stringify(out, null, 2));
})().catch((e) => { console.error('FATAL', e); process.exit(1); });

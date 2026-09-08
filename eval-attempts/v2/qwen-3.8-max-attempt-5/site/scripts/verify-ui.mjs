// UI verification script (P07/P08) — screenshots at 390px and 1440px,
// horizontal-overflow measurement, mobile nav interaction, focus visibility,
// playback element presence. Run against the local Workers preview.
// Usage: node scripts/verify-ui.mjs [baseUrl]
import { chromium } from 'playwright';
import { mkdirSync } from 'node:fs';

const BASE = process.argv[2] ?? 'http://127.0.0.1:8795';
const SHOTS = new URL('../../evidence/screenshots/', import.meta.url).pathname;
mkdirSync(SHOTS, { recursive: true });

const routes = [
  '/',
  '/o-nas',
  '/podcast',
  '/podcast/opanuj-ai',
  '/podcast/przeprogramowani',
  '/youtube',
  '/kursy',
];

const browser = await chromium.launch();
const results = [];

for (const [width, height, name] of [
  [1440, 900, 'desktop-1440'],
  [390, 844, 'mobile-390'],
]) {
  const page = await browser.newPage({ viewport: { width, height } });
  for (const route of routes) {
    await page.goto(BASE + route, { waitUntil: 'load', timeout: 30000 });
    const metrics = await page.evaluate(() => ({
      scrollWidth: document.documentElement.scrollWidth,
      clientWidth: document.documentElement.clientWidth,
      bodyScrollWidth: document.body.scrollWidth,
    }));
    const overflow = metrics.scrollWidth > metrics.clientWidth + 1;
    results.push({
      check: `${name} ${route}`,
      ...metrics,
      horizontalOverflow: overflow,
    });
    const file = `${SHOTS}${name}${route === '/' ? '_home' : route.replaceAll('/', '_')}.png`;
    await page.screenshot({ path: file });
  }
  await page.close();
}

// Mobile navigation: mouse, keyboard
const page = await browser.newPage({ viewport: { width: 390, height: 844 } });
await page.goto(BASE + '/', { waitUntil: 'load' });
const btn = page.locator('button[aria-controls="mobile-menu"]');
results.push({ check: 'mobile-nav button visible', visible: await btn.isVisible() });
await btn.click();
results.push({
  check: 'mobile-nav opens on click',
  ariaExpanded: await btn.getAttribute('aria-expanded'),
  menuLinks: await page.locator('#mobile-menu a').count(),
});
await page.screenshot({ path: `${SHOTS}mobile-390_nav-open.png` });
await page.locator('#mobile-menu a').first().focus();
await page.keyboard.press('Escape');
results.push({
  check: 'mobile-nav closes on Escape',
  ariaExpanded: await btn.getAttribute('aria-expanded'),
  menuCount: await page.locator('#mobile-menu').count(),
});
await btn.focus();
const focusRing = await page.evaluate(() => {
  const el = document.querySelector('button[aria-controls="mobile-menu"]');
  const s = getComputedStyle(el);
  return { outlineWidth: s.outlineWidth, outlineStyle: s.outlineStyle };
});
results.push({ check: 'focus ring on focused button', ...focusRing });

// Keyboard navigation reaches menu links when open
await btn.click();
const firstLinkHref = await page.locator('#mobile-menu a').first().getAttribute('href');
results.push({ check: 'mobile-nav first link href', firstLinkHref });
await page.keyboard.press('Escape');

// Playback elements
for (const route of ['/podcast/opanuj-ai', '/podcast/przeprogramowani']) {
  await page.goto(BASE + route, { waitUntil: 'load' });
  const audios = await page.locator('audio[controls]').evaluateAll((els) =>
    els.map((e) => ({ src: e.src.slice(0, 80), ready: e.readyState }))
  );
  results.push({ check: `playback ${route}`, audioPlayers: audios.length, sample: audios[0] });
  const episodeLinks = await page
    .locator('a[href*="/episodes/"]')
    .evaluateAll((els) => els.map((e) => e.href));
  results.push({
    check: `episode links ${route}`,
    uniqueEpisodeLinks: new Set(episodeLinks).size,
  });
}
await page.goto(BASE + '/youtube', { waitUntil: 'load' });
const iframes = await page
  .locator('iframe[src*="youtube-nocookie"]')
  .evaluateAll((els) => els.map((e) => e.src.slice(0, 90)));
results.push({ check: 'playback /youtube', embeddedPlayers: iframes.length, sample: iframes[0] });
const watchLinks = await page
  .locator('a[href*="youtube.com/watch"]')
  .evaluateAll((els) => els.map((e) => e.href));
results.push({ check: 'youtube watch links', unique: new Set(watchLinks).size });

// Try starting audio playback (headless; may be blocked without user gesture)
await page.goto(BASE + '/podcast/opanuj-ai', { waitUntil: 'load' });
const playResult = await page.evaluate(async () => {
  const audio = document.querySelector("audio[controls]");
  if (!audio) return 'no audio element';
  try {
    await audio.play();
    await new Promise((r) => setTimeout(r, 2500));
    return `playing=${!audio.paused} currentTime=${audio.currentTime.toFixed(2)} readyState=${audio.readyState}`;
  } catch (error) {
    return `play() rejected: ${String(error).slice(0, 120)}`;
  }
});
results.push({ check: 'audio play() attempt', playResult });

await browser.close();

console.log(JSON.stringify(results, null, 1));

import { chromium } from 'playwright';
import { writeFileSync, mkdirSync } from 'node:fs';

const BASE = process.env.BASE_URL || 'http://localhost:8788';
const ROUTES = ['/', '/o-nas', '/podcast', '/podcast/opanuj-ai', '/podcast/przeprogramowani', '/youtube', '/kursy'];
const VIEWPORTS = [
  { name: 'mobile-390', width: 390, height: 844 },
  { name: 'desktop-1440', width: 1440, height: 900 },
];

mkdirSync('evidence/screenshots', { recursive: true });
const browser = await chromium.launch();
const results = [];

for (const vp of VIEWPORTS) {
  const context = await browser.newContext({ viewport: { width: vp.width, height: vp.height } });
  const page = await context.newPage();
  for (const route of ROUTES) {
    const url = BASE + route;
    const response = await page.goto(url, { waitUntil: 'networkidle', timeout: 45000 });
    const metrics = await page.evaluate(() => ({
      scrollWidth: document.documentElement.scrollWidth,
      innerWidth: window.innerWidth,
      h1Count: document.querySelectorAll('h1').length,
      title: document.title,
      description: document.querySelector('meta[name="description"]')?.content ?? null,
      canonical: document.querySelector('link[rel="canonical"]')?.href ?? null,
      ogTitle: document.querySelector('meta[property="og:title"]')?.content ?? null,
      ogDescription: document.querySelector('meta[property="og:description"]')?.content ?? null,
      ogUrl: document.querySelector('meta[property="og:url"]')?.content ?? null,
      lang: document.documentElement.lang,
      audioPlayers: document.querySelectorAll('audio').length,
      youtubeIframes: document.querySelectorAll('iframe[src*="youtube-nocookie.com"]').length,
      itemLinks: document.querySelectorAll('article a[target="_blank"]').length,
      unclickableButtons: [...document.querySelectorAll('button')].filter((b) => b.getBoundingClientRect().width === 0).length,
    }));
    const horizontalOverflow = metrics.scrollWidth > metrics.innerWidth + 1;
    const file = `evidence/screenshots/${vp.name}${route.replaceAll('/', '_') || '_home'}.png`;
    await page.screenshot({ path: file, fullPage: route === '/' || route === '/youtube' });
    results.push({
      viewport: vp.name,
      route,
      status: response.status(),
      horizontalOverflow,
      ...metrics,
      screenshot: file,
    });
    console.log(`${vp.name} ${route} -> ${response.status()} overflow=${horizontalOverflow} h1=${metrics.h1Count} audio=${metrics.audioPlayers} yt=${metrics.youtubeIframes}`);
  }
  await context.close();
}

// Mobile navigation interaction test at 390px
const context = await browser.newContext({ viewport: { width: 390, height: 844 } });
const page = await context.newPage();
await page.goto(BASE + '/', { waitUntil: 'networkidle' });
const navResult = { openedByClick: false, linksVisible: 0, closedByEscape: false, keyboardAccessible: false };
const menuButton = page.locator('button[aria-controls="mobile-menu"]');
await menuButton.click();
await page.waitForSelector('#mobile-menu', { timeout: 5000 });
navResult.openedByClick = await page.locator('#mobile-menu').isVisible();
navResult.linksVisible = await page.locator('#mobile-menu a').count();
await page.screenshot({ path: 'evidence/screenshots/mobile-390_nav-open.png' });
await page.keyboard.press('Escape');
await page.waitForTimeout(300);
navResult.closedByEscape = !(await page.locator('#mobile-menu').isVisible().catch(() => false));
await page.goto(BASE + '/', { waitUntil: 'networkidle' });
for (let i = 0; i < 8; i += 1) {
  await page.keyboard.press('Tab');
  const focused = await page.evaluate(() => document.activeElement?.getAttribute('aria-controls'));
  if (focused === 'mobile-menu') {
    navResult.keyboardAccessible = true;
    navResult.tabStopsToButton = i + 1;
    break;
  }
}
const hasVisibleFocus = await page.evaluate(() => {
  const el = document.activeElement;
  if (!el) return false;
  const style = getComputedStyle(el);
  return style.outlineWidth !== '0px' && style.outlineStyle !== 'none';
});
navResult.focusVisibleOnButton = hasVisibleFocus;
await menuButton.press('Enter');
await page.waitForSelector('#mobile-menu', { timeout: 5000 });
navResult.openedByKeyboardEnter = await page.locator('#mobile-menu').isVisible();
results.push({ viewport: 'mobile-390', route: '/', test: 'mobile-navigation', ...navResult });
console.log('mobile nav:', JSON.stringify(navResult));
await context.close();

await browser.close();
writeFileSync('evidence/ui-check.json', JSON.stringify(results, null, 2));
const overflowIssues = results.filter((r) => r.horizontalOverflow);
console.log('overflow issues:', overflowIssues.length);
process.exit(0);

import { chromium } from 'playwright';
import assert from 'node:assert/strict';
import fs from 'node:fs';

const origin = process.argv[2] ?? 'http://127.0.0.1:4178';
const browser = await chromium.launch({ headless: true });
const evidence = [];
try {
  for (const width of [1440, 390]) {
    const page = await browser.newPage({ viewport: { width, height: 900 } });
    const errors = [];
    page.on('pageerror', error => errors.push(error.message));
    for (const route of ['/v1/', '/v1/benchmark/']) {
      const response = await page.goto(origin + route, { waitUntil: 'networkidle' });
      assert.equal(response.status(), 200);
      assert.match(await page.title(), /V1/);
      assert.equal(await page.locator('h1').count(), 1);
      const overflow = await page.evaluate(() => document.documentElement.scrollWidth > window.innerWidth);
      assert.equal(overflow, false, `${route} overflows at ${width}px`);
      const canonical = await page.locator('link[rel="canonical"]').getAttribute('href');
      assert.equal(new URL(canonical).pathname.replace(/\/$/, ''), route.replace(/\/$/, ''));
      if (route === '/v1/') {
        assert.match(await page.locator('body').innerText(), /122 evaluated attempts/);
        await page.getByRole('link', { name: 'V1 methodology', exact: true }).click();
        assert.equal(new URL(page.url()).pathname.replace(/\/$/, ''), '/v1/benchmark');
        await page.goto(origin + route, { waitUntil: 'networkidle' });
      } else {
        await page.getByRole('button', { name: 'EN', exact: true }).click();
        assert.match(await page.locator('#prompt-content').innerText(), /Create a modern and responsive website/);
        await page.getByRole('button', { name: 'PL', exact: true }).click();
        assert.match(await page.locator('#prompt-content').innerText(), /Utwórz/);
      }
      if (width === 390) {
        await page.getByRole('button', { name: 'Toggle menu' }).click();
        assert.equal(await page.locator('#mobile-menu').isVisible(), true);
        await page.getByRole('button', { name: 'Toggle menu' }).click();
        assert.equal(await page.locator('#mobile-menu').isVisible(), false);
      }
      const screenshot = `/tmp/10x-v1-${route.includes('benchmark') ? 'methodology' : 'results'}-${width}.png`;
      await page.screenshot({ path: screenshot, fullPage: false });
      evidence.push({ route, width, status: response.status(), screenshot, overflow });
    }
    assert.deepEqual(errors, []);
    await page.close();
  }
  const expected = JSON.parse(fs.readFileSync(new URL('../archive/v1/leaderboard.json', import.meta.url), 'utf8'));
  const actual = await fetch(origin + '/api/leaderboard.json').then(r => r.json());
  assert.deepEqual(actual, expected);
  console.log(JSON.stringify({ evidence, legacyApiMatches: true }, null, 2));
} finally {
  await browser.close();
}

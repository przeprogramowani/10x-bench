import { chromium } from 'playwright';

const routes = [
  { path: '/', name: 'home' },
  { path: '/o-nas', name: 'o-nas' },
  { path: '/podcast', name: 'podcast-catalog' },
  { path: '/podcast/opanuj-ai', name: 'podcast-opanuj-ai' },
  { path: '/podcast/przeprogramowani', name: 'podcast-przeprogramowani' },
  { path: '/youtube', name: 'youtube' },
  { path: '/kursy', name: 'kursy' }
];

async function runBrowserTests() {
  console.log('Starting Playwright Browser Verification on http://localhost:4321...');
  const browser = await chromium.launch({ headless: true });
  const results = [];

  for (const r of routes) {
    const url = `http://localhost:4321${r.path}`;

    // 1. Desktop Test (1440px)
    const desktopContext = await browser.newContext({
      viewport: { width: 1440, height: 900 },
      deviceScaleFactor: 1
    });
    const desktopPage = await desktopContext.newPage();
    await desktopPage.goto(url, { waitUntil: 'networkidle' });

    // Check horizontal scroll
    const desktopOverflow = await desktopPage.evaluate(() => {
      return document.documentElement.scrollWidth > window.innerWidth;
    });

    const desktopScreenshotPath = `evidence/screenshots/desktop-${r.name}.png`;
    await desktopPage.screenshot({ path: desktopScreenshotPath, fullPage: false });

    // Check keyboard focus
    await desktopPage.keyboard.press('Tab');
    const focusedTag = await desktopPage.evaluate(() => document.activeElement?.tagName);

    await desktopContext.close();

    // 2. Mobile Test (390px)
    const mobileContext = await browser.newContext({
      viewport: { width: 390, height: 844 },
      isMobile: true,
      hasTouch: true
    });
    const mobilePage = await mobileContext.newPage();
    await mobilePage.goto(url, { waitUntil: 'networkidle' });

    // Check horizontal scroll
    const mobileOverflow = await mobilePage.evaluate(() => {
      return document.documentElement.scrollWidth > window.innerWidth;
    });

    // Test mobile menu button and drawer
    let mobileMenuPassed = false;
    const menuButton = mobilePage.locator('button[aria-controls="mobile-menu"]');
    if (await menuButton.count() > 0) {
      // Click menu button
      await menuButton.click();
      await mobilePage.waitForTimeout(200);

      // Check if mobile menu is displayed
      const mobileMenu = mobilePage.locator('#mobile-menu');
      const isVisible = await mobileMenu.isVisible();

      if (isVisible) {
        // Press Escape to test keyboard accessibility
        await mobilePage.keyboard.press('Escape');
        await mobilePage.waitForTimeout(200);
        const isClosed = !(await mobileMenu.isVisible());
        mobileMenuPassed = isVisible && isClosed;
      }
    }

    const mobileScreenshotPath = `evidence/screenshots/mobile-${r.name}.png`;
    await mobilePage.screenshot({ path: mobileScreenshotPath, fullPage: false });

    // Media element verification on specific pages
    let mediaCheck = null;
    if (r.path.includes('/podcast/')) {
      const audioCount = await mobilePage.locator('audio').count();
      const spotifyLinks = await mobilePage.locator('a[href*="spotify"]').count();
      mediaCheck = { audioPlayers: audioCount, originalLinks: spotifyLinks };
    } else if (r.path === '/youtube') {
      const iframeCount = await mobilePage.locator('iframe[src*="youtube"]').count();
      const ytLinks = await mobilePage.locator('a[href*="youtube.com/watch"]').count();
      mediaCheck = { embeddedVideos: iframeCount, directLinks: ytLinks };
    }

    await mobileContext.close();

    results.push({
      route: r.path,
      name: r.name,
      desktopOverflow,
      mobileOverflow,
      focusedTag,
      mobileMenuPassed,
      mediaCheck
    });

    console.log(`[TESTED: ${r.path}]`);
    console.log(`  - Desktop 1440px: overflow=${desktopOverflow ? 'FAIL (has horizontal scroll)' : 'PASS (no scroll)'}`);
    console.log(`  - Mobile 390px: overflow=${mobileOverflow ? 'FAIL (has horizontal scroll)' : 'PASS (no scroll)'}`);
    console.log(`  - Mobile Menu (click + ESC): ${mobileMenuPassed ? 'PASS' : 'SKIPPED/FAIL'}`);
    if (mediaCheck) {
      console.log(`  - Media elements:`, JSON.stringify(mediaCheck));
    }
  }

  await browser.close();

  console.log('\n--- BROWSER VERIFICATION SUMMARY ---');
  const allPassed = results.every(r => !r.desktopOverflow && !r.mobileOverflow);
  console.log(`Overall Responsiveness & Layout Status: ${allPassed ? 'ALL PASSED' : 'SOME FAILED'}`);
  return results;
}

runBrowserTests().catch(err => {
  console.error('Playwright tests error:', err);
  process.exit(1);
});

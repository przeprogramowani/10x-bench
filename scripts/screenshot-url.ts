/**
 * Simple URL screenshot tool
 *
 * Usage:
 *   npx tsx scripts/screenshot-url.ts https://example.com https://google.com
 *   npx tsx scripts/screenshot-url.ts --width=1920 --height=1080 https://example.com
 *
 * Options:
 *   --width=N     Viewport width (default: 1280)
 *   --height=N    Viewport height (default: 720)
 *   --cols=N      Grid columns (default: auto based on count)
 */

import fs from "fs";
import path from "path";
import { chromium } from "playwright";

const SCRIPT_DIR = path.dirname(new URL(import.meta.url).pathname);
const OUTPUT_DIR = path.join(SCRIPT_DIR, "internal-screenshots");

function parseArgs(argv: string[]) {
  const urls: string[] = [];
  let width = 1280;
  let height = 720;
  let cols: number | null = null;

  for (const arg of argv.slice(2)) {
    if (arg.startsWith("--width=")) {
      width = parseInt(arg.split("=")[1], 10);
    } else if (arg.startsWith("--height=")) {
      height = parseInt(arg.split("=")[1], 10);
    } else if (arg.startsWith("--cols=")) {
      cols = parseInt(arg.split("=")[1], 10);
    } else if (arg.startsWith("http://") || arg.startsWith("https://")) {
      urls.push(arg);
    } else if (arg.includes(".") && !arg.startsWith("-")) {
      // Bare domain like "example.com" — auto-prepend https://
      urls.push(`https://${arg}`);
    } else {
      console.error(`Unknown argument: ${arg}`);
      process.exit(1);
    }
  }

  if (urls.length === 0) {
    console.error("Usage: npx tsx scripts/screenshot-url.ts [--width=N] [--height=N] [--cols=N] <url> [url...]");
    process.exit(1);
  }

  return { urls, width, height, cols };
}

function urlToFilename(url: string): string {
  return url
    .replace(/^https?:\/\//, "")
    .replace(/[^a-zA-Z0-9.-]/g, "_")
    .replace(/_+/g, "_")
    .replace(/_$/, "");
}

async function main() {
  const { urls, width, height, cols } = parseArgs(process.argv);
  const viewport = { width, height };

  fs.mkdirSync(OUTPUT_DIR, { recursive: true });

  console.log(`Taking ${urls.length} screenshot(s) at ${width}x${height}...`);

  const browser = await chromium.launch();
  const screenshotFiles: string[] = [];

  try {
    for (const url of urls) {
      const filename = `${urlToFilename(url)}.png`;
      const filepath = path.join(OUTPUT_DIR, filename);

      console.log(`  ${url}`);
      const page = await browser.newPage({ viewport });

      try {
        await page.goto(url, { waitUntil: "load", timeout: 30_000 });
        // Let JS-driven rendering settle (SPAs, lazy images, animations)
        await page.waitForLoadState("domcontentloaded");
        await page.waitForTimeout(2000);
        await page.screenshot({ path: filepath });
        screenshotFiles.push(filename);
        console.log(`    -> ${filename}`);
      } catch (err) {
        const msg = err instanceof Error ? err.message : String(err);
        console.error(`    FAILED: ${msg}`);
      } finally {
        await page.close();
      }
    }

    // Generate grid from ALL screenshots in the output directory
    const allScreenshots = fs
      .readdirSync(OUTPUT_DIR)
      .filter((f) => f.endsWith(".png") && f !== "grid.png")
      .sort();

    if (allScreenshots.length > 0) {
      console.log(`\nGenerating grid from ${allScreenshots.length} screenshot(s)...`);
      const gridCols = cols ?? Math.ceil(Math.sqrt(allScreenshots.length));
      const gridRows = Math.ceil(allScreenshots.length / gridCols);
      const totalWidth = gridCols * width;
      const totalHeight = gridRows * height;

      const imgTags = allScreenshots
        .map((file, i) => {
          const col = i % gridCols;
          const row = Math.floor(i / gridCols);
          const data = fs.readFileSync(path.join(OUTPUT_DIR, file));
          const b64 = data.toString("base64");
          return `<img src="data:image/png;base64,${b64}" style="position:absolute;left:${col * width}px;top:${row * height}px;width:${width}px;height:${height}px;" />`;
        })
        .join("\n");

      const page = await browser.newPage({
        viewport: { width: totalWidth, height: totalHeight },
      });
      await page.setContent(`
        <html>
        <body style="margin:0;padding:0;width:${totalWidth}px;height:${totalHeight}px;position:relative;overflow:hidden;">
          ${imgTags}
        </body>
        </html>
      `, { waitUntil: "load" });

      // Wait for all images to fully decode before taking the screenshot
      await page.waitForFunction(() => {
        const imgs = document.querySelectorAll("img");
        return imgs.length > 0 && Array.from(imgs).every((img) => img.complete && img.naturalWidth > 0);
      });

      const gridPath = path.join(OUTPUT_DIR, "grid.png");
      await page.screenshot({
        path: gridPath,
        clip: { x: 0, y: 0, width: totalWidth, height: totalHeight },
      });
      await page.close();
      console.log(`  -> grid.png (${gridCols}x${gridRows})`);
    }
  } finally {
    await browser.close();
  }

  console.log(`\nDone. Screenshots saved to ${OUTPUT_DIR}/`);
}

main().catch((err) => {
  console.error("Fatal error:", err);
  process.exit(1);
});

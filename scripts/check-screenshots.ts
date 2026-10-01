import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

/**
 * Fails when a scored attempt would be published without its screenshots.
 *
 * Every attempt in website/src/data/results.json (i.e. every scored attempt)
 * needs website/public/screenshots/{attempt}.png, and every model needs
 * {model}_filmstrip.png; both must also be in screenshot-hashes.json, which
 * the dashboard uses to build the image URLs.
 *
 * Runs as part of `npm run build` (after process-results), so scoring can
 * happen before screenshots exist but publishing cannot. Fix a failure with
 * `npm run screenshots`.
 *
 * Usage: tsx scripts/check-screenshots.ts
 */

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const RESULTS_PATH = path.join(ROOT, "website/src/data/results.json");
const SCREENSHOTS_DIR = path.join(ROOT, "website/public/screenshots");
const HASHES_PATH = path.join(ROOT, "website/src/data/screenshot-hashes.json");

interface Results {
  results: Array<{ id: string; modelBaseId: string }>;
}

function main() {
  const results = JSON.parse(fs.readFileSync(RESULTS_PATH, "utf8")) as Results;
  const hashes = JSON.parse(fs.readFileSync(HASHES_PATH, "utf8")) as Record<string, string>;

  const required = new Set<string>();
  for (const r of results.results) {
    required.add(`${r.id}.png`);
    required.add(`${r.modelBaseId}_filmstrip.png`);
  }

  const problems: string[] = [];
  for (const file of [...required].sort()) {
    const onDisk = fs.existsSync(path.join(SCREENSHOTS_DIR, file));
    const inManifest = file in hashes;
    if (!onDisk) problems.push(`${file}: missing in website/public/screenshots`);
    else if (!inManifest) problems.push(`${file}: missing in screenshot-hashes.json`);
  }

  if (problems.length) {
    console.error(`✗ ${problems.length} screenshot problem(s) for scored attempts:`);
    for (const p of problems) console.error(`  - ${p}`);
    console.error("Run `npm run screenshots` before publishing.");
    process.exit(1);
  }
  console.log(`✓ Screenshots present for ${results.results.length} scored attempts (${required.size} files)`);
}

main();

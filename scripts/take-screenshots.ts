/**
 * Screenshot automation for 10xBench evaluation attempts
 *
 * Usage:
 *   npm run take-screenshots
 *   npm run take-screenshots -- --concurrency=5
 *
 * Options:
 *   --concurrency=N    Process N attempts in parallel (default: 3)
 *
 * Features:
 *   - Parallel processing with configurable concurrency
 *   - Automatic port management (avoids conflicts)
 *   - Graceful cleanup on SIGINT/SIGTERM
 *   - Skips already-existing screenshots
 *   - Generates filmstrips for each model family
 */

import fs from "fs";
import path from "path";
import crypto from "crypto";
import {spawn, ChildProcess} from "child_process";
import {chromium, Browser} from "playwright";
import net from "net";

const EVAL_ATTEMPTS_DIR = path.resolve("eval-attempts");
const SCREENSHOTS_DIR = path.resolve("./website/public/screenshots");
const SCREENSHOT_HASHES_PATH = path.resolve("./website/src/data/screenshot-hashes.json");
const BASE_PORT = 4321;
const DEV_SERVER_TIMEOUT_MS = 60_000;
const CLEANUP_WAIT_MS = 3000;
const DEFAULT_CONCURRENCY = 3;

const VIEWPORT_WIDTH = 1280;
const VIEWPORT_HEIGHT = 720;
const VIEWPORT_RATIO = VIEWPORT_WIDTH / VIEWPORT_HEIGHT;

const VIEWPORT = {width: VIEWPORT_WIDTH, height: VIEWPORT_HEIGHT};

// Track all spawned processes for cleanup
const activeProcesses = new Set<ChildProcess>();
let isShuttingDown = false;

interface AttemptInfo {
  dirName: string;
  projectRoot: string;
}

async function isPortAvailable(port: number): Promise<boolean> {
  return new Promise((resolve) => {
    const server = net.createServer();
    server.once("error", () => resolve(false));
    server.once("listening", () => {
      server.close();
      resolve(true);
    });
    server.listen(port);
  });
}

async function findAvailablePort(startPort: number, maxAttempts = 10): Promise<number> {
  for (let i = 0; i < maxAttempts; i++) {
    const port = startPort + i;
    if (await isPortAvailable(port)) {
      return port;
    }
  }
  throw new Error(`No available ports found in range ${startPort}-${startPort + maxAttempts - 1}`);
}

function killProcess(proc: ChildProcess): void {
  if (proc.pid) {
    try {
      process.kill(-proc.pid, "SIGTERM");
    } catch {
      try {
        proc.kill("SIGTERM");
      } catch {
        /* ignore */
      }
    }
  }
  activeProcesses.delete(proc);
}

async function cleanupAllProcesses(): Promise<void> {
  if (isShuttingDown) return;
  isShuttingDown = true;

  console.log("\n\nCleaning up dev servers...");
  for (const proc of activeProcesses) {
    killProcess(proc);
  }

  if (activeProcesses.size > 0) {
    await sleep(CLEANUP_WAIT_MS);
  }
}

function setupSignalHandlers(): void {
  process.on("SIGINT", async () => {
    console.log("\n\nReceived SIGINT, cleaning up...");
    await cleanupAllProcesses();
    process.exit(130);
  });

  process.on("SIGTERM", async () => {
    console.log("\n\nReceived SIGTERM, cleaning up...");
    await cleanupAllProcesses();
    process.exit(143);
  });
}

function discoverAttempts(): AttemptInfo[] {
  const entries = fs.readdirSync(EVAL_ATTEMPTS_DIR, {withFileTypes: true});
  const attempts: AttemptInfo[] = [];

  for (const entry of entries) {
    if (!entry.isDirectory() || !entry.name.includes("-attempt-")) continue;

    const dirPath = path.join(EVAL_ATTEMPTS_DIR, entry.name);

    // Check for root-level package.json first
    if (fs.existsSync(path.join(dirPath, "package.json"))) {
      attempts.push({dirName: entry.name, projectRoot: dirPath});
      continue;
    }

    // Scan immediate subdirectories for package.json
    const subEntries = fs.readdirSync(dirPath, {withFileTypes: true});
    for (const sub of subEntries) {
      if (
        sub.isDirectory() &&
        fs.existsSync(path.join(dirPath, sub.name, "package.json"))
      ) {
        attempts.push({
          dirName: entry.name,
          projectRoot: path.join(dirPath, sub.name),
        });
        break;
      }
    }
  }

  return attempts.sort((a, b) => a.dirName.localeCompare(b.dirName));
}

function getExistingScreenshots(): Set<string> {
  if (!fs.existsSync(SCREENSHOTS_DIR)) return new Set();
  return new Set(
    fs
      .readdirSync(SCREENSHOTS_DIR)
      .filter((f) => f.endsWith(".png") && !f.endsWith("_filmstrip.png"))
      .map((f) => f.replace(/\.png$/, "")),
  );
}

async function ensureNodeModules(projectRoot: string): Promise<void> {
  if (fs.existsSync(path.join(projectRoot, "node_modules"))) return;

  console.log("  Installing dependencies...");
  return new Promise((resolve, reject) => {
    const proc = spawn("npm", ["install"], {
      cwd: projectRoot,
      stdio: ["ignore", "pipe", "pipe"],
    });

    let stderr = "";
    proc.stderr?.on("data", (chunk: Buffer) => {
      stderr += chunk.toString();
    });

    proc.on("close", (code) => {
      if (code === 0) resolve();
      else
        reject(
          new Error(`npm install failed (exit ${code}): ${stderr.slice(-500)}`),
        );
    });
  });
}

interface DevServer {
  proc: ChildProcess;
  port: number;
}

async function startDevServer(projectRoot: string, port: number): Promise<DevServer> {
  const proc = spawn("npx", ["astro", "dev", "--port", String(port)], {
    cwd: projectRoot,
    stdio: ["ignore", "pipe", "pipe"],
    detached: true,
  });

  activeProcesses.add(proc);

  // Collect all output to extract the actual port
  let allOutput = "";

  const extractPort = (text: string): number | null => {
    // Match "localhost:<port>" or "127.0.0.1:<port>" from Astro output
    const match = text.match(/(?:localhost|127\.0\.0\.1):(\d+)/);
    return match ? parseInt(match[1], 10) : null;
  };

  const isReady = (text: string) =>
    text.includes("ready in") ||
    text.includes("watching for file changes") ||
    /localhost:\d+/.test(text) ||
    /127\.0\.0\.1:\d+/.test(text);

  const detectedPort = await new Promise<number>((resolve, reject) => {
    const timeout = setTimeout(() => {
      activeProcesses.delete(proc);
      reject(
        new Error(
          `Dev server did not start within ${DEV_SERVER_TIMEOUT_MS / 1000}s`,
        ),
      );
    }, DEV_SERVER_TIMEOUT_MS);

    const onData = (chunk: Buffer) => {
      const text = chunk.toString();
      allOutput += text;
      if (isReady(text)) {
        clearTimeout(timeout);
        proc.stdout?.removeListener("data", onData);
        proc.stderr?.removeListener("data", onErrData);
        resolve(extractPort(allOutput) ?? port);
      }
    };

    const onErrData = (chunk: Buffer) => {
      const text = chunk.toString();
      allOutput += text;
      if (isReady(text)) {
        clearTimeout(timeout);
        proc.stdout?.removeListener("data", onData);
        proc.stderr?.removeListener("data", onErrData);
        resolve(extractPort(allOutput) ?? port);
      }
    };

    proc.stdout?.on("data", onData);
    proc.stderr?.on("data", onErrData);

    proc.on("error", (err) => {
      clearTimeout(timeout);
      activeProcesses.delete(proc);
      reject(err);
    });

    proc.on("close", (code) => {
      clearTimeout(timeout);
      activeProcesses.delete(proc);
      reject(new Error(`Dev server exited prematurely with code ${code}`));
    });
  });

  return {proc, port: detectedPort};
}

function killDevServer(proc: ChildProcess): void {
  killProcess(proc);
}

function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function createErrorPlaceholder(
  browser: Browser,
  screenshotPath: string,
  dirName: string,
  errorMsg: string,
): Promise<void> {
  const page = await browser.newPage({viewport: VIEWPORT});
  await page.setContent(`
    <html>
    <body style="margin:0;width:${VIEWPORT_WIDTH}px;height:${VIEWPORT_HEIGHT}px;display:flex;flex-direction:column;align-items:center;justify-content:center;background:#1a1a2e;color:#e0e0e0;font-family:system-ui,sans-serif;text-align:center;padding:48px;box-sizing:border-box;">
      <div style="font-size:64px;margin-bottom:24px;">&#9888;</div>
      <div style="font-size:32px;font-weight:700;margin-bottom:16px;color:#ff6b6b;">Rendering Issue</div>
      <div style="font-size:18px;color:#a0a0a0;margin-bottom:32px;">${dirName}</div>
      <div style="font-size:14px;color:#666;max-width:700px;word-break:break-word;line-height:1.5;">${errorMsg.replace(/</g, "&lt;").replace(/>/g, "&gt;").slice(0, 300)}</div>
    </body>
    </html>
  `);
  await page.screenshot({path: screenshotPath});
  await page.close();
}

function getModelPrefix(dirName: string): string {
  return dirName.replace(/-attempt-\d+$/, "");
}

async function generateFilmstrips(browser: Browser): Promise<void> {
  const files = fs
    .readdirSync(SCREENSHOTS_DIR)
    .filter((f) => f.endsWith(".png") && !f.endsWith("_filmstrip.png"));

  // Group by model prefix
  const groups = new Map<string, string[]>();
  for (const file of files) {
    const prefix = getModelPrefix(file.replace(/\.png$/, ""));
    if (!groups.has(prefix)) groups.set(prefix, []);
    groups.get(prefix)!.push(file);
  }

  console.log(`Generating filmstrips for ${groups.size} model(s)...`);

  for (const [prefix, screenshots] of groups) {
    screenshots.sort();
    const count = screenshots.length;
    const totalWidth = count * VIEWPORT.width;

    // Build base64 image sources
    const imgTags = screenshots
      .map((file, i) => {
        const data = fs.readFileSync(path.join(SCREENSHOTS_DIR, file));
        const b64 = data.toString("base64");
        return `<img src="data:image/png;base64,${b64}" style="position:absolute;left:${i * VIEWPORT.width}px;top:0;width:${VIEWPORT.width}px;height:${VIEWPORT.height}px;" />`;
      })
      .join("\n");

    const page = await browser.newPage({
      viewport: {width: totalWidth, height: VIEWPORT.height},
    });
    await page.setContent(`
      <html>
      <body style="margin:0;padding:0;width:${totalWidth}px;height:${VIEWPORT.height}px;position:relative;overflow:hidden;">
        ${imgTags}
      </body>
      </html>
    `);

    const filmstripPath = path.join(SCREENSHOTS_DIR, `${prefix}_filmstrip.png`);
    await page.screenshot({path: filmstripPath});
    await page.close();
    console.log(`  ✓ ${prefix}_filmstrip.png (${count} attempts)`);
  }
}

function cleanScreenshotsDir(dir: string) {
  // Remove all .png files in the directory (ignore subdirectories for safety)
  if (fs.existsSync(dir)) {
    for (const file of fs.readdirSync(dir)) {
      const filePath = path.join(dir, file);
      try {
        if (
          fs.statSync(filePath).isFile() &&
          file.toLowerCase().endsWith(".png")
        ) {
          fs.unlinkSync(filePath);
        }
      } catch {
        // ignore errors (e.g., ENOENT if file was deleted)
      }
    }
  }
}

async function processAttempt(
  browser: Browser,
  attempt: AttemptInfo,
  portOffset: number,
  index: number,
  total: number,
): Promise<{success: boolean; error?: string}> {
  console.log(`[${index}/${total}] ${attempt.dirName}`);
  let devServer: DevServer | null = null;

  try {
    await ensureNodeModules(attempt.projectRoot);

    const port = await findAvailablePort(BASE_PORT + portOffset);
    console.log(`  Starting dev server on port ${port}...`);
    devServer = await startDevServer(attempt.projectRoot, port);
    console.log(`  Dev server ready.`);

    const page = await browser.newPage({viewport: VIEWPORT});
    await page.goto(`http://localhost:${devServer.port}`, {
      waitUntil: "networkidle",
      timeout: 30_000,
    });

    const screenshotPath = path.join(SCREENSHOTS_DIR, `${attempt.dirName}.png`);
    await page.screenshot({path: screenshotPath});
    await page.close();

    console.log(`  ✓ Screenshot saved: ${attempt.dirName}.png`);
    return {success: true};
  } catch (err) {
    const msg = err instanceof Error ? err.message : String(err);
    console.error(`  ✗ FAILED: ${msg}`);

    // Create placeholder screenshot so this attempt is tracked
    const screenshotPath = path.join(SCREENSHOTS_DIR, `${attempt.dirName}.png`);
    try {
      await createErrorPlaceholder(browser, screenshotPath, attempt.dirName, msg);
      console.log(`  Placeholder saved: ${attempt.dirName}.png`);
    } catch (placeholderErr) {
      console.error(`  Could not create placeholder: ${placeholderErr}`);
    }

    return {success: false, error: msg};
  } finally {
    if (devServer) {
      killDevServer(devServer.proc);
      await sleep(CLEANUP_WAIT_MS);
    }
  }
}

async function processAttemptsInParallel(
  browser: Browser,
  attempts: AttemptInfo[],
  concurrency: number,
): Promise<{successes: string[]; failures: {name: string; error: string}[]}> {
  const successes: string[] = [];
  const failures: {name: string; error: string}[] = [];
  const total = attempts.length;

  // Process in batches with concurrency limit
  for (let i = 0; i < attempts.length; i += concurrency) {
    const batch = attempts.slice(i, Math.min(i + concurrency, attempts.length));

    const results = await Promise.all(
      batch.map((attempt, batchIndex) =>
        processAttempt(browser, attempt, batchIndex, i + batchIndex + 1, total)
      )
    );

    // Collect results
    batch.forEach((attempt, batchIndex) => {
      const result = results[batchIndex];
      if (result.success) {
        successes.push(attempt.dirName);
      } else {
        failures.push({name: attempt.dirName, error: result.error || "Unknown error"});
      }
    });
  }

  return {successes, failures};
}

function generateHashManifest(): void {
  const hashes: Record<string, string> = {};
  const files = fs.readdirSync(SCREENSHOTS_DIR).filter((f) => f.endsWith(".png"));

  for (const file of files) {
    const content = fs.readFileSync(path.join(SCREENSHOTS_DIR, file));
    const hash = crypto.createHash("md5").update(content).digest("hex").slice(0, 8);
    hashes[file] = hash;
  }

  fs.writeFileSync(SCREENSHOT_HASHES_PATH, JSON.stringify(hashes, null, 2) + "\n");
  console.log(`Screenshot hash manifest written (${files.length} files).`);
}

async function main() {
  // Set up signal handlers for graceful shutdown
  setupSignalHandlers();

  // Parse CLI arguments
  const concurrencyArg = process.argv.find((arg) => arg.startsWith("--concurrency="));
  const concurrency = concurrencyArg
    ? parseInt(concurrencyArg.split("=")[1], 10)
    : DEFAULT_CONCURRENCY;

  if (isNaN(concurrency) || concurrency < 1) {
    console.error("Invalid concurrency value. Using default:", DEFAULT_CONCURRENCY);
  }

  const effectiveConcurrency = isNaN(concurrency) || concurrency < 1 ? DEFAULT_CONCURRENCY : concurrency;

  // Ensure screenshots directory exists
  fs.mkdirSync(SCREENSHOTS_DIR, {recursive: true});

  console.log("Discovering eval-attempt directories...");
  const attempts = discoverAttempts();
  console.log(`Found ${attempts.length} attempt(s).`);

  const existing = getExistingScreenshots();
  const pending = attempts.filter((a) => !existing.has(a.dirName));

  let successes: string[] = [];
  let failures: {name: string; error: string}[] = [];

  const browser = await chromium.launch();

  try {
    if (pending.length === 0) {
      console.log("All screenshots are up to date.");
    } else {
      console.log(
        `${pending.length} screenshot(s) to take (${existing.size} already exist).`,
      );
      console.log(`Processing with concurrency: ${effectiveConcurrency}\n`);

      const results = await processAttemptsInParallel(browser, pending, effectiveConcurrency);
      successes = results.successes;
      failures = results.failures;
    }

    // Generate filmstrips from all screenshots (including previously existing ones)
    console.log("\nGenerating filmstrips...");
    await generateFilmstrips(browser);
  } finally {
    await browser.close();
    await cleanupAllProcesses();
  }

  // Generate content-hash manifest for cache busting
  generateHashManifest();

  // Summary
  console.log("\n--- Summary ---");
  console.log(`Successes: ${successes.length}`);
  if (failures.length > 0) {
    console.log(`Failures: ${failures.length}`);
    for (const f of failures) {
      console.log(`  - ${f.name}: ${f.error}`);
    }
  }
}

main().catch((err) => {
  console.error("Fatal error:", err);
  process.exit(1);
});

import fs from "fs";
import path from "path";
import {spawn, ChildProcess} from "child_process";
import {chromium, Browser} from "playwright";

const EVAL_ATTEMPTS_DIR = path.resolve("eval-attempts");
const SCREENSHOTS_DIR = path.resolve("./website/public/screenshots");
const PORT = 4321;
const DEV_SERVER_TIMEOUT_MS = 60_000;

const VIEWPORT_WIDTH = 1280;
const VIEWPORT_HEIGHT = 720;
const VIEWPORT_RATIO = VIEWPORT_WIDTH / VIEWPORT_HEIGHT;

const VIEWPORT = {width: VIEWPORT_WIDTH, height: VIEWPORT_HEIGHT};

interface AttemptInfo {
  dirName: string;
  projectRoot: string;
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
      .filter((f) => f.endsWith(".png"))
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

async function startDevServer(projectRoot: string): Promise<DevServer> {
  const proc = spawn("npx", ["astro", "dev", "--port", String(PORT)], {
    cwd: projectRoot,
    stdio: ["ignore", "pipe", "pipe"],
    detached: true,
  });

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
        resolve(extractPort(allOutput) ?? PORT);
      }
    };

    const onErrData = (chunk: Buffer) => {
      const text = chunk.toString();
      allOutput += text;
      if (isReady(text)) {
        clearTimeout(timeout);
        proc.stdout?.removeListener("data", onData);
        proc.stderr?.removeListener("data", onErrData);
        resolve(extractPort(allOutput) ?? PORT);
      }
    };

    proc.stdout?.on("data", onData);
    proc.stderr?.on("data", onErrData);

    proc.on("error", (err) => {
      clearTimeout(timeout);
      reject(err);
    });

    proc.on("close", (code) => {
      clearTimeout(timeout);
      reject(new Error(`Dev server exited prematurely with code ${code}`));
    });
  });

  return {proc, port: detectedPort};
}

function killDevServer(proc: ChildProcess): void {
  if (proc.pid) {
    try {
      process.kill(-proc.pid, "SIGTERM");
    } catch {
      // Process may already be dead
      try {
        proc.kill("SIGTERM");
      } catch {
        /* ignore */
      }
    }
  }
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

  console.log(`\nGenerating filmstrips for ${groups.size} model(s)...`);

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
    console.log(`  ${prefix}_filmstrip.png (${count} attempts)`);
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

async function main() {
  // Clean screenshots directory before each run
  fs.mkdirSync(SCREENSHOTS_DIR, {recursive: true});
  cleanScreenshotsDir(SCREENSHOTS_DIR);

  console.log("Discovering eval-attempt directories...");
  const attempts = discoverAttempts();
  console.log(`Found ${attempts.length} attempt(s).`);

  const existing = getExistingScreenshots();
  const pending = attempts.filter((a) => !existing.has(a.dirName));

  const browser = await chromium.launch();
  const successes: string[] = [];
  const failures: {name: string; error: string}[] = [];

  if (pending.length === 0) {
    console.log("All screenshots are up to date.");
  } else {
    console.log(
      `${pending.length} screenshot(s) to take (${existing.size} already exist).\n`,
    );

    for (const attempt of pending) {
      console.log(
        `[${successes.length + failures.length + 1}/${pending.length}] ${attempt.dirName}`,
      );
      let devServer: DevServer | null = null;

      try {
        await ensureNodeModules(attempt.projectRoot);

        console.log("  Starting dev server...");
        devServer = await startDevServer(attempt.projectRoot);
        console.log(`  Dev server ready on port ${devServer.port}.`);

        const page = await browser.newPage({viewport: VIEWPORT});
        await page.goto(`http://localhost:${devServer.port}`, {
          waitUntil: "networkidle",
          timeout: 30_000,
        });

        const screenshotPath = path.join(
          SCREENSHOTS_DIR,
          `${attempt.dirName}.png`,
        );
        await page.screenshot({path: screenshotPath});
        await page.close();

        console.log(`  Screenshot saved: ${screenshotPath}`);
        successes.push(attempt.dirName);
      } catch (err) {
        const msg = err instanceof Error ? err.message : String(err);
        console.error(`  FAILED: ${msg}`);

        // Create placeholder screenshot so this attempt is tracked
        const screenshotPath = path.join(
          SCREENSHOTS_DIR,
          `${attempt.dirName}.png`,
        );
        try {
          await createErrorPlaceholder(
            browser,
            screenshotPath,
            attempt.dirName,
            msg,
          );
          console.log(`  Placeholder saved: ${screenshotPath}`);
        } catch (placeholderErr) {
          console.error(`  Could not create placeholder: ${placeholderErr}`);
        }

        failures.push({name: attempt.dirName, error: msg});
      } finally {
        if (devServer) {
          killDevServer(devServer.proc);
          await sleep(2000); // Wait for port release
        }
      }
    }
  }

  // Generate filmstrips from all screenshots (including previously existing ones)
  await generateFilmstrips(browser);

  await browser.close();

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

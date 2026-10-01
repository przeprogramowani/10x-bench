import fs from "fs";
import os from "os";
import path from "path";
import { execSync, spawn } from "child_process";
import { fileURLToPath } from "url";

/**
 * 10xBench v2 regrade of the stack-related criteria for every scored attempt.
 *
 * v2 replaces the v1 "Tech stack" criterion (fixed Astro 5 / React 19 /
 * Tailwind 4 + mandatory @astrojs/cloudflare adapter) with two criteria:
 *
 *   Tech stack        - Astro, React and Tailwind CSS on the latest stable
 *                       major published on npm at the attempt's run date.
 *                       1 = all latest; 0.5 = exactly one package exactly one
 *                       major behind; 0 = anything else or a package missing.
 *   Cloudflare deploy - Deployable to Cloudflare Workers as built:
 *                       1 = Wrangler config valid for the rendering mode
 *                           (static: assets.directory -> build output;
 *                           on-demand: adapter + Worker entrypoint) and a
 *                           deploy script or README instructions;
 *                       0.5 = valid Workers config without deploy
 *                           instructions, or the legacy Pages path;
 *                       0 = no Cloudflare config, or on-demand rendering
 *                           without the adapter.
 *
 * The adapter is only required when the site renders routes on demand.
 * Both criteria are graded 0 / 0.5 / 1 and written at half weight (max 0.5
 * each), so together they replace the 1 point of v1 "Tech stack".
 *
 * With --deploy-check, every attempt whose static check finds a valid Workers
 * config is also verified end to end in a scratch copy: `npm ci` (or
 * `npm install` without a lockfile), `npm run build`, then
 * `wrangler deploy --dry-run` with a pinned Wrangler. A failing dry run drops
 * the score to 0; an install/build failure in the check environment keeps the
 * static score and is noted as unverified. Results are cached next to each
 * CSV (wrangler-dry-run.json + .log); --deploy-check=failed re-runs cached
 * failures and --deploy-check=force re-runs everything.
 *
 * Usage:
 *   tsx scripts/regrade-v2.ts                  # dry run, prints a report
 *   tsx scripts/regrade-v2.ts --json           # dry run, JSON report
 *   tsx scripts/regrade-v2.ts --deploy-check   # also run/use Wrangler dry runs
 *   tsx scripts/regrade-v2.ts --write          # rewrite eval-results CSVs
 */

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const RESULTS = path.join(ROOT, "eval-results");
const ATTEMPTS = path.join(ROOT, "eval-attempts");

const STACK_PACKAGES = ["astro", "react", "tailwindcss"] as const;
const WRANGLER_VERSION = "4.146.0";
// Tech stack + Cloudflare deploy share the 1 point of the v1 "Tech stack" criterion (total stays 10).
const CRITERION_WEIGHT = 0.5;
// Sequential: parallel Astro + Cloudflare builds collide on the workerd inspector port (9230).
const DEPLOY_CHECK_CONCURRENCY = 1;
type StackPackage = (typeof STACK_PACKAGES)[number];

// ---------------------------------------------------------------------------
// npm: first stable release date of each major
// ---------------------------------------------------------------------------

function majorReleaseDates(pkg: string): Map<number, string> {
  const raw = execSync(`npm view ${pkg} time --json`, { encoding: "utf8" });
  const time = JSON.parse(raw) as Record<string, string>;
  const majors = new Map<number, string>();
  for (const [version, iso] of Object.entries(time)) {
    const m = version.match(/^(\d+)\.\d+\.\d+$/);
    if (!m) continue;
    const major = Number(m[1]);
    const day = iso.slice(0, 10);
    if (!majors.has(major) || day < majors.get(major)!) majors.set(major, day);
  }
  return majors;
}

function latestMajorAt(majors: Map<number, string>, day: string): number {
  let best = -1;
  for (const [major, released] of majors) {
    if (released <= day && major > best) best = major;
  }
  return best;
}

// ---------------------------------------------------------------------------
// Attempt inspection
// ---------------------------------------------------------------------------

function readText(p: string): string {
  return fs.existsSync(p) ? fs.readFileSync(p, "utf8") : "";
}

/** Parses JSON, keeping the leading object when trailing garbage follows it (seen in two attempts). */
function readJson(p: string): any {
  const text = readText(p);
  if (!text) return {};
  try {
    return JSON.parse(text);
  } catch (e) {
    const pos = Number(String(e).match(/position (\d+)/)?.[1]);
    if (Number.isFinite(pos)) return JSON.parse(text.slice(0, pos));
    throw e;
  }
}

function projectRoot(attemptDir: string): string | null {
  if (fs.existsSync(path.join(attemptDir, "package.json"))) return attemptDir;
  const nested = fs
    .readdirSync(attemptDir, { withFileTypes: true })
    .filter((d) => d.isDirectory() && d.name !== "node_modules")
    .map((d) => path.join(attemptDir, d.name))
    .filter((d) => fs.existsSync(path.join(d, "package.json")));
  return nested.length === 1 ? nested[0] : null;
}

function declaredMajor(spec: string | undefined): number | "latest" | null {
  if (!spec) return null;
  if (/^(latest|\*|x)$/i.test(spec.trim())) return "latest";
  const m = spec.match(/(\d+)/);
  return m ? Number(m[1]) : null;
}

function installedMajors(root: string): Record<StackPackage, number | "latest" | null> {
  const pkg = readJson(path.join(root, "package.json"));
  const deps: Record<string, string> = { ...pkg.dependencies, ...pkg.devDependencies };
  const lock = readText(path.join(root, "package-lock.json"));
  const lockPkgs = lock ? (JSON.parse(lock).packages ?? {}) : {};

  const result = {} as Record<StackPackage, number | "latest" | null>;
  for (const name of STACK_PACKAGES) {
    const locked = lockPkgs[`node_modules/${name}`]?.version as string | undefined;
    let major: number | "latest" | null = locked ? Number(locked.split(".")[0]) : declaredMajor(deps[name]);
    // Tailwind 4 can be pulled in only via its Vite plugin.
    if (name === "tailwindcss" && major === null) {
      const vite = lockPkgs["node_modules/@tailwindcss/vite"]?.version ?? deps["@tailwindcss/vite"];
      if (vite) major = declaredMajor(vite);
    }
    result[name] = major;
  }
  return result;
}

function stripJsonc(text: string): string {
  let out = "";
  let inString = false;
  for (let i = 0; i < text.length; i++) {
    const c = text[i];
    if (inString) {
      out += c;
      if (c === "\\") out += text[++i] ?? "";
      else if (c === '"') inString = false;
      continue;
    }
    if (c === '"') {
      inString = true;
      out += c;
    } else if (c === "/" && text[i + 1] === "/") {
      while (i < text.length && text[i] !== "\n") i++;
      out += "\n";
    } else if (c === "/" && text[i + 1] === "*") {
      i += 2;
      while (i < text.length && !(text[i] === "*" && text[i + 1] === "/")) i++;
      i++;
    } else out += c;
  }
  return out.replace(/,(\s*[}\]])/g, "$1");
}

interface WranglerInfo {
  file: string | null;
  assetsDir: string | null;
  main: string | null;
  pagesOutputDir: string | null;
  /** Deprecated Workers Sites (`[site] bucket`), superseded by Workers static assets. */
  sitesBucket: string | null;
  parseError: boolean;
}

function readWrangler(root: string): WranglerInfo {
  for (const file of ["wrangler.jsonc", "wrangler.json"]) {
    const text = readText(path.join(root, file));
    if (!text) continue;
    try {
      const cfg = JSON.parse(stripJsonc(text));
      return {
        file,
        assetsDir: cfg.assets?.directory ?? null,
        main: cfg.main ?? null,
        pagesOutputDir: cfg.pages_build_output_dir ?? null,
        sitesBucket: cfg.site?.bucket ?? null,
        parseError: false,
      };
    } catch {
      return { file, assetsDir: null, main: null, pagesOutputDir: null, sitesBucket: null, parseError: true };
    }
  }
  const toml = readText(path.join(root, "wrangler.toml"));
  if (toml) {
    const value = (re: RegExp) => toml.match(re)?.[1] ?? null;
    const assetsBlock = toml.match(/^\[assets\]([\s\S]*?)(?=^\[|$(?![\s\S]))/m)?.[1] ?? "";
    return {
      file: "wrangler.toml",
      assetsDir:
        assetsBlock.match(/^\s*directory\s*=\s*["']([^"']+)["']/m)?.[1] ??
        value(/^\s*assets\s*=\s*\{[^}]*directory\s*=\s*["']([^"']+)["']/m),
      main: value(/^\s*main\s*=\s*["']([^"']+)["']/m),
      pagesOutputDir: value(/^\s*pages_build_output_dir\s*=\s*["']([^"']+)["']/m),
      sitesBucket: value(/^\s*bucket\s*=\s*["']([^"']+)["']/m),
      parseError: false,
    };
  }
  return { file: null, assetsDir: null, main: null, pagesOutputDir: null, sitesBucket: null, parseError: false };
}

function listSourceFiles(dir: string, acc: string[] = []): string[] {
  if (!fs.existsSync(dir)) return acc;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, entry.name);
    if (entry.isDirectory()) listSourceFiles(p, acc);
    else if (/\.(astro|ts|tsx|js|jsx|mjs|md|mdx)$/.test(entry.name)) acc.push(p);
  }
  return acc;
}

function normalizeDir(dir: string): string {
  return dir.replace(/^\.\//, "").replace(/\/+$/, "");
}

interface CloudflareResult {
  score: 0 | 0.5 | 1;
  notes: string;
  /** Static check found a valid Workers config, so `wrangler deploy --dry-run` applies. */
  workersCandidate: boolean;
}

function gradeCloudflare(root: string): CloudflareResult {
  const astroConfig = ["astro.config.mjs", "astro.config.ts", "astro.config.js", "astro.config.mts"]
    .map((f) => readText(path.join(root, f)))
    .find(Boolean) ?? "";
  const adapter = /@astrojs\/cloudflare/.test(astroConfig) && /adapter\s*:/.test(astroConfig);
  const outDir = normalizeDir(astroConfig.match(/outDir\s*:\s*["']([^"']+)["']/)?.[1] ?? "dist");
  const serverOutput = /output\s*:\s*["'](server|hybrid)["']/.test(astroConfig);
  const onDemandRoute = listSourceFiles(path.join(root, "src")).some((f) =>
    /export\s+const\s+prerender\s*=\s*false/.test(readText(f)),
  );
  const onDemand = serverOutput || onDemandRoute;

  const w = readWrangler(root);
  const pkg = readJson(path.join(root, "package.json"));
  const lockPkgs = readJson(path.join(root, "package-lock.json")).packages ?? {};
  const adapterVersion: string | undefined =
    lockPkgs["node_modules/@astrojs/cloudflare"]?.version ??
    { ...pkg.dependencies, ...pkg.devDependencies }["@astrojs/cloudflare"];
  // @astrojs/cloudflare >= 13 generates the Worker config (dist/server/wrangler.json, incl. `main`) at build time.
  const adapterGeneratesWorker = adapter && Number(adapterVersion?.match(/(\d+)/)?.[1] ?? 0) >= 13;
  const scripts = Object.values(pkg.scripts ?? {}).join(" ; ");
  const readme = readText(path.join(root, "README.md"));
  const workersDeployDoc = /wrangler\s+deploy/.test(scripts) || /wrangler\s+deploy/.test(readme);
  const pagesDeployDoc =
    /wrangler\s+pages\s+deploy/.test(scripts) ||
    /wrangler\s+pages\s+deploy/.test(readme) ||
    /cloudflare\s+pages/i.test(readme);

  const parts: string[] = [];
  parts.push(w.file ? `${w.file}` : "no Wrangler config");
  if (w.parseError) parts.push("Wrangler config does not parse");
  parts.push(adapter ? "@astrojs/cloudflare adapter configured" : "no adapter");
  parts.push(onDemand ? "on-demand rendering used" : "fully static output");

  if (onDemand && !adapter) {
    return {
      score: 0,
      notes: [...parts, "on-demand routes cannot run on Cloudflare without the adapter"].join("; "),
      workersCandidate: false,
    };
  }

  const assetsOk = w.assetsDir !== null && normalizeDir(w.assetsDir).startsWith(outDir);
  const workerEntrypointOk =
    adapterGeneratesWorker || (w.main !== null && (adapter || /_worker\.js|entrypoints\/server/.test(w.main)));
  const workersValid =
    !w.parseError && !w.pagesOutputDir && (onDemand ? adapter && workerEntrypointOk : assetsOk || workerEntrypointOk);

  if (workersValid) {
    if (w.assetsDir) parts.push(`assets.directory=${w.assetsDir}`);
    if (w.main) parts.push(`main=${w.main}`);
    else if (adapterGeneratesWorker) parts.push(`Worker entrypoint generated by @astrojs/cloudflare ${adapterVersion}`);
    if (workersDeployDoc) {
      return { score: 1, notes: [...parts, "Workers deploy via wrangler deploy documented"].join("; "), workersCandidate: true };
    }
    return {
      score: 0.5,
      notes: [...parts, "valid Workers config but no deploy script or instructions"].join("; "),
      workersCandidate: true,
    };
  }

  if (w.pagesOutputDir || (adapter && !w.file) || pagesDeployDoc) {
    if (w.pagesOutputDir) parts.push(`pages_build_output_dir=${w.pagesOutputDir}`);
    return { score: 0.5, notes: [...parts, "legacy Cloudflare Pages deployment path"].join("; "), workersCandidate: false };
  }

  if (w.sitesBucket) {
    return {
      score: 0.5,
      notes: [...parts, `site.bucket=${w.sitesBucket}`, "legacy Workers Sites deployment path"].join("; "),
      workersCandidate: false,
    };
  }

  if (w.assetsDir && !assetsOk) parts.push(`assets.directory=${w.assetsDir} does not match build output ${outDir}`);
  return { score: 0, notes: [...parts, "no valid Cloudflare deployment configuration"].join("; "), workersCandidate: false };
}

// ---------------------------------------------------------------------------
// Wrangler dry run (--deploy-check)
// ---------------------------------------------------------------------------

interface DeployCheck {
  ok: boolean;
  /** Stage that failed: install, build or wrangler. */
  failedStage: "install" | "build" | "wrangler" | null;
  error: string | null;
  wrangler: string;
  checkedAt: string;
}

const SKIP_COPY = new Set(["node_modules", ".wrangler", "dist", ".astro", ".git", ".vercel", ".netlify"]);

function stripAnsi(text: string): string {
  return text.replace(/\x1b\[[0-9;]*m/g, "");
}

function runStep(cmd: string, cwd: string, log: string[], timeoutMs: number): Promise<number> {
  return new Promise((resolve) => {
    log.push(`$ ${cmd}`);
    const env: NodeJS.ProcessEnv = { ...process.env, CI: "1", WRANGLER_SEND_METRICS: "false", ASTRO_TELEMETRY_DISABLED: "1" };
    delete env.CLOUDFLARE_API_TOKEN;
    delete env.CLOUDFLARE_ACCOUNT_ID;
    const child = spawn(cmd, { cwd, shell: true, env });
    const timer = setTimeout(() => child.kill("SIGKILL"), timeoutMs);
    const collect = (b: Buffer) => log.push(stripAnsi(b.toString()));
    child.stdout.on("data", collect);
    child.stderr.on("data", collect);
    child.on("close", (code) => {
      clearTimeout(timer);
      log.push(`[exit ${code ?? "killed"}]`);
      resolve(code ?? 1);
    });
  });
}

function firstError(log: string[]): string {
  const lines = log.join("").split("\n").map((l) => l.trim()).filter(Boolean);
  const hit = lines.find((l) => /✘|\[ERROR\]|^ERR!|^npm error|^error\b/i.test(l)) ?? lines.at(-2) ?? "unknown error";
  return hit.replace(/^✘\s*/, "").replace(/\s+/g, " ").slice(0, 220);
}

/** Installs the pinned Wrangler once (a shared `npx` cache breaks under concurrent installs). */
function ensureWrangler(): string {
  const dir = path.join(os.tmpdir(), `10xbench-wrangler-${WRANGLER_VERSION}`);
  const bin = path.join(dir, "node_modules", ".bin", "wrangler");
  if (!fs.existsSync(bin)) {
    fs.mkdirSync(dir, { recursive: true });
    execSync(`npm install --no-audit --no-fund --prefix "${dir}" wrangler@${WRANGLER_VERSION}`, { stdio: "ignore" });
  }
  return bin;
}

async function deployCheck(root: string, wrangler: string): Promise<{ result: DeployCheck; log: string }> {
  const work = fs.mkdtempSync(path.join(os.tmpdir(), "10xbench-deploy-"));
  const copy = path.join(work, "site");
  fs.cpSync(root, copy, { recursive: true, filter: (src) => !SKIP_COPY.has(path.basename(src)) });
  const log: string[] = [];
  const done = (failedStage: DeployCheck["failedStage"]) => ({
    result: {
      ok: failedStage === null,
      failedStage,
      error: failedStage ? firstError(log) : null,
      wrangler: WRANGLER_VERSION,
      checkedAt: new Date().toISOString(),
    },
    log: log.join(""),
  });
  try {
    const install = fs.existsSync(path.join(copy, "package-lock.json"))
      ? "npm ci --no-audit --no-fund"
      : "npm install --no-audit --no-fund";
    if ((await runStep(install, copy, log, 10 * 60_000)) !== 0) return done("install");
    if ((await runStep("npm run build", copy, log, 10 * 60_000)) !== 0) return done("build");
    const dryRun = `"${wrangler}" deploy --dry-run --outdir "${path.join(work, "out")}"`;
    if ((await runStep(dryRun, copy, log, 5 * 60_000)) !== 0) return done("wrangler");
    return done(null);
  } finally {
    fs.rmSync(work, { recursive: true, force: true });
  }
}

async function runPool<T>(items: T[], limit: number, fn: (item: T) => Promise<void>): Promise<void> {
  const queue = [...items];
  await Promise.all(
    Array.from({ length: Math.min(limit, queue.length) }, async () => {
      while (queue.length) await fn(queue.shift()!);
    }),
  );
}

function applyDeployCheck(cloudflare: CloudflareResult, check: DeployCheck): void {
  if (check.ok) {
    cloudflare.notes += `; wrangler deploy --dry-run passed (wrangler ${check.wrangler})`;
  } else if (check.failedStage === "wrangler") {
    cloudflare.score = 0;
    cloudflare.notes += `; wrangler deploy --dry-run failed (wrangler ${check.wrangler}): ${check.error}`;
  } else {
    cloudflare.notes += `; dry run not verified: ${check.failedStage} failed in the check environment`;
  }
}

// ---------------------------------------------------------------------------
// CSV handling
// ---------------------------------------------------------------------------

function csvCell(value: string): string {
  return /[",\n]/.test(value) ? `"${value.replace(/"/g, '""')}"` : value;
}

/** Run date from the "Test run" row (D.MM.YYYY HH:MM); falls back to the date the result was first committed. */
function runDay(csv: string, resultDir: string): { day: string; source: string } {
  const m = csv.match(/^Test run,(\d{1,2})\.(\d{2})\.(\d{4})/m);
  if (m) return { day: `${m[3]}-${m[2]}-${m[1].padStart(2, "0")}`, source: "Test run row" };
  const day = execSync(
    `git log --diff-filter=A --format=%ad --date=short -- "${path.relative(ROOT, resultDir)}" | tail -1`,
    { cwd: ROOT, encoding: "utf8" },
  ).trim();
  return { day, source: "first commit of result" };
}

function rewriteCsv(csv: string, techRow: string, cloudflareRow: string): string {
  const lines = csv.replace(/\s+$/, "").split("\n").filter((l) => !/^Cloudflare deploy,/.test(l));
  const i = lines.findIndex((l) => /^"?Tech stack"?,/.test(l));
  if (i === -1) throw new Error("no Tech stack row");
  lines.splice(i, 1, techRow, cloudflareRow);
  return lines.join("\n") + "\n";
}

// ---------------------------------------------------------------------------

interface Regrade {
  attempt: string;
  runDay: string;
  runDaySource: string;
  latest: Record<StackPackage, number>;
  installed: Record<StackPackage, number | "latest" | null>;
  oldTech: string;
  tech: { score: number; notes: string };
  cloudflare: CloudflareResult;
  csvFiles: string[];
  root: string;
}

async function main() {
  const write = process.argv.includes("--write");
  const asJson = process.argv.includes("--json");
  const deployFlag = process.argv.find((a) => a.startsWith("--deploy-check"));
  const recheck = deployFlag?.split("=")[1]; // "force" | "failed" | undefined

  const majors = Object.fromEntries(STACK_PACKAGES.map((p) => [p, majorReleaseDates(p)])) as Record<
    StackPackage,
    Map<number, string>
  >;

  const byAttempt = new Map<string, string[]>();
  for (const attempt of fs.readdirSync(RESULTS)) {
    const csvFiles = ["eval-result.csv", "eval-results.csv"]
      .map((f) => path.join(RESULTS, attempt, f))
      .filter((f) => fs.existsSync(f));
    if (csvFiles.length) byAttempt.set(attempt, csvFiles);
  }

  const regrades: Regrade[] = [];
  const skipped: string[] = [];
  for (const [attempt, csvFiles] of [...byAttempt].sort()) {
    const root = projectRoot(path.join(ATTEMPTS, attempt));
    if (!root) {
      skipped.push(`${attempt}: no project root`);
      continue;
    }
    const primaryCsv = fs.readFileSync(csvFiles[0], "utf8");
    const { day, source } = runDay(primaryCsv, path.dirname(csvFiles[0]));
    const latest = Object.fromEntries(
      STACK_PACKAGES.map((p) => [p, latestMajorAt(majors[p], day)]),
    ) as Record<StackPackage, number>;
    const installed = installedMajors(root);

    let behindPackages = 0;
    let maxBehind = 0;
    let missing = false;
    const versionNotes: string[] = [];
    for (const p of STACK_PACKAGES) {
      const v = installed[p];
      if (v === null) {
        missing = true;
        versionNotes.push(`${p} missing`);
        continue;
      }
      const major = v === "latest" ? latest[p] : v;
      const behind = Math.max(0, latest[p] - major);
      if (behind > 0) behindPackages++;
      maxBehind = Math.max(maxBehind, behind);
      versionNotes.push(
        `${p} ${v === "latest" ? "\"latest\" tag" : major}${behind ? ` (latest ${latest[p]})` : " (latest)"}`,
      );
    }
    const techScore = missing ? 0 : behindPackages === 0 ? 1 : behindPackages === 1 && maxBehind === 1 ? 0.5 : 0;
    const tech = {
      score: techScore,
      notes: `v2: latest stable majors at run date ${day}; ${versionNotes.join("; ")}`,
    };

    const cloudflare = gradeCloudflare(root);
    cloudflare.notes = `v2: ${cloudflare.notes}`;

    const oldTech = primaryCsv.match(/^"?Tech stack"?,([^,]+),/m)?.[1] ?? "?";
    regrades.push({
      attempt,
      runDay: day,
      runDaySource: source,
      latest,
      installed,
      oldTech,
      tech,
      cloudflare,
      csvFiles,
      root,
    });
  }

  if (deployFlag) {
    const candidates = regrades.filter((r) => r.cloudflare.workersCandidate);
    const wrangler = ensureWrangler();
    let finished = 0;
    await runPool(candidates, DEPLOY_CHECK_CONCURRENCY, async (r) => {
      const resultDir = path.dirname(r.csvFiles[0]);
      const cachePath = path.join(resultDir, "wrangler-dry-run.json");
      let check: DeployCheck;
      const cached: DeployCheck | null = fs.existsSync(cachePath) ? JSON.parse(fs.readFileSync(cachePath, "utf8")) : null;
      if (cached && recheck !== "force" && !(recheck === "failed" && !cached.ok)) {
        check = cached;
      } else {
        const { result, log } = await deployCheck(r.root, wrangler);
        check = result;
        fs.writeFileSync(cachePath, JSON.stringify(check, null, 2) + "\n");
        fs.writeFileSync(path.join(resultDir, "wrangler-dry-run.log"), log);
      }
      applyDeployCheck(r.cloudflare, check);
      console.error(
        `[deploy-check ${++finished}/${candidates.length}] ${r.attempt}: ${check.ok ? "passed" : `${check.failedStage} failed`}`,
      );
    });
  }

  if (write) {
    for (const r of regrades) {
      const weighted = (score: number) => String(score * CRITERION_WEIGHT);
      const techRow = ["Tech stack", weighted(r.tech.score), String(CRITERION_WEIGHT), csvCell(r.tech.notes)].join(",");
      const cfRow = [
        "Cloudflare deploy",
        weighted(r.cloudflare.score),
        String(CRITERION_WEIGHT),
        csvCell(r.cloudflare.notes),
      ].join(",");
      for (const f of r.csvFiles) {
        fs.writeFileSync(f, rewriteCsv(fs.readFileSync(f, "utf8"), techRow, cfRow));
      }
    }
  }

  if (asJson) {
    console.log(JSON.stringify({ regrades, skipped }, null, 2));
    return;
  }
  for (const r of regrades) {
    console.log(
      `${r.attempt.padEnd(30)} ${r.runDay}  tech ${r.oldTech} -> ${r.tech.score}  cf ${r.cloudflare.score}  | ${STACK_PACKAGES.map(
        (p) => `${p}=${r.installed[p]}/${r.latest[p]}`,
      ).join(" ")}`,
    );
  }
  if (skipped.length) console.log("\nSkipped:\n  " + skipped.join("\n  "));
  console.log(`\n${regrades.length} attempts ${write ? "rewritten" : "graded (dry run)"}`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});

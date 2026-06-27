import fs from "fs";
import os from "os";
import path from "path";
import { fileURLToPath } from "url";
import { DatabaseSync } from "node:sqlite";
import {
  AGENT_NAMES,
  getModelBaseId,
  isModelId,
} from "../eval-attempts/metadata";

/**
 * Calculates token usage and USD cost for OpenCode-run eval attempts and
 * (optionally) writes the cost back into each attempt's eval-results.csv.
 *
 * OpenCode >= 1.14 stores all session/message data in a SQLite database at
 *   ~/.local/share/opencode/opencode.db
 * (older versions used loose JSON files under storage/message/, which the DB
 * is a superset of). The `session` table records, per session:
 *   - directory          : the cwd the run executed in
 *   - tokens_input/output/reasoning/cache_read/cache_write
 *   - cost               : OpenCode's own computed USD cost (cache-aware)
 *
 * Because every eval attempt runs with its attempt directory as cwd, token
 * spend and cost are attributed to a specific `{model-id}-attempt-{N}` by
 * matching `directory` against `eval-attempts/`. Cost uses OpenCode's own
 * `cost` column (it accounts for the prompt-cache discount, which flat
 * input/output pricing in metadata.ts cannot).
 *
 * Usage:
 *   tsx scripts/calculate-cost.ts                 # report all OpenCode attempts
 *   tsx scripts/calculate-cost.ts glm-52          # report one model
 *   tsx scripts/calculate-cost.ts --json glm-52   # machine-readable output
 *   tsx scripts/calculate-cost.ts --write glm-52  # also upsert "API cost" row
 *                                                 # into each eval-results.csv
 *
 * Override the DB location with OPENCODE_DB or OPENCODE_DATA_DIR.
 */

interface AttemptUsage {
  attemptDir: string;
  modelBaseId: string;
  modelName: string;
  inputTokens: number;
  outputTokens: number;
  reasoningTokens: number;
  cacheReadTokens: number;
  cacheWriteTokens: number;
  cost: number;
  sessionCount: number;
}

function resolveDbPath(): string {
  if (process.env.OPENCODE_DB) return process.env.OPENCODE_DB;
  const base = process.env.OPENCODE_DATA_DIR
    ? process.env.OPENCODE_DATA_DIR.split(",")[0].trim()
    : path.join(os.homedir(), ".local", "share", "opencode");
  return path.join(base, "opencode.db");
}

function collectUsage(
  attemptsRoot: string,
  modelFilter: string | null,
): Map<string, AttemptUsage> {
  const usage = new Map<string, AttemptUsage>();
  const dbPath = resolveDbPath();
  if (!fs.existsSync(dbPath)) {
    throw new Error(`OpenCode DB not found at ${dbPath}`);
  }

  const db = new DatabaseSync(dbPath, { readOnly: true });
  try {
    const rows = db
      .prepare(
        `SELECT directory, cost,
                tokens_input AS input, tokens_output AS output,
                tokens_reasoning AS reasoning,
                tokens_cache_read AS cacheRead, tokens_cache_write AS cacheWrite
         FROM session
         WHERE directory LIKE '%/eval-attempts/%'`,
      )
      .all() as Array<Record<string, number | string>>;

    const prefix = attemptsRoot + path.sep;
    for (const r of rows) {
      const directory = String(r.directory);
      if (!directory.startsWith(prefix)) continue;

      const attemptDir = directory.slice(prefix.length).split(path.sep)[0];
      if (!/^.+-attempt-\d+$/.test(attemptDir)) continue;

      const modelBaseId = getModelBaseId(attemptDir);
      if (modelFilter && modelBaseId !== modelFilter) continue;

      if (!usage.has(attemptDir)) {
        usage.set(attemptDir, {
          attemptDir,
          modelBaseId,
          modelName: isModelId(modelBaseId)
            ? AGENT_NAMES[modelBaseId]
            : modelBaseId,
          inputTokens: 0,
          outputTokens: 0,
          reasoningTokens: 0,
          cacheReadTokens: 0,
          cacheWriteTokens: 0,
          cost: 0,
          sessionCount: 0,
        });
      }
      const u = usage.get(attemptDir)!;
      u.inputTokens += Number(r.input) || 0;
      u.outputTokens += Number(r.output) || 0;
      u.reasoningTokens += Number(r.reasoning) || 0;
      u.cacheReadTokens += Number(r.cacheRead) || 0;
      u.cacheWriteTokens += Number(r.cacheWrite) || 0;
      u.cost += Number(r.cost) || 0;
      u.sessionCount += 1;
    }
  } finally {
    db.close();
  }
  return usage;
}

/** Build the eval-results.csv row text for an attempt's cost. */
function costRow(u: AttemptUsage): string {
  const cost = `$${u.cost.toFixed(4)}`;
  const notes =
    `${cost} (in ${u.inputTokens} / out ${u.outputTokens} / ` +
    `cache ${u.cacheReadTokens} / ${u.sessionCount} session${u.sessionCount === 1 ? "" : "s"})`;
  return `API cost,${cost},N/A,${notes}`;
}

/** Upsert the "API cost" row into an attempt's eval-results.csv. Returns status. */
function writeCostToCsv(
  evalResultsDir: string,
  u: AttemptUsage,
): "updated" | "added" | "no-csv" {
  const dir = path.join(evalResultsDir, u.attemptDir);
  let csvPath = path.join(dir, "eval-results.csv");
  if (!fs.existsSync(csvPath)) csvPath = path.join(dir, "eval-result.csv");
  if (!fs.existsSync(csvPath)) return "no-csv";

  const raw = fs.readFileSync(csvPath, "utf-8");
  const eol = raw.includes("\r\n") ? "\r\n" : "\n";
  const trailing = /\n$/.test(raw);
  const lines = raw.replace(/\r\n/g, "\n").replace(/\n$/, "").split("\n");
  const row = costRow(u);

  const existingIdx = lines.findIndex((l) => /^"?API cost"?,/.test(l));
  let status: "updated" | "added";
  if (existingIdx >= 0) {
    lines[existingIdx] = row;
    status = "updated";
  } else {
    // Insert after "Test run" (or "Task completion time"), else append.
    let insertAt = lines.findIndex((l) => /^"?Test run"?,/.test(l));
    if (insertAt < 0) {
      insertAt = lines.findIndex((l) => /^"?Task completion time"?,/.test(l));
    }
    if (insertAt >= 0) lines.splice(insertAt + 1, 0, row);
    else lines.push(row);
    status = "added";
  }

  fs.writeFileSync(csvPath, lines.join(eol) + (trailing ? eol : ""));
  return status;
}

function main(): void {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  const projectRoot = path.resolve(__dirname, "..");
  const attemptsRoot = path.join(projectRoot, "eval-attempts");
  const evalResultsDir = path.join(projectRoot, "eval-results");

  const args = process.argv.slice(2);
  const asJson = args.includes("--json");
  const doWrite = args.includes("--write");
  const modelFilter = args.find((a) => !a.startsWith("--")) ?? null;

  const usage = collectUsage(attemptsRoot, modelFilter);
  const attempts = Array.from(usage.values()).sort((a, b) =>
    a.attemptDir.localeCompare(b.attemptDir, "en", { numeric: true }),
  );

  if (attempts.length === 0) {
    console.error(
      modelFilter
        ? `No OpenCode token data found for "${modelFilter}". Check the model ID or that the runs used OpenCode.`
        : "No OpenCode token data found in opencode.db.",
    );
    process.exit(modelFilter ? 1 : 0);
  }

  if (asJson) {
    console.log(JSON.stringify(attempts, null, 2));
    return;
  }

  console.log("\nOpenCode cost by attempt (cost = OpenCode's own computed value)\n");
  let grand = 0;
  for (const u of attempts) {
    console.log(
      `  ${u.attemptDir.padEnd(34)} in=${String(u.inputTokens).padStart(9)} ` +
        `out=${String(u.outputTokens).padStart(7)} cache=${String(u.cacheReadTokens).padStart(9)} ` +
        `sess=${u.sessionCount} cost=$${u.cost.toFixed(4)}`,
    );
    grand += u.cost;
  }

  // Per-model totals
  const models = new Map<string, { name: string; count: number; cost: number }>();
  for (const u of attempts) {
    const m =
      models.get(u.modelBaseId) ??
      { name: u.modelName, count: 0, cost: 0 };
    m.count += 1;
    m.cost += u.cost;
    models.set(u.modelBaseId, m);
  }
  console.log("\nPer-model totals:");
  for (const m of Array.from(models.values()).sort((a, b) => b.cost - a.cost)) {
    console.log(
      `  ${m.name.padEnd(20)} ${m.count} attempt(s)  total=$${m.cost.toFixed(4)} ` +
        `(avg $${(m.cost / m.count).toFixed(4)}/attempt)`,
    );
  }
  console.log(`\nGrand total: $${grand.toFixed(4)}\n`);

  if (doWrite) {
    console.log("Writing API cost row to eval-results.csv files:");
    for (const u of attempts) {
      const status = writeCostToCsv(evalResultsDir, u);
      console.log(`  ${u.attemptDir.padEnd(34)} ${status}`);
    }
    console.log("\nRun `npm run process-results` to refresh the dashboard.\n");
  } else {
    console.log("(Use --write to upsert these into eval-results.csv files.)\n");
  }
}

main();

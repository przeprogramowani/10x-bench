import fs from 'node:fs';
import path from 'node:path';
import os from 'node:os';
import { fileURLToPath } from 'node:url';
import { DatabaseSync } from 'node:sqlite';

export function sessionCost(db: DatabaseSync, attempt: any, canonicalDirectory: string) {
  if (!Array.isArray(attempt.sessions) || !attempt.sessions.length || new Set(attempt.sessions).size !== attempt.sessions.length) throw new Error('Unique recorded candidate session IDs are required');
  const query = db.prepare('SELECT id, directory, cost FROM session WHERE id = ?');
  let usd = 0;
  for (const id of attempt.sessions) {
    const row: any = query.get(id);
    if (!row || fs.realpathSync(row.directory) !== canonicalDirectory || typeof row.cost !== 'number' || !Number.isFinite(row.cost) || row.cost < 0) throw new Error(`Missing/mismatched candidate session: ${id}`);
    usd += row.cost;
  }
  return { usd, sessionIds: attempt.sessions };
}

function main() {
  const args = process.argv.slice(2);
  const id = args.find(a => !a.startsWith('--'));
  if (!id || !/^[a-z0-9][a-z0-9.-]*-attempt-[1-9]\d*$/.test(id)) throw new Error('Usage: npm run calculate-cost -- <V2-attempt-id> [--write] [--json]. V1 is frozen.');
  const root = fileURLToPath(new URL('../', import.meta.url));
  const resultDir = path.join(root, 'eval-results/v2', id);
  const attempt = JSON.parse(fs.readFileSync(path.join(resultDir, 'attempt.json'), 'utf8'));
  if (attempt.benchmarkVersion !== 'v2' || attempt.attemptId !== id) throw new Error('Wrong attempt identity/version');
  const cwd = fs.realpathSync(path.join(root, 'eval-attempts/v2', id));
  const dbPath = process.env.OPENCODE_DB ?? path.join(process.env.OPENCODE_DATA_DIR?.split(',')[0].trim() || path.join(os.homedir(), '.local/share/opencode'), 'opencode.db');
  const db = new DatabaseSync(dbPath, { readOnly: true });
  try {
    const cost = sessionCost(db, attempt, cwd);
    console.log(JSON.stringify({ attemptId: id, ...cost }, null, 2));
    if (args.includes('--write')) {
      const file = path.join(resultDir, 'evaluation.json');
      const evaluation = JSON.parse(fs.readFileSync(file, 'utf8'));
      if (evaluation.benchmarkVersion !== 'v2' || evaluation.attemptId !== id) throw new Error('Wrong evaluation identity/version');
      evaluation.cost = cost;
      fs.writeFileSync(file, JSON.stringify(evaluation, null, 2) + '\n');
    }
  } finally { db.close(); }
}
if (process.argv[1] && fs.realpathSync(process.argv[1]) === fileURLToPath(import.meta.url)) main();

/** Verify archive bytes and reproduce the historical ranking without reading implementations. */
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { createHash } from 'node:crypto';
import { execFileSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import { isDeepStrictEqual } from 'node:util';

const root = fileURLToPath(new URL('../', import.meta.url));
const archive = path.join(root, 'archive/v1');
const manifest: Record<string, string> = JSON.parse(fs.readFileSync(path.join(archive, 'integrity.json'), 'utf8'));
for (const [relative, expected] of Object.entries(manifest)) {
  const file = path.resolve(root, relative);
  if (!file.startsWith(root)) throw new Error(`Unsafe archive manifest path: ${relative}`);
  const actual = createHash('sha256').update(fs.readFileSync(file)).digest('hex');
  if (actual !== expected) throw new Error(`V1 archive changed: ${relative}`);
}

const scratch = fs.realpathSync(fs.mkdtempSync(path.join(os.tmpdir(), '10x-v1-reproduce-')));
try {
  // Reconstruct the original processor's layout from archived inputs only.
  // Its imports cannot reach live model metadata or current evaluation results.
  fs.mkdirSync(path.join(scratch, 'scripts'));
  fs.mkdirSync(path.join(scratch, 'eval-attempts'));
  fs.writeFileSync(path.join(scratch, 'package.json'), '{"type":"module"}\n');
  fs.copyFileSync(path.join(archive, 'inputs/process-results.ts'), path.join(scratch, 'scripts/process-results.ts'));
  fs.copyFileSync(path.join(archive, 'inputs/metadata.ts'), path.join(scratch, 'eval-attempts/metadata.ts'));
  fs.cpSync(path.join(archive, 'inputs/eval-results'), path.join(scratch, 'eval-results'), { recursive: true });
  execFileSync(process.execPath, ['--import', import.meta.resolve('tsx'), path.join(scratch, 'scripts/process-results.ts')], {
    cwd: scratch, encoding: 'utf8', stdio: 'pipe',
  });
  for (const [snapshot, regenerated] of [
    ['results.json', 'website/src/data/results.json'],
    ['leaderboard.json', 'website/public/api/leaderboard.json'],
  ]) {
    const { generatedAt: originalTime, ...expected } = JSON.parse(fs.readFileSync(path.join(archive, snapshot), 'utf8'));
    const { generatedAt: reproducedTime, ...actual } = JSON.parse(fs.readFileSync(path.join(scratch, regenerated), 'utf8'));
    if (!isDeepStrictEqual(actual, expected)) throw new Error(`V1 reproduction differs: ${snapshot}`);
  }
  console.log(`V1 verified: ${Object.keys(manifest).length} immutable files; ranking and legacy API reproduced from frozen inputs.`);
} finally {
  fs.rmSync(scratch, { recursive: true, force: true });
}

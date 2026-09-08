import fs from 'node:fs';
import path from 'node:path';
import { createHash } from 'node:crypto';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('../', import.meta.url));
const source = path.resolve(root, '../10x-bench-eval/benchmark/v2');
const target = path.join(root, 'benchmark/v2');
const names = ['prompt.md', 'assessment.md', 'criteria.json', 'eval.md', 'run-protocol.md'];
const hashes: Record<string, string> = {};
for (const name of names) hashes[name] = createHash('sha256').update(fs.readFileSync(path.join(source, name))).digest('hex');
const revision = `sha256:${createHash('sha256').update(JSON.stringify(hashes)).digest('hex')}`;
const manifest = { benchmarkVersion: 'v2', revision, source: 'przeprogramowani/10x-bench-eval/benchmark/v2', files: hashes };
if (process.argv.includes('--check')) {
  const current = JSON.parse(fs.readFileSync(path.join(target, 'manifest.json'), 'utf8'));
  if (JSON.stringify(current) !== JSON.stringify(manifest)) throw new Error('Benchmark revision differs from canonical evaluation repository');
  for (const name of names) if (!fs.readFileSync(path.join(source, name)).equals(fs.readFileSync(path.join(target, name)))) throw new Error(`Benchmark document differs: ${name}`);
} else {
  fs.mkdirSync(target, { recursive: true });
  for (const name of names) fs.copyFileSync(path.join(source, name), path.join(target, name));
  fs.writeFileSync(path.join(target, 'manifest.json'), JSON.stringify(manifest, null, 2) + '\n');
}
console.log(`V2 canonical bundle verified: ${revision}`);

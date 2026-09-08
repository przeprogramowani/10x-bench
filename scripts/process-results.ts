import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { collectV2 } from './process-v2';

/** Validate V2 before writing anything; V1 remains byte-for-byte frozen. */
export async function processResults(outputRoot?: string, root = fileURLToPath(new URL('../', import.meta.url))): Promise<void> {
  const { data: v2, excluded } = collectV2(root);
  for (const [snapshot, destination] of [
    ['results.json', 'website/src/data/results.json'],
    ['leaderboard.json', 'website/public/api/leaderboard.json'],
  ]) {
    const target = path.join(outputRoot ?? root, destination);
    fs.mkdirSync(path.dirname(target), { recursive: true });
    fs.copyFileSync(path.join(root, 'archive/v1', snapshot), target);
    console.log(`Preserved V1: ${destination}`);
  }
  for (const [destination, payload] of [
    ['website/src/data/results-v2.json', v2],
    ['website/public/api/v2/leaderboard.json', { schemaVersion: 1, benchmarkVersion: 'v2', benchmarkRevision: v2.benchmarkRevision, generatedAt: v2.generatedAt, totalAttempts: v2.totalAttempts, totalModels: v2.modelAverages.length, leaderboard: v2.modelAverages.slice(0, 10) }],
  ] as const) {
    const target = path.join(outputRoot ?? root, destination);
    fs.mkdirSync(path.dirname(target), { recursive: true });
    fs.writeFileSync(target, JSON.stringify(payload, null, 2) + '\n');
  }
  console.log(`V2: ${v2.totalAttempts} final attempts; ${excluded.length} unfinished/invalid records excluded.`);
}

if (process.argv[1] && fs.realpathSync(process.argv[1]) === fileURLToPath(import.meta.url)) {
  processResults().catch(error => { console.error(error); process.exitCode = 1; });
}

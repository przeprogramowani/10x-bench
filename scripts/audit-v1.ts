/** Compare existing V1 outputs with regeneration without overwriting either baseline. */
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { createHash } from 'node:crypto';
import { execFileSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import { isDeepStrictEqual } from 'node:util';
import { processResults } from './legacy-process-results';

const root = fileURLToPath(new URL('../', import.meta.url));
const scratch = fs.mkdtempSync(path.join(os.tmpdir(), '10x-v1-audit-'));
const read = (base: string, name: string) => JSON.parse(fs.readFileSync(path.join(base, name), 'utf8'));
const hash = (file: string) => createHash('sha256').update(fs.readFileSync(file)).digest('hex');
const revision = (cwd: string) => execFileSync('git', ['rev-parse', 'HEAD'], { cwd, encoding: 'utf8' }).trim();
const withoutTimestamp = ({ generatedAt, ...data }: any) => data;
const dataPath = 'website/src/data/results.json';
const apiPath = 'website/public/api/leaderboard.json';
const beforeHashes = [hash(path.join(root, dataPath)), hash(path.join(root, apiPath))];
try {
  await processResults(scratch);
  const before = read(root, dataPath);
  const after = read(scratch, dataPath);
  const oldById = new Map<string, any>(before.results.map((r: any) => [r.id, r]));
  const newById = new Map<string, any>(after.results.map((r: any) => [r.id, r]));
  const changed = [...oldById].flatMap(([id, value]) => {
    const next = newById.get(id);
    if (!next || isDeepStrictEqual(value, next)) return [];
    return [{ id, fields: Object.keys(value).filter(k => !isDeepStrictEqual(value[k], next[k])), beforeScore: value.totalScore, afterScore: next.totalScore }];
  });
  const files: Record<string, string> = {};
  for (const name of [dataPath, apiPath, 'eval-attempts/metadata.ts', 'prompt.md', '.claude/skills/10x-score-attempts/SKILL.md', '.claude/skills/10x-eval-model/SKILL.md']) files[name] = hash(path.join(root, name));
  // Evaluation outputs only; never traverse implementation directories.
  for (const dir of fs.readdirSync(path.join(root, 'eval-results')).sort()) {
    for (const name of ['eval-result.csv', 'eval-results.csv']) {
      const relative = `eval-results/${dir}/${name}`;
      if (fs.existsSync(path.join(root, relative))) files[relative] = hash(path.join(root, relative));
    }
  }
  const screenshots = fs.readdirSync(path.join(root, 'website/public/screenshots')).filter(n => n.endsWith('.png')).sort();
  for (const name of screenshots) files[`website/public/screenshots/${name}`] = hash(path.join(root, 'website/public/screenshots', name));
  const evalRoot = path.resolve(root, '../10x-bench-eval');
  for (const name of ['README.md', 'benchmark/prompt.md', 'benchmark/criteria.md', 'benchmark/eval.md', 'benchmark/context/przeprogramowani.md']) files[`../10x-bench-eval/${name}`] = hash(path.join(evalRoot, name));
  const report = {
    auditedAt: new Date().toISOString(),
    dashboardRevision: revision(root), evaluationRevision: revision(evalRoot),
    selectedBaseline: null,
    existing: { generatedAt: before.generatedAt, attempts: before.totalAttempts, models: before.modelAverages.length },
    regenerated: { attempts: after.totalAttempts, models: after.modelAverages.length },
    datasetMatchesExceptTimestamp: isDeepStrictEqual(withoutTimestamp(before), withoutTimestamp(after)),
    apiMatchesExceptTimestamp: isDeepStrictEqual(withoutTimestamp(read(root, apiPath)), withoutTimestamp(read(scratch, apiPath))),
    added: [...newById.keys()].filter(id => !oldById.has(id)), removed: [...oldById.keys()].filter(id => !newById.has(id)), changed,
    directoriesWithoutCsv: fs.readdirSync(path.join(root, 'eval-results')).filter(dir =>
      fs.statSync(path.join(root, 'eval-results', dir)).isDirectory() &&
      !['eval-result.csv', 'eval-results.csv'].some(name => fs.existsSync(path.join(root, 'eval-results', dir, name)))),
    pendingExisting: before.results.filter((r: any) => r.criteria.some((c: any) => /PENDING/i.test(c.notes))).map((r: any) => r.id),
    missingScreenshots: before.results.filter((r: any) => !screenshots.includes(`${r.id}.png`)).map((r: any) => r.id),
    missingFilmstrips: before.modelAverages.filter((r: any) => !screenshots.includes(`${r.modelBaseId}_filmstrip.png`)).map((r: any) => r.modelBaseId),
    sha256: files,
  };
  if (!isDeepStrictEqual(beforeHashes, [hash(path.join(root, dataPath)), hash(path.join(root, apiPath))])) throw new Error('Audit modified baseline outputs');
  fs.writeFileSync(path.join(root, 'docs/v2/v1-audit.json'), JSON.stringify(report, null, 2) + '\n');
  console.log(JSON.stringify({ ...report, sha256: `${Object.keys(files).length} files hashed` }, null, 2));
} finally {
  fs.rmSync(scratch, { recursive: true, force: true });
}

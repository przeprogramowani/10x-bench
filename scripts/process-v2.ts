import fs from 'node:fs';
import path from 'node:path';
import { createHash } from 'node:crypto';
import { stableReleaseAtStart } from './dependency-baseline';

const json = (file: string) => JSON.parse(fs.readFileSync(file, 'utf8'));
const requireValue = (condition: unknown, message: string) => { if (!condition) throw new Error(message); };
const round = (n: number) => Math.round(n * 100) / 100;
const time = (value: unknown) => typeof value === 'string' ? Date.parse(value) : NaN;

/** Only finalized, evidenced V2 records enter public outputs. V1 inputs are never traversed. */
export function collectV2(root: string) {
  const manifest = json(path.join(root, 'benchmark/v2/manifest.json'));
  const rubric = json(path.join(root, 'benchmark/v2/criteria.json'));
  const input = path.join(root, 'eval-results/v2');
  const specs: any[] = rubric.categories.flatMap((c: any) => c.checks);
  const results: any[] = [];
  const excluded: string[] = [];
  if (fs.existsSync(input)) for (const entry of fs.readdirSync(input).sort()) {
    const directory = path.join(input, entry);
    if (!fs.statSync(directory).isDirectory()) continue;
    const evaluationPath = path.join(directory, 'evaluation.json');
    if (!fs.existsSync(evaluationPath)) { excluded.push(entry); continue; }
    const evaluation = json(evaluationPath);
    const attempt = json(path.join(directory, 'attempt.json'));
    const match = entry.match(/^([a-z0-9][a-z0-9.-]*)-attempt-([1-9]\d*)$/);
    requireValue(match && attempt.modelId === match[1] && attempt.attemptNumber === Number(match[2]), `Invalid attempt identity: ${entry}`);
    for (const record of [attempt, evaluation]) {
      requireValue(record.benchmarkVersion === 'v2' && record.attemptId === entry, `Wrong version or identity: ${entry}`);
      requireValue(record.benchmarkRevision === manifest.revision, `Unknown benchmark revision: ${entry}; retain and process its pinned rubric separately`);
    }
    requireValue(['draft', 'final', 'invalid'].includes(evaluation.status), `Unknown evaluation status: ${entry}`);
    if (evaluation.status !== 'final') { excluded.push(entry); continue; }
    requireValue(!attempt.protocolViolations?.length, `Invalid procedural run: ${entry}`);
    const start = time(attempt.startedAt), end = time(attempt.completedAt), deadline = time(attempt.deadlineAt);
    requireValue(Number.isFinite(start) && Number.isFinite(end) && deadline === start + 3600000 && end >= start && end <= deadline, `Invalid run timing: ${entry}`);
    requireValue(attempt.elapsedSeconds === (end - start) / 1000 && Array.isArray(attempt.sessions), `Missing run accounting: ${entry}`);
    requireValue(typeof evaluation.evaluator?.name === 'string' && evaluation.evaluator.name.trim() && time(evaluation.evaluator.completedAt) >= end, `Missing evaluator attribution: ${entry}`);
    requireValue(typeof attempt.attemptDirectory === 'string' && fs.realpathSync(attempt.attemptDirectory) === fs.realpathSync(path.join(root, 'eval-attempts/v2', entry)), `Wrong physical attempt directory: ${entry}`);
    requireValue(['completed', 'timed-out', 'interrupted', 'cancelled'].includes(attempt.terminalState), `Unfinished run: ${entry}`);
    requireValue(attempt.promptHash === manifest.files['prompt.md'], `Wrong prompt: ${entry}`);
    requireValue(typeof attempt.modelName === 'string' && attempt.modelName.trim() && typeof attempt.agentEnvironment === 'string' && attempt.agentEnvironment.trim(), `Missing model attribution: ${entry}`);
    for (const name of ['astro', 'react', 'tailwindcss']) {
      const baseline = attempt.dependencyBaseline?.[name];
      requireValue(baseline && /^\d+\.\d+\.\d+$/.test(baseline.version) && baseline.major === Number(baseline.version.split('.')[0]) && Number.isFinite(time(baseline.capturedAt)) && time(baseline.capturedAt) <= start && Number.isFinite(time(baseline.publishedAt)) && time(baseline.publishedAt) <= start, `Missing stable attempt-start baseline: ${entry}/${name}`);
      requireValue(typeof baseline.reference === 'string' && !path.isAbsolute(baseline.reference), `Missing registry evidence: ${entry}/${name}`);
      const registryFile = fs.realpathSync(path.resolve(directory, baseline.reference));
      requireValue(registryFile.startsWith(fs.realpathSync(directory) + path.sep), `Escaping registry evidence: ${entry}/${name}`);
      const resolved = stableReleaseAtStart(json(registryFile), attempt.startedAt);
      requireValue(resolved.version === baseline.version && resolved.major === baseline.major, `Registry baseline mismatch: ${entry}/${name}`);
    }
    requireValue(Array.isArray(evaluation.checks) && evaluation.checks.length === specs.length, `Missing/extra checks: ${entry}`);
    const checks = new Map(evaluation.checks.map((c: any) => [c.id, c]));
    requireValue(checks.size === specs.length, `Duplicate checks: ${entry}`);
    const build: any = checks.get('build');
    for (const spec of specs) {
      const check: any = checks.get(spec.id);
      requireValue(check && check.status === 'scored' && Number.isFinite(check.score) && check.score >= 0 && check.score <= spec.max && typeof check.notes === 'string' && check.notes.trim(), `Unresolved/invalid check: ${entry}/${spec.id}`);
      if (spec.kind === 'routes') requireValue(Number.isInteger(check.passingRoutes) && check.passingRoutes >= 0 && check.passingRoutes <= 7 && check.score === round(spec.max * check.passingRoutes / 7), `Invalid route partial score: ${entry}/${spec.id}`);
      else requireValue(check.score === 0 || check.score === spec.max, `Invalid binary score: ${entry}/${spec.id}`);
      requireValue(Array.isArray(check.evidence) && check.evidence.length > 0, `Missing evidence: ${entry}/${spec.id}`);
      const buildFailure = spec.kind === 'manual' && build?.score === 0 && check.score === 0 && check.unavailableDueToBuild === true;
      const absentCandidateEvidence = spec.origin === 'candidate' && check.score === 0 && check.absentCandidateEvidence === true;
      if (spec.id === 'runtime' && build?.score === 0) requireValue(check.score === 0, `Runtime points after failed build: ${entry}`);
      for (const evidence of check.evidence) {
        requireValue(evidence.origin === (buildFailure || absentCandidateEvidence ? 'evaluator' : spec.origin), `Wrong evidence origin: ${entry}/${spec.id}`);
        const base = evidence.origin === 'candidate' ? path.join(root, 'eval-attempts/v2', entry) : directory;
        requireValue(typeof evidence.reference === 'string' && !path.isAbsolute(evidence.reference), `Invalid evidence reference: ${entry}`);
        const resolved = fs.realpathSync(path.resolve(base, evidence.reference));
        requireValue(resolved.startsWith(fs.realpathSync(base) + path.sep) && fs.statSync(resolved).isFile(), `Escaping evidence reference: ${entry}`);
        if (evidence.origin === 'candidate') {
          requireValue(time(evidence.capturedAt) >= start && time(evidence.capturedAt) <= end, `Post-run or undated candidate evidence: ${entry}`);
          const hash = createHash('sha256').update(fs.readFileSync(resolved)).digest('hex');
          requireValue(attempt.artifactHashes?.[evidence.reference] === hash, `Candidate evidence changed after freeze: ${entry}`);
        }
        if (evidence.origin === 'human') requireValue(typeof evidence.reviewer === 'string' && evidence.reviewer.trim() && Number.isFinite(time(evidence.confirmedAt)) && time(evidence.confirmedAt) >= end, `Missing human confirmation: ${entry}`);
      }
    }
    const criteria = rubric.categories.map((category: any) => ({ name: category.name, max: category.max, score: round(category.checks.reduce((sum: number, spec: any) => sum + (checks.get(spec.id) as any).score, 0)), notes: category.checks.map((spec: any) => `${spec.name}: ${(checks.get(spec.id) as any).notes}`).join('\n') }));
    const totalScore = round(criteria.reduce((sum: number, c: any) => sum + c.score, 0));
    // Cost is optional; a verified amount must cite the run's exact sessions.
    let cost: number | null = null;
    if (evaluation.cost != null) {
      requireValue(Number.isFinite(evaluation.cost.usd) && evaluation.cost.usd >= 0 && Array.isArray(evaluation.cost.sessionIds) && evaluation.cost.sessionIds.length > 0 && evaluation.cost.sessionIds.every((id: string) => attempt.sessions?.includes(id)), `Unattributed cost: ${entry}`);
      cost = evaluation.cost.usd;
    }
    results.push({ id: entry, benchmarkVersion: 'v2', benchmarkRevision: manifest.revision, modelBaseId: attempt.modelId, modelName: attempt.modelName, attemptNumber: attempt.attemptNumber, agentEnvironment: attempt.agentEnvironment, totalScore, maxScore: 100, percentage: totalScore, cost, criteria });
  }
  results.sort((a, b) => b.percentage - a.percentage || a.id.localeCompare(b.id));
  const families = new Map<string, any[]>();
  for (const result of results) families.set(result.modelBaseId, [...(families.get(result.modelBaseId) ?? []), result]);
  const modelAverages = [...families].map(([modelBaseId, attempts]) => {
    requireValue(attempts.every(r => r.modelName === attempts[0].modelName && r.agentEnvironment === attempts[0].agentEnvironment), `Inconsistent model attribution: ${modelBaseId}`);
    const average = attempts.reduce((n, r) => n + r.totalScore, 0) / attempts.length;
    const costs = attempts.filter(r => r.cost !== null);
    return { modelBaseId, modelName: attempts[0].modelName, agentEnvironment: attempts[0].agentEnvironment, averagePercentage: average, averageScore: average, averageMaxScore: 100, attemptCount: attempts.length, averageCost: costs.length ? costs.reduce((n, r) => n + r.cost, 0) / costs.length : null, totalCost: costs.length ? costs.reduce((n, r) => n + r.cost, 0) : null };
  }).sort((a, b) => b.averagePercentage - a.averagePercentage || a.modelBaseId.localeCompare(b.modelBaseId));
  return { data: { benchmarkVersion: 'v2', benchmarkRevision: manifest.revision, generatedAt: new Date().toISOString(), totalAttempts: results.length, results, modelAverages, supersededModels: {} }, excluded };
}

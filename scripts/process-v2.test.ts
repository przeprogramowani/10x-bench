import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import os from 'node:os';
import { createHash } from 'node:crypto';
import { collectV2 } from './process-v2';

function fixture() {
  const root = fs.mkdtempSync(path.join(os.tmpdir(), '10x-v2-fixture-'));
  fs.cpSync(new URL('../benchmark/v2/', import.meta.url), path.join(root, 'benchmark/v2'), { recursive: true });
  const manifest = JSON.parse(fs.readFileSync(path.join(root, 'benchmark/v2/manifest.json'), 'utf8'));
  const rubric = JSON.parse(fs.readFileSync(path.join(root, 'benchmark/v2/criteria.json'), 'utf8'));
  const id = 'synthetic-attempt-1';
  const dir = path.join(root, 'eval-results/v2', id);
  const candidate = path.join(root, 'eval-attempts/v2', id);
  fs.mkdirSync(dir, { recursive: true }); fs.mkdirSync(candidate, { recursive: true });
  fs.writeFileSync(path.join(dir, 'evidence.md'), 'Synthetic evaluator fixture, never a benchmark result.');
  fs.writeFileSync(path.join(candidate, 'VERIFICATION.md'), 'Synthetic candidate fixture.');
  const start = '2026-09-07T09:00:00.000Z';
  const attempt: any = { benchmarkVersion: 'v2', attemptId: id, modelId: 'synthetic', attemptNumber: 1, modelName: 'Synthetic', agentEnvironment: 'Fixture', benchmarkRevision: manifest.revision, promptHash: manifest.files['prompt.md'], startedAt: start, deadlineAt: '2026-09-07T10:00:00.000Z', completedAt: '2026-09-07T09:30:00.000Z', terminalState: 'completed', elapsedSeconds: 1800, sessions: [], attemptDirectory: fs.realpathSync(candidate), dependencyBaseline: {}, artifactHashes: { 'VERIFICATION.md': createHash('sha256').update('Synthetic candidate fixture.').digest('hex') } };
  for (const [name, major] of [['astro',7],['react',19],['tailwindcss',4]] as const) { attempt.dependencyBaseline[name] = { version: `${major}.0.0`, major, capturedAt: start, publishedAt: start, reference: `${name}-registry.json` }; fs.writeFileSync(path.join(dir,`${name}-registry.json`), JSON.stringify({ versions: { [`${major}.0.0`]: {} }, time: { [`${major}.0.0`]: start } })); }
  const evaluation: any = { benchmarkVersion: 'v2', attemptId: id, benchmarkRevision: manifest.revision, status: 'final', evaluator: { name: 'Fixture evaluator', completedAt: '2026-09-07T10:00:00.000Z' }, checks: rubric.categories.flatMap((g: any) => g.checks).map((c: any) => ({ id: c.id, status: 'scored', score: c.max, notes: 'Synthetic verification.', ...(c.kind === 'routes' ? { passingRoutes: 7 } : {}), evidence: [{ origin: c.origin, reference: c.origin === 'candidate' ? 'VERIFICATION.md' : 'evidence.md', ...(c.origin === 'candidate' ? { capturedAt: start } : c.origin === 'human' ? { reviewer: 'Fixture reviewer', confirmedAt: '2026-09-07T10:00:00.000Z' } : {}) }] })) };
  const save = () => { fs.writeFileSync(path.join(dir,'attempt.json'),JSON.stringify(attempt)); fs.writeFileSync(path.join(dir,'evaluation.json'),JSON.stringify(evaluation)); };
  const close = () => fs.rmSync(root, { recursive: true, force: true });
  save(); return { root, dir, candidate, attempt, evaluation, save, close };
}
function check(name: string, body: (f: ReturnType<typeof fixture>) => void) { test(name, () => { const f = fixture(); try { body(f); } finally { f.close(); } }); }
check('only finalized V2 appears; a same-named V1 record is never ingested', f => {
  fs.mkdirSync(path.join(f.root,'eval-results/synthetic-attempt-1'),{recursive:true});
  fs.writeFileSync(path.join(f.root,'eval-results/synthetic-attempt-1/eval-results.csv'),'deliberately invalid V1 fixture');
  assert.equal(collectV2(f.root).data.totalAttempts,1);
  assert.equal(collectV2(f.root).data.results[0].totalScore,100);
});
check('draft and invalid evaluations never become rankings', f => {
  for (const status of ['draft','invalid']) { f.evaluation.status=status;f.save();assert.equal(collectV2(f.root).data.totalAttempts,0); }
});
check('wrong benchmark version is rejected', f => {f.attempt.benchmarkVersion='v1';f.save();assert.throws(()=>collectV2(f.root),/Wrong version/);});
check('pending checks cannot be marked final', f => {f.evaluation.checks[0].status='pending';f.save();assert.throws(()=>collectV2(f.root),/Unresolved/);});
check('missing evidence and duplicate checks are rejected', f => {
  f.evaluation.checks[0].evidence=[];f.save();assert.throws(()=>collectV2(f.root),/Missing evidence/);
  f.evaluation.checks[0]=f.evaluation.checks[1];f.save();assert.throws(()=>collectV2(f.root),/Duplicate checks/);
});
check('evaluator evidence cannot earn candidate verification points', f => {const c=f.evaluation.checks.find((c:any)=>c.id==='verify-research-outcome');c.evidence=[{origin:'evaluator',reference:'evidence.md'}];f.save();assert.throws(()=>collectV2(f.root),/Wrong evidence origin/);});
check('zero for absent candidate evidence can be documented by evaluator', f => {const c=f.evaluation.checks.find((c:any)=>c.id==='verify-research-outcome');c.score=0;c.absentCandidateEvidence=true;c.evidence=[{origin:'evaluator',reference:'evidence.md'}];f.save();assert.equal(collectV2(f.root).data.results[0].totalScore,98);});
check('failed build preserves independent candidate verification scores', f => {
  for (const c of f.evaluation.checks) if (['build','runtime','ui','desktop','mobile'].includes(c.id)) { c.score=0; if(c.id==='runtime')c.passingRoutes=0; if(['ui','desktop','mobile'].includes(c.id)){c.unavailableDueToBuild=true;c.evidence=[{origin:'evaluator',reference:'evidence.md'}];} }
  f.save();const result=collectV2(f.root).data.results[0];assert.equal(result.criteria.find((c:any)=>c.name==='Candidate verification').score,20);assert.ok(result.totalScore>0);
});
check('deadline extension is rejected', f => {f.attempt.deadlineAt='2026-09-07T11:00:00.000Z';f.save();assert.throws(()=>collectV2(f.root),/Invalid run timing/);});
check('changed candidate artifacts fail freeze verification', f => {fs.writeFileSync(path.join(f.candidate,'VERIFICATION.md'),'modified');assert.throws(()=>collectV2(f.root),/changed after freeze/);});
check('zero results remain empty when the only V2 record is absent', f => {fs.rmSync(f.dir,{recursive:true,force:true});assert.equal(collectV2(f.root).data.modelAverages.length,0);});

test('full output pipeline preserves V1 bytes while publishing only the synthetic V2 result to V2 files', async () => {
  const f=fixture();
  try {
    const { processResults }=await import('./process-results');
    fs.mkdirSync(path.join(f.root,'archive/v1'),{recursive:true});
    for(const file of ['results.json','leaderboard.json'])fs.copyFileSync(new URL(`../archive/v1/${file}`,import.meta.url),path.join(f.root,'archive/v1',file));
    const out=path.join(f.root,'output');
    await processResults(out,f.root);
    assert.deepEqual(fs.readFileSync(path.join(out,'website/public/api/leaderboard.json')),fs.readFileSync(path.join(f.root,'archive/v1/leaderboard.json')));
    assert.deepEqual(fs.readFileSync(path.join(out,'website/src/data/results.json')),fs.readFileSync(path.join(f.root,'archive/v1/results.json')));
    const v2=JSON.parse(fs.readFileSync(path.join(out,'website/src/data/results-v2.json'),'utf8'));
    assert.equal(v2.totalAttempts,1);assert.equal(v2.results[0].id,'synthetic-attempt-1');
    const api=JSON.parse(fs.readFileSync(path.join(out,'website/public/api/v2/leaderboard.json'),'utf8'));assert.equal(api.totalAttempts,1);assert.equal(api.leaderboard[0].modelBaseId,'synthetic');
  } finally { f.close(); }
});

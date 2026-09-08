---
name: 10x-score-attempts
description: Evaluate explicitly requested 10xBench V2 attempts against their pinned rubric, preserving candidate and evaluator evidence and pending human review. Not for implementing a candidate website or automatically regrading V1.
---

# Score versioned attempts

Resolve the requested version and attempt IDs before reading implementation files. V2 directories are `eval-attempts/v2/{model-id}-attempt-{N}`; operator/evaluator records are `eval-results/v2/{model-id}-attempt-{N}`. Never infer version from model display name. Unversioned attempts are historical V1: use only their preserved material for a requested read-only inspection and do not overwrite frozen scores or apply V2 rules. The migration does not authorize historical reruns/regrading.

For V2 read the matching `attempt.json` and pinned `benchmark/v2/{prompt.md,assessment.md,criteria.json,eval.md}`. Verify bundle integrity. If the attempt revision differs from the available bundle, obtain its preserved matching revision; never substitute the current rubric. Follow `eval.md` for checks, evidence origins, partial credit and finalization. The candidate's visible assessment is the complete scoring contract.

Operate only on the requested implementation(s), their evidence, and benchmark documents. Do not read sibling attempts. Use an evaluator copy, record any instrumentation, and do not alter the frozen candidate source or `VERIFICATION.md`. Assign an unused loopback port and record its owned process handle. Verify site identity before testing. Serve the declared production build in Workers runtime; a plain static HTTP server does not establish Workers readiness. No public deployment, remote resources or Cloudflare credentials.

A final build failure earns zero on unavailable runtime checks, but independent source, dependency and candidate-verification checks remain scoreable. Do not apply V1's all-zero hard stop. Evaluator infrastructure failures leave affected checks pending. Genuine absent candidate evidence may earn zero documented by evaluator evidence (`absentCandidateEvidence: true`), but evaluator work cannot earn positive candidate-verification points. Human checks unavailable due to proven candidate build failure use zero, evaluator build evidence and `unavailableDueToBuild: true`.

Use the 52 exact check IDs in `criteria.json`. Record subcheck score/status, notes and evidence in `evaluation.json`; derive category totals from them. Candidate artifacts need capture timestamps and frozen hashes; human evidence needs reviewer and confirmation time. Collect explicit human review for consistent UI and desktop/mobile usability, with the preview URL. If unavailable, leave `status: "draft"`; never publish placeholder zeros. Keep servers only while a real manual review/handoff needs them, and stop only processes you own.

After all checks are resolved, validate the records with `npm run process-results`. The processor rejects invalid final records and excludes draft/invalid records. Resolve record errors without changing candidate output. Model costs and screenshots remain scoped to V2; costs cite exact recorded sessions. Publication is separate from local finalization.

Batch requests use the same rules per attempt; do not assume permission to launch model runs or repair attempts. No scripted feature rounds, no hidden retries, no evaluator coaching after completion.

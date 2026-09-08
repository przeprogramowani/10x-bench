---
name: 10x-eval-model
description: Prepare and launch explicitly requested new 10xBench V2 model attempts with versioned identity, pinned task, a 60-minute deadline and captured evidence. Do not invoke while building a candidate website or to rerun the historical V1 roster.
---

# Prepare a 10xBench V2 attempt

Read `benchmark/v2/run-protocol.md` from the repository root for the execution contract. Verify the local bundle with `npm run verify:benchmark`; its SHA-256 revision is the authoritative content revision shared with `10x-bench-eval/benchmark/v2/`. If authoring changed upstream documents, run `npm run sync:benchmark` and inspect the resulting revision before preparing a campaign. Never fetch a moving branch as candidate input.

For model name, model ID, harness and attempt count, use the user's request. Infer an unambiguous ID; clarify ambiguous model variants. Preserve the existing `{model-id}-attempt-{N}` naming convention under `eval-attempts/v2/`. Record display name, exact model/version, harness/version/settings and optional verified pricing in V2 metadata (`benchmark/models-v2.json`); do not modify `eval-attempts/metadata.ts` or archive metadata. If pricing is unknown, leave it unknown. Preparing an empty V2 migration does not authorize paid runs, a connectivity test that invokes a model, or five automatic reruns.

Create fresh candidate directories only for the requested attempts and operator result directories at `eval-results/v2/{attemptId}/`. Before launch record `attempt.json` as defined in the protocol. Capture registry versions/publication times for the latest stable major of Astro, React and Tailwind at start; save evidence in the result directory and pass the candidate the frozen baseline. Never use prereleases or a guessed version. Record canonical cwd and exact run session IDs for cost attribution. The deadline is launch time plus 60 minutes; it is never extended by a continuation or interruption.

The candidate receives `benchmark/v2/prompt.md` and `benchmark/v2/assessment.md` together, verbatim, plus its version baseline. There is no independent root prompt. Its instructions prohibit reading other attempts, evaluations or operator material and prohibit public deployment. This is procedural isolation, not an enforced sandbox. Do not provide Cloudflare credentials. Explicitly scope the candidate to its assigned directory even when launched from this repository.

Use the chosen harness's actual installed interface. Verify its help/settings before assuming native goal support. Where supported, put the complete task in native goal mode and record that choice; otherwise use the neutral continuation in the protocol with the same deadline. Never send staged feature requests or evaluator repair hints. Track the live process/session handle: a polling timeout is not terminal. Stop only the owned candidate process at its deadline. A terminal failed/interrupted attempt remains recorded; retries need a fresh ID and separate requested run, never directory cleanup.

Before a paid launch, make the prepared prompt/baseline, model/harness, number of runs and budget reviewable. Launch only if the user's request already authorizes those runs or after explicit authorization. Do not infer launch permission from specification or dashboard work. Batch concurrency follows the user's requested campaign and available resources, not a hard-coded requirement.

At completion, freeze the candidate source and `VERIFICATION.md` artifacts with hashes, record terminal timing/state and any procedural violations, and preserve the candidate's original logs separately from later evaluator evidence. Cost attribution includes only the recorded candidate sessions with matching canonical cwd, not every session ever opened in that folder. Hand off to `10x-score-attempts`; do not publish results or restart the candidate based on evaluator feedback.

V1 is read-only historical material at `archive/v1/` and `10x-bench-eval/benchmark/v1/`. Do not launch, convert or regrade V1 attempts as part of V2.

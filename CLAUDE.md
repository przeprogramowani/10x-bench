# 10xBench repository guidance

The current benchmark is V2; read README.md and V2_PLAN.md for current commands, evidence and remaining work. Candidate specification/evaluation material is authoritative in sibling `10x-bench-eval/benchmark/v2/`, vendored with a content hash into `benchmark/v2/`. The complete candidate package is prompt + public assessment + attempt-start dependency baseline. Do not independently edit a root prompt copy.

The dashboard is Astro 5 / React 19 / Tailwind 3. Candidate websites use their attempt-start latest stable majors. These are separate dependency policies.

V1 is frozen under `archive/v1/`, `/v1` and `/v1/benchmark`. Preserve its exact legacy API at `/api/leaderboard.json`. V2 has separate inputs, screenshots and `/api/v2/leaderboard.json`. Do not rerun V1 models, regrade old attempts or convert their scores into V2 records. New campaigns require a separate user request.

Normal `npm run process-results` checks archive/spec integrity, preserves V1 and validates V2. `npm run build` includes processing. Run focused V2 tests and website lint after applicable changes. Do not claim browser/manual/deployed acceptance without evidence. Preserve unrelated work, including the pre-existing untracked AGENTS.md.

Use the two tracked local skills for launching/scoring requested V2 attempts. Candidate time is at most 60 minutes, no public deployment, no coaching or reset deadline. Keep candidate evidence, evaluator checks and explicit human review separate. Pending/invalid evaluations never enter finalized rankings. Costs use exact recorded sessions and canonical cwd.

## Reading restriction when building a candidate website

Do not read any other model attempt while building an implementation. Work only inside the assigned candidate directory with its supplied prompt/assessment/baseline and public research sources. Do not read evaluator-only material or evaluation results. If the task requires access outside that scope, ask the user before proceeding. This is procedural isolation, not an enforced sandbox.

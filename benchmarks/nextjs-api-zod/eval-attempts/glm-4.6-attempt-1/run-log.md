# run-log — `nextjs-api-zod` / `glm-4.6-attempt-1`

## Benchmark
- name: `nextjs-api-zod`
- display_name: `Next.js API Routes with Zod`
- state_mode: `brownfield`
- baseline_source: `npx create-next-app@latest scaffold-tmp --yes` + overlay `benchmarks/nextjs-api-zod/baseline/lib/{db.ts,types.ts}`

## Model
- model_id: `glm-4.6`
- display_name: `GLM-4.6 (z.ai via OpenRouter)`
- harness: `opencode`
- harness_cli_version: `1.14.39`
- harness_model_arg: `openrouter/z-ai/glm-4.6`

## Run
- run_id: `20260506-134644`
- attempt_number: `1`
- attempts_for_this_model: `1` (override of `runner.yaml -> attempts_default: 3`)
- workspace: `/tmp/10x-eval-lite/20260506-134644/glm-4.6-attempt-1`
- start_ts: `2026-05-06T13:47:50Z`
- end_ts: `2026-05-06T14:14:42Z`
- duration: `26min 52s`
- exit_status: `0`
- timeout_flag: `false` (limit was 1800s, completed in ~1612s)

## Mode
- mode: `lite`
- image: `n/a` (runner.yaml has no `image` field; benchmark targets the lite runner only)
- image_digest: `not-pulled (lite mode)`

## Host runtime
- node: `v22.22.2`
- npm: `10.9.7`
- npx: `10.9.7`

## Visible benchmark inputs
Mirrors `runner.yaml -> model_visible_files`:
- `prompt.md`
- `context.md`
- `baseline/lib/db.ts` (overlaid as `lib/db.ts`)
- `baseline/lib/types.ts` (overlaid as `lib/types.ts`)
- `baseline/README.md` was **not** copied (evaluator-only meta)

The Next.js scaffold from `create-next-app@latest --yes` was the rest of the
working tree at run start.

## Isolation deviations
- lite mode, no container isolation; harness ran on host
- workspace under `/tmp/10x-eval-lite/...` mitigates accidental writes outside
  the workspace, but is not a security boundary

## Log limitations
- `agent-run.log` captures opencode's combined stdout/stderr (47 KB)
- the agent independently started a `next dev` server during the run; its
  output is in `server.log` at the workspace root
- token value never written to any log

## Artifact summary
Files added by the model on top of the scaffold:
- `app/api/bookings/route.ts`
- `app/api/bookings/[id]/route.ts`
- `lib/validation.ts`
- `lib/conflicts.ts`
- `lib/errors.ts`
- `package.json` updated to include `zod ^4.4.3`
- `package-lock.json` updated accordingly

## Next step
Run `score-eval-attempt` against this attempt to produce
`benchmarks/nextjs-api-zod/eval-results/glm-4.6-attempt-1/eval-result.csv`.

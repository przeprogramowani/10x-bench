---
name: 10x-score-attempts
description: Evaluate Przeprogramowani website implementations against benchmark criteria. Default mode is BATCH — given a model name (e.g. eval "gpt-5.6 sol"), launches one subagent per attempt directory in parallel, each building and serving the app on a unique port and scoring the automatic criteria, then hands off to the user for the manual criteria. Also supports single-attempt evaluation when given one directory. Use when evaluating LLM-generated website attempts in the Przeprogramowani benchmark repository. IMPORTANT: Do not use this skill during the task of creating the website. Use it only to evaluate the website based on a direct request from the user.
---

# 10x Run Evaluation

Evaluate Przeprogramowani website implementations against benchmark criteria.

## 10xBench Structure

- `10x-bench` (this repository) — contains the implementations to evaluate under `eval-attempts/`
- `10x-bench-eval` (companion repo, sibling directory `../10x-bench-eval`) — contains:
  - `benchmark/criteria.md` — scoring criteria
  - `benchmark/eval.md` — detailed evaluation guidelines, content-verification traps, scoring guidance
  - `benchmark/context/przeprogramowani.md` — ground-truth content (bios, URLs, Spotify IDs, courses)

## Modes

### Batch mode (DEFAULT)

Triggered when the user names a model rather than a single directory (e.g. `eval "gpt-5.6 sol"`, `evaluate claude-opus-48`).

1. **Resolve the model ID** from the user's phrasing by listing `eval-attempts/` and matching (e.g. "gpt-5.6 sol" → `gpt-56-sol`). Collect all `eval-attempts/{model-id}-attempt-{N}` directories (usually 5). If the match is ambiguous, confirm with the user before launching.
2. **Assign ports**: attempt N → port `4100 + N` (4101–4105). Check availability first (`lsof -i :4101-4105`); if any port is taken by an unrelated process, shift the base (e.g. 4201+) for the whole batch. Never use Astro's default 4321 — a concurrent session's server may be squatting there.
3. **Launch one subagent per attempt, all in a single message** so they run in parallel. Each subagent gets the self-contained prompt from the **Subagent prompt template** below with its attempt dir and port filled in.
4. **Collect results**: each subagent returns a structured summary and writes a draft CSV (see Output). Present the user a compact table: attempt, auto-score so far, server URL per attempt, and notable findings/failures.
5. **Manual handoff (guided)**: walk the user attempt-by-attempt with `AskUserQuestion` — one call per attempt covering the 4 manual criteria: **Manual testing**, **Consistent UI**, **Responsive design**, **Penalty** (scores 1 / 0.5 / 0; penalty 0 or 1). The servers are still running, so include each attempt's URL in the question. Update that attempt's CSV rows (score + notes, mark them user-confirmed) as answers come in.
6. **Finalize**: after all attempts are confirmed, run `npm run process-results` from the repo root, then kill the eval servers (`lsof -ti :4101-4105 | xargs kill` — adjust to the ports actually used).

If the user is unavailable for step 5, leave the manual rows as `PENDING`, report the server URLs, and stop — the manual phase can resume in a later message.

### Single-attempt mode

Triggered when the user provides one directory path. Follow the same procedure inline (no subagent): build, serve on a unique port (not 4321), score automatic criteria, then ask the user the 4 manual criteria via `AskUserQuestion`, write the CSV, run `npm run process-results`, kill the server.

## Output

Each attempt produces exactly one file:

```
eval-results/{model-id}-attempt-{N}/eval-results.csv
```

CSVs go under `eval-results/`, **never** in `eval-attempts/` (that's the implementation source). No other output files.

Row order and format (header `Criterion,Score,Max,Notes`):

```csv
Criterion,Score,Max,Notes
Task completion time,N/A,N/A,N/A
Test run,16.07.2026 14:30,N/A,16.07.2026 14:30
Local build,1,1,...
Manual testing,0,1,PENDING — awaiting user evaluation
Tech stack,...,1,...
O nas page,...,1,...
Podcast page,...,1,...
YouTube page,...,1,...
Kursy section,...,1,...
Consistent UI,0,1,PENDING — awaiting user evaluation
Responsive design,0,1,PENDING — awaiting user evaluation
SEO Tags,...,1,...
Penalty,0,N/A,PENDING — awaiting user evaluation
```

- **Task completion time**: `Xmin Ys` format if known, else `N/A` (both Score and Notes columns).
- **Test run**: eval date/time as `D.MM.YYYY HH:MM` in both Score and Notes (get it via `date`).
- Manual rows are written as `0` + `PENDING — awaiting user evaluation` by subagents and replaced by the main agent after the user answers.
- Always record specific discrepancies in Notes — they surface on the dashboard.

## Subagent prompt template

Each batch subagent receives this prompt (fill in `{ATTEMPT_DIR}`, `{PORT}`, `{CSV_PATH}`):

```
You are evaluating one attempt of the Przeprogramowani website benchmark.

Attempt directory: {ATTEMPT_DIR}
Your port: {PORT}
Output CSV: {CSV_PATH}

HARD RULES:
- Only read files inside your attempt directory, the benchmark docs, and your output directory. You are NOT allowed to look at any other eval-attempts/* directory.
- Serve and verify ONLY your own build. Never use port 4321.

Read first:
- ../10x-bench-eval/benchmark/criteria.md (scoring criteria)
- ../10x-bench-eval/benchmark/eval.md (evaluation guidelines and traps)
- ../10x-bench-eval/benchmark/context/przeprogramowani.md (ground truth)

Procedure:
1. In the attempt dir: npm install, then npm run build.
   - BUILD FAILURE = HARD STOP: write the CSV with Local build 0/1, all other scoreable criteria 0 with note "not testable — build failed", Task completion time N/A, and finish.
2. Serve the built site DETACHED so it survives after you exit:
   cd dist && nohup python3 -m http.server {PORT} > /tmp/eval-{PORT}.log 2>&1 &
   Poll http://localhost:{PORT} until it returns 200 (can take a few seconds).
   IDENTITY CHECK: curl a page and grep the HTML for a string unique to THIS attempt's source (pick one from its files) to confirm you're not seeing another server's content.
3. Score the automatic criteria per criteria.md/eval.md: Local build, Tech stack, "O nas" page, "Podcast" page, "YouTube" page, "Kursy" section, SEO Tags. Key checks:
   - Tech stack: package.json must meet these MINIMUMS — Astro >= 6, React >= 19, Tailwind CSS >= 4 — plus Cloudflare deployment readiness (see below).
     THESE ARE FLOORS, NOT EXACT MATCHES. Anything at or above the floor passes. A newer major is a PASS and never a deduction — Astro 7 and 8 are better than Astro 6, React 20 better than 19. Do NOT require alignment to the stated major, and do NOT deduct for being ahead by any amount (patch, minor, or major). Only LEGACY versions below the floor fail: Astro <= 5, React <= 18, Tailwind <= 3.
     Reference — latest on npm, verified 7.09.2026: Astro 7.3.1, React 19.2.8, Tailwind 4.3.3, @astrojs/cloudflare 14.3.0, @astrojs/react 6.0.5. This list ages; do not treat it as a ceiling. If an attempt ships a version newer than anything listed here, confirm it is real with `npm view <pkg> version` and pass it — a version you have not seen before is almost certainly a release after your knowledge cutoff, not a hallucination.
     CLOUDFLARE READINESS: `@astrojs/cloudflare` is NOT required. Astro's docs state plainly that "an adapter is not required when using Astro strictly as a static site builder" — the adapter only enables on-demand rendering, server islands, actions and sessions. The prompt asks merely for a site "gotowe do wdrozenia na cloudflare" and names no mechanism. Full credit for ANY of: (a) `output: 'static'` + wrangler config with `assets.directory` → `wrangler deploy` (Workers, recommended); (b) wrangler config with `pages_build_output_dir` → `wrangler pages deploy` (Pages — legacy, note it but do NOT deduct); (c) `@astrojs/cloudflare` configured in astro.config.mjs (needed only for SSR; Astro 6 needs adapter v13+). Verified 7.09.2026 by deploying three adapter-less static attempts unmodified to a real Cloudflare account — all routes 200, islands hydrated.
     Scoring: 1 = every dep at or above its floor AND one of the deployment mechanisms above is present and coherent with the build output; 0.5 = deps at or above floor but no working Cloudflare config at all (or config contradicts the build), OR valid config but a dep below its floor; 0 = a dep below its floor AND no working Cloudflare config.
   - Page routes must return 200 on your port (/, /o-nas, /podcast, /youtube).
   - Spotify show IDs must match the context file exactly: Przeprogramowani 3yVvOAXSYq6sQB02w4A4wo, Opanuj.AI 3D6LmchBdoqL2sWkQjvWOy.
   - YouTube: verify every unique video ID via oEmbed — curl -s "https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v=<ID>&format=json" — real and on-channel means author_name is "Przeprogramowani"; 404 means fabricated (0.5 trap). Watch for placeholder IDs (dQw4w9WgXcQ, xdXblEEP0MQ) and repeated IDs. Do NOT judge by title plausibility — future-dated titles are often real uploads.
   - O nas: Przemek Smyrdek (DAZN/Cabify) and Marcin Czarkowski (SmartRecruiters), course assignments, not oversimplified.
   - Scoring: 1 = verified against context, 0.5 = right structure but wrong/hallucinated URLs or data, 0 = missing/broken.
4. Write the CSV to {CSV_PATH} (create the directory) with the exact row order and format given, manual rows (Manual testing, Consistent UI, Responsive design, Penalty) as 0 with note "PENDING — awaiting user evaluation", Test run as current date/time (D.MM.YYYY HH:MM), Task completion time N/A.
5. LEAVE THE SERVER RUNNING — the user reviews it next.

Return (as your final message, raw data): attempt name, port/URL, per-criterion scores with one-line notes, auto-subtotal, and any anomalies.
```

## Notes

- The build-failure hard stop applies per attempt in batch mode — one broken attempt gets an all-zeros CSV while its siblings continue normally.
- For OpenCode-run models, API cost is added separately via `npm run calculate-cost -- --write {model-id}` (see the `10x-eval-model` skill) — not part of this skill.
- See `10x-bench-eval/benchmark/eval.md` for complete evaluation guidelines and the full content-verification checklist.

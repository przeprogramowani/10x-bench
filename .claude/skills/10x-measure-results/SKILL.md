---
name: 10x-measure-results
description: Score finished 10xBench attempts of one model against the v2 criteria - parallel builds and dev servers, an Opus subagent per attempt as the automatic content judge, then a one-by-one AskUserQuestion form for the manual criteria, and finally the eval-results CSVs, Tech stack / Cloudflare deploy regrade, API cost and dashboard data. Use when the user asks to evaluate, score, measure or judge attempts of a model (e.g. "/10x-measure-results gemini-38-flash"). Do not use while building a candidate website, and do not regrade old attempts unless asked.
---

# 10x Measure Results

Scores the attempts `eval-attempts/{model-id}-attempt-{N}/` of one model and writes
`eval-results/{model-id}-attempt-{N}/eval-results.csv`.

Input: a model ID (e.g. `glm-53`). Score every `eval-attempts/{model-id}-attempt-*` that has a project and no `eval-results` CSV yet, unless the user names specific attempts.

The rubric is authoritative in the sibling repo; read it at the start of every run:
- `../10x-bench-eval/benchmark/criteria.md` - criteria and the CSV template (total 10 points; Tech stack and Cloudflare deploy are 0.5 each)
- `../10x-bench-eval/benchmark/eval.md` - workflow and content-verification checklists
- `../10x-bench-eval/benchmark/context/przeprogramowani.md` - verified reference content

Run `git -C ../10x-bench-eval pull --ff-only` first so the rubric is current.

## Step 1: Build all attempts in parallel

For each attempt (project root is the attempt dir, or its single nested dir that holds `package.json`), in parallel:
```bash
(cd <root> && { [ -f package-lock.json ] && npm ci --no-audit --no-fund || npm install --no-audit --no-fund; } && npm run build)
```
Keep install/build logs in the session scratchpad. **Build failure rule** (eval.md): if the install, the build or the dev server fails, that attempt scores 0 on every criterion; skip the judge and the manual form for it and note why.

## Step 2: Start dev servers in parallel

Start one dev server per attempt on its own port, starting at 4461 (attempt N -> `446N`; use 447x for attempts 10+). Never use 4321; another project's server may already be on it.
```bash
(cd <root> && npx astro dev --port 446N --host 127.0.0.1 > <scratchpad>/<attempt>.dev.log 2>&1) &
```
Run them as one background command. Wait until each answers, then check `/`, `/o-nas`, `/podcast` and `/youtube` with curl and record the HTTP codes. "Kursy" is a section on `/`, not a page.

- **Astro 7+ runs `astro dev` as a per-project background service.** If the candidate left one running (often on 4321-4325), `astro dev` reports "Dev server already running" and exits without using your port. Check the log; then run `npx astro dev stop` in that project (confirm with `lsof -a -p <pid> -d cwd` that the pid belongs to the attempt) and start it again on 446N. Stop these with `npx astro dev stop` during clean-up as well.
- A site with `trailingSlash: 'always'` returns 404 for `/o-nas` in dev; check `/o-nas/` and tell the judge to use trailing slashes. This is not a defect.

## Step 3: Automatic judge - one Opus subagent per attempt

Launch all judges in one message with the Agent tool: `subagent_type: "general-purpose"`, `model: "opus"`, running in the background. Each judge scores the five content criteria for one attempt. Prompt template:

```
You are the evaluator (not the builder) for one 10xBench attempt. Score 5 content criteria for the website in `<abs attempt path>`, whose dev server is running at http://127.0.0.1:<port> (pages: /, /o-nas, /podcast, /youtube). Do NOT modify any files in the attempt directory, and do not read any other attempt directories or any eval-results files.

Authoritative rubric and reference material (read these first):
- `<abs>/10x-bench-eval/benchmark/criteria.md` - sections: "O nas" page, "Podcast" page, "YouTube" page, "Kursy" section, SEO Tags.
- `<abs>/10x-bench-eval/benchmark/eval.md` - "Critical evaluation notes - Content verification" and "Complete Content Verification Checklist".
- `<abs>/10x-bench-eval/benchmark/context/przeprogramowani.md` - verified reference content.

How to verify:
- Read the source (src/data, src/pages, src/components, layouts) AND fetch the rendered HTML from the dev server with curl to confirm what is actually shown (and HTTP 200).
- Podcast: compare Spotify show IDs exactly with the context file (Przeprogramowani 3yVvOAXSYq6sQB02w4A4wo, Opanuj.AI 3D6LmchBdoqL2sWkQjvWOy); judge whether the episodes are real or fabricated.
- YouTube: verify every video ID with oEmbed: curl -s "https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v=<ID>&format=json" - a 200 response with a title/author matching the Przeprogramowani / Opanuj.AI channels means real; 404/401/400 or an unrelated author means hallucinated. Check for duplicates and placeholder IDs (dQw4w9WgXcQ, xdXblEEP0MQ).
- O nas: both founders, key details (Przemek: DAZN/Cabify; Marcin: SmartRecruiters), course assignments, not oversimplified.
- Kursy: 10xDevs featured on the main page (hero); Opanuj Frontend and Opanuj TypeScript present; details/URLs match the context.
- SEO: per-page title/description, OG tags etc. per the criteria section; content consistent with the context.

Scores are 1, 0.5 or 0 per the rubric. Be strict and concrete; notes must cite specific evidence (IDs, URLs, file paths, what is missing or wrong), one or two sentences each, with semicolons instead of commas where convenient.

Return ONLY a JSON object:
{"attempt":"<attempt>","O nas page":{"score":1,"notes":"..."},"Podcast page":{"score":1,"notes":"..."},"YouTube page":{"score":1,"notes":"..."},"Kursy section":{"score":1,"notes":"..."},"SEO Tags":{"score":1,"notes":"..."}}
```

Save each returned JSON to `<scratchpad>/content-<N>.json` as soon as it arrives. Do not read the judges' transcript files. While the judges run, go on to Step 4.

## Step 4: Manual form - one attempt at a time

Walk the user through the attempts in order. For each attempt:
1. Give the URL (`http://127.0.0.1:446N`), the pages to check, and anything the build or judges flagged that is worth a look (e.g. a 404 page, odd stats, a broken sitemap link). Ask the user to also check a mobile width.
2. Call `AskUserQuestion` with these 4 questions (options `1`, `0.5`, `0`; penalty `0 (no penalty)` / `1 (penalty)`):
   - **Manual testing** - every page loads; navigation, styles and content work
   - **Consistent UI** - consistent across pages, no broken or inconsistent styles
   - **Responsive design** - containers, components and navigation work on mobile and desktop
   - **Penalty** - any problem the other criteria don't cover
3. If any score is below 1 or a penalty is given without a reason, ask for the note (you can fold that question into the next attempt's form). If an answer is ambiguous (e.g. "0.5 for X" without saying which criterion), ask; never guess.
4. Confirm what you recorded in one line, then move on to the next attempt.

## Step 5: Run metadata

- **Test run**: the current local time, `D.MM.YYYY HH:MM`.
- **Task completion time** (`Xmin Ys`): for OpenCode attempts, take it from the DB (sessions are in `session_v2` on OpenCode 2.x, `session` on 1.x; sub-agent sessions have `parent_id` and fall inside their parent's time):
  ```bash
  sqlite3 ~/.local/share/opencode/opencode.db "select s.id, s.parent_id, s.version, datetime(min(m.time_created)/1000,'unixepoch','localtime'), (max(coalesce(json_extract(m.data,'$.time.completed'),m.time_created))-min(m.time_created))/1000 from session_v2 s join message m on m.session_id=s.id where s.directory like '%/<model-id>-attempt-%' group by s.id order by s.directory"
  ```
  - **Codex Desktop**: sessions are in `~/.codex/sessions/YYYY/MM/DD/rollout-*.jsonl`. Find each attempt by `session_meta.payload.cwd`; time = first to last event timestamp; the last `token_count` event's `total_token_usage` gives input / cached input / output (incl. reasoning) tokens. Write an `API cost` row as uncached input x input price + cached input x cached price + output x output price (the model's official list price) and state the formula in the notes.
  - For other harnesses, ask the user (or use `N/A`).
- Note any failed or cut-off sessions (e.g. `finish: "length"`, rate limits) so their cost can be excluded in Step 7.

## Step 6: Write the CSVs

Once all judges and all manual answers are in, write `eval-results/{model-id}-attempt-{N}/eval-results.csv` (results go in `eval-results/`, never in `eval-attempts/`). Use the template in criteria.md:

```csv
Criterion,Score,Max,Notes
Task completion time,<Xmin Ys>,N/A,<Xmin Ys>
Test run,<D.MM.YYYY HH:MM>,N/A,<D.MM.YYYY HH:MM>
Local build,1,1,<install/build result; pages built>
Manual testing,<s>,1,<note>
Tech stack,0,0.5,pending v2 regrade
O nas page,<s>,1,<judge notes>
Podcast page,<s>,1,<judge notes>
YouTube page,<s>,1,<judge notes>
Kursy section,<s>,1,<judge notes>
Consistent UI,<s>,1,<note>
Responsive design,<s>,1,<note>
SEO Tags,<s>,1,<judge notes>
Penalty,<0|1>,N/A,<reason or "No penalty applied">
```
Write it with a CSV writer so notes with commas or quotes are quoted correctly.

## Step 7: Tech stack, Cloudflare deploy, cost, dashboard

```bash
npx tsx scripts/regrade-v2.ts --deploy-check --write   # fills Tech stack + Cloudflare deploy (installs, builds and runs wrangler deploy --dry-run in a temp copy; cached per attempt)
npm run calculate-cost -- --write <model-id>           # OpenCode attempts only: adds the API cost row
npm run process-results                                # regenerates results.json and /api/leaderboard.json
```
- If an attempt dir holds failed sessions next to the scored one, rewrite its `API cost` row to the scored session only, and list the excluded sessions and their costs in the notes.
- In `eval-attempts/metadata.ts`, enable the model's `SUPERSEDED_MODELS` entry (`"<old>": "<model-id>"`) once its attempts are scored, so the old model leaves the latest-only leaderboard.
- Run `npm run screenshots` to capture the new attempts and rebuild the model filmstrip, then stop the Astro 7+ dev servers it leaves running (`npx astro dev stop` in each attempt). Look at the new `{model-id}_filmstrip.png` to confirm the sites rendered.
- Run `npm run build` (it includes `npm run check-screenshots`, which fails when a scored attempt has no screenshot or filmstrip) and `cd website && npm run lint`.

## Step 8: Report and clean up

- Stop every dev server you started (`npx astro dev stop` in each project for Astro 7+, otherwise `lsof -ti tcp:<port> -sTCP:LISTEN | xargs kill`), plus any leftover servers the candidates started.
- Report a table per attempt (total, manual scores, Tech stack, Cloudflare deploy, cost, time), the model average and its leaderboard position, and the recurring issues the judges found.
- Do not commit or push unless the user asks.

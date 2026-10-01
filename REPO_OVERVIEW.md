# 10xBench — repository overview

*Snapshot of commit `63aeb60` (`feat(website): refine bench kit landing`) — the last commit before V2 (`794f7ae`) was introduced. Everything below describes the pre-V2 state of the repository.*

## What this is

**10xBench** is a benchmark that measures how different large language models handle **"vibe coding"**: given one prompt and no iterative refinement, build a complete, deployable website for [Przeprogramowani.pl](https://przeprogramowani.pl).

Each model runs the same single-shot task, the resulting website is scored against a fixed rubric, and all scores are aggregated into a public Astro dashboard (10xbench.ai).

The task prompt (`prompt.md`) is one Polish paragraph asking for a modern responsive site with *O nas*, *Podcast*, *YouTube* pages and a courses section (Opanuj Frontend, Opanuj TypeScript, 10xDevs in the hero), built on Astro + React + Tailwind and ready to deploy on Cloudflare. Notably, the model must **research the real content itself from the open web** — real podcast links, real YouTube video IDs, real bios — which is what makes the task discriminating.

## The prompt, precisely

`prompt.md` is **one file, one line, one paragraph — 376 bytes, 50 words**, no headings, no bullets, no markdown, no examples, no content attachments. Verbatim, in the original Polish:

> Utwórz nowoczesną i responsywną stronę projektu Przeprogramowani.pl. Pobierz niezbędne informacje o naszej działalności w sieci. Powinna zawierać strony O nas, Podcast (z ostatnimi odcinkami), YouTube (z ostatnimi filmami), sekcję na kursy Opanuj Frontend, Opanuj TypeScript oraz 10xDevs (w hero). Stack to Astro, React i Tailwind. Gotowe do wdrozenia na cloudflare.

The English rendering shown on `/benchmark` (hardcoded in `website/src/pages/benchmark.astro`, toggled by the language switcher) is:

> Create a modern and responsive website for the Przeprogramowani.pl project. Download necessary information about our activities online. It should contain pages About Us, Podcast (with latest episodes), YouTube (with latest videos), section for courses Opanuj Frontend, Opanuj TypeScript and 10xDevs (in hero). Stack is Astro, React and Tailwind. Ready for deployment on Cloudflare.

### Sentence by sentence

1. **"Utwórz nowoczesną i responsywną stronę projektu Przeprogramowani.pl."** — Informal imperative, second person singular. Sets two quality adjectives (*modern*, *responsive*) and names the subject. No design direction beyond "modern": no colors, no typography, no layout, no reference site, no brand assets.
2. **"Pobierz niezbędne informacje o naszej działalności w sieci."** — *Fetch the necessary information about our activity on the web.* This is the load-bearing sentence. No content is supplied with the prompt; the model must go find it. Note "**naszej**" — first person plural: the model is addressed as if by the site's owners, and is left to work out who "we" are.
3. **"Powinna zawierać strony O nas, Podcast (z ostatnimi odcinkami), YouTube (z ostatnimi filmami), sekcję na kursy Opanuj Frontend, Opanuj TypeScript oraz 10xDevs (w hero)."** — The only explicit structural requirement: three named pages plus a courses section. The parentheticals carry the real difficulty — *latest episodes*, *latest videos*, and **10xDevs specifically in the hero**.
4. **"Stack to Astro, React i Tailwind."** — Three named technologies, no versions.
5. **"Gotowe do wdrozenia na cloudflare."** — *Ready to deploy on Cloudflare.* Deployment readiness is part of the ask, not an afterthought. (Written as `wdrozenia`, missing the diacritic in `wdrożenia`, and `cloudflare` lowercase — the prompt is typed casually and is kept byte-for-byte as it was given, typos included.)

### What the prompt does not say

- No word count, page count beyond the four named surfaces, or content length.
- No versions for Astro / React / Tailwind — yet the `Tech stack` criterion checks that current majors and a real Cloudflare adapter were used, so the model is expected to reach for what is current.
- No mention of SEO, metadata, accessibility, or performance — yet `SEO Tags` is a scored criterion. Unstated-but-expected professional defaults are part of what is being measured.
- No instruction to verify the fetched facts — yet inventing a Spotify show slug or a YouTube video ID loses points.
- No time limit and no iteration allowance stated in the prompt itself; single-shot is enforced by the benchmark protocol around it, not by the text.

### Why it is shaped this way

The prompt is short and underspecified on purpose. It is a realistic "vibe coding" request — the kind a person actually types — and the scoring rubric is deliberately wider than the prompt. The gap between the two is the benchmark: a model is rewarded for correctly inferring what was left unsaid (SEO tags, current framework majors, responsive breakpoints, a coherent visual system) and punished for confabulating what it should have looked up (real podcast links, real video IDs, real bios).

### Provenance

The authoritative prompt lives in the sibling repo, and `/benchmark` fetches it at build time from
`https://raw.githubusercontent.com/przeprogramowani/10x-bench-eval/refs/heads/master/benchmark/prompt.md`,
alongside `criteria.md`. The root `prompt.md` in this repo is a local mirror for convenience — per `CLAUDE.md`, it is not to be edited independently of the source.

**Judge:** Claude Opus 4.6 via Claude Code, following `criteria.md`, combined with human evaluation (the `Manual testing`, `Consistent UI` and `Responsive design` rows are user-confirmed).

## The loop

```
prompt.md ──> model runs one-shot in eval-attempts/{model}-attempt-{n}/  (a real Astro project)
                                  │
                                  ▼
          manual + scripted evaluation against the rubric
                                  │
                                  ▼
        eval-results/{model}-attempt-{n}/eval-results.csv
                                  │
             scripts/process-results.ts (+ metadata.ts)
                                  │
                                  ▼
        website/src/data/results.json ──> Astro dashboard + /api/leaderboard.json
```

## Layout

| Path | Purpose |
|---|---|
| `prompt.md` | The single benchmark prompt handed to every model |
| `eval-attempts/{model-id}-attempt-{n}/` | One model's generated website — a full Astro project (src, package.json, astro.config.mjs, wrangler.jsonc, often a built `dist/`). ~149 attempt directories at this commit |
| `eval-attempts/metadata.ts` | The registry: model IDs, display names, agent environment, supersession chain, disabled models, token pricing, helper functions |
| `eval-results/{model-id}-attempt-{n}/eval-results.csv` | The scored rubric for that attempt |
| `scripts/process-results.ts` | Parses every CSV, computes totals/percentages/family averages/cost, writes `results.json` and the public leaderboard payload |
| `scripts/calculate-cost.ts` | Reads OpenCode's SQLite DB (`~/.local/share/opencode/opencode.db`), attributes token spend to an attempt by matching the session's cwd, writes cost back into the CSV |
| `scripts/take-screenshots.ts`, `screenshot-url.ts` | Playwright capture of each attempt's rendered site → `website/public/screenshots/` (per-attempt shots and per-model filmstrips) |
| `website/` | Astro 5 + React 19 + Tailwind 3 dashboard: `index.astro` (leaderboard), `benchmark.astro` (prompt + criteria), `kit.astro` (10x-bench-kit landing) |
| `website/public/api/leaderboard.json` | Slim, versioned public payload consumed by the `@przeprogramowani/10x-cli` `bench` command |
| `archive/v1/` | Frozen prior-generation inputs |
| `slides/`, `new-narrative.md`, `glm-5.2-report.md`, `images/` | Presentation and write-up material built on the results |
| `.claude/skills/10x-eval-model/` | Local skill for preparing and launching a new model's eval run |

Evaluation **criteria and reference content are not in this repo** — they live in the sibling repo [`10x-bench-eval`](https://github.com/przeprogramowani/10x-bench-eval). This repo holds implementations, scores, tooling and the dashboard.

## The rubric

Each attempt's CSV is `Criterion,Score,Max,Notes` (a legacy `Criterion,Score,Notes` form with implied `Max=1` is also parsed). The criteria at this commit:

- `Task completion time` — `Xmin Ys` format, excluded from scoring
- `Test run` — `D.MM.YYYY HH:MM`, excluded from scoring
- `Local build` — does `astro build` succeed
- `Manual testing` — human-confirmed the site works end to end
- `Tech stack` — Astro / React / Tailwind / Cloudflare adapter actually used as specified
- `O nas`, `Podcast`, `YouTube` pages — present, reachable, and factually correct (real Spotify show IDs, real YouTube IDs verified via oEmbed rather than hallucinated)
- `Kursy section` — correct course URLs and content
- `Consistent UI`, `Responsive design`, `SEO Tags`
- `Penalty` — discretionary deduction

Total score sums all scoring criteria; percentage is total ÷ max possible.

## Model bookkeeping

`eval-attempts/metadata.ts` is the single source of truth and carries more than names:

- **`AGENT_ENVIRONMENT`** — which harness the model ran in (Claude Code high effort, OpenCode, Codex Desktop high effort, Cursor, Claude Desktop). The environment is part of the result, not incidental.
- **`SUPERSEDED_MODELS`** — an old → new chain (e.g. `claude-opus-46 → 47 → 48`, `kimi-k25 → k26 → k3`, `glm-47 → 5 → 51 → 52`). The public leaderboard shows only the latest member of each family.
- **`DISABLED_MODELS`** — attempts excluded from processing entirely.
- **`MODEL_PRICING`** — per-1M input/output USD, used for cost estimates where OpenCode's own cache-aware cost isn't available.

Roughly 28 model versions are registered across the Claude, GPT, Gemini, GLM, Kimi, Qwen, Minimax, DeepSeek, Devstral and Grok families, with 3–10 attempts each.

## Commands

```bash
npm install
npm run process-results   # CSVs -> website/src/data/results.json
npm run dev               # process-results, then Astro dev server
npm run build             # process-results, then static build into website/dist/
npm run calculate-cost    # attribute OpenCode token spend/cost to attempts
npm run screenshots       # Playwright capture of attempt sites
```

## Design notes worth knowing

- **Attempts are immutable artifacts.** Each attempt directory is a frozen one-shot output with no human intervention during implementation; multiple attempts per model exist to average out run-to-run variance.
- **The dashboard is fully data-driven and static.** Adding a model means adding an attempt directory, its CSV, and a `metadata.ts` entry — nothing in the UI needs touching.
- **The public API has a contract.** `/api/leaderboard.json` is pre-filtered to latest-only, top 10, and carries a `schemaVersion`; published CLI versions are pinned to the shape they shipped with, so breaking changes must bump it.
- **Content accuracy is scored as hard as code quality.** Fabricated podcast slugs or invented YouTube IDs cost points even when the site builds and looks good — which is the benchmark's sharpest signal.

## Obserwacje po rozwoju V1

Wnioski z prowadzenia benchmarku w wersji V1 — to one uzasadniają kształt kolejnej iteracji.

### 1. Każda generacja modelu ma inny wbudowany styl UI

Modele nie są neutralne wizualnie. Przy tym samym, jednozdaniowym "nowoczesna i responsywna" każda rodzina — i każda kolejna wersja w obrębie rodziny — konsekwentnie ciągnie w swoją stronę: inna paleta, inny rytm sekcji, inne proporcje hero, inne domyślne komponenty. Styl jest rozpoznawalny na poziomie zrzutu ekranu, bez patrzenia w kod. Oznacza to, że kryterium `Consistent UI` mierzy po części nie umiejętność, tylko preferencję modelu, a filmstripy per model są tu czytelniejszym dowodem niż punktacja.

### 2. Model i harness to jedna kombinacja, nie dwie zmienne

Ten sam model w Claude Code, OpenCode, Codex Desktop, Cursorze czy Claude Desktop zachowuje się inaczej: inna liczba i jakość kroków researchu, inna skłonność do uruchomienia builda, inna odporność na zerwanie sesji, inna stabilność między próbami. Dlatego `AGENT_ENVIRONMENT` jest w `metadata.ts` częścią tożsamości wyniku, a nie przypisem — porównanie dwóch modeli uruchomionych w różnych harnessach nie jest porównaniem samych modeli.

### 3. Reward hacking: kradzież layoutu zamiast zbudowania go

Część modeli, mając w promptcie polecenie "pobierz informacje w sieci", traktuje istniejącą stronę nie jako źródło treści, lecz jako źródło implementacji: ściąga layout/markup i odtwarza stronę na jego podstawie, zamiast zaprojektować własną. Formalnie kryteria są spełnione — strona wygląda dobrze, treści się zgadzają — ale zadanie nie zostało wykonane. To najtrudniejszy do wyłapania tryb obejścia, bo nagradza go właśnie ta część rubryki, która miała mierzyć jakość.

### 4. Wyjścia poza obszar roboczy

Niektóre modele nie utrzymują izolacji katalogu roboczego i zaglądają do sąsiednich prób — czyli do cudzych rozwiązań tego samego zadania. Przy układzie, w którym wszystkie podejścia leżą obok siebie w `eval-attempts/`, jest to droga do zanieczyszczenia wyniku. Stąd w V2 izolacja proceduralna zapisana wprost w regułach (praca wyłącznie w przydzielonym katalogu kandydata, zakaz czytania innych podejść i materiałów ewaluatora).

### 5. Najlepsze modele potrzebują innych promptów

Paradoks: im mocniejszy model, tym gorzej potrafi wypaść na prostym, niedospecyfikowanym poleceniu — nie dlatego, że nie umie, tylko dlatego, że robi rzecz *inaczej niż oczekiwano*, często słuszniej. Przykład z V1: "gotowe do wdrożenia na Cloudflare" nie wymaga adaptera, jeśli budujesz statyczny Cloudflare Pages, a nie Workera. GPT-6 Astra poszedł tą drogą — poprawnie — i wpadł pod kryterium `Tech stack`, które oczekiwało adaptera. Rubryka karała za trafną decyzję architektoniczną.

Wniosek ogólny: krótki prompt plus szeroka rubryka dobrze różnicuje modele słabsze i średnie, ale na górze skali zaczyna mierzyć zgodność z oczekiwaniem autora rubryki zamiast jakości rozwiązania. To jest właściwy powód, dla którego V1 zostaje zamrożony, a V2 dostaje osobną specyfikację, osobne wejścia i osobny ranking.

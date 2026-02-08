# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**10xBench** is a comprehensive benchmark comparing how different large language models handle "vibe coding"—creating a fully functional website for [Przeprogramowani.pl](https://przeprogramowani.pl) in a single attempt without iterative refinement.

Each of four models (Claude Opus 4.6, GPT-5.3-Codex, Kimi K2.5, GLM-4.7) receives the same prompt and must generate a complete website implementation. Results are systematically evaluated against defined criteria and presented in an interactive dashboard.

## Quick Start Commands

### Development & Building

```bash
# Process results CSV files and generate results.json
npm run process-results

# Start development server (Astro) with results processing
npm run dev

# Build production site
npm run build

# Development from website directory (for Astro only)
cd website && npm run dev
cd website && npm run build
```

### Evaluation

```bash
# Run the evaluation skill to assess an implementation
/run-eval against <attempt-directory>

# Example:
/run-eval against claude opus attempt 1
```

## Project Structure

### Core Directories

- **`./benchmark/`** — Benchmark materials
  - `prompt.md` — Input prompt given to all models
  - `criteria.md` — Evaluation criteria for assessing implementations
  - `eval.md` — Detailed evaluation results

- **`./context/`** — Reference materials
  - `przeprogramowani.md` — Verified copy and page content for the website

- **`./scripts/`** — Data processing utilities
  - `process-results.ts` — TypeScript script that parses CSV evaluation files from each attempt and generates `results.json`

- **`./website/`** — Astro-based results dashboard
  - `src/pages/index.astro` — Main results overview page
  - `src/pages/benchmark.astro` — Benchmark prompt and criteria page
  - `src/components/ResultCard.tsx` — Summary cards showing attempt scores
  - `src/components/ResultsTable.tsx` — Interactive comparison table with sticky headers
  - `src/components/ModelAveragesCard.tsx` — Model family average summaries
  - `src/data/results.json` — Generated data file (created by `process-results.ts`)

- **`./eval-attempts/`** — Model implementations (one-shot attempts)
  - `claude-opus-attempt-{1,2,3}/` — Claude Opus 4.6 implementations
  - `gpt-codex-attempt-{1,2,3}/` — GPT-5.3-Codex implementations
  - `kimi-k2.5-attempt-{1,2,3}/` — Kimi K2.5 implementations
  - `glm-4.7-attempt-{1,2,3}/` — GLM-4.7 implementations
  - Each contains `eval-result.csv` with criterion-by-criterion scores

- **`./eval-results/`** — Processed evaluation results
  - Contains `eval-result.csv` files from each attempt (symlinks to source)

## Data Processing Pipeline

The `scripts/process-results.ts` script orchestrates the results workflow:

1. **Discovers** all eval-attempts directories
2. **Parses** `eval-result.csv` from each attempt
3. **Extracts** model name and attempt number from directory name
4. **Calculates** total scores and percentages (excluding "Task completion time")
5. **Aggregates** averages by model family
6. **Generates** `website/src/data/results.json`

### CSV Format Support

The script handles two CSV formats:

- **New format** (glm-4.7, gpt-codex): `Criterion,Score,Max,Notes`
- **Legacy format** (some attempts): `Criterion,Score,Notes` (assumes Max=1)

Both are parsed correctly and normalized to the same structure.

## Results Dashboard (Astro Site)

### Pages

**`/` (Results Overview)**
- Displays all attempts sorted by percentage (best to worst)
- ResultCard components show summary stats with progress bars
- Color-coded scores: red (0-33%), yellow (33-66%), green (66%+)
- ModelAveragesCard shows family averages at the bottom

**`/benchmark`**
- Full-width display of the benchmark prompt (`benchmark/prompt.md`)
- Full-width display of evaluation criteria (`benchmark/criteria.md`)
- Both rendered as HTML from markdown

### Interactive Features

- **ResultsTable** (on index page)
  - Sticky header for scrolling context
  - Frozen first column (criterion names) for horizontal scrolling
  - Clickable notes that expand inline
  - Responsive design for mobile

- **Progress bars** in ResultCard components color-coded by performance tier

## Technology Stack

### Website (Astro Framework)

- **Astro 5.x** — Static site generator
- **React 19** — UI components (ResultCard, ResultsTable, ModelAveragesCard)
- **Tailwind CSS 3.x** — Styling (v4 incompatible in this environment)
- **Marked** — Markdown to HTML conversion
- **TypeScript** — Type safety

### Build Tools

- **tsx** — TypeScript executor for scripts
- **TypeScript 5.3+** — Language

### Configuration

- `astro.config.mjs` — Astro configuration with React and Tailwind integrations
- `tailwind.config.mjs` — Tailwind CSS configuration
- `tsconfig.json` — TypeScript configuration
- `postcss.config.mjs` — PostCSS configuration for Tailwind

## Key Implementation Details

### Model Name Extraction

Directory names follow the pattern: `{model-id}-attempt-{number}`
- `claude-opus-attempt-1` → Claude Opus 4.6, Attempt 1
- `gpt-codex-attempt-2` → GPT-5.3-Codex, Attempt 2
- `kimi-k2.5-attempt-3` → Kimi K2.5, Attempt 3
- `glm-4.7-attempt-1` → GLM-4.7, Attempt 1

Model ID to display name mapping is defined in `scripts/process-results.ts`.

### Score Calculation

Total score = sum of all criterion scores (excluding "Task completion time")
Percentage = (total score / max possible score) × 100

The script handles variable max scores per criterion and computes accurate percentages.

### Layout Strategy

- Benchmark page: Sequential full-width sections (prompt, then criteria)
- Results overview: Full-width stacked containers sorted by performance
- Table: Sticky header with frozen first column for better UX

## File Paths for Common Tasks

| Task | File |
|------|------|
| Edit benchmark prompt | `./benchmark/prompt.md` |
| Update evaluation criteria | `./benchmark/criteria.md` |
| View reference content | `./context/przeprogramowani.md` |
| Add/modify result cards | `./website/src/components/ResultCard.tsx` |
| Change table layout | `./website/src/components/ResultsTable.tsx` |
| Update home page | `./website/src/pages/index.astro` |
| Update benchmark page | `./website/src/pages/benchmark.astro` |
| Regenerate results data | `npm run process-results` |

## Adding New Model Attempts

1. Create new attempt directory: `./eval-attempts/{model-id}-attempt-{number}/`
2. Add `eval-result.csv` with evaluation results
3. Run `npm run process-results` to regenerate `results.json`
4. Dashboard will automatically include the new attempt

## Important Notes

- **Static output**: The Astro site is configured as `output: 'static'` (pre-renders all pages)
- **Data-driven**: Dashboard content is entirely driven by `results.json` generated from CSV files
- **No dependencies on eval-attempts at runtime**: Evaluation results are processed during build time
- **Tailwind v3 required**: v4 is not compatible in this environment; stick with Tailwind v3.4
- **File path traversal in Astro**: Use `fileURLToPath` + `dirname` when accessing files relative to Astro pages
- **Markdown rendering**: Uses `marked` library; ensure proper HTML escaping for user-provided content
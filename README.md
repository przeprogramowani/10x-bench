# Przeprogramowani Vibe Coded Benchmark

A comprehensive benchmark comparing how different large language models tackle "vibe coding" — creating a fully functional website for [Przeprogramowani.pl](https://przeprogramowani.pl) in a single attempt, without iterative refinement.

## Overview

This repository evaluates the practical capabilities of various state-of-the-art LLMs by having each model create a website implementation based on the same prompt and content specifications. The results provide insights into each model's ability to understand requirements, generate code, and produce production-ready web solutions.

## Key Concept: "Vibe Coding"

Vibe coding represents a one-shot approach to web development where an LLM must:
- Understand the complete project requirements from a single prompt
- Extract and properly format content specifications
- Generate a functional, well-structured website
- Produce clean, maintainable code without iterative debugging

## Project Structure

### Core Directories & Files

| Path | Purpose |
|------|---------|
| `./benchmark/` | Benchmark materials and evaluation framework |
| `./benchmark/prompt.md` | The input prompt given to all models |
| `./benchmark/criteria.md` | Evaluation criteria used to assess implementations |
| `./benchmark/eval.md` | Detailed evaluation results |
| `./context/` | Reference content and specifications |
| `./context/przeprogramowani.md` | Verified copy and page content for the Przeprogramowani.pl website |
| `./website/` | Astro-based results dashboard (displays all benchmark results) |
| `./scripts/process-results.ts` | TypeScript script that processes CSV results and generates dashboard data |
| `./eval-attempts/` | Model implementations (one-shot attempts) |
| `./eval-results/` | Processed evaluation result files |

### Model Attempt Directories

Each model's implementation is stored in a dedicated directory under `./eval-attempts/`:

- **`./eval-attempts/claude-opus-attempt-{1,2,3}`** — Claude Opus 4.6 implementations (via Claude Code)
- **`./eval-attempts/gpt-codex-attempt-{1,2,3}`** — GPT-5.3-Codex implementations (via Codex Desktop)
- **`./eval-attempts/kimi-k2.5-attempt-{1,2,3}`** — Kimi K2.5 implementations (via OpenCode)
- **`./eval-attempts/glm-4.7-attempt-{1,2,3}`** — GLM-4.7 implementations (via OpenCode)

Each attempt directory contains `eval-result.csv` with criterion-by-criterion evaluation scores. Multiple attempt directories per model indicate iterative benchmark runs.

## Models Evaluated

| Model | IDE/Tool | Organization |
|-------|----------|--------------|
| Claude Opus 4.6 | Claude Code | Anthropic |
| GPT-5.3-Codex | Codex Desktop | OpenAI |
| Kimi K2.5 | OpenCode | Moonshot AI |
| GLM-4.7 | OpenCode | Alibaba (Aliyun) |

## How It Works

1. **Prompt**: Each model receives the same input prompt from `./benchmark/prompt.md`
2. **Content**: Reference content is available in `./context/przeprogramowani.md`
3. **Implementation**: Models generate website code in their respective attempt directories under `./eval-attempts/`
4. **Evaluation**: All implementations are assessed using the criteria defined in `./benchmark/criteria.md`
5. **Results Processing**: The `scripts/process-results.ts` script parses evaluation CSV files and generates data for the dashboard
6. **Results Dashboard**: An Astro-based static website (in `./website/`) displays comparative results with interactive tables and summaries

## Evaluation Criteria

The benchmark evaluates implementations across multiple dimensions:

- **Technical Stack**: Framework choices, code organization, and architecture
- **Page Structure**: Proper implementation of all required pages and routes
- **Content Accuracy**: Correct use of provided copy and content
- **SEO & Metadata**: Proper handling of titles, descriptions, and semantic HTML
- **Responsive Design**: Mobile-friendliness and responsive layout implementation
- **Code Quality**: Readability, maintainability, and best practices
- **Functionality**: Working features and user interactions

For detailed criteria, see `./benchmark/criteria.md`

## Results Dashboard

Benchmark results are displayed in an interactive Astro-based static website:

- **`./website/`** — Results dashboard with:
  - Overview page showing all attempts sorted by performance
  - Interactive results table with sticky headers and frozen first column
  - Model family averages
  - Benchmark details page displaying the prompt and evaluation criteria
  - Data automatically processed from CSV evaluation files via `scripts/process-results.ts`

## Getting Started

### View Results Dashboard

```bash
# Install dependencies
npm install

# Build and start development server (processes results and runs Astro)
npm run dev

# Open http://localhost:3000 in your browser
```

### Explore Benchmark Materials

1. Read the input prompt: `cat ./benchmark/prompt.md`
2. Review the reference content: `cat ./context/przeprogramowani.md`
3. Examine evaluation criteria: `cat ./benchmark/criteria.md`
4. View detailed evaluation results: `cat ./benchmark/eval.md`
5. Explore model implementations: `ls -la ./eval-attempts/`

### Build for Production

```bash
npm run build
```

This processes all evaluation results and generates a static production-ready site in `./website/dist/`

## Data Processing Pipeline

The benchmark uses an automated data pipeline to convert raw evaluation results into the interactive dashboard:

1. **Input**: Each attempt directory contains `eval-result.csv` with criterion scores
2. **Processing**: `scripts/process-results.ts` parses CSV files and calculates:
   - Total score for each attempt (excluding "Task completion time")
   - Percentage score relative to maximum possible score
   - Model family averages across all attempts
3. **Output**: Generates `website/src/data/results.json`
4. **Display**: Astro website statically renders the dashboard using the JSON data

The script supports two CSV formats:
- **New format**: `Criterion,Score,Max,Notes`
- **Legacy format**: `Criterion,Score,Notes` (assumes Max=1)

## Purpose

This benchmark serves as a practical evaluation tool for:
- Understanding LLM capabilities in web development
- Assessing code generation quality across different models
- Identifying strengths and weaknesses in one-shot implementation scenarios
- Informing technology choices for AI-assisted development workflows

---

**Note**: Each attempt represents a completely independent, one-shot effort with no iterative refinement or human intervention during implementation.

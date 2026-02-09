---
name: run-eval
description: Evaluate Przeprogramowani website implementations against benchmark criteria. Analyzes tech stack, pages, content accuracy, SEO, and responsiveness. Use when evaluating LLM-generated website attempts in the Przeprogramowani benchmark repository. IMPORTANT: Do not use this skill during the task of creating the website. Use it only to evaluate the website based on a direct request from the user.
---

# Run Evaluation

Evaluate a Przeprogramowani website implementation against benchmark criteria.

## 10xBench Structure

- 10x-bench (this repository) - contains the implementation to evaluate
- 10x-bench-eval (companion repository) - contains the evaluation criteria and scoring methodology

## What this skill does

Systematically evaluates website implementations by:
1. Reading benchmark criteria from `10x-bench-eval/benchmark/criteria.md`
2. Setting up the implementation (npm install, npm run build, npm run dev)
3. Testing against all evaluation criteria and asking user for feedback where needed
4. Generating structured results in `10x-bench/eval-results/{model-name}-attempt-{number}/eval-results.csv`

## How to use

Invoke with the directory path to evaluate:
```
/run-eval /path/to/implementation
```

Or provide the path when prompted if not specified.

## Output

Generates `eval-results.csv` in `./eval-results/{model-name}-attempt-{number}/eval-results.csv` directory

See `10x-bench-eval/benchmark/eval.md` for complete evaluation guidelines.

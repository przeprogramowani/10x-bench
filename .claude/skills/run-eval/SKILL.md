---
name: run-eval
description: Evaluate Przeprogramowani website implementations against benchmark criteria. Analyzes tech stack, pages, content accuracy, SEO, and responsiveness. Use when evaluating LLM-generated website attempts in the Przeprogramowani benchmark repository.
---


# Run Evaluation

Evaluate a Przeprogramowani website implementation against benchmark criteria.

## What this skill does

Systematically evaluates website implementations by:
1. Reading benchmark criteria from `_benchmark/criteria.md`
2. Setting up the implementation (npm install, npm run build, npm run dev)
3. Testing against all evaluation criteria and asking user for feedback where needed
4. Generating structured results in `eval-results.csv`

## How to use

Invoke with the directory path to evaluate:
```
/run-eval /path/to/implementation
```

Or provide the path when prompted if not specified.

## Output

Generates `eval-results.csv` in `./eval-results/{model-name}-attempt-{number}/eval-results.csv` directory

See `_benchmark/eval.md` for complete evaluation guidelines.

---
name: score-eval-attempt
description: Score a completed programming evaluation attempt against a benchmark scorecard. Use when the user wants to evaluate a generated model attempt, produce eval-results.csv, inspect build/test/runtime behavior, or compare attempts using the scorecard created by design-eval-case. Triggers on phrases like "score eval attempt", "ocen probe", "evaluate attempt", "score model output", "wygeneruj eval-results", "ocen wynik modelu", or requests to grade an eval-attempts directory.
---

# score-eval-attempt

Evaluates a completed model attempt against `benchmark/scorecard.md` and produces a structured CSV result. This skill scores outputs. It does not run implementation models and does not improve generated code.

## Inputs

Required:

- attempt directory, usually `eval-attempts/{model-id}-attempt-{n}/`
- `benchmark/scorecard.md`

Optional:

- `benchmark/context.md`
- `benchmark/bootstrap.md`
- user-provided manual feedback for manual criteria

## Output

Generate:

```text
eval-results/{model-id}-attempt-{n}/eval-results.csv
```

CSV format:

```csv
Criterion,Score,Max,Notes,Evidence
```

Use one row per scorecard criterion. Scores may use `1`, `0.5`, `0`, or another value only if the scorecard explicitly allows it.

## Workflow

### 1. Load the Scorecard

Read `benchmark/scorecard.md` and extract:

- criteria
- max points
- method: `auto`, `manual`, or `hybrid`
- evidence requirements
- failure rules
- expected commands
- partial-credit rules

If the scorecard is ambiguous, ask the user for clarification before scoring.

### 2. Inspect the Attempt

Read the attempt directory structure and identify:

- package manager and stack
- build/test/dev commands
- generated source files
- configuration files
- README or run instructions, if present

Prefer project-declared commands from `package.json`, `pyproject.toml`, `Cargo.toml`, `go.mod`, `Makefile`, or equivalent files. Use `bootstrap.md` as a fallback for expected setup commands.

### 3. Run Automatic Checks

For `auto` and `hybrid` criteria, run the commands required by the scorecard when feasible:

- dependency install
- build
- tests
- lint/typecheck
- CLI smoke test
- local server and HTTP checks
- source inspection

If a command is expensive, destructive, or requires network access not already available, explain the limitation and score based on available evidence.

Apply scorecard failure rules exactly. If the scorecard defines a build hard stop, generate the required zero or partial rows immediately according to that rule.

### 4. Collect Manual Judgments

For `manual` criteria, use structured question tools when available:

- Claude Code: prefer `AskUserQuestion`
- Codex: prefer `request_user_input`
- Other agents: use the closest form, checklist, select, or survey tool

Ask for the minimum needed manual input: score and short notes. Do not ask the user to decide criteria that can be evaluated objectively from files, commands, or HTTP checks.

### 5. Write CSV

For each criterion, write:

- `Criterion`: exact scorecard criterion name
- `Score`: awarded score
- `Max`: maximum score
- `Notes`: concise reason for the score
- `Evidence`: concrete proof, such as command output summary, file path, URL, HTTP status, source finding, or user manual feedback

If a criterion cannot be evaluated, use the scorecard's missing-evidence rule. If none exists, score `0` and note why evidence was unavailable.

### 6. Finish

Report:

- result CSV path
- total score and max score
- criteria with zero or partial credit
- checks that could not be run

## Guardrails

- Do not modify the attempt source code to make it pass.
- Do not rerun the implementation model.
- Do not reveal scorecard details to future model attempts.
- Do not invent evidence. Every score must point to an observable file, command, URL, or user-provided manual judgment.
- Do not silently ignore failed commands.

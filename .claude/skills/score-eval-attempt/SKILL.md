---
name: score-eval-attempt
description: Score a completed programming evaluation attempt against a benchmark scorecard. Use when the user wants to evaluate a generated model attempt, produce eval-results.csv, inspect build/test/runtime behavior, or compare attempts using the scorecard created by design-eval-case. Triggers on phrases like "score eval attempt", "ocen probe", "evaluate attempt", "score model output", "wygeneruj eval-results", "ocen wynik modelu", or requests to grade an eval-attempts directory.
---

# score-eval-attempt

Evaluates a completed model attempt against `benchmarks/<benchmark-name>/scorecard.md` and produces a structured CSV result. This skill scores outputs. It does not run implementation models and does not improve generated code.

## Repo layout

This skill operates exclusively under `benchmarks/<benchmark-name>/`. Each benchmark is a self-contained directory:

```text
benchmarks/<benchmark-name>/
├── runner.yaml
├── prompt.md
├── context.md
├── bootstrap.md            # optional
├── baseline-manifest.md    # optional
├── scorecard.md            # this skill reads it
├── eval-attempts/          # this skill reads from here
│   └── {model-id}-attempt-{n}/
└── eval-results/           # this skill writes here
    └── {model-id}-attempt-{n}/eval-result.csv
```

The skill never reads or writes outside `benchmarks/<benchmark-name>/`. Legacy top-level `benchmark/`, `eval-attempts/`, or `eval-results/` directories from earlier versions are ignored.

## Inputs

Required:

- benchmark name (the directory under `benchmarks/`); if omitted and only one benchmark exists, the skill uses it; if multiple exist, the skill asks
- attempt directory: `benchmarks/<benchmark-name>/eval-attempts/{model-id}-attempt-{n}/`
- `benchmarks/<benchmark-name>/scorecard.md`

Optional:

- `benchmarks/<benchmark-name>/runner.yaml` — useful for resolving `state_mode` and the `image` if container-based scoring is needed
- `benchmarks/<benchmark-name>/context.md`
- `benchmarks/<benchmark-name>/bootstrap.md`
- `benchmarks/<benchmark-name>/baseline-manifest.md`
- user-provided manual feedback for manual criteria

## Output

Generate:

```text
benchmarks/<benchmark-name>/eval-results/{model-id}-attempt-{n}/eval-result.csv
```

CSV format:

```csv
Criterion,Score,Max,Notes,Evidence
```

Use one row per scorecard criterion. Scores may use `1`, `0.5`, `0`, or another value only if the scorecard explicitly allows it. Variable-max criteria (e.g. `Max=3`) follow whatever the scorecard defines.

## Workflow

### 1. Resolve the Benchmark and Attempt

- Identify the target benchmark (explicit name, single-benchmark fallback, or interactive selection from `benchmarks/`).
- Confirm the attempt directory exists at `benchmarks/<name>/eval-attempts/{model-id}-attempt-{n}/`.
- Confirm `benchmarks/<name>/scorecard.md` exists.
- Refuse to proceed if the attempt directory is outside `benchmarks/<name>/eval-attempts/`.

### 2. Load the Scorecard

Read `benchmarks/<name>/scorecard.md` and extract:

- criteria
- max points
- method: `auto`, `manual`, or `hybrid`
- evidence requirements
- failure rules
- expected commands
- state mode and baseline comparison rules, if present
- partial-credit rules
- any required metadata rows (e.g. `Task completion time`, `Test run`)

If the scorecard is ambiguous, ask the user for clarification before scoring.

### 3. Inspect the Attempt

Read the attempt directory structure and identify:

- package manager and stack
- build/test/dev commands
- generated source files
- configuration files
- `README.md` or run instructions, if present
- `agent-run.log` and `run-log.md` produced by `run-model-attempts`

Prefer project-declared commands from `package.json`, `pyproject.toml`, `Cargo.toml`, `go.mod`, `*.csproj`/`*.sln`, `Makefile`, or equivalent files. Use `benchmarks/<name>/bootstrap.md` as a fallback for expected setup commands.

If `benchmarks/<name>/baseline-manifest.md` exists, use it to understand whether the attempt should be evaluated as a greenfield final repo or as a brownfield change from an initial baseline. Compare against the baseline only when the scorecard asks for patch, migration, preservation, or regression evidence.

### 4. Run Automatic Checks

For `auto` and `hybrid` criteria, run the commands required by the scorecard when feasible:

- dependency install
- build
- tests
- lint/typecheck
- CLI smoke test
- local server and HTTP checks
- source inspection

If the benchmark provides an `image` in `runner.yaml`, prefer running scoring commands inside that image (or a dedicated scoring image) so runtime versions match the attempt environment. Otherwise run on the host with a clear note in `Evidence`.

If a command is expensive, destructive, or requires network access not already available, explain the limitation and score based on available evidence.

Apply scorecard failure rules exactly. If the scorecard defines a build hard stop, generate the required zero or partial rows immediately according to that rule.

### 5. Collect Manual Judgments

For `manual` criteria, use structured question tools when available:

- Claude Code: prefer `AskUserQuestion`
- Codex: prefer `request_user_input`
- Other agents: use the closest form, checklist, select, or survey tool

Ask for the minimum needed manual input: score and short notes. Do not ask the user to decide criteria that can be evaluated objectively from files, commands, or HTTP checks.

### 6. Write CSV

Create the output directory if missing:

```text
benchmarks/<benchmark-name>/eval-results/{model-id}-attempt-{n}/
```

For each criterion, write a row:

- `Criterion`: exact scorecard criterion name
- `Score`: awarded score
- `Max`: maximum score
- `Notes`: concise reason for the score
- `Evidence`: concrete proof — command output summary, file path, URL, HTTP status, source finding, or user manual feedback

Append the metadata rows the scorecard requires (typically `Task completion time` and `Test run`). Use `N/A` when a value was not recorded; follow the format conventions documented in the scorecard or repo `CLAUDE.md`.

If a criterion cannot be evaluated, use the scorecard's missing-evidence rule. If none exists, score `0` and note why evidence was unavailable.

### 7. Finish

Report:

- benchmark name and attempt directory scored
- result CSV path under `benchmarks/<name>/eval-results/{model-id}-attempt-{n}/eval-result.csv`
- total score and max score (excluding metadata rows the scorecard marks unscored)
- criteria with zero or partial credit
- checks that could not be run

## Guardrails

- Operate strictly under `benchmarks/<benchmark-name>/`. Do not read or write the legacy top-level `benchmark/`, `eval-attempts/`, or `eval-results/` directories.
- Do not modify the attempt source code to make it pass.
- Do not rerun the implementation model.
- Do not reveal scorecard details to future model attempts (keep them out of any artifact that could end up in a future workspace).
- Do not invent evidence. Every score must point to an observable file, command, URL, or user-provided manual judgment.
- Do not silently ignore failed commands.
- Do not write outside `benchmarks/<benchmark-name>/eval-results/{model-id}-attempt-{n}/`.

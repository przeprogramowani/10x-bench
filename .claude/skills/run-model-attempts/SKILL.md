---
name: run-model-attempts
description: Run isolated one-shot model attempts for a programming evaluation case. Use when the user wants to execute multiple AI coding models or agents against the same benchmark prompt while preventing access to scorecards, previous results, or other attempts. Triggers on phrases like "run model attempts", "uruchom proby modeli", "odpal modele na benchmarku", "run eval attempts", "one-shot attempts", "isolated model runs", or requests to compare several models on the same programming task.
---

# run-model-attempts

Runs one-shot implementation attempts for a benchmark case while preserving isolation and comparability. This skill only runs attempts. It does not score, fix, or iterate on results.

## Inputs

Required:

- `benchmark/prompt.md`
- `benchmark/context.md` if present
- `benchmark/bootstrap.md` if present
- model or harness list

Optional:

- number of attempts per model
- starter scaffold path
- output run ID
- container requirement

Never use `benchmark/scorecard.md` as an input for model attempts.

## Isolation Contract

Default isolation is a temporary directory outside the repository:

```text
/private/tmp/10x-eval-runs/{run-id}/{model-id}-attempt-{n}/
```

Use the platform temp directory if `/private/tmp` is unavailable.

Allowed files copied into each isolated attempt:

- `prompt.md`
- `context.md`
- `bootstrap.md`
- explicitly selected starter scaffold, if any

Forbidden inputs:

- `benchmark/scorecard.md`
- `eval-results/`
- previous attempts
- outputs from other models
- evaluator notes
- hidden tests unless the benchmark explicitly defines them as visible to models

If the user requires stronger isolation and the stack supports it, run attempts in containers. Container isolation is optional by default because live demos should remain simple and fast.

## Workflow

### 1. Preflight

Read the benchmark inputs and confirm:

- `prompt.md` exists
- `scorecard.md` is not included in the model-visible input set
- model/harness list is known
- attempt count is known, defaulting to 3 per model if not specified
- output directories will not overwrite existing attempts without explicit user approval

If `scorecard.md` is referenced inside `prompt.md`, `context.md`, or `bootstrap.md`, stop and ask the user to fix the benchmark package before running attempts.

### 2. Create Isolated Workspaces

For each `{model-id}-attempt-{n}`:

1. Create an empty temp workspace.
2. Copy only allowlisted benchmark files.
3. Copy starter scaffold only if explicitly selected.
4. Record workspace path and start timestamp in a run log outside the model-visible prompt.

The implementation model should see only the benchmark files it is allowed to use.

### 3. Run Attempts

For each model and attempt:

- launch the chosen harness with the contents of `prompt.md`
- include `context.md` and `bootstrap.md` as allowed task context
- run as one-shot with no iterative feedback
- do not show scoring criteria or evaluator notes
- do not repair generated code after completion

Run independent attempts in parallel when the harness supports it and doing so will not exceed local resource limits.

### 4. Collect Artifacts

After each attempt finishes:

1. Copy the final generated project into:

```text
eval-attempts/{model-id}-attempt-{n}/
```

2. Add a minimal `run-log.md` with:
   - model ID
   - harness
   - attempt number
   - run ID
   - temp workspace path
   - start and end timestamp
   - exit status
   - visible benchmark inputs copied

Do not include scorecard contents in `run-log.md`.

### 5. Finish

Report:

- completed attempts
- failed attempts
- output directories
- any isolation deviations
- next recommended command: use `score-eval-attempt` on the generated attempts

## Harness Notes

Use the repo's existing model-running conventions where available. If a harness is not automated, create the isolated workspace and provide the exact model-visible files and prompt that the human should use manually.

## Guardrails

- Do not pass `scorecard.md` to implementation models.
- Do not run attempts inside the benchmark repository root.
- Do not let one attempt read another attempt.
- Do not score or critique attempts during generation.
- Do not overwrite existing attempt directories without explicit approval.
- Do not silently switch from isolated temp folders to in-repo execution.

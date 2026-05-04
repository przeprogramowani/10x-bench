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
- `benchmark/baseline-manifest.md` if present
- model or harness list

Optional:

- `benchmark/bootstrap.md` if intentionally model-visible
- number of attempts per model
- starter scaffold path
- output run ID
- container requirement

Never use `benchmark/scorecard.md` as an input for model attempts.

## Isolation Contract

Every attempt runs in two layers of isolation. Both are mandatory.

### Layer 1 — OS-level workspace isolation

The model's working directory is always a temporary directory **outside the repository**:

```text
/private/tmp/10x-eval-runs/{run-id}/{model-id}-attempt-{n}/
```

Use `$TMPDIR` or `/tmp` if `/private/tmp` is unavailable. Never run or write inside the benchmark repository root. This is a hard requirement, not a default.

### Layer 2 — Container isolation for code execution

All generated code (build, run, test, lint) must execute inside a Docker container. The container mounts only the attempt workspace and has no access to the host filesystem beyond that mount point.

**Standard pattern:**

```bash
WORKSPACE=/private/tmp/10x-eval-runs/{run-id}/{model-id}-attempt-{n}

# Run the generated server
docker run --rm \
  -v "$WORKSPACE":/workspace \
  -w /workspace \
  -p 127.0.0.1:8080:8080 \
  --network bridge \
  <runtime-image> \
  <start-command>

# Run tests / curl checks against it from the host
curl -s http://127.0.0.1:8080/...

# Or run tests inside a second container on the same network
docker run --rm --network container:<server-container-name> \
  curlimages/curl <test-command>
```

Choose the runtime image based on the benchmark stack:

| Stack | Image |
|-------|-------|
| Go | `golang:1.23-alpine` |
| Node.js | `node:22-alpine` |
| Python | `python:3.13-slim` |
| Rust | `rust:1.78-slim` |
| Generic | `ubuntu:24.04` |

**Preflight check:** Before running any attempt, verify Docker is available:

```bash
docker info > /dev/null 2>&1 || echo "Docker unavailable"
```

If Docker is unavailable, stop and report it to the user. Do not silently fall back to running generated code on the host. If the user explicitly accepts the risk and approves running without containers, document the deviation in `run-log.md` under an `isolation_deviations` field.

### Allowed files copied into each isolated attempt workspace

- `prompt.md`
- `context.md`
- `bootstrap.md` only if the benchmark intentionally provides it as model-visible input
- baseline repo, scaffold, fixture files, or starter scaffold explicitly allowed by `baseline-manifest.md`

### Forbidden inputs

- `benchmark/scorecard.md`
- `eval-results/`
- previous attempts
- outputs from other models
- evaluator notes
- hidden tests unless the benchmark explicitly defines them as visible to models

## Workflow

### 1. Preflight

Read the benchmark inputs and confirm:

- `prompt.md` exists
- `scorecard.md` is not included in the model-visible input set
- state mode is known:
  - `greenfield`: start from an empty isolated workspace unless an explicitly allowed starter is provided
  - `brownfield`: start from a fresh copy of the baseline defined in `baseline-manifest.md`
- model/harness list is known
- attempt count is known, defaulting to 3 per model if not specified
- output directories will not overwrite existing attempts without explicit user approval

If `scorecard.md` is referenced inside `prompt.md`, `context.md`, or `bootstrap.md`, stop and ask the user to fix the benchmark package before running attempts.

If the benchmark is brownfield and no baseline source is defined, stop before running attempts.

### 2. Create Isolated Workspaces

For each `{model-id}-attempt-{n}`:

1. Create an empty temp workspace at `/private/tmp/10x-eval-runs/{run-id}/{model-id}-attempt-{n}/`.
2. Verify Docker is available (`docker info`). Stop if not, unless the user has explicitly approved running without containers.
3. For greenfield, leave it empty unless an explicitly allowed starter is part of the benchmark.
4. For brownfield, copy a fresh baseline from `baseline-manifest.md`.
5. Copy only allowlisted benchmark files into the temp workspace.
6. Copy `bootstrap.md` only if it is intentionally model-visible.
7. Record workspace path and start timestamp in a run log outside the model-visible prompt.

The implementation model must see only the benchmark files it is allowed to use, and must write all output to the temp workspace.

### 3. Run Attempts

For each model and attempt:

- launch the chosen harness with the contents of `prompt.md`
- include `context.md` and model-visible `bootstrap.md` only when allowed by the benchmark state contract
- set the harness working directory to the temp workspace (not the repo)
- run as one-shot with no iterative feedback
- do not show scoring criteria or evaluator notes
- do not repair generated code after completion
- all build, run, and test commands issued by the harness or evaluator must execute inside a Docker container mounting only the temp workspace

Run independent attempts in parallel when the harness supports it and doing so will not exceed local resource limits.

### 4. Collect Artifacts

After each attempt finishes:

1. Copy the final generated project into:

```text
eval-attempts/{model-id}-attempt-{n}/
```

2. Save the full harness output log to:

```text
eval-attempts/{model-id}-attempt-{n}/agent-run.log
```

Capture stdout and stderr from the harness process. When running programmatically, redirect both streams and write them verbatim. Every tool call, command, file write, and model response should appear in this log so any run can be replayed and audited without re-running the model. If the harness does not support stdout capture, record the limitation in `run-log.md` under `log_limitations`.

3. Add a minimal `run-log.md` with:
   - model ID
   - harness
   - attempt number
   - run ID
   - temp workspace path
   - start and end timestamp
   - exit status
   - visible benchmark inputs copied
   - state mode and baseline source, if any
   - `isolation_deviations`: list any cases where temp-dir or container isolation was not fully applied and why
   - `log_limitations`: note if `agent-run.log` is incomplete or missing

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
- Do not run attempts inside the benchmark repository root. The temp workspace must be outside the repo.
- Do not let one attempt read another attempt.
- Do not pass `bootstrap.md` when bootstrapping is an evaluated part of a greenfield task.
- Do not reuse a mutated baseline between models; every brownfield attempt gets a fresh copy.
- Do not score or critique attempts during generation.
- Do not overwrite existing attempt directories without explicit approval.
- Do not silently switch from isolated temp folders to in-repo execution.
- Do not run generated code on the host. All execution must happen inside a Docker container.
- Do not start attempts if Docker is unavailable without explicit user approval. Document any such deviation in `run-log.md`.

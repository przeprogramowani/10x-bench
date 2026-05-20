---
name: run-model-attempts-lite
description: Lightweight, non-dockerized variant of run-model-attempts. Runs harness CLIs directly on the host inside a /tmp workspace for fast, cheap evals when full container isolation is not required. Use when the user wants quicker turnaround than the Docker variant (e.g. "run lite", "without docker", "fast attempts", "non-dockerized run", "skip docker", "cheap eval", "uruchom lekko"). Same benchmark layout and runner.yaml as the Docker variant; only the isolation and runtime differ.
---

# run-model-attempts-lite

Runs one-shot implementation attempts the same way as `run-model-attempts`, but **without Docker**. The harness CLI runs directly on the host inside a `/tmp` workspace. This trades container isolation and pinned runtime for speed and simplicity.

Use this skill when:

- you are iterating on a benchmark and want fast feedback
- the host already has the runtime and harness CLIs installed
- you accept that runtime versions are whatever the host has (not the image-pinned ones)

Do **not** use this skill when:

- you need results comparable to other Docker-based runs (runtime drift makes them apples-to-oranges; flag it)
- you do not trust the model not to write outside the workspace (no container fence)
- the benchmark requires a specific stack version that the host does not have

## Repo layout

Same as `run-model-attempts`. Each benchmark is a self-contained directory under `benchmarks/<benchmark-name>/`:

```text
benchmarks/<benchmark-name>/
├── runner.yaml              # required — same schema as the Docker variant; `image` is ignored here
├── prompt.md
├── context.md
├── bootstrap.md             # optional, only if model-visible
├── baseline-manifest.md     # optional
├── scorecard.md             # NEVER passed to attempts
├── eval-attempts/           # this skill writes here
│   └── {model-id}-attempt-{n}/
└── eval-results/
```

The skill never reads or writes outside `benchmarks/<benchmark-name>/`. Legacy top-level `benchmark/`, `eval-attempts/`, or `eval-results/` are ignored.

## Inputs

Required:

- `benchmarks/<benchmark-name>/runner.yaml` — manifest, same schema as the Docker variant
- benchmark name; if omitted and only one benchmark exists, the skill uses it; otherwise asks
- a harness from `runner.yaml -> allowed_harnesses` and (for `opencode`) a model id

Optional:

- number of attempts per model (overrides `attempts_default`)
- output run ID
- starting attempt number (defaults to next free index)

The `image` field in `runner.yaml` is **read but ignored** in lite mode. It is recorded in `run-log.md` for traceability so future Docker runs of the same benchmark can be cross-referenced.

Never use `scorecard.md` as an input for model attempts.

## Isolation Contract

The host filesystem is the only fence. The harness runs as the current user, sees the entire host, and could in principle navigate outside `$WORKSPACE`. The skill does its best to keep secrets and adjacent attempts out of view, but cannot enforce it the way Docker can.

```
[host: ~/dev/10x-bench/]
       │
       │  copy files listed in runner.yaml -> model_visible_files
       ▼
[/tmp/10x-eval-lite/<run-id>/<model-id>-attempt-<n>/]
  ├── prompt.md
  ├── context.md
  └── (agent writes here)
       │
       │  harness CLI invoked with cwd = workspace
       ▼
  workspace contains the final implementation + agent-run.log
       │
       │  copy out after CLI exits
       ▼
[benchmarks/<name>/eval-attempts/{model-id}-attempt-{n}/]
```

Mitigations the skill MUST apply:

- run the harness from `cwd = $WORKSPACE` (not the repo root)
- pass tokens via env vars scoped to the harness invocation; do not export them globally
- never include `scorecard.md`, `eval-attempts/`, `eval-results/`, or `runner.yaml` in `$WORKSPACE`
- record `isolation_deviations: lite mode, no container isolation` in `run-log.md` for every attempt

If the user wants stronger isolation (e.g. macOS sandbox profile, `firejail`, fresh user account), they should use the Docker variant instead.

## `runner.yaml` reuse

Lite mode reuses the manifest unchanged. Field-by-field:

| Field | Used in lite mode | Notes |
|---|---|---|
| `name` | yes | must equal the directory slug |
| `display_name` | yes | recorded in run-log |
| `state_mode` | yes | drives baseline copy in brownfield runs |
| `image` | **ignored** | recorded in run-log for traceability |
| `attempts_default` | yes | default attempt count |
| `prompt_file` | yes | resolved relative to runner.yaml |
| `model_visible_files` | yes | copied into `$WORKSPACE` |
| `allowed_harnesses` | yes | enforced |
| `defaults.<harness>.model` | yes | same resolution order as Docker variant |

## Token resolution

Same env vars as the Docker variant; they are read on the host and passed to the harness invocation only.

| `--harness` | Required env var on host |
|---|---|
| `claude-code` | `ANTHROPIC_API_KEY` |
| `codex` | `OPENAI_API_KEY` |
| `opencode` | `OPENROUTER_API_KEY` |

Do not echo these values into logs. The skill must not write the token to `agent-run.log` or `run-log.md`.

## Model resolution

Same order as the Docker variant:

1. Explicit on the call (e.g. "run kimi k2.6 via opencode" → `--model openrouter/moonshotai/kimi-k2.6`)
2. `runner.yaml -> defaults.<harness>.model`
3. CLI vendor default (`opencode` errors if not resolved by step 1 or 2)

The output directory name `${MODEL_ID}-attempt-${N}` should reflect the *resolved* model so multiple lite runs with different `--model` values do not collide.

## Harness invocation patterns

The lite skill calls each CLI in its non-interactive / one-shot mode. Exact flags may evolve; verify with `<cli> --help` before running. Representative invocations the skill should use as a starting point:

```bash
# Wrap-prompt: ensures the CLI reads prompt.md + context.md from the workspace
WRAP="Read prompt.md and context.md in this directory and complete the task end-to-end. \
Do not ask follow-up questions. Write all files inside this directory."

# claude-code
cd "$WORKSPACE" && \
  ANTHROPIC_API_KEY="$ANTHROPIC_API_KEY" \
  claude --print --model "$MODEL" "$WRAP" 2>&1 | tee agent-run.log

# codex
cd "$WORKSPACE" && \
  OPENAI_API_KEY="$OPENAI_API_KEY" \
  codex exec --model "$MODEL" "$WRAP" 2>&1 | tee agent-run.log

# opencode
cd "$WORKSPACE" && \
  OPENROUTER_API_KEY="$OPENROUTER_API_KEY" \
  opencode run --model "$MODEL" "$WRAP" 2>&1 | tee agent-run.log
```

Notes:

- For `claude-code` and `codex`, omit `--model` to fall through to the vendor default.
- For `opencode`, `--model` is required (fail fast if not resolved).
- Always run with `cd $WORKSPACE` — file writes must land in the workspace, not the repo.
- Always pipe through `tee agent-run.log` so the session is captured for later inspection.

## Preflight check

Before running any attempt:

```bash
# 1. Benchmark directory exists
test -d "benchmarks/${BENCHMARK}" \
  || { echo "benchmarks/${BENCHMARK} not found"; exit 1; }

# 2. runner.yaml exists and parses
RUNNER="benchmarks/${BENCHMARK}/runner.yaml"
test -r "$RUNNER" || { echo "$RUNNER missing"; exit 1; }

# 3. prompt_file resolves
PROMPT_REL=$(yq -r '.prompt_file' "$RUNNER")
test -r "benchmarks/${BENCHMARK}/${PROMPT_REL}" \
  || { echo "prompt_file not found: ${PROMPT_REL}"; exit 1; }

# 4. No model_visible_files entry references scorecard
yq -r '.model_visible_files[]' "$RUNNER" | grep -qi 'scorecard' \
  && { echo "scorecard.md must not be in model_visible_files"; exit 1; }

# 5. Chosen harness is allowed
yq -r '.allowed_harnesses[]' "$RUNNER" | grep -qx "$HARNESS" \
  || { echo "harness $HARNESS not in allowed_harnesses"; exit 1; }

# 6. Harness CLI is installed and on PATH
case "$HARNESS" in
  claude-code) command -v claude   >/dev/null || { echo "claude CLI not found"; exit 1; } ;;
  codex)       command -v codex    >/dev/null || { echo "codex CLI not found"; exit 1; } ;;
  opencode)    command -v opencode >/dev/null || { echo "opencode CLI not found"; exit 1; } ;;
esac

# 7. Token env var is set
case "$HARNESS" in
  claude-code) : "${ANTHROPIC_API_KEY:?set ANTHROPIC_API_KEY before running}" ;;
  codex)       : "${OPENAI_API_KEY:?set OPENAI_API_KEY before running}" ;;
  opencode)    : "${OPENROUTER_API_KEY:?set OPENROUTER_API_KEY before running}" ;;
esac

# 8. Capture host runtime versions for the run-log (best-effort, do not fail)
node --version    2>/dev/null
python3 --version 2>/dev/null
go version        2>/dev/null
dotnet --version  2>/dev/null
java -version     2>&1 | head -1
```

If any check in steps 1–7 fails, stop and report. Step 8 is informational and feeds the run-log.

## Forbidden inputs in `$WORKSPACE`

The workspace must not receive:

- `scorecard.md`
- `runner.yaml`
- `eval-attempts/` (any prior attempt)
- `eval-results/`
- evaluator notes
- any path outside the benchmark directory

Only files explicitly listed in `runner.yaml -> model_visible_files` are copied in.

## Workflow

### 1. Preflight

- resolve target benchmark (explicit name, single-benchmark fallback, or interactive selection)
- run preflight checks 1–7 above; abort on failure
- compute next free attempt number by scanning `benchmarks/<name>/eval-attempts/{model-id}-attempt-*/`
- record host runtime versions for the run-log

### 2. Create Workspace

For each `{model-id}-attempt-{n}`:

1. Create a temp workspace: `WORKSPACE=$(mktemp -d /tmp/10x-eval-lite/XXXXXX)` (create the parent dir first if needed).
2. Copy each entry from `runner.yaml -> model_visible_files` into the workspace (files flat, directories recursively).
3. For brownfield, the baseline arrives via `model_visible_files`; if `baseline-manifest.md` defines a reset procedure, execute it inside the workspace.
4. Record workspace path and start timestamp.

### 3. Run the Harness

For each attempt:

- `cd "$WORKSPACE"`
- export the harness-specific token env var **only for the duration of the invocation** (do not re-export globally)
- invoke the CLI in one-shot/non-interactive mode with the resolved `--model` (see invocation patterns above)
- capture stdout + stderr via `tee agent-run.log`
- enforce a sensible timeout (default: 30 minutes, configurable per call) and kill the process if exceeded
- one-shot only — no follow-up turns

Independent attempts may run in parallel if the host has the capacity, but be mindful that lite-mode attempts share the host filesystem; do not run two attempts in the same workspace.

### 4. Collect Artifacts

After each invocation:

1. Copy the workspace to:

```text
benchmarks/<benchmark-name>/eval-attempts/{model-id}-attempt-{n}/
```

`agent-run.log` is already inside the workspace and copies out with it.

2. Add `run-log.md` with:
   - benchmark name and display name (from `runner.yaml`)
   - state mode and baseline source, if any
   - model ID and display name
   - harness and `--model` value
   - **mode**: `lite` (so downstream scoring knows isolation was reduced)
   - `image` and `image_digest`: the value from `runner.yaml -> image` and `not-pulled (lite mode)` for the digest, recorded for traceability
   - host runtime versions captured in preflight (node/python/go/dotnet/java as available)
   - harness CLI version (`claude --version` / `codex --version` / `opencode --version`)
   - attempt number and run ID
   - temp workspace path
   - start and end timestamp
   - exit status and timeout flag
   - visible benchmark inputs copied (mirror of `model_visible_files`)
   - `isolation_deviations`: `lite mode, no container isolation; harness ran on host`
   - `log_limitations`: note if `agent-run.log` is incomplete or missing

Do not include scorecard contents in `run-log.md`.

### 5. Cleanup

By default, leave the `/tmp/10x-eval-lite/<run-id>/` workspace in place after copying out — useful for post-mortem inspection. Mention the path in the final report so the user can `rm -rf` it when done.

If the user passes a `--clean` flag (or asks for cleanup), `rm -rf` the temp workspace after the copy completes.

### 6. Finish

Report:

- target benchmark and number of attempts run
- mode: `lite` (host execution, no container)
- completed attempts and their output directories under `benchmarks/<name>/eval-attempts/`
- failed attempts and exit codes
- temp workspace paths (if not auto-cleaned)
- host runtime caveat: results are not directly comparable to Docker-mode runs of the same benchmark
- next recommended step: use `score-eval-attempt` on the generated attempts (which writes to `benchmarks/<name>/eval-results/`)

## Guardrails

- Operate strictly under `benchmarks/<benchmark-name>/`. Do not read or write the legacy top-level `benchmark/`, `eval-attempts/`, or `eval-results/` directories.
- Do not pass `scorecard.md` to implementation models.
- Do not copy `runner.yaml`, `eval-attempts/`, or `eval-results/` into `$WORKSPACE`.
- Do not echo or log token values.
- Do not export token env vars beyond the lifetime of the harness invocation.
- Do not pass `bootstrap.md` when bootstrapping is an evaluated part of a greenfield task — it must not appear in `model_visible_files` in that case.
- Do not reuse a mutated baseline between models; every brownfield attempt gets a fresh workspace copy.
- Do not score or critique attempts during generation.
- Do not overwrite existing attempt directories without explicit approval. Default to picking the next free `attempt-{n}` index.
- Do not silently fall back to lite mode when the user invoked the Docker variant — this skill is opt-in only.
- Always record `isolation_deviations: lite mode` in `run-log.md` so downstream consumers know the runtime was not pinned.

---
name: run-model-attempts
description: Run isolated one-shot model attempts for a programming evaluation case. Use when the user wants to execute multiple AI coding models or agents against the same benchmark prompt while preventing access to scorecards, previous results, or other attempts. Triggers on phrases like "run model attempts", "uruchom proby modeli", "odpal modele na benchmarku", "run eval attempts", "one-shot attempts", "isolated model runs", or requests to compare several models on the same programming task.
---

# run-model-attempts

Runs one-shot implementation attempts for a benchmark case while preserving isolation and comparability. This skill only runs attempts. It does not score, fix, or iterate on results.

## Repo layout

This skill operates exclusively under `benchmarks/<benchmark-name>/`. Each benchmark is a self-contained directory:

```text
benchmarks/<benchmark-name>/
├── runner.yaml              # required — names image, harnesses, defaults, model-visible files
├── prompt.md                # required — model-visible task spec
├── context.md               # optional — model-visible domain data
├── bootstrap.md             # optional — model-visible only when intentional
├── baseline/                # optional — brownfield baseline (directory or files)
├── baseline-manifest.md     # optional — describes brownfield baseline
├── scorecard.md             # NEVER passed to attempts
├── Dockerfile               # builds the benchmark image
├── eval-attempts/           # this skill writes here
│   └── {model-id}-attempt-{n}/
└── eval-results/            # written by the score-eval-attempt skill
```

The skill never reads or writes outside `benchmarks/<benchmark-name>/`. Legacy top-level `benchmark/`, `eval-attempts/`, or `eval-results/` directories from earlier versions are ignored.

## Inputs

Required:

- `benchmarks/<benchmark-name>/runner.yaml` — the benchmark manifest (see schema below)
- the benchmark name (the directory under `benchmarks/`); if omitted and only one benchmark exists, the skill uses it; if multiple exist, the skill asks
- model or harness list (or use `runner.yaml` defaults)

Optional:

- number of attempts per model (overrides `attempts_default`)
- output run ID
- starting attempt number (defaults to next free index)

Never use `scorecard.md` as an input for model attempts.

The skill resolves the image declared in `runner.yaml`, pins its digest, and reuses it across all attempts of the run. The image already contains the three coding-agent CLIs (claude-code, codex, opencode) plus the `run-attempt` orchestrator. Per-benchmark images add only the stack runtime needed by the agent (Node, Go, Python, JDK, .NET, …) — see `images/README.md` and `benchmarks/<benchmark-name>/Dockerfile`.

### `runner.yaml` schema

```yaml
# Identity (required)
name: dotnet-blog                          # must match the directory name
display_name: Simple Blazor Blog           # human-readable label

# State contract (required)
state_mode: greenfield                     # greenfield | brownfield

# Image (required)
image: ghcr.io/10xbench/dotnet-blog:2026-05-06

# Attempts (required)
attempts_default: 3

# Prompt (required) — path relative to this runner.yaml
prompt_file: prompt.md

# Files copied into the container workspace (required, ordered).
# Paths are relative to this runner.yaml. Never include scorecard.md.
# For brownfield, list the baseline directory or its files here.
model_visible_files:
  - prompt.md
  - context.md
  # - bootstrap.md          # only when bootstrap is intentionally model-visible
  # - baseline/             # brownfield baseline tree

# Harnesses (required)
allowed_harnesses:
  - opencode
  - claude-code
  - codex

# Per-harness defaults (optional). Resolution order:
#   explicit on call  >  defaults.<harness>.model  >  CLI vendor default
# opencode REQUIRES a model from explicit or defaults — no vendor default.
defaults:
  opencode:
    model: openrouter/z-ai/glm-4.7
  # claude-code:
  #   model: claude-opus-4-7
  # codex:
  #   model: gpt-5-codex
```

## Isolation Contract

The Docker container is the isolation unit. The entire harness session — every file write, shell command, build, and test the agent performs — runs inside the container. The container sees only `/workspace`. It cannot navigate to the host repo, other attempts, or the scorecard because those paths do not exist inside it.

```
[host: benchmarks/<name>/]
       │
       │  copy files listed in runner.yaml -> model_visible_files
       ▼
[Docker container]
  ├── /workspace/          ← only path the agent can see
  │     ├── prompt.md
  │     └── context.md
  ├── harness binary       ← baked into image
  └── language runtime     ← from base image
       │
       │  agent runs, writes code, builds, tests — all inside
       ▼
  /workspace/ contains the final implementation
       │
       │  copy out after container exits
       ▼
[benchmarks/<name>/eval-attempts/{model-id}-attempt-{n}/]
```

### Standard execution pattern

The skill resolves the benchmark image once, then runs N attempts against it. The image already has the three CLIs and the `run-attempt` orchestrator baked in — there is no per-attempt install step.

```bash
# Inputs to the skill
BENCHMARK="dotnet-blog"                  # benchmarks/<name>/ subdirectory
BENCH_DIR="benchmarks/${BENCHMARK}"
RUNNER="${BENCH_DIR}/runner.yaml"

# Resolve image once per run. Tolerant of local-only tags so a demo build
# (`docker build -t 10xbench/dotnet-blog:demo benchmarks/dotnet-blog`)
# works without a registry; remote tags still pull as normal.
IMAGE=$(yq -r '.image' "$RUNNER")
docker pull "$IMAGE" 2>/dev/null \
  || docker image inspect "$IMAGE" >/dev/null \
  || { echo "image not pullable and not present locally: $IMAGE" >&2; exit 1; }
IMAGE_DIGEST=$(docker inspect --format='{{index .RepoDigests 0}}' "$IMAGE" 2>/dev/null \
               || docker inspect --format='{{.Id}}' "$IMAGE")

# Per attempt
WORKSPACE=$(mktemp -d /private/tmp/10x-eval-runs/XXXXXX)

# Copy each entry from runner.yaml -> model_visible_files into the workspace.
# Paths in the manifest are relative to runner.yaml's directory.
for REL in $(yq -r '.model_visible_files[]' "$RUNNER"); do
  SRC="${BENCH_DIR}/${REL}"
  if [ -d "$SRC" ]; then
    cp -R "$SRC" "$WORKSPACE/"
  else
    cp "$SRC" "$WORKSPACE/"
  fi
done

docker run --rm \
  --name "attempt-${MODEL_ID}-${N}" \
  -v "$WORKSPACE":/workspace \
  "$IMAGE" \
    --harness "$HARNESS" \
    --token   "$TOKEN" \
    --model   "$MODEL" \
  2>&1 | tee "$WORKSPACE/agent-run.log"

# Output goes inside the benchmark, not at the repo root.
OUT="${BENCH_DIR}/eval-attempts/${MODEL_ID}-attempt-${N}"
mkdir -p "$OUT"
cp -r "$WORKSPACE/." "$OUT/"
```

`tee` captures the full session as `agent-run.log` inside the workspace. The orchestrator (`/usr/local/bin/run-attempt` in the image) handles harness-specific auth wiring; the caller stays uniform across `claude-code`, `codex`, and `opencode`.

### Token resolution

The skill reads the host environment for the harness-appropriate key and passes it via `--token`. It does not propagate the raw env var into the container.

| `--harness` | Required host env var | Inside the container |
|---|---|---|
| `claude-code` | `ANTHROPIC_API_KEY` | promoted to `ANTHROPIC_API_KEY` |
| `codex` | `OPENAI_API_KEY` | promoted to `OPENAI_API_KEY` |
| `opencode` | `OPENROUTER_API_KEY` | written to `~/.local/share/opencode/auth.json` |

### Model resolution

For each `(harness, attempt)` the skill resolves `--model` in this order:

1. **Explicit on the call.** When the user says "run kimi k2.6 via opencode", the skill passes `--model openrouter/moonshotai/kimi-k2.6` to `run-attempt`.
2. **`runner.yaml -> defaults.<harness>.model`.** Used when no model is given on the call. Useful for demos so the operator doesn't have to retype a long OpenRouter id.
3. **CLI vendor default.** When `--model` is not provided at all, `claude-code` and `codex` use whatever their CLI defaults to. **`opencode` errors** here — there is no vendor default.

Implications:

- `opencode` must have a model resolved by step 1 or 2, otherwise `run-attempt` exits with code 4.
- For `claude-code` / `codex`, omitting `--model` is fine but means the run is not pinned to a specific model tier — `run-log.md` should record this as `model: <vendor-default>`.
- The output directory name `${MODEL_ID}-attempt-${N}` should reflect the *resolved* model, not just the harness, so multiple `claude-code` runs with different `--model` values don't collide.

Example invocation patterns:

```bash
# Pinned model, opencode
docker run --rm -v "$WS":/workspace "$IMAGE" \
  --harness opencode --token "$OPENROUTER_API_KEY" \
  --model   openrouter/z-ai/glm-4.7

# Pinned model, claude-code (Opus tier)
docker run --rm -v "$WS":/workspace "$IMAGE" \
  --harness claude-code --token "$ANTHROPIC_API_KEY" \
  --model   claude-opus-4-7

# Vendor default, claude-code
docker run --rm -v "$WS":/workspace "$IMAGE" \
  --harness claude-code --token "$ANTHROPIC_API_KEY"
```

Common OpenRouter provider prefixes for `--model`:

- Moonshot (Kimi): `openrouter/moonshotai/<model>`
- Z.AI (GLM): `openrouter/z-ai/<model>`
- MiniMax: `openrouter/minimax/<model>`
- Mistral (Devstral): `openrouter/mistral/<model>`
- Alibaba (Qwen): `openrouter/alibaba/<model>`
- xAI (Grok): `openrouter/xai/<model>`

If unsure of the provider prefix, search OpenRouter for the model before running.

### Manual harnesses (Cursor, Claude Desktop, Codex Desktop)

Docker is not applicable. The harness runs on the host inside the operator's IDE or desktop app, and `runner.yaml` does not drive these runs.

Minimum isolation for manual harnesses:

1. Create a temp workspace outside the repo: `mktemp -d /private/tmp/10x-eval-runs/XXXXXX`
2. Copy only the files listed in `runner.yaml -> model_visible_files`
3. Open that directory in the IDE/app — do not open the benchmark repo itself
4. After the run, copy the workspace to `benchmarks/<benchmark-name>/eval-attempts/{model-id}-attempt-{n}/`
5. Record `isolation_deviations: manual harness, container isolation not available` in `run-log.md`

The operator is responsible for ensuring the agent cannot see other attempts or the scorecard during a manual run.

### Stack runtime selection

The stack runtime lives in `benchmarks/<benchmark-name>/Dockerfile`, not in this skill. The benchmark image inherits from `ghcr.io/10xbench/harness:<tag>` (Node 22 + the three CLIs) and adds whatever extra runtime the agent needs (`golang`, `python3`, JDK, .NET SDK, etc.). To switch stacks, edit that Dockerfile and rebuild — no skill change required.

### Preflight check

Before running any attempt, verify:

```bash
# 1. Benchmark name resolves to an existing directory
test -d "benchmarks/${BENCHMARK}" \
  || { echo "benchmarks/${BENCHMARK} not found"; exit 1; }

# 2. runner.yaml exists and parses
RUNNER="benchmarks/${BENCHMARK}/runner.yaml"
test -r "$RUNNER" || { echo "$RUNNER missing"; exit 1; }

# 3. Docker available
docker info > /dev/null 2>&1 || { echo "Docker unavailable — cannot run isolated attempts"; exit 1; }

# 4. Image is pullable or already local
IMAGE=$(yq -r '.image' "$RUNNER")
docker pull "$IMAGE" 2>/dev/null \
  || docker image inspect "$IMAGE" >/dev/null \
  || { echo "image not pullable and not present locally: $IMAGE" >&2; exit 1; }

# 5. prompt_file resolves
PROMPT_REL=$(yq -r '.prompt_file' "$RUNNER")
test -r "benchmarks/${BENCHMARK}/${PROMPT_REL}" \
  || { echo "prompt_file not found: ${PROMPT_REL}"; exit 1; }

# 6. No model_visible_files entry resolves to scorecard.md
yq -r '.model_visible_files[]' "$RUNNER" | grep -qi 'scorecard' \
  && { echo "scorecard.md must not be in model_visible_files"; exit 1; }

# 7. Token env var for the chosen harness is set
case "$HARNESS" in
  claude-code) : "${ANTHROPIC_API_KEY:?set ANTHROPIC_API_KEY before running}" ;;
  codex)       : "${OPENAI_API_KEY:?set OPENAI_API_KEY before running}" ;;
  opencode)    : "${OPENROUTER_API_KEY:?set OPENROUTER_API_KEY before running}" ;;
esac
```

If Docker is unavailable, stop and report to the user. Do not silently fall back to running the harness directly on the host. If the user explicitly accepts the risk, document the deviation and proceed with Layer 1 (temp dir) isolation only.

### Forbidden inputs inside the container

The container must not receive:

- `benchmarks/<benchmark-name>/scorecard.md`
- `benchmarks/<benchmark-name>/eval-attempts/` (any prior attempt)
- `benchmarks/<benchmark-name>/eval-results/`
- evaluator notes
- hidden tests unless the benchmark explicitly defines them as model-visible
- any path outside `benchmarks/<benchmark-name>/` from the host

Do not mount the benchmark directory or any parent directory. Mount only `$WORKSPACE`.

## Workflow

### 1. Preflight

Read the benchmark inputs and confirm:

- target benchmark is identified (explicit name, or single-benchmark fallback, or interactive selection)
- `benchmarks/<name>/runner.yaml` exists, parses, and names a pullable image
- `prompt.md` exists at `runner.yaml -> prompt_file` (resolved relative to runner.yaml)
- every entry in `runner.yaml -> model_visible_files` resolves to a real path inside the benchmark dir
- no entry in `model_visible_files` references `scorecard.md`, `eval-attempts/`, or `eval-results/`
- `state_mode` from `runner.yaml` matches the benchmark contents:
  - `greenfield`: workspace starts empty except for allowed benchmark files
  - `brownfield`: `model_visible_files` includes the baseline tree (or `baseline-manifest.md` describes one)
- model/harness list is known and each harness is in `runner.yaml -> allowed_harnesses`
- attempt count is known, defaulting to `runner.yaml -> attempts_default` (or 3 if absent)
- next attempt number is computed by scanning existing `benchmarks/<name>/eval-attempts/{model-id}-attempt-*/` so we don't overwrite
- Docker is available and `$IMAGE` is either pullable or already present locally
- the host env var matching each chosen harness is set (see Token resolution)

If `scorecard.md` is referenced inside `prompt.md`, `context.md`, or `bootstrap.md`, stop and ask the user to fix the benchmark package before running attempts.

### 2. Create Isolated Workspaces

For each `{model-id}-attempt-{n}`:

1. Create an empty temp workspace: `mktemp -d /private/tmp/10x-eval-runs/XXXXXX`
2. Copy each entry from `runner.yaml -> model_visible_files` into the workspace (files copied flat, directories copied recursively).
3. For greenfield, no further setup needed.
4. For brownfield, the baseline arrives via `model_visible_files`. If `baseline-manifest.md` defines a reset procedure (e.g. running a generator), execute it inside the workspace.
5. Record workspace path and start timestamp.

### 3. Run Attempts

For each model and attempt:

- Start a Docker container from the benchmark image resolved in preflight (the harness CLIs are already installed in the image — no per-attempt install)
- Mount only `$WORKSPACE` as `/workspace`
- Invoke the image's `run-attempt` entrypoint with `--harness`, `--token`, and `--model`
- Capture stdout + stderr with `tee $WORKSPACE/agent-run.log`
- Run one-shot with no iterative feedback
- Do not pass scorecard or evaluator notes

Run independent attempts in parallel when resource limits allow. Pre-pull the image once at the top of the run loop so parallel attempts don't serialize on a cold pull.

### 4. Collect Artifacts

After each container exits:

1. Copy the workspace to:

```text
benchmarks/<benchmark-name>/eval-attempts/{model-id}-attempt-{n}/
```

`agent-run.log` is already inside the workspace and will be copied with it.

2. Add `run-log.md` with:
   - benchmark name and display name (from `runner.yaml`)
   - state mode and baseline source, if any
   - model ID and display name
   - harness (`claude-code` | `codex` | `opencode`) and `--model` value
   - benchmark image tag and resolved digest (`image`, `image_digest`)
   - attempt number and run ID
   - temp workspace path
   - start and end timestamp
   - container exit status
   - visible benchmark inputs copied (mirror of `model_visible_files`)
   - `isolation_deviations`: any cases where container isolation was not applied and why
   - `log_limitations`: note if `agent-run.log` is incomplete or missing

The image digest pins all three harness CLI versions transitively. Do not separately log harness CLI versions.

Do not include scorecard contents in `run-log.md`.

### 5. Finish

Report:

- target benchmark and number of attempts run
- completed attempts and their output directories under `benchmarks/<name>/eval-attempts/`
- failed attempts and exit codes
- any isolation deviations
- next recommended step: use `score-eval-attempt` on the generated attempts (which will write to `benchmarks/<name>/eval-results/`)

## Guardrails

- Operate strictly under `benchmarks/<benchmark-name>/`. Do not read or write the legacy top-level `benchmark/`, `eval-attempts/`, or `eval-results/` directories.
- Do not pass `scorecard.md` to implementation models.
- Do not mount the benchmark directory or any path above `$WORKSPACE` into the container.
- Do not let one attempt's workspace be visible to another container.
- Do not pass `bootstrap.md` when bootstrapping is an evaluated part of a greenfield task — it must not appear in `model_visible_files` in that case.
- Do not reuse a mutated baseline between models; every brownfield attempt gets a fresh workspace copy.
- Do not score or critique attempts during generation.
- Do not overwrite existing attempt directories without explicit approval. Default to picking the next free `attempt-{n}` index.
- Do not run the harness directly on the host when Docker is available.
- Do not start attempts if Docker is unavailable without explicit user approval.
- Do not use git worktrees as an isolation substitute — they share the host filesystem and do not prevent the agent from navigating to other paths.

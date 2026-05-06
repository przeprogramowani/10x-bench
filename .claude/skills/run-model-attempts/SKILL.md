---
name: run-model-attempts
description: Run isolated one-shot model attempts for a programming evaluation case. Use when the user wants to execute multiple AI coding models or agents against the same benchmark prompt while preventing access to scorecards, previous results, or other attempts. Triggers on phrases like "run model attempts", "uruchom proby modeli", "odpal modele na benchmarku", "run eval attempts", "one-shot attempts", "isolated model runs", or requests to compare several models on the same programming task.
---

# run-model-attempts

Runs one-shot implementation attempts for a benchmark case while preserving isolation and comparability. This skill only runs attempts. It does not score, fix, or iterate on results.

## Inputs

Required:

- `benchmark/runner.yaml` — names the benchmark Docker image, allowed harnesses, default attempt count, prompt path
- `benchmark/prompt.md`
- `benchmark/context.md` if present
- `benchmark/baseline-manifest.md` if present
- model or harness list (or use `runner.yaml` defaults)

Optional:

- `benchmark/bootstrap.md` if intentionally model-visible
- number of attempts per model (overrides `attempts_default`)
- starter scaffold path
- output run ID

Never use `benchmark/scorecard.md` as an input for model attempts.

The skill resolves the image declared in `runner.yaml`, pins its digest, and reuses it across all attempts of the run. The image already contains the three coding-agent CLIs (claude-code, codex, opencode) plus the `run-attempt` orchestrator. Per-benchmark images add only the stack runtime needed by the agent (Node, Go, Python, JDK, …) — see `images/README.md`.

## Isolation Contract

The Docker container is the isolation unit. The entire harness session — every file write, shell command, build, and test the agent performs — runs inside the container. The container sees only `/workspace`. It cannot navigate to the host repo, other attempts, or the scorecard because those paths do not exist inside it.

```
[host: benchmark repo]
       │
       │  copy prompt.md + context.md only
       ▼
[Docker container]
  ├── /workspace/          ← only path the agent can see
  │     ├── prompt.md
  │     └── context.md
  ├── harness binary       ← installed at container start
  └── language runtime     ← from base image
       │
       │  agent runs, writes code, builds, tests — all inside
       ▼
  /workspace/ contains the final implementation
       │
       │  copy out after container exits
       ▼
[eval-attempts/{model-id}-attempt-{n}/]
```

### Standard execution pattern

The skill resolves the benchmark image once, then runs N attempts against it. The image already has the three CLIs and the `run-attempt` orchestrator baked in — there is no per-attempt install step.

```bash
# Resolve image once per run
IMAGE=$(yq -r '.image' benchmark/runner.yaml)
docker pull "$IMAGE"
IMAGE_DIGEST=$(docker inspect --format='{{index .RepoDigests 0}}' "$IMAGE")

# Per attempt
WORKSPACE=$(mktemp -d /private/tmp/10x-eval-runs/XXXXXX)

cp benchmark/prompt.md "$WORKSPACE/"
cp benchmark/context.md "$WORKSPACE/" 2>/dev/null || true
# brownfield: also copy a fresh baseline per benchmark/baseline-manifest.md
# bootstrap.md: copy only if intentionally model-visible

docker run --rm \
  --name "attempt-${MODEL_ID}-${N}" \
  -v "$WORKSPACE":/workspace \
  "$IMAGE" \
    --harness "$HARNESS" \
    --token   "$TOKEN" \
    --model   "$MODEL" \
  2>&1 | tee "$WORKSPACE/agent-run.log"

cp -r "$WORKSPACE/." "eval-attempts/${MODEL_ID}-attempt-${N}/"
```

`tee` captures the full session as `agent-run.log` inside the workspace. The orchestrator (`/usr/local/bin/run-attempt` in the image) handles harness-specific auth wiring; the caller stays uniform across `claude-code`, `codex`, and `opencode`.

### Token resolution

The skill reads the host environment for the harness-appropriate key and passes it via `--token`. It does not propagate the raw env var into the container.

| `--harness` | Required host env var | Inside the container |
|---|---|---|
| `claude-code` | `ANTHROPIC_API_KEY` | promoted to `ANTHROPIC_API_KEY` |
| `codex` | `OPENAI_API_KEY` | promoted to `OPENAI_API_KEY` |
| `opencode` | `OPENROUTER_API_KEY` | written to `~/.local/share/opencode/auth.json` |

`--model` is required for `opencode` (the OpenRouter token is orthogonal to the model id) and ignored for the other harnesses. If `--model` is not supplied on the call, fall back to `runner.yaml -> defaults.<harness>.model`.

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
2. Copy only allowed benchmark files there
3. Open that directory in the IDE/app — do not open the benchmark repo itself
4. After the run, copy the workspace to `eval-attempts/{model-id}-attempt-{n}/`
5. Record `isolation_deviations: manual harness, container isolation not available` in `run-log.md`

The operator is responsible for ensuring the agent cannot see other attempts or the scorecard during a manual run.

### Stack runtime selection

The stack runtime lives in `benchmark/Dockerfile`, not in this skill. The benchmark image inherits from `ghcr.io/10xbench/harness:<tag>` (Node 22 + the three CLIs) and adds whatever extra runtime the agent needs (`golang`, `python3`, JDK, etc.). To switch stacks, edit `benchmark/Dockerfile` and rebuild — no skill change required.

### Preflight check

Before running any attempt, verify:

```bash
# Docker available
docker info > /dev/null 2>&1 || { echo "Docker unavailable — cannot run isolated attempts"; exit 1; }

# runner.yaml parses and names a pullable image
test -r benchmark/runner.yaml || { echo "benchmark/runner.yaml missing"; exit 1; }
IMAGE=$(yq -r '.image' benchmark/runner.yaml)
docker pull "$IMAGE"

# Token env var for the chosen harness is set
case "$HARNESS" in
  claude-code) : "${ANTHROPIC_API_KEY:?set ANTHROPIC_API_KEY before running}" ;;
  codex)       : "${OPENAI_API_KEY:?set OPENAI_API_KEY before running}" ;;
  opencode)    : "${OPENROUTER_API_KEY:?set OPENROUTER_API_KEY before running}" ;;
esac
```

If Docker is unavailable, stop and report to the user. Do not silently fall back to running the harness directly on the host. If the user explicitly accepts the risk, document the deviation and proceed with Layer 1 (temp dir) isolation only.

### Forbidden inputs inside the container

The container must not receive:

- `benchmark/scorecard.md`
- `eval-results/`
- other attempt directories
- evaluator notes
- hidden tests unless the benchmark explicitly defines them as model-visible

Do not mount the benchmark repo or any parent directory. Mount only `$WORKSPACE`.

## Workflow

### 1. Preflight

Read the benchmark inputs and confirm:

- `runner.yaml` exists, parses, and names a pullable image
- `prompt.md` exists at `runner.yaml -> prompt_file`
- `scorecard.md` is not included in the model-visible input set
- state mode is known:
  - `greenfield`: workspace starts empty except for allowed benchmark files
  - `brownfield`: workspace starts with a fresh copy of the baseline from `baseline-manifest.md`
- model/harness list is known and each harness is in `runner.yaml -> allowed_harnesses`
- attempt count is known, defaulting to `runner.yaml -> attempts_default` (or 3 if absent)
- Docker is available and `docker pull "$IMAGE"` succeeds
- the host env var matching each chosen harness is set (see Token resolution)
- output directories will not overwrite existing attempts without explicit user approval

If `scorecard.md` is referenced inside `prompt.md`, `context.md`, or `bootstrap.md`, stop and ask the user to fix the benchmark package before running attempts.

### 2. Create Isolated Workspaces

For each `{model-id}-attempt-{n}`:

1. Create an empty temp workspace: `mktemp -d /private/tmp/10x-eval-runs/XXXXXX`
2. For greenfield, leave it empty.
3. For brownfield, copy a fresh baseline from `baseline-manifest.md`.
4. Copy only allowlisted benchmark files into the temp workspace.
5. Copy `bootstrap.md` only if it is intentionally model-visible.
6. Record workspace path and start timestamp.

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
eval-attempts/{model-id}-attempt-{n}/
```

`agent-run.log` is already inside the workspace and will be copied with it.

2. Add `run-log.md` with:
   - model ID and display name
   - harness (`claude-code` | `codex` | `opencode`) and `--model` value
   - benchmark image tag and resolved digest (`image`, `image_digest`)
   - attempt number and run ID
   - temp workspace path
   - start and end timestamp
   - container exit status
   - visible benchmark inputs copied
   - state mode and baseline source, if any
   - `isolation_deviations`: any cases where container isolation was not applied and why
   - `log_limitations`: note if `agent-run.log` is incomplete or missing

The image digest pins all three harness CLI versions transitively. Do not separately log harness CLI versions.

Do not include scorecard contents in `run-log.md`.

### 5. Finish

Report:

- completed attempts and their output directories
- failed attempts and exit codes
- any isolation deviations
- next recommended step: use `score-eval-attempt` on the generated attempts

## Guardrails

- Do not pass `scorecard.md` to implementation models.
- Do not mount the benchmark repo or any path above `$WORKSPACE` into the container.
- Do not let one attempt's workspace be visible to another container.
- Do not pass `bootstrap.md` when bootstrapping is an evaluated part of a greenfield task.
- Do not reuse a mutated baseline between models; every brownfield attempt gets a fresh workspace copy.
- Do not score or critique attempts during generation.
- Do not overwrite existing attempt directories without explicit approval.
- Do not run the harness directly on the host when Docker is available.
- Do not start attempts if Docker is unavailable without explicit user approval.
- Do not use git worktrees as an isolation substitute — they share the host filesystem and do not prevent the agent from navigating to other paths.

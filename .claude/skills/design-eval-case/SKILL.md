---
name: design-eval-case
description: Design a stack-agnostic programming evaluation case for live AI coding evals. Use when the user wants to create a benchmark prompt, context, optional bootstrap or baseline instructions, and scorecard for any programming task, especially during webinars or workshops where participants choose the stack, task, constraints, and scoring criteria. Triggers on phrases like "design eval case", "zaprojektuj eval", "stworz benchmark case", "live eval design", "scorecard dla zadania", "programming eval", or requests to define an AI coding benchmark from scratch.
---

# design-eval-case

Facilitates the creation of a complete, stack-agnostic programming benchmark case. The output is a small benchmark package that can be handed to model runners and evaluators without extra interpretation.

## Outputs

This skill operates exclusively under `benchmarks/<benchmark-name>/`. Each benchmark is a self-contained directory. Create or update these files inside it:

```text
benchmarks/<benchmark-name>/
├── runner.yaml              # required — manifest consumed by run-model-attempts
├── prompt.md                # required — model-visible task spec
├── context.md               # required — model-visible domain data
└── scorecard.md             # required — evaluator-only, NEVER passed to attempts
```

Create `bootstrap.md` only when the benchmark intentionally provides model-visible bootstrap instructions. Create `baseline-manifest.md` (and a `baseline/` directory or files) when the task starts from an existing repo, scaffold, fixture, or seed state.

If `benchmarks/` does not exist, create it. If `benchmarks/<name>/` does not exist, create it. Do not create unrelated documentation files. Do not write outside `benchmarks/<name>/`.

> **Note on the Dockerfile.** Each benchmark also needs a `benchmarks/<name>/Dockerfile` for the per-benchmark image declared in `runner.yaml`. This skill does not generate it (the stack runtime varies too much). After running this skill, point the user at an existing benchmark's Dockerfile as a template and instruct them to build and tag the image referenced in `runner.yaml -> image`.

## Interaction Rules

Use structured question tools for all meaningful decisions whenever the environment provides them:

- Claude Code: prefer `AskUserQuestion`
- Codex: prefer `request_user_input`
- Other agents: use the closest available form, survey, checklist, select, or structured prompt tool

Do not ask key benchmark decisions in plain text if a structured question tool is available. Plain text is allowed only for short summaries, progress updates, or when the environment has no suitable question tool.

Each structured question should:

- provide concrete options
- include a recommended default when one option is safest
- capture decisions that materially affect the benchmark
- avoid implementation details the agent can discover from documentation or the repo

## Workflow

### 1. Establish the Eval Shape

Collect these decisions through structured questions:

- **benchmark slug**: short kebab-case identifier used for the directory name (e.g. `dotnet-blog`, `astro-marketing`, `go-cli-todo`); also collect a human-readable display name
- programming task type: frontend app, backend API, CLI, library, refactor, bugfix, data pipeline, mobile view, full-stack slice
- target audience and difficulty: beginner, intermediate, senior, production-like
- stack preference: exact stack, stack family, or participant-selected stack
- benchmark state mode:
  - `greenfield`: `prompt.md` asks the model to create the repo/project from scratch, including bootstrap decisions
  - `brownfield`: `prompt.md` asks the model to modify an existing repo, scaffold, fixture, or seed state
- expected artifact: running app, test-passing repo, CLI command, API endpoint, library function, migration, documentation plus code
- timebox and model constraints: one-shot only, no follow-up questions, allowed network usage, allowed package installation
- what must be objectively measurable vs manually judged
- harnesses to support (subset of `opencode`, `claude-code`, `codex`) and a default opencode model id, since `run-model-attempts` requires one

The slug must be a valid directory name (lowercase letters, digits, hyphens) and must not already exist under `benchmarks/`. If it does, ask the user whether to pick a new slug or replace the existing benchmark.

Summarize the chosen shape — including the resolved benchmark path `benchmarks/<slug>/` — before writing files.

### 2. Define the State Contract

Every benchmark must define the initial state and final state.

For `greenfield` benchmarks:

- initial state is an empty isolated workspace
- `prompt.md` must explicitly ask the model to create the project/repo
- bootstrapping can be part of the evaluated task
- do not create `bootstrap.md` if discovering and choosing the bootstrap is something the model should be scored on
- if the webinar host wants all models to use the same starter command, create `bootstrap.md` and mark bootstrapping as provided rather than scored

For `brownfield` benchmarks:

- initial state is a frozen baseline repo, scaffold, fixture set, or git ref
- create `benchmarks/<slug>/baseline-manifest.md`
- if the baseline is a small set of files, place them under `benchmarks/<slug>/baseline/` so they can be listed in `runner.yaml -> model_visible_files`
- `prompt.md` must describe the requested change from baseline to final state
- the runner must give each model a fresh copy of the baseline
- `bootstrap.md` is optional and should only describe how to install, run, or verify the existing baseline

`benchmarks/<slug>/baseline-manifest.md` must include:

- state mode: `greenfield` or `brownfield`
- baseline source: empty workspace, local path under `benchmarks/<slug>/baseline/`, archive, git URL/ref, generated scaffold, or fixture directory
- files visible to implementation models (mirrored in `runner.yaml -> model_visible_files`)
- files forbidden to implementation models
- reset procedure for creating a fresh attempt workspace
- final artifact expectation: full repo copy, patch, both, or another format

### 3. Discover the Official Bootstrap When Needed

Use current documentation whenever possible. Prefer official sources over memory:

1. Official framework/tool documentation
2. Maintainer-owned starter repository or template
3. Package manager or language documentation
4. Agent knowledge as fallback only

Prefer official generator commands and templates over manually creating project structure:

```bash
npm create astro@latest
npm create vite@latest
npx create-next-app@latest
npm create svelte@latest
cargo new
go mod init
dotnet new
uv init
```

For unstable or recently changing toolchains, verify with web search or official docs before writing `bootstrap.md`. If network access is unavailable, write the bootstrap as a fallback and mark it `Source confidence: unverified fallback`.

Only write model-visible `benchmarks/<slug>/bootstrap.md` when one of these is true:

- the benchmark intentionally standardizes the starter for all models
- the task starts from a brownfield baseline and models need run/install instructions
- the bootstrap itself is not part of what the scorecard evaluates

If bootstrapping is part of the evaluated task, put the requirement in `prompt.md` instead and do not provide `bootstrap.md` to model attempts.

When created, `benchmarks/<slug>/bootstrap.md` must include:

- selected stack and versions, if known
- official bootstrap command
- source URL or source note
- prerequisites such as Node, Python, Go, Rust, Docker, package manager
- minimal post-bootstrap check, such as build, test, dev server, or CLI smoke test
- any allowed modifications to the generated starter

### 4. Write the Model Prompt

`benchmarks/<slug>/prompt.md` is the only task instruction the implementing model must need, together with `context.md`, model-visible baseline files, and optionally `bootstrap.md`.

It must include:

- exact task
- benchmark state mode: create a new repo/project or modify the provided existing repo
- stack and bootstrap requirement, if bootstrapping is part of the task
- bootstrap instruction reference only if `bootstrap.md` is intentionally model-visible
- required features
- deliverables
- constraints
- what commands should pass
- instruction that the model must not ask follow-up questions during the attempt

Do not include scoring criteria, point values, evaluator traps, or hidden test details in `prompt.md`.

### 5. Write the Context

`benchmarks/<slug>/context.md` contains information models are allowed to use while building:

- domain data
- sample inputs and outputs
- copy, URLs, schemas, examples, or fixtures
- business rules visible to the implementation model
- explicit non-goals

Do not include scorecard-only evaluation notes here unless they are fair requirements the model should see.

### 6. Write the Scorecard

`benchmarks/<slug>/scorecard.md` is for humans and evaluator agents only. It must not be passed to implementation models, and it must not be listed in `runner.yaml -> model_visible_files`.

Include:

- criteria table with `Criterion`, `Max`, `Method`, `Evidence required`
- method values: `auto`, `manual`, or `hybrid`
- clear scoring guidance for full, partial, and zero credit
- failure rules, especially build/test/dev-server hard stops
- known hallucination or shortcut traps
- whether bootstrap/project creation is scored
- whether the evaluator should compare against a baseline manifest or patch
- expected CSV output format:

```csv
Criterion,Score,Max,Notes,Evidence
```

Prefer 8-12 criteria for live demos. Keep criteria objective where possible, but preserve manual criteria for UX, design quality, product fit, or maintainability when needed.

### 7. Write the Runner Manifest

`benchmarks/<slug>/runner.yaml` is consumed by the `run-model-attempts` skill. It is **not** model-visible. Generate it from the decisions captured in step 1 and the file set produced by steps 2–6.

Use this exact schema:

```yaml
# Identity
name: <slug>                                  # must match the directory name
display_name: <human-readable name>

# State contract
state_mode: greenfield                        # greenfield | brownfield

# Image — built from benchmarks/<slug>/Dockerfile
image: ghcr.io/10xbench/<slug>:<tag>

# Default attempts per model
attempts_default: 3

# Prompt path, relative to this runner.yaml
prompt_file: prompt.md

# Files copied into the container workspace (relative to this runner.yaml).
# Order matters; later entries can overlay earlier ones.
# NEVER include scorecard.md.
model_visible_files:
  - prompt.md
  - context.md
  # - bootstrap.md      # only when bootstrap is intentionally model-visible
  # - baseline/         # brownfield baseline tree

# Harnesses allowed for this benchmark
allowed_harnesses:
  - opencode
  - claude-code
  - codex

# Per-harness model defaults. opencode REQUIRES one (no vendor default).
defaults:
  opencode:
    model: openrouter/<provider>/<model-id>
  # claude-code:
  #   model: claude-opus-4-7
  # codex:
  #   model: gpt-5-codex
```

Rules when generating it:

- `name` MUST equal the directory slug.
- `state_mode` matches the choice from step 1.
- `image` defaults to `ghcr.io/10xbench/<slug>:<today-yyyy-mm-dd>` unless the user supplied another tag. Tell the user they still need to build and tag this image from `benchmarks/<slug>/Dockerfile`.
- `prompt_file` is always `prompt.md` (relative to runner.yaml).
- `model_visible_files` MUST include `prompt.md` and `context.md`. Add `bootstrap.md` only if it was intentionally created as model-visible. Add the baseline path only for brownfield. NEVER add `scorecard.md`, `runner.yaml`, `baseline-manifest.md`, `eval-attempts/`, or `eval-results/`.
- `allowed_harnesses` reflects the user's choice; default to all three if unspecified.
- `defaults.opencode.model` must be set if `opencode` is in `allowed_harnesses`. Ask the user for the OpenRouter id if it was not captured earlier.

### 8. Final Review

Before finishing:

- verify that `prompt.md`, `context.md`, model-visible baseline files, and optional `bootstrap.md` are safe to pass to implementation models
- verify that `runner.yaml` parses, references files that exist, and does not list `scorecard.md` in `model_visible_files`
- verify that `baseline-manifest.md` (if present) correctly defines how fresh attempts are created and matches `runner.yaml -> model_visible_files`
- verify that `scorecard.md` is not referenced as an input for implementation attempts
- verify that bootstrap instructions are sourced, explicitly marked as fallback, or intentionally left for the model to discover
- summarize the benchmark package, list every created file under `benchmarks/<slug>/`, and remind the user to author `benchmarks/<slug>/Dockerfile` plus build/tag the image declared in `runner.yaml`
- mention that `run-model-attempts` can now be invoked with this benchmark slug

## Guardrails

- Write only inside `benchmarks/<slug>/`. Do not touch the legacy top-level `benchmark/`, `eval-attempts/`, or `eval-results/` directories.
- Do not leak scoring rubrics into the model prompt.
- Do not list `scorecard.md` in `runner.yaml -> model_visible_files`.
- Do not create model-visible `bootstrap.md` when project creation is supposed to be part of the evaluated task.
- Do not invent a framework bootstrap when an official generator exists and bootstrap instructions are provided.
- Do not make the benchmark depend on cloud deployment unless the user explicitly chooses it.
- Do not overfit the scorecard to one model's expected behavior.
- Do not create broad, subjective criteria without evidence requirements.
- Do not generate or edit `Dockerfile` automatically — flag it as a follow-up for the user.

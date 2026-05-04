---
name: design-eval-case
description: Design a stack-agnostic programming evaluation case for live AI coding evals. Use when the user wants to create a benchmark prompt, context, bootstrap instructions, and scorecard for any programming task, especially during webinars or workshops where participants choose the stack, task, constraints, and scoring criteria. Triggers on phrases like "design eval case", "zaprojektuj eval", "stworz benchmark case", "live eval design", "scorecard dla zadania", "programming eval", or requests to define an AI coding benchmark from scratch.
---

# design-eval-case

Facilitates the creation of a complete, stack-agnostic programming benchmark case. The output is a small benchmark package that can be handed to model runners and evaluators without extra interpretation.

## Outputs

Create or update these files:

```text
benchmark/prompt.md
benchmark/context.md
benchmark/bootstrap.md
benchmark/scorecard.md
```

If the benchmark directory does not exist, create it. Do not create unrelated documentation files.

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

- programming task type: frontend app, backend API, CLI, library, refactor, bugfix, data pipeline, mobile view, full-stack slice
- target audience and difficulty: beginner, intermediate, senior, production-like
- stack preference: exact stack, stack family, or participant-selected stack
- expected artifact: running app, test-passing repo, CLI command, API endpoint, library function, migration, documentation plus code
- timebox and model constraints: one-shot only, no follow-up questions, allowed network usage, allowed package installation
- what must be objectively measurable vs manually judged

Summarize the chosen shape before writing files.

### 2. Discover the Official Bootstrap

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

`benchmark/bootstrap.md` must include:

- selected stack and versions, if known
- official bootstrap command
- source URL or source note
- prerequisites such as Node, Python, Go, Rust, Docker, package manager
- minimal post-bootstrap check, such as build, test, dev server, or CLI smoke test
- any allowed modifications to the generated starter

### 3. Write the Model Prompt

`benchmark/prompt.md` is the only task instruction the implementing model must need, together with `context.md` and `bootstrap.md`.

It must include:

- exact task
- stack and bootstrap instruction reference
- required features
- deliverables
- constraints
- what commands should pass
- instruction that the model must not ask follow-up questions during the attempt

Do not include scoring criteria, point values, evaluator traps, or hidden test details in `prompt.md`.

### 4. Write the Context

`benchmark/context.md` contains information models are allowed to use while building:

- domain data
- sample inputs and outputs
- copy, URLs, schemas, examples, or fixtures
- business rules visible to the implementation model
- explicit non-goals

Do not include scorecard-only evaluation notes here unless they are fair requirements the model should see.

### 5. Write the Scorecard

`benchmark/scorecard.md` is for humans and evaluator agents only. It must not be passed to implementation models.

Include:

- criteria table with `Criterion`, `Max`, `Method`, `Evidence required`
- method values: `auto`, `manual`, or `hybrid`
- clear scoring guidance for full, partial, and zero credit
- failure rules, especially build/test/dev-server hard stops
- known hallucination or shortcut traps
- expected CSV output format:

```csv
Criterion,Score,Max,Notes,Evidence
```

Prefer 8-12 criteria for live demos. Keep criteria objective where possible, but preserve manual criteria for UX, design quality, product fit, or maintainability when needed.

### 6. Final Review

Before finishing:

- verify that `prompt.md`, `context.md`, and `bootstrap.md` are safe to pass to implementation models
- verify that `scorecard.md` is not referenced as an input for implementation attempts
- verify that bootstrap instructions are sourced or explicitly marked as fallback
- summarize the benchmark package and any assumptions

## Guardrails

- Do not leak scoring rubrics into the model prompt.
- Do not invent a framework bootstrap when an official generator exists.
- Do not make the benchmark depend on cloud deployment unless the user explicitly chooses it.
- Do not overfit the scorecard to one model's expected behavior.
- Do not create broad, subjective criteria without evidence requirements.

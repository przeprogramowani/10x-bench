---
name: 10x-eval-model
description: Set up and run benchmark evaluations for new LLM models in the 10xBench project. Use when the user wants to add a new model to the benchmark, prepare evaluation directories, update metadata, or launch evaluation runs. Triggers on phrases like "eval model", "add model to benchmark", "run benchmark for [model]", "evaluate [model-name]", "set up [model] for eval", or any request involving adding a new model to the Przeprogramowani.pl benchmark pipeline.
---

# 10x-eval-model

Orchestrates the full setup and execution pipeline for evaluating a new LLM model in the 10xBench benchmark. This includes updating metadata, verifying pricing, preparing attempt directories, and launching evaluation runs via the appropriate harness.

## Inputs

The user provides:
- **Model ID** — the short identifier used in directory names (e.g., `glm-51`, `gemini-31-pro`)
- **Display name** — human-readable name (e.g., `GLM-5.1`, `Gemini 3.1 Pro`)
- **Harness** — the coding agent environment used to run the model (e.g., `opencode`, `cursor`, `claude-code`, `claude-desktop`, `codex-desktop`)
- **Supersedes** (optional) — the model ID this new model replaces (e.g., `glm-5` is superseded by `glm-51`)

If the user provides a natural model name like "GLM-5.1 via opencode", derive the model ID yourself (e.g., `glm-51`) and confirm with the user before proceeding.

## Pipeline Steps

### Step 1: Check if model already exists in metadata

Read `eval-attempts/metadata.ts` and check whether the model ID is already present. If it exists but is commented out, offer to uncomment it instead of adding new entries. If it already exists and is active, inform the user and skip to Step 4.

### Step 2: Look up pricing

Search the web for current API pricing for the model (per 1M tokens, input and output, USD, no cache). Present findings to the user for confirmation before writing to metadata. Check multiple sources (official docs, OpenRouter, Artificial Analysis) to cross-reference.

### Step 3: Update metadata.ts

Add the model to all relevant sections in `eval-attempts/metadata.ts`:

1. **`ModelId` type union** — add `| "model-id"` entry
2. **`AGENT_NAMES`** — add `"model-id": "Display Name"` entry
3. **`AGENT_ENV`** — add `"model-id": AGENT_ENVIRONMENT.<harness>` entry (see harness mapping below)
4. **`MODEL_PRICING`** — add `"model-id": {input: X, output: Y}` with confirmed pricing
5. **`SUPERSEDED_MODELS`** (if applicable) — add `"old-model-id": "new-model-id"` entry

Harness to AGENT_ENVIRONMENT mapping:
- `opencode` -> `AGENT_ENVIRONMENT.OpenCode`
- `cursor` -> `AGENT_ENVIRONMENT.Cursor`
- `claude-code` -> `AGENT_ENVIRONMENT.ClaudeCodeHigh`
- `claude-desktop` -> `AGENT_ENVIRONMENT.ClaudeDesktop`
- `codex-desktop` -> `AGENT_ENVIRONMENT.CodexDesktopHigh`

### Step 4: Prepare attempt directories

Create 5 empty directories under `eval-attempts/`:
```
eval-attempts/{model-id}-attempt-1/
eval-attempts/{model-id}-attempt-2/
eval-attempts/{model-id}-attempt-3/
eval-attempts/{model-id}-attempt-4/
eval-attempts/{model-id}-attempt-5/
```

### Step 5: Ask permission to run

Before launching evaluation runs, present a summary to the user:
- Model ID and display name
- Harness being used
- Pricing (input/output per 1M tokens)
- Supersession info (if any)
- Number of attempts (5)

Ask: "Ready to launch 5 evaluation runs? This will use the prompt from `prompt.md` and run all 5 in parallel."

### Step 6: Launch evaluations

Read the prompt from `prompt.md` in the project root. Launch 5 parallel subagents, one per attempt directory, using the appropriate harness command. Each subagent runs in the background.

See the **Harnesses** section below for harness-specific launch commands.

### Step 7: Calculate token cost (OpenCode runs)

After OpenCode runs complete, compute each attempt's token usage and USD cost and
write it into the attempt's `eval-results.csv`.

OpenCode (>= 1.14) stores all session data in a SQLite database at
`~/.local/share/opencode/opencode.db`. Its `session` table records, per session,
the working directory the run executed in (`directory`), the token counts
(`tokens_input/output/reasoning/cache_read/cache_write`), and OpenCode's own
computed `cost`. Because every attempt runs with its attempt directory as cwd,
spend is attributed to a specific `{model-id}-attempt-{N}` by matching
`directory` against `eval-attempts/`.

> Older OpenCode versions stored loose JSON files under
> `storage/message/<sessionID>/msg_<id>.json` with `cost: 0`. The DB is a superset
> of that data, so the script reads only the DB.

Run the cost script:
```bash
# Report all OpenCode attempts (read-only)
npm run calculate-cost

# Report just the model you launched
npm run calculate-cost {model-id}

# Upsert the "API cost" row into each attempt's eval-results.csv
npm run calculate-cost -- --write {model-id}

# Machine-readable JSON instead of a table
npm run calculate-cost -- --json {model-id}
```

`--write` adds (or updates) an `API cost` row in each `eval-results/{model-id}-attempt-{N}/eval-results.csv`,
placed right after `Test run`, e.g.:
```csv
API cost,$0.2897,N/A,$0.2897 (in 67673 / out 17773 / cache 931423 / 1 session)
```
After writing, run `npm run process-results` to refresh the dashboard. The
`API cost` row is excluded from scoring (alongside `Task completion time`,
`Test run`, and `Penalty`) in `process-results.ts`.

Notes:
- **Cost uses OpenCode's own `cost` column** — it already accounts for the prompt-cache discount, which the flat input/output pricing in `metadata.ts` cannot. Free-tier runs (e.g. `*-free` model slugs) correctly show `$0.0000`.
- If an attempt dir has **multiple sessions** (re-runs / manual re-opens), all sessions in that dir are summed; the row's notes show the session count.
- This step only applies to OpenCode-run models — other harnesses (Cursor, Claude/Codex Desktop) don't write to the OpenCode DB.
- Override the DB path with `OPENCODE_DB`, or the data dir with `OPENCODE_DATA_DIR`, if OpenCode is installed in a non-default location.

---

## Harnesses

Each harness has its own way of launching a model run. The harness determines the AGENT_ENVIRONMENT value and the CLI command used to execute evaluation attempts.

### OpenCode

**Environment:** `AGENT_ENVIRONMENT.OpenCode`

**Prerequisites check:**
Before launching runs, verify connectivity and credits by running a test command:
```bash
opencode run -m openrouter/<provider>/<model> -q "Say hello in one word"
```

Common OpenRouter provider prefixes by vendor:
- Z.AI (GLM models): `openrouter/z-ai/<model>`
- Moonshot (Kimi models): `openrouter/moonshot/<model>`
- MiniMax: `openrouter/minimax/<model>`
- Mistral (Devstral): `openrouter/mistral/<model>`
- Alibaba (Qwen): `openrouter/alibaba/<model>`
- xAI (Grok): `openrouter/xai/<model>`

If unsure about the provider prefix, search the web for the model on OpenRouter to find the correct format.

**Launch command per attempt:**
Each subagent should run:
```bash
cd /path/to/eval-attempts/{model-id}-attempt-{N} && opencode run -m openrouter/<provider>/<model> --dangerously-skip-permissions "<prompt>"
```

The prompt must be passed as a single string argument, copied verbatim from `prompt.md`.

Use a 600000ms (10 min) timeout for each run. All 5 attempts launch as background subagents in a single turn for maximum parallelism.

**Token cost:** After the runs finish, record token spend and USD cost with `npm run calculate-cost -- --write {model-id}` (see Step 7). This reads OpenCode's SQLite DB (`opencode.db`) and writes an `API cost` row into each attempt's `eval-results.csv`.

**Failure handling:**
If runs fail due to credit limits ("requires more credits"), inform the user with a link to https://openrouter.ai/settings/credits and offer to re-run after they top up. Clean attempt directories before re-running (`rm -rf` contents, recreate empty dirs).

### Cursor

**Environment:** `AGENT_ENVIRONMENT.Cursor`

> Not yet automated. Cursor evaluations are run manually through the Cursor IDE.
> Ask the user to run the prompt manually in Cursor for each attempt directory.

### Claude Code

**Environment:** `AGENT_ENVIRONMENT.ClaudeCodeHigh`

> Not yet automated. To be filled in with Claude Code CLI integration.

### Claude Desktop

**Environment:** `AGENT_ENVIRONMENT.ClaudeDesktop`

> Not yet automated. Claude Desktop evaluations are run manually through the desktop app.
> Ask the user to run the prompt manually in Claude Desktop for each attempt directory.

### Codex Desktop

**Environment:** `AGENT_ENVIRONMENT.CodexDesktopHigh`

> Not yet automated. Codex Desktop evaluations are run manually.
> Ask the user to run the prompt manually in Codex Desktop for each attempt directory.

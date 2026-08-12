# 10x-bench-kit — kontrakt adaptera harnessa (`/bench-run`)

> Analiza subagenta (Opus), 12.08.2026. Podproblem konceptu
> `thoughts/shared/plans/2026-08-12-10x-bench-kit-concept.md`.
> Oparta na: `.claude/skills/10x-eval-model/SKILL.md`, `scripts/calculate-cost.ts`,
> `eval-attempts/metadata.ts`, realnym runie `claude -p --output-format json`
> (Claude Code 2.1.228) oraz dokumentacji Codex/OpenCode.

## 0. Zasada naczelna: co należy do runnera, a co do adaptera

| Odpowiedzialność | Właściciel | Uzasadnienie |
|---|---|---|
| **Pomiar czasu (wall clock)** | **runner** | jedyny sposób, by czas OpenCode / Claude Code / trybu ręcznego był tą samą wielkością; czas z harnessa idzie osobno jako `duration_reported_s` (audyt, nie leaderboard) |
| Izolacja katalogu / kontener | runner | adapter nie decyduje o bezpieczeństwie |
| Timeout i zabicie drzewa procesów | runner | harnessy różnie reagują na SIGTERM |
| Budowa komendy, parsowanie usage, klasyfikacja błędu | adapter | cała wiedza harness-specyficzna |
| Zapis `run-meta.json` | runner (adapter wypełnia fragment) | jeden schemat dla wszystkich |

Adapter jest **czysty i bezstanowy**: dostaje kontekst, zwraca `LaunchSpec` (deklaratywnie:
argv + env + cwd), po zakończeniu dostaje surowy wynik i zwraca `UsageReport`. Adapter nigdy
sam nie odpala procesu — runner może ten sam `LaunchSpec` wykonać lokalnie, w kontenerze albo
wypisać (dry-run / audyt reprodukowalności).

## 1. Interfejs adaptera (`bench.config.ts`)

```ts
export type HarnessId = "opencode" | "claude-code" | "codex-cli" | "manual" | (string & {});

/** Skąd wzięła się liczba w cost.usd. Nigdy nie zgadujemy — zawsze deklarujemy. */
export type CostSource =
  | "harness-inline"   // harness zwrócił USD w stdout (Claude Code: total_cost_usd)
  | "harness-db"       // odczyt post-hoc z lokalnej bazy harnessa (OpenCode: opencode.db)
  | "api-report"       // z API rozliczeniowego providera (Anthropic Usage&Cost, OpenAI Costs)
  | "estimated"        // policzone z tokenów × pricing z bench.config.ts
  | "manual"
  | "unavailable";     // nie da się ustalić (np. run na subskrypcji GUI) → cost.usd = null

export type BillingMode = "api" | "subscription" | "free-tier" | "unknown";

export type ExitStatus =
  | "ok" | "timeout" | "budget" | "harness-error" | "auth-error"
  | "quota-error" | "empty-output" | "manual" | "aborted";

export type Capability =
  | "headless" | "parallel" | "tokens" | "cache-tokens" | "reasoning-tokens"
  | "cost-usd" | "session-id" | "transcript"
  | "deterministic-run-id"   // można narzucić własne ID sesji (Claude Code: --session-id)
  | "budget-guard";          // harness sam przerwie run po przekroczeniu $ / turów

/* ---------- wejście ---------- */

export interface AttemptRef {
  runId: string;          // ULID/UUID — klucz run-meta.json; jeśli harness umie, staje się session id
  benchId: string;
  era: string;            // hash zadań + scorecardu + sędziego
  taskId: string;
  modelId: string;
  attempt: number;
  workspaceDir: string;   // ABS — cwd agenta, jedyny katalog, który wolno mu widzieć
  metaDir: string;        // ABS — poza workspace! stdout/stderr/run-meta.json
}

export interface ModelBinding {
  modelId: string;
  displayName: string;
  harnessModelRef: string;      // "openrouter/z-ai/glm-4.6" | "claude-opus-4-8" | "gpt-5.4"
  effort?: "low" | "medium" | "high" | "xhigh" | "max";
  billingMode: BillingMode;
  pricing?: { input: number; output: number; cacheRead?: number; cacheWrite?: number };
  extraArgs?: string[];
}

export interface TaskSpec {
  id: string;
  promptPath: string;
  promptText: string;
  rulesPath?: string;           // reguły do system promptu, identyczne dla wszystkich modeli
  baselineCommit?: string;
  snapshotSha: string;          // hash treści zadania — część "ery"
}

export interface RunPolicy {
  timeoutMs: number;
  budgetUsd?: number;
  concurrency: number;
  isolation: "empty-dir" | "worktree" | "fresh-clone" | "container";
  networkAllowed: boolean;
}

/* ---------- wyjście ---------- */

export interface LaunchSpec {
  command: string;
  args: string[];                        // BEZ shella — żadnego stringa do interpretacji
  cwd: string;
  env: Record<string, string>;           // runner robi env -i i wstrzykuje tylko to
  stdin?: string;
  stdoutPath: string;                    // zawsze na dysk
  stderrPath: string;
  killSignal: "SIGTERM" | "SIGINT";
  killGraceMs: number;
}

export interface RawOutcome {
  exitCode: number | null;
  signal: string | null;
  timedOut: boolean;
  startedAt: string;                     // ISO-8601 UTC
  finishedAt: string;
  wallClockMs: number;                   // monotonic
  stdoutPath: string;
  stderrPath: string;
}

export interface TokenCounts {           // null = nie wiadomo. 0 = zmierzone zero. NIGDY null→0.
  input: number | null;
  output: number | null;
  cacheRead: number | null;
  cacheWrite: number | null;
  reasoning: number | null;
}

export interface UsageReport {
  tokens: TokenCounts;
  costUsd: number | null;
  costSource: CostSource;
  durationReportedS: number | null;
  sessions: Array<{ id: string; transcriptPath?: string }>;
  modelReported: string | null;          // faktyczny model wg harnessa (wykrywa fallback!)
  warnings: string[];
}

export interface PreflightResult {
  ok: boolean;
  harnessVersion: string | null;
  problems: string[];
  probeCostUsd?: number;
}

/* ---------- kontrakt ---------- */

export interface HarnessAdapter {
  readonly id: HarnessId;
  readonly displayName: string;
  /** Zmiana = zmiana ery, jeśli zmienia sposób uruchamiania. */
  readonly adapterVersion: string;
  readonly capabilities: ReadonlySet<Capability>;
  /** true = wymaga człowieka (Cursor, Desktopy) → protokół ręczny. */
  readonly interactive: boolean;

  detectVersion(): Promise<{ version: string | null; configHash: string | null }>;
  preflight(model: ModelBinding, policy: RunPolicy): Promise<PreflightResult>;
  /** Czysta funkcja: buduje komendę; bez efektów ubocznych poza metaDir. */
  buildLaunch(ctx: AttemptRef, model: ModelBinding, task: TaskSpec, policy: RunPolicy): Promise<LaunchSpec>;
  classifyOutcome(ctx: AttemptRef, raw: RawOutcome): Promise<{
    status: ExitStatus;
    harnessSubtype: string | null;   // np. "success" | "error_max_budget_usd" | "turn.failed"
    errorMessage: string | null;
    retryable: boolean;              // TYLKO przyczyny infra: auth/quota/network
  }>;
  /** Tokeny i koszt: stdout ALBO baza harnessa post-hoc. Idempotentne. */
  collectUsage(ctx: AttemptRef, raw: RawOutcome, model: ModelBinding): Promise<UsageReport>;
  cleanup(ctx: AttemptRef, raw: RawOutcome): Promise<void>;
  manualProtocol?(ctx: AttemptRef, model: ModelBinding, task: TaskSpec): {
    instructions: string;
    requiredFields: string[];
  };
}
```

Dwie rzeczy wymuszane świadomie:

- **`collectUsage` osobno od `classifyOutcome`** — OpenCode daje koszt z SQLite PO procesie,
  Claude Code z ostatniej linii stdout.
- **`modelReported`** — Claude Code z `--fallback-model`, OpenRouter z routingiem i Codex
  z downgrade'em potrafią po cichu uruchomić inny model. Runner **oznacza run jako `voided`,
  jeśli `modelReported ≠ harnessModelRef`**.

## 2. OpenCode — co uogólnić

Stan obecny: `opencode run -m … --dangerously-skip-permissions "<prompt>"`, koszt z
`~/.local/share/opencode/opencode.db` (tabela `session`: `directory`, `cost`, `tokens_*`),
atrybucja po katalogu, sesje w katalogu sumowane.

**Dobre, warte uogólnienia:**
1. **Koszt z harnessa, nie z cennika** — `cost` OpenCode uwzględnia zniżkę cache, czego płaskie
   `MODEL_PRICING` nie potrafi. Hierarchia: `harness-inline`/`harness-db` > `api-report` >
   `estimated` (płaski cennik przy cache-heavy runach zawyża koszt kilkukrotnie).
2. Atrybucja po cwd jako uniwersalna sztuczka (fallback).
3. `--write` jako idempotentny upsert wiersza specjalnego CSV.

**Do naprawy:**

| Problem dziś | Uogólnienie |
|---|---|
| Atrybucja wyłącznie po katalogu — retry w tym samym katalogu sumuje starą i nową sesję | atrybucja po **(directory, session_id, time_created ≥ started_at)**; session id z `opencode run --format json`, zapisany w `run-meta.json`; katalog tylko fallback |
| Próby są rodzeństwem w `eval-attempts/` → `ls ..` pokazuje cudze próby | workspace per próba w osobnym drzewie (§7) |
| Sztywny path do db + sztywny SQL (schemat zmieniał się między wersjami) | `collectUsage` sprawdza istnienie tabel/kolumn; przy niezgodności `tokens: all-null` + `costSource: "estimated"` + warning |
| Flagi zaszyte w prompcie skilla (`--dangerously-skip-permissions`; dokumentacja wymienia dziś `--auto`) | `preflight` sonduje `--help` i pinuje wykrytą flagę w `run-meta.harness.invocation` |
| Brak wersji harnessa w wynikach | `detectVersion()` obowiązkowo |

Rekomendowana komenda:

```bash
opencode run \
  --dir "$WORKSPACE" -m "openrouter/z-ai/glm-4.6" \
  --format json --print-logs --auto \
  "$(cat "$TASK_DIR/task.md")" \
  > "$META_DIR/events.jsonl" 2> "$META_DIR/stderr.log"
```

## 3. Claude Code headless — zweryfikowane na żywo (2.1.228)

```bash
RUN_ID="$(uuidgen)"

timeout --signal=TERM --kill-after=30s 1800 \
env -i \
  HOME="$SANDBOX_HOME" PATH="$PATH" \
  ANTHROPIC_API_KEY="$ANTHROPIC_API_KEY" \
  CLAUDE_CODE_PRINT_BG_WAIT_CEILING_MS=120000 \
claude -p "$(cat "$TASK_DIR/task.md")" \
  --bare \
  --model claude-opus-4-8 \
  --effort high \
  --session-id "$RUN_ID" \
  --output-format json \
  --permission-mode bypassPermissions \
  --append-system-prompt-file "$TASK_DIR/rules.md" \
  --max-budget-usd 25 \
  --no-chrome --disable-slash-commands \
  > "$META_DIR/harness-result.json" 2> "$META_DIR/stderr.log"
# cwd = $WORKSPACE
```

- **`--bare` — najważniejsza flaga adaptera**: wyłącza auto-discovery hooków, skilli, pluginów,
  MCP, auto-memory i `CLAUDE.md` — bez niej benchmark mierzy zawartość `~/.claude` operatora,
  nie model. Efekt uboczny: `--bare` nie czyta OAuth/keychaina → wymusza `ANTHROPIC_API_KEY`
  → `billing_mode: "api"`, koszt ma sens jako liczba.
- **`--session-id <uuid>`** — narzucamy `runId` jako ID sesji: transcript, run-meta i leaderboard
  mają wspólny klucz bez parsowania.
- **Permission mode**: `bypassPermissions` tylko w kontenerze bez sieci. Poza kontenerem:
  `dontAsk` albo `acceptEdits` + jawne `--allowedTools "Bash,Read,Edit,Write,Glob,Grep"`.
  **Nie używać `acceptEdits` bez `--allowedTools`** przy zadaniach z `npm install` — auto-zatwierdza
  tylko edycje plików, agent utknie na pierwszym `npm i` → fałszywy timeout.
- **`--max-budget-usd`** — drugi bezpiecznik; przekroczenie → `subtype: "error_max_budget_usd"`
  → `ExitStatus: "budget"` (inne niż timeout, inaczej scorowane).
- **`CLAUDE_CODE_PRINT_BG_WAIT_CEILING_MS`** — background subagenty potrafią trzymać dev serwery
  do 10 min; przy równoległych próbach psuje pomiar czasu.
- Kill: SIGTERM → Claude Code przerywa turę, ubija procesy, wychodzi z **kodem 143** —
  adapter mapuje `143` → `timeout`, nie `harness-error`.

### Mapowanie JSON → run-meta (pola zweryfikowane realnym runem)

```jsonc
{ "type":"result", "subtype":"success", "is_error":false,
  "session_id":"…", "duration_ms":2502, "num_turns":1,
  "total_cost_usd":0.012412,
  "usage":{ "input_tokens":2, "output_tokens":4,
            "cache_creation_input_tokens":1960, "cache_read_input_tokens":0,
            "output_tokens_details":{"thinking_tokens":0} },
  "modelUsage":{ "claude-sonnet-5":{ "inputTokens":2,"outputTokens":4,
                   "cacheCreationInputTokens":1960,"costUSD":0.011826 },
                 "claude-haiku-4-5-20251001":{ "costUSD":0.000586 } },
  "permission_denials":[], "result":"OK" }
```

| Pole run-meta | Źródło | Uwaga |
|---|---|---|
| `tokens.*` | **suma po `modelUsage[*]`**, nie `usage` | `usage` pomija subagentów; `modelUsage` i `total_cost_usd` je wliczają |
| `tokens.reasoning` | `usage.output_tokens_details.thinking_tokens` | jedyne pole z `usage` |
| `cost.usd` / source | `total_cost_usd` / `"harness-inline"` | client-side estimate z cennika w binarce — do budżetowania tak, do fakturowania nie; twarde liczby: Usage & Cost API (`api-report`) |
| `sessions[0].id` | `session_id` | równe naszemu `--session-id` |
| `model.reported` | klucze `modelUsage` | wykrywa `--fallback-model` i modele pomocnicze |
| `warnings` | `permission_denials[]` niepuste | run ograniczony permissionami → oznacz jako nieporównywalny |

Pułapka: przy `subtype: "error_during_execution"` pola kosztowe mogą być wyzerowane —
wtedy `cost.usd = null` + `source = "unavailable"`, **nie** `0` (zero udaje darmowy run
i psuje ranking cena/jakość).

## 4. Codex CLI

```bash
timeout --signal=TERM --kill-after=30s 1800 \
codex exec "$(cat "$TASK_DIR/task.md")" \
  --cd "$WORKSPACE" \
  --model gpt-5.4 \
  -c model_reasoning_effort=high \
  --sandbox workspace-write \
  --skip-git-repo-check \
  --ignore-user-config --ignore-rules \
  --json \
  --output-last-message "$META_DIR/last-message.txt" \
  > "$META_DIR/events.jsonl" 2> "$META_DIR/stderr.log"
```

- `--ignore-user-config --ignore-rules` = odpowiednik `--bare`.
- `--sandbox workspace-write` rekomendowany poza kontenerem (`danger-full-access` tylko
  w kontenerze; `--full-auto` deprecated).
- `--skip-git-repo-check` konieczne dla zadań syntetycznych w pustym katalogu.

**Tokeny** ze zdarzeń `turn.completed` w JSONL: `input_tokens`→input,
`cached_input_tokens`→cache_read, `output_tokens`→output, `reasoning_output_tokens`→reasoning;
**`cache_write = null`** (Codex nie rozdziela). Suma po turach z zabezpieczeniem przed wariantem
kumulatywnym (warning `codex-usage-ambiguous`). Fallback post-hoc:
`~/.codex/sessions/YYYY/MM/DD/rollout-*.jsonl` (`payload.type == "token_count"`).

**Koszt: Codex nie raportuje USD w żadnej formie.** Konsekwencje:
- API key → `source = "estimated"` z tokenów × pricing, **z osobną stawką za `cached_input_tokens`**
  (~10% ceny input) — stąd `ModelBinding.pricing.cacheRead/cacheWrite`, których `metadata.ts` nie ma.
- Login ChatGPT (subskrypcja) → `billing_mode: "subscription"`, `cost.usd = null`,
  `source = "unavailable"`, obok `cost.usd_estimated` orientacyjnie.
- Twarde liczby: OpenAI Costs API per klucz (`api-report`), dopinane batchowo dzień po runach.

**Status:** exit 0 = sukces; zdarzenia `turn.failed`/`error` w JSONL → klasyfikacja
`auth-error`/`quota-error` (retryable) vs `harness-error`.

## 5. Tryb ręczny (Cursor, Desktopy)

Zasada: **człowiek nie edytuje JSON-a** (ręczna edycja = literówki w datach i jednostkach —
dlatego dzisiejszy CLAUDE.md musi pilnować formatu `Xmin Ys`). Runner generuje szkielet
i domyka interaktywnym promptem z walidacją.

1. **`bench run --prepare`**: tworzy workspace, kopiuje `PROMPT.txt` do metaDir (nie do
   workspace!), wypisuje instrukcję (otwórz TYLKO katalog X, ustaw model Y, wklej prompt bez
   zmian i follow-upów, zapisz czas startu), zapisuje run-meta w stanie `pending_manual`.
2. **`bench run --finish <runId>`**: maks. 6 pytań; obowiązkowe trzy: `started_at`
   (CLI akceptuje `14:05`), `duration_s` (format `Xmin Ys`, parsowany od razu), `exit_status`
   (lista). Opcjonalne: tokeny (tylko Cursor je pokazuje), koszt (puste → `unavailable` +
   `billing_mode: subscription`), link do sesji, notes.
3. **Zamrożenie**: `workspace_hash` (SHA-256 drzewa plików), `recorded_by: "manual"`,
   `time_trusted: false`. Zmiana plików po fakcie wykrywana przy scoringu.

Reguła leaderboardu: **runy ręczne nigdy nie wchodzą do rankingu czasu ani kosztu** —
tylko jakości.

## 6. Schemat `run-meta.json`

Reguła nadrzędna: **`null` = nie wiadomo, `0` = zmierzone zero. Żadnego `?? 0`.**
Agregacja pomija `null`, nie sumuje jako zera — inaczej Claude Desktop wygra ranking kosztowy.

Kluczowe pola (pełny JSON Schema w raporcie agenta; skrót struktury):

```jsonc
{
  "schema_version": 1,
  "run_id": "ULID/UUID; dla Claude Code = --session-id",
  "bench_id": "...", "era": "hash(tasks+criteria+judge+adapterVersion)",
  "status": "pending_manual|completed|voided",
  "task":   { "id", "snapshot_sha", "mode": "synthetic|repo-based", "baseline_commit" },
  "model":  { "id", "display_name", "harness_model_ref",
              "reported": ["modele faktycznie użyte; rozjazd => voided"],
              "effort", "billing_mode" },
  "harness":{ "id", "version", "adapter_version", "config_hash",
              "invocation": ["pełne argv po redakcji sekretów"] },
  "attempt": 1,
  "isolation": { "mode": "empty-dir|worktree|fresh-clone|container",
                 "workspace_path", "workspace_hash", "container_image",
                 "network": "allowed|blocked|unknown" },
  "timing": { "started_at", "finished_at",
              "duration_s": "wall clock RUNNERA — jedyne pole do rankingu czasu",
              "duration_reported_s", "timeout_s", "concurrency",
              "time_trusted": "false gdy concurrency>1 lub tryb ręczny" },
  "tokens": { "input", "output", "cache_read", "cache_write", "reasoning",
              "source": "harness-inline|harness-db|manual|unavailable" },
  "cost":   { "usd", "usd_estimated": "zawsze obok usd, nigdy zamiast",
              "source", "currency": "USD", "pricing_ref" },
  "sessions": [{ "id", "transcript_path", "url" }],
  "exit":   { "status", "code", "signal", "timed_out", "harness_subtype",
              "error_message", "num_turns" },
  "artifacts": { "stdout", "stderr", "harness_result", "events_jsonl", "workspace_diff" },
  "warnings": [],
  "voided": { "reason": "infra|wrong-model|operator-error|contaminated|duplicate",
              "detail", "replaced_by" },
  "recorded_by": "runner|manual", "notes": null
}
```

Pokrycie per harness:

| Pole | OpenCode | Claude Code | Codex CLI | Ręczny |
|---|---|---|---|---|
| tokens in/out | ✅ db | ✅ modelUsage | ✅ turn.completed | ⚠️ tylko Cursor |
| cache_read | ✅ | ✅ | ✅ | ❌ |
| cache_write | ✅ | ✅ | ❌ null | ❌ |
| reasoning | ✅ | ✅ | ✅ | ❌ |
| cost.usd | ✅ harness-db | ✅ harness-inline | ❌ → estimated/api-report | ❌ unavailable |
| sessions[].id | ✅ | ✅ (narzucony) | ✅ | ⚠️ URL |
| exit.code | ✅ | ✅ (143=timeout) | ✅ | ❌ |
| duration_s | ✅ runner | ✅ runner | ✅ runner | ⚠️ time_trusted:false |

Wiersze specjalne CSV generujemy **z** `run-meta.json`, nigdy odwrotnie — run-meta jest
źródłem prawdy, CSV projekcją.

## 7. Izolacja

| Tryb zadania | Rekomendacja |
|---|---|
| Syntetyczne, pusty katalog | świeży pusty katalog per próba; **kontener obowiązkowo przy bypassie permissionów** |
| Repo-based na baseline | **świeży klon z lokalnego bare mirrora** (`git clone --local --no-hardlinks --branch <baseline>` → `checkout --detach <sha>` → `checkout -b run/<runId>`) |
| Repo-based, gdy dysk/czas boli | worktree z zastrzeżeniem (niżej) |
| Cokolwiek z siecią + równoległością | kontener per próba |

**Dlaczego worktree jest ryzykowny w benchmarku**: wszystkie worktree dzielą jeden `.git` —
agent zrobi `git worktree list` i zobaczy **ścieżki wszystkich prób**, a `git log --all` /
`git branch -a` pokaże cudze branche. Jeśli mimo to worktree: własny bare mirror per próba
albo `concurrency: 1` + czyszczenie branchy. Domyślnie: **fresh-clone**.

**Trzy warstwy przeciw czytaniu cudzych prób:**

1. **Struktura katalogów** (najtańsza, największy zysk). Dzisiejszy układ
   `eval-attempts/<model>-attempt-{1..5}/` = próby są rodzeństwem; jedno `ls ..` pokazuje
   konkurencję. Kit odwraca:
   ```
   /var/bench/runs/<era>/<task>/<model>/<attempt>/
   ├── workspace/          ← cwd agenta; nic poza zadaniem
   └── meta/               ← stdout, events, run-meta.json (poza zasięgiem)
   /var/bench/results/     ← eval-results, scorecard, judge — INNE drzewo
   ```
2. **Mechanizmy harnessa** (twarde-ish): Claude Code — brak `--add-dir` + deny rules przez
   `--settings '{"permissions":{"deny":["Read(/var/bench/**)","Bash(git worktree*)"]}}'`;
   Codex — `--sandbox workspace-write` (**ogranicza zapis, nie odczyt!**); OpenCode — `--dir`.
   Sandboxy harnessów chronią przed przypadkową szkodą, nie przed ciekawskim agentem.
3. **Kontener** (jedyna twarda granica): `docker run --rm --network=none -v $WORKSPACE:/work:rw`.
   Przy `--network=none` zadania z `npm install` wymagają prewarmowanego `node_modules`
   w obrazie, przypiętego w `baseline.lock`.

**Reguły zadania (rules.md):** to prompt, nie kontrola dostępu. (1) Identyczne dla wszystkich
modeli i wliczone w `task.snapshot_sha` — zmiana treści = zmiana ery. (2) Wstrzykiwać przez
`--append-system-prompt-file`, nie jako `CLAUDE.md` w workspace (agent może go nadpisać albo
potraktować jako część kodu → zanieczyszcza artefakt oceniany przez sędziego). (3) Zawsze
`--bare` / `--ignore-user-config --ignore-rules`.

## 8. Równoległość i timeouty

`N = min(floor(rdzenie/2), floor(RAM_GB/4), limit providera, 8)`. Domyślnie **3**;
kontenery na serwerze do 8; **`1` gdy czas jest publikowaną metryką**; repo-based z buildem: 2.

Obowiązkowo: **jitter startu 5–15 s** (pięć równoczesnych `npm install` → burst rate-limit →
sztuczne quota-error) oraz **`time_trusted: false` przy `concurrency > 1`** (rywalizacja
o CPU/dysk wydłuża runy o 30–50%; ranking czasu filtruje po `time_trusted === true`;
czas publikowany → osobna sekwencyjna seria pomiarowa).

Timeouty dwuwarstwowe: `T_hard` (wall clock runnera) = max(10 min, 3× mediana udanych runów);
repo-based 30–45 min. `T_soft` = `--max-budget-usd` / limit turów → status `budget`.
Kill: SIGTERM → grace 30 s → SIGKILL **na grupę procesów** (dev serwery i watchery zostawione
przez agenta blokują port kolejnej próby).

**Polityka przerwanych runów — decyduje przyczyna, nie wynik** (ochrona przed nieświadomym
cherry-pickingiem):

| Przyczyna | Status | Decyzja | Scoring |
|---|---|---|---|
| Wall clock przekroczony, agent pracował | `timeout` | DNF, bez retry | auto = 0, sędzia nie odpalany, próba **liczy się** do średniej |
| Budżet USD/turów | `budget` | DNF, bez retry | jw. + osobna etykieta (inna informacja niż „za wolny") |
| auth/quota/sieć/crash | `auth-error`/`quota-error`/`harness-error` | **voided + retry** z nowym run_id | stara próba w archiwum (`voided.reason: infra`, `replaced_by`), nie wchodzi do średniej |
| `modelReported ≠ ref` (cichy fallback) | dowolny | voided `wrong-model` + retry | mierzył nie ten model |
| Błąd operatora (tryb ręczny) | `manual` | voided `operator-error` + retry | |

Limity: **maks. 2 retry na próbę** (trzecia porażka infra → stop, problem środowiska);
retry zawsze świeży workspace + nowy run_id. **Flaga „budget-limited"**: >20% ważnych prób
modelu to timeout/budget → osobne oznaczenie na leaderboardzie (średnia z samych ukończonych
zawyża). **Próg publikacji**: <60% ważnych prób → model poza rankingiem.

Uzasadnienie timeout=DNF: benchmark mierzy „czy model rozwiązuje nasze zadanie w naszym
budżecie czasu" — retry z dłuższym limitem mierzyłby inne pytanie.

## Podsumowanie kluczowych decyzji

1. Adapter **deklaratywny** (LaunchSpec, nie proces) — jeden runner: shell, kontener, dry-run.
2. **Czas mierzy runner**; harness raportuje pomocniczo.
3. **`null ≠ 0`**; `cost.source` obowiązkowe; `billing_mode` decyduje, czy koszt jest liczbą.
4. Claude Code: `--bare` + `--session-id` + `--output-format json`; tokeny z `modelUsage`
   (nie `usage` — pomija subagentów); koszt = client-side estimate.
5. Codex: `--json` + `--ignore-user-config --ignore-rules`; koszt zawsze `estimated`/`api-report`.
6. OpenCode: koszt z `opencode.db` (cache-aware), atrybucja z katalogu → **session id**.
7. Izolacja: **fresh-clone** domyślnie (worktree ujawnia cudze próby); kontener przy bypassie;
   próby nie są rodzeństwem.
8. `concurrency: 3` domyślnie, `1` przy publikacji czasu; timeout = DNF bez retry; retry tylko
   infra, zawsze nowy run_id.

Źródła: code.claude.com/docs/en/headless, code.claude.com/docs/en/agent-sdk/cost-tracking,
learn.chatgpt.com/docs/non-interactive-mode, learn.chatgpt.com/docs/developer-commands,
opencode.ai/docs/cli, openai/codex#19022.

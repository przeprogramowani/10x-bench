# 10x-bench-kit — pipeline wyników + auto-leaderboard

> Analiza subagenta (Opus), 12.08.2026. Podproblem konceptu
> `thoughts/shared/plans/2026-08-12-10x-bench-kit-concept.md`.
> Oparta na: `scripts/process-results.ts`, `website/` (ResultsTable, ResultsDashboard,
> ModelAveragesCard, comparisonUtils), `eval-attempts/metadata.ts`, realnych danych
> z `eval-results/` (132 katalogi).

## 1. Ocena obecnego pipeline'u

### Reużywalne 1:1 (do `templates/` bez zmian koncepcyjnych)

| Element | Gdzie | Dlaczego zostaje |
|---|---|---|
| CSV `Criterion,Score,Max,Notes` jako format wymiany | `eval-results/*/eval-result.csv` | diffowalny w gicie, czytelny, edytowalny po human spot-checku — idealny nośnik werdyktu sędziego |
| Wzorzec wierszy specjalnych | `process-results.ts:182` | sprawdzony — ale patrz „uogólnić" |
| Silnik agregacji (parse → filtr → Σ → % → grupowanie → średnie) | `process-results.ts:178-278` | ~90% przenaszalne |
| Slim public payload z `schemaVersion` + top-N | `process-results.ts:55-71, 296-315` | oddzielenie ciężkiego results.json od stabilnego kontraktu dla konsumentów (10x-cli!) |
| Astro static + React islands + JSON na build | `astro.config.mjs` | zero runtime'u, zero bazy |
| Sticky header + frozen column, progress bary, „Only latest", porównanie 2 modeli | `ResultsTable.tsx`, `ResultsDashboard.tsx` | rozwiązane problemy UX tabeli N×M |
| Atrybucja kosztu po `directory` w SQLite harnessa | `calculate-cost.ts:74-119` | najcenniejszy pojedynczy kawałek kodu w repo |
| Konwencja `{model-id}-attempt-{N}` + `getModelBaseId` | `metadata.ts:172-175` | zostaje, rozszerzona o wymiar zadania |

### Do uogólnienia

**a) Multi-task — zmiana strukturalna.** Dziś ścieżka wyników nie ma wymiaru zadania,
a agregacja sumuje surowe punkty → przy wielu zadaniach **liczba kryteriów w zadaniu staje
się jego wagą** (zadanie z 20 kryteriami dominuje nad zadaniem z 5). Naprawa: agregacja
dwustopniowa — normalizacja do ułamka wewnątrz zadania, potem ważona średnia po zadaniach
z wagami z `era.json`.

**b) Ery — prototyp już cicho zmienił erę.** Twarde dane ze 132 katalogów wyników:
60 prób ocenianych rubryką **bez** wiersza `Penalty`, 61 **z** nim, 10 z dodatkowym
`API cost` — i wszystkie na jednej liście rankingowej sortowanej po `percentage`.
Dowód, że **era musi być w schemacie od dnia pierwszego** — drift rubryki nastąpi
w 3. miesiącu i nikt go nie zauważy.

**c) Metadane parsowane regexem z pola `Notes`, w dwóch warstwach** (koszt
w `process-results.ts:201`, czas w `comparisonUtils.ts:133` — w komponencie React!).
W kicie: **`run-meta.json` jest źródłem prawdy dla metadanych, CSV wyłącznie dla ocen**;
wiersze specjalne można nadal generować do CSV dla czytelności, ale pipeline ich nie parsuje.

**d) Rejestr modeli — 5 równoległych map** (`ModelId` + `AGENT_NAMES` + `AGENT_ENV` +
`MODEL_PRICING` + `SUPERSEDED_MODELS`); dodanie modelu = 5 edycji. W kicie: jeden rekord
per model. Dwa błędy modelowania do naprawy: **`AGENT_ENV` przypisuje harness do MODELU**
(harness jest właściwością przebiegu — ten sam model na OpenCode i Claude Code to właśnie
ciekawe porównanie); **`MODEL_PRICING` jest globalne i bezczasowe** (koszt zamrażamy
w `run-meta.json` w momencie runu; cennik służy tylko estymacji przyszłych runów).

**e) Statystyka — tylko średnia.** Przy N=3..10 prób wariancja między próbami tego samego
modelu bywa większa niż różnica między modelami. Bez σ/mediany/min-max leaderboard sugeruje
nieistniejącą precyzję, a alerty regresji są nieprogowalne.

### Czego brakuje całkowicie

1. **Historii** — każdy build nadpisuje `results.json`; brak szeregu czasowego → brak trendów i alertów.
2. **`runId` i idempotencji** — identyfikatorem jest numer próby w nazwie katalogu.
3. **Statusu przebiegu** — nieudany run = brak CSV = **cicha eliminacja** (`:169`), co
   systematycznie zawyża wyniki modeli niestabilnych.
4. **Walidacji** — parser CSV to regex; `N/A` w Score cicho zamieniane na 0 (`:114`) —
   miesza „nie oceniono" z „zero punktów". W kicie: prawdziwy parser + walidacja przeciw
   `criteria.json` (zestaw kryteriów, `score <= max`).
5. **Provenance** — brak zapisu: który model sędziował, jakim promptem, na jakim baseline.
6. **Deklaratywnej listy wierszy specjalnych** — zduplikowana w `process-results.ts:182`
   i `comparisonUtils.ts:3-8`.

## 2. Docelowy schemat danych

> **Zasada naczelna: pliki w gicie = źródło prawdy. `results.json` = artefakt buildu,
> zawsze odtwarzalny.** Przeżywa oba warianty publikacji — appka SQLite też jest read-modelem.

### Układ katalogów

```
my-bench/
├── bench.config.ts                       # rejestr modeli (1 rekord/model), harnessy, cenniki
├── eras/era-2026-08.json                 # definicja ery: zadania + wagi + rubryka + sędzia
├── tasks/<task-id>/{task.md, criteria.json, baseline.lock, verify/}
├── runs/<era-id>/<task-id>/<model-id>/attempt-<n>/
│   ├── scores.csv                        # Criterion,Score,Max,Notes (jak dziś)
│   ├── run-meta.json                     # czas, koszt, tokeny, status, provenance
│   └── judge-meta.json                   # sędzia, hash promptu, powtórzenia
├── history/leaderboard.jsonl             # append-only snapshoty agregatów (dopisuje CI)
└── website/src/data/
    ├── index.json                        # LEKKI: agregaty + metadane er/zadań/modeli
    └── attempts-<era-id>.json            # CIĘŻKI: pojedyncze próby (lazy)
```

Split index/attempts: strona główna potrzebuje wyłącznie agregatów; szczegóły dopiero
po wejściu w erę (dziś 132 próby × 13 kryteriów w jednym pliku, po multi-tasku ×4).

### `era.json` — kontrakt porównywalności

```json
{
  "id": "era-2026-08",
  "label": "Era 2 — multi-task + repo baseline",
  "startedAt": "2026-08-01", "endedAt": null,
  "reason": "Dodano zadanie repo-based `refactor-auth`; sędzia podniesiony do Opus 4.8",
  "comparableWith": ["era-2026-05"],
  "comparabilityNote": "Zadanie `landing-oneshot` bez zmian — porównywalne per-task, NIE per-era.",
  "judge": { "model": "claude-opus-48", "promptSha256": "9f2c…", "passes": 1, "anonymized": true },
  "tasks": [
    { "taskId": "landing-oneshot",     "weight": 0.25, "criteriaSha256": "a71b…" },
    { "taskId": "refactor-auth",       "weight": 0.35, "criteriaSha256": "3ce9…" },
    { "taskId": "add-feature-billing", "weight": 0.25, "criteriaSha256": "88fa…" },
    { "taskId": "fix-injected-bug",    "weight": 0.15, "criteriaSha256": "12d0…" }
  ],
  "policy": {
    "attemptsPerModel": 5, "timeoutSeconds": 900,
    "failedRunScore": "zero",
    "specialRows": ["Task completion time", "Test run", "API cost"],
    "penaltyRows": ["Penalty"]
  }
}
```

Rozwiązuje: `criteriaSha256` = **automatyczna detekcja dryfu rubryki** (CI porównuje hash;
różnica = błąd builda „załóż nową erę albo zaktualizuj świadomie" — lek na przypadek `Penalty`);
`specialRows`/`penaltyRows` deklaratywnie; `failedRunScore: "zero" | "exclude"` — jawna decyzja
(**rekomendacja: `"zero"`** — niestabilność modelu to jego właściwość, z oznaczeniem w UI).

### `run-meta.json` (fragment istotny dla pipeline'u)

Kluczowe decyzje (spójne z analizą adapterów w
`2026-08-12-bench-kit-harness-adapters.md`):
- `status` ∈ `completed | failed | timeout | partial | manual` — koniec cichej eliminacji.
- **`cost.reported` obok `cost.computed`** — prototyp ma niespójność: `calculate-cost.ts:117`
  bierze cache-aware `cost` z OpenCode, a `ModelAveragesCard.tsx:107` pokazuje obok flat
  pricing z `metadata.ts` — dwie liczby z różnych światów w jednej karcie. Kit trzyma obie
  jawnie z polem `source`.
- `pricingSnapshot` — cennik zamrożony w momencie runu.

### `results.json` v2 (`index.json`) — szkielet

```json
{
  "schemaVersion": 2,
  "generatedAt": "…", "benchId": "acme-internal-bench", "currentEraId": "era-2026-08",
  "eras":  [{ "id", "label", "startedAt", "endedAt", "reason", "comparableWith",
              "taskIds", "attemptCount", "modelCount" }],
  "tasks": [{ "id", "label", "kind": "repo-based", "maxPoints", "weightByEra" }],
  "models":[{ "id", "label", "vendor", "supersedes", "supersededBy",
              "pricing": { "input", "output", "asOf" } }],
  "aggregates": {
    "byModelEra": [{
      "eraId", "modelId",
      "score": 0.781, "scoreCi95": [0.742, 0.820], "stdDev": 0.043,
      "median": 0.788, "min": 0.712, "max": 0.834,
      "rank": 3, "relativeToBest": 0.892,
      "attemptCount": 20, "completedCount": 19, "failureRate": 0.05,
      "taskCoverage": 4,
      "cost":     { "meanPerAttempt", "median", "total", "perPoint", "costToPass" },
      "duration": { "meanSeconds", "medianSeconds", "p90Seconds" },
      "onParetoFront": true
    }],
    "byModelTask": [{ "eraId", "modelId", "taskId", "score", "stdDev",
                      "attemptCount", "rawPoints", "maxPoints",
                      "criteria": [{ "name", "meanScore", "max", "stdDev", "scores" }] }],
    "byEra": [{ "eraId", "bestModelId", "bestScore", "medianScore", "modelCount", "totalCostUsd" }]
  },
  "regressions": [{ "severity": "high", "rule": "supersession",
                    "eraId", "modelId", "comparedTo", "delta", "significant",
                    "worstCriteria": [{ "taskId", "criterion", "delta" }] }]
}
```

### Reguły liczenia

```
attemptTaskScore = (Σ score punktowanych − Σ penalty) / Σ max
                   status != completed → 0.0  (gdy policy.failedRunScore = "zero")
modelTaskScore   = mean(attemptTaskScore po próbach)          // 0..1
modelEraScore    = Σ(weight[task] × modelTaskScore[task]) / Σ(weight[task] odbytych)
relativeToBest   = modelEraScore / max(modelEraScore w erze)
```

**Najważniejsza zmiana: ważenie po zadaniach zamiast sumowania punktów.**
`taskCoverage` obowiązkowe: model z 2/4 zadań ląduje w sekcji „Partial", nie w głównym rankingu.

## 3. Wariant A — GitHub Actions + statyczny dashboard (rekomendacja na start)

Workflow `leaderboard.yml` — kolejność kroków: **walidacja** (parsowalność CSV, `score<=max`,
zgodność kryteriów z rubryką ery, `criteriaSha256`, suma wag == 1.0) → **agregacja**
(`process-results`) → **regresje** (`check-regressions --baseline history/leaderboard.jsonl`;
sticky PR comment po markerze HTML + Slack tylko dla `high`) → **build** →
**snapshot historii** (append do `history/leaderboard.jsonl`, commit bota z `[skip ci]`) →
**deploy** (trzy targety przez `vars.PUBLISH_TARGET`).

### Prywatne repo — pułapka do obsłużenia w `bench-init`

> **GitHub Pages z prywatnego repo publikuje stronę PUBLICZNIE.** Kontrola dostępu do Pages
> to funkcja wyłącznie GitHub Enterprise Cloud. Kit celuje w benchmarki na firmowym kodzie —
> Pages nie może być domyślnym targetem.

| Target | Kiedy | Dostęp |
|---|---|---|
| **Cloudflare Pages + Cloudflare Access** ← rekomendacja dla firm | prywatny benchmark, stały URL, SSO | darmowe do 50 userów, ~15 min konfiguracji; prototyp już używa `wrangler-action` |
| Artefakt HTML z Actions | pilotaż / „nie hostujemy niczego" | dostęp = dostęp do repo; retencja 90 dni |
| GitHub Pages | benchmark publiczny (jak sam 10x-bench) | publiczny |

`bench-init` pyta wprost: „czy leaderboard może być publiczny?" i ustawia `PUBLISH_TARGET` —
błędna odpowiedź to incydent bezpieczeństwa.

### Git jako baza danych — dwie warstwy

1. **Dane surowe** = katalogi `runs/…`; każdy run wchodzi PR-em (review wyników przed wejściem
   na leaderboard — sensowny proces sam w sobie).
2. **Szereg czasowy** = `history/leaderboard.jsonl`, append-only (odtwarzanie trendu
   z `git log` wymagałoby checkoutu N commitów przy każdym buildzie). ~150 B × modele ×
   snapshoty — po roku setki KB.

Detale ratujące przed bólem: `[skip ci]` + paths-filter bez `history/**` (brak pętli),
`concurrency.group` (deploye nie wyścigują się), `history/leaderboard.jsonl merge=union`
w `.gitattributes` (konflikty równoległych PR-ów rozwiązują się same).

## 4. Wariant B — web-appka z SQLite

### Kryteria przejścia (przechodź przy ≥2)

1. **Wiele benchmarków w firmie** (2+ zespoły, jedno miejsce) — najsilniejszy sygnał.
2. Skala: >500 attemptów lub >5 er; build > ~2 min; attempts-JSON > kilka MB.
3. Wyniki spoza CI (runy z laptopów, >1 PR dziennie z wynikami).
4. Regularne zapytania ad-hoc nieodpowiadalne bez skryptu.
5. Autoryzacja per użytkownik / audyt zmian ocen (compliance).

Przy ≤1: zostań przy wariancie A.

### Minimalna architektura (firma bez devops)

Cloudflare Access (SSO, zero kodu auth — appka czyta `Cf-Access-Authenticated-User-Email`)
→ 1 kontener (Fly.io shared-cpu + wolumen ≈ kilka $/mies., albo Hetzner+Coolify) →
**Hono + better-sqlite3**, ten sam Astro build serwowany z procesu (front z wariantu A
przenosi się bez przepisywania — warunek, żeby migracja A→B nie była przepisaniem projektu).
Backup: `VACUUM INTO` do R2 raz dziennie wystarcza (dane odtwarzalne z gita); Litestream
dopiero gdy appka przestanie być read-modelem.

### Schemat tabel (skrót)

`benches`, `eras` (z `comparable_with`, `judge_model`, `judge_prompt_sha`,
`failed_run_policy`), `tasks`, **`era_tasks`** (waga jest własnością pary era×task +
`criteria_sha`), `criteria` (kind: `auto|judge|human|info|penalty`), `models`
(z `supersedes`), **`model_pricing`** (wersjonowany w czasie: `effective_from`),
`runs` (batch; `harness`, `harness_version`, `created_by` z Access, `source: git|api|manual`),
`attempts` (status, timing, tokeny, `cost_reported`/`cost_computed`/`cost_source`,
`task_score`; `UNIQUE(era,task,model,attempt)`), `scores` (**`score` NULL-owalne —
„nie oceniono" ≠ 0**). Widok `v_model_era_score` liczy leaderboard jednym zapytaniem
z ważeniem po `era_tasks.weight`.

### Jak `bench-score` wysyła wyniki

**Rekomendacja: nie POST-uj.** `bench-score → commit do runs/ (PR) → merge → webhook →
idempotentny importer w appce`. Git zostaje źródłem prawdy; awaria bazy = jeden re-import;
migracja A→B jest addytywna i odwracalna. Endpoint POST tylko dla kryterium nr 3
(`Idempotency-Key: runId`, token per maszyna), z zasadą: **każdy POST jest asynchronicznie
lustrowany commitem do repo** — inaczej baza i git rozjadą się po pół roku.

## 5. Ery na leaderboardzie

> Ranking istnieje **tylko wewnątrz ery**. Nigdy wspólna lista pozycji dla dwóch er.

**UI: nie zakładki** (sugerują równorzędność i zapraszają do porównywania nieporównywalnego).
Zamiast tego **selektor ery w nagłówku** (globalny filtr, domyślnie bieżąca) + stały pasek
kontekstu: co się zmieniło wobec poprzedniej ery (`reason`), co porównywalne per-task.

**Widok „Trend"** — jedyne miejsce spotkania er. Oś X = czas kalendarzowy; trzy zabiegi:
pionowe linie na granicach er z powodem zmiany; naprzemienne pasma tła per era;
**linia modelu PRZERWANA na granicy ery** (ciągła linia przez granicę = wizualne kłamstwo;
`era.comparableWith` z danych steruje rysunkiem).

Trendy mimo zmian er:

| Metoda | Kiedy |
|---|---|
| **Ranking zamiast score** (oś Y = pozycja) | **domyślna** — odporna na zmianę rubryki, zero konfiguracji |
| Relative-to-best (`score / best w erze`) | drugi przełącznik; pokazuje dystans do czołówki |
| Bridge runs (kotwice: 1–2 stabilne modele przez nową erę → offset koryguje historię) | advanced; pole `era.anchors` odblokowuje tryb `Score (skalibrowany)` z etykietą „estimated" |

`comparableWith` powinno działać **per-zadanie, nie tylko per-erę** — najczęstsza zmiana ery
to dodanie zadania przy niezmienionych pozostałych; `criteriaSha256` na poziomie `era_tasks`:
dwa zadania z tym samym hashem rubryki są porównywalne niezależnie od ery.

## 6. Alerty regresji

**Gdzie**: krok w tym samym workflow, po `process-results`, przed deployem. Baseline:
`history/leaderboard.jsonl`. Wynik: `regressions.json` + `regressions.md` +
`$GITHUB_STEP_SUMMARY` + sekcja `regressions[]` w `index.json` (baner na dashboardzie).

Trzy reguły:
- **R1 supersession** (główny use case): `model.supersedes != null`, ta sama era; severity high.
- **R2 per-criterion**: kryterium spadło o ≥1 pełny punkt vs poprzednik — najbardziej
  actionable („CO się zepsuło na naszym stacku"); medium (high dla `kind='auto'`).
- **R3 self-drift**: ten sam model, ta sama era, powtórzony run, spadek >1σ — sygnał zmiany
  providera/harnessa/kwantyzacji; medium.

**Statystyka — nie komplikuj.** Przy N=3–5 testy istotności to fałszywy rygor. Reguła
nienakładających się przedziałów: `mean_new + sd_new < mean_old − sd_old`
(„najlepszy przebieg nowego gorszy od najgorszego przebiegu starego") + twardy próg
`|Δ| >= 2 p.p.`. Przy `attemptCount < 3` → `insufficient-data`, nie alert.

Powiadamianie warstwowo: step summary (zawsze) → **sticky PR comment (domyślne** — zero
sekretów, wersjonowana dyskusja przy zmianie) → Slack webhook (tylko high) → baner na dashboardzie.

**Czego NIE robić: nie failuj builda przy regresji.** Regresja modelu to obserwacja o świecie,
nie defekt repo; blokowanie merge sprawi, że ludzie przestaną wrzucać niewygodne wyniki.
Flaga `--fail-on-regression` domyślnie wyłączona.

## 7. Prezentacja kosztu i czasu

**Widok główny: scatter koszt × jakość z frontem Pareto.**
- Oś X **logarytmiczna** (cenniki od $0.15 do $10/1M — dwa rzędy wielkości; liniowo 80% modeli
  zlepia się przy zerze).
- Punkt = model (średnia) z whiskerem σ w pionie; wielkość punktu = mediana czasu;
  kolor = dostawca/rodzina (nie jakość — redundantne z osią Y).
- **Front Pareto jawnie** (przerywana linia): jedyny element dający wprost rekomendację
  zakupową; liczony w process-results (`onParetoFront: true`).

**`$/punkt` z blokadą**: liczony tylko dla modeli ≥ progu użyteczności (domyślnie score ≥ 0.6,
konfigurowalne); poniżej „—" z tooltipem.

**Lepsza metryka: `cost-to-pass`** — „ile realnie kosztuje dostanie działającego wyniku":
```
passRate   = udział prób z taskScore >= próg akceptacji (np. 0.8)
costToPass = meanCostPerAttempt / passRate    // passRate=0 → „nieosiągalne"
```
Karze modele niestabilne jak rzeczywistość: model za $0.10 z 20% pass rate kosztuje realnie
$0.50/wynik — więcej niż $0.40 z 90%. Analogicznie `timeToPass`.
**`costToPass` jako domyślna kolumna „wartość"; `$/punkt` pomocnicza.**

**Czas: mediana i p90, nigdy średnia** (długi ogon: timeouty). Format `Xmin Ys` zostaje
wyłącznie do prezentacji; pipeline operuje na `durationSeconds`.

**Układ dashboardu kitu:**
1. Nagłówek + selektor ery + pasek kontekstu ery
2. Baner regresji
3. Leaderboard: karty modeli (score % + σ + rank + koszt/przebieg + costToPass)
4. **Scatter koszt × jakość z frontem Pareto** (NOWE — główny widok „wartość")
5. **Heatmapa model × zadanie** (NOWE — sedno multi-task: model X wygrywa globalnie,
   ale przegrywa na waszym repo; od pierwszej wersji multi-task)
6. Tabela szczegółowa kryteria × modele (ResultsTable 1:1)
7. Trend w czasie z granicami er

Unikać: radar chart (nieczytelny przy 12 kryteriach, kolejność osi sugeruje nieistniejące
różnice), stacked bar dla kosztu.

## Podsumowanie rekomendacji

| # | Decyzja | Rekomendacja |
|---|---|---|
| 1 | Format ocen | CSV zostaje; metadane z `Notes` → `run-meta.json` |
| 2 | Multi-task w MVP | **schemat i katalogi multi-task od razu, UI jednozadaniowe w MVP** (retrofit = przepisanie każdego wyniku; zapas = jeden segment ścieżki) |
| 3 | Agregacja | ważona średnia po zadaniach; obowiązkowe `stdDev` i `taskCoverage` |
| 4 | Ery | w schemacie od dnia 1; `criteriaSha256` = automatyczna detekcja dryfu |
| 5 | Nieudane runy | liczone jako 0, nie pomijane; `status` w schemacie |
| 6 | Publikacja | Wariant A; prywatnie **Cloudflare Pages + Access**, NIE GitHub Pages (prywatne repo → publiczna strona!) |
| 7 | Historia | `history/leaderboard.jsonl` append-only, commit CI, `merge=union` |
| 8 | SQLite | przy ≥2 kryteriach przejścia; git źródłem prawdy, appka read-modelem |
| 9 | Regresje | reguła ±1σ + próg 2 p.p.; PR comment domyślnie; Slack tylko high; nigdy `exit 1` |
| 10 | Koszt/jakość | scatter log-X z frontem Pareto; `costToPass` zamiast `$/punkt` |

Odpowiedź na otwarte pytanie nr 2 konceptu: **multi-task w schemacie od razu, UI może być
jednozadaniowe**. Odpowiedź na pytanie nr 4: autoryzacja **nie przesuwa SQLite wcześniej** —
Cloudflare Access daje SSO przed statycznym dashboardem bez backendu.

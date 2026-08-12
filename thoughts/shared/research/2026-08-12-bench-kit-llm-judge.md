# 10x-bench-kit — architektura LLM-as-judge (`/bench-scorecard` + `/bench-score`)

> Analiza subagenta (Opus), 12.08.2026. Podproblem konceptu
> `thoughts/shared/plans/2026-08-12-10x-bench-kit-concept.md`.
> Oparta na prototypie: format CSV, `scripts/process-results.ts`, realne dane
> z `eval-results/` (132 katalogi, 26 rodzin modeli) oraz cenniku Claude API.

## 0. Punkt wyjścia z prototypu (fakty)

- Format wynikowy: `Criterion,Score,Max,Notes` + wiersze specjalne. `scripts/process-results.ts:182`
  wyklucza z sumy `Task completion time`, `Test run`, `Penalty`, `API cost`; `Penalty` jest
  odejmowane (`:193`), koszt parsowany z `API cost` (`:201`).
- **Realna skala jest większa niż w briefie**: `eval-results/` ma 132 katalogi, 26 rodzin modeli —
  wzmacnia argument za tanim, stałym sędzią.
- **W danych widać ukryty anchor 0.5** (np. `claude-opus-46-attempt-1`: sześć z dziesięciu kryteriów
  ma `0.5,1`) — nieudokumentowana skala trójstopniowa; do naprawy w rubryce (§2).
- Noty w CSV są już de facto evidence-based — dobry wzorzec do wymuszenia schematem.

## 1. Pojedynczy sędzia vs panel vs self-consistency

### Koszt (liczony, nie intuicyjny)

Cennik: Opus 5 (`claude-opus-5`) $5/$25 za MTok; Sonnet 5 $3/$15; Haiku 4.5 $1/$5.
Cache write 1.25×, read 0.1×. Scenariusz: 8 modeli × 5 prób, 20 kryteriów (8 auto, 10 judge,
2 human), artefakt ~60k tokenów, 2 wywołania per próba z artefaktem w cache'owanym prefiksie:

| | koszt |
|---|---|
| 1 próba (2 wywołania) | ~$0.50 |
| 40 prób, sędzia = Opus 5 | **~$20 / era** |
| Panel 3 sędziów | ~$50 / era |
| Drugi przebieg na 20% próbek | +$4 |

**Koszt sędziego jest nieistotny** — decyzja nie pada po koszcie.

### Rekomendacja: jeden stały sędzia + obowiązkowy targetowany drugi przebieg. Panel — nie (poza kalibracją rubryki).

1. **Panel mnoży powierzchnię dryfu ×3** — era pęka, gdy którykolwiek z trzech modeli się zmieni.
2. **Mediana z 3 na skali 0/1/2 prawie nic nie porusza** — przy dobrej rubryce zgodność ~90%,
   a błędy panelu są skorelowane (wszyscy widzą ten sam artefakt).
3. **Wariancję sędziego uśredniają już 3–5 prób** — szum sędziego dzieli się przez √N jak szum modelu.

**Drugi przebieg selektywnie:**

```
pass 1: wszystkie komórki judge
pass 2 (ten sam sędzia, świeży kontekst, bez wiedzy o pass 1):
  a) 15% losowej próbki stratyfikowanej po kryterium  → metryka test-retest (§5)
  b) 100% komórek z confidence != "high"
  c) 100% komórek z wynikiem środkowym (score == 1 przy max 2)
|Δ| >= 1 → wywołanie #3 adjudication (widzi oba uzasadnienia, NIE widzi punktów)
nadal rozbieżne → needs_human = true → spot-check
```

**Panel jako narzędzie diagnostyczne**: raz na erę (przy tworzeniu/zmianie rubryki) 3 różne modele
na ~6 archiwalnych prób. Kryteria, na których panel się nie zgadza, nie idą do produkcji jako
`judge` — idą do przepisania anchorów albo do `auto`/`human`.

**Wybór sędziego:** `claude-opus-5`, `output_config.effort: "high"`, adaptive thinking.
**Uwaga:** `temperature`/`top_p`/`top_k` są usunięte w Opus 4.7+/Opus 5/Sonnet 5 i zwracają 400 —
klasyczne „temperature=0 dla determinizmu" nie istnieje. Determinizm = anchory + wymuszone
evidence + structured output (`output_config.format`).

## 2. Rubryka zakotwiczona — `criteria.json`

Zasady, które schemat egzekwuje:

- **Koniec z 0.5**: `max ∈ {1, 2}`; „połowa" = kryterium trójstopniowe → `max: 2` z jawnym anchorem dla 1.
- **Monotoniczne anchory**: punkt N tylko gdy spełnione WSZYSTKIE warunki N (i niżej) — główna mitygacja verbosity bias.
- **Anchory to obserwowalne fakty**, nie oceny.
- **`weight` osobno od `max`** — zmiana granularności skali nie przesuwa leaderboardu.
- **`csv_name`** = dokładny string kolumny `Criterion`.

```json
{
  "$schema": "https://10x-bench-kit.dev/schema/criteria-2.json",
  "scorecard_version": "3.1.0",
  "era": "E3",
  "scale": { "type": "anchored-ordinal", "values": [0, 1, 2] },
  "aggregation": {
    "formula": "sum(score_i / max_i * weight_i) / sum(weight_i)",
    "penalty": "subtract_from_total",
    "rounding": "none"
  },
  "judge": {
    "model": "claude-opus-5",
    "effort": "high",
    "prompt_ref": "judge-prompt.md",
    "prompt_sha256": "9f2c…",
    "second_pass": { "sample_rate": 0.15, "always_if": ["mid_anchor", "confidence_below_high"] }
  },
  "criteria": [
    {
      "id": "seo-tags",
      "csv_name": "SEO Tags",
      "title": "Metadane SEO i Open Graph",
      "intent": "Model musi rozumieć, że strona marketingowa bez OG/canonical jest niekompletna.",
      "verification": "auto+judge",
      "max": 2,
      "weight": 1.0,
      "applies_to": ["task:website-oneshot"],
      "auto": {
        "command": "node tasks/website-oneshot/verify/seo.mjs",
        "output": "json",
        "output_schema": { "score": "integer", "facts": "string[]" },
        "timeout_s": 120,
        "on_error": "needs_human",
        "role": "evidence"
      },
      "judge": {
        "context": [
          "glob:src/layouts/**/*.astro",
          "glob:src/pages/**/*.astro",
          "auto_results:seo-tags"
        ],
        "max_context_tokens": 40000,
        "evidence_required": ["path", "line", "quote"],
        "out_of_scope": ["jakość CSS", "wydajność", "porównania z innymi próbami"]
      },
      "anchors": [
        { "score": 0, "label": "brak",
          "definition": "Brak <title> LUB brak <meta name=\"description\"> na co najmniej jednej stronie." },
        { "score": 1, "label": "podstawowe",
          "definition": "Każda strona ma <title> i <meta name=\"description\">, ale brakuje co najmniej jednego z: og:*, twitter:card, rel=canonical, lang=\"pl\"." },
        { "score": 2, "label": "kompletne",
          "definition": "WSZYSTKIE z: per-page title, per-page description, pełny zestaw og:(title|description|type|url|image), twitter:card, rel=canonical, lang=\"pl\".",
          "counterexamples": ["więcej metatagów niż wymagane nie podnosi wyniku"] }
      ],
      "tie_break": "lower",
      "reliability": {
        "kappa_w": 0.86, "exact_agreement": 0.93, "human_agreement": 0.90,
        "measured_at": "2026-08-01", "sample_n": 24, "status": "ok"
      },
      "history": [
        { "version": "3.0.0", "change": "split anchor 1 z 'ma OG' na pełną listę; było źródłem 0.5" }
      ]
    },
    {
      "id": "local-build",
      "csv_name": "Local build",
      "title": "Projekt się buduje",
      "verification": "auto",
      "max": 1,
      "weight": 2.0,
      "applies_to": ["*"],
      "auto": {
        "command": "npm ci && npm run build",
        "output": "exit_code", "timeout_s": 900,
        "on_error": "score_zero", "role": "authoritative"
      },
      "anchors": [
        { "score": 0, "label": "fail", "definition": "Niezerowy exit code lub timeout." },
        { "score": 1, "label": "pass", "definition": "Zerowy exit code, artefakt w dist/." }
      ],
      "reliability": { "status": "deterministic" }
    }
  ]
}
```

Kluczowe pole: **`auto.role`** — `authoritative` (wynik auto jest wynikiem) vs `evidence`
(wynik auto trafia do promptu sędziego jako fakt, punktuje sędzia; rozjazd judge vs auto =
darmowa metryka walidacyjna, §5).

Nowe wiersze specjalne CSV (do `excludedCriteria` w `process-results.ts:182`):

```csv
Era,E3,N/A,E3
Scorecard version,3.1.0,N/A,3.1.0
Judge,claude-opus-5,N/A,claude-opus-5 @ prompt 9f2c… effort=high
```

## 3. Anonimizacja — realistyczne vs nie

**Teza: pełne zaślepienie jest nieosiągalne. Anonimizacja usuwa tanie, silnie skorelowane
wycieki; resztę załatwia evidence-forcing i pomiar, nie nadzieja.**

### Realistyczne (krok `sanitize` w `/bench-score`)

1. **Opaque ID**: `attempt_id = hmac_sha256(era_salt, "<model>-attempt-<n>")[0:8]` →
   `judge-workspace/7f3a91c2/`; mapping w `.judge-map.json`, nigdy w kontekście.
2. **Odcięcie metadanych przebiegu** (czas 5min vs 17min to niemal identyfikator rodziny).
3. **Normalizacja pól tożsamościowych**: `package.json` (name/author/description), README, LICENSE.
4. **Usunięcie artefaktów agenta**: `.claude/`, `AGENTS.md`, `.cursor*`, `.opencode/`,
   `Co-Authored-By:`, historia gita w całości (snapshot, nie repo).
5. **Normalizacja formatowania**: `prettier --write` stałym configiem kitu (zabija fingerprint).
   **Uwaga**: destrukcyjne dla kryterium „zgodność ze stylem repo" — takie kryterium oceniać
   PRZED normalizacją, jako `auto` (lint/prettier `--check` przeciw configowi repo).
6. **Leak audit — fail closed**: grep blocklisty nazw modeli/vendorów przed każdym wywołaniem
   sędziego; trafienie → `<REDACTED-TOOL>` + `sanitize-report.json`. Per-task allowlist
   (`tasks/<id>/sanitize-allow.txt`) dla legalnych zależności (np. `@anthropic-ai/sdk`).
7. **Jedna próba na kontekst** — eliminuje position bias u źródła.

### Nierealistyczne (nie obiecywać w skillu)

- Ukrycie stylu (komentarze, emoji, struktura README, preferencje bibliotek) — silny sędzia
  zgadnie rodzinę powyżej przypadku.
- Ukrycie „odcisku zdolności" i charakterystycznych halucynacji.

### Skoro zaślepienie częściowe

- Instrukcja w prompcie: „Jeśli wywnioskujesz pochodzenie, zignoruj; nigdy nie nazywaj modelu."
- **Probe zaślepienia** (raz na erę, ~$1): Haiku na 12 zsanityzowanych próbkach zgaduje rodzinę;
  accuracy >> baseline → zaślepienie słabe → przenieś ciężar na `auto`, zaostrz evidence-forcing.
- **Probe atrybucji** (§4) mierzy, czy sędzia w ogóle reaguje na tożsamość — ważniejsze niż to,
  czy potrafi zgadnąć.

## 4. Pułapki i mitygacje

| Bias | Objaw | Mitygacja w skillu |
|---|---|---|
| Position/order | pairwise faworyzuje pozycję; pierwsza próba kalibruje | zero pairwise (ocena absolutna vs anchory, 1 próba/kontekst); kolejność prób losowana per sesja (seed w `score-run.json`); kolejność kryteriów w prompcie stała (cache); ewentualny pairwise tie-break: obie kolejności, niezgodność = remis |
| Verbosity/effort | rozbudowany kod dostaje więcej niż minimalny poprawny | monotoniczne anchory („dodatkowe funkcje NIE podnoszą wyniku"); `evidence_required` — brak cytatu = brak punktu; `out_of_scope`; kontrwaga auto (`Dependency footprint`, `Dead code`) |
| Self-preference | sędzia rodziny X faworyzuje modele X | sędzia spoza puli nierealny przy 26 rodzinach → evidence-forcing jako główny lever; **probe atrybucji** raz na erę (ten sam artefakt z nagłówkiem `Produced by: Vendor-A/B`; Δ≠0 → zaostrzyć sanityzację, obciąć wagi miękkich kryteriów); metryka delta: `mean(judge_norm) − mean(auto_norm)` per rodzina |
| Drift wersji sędziego | alias `claude-opus-5` wskazuje inny checkpoint (aliasy bez sufiksów dat — nie da się przypiąć!) | **golden set**: 10 zamrożonych par (artefakt, kryterium) w `scorecard/golden/`; `/bench-score` odpala go PRZED każdą sesją (~$0.30); MAD > 0.15 pkt lub zmiana ≥1 na komórce → STOP, kandydat na nową erę; `prompt_sha256` + sha `criteria.json` do CSV; **archiwizacja artefaktów prób na zawsze** |
| Halucynacja dowodu | cytat linii, której nie ma | walidacja post-hoc: każdy `evidence[].quote` musi być podłańcuchem pliku; niezgodność → komórka unieważniona, retry raz, potem `needs_human` |
| Leniency creep | po 30. próbie sędzia „przyzwyczaja się" | każda próba = świeży kontekst; sędzia nie widzi wcześniejszych punktów ani leaderboardu |

## 5. Pomiar wiarygodności sędziego

### Precyzja (test-retest) — ~$4 na erę

15% komórek judge stratyfikowane po kryterium (min. 3/kryterium) + 100% komórek środkowych
i low-confidence. Metryki per kryterium: exact agreement %, mean |Δ|, quadratic-weighted κ.

| κ_w | exact | status | akcja |
|---|---|---|---|
| ≥ 0.75 | ≥ 0.90 | `ok` | nic |
| 0.45–0.75 | 0.75–0.90 | `watch` | przepisz anchory (zwykle brakuje środkowego), retest w następnej erze |
| < 0.45 | < 0.75 | `unreliable` | `weight: 0` (raportuj informacyjnie); mechanicznie sprawdzalne → `auto`; niesprawdzalne → `human` |

Reguła kciuka: kryterium wymagające sądu estetycznego / „ogólnego wrażenia" jest kandydatem
na `unreliable` zanim je zmierzysz (por. `Consistent UI`, `Responsive design` w 10xBench —
formalizacja: `verification: "human"`).

### Trafność (human spot-check) — 30–45 min na erę, ~10% komórek judge

Dobór stratyfikowany po ryzyku: (1) 100% `needs_human` i nierozstrzygniętych adjudication;
(2) 2 komórki/kryterium na skrajnościach (max i 0); (3) 100% komórek judge dla modelu #1, #2
i ostatniego; (4) 100% `auto+judge` gdzie judge ≠ auto. **Człowiek też nie widzi nazwy modelu.**
Ocena człowieka nadpisuje sędziego (`Notes` z prefiksem `[human]`); agreement judge↔human →
`reliability.human_agreement`. Human agreement < 0.80 przez dwie ery z rzędu → kryterium
`unreliable` (stabilnie zły to nadal zły).

### Trzecia, darmowa metryka

2–3 kryteria stale w trybie `auto+judge` (`role: "evidence"`) jako sondy kalibracyjne —
rozjazd judge vs deterministyczny checker wykrywa dryf natychmiast, bez człowieka.

## 6. Szkielet `judge-prompt.md`

Sędzia **dostaje**: `task.md`, podzbiór kryteriów z anchorami, drzewo plików, treść plików
z `judge.context`, wyniki auto (jako fakty), w trybie repo-based diff vs baseline + wyciąg
konwencji repo. **Nie dostaje**: innych prób, nazwy modelu, metadanych przebiegu, wcześniejszych
ocen, leaderboardu, historii gita.

````markdown
# Judge — {{scorecard_version}} / era {{era}}

## Rola
Oceniasz JEDEN artefakt kodu względem sztywnej rubryki. Nie jesteś recenzentem
i nie doradzasz — przypisujesz punkty do anchorów na podstawie faktów, które
potrafisz zacytować z artefaktu.

## Reguły twarde
1. Punkt N przyznajesz TYLKO gdy spełnione są WSZYSTKIE warunki anchora N.
   Anchory sprawdzasz od najniższego w górę; stop na pierwszym niespełnionym.
2. Każdy punkt > 0 wymaga dowodu: ścieżka + linia + cytat (≤200 znaków)
   skopiowany dosłownie. Brak dowodu = niższy anchor.
3. Objętość nie jest dowodem. Dodatkowe funkcje/pliki/abstrakcje/komentarze
   NIE podnoszą punktacji ponad anchor.
4. Oceniasz wyłącznie kryteria z sekcji CRITERIA.
5. Dowody niejednoznaczne → NIŻSZY anchor + `needs_human: true`.
6. Jeśli wywnioskujesz pochodzenie artefaktu — zignoruj. Nigdy nie nazywaj
   modelu ani dostawcy.
7. AUTO_RESULTS to fakty ustalone deterministycznie — używaj jako dowodów,
   nie przepunktowuj.

## TASK
{{task_md}}

## AUTO_RESULTS
{{#each auto_results}}- {{criterion_id}}: {{status}} — {{facts}}
{{/each}}

## ARTIFACT
Attempt: {{opaque_id}}
{{file_tree}}
{{#each files}}
### {{path}}
```{{lang}}
{{content}}
```
{{/each}}
{{#if truncated}}
[UWAGA: {{truncated_count}} plików pominięto jako poza zakresem. Nie wnioskuj
o ich zawartości.]
{{/if}}

## CRITERIA
{{#each criteria}}
### {{id}} — {{title}} (max {{max}})
Intencja: {{intent}}
Poza zakresem: {{out_of_scope}}
Anchory:
{{#each anchors}}- **{{score}} ({{label}})**: {{definition}}
{{/each}}
{{/each}}

## PROCEDURA
1. Zbierz fakty z ARTIFACT i AUTO_RESULTS — zanim spojrzysz na anchory.
2. Dopasuj fakty do anchorów od 0 w górę.
3. Przypisz najwyższy anchor, którego wszystkie warunki są spełnione.
4. Wypisz, czego brakuje do następnego anchora.

## FORMAT ODPOWIEDZI (JSON, bez preambuły)
{
  "criteria": [{
    "criterion_id": "seo-tags",
    "score": 1,
    "anchor_matched": 1,
    "evidence": [{ "path": "src/layouts/Base.astro", "line": 12,
      "quote": "<meta name=\"description\" content={description} />" }],
    "rationale": "1-3 zdania, fakty nie oceny; trafia do kolumny Notes.",
    "unmet_for_next_anchor": ["og:title", "rel=canonical"],
    "confidence": "high",
    "needs_human": false
  }]
}
````

Implementacyjne dla `/bench-score`:
- Kształt odpowiedzi przez `output_config.format` (json_schema) — nie prefill (prefill = 400 na Opus 4.6+).
- **Prefiks pod cache**: `[reguły+procedura+format]` ← breakpoint 1, `[TASK+ARTIFACT]` ← breakpoint 2,
  `[CRITERIA subset]` bez breakpointu — drugie/trzecie wywołanie czyta artefakt po 0.1×.
- `rationale` z przecinkami → cytowanie CSV (obsługiwane już przez `process-results.ts`).

## 7. Polityka „er"

```
era_key = sha256(
  tasks_manifest      // id zadań + baseline commity + toolchain z baseline.lock
+ criteria_semantic   // criteria.json BEZ pól: title, intent, examples, reliability, history
+ judge_model_id
+ judge_prompt_sha256
+ aggregation_formula
)
```

**BREAKING (nowa era):** zmiana modelu sędziego (także dryf pod tym samym aliasem wykryty przez
golden set); zmiana reguł twardych/procedury/formatu w judge-prompt; dodanie/usunięcie
punktowanego kryterium; zmiana `max`/`weight`/`tie_break`; **jakakolwiek zmiana treści anchora**;
zmiana zadań/baseline/toolchainu; zmiana agregacji/`Penalty`; przeniesienie `judge` → `auto`
(chyba że re-scoring historii ery).

**NON-BREAKING (bump minor/patch):** literówki, `title`/`intent`/`examples` (bez zmiany
`definition`); kryterium informacyjne `weight: 0`; nowe modele/próby; sanityzator, ceny, UI,
`reliability`, `history`.

**Wersjonowanie:** `E{era}` + semver scorecardu (np. `E3 / 3.1.0`); wiersze `Era` /
`Scorecard version` / `Judge` w CSV → leaderboard grupuje bez zewnętrznego rejestru;
osobna tabela per era.

**Bridge protocol (~$3):** bridge set = 3 modele × 2 próby z zarchiwizowanych artefaktów;
przy otwarciu ery E{n+1} przepuncuj bridge set nową rubryką; publikuj `Δ = mean(%_new − %_old)`
i odchylenie; sd < 3 pp → trend z adnotacją korekty, inaczej ery rozłączne.
**Reguła do CLAUDE.md generowanego przez `/bench-init`:** *nowa era otwiera się razem
z przepuncowanym bridge setem albo się nie otwiera.*

## Podział odpowiedzialności

| | `/bench-scorecard` | `/bench-score` |
|---|---|---|
| Produkuje | `criteria.json`, `criteria.md`, `judge-prompt.md`, `golden/`, deklaracja ery | `eval-results/<attempt>/eval-results.csv`, `reliability-report.json`, `sanitize-report.json` |
| Robi | wywiad, anchory, panel kalibracyjny na 6 archiwalnych próbach, przypisanie `verification`, `era_key` | golden-set gate → sanitize + leak audit → auto verify → judge pass 1 → targeted pass 2 → adjudication → walidacja cytatów → merge do CSV → metryki wiarygodności → lista do spot-checku |
| Bramka | nie wypuszcza kryterium `judge` bez trzech anchorów i `evidence_required` | nie punktuje, gdy golden set odchylony albo leak audit trafił poza allowlistą |

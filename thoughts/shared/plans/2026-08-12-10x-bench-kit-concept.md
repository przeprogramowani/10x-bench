# 10x-bench-kit — koncept (high level)

> Status: koncept do dyskusji, brak decyzji implementacyjnych. Data: 12.08.2026.

## Idea w jednym zdaniu

Zestaw skilli Claude Code, który na meta-poziomie prowadzi dowolnego programistę / zespół
przez zbudowanie **własnego, wewnętrznego 10x-bencha**: benchmarku modeli AI osadzonego
w ich języku, frameworku i realnym kodzie firmowym — od wywiadu, przez projekt scorecardu,
uruchamianie modeli w izolacji, aż po automatycznie aktualizowany leaderboard z metadanymi
(czas, koszt, tokeny).

Kluczowa obserwacja: **10x-bench już jest prototypem tego kitu**. Kit to ekstrakcja jego
wzorców do postaci szablonów + wywiadu:

| Co jest dziś w 10x-bench | Co staje się w kicie |
|---|---|
| `.claude/skills/10x-eval-model/SKILL.md` (pipeline + adaptery harnessów) | wzorzec dla `bench-run` |
| `eval-attempts/metadata.ts` (rejestr modeli, pricing, środowiska) | generowany `bench.config.ts` |
| `scripts/calculate-cost.ts` (koszt z SQLite OpenCode'a) | adapter kosztów per harness |
| `scripts/process-results.ts` (CSV → `results.json`) | silnik agregacji wyników |
| `website/` (Astro dashboard, ResultsTable, ModelAveragesCard) | szablon leaderboardu |
| `benchmark/prompt.md` + `criteria.md` | artefakty generowane przez `bench-init` i `bench-scorecard` |
| wiersze specjalne CSV (`Task completion time`, `Test run`, `API cost`, `Penalty`) | schemat metadanych przebiegu |

## Zestaw skilli

Pięć skilli + jeden opcjonalny, każdy z własnym `SKILL.md` (konwencja jak `10x-eval-model`:
frontmatter z triggerami, sekcja Inputs, pipeline krok po kroku, adaptery). Dystrybucja
jako plugin Claude Code (marketplace / repo-szablon) — patrz „Dystrybucja" niżej.

### 1. `/bench-init` — wywiad i scaffold

Interaktywny wywiad (AskUserQuestion, w duchu `10x-plan` — pytania o WYMAGANIA, nie o
implementację):

- **Kontekst firmy**: co budujecie, jaka domena, co model musi „rozumieć", żeby być u was użyteczny.
- **Stack**: język(i), framework(i), kluczowe biblioteki, wersje, tooling (build, testy, lint).
- **Podstawa testu**: repo firmowe vs syntetyczne vs hybryda (decyzja projektowa — patrz niżej).
- **Harnessy i modele**: czym uruchamiacie agentów (OpenCode / Claude Code / Codex CLI / Cursor), które modele na start.
- **Ograniczenia**: prywatność kodu, polityka sieciowa, budżet na runy, kto ogląda leaderboard.

Output: scaffold repo benchmarku + `bench.config.ts` (odpowiednik `metadata.ts`:
modele, pricing, środowiska, liczba prób, timeouty) + `CLAUDE.md` z regułami
(w tym odpowiednik zakazu „nie czytaj innych attemptów podczas oceniania").

```
my-bench/
├── bench.config.ts              # modele, harnessy, pricing, N prób, timeouty
├── CLAUDE.md                    # reguły dla agentów oceniających/budujących
├── tasks/
│   └── <task-id>/
│       ├── task.md              # prompt zadania (odpowiednik prompt.md)
│       ├── baseline.lock        # pin commita/rewizji bazowej (tryb repo)
│       └── verify/              # automatyczne weryfikacje (testy, e2e, smoke)
├── scorecard/
│   ├── criteria.md              # rubryka czytelna dla ludzi
│   ├── criteria.json            # rubryka maszynowa (wagi, max, typ weryfikacji)
│   └── judge-prompt.md          # prompt dla LLM-as-judge
├── eval-attempts/<model>-attempt-<n>/
├── eval-results/<model>-attempt-<n>/eval-results.csv
├── scripts/                     # run / score / process-results / calculate-cost
├── website/                     # leaderboard (szablon)
└── .github/workflows/leaderboard.yml
```

### 2. `/bench-design-tasks` — projekt zadań (podstawa testu)

Najtrudniejsza decyzja projektowa całego kitu. Skill prowadzi przez trade-off i pomaga
wygenerować zadania w wybranym trybie:

| | **Repo firmowe** (kontynuuj / wykonaj / dodaj) | **Syntetyczne pod stack** |
|---|---|---|
| Trafność (mierzy to, na czym wam zależy) | wysoka — realny kod, realne konwencje | średnia — ryzyko „zadania z podręcznika" |
| Powtarzalność | wymaga zamrożenia baseline'u (commit + lockfiles + toolchain) | łatwa — zadanie jest samowystarczalne |
| Prywatność / możliwość dzielenia się | kod nie wychodzi poza firmę; leaderboard tylko wewnętrzny | można publikować, porównywać między zespołami |
| Kontaminacja (model widział kod w treningu) | niska dla kodu prywatnego | wyższa dla typowych zadań; mitygacja: domenowe detale |
| Koszt utrzymania | średni — repo żyje, baseline trzeba wersjonować | niski |
| Sygnał „agent w cudzym kodzie" (czytanie, konwencje, refaktor) | pełny | ograniczony |

**Rekomendacja: hybryda z przewagą repo-based.** 2–4 zadania na zamrożonym snapshocie
repo firmowego (typy zadań: *kontynuuj* niedokończony feature, *wykonaj* task z backlogu,
*dodaj* nową funkcję, opcjonalnie *napraw* wstrzyknięty bug) + 1 zadanie syntetyczne
one-shot (jak obecny 10x-bench) jako tani smoke test i element porównywalny na zewnątrz.

Mechanika trybu repo: baseline = przypięty commit; każda próba startuje z czystego
`git worktree` / świeżego klona tego commita; `baseline.lock` pinuje też wersje narzędzi,
żeby wyniki były porównywalne między miesiącami. Skill pomaga też zdefiniować politykę
sanityzacji (sekrety, dane klientów) zanim kod trafi do środowiska agenta.

### 3. `/bench-scorecard` — projekt scorecardu

Wywiad + generacja rubryki w trzech warstwach weryfikacji (każde kryterium ma
zadeklarowany typ):

1. **Automatyczna (deterministyczna)** — build przechodzi, testy jednostkowe, e2e
   (Playwright jest już w środowisku), lint/typecheck, smoke testy z `tasks/<id>/verify/`.
   Binarna lub punktowana, zero kosztu osądu.
2. **LLM-as-judge** — jakość kodu, zgodność z konwencjami repo, kompletność UX; rubryka
   zakotwiczona (opis, co znaczy 0/1/2 punkty na kryterium), osobny `judge-prompt.md`.
3. **Human spot-check** — wąska lista rzeczy, których nie ufamy ani testom, ani judge'owi.

Zasady wiarygodności judge'a wpisane w skill: model-sędzia ≠ model-zawodnik i jest
**stały w czasie** (zmiana sędziego = nowa era leaderboardu), ocena per kryterium a nie
„ogólne wrażenie", sędzia nie widzi nazwy modelu (anonimizacja katalogu), okresowy audyt
próbek przez człowieka, opcjonalnie podwójne przejście sędziego dla oceny stabilności.

Output: `criteria.md` + `criteria.json` (wagi, max, typ weryfikacji per kryterium)
+ `judge-prompt.md`. Format wynikowy CSV zgodny z obecnym
(`Criterion,Score,Max,Notes` + wiersze specjalne), więc silnik agregacji jest wspólny.

### 4. `/bench-run` — uruchamianie modeli w izolacji

Uogólnienie `10x-eval-model`:

- Rejestracja modelu w `bench.config.ts` (ID, display name, harness, pricing — z
  potwierdzeniem cen jak w kroku 2 obecnego skilla).
- Przygotowanie N katalogów prób; w trybie repo-based: worktree/klon baseline'u per próba.
- **Adaptery harnessów** (wzorzec sekcji „Harnesses" z obecnego SKILL.md):
  - **OpenCode** — pierwszy i referencyjny: ma headless CLI (`opencode run`) i SQLite
    (`opencode.db`) z tokenami/kosztem per sesja z atrybucją po `directory` — ścieżka
    kosztów jest już rozwiązana (`calculate-cost`).
  - **Claude Code headless** (`claude -p`), **Codex CLI** — do automatyzacji w fazie 2;
    każdy adapter deklaruje: komendę startu, sposób pomiaru czasu, źródło tokenów/kosztu.
  - Harnessy GUI (Cursor, Desktopy) — tryb ręczny z instrukcją, jak w dzisiejszym skillu.
- Izolacja: osobny katalog roboczy per próba, brak dostępu do innych prób i do
  `eval-results/`, timeout per run, N prób równolegle jako subagenty w tle.
- **Metadane przebiegu zbierane zawsze**: `started_at`, `duration`, `tokens in/out/cache`,
  `cost USD`, `harness`, wersja harnessa, exit status, liczba sesji. Zapis do wierszy
  specjalnych CSV (jak dziś `Task completion time` / `Test run` / `API cost`) —
  plus surowy `run-meta.json` per próba, żeby leaderboard mógł liczyć trendy.

### 5. `/bench-score` — egzekucja scorecardu

Domyka pętlę (dziś ten krok jest ręczny / w osobnym repo eval):

1. Odpala automatyczne weryfikacje z `tasks/<id>/verify/` przeciw każdej próbie.
2. Spawnuje judge'a (per próba, per kryterium typu `judge`) z anonimizowanym kontekstem.
3. Scala oceny + metadane do `eval-results/<attempt>/eval-results.csv`.
4. `process-results` → `results.json` → leaderboard.

### 6. (opcjonalnie) `/bench-report` — leaderboard i raporty

Trzy warianty publikacji, od najtańszego:

1. **Statyczny dashboard + GitHub Actions** *(rekomendacja na start — to dzisiejszy
   10x-bench domknięty automatyzacją)*: push CSV do repo → workflow `leaderboard.yml`
   odpala `process-results` → build Astro → deploy na GitHub Pages (lub artefakt
   w prywatnym repo). Zero infrastruktury, historia wyników = historia gita.
2. **Web-appka z SQLite** — gdy pojawi się potrzeba trendów w czasie, filtrowania po
   erach scorecardu, wielu benchmarków w firmie: mały serwis (np. Astro SSR / Hono +
   `better-sqlite3`), do którego `bench-score` POST-uje wyniki. Faza późniejsza.
3. **Artefakty** — raport HTML per run (dla firm, które nie chcą hostować niczego).

Leaderboard od początku wersjonuje **erę benchmarku**: zmiana zadań, scorecardu albo
sędziego = nowa era; wyników między erami nie porównujemy wprost.

## Dystrybucja kitu: przez 10x-cli

**Decyzja: kit dystrybuujemy przez [`10x-cli`](https://github.com/przeprogramowani/10x-cli)**
— nowy tryb inicjalizacji benchmarku, dostępny dla każdego użytkownika, z instalacją
skilli we wskazanym miejscu. To zamyka dyskusję „plugin vs template repo" i jest lepsze
od obu, bo CLI ma już gotową całą maszynerię dystrybucyjną:

| Mechanizm w 10x-cli (dziś) | Co daje kitowi za darmo |
|---|---|
| `writer.ts` + manifest (`.10x-cli-manifest.json`) | idempotentna instalacja skilli, czyszczenie stale'i, wykrywanie lokalnych edycji |
| `ToolProfile` (claude-code, cursor, copilot, codex, windsurf, gemini, generic) | instalacja kitu pod dowolne narzędzie agentowe, nie tylko Claude Code |
| `10x sync` (contentHash cheap-skip, raport konfliktów, „keeps your edit") | aktualizacje kitu u użytkowników bez nadpisywania ich modyfikacji |
| blok rules z sentinelami w `CLAUDE.md`/`AGENTS.md` | wstrzyknięcie reguł benchmarku (np. zakaz czytania innych prób) zarządzane przez CLI |
| `10x bench` + `bench-client.ts` (publiczny, no-auth, `schemaVersion`) | wzorzec renderowania leaderboardu w terminalu + wersjonowany schemat danych |

### Proponowany interfejs: `10x bench init`

```bash
# Inicjalizacja benchmarku w bieżącym katalogu (nowe repo benchmarku lub istniejący projekt)
10x bench init

# Wybór miejsca i narzędzia
10x bench init --dir ./ai-bench --tool claude-code
10x bench init --tool cursor          # kit działa też poza Claude Code
```

Podział odpowiedzialności — **CLI robi część deterministyczną, skille część inteligentną**:

1. `10x bench init` instaluje 5–6 skilli kitu przez istniejący writer (ścieżki wg
   `ToolProfile`, wpis do manifestu), dokłada blok rules z sentinelami i minimalny
   scaffold (katalogi, `bench.config.ts` ze stubem). Zero pytań o domenę firmy —
   to nie jest rola CLI.
2. Użytkownik mówi agentowi „zainicjuj benchmark" → skill `/bench-init` prowadzi
   wywiad i parametryzuje scaffold (jak dziś `10x-cli-setup`: CLI instaluje, skill
   prowadzi).
3. Aktualizacje kitu: `10x sync` (kit trackowany w manifeście jak lekcja — konflikt
   z lokalną edycją skilla jest raportowany, nie nadpisywany).

### Skąd CLI bierze treść kitu (do rozstrzygnięcia)

- **(a) Bundlowana w paczce CLI** — kit wersjonowany razem z CLI, działa offline
  i bez logowania (spójne z publicznym `10x bench`); update = update CLI.
- **(b) Delivery API jako pseudo-lekcja** (np. ref `bench-kit`) — kit aktualizuje się
  niezależnie od wydań CLI i dziedziczy pełną mechanikę `get`/`sync` (contentHash,
  konflikt-raport); ale wymaga auth, więc „dla każdego użytkownika" trzeba by osobno
  odblokować.
- **(c) Publiczny endpoint na 10xbench.ai** — obok danych leaderboardu; no-auth,
  aktualizacje niezależne od CLI; wymaga rozszerzenia `bench-client.ts` (świadomie
  osobny allowlist hostów).

Wstępna rekomendacja: **(a) na start** (najprostsze, spójne z no-auth `bench`),
z migracją do (c) gdy kit zacznie żyć szybciej niż CLI.

### Synergia: leaderboard firmowy w `10x bench`

Skoro kit generuje `results.json`, warto od początku trzymać go w schemacie zgodnym
z `bench-client.ts` (`schemaVersion`!). Wtedy naturalne rozszerzenie:

```bash
10x bench --source ./website/src/data/results.json   # lokalny benchmark w terminalu
10x bench --url https://bench.firma.internal          # wewnętrzny leaderboard zespołu
```

Ten sam renderer, publiczny 10xBench i firmowy benchmark obok siebie.

## Roadmapa (fazy)

1. **MVP** — `bench-init` + `bench-scorecard` + `bench-run` (tylko OpenCode, zadanie
   syntetyczne one-shot) + statyczny leaderboard z Actions. To jest „10x-bench dla
   każdego" i da się to wyciąć w ~80% z istniejącego kodu.
2. **Weryfikacja** — `tasks/*/verify/` (testy/e2e runnery), `bench-score` z LLM-as-judge,
   koszt/tokeny dla OpenCode (gotowe) + adapter Claude Code headless.
3. **Repo-based** — `bench-design-tasks` w pełnej wersji: baseline lock, worktree per
   próba, sanityzacja, zadania kontynuuj/wykonaj/dodaj/napraw.
4. **Skala** — leaderboard SQLite z trendami i erami, alerty regresji („nowy model X
   słabszy od poprzednika na naszym stacku"), wiele benchmarków per firma.

> Alternatywny kanał (plugin Claude Code z marketplace) został przeanalizowany i opisany
> w `thoughts/shared/research/2026-08-12-bench-kit-plugin-distribution.md` — odłożony,
> ale struktura hybrydowa (skille + `templates/` kopiowane do projektu) z tej analizy
> przenosi się 1:1 na wariant 10x-cli.

## Otwarte pytania (do rozstrzygnięcia przed MVP)

1. **Źródło treści kitu dla `10x bench init`**: bundlowana w paczce CLI (a),
   delivery API jako pseudo-lekcja z auth (b), czy publiczny endpoint na 10xbench.ai (c)?
2. Czy MVP celuje w **jedno zadanie** (jak 10x-bench) czy od razu multi-task z agregacją
   per zadanie na leaderboardzie?
3. Które harnessy poza OpenCode są faktycznie priorytetem u odbiorców (Claude Code
   headless wydaje się naturalnym #2)?
4. Leaderboard wewnętrzny: wystarczy prywatne repo + artefakt/Pages, czy od razu
   potrzebna autoryzacja (SSO) → co przesuwa wariant SQLite wcześniej?
5. Polityka sędziego: jeden stały model-sędzia dla wszystkich er, czy panel 2–3 sędziów
   z medianą (droższe, stabilniejsze)?

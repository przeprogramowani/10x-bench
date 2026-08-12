# 10x-bench-kit — zadania repo-based (`/bench-design-tasks`)

> Analiza subagenta (Opus), 12.08.2026. Podproblem konceptu
> `thoughts/shared/plans/2026-08-12-10x-bench-kit-concept.md`.

Trzy założenia przewodnie:

1. **Weryfikacja przed zadaniem.** Zadanie bez deterministycznego verifiera nie wchodzi do
   benchmarku. Typ zadania wybieramy tam, gdzie weryfikacja jest tania i obiektywna.
2. **Historia repo jest najlepszym źródłem zadań i największym kanałem przecieku.** Każdy typ
   zadania to manipulacja historią: bierzemy stan „po" (znamy rozwiązanie i testy), cofamy do
   „przed" i zamykamy drogę powrotną.
3. **Baseline to artefakt, nie wskaźnik.** SHA commita jest identyfikatorem; gwarancją jest
   tarball/obraz z sumą kontrolną.

## 1. Taksonomia zadań

| Typ | Skąd wziąć | Weryfikacja | Sygnał | Koszt prep | v1? |
|---|---|---|---|---|---|
| **Napraw** (bug) | odwrócony commit `fix:` + jego test regresyjny | test regresyjny (musi przejść) + suite (nie może paść) + limit diffa | debugowanie, lokalizacja przyczyny | **1–2 h** | **tak** |
| **Wykonaj** (ticket) | zamknięty ticket + merged PR + testy z PR-a | testy z PR-a → `verify/` | przekład wymagań na kod | **2–3 h** | **tak** |
| **Kontynuuj** (WIP) | merged PR rozcięty na `seed` + `rest` | testy z PR-a | domykanie cudzego kontekstu, konwencje | 3–5 h | **tak** |
| **Dodaj** (feature) | spec od zera | testy od zera | projektowanie w istniejących ramach | 4–6 h | nie |
| **Zrefaktoruj** | moduł z długiem + pokrycie | golden suite + progi metryk + snapshot API | zmiana bez psucia | 3–6 h | nie |

**Kolejność wdrażania odwrotna do intuicji: zaczynamy od „napraw" i „wykonaj"**, bo repo już
zawiera gotowe rozwiązanie i gotowe testy. „Dodaj" wygląda najprościej, a jest najdroższe
(verifier ręcznie).

### 1A. Kontynuuj — rozcięcie merged PR-a

Nie z porzuconych branchy (brak testów, martwe z zaszumiającego powodu). Technika:
merged PR 6–15 plików / 150–500 linii z testami → `base = git merge-base main <pr-head>` →
diff dzielony na `seed` (rusztowanie: migracja, typy, routing, pusty komponent, `TODO(BENCH)`)
i `rest` (implementacja → `expected/reference.patch`). Baseline = `base` + `seed`; testy z PR-a
do `verify/`. **Ilość rusztowania = pokrętło trudności**: agent musi sam zdecydować o co
najmniej jednej rzeczy strukturalnej, ale nie zgadywać kontraktu. Punktować osobno: „dokończył
TODO", „nie zmienił rusztowania bez powodu". Pułapka: `seed`/`rest` w oddzielnym repo roboczym,
baseline spłaszczony — inaczej `git log -p` pokazuje przyszłość.

### 1B. Wykonaj — ticket już zrealizowany

Ticket z Jiry/Lineara, który już został zrobiony → za darmo: wymagania, merged PR jako
referencja, testy z PR-a jako verifier, czas człowieka. **Bierz ticket w oryginalnej „brudnej"
formie** (benchmark mierzy też radzenie sobie z niedookreśleniem; sanityzujemy nazwy klientów,
nie prostujemy treści). Baseline = `merge-base` z czasu ticketu, nie dzisiejszy main.
Najniższy stosunek pracy do wartości — **trzon benchmarku, 40–50% zadań**.

### 1C. Dodaj — tylko przekrojowe

Feature musi dotykać ≥3 warstw (persystencja → serwis → API → UI → testy) — feature
w jednym pliku mierzy generowanie kodu, taniej użyć zadania syntetycznego. Główny koszt:
verifier od zera → wymusza kontrakt zewnętrzny w `task.md` (endpointy, payload, `data-testid`)
— to OK, o ile kontrakt jest zewnętrzny, nie „jak zbudować". **Najwyższe ryzyko kontaminacji**:
„dodaj CSV export / dark mode / paginację" to zadania z tutoriala — wymagaj domenowej specyfiki.

### 1D. Napraw — trzy metody, w kolejności jakości

**Metoda 1 (rekomendowana): bug archeologiczny — odwrócenie prawdziwego fixa.**

```bash
# Kandydaci: commity fix: ruszające kod produkcyjny I testy, <= 120 linii
git log --since="2 years ago" --format='%H %s' --grep='^fix' -i | while read sha msg; do
  files=$(git show --name-only --format='' "$sha")
  echo "$files" | grep -qE '(\.spec\.|\.test\.|/tests?/)' || continue
  echo "$files" | grep -qvE '(\.spec\.|\.test\.|/tests?/)' || continue
  n=$(git show --numstat --format='' "$sha" | awk '{s+=$1+$2} END{print s}')
  [ "$n" -le 120 ] && echo "$sha  ($n linii)  $msg"
done
```

Przygotowanie: `git revert -n` **tylko kodu produkcyjnego** (test regresyjny zostaje) →
sprawdź: test czerwony, suite zielony → wytnij test do `verify/automated/regression/`.
Złoty standard: bug realistyczny z definicji, verifier napisany przez człowieka, opis
z ticketu/postmortemu, koszt 1–2 h. Wymaga kultury testów regresyjnych.

**Metoda 2: mutacja kierowana narzędziem** (Stryker/mutmut/PIT): mutant, który (a) przechodzi
build/typecheck/lint, (b) zabija dokładnie 1–3 testy, (c) leży w kodzie o znaczeniu biznesowym.
Wada: mutanty jednoznakowe mierzą „czytanie stack trace'a".

**Metoda 3: bug ręczny (ostateczność)** — checklist realizmu: semantyczny nie składniowy
(musi przechodzić build/tsc/lint); **warunkowy, nie totalny** (pusta lista, przełom miesiąca,
druga strona paginacji, diakrytyki, wyścig); w kodzie „dotkniętym przy okazji"; bez śladów
(`FIXME`, nietypowe formatowanie); jedna przyczyna — kilka objawów. Dyskwalifikujące:
commit „inject bug", bug widoczny w `git diff HEAD~1`, bug w pliku dodanym pod zadanie.

**Wejście i weryfikacja (wspólne):** agent dostaje **bug report** (zgłoszenie supportu,
kroki, oczekiwane/faktyczne), nie wskazanie pliku. Weryfikacja trójskładnikowa: (1) test
regresyjny musi przejść; (2) suite z baseline'u (przywrócony!) nie może się zepsuć;
(3) **rozmiar diffa punktowany** (np. ≤3× referencji = max) — bez tego modele-rozrzutne
wygrywają przepisaniem modułu. Twardy wymóg: spłaszczona historia + usunięty remote.

### 1E. Zrefaktoruj — nie w v1

Warunek nienegocjowalny: pokrycie ≥80% linii przed zadaniem (inaczej mierzy odwagę).
Wybór modułu metrykami (hotspot = churn × complexity, `any`, jscpd). Weryfikacja: golden
suite + **snapshot publicznego API** (`tsc --emitDeclarationOnly`, diff `.d.ts` pusty) +
mierzalne progi w `task.md`. Najwyższa wariancja ocen, najwyższy koszt — dodać jako 5.–6.
zadanie.

## 2. Pakiet zadania `tasks/<task-id>/`

```
tasks/billing-vat-correction-fix/
├── task.md                     # JEDYNY plik widziany przez agenta
├── task.meta.json              # typ, wersja, budżety, mutable/protectedPaths, leakAudit, sanitization
├── baseline.lock               # zamrożone środowisko (sekcja 3)
├── calibration.json            # wyniki pilotażu (sekcja 6)
├── setup/
│   ├── prepare-attempt.sh
│   └── patches/{010-seed.patch, 020-strip-tests.patch}
├── verify/                     # NIEDOSTĘPNE dla agenta
│   ├── manifest.json           # mostek checki → scorecard (Criterion,Score,Max,Notes)
│   ├── automated/{regression/, guard/, static/}
│   ├── judge/criteria-context.md
│   └── run-verify.sh
├── expected/                   # NIEDOSTĘPNE dla agenta
│   ├── reference.patch
│   ├── requirements.md         # wymagania dla sędziego (NIE diff!)
│   └── notes.md                # alternatywne poprawne rozwiązania (żywy dokument)
└── README.md                   # dla utrzymujących
```

Reguła nadrzędna: **do worktree próby trafia wyłącznie snapshot baseline'u + `task.md`.**

### `task.md` — zasady

Opisuje **zachowanie i kontrakt**, nigdy nazwy testów ani plików do zmiany. Sekcje: kontekst
modułu → zgłoszenie/cel → zakres (w zakresie / poza) → ograniczenia (nie zmieniaj API, nie
modyfikuj testów, nie dodawaj zależności, konwencje repo, zmiana minimalna) → Definition of
Done (checklist) → **Środowisko** (identyczne dla wszystkich modeli: jak uruchamiać testy,
zależności zainstalowane, sieć wyłączona) → Uwagi.

Dwa kluczowe elementy:
- **Wymuszony `ASSUMPTIONS.md`** (maks. 20 linii) — najtańszy wgląd sędziego w jakość
  rozumowania bez czytania transkryptu; punktowany osobno; mierzy uczciwość (zgadł i odnotował
  > zgadł po cichu).
- **Sekcja Środowisko** — bez niej różnice wyników pochodzą z tego, że jeden model zgadł
  polecenie testów, a drugi nie (szum, nie sygnał).

### `baseline.lock` (JSON)

Kluczowe pola: `source.{origin, commit, treeHash, subsetPaths}`;
`snapshot.{kind: tarball, path, sha256, includesInstalledDeps, historyPolicy, remotes: []}`;
`patches[]` z sha256 i kolejnością; `runtime.container.{image, tag, digest}`;
`runtime.toolchain` (node, packageManager, playwright + przeglądarki!);
`runtime.env` (**`TZ`, `LANG`, `BENCH_FROZEN_NOW`, `RANDOM_SEED`**); `runtime.services[]`;
`network.{policy: deny-by-default, allowlist: [api modelu, localhost], externalApis: stubbed}`;
`verification.{verifyDirSha256, expectedDirSha256, baselineRegressionStatus: red, …}`.

Cztery pola ratujące powtarzalność: `treeHash` (zawartość niezależnie od historii),
`snapshot.sha256` (jedyna prawdziwa gwarancja — repo może dostać force-push),
`BENCH_FROZEN_NOW` (zadania z datami psują się po miesiącach),
`verifyDirSha256` (cicha zmiana testu = cicha zmiana ery — runner wykrywa).

### `verify/` — niewidoczność w czterech warstwach

1. **Separacja fizyczna** (rozwiązuje ~90%): `verify/` nigdy w worktree; weryfikacja startuje
   po śmierci procesu agenta, na kopii katalogu próby.
2. **Izolacja procesu**: kontener z bind-mountem tylko `/work`; bez kontenera — worktree
   w `/tmp/bench/<run-id>`, repo benchmarku poza `$HOME` i cwd agenta.
3. **Szyfrowanie w spoczynku (plan B)**: `verify.age`, deszyfrowany w `bench-score`.
4. **Audyt po fakcie**: log wywołań narzędzi agenta grepowany o `verify|expected|git fetch|
   git log --all` → wiersz `Penalty` w CSV (format już to wspiera).

**Mechanizm „restore-then-verify"** — najczęstsza dziura: agent „naprawia" testy.
`run-verify.sh`: (0) audyt manipulacji chronionych ścieżek → (1) przywróć `protectedPaths`
z baseline'u → (2) wgraj testy weryfikacyjne (pierwszy moment ich istnienia na dysku) →
(3) static/guard/regression osobno raportowane → (4) metryki diffa.

**`verify/manifest.json`** mapuje checki na kryteria CSV: `static.build→Local build(1)`,
`guard.suite→No regressions(2)`, `regression.bug→Bug fixed(3, blocking:true)`,
`diff.size→Minimal change(progi)`, `artifact.assumptions→ASSUMPTIONS.md(1)`; kary:
`tampered.tests→Penalty 2`, `verify.probing→Penalty 3`. `blocking:true`: bez przejścia
głównego checka zadanie nie może dostać maksimum (piękny niedziałający kod ≠ brzydka naprawa).

### `expected/` — obowiązkowe, ale nie do scoringu

1. **Dowód wykonalności**: referencja na baseline musi przechodzić `verify/` — test dla testów,
   bramka pilotażu.
2. **Kotwica dla sędziego** — ale **nie podawaj sędziemu diffa referencyjnego** (bias
   „inne = gorsze"); podawaj `requirements.md` (lista wymagań i pułapek) — sędzia sprawdza
   pokrycie wymagań, nie podobieństwo kodu.
3. **Test przy re-bazowaniu**: aplikowalność `reference.patch` mówi, czy zadanie jeszcze istnieje.

Nigdy: punktowanie podobieństwa diffa (nagradza naśladowanie stylu jednego autora).

## 3. Zamrażanie baseline — pin + lockfile NIE wystarczy

Osie niedeterminizmu: rejestr pakietów (unpublish, niedostępność), zewnętrzne API, toolchain
(Node 20.11 vs 20.19), **warstwa systemowa (fonty, Chrome dla Playwrighta — e2e flaky między
miesiącami zaszumi wyniki bardziej niż różnice modeli)**, czas i losowość, force-push repo
źródłowego, sieć w trakcie runu.

**Rekomendacja stopniowana:**
- **Poziom 0 (bez Dockera, ~2 h, fallback)**: `git bundle`/tarball **z zainstalowanymi
  zależnościami** (problem rejestru znika); `.nvmrc` + `packageManager` + corepack;
  `TZ/LANG/BENCH_FROZEN_NOW/RANDOM_SEED` z runnera; zewnętrzne API jako nagrane fixture'y
  (nock/msw/VCR), nigdy live; snapshot poza gitem (release asset/S3), sha256 w locku.
  Wystarcza dla zadań bez e2e.
- **Poziom 1 (obraz kontenera z digestem, +3–4 h) ← STANDARD KITU**: jeden obraz per
  zadanie/stack, przypięty **digestem nie tagiem**, zależności wpieczone (`npm ci` w obrazie),
  kod jako bind-mount worktree. Baza np. `mcr.microsoft.com/playwright:v1.45.3@sha256:…`.
- **Poziom 2 (mirror rejestru, pełny offline)**: tylko przy >12 mies. życia lub audycie —
  dla firm bez platformy infra: pomiń (obraz daje 90% korzyści za 5% pracy).

**Sieć: `deny-by-default`**, allowlist = wyłącznie endpoint API modelu + localhost.
Bez tego mierzysz konfigurację firewalla, nie model. Identyczna polityka dla wszystkich modeli
w erze, zapisana w locku. „Model z wyszukiwarką" = osobna era, nie wariant.

**Test powtarzalności (raz, przy zamrażaniu):** verify na czystym baseline (regression czerwone,
guard+static zielone) → verify na baseline+referencja (wszystko zielone) → powtórka obu na
innej maszynie i po tygodniu — wynik identyczny co do checka.

## 4. Sanityzacja

Dwa różne zagrożenia:
- **(A) Wyciek kodu do dostawcy modelu** — fakt, nie ryzyko; środek prawny/organizacyjny
  (DPA, zero-retention, model self-hosted). **Pierwsze pytanie wywiadu w skillu** — odpowiedź
  „nie wolno" zmienia listę testowanych modeli.
- **(B) Sekrety i dane osobowe w snapshocie** — środek techniczny, proces niżej.

**Historia gita: squash do jednego commita, domyślnie dla wszystkich typów.**
`--depth 1` NIE rozwiązuje problemu (niesie message/autora/drzewo; osiągalny remote →
`git fetch --unshallow` = przyszłość na tacy). Squash: powierzchnia sanityzacji spada z „cała
historia" do „jedno drzewo", rozmiar o rząd wielkości. Koszt: agent traci `git blame` —
przyznać wprost. Wariant `truncated` (ostatnie N commitów) dopuszczalny wyłącznie dla
`implement`/`add`/`refactor` po przeskanowaniu historii; nigdy dla `fix`/`continue`.
**Zawsze: usuń remote'y i credential helper** — najczęstszy błąd.

Skrypt `sanitize-baseline.sh`: klon roboczy → `git filter-repo` do podzbioru ścieżek →
orphan branch + jeden commit → usunięcie remote/credentiali + `reflog expire` + `gc --prune=now`
→ usunięcie artefaktów budowania i binariów (`dist`, `.next`, `coverage`, `*.map`, `*.sqlite`,
`*.pem`…) → usunięcie `.env*`, `.npmrc`, `.netrc` → **gitleaks** (bramka) + **trufflehog
--only-verified** (triage) → skan PII (PESEL/NIP/IBAN/e-maile/telefony, wzorce domenowe).

Checklist (kolejność ma znaczenie): decyzja prawna → zawężenie podzbioru → squash+remote →
skan sekretów → **dane klientów w miejscach zapominanych** (fixture'y, seedy, `__snapshots__`,
`.http`, mocki Storybooka, migracje) → binaria (PDF/XLSX = często zrzuty z produkcji) →
endpointy wewnętrzne (materiał rekonesansowy) → **rotacja znalezionych sekretów** (sekret
z repo = spalony) → **przegląd ludzki** (osoba spoza autorów; skanery nie łapią kontekstu) →
podpis w `task.meta.json`. **Sanityzuj raz, na poziomie snapshotu** — zadania na tym samym
repo dzielą snapshot.

## 5. Kontaminacja i przecieki

Kontaminacja treningowa: realna dla kodu publicznego i zadań podręcznikowych; dla prywatnego
niska. **Przeciek w pakiecie zadania: znacznie bardziej prawdopodobny i w 100% pod kontrolą.**

**Kanały przecieku (audyt per zadanie):** git (historia, reflog, tagi, notes, stash,
`ORIG_HEAD`, `packed-refs`, remote'y); testy w drzewie (snapshoty, fixture'y z oczekiwanym
wyjściem, e2e opisujące nieistniejące UI); **artefakty budowania** (source mapy z przyszłą
implementacją — klasyczny cichy błąd); dokumentacja (CHANGELOG, ADR, spec OpenAPI z endpointem
do zaimplementowania); **sąsiedni analogiczny feature** (obok `ExportToCsv`, zadanie
`ExportToXlsx` — nie zawsze złe, ale odnotować `analogousImplementationPresent: true`);
zależności zdradzające technologię; CI (nazwy testów, których nie ma w drzewie); konfiguracja
agentowa (`CLAUDE.md`, `.cursorrules` — zostawić jako realistyczne LUB usunąć, ale identycznie
dla wszystkich); zakomentowany/martwy kod.

**`leak-check.sh`** (obowiązkowa bramka): wyciągnij z `reference.patch` symbole wprowadzane
przez rozwiązanie (nazwy funkcji/klas/plików) i grepnij pakiet startowy; sanity gita
(`remote -v`, `log --all`, `stash list`, `tag -l`).

**Heurystyki antykontaminacyjne:** preferuj zadania wymagające wiedzy lokalnej (dwa cele,
jeden ruch: trafność↑, kontaminacja↓); unikaj kanonicznych rozwiązań z tutoriali (JWT, debounce,
LRU, paginacja, dark mode); nie używaj repo OSS jako baseline (nawet własnych); kod publiczny
= zawsze skontaminowany; **test kontaminacji (5 min)**: zapytaj model bez repo „jak w projekcie
X zaimplementowane jest Y" — rozpoznawalny kod = problem; **nie publikuj treści zadań
repo-based** (publikuj wyniki i metodologię) — jedyny darmowy mechanizm długowieczności.

## 6. Kalibracja trudności — protokół pilotażu

**Krok 0 — sanity bez modeli (bramka, 15 min):** verify na baseline: regression czerwone,
guard+static zielone; verify na baseline+referencja: wszystko zielone; powtórka 3× na dwóch
maszynach: identycznie; leak-check czysty.

**Krok 1 — pilot: 3 modele × 3 próby** (frontier — wykrywa sufit, średni — granulację,
tani/słaby — podłogę). Progi na średnim wyniku automatycznym:

| Wynik | Diagnoza | Akcja |
|---|---|---|
| <10% | za trudne albo zepsute środowisko | sprawdź krok 2; zawęź zakres / dodaj rusztowanie |
| 10–20% | trudne, użyteczne | zostaw, jeśli różnicuje |
| **20–80%** | **dobre zadanie** | przyjmij |
| >90% | za łatwe | smoke test, poza rankingiem jakościowym |

Warunki ważniejsze niż średnia: **rozstęp międzymodelowy ≥30 pp** (inaczej mierzy szum);
**wariancja wewnątrzmodelowa < połowa rozstępu** (20/60/90% u jednego modelu = loteria;
najczęstsza przyczyna: niedookreślony `task.md`, nie model).

**Krok 2 — analiza jakościowa 9 transkryptów (najważniejszy, 45 min):** czy porażki wynikają
z tego, co chcemy mierzyć? 5/9 porażek typu „nie umiał uruchomić testów w monorepo" = mierzysz
sekcję Środowisko, nie modele. Klasyfikacja: środowisko / zrozumienie / nawigacja /
implementacja / timeout — zdrowe zadanie: większość w implementacji i nawigacji.

**Krok 3 — dyskryminacja pozycyjna:** korelacja wyniku zadania z wynikiem całego benchmarku;
antyskorelowane zadanie zwykle nagradza gadatliwość albo verifier premiuje jedno rozwiązanie.

Wynik pilotażu → `calibration.json` (pass rate per model, rozstęp, wariancje, mediany czasu,
klasyfikacja porażek, werdykt, `ceilingWatch`). To punkt odniesienia do wykrycia zestarzenia.
**Pilotuj po jednym zadaniu i odrzucaj wcześnie.**

## 7. Utrzymanie — dryf repo vs baseline

**Baseline jest zamrożony i celowo NIE nadąża za repo.** Trzy zegary:

| Zegar | Objaw | Reakcja |
|---|---|---|
| Trafność | „my już tak nie piszemy", moduł usunięty | zaplanuj następcę, emerytuj bez pośpiechu (6–12 mies.) |
| Sufit | wszystkie modele >90% | rola smoke testu, dodaj trudniejsze |
| Techniczny | snapshot się nie buduje (EOL, CVE) | **napraw natychmiast — jedyny wymuszający** |

Reguły: (1) **nigdy nie łataj baseline'u w miejscu** — każda zmiana treści/verify/baseline =
nowa wersja zadania = nowa era; (2) semver zadania: MAJOR→nowa era, MINOR (niepunktowane
checki)→ta sama, PATCH→ta sama; kontrola przez `verifyDirSha256`; (3) przegląd kwartalny
30 min: krok 0 + jeden run najlepszego modelu vs `calibration.json`; (4) **re-bazowanie =
nowe zadanie `<id>@v2`** z pełnym pilotażem; (5) bridge run przy zmianie ery (2–3 modele
w obu erach); (6) rotacja ~1/3 zadań rocznie + 1–2 zadania kotwiczne (wieloletni trend);
(7) emerytowane do `tasks/_retired/` z powodem i datą, nigdy nie usuwać.

## 8. Portfel v1 na 2–3 dni setupu

Budżet: 16–24 h minus koszty stałe (scaffold 2 h, sanityzacja+snapshot+obraz **4 h
jednorazowo, wspólne**, scorecard 3 h, bufor 3 h) = **8–12 h na zadania → 4 zadania**.

| # | Typ | Budżet agenta | Timeout | Prep |
|---|---|---|---|---|
| 1 | syntetyczne one-shot (jak dzisiejszy prompt.md) | 15 min | 30 min | 1 h |
| 2 | napraw (odwrócony fix) | 20 min | 40 min | 1,5 h |
| 3 | wykonaj (zamknięty ticket + PR) | 30 min | 60 min | 2,5 h |
| 4 | kontynuuj (rozcięty PR) | 45 min | 90 min | 4 h |

Uzasadnienie: rosnąca trudność → rozdzielczość na całym spektrum (słabe modele punktują na
1–2, mocne różnicują się na 3–4; same trudne zadania = cztery zera i zero informacji); każdy
typ mierzy inny sygnał; „dodaj"/„zrefaktoruj" odpadają (2× koszt, ten sam sygnał); syntetyczne
zostaje jako smoke test i element porównywalny na zewnątrz.

**Liczby wprost:** diff referencyjny 50–400 linii / 2–10 plików (poniżej 50 szum > sygnał,
powyżej ~600 wariancja i porażki „w połowie drogi"); budżet agenta 15–45 min, twardy timeout =
2× mediana modelu referencyjnego, min. 20 min; **N=3 próby** (5 punktowo dla zadań o wysokiej
wariancji z pilotażu); pełny przebieg 4 zadania × 3 próby × 4 modele = 48 runów ≈ 2,5–3 h
przy równoległości 8 — nocny przebieg.

**Plan 3 dni:** Dzień 1 — decyzja prawna → repo+podzbiór → sanityzacja → snapshot+obraz →
**zadanie 1 + runner + jeden zielony przebieg end-to-end** (cel: domknięta pętla — zespoły
zaczynające od projektowania zadań mają po 3 dniach cztery świetne zadania i zero wyników).
Dzień 2 — zadania 2 i 3 (najtańsze; pilotaż 2 w tle). Dzień 3 — zadanie 4 → kalibracja →
scorecard → pierwszy leaderboard → opisanie „ery 1".

**Czego NIE robić w 3 dni:** refaktoryzacje, rozbudowany LLM-as-judge (start: auto + 3–4
kryteria sędziego), mirror npm, własna infrastruktura leaderboardu, >4 zadania, >1 repo źródłowe.

## Pipeline skilla `/bench-design-tasks` (każdy krok bramką następnego)

1. **Bramka prywatności** (czy kod może iść do API modeli — zmienia listę modeli).
2. Wybór repo i najmniejszego sensownego podzbioru.
3. Sanityzacja (skrypt + checklist + przegląd ludzki + podpis).
4. Zamrożenie środowiska (Dockerfile + baseline.lock + test powtarzalności).
5. **Kopalnia zadań** — zapytania po historii (fix z testami, merged PR-y z testami, hotspoty)
   → ranking kandydatów z kosztem przygotowania. **Największa wartość skilla: zamiana „wymyśl
   zadanie" w „wybierz z listy wygenerowanej z twojej historii".**
6. Złożenie pakietu zadania (task.md z szablonu, patche, verify/, expected/, meta).
7. Audyt przecieku (`leak-check.sh`, obowiązkowo).
8. Pilotaż (krok 0 → 9 runów → `calibration.json` → werdykt).
9. Rejestracja w erze (`bench.config.ts`, stempel ery).

**Twarde reguły do SKILL.md:** brak deterministycznego verifiera = brak zadania; `verify/`
nigdy w worktree agenta; remote'y usunięte; historia spłaszczona dla `fix`/`continue`;
zadanie bez pilotażu nie wchodzi do rankingu; zmiana `verify/` = nowa era; treść zadań
repo-based nie jest publikowana.

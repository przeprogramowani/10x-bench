---
theme: seriph
title: Jak wybrać (własny) najlepszy agent AI do oprogramowania
info: |
  ## Jak wybrać (własny) najlepszy agent AI do oprogramowania
  Historia 10xbench.ai i framework wyboru agenta AI do codziennej pracy z kodem.
class: text-center
highlighter: shiki
drawings:
  persist: false
transition: slide-left
mdc: true
---

# Jak wybrać <span class="opacity-60">(własny)</span> najlepszy agent AI do oprogramowania

<div class="pt-6 text-xl opacity-80">
  Historia <span class="font-semibold">10xbench.ai</span>
</div>

<div class="pt-16">
  <span class="px-3 py-1 rounded bg-white/10 text-sm">
    Naciśnij spację, aby zacząć <carbon:arrow-right />
  </span>
</div>

<!-- TODO: dodać imię prelegenta + konferencję / datę -->

---
layout: center
class: text-center
---

## Parę miesięcy temu...

<div class="pt-8 text-3xl font-serif leading-relaxed">
  migrowałem stronę <span class="font-semibold">przeprogramowani.pl</span>
</div>

---
layout: default
---

# Migracja — trzy osie zmiany

<div class="pt-8">
  <MigrationDiagram />
</div>

<div class="pt-10 text-center text-sm opacity-60">
  Framework, hosting i warstwa widoków — wszystko do wymiany.
</div>

---
layout: center
class: text-center
---

<div class="text-5xl font-serif">
  Poszło <span class="text-emerald-400 font-semibold">bardzo dobrze</span>.
</div>

<div class="pt-6 text-lg opacity-70">
  Strona żyje, deploy działa, zespół zadowolony.
</div>

---
layout: two-cols
---

# Jak pracowałem

<div class="pt-4 space-y-4 text-lg">
  <div class="flex items-center gap-3">
    <carbon:document class="text-2xl opacity-70" />
    <span><span class="font-semibold">Spec-driven development</span></span>
  </div>
  <div class="flex items-center gap-3">
    <carbon:tree-view class="text-2xl opacity-70" />
    <span><span class="font-semibold">Kontrola kontekstu</span></span>
  </div>
  <div class="flex items-center gap-3">
    <carbon:checkmark-outline class="text-2xl opacity-70" />
    <span>Sprawdzone techniki pracy z AI</span>
  </div>
</div>

::right::

<div class="h-full flex flex-col items-center justify-center">
  <div class="text-xs uppercase tracking-wider opacity-60">narzędzie</div>
  <div class="pt-2 text-4xl font-serif font-semibold">Claude Code</div>
  <div class="pt-6 text-sm opacity-60 text-center max-w-xs">
    Topowy agent AI do pracy z kodem — spec, plan, kontekst, wykonanie.
  </div>
</div>

---
layout: quote
class: text-center
---

## Ale w pewnym momencie przyszła refleksja...

<div class="pt-8 text-3xl font-serif italic leading-relaxed max-w-3xl mx-auto">
  „Czy z potencjałem dzisiejszego AI <span class="not-italic font-semibold">naprawdę</span> musiałem wykonać tyle pracy, żeby przemigrować stronę?"
</div>

---
layout: center
class: text-center
---

## A gdyby to był <span class="text-emerald-400">one shot</span>?

<div class="pt-12 flex items-center justify-center gap-6 text-2xl font-serif">
  <span class="px-4 py-2 rounded bg-white/5 border border-white/10">jeden prompt</span>
  <carbon:arrow-right class="text-3xl opacity-60" />
  <span class="px-4 py-2 rounded bg-white/5 border border-white/10">enter</span>
  <carbon:arrow-right class="text-3xl opacity-60" />
  <span class="px-4 py-2 rounded bg-emerald-500/10 border border-emerald-400/30 text-emerald-300">gotowy projekt</span>
</div>

---
layout: cover
transition: slide-up
class: text-center
---

# Tak narodził się <span class="text-emerald-400">10xbench.ai</span>

<div class="pt-8 text-xl opacity-80">
  ...o którym dzisiaj Wam opowiem.
</div>

---
layout: section
---

# Część II
## Bóle benchmarków AI do kodowania

<!-- Dlaczego publiczne rankingi modeli kodujących nie są wiarygodnym sygnałem wyboru. -->

---
layout: center
class: text-center
---

## Teza

<div class="pt-8 max-w-3xl mx-auto text-2xl font-serif leading-relaxed">
  Benchmark nie zawodzi przypadkiem. Zawodzi <span class="text-emerald-400 font-semibold">strukturalnie</span>.
</div>

<div class="pt-6 max-w-2xl mx-auto text-lg opacity-80">
  Każdy publiczny ranking modeli kodujących zaczyna umierać w dniu, w którym staje się komercyjnie ważny.
</div>

---
layout: default
---

# Anatomia problemu

<div class="pt-4 text-lg opacity-80">
  Benchmark to <span class="font-semibold">trójka</span>, nie jedna rzecz:
</div>

<div class="pt-8 grid grid-cols-3 gap-6">
  <div class="p-5 rounded border border-white/10 bg-white/5">
    <div class="text-xs uppercase tracking-wider opacity-60">1</div>
    <div class="pt-2 text-xl font-semibold">zestaw zadań</div>
  </div>
  <div class="p-5 rounded border border-white/10 bg-white/5">
    <div class="text-xs uppercase tracking-wider opacity-60">2</div>
    <div class="pt-2 text-xl font-semibold">metryka</div>
  </div>
  <div class="p-5 rounded border border-white/10 bg-white/5">
    <div class="text-xs uppercase tracking-wider opacity-60">3</div>
    <div class="pt-2 text-xl font-semibold">protokół ewaluacji</div>
  </div>
</div>

<div class="pt-10 text-center text-base opacity-70 max-w-3xl mx-auto">
  „Model X osiąga 80% na SWE-bench" — bez wariantu, harness'u, metryki i limitu kroków — <span class="italic">nie niesie samodzielnej informacji</span>.
</div>

---

# #1 Prawo Goodharta

<div class="pt-4 text-xl font-serif italic opacity-90">
  „Gdy miara staje się celem, przestaje być dobrą miarą."
</div>

<div class="pt-6 text-base opacity-80">
  Pozycja w rankingu zaczyna wpływać na decyzje inwestycyjne → modele trenuje się na danych <span class="italic">zbliżonych</span> do benchmarku, a scaffoldy agentów dostraja się pod jego wzorce.
</div>

<div class="pt-6 p-4 rounded border border-emerald-400/30 bg-emerald-400/5">
  <div class="text-xs uppercase tracking-wider opacity-70">dowód</div>
  <div class="pt-2 text-base">
    OpenAI zaprzestało raportowania <span class="font-semibold">SWE-bench Verified</span> w lutym 2026 — saturacja, kontaminacja i dowody, że GPT-5.3 / Claude Opus 4.5 / Gemini 3 Flash Preview <span class="italic">odtwarzały gold-patche z pamięci</span>.
  </div>
</div>

---

# #2 Construct validity

<div class="pt-4 text-base opacity-80">
  Benchmark deklaruje, że mierzy „umiejętność kodowania". Mierzy umiejętność rozwiązywania <span class="font-semibold">konkretnej, skończonej próby zadań</span>.
</div>

<div class="pt-8 grid grid-cols-2 gap-4">
  <div class="p-5 rounded border border-white/10 bg-white/5 text-center">
    <div class="text-xs uppercase tracking-wider opacity-60">SWE-bench — naprawy bugów</div>
    <div class="pt-2 text-4xl font-serif font-semibold text-emerald-400">74,4%</div>
  </div>
  <div class="p-5 rounded border border-white/10 bg-white/5 text-center">
    <div class="text-xs uppercase tracking-wider opacity-60">FeatureBench — nowe funkcje</div>
    <div class="pt-2 text-4xl font-serif font-semibold text-rose-400">11%</div>
  </div>
</div>

<div class="pt-6 text-center text-base opacity-70">
  Ten sam Claude Opus 4.5. <span class="font-semibold">63-punktowa luka</span> w tym samym modelu.
</div>

<div class="pt-2 text-center text-xs opacity-60">
  Przez dwa lata branża utożsamiała „naprawianie bugów" z „umiejętnością kodowania", bo SWE-bench był jedynym benchmarkiem.
</div>

---

# #3 Kontaminacja danych

<div class="pt-4 text-base opacity-80">
  Benchmarki używają zamkniętych, stałych zestawów zadań. Modele trenuje się na treści z całego internetu. Wniosek jest <span class="italic">matematyczny</span>:
</div>

<div class="pt-10 text-center text-xl font-serif">
  zadania benchmarkowe <span class="text-emerald-400">w końcu</span> trafią do danych treningowych
</div>

<div class="pt-10 text-base opacity-80">
  To nie ryzyko — to zmierzony fakt. Każdy statyczny benchmark ma wbudowaną <span class="font-semibold">datę przydatności</span>.
</div>

<div class="pt-3 text-sm opacity-60">
  Mitygacje (LiveCodeBench — bramka czasowa, SWE-bench Pro — zamknięte repo, rotacja, warianty mutacyjne) wymagają ciągłej pracy utrzymaniowej. Benchmarki porzucone przestają różnicować.
</div>

---

# #4 Ecological validity

<div class="pt-4 text-base opacity-80">
  Benchmark potrzebuje czystego, deterministycznego środowiska. Prawdziwe programowanie jest <span class="italic">chaotyczne</span>.
</div>

<div class="pt-6 text-sm opacity-80">
  Benchmarki muszą <span class="font-semibold">usunąć</span>, żeby w ogóle dało się je uruchomić:
</div>

<div class="pt-3 space-y-2 text-base">
  <div>— niejednoznaczne wymagania (prawdziwe tickety ich nie mają)</div>
  <div>— istniejący dług techniczny (benchmarki — czyste repozytoria)</div>
  <div>— koordynację wieloosobową</div>
  <div>— presję czasu, przerywanie pracy, zmiany zakresu w trakcie</div>
</div>

<div class="pt-6 p-4 rounded border border-amber-400/30 bg-amber-400/5 text-sm">
  SWE-CI (marzec 2026): nienadzorowane agenty w produkcji przez miesiące → regresje w <span class="font-semibold">75%</span> przypadków. Media: „75% agentów AI psuje kod". Tyle że <span class="italic">nikt tak nie wdraża AI</span>. Dryf ecological validity w drugą stronę.
</div>

---

# #5 Redukcjonizm metryczny

<div class="pt-3 text-base opacity-80">
  Jedna liczba — <span class="font-mono">58% resolve</span>, <span class="font-mono">1561 ELO</span>, <span class="font-mono">80% pass@1</span> — kłamie na <span class="font-semibold">cztery sposoby</span> równocześnie:
</div>

<div class="pt-6 grid grid-cols-2 gap-3 text-sm">
  <div class="p-4 rounded border border-white/10 bg-white/5">
    <div class="text-xs uppercase tracking-wider opacity-60">niezawodność</div>
    <div class="pt-2">pass@1 = 90% → 5-krokowy workflow poprawny w <span class="font-semibold">59%</span> (0,9⁵). TAU-bench na GPT-4o: pass^8 <span class="font-semibold">&lt;25%</span>.</div>
  </div>
  <div class="p-4 rounded border border-white/10 bg-white/5">
    <div class="text-xs uppercase tracking-wider opacity-60">koszt</div>
    <div class="pt-2">SWE-rebench: Claude Code <span class="font-semibold">58,4%</span> @ $4,91 · Step-3.5-Flash <span class="font-semibold">59,6%</span> @ $0,14. <span class="italic">35× różnicy</span>.</div>
  </div>
  <div class="p-4 rounded border border-white/10 bg-white/5">
    <div class="text-xs uppercase tracking-wider opacity-60">rozkład</div>
    <div class="pt-2">Copilot Arena: wariancja z typu zadania <span class="font-semibold">31%</span>, z języka 6,6%. Średnia to maskuje.</div>
  </div>
  <div class="p-4 rounded border border-white/10 bg-white/5">
    <div class="text-xs uppercase tracking-wider opacity-60">jakość kodu</div>
    <div class="pt-2">AI code (CodeRabbit, 470 PR): <span class="font-semibold">2,74×</span> więcej XSS, +48% duplikacji, −60% refaktoryzacji.</div>
  </div>
</div>

---

# #6 Harness — niewidoczny uczestnik

<div class="pt-4 text-base opacity-80">
  „Claude Code 58%" to nie wynik modelu — to wynik <span class="font-semibold">systemu</span>: model + scaffolding + narzędzia + zarządzanie kontekstem + obsługa błędów.
</div>

<div class="pt-8 grid grid-cols-2 gap-4">
  <div class="p-5 rounded border border-white/10 bg-white/5 text-center">
    <div class="text-xs uppercase tracking-wider opacity-60">standardowy scaffold</div>
    <div class="pt-2 text-4xl font-serif font-semibold">45,9%</div>
  </div>
  <div class="p-5 rounded border border-emerald-400/30 bg-emerald-400/5 text-center">
    <div class="text-xs uppercase tracking-wider opacity-60">wewnątrz Claude Code</div>
    <div class="pt-2 text-4xl font-serif font-semibold text-emerald-400">55,4%</div>
  </div>
</div>

<div class="pt-4 text-center text-base opacity-70">
  Ten sam Claude Opus 4.5 na SWE-bench Pro. <span class="font-semibold">~10 pp</span> — wyłącznie z harness'u. Często więcej niż między pokoleniami modelu.
</div>

<div class="pt-3 text-xs opacity-50 text-center">
  Bonus: 1 issue SWE-bench ≈ 48k tokenów w 40 krokach, ~1 mln tokenów skumulowanie. Wynik nie pokazuje, że agent wydał milion tokenów na dojście do odpowiedzi.
</div>

---

# #8 Monokultura pythonowa

<div class="pt-4 text-base opacity-80">
  Najrygorystyczniejsze benchmarki są wyłącznie <span class="font-semibold">pythonowe</span>.
</div>

<div class="pt-6 grid grid-cols-3 gap-4 text-center text-sm">
  <div class="p-4 rounded border border-white/10 bg-white/5">
    <div class="text-xs uppercase tracking-wider opacity-60">Aider Polyglot</div>
    <div class="pt-2 text-2xl font-serif font-semibold">6</div>
    <div class="text-xs opacity-60">języków</div>
  </div>
  <div class="p-4 rounded border border-white/10 bg-white/5">
    <div class="text-xs uppercase tracking-wider opacity-60">Copilot Arena</div>
    <div class="pt-2 text-2xl font-serif font-semibold">103</div>
    <div class="text-xs opacity-60">ale tylko preferencje, nie pass/fail</div>
  </div>
  <div class="p-4 rounded border border-white/10 bg-white/5">
    <div class="text-xs uppercase tracking-wider opacity-60">MultiPL-E</div>
    <div class="pt-2 text-2xl font-serif font-semibold">22</div>
    <div class="text-xs opacity-60">tłumaczenia HumanEval</div>
  </div>
</div>

<div class="pt-6 text-center text-base opacity-70 max-w-3xl mx-auto">
  TypeScript, Kotlin, Swift, Rust? Publiczne liczby to <span class="italic">proxy</span>, nie pomiar — sygnał jest systematycznie rozmyty, a ty tego nie widzisz.
</div>

---

# #9 Luka percepcyjna

<div class="pt-4 text-base opacity-80">
  Badanie METR RCT — 16 doświadczonych developerów, 246 realnych zadań, kontrolowane środowisko:
</div>

<div class="pt-8 grid grid-cols-2 gap-6">
  <div class="p-5 rounded border border-rose-400/30 bg-rose-400/5 text-center">
    <div class="text-xs uppercase tracking-wider opacity-70">rzeczywistość</div>
    <div class="pt-2 text-4xl font-serif font-semibold text-rose-400">−19%</div>
    <div class="text-xs opacity-70 pt-1">wolniejsi z AI</div>
  </div>
  <div class="p-5 rounded border border-emerald-400/30 bg-emerald-400/5 text-center">
    <div class="text-xs uppercase tracking-wider opacity-70">samoocena</div>
    <div class="pt-2 text-4xl font-serif font-semibold text-emerald-400">+20%</div>
    <div class="text-xs opacity-70 pt-1">„jestem szybszy"</div>
  </div>
</div>

<div class="pt-6 text-center text-xl font-serif">
  Luka percepcyjna: <span class="font-semibold">39 punktów</span>
</div>

<div class="pt-3 text-xs opacity-60 text-center max-w-2xl mx-auto">
  Zastrzeżenia są znaczące (scenariusz bliski najgorszemu dla AI: 5-letni maintainerzy, własna baza kodu), ale zawyżanie samooceny pozostaje odporne na analizę.
</div>

---

# #10 Completion ≠ agentic

<div class="pt-4 text-base opacity-80">
  Większość leaderboardów <span class="italic">konflatuje</span> dwa fundamentalnie różne problemy ewaluacyjne:
</div>

<div class="pt-8 grid grid-cols-2 gap-6">
  <div class="p-5 rounded border border-white/10 bg-white/5">
    <div class="text-xs uppercase tracking-wider opacity-60">code completion</div>
    <div class="pt-2 text-xl font-serif font-semibold">autouzupełnianie inline</div>
    <div class="pt-3 text-sm opacity-70">latency-critical, pojedyncze wywołania, kontekst kursora</div>
  </div>
  <div class="p-5 rounded border border-white/10 bg-white/5">
    <div class="text-xs uppercase tracking-wider opacity-60">agentic eval</div>
    <div class="pt-2 text-xl font-serif font-semibold">planowanie wieloetapowe</div>
    <div class="pt-3 text-sm opacity-70">długie trajektorie, narzędzia, zarządzanie kontekstem</div>
  </div>
</div>

<div class="pt-6 text-center text-base opacity-70">
  Model dominujący na SWE-bench Pro może generować za wolne uzupełnienia inline. Jedna liczba <span class="italic">nie obejmuje obu</span> — ale jest cytowana, jakby obejmowała.
</div>

---

# #11 Atrybucja w multi-agent

<div class="pt-4 text-base opacity-80">
  Stripe mergeuje <span class="font-semibold">&gt;1300 PR-ów tygodniowo</span> z systemu multi-agentowego „Minions". Skala działa.
</div>

<div class="pt-5 text-base opacity-80">
  Ale gdy kod wprowadza buga, <span class="italic">nie ma standardowej metodologii</span> przypisania winy konkretnemu agentowi w łańcuchu.
</div>

<div class="pt-8 grid grid-cols-2 gap-6">
  <div class="p-5 rounded border border-white/10 bg-white/5">
    <div class="text-xs uppercase tracking-wider opacity-60">benchmark</div>
    <div class="pt-2 text-base">ocenia agentów w <span class="font-semibold">izolacji</span></div>
  </div>
  <div class="p-5 rounded border border-white/10 bg-white/5">
    <div class="text-xs uppercase tracking-wider opacity-60">produkcja</div>
    <div class="pt-2 text-base">uruchamia ich w <span class="font-semibold">sekwencji</span> — wyjście jednego jest wejściem drugiego</div>
  </div>
</div>

<div class="pt-6 text-center text-base opacity-70">
  Luka między tymi światami rośnie <span class="italic">szybciej</span> niż adopcja.
</div>

---
layout: center
class: text-center
---

## Co z tego wynika?

<div class="pt-8 max-w-3xl mx-auto text-2xl font-serif leading-relaxed">
  Publiczny benchmark to <span class="text-emerald-400 font-semibold">najsłabszy</span> możliwy sygnał wyboru agenta.
</div>

<div class="pt-6 max-w-2xl mx-auto text-lg opacity-80">
  Nie da się zaufać jednej liczbie — trzeba zbudować <span class="font-semibold">własny</span> benchmark na własnej pracy.
</div>

---
layout: section
---

# Część III
## One-shot to nie wszystko

<!-- TODO: pomost — jednorazowy prompt ≠ realna praca z kodem -->

---

# Co one-shot potrafi, a czego nie

<!-- TODO:
  - potrafi: scaffolding, typowe layouty, znane stacki
  - nie potrafi: długi kontekst domeny, iteracja z feedbackiem, migracje brownfield
-->

---
layout: section
---

# Część IV
## Jak wybrać (własnego) agenta AI

<!-- TODO: meritum prezentacji — framework wyboru -->

---

# Framework wyboru agenta

<!-- TODO: kryteria doboru
  - rodzaj zadania (greenfield / brownfield / debug / refactor)
  - okno kontekstu i jego kontrola
  - narzędzia (MCP, subagenci, hooks)
  - workflow (spec-driven, TDD, review)
  - koszt / prędkość / jakość
-->

---

# Checklista: mój agent-starter

<!-- TODO: praktyczna checklista do zabrania ze sobą -->

---
layout: section
---

# Część V
## 10xbench — co wyszło z benchmarku?

<!-- TODO: wprowadzenie do benchmarku (4 modele, ten sam prompt, ocena) -->

---

# 10xbench — szczegóły benchmarku

<!-- TODO: treść
  - prompt (migracja/stworzenie strony Przeprogramowani.pl, stack Astro+React+Tailwind)
  - 4 modele: Claude Opus 4.6, GPT-5.3-Codex, Kimi K2.5, GLM-4.7
  - 3 próby na model
  - kryteria oceny: Technical Stack, Pages, Content, SEO, Responsive, Code Quality, Functionality
-->

---

# 10xbench — wyniki

<!-- TODO: wykres / tabela wyników + kluczowe obserwacje per model -->

---
layout: section
---

# Część VI
## Wnioski i dyskusja

<!-- TODO: podsumowanie + Q&A -->

---

# Kluczowe wnioski

<!-- TODO: 3–5 bullet pointów na wynos -->

---
layout: center
class: text-center
---

# Dziękuję

<div class="pt-8 space-y-3 text-lg">
  <div>
    <carbon:link class="inline" />
    <a href="https://10xbench.ai" class="ml-2 font-semibold">10xbench.ai</a>
  </div>
  <div class="opacity-70 text-sm">
    Repo: github.com/przeprogramowani/10x-bench
  </div>
</div>

<!-- TODO: kontakt (LinkedIn / X / e-mail) -->

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

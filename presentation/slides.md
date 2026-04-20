---
theme: seriph
title: Nowa prezentacja
info: |
  ## Nowa prezentacja
  Szablon utworzony z użyciem Slidev.
class: text-center
highlighter: shiki
drawings:
  persist: false
transition: slide-left
mdc: true
---

# Nowa prezentacja

Szablon startowy oparty o Slidev + TypeScript

<div class="pt-12">
  <span class="px-2 py-1 rounded bg-white/10">
    Naciśnij spację, aby przejść dalej <carbon:arrow-right />
  </span>
</div>

---
transition: fade-out
---

# Agenda

- Sekcja pierwsza
- Sekcja druga
- Sekcja trzecia

---
layout: two-cols
---

# Lewa kolumna

Treść slajdu po lewej stronie.

::right::

# Prawa kolumna

Treść slajdu po prawej stronie.

---

# Przykład bloku kodu

```ts {all|1-3|5-7}
interface Slide {
  title: string
  body: string
}

const slide: Slide = {
  title: 'Hello', body: 'World'
}
```

---
layout: center
class: text-center
---

# Dziękuję

[Dokumentacja Slidev](https://sli.dev) · [GitHub](https://github.com/slidevjs/slidev)

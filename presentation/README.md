# Presentation

Nowoczesny projekt prezentacji oparty o [Slidev](https://sli.dev) — markdown + Vue + TypeScript.

## Wymagania

- Node.js >= 20

## Instalacja

```bash
cd presentation
npm install
```

## Uruchomienie w trybie dev

```bash
npm run dev
```

Prezentacja uruchomi się pod `http://localhost:3030`.

## Budowa statycznej wersji

```bash
npm run build
```

## Eksport

```bash
npm run export         # PDF (domyślnie)
npm run export:pdf     # PDF
npm run export:pptx    # PowerPoint
```

## Struktura

```
presentation/
├── components/   # globalne komponenty Vue używane w slajdach
├── public/       # statyczne assety (obrazki itp.)
├── snippets/     # fragmenty kodu importowane do slajdów
├── slides.md     # główny plik prezentacji
├── tsconfig.json
└── package.json
```

## Pisanie slajdów

Slajdy rozdzielane są sekwencją `---` w pliku `slides.md`. Każdy slajd może mieć własne frontmatter (layout, theme, transition). Pełna dokumentacja: https://sli.dev/guide/syntax.

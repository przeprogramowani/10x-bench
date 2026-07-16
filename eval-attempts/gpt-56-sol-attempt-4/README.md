# Przeprogramowani.pl

Nowoczesna, statyczna strona Przeprogramowani przygotowana w Astro, React i Tailwind CSS. Projekt jest zoptymalizowany do wdrożenia na Cloudflare Workers lub Cloudflare Pages.

## Uruchomienie

```bash
npm install
npm run dev
```

## Build i wdrożenie

```bash
npm run build
npm run deploy
```

Alternatywnie, na Cloudflare Pages:

```bash
npm run deploy:pages
```

Build trafia do katalogu `dist/`. Konfiguracja dla statycznych assetów Cloudflare znajduje się w `wrangler.jsonc`.

## Struktura

- `/` — strona główna z hero 10xDevs i ofertą kursów
- `/o-nas` — zespół i podejście
- `/podcast` — najnowsze odcinki
- `/youtube` — najnowsze filmy

Treści materiałów są zebrane w `src/data/content.ts`, co ułatwia ich dalszą aktualizację lub podpięcie zewnętrznego API.

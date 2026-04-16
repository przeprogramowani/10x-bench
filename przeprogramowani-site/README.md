# Przeprogramowani.pl — Website

Nowoczesna, responsywna strona projektu Przeprogramowani zbudowana w Astro + React + Tailwind, gotowa do wdrożenia na Cloudflare Pages.

## Strony

- `/` — strona główna z hero 10xDevs
- `/o-nas` — o zespole
- `/podcast` — ostatnie odcinki podcastu
- `/youtube` — ostatnie filmy z kanału YouTube
- `/kursy` — przegląd kursów
- `/kursy/opanuj-frontend` — kurs Opanuj Frontend
- `/kursy/opanuj-typescript` — kurs Opanuj TypeScript

## Uruchomienie lokalnie

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Deployment (Cloudflare Pages)

1. Połącz repozytorium z Cloudflare Pages.
2. Ustaw polecenie build: `npm run build`.
3. Ustaw output directory: `dist`.
4. Framework preset: Astro.

Alternatywnie, deploy przez Wrangler:

```bash
npx wrangler pages deploy dist
```

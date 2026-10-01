# Przeprogramowani.pl — nowoczesny redesign (Astro + React + Tailwind, Cloudflare)

Stack: **Astro 5 (SSR) + React islands + Tailwind v4 + `@astrojs/cloudflare`**.

## Strony
- `/` — hero **10xDevs 4.0**, sekcja kursów (10xDevs / Opanuj Frontend / Opanuj TypeScript), ostatnie odcinki podcastu, ostatnie filmy YouTube, newsletter
- `/o-nas` — Przemek Smyrdek i Marcin Czarkowski, statystyki, zaufali nam
- `/podcast` — 9 prawdziwych ostatnich odcinków (Opanuj.AI + ft. Gość) + wyszukiwarka i filtr audycji (React)
- `/youtube` — 6 ostatnich filmów z kanału + wyszukiwarka (React)
- `/kursy` — szczegóły 3 kursów z prawdziwymi agendami i linkami

Treści oparte o przeprogramowani.pl, opanujfrontend.pl, opanujtypescript.pl i 10xdevs.pl.

## Deploy na Cloudflare
```bash
npm install
npm run build
npx wrangler login
npm run deploy
```
Albo połącz repo z **Cloudflare Pages**: Build command `npm run build`, output `dist`, compatibility date `2025-06-01`.

## Dev
```bash
npm run dev
```

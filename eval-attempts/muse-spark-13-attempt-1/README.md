# Przeprogramowani.pl — redesign (Astro + React + Tailwind, Cloudflare)

Nowoczesna, responsywna strona projektu Przeprogramowani.pl. Dane zebrane z: przeprogramowani.pl, 10xdevs.pl, opanujfrontend.pl, opanujtypescript.pl (stan: wrzesień/październik 2026).

## Strony

- `/` — hero **10xDevs 4.0** + sekcja kursów (10xDevs, Opanuj Frontend, Opanuj TypeScript), teaser podcastu i YouTube, newsletter
- `/o-nas` — Przemek Smyrdek, Marcin Czarkowski, statystyki (7 lat, 8100+, 15k), logotypy firm
- `/podcast` — wyszukiwarka + filtr (Opanuj.AI / ft. Gość), 9 ostatnich odcinków z czasem trwania
- `/youtube` — filtrowana siatka 6 ostatnich filmów (thumbnail `maxresdefault`, link do YouTube)

## Stack

Astro (SSR) + React islands (`client:load` / `client:visible`) + Tailwind. Adapter Cloudflare.

## Start lokalnie

```bash
npm install
npm run dev
npm run build
npm run preview
```

## Wdrożenie na Cloudflare Pages / Workers

1. `npm run build`
2. `npx wrangler login && npm run deploy`
   albo połącz repo z Cloudflare Pages: Build command `npm run build`, output `.dist/` (Astro + adapter cloudflare generuje `_worker.js`).

`wrangler.toml` zawiera minimalną konfigurację (`nodejs_compat`). Ustaw własną domenę w dashboardzie Cloudflare.

## Źródła treści

- https://przeprogramowani.pl, /o-nas, /podcast
- https://10xdevs.pl, https://www.opanujfrontend.pl, https://www.opanujtypescript.pl
- Kanał: https://youtube.com/c/przeprogramowani/videos, Spotify: Opanuj.AI + Przeprogramowani

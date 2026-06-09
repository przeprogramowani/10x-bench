# Przeprogramowani.pl

Nowoczesna, responsywna strona projektu [Przeprogramowani.pl](https://przeprogramowani.pl) — „Szersze spojrzenie na programowanie".

## Strony

- **`/`** — strona główna z hero promującym program **10xDevs**, sekcją kursów (**Opanuj Frontend: AI Edition**, **Opanuj TypeScript**, **10xDevs**), ostatnimi odcinkami podcastu, najnowszymi filmami z YouTube i CTA newslettera
- **`/o-nas`** — misja projektu, sylwetki twórców (Przemek Smyrdek, Marcin Czarkowski), statystyki i partnerzy
- **`/podcast`** — ostatnie odcinki podcastu z rozwijanymi opisami i linkami do Spotify / Apple Podcasts
- **`/youtube`** — najnowsze filmy z kanału YouTube z miniaturkami

## Stack

- [Astro 5](https://astro.build) — statyczny generator (`output: 'static'`)
- [React 19](https://react.dev) — interaktywne komponenty (nawigacja mobilna, lista odcinków, siatka filmów)
- [Tailwind CSS 3](https://tailwindcss.com) — stylowanie

## Rozwój lokalny

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # produkcyjny build do dist/
npm run preview  # podgląd builda
```

## Wdrożenie na Cloudflare

Strona jest w pełni statyczna — gotowa pod **Cloudflare Pages**:

```bash
npm run deploy   # build + wrangler pages deploy dist
```

Alternatywnie podłącz repozytorium w panelu Cloudflare Pages:

- **Build command:** `npm run build`
- **Build output directory:** `dist`

Konfiguracja znajduje się w [wrangler.toml](wrangler.toml).

## Dane

Treści (odcinki podcastu, filmy, biogramy, statystyki) zebrane z oficjalnych źródeł: przeprogramowani.pl, Apple Podcasts i kanału YouTube — zapisane w [src/data/site.ts](src/data/site.ts).

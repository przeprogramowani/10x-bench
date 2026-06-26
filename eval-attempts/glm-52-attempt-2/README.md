# Przeprogramowani.pl

Nowoczesna i responsywna strona projektu Przeprogramowani.pl zbudowana w Astro, React i Tailwind CSS, gotowa do wdrożenia na Cloudflare.

## Stack

- **Astro 5** — static site generator
- **React 19** — komponenty interaktywne
- **Tailwind CSS 3** — stylowanie
- **Cloudflare** — hosting (przez `@astrojs/cloudflare`)

## Strony

- `/` — strona główna z hero (10xDevs), kursy (Opanuj Frontend, Opanuj TypeScript, 10xDevs), sekcje YouTube i newsletter
- `/o-nas` — o zespole (Przemek Smyrdek, Marcin Czarkowski)
- `/podcast` — Opanuj.AI Podcast i Przeprogramowani ft. Gość
- `/youtube` — najnowsze filmy z kanału

## Uruchomienie

```bash
npm install
npm run dev      # serwer deweloperski
npm run build    # build produkcyjny
npm run preview  # podgląd builda
```

## Wdrożenie na Cloudflare

Strona korzysta z adaptera `@astrojs/cloudflare`. Po zbudowaniu (`npm run build`), wdróż używając `wrangler`:

```bash
npx wrangler deploy
```

Konfiguracja znajduje się w `wrangler.toml`.

## Struktura

```
src/
├── components/   # Header, Footer, Hero, Sections, Brands
├── data/         # content.ts — dane o kursach, podcastach, filmach, zespole
├── layouts/     # BaseLayout.astro
├── pages/        # index, o-nas, podcast, youtube, 404
└── styles/       # global.css
```

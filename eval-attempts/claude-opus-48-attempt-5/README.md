# Przeprogramowani.pl — strona projektu

Nowoczesna, responsywna strona projektu **Przeprogramowani** zbudowana w **Astro + React + Tailwind CSS**. Gotowa do wdrożenia na **Cloudflare Pages**.

## Sekcje

- **Strona główna** (`/`) — hero z flagowym programem **10xDevs 4.0**, przegląd kursów, podcasty, YouTube, newsletter
- **O nas** (`/o-nas`) — historia, wartości, założyciele (Przemek Smyrdek, Marcin Czarkowski), klienci
- **Kursy** (`/kursy`) — pełne opisy: **10xDevs**, **Opanuj Frontend**, **Opanuj TypeScript**
- **Podcast** (`/podcast`) — **Opanuj.AI** oraz **Przeprogramowani ft. Gość** z ostatnimi odcinkami (z realnych feedów RSS)
- **YouTube** (`/youtube`) — najnowsze filmy z osadzonym odtwarzaczem (realne, zweryfikowane ID)

## Stack

- [Astro 5](https://astro.build) — statyczny generator, `output: 'static'`
- [React 19](https://react.dev) — komponenty interaktywne (nawigacja mobilna, newsletter) via wyspy Astro
- [Tailwind CSS 3.4](https://tailwindcss.com) — stylowanie
- TypeScript

## Rozwój

```bash
npm install      # instalacja zależności
npm run dev      # serwer deweloperski → http://localhost:4321
npm run build    # build produkcyjny → ./dist
npm run preview  # podgląd builda
```

## Wdrożenie na Cloudflare Pages

Projekt buduje się do w pełni statycznego katalogu `dist` — nie wymaga adaptera SSR.

**Dashboard Cloudflare Pages:**

| Ustawienie | Wartość |
| --- | --- |
| Framework preset | Astro |
| Build command | `npm run build` |
| Build output directory | `dist` |
| Node version | 18+ (zalecane 20/22) |

**Wrangler (CLI):**

```bash
npm run build
npx wrangler pages deploy dist --project-name=przeprogramowani
```

Nagłówki bezpieczeństwa i cache oraz przyjazne przekierowania są zdefiniowane w
`public/_headers` i `public/_redirects` (natywnie obsługiwane przez Cloudflare Pages).

## Treści

Dane napędzające stronę żyją w `src/data/` (kursy, podcasty, filmy, zespół). Odcinki podcastów
i filmy pochodzą z oficjalnych feedów RSS/oEmbed — ID filmów YouTube zostały zweryfikowane.

## Struktura

```
src/
├── components/   # Header, Footer, Hero, karty, Newsletter
├── data/         # źródła treści (TypeScript)
├── layouts/      # Layout.astro (SEO, <head>, reveal)
├── pages/        # index, o-nas, kursy, podcast, youtube, 404
└── styles/       # global.css (Tailwind + warstwy)
public/           # favicon, og, robots, sitemap, _headers, _redirects
```

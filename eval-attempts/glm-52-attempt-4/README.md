# Przeprogramowani.pl — Strona projektu

Nowoczesna, responsywna strona Przeprogramowani.pl zbudowana na podstawie danych pobranych z aktualnej witryny (czerwiec 2026).

## Stack

- **Astro 5** — generator stron statycznych
- **React 19** — komponenty interaktywne (Hero, Nav, VideoGrid, PodcastList, Newsletter, Brands)
- **Tailwind CSS 3** — stylowanie
- **@astrojs/cloudflare** — adapter gotowy do wdrożenia na Cloudflare Pages

## Strony

- `/` — strona główna z hero (10xDevs 3.0), sekcją kursów (Opanuj Frontend, Opanuj TypeScript, 10xDevs), podcastami, filmami YouTube, newsletterem i markami
- `/o-nas` — zespół (Przemek Smyrdek, Marcin Czarkowski), misja, marki
- `/podcast` — Opanuj.AI Podcast i Przeprogramowani ft. Gość z najnowszymi odcinkami, platformy
- `/youtube` — najnowsze filmy z kanału YouTube

## Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build      # build statyczny do ./dist
npm run preview    # podgląd builda
```

## Wdrożenie na Cloudflare

Strona jest prerenderowana do statycznego HTML i gotowa na Cloudflare Pages.

### Opcja A — Cloudflare Pages (zalecane)

1. Połącz repozytorium z Cloudflare Pages
2. Build command: `npm run build`
3. Build output directory: `dist`

### Opcja B — Wrangler CLI

```bash
npm run deploy     # build + wrangler pages deploy ./dist
```

Konfiguracja w `wrangler.toml`.

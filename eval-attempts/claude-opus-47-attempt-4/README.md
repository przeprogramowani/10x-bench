# Przeprogramowani.pl

Nowoczesna, responsywna strona projektu Przeprogramowani.pl zbudowana w Astro + React + Tailwind, gotowa do wdrożenia na Cloudflare Pages.

## Strony

- `/` — Strona główna z hero 10xDevs, sekcją kursów, podcastem, YouTube i newsletterem
- `/o-nas` — Historia, zespół, wartości i kamienie milowe
- `/podcast` — Opanuj.AI Podcast z ostatnimi odcinkami i linkami do platform
- `/youtube` — Kanał YouTube z ostatnimi filmami

## Stack

- **Astro 4.x** — static site generator, SEO-friendly
- **React 18** — interaktywne komponenty (theme toggle, mobile menu)
- **Tailwind CSS 3.x** — design system z brandową paletą i ciemnym motywem
- **TypeScript** — bezpieczeństwo typów
- **Cloudflare Pages** — static output z `_headers`, gotowe do `wrangler pages deploy`

## Szybki start

```bash
npm install
npm run dev       # serwer developerski na http://localhost:4321
npm run build     # produkcyjny build do ./dist
npm run preview   # podgląd produkcji lokalnie
```

## Wdrożenie na Cloudflare Pages

### Opcja A — przez panel Cloudflare

1. Połącz repozytorium z projektem Cloudflare Pages.
2. **Build command:** `npm run build`
3. **Build output directory:** `dist`
4. **Node version:** 20 lub nowszy.

### Opcja B — przez Wrangler CLI

```bash
npm install -g wrangler
npm run build
npm run deploy    # wrangler pages deploy dist --project-name=przeprogramowani
```

Plik `wrangler.toml` konfiguruje projekt, a `public/_headers` ustawia bezpieczne nagłówki i agresywny cache dla statycznych assetów.

## Struktura

```
src/
├── components/     # Header, Footer, Hero, CourseCard, PodcastPreview, YouTubePreview, ...
├── data/           # courses, podcast, youtube, team, site (zawartość)
├── layouts/        # BaseLayout z SEO i theme init
├── pages/          # index, o-nas, podcast, youtube, 404
└── styles/         # global.css z Tailwindem i warstwami komponentów
public/
├── _headers        # CSP, cache, security
├── favicon.svg
└── robots.txt
```

Wszystkie treści (kursy, odcinki podcastu, filmy) są w `src/data/*.ts` i łatwo je podmienić bez dotykania layoutu.

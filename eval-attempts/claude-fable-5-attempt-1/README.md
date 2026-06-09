# Przeprogramowani.pl

Nowoczesna, responsywna strona projektu [Przeprogramowani.pl](https://przeprogramowani.pl) — „Szersze spojrzenie na programowanie".

## Stack

- **Astro 5** — statyczny generator stron (`output: 'static'`)
- **React 19** — komponenty interaktywne (nawigacja z menu mobilnym)
- **Tailwind CSS 3.4** — stylowanie
- **TypeScript** — typowane dane (kursy, odcinki, filmy)

## Struktura

```
src/
├── components/      # Navbar (React), Footer, CourseCard, SectionHeading, NewsletterCta
├── data/            # site.ts, courses.ts, episodes.ts, videos.ts — treść strony
├── layouts/         # Layout.astro — wspólny layout z SEO (OG, canonical)
└── pages/
    ├── index.astro      # Hero z 10xDevs, kursy, ostatnie odcinki i filmy
    ├── o-nas.astro      # Twórcy, wartości, historia projektu, kontakt
    ├── podcast.astro    # Ostatnie odcinki + linki do Spotify/Apple Podcasts
    ├── youtube.astro    # Najnowsze filmy + link do kanału
    └── 404.astro
```

## Rozwój lokalny

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # produkcyjny build do ./dist
npm run preview   # podgląd builda
```

## Wdrożenie na Cloudflare

Strona jest w pełni statyczna — gotowa pod **Cloudflare Pages** (plik `wrangler.toml` w repo).

### Opcja 1: Wrangler CLI

```bash
npm run deploy
# czyli: astro build && wrangler pages deploy dist
```

### Opcja 2: Cloudflare Dashboard (Git)

1. Podłącz repozytorium w **Workers & Pages → Create → Pages**
2. Build command: `npm run build`
3. Build output directory: `dist`

Aktualizacja treści (odcinki, filmy, kursy) sprowadza się do edycji plików w `src/data/`.

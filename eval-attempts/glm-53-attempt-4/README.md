# Przeprogramowani.pl

Nowoczesna, responsywna strona projektu Przeprogramowani — szersze spojrzenie na programowanie.

## Stack

- **Astro 5** — statyczny generator stron (output: `static`)
- **React 19** — interaktywne komponenty (Header, zakładki podcastów)
- **Tailwind CSS 3.4** — stylowanie
- **@astrojs/sitemap** — sitemap dla SEO

## Struktura

```
src/
├── components/        # React (Header, CourseCard, EpisodeCard, PodcastTabs, VideoCard, Icons)
│                      # oraz Astro (Footer, Stats, Newsletter, BrandsMarquee, SectionHeading)
├── data/              # Treści strony: kursy, podcasty, filmy, statystyki, założyciele
├── layouts/           # BaseLayout — SEO, fonty, nagłówek, stopka
├── pages/             # Strony: /, /o-nas, /podcast, /youtube
└── styles/            # Globalny CSS (Tailwind + utilities)
```

## Strony

| Ścieżka     | Opis                                                              |
| ----------- | ----------------------------------------------------------------- |
| `/`         | Hero z sekcją kursów (10xDevs, Opanuj Frontend, Opanuj TypeScript), ostatnie odcinki podcastu, filmy, newsletter |
| `/o-nas`    | Misja, założyciele, obszary działalności, statystyki, kontakt    |
| `/podcast`  | Oba pokazy (Opanuj.AI Podcast, ft. Gość) z ostatnimi odcinkami    |
| `/youtube`  | Najnowsze filmy z kanału + opis zawartości kanału                 |

## Rozwój lokalny

```bash
npm install
npm run dev        # http://localhost:4321
```

## Build i podgląd produkcyjny

```bash
npm run build      # statyczny output w ./dist
npm run preview
```

Sprawdzenie typów: `npm run check`.

## Wdrożenie na Cloudflare

Projekt jest w pełni statyczny (`output: 'static'`), gotowy do wdrożenia na **Cloudflare Pages**.

### Opcja 1 — Wrangler CLI

```bash
npm run deploy     # = npm run build && wrangler pages deploy dist
```

### Opcja 2 — Połączenie z Gitem (Cloudflare Dashboard)

1. W Cloudflare → Workers & Pages → Create → Pages → Connect to Git
2. Wybierz repozytorium
3. Ustawienia build:
   - **Framework preset:** Astro
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
4. Deploy

Konfiguracja Cloudflare znajduje się w `wrangler.toml` (`pages_build_output_dir = "./dist"`), a nagłówki bezpieczeństwa w `public/_headers`.

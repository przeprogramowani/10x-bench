# Przeprogramowani.pl

Nowoczesna, responsywna strona projektu [Przeprogramowani.pl](https://przeprogramowani.pl) — szersze spojrzenie na programowanie.

## Stack

- **Astro 5** — statyczny generator stron (`output: 'static'`)
- **React 19** — interaktywne komponenty (nawigacja, lista odcinków podcastu)
- **Tailwind CSS 3.4** — stylowanie
- **TypeScript** — typowane dane i komponenty

## Strony

| Ścieżka | Opis |
|---|---|
| `/` | Strona główna — hero z 10xDevs, sekcja kursów (10xDevs, Opanuj Frontend, Opanuj TypeScript), ostatnie odcinki podcastu i filmy YouTube |
| `/o-nas` | Historia projektu, sylwetki prowadzących, partnerzy |
| `/podcast` | Ostatnie odcinki podcastu z opisami i linkami do platform |
| `/youtube` | Ostatnie filmy z kanału YouTube |

## Rozwój lokalny

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # produkcyjny build do ./dist
npm run preview  # podgląd builda
```

## Wdrożenie na Cloudflare

Strona jest w pełni statyczna — gotowa pod **Cloudflare Pages** bez dodatkowych adapterów.

### Opcja 1: Wrangler CLI

```bash
npm run build
npx wrangler pages deploy dist
```

Konfiguracja znajduje się w `wrangler.toml` (`pages_build_output_dir = "dist"`).

### Opcja 2: Git integration (Cloudflare Dashboard)

1. Podepnij repozytorium w Cloudflare Pages
2. Build command: `npm run build`
3. Build output directory: `dist`

## Struktura

```
src/
├── components/   # Navbar (React), EpisodeList (React), VideoGrid (React), CourseCard, Footer
├── data/         # episodes.ts, videos.ts, courses.ts — treści strony
├── layouts/      # Layout.astro — wspólny szkielet z SEO meta
└── pages/        # index, o-nas, podcast, youtube, 404
```

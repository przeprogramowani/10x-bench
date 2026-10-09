# Przeprogramowani.pl

Nowoczesna i responsywna strona projektu [Przeprogramowani.pl](https://przeprogramowani.pl) — kursy, podcasty i materiały edukacyjne dla ambitnych programistów.

## Stack

- **[Astro](https://astro.build/)** — strony, layouty i SEO
- **[React](https://react.dev/)** — interaktywne wyspy (nawigacja mobilna, zakładki podcastów)
- **[Tailwind CSS](https://tailwindcss.com/)** — style (v4, przez `@tailwindcss/vite`)
- **[Cloudflare](https://www.cloudflare.com/)** — hosting (Workers static assets) + `@astrojs/cloudflare`

## Struktura

```
src/
  components/   # komponenty Astro + wyspy React (react/)
  data/         # treści: kursy, podcasty, filmy, zespół
  layouts/      # główny layout
  pages/        # strony: /, /o-nas, /podcast, /youtube, /kursy
  styles/       # global.css (Tailwind + design system)
public/         # assety statyczne (favicon, zdjęcia, og-image)
wrangler.jsonc  # konfiguracja Cloudflare Workers
```

## Strony

| Strona | Adres |
| --- | --- |
| Start (hero z 10xDevs + sekcja kursów) | `/` |
| O nas | `/o-nas` |
| Podcast (obie serie: Przeprogramowani ft. Gość i Opanuj.AI) | `/podcast` |
| YouTube (ostatnie filmy z kanału) | `/youtube` |
| Kursy (10xDevs, Opanuj Frontend, Opanuj TypeScript) | `/kursy` |

## Development

```bash
npm install
npm run dev        # serwer deweloperski (http://localhost:4321)
npm run build      # build produkcyjny do dist/
npm run preview    # podgląd buildu lokalnie
npm run check      # kontrola typów (astro check)
```

## Deploy na Cloudflare

Strona jest w pełni statyczna i deployuje się jako **Cloudflare Workers (static assets)** przez Wrangler:

```bash
npm ci
npm run build
npx wrangler deploy          # deploy (skrypt: npm run deploy)
```

Konfiguracja znajduje się w `wrangler.jsonc` (`assets.directory: ./dist`). Build produkuje katalog `dist/`, który Wrangler publikuje jako statyczne assety Workera.

Weryfikacja deployu bez publikowania (bez poświadczeń Cloudflare):

```bash
npm run deploy:dry-run       # npm run build && wrangler deploy --dry-run
```

Lokalny podgląd środowiska Cloudflare:

```bash
npx wrangler dev
```

## Źródła danych

Treści (odcinki podcastów, filmy, kursy, bio) pochodzą z oficjalnych źródeł: przeprogramowani.pl, Spotify (show `3yVvOAXSYq6sQB02w4A4wo` i `3D6LmchBdoqL2sWkQjvWOy`), Apple Podcasts, RSS (Anchor) oraz kanału YouTube `@Przeprogramowani`.

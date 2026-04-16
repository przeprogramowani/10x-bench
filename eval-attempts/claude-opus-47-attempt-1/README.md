# Przeprogramowani.pl

Nowoczesna, statyczna strona projektu Przeprogramowani.pl — zbudowana w Astro, React i Tailwind, gotowa do deploymentu na Cloudflare Pages.

## Stack

- **Astro 5** — static site generator
- **React 19** — interaktywne komponenty (MobileMenu, PodcastFilter, NewsletterForm)
- **Tailwind CSS 3** — styling
- **TypeScript**
- **Wrangler** — deployment na Cloudflare Pages

## Struktura

- `src/pages/` — strony (`/`, `/o-nas`, `/podcast`, `/youtube`, `/404`)
- `src/components/` — komponenty Astro i React
- `src/data/` — dane (kursy, odcinki podcastu, filmy, zespół)
- `src/layouts/Layout.astro` — wspólny layout z navbarem, footerem i SEO
- `src/styles/global.css` — style globalne + design system w Tailwind

## Uruchomienie lokalne

```bash
npm install
npm run dev
```

Otwórz [http://localhost:4321](http://localhost:4321).

## Build produkcyjny

```bash
npm run build
npm run preview
```

Output trafia do katalogu `dist/`.

## Deploy na Cloudflare Pages

### Opcja A: Wrangler CLI

```bash
npm run deploy
# lub ręcznie:
npx wrangler pages deploy dist --project-name=przeprogramowani
```

### Opcja B: Cloudflare Dashboard (automatyczny)

1. Połącz repozytorium w Cloudflare Pages.
2. **Build command:** `npm run build`
3. **Build output directory:** `dist`
4. **Node version:** 20+
5. Framework preset: **Astro** (lub None — działa też z custom).

Plik `wrangler.toml` wskazuje `pages_build_output_dir = "dist"`, a `public/_headers` dodaje
bezpieczne nagłówki HTTP i cache dla zasobów statycznych.

## Strony

| Ścieżka      | Zawartość                                                             |
|--------------|-----------------------------------------------------------------------|
| `/`          | Hero z 10xDevs, kursy, najnowsze odcinki podcastu, YouTube, newsletter|
| `/o-nas`     | Misja, zespół, partnerzy, CTA kontaktu                                |
| `/podcast`   | Pełna lista odcinków z filtrami (cykl, wyszukiwanie)                  |
| `/youtube`   | Filmy z kategoriami i miniaturkami generowanymi gradientem            |
| `/404`       | Błąd 404 spójny z resztą UI                                           |

## Design system

- Kolory: `brand` (fiolet) + `accent` (pomarańcz), ciemne tło `ink`
- Typografia: Inter (body) + Space Grotesk (display) + JetBrains Mono
- Komponenty: `.card`, `.btn-primary`, `.btn-secondary`, `.chip`, `.section-heading`, `.text-gradient`

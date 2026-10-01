# Przeprogramowani.pl

Nowoczesna, responsywna strona projektu **Przeprogramowani** — szersze spojrzenie na programowanie.

## Stack

- **Astro 5** — statyczny site generator (`output: 'static'`)
- **React 19** — komponenty interaktywne (nawigacja, karty, zakładki podcastów)
- **Tailwind CSS 3.4** — stylowanie

## Struktura

```
src/
├── pages/
│   ├── index.astro      # Hero z kursami (10xDevs, Opanuj Frontend, Opanuj TypeScript)
│   ├── o-nas.astro      # O nas — założyciele, wartości, statystyki
│   ├── podcast.astro    # Podcast — ostatnie odcinki (Opanuj.AI, ft. Gość)
│   ├── youtube.astro    # YouTube — ostatnie filmy
│   └── 404.astro
├── components/         # Header, Footer, karty kursów/odcinków/filmów, zakładki
├── data/               # Treści strony (kursy, podcasty, YouTube, O nas)
├── layouts/            # BaseLayout (SEO, fonty, meta)
└── styles/             # Globalny CSS (Tailwind)
```

## Rozwój lokalne

```bash
npm install
npm run dev        # http://localhost:4321
```

## Build i podgląd produkcyjny

```bash
npm run build      # generuje ./dist
npm run preview
```

## Wdrożenie na Cloudflare

Strona jest w pełni statyczna (`output: 'static'`) i gotowa do wdrożenia na Cloudflare.

### Opcja A: Cloudflare Workers (zalecana)

```bash
npm run deploy    # build + wrangler deploy
```

Wymaga zalogowania `npx wrangler login`. Konfiguracja w `wrangler.jsonc`:

- `assets.directory: ./dist` — serwowanie plików statycznych
- `not_found_handling: "404-page"` — strona 404

### Opcja B: Cloudflare Pages

1. Podłącz repozytorium do Cloudflare Pages
2. Build command: `npm run build`
3. Output directory: `dist`

### Opcja C: Pages CLI

```bash
npx wrangler pages deploy dist
```

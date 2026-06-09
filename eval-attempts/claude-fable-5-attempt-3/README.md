# Przeprogramowani.pl — strona projektu

Nowoczesna, responsywna strona Przeprogramowani.pl zbudowana w **Astro 5 + React 19 + Tailwind CSS 3**, gotowa do wdrożenia na Cloudflare.

## Strony

- `/` — strona główna: hero z 10xDevs, kursy (Opanuj Frontend, Opanuj TypeScript, 10xDevs), zajawki podcastu i YouTube, newsletter
- `/o-nas` — misja, sylwetki założycieli (Przemek Smyrdek, Marcin Czarkowski), wartości, partnerzy
- `/podcast` — Opanuj.AI Podcast i Przeprogramowani ft. Gość z ostatnimi odcinkami (przełącznik React)
- `/youtube` — ostatnie filmy z kanału z odtwarzaczem inline (youtube-nocookie)

## Rozwój lokalny

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # statyczny build do ./dist
npm run preview  # podgląd builda
```

## Wdrożenie na Cloudflare

Strona jest w pełni statyczna (`output: 'static'`), więc działa zarówno na **Cloudflare Pages**, jak i **Workers Static Assets**.

### Wariant 1: Wrangler (Workers Static Assets)

Konfiguracja jest w `wrangler.jsonc`:

```bash
npm run build
npx wrangler deploy
```

### Wariant 2: Cloudflare Pages

```bash
npm run deploy   # astro build + wrangler pages deploy dist
```

Lub przez dashboard Cloudflare Pages (Git integration):

- **Build command:** `npm run build`
- **Build output directory:** `dist`

## Struktura

```
src/
  data/        # kursy, odcinki podcastów, filmy YouTube
  components/  # Header (React), Footer, CourseCard, PodcastShows (React), VideoGrid (React)
  layouts/     # Layout.astro (SEO, OG, fonty)
  pages/       # index, o-nas, podcast, youtube, 404
  styles/      # global.css (Tailwind)
```

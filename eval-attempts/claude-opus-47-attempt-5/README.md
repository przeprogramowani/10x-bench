# Przeprogramowani.pl

Nowoczesna, responsywna strona projektu Przeprogramowani.pl zbudowana na stacku **Astro + React + Tailwind CSS**, przygotowana do wdrożenia na **Cloudflare Pages**.

## Co jest w środku

- **`/`** — strona główna z hero dedykowanym programowi 10xDevs oraz teaserami kursów, podcastu i YouTube
- **`/o-nas`** — zespół, wartości, historia projektu
- **`/kursy`** — pełna oferta kursów (10xDevs, Opanuj Frontend, Opanuj TypeScript) + FAQ
- **`/podcast`** — wszystkie ostatnie odcinki podcastu
- **`/youtube`** — siatka najnowszych filmów z filtrowaniem kategorii

## Stack

- **Astro 5** — statyczny output, idealnie pod Cloudflare Pages
- **React 19** — komponenty interaktywne (filtry YouTube, karty kursów, rozwijane odcinki)
- **Tailwind CSS 3** — utility-first styling z motywem marki
- **TypeScript** — type safety w całym projekcie
- **Wrangler** — deploy na Cloudflare

## Uruchomienie lokalne

```bash
npm install
npm run dev          # http://localhost:4321
npm run build        # buduje statyczny output do ./dist
npm run preview      # lokalny preview buildu
```

## Wdrożenie na Cloudflare Pages

### Opcja 1 — Git Integration (zalecana)

1. Połącz repo z Cloudflare Pages w panelu.
2. Ustaw:
   - **Framework preset:** Astro
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
   - **Node version:** `20`
3. Każdy push do `main` wdroży nową wersję.

### Opcja 2 — Wrangler CLI

```bash
npm run build
npx wrangler pages deploy dist --project-name=przeprogramowani
```

Plik `wrangler.toml` jest już skonfigurowany. Nagłówki bezpieczeństwa i cache'owania są w `public/_headers`.

## Struktura

```
src/
├── components/       # Komponenty Astro + React (Header, Hero, CourseCard, VideoGrid, ...)
├── data/             # Źródła danych (site, courses, episodes, videos)
├── layouts/          # BaseLayout z SEO, OG, skip-link
├── pages/            # Routing (index, o-nas, kursy, podcast, youtube)
└── styles/           # Globalne style (Tailwind layers)
public/
├── _headers          # Cloudflare — security + cache
├── favicon.svg
├── og-image.svg
└── robots.txt
```

## Dane

Dane o odcinkach, filmach i kursach żyją w `src/data/*.ts`. Aby dodać nowy odcinek podcastu lub film, wystarczy dopisać obiekt do odpowiedniej tablicy — strona zaktualizuje się przy następnym buildzie.

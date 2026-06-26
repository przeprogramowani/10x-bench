# Przeprogramowani.pl — Strona projektu

Nowoczesna, responsywna strona projektu Przeprogramowani.pl zbudowana w stacku **Astro + React + Tailwind CSS**.

## Strony

- **`/`** — Strona główna z hero, sekcją kursów (Opanuj Frontend, Opanuj TypeScript, 10xDevs), newsletterem, najnowszymi filmami i partnerami
- **`/o-nas`** — O nas: twórcy, statystyki, misja, partnerzy
- **`/podcast`** — Podcast z ostatnimi odcinkami (Opanuj.AI Podcast, Przeprogramowani ft. Gość) i platformami
- **`/youtube`** — YouTube z ostatnimi filmami

## Stack

- **Astro 5** (static output) — generowanie statyczne, optymalna wydajność
- **React 19** — komponenty interaktywne (CourseCard, VideoCard, PodcastCard), renderowane po stronie serwera
- **Tailwind CSS 3** — stylowanie z custom design systemem (dark theme)

## Rozwój

```bash
npm install
npm run dev      # serwer deweloperski na http://localhost:4321
npm run build    # build produkcyjny do ./dist
npm run preview  # podgląd buildu
```

## Wdrożenie na Cloudflare Pages

Projekt jest gotowy do wdrożenia na Cloudflare Pages jako statyczna strona.

### Przez dashboard Cloudflare

1. Połącz repozytorium w Cloudflare Pages
2. Ustaw:
   - **Framework preset:** Astro
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
3. Wdróż

### Przez Wrangler CLI

```bash
npm install -g wrangler
wrangler pages deploy dist --project-name przeprogramowani
```

### Pliki konfiguracyjne Cloudflare

- `public/_headers` — nagłówki bezpieczeństwa i cache
- `public/_redirects` — przekierowania (w tym 404)

## Struktura

```
src/
  components/    # Nav, Footer (Astro) + CourseCard, VideoCard, PodcastCard (React)
  data/site.ts   # dane strony (treści, kursy, filmy, podcasty)
  layouts/       # Layout.astro
  pages/         # index, o-nas, podcast, youtube, 404
  styles/        # global.css
```

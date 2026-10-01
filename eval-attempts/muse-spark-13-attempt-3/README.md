# Przeprogramowani.pl — Astro + React + Tailwind (Cloudflare)

Nowoczesna, responsywna strona projektu Przeprogramowani.pl (koncepcja).

## Strony
- `/` — hero **10xDevs 4.0**, sekcja kursów (Opanuj Frontend, Opanuj TypeScript, 10xDevs), YouTube, podcast, newsletter
- `/o-nas` — Przemek Smyrdek i Marcin Czarkowski, misja, zaufali nam
- `/podcast` — ostatnie odcinki Opanuj.AI + ft. Gość (zakładki + wyszukiwarka, React)
- `/youtube` — ostatnie filmy (filtrowanie + odtwarzacz inline, React)

## Stack
Astro 5 (SSR), React 19 (wyspy: Navbar, Hero, Courses, PodcastList, VideoGrid, NewsletterForm), Tailwind 3.

## Lokale
```bash
npm install
npm run dev
npm run build && npm run preview
```

## Wdrożenie na Cloudflare Pages
1. `npx wrangler login`
2. `npm run build`
3. `npx wrangler pages deploy dist --project-name przeprogramowani`
   lub podepnij repo w dashboardzie Pages: Build `npm run build`, output `dist`, Node 22.
4. Adapter `@astrojs/cloudflare` (output: server) — `wrangler.toml` już w repo.

Źródła treści: przeprogramowani.pl (strona główna, /o-nas, /podcast), kanał YouTube @przeprogramowani, Spotify.

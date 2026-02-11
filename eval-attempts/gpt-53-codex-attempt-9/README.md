# Przeprogramowani.pl - Astro + React + Tailwind

Nowoczesna, responsywna strona projektu Przeprogramowani z podstronami:

- `/` - strona glowna z hero dla `10xDevs`
- `/o-nas` - informacje o projekcie i founderach
- `/podcast` - ostatnie odcinki podcastow
- `/youtube` - ostatnie filmy z YouTube

## Stack

- Astro 5
- React 19 (mobilna nawigacja)
- Tailwind CSS 4
- Adapter Cloudflare (`@astrojs/cloudflare`)

## Skad pochodza dane

- YouTube: oficjalny feed kanalu Przeprogramowani
- Podcast: dane z oficjalnych stron Spotify for Podcasters (`window.__STATE__`)
- Tresci kursow: oficjalne strony `10xdevs.pl`, `opanujfrontend.pl`, `opanujtypescript.pl`

W kodzie dodane sa fallbacki, wiec strona renderuje sie nawet przy chwilowych problemach z zewnetrznymi zrodlami.

## Development

```bash
npm install
npm run dev
```

## Build i deploy (Cloudflare)

```bash
npm run build
npm run deploy
```

Konfiguracja Workera znajduje sie w `wrangler.jsonc`.

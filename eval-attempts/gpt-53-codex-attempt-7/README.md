# Przeprogramowani.pl - Astro + React + Tailwind

Nowoczesna, responsywna strona projektu Przeprogramowani.pl przygotowana pod wdrożenie na Cloudflare Workers.

## Stack

- Astro 5
- React 19 (nawigacja mobilna)
- Tailwind CSS 4
- Adapter Cloudflare (`@astrojs/cloudflare`)

## Sekcje

- `/` - Hero 10xDevs + kursy Opanuj Frontend i Opanuj TypeScript + podgląd najnowszych treści
- `/o-nas` - opis działalności i twórców
- `/podcast` - ostatnie odcinki podcastu
- `/youtube` - ostatnie filmy YouTube

## Dane z sieci

Treści dynamiczne są pobierane na serwerze z oficjalnych feedów:

- Podcast RSS: `https://anchor.fm/s/c72d808/podcast/rss`
- YouTube Atom: `https://www.youtube.com/feeds/videos.xml?channel_id=UCb2Y3vMeD6N4WDt5Acw7Arw`

W przypadku chwilowego braku dostępu do feedu działa fallback z ostatnimi wpisami.

## Uruchomienie lokalnie

```bash
npm install
npm run dev
```

## Build produkcyjny

```bash
npm run build
```

## Wdrożenie na Cloudflare

1. Zbuduj projekt: `npm run build`
2. Wdróż Worker z katalogu projektu:

```bash
npx wrangler deploy
```

Konfiguracja Worker jest w `wrangler.jsonc`, a entrypoint generuje Astro do `dist/_worker.js/index.js`.

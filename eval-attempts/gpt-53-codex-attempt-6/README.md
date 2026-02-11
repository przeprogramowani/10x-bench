# Przeprogramowani.pl - Astro + React + Tailwind

Nowoczesna i responsywna strona projektu Przeprogramowani z podstronami:
- `/` (hero z 10xDevs + sekcja kursów)
- `/o-nas`
- `/podcast` (ostatnie odcinki)
- `/youtube` (ostatnie filmy)

## Stack
- Astro 5
- React 19
- Tailwind CSS 4
- `@astrojs/cloudflare` (deploy na Cloudflare Workers)

## Dane z sieci
Treści i linki pobierane z oficjalnych źródeł:
- https://przeprogramowani.pl/o-nas
- https://przeprogramowani.pl/podcast
- https://www.opanujfrontend.pl
- https://www.opanujtypescript.pl
- https://10xdevs.pl
- Podcast RSS: https://anchor.fm/s/c72d808/podcast/rss
- YouTube RSS: https://www.youtube.com/feeds/videos.xml?channel_id=UCb2Y3vMeD6N4WDt5Acw7Arw

## Uruchomienie lokalne
```bash
npm install
npm run dev
```

## Build
```bash
npm run build
```

## Deploy na Cloudflare
1. Zbuduj projekt:
```bash
npm run build
```
2. Wdróż worker (z `wrangler.toml`):
```bash
npx wrangler deploy
```

## Kontrola jakości
```bash
npm run check
```

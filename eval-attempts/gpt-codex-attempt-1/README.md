# Przeprogramowani - Astro + React + Tailwind

Nowoczesna, responsywna strona projektu Przeprogramowani przygotowana w stacku:
- Astro 5
- React 19
- Tailwind CSS 4
- Adapter Cloudflare (`@astrojs/cloudflare`)

## Strony
- `/` - hero z 10xDevs + sekcja kursów + podgląd najnowszych materiałów
- `/o-nas`
- `/podcast` (najnowsze odcinki)
- `/youtube` (najnowsze filmy)

## Zrodla danych
- Podcast RSS: `https://anchor.fm/s/c72d808/podcast/rss`
- YouTube RSS (Przeprogramowani):
  `https://www.youtube.com/feeds/videos.xml?channel_id=UCb2Y3vMeD6N4WDt5Acw7Arw`

Aplikacja pobiera feedy po stronie serwera (Cloudflare runtime) i ma fallback na dane statyczne,
jesli zrodlo chwilowo nie odpowiada.

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
1. Utworz KV Namespace i podmien `YOUR_KV_NAMESPACE_ID` w `wrangler.jsonc`.
2. Zbuduj aplikacje:
```bash
npm run build
```
3. Wdroz:
```bash
npx wrangler deploy
```

## Uwagi
- Konfiguracja Astro dla Cloudflare jest w `astro.config.mjs` (`output: "server"`).
- `wrangler.jsonc` jest gotowy do deployu po uzupelnieniu ID KV.

# Przeprogramowani Landing (Astro + React + Tailwind)

Nowoczesna i responsywna strona projektu Przeprogramowani.pl z podstronami:

- `/` (hero 10xDevs + kursy + interaktywny przeglad materialow),
- `/o-nas`,
- `/podcast` (ostatnie odcinki),
- `/youtube` (ostatnie filmy).

## Stack

- Astro 5
- React 19 (island component)
- Tailwind CSS 4
- Adapter Cloudflare (`@astrojs/cloudflare`)

## Zrodla danych online

- Podcast: [https://przeprogramowani.pl/podcast](https://przeprogramowani.pl/podcast)
- YouTube: [https://www.youtube.com/feeds/videos.xml?channel_id=UCb2Y3vMeD6N4WDt5Acw7Arw](https://www.youtube.com/feeds/videos.xml?channel_id=UCb2Y3vMeD6N4WDt5Acw7Arw)
- Kursy i informacje: oficjalne strony `przeprogramowani.pl`, `opanujfrontend.pl`, `opanujtypescript.pl`, `10xdevs.pl`

## Uruchomienie lokalne

```bash
npm install
npm run dev
```

## Build i deploy (Cloudflare)

```bash
npm run build
npm run deploy
```

`npm run deploy` uruchamia `wrangler deploy` z konfiguracja z pliku `wrangler.jsonc`.

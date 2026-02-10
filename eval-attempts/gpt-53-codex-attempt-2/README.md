# Przeprogramowani.pl - Astro + React + Tailwind

Nowoczesna, responsywna strona projektu Przeprogramowani.pl przygotowana pod wdrozenie na Cloudflare Workers.

## Stack

- Astro 5
- React 19 (interaktywne komponenty list podcast/YouTube)
- Tailwind CSS 4
- Cloudflare adapter + Wrangler

## Strony

- `/` - strona glowna z hero i kursami: 10xDevs, Opanuj Frontend, Opanuj TypeScript
- `/o-nas` - informacje o zespole i dzialalnosci
- `/podcast` - najnowsze odcinki podcastu
- `/youtube` - najnowsze filmy YouTube

## Zrodla danych online

- `https://przeprogramowani.pl` (JSON-LD organizacji)
- `https://podcasters.spotify.com/pod/show/przeprogramowani` (lista odcinkow podcastu)
- `https://www.youtube.com/feeds/videos.xml?channel_id=UCb2Y3vMeD6N4WDt5Acw7Arw` (oficjalny feed YouTube)

## Komendy

- `npm install`
- `npm run dev`
- `npm run build`
- `npm run preview`
- `npm run deploy` (build + `wrangler deploy`)

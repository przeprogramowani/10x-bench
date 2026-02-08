# Przeprogramowani - strona projektu (Astro + React + Tailwind)

Nowoczesna, responsywna strona z podstronami:
- `/` (hero 10xDevs + kursy + zajawki podcast/YouTube)
- `/o-nas`
- `/podcast` (ostatnie odcinki)
- `/youtube` (ostatnie filmy)

## Stack
- Astro 5
- React 19 (komponenty kart)
- Tailwind CSS 4
- Adapter Cloudflare (`@astrojs/cloudflare`)

## Dane z sieci
Sekcje `Podcast` i `YouTube` pobierają aktualne wpisy z oficjalnej strony:
- `https://przeprogramowani.pl/`
- `https://przeprogramowani.pl/podcast`

W razie problemu z pobraniem działa fallback na lokalnych danych.

## Uruchomienie
```bash
npm install
npm run dev
```

## Kontrola jakości
```bash
npm run check
npm run build
```

## Wdrożenie na Cloudflare
1. Zaloguj się: `npx wrangler login`
2. Wdróż: `npm run deploy`

Konfiguracja Workera jest w `wrangler.jsonc`.

# Przeprogramowani.pl - landing i podstrony

Nowoczesna, responsywna strona projektu **Przeprogramowani.pl** zbudowana w stacku:
- Astro
- React (menu mobilne jako island)
- Tailwind CSS
- adapter Cloudflare (`@astrojs/cloudflare`)

## Podstrony
- `/` - strona główna z hero `10xDevs` i sekcją kursów
- `/o-nas` - informacje o działalności
- `/podcast` - ostatnie odcinki podcastu
- `/youtube` - ostatnie filmy YouTube

## Dane z sieci
Projekt pobiera aktualne dane z oficjalnych feedów:
- YouTube RSS kanału Przeprogramowani
- RSS podcastu Opanuj.AI / Przeprogramowani

W przypadku niedostępności feedów używany jest lokalny fallback danych.

## Uruchomienie lokalne
```bash
npm install
npm run dev
```

## Build produkcyjny
```bash
npm run build
npm run preview
```

## Deploy na Cloudflare
1. Zaloguj się do Cloudflare:
```bash
npx wrangler login
```
2. Wdróż:
```bash
npm run deploy
```

Konfiguracja worker/deploy znajduje się w pliku `wrangler.jsonc`.

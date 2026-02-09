# Przeprogramowani.pl - Landing i podstrony

Nowoczesna, responsywna strona zbudowana w stacku **Astro + React + Tailwind**, gotowa do wdrożenia na **Cloudflare**.

## Zakres

- Strona główna z hero programu **10xDevs 3.0**
- Podstrona **O nas**
- Podstrona **Podcast** z najnowszymi odcinkami (RSS)
- Podstrona **YouTube** z najnowszymi filmami (feed kanału)
- Sekcje kursów: **Opanuj Frontend** i **Opanuj TypeScript**
- Mobilna nawigacja React + stylowanie Tailwind

## Lokalny start

```bash
npm install
npm run dev
```

Aplikacja działa domyślnie na `http://localhost:4321`.

## Build

```bash
npm run build
npm run preview
```

## Deploy na Cloudflare Pages

Projekt jest przygotowany pod **Cloudflare Pages** (statyczny output `dist`).

- Build command: `npm run build`
- Build output directory: `dist`
- Node version: 20+ (zalecane 20 lub 22)

## Źródła danych

Strona pobiera aktualne dane z:
- Podcast RSS: `https://anchor.fm/s/c72d808/podcast/rss`
- YouTube feed: `https://www.youtube.com/feeds/videos.xml?channel_id=UCb2Y3vMeD6N4WDt5Acw7Arw`

W razie błędu sieci używane są dane fallback zapisane lokalnie.

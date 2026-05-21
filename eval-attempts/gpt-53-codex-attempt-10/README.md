# Przeprogramowani.pl - Astro + React + Tailwind

Nowoczesna i responsywna strona projektu Przeprogramowani przygotowana w stacku Astro, React i Tailwind, gotowa do wdrożenia na Cloudflare Workers.

## Co zawiera

- Strona główna z hero dla `10xDevs 3.0`
- Sekcja kursów:
  - `Opanuj Frontend`
  - `Opanuj TypeScript`
- Strona `O nas`
- Strona `Podcast` z najnowszymi odcinkami z RSS
- Strona `YouTube` z najnowszymi filmami z RSS kanału
- Responsywna nawigacja z mobilnym menu jako React island

## Źródła danych

Dane dynamiczne pobierane są serwerowo przy renderowaniu:

- Podcast RSS: `https://anchor.fm/s/c72d808/podcast/rss`
- YouTube RSS: `https://www.youtube.com/feeds/videos.xml?channel_id=UCb2Y3vMeD6N4WDt5Acw7Arw`

## Uruchomienie lokalne

```bash
npm install
npm run dev
```

## Build produkcyjny

```bash
npm run build
```

## Wdrożenie na Cloudflare

1. Zaloguj się do Cloudflare CLI:

```bash
npx wrangler login
```

2. Zbuduj aplikację i wdroż:

```bash
npm run build
npm run deploy
```

Uwagi:
- Konfiguracja jest ustawiona pod Cloudflare (`@astrojs/cloudflare`) i `output: server`.
- `wrangler.toml` wskazuje gotowy worker entrypoint oraz katalog assets.
- Sesje są ustawione na `memory`, więc nie wymagają KV binding `SESSION`.

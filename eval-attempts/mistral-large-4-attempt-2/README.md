# Przeprogramowani.pl — strona projektu

Nowoczesna, responsywna strona projektu [Przeprogramowani](https://przeprogramowani.pl).
Zawiera strony **O nas**, **Podcast** (ostatnie odcinki), **YouTube** (ostatnie filmy)
oraz sekcję **Kursy** (Opanuj Frontend, Opanuj TypeScript i 10xDevs — w hero).

## Stack

- **[Astro](https://astro.build/)** — statyczny output, View Transitions, SEO
- **[React](https://react.dev/)** — interaktywne wyspy (zakładki podcastów, menu mobilne, kopiowanie RSS)
- **[Tailwind CSS](https://tailwindcss.com/)** v4 — design system i responsywność
- **[Cloudflare adapter](https://docs.astro.build/en/guides/integrations-guide/cloudflare/)** — wdrożenie na Cloudflare Pages

## Struktura

```
├── public/               # favicon, _headers (caching na Cloudflare), robots.txt
├── scripts/
│   └── fetch-data.mjs    # pobiera feedy RSS/Atom i zapisuje snapshoty do src/data/
├── src/
│   ├── components/       # Header, Footer, karty kursów/filmów, wyspy React
│   ├── data/             # snapshoty feedów (fallback, gdy feed niedostępny przy buildzie)
│   ├── layouts/          # BaseLayout (SEO, ViewTransitions)
│   ├── lib/
│   │   ├── feeds.ts      # pobieranie i parsowanie RSS podcastów + YouTube (build-time)
│   │   └── site.ts       # dane o projekcie, kursach, założycielach, podcastach
│   ├── pages/            # /, /o-nas, /podcast, /youtube
│   └── styles/           # Tailwind + motyw
└── .github/workflows/    # CI deploy na Cloudflare Pages
```

## Źródła danych (pobierane podczas researchu)

| Dane | Źródło |
| --- | --- |
| Ostatnie odcinki — Przeprogramowani ft. Gość | RSS `https://anchor.fm/s/c72d808/podcast/rss` |
| Ostatnie odcinki — Opanuj.AI Podcast | RSS `https://anchor.fm/s/e2cb03d0/podcast/rss` |
| Ostatnie filmy — kanał Przeprogramowani | YouTube RSS `channel_id=UCb2Y3vMeD6N4WDt5Acw7Arw` |
| Ostatnie filmy — kanał Opanuj AI | YouTube RSS `channel_id=UCFqS-TikA3oFn-fKSO4O7eQ` |
| Kursy: 10xDevs, Opanuj Frontend, Opanuj TypeScript | 10xdevs.pl, opanujfrontend.pl, opanujtypescript.pl |
| Założyciele, zaufali nam, kontakt | przeprogramowani.pl/o-nas |

Podczas `astro build` strona pobiera aktualne feedy. Jeśli któryś będzie niedostępny,
używany jest ostatni zapisany snapshot z `src/data/` (odświeżany komendą `npm run fetch-data`).

## Komendy

```bash
npm install          # instalacja zależności
npm run dev          # dev server (http://localhost:4321)
npm run build        # build produkcyjny do dist/ (pobiera feedy)
npm run preview      # podgląd buildu lokalnie
npm run fetch-data   # ręczne odświeżenie snapshotów feedów
npm run deploy       # build + deploy na Cloudflare Pages (wymaga: npx wrangler login)
```

## Wdrożenie na Cloudflare

### Opcja 1 — Wrangler CLI

```bash
npx wrangler login
npm run deploy
# lub bezpośrednio: npx wrangler pages deploy dist/client --project-name=przeprogramowani
```

> Adapter Cloudflare generuje assety statyczne do `dist/client` — to ten katalog
> jest katalogiem wyjściowym deploya (Pages build output directory: `dist/client`).

### Opcja 3 — Direct Upload

```bash
npm run build
npx wrangler pages deploy dist/client --project-name=przeprogramowani
```

### Opcja 2 — Cloudflare Pages + GitHub (CI)

1. W Cloudflare Dashboard utwórz projekt **Pages** i podłącz repozytorium (lub użyj Direct Upload).
2. Ustaw: Build command `npm run build`, Build output directory `dist/client`, Node.js 22.
3. Sekrety GitHub Actions: `CLOUDFLARE_API_TOKEN`, `CLOUDFLARE_ACCOUNT_ID` — workflow
   `.github/workflows/deploy-cloudflare.yml` deployuje automatycznie przy pushu na `main`.

Strona jest w pełni statyczna (`output: 'static'`), więc na Cloudflare Pages działa
z cache'owaniem assetów (`public/_headers`) i darmowego CDN — bez funkcji serverowych.

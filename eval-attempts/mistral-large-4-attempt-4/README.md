# Przeprogramowani.pl

Nowoczesna i responsywna strona projektu [Przeprogramowani](https://przeprogramowani.pl) — szersze spojrzenie na programowanie.

## Stack

- **[Astro](https://astro.build/)** 7 — statyczny build (`output: "static"`)
- **[React](https://react.dev/)** 19 — interaktywne wyspy (nagłówek z menu mobilnym, grid wideo z modalnym odtwarzaczem)
- **[Tailwind CSS](https://tailwindcss.com/)** 4 — stylowanie
- **[Wrangler](https://developers.cloudflare.com/workers/wrangler/)** — wdrożenie na Cloudflare Workers (static assets)

## Struktura

```
├── public/               # assety: logo, zdjęcia, okładki podcastów, kursy, og-image
├── src/
│   ├── components/       # SEO.astro, Layout, Hero (10xDevs), Courses, PodcastShow, VideoGrid.tsx, Header.tsx…
│   ├── data/             # site.ts, courses.ts, team.ts + prawdziwe dane: podcasts.json, videos.json
│   ├── layouts/          # Layout.astro (SEO + nagłówek + stopka + JSON-LD)
│   ├── pages/            # index, o-nas, kursy, podcast, youtube, 404
│   └── styles/           # global.css (Tailwind 4 + motyw marki)
├── astro.config.mjs
└── wrangler.jsonc        # konfiguracja Cloudflare Workers (static assets → ./dist)
```

## Strony

| Strona | Adres | Zawartość |
|---|---|---|
| Strona główna | `/` | Hero z flagowym kursem **10xDevs**, sekcja kursów (Opanuj Frontend, Opanuj TypeScript, 10xDevs), zajawki podcastów i filmów, newsletter |
| O nas | `/o-nas` | Misja, filozofia, założyciele (Przemek Smyrdek, Marcin Czarkowski), wartości, współtwórcy, partnerzy |
| Kursy | `/kursy` | Pełna oferta kursów: 10xDevs, Opanuj Frontend: AI Edition, Opanuj TypeScript + pozostałe programy |
| Podcast | `/podcast` | Oba podcasty (Przeprogramowani ft. Gość i Opanuj.AI Podcast) z ostatnimi odcinkami, linki Spotify / Apple Podcasts / RSS / Anchor |
| YouTube | `/youtube` | Najnowsze filmy z kanału youtube.com/c/przeprogramowani z modalnym odtwarzaczem |

Dane o odcinkach podcastów pochodzą z oficjalnych feedów RSS (Anchor/Spotify for Podcasters), a lista filmów — z oficjalnego katalogu kanału YouTube.

## SEO

Każda strona korzysta z dedykowanego komponentu `src/components/SEO.astro` (title, description, canonical, Open Graph, Twitter Cards, robots, theme-color) podłączonego przez `Layout.astro`. Dodatkowo generowane są dane strukturalne JSON-LD (`Organization`, `WebSite`) oraz `sitemap-index.xml` (integracja `@astrojs/sitemap`).

## Lokalny development

```bash
npm install
npm run dev        # http://localhost:4321
```

## Build

```bash
npm run build      # statyczny build do ./dist
npm run preview    # podgląd buildu lokalnie
```

## Wdrożenie na Cloudflare (Workers static assets)

Strona jest w pełni statyczna, więc deployuje się jako static assets na Cloudflare Workers — bez adaptera SSR.

```bash
npm install
npm run build
npx wrangler deploy
```

Skrótem:

```bash
npm run deploy
```

Wymagania: zalogowany `wrangler` (`npx wrangler login`) oraz konfiguracja w `wrangler.jsonc` (`assets.directory: "./dist"`).

Deploy bez wysyłki (weryfikacja konfiguracji, działa bez credentiali):

```bash
npx wrangler deploy --dry-run
```

Własna domena (np. `przeprogramowani.pl`) podłączana jest w Cloudflare Dashboard → Workers & Pages → projekt → **Domains & Routes**.

# Przeprogramowani — nowa strona

Nowoczesna, responsywna strona projektu Przeprogramowani.pl zbudowana w Astro 6, React, Tailwind CSS 4 i przygotowana do wdrożenia na Cloudflare Workers.

## Start lokalny

```bash
npm install
npm run dev
```

Strona będzie dostępna pod `http://localhost:4321`.

## Kontrola jakości

```bash
npm run check
npm run build
npx wrangler deploy --dry-run
```

## Wdrożenie na Cloudflare

Po zalogowaniu do Wrangler:

```bash
npm run deploy
```

Konfiguracja Cloudflare znajduje się w `wrangler.jsonc`. Build jest statyczny, generuje cztery zoptymalizowane strony oraz sitemapę. Nagłówki cache i bezpieczeństwa są zdefiniowane w `public/_headers`.

## Struktura

- `/` — strona główna z hero 10xDevs i programami edukacyjnymi
- `/o-nas` — misja i sylwetki twórców
- `/podcast` — serie podcastowe i najnowsze odcinki
- `/youtube` — najnowsze filmy i materiały wideo

Publiczne treści i linki do publikacji są zebrane w `src/data/content.ts`, dzięki czemu można je łatwo aktualizować.

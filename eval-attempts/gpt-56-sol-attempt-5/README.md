# Przeprogramowani.pl

Nowoczesna, responsywna strona marki Przeprogramowani zbudowana w Astro, React i Tailwind CSS.

## Lokalnie

```bash
npm install
npm run dev
```

## Weryfikacja

```bash
npm run check
npm run build
npm run preview
```

## Cloudflare

Projekt generuje statyczny katalog `dist` i ma gotową konfigurację Cloudflare Workers Static Assets w `wrangler.jsonc`.

Po zalogowaniu do Cloudflare:

```bash
npx wrangler login
npm run deploy
```

Alternatywnie w Cloudflare Pages ustaw:

- Build command: `npm run build`
- Build output directory: `dist`
- Node.js: 22 lub nowszy

## Struktura

- `/` — hero 10xDevs, kursy, najnowsze filmy i podcasty
- `/o-nas` — misja i zespół
- `/podcast` — ostatnie odcinki
- `/youtube` — ostatnie filmy

Treści materiałów znajdują się w `src/data/content.ts`, dzięki czemu można je aktualizować bez zmian w komponentach.

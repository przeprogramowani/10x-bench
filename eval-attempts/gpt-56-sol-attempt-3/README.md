# Przeprogramowani — nowa strona

Nowoczesna, responsywna strona zbudowana w Astro, React i Tailwind CSS. Projekt jest statyczny i gotowy do wdrożenia jako Cloudflare Worker z obsługą assetów.

## Lokalnie

```bash
npm install
npm run dev
```

## Weryfikacja i build

```bash
npm run check
npm run build
```

## Cloudflare

Po zalogowaniu do Wrangler:

```bash
npx wrangler login
npm run deploy
```

Konfiguracja znajduje się w `wrangler.jsonc`. Build trafia do `dist/`, a Cloudflare obsługuje własną stronę `404.html`.

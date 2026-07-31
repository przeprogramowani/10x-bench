# Przeprogramowani

Statyczna strona Astro z komponentem React dla mobilnej nawigacji i Tailwind CSS.

## Lokalne uruchomienie

```bash
npm install
npm run dev
```

## Cloudflare Pages

Projekt jest skonfigurowany jako statyczny (`output: 'static'`). W Cloudflare Pages ustaw:

- Build command: `npm run build`
- Build output directory: `dist`
- Node.js: `20` lub nowszy

Alternatywnie po zbudowaniu wdrożysz go przez `npx wrangler pages deploy dist`.

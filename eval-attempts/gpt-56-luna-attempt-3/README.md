# Przeprogramowani.pl

Statyczna strona Astro z komponentem React i Tailwind CSS.

## Start lokalny

```bash
npm install
npm run dev
```

## Build

```bash
npm run check
npm run build
```

## Cloudflare Pages

- Build command: `npm run build`
- Build output directory: `dist`
- Node.js: `20` lub nowszy

Konfiguracja `wrangler.toml` wskazuje katalog wynikowy dla Cloudflare Pages. Do wdrożenia przez CLI użyj `npx wrangler pages deploy dist` po wykonaniu buildu.

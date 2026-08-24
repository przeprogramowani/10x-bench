# Przeprogramowani.pl

Statyczna strona Astro + React + Tailwind dla Przeprogramowani.pl.

## Lokalnie

```bash
npm install
npm run dev
```

## Build i Cloudflare Pages

```bash
npm run build
npx wrangler pages deploy dist
```

Konfiguracja `wrangler.toml` wskazuje katalog `dist/`, a `public/_headers` dodaje podstawowe nagłówki bezpieczeństwa. W Cloudflare Pages można też ustawić build command `npm run build` i katalog wyjściowy `dist`.

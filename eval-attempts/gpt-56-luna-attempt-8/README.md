# Przeprogramowani.pl

Nowoczesna, statyczna strona Przeprogramowanych zbudowana w Astro, React i Tailwind CSS.

## Uruchomienie

```bash
npm install
npm run dev
```

## Weryfikacja i build

```bash
npm run check
npm run build
```

Build trafia do `dist/` i jest gotowy do wdrożenia na Cloudflare Pages.

## Cloudflare Pages

- Build command: `npm run build`
- Output directory: `dist`
- Node version: `20` lub nowsza

Wdrożenie z CLI:

```bash
npx wrangler pages deploy dist
```

Konfiguracja znajduje się w `wrangler.toml`.

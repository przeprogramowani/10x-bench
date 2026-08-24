# Przeprogramowani.pl

Marketing site built with Astro, React and Tailwind CSS. The site uses static output and can be deployed directly to Cloudflare Pages.

## Local development

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
npm run preview
```

For Cloudflare Pages, use `npm run build` as the build command and `dist` as the output directory. `wrangler.toml` is included for `wrangler pages deploy dist`.

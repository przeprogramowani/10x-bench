# Przeprogramowani Landing

Nowoczesna i responsywna strona zbudowana w `Astro 6 + React 19 + Tailwind 4`, przygotowana do wdrożenia na Cloudflare Workers.

## Uruchomienie

```bash
npm install
npm run dev
```

## Build i Cloudflare

```bash
npm run build
npm run preview:worker
npm run deploy
```

Projekt używa adaptera `@astrojs/cloudflare`, `output: "server"` oraz `wrangler.jsonc`, więc jest gotowy do wdrożenia jako Worker.

## Zawartość

- `/` hero z 10xDevs, sekcja kursów, preview podcastu i YouTube oraz skrót O nas
- `/o-nas` strona o projekcie i founderach
- `/podcast` lista ostatnich odcinków
- `/youtube` lista ostatnich filmów

Treści zostały oparte na oficjalnych stronach:

- `https://przeprogramowani.pl/`
- `https://przeprogramowani.pl/o-nas`
- `https://przeprogramowani.pl/podcast`
- `https://www.10xdevs.pl/`
- `https://www.opanujfrontend.pl/`
- `https://www.opanujtypescript.pl/`

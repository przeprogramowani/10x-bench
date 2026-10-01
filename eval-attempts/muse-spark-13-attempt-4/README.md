# Przeprogramowani.pl — nowoczesna strona (Astro + React + Tailwind, Cloudflare)

Responsywna strona projektu Przeprogramowani.pl zbudowana na podstawie publicznych treści
przeprogramowani.pl, 10xdevs.pl, opanujfrontend.pl i opanujtypescript.pl.

## Strony

- `/` — hero z **10xDevs 4.0**, sekcja kursów (10xDevs, Opanuj Frontend, Opanuj TypeScript), zajawki podcastu i YouTube, newsletter
- `/o-nas` — Przemek Smyrdek i Marcin Czarkowski, liczby, zaufali nam
- `/podcast` — ostatnie odcinki **Opanuj.AI** i **Przeprogramowani ft. Gość** (wyszukiwarka + filtr — React island)
- `/youtube` — ostatnie filmy z kanału (kliknij, aby odtworzyć inline — React island)

## Stack

- Astro 5 (server output) + `@astrojs/react`
- Tailwind CSS v4 (`@tailwindcss/vite`)
- TypeScript strict
- Deploy: `@astrojs/cloudflare` + `wrangler.jsonc` (assets → `./dist`)

## Rozwój

```bash
npm install
npm run dev
npm run build
npm run preview
```

## Wdrożenie na Cloudflare

Opcja A — Workers (zalecana, SSR):

```bash
npx wrangler login
npm run build
npm run deploy
```

Opcja B — Cloudflare Pages: połącz repo, ustaw `Build command: npm run build`, `Output: dist`.

Wymaga Node 22+.

## Źródła treści

- https://przeprogramowani.pl, /o-nas, /podcast
- https://10xdevs.pl (program 4. edycji, opinie)
- https://www.opanujfrontend.pl, https://www.opanujtypescript.pl
- YouTube: youtube.com/c/przeprogramowani (ID filmów z strony głównej)
- Podcast: Spotify / Anchor (Opanuj.AI, Przeprogramowani)

Miniatury YT ładowane z `i3.ytimg.com`, okładki podcastów z CDN Spotify — brak lokalnych assetów.

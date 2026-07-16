# Przeprogramowani.pl — strona projektu

Nowoczesna, responsywna strona projektu [Przeprogramowani.pl](https://przeprogramowani.pl) — „Szersze spojrzenie na programowanie".

## Stack

- **Astro 5** — statyczny generator (output: `static`)
- **React 19** — interaktywne wyspy (menu mobilne, zakładki podcastów, slider opinii, animacje scroll)
- **Tailwind CSS 3** — stylowanie

## Strony

| Ścieżka   | Opis                                                                              |
| --------- | --------------------------------------------------------------------------------- |
| `/`       | Hero z kursem **10xDevs 4.0**, sekcja kursów (Opanuj Frontend, Opanuj TypeScript, 10xDevs), ostatnie filmy i odcinki, opinie, newsletter |
| `/o-nas`  | Misja, założyciele (Przemek Smyrdek, Marcin Czarkowski), statystyki, współprace   |
| `/podcast`| Ostatnie odcinki **Opanuj.AI Podcast** i **Przeprogramowani ft. Gość** + platformy |
| `/youtube`| Ostatnie filmy z kanału [youtube.com/c/przeprogramowani](https://youtube.com/c/przeprogramowani) |

## Rozwój lokalny

```bash
npm install
npm run dev      # http://localhost:4321
```

## Build produkcyjny

```bash
npm run build    # generuje statyczny katalog dist/
npm run preview  # podgląd builda
```

## Wdrożenie na Cloudflare Pages

Projekt jest gotowy do wdrożenia jako **strona statyczna**:

1. Połącz repozytorium z Cloudflare Pages (lub użyj `wrangler pages deploy`).
2. Ustaw:
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
   - **Node.js version:** `22` (zmienna środowiskowa `NODE_VERSION=22`)
3. Deploy — plik `public/_headers` ustawia cache dla zasobów statycznych.

Alternatywnie z CLI:

```bash
npx wrangler pages deploy dist --project-name=przeprogramowani
```

# Przeprogramowani.pl — strona projektu

Nowoczesna, responsywna strona [Przeprogramowani.pl](https://przeprogramowani.pl) — szersze spojrzenie na programowanie.

## Stack

- **Astro 5** — statyczne generowanie stron (`output: 'static'`)
- **React 19** — interaktywne wyspy (menu mobilne, zakładki podcastów, galeria wideo, liczniki)
- **Tailwind CSS 3** — stylowanie

## Strony

- `/` — hero z kursem **10xDevs**, sekcja kursów (Opanuj Frontend, Opanuj TypeScript, Opanuj AI), ostatnie filmy i odcinki, newsletter, statystyki
- `/o-nas` — twórcy (Przemek Smyrdek, Marcin Czarkowski), misja, marki partnerskie, kontakt
- `/podcast` — ostatnie odcinki **Opanuj.AI Podcast** i **Przeprogramowani ft. Gość** + linki do platform
- `/youtube` — ostatnie filmy z kanału z osadzonym odtwarzaczem

## Rozwój

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # statyczny build do katalogu dist/
npm run preview   # podgląd builda
```

## Wdrożenie na Cloudflare Pages

Build jest w pełni statyczny — katalog `dist/` można wdrożyć bezpośrednio:

```bash
npm run deploy    # build + wrangler pages deploy dist
```

lub ręcznie:

```bash
npm run build
npx wrangler pages deploy dist
```

Konfiguracja:

- `wrangler.toml` — `pages_build_output_dir = "dist"` (gotowe również pod integrację Git w panelu Cloudflare: komenda builda `npm run build`, katalog wyjściowy `dist`)
- `public/_headers` — nagłówki cache dla zasobów statycznych

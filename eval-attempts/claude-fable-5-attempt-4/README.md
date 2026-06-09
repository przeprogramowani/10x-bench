# Przeprogramowani.pl

Nowoczesna, responsywna strona projektu [Przeprogramowani.pl](https://przeprogramowani.pl) — „Szersze spojrzenie na programowanie".

## Stack

- **Astro 5** — statyczny generator stron (`output: 'static'`)
- **React 19** — komponenty interaktywne (nawigacja z menu mobilnym)
- **Tailwind CSS 3.4** — stylowanie
- **TypeScript** — typowane dane i komponenty

## Strony

| Ścieżka | Opis |
|---------|------|
| `/` | Strona główna — hero z programem 10xDevs, sekcja kursów (Opanuj Frontend, Opanuj TypeScript), zajawki podcastu i YouTube |
| `/o-nas` | Misja projektu i sylwetki założycieli (Przemek Smyrdek, Marcin Czarkowski) |
| `/podcast` | Opis podcastu i ostatnie odcinki |
| `/youtube` | Opis kanału i najnowsze filmy z miniaturami |

Dane (odcinki, filmy, kursy, statystyki) są wydzielone do `src/data/` — łatwo je aktualizować bez dotykania komponentów.

## Rozwój lokalny

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # produkcyjny build do dist/
npm run preview  # podgląd builda
```

## Wdrożenie na Cloudflare

Strona jest w pełni statyczna — gotowa na **Cloudflare Pages** (lub Workers Static Assets) bez adaptera.

### Opcja 1: Wrangler CLI

```bash
npm run deploy
# czyli: astro build && wrangler pages deploy dist
```

### Opcja 2: Integracja z Gitem (dashboard Cloudflare)

1. Połącz repozytorium w Cloudflare Pages
2. Build command: `npm run build`
3. Build output directory: `dist`

Konfiguracja Wranglera znajduje się w `wrangler.toml` (`pages_build_output_dir = "dist"`).

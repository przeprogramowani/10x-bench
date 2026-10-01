# Przeprogramowani.pl

Nowoczesna, responsywna strona projektu **Przeprogramowani** — szersze spojrzenie na programowanie.

## Stack

- [Astro 5](https://astro.build) — generator stron statycznych (`output: 'static'`)
- [React 19](https://react.dev) — komponenty UI (nagłówek z menu mobilnym, karty kursów, odcinków i filmów)
- [Tailwind CSS 3](https://tailwindcss.com) — stylowanie (ciemny motyw, akcent marki)
- Gotowe do wdrożenia na **Cloudflare Pages**

## Struktura

```
src/
├── components/   # Komponenty React (Header, Footer, karty, sekcje)
├── data/         # Dane: kursy, podcasty, filmy YouTube, o nas
├── layouts/      # Bazowy layout (meta, fonty, SEO)
├── pages/        # Strony: /, /o-nas, /podcast, /youtube
└── styles/       # Globalny CSS (Tailwind + motyw)
public/           # favicon, robots.txt, sitemap.xml, _headers
```

## Uruchomienie

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # build produkcyjny do ./dist
npm run preview   # lokalny podgląd builda
npm run typecheck # sprawdzenie typów (astro check)
```

## Wdrożenie na Cloudflare Pages

### Opcja A — przez dashboard (Git integration)

1. Wypchnij repozytorium do GitHub/GitLab.
2. W Cloudflare: **Workers & Pages → Create → Pages → Connect to Git**.
3. Ustaw:
   - **Framework preset:** Astro
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
4. Deploy — każdy push na main buduje i publikuje nową wersję.

### Opcja B — Wrangler CLI

```bash
npm run deploy
```

Skrypt buduje projekt i uruchamia `wrangler pages deploy dist`. Konfiguracja w `wrangler.toml` (`pages_build_output_dir`). Przy pierwszym uruchomieniu Wrangler zapyta o nazwę projektu i konto Cloudflare.

Strona jest w 100% statyczna — bez funkcji serwerowych, zero cold startów, cache na poziomie CDN (`public/_headers` ustawia `immutable` dla zasobów `/_astro/*`).

## Treści

Dane kursów (Opanuj Frontend, Opanuj TypeScript, 10xDevs), odcinków podcastów i filmów pochodzą z publicznych profili Przeprogramowanych (strona główna, podcasty, Spotify, YouTube) i są zapisane w `src/data/`. Aktualizacja treści = edycja pliku z danymi + rebuild.

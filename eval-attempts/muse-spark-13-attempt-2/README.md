# Przeprogramowani.pl — nowoczesna strona (Astro + React + Tailwind)

Responsywna strona projektu **Przeprogramowani.pl** — szersze spojrzenie na programowanie.
Zbudowana na podstawie aktualnych treści z przeprogramowani.pl, 10xdevs.pl, opanujfrontend.pl,
opanujtypescript.pl i opanuj.ai.

## Strony

| Strona | Ścieżka | Zawartość |
|---|---|---|
| Start (hero 10xDevs + kursy + YouTube + podcast + newsletter) | `/` | Hero z rotującymi hasłami, 4 kursy z filtrem, 10xRules.ai, ostatnie filmy/odcinki |
| O nas | `/o-nas` | Przemek Smyrdek i Marcin Czarkowski, misja, statystyki |
| Podcast | `/podcast` | 9 prawdziwych odcinków Opanuj.AI + Przeprogramowani ft. Gość, filtr + wyszukiwarka |
| YouTube | `/youtube` | 6 prawdziwych filmów, odtwarzacz inline (kliknij miniaturę) |
| Kursy | `/kursy` | 10xDevs 4.0, Opanuj Frontend, Opanuj TypeScript, Opanuj AI |

Interaktywne wyspy React: `Navbar`, `Hero`, `Courses` (filtr), `PodcastList` (filtr + search),
`YouTubeGrid` (inline embed), `NewsletterForm` (walidacja).

## Stack

- **Astro 7** (SSR) + **React 19** (islands) + **Tailwind CSS v4**
- Adapter **`@astrojs/cloudflare`** — gotowe do wdrożenia na Cloudflare Workers/Pages

## Uruchomienie

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # build do ./dist
npm run preview  # podgląd buildu
```

## Wdrożenie na Cloudflare

### Opcja A: Pages (polecana, `wrangler pages`)

```bash
npm run build
npx wrangler pages deploy ./dist
```

### Opcja B: Workers

```bash
npm run build
npm run deploy   # = build + wrangler deploy (wrangler.json w repo)
```

Plik `wrangler.json` jest już skonfigurowany (`compatibility_date`, `nodejs_compat`,
katalog `dist`). Własną domenę podepnij w dashboardzie Cloudflare → Workers & Pages →
Custom domain.

## Źródła treści

- https://przeprogramowani.pl, `/o-nas`, `/podcast`
- https://10xdevs.pl, https://www.opanujfrontend.pl, https://www.opanujtypescript.pl, https://opanuj.ai
- Kanał https://youtube.com/c/przeprogramowani, Spotify Opanuj.AI / Przeprogramowani

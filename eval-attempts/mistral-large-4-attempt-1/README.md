# Przeprogramowani.pl — strona projektu

Nowoczesna, responsywna strona projektu [Przeprogramowani.pl](https://przeprogramowani.pl), zbudowana w oparciu o dane pobrane z naszej działalności w sieci (podcasty, YouTube, kursy, zespół).

## Stack technologiczny

- **[Astro](https://astro.build/)** — framework, routing, layouty, SEO
- **[React](https://react.dev/)** — interaktywne wyspy (nagłówek z menu mobilnym, hero, zakładki podcastów, siatka filmów z „pokaż więcej”)
- **[Tailwind CSS](https://tailwindcss.com/)** — design system i stylowanie (mobile-first, dark theme)
- **[Cloudflare](https://www.cloudflare.com/)** — adapter `@astrojs/cloudflare` + Wrangler, gotowe do wdrożenia na Cloudflare Pages

## Struktura strony

| Strona | Zawartość |
| --- | --- |
| `/` | Hero z kursem **10xDevs 4.0**, sekcja kursów (**Opanuj Frontend: AI Edition**, **Opanuj TypeScript**, **Opanuj AI**), ostatnie odcinki podcastów, ostatnie filmy YouTube, newsletter, „Zaufali nam” |
| `/o-nas` | Misja, zespół (Przemek Smyrdek, Marcin Czarkowski), liczby, nasza działalność, kontakt |
| `/podcast` | Dwa podcasty (**Opanuj.AI Podcast**, **Przeprogramowani ft. Gość**) z ostatnimi odcinkami, czasami trwania i linkami (Spotify, Apple Podcasts, Google Podcasts, RSS) |
| `/youtube` | Ostatnie filmy z kanału [@przeprogramowani](https://www.youtube.com/@przeprogramowani) (miniatury, daty, wyświetlenia) |
| `/404` | Strona błędu |

## Źródła danych

Treści pochodzą z oficjalnych źródeł Przeprogramowanych:

- `przeprogramowani.pl` — strona główna, `/o-nas`, `/podcast`
- `10xdevs.pl`, `opanujfrontend.pl`, `opanujtypescript.pl`, `opanuj.ai` — kursy
- RSS kanału YouTube (`youtube.com/feeds/videos.xml?channel_id=UCb2Y3vMeD6N4WDt5Acw7Arw`) — ostatnie filmy, zweryfikowane przez YouTube oEmbed API
- Spotify for Creators / Anchor — show i odcinki podcastów, kanały RSS (`anchor.fm/s/c72d808`, `anchor.fm/s/e2cb03d0`)

## Komendy

```bash
npm install       # instalacja zależności
npm run dev       # serwer deweloperski (http://localhost:4321)
npm run build     # build produkcyjny do dist/client/
npm run preview   # podgląd buildu lokalnie
npm run deploy    # build + wdrożenie na Cloudflare Pages (wrangler)
npm run cf:dev    # lokalny podgląd przez wrangler pages dev
```

## Wdrożenie na Cloudflare

Projekt jest w pełni przygotowany do wdrożenia na **Cloudflare Pages**:

1. **Szybki deploy (CLI):**

   ```bash
   npm run deploy
   # lub: npx wrangler pages deploy dist/client
   ```

2. **Deploy przez dashboard:**
   - Połącz repozytorium z Cloudflare Pages
   - Build command: `npm run build`
   - Build output directory: `dist/client`

3. **Alternatywnie jako Cloudflare Worker (Static Assets):**

   ```bash
   cd dist/client && npx wrangler deploy
   ```

   (adapter generuje `dist/client/wrangler.json` — konfigurację workera "assets-only")

Konfiguracja Wranglera znajduje się w `wrangler.toml` (projekt `przeprogramowani-website`). Wszystkie strony są statyczne (prerenderowane przy buildzie), a adapter `@astrojs/cloudflare` obsługuje routing na infrastrukturze Cloudflare. `_headers` z cache'owaniem `/_astro/*` jest generowany automatycznie.

## SEO

Każda strona ma unikalny `<title>` i `<meta name="description">`, canonical URL, Open Graph (w tym `og:image` 1200×630), Twitter Cards, link do sitemapu (`@astrojs/sitemap`) oraz kanału RSS podcastu. Obraz OG można wygenerować ponownie skryptem `scripts/generate-og-image.py`.

---

Przeprogramowani.pl — szersze spojrzenie na programowanie.

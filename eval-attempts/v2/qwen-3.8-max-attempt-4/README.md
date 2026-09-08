# Przeprogramowani.pl — witryna prezentacyjna (10xBench V2)

Kompletna, responsywna strona Przeprogramowani.pl po polsku: Astro 7 + React 19 + Tailwind CSS 4,
przystosowana do uruchomienia na **Cloudflare Workers** (bez publikacji).

## Stack (zgodny z zapisem operatora z 2026-09-08T07:29:49Z)

| Pakiet | Wersja |
| --- | --- |
| astro | 7.3.1 |
| react / react-dom | 19.2.8 |
| tailwindcss (+ @tailwindcss/vite) | 4.3.3 |
| @astrojs/cloudflare | 14.3.0 |
| @astrojs/react | 6.0.5 |
| wrangler | 4.129.1 |

Lockfile: `package-lock.json` (instalacja powtarzalna: `npm ci`).

## Polecenia

```bash
npm ci                 # powtarzalna instalacja zależności
npm run fetch-cache    # (opcjonalnie) odśwież snapshoty feedów -> src/data/cache.json
npm run build          # prebuild odświeża cache, potem astro build (adapter Cloudflare Workers)
npm run preview        # lokalny podgląd produkcyjny w runtime Workers (wrangler dev, port 8788)
```

Jeżeli port 8788 jest zajęty: `npx wrangler dev --config dist/server/wrangler.json --port <PORT> --inspector-port <PORT2>`.

Build generuje artefakt Workers:
- `dist/server/entry.mjs` — worker (main),
- `dist/server/wrangler.json` — **generowana** konfiguracja Wrangler (assets: `dist/client`, binding `ASSETS`),
- `dist/client/` — zasoby statyczne.

Lokalny podgląd produkcyjny działa w runtime workerd (Cloudflare Workers), obsługuje wszystkie
strony SSR i zasoby statyczne. Adresy: `/`, `/o-nas`, `/podcast`, `/podcast/opanuj-ai`,
`/podcast/przeprogramowani`, `/youtube`, `/kursy` (końcowe ukośniki działają).

## Wdrożenie na Cloudflare Workers (przyszłe — NIE wykonane w tej próbie)

Strona jest skonfigurowana dla **Cloudflare Workers** (nie Cloudflare Pages):

```bash
npm run build
npx wrangler deploy --config dist/server/wrangler.json
# pierwszy raz: npx wrangler login (konto z uprawnieniami Workers)
```

## Zmienne środowiskowe i bindingi

| Nazwa | Gdzie | Opis |
| --- | --- | --- |
| `PUBLIC_SITE_URL` | build (shell) | Kanoniczny adres witryny używany w `site`, canonical i Open Graph (domyślnie `http://localhost:8788`) |
| `SIMULATE_SOURCE_FAILURE` | runtime Workers (`--var` / `.dev.vars` / vars w konfiguracji) | Test awarii: `all` albo lista kluczy po przecinku (`opanujai,przeprogramowani,youtube`) — wymusza błąd pobierania, strony przechodzą na dane z pamięci podręcznej |
| `ASSETS` | binding (generowany) | Zasoby statyczne `dist/client` |
| `SESSION` (KV), `IMAGES` | bindingi (generowane) | Dodane przez adapter/Astro; w `wrangler dev` emulowane lokalnie, przy deploy wymagają provisioning tylko jeśli używane |

Przykład kontrolowanej awarii źródła:

```bash
npx wrangler dev --config dist/server/wrangler.json --port 8802 --inspector-port 9236 \
  --var SIMULATE_SOURCE_FAILURE:all
```

## Architektura danych (P04)

- `src/lib/sources.ts` — moduł źródeł: pobieranie po stronie serwera (SSR w runtime Workers)
  z timeoutem 6 s, walidacją (HTTP status, XML, niepusta lista, tytuł+URL elementu) i normalizacją
  do `MediaItem`; pamięć podręczna in-memory (TTL 10 min) + snapshot build-time
  (`src/data/cache.json` generowany przez `scripts/fetch-cache.mjs`).
- Awaria źródła → dane ze snapshotu z wyraźnym oznaczeniem nieaktualności i czasem pobrania;
  brak snapshotu → komunikat o niedostępności z linkiem do źródła. Strona nigdy nie pada.
- `src/lib/parse.ts` — parsery RSS (podcasty) i Atom (YouTube), bez zależności zewnętrznych.
- Komponenty (`src/components/MediaList.astro`) tylko prezentują dane strukturalne.

Źródła i feedy (szczegóły: `evidence/research/NOTES.md`):
- Opanuj.AI: `https://anchor.fm/s/e2cb03d0/podcast/rss`
- Podcast Przeprogramowani: `https://anchor.fm/s/c72d808/podcast/rss`
- YouTube: `https://www.youtube.com/feeds/videos.xml?channel_id=UCb2Y3vMeD6N4WDt5Acw7Arw`

## Weryfikacja

Patrz `VERIFICATION.md` (wykonane polecenia, kody wyjścia, dowody w `evidence/`).

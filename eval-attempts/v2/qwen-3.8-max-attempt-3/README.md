# Przeprogramowani.pl — serwis 10xBench V2

Kompletna, responsywna strona Przeprogramowani.pl w języku polskim: Astro 7 + React 19 + Tailwind CSS 4,
przygotowana do uruchomienia na **Cloudflare Workers** (bez publikacji).

## Wymagania

- Node.js >= 20 (testowano na 22.14.0), npm >= 10.

## Instalacja

```bash
npm ci        # powtarzalna instalacja z package-lock.json
```

## Build produkcyjny

```bash
npm run build
```

- Strony generują się statycznie (`output: 'static'`); podczas buildu moduły z `src/data/`
  pobierają i walidują feedy RSS podcastów oraz feed Atom kanału YouTube.
- Awaria źródła w czasie buildu nie przerywa buildu — używana jest pamięć podręczna
  (`src/data/cache/*.json`, oznaczana na stronie jako dane nieaktualne) albo komunikat
  o niedostępności z linkiem do źródła.
- Wynik buildu: `dist/client/` (zasoby + wygenerowany `dist/client/wrangler.json`)
  oraz `dist/server/` (konfiguracja pomocnicza adaptera). Adapter generuje też
  `.wrangler/deploy/config.json` wskazujący właściwy plik konfiguracyzny Workera.

## Odświeżenie pamięci podręcznej danych

```bash
npm run refresh-cache   # pobiera feedy i zapisuje src/data/cache/*.json
```

## Lokalny podgląd produkcyjny (runtime Cloudflare Workers)

```bash
npm run build
npx wrangler dev --port 8787     # uruchamiane z katalogu projektu
```

Wrangler wykrywa wygenerowaną konfigurację (`.wrangler/deploy/config.json` →
`dist/client/wrangler.json`) i serwuje wszystkie strony oraz zasoby w lokalnym
runtime Workers (workerd) pod `http://localhost:8787`. Alternatywnie `npm run preview`
(build + wrangler dev w jednym poleceniu).

Uwaga: żądania bez końcowego ukośnika (np. `/o-nas`) zwracają `307` na wariant
z ukośnikiem (`/o-nas/` → `200`) — to standardowe zachowanie Cloudflare Assets
(`html_handling: auto-trailing-slash`). Obie formy adresu prowadzą do właściwej strony.

## Przyszłe wdrożenie (Workers, NIE wykonywane w tej próbie)

```bash
npx wrangler deploy    # wymaga zalogowania: npx wrangler login
```

Wdrożenie publikuje Workera z assetami z `dist/client` zgodnie z wygenerowaną
konfiguracją. **W tej próbie celowo nie wykonano żadnego wdrożenia ani poleceń
zmieniających zasoby zdalne.**

## Zmienne środowiskowe i bindingi

Zmienne build-time (opcjonalne, wstrzykiwane przez `define: __FEED_ENV__` w `astro.config.mjs`):

| Zmienna | Domyślnie | Opis |
| --- | --- | --- |
| `SITE_URL` | `http://localhost:8787` | Adres witryny używany do canonical i Open Graph |
| `FETCH_TIMEOUT_MS` | `10000` | Timeout pobierania feedów |
| `RECENT_WINDOW_DAYS` | `90` | Okno „najnowszych” materiałów |
| `DATA_OFFLINE` | – | `1` wymusza tryb pamięci podręcznej (bez sieci) |
| `SOURCE_URL_OPANUJ_AI`, `SOURCE_URL_PRZEPROGRAMOWANI_PODCAST`, `SOURCE_URL_YOUTUBE` | – | Nadpisanie adresu źródła (np. test kontrolowanej awarii) |

Bindingi Workers (generowane automatycznie przez adapter `@astrojs/cloudflare`, używane
wyłącznie przy funkcjach platformy; dla statycznej strony nie są wymagane żadne sekrety):

- `SESSION` — KV Namespace (sesje; dodane automatycznie przez adapter),
- `IMAGES` — Cloudflare Images (obróbka obrazów przez `astro:image`).

Dla wdrożenia: utwórz namespace KV i podepnij go jako `SESSION` (lub usuń binding,
jeśli sesje nie są używane). Brak innych wymaganych sekretów.

## Struktura

```
src/
  config/site.ts        # treści stałe (kursy, założyciele, linki) — ze źródeł oficjalnych
  data/
    sources.ts          # definicje źródeł (feedy) i typy danych
    parse.ts            # parsowanie i walidacja RSS/Atom (fast-xml-parser)
    index.ts            # pobieranie server-side: sieć → cache → stan niedostępności
    cache/*.json        # pamięć podręczna (snapshoty feedów z czasem pobrania)
  components/           # Header.tsx (React, nawigacja mobilna), karty mediów, stopka
  layouts/Base.astro    # SEO: title, description, canonical, OG, lang=pl
  pages/                # /, /o-nas, /podcast, /podcast/opanuj-ai, /podcast/przeprogramowani, /youtube, /kursy
scripts/
  refresh-cache.mjs     # odświeżanie cache feedów
  browser-check.cjs     # samoweryfikacja przeglądarkowa (playwright-core + systemowy Chrome)
research/               # dowody researchu (adresy, fakty, surowe odpowiedzi)
evidence/               # logi, zrzuty ekranu, wyniki sprawdzeń
VERIFICATION.md         # raport samoweryfikacji
```

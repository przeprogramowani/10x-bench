# Przeprogramowani.pl — 10xBench V2

Kompletna, responsywna strona Przeprogramowani.pl w języku polskim: Astro 7 + React 19 + Tailwind CSS 4, build do runtimeu **Cloudflare Workers** (adapter `@astrojs/cloudflare`). Strona **nie jest publikowana** — zgodnie z zadaniem dostępny jest wyłącznie lokalny podgląd produkcyjny.

## Strony

| Adres | Zawartość |
| --- | --- |
| `/` | Przedstawienie projektu, wyróżniony kurs 10xDevs w hero (link: https://10xdevs.pl), zapowiedzi pozostałych stron |
| `/o-nas` | Działalność i wartości, sylwetki Przemka Smyrdka i Marcina Czarkowskiego |
| `/podcast` | Katalog obu podcastów z linkami do ich stron |
| `/podcast/opanuj-ai` | Opanuj.AI Podcast: opis, najnowsze odcinki, odtwarzacz `<audio>`, linki do odcinków |
| `/podcast/przeprogramowani` | Podcast Przeprogramowani: opis, najnowsze odcinki, odtwarzacz `<audio>`, linki do odcinków |
| `/youtube` | Najnowsze filmy kanału: osadzony odtwarzacz YouTube (iframe nocookie) + linki do filmów |
| `/kursy` | 10xDevs, Opanuj Frontend, Opanuj TypeScript — opisy i prawdziwe linki |

Końcowe ukośniki są obsługiwane (build katalogowy + przekierowania 307 assetów Workers).

## Polecenia

Wymagania: Node.js ≥ 20 (testowano na 22.14.0), npm.

```bash
# 1. Instalacja (powtarzalna — package-lock.json jest w repozytorium)
npm ci          # lub npm install

# 2. (Zalecane) Odświeżenie pamięci podręcznej źródeł mediów
npm run seed-cache

# 3. Build produkcyjny (dane mediów pobierane server-side podczas buildu)
npm run build

# 4. Lokalny podgląd produkcyjny w runtime Cloudflare Workers (workerd)
npm run preview
# = npx wrangler dev --config dist/client/wrangler.json --port 8787
# Strona: http://127.0.0.1:8787/  (jeśli 8787 jest zajęty, dodaj --port <inny>)
```

## Architektura danych (P04)

- `src/data/sources.ts` — definicje źródeł (feed RSS/Atom, adresy domowe, katalogi dostawcy) oraz zweryfikowane treści statyczne (kursy, założyciele).
- `src/data/loader.ts` — **serwerowy** potok: `fetch` z timeoutem → walidacja → normalizacja → wybór materiałów (okno 90 dni przed startem próby 2026-09-08T07:29:49Z; gdy źródło nic nie opublikowało w oknie — najnowszy dostępny materiał z rzeczywistą datą). Strony prezentują wyłącznie dane strukturalne (`SourceResult`).
- `src/data/xml.ts` — parser feedów (Atom YouTube, RSS 2.0 podcastów).
- `data/cache/*.json` — migawki pamięci podręcznej (zapisywane przez `npm run seed-cache`; dołączane do buildu jako fallback).
- Odporność na awarie: błąd timeoutu/HTTP/walidacji jednego źródła **nie wyłącza strony** — pokazywane są dane z cache z wyraźnym oznaczeniem nieaktualności (`stale`) albo komunikat o niedostępności z linkiem do źródła (`unavailable`).
- Kontrolowana awaria: `src/data/failure-injection.ts` (`FORCE_FAIL=['youtube']`) lub zmienna `FORCE_FAIL_SOURCES=youtube` → przebuduj i zobacz stan `stale` na `/youtube`. Po eksperymencie lista musi być pusta.

### Zmienne środowiskowe (opcjonalne)

| Zmienna | Domyślnie | Znaczenie |
| --- | --- | --- |
| `SITE_URL` | `https://przeprogramowani.pl` | Podstawa canonical/OG (konfigurowalny adres witryny) |
| `ATTEMPT_START` | `2026-09-08T07:29:49.000Z` | Kotwica okna 90 dni |
| `SOURCE_TIMEOUT_MS` | `15000` | Timeout pobierania feedu |
| `FORCE_FAIL_SOURCES` | (pusta) | Lista kluczy źródeł do wymuszonej awarii |
| `SOURCE_URL_YOUTUBE` / `SOURCE_URL_OPANUJ_AI` / `SOURCE_URL_PRZEPROGRAMOWANI_PODCAST` | adresy z `sources.ts` | Nadpisanie adresu feedu (testy awarii HTTP) |

Uwaga: zmienne muszą być ustawione dla procesu `astro build` (np. `SITE_URL=... npm run build`).

## Cloudflare Workers (P06)

- Adapter: `@astrojs/cloudflare@14.3.0` (peer: `astro ^7.2.0`, `wrangler ^4.125.0`) skonfigurowany w `astro.config.mjs`.
- Build (`output: 'static'`) generuje `dist/client/` z zasobami oraz **generowaną przez adapter konfigurację Workers** `dist/client/wrangler.json` (assets-only, bindingi dev: `SESSION` KV i `IMAGES` — emulowane lokalnie).
- Lokalny podgląd: `wrangler dev --config dist/client/wrangler.json` (runtime workerd).

### Przyszłe wdrożenie (NIE zostało wykonane w tej próbie)

Deploy na **Cloudflare Workers** (nie Cloudflare Pages):

```bash
npm run build
npx wrangler deploy --config dist/client/wrangler.json
```

Wymaga zalogowania `npx wrangler login` (konto Cloudflare). Nie są potrzebne żadne sekrety ani bindingi produkcyjne — strona jest w pełni statyczna, a dane mediów pobierane są podczas buildu. Ewentualne bindingi dev (`SESSION`, `IMAGES`) wynikają z domyślnej konfiguracji adaptera i nie są używane przez kod strony.

## Dowody i weryfikacja

- `VERIFICATION.md` — wykonana samoweryfikacja (polecenia, kody wyjścia, obserwacje).
- `evidence/research.md` + `evidence/research/` — źródła, adresy, czasy pobrania, zrzuty odpowiedzi.
- `evidence/logs/`, `evidence/pages/`, `evidence/failure-experiment/` — logi buildów, snapshoty HTML stron, eksperyment awarii.

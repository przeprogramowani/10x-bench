# Przeprogramowani.pl — Strona projektu (10xBench V2)

Nowoczesna, w pełni responsywna i odporna na awarie strona **Przeprogramowani.pl**, zrealizowana zgodnie ze specyfikacją benchmarku 10xBench V2 przy użyciu najnowszych wersji **Astro 7**, **React 19**, **Tailwind CSS 4** oraz oficjalnego adaptera **`@astrojs/cloudflare`** dla **Cloudflare Workers**.

---

## 1. Architektura i technologie

* **Framework:** Astro `7.3.1` (tryb `output: 'server'`)
* **Warstwa interfejsu:** React `19.2.8` (`@astrojs/react 6.0.5`)
* **Style:** Tailwind CSS `4.3.3` z wtyczką `@tailwindcss/vite 4.3.3`
* **Adapter środowiska:** `@astrojs/cloudflare 14.3.0` dla Cloudflare Workers
* **Parser danych:** `fast-xml-parser 5.11.1` (parsowanie feedów RSS/Atom bez zewnętrznych zależności)
* **Środowisko podglądu Workers:** `wrangler 4.129.1`

---

## 2. Struktura stron i adresów (P01)

Każdy z 7 wymaganych adresów stanowi osobną stronę dostępną przez bezpośrednie wejście URL (HTTP 200, poprawny HTML):

| Adres | Rola i zawartość |
| :--- | :--- |
| `/` | Przedstawienie projektu, wyróżniony kurs **10xDevs 4.0** w hero z prawdziwym odnośnikiem do `https://10xdevs.pl` oraz zapowiedzi pozostałych sekcji witryny. |
| `/o-nas` | Działalność, misja i wartości Przeprogramowanych oraz sylwetki założycieli: **Przemka Smyrdka** i **Marcina Czarkowskiego**, zgodne ze źródłami komercyjnymi. |
| `/podcast` | Katalog obu podcastów z opisami, najnowszymi materiałami i odnośnikami do ich osobnych podstron. |
| `/podcast/opanuj-ai` | Dedykowana podstrona podcastu **Opanuj.AI**: opis, najnowsze odcinki z ostatnich 90 dni, wbudowany odtwarzacz audio MP3 oraz odnośniki do Spotify. |
| `/podcast/przeprogramowani` | Dedykowana podstrona **Podcast Przeprogramowani**: opis, najnowsze odcinki w archiwum z rzeczywistymi datami, odtwarzacz audio MP3 oraz odnośniki do Spotify. |
| `/youtube` | Oficjalny kanał YouTube Przeprogramowani: najnowsze filmy z ostatnich 90 dni, osadzone odtwarzacze wideo (`<iframe>`) oraz bezpośrednie odnośniki do YouTube. |
| `/kursy` | Trzy flagowe programy edukacyjne: **10xDevs**, **Opanuj Frontend: AI Edition** oraz **Opanuj TypeScript: Frontend Pro** z opisami i działającymi linkami. |

---

## 3. Moduły danych i odporność na awarie (P03 & P04)

Pobieranie danych zewnętrznych odbywa się w dedykowanych modułach serwerowych w katalogu `src/data/sources/`:
* `src/data/sources/opanujAi.ts` — pobieranie feedu RSS podcastu Opanuj.AI.
* `src/data/sources/przeprogramowaniPodcast.ts` — pobieranie feedu RSS podcastu Przeprogramowani.
* `src/data/sources/youtube.ts` — pobieranie feedu Atom oficjalnego kanału YouTube.
* `src/data/cache/fallbackData.json` — autentyczna lokalna pamięć podręczna (snapshot) zapewniająca natychmiastowe przywrócenie działania w razie timeoutu lub niedostępności API.

Każdy moduł implementuje limit czasu (timeout 7000 ms przez `AbortController`), walidację struktury, normalizację danych do typu `MediaItem` oraz bezpieczny fallback. W razie awarii źródła strona wyświetla widoczny banner informacyjny: `⚠️ Tryb awaryjny (Cache)` wraz z kodem/przyczyną błędu oraz odnośnikiem do oficjalnej platformy źródła.

---

## 4. Instrukcja uruchomienia i komendy

### 4.1. Instalacja zależności
```bash
npm install
```
Powtarzalna instalacja bazuje na zapisanym pliku `package-lock.json`.

### 4.2. Uruchomienie środowiska deweloperskiego
```bash
npm run dev
```

### 4.3. Budowanie produkcyjne
```bash
npm run build
```
Wynik buildu generuje strukturę zgodną z Cloudflare Workers:
* `dist/server/entry.mjs` — główny punkt wejścia Workera (SSR).
* `dist/server/wrangler.json` — wygenerowana automatycznie przez adapter konfiguracja Workera.
* `dist/client/` — skompilowane zasoby statyczne klienta (JS, CSS, obrazy).

### 4.4. Lokalny podgląd produkcyjny w runtime Cloudflare Workers
Podgląd w oficjalnym środowisku Cloudflare Workers:
```bash
npm run preview
```
(Polecenie `astro preview` uruchamia pod maską Workera w środowisku `wrangler` w tle na porcie `4321`).

Polecenia pomocnicze dla podglądu produkcyjnego:
* Sprawdzenie statusu: `npx astro preview status`
* Odczyt logów Workera: `npx astro preview logs`
* Zatrzymanie podglądu: `npx astro preview stop`

Alternatywne bezpośrednie uruchomienie przez Wrangler:
```bash
npm run preview:workers
# odpala: wrangler dev --config dist/server/wrangler.json --port 8788
```

---

## 5. Przyszłe wdrożenie na Cloudflare Workers (P06)

Projekt jest w pełni przygotowany do wdrożenia w usłudze **Cloudflare Workers** (a nie Cloudflare Pages).

### Wymagane zasoby i bindingi:
Zgodnie z wygenerowaną konfiguracją `dist/server/wrangler.json`, Worker korzysta z następujących bindingów:
1. `ASSETS` — binding zasobów statycznych wskazujący na katalog `../client` (`assets: { binding: "ASSETS", directory: "../client" }`).
2. `SESSION` — przestrzeń Cloudflare KV do obsługi sesji (`kv_namespaces: [{ binding: "SESSION" }]`).
3. `IMAGES` — binding Cloudflare Images (`images: { binding: "IMAGES" }`).

### Polecenie wdrożenia (Deployment):
Po zalogowaniu w Cloudflare CLI (`wrangler login`) wdrożenie produkcyjne Workera wykonuje się poleceniem:
```bash
npx wrangler deploy --config dist/server/wrangler.json
```
*Uwaga: W ramach niniejszej próby benchmarkowej strona NIE została opublikowana zdalnie ani nie były zmieniane żadne zasoby zdalne.*

---

## 6. Testy i samoweryfikacja

W projekcie zawarto dedykowane skrypty testowe:
* **Test modułów pobierania i kontrolowanej awarii:**
  ```bash
  npm test
  ```
* **Szczegółowa weryfikacja HTTP 200, H1, Canonical i znaczników SEO:**
  ```bash
  npm run verify:routes
  ```
* **Testy przeglądarkowe w Playwright (responsywność 390px / 1440px, nawigacja mobilna, odtwarzacze):**
  ```bash
  npm run verify:browser
  ```

Pełne dowody i logi wykonania znajdują się w pliku `VERIFICATION.md`.

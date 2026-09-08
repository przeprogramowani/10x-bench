# Przeprogramowani.pl — Implementacja 10xBench V2

Nowoczesna, w pełni responsywna i zgodna ze specyfikacją strona projektu **Przeprogramowani.pl** przygotowana w języku polskim w oparciu o framework Astro 7, React 19, Tailwind CSS 4 oraz oficjalny adapter `@astrojs/cloudflare` dedykowany dla runtime Cloudflare Workers.

---

## 🚀 Technologie i wersje bazowe

Projekt wykorzystuje najnowsze stabilne wersje główne zgodnie z wymogami `BASELINE.md`:
- **Astro**: `7.3.1` (major 7)
- **React**: `19.2.8` (major 19) + `react-dom@19.2.8`
- **Tailwind CSS**: `4.3.3` (major 4) z integracją `@tailwindcss/vite`
- **Adapter Cloudflare**: `@astrojs/cloudflare@14.3.0`
- **Wrangler**: `wrangler@4.129.1` (lokalny runtime Cloudflare Workers)
- **Parser danych**: `fast-xml-parser@5.11.1` (walidacja i normalizacja serwerowa feedów RSS / Atom)
- Blokada wersji utrwalona w `package-lock.json`.

---

## 📑 Wymagane strony i struktura adresów

Wszystkie 7 tras zwracają kod HTTP 200 oraz kompletny kod HTML:
1. `/` — Strona główna z prezentacją projektu, wyróżnionym kursem 10xDevs w sekcji Hero z bezpośrednim odnośnikiem CTA (`https://10xdevs.pl`) oraz zapowiedziami pozostałych stron.
2. `/o-nas` — Działalność i wartości Przeprogramowanych, misja, ponad 7 lat na rynku edukacji technologicznej oraz rzetelne sylwetki Przemka Smyrdka i Marcina Czarkowskiego ze źródłowymi informacjami i profilami LinkedIn.
3. `/podcast` — Główny katalog obu podcastów (Opanuj.AI oraz Przeprogramowani ft. Gość) z opisami, prowadzącymi i bezpośrednimi odnośnikami do ich dedykowanych stron.
4. `/podcast/opanuj-ai` — Dedykowana strona podcastu Opanuj.AI: opis, najnowsze rzeczywiste odcinki z ostatnich 90 dni, wbudowany odtwarzacz audio (HTML5 audio stream) oraz niezależne bezpośrednie odnośniki do Spotify i Apple Podcasts.
5. `/podcast/przeprogramowani` — Dedykowana strona podcastu Przeprogramowani ft. Gość: opis, najnowsze dostępne odcinki z rzeczywistymi datami publikacji, wbudowany odtwarzacz audio oraz odnośniki do platform.
6. `/youtube` — Najnowsze filmy oficjalnego kanału Przeprogramowani z ostatnich 90 dni, responsywne osadzone odtwarzacze wideo (YouTube nocookie) oraz bezpośrednie odnośniki do każdego filmu.
7. `/kursy` — Szczegółowe zestawienie 3 flagowych programów edukacyjnych: 10xDevs, Opanuj Frontend oraz Opanuj TypeScript z opisami, grupą docelową i bezpośrednimi bezpiecznymi linkami (brak atrap `#`).

---

## 🛠️ Polecenia uruchomienia i środowisko

### 1. Instalacja zależności
```bash
npm install
```

### 2. Sprawdzenie typów i budowanie produkcyjne
```bash
npx tsc --noEmit
npm run build
```
Wynik buildu trafia do katalogu `dist/client` (zasoby statyczne, artefakty HTML i reguły nagłówków Cloudflare) oraz generuje zgodną konfigurację Workers `dist/client/wrangler.json`.

### 3. Lokalny podgląd produkcyjny w runtime Cloudflare Workers
Podgląd produkcyjny uruchamiany jest w oficjalnym środowisku Cloudflare Workers za pomocą narzędzia Wrangler:
```bash
# Uruchomienie lokalnego Workers (domyślny wolny port np. 8799):
npx wrangler dev --port 8799

# Lub przy użyciu prekonfigurowanego skryptu:
npm run preview:workers
```
Lokalny serwer Workers serwuje wszystkie wymagane podstrony i zasoby z poprawnymi nagłówkami HTTP 200, cache oraz obsługą tras bez i z końcowym ukośnikiem.

Alternatywnie podgląd można uruchomić przez adapter Astro:
```bash
npm run preview
```

---

## ☁️ Gotowość do wdrożenia w Cloudflare Workers

Aplikacja jest w pełni przystosowana do wdrożenia jako **Cloudflare Worker** (z architekturą Workers Static Assets):
- **Adapter**: `@astrojs/cloudflare` zarejestrowany w `astro.config.mjs` z trybem `imageService: 'passthrough'`.
- **Artefakty**: Podczas `astro build` generowany jest plik konfiguracyjny `dist/client/wrangler.json` z mapowaniem zasobów (`assets: { directory: "." }`). W korzeniu repozytorium znajduje się również `wrangler.jsonc`.
- **Wymagane bindingi**:
  - `SESSION`: Przestrzeń Cloudflare KV (opcjonalna, automatycznie emulowana lokalnie przez Wrangler).
  - Brak konieczności konfigurowania sekretów lub kluczy API zewnętrznych — pobieranie feedów odbywa się z publicznych źródeł RSS/Atom.

### Przyszłe wdrożenie produkcyjne (gdy operator zdecyduje o publikacji):
```bash
# Weryfikacja konta (wymaga zalogowania do Cloudflare CLI):
npx wrangler whoami

# Wdrożenie do Cloudflare Workers:
npx wrangler deploy
```
*Uwaga: Zgodnie z zasadą P06 strona NIE została opublikowana w internecie w trakcie ewaluacji.*

---

## 🛡️ Odporność i obsługa awarii źródeł danych

Zewnętrzne dane pobierane są po stronie serwera w dedykowanych modułach:
- `src/data/youtube.ts` — kanał Atom YouTube (`https://www.youtube.com/feeds/videos.xml?channel_id=UCb2Y3vMeD6N4WDt5Acw7Arw`)
- `src/data/podcast-opanuj-ai.ts` — feed RSS Anchor/Spotify (`https://anchor.fm/s/e2cb03d0/podcast/rss`)
- `src/data/podcast-przeprogramowani.ts` — feed RSS Anchor/Spotify (`https://anchor.fm/s/c72d808/podcast/rss`)

W przypadku awarii sieci, błędu HTTP, timeoutu (8000ms AbortController) lub błędu parsowania XML:
- Strona nie ulega awarii.
- Moduł przełącza się na zweryfikowany lokalny snapshot (`src/data/snapshots/`), oznaczając dane jako pamięć podręczną (`status: 'cached'`, `isFallback: true`).
- Użytkownik widzi czytelny komunikat z datą archiwum oraz linkiem do źródła zewnętrznego.
- Kontrolowana awaria może być przetestowana zmienną `SIMULATE_SOURCE_FAILURE=opanuj-ai` (lub `youtube`, `przeprogramowani`, `all`).

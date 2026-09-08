# Przeprogramowani.pl — 10xBench V2

Nowoczesna, responsywna i odporna na awarie witryna projektu **Przeprogramowani.pl** zrealizowana w ramach benchmarku 10xBench V2 w języku polskim.

Projekt został zbudowany z wykorzystaniem **Astro 7**, **React 19**, **Tailwind CSS 4** oraz oficjalnego adaptera **`@astrojs/cloudflare`** z pełną gotowością do uruchomienia i wdrożenia w środowisku **Cloudflare Workers**.

---

## 🚀 Technologie i Wersje Zależności

Wszystkie pakiety są zgodne z przypisanym zbiorem wersji (`BASELINE.md`):
- **Astro**: `7.3.1` (major 7)
- **React** & **React DOM**: `19.2.8` (major 19)
- **Tailwind CSS**: `4.3.3` (major 4) z `@tailwindcss/vite` 4.3.3
- **Cloudflare Adapter**: `@astrojs/cloudflare` `14.3.0`
- **Wrangler**: `4.129.1`
- **Parser danych XML/Atom**: `fast-xml-parser` `5.11.1`

Zależności są utrwalone w powtarzalnym `package-lock.json`.

---

## 🛠️ Polecenia i Instrukcja Obsługi

### 1. Instalacja zależności
```bash
npm install
```

### 2. Produkcyjny build projektu
```bash
npm run build
```
Polecenie uruchamia `astro build`. Artefakty produkcyjne są kompilowane do katalogu `dist/`:
- `dist/server/` — kod Workers i entrypoint `entry.mjs`, manifesty oraz wygenerowany plik `wrangler.json`.
- `dist/client/` — statyczne assety (CSS, skrypty wysp klienckich, favicon, nagłówki).

### 3. Lokalny podgląd produkcyjny w runtime Cloudflare Workers
Adapter `@astrojs/cloudflare` generuje docelową konfigurację `dist/server/wrangler.json`. Lokalny podgląd w środowisku Workers uruchamia się poleceniem:
```bash
npm run preview
```
Można również bezpośrednio wywołać Wranglera z wyborem portu i adresu IP:
```bash
npx wrangler dev -c dist/server/wrangler.json --ip 127.0.0.1 --port 8787 --show-interactive-dev-session false
```
Serwer podglądu Workers serwuje wszystkie dynamiczne ścieżki oraz zasoby statyczne z bindingu `ASSETS`.

### 4. Przyszłe wdrożenie do Cloudflare Workers
> **Uwaga:** Zgodnie z wytycznymi P06 strona **nie jest publikowana** w trakcie ewaluacji i nie wymaga zewnętrznych poświadczeń.

Docelowe wdrożenie do chmury Cloudflare Workers odbywa się za pomocą komendy:
```bash
npx wrangler deploy -c dist/server/wrangler.json
```
Instrukcja wskazuje bezpośrednio **Cloudflare Workers** (a nie Cloudflare Pages).

---

## ⚙️ Konfiguracja, Zmienne i Bindingi Cloudflare

Wygenerowany przez adapter plik konfiguracyjny `dist/server/wrangler.json` deklaruje następujące zasoby Workers:
1. **`main`**: `entry.mjs` — główny punkt wejścia aplikacji SSR w runtime Workers.
2. **`assets`**:
   - `binding`: `"ASSETS"`
   - `directory`: `"../client"` (wskazuje na skompilowane zasoby statyczne w `dist/client`).
3. **`kv_namespaces`**:
   - `binding`: `"SESSION"` — automatycznie provisionowana przestrzeń klucz-wartość dla sesji Astro.
4. **`compatibility_date`**: `2026-09-07`

### Zmienne środowiskowe do testów odporności (opcjonalne)
W celu weryfikacji obsługi awarii zewnętrznych źródeł (zgodnie z P04), moduły pobierania obsługują kontrolowane symulacje błędów:
- `SIMULATE_FAILURE_OPANUJ_AI=true` — wymusza błąd pobierania RSS podcastu Opanuj.AI i przełączenie na zweryfikowany cache awaryjny.
- `SIMULATE_FAILURE_PODCAST=true` — wymusza błąd pobierania RSS podcastu Przeprogramowani.
- `SIMULATE_FAILURE_YOUTUBE=true` — wymusza błąd pobierania Atom feedu kanału YouTube.
- Dodatkowo każda podstrona mediów obsługuje parametr zapytania URL: `?simulate_failure=1`.

---

## 📄 Architektura Stron i Nawigacji (P01)

Wszystkie poniższe ścieżki są osobnymi trasami dostępnymi przez bezpośrednie wejście i zwracają HTTP 200 w podglądzie Workers:

| Adres | Opis i zawartość |
| --- | --- |
| `/` | Przedstawienie projektu, wyróżniony kurs 10xDevs w sekcji Hero z bezpośrednim odnośnikiem do `https://10xdevs.pl`, zapowiedzi pozostałych stron serwisu oraz skrót najnowszych publikacji. |
| `/o-nas` | Działalność, wartości i misja projektu Przeprogramowani oraz szczegółowe sylwetki Przemka Smyrdka i Marcina Czarkowskiego z linkami do LinkedIn. |
| `/podcast` | Katalog obu podcastów z osobnymi kartami, opisami, statystykami słuchalności i odnośnikami do ich dedykowanych podstron. |
| `/podcast/opanuj-ai` | Podcast Opanuj.AI: opis tematyki, najnowsze rzeczywiste odcinki (z ostatnich 90 dni), wbudowany odtwarzacz HTML5 audio i odnośniki do Spotify. |
| `/podcast/przeprogramowani` | Podcast Przeprogramowani: opis, najnowsze rzeczywiste odcinki (zgodnie z regułą najnowszych dostępnych), odtwarzanie audio i odnośniki do Spotify. |
| `/youtube` | Najnowsze rzeczywiste filmy oficjalnego kanału Przeprogramowani (ostatnie 90 dni), responsywne osadzone odtwarzacze wideo, daty i odnośniki do YouTube. |
| `/kursy` | Trzy oficjalne programy edukacyjne: Opanuj Frontend, Opanuj TypeScript i 10xDevs — z wyczerpującymi opisami i prawdziwymi linkami. |

---

## 📡 Moduły Danych i Odporność na Awarie (P04)

Pobieranie zewnętrznych treści realizowane jest w dedykowanych modułach serwerowych:
- `src/data/fetch-opanuj-ai.ts` — pobieranie i normalizacja feedu RSS Opanuj.AI (`https://anchor.fm/s/e2cb03d0/podcast/rss`).
- `src/data/fetch-przeprogramowani-podcast.ts` — pobieranie feedu RSS podcastu Przeprogramowani (`https://anchor.fm/s/c72d808/podcast/rss`).
- `src/data/fetch-youtube.ts` — pobieranie feedu Atom oficjalnego kanału YouTube (`channel_id=UCb2Y3vMeD6N4WDt5Acw7Arw`).
- `src/data/backup-cache.ts` — zweryfikowana kopia zapasowa danych z rzeczywistymi datami i linkami, wykorzystywana w przypadku niedostępności źródła lub symulacji błędu.

---

## ♿ Dostępność, Responsywność i SEO (P07)

1. **Jeden H1 na każdej podstronie**: Każda z 7 tras posiada dokładnie jeden semantyczny nagłówek `<h1>`.
2. **Meta tagi i Canonical**: Indywidualne `title`, `meta description`, `canonical` bazujące na konfigurowalnym adresie oraz tagi `Open Graph` (`og:title`, `og:description`, `og:url`, `og:locale="pl_PL"`).
3. **Dostępność i nawigacja klawiaturą**:
   - Skrót do treści głównej: `Przejdź do treści głównej` (`#main-content`).
   - Widoczny fokus klawiatury (`focus-visible:ring-2 focus-visible:ring-amber-400`).
   - Dedykowany komponent menu mobilnego w React (`src/components/MobileNav.tsx`) z pełną obsługą klawiatury (Escape zamyka menu, focus trap, `aria-expanded`, `aria-controls`).
4. **Responsywność (390 px i 1440 px)**:
   - Brak poziomego paska przewijania (brak horizontal scroll).
   - Elastyczne siatki, dostosowane marginesy i czytelne typografie na małych i dużych ekranach.

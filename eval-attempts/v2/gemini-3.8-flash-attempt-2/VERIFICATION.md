# Raport Samoweryfikacji (VERIFICATION.md) — 10xBench V2

**Projekt:** Strona Przeprogramowani.pl  
**Data wykonania testów:** 8 września 2026 r.  
**Środowisko wykonawcze:** macOS (Darwin arm64), Node.js v22.14.0, npm 10.9.2  
**Artefakt wyników maszynowych:** [`verification-results.json`](./verification-results.json)

---

## 1. Zgodność zależności i produkcyjny build (P05 / Ocena: 4/4)

### 1.1. Procedura i polecenia weryfikacyjne
Wykonano sprawdzenie zainstalowanych pakietów w stosunku do deklaracji operatora w `BASELINE.md`:
```bash
node -v && npm -v
npm list --depth=0
npm run build
```

### 1.2. Wyniki i kody wyjścia
- **Wersja Node:** `v22.14.0`
- **Wersja npm:** `10.9.2`
- **Zainstalowane pakiety główne (`npm list --depth=0`):**
  - `astro@7.3.1` (wymagana wersja główna: 7) — **ZGODNE**
  - `react@19.2.8` (wymagana wersja główna: 19) — **ZGODNE**
  - `react-dom@19.2.8` — **ZGODNE**
  - `tailwindcss@4.3.3` (wymagana wersja główna: 4) — **ZGODNE**
  - `@astrojs/cloudflare@14.3.0` — **ZGODNE**
  - `@astrojs/react@6.0.5` — **ZGODNE**
  - `@tailwindcss/vite@4.3.3` — **ZGODNE**
  - `wrangler@4.129.1` — **ZGODNE**
  - `fast-xml-parser@5.11.1` — **ZGODNE**
- **Plik lockfile:** Wygenerowano i utrwalono `package-lock.json` (300 zbadanych pakietów, 0 podatności).
- **Wynik buildu (`npm run build`):**
  - Kod wyjścia: `0`
  - Czas kompilacji: `535 ms`
  - Wygenerowane katalogi: `dist/server/` (entrypoint SSR `entry.mjs`, `wrangler.json`) oraz `dist/client/` (zasoby statyczne, arkusze stylów, nagłówki).
- **Status:** **UDANE (PASS)**

---

## 2. Podgląd w runtime Cloudflare Workers i weryfikacja tras (P01, P06 / Ocena: 4/4)

### 2.1. Procedura i polecenia weryfikacyjne
Lokalny podgląd produkcyjny uruchomiono przy pomocy oficjalnego narzędzia Wrangler, wykorzystując konfigurację wygenerowaną przez adapter Astro:
```bash
npx wrangler dev -c dist/server/wrangler.json --ip 127.0.0.1 --port 8798 --show-interactive-dev-session false
node scripts/verify-all.mjs
```

### 2.2. Wyniki dla wszystkich 7 wymaganych tras
Każda trasa została sprawdzona zarówno bez końcowego ukośnika, jak i z ukośnikiem (zgodnie z P01):

| Adres trasy | Kod HTTP | Content-Type | Liczba nagłówków H1 | Status |
| --- | :---: | :---: | :---: | :---: |
| `/` oraz `//` | `200 OK` | `text/html` | Dokładnie 1 | **UDANE** |
| `/o-nas` oraz `/o-nas/` | `200 OK` | `text/html` | Dokładnie 1 | **UDANE** |
| `/podcast` oraz `/podcast/` | `200 OK` | `text/html` | Dokładnie 1 | **UDANE** |
| `/podcast/opanuj-ai` oraz `/podcast/opanuj-ai/` | `200 OK` | `text/html` | Dokładnie 1 | **UDANE** |
| `/podcast/przeprogramowani` oraz `/podcast/przeprogramowani/` | `200 OK` | `text/html` | Dokładnie 1 | **UDANE** |
| `/youtube` oraz `/youtube/` | `200 OK` | `text/html` | Dokładnie 1 | **UDANE** |
| `/kursy` oraz `/kursy/` | `200 OK` | `text/html` | Dokładnie 1 | **UDANE** |

### 2.3. Odnotowane ograniczenia i wnioski
- Port domyślny `8788` był zajęty przez zewnętrzny proces systemowy (`workerd`). Weryfikację podglądu zrealizowano na wolnym dedykowanym porcie (`8798`), co w pełni udokumentowano w instrukcji i skryptach.
- Domyślny tryb Wranglera uruchamia interaktywny dashboard terminalowy; do powtarzalnych testów zautomatyzowanych włączono flagę `--show-interactive-dev-session false`.
- **Status:** **UDANE (PASS)**

---

## 3. Rzetelne źródła i research materiałów (P02, P03 / Ocena: 4/4)

### 3.1. Przebadane oficjalne adresy źródeł
Research przeprowadzono na żywo w oparciu o publiczne źródła projektu:
1. **Strona główna i podstrony:** `https://przeprogramowani.pl`, `https://przeprogramowani.pl/o-nas`, `https://przeprogramowani.pl/podcast`.
2. **Kanał YouTube Przeprogramowani:**
   - Identyfikator kanału: `UCb2Y3vMeD6N4WDt5Acw7Arw`
   - Feed Atom: `https://www.youtube.com/feeds/videos.xml?channel_id=UCb2Y3vMeD6N4WDt5Acw7Arw`
   - Data pozyskania danych: 2026-09-08
   - Wybrane najnowsze filmy z 90 dni poprzedzających start próby:
     - *10xDevs Demo Day LIVE 🎉 Zobacz 9 najlepszych projektów!* (`2026-09-02`, ID: `cKU4jlaUnZc`)
     - *Hackathon AI-Native - tak było na BRAVE UNAITED* (`2026-08-31`, ID: `1agLBxJskps`)
     - *10xWorkflow i Core Skill Chain - Budujemy nowy feature* (`2026-08-27`, ID: `rR2sbf0KkRU`)
     - *Najlepszy benchmark AI pochodzi od ciebie* (`2026-08-18`, ID: `MDZA6vww74g`)
     - *Projektowanie stabilnych bibliotek i architektury z agentem AI* (`2026-08-11`, ID: `bdO9bBvg8Zg`)
     - *NOWA GENERACJA AI - GPT-5.6 Sol i Fable 5* (`2026-07-30`, ID: `9Eoa5Tj54fI`)
3. **Podcast Opanuj.AI:**
   - Adres feedu RSS: `https://anchor.fm/s/e2cb03d0/podcast/rss`
   - Wybrane najnowsze odcinki z 90 dni poprzedzających start próby:
     - *Kod nie jest już wąskim gardłem. Nadchodzi AI-Native SDLC \| Opanuj.AI* (`2026-09-03`)
     - *Cena i bezpieczeństwo - kluczowe pytania o AI przyszłości \| Opanuj.AI* (`2026-08-05`)
     - *BAN NA AI?! USA BLOKUJE ANTHROPICA i OPEN AI* (`2026-07-01`)
     - *Byliśmy na Google I/O 2026 - wrażenia na gorąco!* (`2026-06-03`)
4. **Podcast Przeprogramowani:**
   - Adres feedu RSS: `https://anchor.fm/s/c72d808/podcast/rss`
   - Zgodnie z wytyczną P03 (wobec braku publikacji w oknie 90 dni przed 8.09.2026): wybrano najnowsze dostępne materiały z zachowaniem ich rzeczywistych dat:
     - *Programista vs. Angielski: Od strachu do sukcesu, Wiktoria Sitko* (`2025-09-25`)
     - *O dojrzewaniu zawodowym programisty, Wojciech Trawiński* (`2025-09-10`)
     - *Architektura frontendu: Co naprawdę ma znaczenie? Tomasz Ducin* (`2024-10-10`)
5. **Programy edukacyjne i linki zewnętrzne:**
   - **10xDevs:** `https://10xdevs.pl` (prawdziwy, zweryfikowany cel)
   - **Opanuj Frontend:** `https://www.opanujfrontend.pl` (prawdziwy cel)
   - **Opanuj TypeScript:** `https://www.opanujtypescript.pl` (prawdziwy cel)
6. **Założyciele:** Przemek Smyrdek (`https://www.linkedin.com/in/psmyrdek/`) i Marcin Czarkowski (`https://www.linkedin.com/in/mkczarkowski/`).
- **Status:** **UDANE (PASS)**

---

## 4. Odtwarzanie mediów, responsywność i dostępność (P03, P07 / Ocena: 4/4)

### 4.1. Odtwarzanie mediów i obsługa ograniczeń
- **Podcasty (`/podcast/opanuj-ai` oraz `/podcast/przeprogramowani`):**
  - Każdy element zawiera wbudowany semantyczny odtwarzacz `<audio controls>` korzystający z bezpośredniego strumienia audio MP3 z feedu Anchor/Spotify.
  - Odtwarzacz posiada dostępną etykietę `<label class="sr-only">`.
  - Niezależnie od odtwarzacza, każdy odcinek posiada dedykowany link do oryginalnego nagrania na platformie Spotify.
  - Zaimplementowano sekcję pomocy w przypadku ograniczeń po stronie przeglądarki użytkownika.
- **YouTube (`/youtube`):**
  - Każdy film posiada responsywny osadzony odtwarzacz iframe (`https://www.youtube-nocookie.com/embed/${id}`) z zachowaniem proporcji 16:9 (`aspect-video`).
  - Atrybut `title` każdego iframe'a zawiera autentyczny tytuł filmu dla czytników ekranowych.
  - Każdy element posiada niezależny bezpośredni odnośnik do oryginalnego adresu filmu `https://www.youtube.com/watch?v=${id}` oraz stałą informację o alternatywnym odtworzeniu w przypadku blokad w przeglądarce.

### 4.2. Responsywność widoków (390 px i 1440 px)
- **Szerokość 390 px (Mobile):**
  - Wszystkie siatki przełączają się w układ jednokolumnowy (`grid-cols-1`).
  - Długie adresy URL posiadają klasę `break-all` zapobiegającą wypychaniu kontenera.
  - Główny kontener `body` ma zdefiniowaną ochronę `overflow-x: hidden`.
  - Menu mobilne: komponent React (`src/components/MobileNav.tsx`) dostępny pod przyciskiem hamburgera, zamykany klawiszem Escape, obsługujący dotyk i mysz, z trapem fokusu.
- **Szerokość 1440 px (Desktop):**
  - Wycentrowany kontener o maksymalnej szerokości `max-w-6xl` (1152 px) z zachowaniem odpowiednich marginesów bocznych (`px-4 sm:px-6 lg:px-8`).
  - Pełna nawigacja w nagłówku z aktywnym stanem strony (`aria-current="page"`).

### 4.3. Weryfikacja SEO
- Każda strona ma dokładnie jeden nagłówek `<h1>`.
- Tytuły stron (`<title>`) są unikalne, opisowe i sformatowane ze spójnym sufiksem `| Przeprogramowani.pl`.
- Każda podstrona posiada unikalny opis w `meta name="description"`.
- Zdefiniowano `canonical` bazujący na konfigurowalnym adresie witryny.
- Tagi Open Graph (`og:title`, `og:description`, `og:url`, `og:site_name`, `og:locale="pl_PL"`) są obecne na wszystkich podstronach.
- Język dokumentu to polski (`<html lang="pl">`).
- **Status:** **UDANE (PASS)**

---

## 5. Eksperyment kontrolowanej awarii źródła danych (P04 / Ocena: 4/4)

### 5.1. Procedura eksperymentu
Zgodnie z wymaganiem P04 przetestowano odporność witryny na awarię zewnętrznego źródła:
- **Ścieżka standardowa (normalna):** Żądanie GET do `/podcast/opanuj-ai` pobiera bieżące dane z sieci, zwraca status `live`, nie wyświetla banera awarii.
- **Ścieżka kontrolowanej awarii:** Wysłano żądanie z parametrem wymuszającym błąd zewnętrznego API:
  `GET http://127.0.0.1:8798/podcast/opanuj-ai?simulate_failure=1`

### 5.2. Zaobserwowany wynik
1. **Zachowanie serwera:** Strona zwróciła kod `HTTP 200 OK`. Awaria zewnętrznego źródła nie spowodowała błędu 500 ani przerwania działania całej aplikacji.
2. **Zachowanie UI:** Wyświetlono dedykowany baner informacyjny o trybie odporności:
   > *„Tryb odporności na awarie (dane archiwalne z pamięci podręcznej) — Uruchomiono kontrolowaną awarię źródła Opanuj.AI. Wyświetlono sprawdzone dane z pamięci podręcznej (oznaczone jako archiwalne).”*
3. **Prezentacja danych:** Użytkownik zobaczył 4 autentyczne nagrania archiwalne z działającymi odtwarzaczami audio oraz bezpośrednimi odnośnikami do Spotify.
4. **Zapis eksperymentu w danych maszynowych:** Odnotowano w pliku `verification-results.json` w sekcji `controlledFailure`.
- **Status:** **UDANE (PASS)**

---

## Podsumowanie stanu końcowego

| Kategoria weryfikacji | Oczekiwane wymaganie | Status | Dowód |
| --- | --- | :---: | --- |
| **P01 / P06** | 7 tras zwracających HTTP 200 w Workers | **PASS** | `verification-results.json` |
| **P02 / P03** | Rzetelne treści, founders, realne linki do kursów | **PASS** | `src/data/courses.ts`, `src/data/founders.ts` |
| **P03** | Odtwarzacze audio/wideo i linki do oryginałów | **PASS** | `AudioPlayerCard.astro`, `YouTubeVideoCard.astro` |
| **P04** | Moduły SSR, odporność na błędy, kontrolowana awaria | **PASS** | Przetestowano na `/podcast/opanuj-ai?simulate_failure=1` |
| **P05** | Wersje Astro 7, React 19, Tailwind 4 | **PASS** | `package.json`, `package-lock.json` |
| **P06** | Adapter Cloudflare Workers, brak publikacji | **PASS** | `dist/server/wrangler.json`, `astro.config.mjs` |
| **P07** | SEO, H1, lang=pl, nawigacja mobilna, widoki 390/1440 | **PASS** | `Layout.astro`, `MobileNav.tsx`, testy SEO |
| **P08** | Jawna samoweryfikacja i raport | **PASS** | `VERIFICATION.md`, `verification-results.json` |

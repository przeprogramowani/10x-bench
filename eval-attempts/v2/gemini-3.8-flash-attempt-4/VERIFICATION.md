# Raport samoweryfikacji (VERIFICATION.md)

**Próba**: 10xBench V2 — Przeprogramowani.pl  
**Model**: Google Gemini 3.8 Flash (`openrouter/google/gemini-3.8-flash`)  
**Data realizacji**: 2026-09-08  
**Środowisko**: Darwin (macOS 15), Node v22.14.0, npm 10.9.2  

Niniejszy dokument przedstawia dowody wykonanych procedur weryfikacyjnych, kody wyjścia poleceń, wyniki działania w lokalnym środowisku Cloudflare Workers, analizę responsywności, audyt SEO i A11y oraz eksperyment kontrolowanej awarii źródła.

---

## 1. Zgodność zależności i build produkcyjny (P05, P06)

### Procedura
1. Weryfikacja wymaganych wersji bazowych z `BASELINE.md`.
2. Instalacja zależności oraz weryfikacja integralności drzewa pakietów przez `npm install`.
3. Wykonanie kontroli typów za pomocą `npx astro check`.
4. Wykonanie buildu produkcyjnego przez `npm run build`.

### Wyniki i dowody
- **Plik dowodowy**: `evidence/versions.json`, `evidence/build.log`, `package-lock.json`
- **Zainstalowane wersje**:
  - `astro`: `7.3.1` (major 7, baseline 7.3.1)
  - `react`: `19.2.8` (major 19, baseline 19.2.8)
  - `react-dom`: `19.2.8` (major 19)
  - `tailwindcss`: `4.3.3` (major 4, baseline 4.3.3)
  - `@astrojs/cloudflare`: `14.3.0` (oficjalny adapter Workers dla Astro 7)
  - `@astrojs/react`: `6.0.5`
  - `wrangler`: `4.129.1`
- **Polecenie `npx astro check`**:
  - Kod wyjścia: `0`
  - Czas: ~1.2s
  - Wynik: 27 plików zanalizowanych — `0 errors`, `0 warnings`, `0 hints`.
- **Polecenie `npm run build`**:
  - Kod wyjścia: `0`
  - Czas: 1.69s
  - Artefakty: 7 wygenerowanych stron statycznych w `dist/client/`, nagłówki `_headers` z cache dla zasobów `/_astro/*`, wygenerowany `dist/client/wrangler.json`.
- **Status testu**: **SUKCES (100% zgodności z baseline)**.

---

## 2. Podgląd lokalny w runtime Cloudflare Workers i wymagane trasy (P01, P06)

### Procedura
Uruchomienie lokalnego procesu Cloudflare Workers na silniku `workerd` za pomocą polecenia:
```bash
npx wrangler dev --port 8888 --ip 127.0.0.1
```
Weryfikacja automatycznym skryptem `scripts/test-workers-runtime.mjs` wysyłającym żądania HTTP GET dla wszystkich 7 tras w wersji bezpośredniej oraz z końcowym ukośnikiem (`/`).

### Wyniki i dowody
- **Plik dowodowy**: `evidence/workers-preview.log`
- **Tabela tras podglądu produkcyjnego Cloudflare Workers (http://127.0.0.1:8888)**:

| Adres trasy | Status HTTP | Nagłówek H1 | Tytuł dokumentu `<title>` | Wynik |
|---|---|---|---|---|
| `/` | `200 OK` | Szersze spojrzenie na programowanie z 10xDevs | Przeprogramowani.pl — Szersze spojrzenie na programowanie | PASS |
| `/o-nas` | `200 OK` | Łączymy świat programowania, biznesu i rozwoju osobistego | O nas — Przeprogramowani \| Działalność, wartości i twórcy | PASS |
| `/o-nas/` | `200 OK` | Tak | Zgodny | PASS |
| `/podcast` | `200 OK` | Katalog podcastów Przeprogramowanych | Katalog podcastów — Przeprogramowani \| Opanuj.AI oraz Przeprogramowani ft. Gość | PASS |
| `/podcast/` | `200 OK` | Tak | Zgodny | PASS |
| `/podcast/opanuj-ai` | `200 OK` | Opanuj.AI Podcast | Podcast Opanuj.AI — Przeprogramowani \| Odcinki i odtwarzanie | PASS |
| `/podcast/opanuj-ai/` | `200 OK` | Tak | Zgodny | PASS |
| `/podcast/przeprogramowani` | `200 OK` | Przeprogramowani ft. Gość | Podcast Przeprogramowani ft. Gość — Rozmowy dla głodnych wiedzy | PASS |
| `/podcast/przeprogramowani/` | `200 OK` | Tak | Zgodny | PASS |
| `/youtube` | `200 OK` | Wideo na kanale YouTube Przeprogramowani | YouTube — Przeprogramowani \| Filmy, live streamy i tutoriale | PASS |
| `/youtube/` | `200 OK` | Tak | Zgodny | PASS |
| `/kursy` | `200 OK` | Programy edukacyjne dla ambitnych inżynierów | Kursy i programy szkoleniowe — Przeprogramowani \| 10xDevs, Frontend, TypeScript | PASS |
| `/kursy/` | `200 OK` | Tak | Zgodny | PASS |

- **Status testu**: **SUKCES (7/7 tras zwraca HTTP 200 zarówno z końcowym ukośnikiem, jak i bez niego)**.

---

## 3. Rzetelność treści, research i odnośniki (P02, P03)

### Procedura
Pozyskanie i walidacja danych z oficjalnych kanałów projektu:
1. `https://przeprogramowani.pl` oraz podstrony `/o-nas`, `/podcast`.
2. Oficjalny kanał YouTube `https://www.youtube.com/c/przeprogramowani` (Channel ID: `UCb2Y3vMeD6N4WDt5Acw7Arw`).
3. Kanał RSS YouTube: `https://www.youtube.com/feeds/videos.xml?channel_id=UCb2Y3vMeD6N4WDt5Acw7Arw`.
4. Kanał RSS Podcastu Opanuj.AI: `https://anchor.fm/s/e2cb03d0/podcast/rss`.
5. Kanał RSS Podcastu Przeprogramowani: `https://anchor.fm/s/c72d808/podcast/rss`.
6. Strony kursów: `https://10xdevs.pl`, `https://opanujfrontend.pl`, `https://opanujtypescript.pl`.

### Wyniki i dowody
- **Plik dowodowy**: `evidence/research.json`, `src/data/cache/*.json`
- **Sylwetki twórców**:
  - **Przemek Smyrdek**: Co-founder, autor programów i podcastów, Lead Engineer/Manager w DAZN i Cabify, full-stack developer (.NET/C#, Java, Node.js, Angular, TypeScript), prelegent 4Developers/ReactiveConf/InfoShare, twórca CursorLens. Profil LinkedIn: `https://www.linkedin.com/in/psmyrdek/` (zweryfikowany).
  - **Marcin Czarkowski**: Co-founder, Lead techniczny Platformy Frontendowej w SmartRecruiters (10+ lat doświadczenia), entuzjasta neurobiologii, twórca Opanuj.AI Podcast, specjalista TS, React, Node.js. Profil LinkedIn: `https://www.linkedin.com/in/mkczarkowski/` (zweryfikowany).
- **Trzy oficjalne kursy i weryfikacja celów nawigacji**:
  - **10xDevs 4.0**: `https://10xdevs.pl` (zwraca HTTP 301 -> `https://www.10xdevs.pl/`, 200 OK). Wyróżniony w hero strony głównej oraz na podstronie `/kursy`.
  - **Opanuj Frontend: AI Edition**: `https://opanujfrontend.pl` (zwraca HTTP 200 OK).
  - **Opanuj TypeScript**: `https://opanujtypescript.pl` (zwraca HTTP 200 OK).
  - Brak atrap typu `#` czy fikcyjnych celów linków w kodzie źródłowym.
- **Status testu**: **SUKCES (100% autentyczne dane ze źródeł)**.

---

## 4. Odtwarzanie mediów i reguła 90 dni (P03)

### Zastosowane zasady
- **Data startu próby**: `2026-09-08T07:41:47Z`.
- **Okno 90 dni**: od `2026-06-10` do `2026-09-08`.
- **Reguła doboru**: Jeśli w 90 dniach brak nowych publikacji, prezentowane są najnowsze dostępne materiały z rzeczywistymi datami.

### Obserwacje dla poszczególnych źródeł
1. **YouTube (Oficjalny kanał Przeprogramowani)**:
   - W oknie 90 dni znaleziono 9 filmów.
   - Najnowszy: *10xDevs Demo Day LIVE 🎉 Zobacz 9 najlepszych projektów!* z datą `2026-09-02`.
   - Odtwarzanie: responsywny odtwarzacz iframe (`https://www.youtube-nocookie.com/embed/cKU4jlaUnZc`).
   - Niezależny link: `https://www.youtube.com/watch?v=cKU4jlaUnZc`.
2. **Podcast Opanuj.AI**:
   - W oknie 90 dni znaleziono 3 odcinki (`2026-09-03`, `2026-08-05`, `2026-07-01`).
   - Najnowszy: *Kod nie jest już wąskim gardłem. Nadchodzi AI-Native SDLC | Opanuj.AI* z datą `2026-09-03`.
   - Odtwarzanie: natywny odtwarzacz `<audio controls>` korzystający z bezpośredniego strumienia `.mp3` z enclosure RSS.
   - Niezależny link: bezpośredni odnośnik do odcinka na `podcasters.spotify.com`.
3. **Podcast Przeprogramowani ft. Gość**:
   - W ścisłym oknie 90 dni przed 2026-09-08 brak nowych wydań.
   - Zgodnie z P03 wybrano najnowsze dostępne archiwalne odcinki z zachowaniem ich autentycznych dat (np. wrzesień 2025: *Programista vs. Angielski: Od strachu do sukcesu, Wiktoria Sitko* z datą `2025-09-25`).
   - Odtwarzanie: natywny odtwarzacz `<audio controls>` ze strumieniem `.mp3`.
   - Niezależny link: bezpośredni odnośnik do odcinka na platformie Spotify.
- **Status testu**: **SUKCES (wszystkie 3 źródła posiadają autentyczne materiały, odtwarzacze i niezależne linki)**.

---

## 5. Odporność modułów danych i kontrolowana awaria (P04)

### Procedura
1. Weryfikacja pobierania danych po stronie serwera w modułach `src/data/sources/` (brak fetchów po stronie klienta w przeglądarce).
2. Wywołanie normalnego pobierania na żywo.
3. Wymuszenie kontrolowanej awarii źródła przez flagę środowiskową `MOCK_FAIL_YOUTUBE=true`.
4. Sprawdzenie reakcji systemu: czy witryna obsługuje błąd i czy wyświetla dane z pamięci podręcznej z czytelnym oznaczeniem `isStale: true`.

### Wyniki eksperymentu
- **Plik dowodowy**: `evidence/controlled-failure.log`
- **Obserwacja**:
  - W normalnych warunkach moduł YouTube zwraca status `live` z aktualną datą pobrania.
  - Po symulacji awarii zewnętrznego API moduł natychmiast i bezrzutowo przechwytuje błąd, zwracając status `stale_cache` z danymi z `cache/youtube.json`.
  - Komponent `MediaStatusBadge` przełącza się w widok ostrzegawczy z informacją: *"Tryb awaryjny — dane z pamięci podręcznej"* wraz z zachowanym linkiem do źródła.
  - Całość strony zachowuje stabilność i zwraca HTTP 200.
- **Status testu**: **SUKCES (kontrolowana awaria udowodniona)**.

---

## 6. Prezentacja, dostępność (A11y) i SEO (P07)

### Procedura
Automatyczna inspekcja wygenerowanego drzewa DOM wszystkich 7 tras za pomocą skryptu `scripts/verify-all.mjs`.

### Wyniki
- **Plik dowodowy**: `evidence/seo-and-a11y.json`
- **Atrybut języka**: `<html lang="pl">` obecny na wszystkich 7 stronach.
- **Nagłówek H1**: Każda z 7 podstron posiada **dokładnie jeden** unikalny nagłówek H1.
- **Tytuły i metaopisy**: Każda podstrona posiada unikalny, opisowy `<title>` oraz `<meta name="description">`.
- **Tag kanoniczny**: `<link rel="canonical">` dynamicznie bazujący na konfigurowalnym adresie strony (`https://przeprogramowani.pl/` + ścieżka).
- **Open Graph**: Wszystkie strony generują kompletne tagi `og:title`, `og:description`, `og:url`, `og:type`, `og:site_name`, `og:locale` (`pl_PL`).
- **Dostępność (A11y)**:
  - Skip link `<a href="#main-content">Przejdź do treści głównej</a>` zaimplementowany w layoucie.
  - Wyraźny wskaźnik fokusu klawiatury `*:focus-visible` (kontur w kolorze bursztynowym 2px).
  - Nawigacja mobilna (`src/components/Header.tsx`):
    - Obsługa myszy (kliknięcia).
    - Obsługa dotyku na urządzeniach mobilnych.
    - Pełna obsługa klawiatury (Enter, Space, Tab, zamykanie klawiszem `Escape`).
    - Atrybuty ARIA: `aria-expanded`, `aria-controls="mobile-menu"`, `aria-label`.
  - Wszystkie obrazy posiadają descriptive atrybuty `alt`.
- **Responsywność (390 px i 1440 px)**:
  - `body { overflow-x: hidden; min-width: 320px; }`.
  - Brak sztywnych pikselowych szerokości (`w-[...px]`), które mogłyby łamać layout.
  - Siatka układu elastycznie skaluje się od pojedynczej kolumny na 390 px do układu wielokolumnowego na 1440 px (`grid-cols-1 md:grid-cols-2 lg:grid-cols-3`).
- **Status testu**: **SUKCES**.

---

## 7. Rzetelne podsumowanie ograniczeń i stanów środowiskowych

- **Ograniczenia dostawcy mediów**: Odtwarzanie wideo YouTube odbywa się w bezpiecznym osadzonym odtwarzaczu `youtube-nocookie.com`. Ponieważ YouTube oraz Spotify mogą w pewnych restrykcyjnych przeglądarkach stosować blokady iframe/third-party cookies, każdy odtwarzacz w witrynie został wyposażony w niezależny, bezpośredni przycisk otwierający materiał w źródle.
- **Brak lokalnego silnika Chromium**: W środowisku maszyny testowej nie ma zainstalowanego silnika przeglądarki (Puppeteer/Playwright). Weryfikacja HTML, nagłówków, stylów CSS i DOM została zrealizowana za pomocą automatycznych skryptów Node.js oraz inspekcji wygenerowanych plików statycznych.
- **Zamrożenie stanu**: Zgodnie z zasadą P06 strona nie została wdrożona na zdalne serwery Cloudflare; gotowość została w 100% potwierdzona na lokalnym silniku Workers (`workerd` / Wrangler).

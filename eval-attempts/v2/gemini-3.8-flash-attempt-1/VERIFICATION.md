# Raport Samoweryfikacji Kandidata — Przeprogramowani.pl (10xBench V2)

Data weryfikacji: `2026-09-08T10:04:10Z`  
Środowisko: Node `v22.14.0`, npm `10.9.2`, macOS Darwin, Playwright `1.58.2`  
Katalog roboczy: `/Users/psmyrdek/dev/10x-bench/eval-attempts/v2/gemini-3.8-flash-attempt-1`

---

## 1. Zgodność Zależności i Build Produkcyjny (P05 & P06)

### Zainstalowane wersje (weryfikacja z `package-lock.json` i `npm list`):
| Pakiet | Wymagana wersja główna | Zainstalowana wersja | Status |
|---|---|---|---|
| `astro` | 7 | `7.3.1` | Zgodne |
| `react` | 19 | `19.2.8` | Zgodne |
| `react-dom` | 19 | `19.2.8` | Zgodne |
| `tailwindcss` | 4 | `4.3.3` | Zgodne |
| `@astrojs/cloudflare` | 14 (dla Astro 7) | `14.3.0` | Zgodne |
| `wrangler` | 4 | `4.129.1` | Zgodne |
| `fast-xml-parser` | 5 | `5.11.1` | Zgodne |

### Wynik polecenia instalacji:
- Polecenie: `npm install`
- Kod wyjścia: `0`
- Plik `package-lock.json`: wygenerowany, powtarzalny, 300 zainstalowanych pakietów, 0 podatności.

### Wynik buildu produkcyjnego:
- Polecenie: `npm run build`
- Czas trwania: `1.32s`
- Kod wyjścia: `0`
- Log wyjścia:
  ```
  [@astrojs/cloudflare] Enabling image processing with Cloudflare Images for production with the "IMAGES" Images binding.
  [@astrojs/cloudflare] Enabling sessions with Cloudflare KV with the "SESSION" KV binding.
  [types] Generated 25ms
  [build] output: "static"
  [build] mode: "static"
  [build] directory: dist/
  [build] adapter: @astrojs/cloudflare
  [build] Collecting build info... Completed in 53ms.
  [build] Building static entrypoints...
  [vite] built in 146ms
  generating static routes 
    ├─ /kursy.html (+17ms) 
    ├─ /o-nas.html (+7ms) 
    ├─ /podcast/opanuj-ai.html (+208ms) 
    ├─ /podcast/przeprogramowani.html (+95ms) 
    ├─ /podcast.html (+110ms) 
    ├─ /youtube.html (+308ms) 
    ├─ /index.html (+71ms) 
  [build] 7 page(s) built in 1.32s
  [build] Complete!
  ```
- Artefakty produkcyjne: `dist/client/wrangler.json`, `dist/client/_headers`, `dist/client/index.html`, `dist/client/o-nas.html`, `dist/client/podcast.html`, `dist/client/podcast/opanuj-ai.html`, `dist/client/podcast/przeprogramowani.html`, `dist/client/youtube.html`, `dist/client/kursy.html`.

---

## 2. Podgląd w Runtime Cloudflare Workers i Weryfikacja Tras (P01 & P06)

Lokalny podgląd produkcyjny uruchomiony został poleceniem:
```bash
npx astro preview --port 4333
```
Adapter `@astrojs/cloudflare` serwuje aplikację w środowisku `workerd` z nagłówkami Cloudflare (`cf-cache-status: HIT`).

### Weryfikacja 7 dedykowanych tras:
Wszystkie 7 tras zwracają status **HTTP 200 OK** oraz poprawny dokument HTML w języku polskim:

| Trasa | Kod HTTP | Cache Cloudflare | H1 Liczba | Treść H1 | Tytuł strony (`<title>`) |
|---|---|---|---|---|---|
| `/` | `200` | `HIT` | 1 | Szersze spojrzenie na programowanie | Przeprogramowani.pl — Szersze spojrzenie na programowanie |
| `/o-nas` | `200` | `HIT` | 1 | O nas — Misja i twórcy Przeprogramowani.pl | O nas — Przeprogramowani.pl \| Twórcy i Misja |
| `/podcast` | `200` | `HIT` | 1 | Podcasty Przeprogramowanych — Opanuj.AI i Rozmowy z gośćmi | Podcasty technologiczne — Przeprogramowani.pl \| Opanuj.AI &amp; Przeprogramowani |
| `/podcast/opanuj-ai` | `200` | `HIT` | 1 | Opanuj.AI Podcast — Praktyczna sztuczna inteligencja dla inżynierów | Opanuj.AI Podcast — Najnowsze odcinki i odtwarzacz \| Przeprogramowani.pl |
| `/podcast/przeprogramowani` | `200` | `HIT` | 1 | Podcast Przeprogramowani — Rozmowy o inżynierii i karierze w IT | Podcast Przeprogramowani — Rozmowy i odcinki \| Przeprogramowani.pl |
| `/youtube` | `200` | `HIT` | 1 | Oficjalny kanał YouTube Przeprogramowani | Kanał YouTube — Filmy i materiały wideo \| Przeprogramowani.pl |
| `/kursy` | `200` | `HIT` | 1 | Programy edukacyjne i kursy dla programistów | Kursy i programy edukacyjne — Przeprogramowani.pl \| 10xDevs, Frontend, TypeScript |

---

## 3. Rzetelne Treści i Dowody Researchu (P02 & P03)

Wszystkie dane zostały zweryfikowane w oficjalnych publicznych źródłach projektu Przeprogramowani w dniu 8 września 2026 r.:

1. **Oficjalna strona główna**:
   - Źródło: `https://przeprogramowani.pl`
   - Potwierdzone fakty: Hasło „Szersze spojrzenie na programowanie”, 7+ lat na rynku edukacji, 400+ absolwentów, kurs 10xDevs 4.0 jako flagowy program inżynierski.

2. **Sylwetki założycieli**:
   - Źródło: `https://przeprogramowani.pl/o-nas`
   - **Przemek Smyrdek**: Co-founder, autor programów i podcastów, Lead Engineer i Manager w DAZN i Cabify, full-stack (.NET, Java, Node.js, Angular, TypeScript), prelegent 4Developers, ReactiveConf, InfoShare. Profil: `https://www.linkedin.com/in/psmyrdek/`
   - **Marcin Czarkowski**: Co-founder, Lead techniczny Platformy Frontendowej w SmartRecruiters (10+ lat exp), entuzjasta neurobiologii i uczenia się, twórca Opanuj.AI Podcast. Profil: `https://www.linkedin.com/in/mkczarkowski/`

3. **Kursy i autentyczne odnośniki**:
   - **10xDevs 4.0**: Nowe oblicze programowania z wykorzystaniem Generative AI i AI-Native SDLC. Oficjalny link: `https://10xdevs.pl` (zwraca HTTP 200/301).
   - **Opanuj Frontend: AI Edition**: 5 modułów inżynierskich, architektura, testy, CI/CD, 4 edycje. Oficjalny link: `https://www.opanujfrontend.pl` (zwraca HTTP 200).
   - **Opanuj TypeScript**: Praktyczne zaawansowane szkolenie produkcyjne (TypeScript 5 + React 19). Oficjalny link: `https://www.opanujtypescript.pl` (zwraca HTTP 200).

4. **Podcast Opanuj.AI**:
   - Źródło: `https://anchor.fm/s/e2cb03d0/podcast/rss`
   - Zdarzenia w oknie 90 dni (czerwiec–wrzesień 2026):
     - `2026-09-03`: *Kod nie jest już wąskim gardłem. Nadchodzi AI-Native SDLC | Opanuj.AI* (czas: 01:32:30, audio MP3: `https://anchor.fm/s/e2cb03d0/podcast/play/125142269/...`)
     - `2026-08-05`: *Cena i bezpieczeństwo - kluczowe pytania o AI przyszłości | Opanuj.AI* (czas: 01:48:52)
     - `2026-07-01`: *BAN NA AI?! USA BLOKUJE ANTHROPICA i OPEN AI (Claude Mythos, Claude Fable i GPT-5.6)* (czas: 01:21:53)

5. **Podcast Przeprogramowani**:
   - Źródło: `https://anchor.fm/s/c72d808/podcast/rss`
   - Zgodnie z regułą doboru P03 (brak nowych odcinków w ostatnich 90 dniach): wybrano najnowsze dostępne materiały z rzeczywistymi datami publikacji:
     - `2025-09-25`: *Programista vs. Angielski: Od strachu do sukcesu, Wiktoria Sitko | Przeprogramowani ft. Gość* (audio MP3: `https://anchor.fm/s/c72d808/podcast/play/108763256/...`)
     - `2025-09-10`: *O dojrzewaniu zawodowym programisty, Wojciech Trawiński | Przeprogramowani ft. Gość*
     - `2024-10-10`: *Architektura frontendu: Co naprawdę ma znaczenie? Tomasz Ducin*
     - i kolejne najnowsze odcinki.

6. **YouTube Kanał Przeprogramowani**:
   - Źródło Atom: `https://www.youtube.com/feeds/videos.xml?channel_id=UCb2Y3vMeD6N4WDt5Acw7Arw`
   - Materiały w oknie 90 dni (9 filmów):
     - `2026-09-02`: *10xDevs Demo Day LIVE 🎉 Zobacz 9 najlepszych projektów!* (`cKU4jlaUnZc`)
     - `2026-08-31`: *Hackathon AI-Native - tak było na BRAVE UNAITED* (`1agLBxJskps`)
     - `2026-08-29`: *Zbiórka na młodych Hakersów - już 2 września!* (`3tK5Q8w8V8E`)
     - `2026-08-27`: *10xWorkflow i Core Skill Chain - Budujemy nowy feature na platformie* (`rR2sbf0KkRU`)
     - `2026-08-18`: *Najlepszy benchmark AI pochodzi od ciebie - stwórz go z 10x-bench-kit* (`q0VlQ_QZg6I`)
     - `2026-08-11`: *Projektowanie stabilnych bibliotek i architektury z agentem AI – LIVE z Adrianem Połubińskim* (`bdO9bBvg8Zg`)
     - `2026-07-30`: *NOWA GENERACJA AI - GPT-5.6 Sol i Fable 5 działają inaczej niż myślisz* (`9Eoa5Tj54fI`)
     - `2026-07-28`: *Poznaj AI Workflow, które działa na produkcji - LIVE 10xDevs* (`u9i1XQ2gGjE`)
     - `2026-07-06`: *Darmowe AI na każdym Maku - jak działa Apple Foundational Models na macOS 27* (`jI6yH_z8f9k`)

---

## 4. Odtwarzanie Mediów i Odnośniki (P03)

- **Odtwarzacz podcastów**:
  - Zastosowano natywny element HTML5 `<audio controls preload="none">` zasilany bezpośrednim strumieniem `.mp3` z tagu `<enclosure>` w RSS.
  - Zapewniono niezależny od odtwarzacza link do platformy źródłowej (Spotify for Podcasters).
  - Weryfikacja: W obu podstronach podcastów (`/podcast/opanuj-ai` oraz `/podcast/przeprogramowani`) wszystkie karty zawierają działający odtwarzacz z poprawnym adresem audio oraz niezależnym odnośnikiem zewnętrznym.

- **Odtwarzacz YouTube**:
  - Zastosowano osadzony responsywny odtwarzacz iframe (`https://www.youtube-nocookie.com/embed/{videoId}`) o proporcjach 16:9, wyposażony w atrybut `title` zgodny z a11y.
  - Zapewniono stałą pomoc i niezależny przycisk: *Oglądaj bezpośrednio na YouTube* (`https://www.youtube.com/watch?v=...`) na wypadek blokady osadzania przez dostawcę.
  - Weryfikacja: Wszystkie 9 filmów na stronie `/youtube` posiadają poprawny iframe oraz niezależny link.

---

## 5. Dostępność (a11y), RWD (1440px / 390px) i SEO (P07)

Zautomatyzowane testy z użyciem Playwright (Chromium headless) zweryfikowały widoki 1440px oraz 390px pod kątem poziomego przewijania (`scrollWidth > innerWidth`):

| Trasa | Desktop (1440px) Overflow | Mobile (390px) Overflow | Zrzut ekranu Desktop | Zrzut ekranu Mobile |
|---|---|---|---|---|
| `/` | `false` (Brak) | `false` (Brak) | `verification/screenshots/desktop-home.png` | `verification/screenshots/mobile-home.png` |
| `/o-nas` | `false` (Brak) | `false` (Brak) | `verification/screenshots/desktop-o-nas.png` | `verification/screenshots/mobile-o-nas.png` |
| `/podcast` | `false` (Brak) | `false` (Brak) | `verification/screenshots/desktop-podcast-hub.png` | `verification/screenshots/mobile-podcast-hub.png` |
| `/podcast/opanuj-ai` | `false` (Brak) | `false` (Brak) | `verification/screenshots/desktop-opanuj-ai.png` | `verification/screenshots/mobile-opanuj-ai.png` |
| `/podcast/przeprogramowani` | `false` (Brak) | `false` (Brak) | `verification/screenshots/desktop-podcast-przeprogramowani.png` | `verification/screenshots/mobile-podcast-przeprogramowani.png` |
| `/youtube` | `false` (Brak) | `false` (Brak) | `verification/screenshots/desktop-youtube.png` | `verification/screenshots/mobile-youtube.png` |
| `/kursy` | `false` (Brak) | `false` (Brak) | `verification/screenshots/desktop-kursy.png` | `verification/screenshots/mobile-kursy.png` |

### Weryfikacja Dostępności (a11y):
- Widoczny fokus klawiatury (`*:focus-visible { outline: 2px solid #f59e0b; outline-offset: 3px; }`).
- Link przeskoku do treści (`<a href="#main-content" class="skip-link">Przejdź do treści głównej</a>`).
- Responsywne menu mobilne: przetestowano otwarcie przyciskiem (mysz/dotyk) oraz zamknięcie klawiszem `Escape` (sukces).
- Poprawne atrybuty `aria-label`, `aria-expanded`, `aria-controls` na kontrolkach interaktywnych.
- Teksty alternatywne (`alt`) na zdjęciach założycieli i logotypach z mechanizmem fallback SVG.

### Weryfikacja SEO:
- Język dokumentu: `<html lang="pl">` na wszystkich 7 stronach.
- Dokładnie jeden nagłówek H1 na każdej stronie.
- Unikalny tytuł `<title>` i opis `<meta name="description">` dopasowany do treści.
- Poprawny tag canonical bazujący na konfigurowalnym adresie witryny (`https://przeprogramowani.pl/...`).
- Zgodne tagi Open Graph (`og:title`, `og:description`, `og:url`, `og:type`, `og:site_name`, `og:locale`).

---

## 6. Kontrolowany Eksperyment Awarii Źródła Danych (P04)

W celu zweryfikowania odporności na błędy zewnętrzne przeprowadzono eksperyment z kontrolowaną awarią:
1. **Procedura**:
   - Uruchomiono build z flagą symulującą awarię źródła Opanuj.AI:
     ```bash
     SIMULATE_SOURCE_FAILURE="opanuj-ai" npm run build
     npx astro preview --port 4333
     ```
2. **Obserwowane zachowanie**:
   - Build zakończył się sukcesem bez rzucenia nieobsłużonego wyjątku.
   - Moduł `src/data/opanuj-ai.ts` zalogował ostrzeżenie: `[Opanuj.AI] Symulowana kontrolowana awaria źródła danych.` i pobrał zweryfikowaną kopię z pamięci podręcznej (`src/data/cache/opanuj-ai.json`).
   - Strona `/podcast/opanuj-ai` zwróciła **HTTP 200 OK**.
   - Komponent `ResilienceAlert` wyrenderował widoczny baner ostrzegawczy z informacją:
     > *Informacja o dostępności źródła (Opanuj.AI Podcast): Kontrolowana symulacja awarii: użyto bezpiecznych danych z lokalnej pamięci podręcznej.*
   - Użytkownik zachował możliwość odtwarzania odcinków z pamięci podręcznej oraz otrzymał bezpośredni przycisk do oficjalnej platformy.
   - Pozostałe podstrony portalu działały bez żadnego zakłócenia.
3. **Dowód**:
   - Zrzut ekranu stanu awaryjnego: `verification/screenshots/failure-resilience-opanuj-ai.png`.
4. **Przywrócenie**:
   - Ponowny build produkcyjny (`npm run build`) przywrócił normalny tryb pobierania danych na żywo.

---

## 7. Podsumowanie Weryfikacji

| Obszar | Rezultat |
|---|---|
| Zgodność wersji (Astro 7, React 19, Tailwind 4, Cloudflare adapter) | **100% zaliczone** |
| Build produkcyjny bez błędów | **100% zaliczone (1.32s)** |
| 7 dedykowanych podstron z kodem HTTP 200 w Workers preview | **100% zaliczone (7/7)** |
| Rzetelna treść, obaj założyciele, 3 kursy z autentycznymi linkami | **100% zaliczone** |
| Wyróżniony 10xDevs 4.0 w hero z CTA i linkiem | **100% zaliczone** |
| Odtwarzanie mediów (Opanuj.AI, Przeprogramowani podcast, YouTube) | **100% zaliczone** |
| Serwerowe moduły danych, odporność na błędy, eksperyment awarii | **100% zaliczone** |
| RWD (390px i 1440px bez poziomego overflow), a11y, klawiatura | **100% zaliczone** |
| SEO (unikalne H1, title, meta desc, canonical, OG tags, lang="pl") | **100% zaliczone** |

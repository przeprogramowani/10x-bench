# Dowody researchu (P02/P03)

Czas startu próby (operator): **2026-09-08T07:29:49Z**. Pobranie danych: **2026-09-08, ok. 07:31–07:40 UTC** (curl / iTunes API, z maszyny próby). Surowe, przycięte zrzuty odpowiedzi: `evidence/research/*-snapshot.*`.

## Źródła i kluczowe fakty

### 1. Strona oficjalna — https://przeprogramowani.pl/ (pobrano 07:32 UTC)
- Hasło/pozycjonowanie: „Przeprogramowani — Szersze spojrzenie na programowanie".
- Hero oficjalnej strony: kurs **10xDevs 4.0** → link `https://10xdevs.pl` („Nowe oblicze programowania z wykorzystaniem Generatywnego AI. Techniki i narzędzia pozwalające świadomie stosować AI w całym cyklu wytwarzania oprogramowania.").
- Produkty/kursy i prawdziwe linki:
  - **10xDevs** → `https://10xdevs.pl`
  - **Opanuj Frontend: AI Edition** → `https://www.opanujfrontend.pl` („5 obszernych modułów o frontendzie, testowaniu, CI/CD, open source i architekturze aplikacji webowych. Cztery edycje i prawie 400 absolwentów!")
  - **Opanuj TypeScript** → `https://www.opanujtypescript.pl` („Pracujemy z najnowszymi wersjami TypeScript 5 i React 19!")
  - (dodatkowo na stronie: Opanuj AI → `https://opanuj.ai`, 10xRules.ai → `https://10xrules.ai`)
- Kontakt: `kontakt@przeprogramowani.pl`; „7 lat na rynku edukacji technologicznej".

### 2. O nas — https://przeprogramowani.pl/o-nas (pobrano 07:33 UTC, zrzut: page-o-nas-snapshot.html)
- Misja: „Łączymy świat programowania, biznesu i rozwoju"; „Wierzymy, że najlepsi programiści to ci, którzy patrzą szerzej — na architekturę, na biznes, na ludzi i na siebie. Tworzymy treści, kursy i narzędzia...".
- **Przemek Smyrdek** — Co-founder, Przeprogramowani. Autor programów edukacyjnych, kursów i podcastów. Lead Engineer i Manager w DAZN i Cabify. Full-stack developer (.NET/C#, Java, Node.js, Angular, TypeScript). Prelegent na 4Developers, ReactiveConf i InfoShare. Kontrybutor Open Source (CursorLens, openapi-typescript). LinkedIn: `https://www.linkedin.com/in/psmyrdek/`
- **Marcin Czarkowski** — Co-founder, Przeprogramowani. Lead techniczny Platformy Frontendowej w SmartRecruiters z ponad 10-letnim doświadczeniem. Entuzjasta neurobiologii, tworzący materiały edukacyjne w oparciu o badania nad uczeniem się. Twórca „Opanuj AI Podcast" — najpopularniejszego technicznego podcastu o LLM w Polsce. Specjalista TypeScript, React, Node.js. LinkedIn: `https://www.linkedin.com/in/mkczarkowski/`

### 3. Katalog podcastów — https://przeprogramowani.pl/podcast (pobrano 07:33 UTC, zrzut: page-podcast-snapshot.html)
- Dwa podcasty:
  - **Opanuj.AI Podcast** — „Ponad 4000 słuchaczy", „Comiesięczne podsumowanie najważniejszych wydarzeń ze świata AI". Spotify: `https://open.spotify.com/show/4qHUZJpeBK8Ij9e2wTVm2o`; strona: `https://podcasters.spotify.com/pod/show/opanujai`.
  - **Przeprogramowani ft. Gość** — „Ponad 3800 słuchaczy", „Rozmowy dla głodnych wiedzy". Apple Podcasts: `https://podcasts.apple.com/pl/podcast/przeprogramowani/id1508387250`; strona: `https://podcasters.spotify.com/pod/show/przeprogramowani`.

### 4. Feedy RSS podcastów (odkryte przez iTunes Search API, 07:35 UTC)
- Zapytanie: `https://itunes.apple.com/search?term=przeprogramowani&media=podcast` →
  - `1690353799 Opanuj.AI Podcast | https://anchor.fm/s/e2cb03d0/podcast/rss`
  - `1471770526 Przeprogramowani | https://anchor.fm/s/c72d808/podcast/rss`
- **Opanuj.AI Podcast** RSS pobrano 07:36 UTC (zrzut: feed-opanujai-snapshot.xml, 148 kB). Najnowszy `pubDate`: **Thu, 03 Sep 2026 10:00:50 GMT** (≤ 90 dni od startu próby). Kolejne: 2026-08-05, 2026-07-01, 2026-06-03, 2026-05-01.
- **Przeprogramowani** RSS pobrano 07:37 UTC (zrzut: feed-przeprogramowani-snapshot.xml, 306 kB). Najnowszy `pubDate`: **Thu, 25 Sep 2025 04:00:00 GMT** — brak publikacji w oknie 90 dni przed startem próby ⇒ zgodnie z P03 pokazujemy najnowszy dostępny materiał z rzeczywistą datą. Linki odcinków prowadzą do `https://podcasters.spotify.com/pod/show/przeprogramowani/episodes/...`.
- Feedy zawierają `<enclosure>` z plikami audio (MP3) — używane przez natywny odtwarzacz `<audio>`.

### 5. YouTube — kanał Przeprogramowani (pobrano 07:33 i 07:36 UTC)
- Handle: `https://www.youtube.com/@przeprogramowani`; channel_id (wyciągnięty z HTML kanału): **UCb2Y3vMeD6N4WDt5Acw7Arw**.
- Feed Atom: `https://www.youtube.com/feeds/videos.xml?channel_id=UCb2Y3vMeD6N4WDt5Acw7Arw` — odpowiedź 200, `<title>Przeprogramowani</title>` (zrzut: feed-youtube-snapshot.xml).
- Najnowsze filmy: „10xDevs Demo Day LIVE 🎉 Zobacz 9 najlepszych projektów!" (published **2026-09-02**, `https://www.youtube.com/watch?v=cKU4jlaUnZc`), „Hackathon AI-Native - tak było na BRAVE UNAITED" (**2026-08-31**, `...v=1agLBxJskps`) — w oknie 90 dni.

## Odwzorowanie w implementacji
Adresy feedów i daty pobrania są zapisane także w `src/data/sources.ts` oraz w snapshocie pamięci podręcznej `data/cache/*.json` (pole `fetchedAt`). Strony nie zawierają ręcznie wpisanych list odcinków — elementy pochodzą wyłącznie z modułów `src/data/` (fetch → walidacja → normalizacja → cache).

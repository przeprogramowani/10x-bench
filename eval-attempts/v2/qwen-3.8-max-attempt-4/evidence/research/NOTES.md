# Dowody researchu — Przeprogramowani.pl

Czas pobrania wszystkich źródeł: **2026-09-08, ok. 07:35–07:52 UTC** (start próby: 2026-09-08T07:29:49Z).
Narzędzie: `curl` (HTTP 200 dla wszystkich poniższych, poza oznaczonymi). Surowe odpowiedzi feedów zapisane w tym katalogu.

## Źródła i fakty

### 1. Strona główna projektu
- URL: `https://przeprogramowani.pl/` (zapis: `/tmp/pp-home.html`, pobrano 07:33 UTC, HTTP 200)
- Title: "Przeprogramowani - Szersze spojrzenie na programowanie"
- Meta description: "Kursy i szkolenia dla programistow - JavaScript, TypeScript, AI, GitHub Actions. Blog techniczny, podcast i newsletter dla ambitnych developerow."
- Odnośniki kursów znalezione na stronie: `https://10xdevs.pl`, `https://opanujfrontend.pl` (www.opanujfrontend.pl), `https://www.opanujtypescript.pl`, `https://opanuj.ai`
- Kanał YouTube: `https://youtube.com/c/przeprogramowani`

### 2. O nas (sylwetki założycieli)
- URL: `https://przeprogramowani.pl/o-nas` (pobrano 07:35 UTC, HTTP 200)
- **Przemek Smyrdek** — Co-founder; autor programów edukacyjnych, kursów i podcastów; Lead Engineer i Manager w DAZN i Cabify; full-stack (.NET/C#, Java, Node.js, Angular, TypeScript); prelegent 4Developers, ReactiveConf, InfoShare; kontrybutor open source (CursorLens, openapi-typescript). LinkedIn: `https://www.linkedin.com/in/psmyrdek/`
- **Marcin Czarkowski** — Co-founder; lead techniczny Platformy Frontendowej w SmartRecruiters, 10+ lat doświadczenia; entuzjasta neurobiologii; twórca "Opanuj AI Podcast"; specjalista TypeScript, React, Node.js. LinkedIn: `https://www.linkedin.com/in/mkczarkowski/`
- Wartości: "Łączymy świat programowania, biznesu i rozwoju"; "7 lat na rynku edukacji technologicznej"; klienci/partnerzy: Huuuge Games, Nutridome, SmartRecruiters, Future Processing, Callstack, edrone, Xfive, Euvic, Strabag, Autodesk
- Kontakt: `kontakt@przeprogramowani.pl`

### 3. Katalog podcastów
- URL: `https://przeprogramowani.pl/podcast` (pobrano 07:35 UTC, HTTP 200)
- Dwa podcasty: **Opanuj.AI** (`podcasters.spotify.com/pod/show/opanujai`) i **Przeprogramowani** (`podcasters.spotify.com/pod/show/przeprogramowani`)
- Apple Podcasts (Przeprogramowani): `https://podcasts.apple.com/pl/podcast/przeprogramowani/id1508387250`
- Feed RSS podany na stronie (`anchor.fm/s/22544b7c/podcast/rss`) zwraca **HTTP 404** — nieaktualny.

### 4. Feedy RSS podcastów (rozwiązane przez strony show na Spotify for Podcasters)
- `https://podcasters.spotify.com/pod/show/przeprogramowani` → w HTML `rssFeedUrl: https://anchor.fm/c72d808/podcast/rss`; działający wariant: **`https://anchor.fm/s/c72d808/podcast/rss`** (HTTP 200, XML RSS, 98 `<item>`) — zapis: `feed-przeprogramowani.xml`
- `https://podcasters.spotify.com/pod/show/opanujai` → `rssFeedUrl: https://anchor.fm/e2cb03d0/podcast/rss`; działający wariant: **`https://anchor.fm/s/e2cb03d0/podcast/rss`** (HTTP 200, XML RSS, 53 `<item>`) — zapis: `feed-opanujai.xml`
- Najnowsze odcinki Opanuj.AI (w oknie 90 dni przed startem próby):
  - 2026-09-03 "Kod nie jest już wąskim gardłem. Nadchodzi AI-Native SDLC | Opanuj.AI"
  - 2026-08-05 "Cena i bezpieczeństwo - kluczowe pytania o AI przyszłości | Opanuj.AI"
  - 2026-07-01 "BAN NA AI?! USA BLOKUJE ANTHROPICA i OPEN AI (Claude Mythos, Claude Fable i GPT-5.6)"
- Podcast Przeprogramowani: najnowszy odcinek **2025-09-25** ("Programista vs. Angielski… Wiktoria Sitko"), kolejny 2025-09-10 — poza oknem 90 dni; zgodnie z P03 strona pokazuje najnowsze dostępne materiały z rzeczywistymi datami.
- Każdy `<item>` zawiera `<enclosure type="audio/mpeg">` — sprawdzone: URL audio zwraca 302 → 200 `audio/mpeg` (`evidence/audio-playback-check.log`).

### 5. Kanał YouTube
- `https://www.youtube.com/@przeprogramowani` (pobrano 07:34 UTC, HTTP 200) → canonical: `https://www.youtube.com/channel/UCb2Y3vMeD6N4WDt5Acw7Arw`
- Feed Atom: **`https://www.youtube.com/feeds/videos.xml?channel_id=UCb2Y3vMeD6N4WDt5Acw7Arw`** (HTTP 200, 15 `<entry>`) — zapis: `feed-youtube.xml`
- Najnowsze filmy (wszystkie w oknie 90 dni): 2026-09-02 "10xDevs Demo Day LIVE 🎉 Zobacz 9 najlepszych projektów!" (cKU4jlaUnZc); 2026-08-31 "Hackathon AI-Native - tak było na BRAVE UNAITED" (1agLBxJskps); 2026-08-29 Short "Zbiórka na młodych Hakersów" (09X1N549NAU); 2026-08-27 "10xWorkflow i Core Skill Chain…" (rR2sbf0KkRU); 2026-08-18 "Najlepszy benchmark AI pochodzi od ciebie - 10x-bench-kit" (MDZA6vww74g); 2026-08-11 "Projektowanie stabilnych bibliotek i architektury z agentem AI – LIVE" (bdO9bBvg8Zg)

### 6. Strony kursów
- `https://10xdevs.pl` (HTTP 200): title "10xDevs 4.0: Czas na AI-Native Software Engineering!"
- `https://www.opanujfrontend.pl` (HTTP 200): title "Opanuj Frontend: AI Edition ⚡️"; description "Kurs Opanuj Frontend: AI Edition to kluczowa wiedza dla nowoczesnego frontend developera."
- `https://www.opanujtypescript.pl` (HTTP 200): title "Opanuj TypeScript - Kurs TypeScript 5 i React 19"; description "Pracuj z najnowszą wersją TypeScript 5 w połączeniu z Reactem 19!"
- `https://opanuj.ai` (pobrano 07:35 UTC, HTTP 200): strona podcastu/kursu Opanuj.AI; potwierdza prowadzących (M. Czarkowski, P. Smyrdek) i odnośniki `podcasters.spotify.com/pod/show/opanujai`, `10xdevs.pl`.

## Pliki w tym katalogu
- `feed-przeprogramowani.xml`, `feed-opanujai.xml`, `feed-youtube.xml` — surowe odpowiedzi źródeł (pobrane 2026-09-08T07:41Z, patrz `fetched-at.txt`)
- `fetched-at.txt` — czas pobrania feedów
- `../../evidence/fetch-cache.log` — log skryptu cache (07:47 UTC, wszystkie 3 źródła OK)

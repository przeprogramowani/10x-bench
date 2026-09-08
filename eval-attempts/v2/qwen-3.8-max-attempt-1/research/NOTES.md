# Research notes (Przeprogramowani.pl)

Attempt start: 2026-09-08T07:29:49Z. All data retrieved 2026-09-08 ~07:31–07:38 UTC via curl/webfetch.
Raw responses saved in this directory (`research/`).

## Official website
- https://przeprogramowani.pl — fetched (research/home.html). Tagline: "Szersze spojrzenie na programowanie".
  Content: educational programs (Opanuj AI, Opanuj Frontend: AI Edition, Opanuj TypeScript), product 10xRules.ai,
  newsletter "PrzeprogramowanyNewsletter" (weekly, format 3-2-1), 7 lat na rynku edukacji technologicznej,
  clients: Huuuge Games, Nutridome, SmartRecruiters, Future Processing, Callstack, edrone, Xfive, Euvic, Strabag, Autodesk.
  Contact: kontakt@przeprogramowani.pl
- https://przeprogramowani.pl/o-nas — fetched (webfetch text). Founders:
  - Przemek Smyrdek — Co-founder Przeprogramowani. Autor programów edukacyjnych, kursów i podcastów.
    Lead Engineer i Manager w DAZN i Cabify. Full-stack developer (.NET/C#, Java, Node.js, Angular, TypeScript).
    Prelegent na 4Developers, ReactiveConf i InfoShare. Kontrybutor Open Source (CursorLens, openapi-typescript).
    LinkedIn: https://www.linkedin.com/in/psmyrdek/ | Twitter: https://twitter.com/psmyrdek
  - Marcin Czarkowski — Co-founder Przeprogramowani. Lead techniczny Platformy Frontendowej w SmartRecruiters,
    10+ lat doświadczenia. Entuzjasta neurobiologii, tworzy materiały edukacyjne w oparciu o badania nad uczeniem się.
    Twórca "Opanuj AI Podcast". Specjalista TypeScript, React, Node.js.
    LinkedIn: https://www.linkedin.com/in/mkczarkowski/ | Twitter: https://twitter.com/mkczarkowski
  - Mission: "programowanie spotyka się z rozwojem osobistym"; szerokie spojrzenie: architektura, biznes, ludzie.

## Courses (real product links, from przeprogramowani.pl)
- 10xDevs (Programuj z AI, "10xDevs 4.0"): https://10xdevs.pl (also https://www.10xdevs.pl)
- Opanuj Frontend (AI Edition): https://www.opanujfrontend.pl (also https://opanujfrontend.pl) — 5 modułów: frontend, testowanie, CI/CD, open source, architektura; cztery edycje, prawie 400 absolwentów
- Opanuj TypeScript: https://www.opanujtypescript.pl — szkolenie produkcyjne, TypeScript 5 + React 19
- Related: Opanuj AI: https://opanuj.ai ; 10xRules.ai: https://10xrules.ai

## Podcasts (from https://przeprogramowani.pl/podcast, fetched research/podcast.html)
- Two shows: "Opanuj.AI Podcast" and "Przeprogramowani".
- Directory links on page: Spotify show https://open.spotify.com/show/4qHUZJpeBK8Ij9e2wTVm2o,
  Apple https://podcasts.apple.com/pl/podcast/przeprogramowani/id1508387250,
  YouTube https://youtube.com/c/przeprogramowani.
- RSS feeds resolved via public iTunes Search/Lookup API (media=podcast, country=PL):
  - Opanuj.AI Podcast: collectionId 1690353799, feedUrl https://anchor.fm/s/e2cb03d0/podcast/rss, trackCount 53
  - Przeprogramowani: collectionId 1471770526, feedUrl https://anchor.fm/s/c72d808/podcast/rss, trackCount 98
  (Note: https://anchor.fm/s/22544b7c/podcast/rss linked on the podcast page returned "Not Found" — legacy feed URL.)
- Fetched feeds saved: research/rss-opanujai.xml (148 KB, 53 items), research/rss-przeprogramowani.xml (306 KB, 98 items).
- Freshness check vs attempt start (window 90 days = since 2026-06-10):
  - Opanuj.AI: latest "Kod nie jest już wąskim gardłem. Nadchodzi AI-Native SDLC | Opanuj.AI" — Thu, 03 Sep 2026 10:00:50 GMT (in window).
    Also "Cena i bezpieczeństwo..." 05 Aug 2026, "BAN NA AI?!..." 01 Jul 2026 (in window).
  - Przeprogramowani: latest "Programista vs. Angielski..." — Thu, 25 Sep 2025 (NOT in 90-day window) → per P03 rule
    show newest available items with their real dates.
  - Episode links: https://podcasters.spotify.com/pod/show/{opanujai|przeprogramowani}/episodes/<slug> (per-item <link>).
  - Enclosures: mp3 URLs present in feed (anchor.fm audio).

## YouTube
- Channel: Przeprogramowani, https://www.youtube.com/@Przeprogramowani (fetched research/yt.html)
- channelId: UCb2Y3vMeD6N4WDt5Acw7Arw (extracted from channel page HTML)
- RSS feed: https://www.youtube.com/feeds/videos.xml?channel_id=UCb2Y3vMeD6N4WDt5Acw7Arw
  Fetched: research/yt-feed.xml (31 KB, 15 entries).
- Latest (in window): "10xDevs Demo Day LIVE 🎉 Zobacz 9 najlepszych projektów!" 2026-09-02,
  "Hackathon AI-Native - tak było na BRAVE UNAITED" 2026-08-31, "Zbiórka na młodych Hakersów" 2026-08-29.
- Video links: https://www.youtube.com/watch?v=<videoId> (yt:videoId in Atom feed).
- Embed: https://www.youtube-nocookie.com/embed/<videoId> (iframe).

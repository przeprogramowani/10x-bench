# Dowody researchu — Przeprogramowani.pl (10xBench V2)

Data pobrania wszystkich źródeł: **2026-09-08, ok. 07:31–07:40 UTC** (start próby 07:29:49Z).
Surowe odpowiedzi zapisano w tym katalogu (`research/*.html`, `research/*.xml`, `research/*.json`).

## Oficjalna strona i produkty

| Źródło | URL | Plik | Kluczowe fakty |
| --- | --- | --- | --- |
| Strona główna | https://przeprogramowani.pl | `przeprogramowani-home.html` | Hasło „Szersze spojrzenie na programowanie”; wyróżniony kurs „10xDevs 4.0 — Programuj z AI” (link https://10xdevs.pl); kursy: Opanuj Frontend: AI Edition (https://www.opanujfrontend.pl, „5 obszernych modułów… cztery edycje i prawie 400 absolwentów”), Opanuj TypeScript (https://www.opanujtypescript.pl, „TypeScript 5 i React 19”); „7 lat na rynku edukacji technologicznej”; klienci: Huuuge Games, Nutridome, SmartRecruiters, Future Processing, Callstack, edrone, Xfive, Euvic, Strabag, Autodesk; kontakt kontakt@przeprogramowani.pl; social: facebook.com/przeprogramowani, instagram.com/przeprogramowani, newsletter przeprogramowani.substack.com |
| O nas | https://przeprogramowani.pl/o-nas | `o-nas.html` | „Łączymy świat programowania, biznesu i rozwoju”. Przemek Smyrdek (co-founder): autor programów edukacyjnych, kursów i podcastów; Lead Engineer i Manager w DAZN i Cabify; full-stack (.NET/C#, Java, Node.js, Angular, TypeScript); prelegent 4Developers, ReactiveConf, InfoShare; kontrybutor Open Source (CursorLens, openapi-typescript); LinkedIn: https://www.linkedin.com/in/psmyrdek/. Marcin Czarkowski (co-founder): lead techniczny Platformy Frontendowej w SmartRecruiters, 10+ lat doświadczenia; entuzjasta neurobiologii; twórca „Opanuj AI Podcast”; specjalista TypeScript, React, Node.js; LinkedIn: https://www.linkedin.com/in/mkczarkowski/ |
| Katalog podcastów | https://przeprogramowani.pl/podcast | `podcast.html` | Dwa podcasty: Opanuj.AI (odcinki na podcasters.spotify.com/pod/show/opanujai) i Przeprogramowani (odcinki na podcasters.spotify.com/pod/show/przeprogramowani); link Apple Podcasts id1508387250 |
| Opanuj AI (produkt) | https://opanuj.ai | `opanuj-ai.html` | Warsztaty, podcast, blog i ebooki o AI; link do profilu podcastu https://podcasters.spotify.com/pod/show/opanujai |
| Opanuj Frontend | https://opanujfrontend.pl | (pobrano do /tmp, nagłówek w historii sesji) | „Opanuj Frontend: AI Edition — kluczowa wiedza dla nowoczesnego frontend developera” (meta description) |

## Feedy mediów (źródła danych strony)

| Źródło | URL feedu | Plik | Fakty |
| --- | --- | --- | --- |
| Opanuj.AI Podcast (RSS) | https://anchor.fm/s/e2cb03d0/podcast/rss | `podcast-opanujai.xml` (148 KB, 53 odcinki) | Tytuł kanału „Opanuj.AI Podcast”, autor Przeprogramowani; opis: cykliczne podsumowanie nowinek ze świata AI, prowadzą Marcin Czarkowski i Przemek Smyrdek. Najnowsze odcinki w oknie 90 dni od startu próby: „Kod nie jest już wąskim gardłem. Nadchodzi AI-Native SDLC” (2026-09-03), odc. z 2026-08-05 i 2026-07-01. Feed znaleziony przez iTunes Search API (`itunes-search-opanujai.json`, collectionId 1690353799). |
| Podcast Przeprogramowani (RSS) | https://anchor.fm/s/c72d808/podcast/rss | `podcast-przeprogramowani.xml` (306 KB, 98 odcinków) | Tytuł kanału „Przeprogramowani”, opis „szersze spojrzenie na programowanie. Zapraszają Marcin Czarkowski i Przemek Smyrdek”. **Brak odcinków w oknie 90 dni** — najnowszy: „Programista vs. Angielski… Wiktoria Sitko” (link e38lmlo, pubDate 2025-09-25) i „O dojrzewaniu zawodowym programisty, Wojciech Trawiński” (e380adn) — zgodnie z zasadą pokazano najnowsze dostępne materiały z rzeczywistymi datami. Feed z iTunes Search API (`itunes-search-prz.json`, collectionId 1471770526); odcinki zgodne z listą na przeprogramowani.pl/podcast. |
| YouTube — kanał Przeprogramowani | https://www.youtube.com/feeds/videos.xml?channel_id=UCb2Y3vMeD6N4WDt5Acw7Arw | `yt-feed.xml` (15 filmów) | ID kanału odczytany z `yt-main.html` (og:url https://www.youtube.com/channel/UCb2Y3vMeD6N4WDt5Acw7Arw, handle @Przeprogramowani). Najnowsze filmy (w oknie 90 dni): „10xDevs Demo Day LIVE 🎉…” (2026-09-02, cKU4jlaUnZc), „Hackathon AI-Native - tak było na BRAVE UNAITED” (2026-08-31, 1agLBxJskps), „Zbiórka na młodych Hakersów…” (2026-08-29), „10xWorkflow i Core Skill Chain…” (2026-08-27), „Najlepszy benchmark AI pochodzi od ciebie…” (2026-08-18) i in. |

## Uwagi

- `yt-channel.html` (pobrane z youtube.com/c/przeprogramowani) zawierał też ID innych kanałów (UCFqS-… = „Opanuj AI”, UCLlxU3… = „Przeprogramowany Podcast”); właściwy główny kanał zweryfikowano przez `og:url` na https://www.youtube.com/@Przeprogramowani.
- RSS podany na przeprogramowani.pl/podcast (anchor.fm/s/22544b7c) zwraca „Not Found" (obserwacja z 07:33Z, odpowiedź 9-bajtowa; plik nadpisany później pełnym feedem) — użyto aktualnego feedu z iTunes Search API.
- Apple Podcasts id1508387250 nie zwraca wyniku w iTunes Lookup API (usunięty/zmieniony) — dlatego strona linkuje profile Spotify for Podcasters (zweryfikowane) zamiast tego ID.
- Dostawca anchor.fm wymagał nagłówka User-Agent przeglądarki (bez niego pusta odpowiedź) — moduł pobierania ustawia taki nagłówek.

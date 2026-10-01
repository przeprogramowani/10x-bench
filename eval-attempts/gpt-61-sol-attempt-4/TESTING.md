# Weryfikacja — 1 października 2026

## Build i wdrożenie

- `npm run check` — 0 błędów, ostrzeżeń i sugestii.
- `npm run build` — 5 stron, sitemap i statyczne zasoby.
- `npx wrangler deploy --dry-run` — poprawne pakowanie zasobów Cloudflare, bez publikacji.
- Sprawdzono 94 odwołania do lokalnych plików i tras w wygenerowanym HTML — wszystkie istnieją.
- `npm run refresh:content` — 9 filmów z feedu YouTube, 12 odcinków z oficjalnej strony podcastu.

## Przeglądarka

Testy przeprowadzono w przeglądarce Codex, także na produkcyjnym buildzie serwowanym przez `astro preview`.

- Strona główna, O nas, Podcast i YouTube: szerokości 320, 390, 768 i 1280 px. Brak poziomego przewijania; jedna główna sekcja H1 na każdej stronie.
- Sprawdzono wizualnie stronę główną, karty kursów na telefonie i podstronę zespołu.
- Menu mobilne otwiera się i pozwala przejść do kursów.
- Zakładki workflow w hero przełączają zawartość.
- Zakładka Podcast na stronie głównej pokazuje 3 odcinki.
- Filtr YouTube ogranicza listę do wybranej kategorii; wyszukiwanie zwraca właściwy film.
- Odtwarzacz YouTube otwiera się, odtwarza nagranie i zamyka się przyciskiem.
- Filtr `ft. Gość` pokazuje 6 odcinków; wyszukiwanie `Angielski` zwraca jeden odcinek.
- Niepasujące zapytanie pokazuje stan braku wyników; `Pokaż wszystkie` przywraca 12 odcinków.
- Czysta sesja produkcyjna: brak błędów i ostrzeżeń konsoli po hydracji biblioteki publikacji.

Nie wykonano wdrożenia na konto Cloudflare. Dostępne konfiguracje i polecenia publikacji opisano w README.

# 10xBench V2 — strona Przeprogramowani.pl

Zbuduj kompletną, nowoczesną i responsywną stronę Przeprogramowani.pl w języku polskim. Samodzielnie zbierz informacje z oficjalnych źródeł w internecie, zaplanuj pracę, wykonaj implementację i sprawdź jej działanie. Otrzymujesz całe zadanie jednocześnie; wybór architektury i kolejności pracy należy do Ciebie. Masz maksymalnie 60 minut od uruchomienia próby, łącznie z researchem, kodowaniem i testami. Możesz skończyć wcześniej.

## P01 — Strony i nawigacja

Każdy z poniższych adresów ma być osobną stroną dostępną przez bezpośrednie wejście. Dopuszczalne są końcowe ukośniki w adresach.

| Adres | Zawartość |
| --- | --- |
| `/` | Przedstawienie projektu, wyróżniony kurs 10xDevs w hero z prawdziwym odnośnikiem do kursu oraz zapowiedzi pozostałych stron. |
| `/o-nas` | Działalność i wartości Przeprogramowanych oraz sylwetki Przemka Smyrdka i Marcina Czarkowskiego, zgodne ze źródłami. |
| `/podcast` | Katalog obu podcastów z opisami i odnośnikami do ich osobnych stron. |
| `/podcast/opanuj-ai` | Podcast Opanuj.AI: opis, najnowsze rzeczywiste odcinki, odtwarzanie i odnośniki do odcinków. |
| `/podcast/przeprogramowani` | Podcast Przeprogramowani: opis, najnowsze rzeczywiste odcinki, odtwarzanie i odnośniki do odcinków. |
| `/youtube` | Najnowsze rzeczywiste filmy oficjalnego kanału Przeprogramowani, odtwarzanie i odnośniki do filmów. |
| `/kursy` | Opanuj Frontend, Opanuj TypeScript i 10xDevs: opisy oraz prawdziwe odnośniki do kursów. |

Nawigacja globalna prowadzi do O nas, katalogu podcastów, YouTube i kursów. Ze wszystkich stron można wrócić na stronę główną. Katalog podcastów prowadzi do obu podcastów. Nawigacja mobilna działa myszą, dotykiem i klawiaturą. Wszystkie wymagane strony zwracają HTTP 200 i właściwy HTML w lokalnym podglądzie produkcyjnym.

## P02 — Rzetelna treść

Sprawdź aktualne informacje na oficjalnej stronie projektu i stronach produktów. Opisy mogą być napisane własnymi słowami; nie trzeba odtwarzać konkretnego tekstu ani nieaktualnych szczegółów zawodowych autorów. Nie wymyślaj nazwisk, doświadczenia, kursów, cytatów, statystyk ani odnośników. Nie używaj atrap CTA lub adresów `#` zamiast rzeczywistych celów nawigacji.

## P03 — Podcasty i YouTube

Dla każdego z dwóch podcastów i kanału YouTube pokaż niepusty wybór najnowszych materiałów z 90 dni poprzedzających start próby. Jeśli źródło niczego w tym okresie nie opublikowało, wybierz najnowszy dostępny materiał i pokaż jego rzeczywistą datę. Nie ma wymaganej liczby odcinków lub filmów ani premii za ich liczbę. Nie traktuj publikacji późniejszych niż start próby jako wymaganych.

Każdy element zawiera prawdziwy tytuł, identyfikację źródła, datę publikacji, jeśli źródło ją podaje, oraz oryginalny adres konkretnego odcinka lub filmu. Brakującą datę oznacz jako nieznaną. Zachowaj w danych lub dokumentacji adres źródła i czas pobrania. Zapisz dowody researchu: adresy i zwięzłe fakty lub odpowiedzi źródła, bez sekretów i zbędnego kopiowania pełnych treści.

Zapewnij osadzony odtwarzacz dostawcy albo odtwarzacz audio/wideo oraz niezależny od niego odnośnik do oryginału. Jeśli dostawca blokuje osadzenie, pokaż zrozumiałą informację lub stałą pomoc przy odtwarzaniu i zachowaj odnośnik do konkretnego materiału. Udokumentowane ograniczenie dostawcy nie jest błędem Twojej implementacji. Sam link do całego kanału lub podcastu nie zastępuje linków do dostępnych elementów.

## P04 — Pobieranie danych i obsługa awarii

Pobieraj zewnętrzne treści po stronie serwera w dedykowanych modułach źródeł danych. Możesz robić to podczas budowania albo obsługi żądania. Moduły pobierają, walidują i normalizują odpowiedzi; strony i komponenty prezentują otrzymane dane strukturalne. Pobieranie feedów w przeglądarce, umieszczenie logiki pobierania bezpośrednio w komponentach prezentacyjnych lub wyłącznie ręcznie wpisane listy nie spełniają tego wymagania.

Timeout, błąd HTTP lub nieprawidłowa odpowiedź jednego źródła nie mogą wyłączyć całej strony. Pokaż sprawdzone dane z pamięci podręcznej z oznaczeniem ich nieaktualności albo komunikat o niedostępności z linkiem do źródła. Nie przedstawiaj fikcyjnych danych jako pobranych. Poprawny pusty stan awaryjny nie dowodzi, że pobieranie rzeczywistych materiałów działa. Sprawdź także działającą ścieżkę pobierania oraz co najmniej jedną kontrolowaną awarię źródła.

## P05 — Technologie

Użyj Astro, React i Tailwind CSS w najnowszych stabilnych głównych wersjach dostępnych w chwili startu próby, zgodnie z dołączonym przez operatora zapisem wersji. Wykluczone są prerelease. Późniejsze wydanie nowej wersji głównej nie zmienia wymagań tej próby. W obrębie zapisanej wersji głównej wybór wydania patch/minor należy do Ciebie. Zapisz lockfile i faktycznie zainstalowane wersje; sama deklaracja zakresu w `package.json` nie wystarcza. Zapewnij powtarzalną instalację i działający build produkcyjny.

## P06 — Gotowość do Cloudflare Workers, bez publikowania

Zainstaluj zgodny z wybraną wersją Astro oficjalny adapter `@astrojs/cloudflare` i rzeczywiście skonfiguruj go w Astro. Konfiguracja musi odpowiadać wynikowi buildu oraz runtime Cloudflare Workers. Udostępnij lokalny podgląd produkcyjny w runtime Workers, obsługujący strony i zasoby. Statyczne pobieranie danych podczas buildu jest dopuszczalne.

W README opisz dokładne polecenia instalacji, buildu, lokalnego podglądu i przyszłego wdrożenia oraz potrzebne zmienne i bindingi. Korzystaj z mechanizmu właściwego dla zainstalowanej wersji adaptera: generowana konfiguracja jest dopuszczalna, ręczny plik Wrangler nie jest wymagany sam w sobie. Instrukcja musi wskazywać Workers, a nie Cloudflare Pages, i zgadzać się z rzeczywistymi artefaktami.

**Nie publikuj strony.** Nie wykonuj poleceń tworzących lub zmieniających zasoby zdalne. Nie potrzebujesz konta Cloudflare ani jego poświadczeń. Publiczny adres nie jest wymagany i nie daje punktów. Gotowość ocenimy na podstawie konfiguracji, wyniku buildu, lokalnego działania i instrukcji.

## P07 — Wygląd, dostępność i SEO

Zastosuj spójne style, typografię i kontrolki na wszystkich stronach. Sprawdź widoki o szerokości 390 px i 1440 px: bez poziomego przewijania całej strony, uciętych treści i niedostępnych przycisków. Zapewnij widoczny fokus klawiatury, zrozumiałe etykiety i odpowiednie teksty alternatywne obrazów.

Każda strona ma jeden główny nagłówek H1, własny opisowy tytuł i meta description, canonical oparty na konfigurowalnym adresie witryny oraz zgodne z treścią Open Graph title, description i URL. Język dokumentu to polski. Projekt graficzny należy do Ciebie; nie wymagamy odwzorowania istniejącej strony piksel po pikselu.

## P08 — Samoweryfikacja i zakończenie

Przed zakończeniem przygotuj `VERIFICATION.md`. Zapisz rzeczywiście wykonane polecenia i obserwacje, czas ich wykonania, kody wyjścia oraz odnośniki do logów, zrzutów ekranu lub innych dowodów w katalogu próby. Obejmij: zainstalowane wersje i build, lokalny Workers i wymagane adresy, research, odnośniki i odtwarzanie, widoki desktop/mobile, SEO oraz kontrolowaną awarię źródła.

Rozróżniaj sprawdzenia udane, nieudane, niewykonane i zablokowane zewnętrznie. Nie przedstawiaj planowanych testów jako wykonanych. Raportuj ograniczenia i pozostałe błędy. Udokumentowany nieudany test może otrzymać punkty za rzetelną samoweryfikację, ale nie za niedziałającą funkcję. Testy wykonane później przez oceniającego nie zastępują Twoich dowodów.

## P09 — Zasady próby i oceny

Pracuj wyłącznie w przydzielonym katalogu próby. Możesz czytać ten opis, dołączony zapis wersji oraz publiczne źródła i dokumentację. Nie czytaj innych prób, historycznych implementacji, wyników ocen ani instrukcji dla oceniającego. To ograniczenie proceduralne, a nie deklaracja technicznej izolacji katalogów. Naruszenie izolacji lub zakazu publikacji unieważnia próbę.

Całe zadanie realizujesz autonomicznie. Nie oczekuj kolejnych poleceń z nowymi wymaganiami. Po zadeklarowaniu zakończenia lub upływie 60 minut zapis próby zostaje zamrożony; późniejsza ocena nie otwiera rundy poprawek. Przerwa lub ponowne połączenie nie resetują limitu. W podsumowaniu podaj sposób lokalnego uruchomienia i wynik samoweryfikacji.

Ocena ma maksymalnie 100 punktów: działanie produkcyjne 10, strony i nawigacja 10, treść i kursy 10, media 15, źródła danych i odporność 10, technologie 10, konfiguracja Workers 5, prezentacja i SEO 10, samoweryfikacja 20. Szczegółowy jawny podział znajduje się w dołączonym `assessment.md` i jest częścią tego zadania. Nie oceniamy kolejności implementacji. Brak końcowego buildu nie kasuje niezależnie udokumentowanych osiągnięć. Nie ma dodatkowej uznaniowej kary punktowej. Wynik oczekujący na niezbędną ocenę ręczną nie zostanie opublikowany jako zakończony.

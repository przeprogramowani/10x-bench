# Przeprogramowani.pl - Nowoczesna Strona Projektu

Projekt strony internetowej dla Przeprogramowani.pl, stworzony w oparciu o Astro, React i Tailwind CSS.

## Funkcjonalności

- **Strona główna**: Hero section promująca program 10xDevs, sekcja z kursami (Opanuj Frontend, Opanuj TypeScript), ostatnie odcinki podcastu i filmy YouTube.
- **O nas**: Informacje o twórcach (Przemek Smyrdek, Marcin Czarkowski) i misji projektu.
- **Podcast**: Lista odcinków podcastu "Przeprogramowani" i "Opanuj.AI".
- **YouTube**: Lista ostatnich materiałów wideo.
- **Responsywność**: Pełna obsługa urządzeń mobilnych i desktopowych.

## Technologie

- **Astro**: Framework do budowy szybkich stron internetowych.
- **React**: Biblioteka do budowy interfejsu użytkownika (komponenty).
- **Tailwind CSS**: Framework CSS utility-first.
- **Lucide React**: Ikony.

## Uruchomienie lokalne

1. Zainstaluj zależności:
   ```bash
   npm install
   ```

2. Uruchom serwer developerski:
   ```bash
   npm run dev
   ```

3. Zbuduj wersję produkcyjną:
   ```bash
   npm run build
   ```

## Wdrożenie na Cloudflare Pages

Projekt jest gotowy do wdrożenia na Cloudflare Pages.

1. Połącz repozytorium z Cloudflare Pages.
2. Skonfiguruj ustawienia budowania:
   - **Framework preset**: Astro
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
3. Kliknij "Deploy".

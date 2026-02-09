# Przeprogramowani.pl - Astro Rebuild

Nowoczesna i responsywna strona projektu Przeprogramowani.pl, zbudowana w oparciu o Astro, React i Tailwind CSS.

## Funkcjonalności

- **Strona główna**: Hero sekcja promująca kurs 10xDevs oraz sekcja z kursami Opanuj Frontend i Opanuj TypeScript.
- **O nas**: Informacje o założycielach i misji.
- **Podcast**: Lista ostatnich odcinków podcastu.
- **YouTube**: Lista ostatnich filmów z kanału YouTube.
- **Responsywność**: Dostosowana do urządzeń mobilnych i desktopowych.

## Technologie

- **Astro**: Framework do budowy szybkich stron.
- **React**: Komponenty interaktywne (np. nawigacja mobilna).
- **Tailwind CSS**: Stylowanie utility-first.

## Uruchomienie

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

## Wdrożenie (Cloudflare)

Projekt jest skonfigurowany do wdrożenia na Cloudflare Pages.

1. Upewnij się, że masz zainstalowane `wrangler`.
2. Zaloguj się do Cloudflare: `npx wrangler login`.
3. Wdróż:
   ```bash
   npx wrangler pages deploy dist
   ```
   (Po zbudowaniu projektu komendą `npm run build`)

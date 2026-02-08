# Przeprogramowani Website

Nowoczesna strona projektu Przeprogramowani.pl stworzona w technologiach Astro, React i Tailwind CSS.

## Funkcjonalności

- **Strona Główna**: Hero section promująca kurs 10xDevs, sekcja z kursami, ostatnie materiały.
- **O nas**: Informacje o założycielach, misji i wartościach.
- **Podcast**: Lista ostatnich odcinków podcastów Przeprogramowani i Opanuj AI.
- **YouTube**: Przegląd najnowszych filmów z kanału.
- **Kursy**: Dedykowane podstrony dla kursów (Opanuj Frontend, Opanuj TypeScript, 10xDevs).

## Technologie

- [Astro](https://astro.build) - Framework
- [React](https://reactjs.org) - Komponenty UI
- [Tailwind CSS](https://tailwindcss.com) - Stylowanie
- [Cloudflare Pages](https://pages.cloudflare.com) - Deployment target

## Uruchomienie lokalne

1. Zainstaluj zależności:
   ```bash
   npm install
   ```

2. Uruchom serwer developerski:
   ```bash
   npm run dev
   ```

3. Otwórz [http://localhost:4321](http://localhost:4321) w przeglądarce.

## Deployment

Projekt jest skonfigurowany do deploymentu na Cloudflare Pages.

```bash
npm run build
```

Folder wyjściowy: `dist/` (lub zgodnie z konfiguracją adaptera Cloudflare).

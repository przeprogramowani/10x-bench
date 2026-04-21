# Przeprogramowani.pl - Strona projektu

Nowoczesna, responsywna strona projektu Przeprogramowani.pl zbudowana w stacku Astro + React + Tailwind CSS.

## Strony

- **Strona główna** (`/`) - Hero 10xDevs, sekcja kursów (Opanuj Frontend, Opanuj TypeScript), najnowsze filmy i podcasty, partnerzy, newsletter
- **O nas** (`/o-nas`) - Informacje o zespole, misja, wartości, statystyki
- **Podcast** (`/podcast`) - Lista ostatnich odcinków podcastu z linkami do platform streamingowych
- **YouTube** (`/youtube`) - Najnowsze filmy z kanału Przeprogramowanych

## Stack technologiczny

- **Astro 6.x** - Static Site Generator
- **React 19** - Komponenty interaktywne
- **Tailwind CSS 3.4** - Stylowanie
- **TypeScript** - Type safety

## Lokalny development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

Wynik buildu znajduje się w katalogu `dist/`.

## Wdrożenie na Cloudflare Pages

### Opcja 1: Wrangler CLI

```bash
npm run build
npx wrangler pages deploy dist
```

### Opcja 2: Git Integration (zalecane)

1. Wrzuć kod na repozytorium Git (GitHub/GitLab)
2. W panelu Cloudflare Pages utwórz nowy projekt i połącz z repozytorium
3. Ustaw:
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
4. Cloudflare Pages automatycznie zbuduje i wdroży stronę przy każdym pushu

### Opcja 3: Direct Upload

1. Wejdź w Cloudflare Pages → Create a project → Upload assets
2. Przeciągnij katalog `dist/` lub wybierz go ręcznie
3. Strona zostanie wdrożona natychmiast

## Struktura projektu

```
src/
  layouts/
    Layout.astro       # Główny layout z nawigacją i stopką
  pages/
    index.astro        # Strona główna
    o-nas.astro        # O nas
    podcast.astro      # Podcast
    youtube.astro      # YouTube
  styles/
    global.css         # Globalne style + Tailwind
public/
  favicon.ico
  favicon.svg
dist/                  # Wynik buildu (do wdrożenia)
```

## Dane

Wszystkie dane (odcinki podcastu, filmy YouTube, kursy) są zdefiniowane bezpośrednio w plikach `.astro` jako statyczne dane. W przyszłości można zastąpić je dynamicznym pobieraniem z API.

## Uwagi

- Strona jest w pełni statyczna (`output: 'static'` w `astro.config.mjs`)
- Brak zależności od zewnętrznych API w czasie buildu
- Wszystkie obrazy są ładowane z zewnętrznych źródeł (YouTube thumbnails, Unsplash)
- Gotowa do wdrożenia na Cloudflare Pages bez dodatkowej konfiguracji

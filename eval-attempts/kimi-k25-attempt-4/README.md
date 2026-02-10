# Przeprogramowani.pl - Nowoczesna strona projektu

Nowoczesna, responsywna strona internetowa stworzona dla Przeprogramowani.pl przy użyciu Astro, React i Tailwind CSS. Strona jest w pełni zoptymalizowana pod kątem wdrożenia na Cloudflare Pages.

## Funkcjonalności

- **Strona główna** z wyróżnieniem kursu 10xDevs
- **O nas** - informacje o zespole i misji
- **Kursy** - prezentacja programów szkoleniowych:
  - 10xDevs 3.0 - Programowanie z AI
  - Opanuj Frontend: AI Edition
  - Opanuj TypeScript: Frontend Pro
- **Podcast** - odcinki z Opanuj.AI Podcast i Przeprogramowani ft. Gość
- **YouTube** - najnowsze filmy i playlisty
- **Responsywny design** - działa na wszystkich urządzeniach
- **Menu mobilne** - intuicyjna nawigacja na telefonach

## Tech Stack

- **Astro 5.x** - Static Site Generator
- **React 19** - Komponenty interaktywne
- **Tailwind CSS 4.x** - Stylowanie
- **Lucide React** - Ikony
- **TypeScript** - Typowanie

## Wymagania

- Node.js 18+
- npm 9+

## Instalacja

```bash
# Klonowanie repozytorium
git clone <repo-url>
cd przeprogramowani-website

# Instalacja zależności
npm install

# Uruchomienie serwera deweloperskiego
npm run dev
```

Strona będzie dostępna pod adresem `http://localhost:4321`

## Build

```bash
# Produkcja build
npm run build

# Podgląd builda
npm run preview
```

Build zostanie wygenerowany w folderze `dist/`.

## Wdrożenie na Cloudflare Pages

### Opcja 1: Przez Dashboard Cloudflare

1. Zaloguj się do [Cloudflare Dashboard](https://dash.cloudflare.com)
2. Przejdź do **Pages** > **Create a project**
3. Połącz z repozytorium GitHub/GitLab lub prześlij folder `dist/` ręcznie
4. W ustawieniach build:
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
5. Kliknij **Save and Deploy**

### Opcja 2: Przez CLI Wrangler

1. Zainstaluj Wrangler:
```bash
npm install -g wrangler
```

2. Zaloguj się:
```bash
wrangler login
```

3. Wdróż:
```bash
npm run build
wrangler pages deploy dist
```

### Opcja 3: Git Integration

1. Wrzuć kod na GitHub/GitLab
2. W Cloudflare Pages wybierz **Connect to Git**
3. Wybierz repozytorium i branch
4. Ustawienia build:
   - **Framework preset:** Astro
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
5. Cloudflare będzie automatycznie deployować przy każdym pushu

## Struktura projektu

```
├── src/
│   ├── components/          # Komponenty React
│   │   ├── Navigation.tsx
│   │   ├── Hero.tsx
│   │   ├── Courses.tsx
│   │   └── Footer.tsx
│   ├── layouts/
│   │   └── Layout.astro     # Główny layout
│   ├── pages/               # Strony
│   │   ├── index.astro      # Strona główna
│   │   ├── o-nas.astro      # O nas
│   │   ├── kursy.astro      # Kursy
│   │   ├── podcast.astro    # Podcast
│   │   └── youtube.astro    # YouTube
│   └── styles/
│       └── global.css       # Style Tailwind
├── public/                  # Pliki statyczne
│   ├── _redirects          # Cloudflare redirects
│   ├── _routes.json        # Cloudflare routes
│   ├── favicon.svg
│   └── favicon.ico
├── astro.config.mjs
├── package.json
└── README.md
```

## Dostępne strony

- `/` - Strona główna z Hero i kursami
- `/o-nas` - O Przeprogramowanych, zespole i misji
- `/kursy` - Szczegóły programów szkoleniowych
- `/podcast` - Odcinki podcastów
- `/youtube` - Filmy i playlisty

## Dane projektu

Strona zawiera aktualne informacje o:
- 3700+ absolwentach kursów
- 15k+ członkach społeczności
- 7 latach działalności
- Podcastach (4000+ słuchaczy Opanuj.AI)
- Kursach: 10xDevs, Opanuj Frontend, Opanuj TypeScript

## Customizacja

### Zmiana kolorów
Kolory można zmienić w klasach Tailwind w komponentach. Główny motyw to:
- Primary: `purple-600` do `blue-600` (gradient)
- Background: `gray-50` (jasny), `gray-900` (ciemny)
- Text: `gray-900` (tytuły), `gray-600` (akapity)

### Dodawanie nowych kursów
Edytuj `src/components/Courses.tsx` i dodaj nowy obiekt do tablicy `courses`.

### Dodawanie odcinków podcastu
Edytuj `src/pages/podcast.astro` i dodaj nowy obiekt do odpowiedniej tablicy.

## SEO

Strona zawiera:
- Meta tagi description
- Semantic HTML
- Proper heading hierarchy
- Alt teksty dla obrazów

## Wydajność

- Static site generation (SSG)
- Optymalizacja obrazów przez Astro
- Minimal JavaScript (tylko interaktywne komponenty)
- Lazy loading dla zasobów

## Autorzy

Stworzone dla Przeprogramowani.pl przez Przemka Smyrdka i Marcina Czarkowskiego.

## Licencja

Wszelkie prawa zastrzeżone © 2025 Przeprogramowani.pl

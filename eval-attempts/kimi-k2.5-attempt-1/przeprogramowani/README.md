# Przeprogramowani.pl - Strona Projektowa

Nowoczesna, responsywna strona projektu Przeprogramowani.pl zbudowana z Astro, React i Tailwind CSS.

## Stack Technologiczny

- **Astro** - Framework do budowy szybkich stron statycznych
- **React** - Komponenty interaktywne
- **Tailwind CSS** - Stylowanie
- **Lucide React** - Ikony
- **TypeScript** - Typowanie

## Struktura Strony

- **Home** - Hero z 10xDevs, sekcja kursów (Opanuj Frontend, Opanuj TypeScript, 10xDevs), CTA
- **O nas** - Informacje o zespole, misja, wartości
- **Podcast** - Lista odcinków Opanuj AI Podcast
- **YouTube** - Najnowsze filmy i statystyki kanału

## Funkcjonalności

- Nowoczesny, responsywny design
- Optymalizacja pod urządzenia mobilne
- Szybkie ładowanie (statyczny HTML)
- SEO-friendly
- Integracja z social media
- Płynne animacje i przejścia

## Wdrożenie na Cloudflare Pages

### Opcja 1: CLI (zalecana)

1. Zainstaluj Wrangler:
```bash
npm install -g wrangler
```

2. Zaloguj się do Cloudflare:
```bash
wrangler login
```

3. Zbuduj projekt:
```bash
npm run build
```

4. Wdróż:
```bash
wrangler pages deploy dist
```

### Opcja 2: Git Integration

1. Wypchnij kod do repozytorium Git (GitHub/GitLab)
2. Zaloguj się do Cloudflare Dashboard
3. Przejdź do Pages > Create a project
4. Połącz z repozytorium
5. Ustaw:
   - Framework preset: Astro
   - Build command: `npm run build`
   - Build output directory: `dist`
6. Kliknij "Save and Deploy"

### Opcja 3: Upload manualny

1. Zbuduj projekt lokalnie:
```bash
npm run build
```

2. Przejdź do Cloudflare Dashboard > Pages
3. Create a project > Upload assets
4. Przeciągnij folder `dist`

## Lokalny development

```bash
# Instalacja zależności
npm install

# Start serwera developerskiego
npm run dev

# Build produkcyjny
npm run build

# Preview buildu
npm run preview
```

## Konfiguracja środowiska

Strona korzysta z domyślnej konfiguracji Astro dla Cloudflare Pages. 
Plik `astro.config.mjs` ma ustawione `output: 'static'` dla generowania statycznych plików.

## Domena

Po wdrożeniu, Cloudflare przypisze domyślną domenę w formacie:
`https://[project-name].pages.dev`

Możesz dodać własną domenę w ustawieniach projektu w Cloudflare Dashboard.

## Wymagania

- Node.js 18+
- npm 9+

## Autorzy

Projekt stworzony dla Przeprogramowani.pl
- Marcin Czarkowski
- Przemek Smyrdek

## Licencja

Wszystkie prawa zastrzeżone © 2025 Przeprogramowani.pl

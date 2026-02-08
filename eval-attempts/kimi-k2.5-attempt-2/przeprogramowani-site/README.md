# Przeprogramowani.pl - Nowoczesna strona projektu

Nowoczesna, responsywna strona projektu Przeprogramowani.pl zbudowana z Astro, React i Tailwind CSS.

## Technologie

- **Astro** - Framework do budowy szybkich stron statycznych
- **React** - Komponenty interaktywne
- **Tailwind CSS** - Stylowanie
- **TypeScript** - Typowanie

## Funkcjonalności

- Sekcja Hero z 10xDevs jako głównym produktem
- Strona "O nas" z informacjami o założycielach
- Sekcja Podcast z ostatnimi odcinkami
- Sekcja YouTube z najnowszymi filmami
- Sekcja Kursy (10xDevs, Opanuj Frontend, Opanuj TypeScript)
- W pełni responsywny design
- Optymalizacja pod Cloudflare Pages

## Wymagania

- Node.js 18+
- npm lub yarn

## Instalacja

```bash
# Zainstaluj zależności
npm install

# Uruchom serwer deweloperski
npm run dev

# Zbuduj projekt do produkcji
npm run build

# Podgląd wersji produkcyjnej
npm run preview
```

## Struktura projektu

```
przeprogramowani-site/
├── src/
│   ├── components/     # Komponenty Astro
│   │   ├── Navigation.astro
│   │   ├── Hero.astro
│   │   ├── About.astro
│   │   ├── Podcast.astro
│   │   ├── YouTube.astro
│   │   ├── Courses.astro
│   │   └── Footer.astro
│   ├── layouts/        # Layouty
│   │   └── Layout.astro
│   ├── pages/          # Strony
│   │   └── index.astro
│   └── styles/         # Style globalne
│       └── global.css
├── public/             # Pliki statyczne
├── astro.config.mjs    # Konfiguracja Astro
├── package.json
└── README.md
```

## Wdrożenie na Cloudflare Pages

### Opcja 1: Przez Git (zalecana)

1. Utwórz repozytorium na GitHub/GitLab
2. Wypchnij kod:
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin <URL_REPO>
git push -u origin main
```

3. Zaloguj się do [Cloudflare Dashboard](https://dash.cloudflare.com)
4. Przejdź do "Pages" > "Create a project"
5. Połącz z repozytorium Git
6. Ustaw:
   - **Framework preset**: Astro
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`

7. Kliknij "Save and Deploy"

### Opcja 2: Przez Wrangler CLI

1. Zainstaluj Wrangler:
```bash
npm install -g wrangler
```

2. Zaloguj się:
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

### Opcja 3: Upload ręczny

1. Zbuduj projekt:
```bash
npm run build
```

2. Wejdź w [Cloudflare Pages](https://dash.cloudflare.com)
3. Kliknij "Upload assets"
4. Przeciągnij folder `dist`

## Konfiguracja domeny

Po wdrożeniu możesz przypisać własną domenę:

1. W dashboardzie Cloudflare Pages przejdź do zakładki "Custom domains"
2. Kliknij "Set up a custom domain"
3. Wprowadź swoją domenę (np. `przeprogramowani.pl`)
4. Postępuj zgodnie z instrukcjami weryfikacji

## Optymalizacja SEO

Strona zawiera:
- Meta tagi opisujące treść
- Open Graph tagi dla mediów społecznościowych
- Semantyczny HTML5
- Optymalizację obrazów
- Szybkie ładowanie (Astro generuje statyczny HTML)

## Rozwój projektu

### Dodawanie nowych odcinków podcastu

Edytuj plik `src/components/Podcast.astro` i dodaj nowy obiekt do tablicy `podcastEpisodes`:

```astro
const podcastEpisodes = [
  {
    title: 'Tytuł odcinka',
    date: 'Data',
    duration: 'Czas trwania',
    image: 'URL do miniaturki',
    url: 'Link do odcinka',
    description: 'Opis odcinka'
  },
  // ...istniejące odcinki
];
```

### Dodawanie nowych filmów YouTube

Edytuj plik `src/components/YouTube.astro` i dodaj nowy obiekt do tablicy `youtubeVideos`.

## Wsparcie

W razie pytań lub problemów:
- Email: kontakt@przeprogramowani.pl
- Strona: https://przeprogramowani.pl

## Licencja

Wszystkie prawa zastrzeżone © 2026 Przeprogramowani.pl

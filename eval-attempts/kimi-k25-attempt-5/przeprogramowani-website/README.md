# Przeprogramowani.pl - Nowoczesna strona projektu

Nowoczesna, responsywna strona internetowa projektu Przeprogramowani.pl zbudowana w technologii Astro + React + Tailwind CSS.

## 🚀 Stack technologiczny

- **Astro 5.x** - Static Site Generator
- **React 19** - Komponenty interaktywne
- **Tailwind CSS 4.x** - Styling
- **TypeScript** - Type safety
- **Lucide React** - Ikony

## 📁 Struktura projektu

```
przeprogramowani-website/
├── src/
│   ├── components/     # Komponenty React
│   │   ├── Navigation.tsx
│   │   ├── Hero.tsx
│   │   ├── Courses.tsx
│   │   ├── YouTubeSection.tsx
│   │   ├── PodcastSection.tsx
│   │   ├── AboutPage.tsx
│   │   ├── PodcastPage.tsx
│   │   ├── YouTubePage.tsx
│   │   └── Footer.tsx
│   ├── layouts/        # Layouty Astro
│   │   └── Layout.astro
│   ├── pages/          # Strony
│   │   ├── index.astro
│   │   ├── o-nas.astro
│   │   ├── podcast.astro
│   │   └── youtube.astro
│   └── styles/         # Style CSS
│       └── global.css
├── public/             # Pliki statyczne
├── dist/              # Build output
├── astro.config.mjs
├── package.json
└── README.md
```

## 🎨 Strony

1. **Strona główna** (`/`) - Hero z 10xDevs, sekcje kursów, YouTube, podcasty
2. **O nas** (`/o-nas`) - Misja, wartości, zespół, partnerzy
3. **Podcast** (`/podcast`) - Lista podcastów i odcinków
4. **YouTube** (`/youtube`) - Filmy i webinary

## 🛠️ Kursy

- **10xDevs** - Programowanie z AI
- **Opanuj Frontend** - AI Edition
- **Opanuj TypeScript** - Frontend Pro

## 🚀 Deployment

### Cloudflare Pages

1. Zaloguj się do [Cloudflare Dashboard](https://dash.cloudflare.com)
2. Przejdź do Pages > Create a project
3. Połącz z repozytorium Git lub prześlij pliki bezpośrednio
4. Ustawienia build:
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
5. Kliknij "Save and Deploy"

### Inne platformy

Projekt generuje statyczne pliki HTML w katalogu `dist/`, które można wdrożyć na dowolnej platformie hostingowej (Netlify, Vercel, GitHub Pages, itp.)

## 📦 Lokalny development

```bash
# Instalacja zależności
npm install

# Serwer deweloperski
npm run dev

# Build produkcyjny
npm run build

# Podgląd buildu
npm run preview
```

## 🎯 Funkcjonalności

- ✅ Responsywny design (mobile-first)
- ✅ Ciemny motyw
- ✅ Animacje i efekty wizualne
- ✅ Optymalizacja SEO
- ✅ Szybkie ładowanie (static site)
- ✅ Integracja z zewnętrznymi kursami
- ✅ Linki do podcastów i YouTube

## 📝 Licencja

Projekt stworzony dla Przeprogramowani.pl

## 🤝 Kontakt

- Strona: [przeprogramowani.pl](https://przeprogramowani.pl)
- Email: kontakt@przeprogramowani.pl
- YouTube: [@przeprogramowani](https://youtube.com/c/przeprogramowani)

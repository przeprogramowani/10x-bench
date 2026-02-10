# Przeprogramowani.pl Website

Nowoczesna i responsywna strona projektu Przeprogramowani.pl stworzona w ramach 10xBench - Claude Sonnet 4.5 Attempt 1.

## 🚀 Stack Technologiczny

- **Astro 5** - Framework do budowy statycznych stron
- **React 18** - Biblioteka UI do interaktywnych komponentów
- **Tailwind CSS 3** - Framework CSS do stylowania
- **TypeScript 5** - Typowany superset JavaScript

## 📋 Wymagania

- Node.js 18+ lub nowszy
- npm, yarn, lub pnpm

## 🛠️ Instalacja

```bash
# Zainstaluj zależności
npm install

# lub
yarn install

# lub
pnpm install
```

## 🏃 Uruchomienie lokalnie

```bash
# Uruchom serwer deweloperski
npm run dev

# lub
yarn dev

# lub
pnpm dev
```

Strona będzie dostępna pod adresem `http://localhost:4321`

## 🏗️ Budowanie produkcyjne

```bash
# Zbuduj projekt
npm run build

# Podgląd wersji produkcyjnej
npm run preview
```

## 📁 Struktura projektu

```
/
├── public/              # Zasoby statyczne (favicon, obrazy)
├── src/
│   ├── components/      # Komponenty React
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   ├── Hero.tsx
│   │   ├── FeaturedContent.tsx
│   │   ├── Stats.tsx
│   │   ├── PodcastEpisode.tsx
│   │   └── VideoCard.tsx
│   ├── layouts/         # Layouty Astro
│   │   └── Layout.astro
│   ├── pages/           # Strony aplikacji (routing)
│   │   ├── index.astro      # Strona główna
│   │   ├── o-nas.astro      # O nas
│   │   ├── podcast.astro    # Podcast
│   │   └── youtube.astro    # YouTube
│   └── styles/          # Style globalne
│       └── global.css
├── astro.config.mjs     # Konfiguracja Astro
├── tailwind.config.mjs  # Konfiguracja Tailwind
├── tsconfig.json        # Konfiguracja TypeScript
└── package.json         # Zależności projektu
```

## 🌐 Wdrożenie na Cloudflare Pages

### Automatyczne wdrożenie przez GitHub

1. Zaloguj się do [Cloudflare Dashboard](https://dash.cloudflare.com/)
2. Przejdź do **Pages** > **Create a project**
3. Połącz repozytorium GitHub
4. Ustaw konfigurację budowania:
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
   - **Root directory:** `/` (lub odpowiednia ścieżka)
5. Kliknij **Save and Deploy**

### Ręczne wdrożenie przez Wrangler CLI

```bash
# Zbuduj projekt
npm run build

# Zainstaluj Wrangler globalnie (jeśli jeszcze nie jest zainstalowany)
npm install -g wrangler

# Wdróż na Cloudflare Pages
npx wrangler pages deploy dist
```

## ✨ Funkcjonalności

- ✅ Responsywny design (mobile-first)
- ✅ Hero section z kursami: Opanuj Frontend, Opanuj TypeScript, 10xDevs
- ✅ Strona główna z przeglądem oferty
- ✅ Strona "O nas" z informacjami o założycielach
- ✅ Strona Podcast z ostatnimi odcinkami
- ✅ Strona YouTube z najnowszymi filmami
- ✅ Nawigacja z menu mobilnym
- ✅ Footer z linkami do social media
- ✅ Sekcja statystyk
- ✅ CTA (Call To Action) do newslettera
- ✅ Optymalizacja SEO (meta tagi, opisy)
- ✅ Szybkie ładowanie (statyczna generacja)

## 📱 Strony

### Strona główna (/)
- Hero section z gradientem i kartami kursów
- Sekcja "Co oferujemy?" z 4 obszarami działalności
- Statystyki Przeprogramowani
- CTA do zapisu na newsletter

### O nas (/o-nas)
- Informacje o misji Przeprogramowani
- Sekcja z założycielami (Przemek Smyrdek, Marcin Czarkowski)
- Osiągnięcia w liczbach
- Partnerzy i firmy, które zaufały
- CTA

### Podcast (/podcast)
- Lista platform do słuchania (Spotify, Apple Podcasts, YouTube)
- Informacje o podcastach (Opanuj.AI, Przeprogramowani ft. Gość)
- 10 ostatnich odcinków z opisami
- CTA do subskrypcji

### YouTube (/youtube)
- Link do kanału YouTube
- Informacje o kanale
- 12 najnowszych materiałów wideo
- 3 playlisty tematyczne
- CTA do subskrypcji

## 🎨 Design

- Kolory: Primary (niebieski), Accent (fioletowy)
- Typografia: Inter (sans-serif), JetBrains Mono (monospace)
- Komponenty: Karty z hover effects, przyciski z transitions
- Gradientowe tła w hero sections
- Ikonografia SVG inline

## 📊 Dane

Strona wykorzystuje rzeczywiste dane o Przeprogramowani.pl zebrane ze źródeł:
- Oficjalna strona przeprogramowani.pl
- Informacje o kursach (opanujfrontend.pl, opanujtypescript.pl, 10xdevs.pl)
- Lista ostatnich odcinków podcastu
- Statystyki społeczności (15K+ subskrybentów, 400+ absolwentów, 7+ lat działalności)

## 🔧 Skrypty

- `npm run dev` - Uruchom serwer deweloperski
- `npm run build` - Zbuduj projekt do produkcji
- `npm run preview` - Podgląd zbudowanej wersji produkcyjnej
- `npm run astro` - Uruchom CLI Astro

## 📄 Licencja

Projekt stworzony w ramach 10xBench. Wszystkie prawa do treści należą do Przeprogramowani.

## 👥 Autorzy

- **Przeprogramowani Team** - [przeprogramowani.pl](https://przeprogramowani.pl)
- **Implementation** - Claude Sonnet 4.5 (Anthropic)

## 🔗 Linki

- [Przeprogramowani Website](https://przeprogramowani.pl)
- [Opanuj Frontend](https://opanujfrontend.pl)
- [Opanuj TypeScript](https://opanujtypescript.pl)
- [10xDevs](https://www.10xdevs.pl)
- [Newsletter](https://przeprogramowani.substack.com)
- [YouTube](https://www.youtube.com/@przeprogramowani)
- [Spotify Podcast](https://open.spotify.com/show/3yVvOAXSYq6sQB02w4A4wo)

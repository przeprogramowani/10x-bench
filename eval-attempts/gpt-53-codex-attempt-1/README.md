# Przeprogramowani.pl Showcase (Astro + React + Tailwind)

Nowoczesna, responsywna strona projektu **Przeprogramowani.pl** przygotowana w stacku:
- Astro 5
- React 19 (islands)
- Tailwind CSS 4
- Cloudflare Pages (build statyczny)

## Co zawiera

- Strona główna z hero i sekcjami kursów:
  - 10xDevs
  - Opanuj Frontend
  - Opanuj TypeScript
- `/o-nas`
- `/podcast` z najnowszymi odcinkami
- `/youtube` z ostatnimi filmami
- Automatyczne pobieranie treści z oficjalnych źródeł Przeprogramowani na etapie builda (z fallbackami)

## Uruchomienie lokalne

```bash
npm install
npm run dev
```

Aplikacja działa lokalnie pod `http://localhost:4321`.

## Build produkcyjny

```bash
npm run build
npm run preview
```

## Deploy na Cloudflare Pages

1. Utwórz projekt Pages i podłącz repozytorium.
2. Ustaw build command: `npm run build`.
3. Ustaw output directory: `dist`.

Alternatywnie przez CLI:

```bash
npx wrangler pages deploy dist --project-name <twoj-projekt-pages>
```

## Źródła danych

- `https://przeprogramowani.pl`
- `https://przeprogramowani.pl/o-nas`
- `https://przeprogramowani.pl/podcast`
- `https://10xdevs.pl`
- `https://opanujfrontend.pl`
- `https://opanujtypescript.pl`

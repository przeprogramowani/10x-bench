# Przeprogramowani.pl - Modern Website

This is a modern, responsive website for Przeprogramowani.pl, built with Astro, React, and Tailwind CSS. It is designed to be deployed on Cloudflare Pages.

## Tech Stack

-   **Framework**: Astro
-   **UI Library**: React
-   **Styling**: Tailwind CSS
-   **Deployment**: Cloudflare Pages (via `@astrojs/cloudflare` adapter)

## Features

-   **Hero Section**: Promotes the "10xDevs" program with AI focus.
-   **About Us**: Introduces the founders, Przemek Smyrdek and Marcin Czarkowski.
-   **Podcasts**: Displays recent episodes from "Opanuj.AI" and "Przeprogramowani".
-   **YouTube**: Showcases the latest videos from the channel.
-   **Courses**: Highlights "Opanuj Frontend" and "Opanuj TypeScript" courses.

## Project Structure

-   `src/components/`: Reusable UI components (Header, Footer, Hero, About, etc.).
-   `src/layouts/`: Main layout files.
-   `src/pages/`: Astro pages (index.astro).
-   `src/data/`: content.ts file containing site data.
-   `src/styles/`: Global styles (Tailwind imports).

## Development

```bash
npm run dev
```

## Build

```bash
npm run build
```

The output will be in the `dist/` directory, ready for Cloudflare Pages.

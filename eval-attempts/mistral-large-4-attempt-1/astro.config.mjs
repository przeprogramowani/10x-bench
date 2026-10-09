// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import cloudflare from '@astrojs/cloudflare';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://przeprogramowani.pl',
  // Strona nie używa sesji — wyłączamy auto-binding KV (SESSION) adaptera Cloudflare.
  session: false,
  // Wszystkie strony są statyczne (prerenderowane przy buildzie),
  // adapter Cloudflare obsługuje routing/worker przy wdrożeniu na Cloudflare Pages.
  adapter: cloudflare({
    // Brak komponentów <Image> — kompilacja obrazów przy buildzie zamiast bindingu IMAGES.
    imageService: 'compile',
    platformProxy: {
      enabled: true,
    },
  }),
  integrations: [react(), sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});

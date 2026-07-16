// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

// Statyczny build (dist/) — gotowy do wdrożenia na Cloudflare Pages.
export default defineConfig({
  site: 'https://przeprogramowani.pl',
  output: 'static',
  integrations: [react(), tailwind()],
});

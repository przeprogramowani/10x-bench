// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

// Static output — idealne do wdrożenia na Cloudflare Pages (katalog `dist`).
// https://astro.build/config
export default defineConfig({
  site: 'https://przeprogramowani.pl',
  output: 'static',
  integrations: [react(), tailwind()],
});

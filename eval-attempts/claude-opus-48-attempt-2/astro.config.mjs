// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
// Static output — deploys to Cloudflare Pages out of the box.
export default defineConfig({
  site: 'https://przeprogramowani.pl',
  output: 'static',
  integrations: [react(), tailwind(), sitemap()],
  build: {
    inlineStylesheets: 'auto',
  },
});

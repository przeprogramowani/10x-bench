import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
  site: 'https://przeprogramowani.pl',
  adapter: cloudflare({
    production: true,
  }),
  integrations: [
    react(),
    tailwind({
      applyBase: true,
    }),
  ],
});

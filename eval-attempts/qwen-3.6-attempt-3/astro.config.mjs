import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import cloudflare from '@astrojs/cloudflare';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://przeprogramowani.pl',
  adapter: cloudflare({}),
  integrations: [react(), tailwind()],
});

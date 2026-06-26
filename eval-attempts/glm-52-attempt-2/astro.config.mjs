// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
  output: 'static',
  adapter: cloudflare({ platformProxy: { enabled: false } }),
  integrations: [react(), tailwind()],
  site: 'https://przeprogramowani.pl',
});

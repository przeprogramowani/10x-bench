import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
  output: 'static',
  site: 'https://przeprogramowani.pl',
  adapter: cloudflare(),
  integrations: [react(), tailwind()],
});

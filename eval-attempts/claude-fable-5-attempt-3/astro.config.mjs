import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  output: 'static',
  site: 'https://przeprogramowani.pl',
  integrations: [react(), tailwind()],
  server: {
    port: process.env.PORT ? Number(process.env.PORT) : 4321,
  },
});

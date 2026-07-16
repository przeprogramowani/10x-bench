// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
// Static output — ready for Cloudflare Pages
// (build command: `npm run build`, output directory: `dist`)
export default defineConfig({
  output: 'static',
  integrations: [react(), tailwind()],
});

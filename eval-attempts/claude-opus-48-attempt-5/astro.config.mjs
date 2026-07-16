// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
// Static output deploys directly to Cloudflare Pages (build command: `npm run build`,
// output directory: `dist`). No server adapter needed for a fully pre-rendered site.
export default defineConfig({
  site: 'https://przeprogramowani.pl',
  integrations: [
    react(),
    tailwind({ applyBaseStyles: false }),
  ],
  output: 'static',
});

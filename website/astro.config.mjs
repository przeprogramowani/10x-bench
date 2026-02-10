import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://10xbench.ai',
  integrations: [react(), tailwind()],
  output: 'static',
});

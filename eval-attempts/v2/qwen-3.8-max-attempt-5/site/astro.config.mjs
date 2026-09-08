// @ts-check
import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';

// Configurable canonical site address (P07). Override with SITE_URL at build time.
const siteUrl = process.env.SITE_URL || 'http://localhost:8788';

export default defineConfig({
  site: siteUrl,
  output: 'static',
  adapter: cloudflare(),
  integrations: [react()],
  vite: {
    plugins: [tailwindcss()],
    define: {
      // Build-time switch for controlled source-failure testing (P04/P08).
      __FORCE_SOURCE_FAILURE__: JSON.stringify(process.env.FORCE_SOURCE_FAILURE ?? ''),
    },
  },
  trailingSlash: 'ignore',
});

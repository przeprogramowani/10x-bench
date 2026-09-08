import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import cloudflare from '@astrojs/cloudflare';
import tailwindcss from '@tailwindcss/vite';

const feedEnv = {
  offline: process.env.DATA_OFFLINE === '1',
  timeoutMs: Number(process.env.FETCH_TIMEOUT_MS ?? 10_000),
  recentWindowDays: Number(process.env.RECENT_WINDOW_DAYS ?? 90),
  urlOverrides: {
    'opanuj-ai': process.env.SOURCE_URL_OPANUJ_AI || '',
    'przeprogramowani-podcast': process.env.SOURCE_URL_PRZEPROGRAMOWANI_PODCAST || '',
    youtube: process.env.SOURCE_URL_YOUTUBE || '',
  },
};

export default defineConfig({
  site: process.env.SITE_URL ?? 'http://localhost:8787',
  output: 'static',
  adapter: cloudflare(),
  integrations: [react()],
  vite: {
    plugins: [tailwindcss()],
    define: {
      __FEED_ENV__: JSON.stringify(feedEnv),
    },
  },
});

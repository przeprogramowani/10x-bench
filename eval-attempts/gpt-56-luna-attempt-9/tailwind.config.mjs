/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        ink: '#182320',
        paper: '#f4f6f0',
        mint: '#c7f26e',
        lime: '#b7ed43',
        forest: '#12352d',
        line: '#d8dfd6'
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['"Space Grotesk"', 'Inter', 'ui-sans-serif', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'ui-monospace', 'monospace']
      },
      boxShadow: {
        card: '0 20px 50px rgba(24, 35, 32, 0.08)',
        soft: '0 10px 30px rgba(24, 35, 32, 0.06)'
      }
    }
  },
  plugins: []
};

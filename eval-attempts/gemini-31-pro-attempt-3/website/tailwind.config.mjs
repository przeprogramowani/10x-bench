/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: '#111827',
          blue: '#3b82f6',
          primary: '#0ea5e9', // e.g. typical Przeprogramowani accent
        }
      }
    },
  },
  plugins: [],
}

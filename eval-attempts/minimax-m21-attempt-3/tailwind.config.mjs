/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: '#e30f75',
        secondary: '#b90fe3',
        accent: '#3691ff',
        dark: '#0f172a',
        darker: '#020617'
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        heading: ['Sora', 'system-ui', 'sans-serif']
      }
    }
  },
  plugins: []
};

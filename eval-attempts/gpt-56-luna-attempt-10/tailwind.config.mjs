/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#101112',
        paper: '#f4f2ed',
        acid: '#d9ff55',
        violet: '#9d81ff',
        orange: '#ff7648',
      },
      fontFamily: {
        display: ['Space Grotesk', 'Arial', 'sans-serif'],
        mono: ['IBM Plex Mono', 'monospace'],
      },
    },
  },
  plugins: [],
};

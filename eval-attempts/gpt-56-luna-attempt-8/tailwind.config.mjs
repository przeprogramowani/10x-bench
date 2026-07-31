/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#101827',
        paper: '#f2f0e9',
        acid: '#d9f765',
        coral: '#ff725d',
      },
      fontFamily: {
        sans: ['DM Sans', 'Arial', 'sans-serif'],
        display: ['Space Grotesk', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

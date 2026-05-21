/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: '#0A0E17',
          darker: '#05070B',
          card: '#121824',
          accent: '#C4F347', // Przeprogramowani iconic lime-yellow accent
          secondary: '#38BDF8', // Cool cyan/blue
          purple: '#8B5CF6',
          orange: '#FF5E3A',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

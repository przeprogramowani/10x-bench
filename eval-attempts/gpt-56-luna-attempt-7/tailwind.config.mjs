/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#17182d',
        paper: '#f5f1e9',
        lime: '#d9fa69',
        coral: '#ff765e',
        lilac: '#b9a7ff',
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'ui-sans-serif', 'system-ui'],
        sans: ['"DM Sans"', 'ui-sans-serif', 'system-ui'],
      },
      boxShadow: {
        soft: '0 16px 50px rgba(23, 24, 45, 0.09)',
      },
    },
  },
  plugins: [],
};

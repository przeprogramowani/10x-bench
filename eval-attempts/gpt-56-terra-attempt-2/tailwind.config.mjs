/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["DM Mono", "monospace"],
        body: ["Manrope", "sans-serif"],
      },
    },
  },
  plugins: [],
};

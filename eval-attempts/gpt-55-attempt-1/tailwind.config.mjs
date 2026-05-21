/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        ink: "#101317",
        paper: "#f8faf7",
        line: "#dde4dc",
        fern: "#126a5a",
        lime: "#b7f063",
        amber: "#f6b73c",
        rose: "#d94773",
        ocean: "#1d6fb8"
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["Manrope", "Inter", "ui-sans-serif", "system-ui", "sans-serif"]
      },
      boxShadow: {
        soft: "0 24px 70px rgba(16, 19, 23, 0.12)"
      }
    }
  },
  plugins: []
};

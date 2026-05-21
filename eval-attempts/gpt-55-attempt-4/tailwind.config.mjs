/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        ink: "#101113",
        paper: "#f7f5ef",
        graphite: "#262a2f",
        ember: "#ef5a3c",
        citron: "#d9ff66",
        skyglass: "#b9e7ff",
        pine: "#0d3b35"
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["Sora", "Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "ui-monospace", "SFMono-Regular", "monospace"]
      },
      boxShadow: {
        soft: "0 24px 80px rgba(16, 17, 19, 0.12)"
      }
    }
  },
  plugins: []
};

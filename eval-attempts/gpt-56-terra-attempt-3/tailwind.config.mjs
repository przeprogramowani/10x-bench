/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#101116",
        paper: "#f5f3ed",
        signal: "#e6ff4e",
        iris: "#7667ff",
        ember: "#ff5a36",
      },
      boxShadow: {
        hard: "6px 6px 0 #101116",
        "hard-sm": "4px 4px 0 #101116",
      },
      fontFamily: {
        display: ["Space Grotesk", "Arial", "sans-serif"],
        mono: ["IBM Plex Mono", "SFMono-Regular", "Consolas", "monospace"],
      },
    },
  },
  plugins: [],
};

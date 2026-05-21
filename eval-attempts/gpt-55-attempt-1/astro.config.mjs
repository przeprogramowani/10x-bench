import { defineConfig } from "astro/config";
import react from "@astrojs/react";

export default defineConfig({
  site: "https://przeprogramowani-modern.pages.dev",
  output: "static",
  integrations: [react()]
});

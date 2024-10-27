import { defineConfig } from "astro/config";
import preact from "@astrojs/preact";
import sitemap from "@astrojs/sitemap";

import vue from "@astrojs/vue";

// https://astro.build/config
export default defineConfig({
  site: "https://tachyons.eu",
  integrations: [preact(), sitemap(), vue()],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          api: "modern-compiler",
        },
      },
    },
  },
});
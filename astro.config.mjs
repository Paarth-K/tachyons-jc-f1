import { defineConfig } from "astro/config";
import preact from "@astrojs/preact";
import sitemap from "@astrojs/sitemap";

import vue from "@astrojs/vue";

import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  site: "https://tachyons.paarthkukreja.com",
  integrations: [preact(), sitemap(), vue()],
  adapter: cloudflare(),
});

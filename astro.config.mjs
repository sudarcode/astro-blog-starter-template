// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  site: "https://sudarblogger.web.id",
  integrations: [mdx(), sitemap()],
  adapter: cloudflare({
    platformProxy: {
      enabled: false,
      {
  "$schema": "./node_modules/wrangler/config-schema.json",
  "name": "my-worker",
  "compatibility_date": "2025-12-15",
  "main": "src/index.ts",
  "assets": {
    "directory": "./public/",
    "binding": "ASSETS",
    "run_worker_first": true
  }
}
    },
  }),
});

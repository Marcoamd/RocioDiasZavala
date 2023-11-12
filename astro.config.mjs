import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
//   site: "http://localhost:4321",
//   base: "/",
//   site: "https://marcoamd.github.io",
//   base: "/RocioDiazZavala",
  site: "https://rociodiazzavala.com",
  base: "/",
});

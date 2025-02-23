import { defineConfig } from 'astro/config';

import netlify from "@astrojs/netlify/functions";

// https://astro.build/config
export default defineConfig({
  output: "static",
  adapter: netlify(),
  site: 'https://enzoyu-code.github.io',
  base: '/',
  build: {
    format: 'directory'
  }
});
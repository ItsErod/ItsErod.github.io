// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://itserod.github.io',
  server: {
    port: 43123,
    host: true,
  },
  preview: {
    port: 43123,
    host: true,
  },
});

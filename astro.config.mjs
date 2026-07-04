import { defineConfig } from 'astro/config';

// https://docs.astro.build/en/guides/deploy/github/
export default defineConfig({
  // Custom domain serves from the root, so no base path is needed.
  site: 'https://optimystikmassage.com',
});

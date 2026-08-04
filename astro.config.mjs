import { defineConfig } from 'astro/config';

// Deployed via Cloudflare Pages (git-connected, build command `npm run build`, output `dist`).
export default defineConfig({
  // Custom domain serves from the root, so no base path is needed.
  site: 'https://optimystikmassage.com',
});

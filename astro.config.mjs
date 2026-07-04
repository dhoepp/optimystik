import { defineConfig } from 'astro/config';

// https://docs.astro.build/en/guides/deploy/github/
export default defineConfig({
  // 1. Set this to your GitHub Pages URL:
  site: 'https://YOUR-USERNAME.github.io',
  // 2. If your repo is NOT named YOUR-USERNAME.github.io,
  //    uncomment and set the repo name:
  // base: '/YOUR-REPO-NAME',
});

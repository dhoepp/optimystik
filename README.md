# Optimystik Massage — website

Lightweight one-page Astro site for Optimystik Massage (Davenport, IA / Quad Cities), ready to deploy on GitHub Pages.

The design was created as an HTML design reference in a design tool; this repo is the production implementation — a single static page, no client-side JavaScript (the FAQ accordion uses native `<details>`).

## Before you deploy — TODOs

All editable content lives at the **top of `src/pages/index.astro`** (email, Square link) and in the page markup:

1. **Name + bio** — fill in the `[Name]` and `[bio]` placeholders in the About section.
2. **Photos** — add `public/images/studio.jpg` and `public/images/headshot.jpg`, then swap the placeholder `<div>`s for the `<img>` tags shown in the adjacent comments.
3. **Testimonials** — replace placeholder quotes, or set `SHOW_TESTIMONIALS = false` to hide the section.
4. **Square link** — already set; update if the URL changes. All booking buttons link here — there is no phone number on the site.

## Deploy to GitHub Pages

1. Create a new GitHub repo and push this folder's contents to the `main` branch.
2. Edit `astro.config.mjs`:
   - Set `site` to `https://YOUR-USERNAME.github.io`.
   - If the repo is **not** named `YOUR-USERNAME.github.io`, uncomment `base` and set it to `/YOUR-REPO-NAME`.
3. In the repo: **Settings → Pages → Build and deployment → Source: GitHub Actions**.
4. Push (or re-run the workflow). The included `.github/workflows/deploy.yml` builds and deploys automatically on every push to `main`.

Your site will be live at `https://YOUR-USERNAME.github.io/YOUR-REPO-NAME/` (or the root URL for a `username.github.io` repo).

## Local development

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # output in dist/
```

## Design tokens

- Background `#f7f6f9` · Ink `#2f2b36` · Muted `#5d5670`
- Lavender (primary) `#6f6491`, hover `#5d5379` · Plum band `#37324a`, cards `#453f5c`
- Sage (accent) `#71805f` · Care section bg `#edeaf3`
- Type: Lora (headings, serif) + Work Sans (body), via Google Fonts

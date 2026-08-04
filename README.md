# Optimystik Massage — website

Lightweight one-page Astro site for Optimystik Massage (Davenport, IA / Quad Cities), deployed on Cloudflare Pages.

The design was created as an HTML design reference in a design tool; this repo is the production implementation — a single static page, no client-side JavaScript (the FAQ accordion uses native `<details>`).

## Before you deploy — TODOs

All editable content lives at the **top of `src/pages/index.astro`** (Square link) and in the page markup:

1. **Name + bio** — fill in the `[Name]` and `[bio]` placeholders in the About section.
2. **Photos** — add `public/images/studio.jpg` and `public/images/headshot.jpg`, then swap the placeholder `<div>`s for the `<img>` tags shown in the adjacent comments.
3. **Testimonials** — replace placeholder quotes, or set `SHOW_TESTIMONIALS = false` to hide the section.
4. **Square link** — already set; update if the URL changes. All booking buttons link here — there is no phone number on the site.
5. **Contact form** — done: wired to the "Contact inquiries" Formspree form. Confirm the destination email via the link Formspree sends on first submission, and set the form's allowed domain to `optimystikmassage.com`.
6. **New client intake form** — done: wired to the "New client intake" Formspree form. Confirm the destination email via the link Formspree sends on first submission, and set the form's allowed domain to `optimystikmassage.com`. This page (`/intake`) is deliberately **not linked anywhere on the site** — it's marked `noindex` and excluded via `robots.txt`. Send the direct link only to people you've already screened through the contact form and decided to take on as clients, so they can fill it out before their first appointment. It contains sensitive health info, so consider periodically deleting old submissions from your Formspree dashboard.

## Deploy to Cloudflare Pages

The site deploys via Cloudflare's own git integration — no GitHub Actions workflow needed:

1. Cloudflare dashboard → **Workers & Pages → Create → Connect to Git** → select this repo, production branch `main`.
2. Build settings: command `npm run build`, output directory `dist`, root `/`.
3. Once the first deploy succeeds, add the custom domain under the project's **Custom domains** tab, then point DNS at it — a `CNAME` record at `@` (apex) to the project's `*.pages.dev`/`*.workers.dev` hostname, set to **Proxied**.
4. From then on, every push to `main` deploys to production automatically, and every other branch/PR gets its own live preview URL — useful for reviewing changes before they go out, without running a local server.

`astro.config.mjs`'s `site: 'https://optimystikmassage.com'` already matches a root custom domain — no config changes needed for this deploy target.

> **Mid-migration note:** GitHub Pages is still enabled in parallel for now (see `.github/workflows/deploy.yml`) while the Cloudflare cutover is confirmed fully stable. It'll be retired once that's done.

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

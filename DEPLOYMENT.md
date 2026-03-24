# Flower Mound Food — Deployment Guide

## Overview

This is a static HTML/CSS/JS site deployed on **Netlify** via **GitHub** continuous deployment.

## Project Structure

```
├── index.html          # Homepage (hero, wheel, directory, pricing, submit form)
├── style.css           # Main stylesheet (dark theme, amber accents)
├── app.js              # Restaurant data + all interactive features
├── blog.html           # Blog page
├── blog-style.css      # Blog styles
├── blog.js             # Blog functionality
├── blog-articles.js    # Blog article content (9 articles)
├── events.html         # Events page
├── events-style.css    # Events styles
├── events.js           # Events functionality
├── landing-style.css   # Shared styles for town/cuisine landing pages
├── flower-mound.html   # Town landing pages (6 total)
├── highland-village.html
├── argyle.html
├── bartonville.html
├── lantana.html
├── lewisville.html
├── best-mexican.html   # Cuisine landing pages (6 total)
├── best-pizza.html
├── best-asian.html
├── best-bbq.html
├── best-italian.html
├── best-breakfast.html
├── robots.txt          # Search engine directives
├── sitemap.xml         # XML sitemap for SEO
└── DEPLOYMENT.md       # This file
```

## Running Locally

No build step required. Open `index.html` in a browser, or run a local server:

```bash
# Python
python3 -m http.server 8000

# Node
npx serve .
```

Then visit `http://localhost:8000`.

## Deploying Changes

1. Make your edits to the files in this repo.
2. Commit and push to the `main` branch:
   ```bash
   git add .
   git commit -m "describe your change"
   git push origin main
   ```
3. Netlify automatically detects the push and deploys within ~30 seconds.
4. Verify at [flowermoundfood.com](https://flowermoundfood.com).

## Netlify Configuration

- **Site:** bespoke-treacle-36cb5e.netlify.app → flowermoundfood.com
- **Deploy branch:** `main`
- **Build command:** _(none — static site, no build step)_
- **Publish directory:** `/` (repo root)
- **Build logs:** Netlify dashboard → Deploys tab

## Key Files to Know

- **Restaurant data** lives in `app.js` — add/remove/edit restaurants there.
- **Stripe payment links** for Featured ($29/mo) and Premium ($59/mo) are in `index.html` pricing section.
- **GA4 tracking** (G-6RMHL6KV5H) is in the `<head>` of `index.html`.
- **SEO landing pages** were generated from `app.js` data. To regenerate, use the build script at `/build_seo_pages.py` (kept outside the deploy repo).

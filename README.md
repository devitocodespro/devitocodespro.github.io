# devitocodespro.github.io

The [Devito Codes](https://www.devitocodes.com) marketing website — a commercial site
for **DevitoPRO**, built with **Astro + Tailwind CSS** and served on GitHub Pages at
**https://www.devitocodes.com**.

This is the organization's user-pages repo (`devitocodespro/devitocodespro.github.io`),
so it serves at the **root** of the custom domain. It replaced the previous Jekyll
site (archived at `devitocodespro/devitocodespro.github.io-jekyll`) at the 2026-06-08
cutover.

## Develop

```bash
npm install
npm run dev        # http://localhost:4321  (base = '/')
npm run build      # static output in dist/
npm run preview    # serve the build locally
npm run check      # astro check (types + diagnostics)
```

## Architecture

- **Content lives once, design varies.** All copy/structured data is in `src/data/*.ts`
  and the blog collection (`src/content/blog/`, migrated from the Jekyll `_posts/`).
  Components read that data, so design changes only touch styling — not content.
- **Token-driven theming.** `src/styles/tokens.css` defines semantic `--c-*` color
  tokens; `src/styles/global.css` maps them to Tailwind utilities. Re-skinning is
  mostly a `tokens.css` swap. `tone="dark"` sections locally override the tokens to
  drop self-contained dark bands into any palette.
- **Base-path aware.** `BASE_PATH` (injected by CI) lets the same source serve at the
  site root (production) or under a preview subpath. Use `withBase()` (`src/lib/url.ts`)
  for internal links/assets; Markdown image paths are prefixed automatically by a
  rehype plugin in `astro.config.mjs`.
- **Legacy URL preservation.** `astro.config.mjs` `redirects` map the old Jekyll
  permalinks — blog posts (`/:title` → `/blog/<slug>/`) and author pages
  (`/authors/<name>` → `/about`) — to their new homes. `/privacy-policy` and `/terms`
  are kept as pages. An RSS feed is published at `/feed.xml`.

## Deploy & previews (GitHub Pages only)

- **Production:** push to `main` → `.github/workflows/deploy.yml` builds with
  `BASE_PATH=/` and `SITE_URL=https://www.devitocodes.com` and publishes to the root of
  `gh-pages` → <https://www.devitocodes.com>. A committed `public/CNAME` keeps the
  custom domain bound; `public/.nojekyll` stops GitHub from Jekyll-processing `_astro/`.
- **Previews:** push a `variant/**` (or `init/**`) branch → `.github/workflows/preview.yml`
  builds it under `gh-pages/preview/<name>/` → a stable, shareable URL:
  `https://www.devitocodes.com/preview/<name>/`.

## Conventions

- **Never push to `main`** — all changes land via pull requests; the production deploy
  fires on merge to `main`.

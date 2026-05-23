# devitocodes-web

The new [Devito Codes](https://www.devitocodes.com) marketing website — a commercial
site for **DevitoPRO**, built with **Astro + Tailwind CSS** and deployed on GitHub Pages.

This repo is the redesign of the current Jekyll site. It is kept separate so the live
site (`devitocodespro/devitocodespro.github.io`) is never disturbed until cutover.

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
  Components read that data, so design variants only change styling — not content.
- **Token-driven theming.** `src/styles/tokens.css` defines semantic `--c-*` color
  tokens; `src/styles/global.css` maps them to Tailwind utilities. Re-skinning a whole
  variant is mostly a `tokens.css` swap. `tone="dark"` sections locally override the
  tokens to drop self-contained dark bands into any palette.
- **Base-path aware.** `BASE_PATH` (injected by CI) lets the same source serve at the
  site root, under project pages (`/devitocodes-web/`), or under a preview subpath.
  Use `withBase()` (`src/lib/url.ts`) for internal links/assets; Markdown image paths
  are prefixed automatically by a rehype plugin in `astro.config.mjs`.

## Deploy & previews (GitHub Pages only)

- **Production-candidate:** push to `main` → `.github/workflows/deploy.yml` builds and
  publishes to the root of `gh-pages` → <https://devitocodespro.github.io/devitocodes-web/>.
- **Design previews:** push a `variant/**` branch → `.github/workflows/preview.yml`
  builds it and publishes to `gh-pages/preview/<name>/` → a stable, shareable URL:
  `https://devitocodespro.github.io/devitocodes-web/preview/<name>/`.

At cutover the `devitocodes.com` custom domain is moved onto this repo's Pages site
and the build base flips to `/`.

## Conventions

- **Never push to `main`** — all changes land via pull requests.
- The three candidate designs live on `variant/dark-enterprise`, `variant/light-minimal`
  and `variant/hybrid`.

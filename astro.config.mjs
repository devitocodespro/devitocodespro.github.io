import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import { visit } from 'unist-util-visit';

// Base path is injected by CI so the same source can be served at:
//   - local dev / custom domain root:   '/'
//   - project pages (main):             '/devitocodes-web/'
//   - branch previews:                  '/devitocodes-web/preview/<name>/'
const BASE = process.env.BASE_PATH ?? '/';
const SITE = process.env.SITE_URL ?? 'https://devitocodespro.github.io';

// Prefix root-absolute asset/link references inside Markdown (e.g. /images/foo.png)
// with the configured base so blog content resolves under subpath previews too.
function rehypeBasePrefix() {
  const prefix = BASE.replace(/\/$/, '');
  return (tree) => {
    if (!prefix) return;
    visit(tree, 'element', (node) => {
      const p = node.properties || {};
      if (node.tagName === 'img' && typeof p.src === 'string'
          && p.src.startsWith('/') && !p.src.startsWith('//')) {
        p.src = prefix + p.src;
      }
      if (node.tagName === 'a' && typeof p.href === 'string'
          && p.href.startsWith('/') && !p.href.startsWith('//')) {
        p.href = prefix + p.href;
      }
    });
  };
}

export default defineConfig({
  site: SITE,
  base: BASE,
  trailingSlash: 'ignore',
  integrations: [sitemap()],
  markdown: { rehypePlugins: [rehypeBasePrefix] },
  vite: { plugins: [tailwindcss()] },
});

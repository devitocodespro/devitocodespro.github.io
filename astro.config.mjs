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

// Legacy Jekyll permalink was `/:title` (posts at the site root). The Astro site
// serves posts under `/blog/<slug>/`, so preserve inbound links / SEO by redirecting
// each old root slug to its new location. Astro emits static meta-refresh pages for
// these (GitHub Pages-compatible) and prepends `base` to the targets automatically.
const blogRedirects = {
  '/announcing-devito-pro-enterprise-edition-of-the-open-source-platform-devito': '/blog/launch',
  '/thematrix-v02-the-devito-benchmark-matrix': '/blog/thematrix',
  '/devito-cluster-the-whys-and-the-whats': '/blog/cluster',
  '/devitopro-getting-hip-with-amd-instinct': '/blog/instinct',
  '/devito-devops-cluster-v2': '/blog/cluster-v2',
  '/cross-platform-seismic-imaging-benchmarking': '/blog/benchmarking',
  '/devito-codes-on-the-road-to-image-2023': '/blog/image2023',
  '/announcing-devitopro-sycl-code-generation': '/blog/sycl',
  '/s-cube-integrates-devitopro-for-performance-portable-innovation': '/blog/s-cube',
  '/announcing-devito-and-devitopro-v487': '/blog/v4.8.7',
  '/announcing-judis-support-for-devitopro': '/blog/judi',
  '/advancements-in-elastic-wave-solvers-using-devitopro-and-mixed-precision': '/blog/elastic',
  '/seismic-imaging-performance-with-aws-graviton4': '/blog/graviton4',
  '/accurate-and-robust-propogators-and-gradients-for-land-seismic-imaging': '/blog/IM',
  '/benchmarking-devitopro-on-intel-xeon-6-processors': '/blog/granite',
};

// Legacy author profile pages (Jekyll `_authors/` collection, served at
// `/authors/<name>`) have no equivalent on the new site — point them at /about.
const authorRedirects = {
  '/authors/ecaunt': '/about',
  '/authors/fluporini': '/about',
  '/authors/ggorman': '/about',
  '/authors/mlouboutin': '/about',
};

export default defineConfig({
  site: SITE,
  base: BASE,
  trailingSlash: 'ignore',
  redirects: { ...blogRedirects, ...authorRedirects },
  integrations: [sitemap()],
  markdown: { rehypePlugins: [rehypeBasePrefix] },
  vite: { plugins: [tailwindcss()] },
});

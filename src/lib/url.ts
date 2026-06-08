/**
 * Prefix an internal path with Astro's configured base so links/assets resolve
 * correctly at the site root, under project pages (/devitocodes-web/), and under
 * subpath previews (/devitocodes-web/preview/<name>/).
 *
 * External URLs, mailto:, tel: and bare hash links are returned unchanged.
 */
export function withBase(path: string): string {
  if (/^(https?:)?\/\//.test(path) || /^(mailto:|tel:)/.test(path) || path.startsWith('#')) {
    return path;
  }
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  return (base + '/' + path.replace(/^\//, '')).replace(/([^:])\/{2,}/g, '$1/');
}

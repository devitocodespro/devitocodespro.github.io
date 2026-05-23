// Global site configuration: identity, navigation, CTAs, analytics.
// Shared by every design variant.

export const site = {
  name: 'Devito Codes',
  product: 'DevitoPRO',
  domain: 'www.devitocodes.com',
  email: 'gerard@devitocodes.com',
  // Formspree endpoint id (carried over from the Jekyll site's _config.yml).
  formspreeId: 'gerard@devitocodes.com',
  ga4: 'G-39F3JRV5HY',

  description:
    'DevitoPRO — production-grade code generation for seismic imaging and ' +
    'finite-difference HPC. Symbolic Python in, optimized native CPU/GPU kernels out.',

  social: {
    github: 'https://github.com/devitocodes',
    x: 'https://x.com/devitocodes',
    linkedin: 'https://www.linkedin.com/company/devitocodes',
    slack: 'https://devitocodes.slack.com',
  },

  // Sister open-source project site.
  openSource: 'https://www.devitoproject.org',

  nav: [
    { label: 'Product', href: '/features' },
    { label: 'Performance', href: '/#performance' },
    { label: 'Use cases', href: '/#use-cases' },
    { label: 'Case studies', href: '/case-studies' },
    { label: 'Blog', href: '/blog' },
    { label: 'About', href: '/about' },
  ],

  primaryCta: { label: 'Book a technical call', href: '/contact' },
  secondaryCta: { label: 'See the benchmarks', href: '/#performance' },
} as const;

export type Cta = { label: string; href: string };

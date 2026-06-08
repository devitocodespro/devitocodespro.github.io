// Global site configuration: identity, navigation, CTAs, analytics.
// Shared by every design variant.

export const site = {
  name: 'Devito Codes',
  product: 'DevitoPRO',
  tagline: 'Seismic imaging & inversion',
  domain: 'www.devitocodes.com',
  email: 'sales@devitocodes.com',
  ga4: 'G-39F3JRV5HY',

  description:
    'Performance-portable software for seismic imaging and inversion — DevitoPRO, ' +
    'DevitoHorizon and JUDIPRO, built on the open-source Devito core.',

  social: {
    github: 'https://github.com/devitocodes',
    linkedin: 'https://www.linkedin.com/company/devitocodes',
    slack: 'https://join.slack.com/t/devitocodes/shared_invite/zt-2hgp6891e-jQDcepOWPQwxL5JJegYKSA',
  },

  // Sister open-source project site.
  openSource: 'https://www.devitoproject.org',

  nav: [
    { label: 'DevitoPRO', href: '/devitopro' },
    { label: 'DevitoHorizon', href: '/devitohorizon' },
    { label: 'JUDIPRO', href: '/judipro' },
    { label: 'Case studies', href: '/case-studies' },
    { label: 'About', href: '/about' },
  ],

  primaryCta: { label: 'Book a technical call', href: '/contact' },
  secondaryCta: { label: 'See the benchmarks', href: '/#performance' },
} as const;

export type Cta = { label: string; href: string };

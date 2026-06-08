// Team — ported from about.md and _authors/. Bios trimmed for the marketing site;
// full bios remain in the blog/author content if needed later.

export interface Member { name: string; role: string; photo: string; bio: string; }

export const aboutIntro =
  'Devito Codes Ltd is the commercial arm of the open-source platform Devito. We provide ' +
  'products and services to energy and geophysical exploration companies, and collaborate ' +
  'closely with the major hardware manufacturers and cloud providers to help their customers ' +
  'maximize performance, productivity and portability.';

export const offerings = [
  'DevitoPRO (licensing, maintenance and support)',
  'Performance optimization for client architectures, on-prem and cloud',
  'Bespoke software development projects (SOWs)',
  'Consultancy and training',
];

export const team: Member[] = [
  {
    name: 'Gerard Gorman',
    role: 'CEO & co-founder',
    photo: '/assets/img/profile_Gerard.jpg',
    bio: 'Leads HPC software solutions bridging academic research and industry. 25+ years in computational science; Professor of Computational Science and Engineering at Imperial College London.',
  },
  {
    name: 'Fabio Luporini',
    role: 'CTO & co-founder',
    photo: '/assets/img/profile_Fabio.jpg',
    bio: 'PhD in Computer Science (Imperial College) in compiler technologies for mathematical modeling. Lead software architect of Devito, with a decade at the boundary of CS, HPC and modeling.',
  },
  {
    name: 'Paul Holzhauer',
    role: 'Director of Business Development & Strategy, co-founder',
    photo: '/assets/img/profile_Paul.jpg',
    bio: 'Built and led the NVIDIA Oil & Gas team for 13 years. Decades developing the oil & gas computing market across AMD, Halliburton, EDS and Sun Microsystems.',
  },
  {
    name: 'Mathias Louboutin',
    role: 'Senior Solution Architect',
    photo: '/assets/img/profile_Mathias.png',
    bio: 'PhD from Georgia Tech; lead developer of JUDI. Expertise in large-scale PDE-constrained optimization, finite-difference solvers and cloud-native HPC.',
  },
  {
    name: 'Edward Caunt',
    role: 'Research Scientist',
    photo: '/assets/img/profile_Edward.jpg',
    bio: 'PhD (Imperial College) on generalised immersed boundary methods for finite-difference geophysical wavefield modelling; author of the Schism framework.',
  },
  {
    name: 'Jack Betteridge',
    role: 'Research Scientist',
    photo: '/assets/img/profile_Jack.jpg',
    bio: 'Mathematician and HPC specialist; previously a Firedrake developer at Imperial College. PhD (Bath) on efficient solvers for numerical weather prediction.',
  },
];

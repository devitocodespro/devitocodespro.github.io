// The three commercial products on top of the open-source Devito core.
// Single source of truth for the homepage umbrella (stack diagram, product cards,
// comparison matrix) and the per-product page headers. Copy is sanitised house
// style — no client names/quotes/invented numbers.

export const productHero = {
  eyebrow: 'The Devito stack · seismic imaging & inversion',
  title: 'One performance-portable core. Three ways to put it to work.',
  subtitle:
    'Open-source Devito turns symbolic physics into optimized code. DevitoPRO makes the ' +
    'wave-equation solves fast and portable across every CPU and GPU; DevitoHorizon and ' +
    'JUDIPRO build complete FWI and imaging inversion on top — in Python or Julia.',
};

export const devitoCore = {
  name: 'Open-source Devito',
  role: 'Symbolic DSL + code generation',
  body: 'Define the physics once in Python; Devito generates optimized native kernels. The open foundation every product builds on.',
  href: 'https://www.devitoproject.org',
};

export interface Product {
  id: string;
  name: string;
  tagline: string; // one-line "what it is"
  language: string; // interface / ecosystem chip
  audience: string; // who it's for
  bullets: string[];
  href: string; // product page
}

export const products: Product[] = [
  {
    id: 'devitopro',
    name: 'DevitoPRO',
    tagline: 'Performance-portable propagator engine.',
    language: 'Python · symbolic DSL',
    audience: 'Teams who own their inversion or imaging code and need fast, portable forward/adjoint solves.',
    bullets: [
      'Optimized CPU/GPU kernels from one symbolic spec — AMD, Arm, Intel, NVIDIA',
      'Expanding-box, mixed precision, compression, GPU-aware MPI, autotuning',
      'Embed in any stack via the Decoupler API',
    ],
    href: '/devitopro',
  },
  {
    id: 'devitohorizon',
    name: 'DevitoHorizon',
    tagline: 'A complete FWI & imaging SDK to configure, not build.',
    language: 'Python · SDK + CLI',
    audience: 'Python teams who want a ready-to-run inversion workflow from tested, composable parts.',
    bullets: [
      'Misfits, optimizers, preprocessing and gradient conditioning out of the box',
      'Frequency continuation, shot mini-batching, multi-parameter inversion',
      'Composable Python API + a CLI driver; solves run on DevitoPRO',
    ],
    href: '/devitohorizon',
  },
  {
    id: 'judipro',
    name: 'JUDIPRO',
    tagline: 'Wave-physics inversion in Julia, production-grade.',
    language: 'Julia · JUDI.jl',
    audience: 'Julia teams and researchers — ML/AI-augmented, probabilistic and large-scale inversion.',
    bullets: [
      "JUDI's linear-operator algebra for modeling, FWI and LS-RTM",
      'DevitoPRO backend (bring-your-own-license): CUDA/HIP/SYCL, compression, the Decoupler',
      'Differentiable programming for physics-augmented machine learning',
    ],
    href: '/judipro',
  },
];

// "Which is right for you?" matrix — one row per dimension; cells keyed by product id.
export interface ComparisonRow {
  dimension: string;
  cells: Record<string, string>;
}

export const comparison: ComparisonRow[] = [
  {
    dimension: 'What it is',
    cells: {
      devitopro: 'Performance-portable propagator engine',
      devitohorizon: 'Complete FWI / imaging inversion SDK',
      judipro: 'Julia inversion framework on DevitoPRO',
    },
  },
  {
    dimension: 'Interface',
    cells: {
      devitopro: 'Symbolic Python DSL',
      devitohorizon: 'Python API + CLI driver',
      judipro: 'Julia (JUDI.jl) operator algebra',
    },
  },
  {
    dimension: 'You bring',
    cells: {
      devitopro: 'Your own inversion / imaging code',
      devitohorizon: 'Your data + model; configure the workflow',
      judipro: 'Julia code; compose operators',
    },
  },
  {
    dimension: 'It provides',
    cells: {
      devitopro: 'Optimized forward/adjoint solves; hardware portability',
      devitohorizon: 'Misfits, optimizers, preprocessing, multi-scale orchestration',
      judipro: 'Operator abstractions + DevitoPRO backend for modeling, inversion & ML',
    },
  },
  {
    dimension: 'Best for',
    cells: {
      devitopro: 'Speed + portability under your existing pipeline',
      devitohorizon: 'A ready-to-configure FWI workflow in Python',
      judipro: 'Julia / ML-augmented & probabilistic inversion, CCS, cloud',
    },
  },
  {
    dimension: 'Relationship to DevitoPRO',
    cells: {
      devitopro: 'It is the engine',
      devitohorizon: 'Delegates wave-equation solves to DevitoPRO',
      judipro: 'DevitoPRO backend via bring-your-own-license',
    },
  },
];

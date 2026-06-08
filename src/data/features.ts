// DevitoPRO vs open-source Devito feature comparison.
// Ported faithfully from the Jekyll site's features.md table.
// Cell value: true = included, false = not included, string = qualifier label.

export type Cell = boolean | string;
export interface FeatureRow { label: string; oss: Cell; pro: Cell; }
export interface FeatureCategory { name: string; rows: FeatureRow[]; }

export const featureIntro =
  'DevitoPRO extends open-source Devito for production seismic imaging and inversion. ' +
  'Both express finite-difference kernels symbolically; DevitoPRO adds the tuning, ' +
  'portability and enterprise support needed for production HPC workflows.';

// Curated headline capabilities — the primary view on /features.
// The full DevitoPRO-vs-OSS comparison stays available in `featureCategories` below,
// surfaced as a collapsible secondary section.
export interface HighlightGroup { name: string; items: string[]; }

export const featureHighlights: HighlightGroup[] = [
  // Build-your-own story leads. DevitoPRO ships production-grade RTM/FWI
  // propagators AND lets teams author their own physics; the second half is
  // the one most enterprise readers miss, so it's the first capability they see.
  {
    name: 'Symbolic DSL · custom physics',
    items: [
      'Write PDE solvers symbolically in Python — your physics, your discretization',
      'Customize stencils, boundary conditions, sources, adjoints',
      'Inspect and tune the generated kernel; integrate via the Decoupler API in any language',
    ],
  },
  {
    name: 'Performance & autotuning',
    items: [
      'Compiler-level optimizations: expanding-box, mixed precision, cache-blocking, memory alignment',
      'Advanced autotuning (Devitotuner) with cloud-instance tuning',
      'Comprehensive FLOP reduction — factorization, hoisting, CSE',
    ],
  },
  {
    name: 'Multi-GPU & MPI',
    items: [
      'Optimized GPU-aware MPI; single-node and multi-node multi-GPU',
      'NUMA-aware MPI + OpenMP on every modern CPU',
      'Decoupler: call DevitoPRO from any language with full MPI support',
    ],
  },
  {
    name: 'Large-model memory',
    items: [
      'Compression-based back-propagation',
      'Intelligent data streaming disk → host → GPU',
      'Lossy compression for floating-point data',
    ],
  },
  {
    name: 'Backends & cloud',
    items: [
      'CUDA, HIP and SYCL code generation from one symbolic spec',
      'CPUs: AMD, Arm, Intel · GPUs: AMD, Intel, NVIDIA',
      'AWS, Azure, GCP — tuned and benchmarked',
    ],
  },
  {
    name: 'Physics coverage',
    items: [
      'Acoustic VTI/TTI · viscoacoustic VTI/TTI',
      'Elastic VTI/TTI · viscoelastic',
      'Immersed boundaries for accurate land topography',
    ],
  },
  {
    name: 'Support, SOWs & training',
    items: [
      'Private/NDA Slack support channels',
      'Bespoke projects, training and consultancy',
      'Benchmark reports for reproducibility',
    ],
  },
];

export const featureCategories: FeatureCategory[] = [
  {
    name: 'Finite-differences and mathematical abstractions',
    rows: [
      { label: 'Write PDE solvers symbolically', oss: true, pro: true },
      { label: 'Tensor algebra', oss: true, pro: true },
      { label: 'Taylor series weights for any order', oss: true, pro: true },
      { label: 'Customizable stencil weights (e.g. variable-z, dispersion minimizing)', oss: true, pro: true },
      { label: 'Immersed boundary support (e.g. accurate land topography)', oss: false, pro: true },
      { label: 'Explicit methods', oss: true, pro: true },
      { label: 'Implicit methods (via PETSc)', oss: 'Alpha', pro: 'Alpha' },
      { label: 'Sources and receivers (fully customizable)', oss: true, pro: true },
      { label: 'Boundary conditions (fully customizable)', oss: true, pro: true },
      { label: 'Staggered and rotated grids', oss: true, pro: true },
      { label: 'Subsampling (e.g. space/time decimation)', oss: true, pro: true },
      { label: 'Subdomains', oss: true, pro: true },
      { label: 'API for third-party library callbacks', oss: false, pro: true },
      { label: 'Jupyter notebook tutorials, examples and documentation', oss: true, pro: true },
    ],
  },
  {
    name: 'Support for all major CPUs, GPUs and accelerators',
    rows: [
      { label: 'CPUs: AMD, Arm and Intel', oss: true, pro: true },
      { label: 'GPUs: AMD, Intel and NVIDIA', oss: true, pro: true },
      { label: 'Accelerators: NextSilicon', oss: false, pro: true },
      { label: 'Accelerators (legacy): Intel KNC, KNL', oss: true, pro: true },
    ],
  },
  {
    name: 'Devito cookbook (forward, adjoint, 2D/3D)',
    rows: [
      { label: 'Isotropic acoustic and viscoacoustic', oss: true, pro: true },
      { label: 'Isotropic elastic and viscoelastic', oss: true, pro: true },
      { label: 'Acoustic VTI and TTI', oss: true, pro: true },
      { label: 'Viscoacoustic VTI and TTI', oss: false, pro: true },
      { label: 'Elastic VTI and TTI', oss: false, pro: true },
    ],
  },
  {
    name: 'PDE-constrained optimization and adjoint method',
    rows: [
      { label: 'Express adjoint-method optimization problems symbolically', oss: true, pro: true },
      { label: 'Checkpoint(/Revolve)-based back-propagation', oss: true, pro: true },
      { label: 'Compression-based back-propagation', oss: false, pro: true },
      { label: 'Intelligent data streaming (disk → host → GPU)', oss: false, pro: true },
      { label: 'Lossy data compression for floating-point data', oss: false, pro: true },
    ],
  },
  {
    name: 'Algorithmic and compiler performance optimizations',
    rows: [
      { label: 'Decoupler — integrate DevitoPRO with code in any language, with full MPI support', oss: false, pro: true },
      { label: 'Automated multi-level parallelization', oss: false, pro: true },
      { label: 'Expanding-box (only compute the active domain)', oss: false, pro: true },
      { label: 'Mixed-precision computation', oss: false, pro: true },
      { label: 'Data-locality optimization (e.g. cache-blocking)', oss: true, pro: true },
      { label: 'Autotuning / Devitotuner', oss: 'Basic', pro: 'Advanced' },
      { label: 'FLOP reduction (e.g. factorization, hoisting, CSE)', oss: 'Standard', pro: 'Comprehensive' },
      { label: 'Advanced low-level optimization (e.g. memory alignment)', oss: false, pro: true },
    ],
  },
  {
    name: 'Code generation: languages and parallel programming models',
    rows: [
      { label: 'OpenMP for CPUs and GPUs', oss: true, pro: true },
      { label: 'OpenACC for NVIDIA GPUs', oss: true, pro: true },
      { label: 'CUDA', oss: false, pro: true },
      { label: 'HIP', oss: false, pro: true },
      { label: 'SYCL', oss: false, pro: true },
      { label: 'NUMA-aware MPI-OpenMP', oss: true, pro: true },
      { label: 'MPI: single-node multi-GPU', oss: true, pro: true },
      { label: 'MPI: multi-node multi-GPU', oss: false, pro: 'Beta' },
      { label: 'Optimized GPU-aware MPI', oss: false, pro: true },
    ],
  },
  {
    name: 'Supported cloud platforms',
    rows: [
      { label: 'AWS', oss: false, pro: true },
      { label: 'Azure', oss: false, pro: true },
      { label: 'GCP', oss: false, pro: true },
    ],
  },
  {
    name: 'Cross-platform industry benchmarking',
    rows: [
      { label: 'Benchmark reports for reproducibility', oss: false, pro: true },
      { label: 'Cloud instance tuning and benchmarking', oss: false, pro: true },
    ],
  },
  {
    name: 'Support, consultancy, training, SOWs',
    rows: [
      { label: 'Slack: community support on public channels', oss: true, pro: true },
      { label: 'Slack: private/NDA support channels', oss: false, pro: true },
      { label: 'Projects', oss: false, pro: true },
      { label: 'Training', oss: false, pro: true },
      { label: 'Consultancy', oss: false, pro: true },
      { label: 'Support / maintenance', oss: false, pro: true },
    ],
  },
];

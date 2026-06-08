// Homepage section content. Marketing copy is sanitised — no client names,
// quotes, or specific benchmark numbers. Quantitative claims are left to the
// real benchmark images rather than invented numbers.

export const hero = {
  eyebrow: 'DevitoPRO · Enterprise Devito',
  title: 'Performance-portable wave propagation, generated from Python.',
  subtitle:
    'Write the physics once; DevitoPRO regenerates the optimized kernel for every ' +
    'architecture and every processor generation.',
  supporting:
    'Production seismic imaging — RTM, FWI, elastic/TTI — on AMD, Arm, Intel, NextSilicon ' +
    'and NVIDIA, on-prem and in the cloud. Your geophysics team focuses on the science, ' +
    'not on porting code.',
  differentiator: 'The only DSL + compiler in seismic imaging built for production',
  image: '/images/making-waves-opt.png',
  imageAlt: 'Seismic wavefield simulated with Devito',
};

export const trilemma = {
  eyebrow: 'The HPC trilemma',
  title: 'Stop choosing between performance, portability and productivity.',
  intro:
    'Most production seismic imaging still depends on hand-coded RTM/FWI kernels tied to a ' +
    'specific physics, discretisation, programming model and processor. DevitoPRO keeps those ' +
    'concerns in one symbolic workflow, so teams can retarget kernels as hardware and cloud ' +
    'instances change.',
  pillars: [
    {
      name: 'Performance',
      body:
        'Compiler-level optimizations — expanding-box, mixed precision, cache-blocking, ' +
        'advanced autotuning and FLOP reduction — squeeze peak throughput from every target.',
    },
    {
      name: 'Portability',
      body:
        'One symbolic definition generates OpenMP, OpenACC, CUDA, HIP and SYCL — so the ' +
        'same model runs on AMD, Arm, Intel, NextSilicon and NVIDIA, on-prem or on ' +
        'AWS, Azure and GCP.',
    },
    {
      name: 'Productivity',
      body:
        'Express PDE solvers, boundary conditions and adjoints symbolically in a few lines ' +
        'of Python. No rewrites when the hardware — or the cloud instance — changes.',
    },
  ],
};

export const solution = {
  eyebrow: 'How it works',
  title: 'Symbolic physics in. Optimized native kernels out.',
  steps: [
    { n: '01', title: 'Define the physics', body: 'Write the PDE, boundaries and sources symbolically with SymPy.' },
    { n: '02', title: 'Generate & optimize', body: 'The Devito compiler lowers it to fused, vectorized, parallel native code.' },
    { n: '03', title: 'Run anywhere', body: 'Deploy the same model across CPUs, GPUs and clusters — on-prem or cloud.' },
  ],
  targets: ['OpenMP', 'OpenACC', 'CUDA', 'HIP', 'SYCL', 'MPI'],
};

export const benchmarks = {
  eyebrow: 'Performance',
  title: 'Speed-of-light performance, every architecture.',
  intro:
    'Isotropic acoustic and acoustic TTI propagators are autotuned per target and benchmarked ' +
    'against comparable hand-coded kernels where available. As new processors arrive, DevitoPRO ' +
    'regenerates and re-tunes for them, so the comparison stays current. For specific benchmark ' +
    'numbers on your workload, get in touch.',
  cards: [
    {
      title: 'GPU portability',
      body:
        'CUDA, HIP and SYCL backends generated from one symbolic spec — production-grade ' +
        'kernels for NVIDIA, AMD and Intel GPUs, autotuned per target.',
    },
    {
      title: 'CPU portability',
      body:
        'OpenMP + NUMA-aware MPI on every modern x86 and Arm CPU — from Graviton and ' +
        'Sapphire Rapids to EPYC and Apple silicon.',
    },
    {
      title: 'Cloud price-performance',
      body:
        'Tuned and benchmarked across AWS, Azure and GCP. Availability matters as much as ' +
        'price-performance — DevitoPRO helps teams move workloads across whichever instance ' +
        'families are available.',
    },
    {
      title: 'Large-model scale',
      body:
        'Compression-based back-propagation, intelligent data streaming, expanding-box ' +
        'and mixed precision keep memory use and disk-to-host-to-GPU transfers in check for ' +
        'large production models.',
    },
  ],
  cta: {
    label: 'Request a benchmark report on your workload',
    href: '/contact',
  },
};

export const useCases = {
  eyebrow: 'Use cases',
  title: 'Built for production exploration geophysics.',
  items: [
    { title: 'Reverse Time Migration (RTM)', body: 'Forward/adjoint propagators with checkpointing, compression-based back-propagation and data streaming.' },
    { title: 'Full-Waveform Inversion (FWI)', body: 'Express adjoint-method optimization symbolically; scale gradients across multi-node, multi-GPU with GPU-aware MPI.' },
    { title: 'Elastic, VTI & TTI anisotropy', body: 'Acoustic and elastic VTI/TTI, viscoacoustic and viscoelastic propagators from the Devito cookbook.' },
    { title: 'Embed in your stack', body: 'Call DevitoPRO from applications in other languages through the Decoupler API, with full MPI support, and integrate generated propagators into existing inversion engines.' },
    { title: 'Very large models', body: 'Run models beyond the limits of in-house codes using compression, data streaming, expanding-box and mixed precision to keep memory and transfer costs in check.' },
    { title: 'Cloud-native seismic imaging', body: 'Tuned, benchmarked deployments on AWS, Azure and GCP — portable across available instances.' },
    { title: 'Immersed-boundary topography', body: 'Accurate land topography on finite-difference grids via immersed boundary support.' },
  ],
};

export const trustBar = {
  title: 'Built for the hardware and clouds you run on',
  // Alphabetical, deliberately — no signal of bias toward any partner.
  partners: ['AMD', 'Arm', 'AWS', 'Azure', 'Google Cloud', 'Intel', 'NextSilicon', 'NVIDIA'],
};

export const caseStudies = [
  {
    title: 'Devito Codes automates HPC code generation',
    outlet: 'Intel Customer Spotlight',
    href: 'https://www.intel.com/content/www/us/en/customer-spotlight/stories/devito-codes-customer-story.html',
    body: 'How Devito Codes helps customers resolve the HPC trilemma — performance, portability and productivity — generating optimized finite-difference code from a Python DSL.',
    external: true,
  },
];

export const finalCta = {
  title: 'Discuss your wave-propagation workload.',
  body: 'Whether you run a geophysics team writing your own RTM/FWI kernels, build seismic ' +
    'software, or design the hardware underneath — tell us about your target architecture ' +
    'and imaging pipeline, and we will benchmark it and show you what DevitoPRO can do.',
};

// Homepage section content. Copy is drawn from the company's real positioning
// (about.md / features.md) and sanitised voice-of-customer from the Slack market
// research (no client names, quotes, or specific benchmark numbers). Quantitative
// claims are intentionally left to the real benchmark images rather than invented numbers.

export const hero = {
  eyebrow: 'DevitoPRO · Enterprise Devito',
  title: 'Performance-portable wave propagation, generated from Python.',
  subtitle:
    'DevitoPRO turns symbolic finite-difference definitions into optimized CPU and ' +
    'GPU kernels for production seismic imaging — RTM, FWI and beyond — across Intel, ' +
    'AMD, NVIDIA and Arm, on-prem and in the cloud. Write the physics once; DevitoPRO ' +
    'regenerates the optimized kernel for every architecture and every processor ' +
    'generation — so your geophysics team focuses on the science, not on porting code.',
  differentiator: 'The only DSL + compiler in seismic imaging built for production',
  image: '/images/making-waves-opt.png',
  imageAlt: 'Seismic wavefield simulated with Devito',
};

export const trilemma = {
  eyebrow: 'The HPC trilemma',
  title: 'Stop trading performance for portability for productivity.',
  intro:
    "Across seismic imaging the status quo isn't a competing compiler — there isn't one. " +
    "It's hand-coded RTM/FWI kernels, locked to one physics, one discretization and one " +
    'programming model, and rewritten with every new processor generation. Like painting ' +
    'the Golden Gate Bridge — except your team is building several at once. DevitoPRO ' +
    'refuses that trade-off.',
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
        'same model runs on Intel, AMD, NVIDIA and Arm, on-prem or on AWS, Azure and GCP.',
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
  title: 'Symbolic Python in. Optimized native kernels out.',
  steps: [
    { n: '01', title: 'Define the physics', body: 'Write the PDE, boundaries and sources symbolically with SymPy.' },
    { n: '02', title: 'Generate & optimize', body: 'The Devito compiler lowers it to fused, vectorized, parallel native code.' },
    { n: '03', title: 'Run anywhere', body: 'Deploy the same model across CPUs, GPUs and clusters — on-prem or cloud.' },
  ],
  targets: ['OpenMP', 'OpenACC', 'CUDA', 'HIP', 'SYCL', 'MPI'],
  code: `from devito import Grid, TimeFunction, Eq, Operator, solve

grid = Grid(shape=(512, 512, 512))
u = TimeFunction(name="u", grid=grid, space_order=8, time_order=2)

# Isotropic acoustic wave equation — written once, symbolically
pde = u.dt2 - u.laplace
op = Operator(Eq(u.forward, solve(pde, u.forward)))

op.apply(time=2000)   # -> fused, vectorized, GPU-offloaded native code`,
};

export const benchmarks = {
  eyebrow: 'Performance',
  title: 'Benchmarked across platforms, independently autotuned.',
  intro:
    'Iso-acoustic and acoustic-TTI propagators, autotuned per target for a fair comparison — ' +
    'including against hand-coded in-house kernels. As new processors arrive, DevitoPRO ' +
    'regenerates and re-tunes for them, so the comparison stays current. Customers get full ' +
    'reports and raw logs: reproducible, and backed by expert support.',
  cards: [
    {
      title: 'Cross-platform throughput',
      body: 'Relative performance across CPU and GPU architectures, each autotuned to its best configuration.',
      image: '/images/performance-relative-G2.png',
    },
    {
      title: 'AWS Graviton4',
      body: 'Arm in the cloud: price/performance for production seismic workloads on Graviton4.',
      image: '/images/handout_aws_graviton4-opt.jpg',
    },
    {
      title: 'Intel Data Center GPU Max',
      body: 'SYCL code generation targeting Intel Data Center GPU Max series.',
      image: '/images/intel_data_center_gpu_max_series-opt.png',
    },
    {
      title: 'Throughput per dollar',
      body: 'Availability now matters as much as price/performance — DevitoPRO keeps both portable across instances.',
      image: '/images/TP_per_dollar.png',
    },
  ],
};

export const useCases = {
  eyebrow: 'Use cases',
  title: 'Built for production exploration geophysics.',
  items: [
    { title: 'Reverse Time Migration (RTM)', body: 'Forward/adjoint propagators with checkpointing, compression-based back-propagation and data streaming.' },
    { title: 'Full-Waveform Inversion (FWI)', body: 'Express adjoint-method optimization symbolically; scale gradients across multi-node, multi-GPU with GPU-aware MPI.' },
    { title: 'Elastic, VTI & TTI anisotropy', body: 'Acoustic and elastic VTI/TTI, viscoacoustic and viscoelastic propagators from the Devito cookbook.' },
    { title: 'Embed in your stack', body: 'Call DevitoPRO from your own application in any language via the decoupler — with full MPI — to drop high-performance propagators into an existing inversion engine.' },
    { title: 'Very large models', body: 'Run models beyond the limits of in-house codes using compression, data streaming, expanding-box and mixed precision to keep memory and transfer costs in check.' },
    { title: 'Cloud-native seismic imaging', body: 'Tuned, benchmarked deployments on AWS, Azure and GCP — portable across available instances.' },
    { title: 'Immersed-boundary topography', body: 'Accurate land topography on finite-difference grids via immersed boundary support.' },
  ],
};

export const trustBar = {
  title: 'Built for the hardware and clouds you run on',
  partners: ['Intel', 'NVIDIA', 'AMD', 'Arm', 'AWS', 'Azure', 'Google Cloud'],
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

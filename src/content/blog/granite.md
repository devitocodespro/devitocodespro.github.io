---
title: Benchmarking DevitoPRO on Intel® Xeon® 6 Processors
date: '2025-02-07T00:01:00+00:00'
subtitle: Optimizing Elastic Finite-Difference Seismic Simulations
description: Explore the cutting-edge performance of DevitoPRO on Intel® Xeon® 6 6980P
  processors in this comprehensive benchmark study. This blog post reveals how next-generation
  hardware accelerates finite-difference seismic imaging simulations, delivering over
  2.6× higher computational throughput and 2.1× faster compute performance compared
  to 5th Gen Intel® Xeon® Platinum systems. With a focus on both acoustic TTI and
  elastic propagator models, we examine the benefits of mixed-precision techniques
  that combine FP16 storage with FP32 arithmetic for optimized memory bandwidth and
  accuracy. Learn how NUMA-aware hybrid MPI/OpenMP configurations further boost performance,
  enabling scalable and efficient high-fidelity geophysical simulations. Discover
  the full benchmark results.
image: /images/make-subsurface-from-granite.png
optimized_image: /images/make-subsurface-from-granite-opt.png
category: Intel/HPC
author: mlouboutin
tags:
- DSL
- Python
- HPC
- RTM
- FWI
- Seismic
- Elastic
- Mixed-precision
slug: granite
---

## Introduction

High-performance computing (HPC) plays a critical role in scientific and engineering applications, from seismic imaging to simulation. DevitoPRO is designed to help researchers and engineers automate HPC code generation, allowing them to focus on algorithmic development for their domain-specific challenges while ensuring their simulations run efficiently on modern hardware.

As part of our ongoing efforts to optimize performance across multiple architectures, this post presents benchmark results for **DevitoPRO on Intel® Xeon® 6 6980P processors**, comparing them to the previous-generation **5th Gen Intel® Xeon® Platinum 8592+ processors**. These results provide insights into **computational throughput, data transfer performance, and mixed-precision acceleration**—all key factors in achieving **high-performance finite-difference seismic imaging kernels**.

## Benchmarking Setup

The goal of this benchmarking study is to evaluate:

* Generational performance improvements when moving from 5th Gen Intel® Xeon® Platinum 8592+ processors (Emerald Rapids) to Intel® Xeon® 6 6980P processors (Granite Rapids).  
* The impact of mixed-precision computing, where FP16 is used for storage to improve memory bandwidth utilization, while FP32 is retained for arithmetic to maintain numerical stability and accuracy, assessing its effect on compute throughput and data movement efficiency.

### Benchmarks

The benchmarks use two workloads:

1. Acoustic anisotropic propagator (acoustic TTI model) – A widely used model in seismic imaging for energy applications, testing floating-point operations per second (FLOPS) and data transfer rates.  
2. Elastic propagator – A more complex model incorporating mixed-precision techniques (FP32/FP16) to evaluate performance improvements in multi-node MPI environments.

### Processor Specifications

| Processor | Physical Cores | Sockets | Architecture | HBM | Memory  |
| :---: | :---: | :---: | :---: | :---: | :---: |
| 5th Gen Intel® Xeon® Platinum 8592+ (Emerald Rapids) | 128 | 2 | x86\_64 | No | Supports DDR5 memory with an eight-channel interface |
| Intel® Xeon® 6 6980P (Granite Rapids) | 256 | 2 | x86\_64 | No | Supports DDR5 memory with an twelve-channel interface |

Benchmarks were conducted using identical compilers, software environments, and
simulation parameters to ensure fair comparisons.

* Compilers: Intel(R) oneAPI DPC++/C++ Compiler 2024.2.1  
* MPI Library: Intel(R) MPI 2021.13  
* Optimization Flags: `-O3 -g -fPIC -Wall -std=c99 -xHost -fp-model=fast -qopt-zmm-usage=high -shared -qopenmp`  
* Software Stack: Benchmarks were conducted using **DevitoPRO v4.8.x**, which includes **an experimental mixed-precision implementation**. While this version incorporates **early optimizations for FP32/FP16 computing**, ongoing development efforts are focused on further refining precision handling, improving stability, and enhancing performance scalability across diverse hardware architectures.

## Performance Results

### Generational Performance Gains for acoustic TTI

The acoustic TTI benchmark measures the efficiency of seismic wave propagation simulations, a key workload in geophysical exploration. The benchmark was conducted using a 1024×2048×1024 computational grid with 5000 time steps, ensuring a realistic and computationally demanding test case. The simulations were executed using **DevitoPRO**, leveraging optimized code generation for modern CPU architectures.

| Metric | 5th Gen Intel® Xeon® Platinum 8592+ (Emerald Rapids) | Intel® Xeon® 6 6980P (Granite Rapids) | Improvement |
| :---: | :---: | :---: | :---: |
| Operations | 2.28 TFlops | 5.96 TFlops | 2.6x faster |
| FD-throughput (GPts/s) | 7.45 GPts/s | 15.74 GPts/s | 2.1x faster |

To fully exploit the hardware capabilities, the benchmark used a **NUMA-aware hybrid MPI-OpenMP configuration**, optimizing both **computation** and **data locality**:

* **Emerald Rapids (EMR) Configuration:**  
  * **Physical cores per socket:** 64  
  * **Total physical cores (dual-socket):** 128  
  * **NUMA domain per socket:** 2  
  * **MPI ranks:** 4 (**1 per NUMA domain**)  
  * **OpenMP threads per rank:** 32  
  * **Pinning:** `I_MPI_PIN_DOMAIN=numa`, `I_MPI_PIN_ORDER=bunch`, `I_MPI_PIN_CELL=core`  
* **Granite Rapids (GNR) Configuration:**  
  * **Physical cores per socket:** 128  
  * **Total physical cores (dual-socket):** 256  
  * **NUMA domain per socket:** 3  
  * **MPI ranks:** 6 (**1 per NUMA domain**)  
  * **OpenMP threads per rank:** 42 (NUMA domains on GNR are unbalanced with two NUMA domains with 43 cores and one NUMA domain with 42 cores per socket. We use 42 cores per NUMA domain to keep the configuration uniform.)  
  * **Pinning:** `I_MPI_PIN_DOMAIN=numa`, `I_MPI_PIN_ORDER=bunch`, `I_MPI_PIN_CELL=core`

The NUMA-aware process placement ensured that:

* MPI ranks were confined within NUMA nodes, minimizing cross-socket communication overhead.
* OpenMP threads were pinned to physical cores within NUMA domains, reducing memory latency.
* Halo exchange efficiency was maximized through optimized memory access patterns.

### Key Factors Driving Performance Gains

Granite Rapids exhibited over twice the performance of Emerald Rapids due to:

1. Higher Memory Bandwidth:
   * GNR features twelve DDR5 memory channels per socket, improving data movement efficiency.
2. Increased Core Count:
   * GNR doubles the physical core count (256 vs. 128) compared to EMR, significantly boosting parallel execution.

These architectural and software improvements collectively delivered 2.6x higher floating-point performance and 2.1x faster compute throughput (GPts/s), demonstrating the generational leap in efficiency from Emerald Rapids to Granite Rapids.

### Mixed-precision performance gains for Isotropic Elastic on Granite Rapids (Gen 6\)

The isotropic elastic benchmark evaluates the efficiency of multi-component wave
propagation simulations, a crucial workload in geophysical imaging. This test
was conducted on a 1024 × 2048 × 1024 computational grid with 5000 time steps.

Unlike acoustic TTI, which was benchmarked exclusively in FP32 precision,
isotropic elastic simulations were tested in both FP32-only and mixed FP32/FP16
modes. The introduction of mixed precision yielded significant computational and
memory efficiency improvements.

We use the same hybrid MPI-OpenMP parallelism with NUMA-aware pinning as with
the acoustic TTI  benchmark.

| Precision Mode | Operations | Compute Throughput (GPts/s) | Improvement |
| :---: | :---: | :---: | :---: |
| FP32 | 1.02 TFlops | 3.59 GPts/s | \- |
| FP32/FP16 (Mixed) | 2.37 TFlops | 8.30 GPts/s | \~2.3x faster |

### Why Does Mixed Precision Matter?

Switching from FP32-only computation to a mixed FP32/FP16 approach provided a
\~2.3x speedup, achieved through a balanced approach that optimizes both storage
and arithmetic precision. Since finite difference methods are memory-bound, the
key to performance gains lies in reducing memory bandwidth pressure while
maintaining numerical accuracy.

The mixed-precision strategy used in DevitoPRO follows this principle:

* FP16 for storage: Reduces memory footprint and accelerates data movement.  
* FP32 for arithmetic: Preserves computational accuracy by minimizing rounding errors.

This approach ensures that precision is maintained where it matters most while
taking advantage of FP16’s efficiency for memory operations.

### Key Benefits of Mixed Precision

1. Lower Memory Footprint:  
   * FP16 values take up half the memory of FP32, doubling effective cache capacity and reducing pressure on memory bandwidth.  
   * More wavefield data can fit in fast-access memory, improving locality and cache reuse.  
2. Reduced Communication Overhead:  
   * In MPI-based distributed environments, using FP16 for storage reduces halo exchange size, halving inter-rank data transfer costs.  
   * This is particularly beneficial in multi-node scaling scenarios, where communication is a major bottleneck.  
3. Faster Computation:  
   * Intel Xeon 6 processors feature optimized FP16 vector and tensor operations, accelerating data movement and memory loads.  
   * Arithmetic remains in FP32, avoiding excessive rounding errors while still benefiting from higher memory bandwidth efficiency.

By carefully combining FP16 for storage and FP32 for arithmetic, DevitoPRO
achieves significant speedups while ensuring numerical stability, making this
approach ideal for large-scale elastic wave simulations.

### Impact on Elastic Wave Simulations

Elastic wave simulations require multiple coupled wavefields, significantly
increasing memory and computational demands.  By leveraging mixed FP32/FP16
precision, DevitoPRO achieves:

* Higher performance with reduced memory bandwidth constraints**.  
* More efficient inter-rank communication, crucial for large-scale multi-node workloads.  
* Improved scalability, making mixed precision a practical choice for high-fidelity seismic modeling.

These optimizations ensure Granite Rapids delivers superior elastic wave
simulation performance, making it a compelling choice for next-generation
geophysical imaging workloads.

## Key Takeaways

* Intel Xeon 6 delivers substantial generational performance gains for finite-difference simulations, achieving 2.6× higher computational throughput and 2.1× faster compute performance (GPts/s) compared to its predecessor.

* Mixed-precision computing (FP32/FP16) significantly enhances efficiency by reducing memory footprint and accelerating computations, making it a crucial optimization for large-scale seismic workloads. Using FP16 for storage while maintaining FP32 for arithmetic strikes the right balance between performance and numerical accuracy.

* DevitoPRO automates high-performance code generation, allowing users to fully exploit modern hardware without requiring manual tuning. Optimized memory layouts, vectorization, and hybrid MPI/OpenMP parallelism are applied transparently, enabling peak efficiency across different architectures.

* Hardware-aware code generation is essential for performance portability, ensuring that computational workloads can scale efficiently on diverse hardware platforms. These results reinforce DevitoPRO’s approach, where automated performance tuning maximizes computational efficiency without sacrificing precision.

## Looking Ahead

At Devito Codes, we remain committed to hardware-neutral performance
optimization. While this benchmarking study focuses on Intel Xeon 6, we are
actively working on:

* Performance analysis on other architectures, including AMD EPYC, NVIDIA Hopper, and ARM-based HPC systems.

* Refining mixed-precision strategies to balance accuracy, performance, and memory efficiency.

* Expanding code portability, ensuring DevitoPRO runs optimally across a diverse range of HPC platforms.

Users and organizations interested in seismic imaging, medical imaging, or
wave-based simulations can explore DevitoPRO’s capabilities at
[https://www.devitocodes.com/features/](https://www.devitocodes.com/features/).

Would you like more details? Feel free to reach out\!

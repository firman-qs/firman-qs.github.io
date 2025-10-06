+++
title = "Particle Swarm Optimization"
date = "2025-10-06"
description = "An interesting non Gradient Descent Particle Swarm Optimization"

[taxonomies]
tags=["physics", "python", "example"]

[extra]
comment = true
+++

Optimization problems are everywhere—from training machine learning models, designing efficient circuits, to solving complex engineering challenges. Among the many techniques developed to tackle such problems, **Particle Swarm Optimization (PSO)** stands out as a simple yet powerful nature-inspired algorithm.

In this blog, we’ll dive deep into what PSO is, how it works, its mathematical foundation, applications, advantages, and limitations.

---

## What is Particle Swarm Optimization?

**Particle Swarm Optimization (PSO)** is a population-based stochastic optimization technique inspired by the social behavior of birds flocking or fish schooling. It was introduced by James Kennedy and Russell Eberhart in 1995.

The idea is simple: each "particle" in the swarm represents a potential solution. These particles "fly" through the solution space, adjusting their position based on their own experience and the experience of neighboring particles. Over time, the swarm tends to converge towards the best solution.

---

## Core Concepts

In the PSO, there is a concept about particle. A particle is a candidate solution. It has:

* **Position (`x`)**: Represents the current solution.
* **Velocity (`v`)**: Determines how the particle moves in the search space.
* **Personal Best (`pbest`)**: The best position found by the particle itself.
* **Global Best (`gbest`)**: The best position found by the entire swarm.

The second thing is, The swarm. Swam is a collection of particles that interact with one another. Their collective intelligence drives the optimization process.

---

## The PSO Algorithm

At a high level, the PSO algorithm follows these steps:

1. **Initialization**

   * Randomly initialize particles’ positions and velocities in the search space.
   * Evaluate the fitness of each particle.

2. **Update Personal Bests**

   * Compare each particle’s fitness with its previous best (`pbest`). Update if improved.

3. **Update Global Best**

   * Identify the best solution among all particles and update the global best (`gbest`).

4. **Velocity and Position Update**

   * Each particle adjusts its velocity and position using the formulas:

   $$
   v_{i}(t+1) = w \cdot v_{i}(t) + c_1 \cdot r_1 \cdot (pbest_i - x_i(t)) + c_2 \cdot r_2 \cdot (gbest - x_i(t))
   $$

   $$
   x_{i}(t+1) = x_{i}(t) + v_{i}(t+1)
   $$


   where:

   * ( $w$ ) = inertia weight (balances exploration and exploitation)
   * ( $c_1$, $c_2$ ) = acceleration coefficients
   * ( $r_1$, $r_2$ ) = random numbers in $[0, 1]$

5. **Repeat**

   * Continue updating until convergence or maximum iterations are reached.

---

## Example Pseudocode

```text
Initialize swarm of particles with random positions and velocities
For each particle:
    Evaluate fitness
    Set pbest = position
Set gbest = best of all pbest

While not stopping condition:
    For each particle:
        Update velocity
        Update position
        Evaluate fitness
        If fitness better than pbest:
            Update pbest
        If pbest better than gbest:
            Update gbest
Return gbest
```

---

## Visual Intuition

Imagine a flock of birds searching for food in a large field. Each bird explores the area randomly at first. Birds remember where they found food before (`pbest`). Birds also notice where others found food (`gbest`). Over time, the flock clusters around the best food source (optimal solution).


Particle Swarm Optimization is a powerful metaheuristic algorithm inspired by natural swarming behavior. With its balance of simplicity and effectiveness, it has become a go-to tool for solving a wide range of optimization problems. However, like any algorithm, it is not a one-size-fits-all solution and requires careful tuning and adaptation to specific problems.

---

## Further Reading

* Kennedy, J., & Eberhart, R. (1995). *Particle swarm optimization*. Proceedings of ICNN'95.
* Clerc, M., & Kennedy, J. (2002). *The particle swarm – explosion, stability, and convergence in a multidimensional complex space*.
* Engelbrecht, A. (2005). *Fundamentals of Computational Swarm Intelligence*.

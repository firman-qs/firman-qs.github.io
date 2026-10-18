---
title: "Damped oscillator"
description: "Understand the model and inspect the displacement over time."
weight: 10
---

## Model

A damped oscillator satisfies

$$
m\ddot{x} + c\dot{x} + kx = 0.
$$

Here $m$ is the mass, $c$ is the damping coefficient, and $k$ is the spring
stiffness. The natural frequency is $\omega_0 = \sqrt{k/m}$.

## Plot the result

After completing [Getting started](../../getting-started/), load the output:

```python
import numpy as np
import matplotlib.pyplot as plt

data = np.genfromtxt("results.csv", delimiter=",", names=True)
plt.plot(data["time"], data["displacement"])
plt.xlabel("Time (s)")
plt.ylabel("Displacement (m)")
plt.show()
```

## Interpret the curve

With positive damping, the amplitude should decrease. A smaller time step helps
you distinguish numerical error from the physical decay.

Compare several runs while changing one parameter at a time. The
[configuration reference](../../reference/configuration/) lists the quantities
and their units.

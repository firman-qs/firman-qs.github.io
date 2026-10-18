---
title: "Configuration"
description: "The complete configuration for the example solver."
weight: 10
---

## Oscillator parameters

| Key | Unit | Example | Constraint |
| --- | --- | --- | --- |
| `mass` | kg | `1.0` | Greater than zero |
| `damping` | kg/s | `0.2` | Zero or positive |
| `stiffness` | N/m | `4.0` | Greater than zero |

## Solver parameters

| Key | Unit | Example | Meaning |
| --- | --- | --- | --- |
| `time_step` | s | `0.01` | Interval between steps |
| `duration` | s | `10.0` | Total simulated time |

Both solver parameters must be positive. Check convergence by reducing
`time_step` and comparing the resulting trajectory.

## Example configuration

```toml
[oscillator]
mass = 1.0
damping = 0.2
stiffness = 4.0

[solver]
time_step = 0.01
duration = 10.0
```

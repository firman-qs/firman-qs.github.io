---
title: "Getting started"
description: "Prepare an environment and run your first simulation."
weight: 10
---

## Requirements

For this fictional example, assume you have Python 3 and a local checkout of the
project. All commands run from that checkout.

## Installation

Create a virtual environment and install the project's dependencies:

```sh
python3 -m venv .venv
source .venv/bin/activate
python -m pip install -r requirements.txt
```

## First run

Save this as `simulation.toml`:

```toml
[oscillator]
mass = 1.0
damping = 0.2
stiffness = 4.0

[solver]
time_step = 0.01
duration = 10.0
```

Run the simulation:

```sh
python -m example_lab simulate --config simulation.toml
```

The example command writes `results.csv` with time, displacement, and velocity
columns. Continue with the [damped oscillator guide](../guides/damped-oscillator/)
to interpret those values.

## Troubleshooting

If Python cannot find the module, confirm that the virtual environment is active
and that you are running the command from the project directory.

> Keep units consistent: this example uses kilograms, seconds, and metres.

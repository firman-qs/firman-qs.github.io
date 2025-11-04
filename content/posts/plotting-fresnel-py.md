+++
title = "Plotting Fresnel Equation"
date = "2023-12-11"
description = "Plotting Fresnel equation using numpy and matplotlib"

[taxonomies]
tags=["physics", "python", "example"]

[extra]
comment = true
+++

# Introduction: Simple Equation Derivation
We start with Fresnel Equations

$$
\tilde{E}_{0_R} = \left(\frac{\alpha-\beta}{\alpha+\beta}\right)\tilde{E}_{0_I}, ~~~~~~ \tilde{E}_{0_T} = \left(\frac{2}{\alpha + \beta}\right) \tilde{E}_{0_I}. \tag{1}
$$

where

$$
\alpha\equiv \frac{\cos\theta_T}{\cos\theta_I}, \tag{2}
$$

and

$$
\beta \equiv \frac{\mu_1 v_1}{\mu_2 v_2} = \frac{\mu_1 n_2}{\mu_2 n_1}. \tag{3}
$$

If we assume the special case where $\mu_1 \cong \mu_2 \cong \mu_0$ then

$$
\beta \cong \frac{n_2}{n_1}. \tag{4}
$$

Based on Snell's law we know that

$$
\sin\theta_T = \frac{n_1}{n_2} \sin\theta_I. \tag{5}
$$

Using identity $\cos^2\theta_T+\sin^2\theta_T = 1$ then the previous $ \alpha $ equation (2) becomes

$$
\alpha = \frac{\sqrt{1-\sin^2\theta_T}}{\cos\theta_I} = \frac{\sqrt{1-\left[(n_1/n_2)\sin\theta_I\right]^2}}{\cos\theta_I}.
$$

For reflectance and transmittance

$$
\newcommand{\rbrak}[1]{\left(#1 \right)}
T\equiv\frac{I_T}{I_I}=\underbrace{\frac{\epsilon_2v_2}{\epsilon_1v_1}}_\beta\underbrace{\rbrak{\frac{E_{0_T}}{E_{0_I}}}}_\text{Eq. 1}\underbrace{\frac{\cos\theta_T}{\cos\theta_I}}_\alpha=\alpha\beta\rbrak{\frac{2}{\alpha+\beta}}^2.
$$

# Source Code
[https://github.com/firman-qs/fresnel-equation-plot-python](https://github.com/firman-qs/fresnel-equation-plot-python).

# Final Result
![Hasil Plot](https://raw.githubusercontent.com/firman-qs/fresnel-equation-plot-python/main/Fresnel_equation_plot_python.png)

# Video on Plotting Fresnel Equations

{{ youtube(id="vb2NnQ_LcBE") }}

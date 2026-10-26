+++
date = '2026-10-26'
draft = false
title = "Understanding Griffiths' First Four Chapters Through Only One Beautiful Question"
description = "An English translation of my worked capacitor problem, with the original equation steps and figures."
tags = ["physics", "electrostatics", "learning"]
math = true
+++

We can understand the first four chapters of Griffiths' *Introduction to Electrodynamics* through this one powerful question.

*This post is translated from my worked notes in Bahasa Indonesia, so the original figures retain their Indonesian labels: “lapisan” means “layer”, “atas” means “top”, and “bawah” means “bottom”. The decimal comma in $1{,}5$ means $1.5$.*

*When I say “plates”, I mean the two capacitor plates, which carry charges $+\sigma$ and $-\sigma$; “layers” means the two dielectric materials between the plates.*

## Example Question 1.

The space between the two plates of a parallel-plate capacitor (Figure 1) is filled with two layers of linear dielectric material. Each layer has thickness $a$, so the total distance between the two plates is $2a$. The first layer has a dielectric constant of $2$, while the second layer has a dielectric constant of $1.5$. The free surface charge density on the upper plate is $\sigma$, while that on the lower plate is $-\sigma$.

{{< figure src="/images/griffiths-electrostatics/capacitor-problem.webp" link="/images/griffiths-electrostatics/capacitor-problem.webp" alt="The capacitor in Figure 1: two dielectric layers, each of thickness a, between plates carrying positive sigma and negative sigma. Layer 1 has relative permittivity 2, and layer 2 has relative permittivity 1.5." caption="Figure 1" width="1605" height="980" >}}

(a) Determine the electric displacement field $\vec{\mathbf D}$ in each dielectric layer.

(b) Determine the electric field $\vec{\mathbf E}$ in each dielectric layer.

(c) Determine the electric polarisation $\vec{\mathbf P}$ in each dielectric layer.

(d) Determine the potential difference between the two capacitor plates.

(e) Determine the locations and magnitudes of all bound charges.

(f) After finding all the free and bound charges in the previous parts, calculate the electric field in each dielectric layer again and show that the results agree with the answers in part (b).

---

## Answer

There are several conventions I will establish in answering this question. Each dielectric layer has thickness $a$, so the distance between the two capacitor plates is $2a$. The dielectric constant (relative permittivity) of layer 1 is $\varepsilon_{r1}=2$ and that of layer 2 is $\varepsilon_{r2}=1.5$. Meanwhile, the free surface charge densities on the upper and lower conducting plates are

$$
\sigma_{\text{free-top}}=+\sigma
\qquad\text{and}\qquad
\sigma_{\text{free-bottom}}=-\sigma.
$$

Thus, the total electric field between the two plates (which passes through layers 1 and 2) points downward,

$$
\vec{\mathbf E}=E(-\hat z).
\tag{1}
$$

Of course, the magnitude of $\vec{\mathbf E}$ passing through layer 1 differs from that passing through layer 2, because their relative permittivities differ.

{{< figure src="/images/griffiths-electrostatics/two-layer-capacitor.webp" link="/images/griffiths-electrostatics/two-layer-capacitor.webp" alt="The two-layer capacitor with an upward z axis: the lower plate is at z equals zero, the interface is at z equals a, and the upper plate is at z equals two a." width="1454" height="1082" loading="lazy" >}}

We treat this capacitor as an ideal (infinite) parallel-plate capacitor, with no external electric field around it.

---

## Answer (a)

To answer (a), we begin with Gauss's law for the electric displacement field,

$$
\oint_{\mathcal S}\vec{\mathbf D}\cdot\mathrm d\vec{\mathbf a}
=Q_{\text{free-enc}}.
\tag{2}
$$

As you know, to use Gauss's law, we need to choose a suitable Gaussian surface that makes our calculation easier. The first way is to choose a Gaussian surface because “the book uses it; I don't care why” — 👀. A better way is first to identify the region where we want to calculate the field $\vec{\mathbf E}$ or $\vec{\mathbf D}$. Next, choose a Gaussian surface (a cylinder, sphere, cube, etc.) whose surface (both its symmetry and its orientation) makes it easier for us to solve $\oint_{\mathcal S}\vec{\mathbf D}\cdot\mathrm d\vec{\mathbf a}=Q_{\text{free-enc}}$. Ideally, we choose and position the Gaussian surface so that the field $\vec{\mathbf E}$ or $\vec{\mathbf D}$ we seek is perpendicular to every part of the Gaussian surface; or perpendicular to some parts of the Gaussian surface and parallel to others, with any remaining parts of the Gaussian surface (if any) lying in a region where the electric field is already known.

**Example:** In this parallel-plate capacitor case, to find $\vec{\mathbf D}$ in layer 1, a pillbox (a thin cylinder) extending from inside the upper plate to layer 1 is a Gaussian surface that makes things easier for us. We know that the field produced by this ideal capacitor has only a $\hat z$ component. This means:

- $\displaystyle\int_{\substack{\text{curved}\\\text{cylinder surface}}}\vec{\mathbf D}\cdot\mathrm d\vec{\mathbf a}_{\substack{\text{curved}\\\text{cylinder surface}}}=0$ (because $\mathrm d\vec{\mathbf a}_{\substack{\text{curved}\\\text{cylinder surface}}}\perp\hat z$).
- $\displaystyle\int_{\substack{\text{upper}\\\text{cylinder face}}}\vec{\mathbf D}\cdot\mathrm d\vec{\mathbf a}_{\substack{\text{upper}\\\text{cylinder face}}}=0$ (because it is inside the conductor).
- $\displaystyle\int_{\substack{\text{lower}\\\text{cylinder face}}}\vec{\mathbf D}\cdot\mathrm d\vec{\mathbf a}_{\substack{\text{lower}\\\text{cylinder face}}}=\text{some value}$ (this surface is in layer 1 and perpendicular to $\hat z$, representing any point in layer 1 that we are looking for).

*Can we use a spherical Gaussian surface? Yes! We can use any shape we want, at the cost of making the solution of Gauss's law more complicated.*

- Determining $\vec{\mathbf D}$ in layer 1

{{< figure src="/images/griffiths-electrostatics/displacement-pillbox.webp" link="/images/griffiths-electrostatics/displacement-pillbox.webp" alt="A pillbox extends from inside the upper conducting plate into layer 1. Its cross-sectional area is A." width="1662" height="946" loading="lazy" >}}

Let us use the pillbox surface shown in the figure. The upper face of the pillbox is inside the upper conducting plate, while its lower face is inside layer 1. The cross-sectional area of the pillbox is $A$. Using Equation 2 and splitting it into three surface parts:

$$
\begin{aligned}
\oint_{\mathcal S}\vec{\mathbf D}\cdot\mathrm d\vec{\mathbf a}
&=Q_{\text{free-enc}}\\[6pt]
\underbrace{
\int_{\substack{\text{upper}\\\text{pillbox face}}}
\vec{\mathbf D}\cdot\mathrm d\vec{\mathbf a}
}_{\substack{\text{zero, because }\vec{\mathbf D}=0\\\text{inside the conductor}}}
+\underbrace{
\int_{\substack{\text{curved}\\\text{pillbox surface}}}
\vec{\mathbf D}\cdot\mathrm d\vec{\mathbf a}
}_{\text{zero, because }\mathrm d\vec{\mathbf a}\perp\hat z}
+\int_{\substack{\text{lower}\\\text{pillbox face}}}
\vec{\mathbf D}\cdot\mathrm d\vec{\mathbf a}
&=\sigma A\\[6pt]
\int_{\substack{\text{lower}\\\text{pillbox face}}}
D(-\hat z)\cdot(-\hat z)\,\mathrm da
&=\sigma A\\[6pt]
DA&=\sigma A\\
D&=\sigma.
\end{aligned}
$$

Since the electric field inside this capacitor points in the $-\hat z$ direction,

$$
\boxed{\vec{\mathbf D}_1=\sigma(-\hat z)}
$$

- Determining $\vec{\mathbf D}$ in layer 2

{{< figure src="/images/griffiths-electrostatics/displacement-pillbox-layer-2.webp" link="/images/griffiths-electrostatics/displacement-pillbox-layer-2.webp" alt="A pillbox extends upward from inside the lower conducting plate into the lower dielectric layer." width="1662" height="946" loading="lazy" >}}

For layer 2, we use a pillbox whose lower face is inside the lower conducting plate, while its upper face is in layer 2. In the same way as before:

$$
\begin{aligned}
\oint_{\mathcal S}\vec{\mathbf D}\cdot\mathrm d\vec{\mathbf a}
&=Q_{\text{free-enc}}\\[6pt]
\int_{\substack{\text{upper}\\\text{pillbox face}}}
\vec{\mathbf D}\cdot\mathrm d\vec{\mathbf a}
+\underbrace{
\int_{\substack{\text{curved}\\\text{pillbox surface}}}
\vec{\mathbf D}\cdot\mathrm d\vec{\mathbf a}
}_{\text{zero, because }\mathrm d\vec{\mathbf a}\perp\hat z}
+\underbrace{
\int_{\substack{\text{lower}\\\text{pillbox face}}}
\vec{\mathbf D}\cdot\mathrm d\vec{\mathbf a}
}_{\substack{\text{zero, because }\vec{\mathbf D}=0\\\text{inside the conductor}}}
&=-\sigma A\\[6pt]
\int_{\substack{\text{upper}\\\text{pillbox face}}}
D(-\hat z)\cdot(\hat z)\,\mathrm da
&=-\sigma A\\[6pt]
-DA&=-\sigma A\\
D&=\sigma.
\end{aligned}
$$

Since the electric field inside this capacitor points in the $-\hat z$ direction,

$$
\boxed{\vec{\mathbf D}_2=\sigma(-\hat z)}
$$

---

## Answer (b)

For a uniform linear dielectric material, its polarisation is proportional to the electric field: $\vec{\mathbf P}=\varepsilon_0\chi_e\vec{\mathbf E}$. From the definition

$$
\vec{\mathbf D}\equiv\varepsilon_0\vec{\mathbf E}+\vec{\mathbf P}
\tag{3}
$$

we have

$$
\vec{\mathbf D}
=\varepsilon_0\vec{\mathbf E}+\varepsilon_0\chi_e\vec{\mathbf E}
=\varepsilon_0(1+\chi_e)\vec{\mathbf E},
$$

with $(1+\chi_e)=\varepsilon_r$. Thus,

$$
\vec{\mathbf D}=\varepsilon_0\varepsilon_r\vec{\mathbf E}
\quad\Rightarrow\quad
\vec{\mathbf E}=\frac{1}{\varepsilon_0\varepsilon_r}\vec{\mathbf D}.
\tag{4}
$$

We will use Equation 4 to find $\vec{\mathbf E}$ from the information about $\vec{\mathbf D}$ that we obtained in (a).

- $\vec{\mathbf E}$ in layer 1:

$$
\vec{\mathbf E}_1
=\frac{1}{\varepsilon_0\varepsilon_{r1}}\vec{\mathbf D}_1
=\boxed{\frac{\sigma}{2\varepsilon_0}(-\hat z)}
$$

- $\vec{\mathbf E}$ in layer 2:

$$
\vec{\mathbf E}_2
=\frac{1}{\varepsilon_0\varepsilon_{r2}}\vec{\mathbf D}_2
=\frac{\sigma}{1.5\varepsilon_0}(-\hat z)
=\boxed{\frac{2\sigma}{3\varepsilon_0}(-\hat z)}
$$

*Physically, a dielectric material becomes polarised when exposed to an external electric field. This polarisation produces bound charges that generate an additional field in the direction opposite to the external field (the field from the capacitor plates). Layer 1 has a larger relative permittivity, so it gives a stronger polarisation response and a greater reduction in the electric field. That's why: $\varepsilon_{r1}>\varepsilon_{r2}\Rightarrow|\vec{\mathbf E}_1|<|\vec{\mathbf E}_2|$.*

---

## Answer (c)

To answer (c), we only need to use the information about $\vec{\mathbf D}$ and $\vec{\mathbf E}$ provided by (a) and (b), substituting it into Equation 3.

- Polarisation of slab 1

$$
\vec{\mathbf P}_1
=\vec{\mathbf D}_1-\varepsilon_0\vec{\mathbf E}_1
=\sigma(-\hat z)-\varepsilon_0\left(\frac{\sigma}{2\varepsilon_0}\right)(-\hat z)
=\boxed{\frac{\sigma}{2}(-\hat z)}
$$

- Polarisation of slab 2

$$
\vec{\mathbf P}_2
=\vec{\mathbf D}_2-\varepsilon_0\vec{\mathbf E}_2
=\sigma(-\hat z)-\varepsilon_0\left(\frac{2\sigma}{3\varepsilon_0}\right)(-\hat z)
=\boxed{\frac{\sigma}{3}(-\hat z)}
$$

Both polarisation vectors point toward $-\hat z$ (downward). This means that the positive parts of the dipoles inside the dielectric slab tend to gather on the lower side of the layer, while the negative parts gather on the upper side of each dielectric layer. Notice also that $|\vec{\mathbf P}_1|>|\vec{\mathbf P}_2|$, which shows that layer 1 gives a stronger polarisation response.

---

## Answer (d)

We are asked to obtain the potential difference. Here, potential difference means the difference between the values of the potential at $V(\vec{\mathbf r}=\text{position of plate 1})$ and $V(\vec{\mathbf r}=\text{position of plate 2})$. To solve (d), we can use the definition of potential,

$$
V(\vec{\mathbf r})\equiv-\int_{\mathcal O}^{\vec{\mathbf r}}
\vec{\mathbf E}\cdot\mathrm d\vec{\mathbf l}
\tag{5}
$$

However, we need to determine the reference point $\mathcal O$. In most electrostatics problems, we use $\mathcal O=\infty$ as a convention, much as we use “metres above sea level” to measure the elevation of a place. Usually, we then set the point $\mathcal O=\infty$ as the point of zero potential (choosing the reference point $\mathcal O$ is the same as choosing the point where $V$ will be zero). I will show that choosing any point $\mathcal O$ will still give the same result in this case.

**In this part, we will solve (d) by setting the point $\mathcal O$ at $z=0$ (at the lower plate).** This means

$$
V(z=0)=0.
$$

From Equation 5 (here we use $z$ because the electric field in this system has only a $\hat z$ component. Thus $\mathrm d\vec{\mathbf l}=\mathrm d\vec{\mathbf z}=\mathrm dz\,\hat z$),

$$
V(z)=-\int_0^z\vec{\mathbf E}(z)\cdot\hat z\,\mathrm dz.
\tag{6}
$$

Since we have set the lower plate as the zero reference point, the **potential at the lower plate** is

$$
\boxed{V_{\text{bottom}}=V(z=0)=0}
$$

**For the potential at the upper plate**, we need to calculate $\int_0^{z=a}\vec{\mathbf E}_2\cdot\hat z\,\mathrm dz$ (while passing through layer 2), followed by $\int_a^{z=2a}\vec{\mathbf E}_1\cdot\hat z\,\mathrm dz$ (while passing through layer 1), separately because $\vec{\mathbf E}_1\ne\vec{\mathbf E}_2$. Thus,

$$
\begin{aligned}
V_{\text{top}}=V(z=2a)
&=-\int_0^{z=2a}\vec{\mathbf E}(z)\cdot\hat z\,\mathrm dz\\[6pt]
&=-\int_0^a\vec{\mathbf E}_2\cdot\hat z\,\mathrm dz
-\int_a^{2a}\vec{\mathbf E}_1\cdot\hat z\,\mathrm dz\\[6pt]
&=-\int_0^a\frac{2\sigma}{3\varepsilon_0}(-\hat z)\cdot\hat z\,\mathrm dz
-\int_a^{2a}\frac{\sigma}{2\varepsilon_0}(-\hat z)\cdot\hat z\,\mathrm dz\\[6pt]
&=\frac{2\sigma}{3\varepsilon_0}\int_0^a\mathrm dz
+\frac{\sigma}{2\varepsilon_0}\int_a^{2a}\mathrm dz\\[6pt]
&=\frac{2\sigma}{3\varepsilon_0}a+\frac{\sigma}{2\varepsilon_0}a\\[6pt]
&=\boxed{\frac{7\sigma a}{6\varepsilon_0}}
\end{aligned}
$$

The potential difference between the upper and lower plates is therefore

$$
\Delta V=V_{\text{top}}-V_{\text{bottom}}
=\frac{7\sigma a}{6\varepsilon_0}-0
=\boxed{\frac{7\sigma a}{6\varepsilon_0}}
$$

---

**Next, we will try to solve (d) by choosing a point $\mathcal C$ somewhere in layer 2.** We will show that the result is the same as the one above. So,

$$
\mathcal O\equiv\mathcal C
\quad\text{where}\quad
0\lt\mathcal C\lt a
\quad\text{and}\quad
V(\mathcal C)\equiv0.
$$

With this reference point, the potential at the lower plate is

$$
\begin{aligned}
V_{\text{bottom}}=V(z=0)
&=-\int_{\mathcal C}^{z=0}\vec{\mathbf E}_2\cdot\hat z\,\mathrm dz\\[6pt]
&=-\int_{\mathcal C}^0\frac{2\sigma}{3\varepsilon_0}(-\hat z)\cdot\hat z\,\mathrm dz\\[6pt]
&=\frac{2\sigma}{3\varepsilon_0}(0-\mathcal C)\\[6pt]
&=\boxed{-\frac{2\sigma}{3\varepsilon_0}\mathcal C.}
\end{aligned}
$$

Meanwhile, the potential at the upper plate is

$$
\begin{aligned}
V_{\text{top}}=V(z=2a)
&=-\int_{\mathcal C}^{z=2a}\vec{\mathbf E}(z)\cdot\hat z\,\mathrm dz\\[6pt]
&=-\int_{\mathcal C}^a\vec{\mathbf E}_2\cdot\hat z\,\mathrm dz
-\int_a^{2a}\vec{\mathbf E}_1\cdot\hat z\,\mathrm dz\\[6pt]
&=-\int_{\mathcal C}^a\frac{2\sigma}{3\varepsilon_0}(-\hat z)\cdot\hat z\,\mathrm dz
-\int_a^{2a}\frac{\sigma}{2\varepsilon_0}(-\hat z)\cdot\hat z\,\mathrm dz\\[6pt]
&=\frac{2\sigma}{3\varepsilon_0}\int_{\mathcal C}^a\mathrm dz
+\frac{\sigma}{2\varepsilon_0}\int_a^{2a}\mathrm dz\\[6pt]
&=\boxed{\frac{2\sigma}{3\varepsilon_0}(a-\mathcal C)+\frac{\sigma}{2\varepsilon_0}a.}
\end{aligned}
$$

Thus, the potential difference is

$$
\Delta V=V_{\text{top}}-V_{\text{bottom}}
=\left[\frac{2\sigma}{3\varepsilon_0}(a-\mathcal C)+\frac{\sigma}{2\varepsilon_0}a\right]
-\left[-\frac{2\sigma}{3\varepsilon_0}\mathcal C\right]
=\boxed{\frac{7\sigma a}{6\varepsilon_0}}
$$

*The result is the same. Try using another reference point and integrating with the limits reversed; check the result!*

---

## Answer (e)

In (c), we obtained $\vec{\mathbf P}_1$ and $\vec{\mathbf P}_2$. Both polarisation vectors point downward ($-\hat z$), toward the lower plate/negative plate. Physically, polarisation describes the electric dipole moment per unit volume of a dielectric. When the capacitor produces a downward electric field, the positive and negative bound charges in the dielectric shift slightly relative to each other, producing microscopic electric dipoles aligned with that field. Although these microscopic dipoles are distributed throughout the dielectric, their positive and negative charges largely cancel each other (rather than being absent) inside the material. Mathematically, we can show this with

$$
\rho_b=-\nabla\cdot\vec{\mathbf P}.
$$

Since the polarisation in each dielectric ($\vec{\mathbf P}_1$ and $\vec{\mathbf P}_2$) is uniform,

$$
\rho_{b1}=-\nabla\cdot\vec{\mathbf P}_1=0
\qquad\text{and}\qquad
\rho_{b2}=-\nabla\cdot\vec{\mathbf P}_2=0.
$$

The divergence of a constant is zero.

However, at the material's surface, this cancellation is incomplete, so bound surface charge can appear. It is this bound surface charge density that we need to find. Mathematically,

$$
\sigma_b=\vec{\mathbf P}\cdot\hat n
\tag{7}
$$

where $\hat n$ is the outward normal vector of the dielectric slab.

{{< figure src="/images/griffiths-electrostatics/polarisation-bound-charge.webp" link="/images/griffiths-electrostatics/polarisation-bound-charge.webp" alt="The original diagram of polarisation, bound surface charges, and outward normals on both dielectric slabs." width="1579" height="996" loading="lazy" >}}

- At the upper surface of slab 1,

$$
\sigma_{b1\text{-top}}
=\vec{\mathbf P}_1\cdot\hat n_{1\text{-top}}
=\frac{\sigma}{2}(-\hat z)\cdot(\hat z)
=\boxed{-\frac{\sigma}{2}}.
$$

- At the lower surface of slab 1,

$$
\sigma_{b1\text{-bottom}}
=\vec{\mathbf P}_1\cdot\hat n_{1\text{-bottom}}
=\frac{\sigma}{2}(-\hat z)\cdot(-\hat z)
=\boxed{\frac{\sigma}{2}}.
$$

- At the upper surface of slab 2,

$$
\sigma_{b2\text{-top}}
=\vec{\mathbf P}_2\cdot\hat n_{2\text{-top}}
=\frac{\sigma}{3}(-\hat z)\cdot(\hat z)
=\boxed{-\frac{\sigma}{3}}.
$$

- At the lower surface of slab 2,

$$
\sigma_{b2\text{-bottom}}
=\vec{\mathbf P}_2\cdot\hat n_{2\text{-bottom}}
=\frac{\sigma}{3}(-\hat z)\cdot(-\hat z)
=\boxed{\frac{\sigma}{3}}.
$$

---

## Answer (f)

In problem (f), we use Gauss's law

$$
\oint_{\mathcal S}\vec{\mathbf E}\cdot\mathrm d\vec{\mathbf a}
=\frac{1}{\varepsilon_0}Q_{\text{enc}},
\tag{8}
$$

where $Q_{\text{enc}}=Q_{\text{free-enc}}+Q_{\text{bound-enc}}$.

{{< figure src="/images/griffiths-electrostatics/electric-field-pillboxes.webp" link="/images/griffiths-electrostatics/electric-field-pillboxes.webp" alt="The original diagram of Gaussian surfaces (i) and (ii), together with the free and bound surface charges." width="1816" height="866" loading="lazy" >}}

- The field inside slab 1 using Gaussian surface (i),

$$
\begin{aligned}
\oint_{\mathcal S}\vec{\mathbf E}\cdot\mathrm d\vec{\mathbf a}
&=\frac{1}{\varepsilon_0}Q_{\text{enc}}\\[6pt]
\int_{\substack{\text{upper}\\\text{cylinder face}}}
\vec{\mathbf E}\cdot\mathrm d\vec{\mathbf a}_{\substack{\text{upper}\\\text{cylinder face}}}
+\int_{\substack{\text{curved}\\\text{cylinder surface}}}
\vec{\mathbf E}\cdot\mathrm d\vec{\mathbf a}_{\substack{\text{curved}\\\text{cylinder surface}}}
+\int_{\substack{\text{lower}\\\text{cylinder face}}}
\vec{\mathbf E}\cdot\mathrm d\vec{\mathbf a}_{\substack{\text{lower}\\\text{cylinder face}}}
&=\frac{1}{\varepsilon_0}Q_{\text{enc}}\\[6pt]
0+0+E(-\hat z)\cdot(-\hat z)A
&=\frac{1}{\varepsilon_0}\left(\sigma-\frac{\sigma}{2}\right)A\\[6pt]
E&=\frac{\sigma}{2\varepsilon_0}
\end{aligned}
$$

Thus,

$$
\boxed{\vec{\mathbf E}_1=\frac{\sigma}{2\varepsilon_0}(-\hat z)}
$$

- The field inside slab 2 using Gaussian surface (ii),

$$
\begin{aligned}
\oint_{\mathcal S}\vec{\mathbf E}\cdot\mathrm d\vec{\mathbf a}
&=\frac{1}{\varepsilon_0}Q_{\text{enc}}\\[6pt]
\int_{\substack{\text{upper}\\\text{cylinder face}}}
\vec{\mathbf E}\cdot\mathrm d\vec{\mathbf a}_{\substack{\text{upper}\\\text{cylinder face}}}
+\int_{\substack{\text{curved}\\\text{cylinder surface}}}
\vec{\mathbf E}\cdot\mathrm d\vec{\mathbf a}_{\substack{\text{curved}\\\text{cylinder surface}}}
+\int_{\substack{\text{lower}\\\text{cylinder face}}}
\vec{\mathbf E}\cdot\mathrm d\vec{\mathbf a}_{\substack{\text{lower}\\\text{cylinder face}}}
&=\frac{1}{\varepsilon_0}Q_{\text{enc}}\\[6pt]
E(-\hat z)\cdot(\hat z)A+0+0
&=\frac{1}{\varepsilon_0}\left(\frac{\sigma}{3}-\sigma\right)A\\[6pt]
-E&=-\frac{2\sigma}{3\varepsilon_0}
\end{aligned}
$$

Thus,

$$
\boxed{\vec{\mathbf E}_2=\frac{2\sigma}{3\varepsilon_0}(-\hat z)}
$$

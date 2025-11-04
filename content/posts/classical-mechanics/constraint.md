+++
title = "Konstrain dan Gaya Konstrain"
date = "2023-11-02"
description = "yet another classical mechanics"

[taxonomies]
tags=["classicalmechanics101"]

[extra]
comment = true
+++

# Sistem Terkonstrain
Tinjau suatu sistem mekanik $\mathcal{S}$ yang terdiri dari sejumlah $N$ partikal 
$P_1, P_2, \dots, P_N$. Partikel di dalam $\mathcal{S}$ dapat berinteraksi melalui berbagai cara
(Gaya gravitasi, gaya coulomb, pegas penghubung, dsb.). Partikel-partikel ini juga dapat
berkaitan dengan gaya-gaya eksternal dan konstrain-konstrain.

## Sistem bebas konstrain.
Jika partikel di dalam $\mathcal{S}$ dapat bergerak bebas di dalam ruang yang
independen satu sama lain, maka sistem $\mathcal{S}$ adalah sistem bebas konstrain.
Di dalam kasus ini, maka persamaan gerak sistem adalah persamaan-persamaan Newtonian
untuk masing-masing dari $N$ partikel tersebut. Misalnya, jika partikel ke-$i$
bermassa $m_i$, pada posisi $\vec{r}_i$, bergerak dengan kelajuan $\vec{v}_i$, maka
persamaan gerak dari sistem $S$ adalah
$$
m_i\dot{\vec{v}}_i = \vec{F}_i
$$
di mana $\vec{F}_i$ adalah gaya yang bekerja pada partikel $P_i$.


{% alert(note=true) %}

Sebagai contoh: dua partikel bermassa $m_1$ dan $m_2$ yang terletak pada
$r_1$ dan $r_2$ akan saling berinteraksi melalui gaya gravitasi. Keduanya
 akan bergerak saling mendekat dengan persamaan gerak:

$$
m_1 \vec{a}_1 = m_1 m_2 G\frac{\hat{r}_2-\hat{r_1}}{|\vec{r}_2 - \vec{r_1}|^2}
~~~
m_2 \vec{a}_2 = m_2 m_1 G\frac{\hat{r}_1-\hat{r_2}}{|\vec{r}_1 - \vec{r_2}|^2}
$$

{% end %}


> Under construction...........




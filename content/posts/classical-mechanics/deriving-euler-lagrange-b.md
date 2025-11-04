+++
title = "Menurunkan Persamaan Euler-Lagrange Melalui Prinsip D'Alembert"
date = "2023-12-11"
description = "We will derive the Euler-Lagrange Equation in non-mathematician way, of course."

[taxonomies]
tags=["classicalmechanics101"]

[extra]
comment = true
+++

Kita akan memulai dengan $S$ sebagai integral dari fungsional $f[...]$

$$
S = \int_{x_1}^{x_2} \mathrm{d}x~f[y(x), y'(x), x] \tag{1}
$$

di mana $y(x)$ adalah kurva yang belum diketahui, yang menghubungkan ($x_1, y_1$) dan ($x_2, y_2$), sehingga 
$$
y(x_1) = y_1 ~~~\text{and}~~~ y(x_2) = y_2\tag{2}
$$

Di antara semua kemungkinan kurva yang memenuhi Persamaan (2), kita harus
mencari satu kurva yang meminimumkan (atau memaksimumkan, atau setidaknya
stasionar) integral $S$. Perhatikan bahwa fungsional $f[...]$ pada Persamaan
(1) adalah fungsi dari tiga variabel (variabel dalam konteks fungsional bisa
berupa fungsi). Namun, karena integral mengikuti lintasan $y=y(x)$, integrand
$f[y(x),y'(x), x]$ adalah fungsi dari satu variabel $x$. 

Jika kita menuliskan solusi yang kita inginkan (yaitu kurva yang membuat $S$ minimum) 
sebagai $y = y(x)$ maka integral $S$ dalam Persamaan (1) pada $y=y(x)$ nilainya
kurang dari sembarang kurva $y=Y(x)$ di mana
$$
Y(x)=y(x) + \eta(x)\tag{3}
$$
dengan $\eta(x)$ adalah _bump_ atau simpangan antara kurva $y(x)$ dengan $Y(x)$.
Karena $Y(x)$ harus melewati titik awal/$x_1$ dan akhir/$x_2$ maka $\eta(x)$ harus
memenuhi 
$$
\eta(x_1)=\eta(x_2)=0\tag{4}
$$
Tentu ada banyak (tak-hingga) pilihan untuk $\eta(x)$, misalnya, kita bisa memilih
$\eta = (x-x_1)(x_2-x)$ atau $\eta(x)=\sin[\pi(x-x_1)/(x_2-x_1)]$

Integral $S$ yang dilakukan disepanjang kurva $Y(x)$ harus lebih besar dibandingkan
ketika diambil pada kurva $y(x)$. Untuk menyatakan perysaratan ini, saya akan 
memperkenalkan parameter $\alpha$ dan mendifinisikan ulang $Y(x)$  sebagai
$$
Y(x)=y(x)+\alpha \eta(x)\tag{5}
$$
Sekarang, integral $S$ yang diambil pada kurva $Y(x)$ bergantung pada parameter $\alpha$,
sehingga saya dapat menyebutnya $S(\alpha)$. Kurva target kita, yaitu $y(x)$ didapatkan 
melalui Persamaan (5) dengan men-set $\alpha =0$. Untuk melakukan ini, kita hanya perlu
memeriksa $\mathrm{d}S/\mathrm{d}a = 0$ ketika $\alpha=0$.

Secara detail, integral $S(\alpha)$ adalah sebagai berikut:
$$
\begin{aligned}
S(\alpha) &= \int_{x_1}^{x_2}\mathrm{d}x\ f(Y, Y', x) \\
          &= \int_{x_1}^{x_2}\mathrm{d}x\ f(y+\alpha \eta, y'+\alpha \eta', x)\tag{5}
\end{aligned}
$$

Untuk mendiferensialkan Persamaan (5) terhadap $\alpha$, kita harus melakukan
$\partial f/\partial \alpha$. Karena $\alpha$ muncul pada dua argumen dari $f$, 
maka $\partial f/\partial \alpha$ akan memberikan dua suku:
$$
\frac{\partial}{\partial \alpha} f(y+\alpha \eta, y'+\alpha\eta', x) = \eta \frac{\partial f}{\partial y} + \eta'\frac{\partial f}{\partial y'},
$$
dan untuk $\mathrm{d}S/\mathrm{d}a$ yang harus sama dengan nol, maka
$$
\frac{\mathrm{d}S}{\mathrm{d}a} = \int_{x_1}^{x_2}\mathrm{d}x\ \frac{\partial f}{\partial \alpha} = \int_{x_1}^{x_2}\mathrm{d}x\ \left(
\eta \frac{\partial f}{\partial y}+\eta'\frac{\partial f}{\partial y'}\tag{6}
\right) = 0.
$$
Kondisi ini harus benar, untuk sembarang $\eta(x)$ yang memenuhi Persamaan (4).

Jika kita menuliskan suku kedua pada ruas kanan dengan integal parsial maka,
$$
\int_{x_1}^{x_2}\mathrm{d}x\ \eta'(x)\frac{\partial f}{\partial y'} = \left[
\eta(x)\frac{\partial f}{\partial y'}
\right]_{x_1}^{x^2} - \int_{x_1}^{x_2}\mathrm{d}x\ \eta(x)\frac{\mathrm{d}}{\mathrm{d}x}\left(\frac{\partial f}{\partial y'}\right).
$$

Karena kondisi Persamaan (4), suku pertama pada ruas kanan sama dengan nol, sehingga
$$
\int_{x_1}^{x_2}\mathrm{d}x\ \eta'(x)\frac{\partial f}{\partial y'} = -
\int_{x_1}^{x_2}\mathrm{d}x\ \eta(x)\frac{\mathrm{d}}{\mathrm{d}x}
\left(\frac{\partial f}{\partial y'}\right).\tag{7}
$$

Dengan mensubtitusi Persamaan (7) ke (6), didapatkan
$$
\int_{x_1}^{x_2}\mathrm{d}x\ \eta(x) \left(
\frac{\partial f}{\partial y}-\frac{\mathrm{d}}{\mathrm{d}x}\frac{\partial f}{\partial y'}
\right)=0.
$$

Kondisi di atas harus dipenuhi untuk sembarang fungsi $\eta(x)$. Sehingga,
faktor di dalam suku di dalam tanda kurung besar harus sama dengan nol.

$$
\frac{\partial f}{\partial y}-\frac{\mathrm{d}}{\mathrm{d}x}\frac{\partial f}{\partial y'} = 0.\tag{Persamaan Euler-Lagrange}
$$
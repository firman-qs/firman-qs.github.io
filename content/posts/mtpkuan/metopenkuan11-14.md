+++
title = "Metopen Kuantitatif - Review Artikel 14"
date = "2025-11-11"
description = "Uji beda grup (uji prasyarat, t test, dan non parametrik yang relevan)"

[taxonomies]
tags = ["PFIS258005", "kuliah"]

[extra]
comment = true
+++

Nama: Firman Qashdus Sabil\
NIM: 250321830676

## Identitas Artikel
- **Judul**: Best practice in statistics: Use the Welch t-test when testing the difference between two groups
- **Penulis**: Robert M West
- **Jurnal**: Annals of Clinical Biochemistry Volume 58, Issue 4, July 2021, Pages 267-269
- **Tautan**: [https://journals.sagepub.com/doi/epub/10.1177/0004563221992088](https://journals.sagepub.com/doi/epub/10.1177/0004563221992088)

## Tujuan Penelitian
Tujuan utama artikel ini adalah memberikan panduan praktis kepada klinisi dan ilmuwan mengenai pemilihan uji statistik terbaik ketika membandingkan dua kelompok data, khususnya menekankan bahwa Welch t-test lebih valid dan lebih fleksibel dibandingkan Student’s t-test ketika varians antar kelompok tidak sama. Artikel ini ditulis sebagai _best practice recommendation_.

## Metode Penelitian
Karena artikel ini bukan penelitian empiris, pendekatannya bersifat Konseptual & Demonstratif berupa
1. Penjelasan teoretis tentang asumsi t-test, robustnes terhadap non-normalitas, dan perbedaan antara Student’s t-test dan Welch t-test.
2. Satu contoh studi simulatif menggunakan dua grup data:
    - Group 1: n=11, mean=4.0, SD=1.0
    - Group 2: n=22, mean=3.0, SD=1.5
3. Analisis perbedaan nilai t, derajat kebebasan (df), dan P-value.


## Hasil/Temuan Utama
1. Welch t-test lebih valid daripada Student’s t-test, karena
    - Tidak memerlukan asumsi kesamaan varians.
    - Hampir selalu memiliki kekuatan uji (power) yang setara dengan Student’s t-test.
    - Derajat kebebasan dihitung berdasarkan formula Welch–Satterthwaite sehingga lebih akurat ketika varians tidak homogen
2. Artikel menolak praktik penggunaan uji homogenitas varians (misalnya Levene test) sebagai keputusan awal, karena hal itu tidak efisien dan dapat menyebabkan decision error.
3. Untuk distribusi yang sangat tidak normal, disarankan menggunakan Mann–Whitney U-test
4. Contoh simulasi menunjukkan Welch t-test memberikan hasil P yang lebih kecil dan derajat kebebasan yang lebih tepat dibanding Student’s t-test.
    - Student: t = 2,79; df = 31; p = 0,009
    - Welch: t = 3,174; df = 27,9; p = 0,004 

## Kesimpulan
- Welch t-test seharusnya menjadi default saat membandingkan dua mean.
- Student’s t-test memiliki keterbatasan karena asumsi varians sama jarang terpenuhi di dunia nyata.
- Bila data simetris atau n ≥ 50, Welch t-test sangat robust dan memberikan hasil yang valid.
- Mann–Whitney digunakan hanya bila distribusi terlalu miring (skewed).

## Kelebihan (termasuk gap penelitian yang diteliti artikel ini)
Kelebihan:
- Memberikan panduan sederhana dan aplikatif bagi klinisi yang sering membandingkan dua kelompok data.
- Menggabungkan teori tentang t-test, normalitas, robustnes. 
- Disertai contoh simulatif yang mudah dipahami

## Kekurangan
- Artikel hanya memberikan contoh simulatif, sehingga tidak menunjukkan kasus dunia nyata.
- Sebagai best practice note, artikel tidak memberikan simulasi dengan berbagai skenario ekstrem (misal outliers, skewness tinggi)
- Tidak Membahas Efek Ukuran (Effect Size) padahal effect size penting untuk interpretasi hasil.

## Novelty dari Artikel Ini
Meskipun secara konsep Welch t-test bukan hal baru, novelty artikel ini adalah rekomendasi praktis bahwa: Welch t-test sebaiknya menjadi default test dalam perbandingan dua kelompok, bukan Student’s t-test. Novelty ini bersifat praktis dan edukatif, bukan metodologis.
<!-- 
## Novelty yang Dapat Diajukan untuk Penelitian Selanjutnya
- Penelitian yang menilai secara empiris efek penggunaan ChatGPT dalam pengajaran statistik terhadap learning outcomes dan conceptual understanding.
- Menguji kemampuan AI dalam model regresi multivariat, analisis faktor, atau data non-linear. -->

+++
title = "Metopen Kuantitatif - Review Artikel 13"
date = "2025-11-05"
description = "Variabel, Statistik Deskriptif, pemilihan dan penafsiran berbagai Statistik Inferential"

[taxonomies]
tags = ["PFIS258005", "kuliah"]

[extra]
comment = true
+++

Nama: Firman Qashdus Sabil\
NIM: 250321830676

## Identitas Artikel
- **Judul**: The use of generative AI in statistical data analysis and its impact on teaching statistics at universities of applied sciences
- **Penulis**: Joachim Schwarz, Business Department, University of Applied Sciences Emden/Leer, Germany.
- **Jurnal**: Teaching Statistics. 2025;47:118–128
- **Tautan**: [https://onlinelibrary.wiley.com/doi/epdf/10.1111/test.12398](https://onlinelibrary.wiley.com/doi/epdf/10.1111/test.12398)

## Tujuan Penelitian
- Mengeksplorasi penggunaan generative AI (khususnya ChatGPT) dalam analisis data statistik.
- Menganalisis dampaknya terhadap pengajaran statistika di universitas terapan (universities of applied sciences).
- Mengidentifikasi batasan dan potensi AI generatif dalam analisis statistik serta bagaimana hal tersebut mengubah fokus pembelajaran statistik—dari penguasaan perangkat lunak ke pemahaman konseptual.

## Metode Penelitian
Penelitian menggunakan pendekatan eksperimen eksploratif dengan:
- Empat set data sintetik/buatan (artificially generated datasets) untuk menguji kemampuan ChatGPT Data Analyst dalam melakukan analisis statistik dasar (t-test, regresi linear, ANOVA).
- Penulis memposisikan diri sebagai pengguna tanpa pengetahuan statistik dan memberikan prompt sederhana kepada ChatGPT.
- Setiap data dianalisis tiga kali untuk melihat konsistensi hasil.
- Hasil AI dibandingkan dengan hasil analisis menggunakan $R$ untuk memeriksa akurasi.

## Hasil/Temuan Utama
- ChatGPT ampu melakukan analisis statistik dasar dan menghasilkan kode Python yang dapat dijalankan;
- tidak konsisten dalam memeriksa asumsi uji (seperti normalitas dan kesamaan varians), kadang mengabaikan outliers dan missing values;
- meskipun output numerik dominan akurat, AI tidak selalu dapat mendeteksi pelanggaran asumsi atau memilih uji alternatif yang sesuai (mis. Kruskal-Wallis);
- mahasiswa tanpa pengetahuan statistik kini dapat menjalankan analisis, namun tetap memerlukan pemahaman teoretis untuk menilai validitas hasil;
- pengajaran statistik sebaiknya menekankan pemahaman konsep, interpretasi hasil, dan berpikir kritis, bukan sekadar penguasaan teknis perangkat lunak seperti $R$ atau Python;

## Kesimpulan
- Generative AI mempermudah analisis statistik dan berpotensi mengubah peran dosen dari pengajar teknis menjadi fasilitator pemahaman konseptual.
- Pemahaman statistik manusia tetap penting, terutama untuk memastikan analisis dilakukan dengan benar dan sesuai konteks.
- Penggunaan AI di kelas dapat membantu mahasiswa berfokus pada interpretasi hasil dan kesadaran terhadap batasan alat.
- Etika dan privasi data perlu dipertimbangkan saat menggunakan AI dalam analisis statistik.

## Kelebihan (termasuk gap penelitian yang diteliti artikel ini)
Kelebihan:
- Kajian awal dan empiris yang menguji kemampuan ChatGPT secara langsung terhadap analisis data statistik nyata.
- Fokus pada pendidikan terapan (applied sciences).
- Menyediakan kerangka rekomendasi pedagogis konkret bagi dosen statistik di era AI.

Gap yang diteliti:
- Sebelum artikel ini, sebagian besar studi hanya membahas potensi ChatGPT dalam pembelajaran atau pembuatan konten, bukan dalam kapasitas analisis data statistik yang sebenarnya.
- Artikel ini mengisi kekosongan dengan menguji performa ChatGPT secara praktis dan membandingkannya dengan perangkat lunak statistik tradisional.

## Kekurangan
- Dataset yang digunakan terlalu sederhana; belum mencakup analisis multivariat atau model statistik lanjutan.
- Belum mengukur secara langsung apakah penggunaan AI meningkatkan hasil belajar mahasiswa.
- Hasil sangat bergantung pada perumusan _prompt_; belum ada standar untuk menilai variasi pengguna.
- Kurangnya analisis kuantitatif terhadap performa AI: perbandingan dengan ground truth masih bersifat deskriptif.

## Novelty dari Artikel Ini
- Salah satu studi pertama yang menguji langsung kemampuan ChatGPT dalam analisis statistik secara sistematis.
- Menunjukkan bahwa AI dapat menggantikan sebagian peran software analitik bagi pengguna non-ahli.
- Mengusulkan pergeseran paradigma pengajaran statistik—dari mengajarkan alat ke menanamkan pemahaman konseptual dan berpikir kritis.

## Novelty yang Dapat Diajukan untuk Penelitian Selanjutnya
- Penelitian yang menilai secara empiris efek penggunaan ChatGPT dalam pengajaran statistik terhadap learning outcomes dan conceptual understanding.
- Menguji kemampuan AI dalam model regresi multivariat, analisis faktor, atau data non-linear.

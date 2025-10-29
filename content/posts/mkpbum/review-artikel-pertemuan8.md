+++
title = "PBuM - Review Artikel Pertemuan 8"
date = "2025-10-25"
description = "Sains & Pembangunan: SDG 3, 4, 6, 7, 12, 13"

[taxonomies]
tags = ["FMIA258001", "kuliah"]

[extra]
comment = true
+++

Nama: Firman Qashdus Sabil\
NIM: 250321830676

Anda dapat mendownload:
- artikel: [disini $\rightarrow$ https://doi.org/10.1007/s11192-022-04358-x](https://drive.google.com/file/d/14OKJMF99-sjxEjgZd43dspyU4olaFvqg/view?usp=sharing)
<!-- - pdf review Artikel: [disini $\rightarrow$ Drive review artikel](https://drive.google.com/file/d/1-bB_VblQ0trslAnH-QY8gS-qE475NpdK/view?usp=sharing) -->
 
> Review Artikel Pertemuan 8: Sains & Pembangunan: SDG 3, 4, 6, 7, 12, 13

# Identitas Artikel

**Judul**: Mapping the sustainable development goals (SDGs) in science,
technology and innovation: application of machine learning in SDG-oriented
artefact detection\
**Penulis**: Arash Hajikhani dan Arho Suominen\
**Jurnal**: Scientometrics (2022) Vol. 127, hlm. 6661–6693\
**DOI**: [https://doi.org/10.1007/s11192-022-04358-x](https://doi.org/10.1007/s11192-022-04358-x)

# Tujuan

Artikel ini bertujuan untuk mengembangkan pendekatan baru dalam mengidentifikasi
kontribusi ilmu pengetahuan dan teknologi terhadap Sustainable Development Goals
(SDGs) menggunakan machine learning (ML). Penulis ingin memperluas metode
klasifikasi SDG dari publikasi ilmiah ke dokumen paten, sehingga dapat memetakan
hubungan antara penelitian ilmiah, inovasi teknologi, dan tujuan pembangunan
berkelanjutan.

# Metode Penelitian
Penelitian ini menggunakan metode kuantitatif berbasis _text mining_ dan _machine learning_. Langkah-langkahnya meliputi:
1. Menyusun taksonomi dan kata kunci SDG berdasarkan basis data Scopus/SciVal dan dokumen resmi PBB (2015–2020).
2. Menggunakan data publikasi ilmiah yang telah diberi label SDG sebagai data latih (training data).
3. Menguji beberapa algoritma klasifikasi teks seperti Naive Bayes, Support Vector Machine, dan Logistic Regression dengan berbagai model representasi teks (TF-IDF, Word2Vec, Doc2Vec).
4. Menentukan model terbaik (Word2Vec + Logistic Regression) untuk mendeteksi relevansi SDG dalam paten EPO (European Patent Office).
5. Membandingkan hasil deteksi ML dengan pencarian leksikal tradisional.

# Hasil/Temuan Utama
1. Model ML terbaik (Word2Vec + Logistic Regression) memiliki akurasi lebih dari 60% untuk sebagian besar kategori SDG, dengan kinerja terbaik pada SDG 7 (energi bersih).
2. Penerapan model ini pada 132.226 paten EPO (tahun 2020) menunjukkan bahwa lebih dari 20% keluarga paten berkaitan dengan SDG 7.
3. Model ML memperluas cakupan identifikasi paten SDG sebesar 14% dibandingkan metode pencarian leksikal biasa.
4. Analisis jaringan menunjukkan bahwa ML mampu menemukan klaster tematik baru (misalnya teknologi baterai isi ulang) yang tidak teridentifikasi dengan pendekatan konvensional.

# Kesimpulan
Penelitian ini berhasil menunjukkan bahwa machine learning dapat meningkatkan
kemampuan deteksi artefak ilmu pengetahuan dan teknologi yang relevan dengan
SDGs. Pendekatan ini memperluas cakupan pemetaan inovasi terhadap tujuan
keberlanjutan serta dapat digunakan untuk mendukung kebijakan riset dan strategi
perusahaan dalam mengarahkan inovasi yang berkontribusi pada SDGs.

# Kelebihan (termasuk gap yang diisi oleh artikel)
- Artikel ini mengisi gap dalam literatur mengenai cara menghubungkan publikasi ilmiah dan paten dengan SDGs secara sistematis menggunakan pendekatan otomatis.
- Sebelumnya, pemetaan SDG dalam konteks inovasi banyak dilakukan secara deskriptif atau berbasis kata kunci sederhana. Penelitian ini memperkenalkan model ML yang mampu mengklasifikasi teks kompleks dan mendeteksi hubungan tersembunyi.
- Memberikan bukti empiris tentang bagaimana machine learning dapat diterapkan lintas domain (dari publikasi ke paten).
- Berkontribusi pada pengembangan kerangka pengukuran “Beyond GDP” untuk mengevaluasi dampak inovasi terhadap keberlanjutan.

# Kekurangan
- Akurasi model masih terbatas (sekitar 60%), terutama pada kategori SDG dengan definisi yang lebih luas (misalnya SDG 8, 14, 15).
- Hanya menggunakan data paten dari EPO (2020), sehingga generalisasi globalnya terbatas.
- Tidak membahas pendekatan deep learning yang mungkin dapat meningkatkan performa klasifikasi.
- Tidak menilai faktor semantik yang lebih kompleks seperti hubungan sebab-akibat antara inovasi dan pencapaian SDG.

# Novelty dari Artikel Ini
- Penerapan pertama machine learning-based classification untuk menghubungkan publikasi ilmiah dan dokumen paten dalam konteks SDGs.
- Penggunaan transfer learning dari publikasi (sains) ke paten (teknologi) untuk memetakan relevansi SDG.
- Menunjukkan peningkatan signifikan (14%) dalam cakupan deteksi dibandingkan metode berbasis kata kunci.

# Novelty yang Dapat Diajukan untuk Penelitian Selanjutnya
- Menggunakan deep learning (misalnya BERT, GPT-based models) untuk menangkap konteks semantik yang lebih dalam dan meningkatkan akurasi klasifikasi.
- Mengintegrasikan analisis multibahasa untuk memetakan paten non-Inggris atau publikasi regional.
- Mengaitkan hasil klasifikasi dengan indikator dampak sosial-ekonomi untuk menilai efektivitas inovasi terhadap pencapaian SDG.

<!-- <iframe src="https://drive.google.com/file/d/1-bB_VblQ0trslAnH-QY8gS-qE475NpdK/preview" width="100%" height="600" allow="autoplay" frameborder="0"></iframe> -->

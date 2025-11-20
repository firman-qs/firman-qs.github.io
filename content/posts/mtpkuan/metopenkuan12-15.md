+++
title = "Metopen Kuantitatif - Review Artikel 15"
date = "2025-11-20"
description = "Uji beda grup (uji prasyarat, t test, dan non parametrik yang relevan)"

[taxonomies]
tags = ["PFIS258005", "kuliah"]

[extra]
comment = true
+++

Nama: Firman Qashdus Sabil\
NIM: 250321830676

> _Gambar/tabel/instrumen yang direferensi dapat dilihat langsung di dalam artikel dan lampiran artikel._

## Identitas Artikel
- **Judul**: How do physics students evaluate artificial intelligence responses on comprehension questions? A study on the perceived scientific accuracy and linguistic quality of ChatGPT
- **Penulis**: Merten Nikolay Dahlkemper, Simon Zacharias Lahme, Pascal Klein
- **Jurnal**: Annals of Clinical Biochemistry Volume 58, Issue 4, July 2021, Pages 267-269
- **Tautan**: [https://journals.aps.org/prper/abstract/10.1103/PhysRevPhysEducRes.19.010142](https://journals.aps.org/prper/abstract/10.1103/PhysRevPhysEducRes.19.010142)

## Tujuan Penelitian
Dari bagian Introduction dan Research Questions, tujuan studi ini adalah:
1. Menilai bagaimana mahasiswa fisika menilai jawaban ChatGPT terhadap soal-soal pemahaman fisika dasar (mekanika).
2. Membandingkan persepsi mahasiswa terhadap:
   - scientific accuracy (ketepatan ilmiah)
   - linguistic quality (kualitas bahasa) dari jawaban ChatGPT versus sample solution buatan ahli.
3. Menganalisis pengaruh pengetahuan awal _(self-assessment)_ terhadap kualitas penilaian mereka.
4. Menguji apakah kualitas bahasa memengaruhi penilaian terhadap akurasi ilmiah, terkait fenomena illusion of understanding.

## Metode Penelitian
### Desain
Penelitian kuantitatif dengan survei online berisi:
- 3 soal fisika tingkat kesulitan progresif: rolling motion, waves, fluid dynamics (lihat tabel detail pada halaman lampiran: Tabel VI).
- Untuk setiap soal:
  - 3 jawaban ChatGPT (sengaja dipilih dari 5 kandidat)
  - 1 jawaban sample solution (ditulis oleh peneliti tetapi dilabeli “ChatGPT”).
  
### Partisipan
102 mahasiswa fisika tahun pertama & kedua ikut serta (94 full dataset). Rinciannya terdapat dalam Tabel II (page 7) yang menunjukkan pembagian jurusan, semester, dan gender.

### Instrumen Penilaian
Mahasiswa menilai setiap jawaban berdasarkan 5 kriteria:
1. Factual correctness
2. Degree of completeness
3. Comprehensibility
4. Linguistic quality
5. Suitability as sample solution

Analisis faktor menunjukkan dua konstruk:
- Scientific accuracy = (1), (2), (5)
- Linguistic quality = (3), (4)

Reliabilitasnya ditampilkan pada Tabel III (page 8).

### Analisis
- Repeated-measures ANOVA
- ACOVA (mengontrol efek kualitas bahasa)
- Gap metric: selisih persepsi antara ChatGPT vs sample solution
- Visualisasi menggunakan grafik seperti Fig. 2 dan Fig. 3.

## Hasil/Temuan Utama
- Linguistic quality ChatGPT ≈ sample solution, artinya mahasiswa melihat gaya bahasa ChatGPT sama baiknya dengan jawaban ahli.
- Scientific accuracy ChatGPT dinilai lebih rendah dari sample solution, terutama untuk soal mudah dan sedang.\
> Lihat: Fig. 2 menunjukkan bar warna merah (linguistic quality) lebih tinggi, tetapi bar abu-abu (scientific accuracy) jauh lebih rendah pada respons ChatGPT.
- Mahasiswa dengan self-assessed knowledge tinggi semakin mampu membedakan jawaban yang benar (sample solution) dari jawaban ChatGPT yang salah.
- Mahasiswa dengan pengetahuan rendah memberi penilaian hampir sama antara ChatGPT & sample solution, illusion of understanding.
> lihat: Fig. 3 menunjukkan gap yang meningkat seiring peningkatan self-assessment untuk question 1 & 2.
- Setelah dikontrol dengan ANCOVA, efek perbedaan scientific accuracy melemah, artinya: Semakin baik bahasa ChatGPT, semakin tinggi persepsi akurasi ilmiah, meskipun isinya salah.
- Dampak paling besar pada pertanyaan 2 (gelombang).
Lihat Table IV: η² turun signifikan setelah dikontrol linguistic quality.
- Pada soal tersulit (fluida), satu jawaban ChatGPT (R3.4) dinilai hampir sama baiknya dengan sample solution karena “tampak benar” meski salah.
- Mahasiswa umumnya percaya AI bermanfaat, tetapi banyak yang sadar jawaban AI bisa salah (section VA).

## Kesimpulan
Peneliti menyimpulkan:
- Mahasiswa dapat menilai akurasi ChatGPT hanya jika memiliki pengetahuan awal yang memadai.
- Pada topik yang tidak dipahami, mereka rentan tertipu oleh jawaban ChatGPT yang terdengar meyakinkan.
- Kualitas bahasa ChatGPT meningkatkan illusion of correctness, sehingga berpotensi menyesatkan.
- ChatGPT dapat dijadikan alat edukasi jika digunakan untuk aktivitas reflektif seperti “spot the bot”.

## Gap penelitian yang diangkat
- Belum ada studi sebelumnya yang menguji persepsi users terhadap jawaban AI pada pendidikan fisika (kebanyakan studi hanya menguji performa ChatGPT, bukan persepsi manusia).
- Menghubungkan hasil dengan teori _Illusion of Understanding_—-yang jarang digunakan pada studi AI.
- Mengintegrasikan faktor metakognisi dan prior knowledge dalam menilai akurasi AI.
- Menyertakan Dataset dan instrumen yang digunakan.

## Kekurangan
- Self-assessment terkenal tidak akurat (penulis juga mengakui hal ini).
- Teks soal dalam bahasa Jerman, sedangkan kemampuan ChatGPT mungkin berbeda dengan bahasa Inggris.
- Tidak menguji dampak prompting ChatGPT diberi prompt standar. Padahal kualitas output ChatGPT sangat dipengaruhi cara prompt.

## Penelitian selanjutnya yang Dapat Diajukan
Peneltiian-penelitian yang menjawab:
- Karakteristik mahasiswa seperti apa yang memengaruhi keberhasilan belajar dengan bantuan AI?
- Bagaimana pengetahuan dan keterampilan terkait AI memengaruhi proses belajar dan pemecahan masalah fisika (dan sebaliknya)?
- Strategi apa yang digunakan mahasiswa untuk memanfaatkan AI secara efektif dalam pemecahan masalah dan proses belajar?
- Apa yang perlu diketahui oleh pendidik fisika tentang penggunaan AI, dan bagaimana mereka perlu dipersiapkan untuk memanfaatkan AI secara efektif dalam pembelajaran?
- Bagaimana AI dapat digunakan untuk menggali pemahaman yang lebih dalam terkait aspek perilaku, kognitif, metakognitif, afektif, serta keyakinan (beliefs) mahasiswa?

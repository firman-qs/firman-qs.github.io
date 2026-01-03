+++
title = "Metopen Kuantitatif - Usulan Novelty Artikel Pertemuan 15"
date = "2025-12-11"
description = "Tugas kuliah metopen kuantitatif, usulan Novelty Artikel Pertemuan 15"

[taxonomies]
tags = ["PFIS258005", "kuliah"]

[extra]
comment = true
katex = true
+++

Nama: Firman Qashdus Sabil\
NIM: 250321830676

---

<style>
.table-container {
  margin: 2rem auto;
  overflow-x: auto;
   width: 90vw;
  margin-left: calc(-43vw + 50%);
  overflow-x: auto;
  padding: 1rem 0;
}

.table-container table {
  width: 150%;
  border-collapse: collapse;
  table-layout: fixed;
  border: 1px solid #444444; /* outer border black */
}

.table-container th,
.table-container td {
  border: 1px solid #444444; /* black borders for all cells */
  padding: 10px;
  text-align: left;
  vertical-align: top;
  word-wrap: break-word;
}
/* * {
color: black; opacity=0.0; background-color: black;
} */
</style>
> Geser untuk melihat kolom yang di kanan

<div class="table-container">
<table>
<thead>
<tr>
<th>Judul & Fokus Studi</th>
<th>Tujuan</th>
<th>Metode (MANCOVA)</th>
<th>Variabel</th>
<th>Instrumen / Data</th>
<th>Hasil Utama (Diparafrase)</th>
<th>Gap / Peluang Riset</th>
</tr>
</thead>
<tbody>

<tr>
<td><b>Post-Hoc Procedures Following One-Way MANCOVA Under Normality Assumptions</b></td>
<td>Mengevaluasi stabilitas tingkat kesalahan Tipe-I berbagai prosedur post-hoc setelah MANCOVA satu arah pada beragam kondisi desain.</td>
<td>
Simulasi Monte-Carlo (28 skenario).  
Faktor manipulasi:  
(1) struktur varians antar-grup (homogen vs heterogen),  
(2) keseimbangan ukuran grup,  
(3) ukuran sampel total.  
Analisis utama: one-way MANCOVA → diikuti uji post-hoc multivariat dan univariat terkontrol.
</td>
<td>
Independen: kondisi varians, keseimbangan grup, N.  
Kovariat: variabel latar sintetis.  
Terikat multivariat: vektor outcome kontinu.  
Indikator evaluasi: Type-I error rate.
</td>
<td>Dataset simulasi multivariat normal; analisis di R dan SPSS.</td>
<td>
Tidak terdapat satu prosedur post-hoc yang konsisten optimal di seluruh kondisi.  
Beberapa uji mempertahankan Type-I error lebih stabil pada desain seimbang, namun performanya menurun pada kondisi heteroskedastik dan tidak seimbang.
</td>
<td>
Kebutuhan pedoman adaptif pemilihan post-hoc pasca-MANCOVA serta implementasi otomatis dalam pipeline analitik pendidikan.
</td>
</tr>

<tr>
<td><b>Social Connections and Communities of Practice in Physics Laboratories</b></td>
<td>Menguji perbedaan pola keterhubungan sosial dan self-efficacy laboratorium antara kelas tatap muka dan remote.</td>
<td>
Quasi-eksperimental nonequivalent group design.  
Analisis utama: MANCOVA dengan beberapa indikator sosial sebagai DV dan jenis lingkungan lab sebagai faktor.
</td>
<td>
IV: tipe lab (in-person vs remote).  
Covariat: pengalaman sebelumnya, demografi.  
DV multivariat: dimensi keterhubungan sosial dan self-efficacy.
</td>
<td>Kuesioner sikap dan pengalaman laboratorium; analisis faktor untuk pembentukan konstruk.</td>
<td>
Perbedaan multivariat signifikan antara lab tatap muka dan remote.  
Interaksi dengan instruktur muncul sebagai prediktor paling kuat terhadap self-efficacy laboratorium.
</td>
<td>
Perlu desain intervensi pedagogis terstruktur untuk memperkuat komunitas praktik dalam konteks remote.
</td>
</tr>

<tr>
<td><b>Physics Students’ Evaluation of AI-Generated Responses</b></td>
<td>Menganalisis bagaimana mahasiswa menilai kualitas ilmiah dan linguistik jawaban AI pada soal pemahaman fisika.</td>
<td>
Eksperimen survei.  
Analisis utama: MANCOVA dengan tipe jawaban dan tingkat kesulitan soal sebagai faktor, serta self-estimated expertise sebagai kovariat.
</td>
<td>
IV: tipe jawaban (AI vs solusi contoh), tingkat kesulitan.  
Covariat: estimasi kemampuan diri.  
DV multivariat: rating akurasi ilmiah & kualitas bahasa.
</td>
<td>Kuesioner online berbasis Likert; soal mekanika berjenjang.</td>
<td>
Efek multivariat signifikan menunjukkan bahwa perbedaan persepsi terhadap akurasi ilmiah dipengaruhi oleh tingkat kesulitan dan kepercayaan diri akademik.
</td>
<td>
Intervensi eksplisit diperlukan untuk meningkatkan literasi evaluatif siswa terhadap konten AI.
</td>
</tr>

<tr>
<td><b>Problem-Based Learning in Mechanical Waves Instruction</b></td>
<td>Menguji efektivitas PBL terhadap pemahaman konsep gelombang mekanik.</td>
<td>
Solomon four-group design.  
Analisis: repeated-measures MANCOVA untuk membandingkan profil perubahan skor konseptual antar kelompok.
</td>
<td>
IV: metode pembelajaran (PBL vs tradisional).  
Covariat: kemampuan awal.  
DV multivariat: skor subskala pemahaman gelombang.
</td>
<td>Mechanical Wave Conceptual Survey (MWCS).</td>
<td>
PBL menghasilkan peningkatan multivariat signifikan pada pemahaman konsep dibandingkan pembelajaran tradisional.
</td>
<td>
Mekanisme kognitif dan metakognitif PBL masih jarang dieksplorasi secara kuantitatif.
</td>
</tr>

<tr>
<td><b>Permutation-Based Inference for Multivariate Educational Data</b></td>
<td>Menilai kelayakan uji permutation sebagai alternatif MANCOVA parametrik pada sampel kecil.</td>
<td>
Perbandingan MANCOVA parametrik vs permutation-based MANCOVA pada berbagai skenario ukuran sampel dan distribusi.
</td>
<td>
Kondisi analisis sebagai faktor.  
Outcome: p-value, power, stabilitas Type-I error.
</td>
<td>Simulasi dan dataset empiris kecil; analisis di R.</td>
<td>
Pendekatan permutation menunjukkan performa inferensial yang sebanding dan lebih robust saat asumsi normalitas diragukan.
</td>
<td>
Kurangnya panduan praktis penggunaan permutation-MANCOVA dalam riset pendidikan.
</td>
</tr>

</tbody>
</table>
</div>

Berdasarkan lima artikel di atas, terdapat tema menarik berkaitan dengan: metode pembelajaran (PBL), interaksi sosial/komunitas praktik (remote vs in-person), kemampuan siswa mengevaluasi respons AI, serta isu metodologis statistik (pemilihan post-hoc / penggunaan permutation tests (lihat Artikel 3 untuk instrumen penilaian jawaban AI; Artikel 4 untuk desain pengajaran PBL; Artikel 2 untuk pentingnya komunitas sosial; Artikel 1 dan 5 untuk pedoman analisis statistik).

## Usulan Judul: 

**Pengaruh Spot-the-Bot Berbasis Problem-Based Learning terhadap Kemampuan Evaluasi Kritis Jawaban AI dan pemahaman konsep Gelombang Mekanik**

**The Effect of Spot-the-Bot Based on Problem-Based Learning on the Critical Evaluation Ability of AI Answers and Conceptual Understanding of the Mechanical Wave**

### Metode
Quasi-eksperimental dengan Solomon four-group design (menghindari efek sensitization pre-test seperti pada Kanyesigye). Alokasi kelas ke 4 grup:
- G1: Intervensi (PBL + Spot-the-Bot) — pre & post
- G2: Control (TIM) — pre & post
- G3: Intervensi (PBL + Spot-the-Bot) — post only
- G4: Control (TIM) — post only.

### sampel
- Subjek: siswa atau mahasiswa awal.
- Sampling: cluster sampling berdasarkan kelas/sekolah; randomisasi pada cluster.
- Ukuran sampel: (setelah menghitung power) jika grup kecil, dapat memakai permutation tests untuk uji hipotesis.

### Treatment
- *PBL*
- *Spot-the-Bot:* setiap kelompok diberi aktivitas terstruktur tiap minggu: (a) diberikan beberapa jawaban (ChatGPT + sample solutions yang dimasking) untuk soal konseptual gelombang; (b) siswa bekerja kelompok menganalisis, menandai kesalahan, menulis argumen perbaikan; (c) refleksi kelas dan feed-forward dari guru. Instruksi dan rubrik penilaian dapat diadaptasi dari instrumen Artikel 3 (rating scientific accuracy & linguistic quality).

### Variabel yang diukur
1. Pemahaman konsep gelombang mekanik dengan skor MWCS (Mechanical Wave Conceptual Survey) pre & post.
2. Kemampuan evaluasi kritis jawaban AI yang diukur dengan skala/rubrik
3. Kontrol: self-estimated content knowledge, demografi (gender, usia, subject combination).



![Scholar Indonesia](../16-1.png)
![Scholar Inggris](../16-2.png)

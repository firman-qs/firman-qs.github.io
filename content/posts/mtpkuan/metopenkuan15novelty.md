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
        <th>Judul & _Link_ Review</th>
        <th>Tujuan</th>
        <th>Metode</th>
        <th>Variabel</th>
        <th>Instrumen/ Data Penelitian</th>
        <th>Hasil</th>
        <th>Gap</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>
           Post-Hoc Tests in One-Way MANCOVA: The Case for Normal Distribution
        </td>
        <td>
         Membandingkan tingkat kesalahan Tipe-I (α) dari 10 uji post-hoc pada satu-way MANCOVA di empat kondisi (homoscedastic/heteroscedastic × balanced/unbalanced) dan berbagai ukuran sampel.
        </td>
        <td>
          <b>Metode:</b> Monte-Carlo simulation: 28 dataset, tiap kondisi 10.000 resamples. Dimanipulasi: varians antar-grup dan keseimbangan ukuran grup; ukuran sampel N = {30,90,150,300,750,1500,3000}. Analisis: one-way MANCOVA diikuti 10 post-hoc tests (7 untuk equal variances, 3 untuk unequal variances). Pengolahan di R / SPSS. 
        </td>
        <td>
          <ul>
          <li><p>Independen (dimanipulasi dalam simulasi): kondisi varians (homoscedastic/heteroscedastic), keseimbangan ukuran grup (balanced/unbalanced), ukuran sampel total N.</p>
          </li>
          <li><p>Terikat: Type-I error rate (persentase penolakan H0 saat H0 benar).</p>
          </li>
          </ul>
        </td>
        <td>
          R (Rcmdr), IBM SPSS untuk perhitungan MANCOVA dan uji-uji post-hoc. Implementasi algoritma simulasi Monte-Carlo.
        </td>
        <td>
        Tidak ada satu uji post-hoc tunggal yang konsisten paling akurat di semua kondisi; beberapa uji (Bonferroni, Šidák, Tamhane’s T2, Dunnett’s T3, Games-Howell dll.) tampil lebih baik pada kondisi tertentu. Variasi besar tergantung kondisi (terutama heteroscedastic/unbalanced). Rekomendasi: pilih post-hoc sesuai kondisi data, bukan asumsi tunggal.
        </td>
        <td>
          <ul>
          <li><p>Bagaimana pedoman pemilihan post-hoc dapat diotomasi/diintegrasi dalam pipeline analitik pendidikan (mis. toolkit R/GUI) sehingga peneliti pendidikan memilih uji yang sesuai secara otomatis?</p>
          </li>
          <li><p>Evaluasi perilaku post-hoc pada data non-normal praktis (bukan simulasi normal) dan untuk desain eksperimen pendidikan.</p>
          </li>
          </ul>
        </td>
      </tr>
      <tr>
        <td>
          Working together or alone, near, or far: Social connections and communities of practice in in-person and remote physics laboratories
        </td>
        <td>
          Menelaah pembentukan koneksi sosial dan komunitas praktik di laboratorium fisika tatap muka vs. remote selama pandemi, dan hubungan koneksi sosial dengan physics laboratory self-efficacy.
        </td>
        <td>
         Quasi-experimental, nonequivalent group design; survei kuantitatif pada mahasiswa laboratorium pengantar (N ≈ 697). Analisis: factor analysis (untuk subskala), MANCOVA untuk perbandingan mean, korelasi (termasuk partial correlations).
        </td>
        <td>
          <ul>
          <li><p>Independen: jenis lingkungan lab (in-person vs remote), tingkat koneksi sosial (student-student, student-instructor).</p>
          </li>
          <li><p>Terikat: physics laboratory self-efficacy; ukuran engagement sosial (subfaktor dari survei).</p>
          </li>
          </ul>
        </td>
        <td>
          Survei yang dirancang penulis: item untuk student-student social learning perspectives, student-instructor perspectives, dan self-efficacy. Faktor diekstraksi via factor analysis; data demografis dan konteks lab dikumpulkan.
        </td>
        <td>
          <ul>
          <li><p>Remote students melaporkan level engagement sosial lebih lemah dibanding in-person.</p>
          </li>
          <li><p>Remote students yang terhubung dengan sesama remote students menunjukkan engagement lebih tinggi, tetapi self-efficacy mereka tetap lebih rendah dibandingkan in-person peers. Interaksi instruktur paling berkorelasi dengan pembentukan self-efficacy.</p>
          </li>
          </ul>
        </td>
        <td>
          <ul>
          <li><p>Intervensi konkret yang efektif membangun komunitas praktik remote (design eksperimen/intervensi).</p>
          </li>
          <li><p>Dampak jangka panjang (persistence / karir) dari decreased self-efficacy akibat remote lab.</p>
          </li>
          <li><p>Peran AI/alat generatif untuk mediasi hubungan sosial atau feedback yang membangun self-efficacy (kaitan ke editorial AI).</p>
          </li>
          </ul>
        </td>
      </tr>
      <tr>
        <td>
        How do physics students evaluate artificial intelligence responses on comprehension questions? A study on the perceived scientific accuracy and linguistic quality of ChatGPT
        </td>
        <td>
         Menilai bagaimana mahasiswa fisika menilai kualitas linguistik dan akurasi ilmiah jawaban ChatGPT pada tiga soal mekanika berjenjang. Juga menguji pengaruh self-estimated expertise terhadap penilaian.
        </td>
        <td>
         Survei eksperimental: N = 102 mahasiswa tahun 1–2. Setiap pertanyaan (3 tingkat kesulitan) disajikan 4 jawaban (3 dari ChatGPT, 1 sample solution yang disamarkan sebagai ChatGPT). Responden menilai kualitas linguistik dan akurasi ilmiah, serta self-rated expected performance. Analisis statistik pada perbedaan rating dan pengaruh self-assessed knowledge. Instrumen online (LimeSurvey).
        </td>
        <td>
          <ul>
          <li><p>Independen: tipe jawaban (ChatGPT vs sample solution yang dimasking), tingkat soal (mudah→sulit), self-estimated expertise.</p>
          </li>
          <li><p>Terikat: rating scientific accuracy (skor), rating linguistic quality, self-assessed exam points.</p>
          </li>
          </ul>
        </td>
        <td>
         Kuesioner online (LimeSurvey) termasuk: demografi, sikap terhadap AI, tiga set soal + empat alternatif jawaban, skala Likert untuk penilaian. Lampiran instrumen tersedia dalam Appendix.
        </td>
        <td>
          <ul>
          <li><p>Semua respons ChatGPT yang diuji mengandung kesalahan/imprecision; namun student ratings untuk linguistic quality tidak jauh berbeda antara ChatGPT dan sample solution.</p>
          </li>
          <li><p>Untuk scientific accuracy, sample solution dinilai lebih baik pada soal mudah/menengah; pada soal paling sulit (yang kebanyakan siswa tidak tahu) ChatGPT dinilai setara.</p>
          </li>
          <li><p>Self-assessed knowledge memoderasi kemampuan menilai akurasi. → Risiko illusion of understanding.</p>
          </li>
          </ul>
        </td>
        <td>
          <ul>
          <li><p>Uji intervensi (mis. spot-the-bot training) untuk meningkatkan kemampuan evaluasi kritis siswa terhadap jawaban AI.</p>
          </li>
          <li><p>Pengaruh kegiatan kolaboratif (PBL) yang menggabungkan analisis jawaban AI pada prestasi belajar dan pemikiran kritis.</p>
          </li>
          </ul>
        </td>
      </tr>
      <tr>
        <td>
           The Impact of Problem‑Based Learning on Students’ Achievement in Mechanical Waves in Secondary Schools
        </td>
          <td>
           Menguji pengaruh Problem-Based Learning (PBL) terhadap prestasi siswa pada topik gelombang mekanik di sekolah menengah atas (Southwestern Uganda).
          </td>
          <td>
            Kuasi-eksperimental menggunakan Solomon four-group design (mengatasi sensitization dari pre-test). Sampel: 419 siswa dari 19 sekolah; randomisasi sekolah ke experimental (PBL) vs control (Traditional Instructional Methods, TIM). Durasi intervensi ≈ 3.5 bulan. Analisis: repeated-measures MANCOVA, ANCOVA, post-hoc Bonferroni, Wilks’ lambda untuk multivariate.
          </td>
          <td>
            <ul>
            <li><p>Independen: metode pengajaran (PBL vs TIM).</p>
            </li>
            <li><p>Terikat: skor pada Mechanical Wave Conceptual Survey (MWCS) pre/post.</p>
            </li>
            <li><p>Kontrol/analisis tambahan: gender, usia, subject combination, status/ownership sekolah.</p>
            </li>
            </ul>
          </td>
          <td>
          Mechanical Wave Conceptual Survey (MWCS) (Tongchai et al., 2008) — dipakai sebagai pre/post test; reliabilitas Cronbach’s α ≈ 0.707 pada pilot. Observasi kelas dan pelatihan guru untuk PBL.
          </td>
          <td>
          PBL meningkatkan pencapaian siswa pada gelombang dibanding TIM (efek besar, learning gains tinggi). Hasil signifikan pada analisis post-test; faktor-faktor seperti gender, usia, subject combination tidak menunjukkan pengaruh signifikan.
          </td>
          <td>
            <ul>
            <li><p>Investigasi mengapa PBL efektif (proses kognitif/metakognitif) melalui analisis kualitatif/observasi mikro.</p>
            </li>
            <li><p>Gabungkan PBL dengan kegiatan-kegiatan yang melatih evaluasi kritis terhadap jawaban AI.</p>
            </li>
            </ul>
          </td>
      </tr>
      <tr>
        <td>
          Permutation Tests Are a Useful Alternative Approach for Statistical Hypothesis Testing in Small Sample Sizes
        </td>
        <td>
        Mengevaluasi kinerja permutation tests sebagai alternatif non-parametrik untuk uji tradisional (t-test, MANCOVA, log-rank, dsb.) pada kasus small sample (preclinical animal studies), fokus pada Type-I error, power, dan runtime.
        </td>
        <td>
         Aplikasi permutation test pada empat masalah analisis umum (two-sample, k-sample, contingency table, time-to-event) menggunakan real-world datasets + simulasi power dari distribusi normal, log-normal, eksponensial; perangkat: R (coin package), MCMC approximations bila perlu; juga simulasi power untuk n = 5 dan n = 10 per grup.
        </td>
        <td>
          <ul>
          <li><p>Situasi analisis (two-sample, k-sample, contingency, survival).</p>
          </li>
          <li><p>Outcome terikat: p-value, runtime, simulated statistical power, Type-I error rate.</p>
          </li>
          </ul>
        </td>
        <td>
          R (coin package) untuk permutation tests; R default packages untuk metode klasik; simulasi Monte-Carlo.
        </td>
        <td>
        Permutation tests umumnya menghasilkan p-value dan power yang sebanding dengan uji klasik; unggul terutama ketika asumsi distribusi dilanggar; runtime praktis (cepat) pada kasus yang diuji. Untuk time-to-event, log-rank masih menunjukkan advantage. Rekomendasi hati-hati: permutation tests berguna, terutama untuk small samples dan bila asumsi distribusi tidak dapat dicek.
        </td>
        <td>
          <ul>
          <li><p>Integrasi permutation tests ke pipeline analisis eksperimen pendidikan (ketika sample kecil atau distribusi meragukan).</p>
          </li>
          <li><p>Rekomendasi praktis untuk peneliti pendidikan: kapan harus pakai permutation vs parametric, dan bagaimana melaporkannya.</p>
          </li>
          </ul>
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

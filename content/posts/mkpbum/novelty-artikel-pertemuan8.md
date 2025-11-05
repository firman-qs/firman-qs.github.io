+++
title = "PBuM - Usulan Novelty Artikel Pertemuan 9"
date = "2025-10-26"
description = "Sains & Pembangunan: SDG 3, 4, 6, 7, 12, 13"

[taxonomies]
tags = ["FMIA258001", "kuliah"]
+++

Nama: Firman Qashdus Sabil\
NIM: 250321830676

<style>
.table-container {
  margin: 2rem auto;
  overflow-x: auto;
  width: 90vw;
  margin-left: calc(-44.5vw + 50%);
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  padding: 1rem 0;
}

.table-container table {
  width: 100%;
  min-width: 800px;
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
</style>

<div class="table-container">
  <table>
    <thead>
      <tr>
        <th >Judul & Reviewer</th>
        <th >Metode Penelitian</th>
        <th >Instrumen/ Data Penelitian</th>
        <th >Hasil</th>
        <th >Gap</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>
         Hajikhani & Suominen (2022), Mapping the sustainable development goals (SDGs) in science, technology and innovation: application of machine learning in SDG-oriented artefact detection. 
          <a href="https://firman-qs.github.io/posts/mkpbum/review-artikel-pertemuan8/">Firman Qashdus Sabil</a>
        </td>
        <td>
          Supervised machine learning untuk klasifikasi teks (text classification). Mereka melatih model pada publikasi yang sudah diberi label SDG, lalu mentransfer model itu untuk mengklasifikasikan dokumen paten (EPO) sebagai proksi orientasi teknologi terhadap SDG. Proses mencakup preprocessing (TF-IDF, Word2Vec/Doc2Vec), pemodelan dokumen, pelatihan dan validasi.
        </td>
        <td>
            <ul>
                <li>Dataset publikasi berlabel SDG (dari basis publikasi seperti Scopus/SCOPUS hasil lexicon-based query) untuk training.</li>
                <li>Koleksi paten (European Patent Office) sebagai data target (test).</li>
                <li>Teknik NLP & toolkit ML (implementasi Doc2Vec/Word2Vec, classifier).</li>
            </ul>
        </td>
        <td>
            Model ML bisa mengidentifikasi orientasi SDG pada paten dan memperluas cakupan deteksi dibanding query leksikal sederhana. Mereka menelaah SDG7 (energi bersih) sebagai studi kasus dan menilai cakupan SDG dalam paten EPO 2020.
        </td>
        <td>
            <ul>
                <li>Interpretabilitas model (mengapa dokumen diklasifikasikan ke SDG tertentu) relatif minim.</li>
                <li>Validasi lintas-konteks (mis. transfer ke basis paten negara lain atau dokumen pendidikan) masih terbatas.</li>
                <li>Keterbatasan pada resource bahasa selain Bahasa Inggris (mungkin relevan jika ingin aplikasi pada kurikulum bahasa Arab/Indonesia).</li>
            </ul>
        </td>
      </tr>
      <tr>
        <td>
          Artyukhov et al. (2024), SDG 4, Academic Integrity and Artificial Intelligence: Clash or Win-Win Cooperation? (Sustainability).
          <a href="https://drive.google.com/file/d/15r8oyX0vYN788TT5ER2qLpzkISKYYTVr/view">Fathina Taqiyatus Salsabila</a>
        </td>
        <td>
            Bibliometric analysis (Scopus) + analisis topik/kata kunci menggunakan VOSviewer & SciVal; memetakan literatur pada persimpangan SDG4, kualitas pendidikan, academic integrity, AI. Rentang data 2019–2024 pada analisis mereka.
        </td>
        <td>
            Database Scopus (sekitar 17.458 artikel pada beberapa tahap query), perangkat lunak bibliometrik (VOSviewer, SciVal). Query berlapis untuk menangkap tema: SDG4, quality of education, academic integrity, AI-related keywords.
        </td>
        <td>
            AI memberi peluang (personalisasi pembelajaran, aksesibilitas, analitik), tetapi menimbulkan risiko untuk integritas akademik (plagiarisme, misuse of AI-generated content), bias algoritmik, isu privasi & digital divide. Mereka menekankan potensi sinergi bila ada kebijakan & framework etis.
        </td>
        <td>
            <ul>
            <li>Kurang banyak studi empiris di kelas (intervensi) yang menunjukkan bagaimana AI dapat dipakai praktis untuk meningkatkan kualitas sambil menjaga integritas.</li>
            <li>Kekurangan studi konteks-spesifik (mis. sekolah menengah / konteks negara berkembang) dan instrumen penilaian integritas ketika AI digunakan.</li>
            </ul>
        </td>
      </tr>
      <tr>
        <td>
            Smith et al. (2023), Discovering new pathways toward integration between health and sustainable development goals with natural language processing and network science (Globalization & Health)
            <a href="https://atikanur38.blogspot.com/2025/10/sains-pembangunan-sdg-3-4-6-7-12-13.html">Atika Nur Fadhilah</a>
        </td>
        <td>
            Analisis korpus besar artikel (27.928 abstrak yang relevan SDG3 + lainnya) menggunakan top2vec (topic modeling berbasis embedding) + network science untuk membuat jaringan topik dan menemukan “zipper themes” (tema pengait antar-SDG). Dua langkah: (1) analisis frekuensi integrasi SDG antar tahun; (2) topik & jaringan untuk mengidentifikasi tema interdisipliner.
        </td>
        <td>
            Data bibliografis (dimensions.ai), algoritma top2vec, teknik clustering (HDBSCAN/UMAP), network metrics.
        </td>
        <td>
            Peningkatan integrasi antara SDG3 dan SDG lain sejak 2001; mengidentifikasi 197 topik dan 19 komunitas topik. Beberapa area (mis. hubungan kesehatan–pendidikan, kesehatan–ketahanan pangan) kuat; overlap dengan SDG lingkungan (12–15) relatif kurang dikembangkan → peluang riset. Mereka juga memvalidasi bahwa kombinasi NLP+network science efektif untuk mensintesis literatur besar.
        </td>
        <td>
            <ul>
                <li>Kebutuhan studi yang menghubungkan hasil-topic modelling dengan intervensi praktis di lapangan (mis. pendidikan).</li>
                <li>Under-development pada hubungan kesehatan ↔ environmental SDGs (ruang untuk studi interdisipliner).</li>
            </ul>
        </td>
      </tr>
      <tr>
        <td>
            Varriale et al. (2025), Artificial intelligence in technology networks: A catalyst for achieving the SDGs (Technovation).
            <a href="https://matkulpbmsitisinta.blogspot.com/2025/10/analisis-atau-review-kritis-substansi_26.html">Siti Sinta Maulidia Rohmah</a>
        </td>
        <td>Konstruksi basis data praktik bisnis berkelanjutan (2161 SBP, sustainable business practices) dari literatur; social network analysis (SNA) untuk memetakan hubungan AI dengan teknologi lain (IoT, blockchain, cloud, immersive) terhadap 17 SDGs.</td>
        <td>Database 2161 praktik, SNA tools (network metrics), analisis kualitatif terhadap pola konektivitas teknologi-SDG.</td>
        <td>AI berperan sentral, terutama terkait SDG7, SDG9, SDG12; AI sering diintegrasikan dengan IoT, computing, aplikasi digital. Juga ditemukan gap integrasi AI dengan immersive/proximity tech. Menegaskan pentingnya ekosistem teknologi (AI bukan solusinya sendiri).</td>
        <td>
            <ul>
            <li>Kurang studi aplikasi sederhana yang menguji kolaborasi AI + teknologi low-cost di konteks pendidikan (mis. penggunaan AI+IoT sederhana untuk pembelajaran STEM/SDG).</li>
            <li>Keterbatasan penerapan di konteks sosial/lingkungan dan evaluasi dampak pembelajaran.</li>
            </ul>
        </td>
      </tr>
      <tr>
        <td>
          Said et al. (2024), Mapping of K-12 science and mathematics curriculum against SDGs (Qatar).
          <a href="https://mellyyua.blogspot.com/2025/10/review-artikel-minggu-9-pbm.html">Melly Yuni Anjani</a>
        </td>
        <td>Mapping kurikulum (keyword-based mapping) menggunakan dua pendekatan/daftar kata kunci (Brugmann et al., SDSN) untuk memeriksa apakah standar kurikulum Sains & Matematika K-12 memuat konten SDG. Analisis deskriptif kuantitatif terhadap item standar.</td>
        <td>Dokumen kurikulum (410 standar science, 122 standar mathematics), daftar keyword SDG/ESD, metode mapping berdasarkan kemunculan/konteks kata.</td>
        <td>Hanya 12.7% standar Sains menyentuh aspek SDG; Matematika bahkan hanya 5.7% yang berkaitan dengan SDG. SDG yang paling tercakup: SDG13 (climate), SDG15, SDG3, SDG12, SDG7. Mereka menekankan kebutuhan integrasi konten ESD dan pedagogi yang lebih aplikatif (project-based, real data).</td>
        <td>Kebutuhan studi intervensi kelas yang menguji materi/aktivitas konkret untuk mengintegrasikan SDG ke dalam pelajaran sains/matematika, termasuk penggunaan tools digital sederhana untuk data-driven inquiry. Kebutuhan alat penilaian kompetensi ESD (authentic assessment) dan kesiapan guru (ICT skills).</td>
      </tr>
      <!-- <tr>
        <td>
          Improving reporting standards in quantitative educational intervention research: introducing the CLOSER and CIDER checklists
          <a href="https://drive.google.com/file/d/1e5WSw4f2Msb0c9QN0FB4LRm6wg5rmyW0/view">Alfi Mufidah</a>
        </td>
        <td >Pengembangan checklist (Delphi + adaptasi), CLOSER (34 item) untuk pelaporan studi pendidikan kuantitatif dan CIDER (17 item) untuk deskripsi intervensi.</td>
        <td >Checklists (CLOSER, CIDER), dipakai untuk menilai dan memperbaiki laporan intervensi pendidikan.</td>
        <td >Checklist ini mengisi celah pelaporan di penelitian pendidikan (sering buruk bila memakai CONSORT/TIDieR yang bukan untuk konteks pendidikan). Merekomendasikan penggunaan checklist agar studi mudah direplikasi.</td>
        <td >Belum secara luas diadopsi, penelitian eksperimental di pendidikan (termasuk yang memanfaatkan AI) sebaiknya mengikuti CLOSER/CIDER untuk meningkatkan transparansi.</td>
      </tr> -->
    </tbody>
  </table>
</div>

1. Dari sisi metode: banyak studi map/analitik besar (bibliometrik, NLP, SNA) tetapi sedikit intervensi praktis di kelas yang menguji bagaimana teknologi/AI dapat membantu integrasi SDG ke pembelajaran Sains/Matematika di K-12.
2. Dari sisi contoh/implementasi: kurikulum sering belum memuat konten SDG secara eksplisit, perlu pengembangan materi dan metode pembelajaran berbasis masalah nyata (project/data-based). 
3. Dari sisi AI: bukti konseptual kuat bahwa AI + teknologi lain berdampak besar pada SDG, namun bukti empiris di konteks pendidikan (kelas menengah/menengah atas) masih minim; juga dibutuhkan perhatian pada integritas/etika saat memakai AI.

## Judul usulan
**Pengaruh Pembelajaran Fisika Berbasis Data Lingkungan (proyek sederhana + simulasi) terhadap Pemahaman Konsep Perubahan Iklim dan Sikap Keberlanjutan Siswa SMA, dengan Analisis Respons Open-Ended Menggunakan NLP.**

**The Effect of Environmental Data-Based Physics Learning (simple projects + simulations) on High School Students' Understanding of Climate Change Concepts and Sustainability Attitudes, with Open-Ended Response Analysis Using NLP.**

Penelitian ini:
- Menjawab gap kurikulum (Said et al.): menempatkan SDG13 (climate) ke dalam pembelajaran fisika lewat data nyata dan proyek sederhana.
- Memanfaatkan teknik NLP/analitik ringan (dalam Hajikhani & Smith) untuk menganalisa jawaban terbuka siswa (menghubungkan literatur besar ke studi kelas kecil).

<iframe src="https://drive.google.com/file/d/15MwqIF-xkeZLtzMTxpikZbNtN6_jDi77/preview" width="100%" height="600" allow="autoplay" frameborder="0"></iframe>
<iframe src="https://drive.google.com/file/d/1mm3fCl1u2axMf7V6_h0Korafuq4OzGBI/preview" width="100%" height="600" allow="autoplay" frameborder="0"></iframe>

<!-- ![Scholar Indonesia](../fg61.png)3 -->
<!-- ![Scholar Inggris](../fg62.png) -->
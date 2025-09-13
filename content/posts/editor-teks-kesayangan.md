+++
title = "My GNU Emacs"
date = "2023-11-09"
description = "Emacs is a great operating system lacking only a great text editor"

[taxonomies]
tags = ["emacs", "text editor"]

[extra]
comment = true
+++

Kita sering menggunakan editor teks untuk membantu pekerjaan sehari-hari. Mulai
dari membuat catatan pendek yang tak lama akan dihapus sampai dengan menuliskan
ribuan baris kode. Tentu, ada banyak editor teks yang di luar sana, mulai dari
notepad, VIM, Visual Studio Code, hingga teks editor Truk (IDE) seperti
produk-produk JetBrains.

![https://i.imgflip.com/7ycmgb.jpg](https://i.imgflip.com/7ycmgb.jpg)

Namun, setelah hampir 10 tahun menggunakan banyak teks editor, entah mengapa,
Emacs selalu menjadi tempat saya kembali. Ada (dan tidak ada) alasan dibalik hal
ini. Jujur saya tidak tahu ingin menulis apa tetapi ...

_Ah, lupakan saja_

<!-- ![https://raw.githubusercontent.com/firman-qs/.dotfiles/main/screenshot.png](https://raw.githubusercontent.com/firman-qs/.dotfiles/main/screenshot.png) -->
<!-- _Catatan kuliah saya dalam LaTeX yang diketik dengan bantuan Emacs_ -->

# Emacs Killer Feature #1: Org-mode

Di Emacs terdapat suatu fitur (sekaligus bahasa markup) yaitu Org-mode.
Org mode sangat membantu dalam membuat catatan pendek, ToDo, bahkan
jurnaling. Tentu disini tidak akan ditampilkan
tangkapan layar dari catatan-catatan dan jurnal saya yang indah itu hehe,
tetapi video dari kanal DistroTube mungkin dapat memberikan sedikit pratinjau
jika Anda penasaran tentang Emacs dan Org-mode.

{{ youtube(id="Ea_-TaEGa7Y?si=-3ad6AbTo5MLaG6H") }}

## Mengapa tidak menggunakan obsidian, Notion, atau aplikasi _note taking_ lain?

Well, Notion dan teman satu spesiesnya *terlalu* "Alay" (jika kalian paham
dengan deskripsi blog ini, tentu pernyataan ini kontradiktif dengan
pilihan saya). Ketika menulis, saya hanya ingin melihat ladang teks dan kursor,
tanpa tombol-tombol yang membingungkan, emoji distraktif, serta fitur-fitur yang
mengalihkan saya dari menulis.  Untuk apa saya memiliki laporan cuaca di editor
teks?... "Kamu bisa menambahkan PDF dan spreadsheet di Notion!", Noo... saya
tidak butuh itu. Satu-satunya hal yang saya butuhkan, selain Emacs itu sendiri,
adalah "VIM MOTION" (No VIM-Motion maka 50% harapan saya hilang pada editor teks
tersebut) dan Notion tidak memilikinya! pfffft.

_Dan Blog ini juga sedang ditulis menggunakan Emacs_

Di Emacs terdapat Evil-Mode yang memberikan akses kepada VIM-Motion. Kenapa
harus VIM Motion? terlalu banyak alasan yang harus saya jelaskan, saat ini.
Kondisinya sama seperti para fisikawan yang sudah kelelahan dengan Teori String
dan berharap Akselerator Partikel yang lebih besar muncul untuk membantu mereka.
Namun, selalu ada orang baik (terkadang malah _annoying_) yang telah
menjelaskannya: 

{{ youtube(id="FrMRyXtiJkc") }}

# 2nd Killer: It's a Great OS powered by Lisp (💄+() = (💋))

# Konfigurasi Doom Emacs
Terdapat beberapa modul yang saya aktifkan di dalam Doom Emacs


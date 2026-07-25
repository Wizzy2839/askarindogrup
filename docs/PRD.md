# Product Requirements Document (PRD)
## Website Company Profile Multi-Halaman — Askarindo Group

| | |
|---|---|
| **Versi Dokumen** | 3.1 (menyelaraskan referensi design.md yang sudah tersedia di folder project) |
| **Tanggal** | 14 Juli 2026 |
| **Status** | Draft |
| **Perusahaan** | Askarindo Group |
| **Tipe Website** | Company Profile Profesional, Multi-Halaman (bukan one-pager) |
| **Referensi Flow** | adivagroup.id (struktur navigasi & alur halaman) |
| **Referensi Desain** | `design.md` — tersedia di folder project, jadi rujukan utama sistem desain |

---

## 1. Ringkasan Eksekutif

Askarindo Group adalah perusahaan **System Integrator dan Pengadaan Barang & Jasa** yang melayani sektor Pemerintahan, Pendidikan, BUMN/BUMD, dan Perusahaan Swasta di Indonesia. Model bisnisnya bersifat *solution-based procurement*: klien menyampaikan kebutuhan, Askarindo Group mencarikan produk/vendor yang tepat, sekaligus menawarkan paket solusi terintegrasi — mulai dari konsultasi, pengadaan, instalasi, integrasi sistem, pelatihan, hingga layanan purna jual (**One Stop Solution**).

Dokumen ini merevisi PRD sebelumnya (v2.0, single-page landing page) menjadi **website company profile multi-halaman**, karena volume konten Askarindo Group (6 paket solusi bisnis, 8 kategori katalog produk, 100+ portofolio klien, struktur organisasi, CSR, FAQ) terlalu padat untuk satu halaman scroll dan lebih optimal untuk SEO bila dipecah per topik/halaman.

## 2. Latar Belakang & Problem Statement

*(tidak berubah dari v2.0)* Sebagai vendor/mitra pengadaan yang menyasar instansi pemerintah dan lembaga pendidikan, kredibilitas dan legalitas adalah faktor keputusan utama sebelum klien menandatangani kontrak atau memasukkan Askarindo Group sebagai rekanan di sistem e-purchasing pemerintah. Struktur multi-halaman memungkinkan setiap topik (solusi, produk, portofolio) memiliki ruang dan SEO ranking sendiri — sesuatu yang tidak bisa dicapai optimal oleh single-page.

## 3. Profil Perusahaan

| Aspek | Keterangan |
|---|---|
| Nama Perusahaan | Askarindo Group |
| Tagline | *Integrated Procurement Digital Business & Technology Solutions* |
| Bidang Usaha | System Integrator, Pengadaan Barang & Jasa, Solusi Teknologi Terintegrasi |
| Sektor Layanan | Pemerintahan, Pendidikan (sekolah & universitas), BUMN/BUMD, Perusahaan Swasta |
| Slogan | "Membangun Kepercayaan melalui Solusi dan Pelayanan Terbaik" |
| Domisili | Jl. Rungkut Asri Utara XX RL III K9, Kali Rungkut, Kec. Rungkut, Surabaya, Jawa Timur 60293 |
| Kontak | 0858-5454-2007 · askarindogroup.co.id · askarindointegrasigroup@gmail.com |
| Jejak Proyek | 100+ klien: sekolah, universitas, instansi pemerintah |

## 4. Tujuan & Sasaran

### 4.1 Tujuan Bisnis
- Membangun kredibilitas sebagai mitra pengadaan & system integrator terpercaya
- Menampilkan legalitas dan rekam jejak sebagai *social proof*
- Menjadi kanal informasi resmi yang mudah ditemukan (SEO) per topik solusi/produk

### 4.2 Success Metrics (KPI) — Disesuaikan untuk Multi-Halaman

| Metrik | Target |
|---|---|
| Rata-rata halaman per sesi (pages/session) | > 2.5 |
| Bounce rate halaman Home | < 55% |
| Conversion rate (submit form kontak/konsultasi) | > 3% dari total visitor |
| Skor Google PageSpeed (mobile), tiap halaman | > 85 |
| Jumlah halaman terindeks Google | 100% halaman utama + kategori produk |
| Organic traffic ke halaman Layanan & Produk (bulan ke-3) | +30% dari baseline |

## 5. Target Audience

*(tidak berubah)*

| Persona | Kebutuhan Utama | Halaman Paling Relevan |
|---|---|---|
| Instansi Pemerintah | Legalitas, rekanan resmi e-purchasing | Layanan & Solusi, Portofolio |
| Lembaga Pendidikan | Solusi paket (lab, smart classroom) | Layanan & Solusi (EduSmart), Portofolio |
| Industri Usaha/BUMN | Solusi IT end-to-end, one-stop service | Produk, Layanan & Solusi |

## 6. Referensi Flow: adivagroup.id

Struktur navigasi adivagroup.id yang dijadikan acuan flow:

```
Home → Produk (+ halaman detail per produk) → Blog → Tentang → Kontak
```

Pola yang diadopsi dari referensi tersebut:
- **Header** konsisten di semua halaman: logo kiri, menu horizontal, tanpa CTA button terpisah di kanan (CTA WhatsApp lebih banyak muncul di body/footer)
- **Homepage** berisi ringkasan tiap section utama + tombol "Selengkapnya" yang mengarah ke halaman penuh (bukan detail lengkap langsung di Home)
- **Footer** universal di semua halaman: profil singkat perusahaan, alamat + peta, badge partner/marketplace (mereka menampilkan PaDi, SIPLah, e-Catalog, Shopee, Tokopedia), narahubung, copyright
- **CTA konsultasi via WhatsApp** ditempatkan berulang (floating/inline), bukan hanya form
- Validasi tambahan: adivagroup.id juga menampilkan badge e-purchasing (SIPLah, e-Catalog) di footer — ini menguatkan rekomendasi sebelumnya agar Askarindo Group menampilkan badge Inaproc/SIPLah/Digipay secara serupa

Perbedaan konteks: Askarindo Group punya lini solusi (Business Solutions) yang lebih strategis dibanding Adiva (murni jual produk audio-visual), sehingga struktur navigasi Askarindo perlu satu menu tambahan khusus **"Layanan & Solusi"** yang tidak ada di referensi.

## 7. Ruang Lingkup (Scope)

### 7.1 In-Scope — Website Multi-Halaman

| Halaman | URL Slug | Prioritas |
|---|---|---|
| Home | `/` | Wajib |
| Tentang Kami | `/tentang` | Wajib |
| Layanan & Solusi | `/layanan` | Wajib |
| Produk | `/produk` | Wajib |
| Portofolio | `/portofolio` | Wajib |
| Kontak (+ FAQ) | `/kontak` | Wajib |
| Blog/Berita | `/blog` | Opsional (mengikuti pola adivagroup.id, bisa mulai kosong/di-fase-2-kan) |

### 7.2 Out-of-Scope (Fase Berikutnya)
- Halaman Karir/Lowongan
- Portal pendaftaran Mitra/Reseller ("Join Our Business Network") — jadi halaman `/kemitraan` di fase 2
- Multi-language (i18n)
- E-commerce/checkout untuk produk (cukup katalog + kontak sales, mengikuti kebutuhan B2B/procurement, bukan retail)

## 8. Struktur Halaman (Site Map)

```
Home (/)
├── Tentang Kami (/tentang)
├── Layanan & Solusi (/layanan)
├── Produk (/produk)
├── Portofolio (/portofolio)
├── Blog (/blog)                [opsional]
└── Kontak (/kontak)
```

Header (global, semua halaman): Logo — Home — Tentang — Layanan & Solusi — Produk — Portofolio — Blog* — Kontak — CTA "Konsultasi Gratis"

Footer (global, semua halaman): Profil singkat + tagline — Quick links — Kontak lengkap — Badge partner e-purchasing — Sosial media — Copyright

## 9. Kebutuhan Fungsional per Halaman

### 9.1 Home (`/`)
- **Hero**: headline positioning sebagai *Integrated Procurement & Technology Solutions Partner*, sub-headline pendekatan One Stop Solution, CTA primer "Konsultasi Kebutuhan Anda" + CTA sekunder "Lihat Portofolio"
- **Trust strip**: logo klien pilihan + badge e-purchasing
- **Ringkasan Tentang Kami** (2–3 kalimat) + tombol "Selengkapnya" → `/tentang`
- **Sorotan Layanan & Solusi**: grid ringkas 6 Business Solutions (ikon + judul + 1 baris deskripsi) + tombol "Lihat Semua Solusi" → `/layanan`
- **Sorotan Produk**: 4–6 produk/kategori unggulan + tombol "Lihat Katalog" → `/produk`
- **Sorotan Portofolio**: logo/counter "100+ Klien Terpercaya" + tombol "Lihat Portofolio" → `/portofolio`
- **Our Brand Partners**: strip logo merek yang dijual
- **CTA konsultasi** (form ringkas atau tombol WhatsApp)

### 9.2 Tentang Kami (`/tentang`)
- Introduction lengkap (peran sebagai mitra solusi, bukan sekadar penyedia produk)
- Vision & Mission (5 poin misi)
- Core Value **FIGHT**: Forward Thinking, Integrity, Growth & Innovation, High Performance, Trusted Partnership
- Partnering for Growth (6 poin keunggulan kerja sama)
- Project Journey — timeline 2025 (fokus industri usaha & pendidikan) → 2026 (ekspansi ke pemerintahan)
- Organizational Structure (Director, Commissioner, Manager, Business Development, dst.)
- CSR Commitment (program Pendidikan & Masyarakat)

### 9.3 Layanan & Solusi (`/layanan`)
- **6 Business Solutions**, tiap solusi idealnya punya card/anchor sendiri dengan daftar komponen produk (seperti "EduSmart Solution – Komponen" di company profile):
  1. EduSmart Solution
  2. Government Digital Solution
  3. Digital Display Solution
  4. Digital Office Collaboration Solution
  5. Smart Farming Solution
  6. Integrated Command Center Solution
- **3 Reasons to Choose**: Harga Kompetitif, Mitra Resmi & Terpercaya, One-Stop Service
- **E-Purchasing**: penjelasan + badge platform pengadaan pemerintah (Inaproc Ekatalog, Bela Pengadaan, SIPLah, Mbiz Market, PaDi UMKM, Digipay) — divalidasi oleh pola serupa di footer adivagroup.id

### 9.4 Produk (`/produk`)
- Filter/grid 8 kategori: Teknologi Informasi, Infrastruktur Jaringan, Audio Visual, Peralatan Perkantoran, Elektrikal & Pendukung Gedung, Mebeler & Furnitur, Security System, Peralatan Kantor ATK
- "Explore Our Products" — contoh produk unggulan per kategori (mengikuti pola halaman produk adivagroup.id, namun **tanpa** harga/checkout — arahkan ke CTA "Minta Penawaran" karena sifatnya B2B/procurement)
- Our Brand Partners (merek yang tersedia)
- Opsional fase 2: halaman detail per produk (`/produk/nama-produk`), jika volume SKU besar dan tim ingin SEO per produk — mengikuti pola `/product/slug` di adivagroup.id

### 9.5 Portofolio (`/portofolio`)
- Grid nama/logo klien dikelompokkan per sektor: **Pemerintahan**, **Pendidikan**, **Swasta/BUMN**, dengan counter "100+ Klien Terpercaya"
- Excellence in Every Solution (ringkasan keunggulan layanan)
- ⚠️ **Catatan konten (dibawa dari v2.0, masih berlaku):** company profile sumber baru berisi daftar nama klien, belum studi kasus naratif (masalah–solusi–hasil). Testimoni klien riil juga belum tersedia — gunakan grid logo/nama sebagai *social proof* sementara; jangan mengisi kutipan buatan.

### 9.6 Blog/Berita (`/blog`) — Opsional
- Mengikuti pola adivagroup.id yang punya menu Blog aktif; untuk Askarindo bisa dimulai dengan 3–5 artikel awal (tips pengadaan barang/jasa pemerintah, studi kasus umum, panduan e-purchasing) untuk membangun SEO jangka panjang
- Bisa di-*soft launch* kosong dan diisi bertahap tanpa menghambat peluncuran halaman lain

### 9.7 Kontak (`/kontak`)
- Form konsultasi/RFQ: Nama, Instansi/Perusahaan, Email, No. WhatsApp, Kebutuhan/Pesan
- Info kontak: telepon, email, alamat + embed Google Maps (mengikuti pola adivagroup.id)
- CTA WhatsApp langsung (selain form)
- **FAQ Service** (accordion) — 8 pertanyaan dari company profile (legalitas, garansi, stok, cara penawaran, PPN, klaim, kemitraan)

## 10. Design & Branding Guideline

Section ini mengikuti `design.md` yang sudah ada di folder project sebagai **rujukan utama sistem desain** — bukan lagi ekstraksi mandiri dari compro PDF seperti draft sebelumnya. Ringkasan token yang relevan (untuk detail lengkap grid, ASCII wireframe, dan spesifikasi komponen, lihat langsung `design.md`):

| Peran | Warna | Hex |
|---|---|---|
| Primary (header, hero, judul section) | Deep Teal / Petrol | `#144651` |
| Secondary (aksen, hover state) | Steel Teal | `#266B8A` |
| Background utama | Putih | `#FFFFFF` |
| Neutral/divider | Abu-abu muda | `#E3E3E3` |
| Teks body | Charcoal/hitam pekat | `#1A1A1A` |

Palet ini konsisten dengan warna yang diekstrak dari compro PDF — tidak ada konflik antar dokumen.

**Tipografi (sesuai `design.md`): Montserrat (semua peran — display, body, nav, button).** Ini berbeda dari font yang terdeteksi tertanam di compro PDF (Codec Pro & Poppins) — wajar, karena compro PDF adalah materi cetak/marketing, sedangkan `design.md` adalah sistem desain khusus web yang jadi acuan development. **Tim dev mengikuti `design.md`, bukan font compro PDF.**

**Cakupan lain di `design.md`** yang jadi acuan tapi tidak diduplikasi di PRD ini (untuk menghindari dua sumber kebenaran yang bisa tidak sinkron): layout grid, wireframe ASCII per halaman, spesifikasi komponen (button, card, form), dan catatan aksesibilitas WCAG. Tim desain/dev merujuk langsung ke `design.md` untuk nilai-nilai teknis tersebut.

**Karakter desain:** korporat, bersih, minim ornamen — konsisten di semua 7 halaman melalui shared header/footer component dan spacing/grid yang seragam (detail grid mengikuti `design.md`).

## 11. Kebutuhan Non-Fungsional

| Kategori | Requirement |
|---|---|
| Navigasi | Header & footer konsisten di seluruh halaman (shared component); breadcrumb di halaman Produk & Portofolio untuk UX dan SEO |
| Performa | Load time < 3 detik (4G); PageSpeed > 85 tiap halaman |
| Responsif | Mobile (< 480px), tablet (768px), desktop (1024px+) |
| Browser Support | Chrome, Firefox, Safari, Edge — 2 versi terakhir |
| Aksesibilitas | WCAG 2.1 level AA |
| Keamanan | HTTPS/SSL wajib; proteksi spam pada form |
| SEO | Meta title/description **unik per halaman**, structured data (Organization/LocalBusiness schema), XML sitemap mencakup seluruh halaman + kategori produk |

## 12. Kebutuhan Konten & Aset

*(mengikuti v2.0, ditambah kebutuhan spesifik multi-halaman)*
- Foto proyek/instalasi nyata per solusi (untuk halaman Layanan)
- Logo klien (verifikasi izin penggunaan) untuk halaman Portofolio
- Logo partner e-purchasing untuk halaman Layanan & Solusi
- Konten awal 3–5 artikel Blog (jika diaktifkan)
- Katalog produk terstruktur per kategori (bukan hanya daftar teks, idealkan foto produk)
- Testimoni klien riil (task terpisah, lihat catatan 9.5)

## 13. Rekomendasi Teknis

| Komponen | Opsi Rekomendasi |
|---|---|
| Platform | **Opsi A:** WordPress + page builder (mirip pendekatan adivagroup.id — cocok bila tim internal ingin mengelola konten/blog/produk sendiri tanpa developer). **Opsi B:** Next.js + headless CMS (Sanity/Contentful) — performa & skalabilitas lebih baik, cocok bila ada tim dev yang menjaga jangka panjang |
| Hosting | Vercel/Netlify (Opsi B) atau hosting managed WordPress (Opsi A) |
| Form Handling | Integrasi WhatsApp API + email |
| Analytics | Google Analytics 4, Google Search Console (submit sitemap multi-halaman) |
| Font Delivery | Google Fonts (Montserrat) via CDN |

## 14. Timeline & Milestone (Contoh, Disesuaikan untuk 7 Halaman)

| Fase | Durasi | Deliverable |
|---|---|---|
| Content Gathering (semua halaman) | Minggu 1–2 | Copy & aset final per halaman |
| Sitemap & Wireframe | Minggu 2–3 | Struktur navigasi + wireframe 7 halaman |
| UI Design | Minggu 3–4 | Mockup Figma mengikuti `design.md` |
| Development | Minggu 4–7 | 7 halaman fungsional di staging |
| QA & Revisi | Minggu 8 | Cross-browser, mobile, & SEO check tiap halaman |
| Launch | Minggu 9 | Go-live seluruh halaman di askarindogroup.co.id |

## 15. Asumsi & Batasan

- `design.md` sudah tersedia di folder project dan menjadi rujukan utama untuk Bagian 10 serta seluruh proses UI Design
- Blog (`/blog`) boleh diluncurkan kosong/bertahap tanpa menghambat halaman lain
- Konten katalog produk (foto, spesifikasi) disiapkan bertahap oleh tim Askarindo Group
- Domain askarindogroup.co.id sudah tersedia dan siap dipakai

## 16. Risiko & Mitigasi

| Risiko | Mitigasi |
|---|---|
| Tim dev/desain keliru memakai font compro PDF (Codec Pro/Poppins) alih-alih `design.md` (Montserrat) | Tegaskan `design.md` sebagai satu-satunya rujukan tipografi web di brief tim development |
| Konten 7 halaman lebih banyak dari sebelumnya, berpotensi molor | Prioritaskan halaman wajib (Home, Tentang, Layanan, Produk, Portofolio, Kontak) dan luncurkan Blog belakangan |
| Izin logo klien belum jelas | Konfirmasi per klien atau gunakan nama teks tanpa logo sebagai fallback |

## 17. Stakeholder & Approval

| Peran | Nama | Tanggung Jawab |
|---|---|---|
| Director | Rafly Dhani | Approval requirement & arah bisnis |
| Commissioner | Karina Adiba | Approval strategis |
| Business Development | Fadilah Ryan | Konten layanan & portofolio |
| Designer (UI/UX) | _diisi_ | Wireframe & visual design (mengacu `design.md`) |
| Developer | _diisi_ | Implementasi teknis |

## 18. Lampiran

- Sumber referensi konten: *Company Profile & Portofolio Askarindo Group 2026*
- Sumber referensi flow: [adivagroup.id](https://adivagroup.id)
- Referensi desain: `design.md` (tersedia di folder project)

---

*Dokumen ini adalah working draft dan dapat diperbarui seiring proses diskusi dan development.*
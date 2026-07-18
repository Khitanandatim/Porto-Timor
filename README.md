# Khitananda Timor — Portfolio

Portfolio pribadi bergaya **Neo-Brutalism**: bold typography, thick borders,
hard drop-shadows, warna aksen cerah, dan animasi halus di seluruh halaman.
Dibangun dengan React + Vite + Tailwind CSS v4 + Framer Motion + Lucide Icons.

## Menjalankan secara lokal

```bash
npm install
npm run dev
```

Buka `http://localhost:5173`.

## Build untuk production

```bash
npm run build
```

Hasil build ada di folder `dist/`, siap di-deploy ke Vercel, Netlify, GitHub
Pages, atau hosting statis lainnya.

## Struktur folder

```
src/
├── components/       # Semua section & komponen UI
│   ├── Header.jsx         # Navbar sticky pill-shaped + scroll-spy
│   ├── Hero.jsx           # Hero + typing effect + parallax
│   ├── About.jsx          # Tentang saya
│   ├── InfoCards.jsx      # Info bento grid (nama, email, dll)
│   ├── Skills.jsx         # Skill cards dengan progress bar animasi
│   ├── Timeline.jsx       # Journey / pengalaman
│   ├── Projects.jsx       # Featured projects
│   ├── Stats.jsx          # Counter statistik animasi
│   ├── Contact.jsx        # Form kontak + info card
│   ├── Footer.jsx
│   ├── DecorativeShapes.jsx  # Blob & shape dekoratif
│   ├── MagneticButton.jsx    # Tombol dengan efek magnetic hover
│   ├── Reveal.jsx             # Wrapper fade-up on scroll
│   ├── ScrollProgress.jsx     # Progress bar scroll di atas halaman
│   └── BrandIcons.jsx         # Icon GitHub/LinkedIn/X custom (SVG)
├── data/
│   ├── content.js     # SEMUA teks & data portfolio (edit di sini)
│   └── colorMap.js    # Mapping warna ke className Tailwind
├── App.jsx
├── main.jsx
└── index.css          # Theme Tailwind v4 (@theme) + custom keyframes
```

## Cara mengedit konten

Hampir semua teks (nama, deskripsi, skill, project, dsb) ada di satu file:

```
src/data/content.js
```

Edit array/object di sana — semua komponen otomatis ikut berubah. Tidak perlu
menyentuh file komponen kecuali ingin mengubah layout/animasi.

### Mengganti foto profil

Saat ini bagian Hero memakai placeholder berbentuk lingkaran berisi huruf awal
nama. Untuk mengganti dengan foto asli:

1. Taruh file gambar di `src/assets/` (buat folder ini jika belum ada).
2. Di `src/components/Hero.jsx`, import gambar tersebut lalu ganti div
   placeholder (`<div className="relative w-40 h-40 ...">`) dengan `<img />`.

### Menambah/menghapus project

Edit array `projects` di `src/data/content.js`. Field `color` menerima salah
satu dari: `yellow`, `blue`, `green`, `orange`, `pink`, `purple`.

## Teknologi

- **React 19** + **Vite** — dev server cepat & HMR
- **Tailwind CSS v4** — styling lewat `@theme` di `src/index.css`
- **Framer Motion** — semua animasi (fade-up, parallax, magnetic button, counter)
- **Lucide React** — icon set

## Catatan

- Warna, spacing, dan font custom didefinisikan di `src/index.css` lewat
  `@theme`. Ubah nilai di sana untuk reskin cepat.
- Form kontak saat ini hanya simulasi (menampilkan "Message Sent!" secara
  lokal). Untuk mengirim email sungguhan, hubungkan ke layanan seperti
  Formspree, EmailJS, atau backend API sendiri di `handleSubmit` dalam
  `src/components/Contact.jsx`.

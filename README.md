# Askarindo Group - Company Profile Website

Website company profile multi-page untuk Askarindo Group, System Integrator dan Pengadaan Barang & Jasa.

## Tech Stack

- **HTML5** - Markup
- **Tailwind CSS v3** - Styling dengan custom design system
- **Alpine.js** - Interactivity (carousel, form, counter)
- **Vite** - Dev server & build tool

## Design System

Berdasarkan `design.md`:

- **Primary Color**: Deep Teal `#144651`
- **Secondary Color**: Steel Teal `#266B8A`
- **Typography**: Montserrat (all roles — display, body, nav, button)
- **Layout**: Max-width 1240px, desktop-first approach

## Structure

Website ini menggunakan struktur **multi-page** (bukan single-page):

- `index.html` - Homepage (hero carousel + intro)
- `about.html` - Tentang Kami (profil, visi/misi, core values)
- `services.html` - Layanan/Produk (business solutions + katalog)
- `portfolio.html` - Portofolio (klien + testimoni)
- `contact.html` - Kontak (form + WhatsApp integration)

## Quick Start

### Development

```bash
# Install dependencies
npm install

# Run dev server (http://localhost:3000)
npm run dev
```

### Build Production

```bash
# Build untuk production
npm run build

# Preview build
npm preview
```

Output build ada di folder `dist/`.

## Struktur Project

```
compro/
├── index.html              # Landing page utama
├── src/
│   ├── css/
│   │   └── main.css        # Tailwind + custom components
│   └── js/
│       └── main.js         # Alpine.js components
├── public/
│   └── images/             # Placeholder images
├── tailwind.config.js      # Design tokens
├── vite.config.js
└── package.json
```

## Pages Overview

### 1. Homepage (`index.html`)
- Hero carousel auto-slide (3 slides, 5 detik)
- Trust strip (logo klien placeholder)
- Quick intro 3 alasan memilih

### 2. Tentang Kami (`about.html`)
- Profil perusahaan + stats
- Visi & Misi
- Core Values FIGHT (5 nilai)

### 3. Layanan (`services.html`)
- 6 Business Solutions (EduSmart, Government Digital, Digital Display, Office Collaboration, Smart Farming, Command Center)
- 3 Reasons to Choose
- 8 Kategori katalog produk

### 4. Portofolio (`portfolio.html`)
- Stats (100+ klien, 500+ proyek, 95% kepuasan)
- Grid klien sektor Pemerintahan (4 klien)
- Grid klien sektor Pendidikan (8+ klien)
- 2 Testimoni placeholder

### 5. Kontak (`contact.html`)
- Info kontak (alamat, telepon, email, jam operasional)
- Form konsultasi (submit ke WhatsApp)
- Google Maps embed
- Badge platform e-purchasing

## Alpine.js Components

- `carousel` - Hero slider auto-play di homepage (5 detik interval)
- `contactForm` - Submit ke WhatsApp dengan pre-filled message (contact.html)
- `counter` - Animasi count-up scroll-triggered (portfolio stats)

## Navigation

Setiap page punya header/footer identik dengan active state indicator:
- Active page: underline putih + font semibold
- Navigasi antar page via `<a href="page.html">`

## Content TODO

Konten saat ini pakai placeholder. Perlu diganti:

- [ ] Foto proyek/instalasi nyata (hero carousel, about page)
- [ ] Logo klien riil + izin penggunaan (portfolio grid - saat ini text placeholder)
- [ ] Testimoni riil dari klien (portfolio page - saat ini dummy content)
- [ ] Logo partner e-purchasing resmi (badge di footer & contact page)
- [ ] Katalog PDF produk lengkap (link download di services page)
- [ ] Google Maps coordinates tepat (saat ini general Surabaya)

## Deployment

### Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

Atau connect GitHub repo di Vercel dashboard untuk auto-deploy.

### Manual (Static Hosting)

```bash
npm run build
```

Upload folder `dist/` ke hosting (Netlify, Cloudflare Pages, dll).

## Custom Domain

Update DNS di registrar domain `askarindogroup.co.id`:

```
A Record: @ → [IP hosting]
CNAME: www → [hosting domain]
```

## Phase 2 (Future)

- [ ] Responsive mobile layout (< 640px breakpoint)
- [ ] Hamburger menu untuk mobile
- [ ] Testimoni carousel
- [ ] Animasi scroll reveal (fade + translateY)
- [ ] Google Analytics integration
- [ ] SEO optimization (sitemap.xml, robots.txt)

## Browser Support

- Chrome/Edge (2 versi terakhir)
- Firefox (2 versi terakhir)
- Safari (2 versi terakhir)

Target PageSpeed: > 85 (mobile & desktop)

## Contact

**Askarindo Group**
- Website: askarindogroup.co.id
- WhatsApp: 0858-5454-2007
- Email: askarindointegrasigroup@gmail.com
- Alamat: Jl. Rungkut Asri Utara XX RL III K9, Kali Rungkut, Kec. Rungkut, Surabaya, Jawa Timur 60293

---

Build sesuai PRD v2.0 & design.md (Desktop-first, vanilla HTML stack)

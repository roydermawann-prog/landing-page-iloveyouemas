# 💛 I Love Emas Premium

**Platform Premium untuk Jual Beli Emas, Perak, Platinum & Logam Mulia**

Website company profile + conversion landing page yang dirancang dengan kualitas premium, modern, dan meyakinkan. Dibangun dengan React.js, Tailwind CSS, dan Framer Motion untuk memberikan pengalaman pengguna yang luar biasa di semua perangkat.

---

## ✨ Fitur Utama

### 🎨 **Desain Premium**
- Color palette **Luxury Finance**: Gold (#dbb86a), Charcoal (#0a0a0c), Soft Beige (#faf8f3)
- Typography elegan: **Playfair Display** (headings) + **Inter** (body)
- Animasi halus dengan **Framer Motion**
- White space lega, shadow premium, border subtle

### 📱 **Fully Responsive**
- Mobile-first design
- Breakpoint: `sm` (640px), `md` (768px), `lg` (1024px), `xl` (1280px)
- Navbar dengan mobile menu overlay solid
- Grid adaptif: 1 kolom (mobile) → 2 (tablet) → 3-4 (desktop)
- Touch targets minimal 44px untuk akses mudah

### 🎯 **Conversion-Focused**
- **Hero section** dengan 3 CTA buttons (Cek Harga, Kalkulator, WhatsApp)
- **Trust badges**: Non-destructive, tanpa surat, harga tinggi, transparan
- **Pricing dashboard** modern dengan tab Beli/Jual dan filter kategori
- **Kalkulator Estimasi Emas** real-time (berat, karat, kategori)
- **Floating WhatsApp button** untuk instant contact

### 🏗️ **Komponen Lengkap**
1. **Navbar** – Sticky, mobile menu, brand logo
2. **Hero** – Headline kuat, trust badges, CTA, floating price card
3. **About** – Brand storytelling + statistik animasi
4. **Advantages** – 6 keunggulan utama (icon cards)
5. **Services** – Filterable material grid (emas, perak, platinum, dll)
6. **Pricing** – Tabel harga harian dengan trend & update time
7. **Calculator** – Estimasi harga emas real-time
8. **Transaction Process** – 4 langkah visual dengan connector line
9. **Testimonials** – 4 testimoni dengan rating & cabang
10. **Branches** – 4 cabang + info kontak + map placeholder
11. **FAQ** – Accordion 6 pertanyaan umum
12. **Footer** – Premium footer dark dengan navigasi & contact

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|------------|
| **Framework** | React 19 |
| **Build Tool** | Vite 7 |
| **Styling** | Tailwind CSS 3 |
| **Animasi** | Framer Motion 11 |
| **Icons** | Lucide React |
| **Fonts** | Google Fonts (Inter, Playfair Display, Montserrat) |
| **Images** | Unsplash (placeholder) |

---

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- npm atau yarn

### Installation

```bash
# Clone repository
git clone git@github.com:roydermawann-prog/landing-page-iloveyouemas.git
cd i-love-emas-premium

# Install dependencies
npm install

# Start development server
npm run dev
# Open http://localhost:5174
```

### Build for Production

```bash
npm run build
# Output ke folder dist/
```

### Preview Production Build

```bash
npm run preview
```

---

## 📁 Project Structure

```
i-love-emas-premium/
├── public/
│   └── favicon.svg          # Logo gold Au
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Advantages.jsx
│   │   ├── Services.jsx
│   │   ├── Pricing.jsx
│   │   ├── Calculator.jsx
│   │   ├── TransactionProcess.jsx
│   │   ├── Testimonials.jsx
│   │   ├── Branches.jsx
│   │   ├── FAQ.jsx
│   │   ├── Footer.jsx
│   │   └── ErrorBoundary.jsx
│   ├── data/
│   │   └── brandData.js     # Dummy data (info sekolah, programs, etc)
│   ├── App.jsx
│   ├── main.jsx
│   ├── index.css
│   └── setupGlobals.js      # Global guards for experimental APIs
├── .gitignore
├── index.html               # SEO optimized
├── tailwind.config.js       # Custom gold/charcoal/beige palette
├── postcss.config.js
├── vite.config.js           # React dedupe + optimize deps
├── package.json
└── README.md                # You are here
```

---

## 🎨 Design System

### Colors

```css
Gold Palette:
  gold-500: #e3cc8b
  gold-600: #dbb86a (primary)
  gold-700: #c6a656
  gold-800: #b28c42

Charcoal Palette:
  charcoal-900: #181617 (dark surface)
  charcoal-800: #27262a (dark border)
  charcoal-700: #3f3a36 (text dark)
  charcoal-950: #0a0a0c (bg dark)

Beige Palette:
  beige-50: #faf8f3 (light bg)
  beige-100: #f5f0e3
  beige-200: #ebe4d1
```

### Typography

- **Headings**: Playfair Display (serif, elegant)
- **Body**: Inter (sans-serif, modern)
- **Display**: Montserrat (accent, small caps)

### Shadows

- `shadow-gold`: 0 4px 20px rgba(214, 184, 106, 0.3)
- `shadow-gold-lg`: 0 8px 40px rgba(214, 184, 106, 0.4)
- `shadow-dark`: 0 4px 20px rgba(24, 22, 23, 0.3)

---

## 📊 Data & Customization

Semua data bisnis disimpan di `src/data/brandData.js`. Anda dapat mengganti:

- Informasi brand (nama, tagline, deskripsi)
- Keunggulan, layanan, material
- Data harga (buy/sell)
- Testimoni, cabang, FAQ
- Kontak & social media

---

## 🌐 Deployment

### Vercel / Netlify

1. Push ke GitHub (repo ini)
2. Import repository di Vercel/Netlify
3. Build settings:
   - Build command: `npm run build`
   - Output directory: `dist/`
4. Deploy

### Shared Hosting (cPanel, FTP)

1. Run `npm run build`
2. Upload seluruh isi folder `dist/` ke `public_html/`
3. Pastikan `.htaccess` (jika Apache) mengarah ke `index.html`

### Docker (opsional)

```dockerfile
FROM node:18-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

---

## 🔐 Security & Best Practices

- ✅ **No sensitive data** – semua dummy, ganti dengan real API
- ✅ **SSH deployment** – tidak ada token di code
- ✅ **Error Boundary** – mencegah blank screen
- ✅ **Global guards** – untuk API eksperimental (`documentPictureInPicture`)
- ✅ **No console errors** –严格代码审查
- ✅ **Optimized assets** – lazy loading images, minified CSS/JS

---

## 🧪 Testing Checklist

- [ ] **Mobile** (320px – 425px) – Stack layout, touch targets, font sizes
- [ ] **Tablet Portrait** (768px) – 2 kolom grid, spacing
- [ ] **Tablet Landscape** (1024px) – 3-4 kolom, full dashboard
- [ ] **Desktop** (1280px+) – Full layout, hover effects
- [ ] **Console** – No errors, only warnings (if any from extensions)
- [ ] **Performance** – Lighthouse score >90 (Performance, Accessibility, Best Practices, SEO)

---

## 📝 Customization Guide

### Ganti Warna Brand

Edit `tailwind.config.js` → `theme.extend.colors`

```js
colors: {
  primary: {
    light: '#...',
    DEFAULT: '#...',
    dark: '#...'
  },
  // ...
}
```

### Ganti Font

Edit `tailwind.config.js` → `theme.extend.fontFamily` dan `src/index.css`

### Ganti Data Bisnis

Edit `src/data/brandData.js` – semua informasi di situ.

### Integrasi API Harga Real-time

Ubah `src/components/Calculator.jsx` dan `Pricing.jsx` untuk fetch dari backend API.

---

## 🤝 Contributing

1. Fork repository
2. Buat branch feature (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add some AmazingFeature'`)
4. Push ke branch (`git push origin feature/AmazingFeature`)
5. Buka Pull Request

---

## 📄 License

Open source untuk tujuan komersial/non‑komersial.  
© 2024 I Love Emas. All rights reserved.

---

## 📞 Contact

For business inquiries: **info@iloveemas.com**  
WhatsApp: **0812-3456-7890**  
Website: [https://iloveemas.com](https://iloveemas.com) *(placeholder)*

---

**Dibuat dengan ❤️ menggunakan React, Tailwind CSS, dan Framer Motion**  
*Premium Landing Page for Modern Gold Business*

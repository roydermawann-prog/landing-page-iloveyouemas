// I Love Emas - Premium Data
export const brandInfo = {
  name: "I Love Emas",
  tagline: "Jual Emas Lebih Aman, Lebih Transparan, Harga Lebih Tinggi",
  description: "I Love Emas adalah platform premium untuk pembelian dan penjualan emas, perak, platinum, dan logam mulia lainnya. Dengan teknologi non-destruktif, proses transparan, dan pelayanan profesional, kami memberikan nilai terbaik untukaset berharga Anda.",
  mission: "Mewujudkan ekosistem transaksi logam mulia yang aman, adil, dan terpercaya untuk seluruh Indonesia.",
  vision: "Menjadi platform pembelian emas dan logam mulia terdepan di Asia Tenggara dengan standar internasional.",
  values: [
    "Transparansi penuh dalam setiap transaksi",
    "Teknologi non-destruktif untuk menjaga kemasan",
    "Harga kompetitif dan real-time",
    "Pelayanan profesional denganApproach personal",
    "Proses cepat - langsung bayar di lokasi",
  ],
  stats: [
    { number: "50.000+", label: "Transaksi Sukses" },
    { number: "4.9/5", label: "Rating Customer" },
    { number: "20+", label: "Cabang di Indonesia" },
    { number: "15+", label: "Tahun Pengalaman" },
  ],
  trustBadges: [
    { icon: "ShieldCheck", text: "Proses Non-Destruktif" },
    { icon: "FileCheck", text: "Tanpa Surat Diterima" },
    { icon: "TrendingUp", text: "Harga Tertinggi" },
    { icon: "Eye", text: "Transaksi Transparan" },
  ],
};

export const advantages = [
  {
    id: 1,
    title: "Harga Tertinggi",
    description: "Kami menawarkan harga emas tertinggi di pasar dengan reference harga internasional yang real-time.",
    icon: "TrendingUp",
  },
  {
    id: 2,
    title: "Teknologi Non-Destruktif",
    description: "Pengecekan kadar emas dengan teknologi XRF analyzer tanpa merusak atau mencederai perhiasan.",
    icon: "Scan",
  },
  {
    id: 3,
    title: "Terima Semua Kondisi",
    description: "Menerima perhiasan dalam segala kondisi: kotor, tuyul, rusak, atau even tanpa sertifikat.",
    icon: "Package",
  },
  {
    id: 4,
    title: "Transparan & Profesional",
    description: "Setiap langkah transaksi didokumentasi, harga dijelaskan, dan proses bisa dilihat langsung.",
    icon: "Eye",
  },
  {
    id: 5,
    title: "Proses Super Cepat",
    description: "Dari konsultasi hingga pembayaran hanyabutuh 15-30 menit. Tidak perlu menunggu lama.",
    icon: "Zap",
  },
  {
    id: 6,
    title: "Fasilitas Nyaman & Aman",
    description: "Cabang kami dilengkapi ruang privat, keamanan 24/7, dan staf pelayanan ramah profesional.",
    icon: "Building2",
  },
];

export const materials = [
  {
    id: 1,
    name: "Emas 24K",
    symbol: "Au",
    purity: "99.99%",
    description: "Emas murni tertinggi untuk investasi jangka panjang dan khazanah keluarga.",
    icon: "Award",
    color: "bg-yellow-100 text-yellow-700",
    category: "batangan",
  },
  {
    id: 2,
    name: "Emas 22K",
    symbol: "Au",
    purity: "91.6%",
    description: "Emas standar perhiasan dan batangan investasi dengan kualitas tinggi.",
    icon: "Gem",
    color: "bg-yellow-100 text-yellow-700",
    category: "perhiasan",
  },
  {
    id: 3,
    name: "Emas 18K",
    symbol: "Au",
    purity: "75%",
    description: "Emas untuk perhiasan sehari-hari dengan kombinasi kekuatan dan keindahan.",
    icon: "Crown",
    color: "bg-yellow-100 text-yellow-700",
    category: "perhiasan",
  },
  {
    id: 4,
    name: "Perak 999",
    symbol: "Ag",
    purity: "99.9%",
    description: "Perak murni untuk investasi dan koleksi logam mulia.",
    icon: "CircleDollarSign",
    color: "bg-gray-100 text-gray-700",
    category: "batangan",
  },
  {
    id: 5,
    name: "Platinum 950",
    symbol: "Pt",
    purity: "95%",
    description: "Platinum untuk perhiasan dan investasi premium dengan ketahanan tinggi.",
    icon: "Diamond",
    color: "bg-blue-100 text-blue-700",
    category: "perhiasan",
  },
  {
    id: 6,
    name: "Palladium",
    symbol: "Pd",
    purity: "99.95%",
    description: "Logam mulia langka untuk industri dan investasi.",
    icon: "Star",
    color: "bg-purple-100 text-purple-700",
    category: "industrial",
  },
  {
    id: 7,
    name: "Rhodium",
    symbol: "Rh",
    purity: "99.95%",
    description: "Logam paling langka & berharga, sering untuk pelapis platinum.",
    icon: "Sparkles",
    color: "bg-pink-100 text-pink-700",
    category: "industrial",
  },
  {
    id: 8,
    name: "Diamond & Stone",
    symbol: "D",
    description: "Berbagai jenis batu permata dan berlian dengan sertifikat asli.",
    icon: "Gem",
    color: "bg-blue-50 text-blue-600",
    category: "gemstones",
  },
];

export const priceData = {
  lastUpdate: "2024-03-10 14:30:00 WIB",
  buy: [
    { type: "Emas 24K", category: "batangan", price: 950000, unit: "gram", change: "+0.5%", trend: "up" },
    { type: "Emas 22K", category: "perhiasan", price: 870000, unit: "gram", change: "+0.3%", trend: "up" },
    { type: "Emas 18K", category: "perhiasan", price: 720000, unit: "gram", change: "-0.1%", trend: "down" },
    { type: "Perak 999", category: "batangan", price: 12000, unit: "gram", change: "+0.2%", trend: "up" },
    { type: "Platinum 950", category: "perhiasan", price: 4500000, unit: "gram", change: "+1.2%", trend: "up" },
    { type: "Palladium", category: "industrial", price: 3200000, unit: "gram", change: "-0.4%", trend: "down" },
    { type: "Rhodium", category: "industrial", price: 25000000, unit: "gram", change: "+2.1%", trend: "up" },
  ],
  sell: [
    { type: "Emas 24K", category: "batangan", price: 920000, unit: "gram", change: "+0.4%", trend: "up" },
    { type: "Emas 22K", category: "perhiasan", price: 840000, unit: "gram", change: "+0.2%", trend: "up" },
    { type: "Emas 18K", category: "perhiasan", price: 690000, unit: "gram", change: "-0.2%", trend: "down" },
    { type: "Perak 999", category: "batangan", price: 11000, unit: "gram", change: "+0.1%", trend: "up" },
  ],
};

export const branches = [
  {
    id: 1,
    name: "Cabang Jakarta Pusat",
    address: "Jl. Sudirman No. 45, Jakarta Pusat 10220",
    phone: "(021) 5123-4567",
    whatsapp: "6281234567890",
    hours: "Senin - Sabtu: 09:00 - 18:00",
    manager: "Bapak Ahmad Wijaya",
  },
  {
    id: 2,
    name: "Cabang Jakarta Selatan",
    address: "Jl. Gatot Subroto No. 120, Jakarta Selatan 12190",
    phone: "(021) 7654-3210",
    whatsapp: "6281234567891",
    hours: "Senin - Sabtu: 09:00 - 18:00",
    manager: "Ibu Siti Aminah",
  },
  {
    id: 3,
    name: "Cabang Bandung",
    address: "Jl. Asia Afrika No. 88, Bandung 40111",
    phone: "(022) 4234-5678",
    whatsapp: "6281234567892",
    hours: "Senin - Sabtu: 09:00 - 18:00",
    manager: "Bapak Budi Santoso",
  },
  {
    id: 4,
    name: "Cabang Surabaya",
    address: "Jl. Tunjungan No. 55, Surabaya 60241",
    phone: "(031) 5345-6789",
    whatsapp: "6281234567893",
    hours: "Senin - Sabtu: 09:00 - 18:00",
    manager: "Ibu Rina Fitriani",
  },
];

export const transactionSteps = [
  {
    step: 1,
    title: "Konsultasi & Kunjungan",
    description: "Hubungi kami via WhatsApp atau datang langsung ke cabang. Kami akan mendampingi Anda dari awal.",
    icon: "MessageCircle",
  },
  {
    step: 2,
    title: "Pengecekan Kadar & Berat",
    description: "Teknologi XRF analyzer non-destruktif untuk cek kadar tanpa merusak. Timbangan digital presisi untuk berat.",
    icon: "Scan",
  },
  {
    step: 3,
    title: "Penawaran Transparan",
    description: "Harga real-time sesuai grade logam. Kami tunjukkan perhitungan detail dan bandingkan dengan pasar.",
    icon: "ClipboardList",
  },
  {
    step: 4,
    title: "Deal & Pembayaran",
    description: "Setuju? Pembayaran langsung transfer atau tunai. Proses dalam 15-30 menit. No hassle.",
    icon: "Wallet",
  },
];

export const testimonials = [
  {
    id: 1,
    name: "Bapak Anton",
    role: "Pengusaha, Jakarta",
    content: "Saya pernah ke tempat lain tapi harga jauh lebih rendah. Di I Love Emas, prosesnya transparan banget. Pokoknya fair dan cepat. Recommended!",
    rating: 5,
    branch: "Jakarta Pusat",
    avatar: "AH",
  },
  {
    id: 2,
    name: "Ibu Rina",
    role: "Ibu Rumah Tangga, Bandung",
    content: "Perhiasan tua yang saya pegang dari warisan keluarga akhirnya bisa dijual dengan harga yang sesuai dan proses aman. Terima kasih I Love Emas.",
    rating: 5,
    branch: "Bandung",
    avatar: "RS",
  },
  {
    id: 3,
    name: "Bapak Dwi",
    role: "Karyawan, Surabaya",
    content: "Service nya top! Staf ramah, penjelasan detail, dan pembayaran langsung. Emas saya yang condition-nya kurang bagus tetap diterima dengan harga baik.",
    rating: 5,
    branch: "Surabaya",
    avatar: "DW",
  },
  {
    id: 4,
    name: "Ibu Maya",
    role: "Profesional, Jakarta Selatan",
    content: "Saya suka karena tidak perlu disuruh pas foto atau tanda tangan. Cukup bawa perhiasan, langsung dicek dan dihitung. Very convenient!",
    rating: 5,
    branch: "Jakarta Selatan",
    avatar: "MS",
  },
];

export const faqs = [
  {
    question: "Apakah bisa menjual emas tanpa surat/sertifikat?",
    answer: "Bisa! Kami menerima semua perhiasan dalam berbagai kondisi, even tanpa tanda土地 atau surat. Proses pengecekan kami menggunakan teknologi XRF yang akurat sehingga tidak memerlukan dokumen pendukung.",
  },
  {
    question: "Apakah perhiasan yang kotor/ rusak masih diterima?",
    answer: "Tentu. Kami menerima perhiasan dalam semua kondisi: kotor, tuyul, sudah setengah LE, atau bahkan sudah tidak berfungsi. Teknologi kami bisa mendeteksi kadar asli meski kondisi fisik kurang baik.",
  },
  {
    question: "Bagaimana jika harga emas naik/turun setelah transaksi?",
    answer: "Harga yang kami tawarkan sudah final saat transaksi. Setelah pembayaran, Anda tidak perlu khawatir dengan fluktuasi harga karena transaksi sudah tuntas dan tidak ada</end>",
  },
  {
    question: "Bagaimana cara penghitungan harga dilakukan?",
    answer: "Kami menghitung berdasarkan: (1) Berat gram aktual setelah dikurangi gram perak/bahan lain, (2) Kadar emas murni (Courtney) dari hasil XRF, (3) Harga emas internasional real-time, (4) Biaya operasional minimal. Semua ditampilkan secara detail.",
  },
  {
    question: "Proses transaksi berapa lama?",
    answer: "Proses dapat diselesaikan dalam 15-30 menit setelah Anda datang. Pengecekan 5-10 menit, negosiasi 5 menit, dan pembayaran langsung. Tanpa </>harusk Special processes.",
  },
  {
    question: "Apakah aman dan terpercaya?",
    answer: "100% aman. Kami berizin resmi, punya kantor fisik di 20+ lokasi, keamanan 24/7, dan staf bersertifikat. Ribuan customer sudah puas. Reviews dan testimoni tersedia di website dan media sosial.",
  },
];

export const contactInfo = {
  email: "info@iloveemas.com",
  phone: "021-51234567",
  whatsapp: "6281234567890",
  address: "Jl. Sudirman No. 45, Jakarta Pusat 10220",
  operatingHours: "Senin - Sabtu: 09:00 - 18:00",
};

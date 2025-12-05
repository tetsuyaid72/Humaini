import { Product, Testimonial, FAQItem } from './types';
import { Truck, Award, PenTool, Gift, MessageCircle, ShieldCheck } from 'lucide-react';
import React from 'react';

export const PRODUCTS: Product[] = [
  {
    id: 1,
    name: "Cincin Permata Aurora Silver",
    category: 'PERMATA',
    priceRange: "Mulai dari Rp 450.000",
    image: "/images/1.jpg",
    features: ["Batu Zircon Premium", "Perak 925 Sterling", "Anti Karat"]
  },
  {
    id: 2,
    name: "Cincin Emas Royal Classic",
    category: 'EMAS',
    priceRange: "Mulai dari Rp 1.500.000",
    image: "/images/2.jpg",
    features: ["Emas 10K / 17K", "Desain Timeless", "Sertifikat Asli"]
  },
  {
    id: 3,
    name: "Cincin Perak Minimalis Flow",
    category: 'PERAK',
    priceRange: "Mulai dari Rp 250.000",
    image: "/images/3.jpg",
    features: ["Simpel & Elegan", "Nyaman Dipakai Harian", "Custom Ukuran"]
  },
  {
    id: 4,
    name: "Cincin Tunangan Diamond Solitaire",
    category: 'PERAK',
    priceRange: "Mulai dari Rp 850.000",
    image: "/images/4.jpg",
    features: ["Moissanite / Berlian", "Emas Putih / Perak", "Box Beludru"]
  },
  {
    id: 5,
    name: "Cincin Couple Eternal Love",
    category: 'PERAK',
    priceRange: "Mulai dari Rp 550.000 (Sepasang)",
    image: "/images/5.jpg",
    features: ["Grafir Nama Gratis", "Desain Adjustable", "Anti Alergi"]
  },
  {
    id: 6,
    name: "Cincin Emas Murni 24K Heritage",
    category: 'EMAS',
    priceRange: "Mulai dari Rp 3.000.000",
    image: "/images/6.jpg",
    features: ["Investasi Cerdas", "Desain Ukiran Klasik", "Sertifikat Resmi"]
  },
  {
    id: 7,
    name: "Blue Sapphire Elegance",
    category: 'PERMATA',
    priceRange: "Mulai dari Rp 600.000",
    image: "/images/7.jpg",
    features: ["Batu Safir Lab-Grown", "Aksen Zircon", "Mewah & Anggun"]
  },
  {
    id: 8,
    name: "Cincin Pria Titanium Black",
    category: 'PERAK',
    priceRange: "Mulai dari Rp 200.000",
    image: "/images/8.jpg",
    features: ["Maskulin", "Tahan Gores", "Warna Tahan Lama"]
  }
];

export const FEATURES = [
  {
    icon: <Award className="w-8 h-8 text-gold-400" />,
    title: "Material Berkualitas",
    desc: "Menggunakan perak dan emas pilihan dengan finishing rapi."
  },
  {
    icon: <PenTool className="w-8 h-8 text-gold-400" />,
    title: "Desain Elegan & Modern",
    desc: "Model timeless yang cocok untuk milenial hingga koleksi keluarga."
  },
  {
    icon: <ShieldCheck className="w-8 h-8 text-gold-400" />,
    title: "Custom Ukuran",
    desc: "Bisa request ukuran jari agar pas dan nyaman dipakai."
  },
  {
    icon: <Gift className="w-8 h-8 text-gold-400" />,
    title: "Packing Eksklusif",
    desc: "Setiap cincin dikirim dengan box mewah, siap untuk hadiah."
  },
  {
    icon: <MessageCircle className="w-8 h-8 text-gold-400" />,
    title: "Layanan Ramah",
    desc: "Konsultasi mudah via WhatsApp sebelum membeli."
  },
  {
    icon: <Truck className="w-8 h-8 text-gold-400" />,
    title: "Pengiriman Aman",
    desc: "Melayani pengiriman berasuransi ke seluruh Indonesia."
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: "Sari W.",
    city: "Jakarta",
    rating: 5,
    comment: "Cincinnya cantik banget, real-nya lebih bagus dari foto. Packing aman dan box-nya mewah!"
  },
  {
    id: 2,
    name: "Budi Santoso",
    city: "Surabaya",
    rating: 5,
    comment: "Pelayanan ramah, dibantu pilih ukuran yang pas untuk tunangan saya. Recommended seller!"
  },
  {
    id: 3,
    name: "Amanda P.",
    city: "Bandung",
    rating: 4,
    comment: "Suka sekali dengan detail ukirannya. Pengiriman juga cepat sampai. Terima kasih Humaini."
  },
  {
    id: 4,
    name: "Rina & Dimas",
    city: "Yogyakarta",
    rating: 5,
    comment: "Pesan cincin couple perak, hasilnya memuaskan. Pas di jari dan nyaman dipakai sehari-hari."
  }
];

export const FAQS: FAQItem[] = [
  {
    id: 1,
    question: "Apakah ukuran cincin bisa disesuaikan?",
    answer: "Ya, kami menyediakan layanan custom ukuran. Anda bisa mengukur lingkar jari Anda sesuai panduan kami dan kami akan menyesuaikannya."
  },
  {
    id: 2,
    question: "Bahan cincin terbuat dari apa saja?",
    answer: "Kami menggunakan bahan Perak 925 Sterling, Emas (10K, 17K, 24K), dan berbagai jenis batu permata berkualitas seperti Zircon dan Moissanite."
  },
  {
    id: 3,
    question: "Apakah ada garansi pengiriman?",
    answer: "Tentu. Kami memberikan garansi keamanan pengiriman. Jika barang diterima dalam keadaan rusak, kami akan menggantinya (syarat: video unboxing)."
  },
  {
    id: 4,
    question: "Bagaimana cara mengetahui ukuran jari saya?",
    answer: "Anda bisa melilitkan kertas di jari, tandai titik temu, lalu ukur panjang kertas tersebut dengan penggaris. Konsultasikan hasilnya kepada admin kami di WhatsApp."
  },
  {
    id: 5,
    question: "Apakah bisa COD?",
    answer: "Untuk pembelian melalui marketplace (Shopee/Tokopedia) kami mendukung fitur COD sesuai kebijakan platform tersebut."
  },
  {
    id: 6,
    question: "Pengiriman dari mana?",
    answer: "Pengiriman dilakukan dari workshop kami di [Kota Anda]. Estimasi pengiriman tergantung lokasi tujuan, biasanya 2-4 hari kerja untuk reguler."
  }
];
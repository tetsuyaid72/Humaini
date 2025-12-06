import { Product, Testimonial, FAQItem } from './types';
import { Truck, Award, PenTool, Gift, MessageCircle, ShieldCheck } from 'lucide-react';
import React from 'react';

export const PRODUCTS: Product[] = [
  {
    id: 1,
    name: "Cincin Perak Zambrud dan Berlian",
    category: 'PERAK',
    priceRange: "Mulai dari Rp 8.500.000",
    image: "/images/zamrud.jpg",
    features: ["Mata utama zamrud 2.40 crat -+", "keliling berlian eropa 30 pcs", "ring silver Anti Karat"]
  },
  {
    id: 2,
    name: "Cincin Perak Silver Paladium",
    category: 'PERAK',
    priceRange: "Mulai dari Rp 10.500.000",
    image: "/images/silverpaladium.jpg",
    features: ["Natural Diamond (center) 16pcs 0.83 crt", "Natural diamond (side)1.04 crt", "Ring size 22, Anti Karat, Sertifikat Asli"]
  },
  {
    id: 3,
    name: "Cincin Perak paladium berlian eropa top Quality",
    category: 'PERAK',
    priceRange: "Mulai dari Rp 5.650.000",
    image: "/images/berlianerofa.jpg",
    features: ["Berat berlian 1.37 crt", "Berlian 50 Biji", "Free Sertifikat"]
  },
  {
    id: 4,
    name: "Cincin  Cowonk Ring Perak",
    category: 'PERAK',
    priceRange: "Mulai dari Rp 11.500.000",
    image: "/images/ringperak.jpg",
    features: ["Center Natural diamond 1 pcs berat 0.50 crt (banjar)", "Side 154 pcs 1.09 crt -+", "Size 18/19"]
  },
  {
    id: 5,
    name: "Cincin Cowok Ring Perak",
    category: 'PERAK',
    priceRange: "Mulai dari Rp 5.500.000",
    image: "/images/ringperak1.jpg",
    features: ["Center Natural blue sapphire berat 1.50 crt ", "Side natural diamond 26 pcs 0.40 crt", "Free Sertifikat, Free Box"]
  },
  {
    id: 6,
    name: "Cincin Silver Paladium Perak",
    category: 'PERAK',
    priceRange: "Mulai dari Rp 12.500.000",
    image: "/images/ringperak2.jpg",
    features: ["Natural Diamond (center)1.14 crt (eropa)", "Natural diamond (side)92 pcs (eropa)", "Ring size 22"]
  },
  {
    id: 7,
    name: "Cincin Perak Paladium",
    category: 'PERAK',
    priceRange: "Mulai dari Rp 12.500.000",
    image: "/images/mewah.jpg",
    features: ["Center Natural yellow sapphire (berat 2.40 crt", "Side narural diamond 144 pcs Berat 1.57 crt", "Mewah & Anggun"]
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
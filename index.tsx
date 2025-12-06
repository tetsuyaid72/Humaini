import React, { useState, useEffect, useRef } from 'react';
import { createRoot } from 'react-dom/client';
import {
  Menu, X, MessageCircle, Star, ChevronDown, ChevronUp,
  MapPin, ShoppingBag, ArrowRight, Gem, Circle, Crown,
  ArrowUp, ChevronLeft, ChevronRight, Instagram, Facebook, Twitter
} from 'lucide-react';
import { PRODUCTS, FEATURES, TESTIMONIALS, FAQS } from './constants';
import { Product, Category, FAQItem } from './types';

// --- Utility Components ---

// Smooth Fade In Section
const FadeInSection: React.FC<{ children: React.ReactNode; className?: string; delay?: number }> = ({ children, className = "", delay = 0 }) => {
  const [isVisible, setVisible] = useState(false);
  const domRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => setVisible(entry.isIntersecting));
    }, { threshold: 0.1 }); // Trigger when 10% visible

    const current = domRef.current;
    if (current) observer.observe(current);
    return () => {
      if (current) observer.unobserve(current);
    };
  }, []);

  return (
    <div
      ref={domRef}
      className={`transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

// Scroll To Top Button
const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-24 md:bottom-8 right-6 md:right-8 z-40 bg-white border border-gray-200 text-emerald-900 p-3 rounded-full shadow-lg hover:bg-gray-50 transition-all duration-300 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
        }`}
      aria-label="Scroll to top"
    >
      <ArrowUp size={20} />
    </button>
  );
};

// Floating WhatsApp Button
const FloatingWhatsApp = ({ link }: { link: string }) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 md:bottom-8 md:right-24 z-50 bg-[#25D366] text-white px-4 py-3 rounded-full shadow-lg hover:bg-[#20bd5a] transition-all duration-300 flex items-center gap-2 transform hover:scale-105 group"
      aria-label="Chat WhatsApp"
    >
      <MessageCircle size={24} className="group-hover:animate-bounce" />
      <span className="font-semibold hidden md:inline">Chat Admin</span>
    </a>
  );
};

// --- Main App Component ---

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState<Category>('ALL');
  const [openFaqId, setOpenFaqId] = useState<number | null>(null);
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  // Filter products + sembunyikan yang hidden
  const filteredProducts = PRODUCTS.filter(
    (p) => !p.hidden && (activeCategory === 'ALL' || p.category === activeCategory)
  );


  // Toggle FAQ
  const toggleFaq = (id: number) => {
    setOpenFaqId(openFaqId === id ? null : id);
  };

  // Testimonial Controls
  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const prevTestimonial = () => {
    setActiveTestimonial((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  // Auto-play Testimonial (pauses on hover logic could be added, keeping simple for now)
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 6000); // Increased duration slightly for better readability
    return () => clearInterval(interval);
  }, []);

  // WhatsApp Link Helper
  // Updated with real number
  const waNumber = "6287814031427";
  const baseWaLink = `https://wa.me/${waNumber}`;

  // Image Error Handler
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.src = "https://placehold.co/500x500/f3f4f6/111827?text=No+Image";
  };

  return (
    <div className="font-sans text-dark-900 bg-white selection:bg-emerald-900 selection:text-white">

      {/* --- Navbar --- */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm transition-all duration-300">
        <div className="container mx-auto px-4 md:px-8 h-20 flex items-center justify-between">
          {/* Logo */}
          <div className="flex flex-col group cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <a href="#" className="font-serif text-2xl font-bold text-emerald-900 tracking-tight group-hover:text-emerald-700 transition-colors">
              Humaini Jewellery
            </a>
            <span className="text-[10px] uppercase tracking-widest text-gold-500 font-semibold"></span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-gray-600">
            {['Beranda', 'Koleksi', 'Keunggulan', 'Cara Order', 'Testimoni', 'FAQ', 'Kontak'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                className="hover:text-emerald-900 relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-emerald-900 after:left-0 after:-bottom-1 after:transition-all hover:after:w-full"
              >
                {item}
              </a>
            ))}
          </div>

          {/* CTA & Mobile Toggle */}
          <div className="flex items-center space-x-4">
            <a
              href={`${baseWaLink}?text=Halo%20Humaini%20Jewellery,%20saya%20ingin%20konsultasi.`}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:flex items-center gap-2 bg-emerald-900 text-white px-5 py-2.5 rounded-full text-xs font-semibold hover:bg-emerald-800 transition-transform hover:scale-105 shadow-lg shadow-emerald-900/20"
            >
              <MessageCircle size={16} />
              Chat WhatsApp
            </a>
            <button
              className="md:hidden text-gray-700 hover:text-emerald-900 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden bg-white border-t border-gray-100 absolute w-full shadow-lg transition-all duration-300 ease-in-out overflow-hidden ${isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className="flex flex-col p-6 space-y-4">
            {['Beranda', 'Koleksi', 'Keunggulan', 'Cara Order', 'Testimoni', 'FAQ', 'Kontak'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                className="text-lg font-medium text-gray-800 hover:text-emerald-900"
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </a>
            ))}
            <a
              href={`${baseWaLink}?text=Halo%20Humaini%20Jewellery,%20saya%20ingin%20konsultasi.`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-emerald-900 text-white px-4 py-3 rounded-lg font-semibold active:scale-95 transition-transform"
            >
              <MessageCircle size={18} /> Chat Sekarang
            </a>
          </div>
        </div>
      </nav>

      {/* --- Hero Section --- */}
      <section id="beranda" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/hero.jpg"
            alt="Luxury Rings Background"
            className="w-full h-full object-cover animate-[scale_20s_ease-in-out_infinite_alternate]"
            style={{ animationName: 'kenburns' }}
          />
          <div className="absolute inset-0 bg-emerald-900/80 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-emerald-900/20 to-transparent" />
        </div>

        <div className="container mx-auto px-4 md:px-8 relative z-10 text-center text-white">
          <FadeInSection>
            <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 drop-shadow-lg">
              Elegan & Abadi <br />
              <span className="text-gold-400 italic font-light">untuk Momen Berharga</span>
            </h1>
            <p className="font-sans text-lg md:text-xl text-gray-100 mb-10 max-w-2xl mx-auto leading-relaxed font-light drop-shadow-md">
              Humaini Jewellery menghadirkan koleksi cincin permata, perak, dan emas dengan desain modern dan timeless. Simbol cinta yang sempurna untuk lamaran, hadiah, atau koleksi pribadi.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="#koleksi"
                className="px-8 py-4 bg-gold-500 hover:bg-gold-400 text-white font-semibold rounded-full transition-all hover:scale-105 shadow-xl shadow-gold-500/20 w-full sm:w-auto"
              >
                Lihat Koleksi Cincin
              </a>
              <a
                href={`${baseWaLink}?text=Halo%20Humaini%20Jewellery,%20saya%20ingin%20konsultasi.`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 border border-white/30 hover:bg-white/10 backdrop-blur-sm text-white font-medium rounded-full transition-all flex items-center gap-2 w-full sm:w-auto justify-center"
              >
                <MessageCircle size={20} />
                Konsultasi via WhatsApp
              </a>
            </div>
            <div className="mt-12 flex justify-center gap-6 text-xs md:text-sm font-light tracking-wide text-gray-300 opacity-80">
              <span className="flex items-center gap-1"><Gem size={14} className="text-gold-400" /> Custom Ukuran</span>
              <span>•</span>
              <span className="flex items-center gap-1"><Crown size={14} className="text-gold-400" /> Garansi Keaslian</span>
              <span>•</span>
              <span className="flex items-center gap-1"><MapPin size={14} className="text-gold-400" /> Kirim se-Indonesia</span>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* --- Kategori Koleksi --- */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <FadeInSection className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-emerald-900 mb-4">Pilih Kategori Favorit</h2>
            <p className="text-gray-600">Temukan cincin yang sesuai dengan karakter dan kebutuhan Anda.</p>
          </FadeInSection>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Kartu 1 */}
            <FadeInSection delay={100}>
              <div
                className="group bg-gray-50 hover:bg-white border border-transparent hover:border-gray-100 p-8 rounded-2xl text-center transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 cursor-pointer relative overflow-hidden h-full flex flex-col items-center justify-between"
                onClick={() => { setActiveCategory('PERMATA'); document.getElementById('produk')?.scrollIntoView({ behavior: 'smooth' }); }}
              >
                <div>
                  <div className="w-16 h-16 mx-auto bg-emerald-100 text-emerald-800 rounded-full flex items-center justify-center mb-6 group-hover:bg-emerald-900 group-hover:text-gold-400 transition-colors">
                    <Gem size={32} />
                  </div>
                  <h3 className="font-serif text-2xl font-semibold mb-3 text-gray-900">Cincin Permata</h3>
                  <p className="text-gray-600 mb-6 text-sm leading-relaxed">Kilau mewah Zircon dan Moissanite untuk momen spesial yang tak terlupakan.</p>
                </div>
                <button className="text-emerald-800 font-semibold text-sm group-hover:text-gold-500 flex items-center justify-center gap-1 mx-auto transition-colors">
                  Lihat Detail <ArrowRight size={16} />
                </button>
              </div>
            </FadeInSection>

            {/* Kartu 2 */}
            <FadeInSection delay={200}>
              <div
                className="group bg-gray-50 hover:bg-white border border-transparent hover:border-gray-100 p-8 rounded-2xl text-center transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 cursor-pointer relative overflow-hidden h-full flex flex-col items-center justify-between"
                onClick={() => { setActiveCategory('PERAK'); document.getElementById('produk')?.scrollIntoView({ behavior: 'smooth' }); }}
              >
                <div>
                  <div className="w-16 h-16 mx-auto bg-gray-200 text-gray-700 rounded-full flex items-center justify-center mb-6 group-hover:bg-gray-800 group-hover:text-white transition-colors">
                    <Circle size={32} />
                  </div>
                  <h3 className="font-serif text-2xl font-semibold mb-3 text-gray-900">Cincin Perak</h3>
                  <p className="text-gray-600 mb-6 text-sm leading-relaxed">Elegan dan minimalis. Pilihan sempurna untuk daily wear atau hadiah sahabat.</p>
                </div>
                <button className="text-emerald-800 font-semibold text-sm group-hover:text-gold-500 flex items-center justify-center gap-1 mx-auto transition-colors">
                  Lihat Detail <ArrowRight size={16} />
                </button>
              </div>
            </FadeInSection>

            {/* Kartu 3 */}
            <FadeInSection delay={300}>
              <div
                className="group bg-gray-50 hover:bg-white border border-transparent hover:border-gray-100 p-8 rounded-2xl text-center transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 cursor-pointer relative overflow-hidden h-full flex flex-col items-center justify-between"
                onClick={() => { setActiveCategory('EMAS'); document.getElementById('produk')?.scrollIntoView({ behavior: 'smooth' }); }}
              >
                <div>
                  <div className="w-16 h-16 mx-auto bg-yellow-100 text-yellow-700 rounded-full flex items-center justify-center mb-6 group-hover:bg-gold-500 group-hover:text-white transition-colors">
                    <Crown size={32} />
                  </div>
                  <h3 className="font-serif text-2xl font-semibold mb-3 text-gray-900">Cincin Emas</h3>
                  <p className="text-gray-600 mb-6 text-sm leading-relaxed">Kecantikan klasik emas murni. Simbol ikatan abadi untuk pertunangan.</p>
                </div>
                <button className="text-emerald-800 font-semibold text-sm group-hover:text-gold-500 flex items-center justify-center gap-1 mx-auto transition-colors">
                  Lihat Detail <ArrowRight size={16} />
                </button>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* --- Koleksi Produk --- */}
      <section id="produk" className="py-20 bg-gray-50 scroll-mt-20">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-emerald-900 mb-4">Koleksi Cincin Unggulan</h2>
            <p className="text-gray-600 mb-8">Pilihan terbaik yang paling diminati pelanggan kami.</p>

            {/* Filter Tabs */}
            <div className="flex flex-wrap justify-center gap-3">
              {['ALL', 'PERMATA', 'PERAK', 'EMAS'].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat as Category)}
                  className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${activeCategory === cat
                      ? 'bg-emerald-900 text-white shadow-lg scale-105'
                      : 'bg-white text-gray-600 border border-gray-200 hover:bg-gray-100 hover:text-emerald-900'
                    }`}
                >
                  {cat === 'ALL' ? 'Semua Koleksi' : `Cincin ${cat.charAt(0) + cat.slice(1).toLowerCase()}`}
                </button>
              ))}
            </div>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {filteredProducts.map((product) => (
              <FadeInSection key={product.id} className="h-full">
                <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group h-full flex flex-col border border-gray-100">
                  <div className="relative overflow-hidden aspect-square bg-gray-100">
                    <img
                      src={product.image}
                      alt={product.name}
                      onError={handleImageError}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute top-3 right-3 bg-white/95 backdrop-blur text-emerald-900 text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm">
                      {product.category}
                    </div>
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="font-serif text-lg font-bold text-gray-900 mb-2 leading-tight">{product.name}</h3>
                    <p className="text-gold-500 font-semibold mb-4 text-sm">{product.priceRange}</p>

                    <ul className="text-xs text-gray-500 mb-6 space-y-1 flex-grow">
                      {product.features.map((feat, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full flex-shrink-0"></span> {feat}
                        </li>
                      ))}
                    </ul>

                    <a
                      href={`${baseWaLink}?text=Halo%20Humaini%20Jewellery,%20saya%20tertarik%20dengan%20produk:%20${encodeURIComponent(product.name)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full block text-center py-3 border border-emerald-900 text-emerald-900 font-medium rounded-lg hover:bg-emerald-900 hover:text-white transition-colors text-sm"
                    >
                      Pesan Sekarang
                    </a>
                  </div>
                </div>
              </FadeInSection>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-20 bg-white rounded-xl shadow-sm border border-gray-100">
              <p className="text-gray-500">Maaf, belum ada produk untuk kategori ini.</p>
            </div>
          )}
        </div>
      </section>

      {/* --- Keunggulan --- */}
      <section id="keunggulan" className="py-20 bg-emerald-900 text-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none"
          style={{ backgroundImage: 'radial-gradient(circle, #D4AF37 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>

        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <FadeInSection className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">Kenapa Memilih Humaini?</h2>
            <div className="w-20 h-1 bg-gold-400 mx-auto rounded-full"></div>
          </FadeInSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {FEATURES.map((feature, idx) => (
              <FadeInSection key={idx} delay={idx * 100}>
                <div className="bg-emerald-800/50 backdrop-blur-sm p-6 rounded-xl border border-emerald-700/50 hover:border-gold-400/50 transition-colors flex items-start gap-4 h-full">
                  <div className="flex-shrink-0 bg-emerald-900 p-3 rounded-lg border border-emerald-700 shadow-md">
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="font-serif text-xl font-semibold text-gold-50 mb-2">{feature.title}</h4>
                    <p className="text-emerald-100/80 text-sm leading-relaxed">{feature.desc}</p>
                  </div>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* --- Cara Order --- */}
      <section id="cara-order" className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-emerald-900 mb-4">Cara Order Mudah</h2>
            <p className="text-gray-600">Dapatkan cincin impian Anda dalam 4 langkah sederhana.</p>
          </div>

          <div className="relative">
            {/* Connecting Line (Desktop) */}
            <div className="hidden md:block absolute top-8 left-0 w-full h-0.5 bg-gray-100 -z-10"></div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { step: "01", title: "Pilih Model", desc: "Jelajahi katalog cincin permata, perak, atau emas kami." },
                { step: "02", title: "Chat Admin", desc: "Konsultasi ukuran & stok via WhatsApp dengan ramah." },
                { step: "03", title: "Pembayaran", desc: "Transaksi aman via Transfer, Shopee, atau Tokopedia." },
                { step: "04", title: "Pengiriman", desc: "Pesanan dikemas mewah dan dikirim ke alamat Anda." }
              ].map((item, idx) => (
                <FadeInSection key={idx} delay={idx * 150} className="bg-white p-6 rounded-xl text-center md:bg-transparent relative">
                  <div className="w-16 h-16 mx-auto bg-white border-4 border-emerald-50 text-emerald-900 font-serif font-bold text-2xl rounded-full flex items-center justify-center mb-6 shadow-sm relative z-10 ring-4 ring-white">
                    {item.step}
                  </div>
                  <h3 className="font-bold text-lg mb-2 text-gray-900">{item.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed px-4">{item.desc}</p>
                </FadeInSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- Testimoni --- */}
      <section id="testimoni" className="py-20 bg-gray-50 overflow-hidden">
        <div className="container mx-auto px-4 md:px-8 max-w-4xl text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-emerald-900 mb-12">Kata Mereka</h2>

          <div className="relative bg-white p-8 md:p-16 rounded-2xl shadow-xl shadow-emerald-900/5 transition-all">
            {/* Quote Icon Background */}
            <div className="absolute top-8 left-8 text-gray-100 select-none pointer-events-none">
              <svg width="60" height="60" viewBox="0 0 24 24" fill="currentColor"><path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V11C14.017 11.5523 13.5693 12 13.017 12H12.017V5H22.017V15C22.017 18.3137 19.3307 21 16.017 21H14.017ZM5.0166 21L5.0166 18C5.0166 16.8954 5.91203 16 7.0166 16H10.0166C10.5689 16 11.0166 15.5523 11.0166 15V9C11.0166 8.44772 10.5689 8 10.0166 8H6.0166C5.46432 8 5.0166 8.44772 5.0166 9V11C5.0166 11.5523 4.56889 12 4.0166 12H3.0166V5H13.0166V15C13.0166 18.3137 10.3303 21 7.0166 21H5.0166Z" /></svg>
            </div>

            <div className="text-gold-400 mb-6 flex justify-center gap-1 relative z-10">
              {[...Array(TESTIMONIALS[activeTestimonial].rating)].map((_, i) => <Star key={i} size={20} fill="#D4AF37" />)}
            </div>

            <div className="min-h-[120px] flex items-center justify-center relative z-10">
              <p className="font-serif text-xl md:text-2xl text-gray-700 italic leading-relaxed animate-fade-in transition-opacity duration-500">
                "{TESTIMONIALS[activeTestimonial].comment}"
              </p>
            </div>

            <div className="flex flex-col items-center mt-8 relative z-10">
              <div className="font-bold text-emerald-900 text-lg">{TESTIMONIALS[activeTestimonial].name}</div>
              <div className="text-sm text-gray-500">{TESTIMONIALS[activeTestimonial].city}</div>
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={prevTestimonial}
              className="absolute left-2 md:left-8 top-1/2 -translate-y-1/2 p-2 rounded-full bg-gray-50 hover:bg-gray-100 text-gray-600 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={nextTestimonial}
              className="absolute right-2 md:right-8 top-1/2 -translate-y-1/2 p-2 rounded-full bg-gray-50 hover:bg-gray-100 text-gray-600 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight size={24} />
            </button>

            {/* Dots */}
            <div className="flex justify-center gap-2 mt-8">
              {TESTIMONIALS.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveTestimonial(idx)}
                  className={`h-2 rounded-full transition-all duration-300 ${idx === activeTestimonial ? 'w-8 bg-emerald-900' : 'w-2 bg-gray-300 hover:bg-gray-400'}`}
                  aria-label={`Go to testimonial ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- FAQ --- */}
      <section id="faq" className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-8 max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-emerald-900 mb-4">Pertanyaan Umum</h2>
            <p className="text-gray-600">Jawaban untuk hal-hal yang sering ditanyakan.</p>
          </div>

          <div className="space-y-4">
            {FAQS.map((faq) => (
              <div key={faq.id} className="border border-gray-200 rounded-lg overflow-hidden transition-all duration-300 hover:border-emerald-900/30">
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full flex items-center justify-between p-5 text-left bg-gray-50 hover:bg-gray-100 transition-colors"
                  aria-expanded={openFaqId === faq.id}
                >
                  <span className="font-semibold text-gray-800 pr-4">{faq.question}</span>
                  <div className={`transition-transform duration-300 ${openFaqId === faq.id ? 'rotate-180' : ''}`}>
                    <ChevronDown size={20} className="text-gray-500" />
                  </div>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out bg-white ${openFaqId === faq.id ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
                    }`}
                >
                  <div className="p-5 text-gray-600 text-sm leading-relaxed border-t border-gray-100">
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- Contact & CTA --- */}
      <section id="kontak" className="py-24 bg-emerald-900 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold-500/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>

        <div className="container mx-auto px-4 md:px-8 text-center relative z-10">
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-white mb-6">Miliki Cincin Impian Anda</h2>
          <p className="text-emerald-100 text-lg mb-12 max-w-2xl mx-auto font-light">
            Siap menemukan cincin yang tepat untuk momen spesial? Hubungi kami langsung atau belanja aman melalui marketplace favorit Anda.
          </p>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {/* WhatsApp */}
            <a
              href={`${baseWaLink}?text=Halo%20Humaini%20Jewellery,%20saya%20ingin%20konsultasi.`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white hover:bg-emerald-50 p-8 rounded-2xl shadow-lg transition-transform hover:-translate-y-2 flex flex-col items-center group cursor-pointer"
            >
              <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mb-4 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                <MessageCircle size={28} />
              </div>
              <h3 className="font-bold text-xl text-gray-900 mb-1">Chat WhatsApp</h3>
              <p className="text-gray-500 text-sm mb-4">Konsultasi model & ukuran</p>
              <span className="text-emerald-700 font-semibold text-sm flex items-center gap-1 group-hover:text-emerald-900">Chat Sekarang <ArrowRight size={14} /></span>
            </a>

            {/* Shopee */}
            <a
              href="https://id.shp.ee/33t4rmD"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white hover:bg-orange-50 p-8 rounded-2xl shadow-lg transition-transform hover:-translate-y-2 flex flex-col items-center group cursor-pointer"
            >
              <div className="w-14 h-14 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center mb-4 group-hover:bg-orange-500 group-hover:text-white transition-colors">
                <ShoppingBag size={28} />
              </div>
              <h3 className="font-bold text-xl text-gray-900 mb-1">Shopee</h3>
              <p className="text-gray-500 text-sm mb-4">Official Store Humaini</p>
              <span className="text-orange-600 font-semibold text-sm flex items-center gap-1 group-hover:text-orange-700">Kunjungi Toko <ArrowRight size={14} /></span>
            </a>

            {/* Tokopedia */}
            <a
              href="#"
              onClick={(e) => e.preventDefault()}
              className="bg-white hover:bg-green-50 p-8 rounded-2xl shadow-lg transition-transform hover:-translate-y-2 flex flex-col items-center group cursor-pointer opacity-80"
              title="Segera Hadir"
            >
              <div className="w-14 h-14 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-4 group-hover:bg-green-600 group-hover:text-white transition-colors">
                <ShoppingBag size={28} />
              </div>
              <h3 className="font-bold text-xl text-gray-900 mb-1">Tokopedia</h3>
              <p className="text-gray-500 text-sm mb-4">Segera Hadir</p>
              <span className="text-green-600 font-semibold text-sm flex items-center gap-1 group-hover:text-green-700">Kunjungi Toko <ArrowRight size={14} /></span>
            </a>
          </div>

          <div className="mt-16 text-white/70">
            <p className="mb-2 font-medium">Jam Operasional:</p>
            <p className="text-sm">Buka Setiap Hari</p>
          </div>
        </div>
      </section>

      {/* --- Footer --- */}
      <footer className="bg-dark-900 text-gray-400 py-12 border-t border-gray-800">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-8">
            <div className="text-center md:text-left">
              <h4 className="font-serif text-2xl font-bold text-white mb-2">Humaini Jewellery</h4>
              <p className="text-sm text-gray-500 max-w-xs">Keindahan abadi dalam setiap detail. Cincin permata, perak, dan emas berkualitas tinggi.</p>
            </div>

            <div className="flex gap-6">
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-emerald-900 hover:text-white transition-colors"><Instagram size={18} /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors"><Facebook size={18} /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-sky-500 hover:text-white transition-colors"><Twitter size={18} /></a>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
            <div className="text-center md:text-left">
              &copy; {new Date().getFullYear()} Humaini Jewellery.
            </div>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white transition-colors">Kebijakan Privasi</a>
              <a href="#" className="hover:text-white transition-colors">Syarat & Ketentuan</a>
            </div>
          </div>
        </div>
      </footer>

      <FloatingWhatsApp link={`${baseWaLink}?text=Halo%20Humaini%20Jewellery,%20saya%20ingin%20konsultasi.`} />
      <ScrollToTop />
    </div>
  );
};

// Render
const container = document.getElementById('root');
if (container) {
  const root = createRoot(container);
  root.render(<App />);
}
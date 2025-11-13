import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface Product {
  id: string;
  title: string;
  image: string;
  alt: string;
}

const products: Product[] = [
  { 
    id: 'single-saft', 
    title: 'Tek Şaftlı Parçalama Makinesi',
    image: 'https://i.ibb.co/gb3Bhj2R/1-1.png',
    alt: 'Tek Şaftlı Parçalama Makinesi - MT Makina TSH Serisi'
  },
  { 
    id: 'dual-saft', 
    title: 'Çift Şaftlı Parçalama Makinesi',
    image: 'https://i.ibb.co/Y44y4KHc/cs-double-shaft-shredder-20.png',
    alt: 'Çift Şaftlı Parçalama Makinesi - MT Makina CS Serisi'
  },
  { 
    id: 'quad-saft', 
    title: 'Dört Şaftlı Parçalama Makinesi',
    image: 'https://i.ibb.co/SDjBQ9cq/1-9.png',
    alt: 'Dört Şaftlı Parçalama Makinesi - MT Makina QS Serisi'
  },
  { 
    id: 'metal', 
    title: 'Metal Parçalama Makinesi',
    image: 'https://i.ibb.co/m5xLp46J/1-1.png',
    alt: 'Metal Parçalama Makinesi - MT Makina MP Serisi'
  },
  { 
    id: 'mobile', 
    title: 'Mobil Kırıcı',
    image: 'https://i.ibb.co/Ndfqm2fm/organic-waste-shredder-2.png',
    alt: 'Mobil Kırıcı - Taşınabilir Parçalama Çözümü'
  },
  { 
    id: 'pallet', 
    title: 'Palet Parçalama Makinesi',
    image: 'https://i.ibb.co/svR9Kdq7/1-7.png',
    alt: 'Palet Parçalama Makinesi - Ahşap Geri Dönüşüm'
  },
  { 
    id: 'harddisk', 
    title: 'Harddisk İmha Makinesi',
    image: 'https://i.ibb.co/7JsNwKsS/hard-disk-devre-karti-imha-parcalama-makinesi-1.png',
    alt: 'Harddisk İmha Makinesi - Güvenli Veri İmhası'
  },
  { 
    id: 'tree-root', 
    title: 'Ağaç Kökü Parçalama Makinesi',
    image: 'https://i.ibb.co/KmLJHvN/agac-koku-parcalama-makinesi-tw-200-1.png',
    alt: 'Ağaç Kökü Parçalama Makinesi - MT Makina TW Serisi'
  },
  { 
    id: 'wood', 
    title: 'Ağaç Parçalama Öğütme Makinesi',
    image: 'https://i.ibb.co/JFxCGnpc/agac-parcalama-ogutme-makinesi-1.png',
    alt: 'Ağaç Parçalama Öğütme Makinesi - Ahşap İşleme'
  },
  { 
    id: 'glass', 
    title: 'Cam Şişe Kırma Makinesi',
    image: 'https://i.ibb.co/4wtQRwBB/1-1.png',
    alt: 'Cam Şişe Kırma Makinesi - Cam Geri Dönüşüm'
  },
];

interface ProductsOverviewPageProps {
  onBackToMain: () => void;
  onProductClick?: (productType: string) => void;
}

export const ProductsOverviewPage = ({ onBackToMain, onProductClick }: ProductsOverviewPageProps) => {
  return (
    <div className="min-h-screen bg-[#F5F7F8]" style={{ fontFamily: 'Mulish, sans-serif' }}>
      {/* Header Spacer */}
      <div className="h-20"></div>

      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#45474B] via-[#3A3C3F] to-[#2F3032]">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,.05) 35px, rgba(255,255,255,.05) 70px)',
          }}></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 lg:px-8 max-w-[1440px] text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl text-[#F5F7F8] mb-6">
              Parçalama Makinesi Çözümlerimiz
            </h1>
            <p className="text-xl md:text-2xl text-[#F5F7F8]/90 max-w-3xl mx-auto">
              Farklı endüstrilere özel yüksek performanslı sistemler
            </p>
          </motion.div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8 max-w-[1440px]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                whileHover={{ scale: 1.02, y: -8 }}
                onClick={() => onProductClick && onProductClick(product.id)}
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all cursor-pointer"
              >
                {/* Product Image */}
                <div className="relative h-64 bg-[#45474B] overflow-hidden group">
                  <ImageWithFallback
                    src={product.image}
                    alt={product.alt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    fallbackSrc="https://images.unsplash.com/photo-1718512932005-197f55f2e186?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1E1E1E]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                
                {/* Card Content */}
                <div className="p-6">
                  <h3 className="text-xl text-[#1E1E1E] mb-3">{product.title}</h3>
                  <div className="flex items-center text-[#F4CE14] hover:text-[#F4CE14]/80 transition-colors">
                    <span className="mr-2">Detaylı İncele</span>
                    <ArrowRight size={18} />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Content Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="bg-white rounded-lg p-12 shadow-md max-w-5xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl text-[#1E1E1E] mb-8">
              Endüstriyel Parçalama Makinelerinde Yeni Nesil Verimlilik
            </h2>
            <div className="space-y-6 text-lg text-[#45474B] leading-relaxed">
              <p>
                MT Makina, atık yönetimi ve geri dönüşüm sektörlerinde yüksek verimlilik ve 
                dayanıklılık sunan parçalama makineleri üretmektedir.
              </p>
              <p>
                Her makine grubu, enerji tasarrufu, uzun ömür ve çevre dostu üretim prensipleriyle 
                geliştirilmiştir.
              </p>
              <p>
                Yüksek torklu motor sistemleri ve optimize edilmiş bıçak geometrileri ile düşük 
                enerji tüketimiyle maksimum performans sağlar.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-br from-[#45474B] to-[#35373A]">
        <div className="container mx-auto px-4 lg:px-8 max-w-[1440px]">
          <h2 className="text-3xl text-[#F4CE14] mb-12 text-center">Bize Ulaşın</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Address */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white/10 backdrop-blur-sm rounded-lg p-8 text-center"
            >
              <div className="w-16 h-16 bg-[#F4CE14] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg width="28" height="28" fill="#1E1E1E" viewBox="0 0 24 24">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                </svg>
              </div>
              <h3 className="text-xl text-[#F5F7F8] mb-3">Adres</h3>
              <p className="text-[#F5F7F8]/90 leading-relaxed">
                Cumhuriyet Mah. 1983 Sk. Kent Palas 2 K:7 D:85-86 PK:34512 Esenyurt / İstanbul / TÜRKİYE
              </p>
            </motion.div>

            {/* Phone */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white/10 backdrop-blur-sm rounded-lg p-8 text-center"
            >
              <div className="w-16 h-16 bg-[#F4CE14] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg width="28" height="28" fill="#1E1E1E" viewBox="0 0 24 24">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                </svg>
              </div>
              <h3 className="text-xl text-[#F5F7F8] mb-3">Telefon</h3>
              <p className="text-[#F5F7F8]/90 text-lg">+90 212 613 31 82</p>
            </motion.div>

            {/* Email */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white/10 backdrop-blur-sm rounded-lg p-8 text-center"
            >
              <div className="w-16 h-16 bg-[#F4CE14] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg width="28" height="28" fill="#1E1E1E" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
              </div>
              <h3 className="text-xl text-[#F5F7F8] mb-3">E-Posta</h3>
              <p className="text-[#F5F7F8]/90 text-lg">info@mtmakina.com.tr</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1E1E1E] py-16">
        <div className="container mx-auto px-4 lg:px-8 max-w-[1440px]">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            {/* Kurumsal */}
            <div className="text-center md:text-left">
              <h3 className="text-xl text-[#F4CE14] mb-4">Kurumsal</h3>
              <ul className="space-y-2 text-[#F5F7F8]/80">
                <li className="hover:text-[#F4CE14] transition-colors cursor-pointer" onClick={onBackToMain}>Ana Sayfa</li>
                <li className="hover:text-[#F4CE14] transition-colors cursor-pointer">Hakkımızda</li>
                <li className="hover:text-[#F4CE14] transition-colors cursor-pointer">Misyonumuz</li>
                <li className="hover:text-[#F4CE14] transition-colors cursor-pointer">Vizyonumuz</li>
              </ul>
            </div>

            {/* Ürünler */}
            <div className="text-center md:text-left">
              <h3 className="text-xl text-[#F4CE14] mb-4">Ürünler</h3>
              <ul className="space-y-2 text-[#F5F7F8]/80">
                <li className="hover:text-[#F4CE14] transition-colors cursor-pointer">Parçalama Makineleri</li>
                <li className="hover:text-[#F4CE14] transition-colors cursor-pointer">Ayrıştırma Sistemleri</li>
                <li className="hover:text-[#F4CE14] transition-colors cursor-pointer">Yakma Fırınları</li>
                <li className="hover:text-[#F4CE14] transition-colors cursor-pointer">Balya Presleri</li>
                <li className="hover:text-[#F4CE14] transition-colors cursor-pointer">Tesisler</li>
              </ul>
            </div>

            {/* Bize Ulaşın */}
            <div className="text-center md:text-left">
              <h3 className="text-xl text-[#F4CE14] mb-4">Bize Ulaşın</h3>
              <ul className="space-y-2 text-[#F5F7F8]/80">
                <li>E: info@mtmakina.com.tr</li>
                <li>T: +90 212 613 31 82</li>
                <li>M: +90 542 310 99 30</li>
                <li className="pt-2 leading-relaxed">
                  Cumhuriyet Mah. 1983 Sk. Kent Palas 2 K:7 D:85-86 PK:34512 Esenyurt / İstanbul / TÜRKİYE
                </li>
              </ul>
            </div>
          </div>

          {/* Social Media */}
          <div className="border-t border-[#F5F7F8]/20 pt-8">
            <div className="flex justify-center items-center gap-6 mb-6">
              <a href="https://www.linkedin.com/company/mtmakina" target="_blank" rel="noopener noreferrer" className="text-[#F5F7F8]/80 hover:text-[#F4CE14] transition-colors">
                <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a href="https://www.youtube.com/@MTMakinaofficial" target="_blank" rel="noopener noreferrer" className="text-[#F5F7F8]/80 hover:text-[#F4CE14] transition-colors">
                <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
                </svg>
              </a>
              <a href="https://www.instagram.com/mtmakina" target="_blank" rel="noopener noreferrer" className="text-[#F5F7F8]/80 hover:text-[#F4CE14] transition-colors">
                <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
            </div>
            <p className="text-center text-[#F5F7F8]/60">© 2025 MT Makina Ltd. Şti. - Tüm Hakları Saklıdır</p>
          </div>
        </div>
      </footer>
    </div>
  );
};
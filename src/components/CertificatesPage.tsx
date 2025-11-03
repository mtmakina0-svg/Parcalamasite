import React from 'react';
import { motion } from 'motion/react';
import { Award } from 'lucide-react';
import cert1 from 'figma:asset/255fa4d393b49f18325ec0ad5df27ca839f519b6.png';
import cert2 from 'figma:asset/9f8daa4ae4202c5bc5b0b4114905af7654425363.png';
import cert3 from 'figma:asset/4fed3a32972e8f2e2f2a0b35d98645d07fe0932b.png';
import cert4 from 'figma:asset/3fe679bea4691d32b89f235ce8d44ff431c59504.png';
import cert5 from 'figma:asset/96ad48755bf4e30afa2a3fdec88c88b77b4cb89e.png';
import cert6 from 'figma:asset/45bc57d4b695ec756acba5adc8f8ffc5e6eaa2db.png';
import cert7 from 'figma:asset/48af5f913bbfc9949048bf47fdf2bb0ddcb2f27a.png';
import cert8 from 'figma:asset/041cc787f5aaa1f2efa0f32a2fa1dc6f1f6b0675.png';

interface CertificatesPageProps {
  onBackToMain: () => void;
}

export const CertificatesPage = ({ onBackToMain }: CertificatesPageProps) => {
  const certificates = [
    { image: cert1, caption: 'ISO 45001:2018 İş Sağlığı ve Güvenliği Yönetim Sistemi' },
    { image: cert2, caption: 'ISO 14001:2015 Çevre Yönetim Sistemi' },
    { image: cert3, caption: 'ISO 18001 OHSAS İş Sağlığı ve Güvenliği Belgesi' },
    { image: cert4, caption: 'ISO 9001:2015 Kalite Yönetim Sistemi Belgesi' },
    { image: cert5, caption: 'CE Uygunluk Beyanı' },
    { image: cert6, caption: 'ISO 50001:2018 Enerji Yönetim Sistemi Belgesi' },
    { image: cert7, caption: 'CE Uygunluk Beyanı - Geri Dönüşüm Sistemleri İmalatı' },
    { image: cert8, caption: 'CE Uygunluk Beyanı - Levha Parçalama Makinesi' },
  ];

  return (
    <div className="min-h-screen bg-[#F5F7F8]" style={{ fontFamily: 'Mulish, sans-serif' }}>
      {/* Header Spacer */}
      <div className="h-20"></div>

      {/* Hero Section */}
      <section className="relative py-20 flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#45474B] via-[#3A3C3F] to-[#2F3032]">
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
            <div className="flex items-center justify-center mb-6">
              <Award size={48} className="text-[#F4CE14]" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl text-[#F5F7F8] mb-6">
              Belgelerimiz
            </h1>
            <p className="text-xl md:text-2xl text-[#F5F7F8]/90 max-w-3xl mx-auto">
              MT Makina olarak kalite, güvenlik ve uluslararası standartlara bağlılığımızın belgeleri
            </p>
          </motion.div>
        </div>
      </section>

      {/* Certificates Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8 max-w-[1440px]">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {certificates.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-2xl transition-all"
              >
                <div className="aspect-[3/4] relative overflow-hidden bg-gray-100">
                  <img 
                    src={cert.image} 
                    alt={cert.caption}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4 bg-[#45474B]">
                  <p className="text-sm text-[#F5F7F8] text-center leading-relaxed">
                    {cert.caption}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#45474B] to-[#35373A]">
        <div className="container mx-auto px-4 lg:px-8 max-w-[1440px] text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl text-[#F5F7F8] mb-6">
              Kalite ve Güvenlik Odaklı Üretim
            </h2>
            <p className="text-xl text-[#F5F7F8]/90 mb-8 max-w-3xl mx-auto">
              Tüm sertifikalarımız, müşterilerimize en yüksek kalite ve güvenlik standartlarında 
              ürün sunma taahhüdümüzün kanıtıdır.
            </p>
            <motion.a
              href="https://wa.me/905423109930?text=Merhaba%20MT%20Makina%2C%20belgeleriniz%20hakkında%20bilgi%20almak%20istiyorum."
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(244,206,20,0.5)' }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 bg-[#F4CE14] text-[#1E1E1E] px-8 py-4 rounded-lg text-xl transition-all shadow-lg"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              Hemen Teklif Al!
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1E1E1E] py-16">
        <div className="container mx-auto px-4 lg:px-8 max-w-[1440px]">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            <div className="text-center md:text-left">
              <h3 className="text-xl text-[#F4CE14] mb-4">Kurumsal</h3>
              <ul className="space-y-2 text-[#F5F7F8]/80">
                <li className="hover:text-[#F4CE14] transition-colors cursor-pointer" onClick={onBackToMain}>Ana Sayfa</li>
                <li className="hover:text-[#F4CE14] transition-colors cursor-pointer">Hakkımızda</li>
                <li className="hover:text-[#F4CE14] transition-colors cursor-pointer">Belgelerimiz</li>
                <li className="hover:text-[#F4CE14] transition-colors cursor-pointer">Misyonumuz</li>
                <li className="hover:text-[#F4CE14] transition-colors cursor-pointer">Vizyonumuz</li>
              </ul>
            </div>

            <div className="text-center md:text-left">
              <h3 className="text-xl text-[#F4CE14] mb-4">Ürünler</h3>
              <ul className="space-y-2 text-[#F5F7F8]/80">
                <li className="hover:text-[#F4CE14] transition-colors cursor-pointer">Tek Şaftlı Parçalama</li>
                <li className="hover:text-[#F4CE14] transition-colors cursor-pointer">Çift Şaftlı Parçalama</li>
                <li className="hover:text-[#F4CE14] transition-colors cursor-pointer">Metal Parçalama</li>
                <li className="hover:text-[#F4CE14] transition-colors cursor-pointer">Palet Parçalama</li>
                <li className="hover:text-[#F4CE14] transition-colors cursor-pointer">Lastik Parçalama</li>
              </ul>
            </div>

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

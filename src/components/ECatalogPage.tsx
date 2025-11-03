import React from 'react';
import { motion } from 'motion/react';
import { FileDown, BookOpen, Mail, Phone } from 'lucide-react';

interface ECatalogPageProps {
  onBackToMain: () => void;
}

export const ECatalogPage = ({ onBackToMain }: ECatalogPageProps) => {
  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: 'Mulish, sans-serif' }}>
      {/* Header Spacer */}
      <div className="h-20"></div>

      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-[#45474B] via-[#3A3C3F] to-[#2F3032]">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,.1) 35px, rgba(255,255,255,.1) 70px)',
          }}></div>
        </div>

        <div className="container mx-auto px-4 lg:px-8 max-w-[1440px] relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="flex items-center justify-center mb-6">
              <BookOpen size={56} className="text-[#F4CE14]" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl text-white mb-6">
              MT Makina E-Katalog
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
              Parçalama makineleri ürün gamımızın tüm detayları dijital katalogumuzda
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8 max-w-[1440px]">
          <div className="max-w-4xl mx-auto">
            {/* Info Box */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-[#F4CE14] to-[#E5BF12] rounded-2xl p-10 shadow-2xl mb-12 text-center"
            >
              <FileDown size={64} className="mx-auto mb-6 text-[#1E1E1E]" />
              <h2 className="text-3xl md:text-4xl text-[#1E1E1E] mb-6">
                Dijital Katalogumuz Yakında Yayında!
              </h2>
              <p className="text-xl text-[#1E1E1E]/90 mb-8">
                Tüm ürünlerimizin teknik detayları, kapasiteleri, ölçüleri ve uygulama alanlarını 
                içeren kapsamlı e-kataloğumuz hazırlanıyor.
              </p>
              <div className="inline-block bg-[#1E1E1E] text-[#F4CE14] px-6 py-3 rounded-lg">
                Katalog için bilgi almak üzere bizimle iletişime geçin
              </div>
            </motion.div>

            {/* Katalog İçeriği Preview */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-[#F5F7F8] rounded-2xl p-8 mb-12"
            >
              <h3 className="text-2xl md:text-3xl text-[#45474B] mb-6 text-center">
                Katalogumuzda Neler Bulacaksınız?
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  'Tüm parçalama makinesi modelleri',
                  'Detaylı teknik özellikler',
                  'Kapasite ve performans tabloları',
                  'Uygulama alanları ve örnekler',
                  '3D görseller ve teknik çizimler',
                  'Opsiyonel ekipman bilgileri',
                  'Bakım ve servis bilgileri',
                  'Referans projeler'
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.1 * index }}
                    className="flex items-start gap-3 bg-white p-4 rounded-lg shadow-sm"
                  >
                    <span className="text-[#F4CE14] text-xl">✓</span>
                    <span className="text-[#45474B]">{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Contact Options */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              {/* Email */}
              <div className="bg-gradient-to-br from-[#45474B] to-[#35373A] rounded-xl p-8 text-center text-white">
                <Mail size={48} className="mx-auto mb-4 text-[#F4CE14]" />
                <h4 className="text-xl mb-3">E-posta ile Talep</h4>
                <p className="text-white/80 mb-4">
                  Katalog talebinizi e-posta ile iletin
                </p>
                <a
                  href="mailto:info@mtmakina.com.tr?subject=E-Katalog Talebi"
                  className="inline-block bg-[#F4CE14] text-[#1E1E1E] px-6 py-3 rounded-lg hover:bg-[#E5BF12] transition-colors"
                >
                  info@mtmakina.com.tr
                </a>
              </div>

              {/* WhatsApp */}
              <div className="bg-gradient-to-br from-[#25D366] to-[#1DA851] rounded-xl p-8 text-center text-white">
                <Phone size={48} className="mx-auto mb-4" />
                <h4 className="text-xl mb-3">WhatsApp ile İletişim</h4>
                <p className="text-white/90 mb-4">
                  Hemen katalog talebinde bulunun
                </p>
                <a
                  href="https://wa.me/905423109930?text=Merhaba%20MT%20Makina%2C%20e-katalog%20talep%20ediyorum."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-white text-[#25D366] px-6 py-3 rounded-lg hover:bg-white/90 transition-colors"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                  Hemen İletişime Geç
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#F5F7F8]">
        <div className="container mx-auto px-4 lg:px-8 max-w-[1440px] text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl text-[#45474B] mb-6">
              İhtiyacınıza Özel Çözüm
            </h2>
            <p className="text-xl text-[#45474B]/80 mb-8 max-w-2xl mx-auto">
              Katalogumuzda bulamadığınız bir bilgi mi var? Özel ihtiyaçlarınız için bizimle iletişime geçin.
            </p>
            <motion.a
              href="https://wa.me/905423109930?text=Merhaba%20MT%20Makina%2C%20özel%20bir%20çözüm%20için%20görüşmek%20istiyorum."
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(244,206,20,0.5)' }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 bg-[#F4CE14] text-[#1E1E1E] px-8 py-4 rounded-lg text-xl transition-all shadow-lg"
            >
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
              <ul className="space-y-2 text-white/80">
                <li className="hover:text-[#F4CE14] transition-colors cursor-pointer" onClick={onBackToMain}>Ana Sayfa</li>
                <li className="hover:text-[#F4CE14] transition-colors cursor-pointer">Hakkımızda</li>
                <li className="hover:text-[#F4CE14] transition-colors cursor-pointer">Belgelerimiz</li>
              </ul>
            </div>

            <div className="text-center md:text-left">
              <h3 className="text-xl text-[#F4CE14] mb-4">Ürünler</h3>
              <ul className="space-y-2 text-white/80">
                <li className="hover:text-[#F4CE14] transition-colors cursor-pointer">Tek Şaftlı Parçalama</li>
                <li className="hover:text-[#F4CE14] transition-colors cursor-pointer">Çift Şaftlı Parçalama</li>
                <li className="hover:text-[#F4CE14] transition-colors cursor-pointer">Metal Parçalama</li>
                <li className="hover:text-[#F4CE14] transition-colors cursor-pointer">Plastik Parçalama</li>
              </ul>
            </div>

            <div className="text-center md:text-left">
              <h3 className="text-xl text-[#F4CE14] mb-4">Bize Ulaşın</h3>
              <ul className="space-y-2 text-white/80">
                <li>E: info@mtmakina.com.tr</li>
                <li>T: +90 212 613 31 82</li>
                <li>M: +90 542 310 99 30</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/20 pt-8 text-center">
            <p className="text-white/60">© 2025 MT Makina Ltd. Şti. - Tüm Hakları Saklıdır</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

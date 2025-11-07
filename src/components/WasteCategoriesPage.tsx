import React from 'react';
import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Button } from './ui/button';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from './LanguageContext';

interface WasteCategory {
  id: string;
  titleKey: string;
  image: string;
}

const wasteCategories: WasteCategory[] = [
  { id: 'evsel', titleKey: 'waste_household', image: 'https://images.unsplash.com/photo-1611284446314-60a58ac0deb9?w=800&q=80' },
  { id: 'elektronik', titleKey: 'waste_electronic', image: 'https://images.unsplash.com/photo-1608653206809-e6a8044173b0?w=800&q=80' },
  { id: 'lastik', titleKey: 'waste_tire', image: 'https://images.unsplash.com/photo-1761765030682-26f51cfbc034?w=800&q=80' },
  { id: 'metal', titleKey: 'waste_metal', image: 'https://images.unsplash.com/photo-1625662276901-4a7ec44fbeed?w=800&q=80' },
  { id: 'cam', titleKey: 'waste_glass', image: 'https://images.unsplash.com/photo-1706468808971-ee72122572b6?w=800&q=80' },
  { id: 'kagit', titleKey: 'waste_paper', image: 'https://images.unsplash.com/photo-1757078059269-0ccbd674b1e4?w=800&q=80' },
  { id: 'plastik', titleKey: 'waste_plastic', image: 'https://images.unsplash.com/photo-1669065514428-b96035a3faf2?w=800&q=80' },
  { id: 'organik', titleKey: 'waste_organic', image: 'https://images.unsplash.com/photo-1592484773536-263bf52e81fc?w=800&q=80' },
  { id: 'tibbi', titleKey: 'waste_medical', image: 'https://images.unsplash.com/photo-1631549916768-4119b2e5f926?w=800&q=80' },
  { id: 'agac', titleKey: 'waste_tree_root', image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&q=80' },
  { id: 'hayvan', titleKey: 'waste_animal', image: 'https://images.unsplash.com/photo-1500595046743-cd271d694d30?w=800&q=80' },
  { id: 'ambalaj', titleKey: 'waste_packaging', image: 'https://images.unsplash.com/photo-1610557892470-55d9e80c0bce?w=800&q=80' },
  { id: 'palet', titleKey: 'waste_pallet', image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80' },
  { id: 'tekstil', titleKey: 'waste_textile', image: 'https://images.unsplash.com/photo-1610910160298-45c99e1e0b2f?w=800&q=80' },
  { id: 'aty', titleKey: 'waste_aty', image: 'https://images.unsplash.com/photo-1566976370648-80b3fb37f411?w=800&q=80' },
];

interface WasteCategoriesPageProps {
  onCategorySelect: (categoryId: string) => void;
  onBackToMain: () => void;
}

export const WasteCategoriesPage = ({ onCategorySelect, onBackToMain }: WasteCategoriesPageProps) => {
  const { t } = useLanguage();
  
  return (
    <div className="min-h-screen bg-[#F5F7F8]" style={{ fontFamily: 'Mulish, sans-serif' }}>
      {/* Header Spacer */}
      <div className="h-20"></div>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8 max-w-[1440px]">
          
          {/* Page Title */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl text-[#1E1E1E] mb-6">
              {t('waste_categories_title')}
            </h1>
            <p className="text-lg text-[#45474B] max-w-3xl mx-auto leading-relaxed">
              {t('waste_categories_subtitle')}
            </p>
          </motion.div>

          {/* Categories Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {wasteCategories.map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                whileHover={{ y: -8, scale: 1.02 }}
                onClick={() => onCategorySelect(category.id)}
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all cursor-pointer"
              >
                <div className="relative h-56 overflow-hidden">
                  <ImageWithFallback
                    src={category.image}
                    alt={t(category.titleKey)}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl text-[#1E1E1E] mb-3">{t(category.titleKey)}</h3>
                  <div className="flex items-center text-[#F4CE14] hover:text-[#F4CE14]/80 transition-colors">
                    <span className="mr-2">{t('btn_view_details')}</span>
                    <ArrowRight size={18} />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Text Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-white rounded-lg p-12 shadow-md"
          >
            <h2 className="text-3xl text-[#1E1E1E] mb-6 text-center">
              {t('waste_management_title')}
            </h2>
            <div className="space-y-4 text-lg text-[#45474B] leading-relaxed">
              <p>{t('waste_management_para1')}</p>
              <p>{t('waste_management_para2')}</p>
              <p>{t('waste_management_para3')}</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-br from-[#45474B] to-[#35373A]">
        <div className="container mx-auto px-4 lg:px-8 max-w-[1440px]">
          <h2 className="text-3xl text-[#F4CE14] mb-12 text-center">{t('tech_contact_title')}</h2>
          
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
              <h3 className="text-xl text-[#F5F7F8] mb-3">{t('tech_contact_address')}</h3>
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
              <h3 className="text-xl text-[#F5F7F8] mb-3">{t('tech_contact_phone')}</h3>
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
              <h3 className="text-xl text-[#F5F7F8] mb-3">{t('tech_contact_email')}</h3>
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
            <div>
              <h3 className="text-xl text-[#F4CE14] mb-4">{t('footer_corporate')}</h3>
              <ul className="space-y-2 text-[#F5F7F8]/80">
                <li className="hover:text-[#F4CE14] transition-colors cursor-pointer" onClick={onBackToMain}>{t('footer_home')}</li>
                <li className="hover:text-[#F4CE14] transition-colors cursor-pointer">{t('footer_about')}</li>
                <li className="hover:text-[#F4CE14] transition-colors cursor-pointer">{t('footer_certificates')}</li>
                <li className="hover:text-[#F4CE14] transition-colors cursor-pointer">{t('footer_fair')}</li>
                <li className="hover:text-[#F4CE14] transition-colors cursor-pointer">{t('footer_references')}</li>
              </ul>
            </div>

            {/* Ürünler */}
            <div>
              <h3 className="text-xl text-[#F4CE14] mb-4">{t('footer_products')}</h3>
              <ul className="space-y-2 text-[#F5F7F8]/80">
                <li className="hover:text-[#F4CE14] transition-colors cursor-pointer">{t('footer_shredders')}</li>
                <li className="hover:text-[#F4CE14] transition-colors cursor-pointer">{t('footer_separation')}</li>
                <li className="hover:text-[#F4CE14] transition-colors cursor-pointer">{t('footer_incinerators')}</li>
                <li className="hover:text-[#F4CE14] transition-colors cursor-pointer">{t('footer_balers')}</li>
                <li className="hover:text-[#F4CE14] transition-colors cursor-pointer">{t('footer_facilities')}</li>
              </ul>
            </div>

            {/* Bize Ulaşın */}
            <div>
              <h3 className="text-xl text-[#F4CE14] mb-4">{t('footer_contact')}</h3>
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
            <p className="text-center text-[#F5F7F8]/60">{t('footer_copyright')}</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

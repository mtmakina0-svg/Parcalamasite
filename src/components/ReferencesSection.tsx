import React from 'react';
import { motion } from 'motion/react';
import { useLanguage } from './LanguageContext';
import { Globe } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export const ReferencesSection = () => {
  const { t, isRTL } = useLanguage();

  const globalCountries = ['Türkiye', 'Almanya', 'Rusya', 'Romanya', 'Mısır', 'Suudi Arabistan'];

  // Featured partner logos for homepage
  const partners = [
    { name: 'ASELSAN', logo: 'https://i.ibb.co/jkW22W0n/ASELSAN-logo-svg.png', alt: 'ASELSAN Logo' },
    { name: 'Bosch', logo: 'https://i.ibb.co/JWsYZqCK/Bosch-logo-svg.png', alt: 'Bosch Logo' },
    { name: 'Castrol', logo: 'https://i.ibb.co/XfcXKXVQ/castrollogo.png', alt: 'Castrol Logo' },
    { name: 'PepsiCo', logo: 'https://i.ibb.co/PGmvrMtt/Pepsi-Co-logo-svg.png', alt: 'PepsiCo Logo' },
    { name: 'Mercedes-Benz', logo: 'https://i.ibb.co/W4zzSD4P/1200px-Mercedes-Benz-Logo-11.jpg', alt: 'Mercedes-Benz Logo' },
    { name: 'TAV', logo: 'https://i.ibb.co/FbS339kJ/TAV.jpg', alt: 'TAV Havalimanları Logo' },
    { name: 'BP', logo: 'https://i.ibb.co/84Y2j2yB/bp-logo-png-seeklogo-21836.png', alt: 'BP Logo' },
    { name: 'Golden Rose', logo: 'https://i.ibb.co/whyptjcT/golden-rose.png', alt: 'Golden Rose Logo' },
    { name: 'İGA', logo: 'https://i.ibb.co/JjkZmQry/GA-Havaliman-letmesi-A-logo-svg.png', alt: 'İGA Logo' },
    { name: 'Betek Boya', logo: 'https://i.ibb.co/FqcdPgpG/betek-boya-logo-brandlogos-net-slepl.png', alt: 'Betek Boya Logo' },
  ];

  return (
    <section
      id="references"
      className="py-24 bg-[#F5F7F8] relative"
      dir={isRTL ? 'rtl' : 'ltr'}
    >
      <div className="container mx-auto px-4 lg:px-8 max-w-[1440px]">
        {/* Main Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2
            className="text-4xl md:text-5xl text-[#1E1E1E] mb-6"
          >
            {t('ref_main_title')}
          </h2>
          <p className="text-base md:text-lg text-[#45474B]/90 max-w-4xl mx-auto leading-relaxed mb-6">
            {t('ref_main_subtitle')}
          </p>
          <p className="text-base md:text-lg text-[#45474B]/80 max-w-5xl mx-auto leading-relaxed">
            {t('ref_main_paragraph')}
          </p>
        </motion.div>

        {/* Partner Logos Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-20"
        >
          {partners.map((partner, index) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              whileHover={{ y: -5, scale: 1.05 }}
              className="bg-white rounded-xl p-6 flex items-center justify-center shadow-md hover:shadow-xl transition-all group"
              style={{ minHeight: '140px' }}
            >
              <div className="w-full h-full flex items-center justify-center p-2">
                <ImageWithFallback
                  src={partner.logo}
                  alt={partner.alt}
                  className="w-full h-full object-contain max-h-20 group-hover:scale-110 transition-transform duration-300"
                  fallbackSrc="https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=400"
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Global Export Network */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="relative bg-gradient-to-br from-[#35373A] to-[#2A2C2F] rounded-2xl p-12 border-2 border-[#F4CE14]/30"
        >
          <div className="relative z-10">
            {/* Title */}
            <div className="flex items-center justify-center gap-3 mb-4">
              <Globe size={32} className="text-[#F4CE14]" />
              <h3 className="text-2xl md:text-3xl text-[#F4CE14]">{t('ref_global_title')}</h3>
            </div>

            <p className="text-center text-[#F5F7F8]/90 mb-8 max-w-2xl mx-auto">
              {t('ref_global_subtitle')}
            </p>

            {/* Country Badges */}
            <div className="flex flex-wrap items-center justify-center gap-4">
              {globalCountries.map((country, index) => (
                <motion.div
                  key={country}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={{ scale: 1.1, y: -3 }}
                  className="px-6 py-3 bg-[#45474B]/80 hover:bg-[#45474B] rounded-full border-2 border-[#F4CE14]/40 hover:border-[#F4CE14] transition-all cursor-pointer hover:shadow-[0_0_15px_rgba(244,206,20,0.2)]"
                >
                  <span className="text-[#F4CE14]">{country}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

import React from 'react';
import { motion } from 'motion/react';
import { useLanguage } from './LanguageContext';
import { Linkedin, Youtube, Instagram, Mail, Phone, MapPin } from 'lucide-react';
import { Logo } from './Logo';

export const Footer = () => {
  const { t, isRTL } = useLanguage();

  const socialLinks = [
    { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/company/mtmakina' },
    { icon: Youtube, label: 'YouTube', href: 'https://www.youtube.com/@MTMakinaofficial' },
    { icon: Instagram, label: 'Instagram', href: 'https://www.instagram.com/mtmakina' },
  ];

  // QuickLinks 'href' değerleri app.tsx'teki yollarla eşleşecek şekilde düzeltildi
  const quickLinks = [
    { key: 'nav_home', href: '/' },
    { key: 'nav_corporate', href: '/kurumsal' },
    { key: 'nav_products', href: '/urunler' },
    { key: 'nav_technology', href: '/teknoloji' },
    { key: 'nav_references', href: '/referanslar' },
    { key: 'nav_contact', href: '/iletisim' },
  ];

  return (
    <footer
      className="bg-[#1E1E1E] text-[#F5F7F8] pt-20 pb-8 border-t border-[#F4CE14]/20 relative overflow-hidden"
      dir={isRTL ? 'rtl' : 'ltr'}
    >
      {/* Background Glow - Simplified */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full h-64 bg-[#F4CE14]/3 blur-[80px]"></div>

      <div className="container mx-auto px-4 lg:px-8 max-w-[1440px] relative z-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3
              className="text-2xl text-[#F4CE14] mb-6"
              style={{ textShadow: '0 1px 2px rgba(0,0,0,0.3)' }}
            >
              {t('footer_contact')}
            </h3>
            <div className="space-y-4">
              <motion.div
                className="flex items-start space-x-3 group"
                whileHover={{ x: isRTL ? -5 : 5 }}
              >
                <MapPin size={20} className="text-[#F4CE14] mt-1 flex-shrink-0 group-hover:scale-110 transition-transform" />
                <a
                  href="https://share.google/D7UQ1IAJUmzeuxY0n" // Dış link, olduğu gibi kalır
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-[#F5F7F8]/80 group-hover:text-[#F5F7F8] transition-colors leading-relaxed block hover:text-[#F4CE14] cursor-pointer"
                >
                  {t('footer_full_address')}
                </a>
              </motion.div>
              <motion.div
                className="flex items-center space-x-3 group"
                whileHover={{ x: isRTL ? -5 : 5 }}
              >
                <Phone size={20} className="text-[#F4CE14] flex-shrink-0 group-hover:scale-110 transition-transform" />
                <a
                  href="tel:+902126133182" // Dış link (tel), olduğu gibi kalır
                  className="text-sm text-[#F5F7F8]/80 group-hover:text-[#F4CE14] transition-colors"
                >
                  {t('footer_full_phone')}
                </a>
              </motion.div>
              <motion.div
                className="flex items-center space-x-3 group"
                whileHover={{ x: isRTL ? -5 : 5 }}
              >
                <Mail size={20} className="text-[#F4CE14] flex-shrink-0 group-hover:scale-110 transition-transform" />
                <a
                  href="mailto:info@mtmakina.com.tr" // Dış link (mailto), olduğu gibi kalır
                  className="text-sm text-[#F5F7F8]/80 group-hover:text-[#F4CE14] transition-colors"
                >
                  {t('footer_full_email')}
                </a>
              </motion.div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3
              className="text-2xl text-[#F4CE14] mb-6"
              style={{ textShadow: '0 1px 2px rgba(0,0,0,0.3)' }}
            >
              {t('footer_quick_links')}
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.key}>
                  <motion.a
                    href={link.href} // <-- DÜZELTİLDİ
                    whileHover={{ x: isRTL ? -8 : 8, color: '#F4CE14' }}
                    className="text-sm text-[#F5F7F8]/80 hover:text-[#F4CE14] transition-colors inline-block"
                  >
                    {t(link.key)}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Social Media & Logo */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3
              className="text-2xl text-[#F4CE14] mb-6"
              style={{ textShadow: '0 1px 2px rgba(0,0,0,0.3)' }}
            >
              {t('footer_social')}
            </h3>
            <div className="flex items-center space-x-4 mb-8">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.label}
                    href={social.href} // Dış link, olduğu gibi kalır
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{
                      scale: 1.15,
                      y: -5
                    }}
                    whileTap={{ scale: 0.95 }}
                    className="w-14 h-14 bg-gradient-to-br from-[#35373A] to-[#2A2C2F] border-2 border-[#F4CE14]/30 hover:border-[#F4CE14] rounded-full flex items-center justify-center transition-all duration-300 group hover:shadow-[0_0_15px_rgba(244,206,20,0.2)]"
                    aria-label={social.label}
                  >
                    <Icon size={24} className="text-[#F4CE14] group-hover:scale-110 transition-transform" />
                  </motion.a>
                );
              })}
            </div>

            {/* Company Logo */}
            <motion.div
              className="mt-8"
              whileHover={{ scale: 1.05, filter: 'brightness(1.2)' }}
            >
              <Logo
                alt="MT Makina"
                className="h-16 w-auto"
              />
            </motion.div>

            {/* Website Link */}
            <motion.div
              className="mt-6"
              whileHover={{ x: isRTL ? -5 : 5 }}
            >
              <a
                href="https://www.mtmakina.com.tr" // Dış link, olduğu gibi kalır
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-[#F5F7F8]/80 hover:text-[#F4CE14] transition-colors inline-block"
              >
                {t('footer_website')}
              </a>
            </motion.div>
          </motion.div>
        </div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          className="h-px bg-gradient-to-r from-transparent via-[#F4CE14]/40 to-transparent mb-8"
        ></motion.div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center"
        >
          <p className="text-sm text-[#F5F7F8]/70">{t('footer_copyright')}</p>
        </motion.div>
      </div>
    </footer>
  );
};


import React from 'react';
import { motion } from 'motion/react';
import { MessageCircle } from 'lucide-react';
import { Logo } from './Logo';
import { useLanguage } from './LanguageContext';

export const HeroSection = () => {
  const { t } = useLanguage();
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white"
      style={{ fontFamily: 'Mulish, sans-serif' }}
    >
      {/* Content */}
      <div className="container mx-auto px-4 lg:px-8 max-w-[1440px] text-center py-20">
        {/* MT Makina Logo */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12 flex justify-center"
        >
          <Logo
            alt="MT Makina Logo"
            className="h-40 w-auto object-contain mx-[1px] my-[18px] p-[0px]"
          />
        </motion.div>

        {/* Main Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-[36px] sm:text-[48px] md:text-[60px] lg:text-[80px] text-[#45474B] mb-6 mx-auto leading-tight lg:whitespace-nowrap text-center px-4"
          style={{ fontWeight: 700, fontFamily: 'Mulish, sans-serif' }}
        >
          {t('page_title_home')}
        </motion.h1>

        {/* Yellow Divider - Short line */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="w-[200px] h-[4px] bg-[#F4CE14] mx-auto mb-10"
        ></motion.div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-[20px] text-[#777777] mb-16 max-w-3xl mx-auto leading-relaxed"
          style={{ fontWeight: 400 }}
        >
          Farklı endüstrilere özel yüksek performanslı sistemler
        </motion.p>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 max-w-2xl mx-auto"
        >
          {/* CTA Title */}
          <h2 
            className="text-[32px] text-[#45474B] mb-6"
            style={{ fontWeight: 700 }}
          >
            Makinenizi Bizimle Planlayın
          </h2>

          {/* CTA Description */}
          <p 
            className="text-[18px] text-[#555555] mb-8 leading-relaxed"
            style={{ fontWeight: 400 }}
          >
            Yüksek verimli, uzun ömürlü ve çevre dostu sistemler üretiyoruz.
            <br />
            Hemen Teklif Al! butonu ile projeniz için en uygun çözümü birlikte tasarlayalım.
          </p>

          {/* WhatsApp CTA Button */}
          <motion.a
            href="https://wa.me/905423109930"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 bg-[#F4CE14] text-[#1E1E1E] px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all"
            style={{ fontWeight: 600, fontSize: '18px' }}
          >
            <MessageCircle size={24} />
            {t('btn_quote')}
          </motion.a>
        </motion.div>
      </div>

      {/* Scroll Down Indicator - Left Side */}
      <motion.a
        href="#intro"
        onClick={(e) => {
          e.preventDefault();
          const introSection = document.querySelector('#intro');
          if (introSection) {
            introSection.scrollIntoView({ behavior: 'smooth' });
          }
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1 }}
        className="absolute bottom-8 left-8 w-[30px] h-[50px] border-2 border-[#999999] rounded-[50px] cursor-pointer hover:border-[#F4CE14] transition-colors"
        whileHover={{ borderColor: '#F4CE14' }}
      >
        <motion.span
          className="absolute top-[10px] left-1/2 -translate-x-1/2 w-[6px] h-[6px] bg-[#999999] rounded-full"
          animate={{
            y: [0, 10, 0],
            opacity: [1, 0.5, 1]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
        />
      </motion.a>
    </section>
  );
};

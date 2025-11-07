import React from 'react';
import { motion } from 'motion/react';
import { useLanguage } from './LanguageContext';
import { Button } from './ui/button';
import { ArrowRight, Sparkles } from 'lucide-react';

export const CTASection = () => {
  const { t, isRTL } = useLanguage();

  return (
    <section
      id="cta"
      className="py-32 bg-gradient-to-br from-[#F4CE14] via-[#F4CE14]/95 to-[#F4CE14] relative overflow-hidden"
      dir={isRTL ? 'rtl' : 'ltr'}
    >
      {/* Animated Background Pattern */}
      <motion.div
        animate={{
          backgroundPosition: ['0% 0%', '100% 100%'],
        }}
        transition={{ duration: 20, repeat: Infinity, repeatType: 'reverse' }}
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            'radial-gradient(circle at 20% 50%, #1E1E1E 2px, transparent 2px), radial-gradient(circle at 80% 80%, #1E1E1E 2px, transparent 2px)',
          backgroundSize: '50px 50px',
        }}
      ></motion.div>

      {/* Floating Particles */}
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={i}
          animate={{
            y: [0, -40, 0],
            x: [0, Math.random() * 30 - 15, 0],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: 4 + Math.random() * 2,
            repeat: Infinity,
            delay: i * 0.3,
          }}
          className="absolute w-3 h-3 bg-[#1E1E1E]/20 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
        ></motion.div>
      ))}

      <div className="container mx-auto px-4 lg:px-8 max-w-[1440px] relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto text-center"
        >
          {/* Icon */}
          <motion.div
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
            className="inline-block mb-8"
          >
            <Sparkles size={56} className="text-[#1E1E1E]" />
          </motion.div>

          {/* Title */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-6xl text-[#1E1E1E] mb-8"
            style={{ textShadow: '0 1px 2px rgba(0,0,0,0.2)' }}
          >
            {t('cta_title')}
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-xl md:text-2xl text-[#1E1E1E]/80 mb-12"
          >
            {t('cta_subtitle')}
          </motion.p>

          {/* CTA Button with Pulse Effect */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative inline-block"
          >
            {/* Multiple Pulse Rings */}
            <motion.div
              animate={{ scale: [1, 1.8, 1], opacity: [0.4, 0, 0.4] }}
              transition={{ duration: 2.5, repeat: Infinity }}
              className="absolute inset-0 bg-[#1E1E1E] rounded-full blur-xl"
            ></motion.div>
            <motion.div
              animate={{ scale: [1, 1.6, 1], opacity: [0.3, 0, 0.3] }}
              transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
              className="absolute inset-0 bg-[#1E1E1E] rounded-full blur-xl"
            ></motion.div>
            <motion.div
              animate={{ scale: [1, 1.4, 1], opacity: [0.2, 0, 0.2] }}
              transition={{ duration: 2.5, repeat: Infinity, delay: 1 }}
              className="absolute inset-0 bg-[#1E1E1E] rounded-full blur-xl"
            ></motion.div>

            <motion.a
              href="https://wa.me/905423109930?text=Merhaba%20MT%20Makina%2C%20bir%20ürün%20hakkında%20teklif%20almak%20istiyorum."
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                size="lg"
                className="relative bg-[#1E1E1E] text-[#F4CE14] hover:bg-[#1E1E1E]/90 hover:shadow-[0_0_40px_rgba(30,30,30,0.5)] transition-all px-12 py-8 text-xl group"
              >
                {t('cta_button')}
                <ArrowRight
                  size={24}
                  className={`${isRTL ? 'mr-3 rotate-180' : 'ml-3'} group-hover:translate-x-2 transition-transform`}
                />
              </Button>
            </motion.a>
          </motion.div>

          {/* Decorative Line */}
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: '100%' }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.5 }}
            className="h-0.5 bg-gradient-to-r from-transparent via-[#1E1E1E]/40 to-transparent mt-16"
          ></motion.div>
        </motion.div>
      </div>
    </section>
  );
};

import React from 'react';
import { motion } from 'motion/react';
import { useLanguage } from './LanguageContext';
import { Leaf, Recycle, Shield, Zap } from 'lucide-react';

export const IntroSection = () => {
  const { t, isRTL } = useLanguage();

  const features = [
    { icon: Leaf, key: 'eco_friendly' },
    { icon: Recycle, key: 'recycling' },
    { icon: Shield, key: 'durability' },
    { icon: Zap, key: 'performance' },
  ];

  return (
    <section
      className="py-12 md:py-24 bg-gradient-to-b from-[#35373A] to-[#45474B] relative"
      dir={isRTL ? 'rtl' : 'ltr'}
    >
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: 'linear-gradient(rgba(244,206,20,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(244,206,20,0.1) 1px, transparent 1px)',
            backgroundSize: '40px 40px'
          }}
        ></div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 max-w-[1440px] relative z-10">
        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-5xl mx-auto"
        >
          <h2
            className="text-3xl md:text-4xl text-[#F4CE14] mb-8"
            style={{ textShadow: '0 1px 2px rgba(0,0,0,0.3)' }}
          >
            {t('intro_title')}
          </h2>
          <p className="text-base md:text-lg text-[#F5F7F8] leading-relaxed mb-12">
            {t('intro_description')}
          </p>

          {/* Feature Icons */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.key}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="flex flex-col items-center"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-[#F4CE14] to-[#F4CE14]/70 rounded-lg flex items-center justify-center mb-3 hover:shadow-lg transition-shadow">
                    <Icon size={32} className="text-[#1E1E1E]" />
                  </div>
                  <span className="text-sm text-[#F5F7F8]">{t(feature.key)}</span>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

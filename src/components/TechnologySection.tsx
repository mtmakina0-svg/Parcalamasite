import React from 'react';
import { motion } from 'motion/react';
import { useLanguage } from './LanguageContext';
import { Settings, Zap, Cpu, Leaf } from 'lucide-react';

const technologies = [
  {
    id: 'hydraulic',
    icon: Settings,
  },
  {
    id: 'blade',
    icon: Zap,
  },
  {
    id: 'automation',
    icon: Cpu,
  },
  {
    id: 'energy',
    icon: Leaf,
  },
];

export const TechnologySection = () => {
  const { t, isRTL } = useLanguage();

  return (
    <section
      id="technology"
      className="py-32 bg-gradient-to-b from-[#45474B] via-[#3A3C3F] to-[#45474B] text-white relative overflow-hidden"
      dir={isRTL ? 'rtl' : 'ltr'}
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <motion.div
          animate={{ 
            rotate: 360,
            scale: [1, 1.1, 1]
          }}
          transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
          className="absolute top-20 right-20 w-64 h-64 border-4 border-[#F4CE14] rounded-full"
        ></motion.div>
        <motion.div
          animate={{ 
            rotate: -360,
            scale: [1, 1.2, 1]
          }}
          transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
          className="absolute bottom-20 left-20 w-96 h-96 border-4 border-[#F4CE14] rounded-full"
        ></motion.div>
      </div>

      {/* Glow Effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#F4CE14]/10 rounded-full blur-[120px]"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#F4CE14]/10 rounded-full blur-[120px]"></div>

      <div className="container mx-auto px-4 lg:px-8 max-w-[1440px] relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 
            className="text-4xl md:text-5xl lg:text-6xl text-[#F4CE14] mb-6"
            style={{ textShadow: '0 1px 2px rgba(0,0,0,0.3)' }}
          >
            {t('tech_title')}
          </h2>
          <p className="text-lg md:text-xl text-[#F5F7F8] max-w-4xl mx-auto">
            {t('tech_subtitle')}
          </p>
        </motion.div>

        {/* Technology Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {technologies.map((tech, index) => {
            const Icon = tech.icon;
            return (
              <motion.div
                key={tech.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                whileHover={{ y: -10 }}
                className="relative group"
              >
                {/* Card */}
                <div className="bg-gradient-to-br from-[#35373A] to-[#2A2C2F] rounded-xl p-8 border-2 border-[#F4CE14]/20 hover:border-[#F4CE14] transition-all duration-300 h-full hover:shadow-[0_0_30px_rgba(244,206,20,0.3)]">
                  {/* Icon with Glow */}
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    className="w-20 h-20 bg-gradient-to-br from-[#F4CE14] to-[#F4CE14]/70 rounded-xl flex items-center justify-center mb-6 relative group-hover:shadow-[0_0_30px_rgba(244,206,20,0.5)] transition-all"
                  >
                    <Icon size={40} className="text-[#1E1E1E]" />
                  </motion.div>

                  <h3 
                    className="text-2xl text-[#F4CE14] mb-4"
                    style={{ textShadow: '0 1px 2px rgba(0,0,0,0.3)' }}
                  >
                    {t(`tech_${tech.id}`)}
                  </h3>
                  <p className="text-[#F5F7F8] leading-relaxed">
                    {t(`tech_${tech.id}_desc`)}
                  </p>

                  {/* Hover Glow Effect */}
                  <div className="absolute inset-0 rounded-xl bg-[#F4CE14]/0 group-hover:bg-[#F4CE14]/5 transition-all duration-300 pointer-events-none"></div>
                </div>

                {/* SVG Line Draw Animation */}
                <motion.div
                  initial={{ pathLength: 0, opacity: 0 }}
                  whileInView={{ pathLength: 1, opacity: 0.3 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, delay: index * 0.2 }}
                  className="absolute -bottom-4 left-1/2 transform -translate-x-1/2"
                >
                  <svg width="2" height="30" viewBox="0 0 2 30">
                    <motion.line
                      x1="1"
                      y1="0"
                      x2="1"
                      y2="30"
                      stroke="#F4CE14"
                      strokeWidth="2"
                      initial={{ pathLength: 0 }}
                      whileInView={{ pathLength: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: index * 0.2 }}
                    />
                  </svg>
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {/* Animated Gear Decoration */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
          className="absolute top-1/2 right-10 w-40 h-40 opacity-5 pointer-events-none hidden xl:block"
        >
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <circle cx="50" cy="50" r="25" fill="none" stroke="#F4CE14" strokeWidth="3" />
            {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
              <rect
                key={i}
                x="47"
                y="8"
                width="6"
                height="20"
                fill="#F4CE14"
                transform={`rotate(${angle} 50 50)`}
              />
            ))}
          </svg>
        </motion.div>
      </div>
    </section>
  );
};

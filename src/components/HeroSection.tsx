import React from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { MessageCircle } from 'lucide-react';
import { Logo } from './Logo';
import { useLanguage } from './LanguageContext';

export const HeroSection = () => {
  const { t } = useLanguage();
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.3], [1, 0.9]);

  return (
    <motion.section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#45474B]"
      style={{ 
        fontFamily: 'Mulish, sans-serif',
        opacity,
        scale
      }}
    >
      {/* Background Video */}
      <div className="absolute inset-0 w-full h-full">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source
            src="https://res.cloudinary.com/dutqyzxuz/video/upload/An_ultrarealistic_4k_202508261628_so1wo_y1a637.mp4"
            type="video/mp4"
          />
        </video>
        {/* Dark Overlay with gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/70"></div>
        
        {/* Animated gradient overlay for shimmer effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-[#F4CE14]/5 to-transparent"
          animate={{
            x: ['-100%', '100%'],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 lg:px-8 max-w-[1440px] text-center py-20 relative z-10">
        {/* MT Makina Logo - Light variant for dark background */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.8,
            type: 'spring',
            stiffness: 100
          }}
          className="mb-12 flex justify-center"
        >
          <motion.div
            whileHover={{ scale: 1.05, rotate: [0, -2, 2, -2, 0] }}
            transition={{ duration: 0.5 }}
          >
            <Logo
              variant="light"
              alt="MT Makina Logo"
              className="h-40 w-auto object-contain mx-[1px] my-[18px] p-[0px] drop-shadow-2xl"
            />
          </motion.div>
        </motion.div>

        {/* Main Title with shimmer effect */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.8, 
            delay: 0.2,
            type: 'spring',
            stiffness: 80
          }}
          className="relative text-[36px] sm:text-[48px] md:text-[60px] lg:text-[80px] text-white mb-6 mx-auto leading-tight lg:whitespace-nowrap text-center px-4 drop-shadow-2xl"
          style={{ fontWeight: 700, fontFamily: 'Mulish, sans-serif' }}
        >
          {t('page_title_home')}
          {/* Shimmer effect */}
          <motion.span
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
            animate={{
              x: ['-200%', '200%'],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatDelay: 2,
              ease: 'easeInOut',
            }}
            style={{ 
              mixBlendMode: 'overlay',
              pointerEvents: 'none'
            }}
          />
        </motion.h1>

        {/* Yellow Divider with glow */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ 
            duration: 0.7, 
            delay: 0.4,
            type: 'spring',
            stiffness: 100
          }}
          className="relative w-[200px] h-[4px] bg-[#F4CE14] mx-auto mb-10"
        >
          {/* Glow effect */}
          <motion.div
            className="absolute inset-0 bg-[#F4CE14] blur-md"
            animate={{
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        </motion.div>

        {/* Subtitle with stagger effect */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.8, 
            delay: 0.6,
            type: 'spring',
            stiffness: 80
          }}
          className="text-[20px] text-white/90 mb-16 max-w-3xl mx-auto leading-relaxed drop-shadow-lg"
          style={{ fontWeight: 400 }}
        >
          {t('hero_subtitle_systems')}
        </motion.p>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.8, 
            delay: 0.8,
            type: 'spring',
            stiffness: 80
          }}
          className="mt-16 max-w-2xl mx-auto"
        >
          {/* CTA Title */}
          <motion.h2 
            className="text-[32px] text-white mb-6 drop-shadow-lg"
            style={{ fontWeight: 700 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            {t('hero_cta_title')}
          </motion.h2>

          {/* CTA Description */}
          <motion.p 
            className="text-[18px] text-white/90 mb-8 leading-relaxed drop-shadow-lg"
            style={{ fontWeight: 400 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1 }}
          >
            {t('hero_cta_desc')}
            <br />
            {t('hero_cta_desc2')}
          </motion.p>

          {/* WhatsApp CTA Button with enhanced animations */}
          <motion.a
            href="https://wa.me/905423109930"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ 
              delay: 1.2,
              type: 'spring',
              stiffness: 150,
              damping: 10
            }}
            whileHover={{ 
              scale: 1.08,
              boxShadow: '0 20px 40px rgba(244, 206, 20, 0.4)',
            }}
            whileTap={{ scale: 0.95 }}
            className="relative inline-flex items-center gap-3 bg-[#F4CE14] text-[#1E1E1E] px-8 py-4 rounded-full shadow-lg overflow-hidden group"
            style={{ fontWeight: 600, fontSize: '18px' }}
          >
            {/* Button shimmer effect */}
            <motion.span
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
              animate={{
                x: ['-200%', '200%'],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatDelay: 1,
                ease: 'easeInOut',
              }}
            />
            <motion.span
              whileHover={{ rotate: [0, -10, 10, -10, 0] }}
              transition={{ duration: 0.5 }}
              className="relative z-10"
            >
              <MessageCircle size={24} />
            </motion.span>
            <span className="relative z-10">{t('btn_quote')}</span>
          </motion.a>
        </motion.div>
      </div>

      {/* Scroll Down Indicator with enhanced animation */}
      <motion.a
        href="#intro"
        onClick={(e) => {
          e.preventDefault();
          const introSection = document.querySelector('#intro');
          if (introSection) {
            introSection.scrollIntoView({ behavior: 'smooth' });
          }
        }}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 w-[30px] h-[50px] border-2 border-white/70 rounded-[50px] cursor-pointer transition-all z-20 group"
        whileHover={{ 
          borderColor: '#F4CE14',
          scale: 1.1,
          boxShadow: '0 0 20px rgba(244, 206, 20, 0.5)'
        }}
      >
        <motion.span
          className="absolute top-[10px] left-1/2 -translate-x-1/2 w-[6px] h-[6px] rounded-full"
          animate={{
            y: [0, 15, 0],
            opacity: [1, 0.3, 1],
            backgroundColor: ['rgba(255,255,255,0.7)', 'rgba(244,206,20,1)', 'rgba(255,255,255,0.7)']
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
        />
      </motion.a>
    </motion.section>
  );
};
import React from 'react';
import { motion } from 'motion/react';
import { useLanguage } from './LanguageContext';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface YouTubeChannelSectionProps {
  className?: string;
}

export const YouTubeChannelSection: React.FC<YouTubeChannelSectionProps> = ({ className = '' }) => {
  const { t } = useLanguage();

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`max-w-4xl mx-auto ${className}`}
    >
      <div className="bg-gradient-to-br from-[#45474B] to-[#2F3032] rounded-2xl p-8 md:p-10 shadow-2xl border-2 border-[#F4CE14]/20 relative overflow-hidden">
        <div className="flex flex-col md:flex-row items-center gap-8 relative z-10">
          {/* YouTube Logo */}
          <motion.a
            href="https://www.youtube.com/@MTMakinaofficial"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.95 }}
            className="flex-shrink-0"
          >
            <div className="bg-white/10 rounded-2xl p-4 backdrop-blur-sm">
              <ImageWithFallback
                src="https://i.ibb.co/gbw2G6n8/Youtube-logo.png"
                alt="YouTube"
                className="w-28 h-28 md:w-36 md:h-36 object-contain hover:drop-shadow-2xl transition-all duration-300"
                fallbackSrc="https://via.placeholder.com/144x144/F4CE14/1E1E1E?text=YouTube"
              />
            </div>
          </motion.a>

          {/* Content */}
          <div className="flex-1 text-center md:text-left">
            <h3 className="text-[#F4CE14] mb-3 text-2xl md:text-3xl font-bold">
              {t('youtube_channel_title')}
            </h3>
            <p className="text-[#F5F7F8] mb-6 leading-relaxed text-base md:text-lg">
              {t('youtube_channel_description')}
            </p>
            <motion.a
              href="https://www.youtube.com/@MTMakinaofficial"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block"
            >
              <Button className="bg-[#F4CE14] hover:bg-[#F4CE14]/90 text-[#1E1E1E] px-8 py-6 rounded-xl shadow-lg hover:shadow-2xl transition-all text-base md:text-lg font-semibold">
                {t('visit_youtube')}
              </Button>
            </motion.a>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-40 h-40 bg-[#F4CE14]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-40 h-40 bg-[#F4CE14]/10 rounded-full blur-3xl"></div>
        
        {/* Animated gradient overlay */}
        <motion.div 
          className="absolute inset-0 bg-gradient-to-r from-[#F4CE14]/5 to-transparent"
          animate={{ 
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ 
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>
    </motion.div>
  );
};

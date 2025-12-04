import React from 'react';
import { motion, useInView } from 'motion/react';
import { useLanguage } from './LanguageContext';
import { Card } from './ui/card';
import { ArrowRight, Sparkles } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const products = [
  {
    id: 'single-saft',
    titleTR: 'Tek Şaftlı Parçalama Makinesi',
    titleEN: 'Single Shaft Shredder',
    titleRU: 'Одновальный измельчитель',
    titleAR: 'آلة تقطيع أحادية العمود',
    image: 'https://i.ibb.co/gb3Bhj2R/1-1.png',
  },
  {
    id: 'dual-saft',
    titleTR: 'Çift Şaftlı Parçalama Makinesi',
    titleEN: 'Double Shaft Shredder',
    titleRU: 'Двухвальный измельчитель',
    titleAR: 'آلة تقطيع ثنائية العمود',
    image: 'https://i.ibb.co/Y44y4KHc/cs-double-shaft-shredder-20.png',
  },
  {
    id: 'quad-saft',
    titleTR: 'Dört Şaftlı Parçalama Makinesi',
    titleEN: 'Quad Shaft Shredder',
    titleRU: 'Четырехвальный измельчитель',
    titleAR: 'آلة تقطيع رباعية العمود',
    image: 'https://i.ibb.co/SDjBQ9cq/1-9.png',
  },
  {
    id: 'metal',
    titleTR: 'Metal Parçalama Makinesi',
    titleEN: 'Metal Shredder',
    titleRU: 'Металлический измельчит��ль',
    titleAR: 'آلة تقطيع المعادن',
    image: 'https://i.ibb.co/m5xLp46J/1-1.png',
  },
  {
    id: 'mobile',
    titleTR: 'Mobil Kırıcı',
    titleEN: 'Mobile Crusher',
    titleRU: 'Мобильная дробилка',
    titleAR: 'كسارة متنقلة',
    image: 'https://i.ibb.co/Ndfqm2fm/organic-waste-shredder-2.png',
  },
  {
    id: 'pallet',
    titleTR: 'Palet Parçalama Makinesi',
    titleEN: 'Pallet Shredder',
    titleRU: 'Измельчитель поддонов',
    titleAR: 'آلة تقطيع المنصات',
    image: 'https://i.ibb.co/svR9Kdq7/1-7.png',
  },
  {
    id: 'harddisk',
    titleTR: 'Harddisk İmha Makinesi',
    titleEN: 'Hard Disk Destroyer',
    titleRU: 'Уничтожитель жестких дисков',
    titleAR: 'آلة تدمير الأقراص الصلبة',
    image: 'https://i.ibb.co/7JsNwKsS/hard-disk-devre-karti-imha-parcalama-makinesi-1.png',
  },
  {
    id: 'tree-root',
    titleTR: 'Ağaç Kökü Parçalama Makinesi',
    titleEN: 'Tree Root Shredder',
    titleRU: 'Измельчитель корней деревьев',
    titleAR: 'آلة تقطيع جذور الأشجار',
    image: 'https://i.ibb.co/zHTgTRVC/agac-koku-parcalama-makinesi-sabit-1.png',
  },
  {
    id: 'wood',
    titleTR: 'Ağaç Parçalama Öğütme Makinesi',
    titleEN: 'Wood Grinding Machine',
    titleRU: 'Измельчитель древесины',
    titleAR: 'آلة طحن الخشب',
    image: 'https://i.ibb.co/JFxCGnpc/agac-parcalama-ogutme-makinesi-1.png',
  },
  {
    id: 'glass',
    titleTR: 'Cam Şişe Kırma Makinesi',
    titleEN: 'Glass Bottle Crusher',
    titleRU: 'Дробилка стеклянных бутылок',
    titleAR: 'آلة تكسير الزجاج',
    image: 'https://i.ibb.co/4wtQRwBB/1-1.png',
  },
];

interface ProductsSectionProps {
  onProductClick?: (productType: string) => void;
}

export const ProductsSection = ({ onProductClick }: ProductsSectionProps) => {
  const { language, t, isRTL } = useLanguage();
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const getProductTitle = (product: typeof products[0]) => {
    switch (language) {
      case 'en': return product.titleEN;
      case 'ru': return product.titleRU;
      case 'ar': return product.titleAR;
      default: return product.titleTR;
    }
  };

  return (
    <section
      id="products"
      ref={ref}
      className="py-32 bg-[#45474B] relative overflow-hidden"
      dir={isRTL ? 'rtl' : 'ltr'}
    >
      {/* Animated Background Pattern */}
      <motion.div 
        className="absolute inset-0 opacity-5"
        animate={{
          backgroundPosition: ['0% 0%', '100% 100%'],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: 'reverse',
          ease: 'linear',
        }}
      >
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: 'radial-gradient(circle at 20% 50%, #F4CE14 1px, transparent 1px), radial-gradient(circle at 80% 80%, #F4CE14 1px, transparent 1px)',
            backgroundSize: '60px 60px'
          }}
        ></div>
      </motion.div>

      {/* Floating particles */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-[#F4CE14]/20 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 3 + i,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: i * 0.5,
          }}
        />
      ))}

      <div className="container mx-auto px-4 lg:px-8 max-w-[1440px] relative z-10">
        {/* Section Header with enhanced animations */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, type: 'spring', stiffness: 80 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-[#F4CE14]/10 border border-[#F4CE14]/20"
          >
            <Sparkles size={20} className="text-[#F4CE14]" />
            <span className="text-[#F4CE14]">Premium Products</span>
          </motion.div>

          <motion.h2 
            className="relative text-4xl md:text-5xl lg:text-6xl text-[#F4CE14] mb-6"
            style={{ textShadow: '0 1px 2px rgba(0,0,0,0.3)' }}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {t('products_title')}
            {/* Text shimmer effect */}
            <motion.span
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
              animate={{
                x: ['-200%', '200%'],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatDelay: 3,
                ease: 'easeInOut',
              }}
              style={{ 
                mixBlendMode: 'overlay',
                pointerEvents: 'none'
              }}
            />
          </motion.h2>
          
          <motion.p 
            className="text-base md:text-lg text-[#F5F7F8]/90 max-w-4xl mx-auto mb-4 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {t('products_description')}
          </motion.p>
          <motion.p 
            className="text-lg md:text-xl text-[#F5F7F8] max-w-4xl mx-auto"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            {t('products_subtitle')}
          </motion.p>
        </motion.div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" style={{ transform: 'scale(0.8)', transformOrigin: 'center', minHeight: '400px' }}>
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.9 }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1,
                type: 'spring',
                stiffness: 100
              }}
              whileHover={{ 
                y: -15, 
                scale: 1.03,
                transition: { duration: 0.3, type: 'spring', stiffness: 300 }
              }}
              className="group cursor-pointer"
              onClick={() => {
                console.log('🎯 ProductsSection Card clicked - product.id:', product.id);
                onProductClick?.(product.id);
              }}
            >
              <Card className="overflow-hidden border-none shadow-lg hover:shadow-2xl transition-all duration-300 h-full min-h-[350px] bg-[#F5F7F8] relative">
                {/* Background Image - Full Coverage */}
                <div className="absolute inset-0 overflow-hidden">
                  {product.image ? (
                    <motion.div
                      whileHover={{ scale: 1.15 }}
                      transition={{ duration: 0.6, ease: 'easeOut' }}
                      className="w-full h-full"
                    >
                      <ImageWithFallback
                        src={product.image} 
                        alt={getProductTitle(product)}
                        className="w-full h-full object-cover"
                        loading="lazy"
                        fallbackSrc="https://images.unsplash.com/photo-1718512932005-197f55f2e186?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080"
                      />
                    </motion.div>
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-[#F4CE14] to-[#F4CE14]/70"></div>
                  )}
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/30 to-black/95 group-hover:from-black/10 group-hover:via-black/40 group-hover:to-black/95 transition-all duration-300"></div>
                  
                  {/* Hover shimmer effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-[#F4CE14]/0 to-transparent"
                    initial={{ x: '-100%', opacity: 0 }}
                    whileHover={{ 
                      x: '100%',
                      opacity: [0, 0.3, 0],
                    }}
                    transition={{ duration: 0.8 }}
                  />
                </div>

                {/* Content Container */}
                <div className="relative z-10 h-full flex flex-col">
                  {/* Spacer to push content down */}
                  <div className="flex-1"></div>
                  
                  {/* Text Content - Bottom */}
                  <motion.div 
                    className="p-6 text-center bg-gradient-to-b from-transparent to-black/40"
                    whileHover={{ y: -5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <h3 className="text-xl text-[#F5F7F8] mb-4 drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)] group-hover:text-[#F4CE14] transition-colors duration-300">
                      {getProductTitle(product)}
                    </h3>
                  </motion.div>

                  {/* Yellow Footer Band with glow effect */}
                  <motion.div 
                    className="relative bg-[#F4CE14] p-4 flex items-center justify-center overflow-hidden"
                    whileHover={{ backgroundColor: '#FFD700' }}
                  >
                    {/* Animated glow */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/30 to-white/0"
                      animate={{
                        x: ['-100%', '100%'],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        repeatDelay: 1,
                      }}
                    />
                    <span className="text-[#1E1E1E] relative z-10 font-medium">
                      {t('btn_details')}
                    </span>
                    <motion.div
                      whileHover={{ x: isRTL ? -5 : 5 }}
                      transition={{ duration: 0.3 }}
                      className="relative z-10"
                    >
                      <ArrowRight
                        size={18}
                        className={`${isRTL ? 'mr-2 rotate-180' : 'ml-2'} text-[#1E1E1E]`}
                      />
                    </motion.div>
                  </motion.div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
import React from 'react';
import { motion } from 'motion/react';
import { useLanguage } from './LanguageContext';
import { Card } from './ui/card';
import { ArrowRight } from 'lucide-react';

const products = [
  {
    id: 'single_shaft',
    titleTR: 'Tek Şaftlı Parçalama Makinesi',
    titleEN: 'Single Shaft Shredder',
    titleRU: 'Одновальный измельчитель',
    titleAR: 'آلة تقطيع أحادية العمود',
    image: 'https://i.ibb.co/gb3Bhj2R/1-1.png',
  },
  {
    id: 'double_shaft',
    titleTR: 'Çift Şaftlı Parçalama Makinesi',
    titleEN: 'Double Shaft Shredder',
    titleRU: 'Двухвальный измельчитель',
    titleAR: 'آلة تقطيع ثنائية العمود',
    image: 'https://i.ibb.co/Y44y4KHc/cs-double-shaft-shredder-20.png',
  },
  {
    id: 'quad_shaft',
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
    titleRU: 'Металлический измельчитель',
    titleAR: 'آلة تقطيع المعادن',
    image: 'https://i.ibb.co/m5xLp46J/1-1.png',
  },
  {
    id: 'granulator',
    titleTR: 'Granülatör Makinesi',
    titleEN: 'Granulator Machine',
    titleRU: 'Гранулятор',
    titleAR: 'آلة التحبيب',
    image: 'https://i.ibb.co/5hxMZJ2g/plastic-crusher-machine-4.png',
  },
  {
    id: 'baler',
    titleTR: 'Balyalama Makinesi',
    titleEN: 'Baler Machine',
    titleRU: 'Пресс для тюкования',
    titleAR: 'آلة التبيل',
    image: 'https://i.ibb.co/svR9Kdq7/1-7.png',
  },
  {
    id: 'conveyor',
    titleTR: 'Konveyör Sistemi',
    titleEN: 'Conveyor System',
    titleRU: 'Конвейерная система',
    titleAR: 'نظام النقل',
    image: 'https://i.ibb.co/4wtQRwBB/1-1.png',
  },
  {
    id: 'separator',
    titleTR: 'Ayırıcı Makine',
    titleEN: 'Separator Machine',
    titleRU: 'Сепаратор',
    titleAR: 'آلة الفصل',
    image: 'https://i.ibb.co/mCWyPnS6/tibbi-atik-sterilizasyon-tesisi-7.png',
  },
];

interface ProductsSectionProps {
  onProductClick?: (productType: string) => void;
}

export const ProductsSection = ({ onProductClick }: ProductsSectionProps) => {
  const { language, t, isRTL } = useLanguage();

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
      className="py-32 bg-[#45474B] relative"
      dir={isRTL ? 'rtl' : 'ltr'}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: 'radial-gradient(circle at 20% 50%, #F4CE14 1px, transparent 1px), radial-gradient(circle at 80% 80%, #F4CE14 1px, transparent 1px)',
            backgroundSize: '60px 60px'
          }}
        ></div>
      </div>

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
            {t('products_title')}
          </h2>
          <p className="text-base md:text-lg text-[#F5F7F8]/90 max-w-4xl mx-auto mb-4 leading-relaxed">
            {t('products_description')}
          </p>
          <p className="text-lg md:text-xl text-[#F5F7F8] max-w-4xl mx-auto">
            {t('products_subtitle')}
          </p>
        </motion.div>

        {/* Products Grid - 80% scale */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" style={{ transform: 'scale(0.8)', transformOrigin: 'center', minHeight: '400px' }}>
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group cursor-pointer"
              onClick={() => onProductClick?.(product.id.replace(/_/g, '-'))}
            >
              <Card className="overflow-hidden border-none shadow-lg hover:shadow-2xl transition-all duration-300 h-full min-h-[350px] bg-[#F5F7F8] relative">
                {/* Background Image - Full Coverage */}
                <div className="absolute inset-0">
                  {product.image ? (
                    <img 
                      src={product.image} 
                      alt={getProductTitle(product)}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      loading="lazy"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-[#F4CE14] to-[#F4CE14]/70"></div>
                  )}
                  
                  {/* Gradient Overlay - Fade from transparent to dark at bottom */}
                  <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/30 to-black/95"></div>
                </div>

                {/* Content Container */}
                <div className="relative z-10 h-full flex flex-col">
                  {/* Spacer to push content down */}
                  <div className="flex-1"></div>
                  
                  {/* Text Content - Bottom */}
                  <div className="p-6 text-center bg-gradient-to-b from-transparent to-black/40">
                    <h3 className="text-xl text-[#F5F7F8] mb-4 drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
                      {getProductTitle(product)}
                    </h3>
                  </div>

                  {/* Yellow Footer Band */}
                  <div className="bg-[#F4CE14] p-4 flex items-center justify-center group-hover:bg-[#F4CE14]/90 transition-colors">
                    <span className="text-[#1E1E1E]">
                      {t('btn_details')}
                    </span>
                    <ArrowRight
                      size={18}
                      className={`${isRTL ? 'mr-2 rotate-180' : 'ml-2'} text-[#1E1E1E] group-hover:translate-x-1 transition-transform`}
                    />
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

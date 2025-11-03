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
  },
  {
    id: 'double_shaft',
    titleTR: 'Çift Şaftlı Parçalama Makinesi',
    titleEN: 'Double Shaft Shredder',
    titleRU: 'Двухвальный измельчитель',
    titleAR: 'آلة تقطيع ثنائية العمود',
  },
  {
    id: 'quad_shaft',
    titleTR: 'Dört Şaftlı Parçalama Makinesi',
    titleEN: 'Quad Shaft Shredder',
    titleRU: 'Четырехвальный измельчитель',
    titleAR: 'آلة تقطيع رباعية العمود',
  },
  {
    id: 'metal',
    titleTR: 'Metal Parçalama Makinesi',
    titleEN: 'Metal Shredder',
    titleRU: 'Металлический измельчитель',
    titleAR: 'آلة تقطيع المعادن',
  },
  {
    id: 'pallet',
    titleTR: 'Palet Parçalama Makinesi',
    titleEN: 'Pallet Shredder',
    titleRU: 'Измельчитель поддонов',
    titleAR: 'آلة تقطيع المنصات',
  },
  {
    id: 'plastic',
    titleTR: 'Plastik Kırma Makinesi',
    titleEN: 'Plastic Crusher',
    titleRU: 'Пластиковая дробилка',
    titleAR: 'آلة تكسير البلاستيك',
  },
  {
    id: 'glass',
    titleTR: 'Cam Şişe Kırma Makinesi',
    titleEN: 'Glass Bottle Crusher',
    titleRU: 'Дробилка стеклянных бутылок',
    titleAR: 'آلة تكسير الزجاج',
  },
  {
    id: 'medical',
    titleTR: 'Tıbbi Atık Sterilizasyon ve Parçalama',
    titleEN: 'Medical Waste Sterilization & Shredding',
    titleRU: 'Стерилизация и измельчение медицинских отходов',
    titleAR: 'تعقيم وتقطيع النفايات الطبية',
  },
  {
    id: 'organic',
    titleTR: 'Organik Atık Parçalama',
    titleEN: 'Organic Waste Shredder',
    titleRU: 'Измельчитель органических отходов',
    titleAR: 'آلة تقطيع النفايات العضوية',
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" style={{ transform: 'scale(0.8)', transformOrigin: 'center' }}>
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
              <Card className="overflow-hidden border-none shadow-lg hover:shadow-2xl transition-all duration-300 h-full bg-[#F5F7F8]">
                {/* Card Content */}
                <div className="p-8 h-64 flex flex-col justify-center items-center text-center bg-[#F5F7F8]">
                  {/* Placeholder for Product Image */}
                  <div className="w-24 h-24 bg-gradient-to-br from-[#F4CE14] to-[#F4CE14]/70 rounded-lg mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <div className="text-3xl text-[#1E1E1E]">●</div>
                  </div>
                  <h3 className="text-xl text-[#1E1E1E] group-hover:text-black transition-colors">
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
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

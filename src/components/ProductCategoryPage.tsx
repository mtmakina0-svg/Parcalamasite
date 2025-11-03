import React from 'react';
import { motion } from 'motion/react';
import { useLanguage } from './LanguageContext';
import { ArrowLeft, ChevronRight, Settings, Zap, Shield, Wrench } from 'lucide-react';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { getModelImages, getFallbackImage } from '../utils/imageConfig';

interface ProductCategoryPageProps {
  productType: string;
  onBackToMain: () => void;
  onModelSelect: (modelName: string) => void;
}

// Available models for each product type
const availableModels: { [key: string]: string[] } = {
  'single-shaft': ['TSH-60', 'TSH-80', 'TSH-100', 'TSH-120', 'TSH-150'],
  'dual-shaft': ['CS-20', 'CS-40', 'CS-60', 'CS-80', 'CS-100', 'CS-120', 'CS-150', 'CS-180', 'CS-200'],
  'quad-shaft': ['QS-80', 'QS-100', 'QS-120', 'QS-150'],
  'metal': ['MP-100', 'MP-150'],
  'granulator': ['GR-400', 'GR-600', 'GR-800'],
  'baler': ['BP-60', 'BP-100'],
  'conveyor': ['CV-3M', 'CV-5M', 'CV-10M'],
  'separator': ['MS-1', 'MS-2']
};

// Model specifications summary for cards
interface ModelCardInfo {
  capacity: string;
  power: string;
  rotorLength: string;
}

const modelCardInfo: { [key: string]: { [model: string]: ModelCardInfo } } = {
  'single-shaft': {
    'TSH-60': { capacity: '500-800 kg/saat', power: '22 kW', rotorLength: '600 mm' },
    'TSH-80': { capacity: '800-1200 kg/saat', power: '37 kW', rotorLength: '800 mm' },
    'TSH-100': { capacity: '1200-1800 kg/saat', power: '55 kW', rotorLength: '1000 mm' },
    'TSH-120': { capacity: '1800-2500 kg/saat', power: '75 kW', rotorLength: '1200 mm' },
    'TSH-150': { capacity: '2500-3500 kg/saat', power: '90 kW', rotorLength: '1500 mm' }
  }
};

export const ProductCategoryPage: React.FC<ProductCategoryPageProps> = ({
  productType,
  onBackToMain,
  onModelSelect
}) => {
  const { t, isRTL } = useLanguage();

  const models = availableModels[productType] || [];
  const fallbackImage = getFallbackImage(productType);

  // Scroll to top when component mounts
  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [productType]);

  return (
    <div className="min-h-screen bg-[#F5F7F8]" dir={isRTL ? 'rtl' : 'ltr'}>
      {/* Back Button */}
      <div className="bg-[#45474B] py-4">
        <div className="container mx-auto px-4 lg:px-8 max-w-[1440px]">
          <motion.button
            onClick={onBackToMain}
            whileHover={{ x: isRTL ? 5 : -5 }}
            className="flex items-center gap-2 text-[#F4CE14] hover:text-[#F5F7F8] transition-colors"
          >
            <ArrowLeft size={20} className={isRTL ? 'rotate-180' : ''} />
            <span>{t('nav_home')}</span>
          </motion.button>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-b from-[#45474B] to-[#F5F7F8]">
        <div className="container mx-auto px-4 lg:px-8 max-w-[1440px]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="text-[#F4CE14] mb-6 text-5xl font-bold">
              {t('single_shaft_main_title')}
            </h1>
            <p className="text-[#F5F7F8] text-xl max-w-4xl mx-auto leading-relaxed">
              {t('single_shaft_subtitle')}
            </p>
          </motion.div>

          {/* Main Hero Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-5xl mx-auto"
          >
            <ImageWithFallback
              src={getModelImages(productType, models[0] || 'TSH-60').main}
              alt={t('single_shaft_main_title')}
              className="w-full rounded-2xl shadow-2xl"
              fallbackSrc={fallbackImage}
            />
          </motion.div>
        </div>
      </section>

      {/* General Description */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8 max-w-[1440px]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-[#45474B] mb-8 text-4xl font-bold text-center">
              {t('about_our_machines')}
            </h2>
            <div className="prose prose-lg max-w-none space-y-6">
              <p className="text-[#45474B] leading-relaxed text-lg">
                {t('single_shaft_description_1')}
              </p>
              <p className="text-[#45474B] leading-relaxed text-lg">
                {t('single_shaft_description_2')}
              </p>
              <p className="text-[#45474B] leading-relaxed text-lg">
                {t('single_shaft_description_3')}
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Key Features Grid */}
      <section className="py-20 bg-[#F5F7F8]">
        <div className="container mx-auto px-4 lg:px-8 max-w-[1440px]">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center text-[#45474B] mb-16 text-4xl font-bold"
          >
            {t('key_features')}
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Feature 1 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all group"
            >
              <div className="w-16 h-16 bg-[#F4CE14]/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-[#F4CE14] transition-colors">
                <Settings size={32} className="text-[#F4CE14] group-hover:text-[#1E1E1E]" />
              </div>
              <h3 className="text-[#45474B] mb-4 text-xl font-bold">{t('single_shaft_advantage_1_title')}</h3>
              <p className="text-[#45474B] leading-relaxed">{t('single_shaft_advantage_1_desc')}</p>
            </motion.div>

            {/* Feature 2 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all group"
            >
              <div className="w-16 h-16 bg-[#F4CE14]/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-[#F4CE14] transition-colors">
                <Zap size={32} className="text-[#F4CE14] group-hover:text-[#1E1E1E]" />
              </div>
              <h3 className="text-[#45474B] mb-4 text-xl font-bold">{t('single_shaft_advantage_2_title')}</h3>
              <p className="text-[#45474B] leading-relaxed">{t('single_shaft_advantage_2_desc')}</p>
            </motion.div>

            {/* Feature 3 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all group"
            >
              <div className="w-16 h-16 bg-[#F4CE14]/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-[#F4CE14] transition-colors">
                <Shield size={32} className="text-[#F4CE14] group-hover:text-[#1E1E1E]" />
              </div>
              <h3 className="text-[#45474B] mb-4 text-xl font-bold">{t('single_shaft_advantage_3_title')}</h3>
              <p className="text-[#45474B] leading-relaxed">{t('single_shaft_advantage_3_desc')}</p>
            </motion.div>

            {/* Feature 4 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all group"
            >
              <div className="w-16 h-16 bg-[#F4CE14]/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-[#F4CE14] transition-colors">
                <Wrench size={32} className="text-[#F4CE14] group-hover:text-[#1E1E1E]" />
              </div>
              <h3 className="text-[#45474B] mb-4 text-xl font-bold">{t('single_shaft_advantage_4_title')}</h3>
              <p className="text-[#45474B] leading-relaxed">{t('single_shaft_advantage_4_desc')}</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Models Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8 max-w-[1440px]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-[#45474B] mb-4 text-4xl font-bold">{t('our_models')}</h2>
            <p className="text-[#45474B] text-xl max-w-3xl mx-auto">
              {t('select_model_description')}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {models.map((model, index) => {
              const images = getModelImages(productType, model);
              const info = modelCardInfo[productType]?.[model];

              return (
                <motion.div
                  key={model}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group"
                >
                  <div className="bg-[#F5F7F8] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
                    {/* Model Image */}
                    <div className="relative overflow-hidden h-64">
                      <ImageWithFallback
                        src={images.main}
                        alt={model}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        fallbackSrc={fallbackImage}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#1E1E1E]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>

                    {/* Model Info */}
                    <div className="p-6">
                      <h3 className="text-[#45474B] mb-4 text-2xl font-bold">{model}</h3>
                      
                      {info && (
                        <div className="space-y-2 mb-6">
                          <div className="flex justify-between items-center text-sm">
                            <span className="text-[#45474B]/70">Kapasite:</span>
                            <span className="text-[#45474B] font-semibold">{info.capacity}</span>
                          </div>
                          <div className="flex justify-between items-center text-sm">
                            <span className="text-[#45474B]/70">Motor Gücü:</span>
                            <span className="text-[#45474B] font-semibold">{info.power}</span>
                          </div>
                          <div className="flex justify-between items-center text-sm">
                            <span className="text-[#45474B]/70">Rotor Uzunluğu:</span>
                            <span className="text-[#45474B] font-semibold">{info.rotorLength}</span>
                          </div>
                        </div>
                      )}

                      <Button
                        onClick={() => onModelSelect(model)}
                        className="w-full bg-[#F4CE14] hover:bg-[#F4CE14]/90 text-[#1E1E1E] group/btn"
                      >
                        <span>Detaylı İncele</span>
                        <ChevronRight className="ml-2 group-hover/btn:translate-x-1 transition-transform" size={20} />
                      </Button>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#45474B]">
        <div className="container mx-auto px-4 lg:px-8 max-w-[1440px]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-[#F4CE14] mb-6 text-4xl font-bold">
              {t('need_help_choosing')}
            </h2>
            <p className="text-[#F5F7F8] text-xl mb-8 max-w-2xl mx-auto">
              {t('contact_us_for_consultation')}
            </p>
            <Button
              className="bg-[#F4CE14] hover:bg-[#F4CE14]/90 text-[#1E1E1E] px-8 py-6 text-lg"
              size="lg"
            >
              {t('contact_us')}
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

import React from 'react';
import { motion } from 'motion/react';
import { useLanguage } from './LanguageContext';
import { Settings, RotateCcw, Volume2, FileDown, Play, ArrowLeft, ChevronRight } from 'lucide-react';
import { Button } from './ui/button';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from './ui/accordion';

interface ProductDetailPageProps {
  productType: string;
  modelName?: string; // Yeni: Model adı (TSH-60, CS-80, vb.)
  onBackToMain: () => void;
  onECatalogClick: () => void;
  onProductDetailClick?: (productType: string, modelName?: string) => void;
}

// Helper function to get product folder name in Turkish
const getProductFolderName = (productType: string): string => {
  const folderMap: { [key: string]: string } = {
    'single-shaft': 'tek şaftlı parçalama makinesi',
    'dual-shaft': 'çift şaftlı parçalama makinesi',
    'quad-shaft': 'dört şaftlı parçalama makinesi',
    'metal': 'metal parçalama makinesi',
    'granulator': 'granülatör',
    'baler': 'balya presi',
    'conveyor': 'konveyör sistemi',
    'separator': 'ayırıcı sistem'
  };
  return folderMap[productType] || 'tek şaftlı parçalama makinesi';
};

// Helper function to get image paths for a specific model
const getModelImages = (productType: string, modelName: string) => {
  const folderName = getProductFolderName(productType);
  const basePath = `/${folderName}/${modelName}`;
  
  return {
    main: `${basePath}/main.png`,
    detail1: `${basePath}/detail-1.png`,
    detail2: `${basePath}/detail-2.png`,
    detail3: `${basePath}/detail-3.png`
  };
};

// Model technical specifications
interface ModelSpecs {
  motorPower: string;
  rotorLength: string;
  rotorDiameter: string;
  bladeCount: string;
  weight: string;
  capacity: string;
  screenSize?: string;
}

const modelSpecifications: { [key: string]: { [modelName: string]: ModelSpecs } } = {
  'single-shaft': {
    'TSH-60': {
      motorPower: '22 kW',
      rotorLength: '600 mm',
      rotorDiameter: '400 mm',
      bladeCount: '24 adet',
      weight: '2500 kg',
      capacity: '500-800 kg/saat'
    },
    'TSH-80': {
      motorPower: '37 kW',
      rotorLength: '800 mm',
      rotorDiameter: '450 mm',
      bladeCount: '32 adet',
      weight: '3200 kg',
      capacity: '800-1200 kg/saat'
    },
    'TSH-100': {
      motorPower: '55 kW',
      rotorLength: '1000 mm',
      rotorDiameter: '500 mm',
      bladeCount: '40 adet',
      weight: '4000 kg',
      capacity: '1200-1800 kg/saat'
    },
    'TSH-120': {
      motorPower: '75 kW',
      rotorLength: '1200 mm',
      rotorDiameter: '550 mm',
      bladeCount: '48 adet',
      weight: '5000 kg',
      capacity: '1800-2500 kg/saat'
    },
    'TSH-150': {
      motorPower: '90 kW',
      rotorLength: '1500 mm',
      rotorDiameter: '600 mm',
      bladeCount: '60 adet',
      weight: '6500 kg',
      capacity: '2500-3500 kg/saat'
    }
  },
  'dual-shaft': {
    'CS-20': {
      motorPower: '2 x 7.5 kW',
      rotorLength: '400 mm',
      rotorDiameter: '200 mm',
      bladeCount: '32 adet',
      weight: '1800 kg',
      capacity: '300-500 kg/saat',
      screenSize: '30-80 mm'
    },
    'CS-40': {
      motorPower: '2 x 11 kW',
      rotorLength: '600 mm',
      rotorDiameter: '250 mm',
      bladeCount: '48 adet',
      weight: '2500 kg',
      capacity: '500-800 kg/saat',
      screenSize: '30-100 mm'
    },
    'CS-60': {
      motorPower: '2 x 15 kW',
      rotorLength: '800 mm',
      rotorDiameter: '300 mm',
      bladeCount: '64 adet',
      weight: '3500 kg',
      capacity: '800-1500 kg/saat',
      screenSize: '40-120 mm'
    },
    'CS-80': {
      motorPower: '2 x 22 kW',
      rotorLength: '1000 mm',
      rotorDiameter: '350 mm',
      bladeCount: '80 adet',
      weight: '4800 kg',
      capacity: '1500-2500 kg/saat',
      screenSize: '50-150 mm'
    },
    'CS-100': {
      motorPower: '2 x 30 kW',
      rotorLength: '1200 mm',
      rotorDiameter: '400 mm',
      bladeCount: '96 adet',
      weight: '6000 kg',
      capacity: '2500-4000 kg/saat',
      screenSize: '60-180 mm'
    },
    'CS-120': {
      motorPower: '2 x 37 kW',
      rotorLength: '1400 mm',
      rotorDiameter: '450 mm',
      bladeCount: '112 adet',
      weight: '7500 kg',
      capacity: '4000-6000 kg/saat',
      screenSize: '80-200 mm'
    },
    'CS-150': {
      motorPower: '2 x 45 kW',
      rotorLength: '1600 mm',
      rotorDiameter: '500 mm',
      bladeCount: '128 adet',
      weight: '9000 kg',
      capacity: '6000-8000 kg/saat',
      screenSize: '100-250 mm'
    },
    'CS-180': {
      motorPower: '2 x 55 kW',
      rotorLength: '1800 mm',
      rotorDiameter: '550 mm',
      bladeCount: '144 adet',
      weight: '11000 kg',
      capacity: '8000-12000 kg/saat',
      screenSize: '120-300 mm'
    },
    'CS-200': {
      motorPower: '2 x 75 kW',
      rotorLength: '2000 mm',
      rotorDiameter: '600 mm',
      bladeCount: '160 adet',
      weight: '14000 kg',
      capacity: '12000-18000 kg/saat',
      screenSize: '150-350 mm'
    }
  },
  'quad-shaft': {
    'QS-80': {
      motorPower: '4 x 15 kW',
      rotorLength: '800 mm',
      rotorDiameter: '250 mm',
      bladeCount: '128 adet',
      weight: '5500 kg',
      capacity: '1000-2000 kg/saat',
      screenSize: '20-60 mm'
    },
    'QS-100': {
      motorPower: '4 x 18.5 kW',
      rotorLength: '1000 mm',
      rotorDiameter: '300 mm',
      bladeCount: '160 adet',
      weight: '7000 kg',
      capacity: '2000-3500 kg/saat',
      screenSize: '25-80 mm'
    },
    'QS-120': {
      motorPower: '4 x 22 kW',
      rotorLength: '1200 mm',
      rotorDiameter: '350 mm',
      bladeCount: '192 adet',
      weight: '8800 kg',
      capacity: '3500-5000 kg/saat',
      screenSize: '30-100 mm'
    },
    'QS-150': {
      motorPower: '4 x 30 kW',
      rotorLength: '1500 mm',
      rotorDiameter: '400 mm',
      bladeCount: '240 adet',
      weight: '11500 kg',
      capacity: '5000-8000 kg/saat',
      screenSize: '40-120 mm'
    }
  }
};

// Available models for each product type
const availableModels: { [key: string]: string[] } = {
  'single-shaft': ['TSH-60', 'TSH-80', 'TSH-100', 'TSH-120', 'TSH-150'],
  'dual-shaft': ['CS-20', 'CS-40', 'CS-60', 'CS-80', 'CS-100', 'CS-120', 'CS-150', 'CS-180', 'CS-200'],
  'quad-shaft': ['QS-80', 'QS-100', 'QS-120', 'QS-150']
};

export const ProductDetailPage = ({ 
  productType, 
  modelName = 'TSH-60', // Default model
  onBackToMain, 
  onECatalogClick, 
  onProductDetailClick 
}: ProductDetailPageProps) => {
  const { t, isRTL } = useLanguage();

  // Get dynamic image paths based on model
  const images = getModelImages(productType, modelName);

  // Get current model specs
  const currentSpecs = modelSpecifications[productType]?.[modelName];
  
  // Get available models for current product type
  const models = availableModels[productType] || [];

  // Handle model change
  const handleModelChange = (newModel: string) => {
    if (onProductDetailClick) {
      onProductDetailClick(productType, newModel);
    }
  };

  // Scroll to top when component mounts
  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [productType, modelName]);

  // Single Shaft Product Data
  if (productType === 'single-shaft') {
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

        {/* Model Selector */}
        {models.length > 0 && (
          <section className="bg-[#45474B] py-6 border-t border-[#F4CE14]/20">
            <div className="container mx-auto px-4 lg:px-8 max-w-[1440px]">
              <div className="flex flex-wrap items-center gap-3">
                <span className="text-[#F4CE14] text-sm uppercase tracking-wide">
                  {t('models')}:
                </span>
                {models.map((model) => (
                  <motion.button
                    key={model}
                    onClick={() => handleModelChange(model)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`px-4 py-2 rounded-lg transition-all ${
                      model === modelName
                        ? 'bg-[#F4CE14] text-[#1E1E1E]'
                        : 'bg-[#2F3032] text-[#F5F7F8] hover:bg-[#F4CE14]/20 hover:text-[#F4CE14]'
                    }`}
                  >
                    {model}
                  </motion.button>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Hero Section with Main Image */}
        <section className="relative py-16 bg-gradient-to-b from-[#45474B] to-[#F5F7F8]">
          <div className="container mx-auto px-4 lg:px-8 max-w-[1440px]">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h1 className="text-[#F4CE14] mb-4">{t('single_shaft_main_title')} - {modelName}</h1>
              <p className="text-[#F5F7F8] text-xl max-w-3xl mx-auto">
                {t('single_shaft_subtitle')}
              </p>
            </motion.div>

            {/* Main Product Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="max-w-5xl mx-auto"
            >
              <img
                src={images.main}
                alt={`${t('single_shaft_main_title')} - ${modelName}`}
                className="w-full rounded-2xl shadow-2xl"
              />
            </motion.div>
          </div>
        </section>

        {/* Product Description */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 lg:px-8 max-w-[1440px]">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="prose prose-lg max-w-none"
            >
              <p className="text-[#45474B] leading-relaxed mb-6">
                {t('single_shaft_description_1')}
              </p>
              <p className="text-[#45474B] leading-relaxed mb-6">
                {t('single_shaft_description_2')}
              </p>
              <p className="text-[#45474B] leading-relaxed">
                {t('single_shaft_description_3')}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Advantages Section */}
        <section className="py-20 bg-[#F4CE14] relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-96 h-96 bg-[#45474B] rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#45474B] rounded-full blur-3xl"></div>
          </div>
          
          <div className="container mx-auto px-4 lg:px-8 max-w-[1440px] relative z-10">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center text-[#1E1E1E] mb-16"
            >
              {t('single_shaft_advantages_title')}
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Advantage 1 */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-white rounded-2xl p-8 shadow-xl"
              >
                <div className="w-16 h-16 bg-[#45474B] rounded-xl flex items-center justify-center mb-6">
                  <Settings size={32} className="text-[#F4CE14]" />
                </div>
                <h3 className="text-[#1E1E1E] mb-4">{t('single_shaft_adv_1_title')}</h3>
                <p className="text-[#45474B]">{t('single_shaft_adv_1_desc')}</p>
              </motion.div>

              {/* Advantage 2 */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-white rounded-2xl p-8 shadow-xl"
              >
                <div className="w-16 h-16 bg-[#45474B] rounded-xl flex items-center justify-center mb-6">
                  <RotateCcw size={32} className="text-[#F4CE14]" />
                </div>
                <h3 className="text-[#1E1E1E] mb-4">{t('single_shaft_adv_2_title')}</h3>
                <p className="text-[#45474B]">{t('single_shaft_adv_2_desc')}</p>
              </motion.div>

              {/* Advantage 3 */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-white rounded-2xl p-8 shadow-xl"
              >
                <div className="w-16 h-16 bg-[#45474B] rounded-xl flex items-center justify-center mb-6">
                  <Volume2 size={32} className="text-[#F4CE14]" />
                </div>
                <h3 className="text-[#1E1E1E] mb-4">{t('single_shaft_adv_3_title')}</h3>
                <p className="text-[#45474B]">{t('single_shaft_adv_3_desc')}</p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Performance Section with 3 Images */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 lg:px-8 max-w-[1440px]">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center text-[#45474B] mb-16"
            >
              {t('single_shaft_performance_title')}
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Performance Image 1 */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="group"
              >
                <div className="overflow-hidden rounded-2xl shadow-lg mb-4">
                  <motion.img
                    src={images.main}
                    alt={t('single_shaft_perf_1')}
                    className="w-full h-64 object-cover"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
                <p className="text-center text-[#45474B]">{t('single_shaft_perf_1')}</p>
              </motion.div>

              {/* Performance Image 2 */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="group"
              >
                <div className="overflow-hidden rounded-2xl shadow-lg mb-4">
                  <motion.img
                    src={images.detail1}
                    alt={t('single_shaft_perf_2')}
                    className="w-full h-64 object-cover"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
                <p className="text-center text-[#45474B]">{t('single_shaft_perf_2')}</p>
              </motion.div>

              {/* Performance Image 3 */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="group"
              >
                <div className="overflow-hidden rounded-2xl shadow-lg mb-4">
                  <motion.img
                    src={images.detail2}
                    alt={t('single_shaft_perf_3')}
                    className="w-full h-64 object-cover"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
                <p className="text-center text-[#45474B]">{t('single_shaft_perf_3')}</p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Technical Specifications */}
        <section className="py-20 bg-[#F5F7F8]">
          <div className="container mx-auto px-4 lg:px-8 max-w-[1440px]">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center text-[#45474B] mb-12"
            >
              {t('single_shaft_tech_specs_title')}
            </motion.h2>

            {currentSpecs && (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden"
              >
                <table className="w-full">
                  <tbody>
                    <tr className="border-b border-[#F5F7F8]">
                      <td className="px-8 py-4 text-[#45474B] bg-[#F4CE14]/10">Model</td>
                      <td className="px-8 py-4 text-[#1E1E1E]">{modelName}</td>
                    </tr>
                    <tr className="border-b border-[#F5F7F8]">
                      <td className="px-8 py-4 text-[#45474B] bg-[#F4CE14]/10">Motor Gücü</td>
                      <td className="px-8 py-4 text-[#1E1E1E]">{currentSpecs.motorPower}</td>
                    </tr>
                    <tr className="border-b border-[#F5F7F8]">
                      <td className="px-8 py-4 text-[#45474B] bg-[#F4CE14]/10">Rotor Uzunluğu</td>
                      <td className="px-8 py-4 text-[#1E1E1E]">{currentSpecs.rotorLength}</td>
                    </tr>
                    <tr className="border-b border-[#F5F7F8]">
                      <td className="px-8 py-4 text-[#45474B] bg-[#F4CE14]/10">Rotor Çapı</td>
                      <td className="px-8 py-4 text-[#1E1E1E]">{currentSpecs.rotorDiameter}</td>
                    </tr>
                    <tr className="border-b border-[#F5F7F8]">
                      <td className="px-8 py-4 text-[#45474B] bg-[#F4CE14]/10">Bıçak Sayısı</td>
                      <td className="px-8 py-4 text-[#1E1E1E]">{currentSpecs.bladeCount}</td>
                    </tr>
                    <tr className="border-b border-[#F5F7F8]">
                      <td className="px-8 py-4 text-[#45474B] bg-[#F4CE14]/10">Ağırlık</td>
                      <td className="px-8 py-4 text-[#1E1E1E]">{currentSpecs.weight}</td>
                    </tr>
                    <tr>
                      <td className="px-8 py-4 text-[#45474B] bg-[#F4CE14]/10">Kapasite</td>
                      <td className="px-8 py-4 text-[#1E1E1E]">{currentSpecs.capacity}</td>
                    </tr>
                  </tbody>
                </table>
              </motion.div>
            )}

            {/* E-Catalog Button */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mt-12"
            >
              <Button
                onClick={onECatalogClick}
                className="bg-[#F4CE14] hover:bg-[#F4CE14]/90 text-[#1E1E1E] px-8 py-6 rounded-2xl text-lg shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                <FileDown size={24} className={`${isRTL ? 'ml-2' : 'mr-2'}`} />
                {t('single_shaft_ecatalog_btn')}
              </Button>
            </motion.div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 lg:px-8 max-w-[1440px]">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center text-[#45474B] mb-12"
            >
              {t('single_shaft_faq_title')}
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto"
            >
              <Accordion type="single" collapsible className="space-y-4">
                <AccordionItem value="item-1" className="bg-[#F5F7F8] rounded-xl px-6 border-none">
                  <AccordionTrigger className="text-[#45474B] hover:text-[#F4CE14]">
                    {t('single_shaft_faq_q1')}
                  </AccordionTrigger>
                  <AccordionContent className="text-[#45474B] leading-relaxed">
                    {t('single_shaft_faq_a1')}
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2" className="bg-[#F5F7F8] rounded-xl px-6 border-none">
                  <AccordionTrigger className="text-[#45474B] hover:text-[#F4CE14]">
                    {t('single_shaft_faq_q2')}
                  </AccordionTrigger>
                  <AccordionContent className="text-[#45474B] leading-relaxed">
                    {t('single_shaft_faq_a2')}
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3" className="bg-[#F5F7F8] rounded-xl px-6 border-none">
                  <AccordionTrigger className="text-[#45474B] hover:text-[#F4CE14]">
                    {t('single_shaft_faq_q3')}
                  </AccordionTrigger>
                  <AccordionContent className="text-[#45474B] leading-relaxed">
                    {t('single_shaft_faq_a3')}
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4" className="bg-[#F5F7F8] rounded-xl px-6 border-none">
                  <AccordionTrigger className="text-[#45474B] hover:text-[#F4CE14]">
                    {t('single_shaft_faq_q4')}
                  </AccordionTrigger>
                  <AccordionContent className="text-[#45474B] leading-relaxed">
                    {t('single_shaft_faq_a4')}
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-5" className="bg-[#F5F7F8] rounded-xl px-6 border-none">
                  <AccordionTrigger className="text-[#45474B] hover:text-[#F4CE14]">
                    {t('single_shaft_faq_q5')}
                  </AccordionTrigger>
                  <AccordionContent className="text-[#45474B] leading-relaxed">
                    {t('single_shaft_faq_a5')}
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </motion.div>
          </div>
        </section>

        {/* Video Section */}
        <section className="py-20 bg-[#F5F7F8]">
          <div className="container mx-auto px-4 lg:px-8 max-w-[1440px]">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center text-[#45474B] mb-12"
            >
              {t('single_shaft_video_title')}
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-5xl mx-auto"
            >
              <div className="relative bg-[#45474B] rounded-2xl overflow-hidden shadow-2xl group cursor-pointer" style={{ height: '400px' }}>
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="w-20 h-20 bg-[#F4CE14] rounded-full flex items-center justify-center"
                  >
                    <Play size={32} className="text-[#1E1E1E] ml-1" />
                  </motion.div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#1E1E1E]/50 to-transparent"></div>
              </div>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="text-center mt-6"
              >
                <Button
                  className="bg-[#F4CE14] hover:bg-[#F4CE14]/90 text-[#1E1E1E] px-6 py-3 rounded-xl"
                >
                  {t('single_shaft_watch_video')}
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Similar Products */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 lg:px-8 max-w-[1440px]">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center text-[#45474B] mb-12"
            >
              {t('single_shaft_similar_products')}
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Similar Product 1 */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                whileHover={{ y: -10 }}
                onClick={() => onProductDetailClick?.('dual-shaft')}
                className="bg-[#F5F7F8] rounded-2xl overflow-hidden shadow-lg cursor-pointer group"
              >
                <div className="h-48 bg-[#45474B] flex items-center justify-center">
                  <Settings size={64} className="text-[#F4CE14]" />
                </div>
                <div className="p-6">
                  <h3 className="text-[#45474B] mb-2 group-hover:text-[#F4CE14] transition-colors">
                    {t('product_dual_shaft')}
                  </h3>
                  <div className="flex items-center text-[#F4CE14] group-hover:gap-2 transition-all">
                    <span className="text-sm">{t('btn_view_details')}</span>
                    <ChevronRight size={16} className={isRTL ? 'rotate-180' : ''} />
                  </div>
                </div>
              </motion.div>

              {/* Similar Product 2 */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                whileHover={{ y: -10 }}
                onClick={() => onProductDetailClick?.('quad-shaft')}
                className="bg-[#F5F7F8] rounded-2xl overflow-hidden shadow-lg cursor-pointer group"
              >
                <div className="h-48 bg-[#45474B] flex items-center justify-center">
                  <Settings size={64} className="text-[#F4CE14]" />
                </div>
                <div className="p-6">
                  <h3 className="text-[#45474B] mb-2 group-hover:text-[#F4CE14] transition-colors">
                    {t('product_quad_shaft')}
                  </h3>
                  <div className="flex items-center text-[#F4CE14] group-hover:gap-2 transition-all">
                    <span className="text-sm">{t('btn_view_details')}</span>
                    <ChevronRight size={16} className={isRTL ? 'rotate-180' : ''} />
                  </div>
                </div>
              </motion.div>

              {/* Similar Product 3 */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                whileHover={{ y: -10 }}
                onClick={() => onProductDetailClick?.('metal')}
                className="bg-[#F5F7F8] rounded-2xl overflow-hidden shadow-lg cursor-pointer group"
              >
                <div className="h-48 bg-[#45474B] flex items-center justify-center">
                  <Settings size={64} className="text-[#F4CE14]" />
                </div>
                <div className="p-6">
                  <h3 className="text-[#45474B] mb-2 group-hover:text-[#F4CE14] transition-colors">
                    {t('product_metal')}
                  </h3>
                  <div className="flex items-center text-[#F4CE14] group-hover:gap-2 transition-all">
                    <span className="text-sm">{t('btn_view_details')}</span>
                    <ChevronRight size={16} className={isRTL ? 'rotate-180' : ''} />
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    );
  }

  // Dual Shaft Product Page
  if (productType === 'dual-shaft') {
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

        {/* Model Selector */}
        {models.length > 0 && (
          <section className="bg-[#45474B] py-6 border-t border-[#F4CE14]/20">
            <div className="container mx-auto px-4 lg:px-8 max-w-[1440px]">
              <div className="flex flex-wrap items-center gap-3">
                <span className="text-[#F4CE14] text-sm uppercase tracking-wide">
                  {t('models')}:
                </span>
                {models.map((model) => (
                  <motion.button
                    key={model}
                    onClick={() => handleModelChange(model)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`px-4 py-2 rounded-lg transition-all ${
                      model === modelName
                        ? 'bg-[#F4CE14] text-[#1E1E1E]'
                        : 'bg-[#2F3032] text-[#F5F7F8] hover:bg-[#F4CE14]/20 hover:text-[#F4CE14]'
                    }`}
                  >
                    {model}
                  </motion.button>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Hero Section with Main Image */}
        <section className="relative py-16 bg-gradient-to-b from-[#45474B] to-[#F5F7F8]">
          <div className="container mx-auto px-4 lg:px-8 max-w-[1440px]">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h1 className="text-[#F4CE14] mb-4">{t('dual_shaft_main_title')} - {modelName}</h1>
              <p className="text-[#F5F7F8] text-xl max-w-3xl mx-auto">
                {t('dual_shaft_subtitle')}
              </p>
            </motion.div>

            {/* Main Product Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="max-w-5xl mx-auto"
            >
              <img
                src={images.main}
                alt={`${t('dual_shaft_main_title')} - ${modelName}`}
                className="w-full rounded-2xl shadow-2xl"
              />
            </motion.div>
          </div>
        </section>

        {/* Product Description */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 lg:px-8 max-w-[1440px]">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="prose prose-lg max-w-none"
            >
              <p className="text-[#45474B] leading-relaxed mb-6">
                {t('dual_shaft_description_1')}
              </p>
              <p className="text-[#45474B] leading-relaxed mb-6">
                {t('dual_shaft_description_2')}
              </p>
              <p className="text-[#45474B] leading-relaxed mb-6">
                {t('dual_shaft_description_3')}
              </p>
              <p className="text-[#45474B] leading-relaxed mb-6">
                {t('dual_shaft_description_4')}
              </p>
              <p className="text-[#45474B] leading-relaxed">
                {t('dual_shaft_description_5')}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Advantages Section */}
        <section className="py-20 bg-[#F4CE14] relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-96 h-96 bg-[#45474B] rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#45474B] rounded-full blur-3xl"></div>
          </div>
          
          <div className="container mx-auto px-4 lg:px-8 max-w-[1440px] relative z-10">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center text-[#1E1E1E] mb-16"
            >
              {t('dual_shaft_advantages_title')}
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Advantage 1 */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-white rounded-2xl p-8 shadow-xl"
              >
                <div className="w-16 h-16 bg-[#45474B] rounded-xl flex items-center justify-center mb-6">
                  <Settings size={32} className="text-[#F4CE14]" />
                </div>
                <h3 className="text-[#1E1E1E] mb-4">{t('dual_shaft_adv_1_title')}</h3>
                <p className="text-[#45474B]">{t('dual_shaft_adv_1_desc')}</p>
              </motion.div>

              {/* Advantage 2 */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-white rounded-2xl p-8 shadow-xl"
              >
                <div className="w-16 h-16 bg-[#45474B] rounded-xl flex items-center justify-center mb-6">
                  <RotateCcw size={32} className="text-[#F4CE14]" />
                </div>
                <h3 className="text-[#1E1E1E] mb-4">{t('dual_shaft_adv_2_title')}</h3>
                <p className="text-[#45474B]">{t('dual_shaft_adv_2_desc')}</p>
              </motion.div>

              {/* Advantage 3 */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-white rounded-2xl p-8 shadow-xl"
              >
                <div className="w-16 h-16 bg-[#45474B] rounded-xl flex items-center justify-center mb-6">
                  <Volume2 size={32} className="text-[#F4CE14]" />
                </div>
                <h3 className="text-[#1E1E1E] mb-4">{t('dual_shaft_adv_3_title')}</h3>
                <p className="text-[#45474B]">{t('dual_shaft_adv_3_desc')}</p>
              </motion.div>

              {/* Advantage 4 */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-white rounded-2xl p-8 shadow-xl"
              >
                <div className="w-16 h-16 bg-[#45474B] rounded-xl flex items-center justify-center mb-6">
                  <Settings size={32} className="text-[#F4CE14]" />
                </div>
                <h3 className="text-[#1E1E1E] mb-4">{t('dual_shaft_adv_4_title')}</h3>
                <p className="text-[#45474B]">{t('dual_shaft_adv_4_desc')}</p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Performance Section with 3 Images */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 lg:px-8 max-w-[1440px]">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center text-[#45474B] mb-16"
            >
              {t('dual_shaft_performance_title')}
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Performance Image 1 */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="group"
              >
                <div className="overflow-hidden rounded-2xl shadow-lg mb-4">
                  <motion.img
                    src={images.main}
                    alt={t('dual_shaft_perf_1')}
                    className="w-full h-64 object-cover"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
                <p className="text-center text-[#45474B]">{t('dual_shaft_perf_1')}</p>
              </motion.div>

              {/* Performance Image 2 */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="group"
              >
                <div className="overflow-hidden rounded-2xl shadow-lg mb-4">
                  <motion.img
                    src={images.detail1}
                    alt={t('dual_shaft_perf_2')}
                    className="w-full h-64 object-cover"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
                <p className="text-center text-[#45474B]">{t('dual_shaft_perf_2')}</p>
              </motion.div>

              {/* Performance Image 3 */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="group"
              >
                <div className="overflow-hidden rounded-2xl shadow-lg mb-4">
                  <motion.img
                    src={images.detail2}
                    alt={t('dual_shaft_perf_3')}
                    className="w-full h-64 object-cover"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
                <p className="text-center text-[#45474B]">{t('dual_shaft_perf_3')}</p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Technical Specifications - CS Series Table */}
        <section className="py-20 bg-[#F5F7F8]">
          <div className="container mx-auto px-4 lg:px-8 max-w-[1440px]">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center text-[#45474B] mb-12"
            >
              {t('dual_shaft_tech_specs_title')}
            </motion.h2>

            {currentSpecs && (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden"
              >
                <table className="w-full">
                  <tbody>
                    <tr className="border-b border-[#F5F7F8]">
                      <td className="px-8 py-4 text-[#45474B] bg-[#F4CE14]/10">Model</td>
                      <td className="px-8 py-4 text-[#1E1E1E]">{modelName}</td>
                    </tr>
                    <tr className="border-b border-[#F5F7F8]">
                      <td className="px-8 py-4 text-[#45474B] bg-[#F4CE14]/10">Motor Gücü</td>
                      <td className="px-8 py-4 text-[#1E1E1E]">{currentSpecs.motorPower}</td>
                    </tr>
                    <tr className="border-b border-[#F5F7F8]">
                      <td className="px-8 py-4 text-[#45474B] bg-[#F4CE14]/10">Rotor Uzunluğu</td>
                      <td className="px-8 py-4 text-[#1E1E1E]">{currentSpecs.rotorLength}</td>
                    </tr>
                    <tr className="border-b border-[#F5F7F8]">
                      <td className="px-8 py-4 text-[#45474B] bg-[#F4CE14]/10">Rotor Çapı</td>
                      <td className="px-8 py-4 text-[#1E1E1E]">{currentSpecs.rotorDiameter}</td>
                    </tr>
                    <tr className="border-b border-[#F5F7F8]">
                      <td className="px-8 py-4 text-[#45474B] bg-[#F4CE14]/10">Bıçak Sayısı</td>
                      <td className="px-8 py-4 text-[#1E1E1E]">{currentSpecs.bladeCount}</td>
                    </tr>
                    <tr className="border-b border-[#F5F7F8]">
                      <td className="px-8 py-4 text-[#45474B] bg-[#F4CE14]/10">Ağırlık</td>
                      <td className="px-8 py-4 text-[#1E1E1E]">{currentSpecs.weight}</td>
                    </tr>
                    {currentSpecs.screenSize && (
                      <tr className="border-b border-[#F5F7F8]">
                        <td className="px-8 py-4 text-[#45474B] bg-[#F4CE14]/10">Elek Boyutu</td>
                        <td className="px-8 py-4 text-[#1E1E1E]">{currentSpecs.screenSize}</td>
                      </tr>
                    )}
                    <tr>
                      <td className="px-8 py-4 text-[#45474B] bg-[#F4CE14]/10">Kapasite</td>
                      <td className="px-8 py-4 text-[#1E1E1E]">{currentSpecs.capacity}</td>
                    </tr>
                  </tbody>
                </table>
              </motion.div>
            )}

            {/* E-Catalog Button */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mt-12"
            >
              <Button
                onClick={onECatalogClick}
                className="bg-[#F4CE14] hover:bg-[#F4CE14]/90 text-[#1E1E1E] px-8 py-6 rounded-2xl text-lg shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                <FileDown size={24} className={`${isRTL ? 'ml-2' : 'mr-2'}`} />
                {t('dual_shaft_ecatalog_btn')}
              </Button>
            </motion.div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 lg:px-8 max-w-[1440px]">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center text-[#45474B] mb-12"
            >
              {t('dual_shaft_faq_title')}
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto"
            >
              <Accordion type="single" collapsible className="space-y-4">
                <AccordionItem value="item-1" className="bg-[#F5F7F8] rounded-xl px-6 border-none">
                  <AccordionTrigger className="text-[#45474B] hover:text-[#F4CE14]">
                    {t('dual_shaft_faq_q1')}
                  </AccordionTrigger>
                  <AccordionContent className="text-[#45474B] leading-relaxed">
                    {t('dual_shaft_faq_a1')}
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2" className="bg-[#F5F7F8] rounded-xl px-6 border-none">
                  <AccordionTrigger className="text-[#45474B] hover:text-[#F4CE14]">
                    {t('dual_shaft_faq_q2')}
                  </AccordionTrigger>
                  <AccordionContent className="text-[#45474B] leading-relaxed">
                    {t('dual_shaft_faq_a2')}
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3" className="bg-[#F5F7F8] rounded-xl px-6 border-none">
                  <AccordionTrigger className="text-[#45474B] hover:text-[#F4CE14]">
                    {t('dual_shaft_faq_q3')}
                  </AccordionTrigger>
                  <AccordionContent className="text-[#45474B] leading-relaxed">
                    {t('dual_shaft_faq_a3')}
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4" className="bg-[#F5F7F8] rounded-xl px-6 border-none">
                  <AccordionTrigger className="text-[#45474B] hover:text-[#F4CE14]">
                    {t('dual_shaft_faq_q4')}
                  </AccordionTrigger>
                  <AccordionContent className="text-[#45474B] leading-relaxed">
                    {t('dual_shaft_faq_a4')}
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-5" className="bg-[#F5F7F8] rounded-xl px-6 border-none">
                  <AccordionTrigger className="text-[#45474B] hover:text-[#F4CE14]">
                    {t('dual_shaft_faq_q5')}
                  </AccordionTrigger>
                  <AccordionContent className="text-[#45474B] leading-relaxed">
                    {t('dual_shaft_faq_a5')}
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </motion.div>
          </div>
        </section>

        {/* Video Section */}
        <section className="py-20 bg-[#F5F7F8]">
          <div className="container mx-auto px-4 lg:px-8 max-w-[1440px]">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center text-[#45474B] mb-12"
            >
              {t('dual_shaft_video_title')}
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-5xl mx-auto"
            >
              <div className="relative bg-[#45474B] rounded-2xl overflow-hidden shadow-2xl group cursor-pointer aspect-video">
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="w-20 h-20 bg-[#F4CE14] rounded-full flex items-center justify-center"
                  >
                    <Play size={32} className="text-[#1E1E1E] ml-1" />
                  </motion.div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#1E1E1E]/50 to-transparent"></div>
              </div>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="text-center mt-6"
              >
                <Button
                  className="bg-[#F4CE14] hover:bg-[#F4CE14]/90 text-[#1E1E1E] px-6 py-3 rounded-xl"
                >
                  {t('dual_shaft_watch_video')}
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Similar Products */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 lg:px-8 max-w-[1440px]">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center text-[#45474B] mb-12"
            >
              {t('dual_shaft_similar_products')}
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Similar Product 1 - Single Shaft */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                whileHover={{ y: -10 }}
                onClick={() => onProductDetailClick?.('single-shaft')}
                className="bg-[#F5F7F8] rounded-2xl overflow-hidden shadow-lg cursor-pointer group"
              >
                <div className="h-48 bg-[#45474B] flex items-center justify-center">
                  <Settings size={64} className="text-[#F4CE14]" />
                </div>
                <div className="p-6">
                  <h3 className="text-[#45474B] mb-2 group-hover:text-[#F4CE14] transition-colors">
                    {t('product_single_shaft')}
                  </h3>
                  <div className="flex items-center text-[#F4CE14] group-hover:gap-2 transition-all">
                    <span className="text-sm">{t('btn_view_details')}</span>
                    <ChevronRight size={16} className={isRTL ? 'rotate-180' : ''} />
                  </div>
                </div>
              </motion.div>

              {/* Similar Product 2 - Quad Shaft */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                whileHover={{ y: -10 }}
                onClick={() => onProductDetailClick?.('quad-shaft')}
                className="bg-[#F5F7F8] rounded-2xl overflow-hidden shadow-lg cursor-pointer group"
              >
                <div className="h-48 bg-[#45474B] flex items-center justify-center">
                  <Settings size={64} className="text-[#F4CE14]" />
                </div>
                <div className="p-6">
                  <h3 className="text-[#45474B] mb-2 group-hover:text-[#F4CE14] transition-colors">
                    {t('product_quad_shaft')}
                  </h3>
                  <div className="flex items-center text-[#F4CE14] group-hover:gap-2 transition-all">
                    <span className="text-sm">{t('btn_view_details')}</span>
                    <ChevronRight size={16} className={isRTL ? 'rotate-180' : ''} />
                  </div>
                </div>
              </motion.div>

              {/* Similar Product 3 - Metal */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                whileHover={{ y: -10 }}
                onClick={() => onProductDetailClick?.('metal')}
                className="bg-[#F5F7F8] rounded-2xl overflow-hidden shadow-lg cursor-pointer group"
              >
                <div className="h-48 bg-[#45474B] flex items-center justify-center">
                  <Settings size={64} className="text-[#F4CE14]" />
                </div>
                <div className="p-6">
                  <h3 className="text-[#45474B] mb-2 group-hover:text-[#F4CE14] transition-colors">
                    {t('product_metal')}
                  </h3>
                  <div className="flex items-center text-[#F4CE14] group-hover:gap-2 transition-all">
                    <span className="text-sm">{t('btn_view_details')}</span>
                    <ChevronRight size={16} className={isRTL ? 'rotate-180' : ''} />
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    );
  }

  // Default fallback for other product types
  return (
    <div className="min-h-screen bg-[#F5F7F8] flex items-center justify-center">
      <div className="text-center">
        <h2 className="text-[#45474B] mb-4">Ürün detay sayfası hazırlanıyor...</h2>
        <Button onClick={onBackToMain} className="bg-[#F4CE14] hover:bg-[#F4CE14]/90 text-[#1E1E1E]">
          Ana Sayfaya Dön
        </Button>
      </div>
    </div>
  );
};

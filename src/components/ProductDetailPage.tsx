import React from 'react';
import { motion } from 'motion/react';
import { useLanguage } from './LanguageContext';
import { Settings, RotateCcw, Volume2, FileDown, Play, ArrowLeft, ChevronRight, Zap, Wind } from 'lucide-react';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from './ui/accordion';
import { getModelImages, getFallbackImage } from '../utils/imageConfig';
import { getModelDescription, hasModelDescription } from '../utils/modelDescriptions';
import { YouTubeChannelSection } from './YouTubeChannelSection';
import { SimilarProductsSection } from './SimilarProductsSection';

interface ProductDetailPageProps {
  productType: string;
  modelName?: string; // Yeni: Model adı (TSH-60, CS-80, vb.)
  onBackToMain: () => void;
  onECatalogClick: () => void;
  onProductDetailClick?: (productType: string, modelName?: string) => void;
}


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
      motorPower: '15–30 kW',
      rotorLength: '600 mm',
      rotorDiameter: '600 x 1100 mm',
      bladeCount: '24 adet',
      weight: '2500 kg',
      capacity: '500-800 kg/saat'
    },
    'TSH-80': {
      motorPower: '22–45 kW',
      rotorLength: '800 mm',
      rotorDiameter: '800 x 1100 mm',
      bladeCount: '32 adet',
      weight: '3200 kg',
      capacity: '800-1200 kg/saat'
    },
    'TSH-100': {
      motorPower: '30–75 kW',
      rotorLength: '1000 mm',
      rotorDiameter: '1000 x 1300 mm',
      bladeCount: '40 adet',
      weight: '4000 kg',
      capacity: '1200-1800 kg/saat'
    },
    'TSH-130': {
      motorPower: '45–110 kW',
      rotorLength: '1300 mm',
      rotorDiameter: '1300 x 1600 mm',
      bladeCount: '48 adet',
      weight: '5000 kg',
      capacity: '1800-2500 kg/saat'
    },
    'TSH-160': {
      motorPower: '55–132 kW (2x)',
      rotorLength: '1600 mm',
      rotorDiameter: '1600 x 1800 mm',
      bladeCount: '64 adet',
      weight: '7500 kg',
      capacity: '3500-4500 kg/saat'
    },
    'TSH-200': {
      motorPower: '75–160 kW (2x)',
      rotorLength: '2000 mm',
      rotorDiameter: '2000 x 2300 mm',
      bladeCount: '80 adet',
      weight: '9000 kg',
      capacity: '4500-6000 kg/saat'
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
    'DS-80': {
      motorPower: '11–22 kW (4x)',
      rotorLength: '800 mm',
      rotorDiameter: '800 x 800 mm',
      bladeCount: '128 adet',
      weight: '5500 kg',
      capacity: '1000-2000 kg/saat',
      screenSize: '20-60 mm'
    },
    'DS-100': {
      motorPower: '22–45 kW (4x)',
      rotorLength: '1000 mm',
      rotorDiameter: '1000 x 1000 mm',
      bladeCount: '160 adet',
      weight: '7500 kg',
      capacity: '2000-3500 kg/saat',
      screenSize: '25-80 mm'
    },
    'DS-150': {
      motorPower: '45–132 kW (4x)',
      rotorLength: '1500 mm',
      rotorDiameter: '1500 x 1500 mm',
      bladeCount: '240 adet',
      weight: '11000 kg',
      capacity: '5000-8000 kg/saat',
      screenSize: '40-120 mm'
    },
    'DS-200': {
      motorPower: '75–160 kW (4x)',
      rotorLength: '2000 mm',
      rotorDiameter: '2000 x 2000 mm',
      bladeCount: '320 adet',
      weight: '15000 kg',
      capacity: '8000-12000 kg/saat',
      screenSize: '50-150 mm'
    }
  },
  'metal': {
    'RDM-100': {
      'Parçalama Alanı': '1000 x 1000 mm',
      'Rotor Boyu': '1000 mm',
      'Motor Gücü': '45–75 kW (2-4X)'
    },
    'RDM-150': {
      'Parçalama Alanı': '1500 x 1500 mm',
      'Rotor Boyu': '1500 mm',
      'Motor Gücü': '55–90 kW (2-4X)'
    },
    'RDM-180': {
      'Parçalama Alanı': '1800 x 1500 mm',
      'Rotor Boyu': '1800 mm',
      'Motor Gücü': '75–90 kW (2-4X)'
    },
    'RDM-200': {
      'Parçalama Alanı': '2000 x 1800 mm',
      'Rotor Boyu': '2000 mm',
      'Motor Gücü': '90–132 kW (2-4X)'
    }
  },
  'harddisk': {
    'DATABER-S': {
      motorPower: '3–11 kW',
      rotorLength: '150 x 150 mm',
      rotorDiameter: 'Tekli Parçalayıcı',
      bladeCount: 'Sertleştirilmiş Çelik',
      weight: 'Kompakt',
      capacity: 'Tek Aşamalı İmha'
    },
    'DATABER-D': {
      motorPower: '11–22 kW x 2',
      rotorLength: '400 x 400 mm',
      rotorDiameter: '2 Parçalayıcı',
      bladeCount: 'Sertleştirilmiş Çelik',
      weight: 'Endüstriyel',
      capacity: 'İki Aşamalı İmha'
    },
    'DATABER-T': {
      motorPower: '11–45 kW x 2',
      rotorLength: '400 x 400 mm',
      rotorDiameter: '3 Parçalayıcı',
      bladeCount: 'Sertleştirilmiş Çelik',
      weight: 'Endüstriyel',
      capacity: 'Üç Aşamalı İmha - Toz Boyutu'
    }
  }
};

// Available models for each product type
const availableModels: { [key: string]: string[] } = {
  'single-shaft': ['TSH-60', 'TSH-80', 'TSH-100', 'TSH-130', 'TSH-160', 'TSH-200'],
  'dual-shaft': ['CS-20', 'CS-40', 'CS-60', 'CS-80', 'CS-100', 'CS-120', 'CS-150', 'CS-180', 'CS-200'],
  'quad-shaft': ['DS-80', 'DS-100', 'DS-150', 'DS-200'],
  'metal': ['RDM-100', 'RDM-150', 'RDM-180', 'RDM-200'],
  'harddisk': ['DATABER-S', 'DATABER-D', 'DATABER-T']
};

export const ProductDetailPage = ({ 
  productType, 
  modelName = 'TSH-60', // Default model
  onBackToMain, 
  onECatalogClick, 
  onProductDetailClick 
}: ProductDetailPageProps) => {
  const { t, isRTL } = useLanguage();

  // Get dynamic image paths based on model from GitHub
  const images = getModelImages(productType, modelName);
  
  // Get fallback image for this product type
  const fallbackImage = getFallbackImage(productType);
  
  // Debug: Log image paths (only in development)
  React.useEffect(() => {
    if (process.env.NODE_ENV === 'development') {
      console.log('🖼️ Image paths for', modelName, ':', images);
      console.log('📍 Main image URL:', images.main);
      console.log('🔄 Fallback URL:', fallbackImage);
    }
  }, [modelName]);

  // Get current model specs
  const currentSpecs = modelSpecifications[productType]?.[modelName];
  
  // Get available models for current product type
  const models = availableModels[productType] || [];
  
  // Get model-specific description
  const modelDesc = getModelDescription(productType, modelName);
  const hasCustomDesc = hasModelDescription(productType, modelName);

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
        <section className="relative py-20 bg-gradient-to-b from-[#45474B] to-[#F5F7F8]">
          <div className="container mx-auto px-4 lg:px-8 max-w-[1440px]">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h1 className="text-[#F4CE14] mb-6 text-2xl md:text-3xl lg:text-4xl font-bold" style={{ lineHeight: '1.2' }}>
                {modelName} {t('single_shaft_main_title')}
              </h1>
              <p className="text-[#F5F7F8] text-xl max-w-3xl mx-auto">
                {hasCustomDesc && modelDesc ? modelDesc.intro : t('single_shaft_subtitle')}
              </p>
            </motion.div>

            {/* Main Product Image - Enlarged */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="max-w-6xl mx-auto"
            >
              <ImageWithFallback
                src={images.main}
                alt={`${modelName} ${t('single_shaft_main_title')}`}
                className="w-full rounded-2xl shadow-2xl"
                fallbackSrc={fallbackImage}
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
              {hasCustomDesc && modelDesc ? (
                <>
                  <p className="text-[#45474B] leading-relaxed mb-6 text-lg" style={{ lineHeight: '1.8' }}>
                    {modelDesc.paragraph1}
                  </p>
                  <p className="text-[#45474B] leading-relaxed mb-6 text-lg" style={{ lineHeight: '1.8' }}>
                    {modelDesc.paragraph2}
                  </p>
                  <p className="text-[#45474B] leading-relaxed text-lg" style={{ lineHeight: '1.8' }}>
                    {modelDesc.paragraph3}
                  </p>
                </>
              ) : (
                <>
                  <p className="text-[#45474B] leading-relaxed mb-6">
                    {t('single_shaft_description_1')}
                  </p>
                  <p className="text-[#45474B] leading-relaxed mb-6">
                    {t('single_shaft_description_2')}
                  </p>
                  <p className="text-[#45474B] leading-relaxed">
                    {t('single_shaft_description_3')}
                  </p>
                </>
              )}
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
              className="text-center text-[#1E1E1E] mb-16 text-4xl font-bold"
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
              className="text-center text-[#45474B] mb-16 text-4xl font-bold"
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
                <motion.div 
                  className="overflow-hidden rounded-2xl shadow-lg mb-4"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <ImageWithFallback
                    src={images.main}
                    alt={t('single_shaft_perf_1')}
                    className="w-full h-64 object-cover"
                    fallbackSrc="https://images.unsplash.com/photo-1718512932005-197f55f2e186?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwc2hyZWRkZXIlMjBtYWNoaW5lfGVufDF8fHx8MTc2MjE2NzUyOHww&ixlib=rb-4.1.0&q=80&w=1080"
                  />
                </motion.div>
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
                <motion.div 
                  className="overflow-hidden rounded-2xl shadow-lg mb-4"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <ImageWithFallback
                    src={images.detail1}
                    alt={t('single_shaft_perf_2')}
                    className="w-full h-64 object-cover"
                    fallbackSrc={fallbackImage}
                  />
                </motion.div>
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
                <motion.div 
                  className="overflow-hidden rounded-2xl shadow-lg mb-4"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <ImageWithFallback
                    src={images.detail2}
                    alt={t('single_shaft_perf_3')}
                    className="w-full h-64 object-cover"
                    fallbackSrc={fallbackImage}
                  />
                </motion.div>
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
              className="text-center text-[#45474B] mb-12 text-4xl font-bold"
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
                      <td className="px-8 py-4 text-[#1E1E1E] bg-[#F4CE14] font-semibold">Model</td>
                      <td className="px-8 py-4 text-[#1E1E1E]">{modelName}</td>
                    </tr>
                    <tr className="border-b border-[#F5F7F8]">
                      <td className="px-8 py-4 text-[#1E1E1E] bg-[#F4CE14] font-semibold">Motor Gücü</td>
                      <td className="px-8 py-4 text-[#1E1E1E]">{currentSpecs.motorPower}</td>
                    </tr>
                    <tr className="border-b border-[#F5F7F8]">
                      <td className="px-8 py-4 text-[#1E1E1E] bg-[#F4CE14] font-semibold">Rotor Uzunluğu</td>
                      <td className="px-8 py-4 text-[#1E1E1E]">{currentSpecs.rotorLength}</td>
                    </tr>
                    <tr className="border-b border-[#F5F7F8]">
                      <td className="px-8 py-4 text-[#1E1E1E] bg-[#F4CE14] font-semibold">Parçalama Alanı</td>
                      <td className="px-8 py-4 text-[#1E1E1E]">{currentSpecs.rotorDiameter}</td>
                    </tr>
                    <tr className="border-b border-[#F5F7F8]">
                      <td className="px-8 py-4 text-[#1E1E1E] bg-[#F4CE14] font-semibold">Bıçak Sayısı</td>
                      <td className="px-8 py-4 text-[#1E1E1E]">{currentSpecs.bladeCount}</td>
                    </tr>
                    <tr className="border-b border-[#F5F7F8]">
                      <td className="px-8 py-4 text-[#1E1E1E] bg-[#F4CE14] font-semibold">Ağırlık</td>
                      <td className="px-8 py-4 text-[#1E1E1E]">{currentSpecs.weight}</td>
                    </tr>
                    <tr>
                      <td className="px-8 py-4 text-[#1E1E1E] bg-[#F4CE14] font-semibold">Kapasite</td>
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

            {/* Optional Features */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto mt-16"
            >
              <h3 className="text-center text-[#45474B] mb-8 text-2xl font-bold">
                Opsiyonel Özellikler
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="bg-white rounded-xl p-6 shadow-lg border-2 border-[#F4CE14]/20 hover:border-[#F4CE14] transition-all"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-[#F4CE14] rounded-lg flex items-center justify-center">
                      <Settings size={24} className="text-[#1E1E1E]" />
                    </div>
                    <p className="text-[#1E1E1E]">Farklı Besleme ve Çıkış Seçenekleri</p>
                  </div>
                </motion.div>
                
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="bg-white rounded-xl p-6 shadow-lg border-2 border-[#F4CE14]/20 hover:border-[#F4CE14] transition-all"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-[#F4CE14] rounded-lg flex items-center justify-center">
                      <RotateCcw size={24} className="text-[#1E1E1E]" />
                    </div>
                    <p className="text-[#1E1E1E]">Farklı Rotor Tasarımları</p>
                  </div>
                </motion.div>
                
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="bg-white rounded-xl p-6 shadow-lg border-2 border-[#F4CE14]/20 hover:border-[#F4CE14] transition-all"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-[#F4CE14] rounded-lg flex items-center justify-center">
                      <Zap size={24} className="text-[#1E1E1E]" />
                    </div>
                    <p className="text-[#1E1E1E]">Çift Motorlu Tasarım</p>
                  </div>
                </motion.div>
                
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="bg-white rounded-xl p-6 shadow-lg border-2 border-[#F4CE14]/20 hover:border-[#F4CE14] transition-all"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-[#F4CE14] rounded-lg flex items-center justify-center">
                      <Wind size={24} className="text-[#1E1E1E]" />
                    </div>
                    <p className="text-[#1E1E1E]">Rotor Soğutma Sistemi</p>
                  </div>
                </motion.div>
              </div>
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

            {/* YouTube Channel Section */}
            <YouTubeChannelSection className="mt-16" />
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

            <SimilarProductsSection 
              currentProductType="single-shaft"
              onProductClick={onProductDetailClick}
            />
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
        <section className="relative py-20 bg-gradient-to-b from-[#45474B] to-[#F5F7F8]">
          <div className="container mx-auto px-4 lg:px-8 max-w-[1440px]">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h1 className="text-[#F4CE14] mb-6 text-2xl md:text-3xl lg:text-4xl font-bold" style={{ lineHeight: '1.2' }}>
                {modelName} {t('dual_shaft_main_title')}
              </h1>
              <p className="text-[#F5F7F8] text-xl max-w-3xl mx-auto">
                {t('dual_shaft_subtitle')}
              </p>
            </motion.div>

            {/* Main Product Image - Enlarged */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="max-w-6xl mx-auto"
            >
              <ImageWithFallback
                src={images.main}
                alt={`${modelName} ${t('dual_shaft_main_title')}`}
                className="w-full rounded-2xl shadow-2xl"
                fallbackSrc="https://images.unsplash.com/photo-1622621944707-e2e31c4e5695?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3YXN0ZSUyMHJlY3ljbGluZyUyMG1hY2hpbmV8ZW58MXx8fHwxNzYyMTY3NTI4fDA&ixlib=rb-4.1.0&q=80&w=1080"
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
              {hasCustomDesc && modelDesc ? (
                <>
                  <p className="text-[#45474B] leading-relaxed mb-6 text-lg" style={{ lineHeight: '1.8' }}>
                    {modelDesc.intro}
                  </p>
                  <p className="text-[#45474B] leading-relaxed mb-6 text-lg" style={{ lineHeight: '1.8' }}>
                    {modelDesc.paragraph1}
                  </p>
                  <p className="text-[#45474B] leading-relaxed mb-6 text-lg" style={{ lineHeight: '1.8' }}>
                    {modelDesc.paragraph2}
                  </p>
                  <p className="text-[#45474B] leading-relaxed text-lg" style={{ lineHeight: '1.8' }}>
                    {modelDesc.paragraph3}
                  </p>
                </>
              ) : (
                <>
                  <p className="text-[#45474B] leading-relaxed mb-6">
                    {t('dual_shaft_description_1')}
                  </p>
                  <p className="text-[#45474B] leading-relaxed mb-6">
                    {t('dual_shaft_description_2')}
                  </p>
                </>
              )}
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
              className="text-center text-[#1E1E1E] mb-16 text-5xl font-bold"
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
              className="text-center text-[#45474B] mb-16 text-5xl font-bold"
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
                <motion.div 
                  className="overflow-hidden rounded-2xl shadow-lg mb-4"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <ImageWithFallback
                    src={images.main}
                    alt={t('dual_shaft_perf_1')}
                    className="w-full h-64 object-cover"
                    fallbackSrc="https://images.unsplash.com/photo-1622621944707-e2e31c4e5695?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3YXN0ZSUyMHJlY3ljbGluZyUyMG1hY2hpbmV8ZW58MXx8fHwxNzYyMTY3NTI4fDA&ixlib=rb-4.1.0&q=80&w=1080"
                  />
                </motion.div>
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
                <motion.div 
                  className="overflow-hidden rounded-2xl shadow-lg mb-4"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <ImageWithFallback
                    src={images.detail1}
                    alt={t('dual_shaft_perf_2')}
                    className="w-full h-64 object-cover"
                    fallbackSrc="https://images.unsplash.com/photo-1721745250100-7d777c1c48ab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZXRhbCUyMHNocmVkZGVyJTIwaW5kdXN0cmlhbHxlbnwxfHx8fDE3NjIxNjc1Mjh8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  />
                </motion.div>
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
                <motion.div 
                  className="overflow-hidden rounded-2xl shadow-lg mb-4"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <ImageWithFallback
                    src={images.detail2}
                    alt={t('dual_shaft_perf_3')}
                    className="w-full h-64 object-cover"
                    fallbackSrc="https://images.unsplash.com/photo-1738918929491-3c102ce11c8a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWF2eSUyMG1hY2hpbmVyeSUyMGZhY3Rvcnl8ZW58MXx8fHwxNzYyMTY3NTI5fDA&ixlib=rb-4.1.0&q=80&w=1080"
                  />
                </motion.div>
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
              className="text-center text-[#45474B] mb-12 text-5xl font-bold"
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
                      <td className="px-8 py-4 text-[#1E1E1E] bg-[#F4CE14] font-semibold">Model</td>
                      <td className="px-8 py-4 text-[#1E1E1E]">{modelName}</td>
                    </tr>
                    <tr className="border-b border-[#F5F7F8]">
                      <td className="px-8 py-4 text-[#1E1E1E] bg-[#F4CE14] font-semibold">Motor Gücü</td>
                      <td className="px-8 py-4 text-[#1E1E1E]">{currentSpecs.motorPower}</td>
                    </tr>
                    <tr className="border-b border-[#F5F7F8]">
                      <td className="px-8 py-4 text-[#1E1E1E] bg-[#F4CE14] font-semibold">Rotor Uzunluğu</td>
                      <td className="px-8 py-4 text-[#1E1E1E]">{currentSpecs.rotorLength}</td>
                    </tr>
                    <tr className="border-b border-[#F5F7F8]">
                      <td className="px-8 py-4 text-[#1E1E1E] bg-[#F4CE14] font-semibold">Parçalama Alanı</td>
                      <td className="px-8 py-4 text-[#1E1E1E]">{currentSpecs.rotorDiameter}</td>
                    </tr>
                    <tr className="border-b border-[#F5F7F8]">
                      <td className="px-8 py-4 text-[#1E1E1E] bg-[#F4CE14] font-semibold">Bıçak Sayısı</td>
                      <td className="px-8 py-4 text-[#1E1E1E]">{currentSpecs.bladeCount}</td>
                    </tr>
                    <tr className="border-b border-[#F5F7F8]">
                      <td className="px-8 py-4 text-[#1E1E1E] bg-[#F4CE14] font-semibold">Ağırlık</td>
                      <td className="px-8 py-4 text-[#1E1E1E]">{currentSpecs.weight}</td>
                    </tr>
                    {currentSpecs.screenSize && (
                      <tr className="border-b border-[#F5F7F8]">
                        <td className="px-8 py-4 text-[#1E1E1E] bg-[#F4CE14] font-semibold">Elek Boyutu</td>
                        <td className="px-8 py-4 text-[#1E1E1E]">{currentSpecs.screenSize}</td>
                      </tr>
                    )}
                    <tr>
                      <td className="px-8 py-4 text-[#1E1E1E] bg-[#F4CE14] font-semibold">Kapasite</td>
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
              className="text-center text-[#45474B] mb-12 text-5xl font-bold"
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
              className="text-center text-[#45474B] mb-12 text-5xl font-bold"
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

            {/* YouTube Channel Section */}
            <YouTubeChannelSection className="mt-16" />
          </div>
        </section>

        {/* Similar Products */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 lg:px-8 max-w-[1440px]">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center text-[#45474B] mb-12 text-5xl font-bold"
            >
              {t('dual_shaft_similar_products')}
            </motion.h2>

            <SimilarProductsSection 
              currentProductType="dual-shaft"
              onProductClick={onProductDetailClick}
            />
          </div>
        </section>
      </div>
    );
  }

  // Quad-Shaft (Dört Şaftlı) Product Data
  if (productType === 'quad-shaft') {
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
        <section className="relative py-20 bg-gradient-to-b from-[#45474B] to-[#F5F7F8]">
          <div className="container mx-auto px-4 lg:px-8 max-w-[1440px]">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h1 className="text-[#F4CE14] mb-6 text-2xl md:text-3xl lg:text-4xl font-bold" style={{ lineHeight: '1.2' }}>
                {modelName} Dört Şaftlı Katı Atık Parçalama Makinesi
              </h1>
              <p className="text-[#F5F7F8] text-xl max-w-3xl mx-auto">
                Hidrolik baskı ile etkili parçalama, hacimli malzemeler için ideal çözüm
              </p>
            </motion.div>

            {/* Main Product Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="max-w-6xl mx-auto"
            >
              <ImageWithFallback
                src={images.main}
                alt={`${modelName} Dört Şaftlı Katı Atık Parçalama Makinesi`}
                className="w-full rounded-2xl shadow-2xl"
                fallbackSrc={fallbackImage}
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
              {hasCustomDesc && modelDesc ? (
                <>
                  <p className="text-[#45474B] leading-relaxed mb-6 text-lg" style={{ lineHeight: '1.8' }}>
                    {modelDesc.intro}
                  </p>
                  <p className="text-[#45474B] leading-relaxed mb-6 text-lg" style={{ lineHeight: '1.8' }}>
                    {modelDesc.paragraph1}
                  </p>
                  <p className="text-[#45474B] leading-relaxed mb-6 text-lg" style={{ lineHeight: '1.8' }}>
                    {modelDesc.paragraph2}
                  </p>
                  <p className="text-[#45474B] leading-relaxed text-lg" style={{ lineHeight: '1.8' }}>
                    {modelDesc.paragraph3}
                  </p>
                </>
              ) : (
                <>
                  <p className="text-[#45474B] leading-relaxed mb-6">
                    Dört şaftlı katı atık parçalama makinesi, çeşitli atıkların etkili ve verimli bir şekilde parçalanması için tasarlanmış yüksek performanslı bir ekipmandır. Endüstriyel ve ticari atık yönetimi, geri dönüşüm ve diğer uygulamalarda üstün dayanıklılık ve verimlilik sunar.
                  </p>
                  <p className="text-[#45474B] leading-relaxed mb-6">
                    Dört şaftlı katı atık parçalama makinesi, plastik varil, metal varil, boya varil, evsel çöp, tıbbi atık, plastik çerçeve, plastik blok, plastik kutu, alüminyum profil, yağ filtresi, metal tank, gazete, karton kağıt, oluklu kağıt, fotokopi kağıdı, buzdolabı, devre kartı, TV kasası, cam yünü, cam bardak ve cam şişe gibi hacimli atıkları verimli bir şekilde parçalama özelliği sunar.
                  </p>
                </>
              )}
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
              className="text-center text-[#1E1E1E] mb-16 text-4xl font-bold"
            >
              Temel Özellikler ve Avantajlar
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
                <h3 className="text-[#1E1E1E] mb-4">Hidrolik Baskı ile Etkili Parçalama</h3>
                <p className="text-[#45474B]">Dört şaftlı parçalama makinesi, şaftlara uygulanan hidrolik baskı sayesinde malzemeleri hızlı ve etkili bir şekilde parçalar.</p>
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
                <h3 className="text-[#1E1E1E] mb-4">Yüksek Verimlilik</h3>
                <p className="text-[#45474B]">Dört şaftlı parçalama makinesi, geniş malzemeleri hızlı ve verimli bir şekilde işleyerek operasyonel verimliliği artırır.</p>
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
                <h3 className="text-[#1E1E1E] mb-4">Hacimli Malzemeler İçin İdeal</h3>
                <p className="text-[#45474B]">Dört şaftlı parçalama makinesi, büyük ve zorlu malzemeler için ideal olup, hacimli atıkları kolayca işler.</p>
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
                  <Zap size={32} className="text-[#F4CE14]" />
                </div>
                <h3 className="text-[#1E1E1E] mb-4">Geniş Malzeme İşleme Kapasitesi</h3>
                <p className="text-[#45474B]">Dört şaftlı parçalama makinesi, plastik, metal, ahşap ve elektronik atıklar gibi birçok farklı malzemeyi işleyebilir.</p>
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
              Teknik Özellikler
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
                      <td className="px-8 py-4 text-[#1E1E1E] bg-[#F4CE14] font-semibold">Model</td>
                      <td className="px-8 py-4 text-[#1E1E1E]">{modelName}</td>
                    </tr>
                    <tr className="border-b border-[#F5F7F8]">
                      <td className="px-8 py-4 text-[#1E1E1E] bg-[#F4CE14] font-semibold">Motor Gücü</td>
                      <td className="px-8 py-4 text-[#1E1E1E]">{currentSpecs.motorPower}</td>
                    </tr>
                    <tr className="border-b border-[#F5F7F8]">
                      <td className="px-8 py-4 text-[#1E1E1E] bg-[#F4CE14] font-semibold">Rotor Boyu</td>
                      <td className="px-8 py-4 text-[#1E1E1E]">{currentSpecs.rotorLength}</td>
                    </tr>
                    <tr className="border-b border-[#F5F7F8]">
                      <td className="px-8 py-4 text-[#1E1E1E] bg-[#F4CE14] font-semibold">Parçalama Alanı</td>
                      <td className="px-8 py-4 text-[#1E1E1E]">{currentSpecs.rotorDiameter}</td>
                    </tr>
                    <tr className="border-b border-[#F5F7F8]">
                      <td className="px-8 py-4 text-[#1E1E1E] bg-[#F4CE14] font-semibold">Bıçak Sayısı</td>
                      <td className="px-8 py-4 text-[#1E1E1E]">{currentSpecs.bladeCount}</td>
                    </tr>
                    <tr className="border-b border-[#F5F7F8]">
                      <td className="px-8 py-4 text-[#1E1E1E] bg-[#F4CE14] font-semibold">Ağırlık</td>
                      <td className="px-8 py-4 text-[#1E1E1E]">{currentSpecs.weight}</td>
                    </tr>
                    {currentSpecs.screenSize && (
                      <tr className="border-b border-[#F5F7F8]">
                        <td className="px-8 py-4 text-[#1E1E1E] bg-[#F4CE14] font-semibold">Elek Boyutu</td>
                        <td className="px-8 py-4 text-[#1E1E1E]">{currentSpecs.screenSize}</td>
                      </tr>
                    )}
                    <tr>
                      <td className="px-8 py-4 text-[#1E1E1E] bg-[#F4CE14] font-semibold">Kapasite</td>
                      <td className="px-8 py-4 text-[#1E1E1E]">{currentSpecs.capacity}</td>
                    </tr>
                  </tbody>
                </table>
              </motion.div>
            )}

            {/* Optional Features */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto mt-12"
            >
              <h3 className="text-center text-[#45474B] mb-6">Opsiyonel Özellikler</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <motion.div whileHover={{ scale: 1.05 }} className="bg-white rounded-xl p-6 shadow-lg">
                  <p className="text-[#1E1E1E]">• Kayış Kasnaklı Hidrolik Kaplin</p>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} className="bg-white rounded-xl p-6 shadow-lg">
                  <p className="text-[#1E1E1E]">• Rotor Soğutma Sistemi</p>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} className="bg-white rounded-xl p-6 shadow-lg">
                  <p className="text-[#1E1E1E]">• Otomatik Yağlama Ünitesi</p>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} className="bg-white rounded-xl p-6 shadow-lg">
                  <p className="text-[#1E1E1E]">• Hidrolik Baskı Ünitesi</p>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} className="bg-white rounded-xl p-6 shadow-lg">
                  <p className="text-[#1E1E1E]">• Farklı Ölçülerde Elek</p>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} className="bg-white rounded-xl p-6 shadow-lg">
                  <p className="text-[#1E1E1E]">• Cıvatalı Sökülebilen Bıçak Tasarımı</p>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} className="bg-white rounded-xl p-6 shadow-lg">
                  <p className="text-[#1E1E1E]">• Hidromotor Tahrik Sistemi</p>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} className="bg-white rounded-xl p-6 shadow-lg">
                  <p className="text-[#1E1E1E]">• Çıkış İçin Konveyör Uygulamaları</p>
                </motion.div>
              </div>
            </motion.div>

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
                E-Katalog İndir
              </Button>
            </motion.div>
          </div>
        </section>

        {/* YouTube Channel Section */}
        <YouTubeChannelSection className="py-20 bg-white" />

        {/* Similar Products */}
        <section className="py-20 bg-[#F5F7F8]">
          <div className="container mx-auto px-4 lg:px-8 max-w-[1440px]">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center text-[#45474B] mb-12"
            >
              Benzer Ürünler
            </motion.h2>
            
            <SimilarProductsSection 
              currentProductType="quad-shaft"
              onProductClick={onProductDetailClick}
            />
          </div>
        </section>
      </div>
    );
  }

  // Metal Parçalama Makinesi (Redmonster) Product Data
  if (productType === 'metal') {
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
        <section className="relative py-20 bg-gradient-to-b from-[#45474B] to-[#F5F7F8]">
          <div className="container mx-auto px-4 lg:px-8 max-w-[1440px]">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h1 className="text-[#F4CE14] mb-6 text-2xl md:text-3xl lg:text-4xl font-bold" style={{ lineHeight: '1.2' }}>
                {modelName} Redmonster Hurda Metal Parçalama Makinesi
              </h1>
              <p className="text-[#F5F7F8] text-xl max-w-3xl mx-auto">
                Hurda demir, alüminyum, paslanmaz çelik ve metal balyaları için yüksek torklu çözüm
              </p>
            </motion.div>

            {/* Main Product Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="max-w-6xl mx-auto"
            >
              <ImageWithFallback
                src={images.main}
                alt={`${modelName} Redmonster Metal Parçalama Makinesi`}
                className="w-full rounded-2xl shadow-2xl"
                fallbackSrc={fallbackImage}
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
              <p className="text-[#45474B] leading-relaxed mb-6 text-lg" style={{ lineHeight: '1.8' }}>
                Metal geri dönüşümü, çevresel sürdürülebilirlik ve ekonomik verimlilik açısından büyük bir önem taşır. 
                Bu süreçte hurda metal parçalama makinesi kritik bir rol oynar. Çift şaftlı hurda metal parçalama makinesi, 
                çeşitli metal türlerini etkili bir şekilde parçalayarak geri dönüşüm için uygun hale getirir.
              </p>
              <p className="text-[#45474B] leading-relaxed mb-6 text-lg" style={{ lineHeight: '1.8' }}>
                Hurda metal parçalama makinesi, hurda demir, alüminyum, paslanmaz çelik ve metal balyaları gibi farklı 
                metal türlerini işleyebilme kapasitesine sahiptir. Redmonster hurda metal parçalama makinesi, geniş bir 
                yelpazede metal hurdalarını parçalamak için tasarlanmış güçlü makinelerden oluşur.
              </p>
              <p className="text-[#45474B] leading-relaxed text-lg" style={{ lineHeight: '1.8' }}>
                Hurda metal parçalama makinesi, hurdalıklarda ve metal geri dönüşüm tesislerinde hurda metali etkili 
                bir şekilde işleyerek, metallerin belirli bir boyutta parçalanmasını sağlar.
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
              className="text-center text-[#1E1E1E] mb-16 text-5xl font-bold"
            >
              {t('metal_advantages_title')}
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
                <h3 className="text-[#1E1E1E] mb-4">{t('metal_adv_1_title')}</h3>
                <p className="text-[#45474B]">{t('metal_adv_1_desc')}</p>
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
                <h3 className="text-[#1E1E1E] mb-4">{t('metal_adv_2_title')}</h3>
                <p className="text-[#45474B]">{t('metal_adv_2_desc')}</p>
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
                <h3 className="text-[#1E1E1E] mb-4">{t('metal_adv_3_title')}</h3>
                <p className="text-[#45474B]">{t('metal_adv_3_desc')}</p>
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
                  <Zap size={32} className="text-[#F4CE14]" />
                </div>
                <h3 className="text-[#1E1E1E] mb-4">{t('metal_adv_4_title')}</h3>
                <p className="text-[#45474B]">{t('metal_adv_4_desc')}</p>
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
              className="text-center text-[#45474B] mb-12 text-5xl font-bold"
            >
              {t('metal_tech_specs_title')}
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
                      <td className="px-8 py-4 text-[#1E1E1E] bg-[#F4CE14] font-semibold">Model</td>
                      <td className="px-8 py-4 text-[#1E1E1E]">{modelName}</td>
                    </tr>
                    <tr className="border-b border-[#F5F7F8]">
                      <td className="px-8 py-4 text-[#1E1E1E] bg-[#F4CE14] font-semibold">Parçalama Alanı</td>
                      <td className="px-8 py-4 text-[#1E1E1E]">{currentSpecs['Parçalama Alanı']}</td>
                    </tr>
                    <tr className="border-b border-[#F5F7F8]">
                      <td className="px-8 py-4 text-[#1E1E1E] bg-[#F4CE14] font-semibold">Rotor Boyu</td>
                      <td className="px-8 py-4 text-[#1E1E1E]">{currentSpecs['Rotor Boyu']}</td>
                    </tr>
                    <tr>
                      <td className="px-8 py-4 text-[#1E1E1E] bg-[#F4CE14] font-semibold">Motor Gücü</td>
                      <td className="px-8 py-4 text-[#1E1E1E]">{currentSpecs['Motor Gücü']}</td>
                    </tr>
                  </tbody>
                </table>
              </motion.div>
            )}

            {/* Optional Features */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto mt-12"
            >
              <h3 className="text-center text-[#45474B] mb-6 text-3xl font-bold">{t('metal_optional_features_title')}</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <motion.div whileHover={{ scale: 1.05 }} className="bg-white rounded-xl p-6 shadow-lg">
                  <p className="text-[#1E1E1E]">• Dört Motorlu Tasarım</p>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} className="bg-white rounded-xl p-6 shadow-lg">
                  <p className="text-[#1E1E1E]">• Rotor Soğutma Sistemi</p>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} className="bg-white rounded-xl p-6 shadow-lg">
                  <p className="text-[#1E1E1E]">• Otomatik Yağlama Ünitesi</p>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} className="bg-white rounded-xl p-6 shadow-lg">
                  <p className="text-[#1E1E1E]">• Hidrolik Baskı Ünitesi</p>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} className="bg-white rounded-xl p-6 shadow-lg">
                  <p className="text-[#1E1E1E]">• Farklı Ölçülerde Elek</p>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} className="bg-white rounded-xl p-6 shadow-lg">
                  <p className="text-[#1E1E1E]">• Cıvatalı Sökülebilen Bıçak Tasarımı</p>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} className="bg-white rounded-xl p-6 shadow-lg">
                  <p className="text-[#1E1E1E]">• Elektrik Motoru Tahrik Sistemi</p>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} className="bg-white rounded-xl p-6 shadow-lg">
                  <p className="text-[#1E1E1E]">• Besleme ve Boşaltma Konveyörü</p>
                </motion.div>
              </div>
            </motion.div>

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
                E-Katalog İndir
              </Button>
            </motion.div>
          </div>
        </section>

        {/* YouTube Channel Section */}
        <YouTubeChannelSection className="py-20 bg-white" />

        {/* Similar Products */}
        <section className="py-20 bg-[#F5F7F8]">
          <div className="container mx-auto px-4 lg:px-8 max-w-[1440px]">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center text-[#45474B] mb-12 text-5xl font-bold"
            >
              Benzer Ürünler
            </motion.h2>
            
            <SimilarProductsSection 
              currentProductType="metal"
              onProductClick={onProductDetailClick}
            />
          </div>
        </section>
      </div>
    );
  }

  // Harddisk İmha Makinesi Product Data
  if (productType === 'harddisk') {
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

        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-[#45474B] via-[#2F3032] to-[#1E1E1E] py-24">
          <div className="container mx-auto px-4 lg:px-8 max-w-[1440px]">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: isRTL ? 50 : -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h1 className="text-[#F4CE14] mb-8 text-2xl md:text-3xl lg:text-4xl font-bold" style={{ lineHeight: '1.2' }}>
                  {modelName} Harddisk İmha Parçalama Makinesi
                </h1>
                {hasCustomDesc && modelDesc && (
                  <p className="text-[#F5F7F8] text-xl mb-8 leading-relaxed">
                    {modelDesc.intro}
                  </p>
                )}
                <div className="flex flex-wrap gap-4">
                  <Button
                    onClick={onECatalogClick}
                    className="bg-[#F4CE14] hover:bg-[#F4CE14]/90 text-[#1E1E1E] px-8 py-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300"
                  >
                    <FileDown size={20} className={`${isRTL ? 'ml-2' : 'mr-2'}`} />
                    E-Katalog İndir
                  </Button>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative"
              >
                <div className="absolute inset-0 bg-[#F4CE14] blur-3xl opacity-20 rounded-full"></div>
                <ImageWithFallback
                  src={images.main}
                  alt={`${modelName} Harddisk İmha Makinesi`}
                  className="relative z-10 w-full h-auto rounded-2xl shadow-2xl"
                  fallbackSrc={fallbackImage}
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Product Description */}
        {hasCustomDesc && modelDesc && (
          <section className="py-20 bg-white">
            <div className="container mx-auto px-4 lg:px-8 max-w-[1440px]">
              <div className="max-w-4xl mx-auto space-y-8">
                <motion.p
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="text-[#45474B] text-lg leading-relaxed"
                >
                  {modelDesc.paragraph1}
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="text-[#45474B] text-lg leading-relaxed"
                >
                  {modelDesc.paragraph2}
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                  className="text-[#45474B] text-lg leading-relaxed"
                >
                  {modelDesc.paragraph3}
                </motion.p>
              </div>
            </div>
          </section>
        )}

        {/* Features Grid */}
        <section className="py-20 bg-[#F5F7F8]">
          <div className="container mx-auto px-4 lg:px-8 max-w-[1440px]">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center text-[#45474B] mb-12"
            >
              Özellikler ve Avantajlar
            </motion.h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="w-16 h-16 bg-[#F4CE14]/20 rounded-full flex items-center justify-center mb-6">
                  <Settings className="text-[#F4CE14]" size={32} />
                </div>
                <h3 className="text-[#1E1E1E] mb-4">İki Aşamalı Parçalama</h3>
                <p className="text-[#45474B]">
                  Harddiskleri iki kez parçalayarak verilerin kurtarılma ihtimalini tamamen ortadan kaldırır.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="w-16 h-16 bg-[#F4CE14]/20 rounded-full flex items-center justify-center mb-6">
                  <RotateCcw className="text-[#F4CE14]" size={32} />
                </div>
                <h3 className="text-[#1E1E1E] mb-4">Geri Dönüşümsüz Parçalama</h3>
                <p className="text-[#45474B]">
                  Verilerin geri dönüştürülemez hale gelmesi için harddiskleri ve devre kartlarını fiziksel olarak parçalar.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="w-16 h-16 bg-[#F4CE14]/20 rounded-full flex items-center justify-center mb-6">
                  <Zap className="text-[#F4CE14]" size={32} />
                </div>
                <h3 className="text-[#1E1E1E] mb-4">Uzun Ömürlü Bıçaklar</h3>
                <p className="text-[#45474B]">
                  Yüksek kaliteli çelik bıçakları sayesinde aşınmaya karşı dayanıklıdır ve uzun süreli kullanım sağlar.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="w-16 h-16 bg-[#F4CE14]/20 rounded-full flex items-center justify-center mb-6">
                  <Wind className="text-[#F4CE14]" size={32} />
                </div>
                <h3 className="text-[#1E1E1E] mb-4">Büyük İşleme Kapasitesi</h3>
                <p className="text-[#45474B]">
                  Farklı boyutlarda ve türlerde dijital depolama cihazlarını ve devre kartlarını hızlıca işleyebilir.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Technical Specifications Table */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 lg:px-8 max-w-[1440px]">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center text-[#45474B] mb-12"
            >
              Teknik Özellikler
            </motion.h2>

            {currentSpecs && (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="max-w-4xl mx-auto bg-[#F5F7F8] rounded-2xl shadow-xl overflow-hidden"
              >
                <table className="w-full">
                  <tbody>
                    <tr className="border-b border-white">
                      <td className="px-8 py-4 text-[#45474B] bg-[#F4CE14]/10">Model</td>
                      <td className="px-8 py-4 text-[#1E1E1E]">{modelName}</td>
                    </tr>
                    <tr className="border-b border-white">
                      <td className="px-8 py-4 text-[#45474B] bg-[#F4CE14]/10">Motor Gücü</td>
                      <td className="px-8 py-4 text-[#1E1E1E]">{currentSpecs.motorPower}</td>
                    </tr>
                    <tr className="border-b border-white">
                      <td className="px-8 py-4 text-[#45474B] bg-[#F4CE14]/10">Parçalama Alanı</td>
                      <td className="px-8 py-4 text-[#1E1E1E]">{currentSpecs.rotorLength}</td>
                    </tr>
                    <tr className="border-b border-white">
                      <td className="px-8 py-4 text-[#45474B] bg-[#F4CE14]/10">Parçalayıcı Sayısı</td>
                      <td className="px-8 py-4 text-[#1E1E1E]">{currentSpecs.rotorDiameter}</td>
                    </tr>
                    <tr className="border-b border-white">
                      <td className="px-8 py-4 text-[#45474B] bg-[#F4CE14]/10">Bıçak Malzemesi</td>
                      <td className="px-8 py-4 text-[#1E1E1E]">{currentSpecs.bladeCount}</td>
                    </tr>
                    <tr className="border-b border-white">
                      <td className="px-8 py-4 text-[#45474B] bg-[#F4CE14]/10">Tip</td>
                      <td className="px-8 py-4 text-[#1E1E1E]">{currentSpecs.weight}</td>
                    </tr>
                    <tr>
                      <td className="px-8 py-4 text-[#45474B] bg-[#F4CE14]/10">Parçalama Sistemi</td>
                      <td className="px-8 py-4 text-[#1E1E1E]">{currentSpecs.capacity}</td>
                    </tr>
                  </tbody>
                </table>
              </motion.div>
            )}

            {/* Optional Features */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto mt-12"
            >
              <h3 className="text-center text-[#45474B] mb-6">Opsiyonel Özellikler</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  'Rotor Soğutma Sistemi',
                  'Otomatik Yağlama Ünitesi',
                  'Farklı Ölçülerde Elek',
                  'Cıvatalı Sökülebilen Bıçak Tasarımı',
                  'Hidromotor Tahrik Sistemi',
                  'Ofis ve Endüstriyel Tip Şase Tasarımı',
                  'Çıkış İçin Helezon, Konveyör ve Taşıma Fanı',
                  'Ses Yalıtım Sistemi',
                  'Kamera Kayıt Cihazı',
                  'Barkod Okuyucu'
                ].map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="flex items-center gap-3 bg-white p-4 rounded-lg shadow"
                  >
                    <div className="w-2 h-2 bg-[#F4CE14] rounded-full"></div>
                    <span className="text-[#45474B]">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

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
                E-Katalog İndir
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
              className="text-center text-[#45474B] mb-12 text-4xl font-bold"
            >
              Sıkça Sorulan Sorular
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
                    Harddisk imha makineleri hangi cihazları parçalar?
                  </AccordionTrigger>
                  <AccordionContent className="text-[#45474B] leading-relaxed">
                    DATABER serisi harddisk imha makineleri; sabit diskler (HDD), SSD'ler, devre kartları, USB bellekler, CD/DVD'ler ve diğer dijital depolama cihazlarını güvenli bir şekilde parçalar. Hem 2.5" hem de 3.5" harddiskler işlenebilir.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2" className="bg-[#F5F7F8] rounded-xl px-6 border-none">
                  <AccordionTrigger className="text-[#45474B] hover:text-[#F4CE14]">
                    Veri güvenliği nasıl sağlanıyor?
                  </AccordionTrigger>
                  <AccordionContent className="text-[#45474B] leading-relaxed">
                    DATABER-D ve DATABER-T modelleri çok aşamalı parçalama sistemi ile harddiskleri 5-10 mm altına kadar parçalar. Bu seviyede parçalama sonrası verilerin kurtarılması teknik olarak imkansızdır. İsteğe bağlı kamera kaydı ve barkod takibi ile süreç belgelendirilebilir.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3" className="bg-[#F5F7F8] rounded-xl px-6 border-none">
                  <AccordionTrigger className="text-[#45474B] hover:text-[#F4CE14]">
                    DATABER serisi modeller arasındaki fark nedir?
                  </AccordionTrigger>
                  <AccordionContent className="text-[#45474B] leading-relaxed">
                    DATABER-S: Tek aşamalı, ofis tipi, 150x150 mm parçalama alanı. DATABER-D: İki aşamalı, 400x400 mm parçalama alanı, daha yüksek kapasite. DATABER-T: Üç aşamalı, 400x400 mm parçalama alanı, maksimum güvenlik ve toz seviyesinde parçalama.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4" className="bg-[#F5F7F8] rounded-xl px-6 border-none">
                  <AccordionTrigger className="text-[#45474B] hover:text-[#F4CE14]">
                    Bakım gereksinimleri nelerdir?
                  </AccordionTrigger>
                  <AccordionContent className="text-[#45474B] leading-relaxed">
                    Her 500 parçalama işleminde bıçak kontrolü, 1000 işlemde yağlama ve genel bakım önerilir. Bıçaklar aşınma durumuna göre 5000-10000 parçalama sonrası değiştirilebilir. Otomatik yağlama sistemi ile bakım süresi minimuma iner.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-5" className="bg-[#F5F7F8] rounded-xl px-6 border-none">
                  <AccordionTrigger className="text-[#45474B] hover:text-[#F4CE14]">
                    Hangi standartlara uygun?
                  </AccordionTrigger>
                  <AccordionContent className="text-[#45474B] leading-relaxed">
                    DATABER serisi makineler NSA/CSS EPL, DIN 66399, DoD 5220.22-M gibi uluslararası veri imha standartlarına uygundur. Güvenlik sertifikasyonu gerektiren devlet kurumları ve bankalar için idealdir.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </motion.div>
          </div>
        </section>

        {/* YouTube Channel Section */}
        <section className="py-20 bg-[#F5F7F8]">
          <div className="container mx-auto px-4 lg:px-8 max-w-[1440px]">
            <YouTubeChannelSection />
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
              Benzer Ürünler
            </motion.h2>

            <SimilarProductsSection 
              currentProductType="harddisk"
              onProductClick={onProductDetailClick}
            />
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

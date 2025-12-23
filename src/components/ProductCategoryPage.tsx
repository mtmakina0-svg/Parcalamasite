import React from 'react';
import { motion } from 'motion/react';
import { useLanguage } from './LanguageContext';
import { ArrowLeft, ChevronRight, Settings, Zap, Shield, Wrench } from 'lucide-react';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { getModelImages, getFallbackImage } from '../utils/imageConfig';
import { Breadcrumbs } from './Breadcrumbs';

interface ProductCategoryPageProps {
  productType: string;
  onBackToMain: () => void;
  onModelSelect: (modelName: string) => void;
}

// Available models for each product type
const availableModels: { [key: string]: string[] } = {
  'single-shaft': ['TSH-60', 'TSH-80', 'TSH-100', 'TSH-130', 'TSH-160', 'TSH-200'],
  'dual-shaft': ['CS-20', 'CS-40', 'CS-60', 'CS-80', 'CS-100', 'CS-120', 'CS-150', 'CS-180', 'CS-200'],
  'quad-shaft': ['DS-80', 'DS-100', 'DS-150', 'DS-200'],
  'metal': ['RDM-100', 'RDM-150', 'RDM-180', 'RDM-200'],
  'mobile': ['TSM-150', 'TSM-300', 'CSM-150', 'CSM-200'],
  'pallet': ['TSV-140', 'TSV-200', 'TSVX-200'],
  'harddisk': ['DATABER-S', 'DATABER-D', 'DATABER-T'],
  'tree-root': ['TW-100', 'TW-150', 'TW-200'],
  'wood': ['TSY-100', 'TSY-150', 'TSY-200'],
  'glass': ['GB-300'],
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
    'TSH-60': { capacity: '500-800 kg/saat', power: '15–30 kW', rotorLength: '600 mm' },
    'TSH-80': { capacity: '800-1200 kg/saat', power: '22–45 kW', rotorLength: '800 mm' },
    'TSH-100': { capacity: '1200-1800 kg/saat', power: '30–75 kW', rotorLength: '1000 mm' },
    'TSH-130': { capacity: '1800-2500 kg/saat', power: '45–110 kW', rotorLength: '1300 mm' },
    'TSH-160': { capacity: '3500-4500 kg/saat', power: '55–132 kW (2x)', rotorLength: '1600 mm' },
    'TSH-200': { capacity: '4500-6000 kg/saat', power: '75–160 kW (2x)', rotorLength: '2000 mm' }
  },
  'dual-shaft': {
    'CS-20': { capacity: '200 x 200 mm', power: '2,2–11 kW', rotorLength: '200 mm' },
    'CS-40': { capacity: '400 x 400 mm', power: '5,5–22 kW', rotorLength: '400 mm' },
    'CS-60': { capacity: '600 x 600 mm', power: '11–45 kW (2x)', rotorLength: '600 mm' },
    'CS-80': { capacity: '800 x 800 mm', power: '15–55 kW (2x)', rotorLength: '800 mm' },
    'CS-100': { capacity: '1000 x 1000 mm', power: '22–90 kW (2x)', rotorLength: '1000 mm' },
    'CS-120': { capacity: '1200 x 1200 mm', power: '30–110 kW (2x)', rotorLength: '1200 mm' },
    'CS-150': { capacity: '1500 x 1200 mm', power: '45–132 kW (2x)', rotorLength: '1500 mm' },
    'CS-180': { capacity: '1800 x 1500 mm', power: '55–132 kW (2x)', rotorLength: '1800 mm' },
    'CS-200': { capacity: '2000 x 1800 mm', power: '75–200 kW (2x)', rotorLength: '2000 mm' }
  },
  'quad-shaft': {
    'DS-80': { capacity: '800 x 800 mm', power: '11–22 kW (4x)', rotorLength: '800 mm' },
    'DS-100': { capacity: '1000 x 1000 mm', power: '22–45 kW (4x)', rotorLength: '1000 mm' },
    'DS-150': { capacity: '1500 x 1500 mm', power: '45–132 kW (4x)', rotorLength: '1500 mm' },
    'DS-200': { capacity: '2000 x 2000 mm', power: '75–160 kW (4x)', rotorLength: '2000 mm' }
  },
  'metal': {
    'RDM-100': { capacity: '1000 x 1000 mm', power: '45–75 kW (2-4X)', rotorLength: '1000 mm' },
    'RDM-150': { capacity: '1500 x 1500 mm', power: '55–90 kW (2-4X)', rotorLength: '1500 mm' },
    'RDM-180': { capacity: '1800 x 1500 mm', power: '75–90 kW (2-4X)', rotorLength: '1800 mm' },
    'RDM-200': { capacity: '2000 x 1800 mm', power: '90–132 kW (2-4X)', rotorLength: '2000 mm' }
  },
  'mobile': {
    'TSM-150': { capacity: '1500x1800 mm', power: '400 HP', rotorLength: '1500 mm' },
    'TSM-300': { capacity: '3000x2000 mm', power: '600 HP', rotorLength: '3000 mm' },
    'CSM-150': { capacity: '1500x1200 mm', power: '400 HP', rotorLength: '1500 mm' },
    'CSM-200': { capacity: '2000x1800 mm', power: '800 HP', rotorLength: '2000 mm' }
  },
  'pallet': {
    'TSV-140': { capacity: '1400 x 400 mm', power: '30 kW', rotorLength: '1400 mm' },
    'TSV-200': { capacity: '2000 x 400 mm', power: '55 kW', rotorLength: '2000 mm' },
    'TSVX-200': { capacity: '2000 x 400 mm', power: '45 x 2 kW', rotorLength: '2000 mm' }
  },
  'harddisk': {
    'DATABER-S': { capacity: '150x150 mm', power: '3-11 kW', rotorLength: 'Tekli Aşama' },
    'DATABER-D': { capacity: '400x400 mm', power: '11-22 kW x2', rotorLength: 'İkili Aşama' },
    'DATABER-T': { capacity: '400x400 mm', power: '11-45 kW x2', rotorLength: 'Üçlü Aşama' }
  },
  'tree-root': {
    'TW-100': { capacity: 'Ø 1000 mm', power: '132–160 kW', rotorLength: '500 mm' },
    'TW-150': { capacity: 'Ø 1500 mm', power: '160–220 kW', rotorLength: '800 mm' },
    'TW-200': { capacity: 'Ø 2000 mm', power: '220–315 kW', rotorLength: '1000 mm' }
  },
  'wood': {
    'TSY-100': { capacity: 'Rotor: 1000 mm', power: '55–90 kW (2X)', rotorLength: '1000 mm' },
    'TSY-150': { capacity: 'Rotor: 1500 mm', power: '75–110 kW (2X)', rotorLength: '1500 mm' },
    'TSY-200': { capacity: 'Rotor: 2000 mm', power: '90–200 kW (2X)', rotorLength: '2000 mm' }
  },
  'glass': {
    'GB-300': { capacity: '500-800 kg/saat', power: '11-15 kW', rotorLength: '300 mm' }
  }
};

// Dynamic content mapping for product types
const productContentKeys: {
  [key: string]: {
    title: string;
    subtitle: string;
    desc1: string;
    desc2: string;
    desc3: string;
    desc4?: string;
    desc5?: string;
    desc6?: string;
    adv1Title: string;
    adv1Desc: string;
    adv2Title: string;
    adv2Desc: string;
    adv3Title: string;
    adv3Desc: string;
    adv4Title: string;
    adv4Desc: string;
  }
} = {
  'single-shaft': {
    title: 'single_shaft_main_title',
    subtitle: 'single_shaft_subtitle',
    desc1: 'single_shaft_description_1',
    desc2: 'single_shaft_description_2',
    desc3: 'single_shaft_description_3',
    desc4: 'single_shaft_description_4',
    desc5: 'single_shaft_description_5',
    desc6: 'single_shaft_description_6',
    adv1Title: 'single_shaft_advantage_1_title',
    adv1Desc: 'single_shaft_advantage_1_desc',
    adv2Title: 'single_shaft_advantage_2_title',
    adv2Desc: 'single_shaft_advantage_2_desc',
    adv3Title: 'single_shaft_advantage_3_title',
    adv3Desc: 'single_shaft_advantage_3_desc',
    adv4Title: 'single_shaft_advantage_4_title',
    adv4Desc: 'single_shaft_advantage_4_desc'
  },
  'dual-shaft': {
    title: 'dual_shaft_main_title',
    subtitle: 'dual_shaft_subtitle',
    desc1: 'dual_shaft_description_1',
    desc2: 'dual_shaft_description_2',
    desc3: 'dual_shaft_description_3',
    desc4: 'dual_shaft_description_4',
    desc5: 'dual_shaft_description_5',
    adv1Title: 'dual_shaft_adv_1_title',
    adv1Desc: 'dual_shaft_adv_1_desc',
    adv2Title: 'dual_shaft_adv_2_title',
    adv2Desc: 'dual_shaft_adv_2_desc',
    adv3Title: 'dual_shaft_adv_3_title',
    adv3Desc: 'dual_shaft_adv_3_desc',
    adv4Title: 'dual_shaft_adv_4_title',
    adv4Desc: 'dual_shaft_adv_4_desc'
  },
  'quad-shaft': {
    title: 'quad_shaft_main_title',
    subtitle: 'quad_shaft_subtitle',
    desc1: 'quad_shaft_description_1',
    desc2: 'quad_shaft_description_2',
    desc3: 'quad_shaft_description_3',
    desc4: 'quad_shaft_description_4',
    desc5: 'quad_shaft_description_5',
    desc6: 'quad_shaft_description_6',
    adv1Title: 'quad_shaft_adv_1_title',
    adv1Desc: 'quad_shaft_adv_1_desc',
    adv2Title: 'quad_shaft_adv_2_title',
    adv2Desc: 'quad_shaft_adv_2_desc',
    adv3Title: 'quad_shaft_adv_3_title',
    adv3Desc: 'quad_shaft_adv_3_desc',
    adv4Title: 'quad_shaft_adv_4_title',
    adv4Desc: 'quad_shaft_adv_4_desc'
  },
  'metal': {
    title: 'metal_main_title',
    subtitle: 'metal_subtitle',
    desc1: 'metal_description_1',
    desc2: 'metal_description_2',
    desc3: 'metal_description_3',
    desc4: 'metal_description_4',
    desc5: 'metal_description_5',
    desc6: 'metal_description_6',
    adv1Title: 'metal_adv_1_title',
    adv1Desc: 'metal_adv_1_desc',
    adv2Title: 'metal_adv_2_title',
    adv2Desc: 'metal_adv_2_desc',
    adv3Title: 'metal_adv_3_title',
    adv3Desc: 'metal_adv_3_desc',
    adv4Title: 'metal_adv_4_title',
    adv4Desc: 'metal_adv_4_desc'
  },
  'harddisk': {
    title: 'harddisk_main_title',
    subtitle: 'harddisk_subtitle',
    desc1: 'harddisk_description_1',
    desc2: 'harddisk_description_2',
    desc3: 'harddisk_description_3',
    adv1Title: 'harddisk_adv_1_title',
    adv1Desc: 'harddisk_adv_1_desc',
    adv2Title: 'harddisk_adv_2_title',
    adv2Desc: 'harddisk_adv_2_desc',
    adv3Title: 'harddisk_adv_3_title',
    adv3Desc: 'harddisk_adv_3_desc',
    adv4Title: 'harddisk_adv_4_title',
    adv4Desc: 'harddisk_adv_4_desc'
  },
  'mobile': {
    title: 'mobile_main_title',
    subtitle: 'mobile_subtitle',
    desc1: 'mobile_description_1',
    desc2: 'mobile_description_2',
    desc3: 'mobile_description_3',
    desc4: 'mobile_description_4',
    desc5: 'mobile_description_5',
    desc6: 'mobile_description_6',
    adv1Title: 'mobile_adv_1_title',
    adv1Desc: 'mobile_adv_1_desc',
    adv2Title: 'mobile_adv_2_title',
    adv2Desc: 'mobile_adv_2_desc',
    adv3Title: 'mobile_adv_3_title',
    adv3Desc: 'mobile_adv_3_desc',
    adv4Title: 'mobile_adv_4_title',
    adv4Desc: 'mobile_adv_4_desc'
  },
  'pallet': {
    title: 'pallet_main_title',
    subtitle: 'pallet_subtitle',
    desc1: 'pallet_description_1',
    desc2: 'pallet_description_2',
    desc3: 'pallet_description_3',
    adv1Title: 'pallet_adv_1_title',
    adv1Desc: 'pallet_adv_1_desc',
    adv2Title: 'pallet_adv_2_title',
    adv2Desc: 'pallet_adv_2_desc',
    adv3Title: 'pallet_adv_3_title',
    adv3Desc: 'pallet_adv_3_desc',
    adv4Title: 'pallet_adv_4_title',
    adv4Desc: 'pallet_adv_4_desc'
  },
  'tree-root': {
    title: 'tree_root_main_title',
    subtitle: 'tree_root_subtitle',
    desc1: 'tree_root_description_1',
    desc2: 'tree_root_description_2',
    desc3: 'tree_root_description_3',
    adv1Title: 'tree_root_adv_1_title',
    adv1Desc: 'tree_root_adv_1_desc',
    adv2Title: 'tree_root_adv_2_title',
    adv2Desc: 'tree_root_adv_2_desc',
    adv3Title: 'tree_root_adv_3_title',
    adv3Desc: 'tree_root_adv_3_desc',
    adv4Title: 'tree_root_adv_4_title',
    adv4Desc: 'tree_root_adv_4_desc'
  },
  'wood': {
    title: 'wood_main_title',
    subtitle: 'wood_subtitle',
    desc1: 'wood_description_1',
    desc2: 'wood_description_2',
    desc3: 'wood_description_3',
    adv1Title: 'wood_adv_1_title',
    adv1Desc: 'wood_adv_1_desc',
    adv2Title: 'wood_adv_2_title',
    adv2Desc: 'wood_adv_2_desc',
    adv3Title: 'wood_adv_3_title',
    adv3Desc: 'wood_adv_3_desc',
    adv4Title: 'wood_adv_4_title',
    adv4Desc: 'wood_adv_4_desc'
  },
  'glass': {
    title: 'glass_main_title',
    subtitle: 'glass_subtitle',
    desc1: 'glass_description_1',
    desc2: 'glass_description_2',
    desc3: 'glass_description_3',
    desc4: 'glass_description_4',
    desc5: 'glass_description_5',
    adv1Title: 'glass_adv_1_title',
    adv1Desc: 'glass_adv_1_desc',
    adv2Title: 'glass_adv_2_title',
    adv2Desc: 'glass_adv_2_desc',
    adv3Title: 'glass_adv_3_title',
    adv3Desc: 'glass_adv_3_desc',
    adv4Title: 'glass_adv_4_title',
    adv4Desc: 'glass_adv_4_desc'
  }
};

export const ProductCategoryPage: React.FC<ProductCategoryPageProps> = ({
  productType,
  onBackToMain,
  onModelSelect
}) => {
  const { t, isRTL, language } = useLanguage();

  const models = availableModels[productType] || [];
  const fallbackImage = getFallbackImage(productType);

  // Get content keys for this product type
  const contentKeys = productContentKeys[productType] || productContentKeys['single-shaft'];

  // Scroll to top when component mounts
  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [productType]);

  return (
    <div className="min-h-screen bg-[#F5F7F8] pt-20" dir={isRTL ? 'rtl' : 'ltr'}>
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

      {/* Breadcrumb Navigation */}
      <div className="bg-[#45474B]">
        <div className="container mx-auto px-4 lg:px-8 max-w-[1440px]">
          <Breadcrumbs
            items={[
              {
                label: t('nav_products'),
                href: `/${language}/urunler`,
                onClick: onBackToMain
              },
              {
                label: t(contentKeys.title),
                href: `/${language}/${productType}`
              }
            ]}
          />
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
            <h1 className="text-[#F4CE14] mb-6 text-2xl md:text-3xl lg:text-4xl font-bold">
              {t(contentKeys.title)}
            </h1>
            <p className="text-[#F5F7F8] text-xl max-w-4xl mx-auto leading-relaxed">
              {t(contentKeys.subtitle)}
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
              alt={`${t(contentKeys.title)} - MT Makina`}
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
            className="max-w-6xl mx-auto"
          >
            <h2 className="text-[#45474B] mb-8 text-2xl md:text-3xl font-bold text-center">
              {t('about_our_machines')}
            </h2>
            <div className="prose prose-lg max-w-none space-y-6">
              <p className="text-[#45474B] leading-relaxed text-lg">
                {t(contentKeys.desc1)}
              </p>
              <p className="text-[#45474B] leading-relaxed text-lg">
                {t(contentKeys.desc2)}
              </p>
              <p className="text-[#45474B] leading-relaxed text-lg">
                {t(contentKeys.desc3)}
              </p>
              {contentKeys.desc4 && (
                <p className="text-[#45474B] leading-relaxed text-lg">
                  {t(contentKeys.desc4)}
                </p>
              )}
              {contentKeys.desc5 && (
                <p className="text-[#45474B] leading-relaxed text-lg">
                  {t(contentKeys.desc5)}
                </p>
              )}
              {contentKeys.desc6 && (
                <p className="text-[#45474B] leading-relaxed text-lg">
                  {t(contentKeys.desc6)}
                </p>
              )}
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
            className="text-center text-[#45474B] mb-16 text-2xl md:text-3xl font-bold"
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
              <h3 className="text-[#45474B] mb-4 text-xl font-bold">{t(contentKeys.adv1Title)}</h3>
              <p className="text-[#45474B] leading-relaxed">{t(contentKeys.adv1Desc)}</p>
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
              <h3 className="text-[#45474B] mb-4 text-xl font-bold">{t(contentKeys.adv2Title)}</h3>
              <p className="text-[#45474B] leading-relaxed">{t(contentKeys.adv2Desc)}</p>
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
              <h3 className="text-[#45474B] mb-4 text-xl font-bold">{t(contentKeys.adv3Title)}</h3>
              <p className="text-[#45474B] leading-relaxed">{t(contentKeys.adv3Desc)}</p>
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
              <h3 className="text-[#45474B] mb-4 text-xl font-bold">{t(contentKeys.adv4Title)}</h3>
              <p className="text-[#45474B] leading-relaxed">{t(contentKeys.adv4Desc)}</p>
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
            <h2 className="text-[#45474B] mb-4 text-2xl md:text-3xl font-bold">{t('our_models')}</h2>
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
                        alt={`${model} - ${t(contentKeys.title)} - MT Makina`}
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
                            <span className="text-[#45474B]/70">
                              {productType === 'tree-root' ? t('spec_shredding_area') : t('spec_capacity')}:
                            </span>
                            <span className="text-[#45474B] font-semibold">{info.capacity}</span>
                          </div>
                          <div className="flex justify-between items-center text-sm">
                            <span className="text-[#45474B]/70">{t('spec_motor_power')}:</span>
                            <span className="text-[#45474B] font-semibold">{info.power}</span>
                          </div>
                          <div className="flex justify-between items-center text-sm">
                            <span className="text-[#45474B]/70">{t('spec_rotor_length')}:</span>
                            <span className="text-[#45474B] font-semibold">{info.rotorLength}</span>
                          </div>
                        </div>
                      )}

                      <Button
                        onClick={() => onModelSelect(model)}
                        className="w-full bg-[#F4CE14] hover:bg-[#F4CE14]/90 text-[#1E1E1E] group/btn"
                      >
                        <span>{t('btn_view_details')}</span>
                        <ChevronRight className="ml-2 group-hover/btn:translate-x-1 transition-transform" size={20} />
                      </Button>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section >

      {/* CTA Section */}
      < section className="py-20 bg-[#45474B]" >
        <div className="container mx-auto px-4 lg:px-8 max-w-[1440px]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-[#F4CE14] mb-6 text-5xl font-bold">
              {t('need_help_choosing')}
            </h2>
            <p className="text-[#F5F7F8] text-xl mb-8 max-w-2xl mx-auto">
              {t('contact_us_for_consultation')}
            </p>
            <a
              href="https://wa.me/905423109930?text=Merhaba%20MT%20Makina%2C%20parçalama%20makineleri%20hakkında%20bilgi%20almak%20istiyorum."
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                className="bg-[#F4CE14] hover:bg-[#F4CE14]/90 text-[#1E1E1E] px-8 py-6 text-lg"
                size="lg"
              >
                {t('contact_us')}
              </Button>
            </a>
          </motion.div>
        </div>
      </section >
    </div >
  );
};
import React, { useState } from 'react';
import { motion } from 'motion/react';
import { useLanguage } from './LanguageContext';
import { Settings, RotateCcw, Volume2, FileDown, Play, ArrowLeft, Zap, Wind, Shield, Wrench, Truck, FileText } from 'lucide-react';
import { QuoteRequestModal } from './QuoteRequestModal';
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
import { StructuredData } from './StructuredData';
import { generateFAQStructuredData, productCategorySlugs } from '../utils/seoConfig';
import { Breadcrumbs } from './Breadcrumbs';

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
      motorPower: '45–75 kW (2-4X)',
      rotorLength: '1000 mm',
      rotorDiameter: '1000 x 1000 mm',
      bladeCount: '96 adet',
      weight: '6500 kg',
      capacity: '2000-3500 kg/saat'
    },
    'RDM-150': {
      motorPower: '55–90 kW (2-4X)',
      rotorLength: '1500 mm',
      rotorDiameter: '1500 x 1500 mm',
      bladeCount: '120 adet',
      weight: '9000 kg',
      capacity: '3500-5500 kg/saat'
    },
    'RDM-180': {
      motorPower: '75–90 kW (2-4X)',
      rotorLength: '1800 mm',
      rotorDiameter: '1800 x 1500 mm',
      bladeCount: '144 adet',
      weight: '11500 kg',
      capacity: '5500-8000 kg/saat'
    },
    'RDM-200': {
      motorPower: '90–132 kW (2-4X)',
      rotorLength: '2000 mm',
      rotorDiameter: '2000 x 1800 mm',
      bladeCount: '160 adet',
      weight: '14000 kg',
      capacity: '8000-12000 kg/saat'
    }
  },
  'pallet': {
    'TSV-140': {
      motorPower: '30 kW',
      rotorLength: '1400 mm',
      rotorDiameter: '1400 x 400 mm',
      bladeCount: '28 adet',
      weight: '3800 kg',
      capacity: '1500-2500 kg/saat'
    },
    'TSV-200': {
      motorPower: '55 kW',
      rotorLength: '2000 mm',
      rotorDiameter: '2000 x 400 mm',
      bladeCount: '40 adet',
      weight: '5200 kg',
      capacity: '3000-4500 kg/saat'
    },
    'TSVX-200': {
      motorPower: '2 x 45 kW',
      rotorLength: '2000 mm',
      rotorDiameter: '2000 x 400 mm',
      bladeCount: '40 adet',
      weight: '6500 kg',
      capacity: '4500-6000 kg/saat'
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
  },
  'tree-root': {
    'TW-100': {
      motorPower: '132–160 kW',
      rotorLength: '500 mm',
      rotorDiameter: 'Ø 1000 mm',
      bladeCount: 'Çok Bıçaklı Rotor',
      weight: 'Orta Ölçekli',
      capacity: 'Orta Kapasite'
    },
    'TW-150': {
      motorPower: '160–220 kW',
      rotorLength: '800 mm',
      rotorDiameter: 'Ø 1500 mm',
      bladeCount: '28-32 adet',
      weight: 'Büyük Ölçekli',
      capacity: 'Yüksek Kapasite'
    },
    'TW-200': {
      motorPower: '220–315 kW',
      rotorLength: '1000 mm',
      rotorDiameter: 'Ø 2000 mm',
      bladeCount: '36-40 adet',
      weight: 'Endüstriyel',
      capacity: '8-15 ton/saat'
    }
  },
  'wood': {
    'TSY-100': {
      motorPower: '55–90 kW (2X)',
      rotorLength: '1000 mm',
      rotorDiameter: 'Yatay Tasarım',
      bladeCount: 'Sertleştirilmiş Çelik Bıçak',
      weight: 'Orta Ölçekli',
      capacity: '3-8 ton/saat'
    },
    'TSY-150': {
      motorPower: '75–110 kW (2X)',
      rotorLength: '1500 mm',
      rotorDiameter: 'Yatay Tasarım',
      bladeCount: 'Hardox Özel Alaşım',
      weight: 'Büyük Ölçekli',
      capacity: '5-12 ton/saat'
    },
    'TSY-200': {
      motorPower: '90–200 kW (2X)',
      rotorLength: '2000 mm',
      rotorDiameter: 'Yatay Tasarım',
      bladeCount: 'Hardox 500',
      weight: 'Endüstriyel',
      capacity: '8-15 ton/saat'
    }
  },
  'glass': {
    'CK-200': {
      motorPower: '1.5-3 kW',
      rotorLength: '200 mm',
      rotorDiameter: '200 x 200 mm',
      bladeCount: '12 adet',
      weight: '400 kg',
      capacity: '100-200 kg/saat'
    },
    'CK-400': {
      motorPower: '3-7.5 kW',
      rotorLength: '400 mm',
      rotorDiameter: '400 x 400 mm',
      bladeCount: '24 adet',
      weight: '600 kg',
      capacity: '200-400 kg/saat'
    },
    'CKS-400': {
      motorPower: '3-7.5 kW',
      rotorLength: '400 mm',
      rotorDiameter: '400 x 400 mm',
      bladeCount: '24 adet',
      weight: '650 kg',
      capacity: '200-400 kg/saat'
    },
    'GB-300': {
      motorPower: '3-4 kW',
      rotorLength: '300 mm',
      rotorDiameter: '300 x 300 mm',
      bladeCount: '16 adet',
      weight: '450 kg',
      capacity: '250-450 kg/saat'
    }
  },
  'mobile': {
    'TSM-150': {
      motorPower: '400 HP',
      rotorLength: '1500 mm',
      rotorDiameter: 'Tek Şaftlı',
      bladeCount: 'Sertleştirilmiş Çelik',
      weight: 'Mobil Şase',
      capacity: '1500 x 1800 mm'
    },
    'TSM-300': {
      motorPower: '600 HP',
      rotorLength: '3000 mm',
      rotorDiameter: 'Tek Şaftlı',
      bladeCount: 'Sertleştirilmiş Çelik',
      weight: 'Mobil Şase',
      capacity: '3000 x 2000 mm'
    },
    'CSM-150': {
      motorPower: '400 HP',
      rotorLength: '1500 mm',
      rotorDiameter: 'Çift Şaftlı',
      bladeCount: 'Sertleştirilmiş Çelik',
      weight: 'Mobil Şase',
      capacity: '1500 x 1200 mm'
    },
    'CSM-200': {
      motorPower: '800 HP',
      rotorLength: '2000 mm',
      rotorDiameter: 'Çift Şaftlı',
      bladeCount: 'Sertleştirilmiş Çelik',
      weight: 'Mobil Şase',
      capacity: '2000 x 1800 mm'
    }
  },
};

// Available models for each product type
const availableModels: { [key: string]: string[] } = {
  'single-shaft': ['TSH-60', 'TSH-80', 'TSH-100', 'TSH-130', 'TSH-160', 'TSH-200'],
  'dual-shaft': ['CS-20', 'CS-40', 'CS-60', 'CS-80', 'CS-100', 'CS-120', 'CS-150', 'CS-180', 'CS-200'],
  'quad-shaft': ['DS-80', 'DS-100', 'DS-150', 'DS-200'],
  'metal': ['RDM-100', 'RDM-150', 'RDM-180', 'RDM-200'],
  'harddisk': ['DATABER-S', 'DATABER-D', 'DATABER-T'],
  'mobile': ['TSM-150', 'TSM-300', 'CSM-150', 'CSM-200'],
  'pallet': ['TSV-140', 'TSV-200', 'TSVX-200'],
  'tree-root': ['TW-100', 'TW-150', 'TW-200'],
  'wood': ['TSY-100', 'TSY-150', 'TSY-200'],
  'glass': ['CK-200', 'CK-400', 'CKS-400', 'GB-300']
};

// Title/Subtitle mapping for each product type
const productTitleKeys: { [key: string]: { title: string; subtitle: string } } = {
  'single-shaft': { title: 'single_shaft_main_title', subtitle: 'single_shaft_subtitle' },
  'dual-shaft': { title: 'dual_shaft_main_title', subtitle: 'dual_shaft_subtitle' },
  'quad-shaft': { title: 'quad_shaft_main_title', subtitle: 'quad_shaft_subtitle' },
  'metal': { title: 'metal_main_title', subtitle: 'metal_subtitle' },
  'harddisk': { title: 'harddisk_main_title', subtitle: 'harddisk_subtitle' },
  'mobile': { title: 'mobile_main_title', subtitle: 'mobile_subtitle' },
  'pallet': { title: 'pallet_main_title', subtitle: 'pallet_subtitle' },
  'tree-root': { title: 'tree_root_main_title', subtitle: 'tree_root_subtitle' },
  'wood': { title: 'wood_main_title', subtitle: 'wood_subtitle' },
  'glass': { title: 'glass_main_title', subtitle: 'glass_subtitle' }
};

// Description keys mapping for each product type
const productDescriptionKeys: { [key: string]: string } = {
  'single-shaft': 'single_shaft',
  'dual-shaft': 'dual_shaft',
  'quad-shaft': 'quad_shaft',
  'metal': 'metal',
  'harddisk': 'harddisk',
  'mobile': 'mobile',
  'pallet': 'pallet',
  'tree-root': 'tree_root',
  'wood': 'wood',
  'glass': 'glass'
};

const getTranslationKeyPrefix = (type: string) => {
  if (type === 'mobile') return 'mobile_crusher';
  if (type === 'single-shaft') return 'single_shaft';
  if (type === 'dual-shaft') return 'dual_shaft';
  if (type === 'quad-shaft') return 'quad_shaft';
  return type.replace(/-/g, '_');
};



export const ProductDetailPage = ({
  productType,
  modelName,
  onBackToMain,
  onECatalogClick,
  onProductDetailClick
}: ProductDetailPageProps) => {
  const { t, isRTL, language } = useLanguage();
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

  // Normalize legacy product type keys
  // Normalize legacy product type keys
  const currentProductType = productType;

  // DEBUG - Check what productType we're receiving
  console.log('🔍 ProductDetailPage Rendered:', { productType, modelName, language });

  // Set default model based on product type
  const defaultModelName = modelName || (productType === 'tree-root' ? 'TW-100' : productType === 'wood' ? 'TSY-100' : 'TSH-60');

  // Get dynamic image paths based on model from GitHub
  const images = getModelImages(currentProductType, defaultModelName);

  // Get fallback image for this product type
  const fallbackImage = getFallbackImage(currentProductType);

  // Debug: Log image paths (only in development)
  React.useEffect(() => {
    if (process.env.NODE_ENV === 'development') {
      console.log('🖼️ Image paths for', defaultModelName, ':', images);
      console.log('📍 Main image URL:', images.main);
      console.log('🔄 Fallback URL:', fallbackImage);
    }
  }, [defaultModelName]);

  // Get current model specs
  const currentSpecs = modelSpecifications[currentProductType]?.[defaultModelName];

  // Get available models for current product type
  const models = availableModels[currentProductType] || [];

  // Get model-specific description with current language
  const modelDesc = getModelDescription(currentProductType, defaultModelName, language);
  const hasCustomDesc = hasModelDescription(currentProductType, defaultModelName);

  // Get product title based on type
  const getProductTitle = () => {
    switch (currentProductType) {
      case 'single-shaft':
        return t('single_shaft_main_title');
      case 'dual-shaft':
        return t('dual_shaft_main_title');
      case 'quad-shaft':
        return t('quad_shaft_main_title');
      case 'metal':
        return t('metal_main_title');
      case 'mobile':
        return t('mobile_main_title');
      case 'pallet':
        return t('pallet_main_title');
      case 'harddisk':
        return t('harddisk_main_title');
      case 'tree-root':
        return t('tree_root_main_title');
      case 'wood':
        return t('wood_main_title');
      case 'glass':
        return t('glass_main_title');
      default:
        return t('single_shaft_main_title');
    }
  };

  // Get product subtitle based on type
  const getProductSubtitle = () => {
    if (hasCustomDesc && modelDesc) return modelDesc.intro;

    switch (currentProductType) {
      case 'single-shaft':
        return t('single_shaft_subtitle');
      case 'dual-shaft':
        return t('dual_shaft_subtitle');
      case 'quad-shaft':
        return t('quad_shaft_subtitle');
      case 'metal':
        return t('metal_subtitle');
      case 'mobile':
        return t('mobile_subtitle');
      case 'pallet':
        return t('pallet_subtitle');
      case 'harddisk':
        return t('harddisk_subtitle');
      case 'tree-root':
        return t('tree_root_subtitle');
      case 'wood':
        return t('wood_subtitle');
      case 'glass':
        return t('glass_subtitle');
      default:
        return t('single_shaft_subtitle');
    }
  };

  // Handle model change
  const handleModelChange = (newModel: string) => {
    if (onProductDetailClick) {
      onProductDetailClick(productType, newModel);
    }
  };

  // Generate SEO-optimized image alt text
  const getImageAlt = (context?: string) => {
    const productName = `${defaultModelName} ${getProductTitle()}`;
    if (language === 'en') {
      return context
        ? `${productName} ${context} - Industrial Shredder Manufacturer Turkey`
        : `${productName} - Industrial Shredder Manufacturer Turkey`;
    }
    return context
      ? `${productName} ${context} - MT Makina`
      : `${productName} - MT Makina`;
  };

  // Scroll to top when component mounts
  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [productType, defaultModelName]);

  // Single Shaft, Harddisk, Mobile, Tree Root, Wood, and Glass Product Data (using same layout)
  if (currentProductType === 'single-shaft' || productType === 'harddisk' || productType === 'mobile' || productType === 'tree-root' || productType === 'wood' || productType === 'glass') {
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
                  href: `/${language}/${productCategorySlugs[currentProductType as keyof typeof productCategorySlugs]?.[language as 'tr' | 'en' | 'ru' | 'ar'] || 'urunler'}`.replace(/\/[^/]+$/, ''),
                  onClick: onBackToMain
                },
                {
                  label: getProductTitle(),
                  href: `/${language}/${productCategorySlugs[currentProductType as keyof typeof productCategorySlugs]?.[language as 'tr' | 'en' | 'ru' | 'ar'] || currentProductType}`
                },
                {
                  label: defaultModelName
                }
              ]}
            />
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
                    className={`px-4 py-2 rounded-lg transition-all ${model === modelName
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
                {defaultModelName} {getProductTitle()}
              </h1>
              <p className="text-[#F5F7F8] text-xl max-w-3xl mx-auto">
                {getProductSubtitle()}
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
                alt={getImageAlt()}
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
                    {t(`${productDescriptionKeys[productType] || 'single_shaft'}_description_1`)}
                  </p>
                  <p className="text-[#45474B] leading-relaxed mb-6">
                    {t(`${productDescriptionKeys[productType] || 'single_shaft'}_description_2`)}
                  </p>
                  <p className="text-[#45474B] leading-relaxed">
                    {t(`${productDescriptionKeys[productType] || 'single_shaft'}_description_3`)}
                  </p>
                </>
              )}
            </motion.div>
          </div>
        </section>

        {/* Tree Root Application Areas Section */}
        {productType === 'tree-root' && (
          <section className="py-16 bg-[#F5F7F8]">
            <div className="container mx-auto px-4 lg:px-8 max-w-[1440px]">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-[#45474B] mb-8 text-center text-2xl md:text-3xl">
                  {t('tree_root_application_title')}
                </h2>
                <div className="prose prose-lg max-w-none">
                  <p className="text-[#45474B] leading-relaxed mb-6 text-lg" style={{ lineHeight: '1.8' }}>
                    {t('tree_root_application_desc')}
                  </p>
                  <p className="text-[#45474B] leading-relaxed mb-6 text-lg" style={{ lineHeight: '1.8' }}>
                    {t('tree_root_application_desc2')}
                  </p>
                  <p className="text-[#45474B] leading-relaxed text-lg" style={{ lineHeight: '1.8' }}>
                    {t('tree_root_application_desc3')}
                  </p>
                </div>
              </motion.div>
            </div>
          </section>
        )}

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
              className="text-center text-[#1E1E1E] mb-16 text-3xl font-bold"
            >
              {t(productType === 'tree-root' ? 'tree_root_advantages_title' : productType === 'wood' ? 'wood_advantages_title' : productType === 'harddisk' ? 'harddisk_advantages_title' : productType === 'glass' ? 'glass_advantages_title' : 'single_shaft_advantages_title')}
            </motion.h2>

            <div className={`grid grid-cols-1 ${productType === 'harddisk' || productType === 'tree-root' || productType === 'wood' || productType === 'glass' ? 'md:grid-cols-2 lg:grid-cols-4' : 'md:grid-cols-3'} gap-8`}>
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
                <h3 className="text-[#1E1E1E] mb-4">{t(productType === 'tree-root' ? 'tree_root_adv_1_title' : productType === 'wood' ? 'wood_adv_1_title' : productType === 'harddisk' ? 'harddisk_adv_1_title' : productType === 'glass' ? 'glass_adv_1_title' : 'single_shaft_adv_1_title')}</h3>
                <p className="text-[#45474B]">{t(productType === 'tree-root' ? 'tree_root_adv_1_desc' : productType === 'wood' ? 'wood_adv_1_desc' : productType === 'harddisk' ? 'harddisk_adv_1_desc' : productType === 'glass' ? 'glass_adv_1_desc' : 'single_shaft_adv_1_desc')}</p>
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
                  {productType === 'tree-root' ? <Zap size={32} className="text-[#F4CE14]" /> : <RotateCcw size={32} className="text-[#F4CE14]" />}
                </div>
                <h3 className="text-[#1E1E1E] mb-4">{t(productType === 'tree-root' ? 'tree_root_adv_2_title' : productType === 'wood' ? 'wood_adv_2_title' : productType === 'harddisk' ? 'harddisk_adv_2_title' : productType === 'glass' ? 'glass_adv_2_title' : 'single_shaft_adv_2_title')}</h3>
                <p className="text-[#45474B]">{t(productType === 'tree-root' ? 'tree_root_adv_2_desc' : productType === 'wood' ? 'wood_adv_2_desc' : productType === 'harddisk' ? 'harddisk_adv_2_desc' : productType === 'glass' ? 'glass_adv_2_desc' : 'single_shaft_adv_2_desc')}</p>
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
                  {productType === 'tree-root' ? <Shield size={32} className="text-[#F4CE14]" /> : <Volume2 size={32} className="text-[#F4CE14]" />}
                </div>
                <h3 className="text-[#1E1E1E] mb-4">{t(productType === 'tree-root' ? 'tree_root_adv_3_title' : productType === 'wood' ? 'wood_adv_3_title' : productType === 'harddisk' ? 'harddisk_adv_3_title' : productType === 'glass' ? 'glass_adv_3_title' : 'single_shaft_adv_3_title')}</h3>
                <p className="text-[#45474B]">{t(productType === 'tree-root' ? 'tree_root_adv_3_desc' : productType === 'wood' ? 'wood_adv_3_desc' : productType === 'harddisk' ? 'harddisk_adv_3_desc' : productType === 'glass' ? 'glass_adv_3_desc' : 'single_shaft_adv_3_desc')}</p>
              </motion.div>

              {/* Advantage 4 - For harddisk, tree-root, wood and glass */}
              {(productType === 'harddisk' || productType === 'tree-root' || productType === 'wood' || productType === 'glass') && (
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="bg-white rounded-2xl p-8 shadow-xl"
                >
                  <div className="w-16 h-16 bg-[#45474B] rounded-xl flex items-center justify-center mb-6">
                    {productType === 'tree-root' ? <Wrench size={32} className="text-[#F4CE14]" /> : <Zap size={32} className="text-[#F4CE14]" />}
                  </div>
                  <h3 className="text-[#1E1E1E] mb-4">{t(productType === 'tree-root' ? 'tree_root_adv_4_title' : productType === 'wood' ? 'wood_adv_4_title' : productType === 'glass' ? 'glass_adv_4_title' : 'harddisk_adv_4_title')}</h3>
                  <p className="text-[#45474B]">{t(productType === 'tree-root' ? 'tree_root_adv_4_desc' : productType === 'wood' ? 'wood_adv_4_desc' : productType === 'glass' ? 'glass_adv_4_desc' : 'harddisk_adv_4_desc')}</p>
                </motion.div>
              )}
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
              className="text-center text-[#45474B] mb-16 text-3xl font-bold"
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
                    alt={`${t('single_shaft_perf_1')} - ${getProductTitle()} - MT Makina`}
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
                    alt={`${t('single_shaft_perf_2')} - ${getProductTitle()} - MT Makina`}
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
                    alt={`${t('single_shaft_perf_3')} - ${getProductTitle()} - MT Makina`}
                    className="w-full h-64 object-cover"
                    fallbackSrc={fallbackImage}
                  />
                </motion.div>
                <p className="text-center text-[#45474B]">{t('single_shaft_perf_3')}</p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Tree Root Model-Specific Highlights */}
        {productType === 'tree-root' && (
          <section className="py-16 bg-[#45474B]">
            <div className="container mx-auto px-4 lg:px-8 max-w-[1440px]">
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center text-[#F4CE14] mb-12 text-3xl font-bold"
              >
                {defaultModelName === 'TW-100' ? t('tw100_highlights_title') :
                  defaultModelName === 'TW-150' ? t('tw150_highlights_title') :
                    t('tw200_highlights_title')}
              </motion.h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {defaultModelName === 'TW-100' && (
                  <>
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      className="bg-[#F5F7F8] rounded-xl p-6 border-2 border-[#F4CE14] hover:shadow-2xl transition-all"
                    >
                      <h4 className="text-[#F4CE14] mb-3">🌲 {t('tw100_feature_1_title')}</h4>
                      <p className="text-[#45474B] text-sm">{t('tw100_feature_1_desc')}</p>
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 }}
                      className="bg-[#F5F7F8] rounded-xl p-6 border-2 border-[#F4CE14] hover:shadow-2xl transition-all"
                    >
                      <h4 className="text-[#F4CE14] mb-3">⚡ {t('tw100_feature_2_title')}</h4>
                      <p className="text-[#45474B] text-sm">{t('tw100_feature_2_desc')}</p>
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 }}
                      className="bg-[#F5F7F8] rounded-xl p-6 border-2 border-[#F4CE14] hover:shadow-2xl transition-all"
                    >
                      <h4 className="text-[#F4CE14] mb-3">💰 {t('tw100_feature_3_title')}</h4>
                      <p className="text-[#45474B] text-sm">{t('tw100_feature_3_desc')}</p>
                    </motion.div>
                  </>
                )}

                {defaultModelName === 'TW-150' && (
                  <>
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      className="bg-[#F5F7F8] rounded-xl p-6 border-2 border-[#F4CE14] hover:shadow-2xl transition-all"
                    >
                      <h4 className="text-[#F4CE14] mb-3">🏭 {t('tw150_feature_1_title')}</h4>
                      <p className="text-[#45474B] text-sm">{t('tw150_feature_1_desc')}</p>
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 }}
                      className="bg-[#F5F7F8] rounded-xl p-6 border-2 border-[#F4CE14] hover:shadow-2xl transition-all"
                    >
                      <h4 className="text-[#F4CE14] mb-3">🚜 {t('tw150_feature_2_title')}</h4>
                      <p className="text-[#45474B] text-sm">{t('tw150_feature_2_desc')}</p>
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 }}
                      className="bg-[#F5F7F8] rounded-xl p-6 border-2 border-[#F4CE14] hover:shadow-2xl transition-all"
                    >
                      <h4 className="text-[#F4CE14] mb-3">🔧 {t('tw150_feature_3_title')}</h4>
                      <p className="text-[#45474B] text-sm">{t('tw150_feature_3_desc')}</p>
                    </motion.div>
                  </>
                )}

                {defaultModelName === 'TW-200' && (
                  <>
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      className="bg-[#F5F7F8] rounded-xl p-6 border-2 border-[#F4CE14] hover:shadow-2xl transition-all"
                    >
                      <h4 className="text-[#F4CE14] mb-3">🏆 {t('tw200_feature_1_title')}</h4>
                      <p className="text-[#45474B] text-sm">{t('tw200_feature_1_desc')}</p>
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 }}
                      className="bg-[#F5F7F8] rounded-xl p-6 border-2 border-[#F4CE14] hover:shadow-2xl transition-all"
                    >
                      <h4 className="text-[#F4CE14] mb-3">🤖 {t('tw200_feature_2_title')}</h4>
                      <p className="text-[#45474B] text-sm">{t('tw200_feature_2_desc')}</p>
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 }}
                      className="bg-[#F5F7F8] rounded-xl p-6 border-2 border-[#F4CE14] hover:shadow-2xl transition-all"
                    >
                      <h4 className="text-[#F4CE14] mb-3">🌍 {t('tw200_feature_3_title')}</h4>
                      <p className="text-[#45474B] text-sm">{t('tw200_feature_3_desc')}</p>
                    </motion.div>
                  </>
                )}
              </div>
            </div>
          </section>
        )}

        {/* Technical Specifications */}
        <section className="py-20 bg-[#F5F7F8]">
          <div className="container mx-auto px-4 lg:px-8 max-w-[1440px]">
            <motion.h3
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center text-[#45474B] mb-8 text-3xl font-bold"
            >
              {t(productType === 'tree-root' ? 'tree_root_tech_specs_title' : productType === 'wood' ? 'wood_tech_specs_title' : 'single_shaft_tech_specs_title')}
            </motion.h3>

            {currentSpecs && (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="max-w-4xl mx-auto min-w-full rounded-xl overflow-hidden shadow-xl bg-white ring-1 ring-gray-100"
              >
                <table className="w-full">
                  <tbody>
                    <tr className="border-b border-gray-200">
                      <td className="px-6 py-4 bg-[#F4CE14] text-[#1E1E1E] font-bold w-1/3 text-lg">Model</td>
                      <td className="px-6 py-4 text-[#1E1E1E] font-medium text-lg bg-white">{modelName}</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="px-6 py-4 bg-[#F4CE14] text-[#1E1E1E] font-bold text-lg">Motor Gücü</td>
                      <td className="px-6 py-4 text-[#1E1E1E] font-medium text-lg bg-white">{currentSpecs.motorPower}</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="px-6 py-4 bg-[#F4CE14] text-[#1E1E1E] font-bold text-lg">Rotor Uzunluğu</td>
                      <td className="px-6 py-4 text-[#1E1E1E] font-medium text-lg bg-white">{currentSpecs.rotorLength}</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="px-6 py-4 bg-[#F4CE14] text-[#1E1E1E] font-bold text-lg">Parçalama Alanı</td>
                      <td className="px-6 py-4 text-[#1E1E1E] font-medium text-lg bg-white">{currentSpecs.rotorDiameter}</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="px-6 py-4 bg-[#F4CE14] text-[#1E1E1E] font-bold text-lg">Bıçak Sayısı</td>
                      <td className="px-6 py-4 text-[#1E1E1E] font-medium text-lg bg-white">{currentSpecs.bladeCount}</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="px-6 py-4 bg-[#F4CE14] text-[#1E1E1E] font-bold text-lg">Ağırlık</td>
                      <td className="px-6 py-4 text-[#1E1E1E] font-medium text-lg bg-white">{currentSpecs.weight}</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 bg-[#F4CE14] text-[#1E1E1E] font-bold text-lg">Kapasite</td>
                      <td className="px-6 py-4 text-[#1E1E1E] font-medium text-lg bg-white">{currentSpecs.capacity}</td>
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
              className="text-center mt-12 flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <button
                onClick={onECatalogClick}
                className="inline-flex items-center justify-center gap-2 rounded-2xl text-lg font-medium shadow-xl hover:shadow-2xl transition-all duration-300"
                style={{
                  padding: '16px 32px',
                  backgroundColor: '#F4CE14',
                  color: '#1E1E1E'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#e0b912';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#F4CE14';
                }}
              >
                <FileDown size={24} className={`${isRTL ? 'ml-2' : 'mr-2'}`} />
                {t('single_shaft_ecatalog_btn')}
              </button>

              {/* Quote Request Button */}
              <button
                onClick={() => setIsQuoteModalOpen(true)}
                className="inline-flex items-center justify-center gap-2 rounded-2xl text-lg font-medium shadow-xl hover:shadow-2xl transition-all duration-300"
                style={{
                  padding: '16px 32px',
                  background: 'linear-gradient(to right, #dc2626, #b91c1c)',
                  color: '#ffffff'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'linear-gradient(to right, #b91c1c, #991b1b)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'linear-gradient(to right, #dc2626, #b91c1c)';
                }}
              >
                <FileText size={24} className={`${isRTL ? 'ml-2' : 'mr-2'}`} />
                {language === 'tr' ? 'Teklif İste' : language === 'en' ? 'Request Quote' : language === 'ru' ? 'Запросить цену' : 'طلب عرض سعر'}
              </button>
            </motion.div>

            {/* Optional Features */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto mt-16"
            >
              <h3 className="text-center text-[#45474B] mb-8 text-3xl font-bold">
                {productType === 'pallet' ? t('pallet_optional_features_title') : productType === 'tree-root' ? t('tree_root_optional_features_title') : productType === 'wood' ? t('wood_optional_features_title') : 'Opsiyonel Özellikler'}
              </h3>
              <div className={`grid grid-cols-1 md:grid-cols-2 gap-6 ${productType === 'pallet' || productType === 'tree-root' || productType === 'wood' ? 'md:grid-cols-2 lg:grid-cols-3' : ''}`}>
                {productType === 'pallet' ? (
                  <>
                    {[1, 2, 3, 4, 5, 6, 7].map((num) => (
                      <motion.div
                        key={num}
                        whileHover={{ scale: 1.05 }}
                        className="bg-white rounded-xl p-6 shadow-lg border-2 border-[#F4CE14]/20 hover:border-[#F4CE14] transition-all"
                      >
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 bg-[#F4CE14] rounded-lg flex items-center justify-center">
                            <Settings size={24} className="text-[#1E1E1E]" />
                          </div>
                          <p className="text-[#1E1E1E]">{t(`pallet_optional_${num}`)}</p>
                        </div>
                      </motion.div>
                    ))}
                  </>
                ) : productType === 'tree-root' ? (
                  <>
                    {[1, 2, 3, 4, 5, 6].map((num) => (
                      <motion.div
                        key={num}
                        whileHover={{ scale: 1.05 }}
                        className="bg-white rounded-xl p-6 shadow-lg border-2 border-[#F4CE14]/20 hover:border-[#F4CE14] transition-all"
                      >
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 bg-[#F4CE14] rounded-lg flex items-center justify-center">
                            <Settings size={24} className="text-[#1E1E1E]" />
                          </div>
                          <p className="text-[#1E1E1E]">{t(`tree_root_optional_${num}`)}</p>
                        </div>
                      </motion.div>
                    ))}
                  </>
                ) : productType === 'wood' ? (
                  <>
                    {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                      <motion.div
                        key={num}
                        whileHover={{ scale: 1.05 }}
                        className="bg-white rounded-xl p-6 shadow-lg border-2 border-[#F4CE14]/20 hover:border-[#F4CE14] transition-all"
                      >
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 bg-[#F4CE14] rounded-lg flex items-center justify-center">
                            <Settings size={24} className="text-[#1E1E1E]" />
                          </div>
                          <p className="text-[#1E1E1E]">{t(`wood_optional_${num}`)}</p>
                        </div>
                      </motion.div>
                    ))}
                  </>
                ) : (
                  <>
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
                  </>
                )}
              </div>
            </motion.div>

            {/* Global Shipping & Installation - EN only */}
            {language === 'en' && (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="max-w-4xl mx-auto mt-16 bg-gradient-to-r from-[#45474B] to-[#2F3032] rounded-2xl p-8 shadow-xl"
              >
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 bg-[#F4CE14] rounded-xl flex items-center justify-center flex-shrink-0">
                    <Truck size={32} className="text-[#1E1E1E]" />
                  </div>
                  <div>
                    <h3 className="text-[#F4CE14] text-2xl font-bold mb-4">Global Shipping & Installation</h3>
                    <p className="text-[#F5F7F8] text-lg leading-relaxed">
                      MT Makina provides worldwide shipping, on-site installation, and 24/7 technical support for all {defaultModelName} {getProductTitle()} models.
                      Our expert team ensures seamless setup and training at your facility, backed by comprehensive warranty coverage.
                    </p>
                    <div className="flex flex-wrap gap-4 mt-6">
                      <span className="bg-[#F4CE14]/20 text-[#F4CE14] px-4 py-2 rounded-lg text-sm font-medium">✓ Worldwide Export</span>
                      <span className="bg-[#F4CE14]/20 text-[#F4CE14] px-4 py-2 rounded-lg text-sm font-medium">✓ On-site Installation</span>
                      <span className="bg-[#F4CE14]/20 text-[#F4CE14] px-4 py-2 rounded-lg text-sm font-medium">✓ 24/7 Technical Support</span>
                      <span className="bg-[#F4CE14]/20 text-[#F4CE14] px-4 py-2 rounded-lg text-sm font-medium">✓ CE Certified</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        </section>

        {/* FAQ Section - Dynamic based on productType */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 lg:px-8 max-w-[1440px]">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center text-[#45474B] mb-12 text-3xl font-bold"
            >
              {t(`${getTranslationKeyPrefix(productType)}_faq_title`)}
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto"
            >
              <Accordion type="single" collapsible className="space-y-4">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((num) => {
                  // Check if FAQ exists for this number
                  // Replace hyphens with underscores for translation keys
                  const normalizedProductType = getTranslationKeyPrefix(productType);
                  const questionKey = `${normalizedProductType}_faq_q${num}`;
                  const answerKey = `${normalizedProductType}_faq_a${num}`;
                  const question = t(questionKey);
                  const answer = t(answerKey);

                  // Skip if translation returns the key itself (meaning it doesn't exist)
                  if (question === questionKey || answer === answerKey) {
                    return null;
                  }

                  return (
                    <AccordionItem
                      key={`item-${num}`}
                      value={`item-${num}`}
                      className="bg-[#F5F7F8] rounded-xl px-6 border-none"
                    >
                      <AccordionTrigger className="text-[#45474B] hover:text-[#F4CE14]">
                        {question}
                      </AccordionTrigger>
                      <AccordionContent className="text-[#45474B] leading-relaxed">
                        {answer}
                      </AccordionContent>
                    </AccordionItem>
                  );
                })}
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
              className="text-center text-[#45474B] mb-12 text-3xl font-bold"
            >
              {t(`${getTranslationKeyPrefix(productType)}_video_title`)}
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
                  {t(`${getTranslationKeyPrefix(productType)}_watch_video`)}
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
              className="text-center text-[#45474B] mb-12 text-3xl font-bold"
            >
              {t(`${getTranslationKeyPrefix(productType)}_similar_products`)}
            </motion.h2>

            <SimilarProductsSection
              currentProductType={productType}
              onProductClick={onProductDetailClick}
            />
          </div>
        </section>

        {/* Quote Request Modal */}
        <QuoteRequestModal
          isOpen={isQuoteModalOpen}
          onClose={() => setIsQuoteModalOpen(false)}
          productType={productType}
          modelName={defaultModelName}
        />
      </div>
    );
  }

  // Dual Shaft and Pallet Product Pages (using same layout)
  if (currentProductType === 'dual-shaft' || productType === 'pallet') {
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
                  href: `/${language}/${productCategorySlugs[currentProductType as keyof typeof productCategorySlugs]?.[language as 'tr' | 'en' | 'ru' | 'ar'] || 'urunler'}`.replace(/\/[^/]+$/, ''),
                  onClick: onBackToMain
                },
                {
                  label: getProductTitle(),
                  href: `/${language}/${productCategorySlugs[currentProductType as keyof typeof productCategorySlugs]?.[language as 'tr' | 'en' | 'ru' | 'ar'] || currentProductType}`
                },
                {
                  label: defaultModelName
                }
              ]}
            />
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
                    className={`px-4 py-2 rounded-lg transition-all ${model === modelName
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
                {t(productTitleKeys[productType]?.title || 'product_' + productType)}
              </h1>
              <p className="text-[#F5F7F8] text-xl max-w-3xl mx-auto">
                {t(productTitleKeys[productType]?.subtitle || 'product_' + productType + '_subtitle')}
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
                alt={`${modelName} ${t(productTitleKeys[productType]?.title || 'product_' + productType)}`}
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
              className="text-center text-[#1E1E1E] mb-16 text-3xl font-bold"
            >
              {t(productType === 'pallet' ? 'pallet_advantages_title' : 'dual_shaft_advantages_title')}
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
                <h3 className="text-[#1E1E1E] mb-4">{t(productType === 'pallet' ? 'pallet_adv_1_title' : 'dual_shaft_adv_1_title')}</h3>
                <p className="text-[#45474B]">{t(productType === 'pallet' ? 'pallet_adv_1_desc' : 'dual_shaft_adv_1_desc')}</p>
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
                  {productType === 'pallet' ? <Zap size={32} className="text-[#F4CE14]" /> : <RotateCcw size={32} className="text-[#F4CE14]" />}
                </div>
                <h3 className="text-[#1E1E1E] mb-4">{t(productType === 'pallet' ? 'pallet_adv_2_title' : 'dual_shaft_adv_2_title')}</h3>
                <p className="text-[#45474B]">{t(productType === 'pallet' ? 'pallet_adv_2_desc' : 'dual_shaft_adv_2_desc')}</p>
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
                  {productType === 'pallet' ? <Shield size={32} className="text-[#F4CE14]" /> : <Volume2 size={32} className="text-[#F4CE14]" />}
                </div>
                <h3 className="text-[#1E1E1E] mb-4">{t(productType === 'pallet' ? 'pallet_adv_3_title' : 'dual_shaft_adv_3_title')}</h3>
                <p className="text-[#45474B]">{t(productType === 'pallet' ? 'pallet_adv_3_desc' : 'dual_shaft_adv_3_desc')}</p>
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
                  {productType === 'pallet' ? <Wrench size={32} className="text-[#F4CE14]" /> : <Settings size={32} className="text-[#F4CE14]" />}
                </div>
                <h3 className="text-[#1E1E1E] mb-4">{t(productType === 'pallet' ? 'pallet_adv_4_title' : 'dual_shaft_adv_4_title')}</h3>
                <p className="text-[#45474B]">{t(productType === 'pallet' ? 'pallet_adv_4_desc' : 'dual_shaft_adv_4_desc')}</p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Performance Section with 3 Images - Only for dual-saft */}
        {productType !== 'pallet' && (
          <section className="py-20 bg-white">
            <div className="container mx-auto px-4 lg:px-8 max-w-[1440px]">
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center text-[#45474B] mb-16 text-3xl font-bold"
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
        )}

        {/* Technical Specifications Table */}
        <section className="py-20 bg-[#F5F7F8]">
          <div className="container mx-auto px-4 lg:px-8 max-w-[1440px]">
            <motion.h3
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center text-[#45474B] mb-8 text-3xl font-bold"
            >
              {t(productType === 'pallet' ? 'pallet_tech_specs_title' : 'dual_shaft_tech_specs_title')}
            </motion.h3>

            {currentSpecs && (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="max-w-4xl mx-auto min-w-full rounded-xl overflow-hidden shadow-xl bg-white ring-1 ring-gray-100"
              >
                <table className="w-full">
                  <tbody>
                    <tr className="border-b border-gray-200">
                      <td className="px-6 py-4 bg-[#F4CE14] text-[#1E1E1E] font-bold w-1/3 text-lg">Model</td>
                      <td className="px-6 py-4 text-[#1E1E1E] font-medium text-lg bg-white">{modelName}</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="px-6 py-4 bg-[#F4CE14] text-[#1E1E1E] font-bold text-lg">Motor Gücü</td>
                      <td className="px-6 py-4 text-[#1E1E1E] font-medium text-lg bg-white">{currentSpecs.motorPower}</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="px-6 py-4 bg-[#F4CE14] text-[#1E1E1E] font-bold text-lg">Rotor Uzunluğu</td>
                      <td className="px-6 py-4 text-[#1E1E1E] font-medium text-lg bg-white">{currentSpecs.rotorLength}</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="px-6 py-4 bg-[#F4CE14] text-[#1E1E1E] font-bold text-lg">Parçalama Alanı</td>
                      <td className="px-6 py-4 text-[#1E1E1E] font-medium text-lg bg-white">{currentSpecs.rotorDiameter}</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="px-6 py-4 bg-[#F4CE14] text-[#1E1E1E] font-bold text-lg">Bıçak Sayısı</td>
                      <td className="px-6 py-4 text-[#1E1E1E] font-medium text-lg bg-white">{currentSpecs.bladeCount}</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="px-6 py-4 bg-[#F4CE14] text-[#1E1E1E] font-bold text-lg">Ağırlık</td>
                      <td className="px-6 py-4 text-[#1E1E1E] font-medium text-lg bg-white">{currentSpecs.weight}</td>
                    </tr>
                    {currentSpecs.screenSize && (
                      <tr className="border-b border-gray-200">
                        <td className="px-6 py-4 bg-[#F4CE14] text-[#1E1E1E] font-bold text-lg">Elek Ölçüsü</td>
                        <td className="px-6 py-4 text-[#1E1E1E] font-medium text-lg bg-white">{currentSpecs.screenSize}</td>
                      </tr>
                    )}
                    <tr>
                      <td className="px-6 py-4 bg-[#F4CE14] text-[#1E1E1E] font-bold text-lg">Kapasite</td>
                      <td className="px-6 py-4 text-[#1E1E1E] font-medium text-lg bg-white">{currentSpecs.capacity}</td>
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
        <StructuredData
          id="faq-dual-shaft"
          data={generateFAQStructuredData([
            { question: t(productType === 'pallet' ? 'pallet_faq_1_q' : 'dual_shaft_faq_q1'), answer: t(productType === 'pallet' ? 'pallet_faq_1_a' : 'dual_shaft_faq_a1') },
            { question: t(productType === 'pallet' ? 'pallet_faq_2_q' : 'dual_shaft_faq_q2'), answer: t(productType === 'pallet' ? 'pallet_faq_2_a' : 'dual_shaft_faq_a2') },
            { question: t(productType === 'pallet' ? 'pallet_faq_3_q' : 'dual_shaft_faq_q3'), answer: t(productType === 'pallet' ? 'pallet_faq_3_a' : 'dual_shaft_faq_a3') },
            { question: t(productType === 'pallet' ? 'pallet_faq_4_q' : 'dual_shaft_faq_q4'), answer: t(productType === 'pallet' ? 'pallet_faq_4_a' : 'dual_shaft_faq_a4') },
            { question: t(productType === 'pallet' ? 'pallet_faq_5_q' : 'dual_shaft_faq_q5'), answer: t(productType === 'pallet' ? 'pallet_faq_5_a' : 'dual_shaft_faq_a5') },
          ])}
        />
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 lg:px-8 max-w-[1440px]">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center text-[#45474B] mb-12 text-3xl font-bold"
            >
              {t('Sıkça Sorulan Sorular')}
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
                    {t(productType === 'pallet' ? 'pallet_faq_1_q' : 'dual_shaft_faq_q1')}
                  </AccordionTrigger>
                  <AccordionContent className="text-[#45474B] leading-relaxed">
                    {t(productType === 'pallet' ? 'pallet_faq_1_a' : 'dual_shaft_faq_a1')}
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2" className="bg-[#F5F7F8] rounded-xl px-6 border-none">
                  <AccordionTrigger className="text-[#45474B] hover:text-[#F4CE14]">
                    {t(productType === 'pallet' ? 'pallet_faq_2_q' : 'dual_shaft_faq_q2')}
                  </AccordionTrigger>
                  <AccordionContent className="text-[#45474B] leading-relaxed">
                    {t(productType === 'pallet' ? 'pallet_faq_2_a' : 'dual_shaft_faq_a2')}
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3" className="bg-[#F5F7F8] rounded-xl px-6 border-none">
                  <AccordionTrigger className="text-[#45474B] hover:text-[#F4CE14]">
                    {t(productType === 'pallet' ? 'pallet_faq_3_q' : 'dual_shaft_faq_q3')}
                  </AccordionTrigger>
                  <AccordionContent className="text-[#45474B] leading-relaxed">
                    {t(productType === 'pallet' ? 'pallet_faq_3_a' : 'dual_shaft_faq_a3')}
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4" className="bg-[#F5F7F8] rounded-xl px-6 border-none">
                  <AccordionTrigger className="text-[#45474B] hover:text-[#F4CE14]">
                    {t(productType === 'pallet' ? 'pallet_faq_4_q' : 'dual_shaft_faq_q4')}
                  </AccordionTrigger>
                  <AccordionContent className="text-[#45474B] leading-relaxed">
                    {t(productType === 'pallet' ? 'pallet_faq_4_a' : 'dual_shaft_faq_a4')}
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-5" className="bg-[#F5F7F8] rounded-xl px-6 border-none">
                  <AccordionTrigger className="text-[#45474B] hover:text-[#F4CE14]">
                    {t(productType === 'pallet' ? 'pallet_faq_5_q' : 'dual_shaft_faq_q5')}
                  </AccordionTrigger>
                  <AccordionContent className="text-[#45474B] leading-relaxed">
                    {t(productType === 'pallet' ? 'pallet_faq_5_a' : 'dual_shaft_faq_a5')}
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
              className="text-center text-[#45474B] mb-12 text-3xl font-bold"
            >
              {t(productType === 'pallet' ? 'pallet_video_title' : 'dual_shaft_video_title')}
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
              className="text-center text-[#45474B] mb-12 text-3xl font-bold"
            >
              {t('dual_shaft_similar_products')}
            </motion.h2>

            <SimilarProductsSection
              currentProductType="dual-saft"
              onProductClick={onProductDetailClick}
            />
          </div>
        </section>
      </div>
    );
  }

  // Quad-Shaft (Dört Şaftlı) Product Data
  if (currentProductType === 'quad-shaft') {
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
                  href: `/${language}/${productCategorySlugs[currentProductType as keyof typeof productCategorySlugs]?.[language as 'tr' | 'en' | 'ru' | 'ar'] || 'urunler'}`.replace(/\/[^/]+$/, ''),
                  onClick: onBackToMain
                },
                {
                  label: getProductTitle(),
                  href: `/${language}/${productCategorySlugs[currentProductType as keyof typeof productCategorySlugs]?.[language as 'tr' | 'en' | 'ru' | 'ar'] || currentProductType}`
                },
                {
                  label: defaultModelName
                }
              ]}
            />
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
                    className={`px-4 py-2 rounded-lg transition-all ${model === modelName
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
              className="text-center text-[#1E1E1E] mb-16 text-3xl font-bold"
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
            <motion.h3
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center text-[#45474B] mb-8 text-3xl font-bold"
            >
              {t('quad_shaft_tech_specs')}
            </motion.h3>

            {currentSpecs && (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="max-w-4xl mx-auto min-w-full rounded-xl overflow-hidden shadow-xl bg-white ring-1 ring-gray-100"
              >
                <table className="w-full">
                  <tbody>
                    <tr className="border-b border-gray-200">
                      <td className="px-6 py-4 bg-[#F4CE14] text-[#1E1E1E] font-bold w-1/3 text-lg">Model</td>
                      <td className="px-6 py-4 text-[#1E1E1E] font-medium text-lg bg-white">{modelName}</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="px-6 py-4 bg-[#F4CE14] text-[#1E1E1E] font-bold text-lg">Motor Gücü</td>
                      <td className="px-6 py-4 text-[#1E1E1E] font-medium text-lg bg-white">{currentSpecs.motorPower}</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="px-6 py-4 bg-[#F4CE14] text-[#1E1E1E] font-bold text-lg">Rotor Boyu</td>
                      <td className="px-6 py-4 text-[#1E1E1E] font-medium text-lg bg-white">{currentSpecs.rotorLength}</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="px-6 py-4 bg-[#F4CE14] text-[#1E1E1E] font-bold text-lg">Parçalama Alanı</td>
                      <td className="px-6 py-4 text-[#1E1E1E] font-medium text-lg bg-white">{currentSpecs.rotorDiameter}</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="px-6 py-4 bg-[#F4CE14] text-[#1E1E1E] font-bold text-lg">Bıçak Sayısı</td>
                      <td className="px-6 py-4 text-[#1E1E1E] font-medium text-lg bg-white">{currentSpecs.bladeCount}</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="px-6 py-4 bg-[#F4CE14] text-[#1E1E1E] font-bold text-lg">Ağırlık</td>
                      <td className="px-6 py-4 text-[#1E1E1E] font-medium text-lg bg-white">{currentSpecs.weight}</td>
                    </tr>
                    {currentSpecs.screenSize && (
                      <tr className="border-b border-gray-200">
                        <td className="px-6 py-4 bg-[#F4CE14] text-[#1E1E1E] font-bold text-lg">Elek Boyutu</td>
                        <td className="px-6 py-4 text-[#1E1E1E] font-medium text-lg bg-white">{currentSpecs.screenSize}</td>
                      </tr>
                    )}
                    <tr>
                      <td className="px-6 py-4 bg-[#F4CE14] text-[#1E1E1E] font-bold text-lg">Kapasite</td>
                      <td className="px-6 py-4 text-[#1E1E1E] font-medium text-lg bg-white">{currentSpecs.capacity}</td>
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
              <h3 className="text-center text-[#45474B] mb-6 text-3xl font-bold">{t('quad_shaft_optional_features')}</h3>
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
                {t('quad_shaft_ecatalog_btn')}
              </Button>
            </motion.div>
          </div>
        </section>

        {/* FAQ Section */}
        <StructuredData
          id="faq-quad-shaft"
          data={generateFAQStructuredData([
            { question: t('quad_shaft_faq_q1'), answer: t('quad_shaft_faq_a1') },
            { question: t('quad_shaft_faq_q2'), answer: t('quad_shaft_faq_a2') },
            { question: t('quad_shaft_faq_q3'), answer: t('quad_shaft_faq_a3') },
            { question: t('quad_shaft_faq_q4'), answer: t('quad_shaft_faq_a4') },
            { question: t('quad_shaft_faq_q5'), answer: t('quad_shaft_faq_a5') },
            { question: t('quad_shaft_faq_q6'), answer: t('quad_shaft_faq_a6') },
          ])}
        />
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 lg:px-8 max-w-[1440px]">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center text-[#45474B] mb-12 text-3xl font-bold"
            >
              {t('Sıkça Sorulan Sorular')}
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
                    {t('quad_shaft_faq_q1')}
                  </AccordionTrigger>
                  <AccordionContent className="text-[#45474B] leading-relaxed">
                    {t('quad_shaft_faq_a1')}
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2" className="bg-[#F5F7F8] rounded-xl px-6 border-none">
                  <AccordionTrigger className="text-[#45474B] hover:text-[#F4CE14]">
                    {t('quad_shaft_faq_q2')}
                  </AccordionTrigger>
                  <AccordionContent className="text-[#45474B] leading-relaxed">
                    {t('quad_shaft_faq_a2')}
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3" className="bg-[#F5F7F8] rounded-xl px-6 border-none">
                  <AccordionTrigger className="text-[#45474B] hover:text-[#F4CE14]">
                    {t('quad_shaft_faq_q3')}
                  </AccordionTrigger>
                  <AccordionContent className="text-[#45474B] leading-relaxed">
                    {t('quad_shaft_faq_a3')}
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4" className="bg-[#F5F7F8] rounded-xl px-6 border-none">
                  <AccordionTrigger className="text-[#45474B] hover:text-[#F4CE14]">
                    {t('quad_shaft_faq_q4')}
                  </AccordionTrigger>
                  <AccordionContent className="text-[#45474B] leading-relaxed">
                    {t('quad_shaft_faq_a4')}
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-5" className="bg-[#F5F7F8] rounded-xl px-6 border-none">
                  <AccordionTrigger className="text-[#45474B] hover:text-[#F4CE14]">
                    {t('quad_shaft_faq_q5')}
                  </AccordionTrigger>
                  <AccordionContent className="text-[#45474B] leading-relaxed">
                    {t('quad_shaft_faq_a5')}
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-6" className="bg-[#F5F7F8] rounded-xl px-6 border-none">
                  <AccordionTrigger className="text-[#45474B] hover:text-[#F4CE14]">
                    {t('quad_shaft_faq_q6')}
                  </AccordionTrigger>
                  <AccordionContent className="text-[#45474B] leading-relaxed">
                    {t('quad_shaft_faq_a6')}
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
              className="text-center text-[#45474B] mb-12 text-3xl font-bold"
            >
              {t('quad_shaft_video_title')}
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
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mt-6"
            >
              <Button
                className="bg-[#F4CE14] hover:bg-[#F4CE14]/90 text-[#1E1E1E] px-6 py-3 rounded-xl"
              >
                {t('quad_shaft_watch_video')}
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
              className="text-center text-[#45474B] mb-12 text-3xl font-bold"
            >
              {t('quad_shaft_similar_products')}
            </motion.h2>

            <SimilarProductsSection
              currentProductType="quad-saft"
              onProductClick={onProductDetailClick}
            />
          </div>
        </section>
      </div>
    );
  }

  // Metal Parçalama Makinesi (Redmonster) Product Data
  if (currentProductType === 'metal') {
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
                  href: `/${language}/${productCategorySlugs[currentProductType as keyof typeof productCategorySlugs]?.[language as 'tr' | 'en' | 'ru' | 'ar'] || 'urunler'}`.replace(/\/[^/]+$/, ''),
                  onClick: onBackToMain
                },
                {
                  label: getProductTitle(),
                  href: `/${language}/${productCategorySlugs[currentProductType as keyof typeof productCategorySlugs]?.[language as 'tr' | 'en' | 'ru' | 'ar'] || currentProductType}`
                },
                {
                  label: defaultModelName
                }
              ]}
            />
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
                    className={`px-4 py-2 rounded-lg transition-all ${model === modelName
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
                {t(`metal_${modelName.toLowerCase().replace('-', '')}_title`)}
              </h1>
              <p className="text-[#F5F7F8] text-xl max-w-3xl mx-auto">
                {t(`metal_${modelName.toLowerCase().replace('-', '')}_subtitle`)}
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
                alt={t(`metal_${modelName.toLowerCase().replace('-', '')}_title`)}
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
                {modelDesc?.intro}
              </p>
              <p className="text-[#45474B] leading-relaxed mb-6 text-lg" style={{ lineHeight: '1.8' }}>
                {modelDesc?.paragraph1}
              </p>
              <p className="text-[#45474B] leading-relaxed mb-6 text-lg" style={{ lineHeight: '1.8' }}>
                {modelDesc?.paragraph2}
              </p>
              <p className="text-[#45474B] leading-relaxed text-lg" style={{ lineHeight: '1.8' }}>
                {modelDesc?.paragraph3}
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
              className="text-center text-[#1E1E1E] mb-16 text-3xl font-bold"
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
            <motion.h3
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center text-[#45474B] mb-8 text-3xl font-bold"
            >
              {t('metal_tech_specs_title')}
            </motion.h3>

            {currentSpecs && (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="max-w-4xl mx-auto min-w-full rounded-xl overflow-hidden shadow-xl bg-white ring-1 ring-gray-100"
              >
                <table className="w-full">
                  <tbody>
                    <tr className="border-b border-gray-200">
                      <td className="px-6 py-4 bg-[#F4CE14] text-[#1E1E1E] font-bold w-1/3 text-lg">Model</td>
                      <td className="px-6 py-4 text-[#1E1E1E] font-medium text-lg bg-white">{modelName}</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="px-6 py-4 bg-[#F4CE14] text-[#1E1E1E] font-bold text-lg">Motor Gücü</td>
                      <td className="px-6 py-4 text-[#1E1E1E] font-medium text-lg bg-white">{currentSpecs.motorPower}</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="px-6 py-4 bg-[#F4CE14] text-[#1E1E1E] font-bold text-lg">Rotor Uzunluğu</td>
                      <td className="px-6 py-4 text-[#1E1E1E] font-medium text-lg bg-white">{currentSpecs.rotorLength}</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="px-6 py-4 bg-[#F4CE14] text-[#1E1E1E] font-bold text-lg">Parçalama Alanı</td>
                      <td className="px-6 py-4 text-[#1E1E1E] font-medium text-lg bg-white">{currentSpecs.rotorDiameter}</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="px-6 py-4 bg-[#F4CE14] text-[#1E1E1E] font-bold text-lg">Bıçak Sayısı</td>
                      <td className="px-6 py-4 text-[#1E1E1E] font-medium text-lg bg-white">{currentSpecs.bladeCount}</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="px-6 py-4 bg-[#F4CE14] text-[#1E1E1E] font-bold text-lg">Ağırlık</td>
                      <td className="px-6 py-4 text-[#1E1E1E] font-medium text-lg bg-white">{currentSpecs.weight}</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 bg-[#F4CE14] text-[#1E1E1E] font-bold text-lg">Kapasite</td>
                      <td className="px-6 py-4 text-[#1E1E1E] font-medium text-lg bg-white">{currentSpecs.capacity}</td>
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
                  <p className="text-[#1E1E1E]">• {t('metal_optional_1')}</p>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} className="bg-white rounded-xl p-6 shadow-lg">
                  <p className="text-[#1E1E1E]">• {t('metal_optional_2')}</p>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} className="bg-white rounded-xl p-6 shadow-lg">
                  <p className="text-[#1E1E1E]">• {t('metal_optional_3')}</p>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} className="bg-white rounded-xl p-6 shadow-lg">
                  <p className="text-[#1E1E1E]">• {t('metal_optional_4')}</p>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} className="bg-white rounded-xl p-6 shadow-lg">
                  <p className="text-[#1E1E1E]">• {t('metal_optional_5')}</p>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} className="bg-white rounded-xl p-6 shadow-lg">
                  <p className="text-[#1E1E1E]">• {t('metal_optional_6')}</p>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} className="bg-white rounded-xl p-6 shadow-lg">
                  <p className="text-[#1E1E1E]">• {t('metal_optional_7')}</p>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} className="bg-white rounded-xl p-6 shadow-lg">
                  <p className="text-[#1E1E1E]">• {t('metal_optional_8')}</p>
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
                {t('metal_ecatalog_btn')}
              </Button>
            </motion.div>
          </div>
        </section>

        {/* Video Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 lg:px-8 max-w-[1440px]">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center text-[#45474B] mb-12 text-3xl font-bold"
            >
              {t('metal_video_title')}
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
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mt-6"
            >
              <Button
                className="bg-[#F4CE14] hover:bg-[#F4CE14]/90 text-[#1E1E1E] px-6 py-3 rounded-xl"
              >
                Videoyu İzle
              </Button>
            </motion.div>

            {/* YouTube Channel Section */}
            <YouTubeChannelSection className="mt-16" />
          </div>
        </section>

        {/* Similar Products */}
        <section className="py-20 bg-[#F5F7F8]">
          <div className="container mx-auto px-4 lg:px-8 max-w-[1440px]">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center text-[#45474B] mb-12 text-3xl font-bold"
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

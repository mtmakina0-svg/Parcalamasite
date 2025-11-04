import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'motion/react';
import { useLanguage } from './LanguageContext';
import { Settings, RotateCcw, Volume2, FileDown, Play, ArrowLeft, Zap, Wind } from 'lucide-react';
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

// 👇 Helmet SEO Meta ayarları
const generateSEO = (productType: string, modelName: string) => {
  const titles: Record<string, string> = {
    'single-shaft': 'Tek Şaftlı Parçalama Makinesi',
    'dual-shaft': 'Çift Şaftlı Parçalama Makinesi',
    'quad-shaft': 'Dört Şaftlı Parçalama Makinesi',
  };

  const title = `${modelName.toUpperCase()} | ${titles[productType] || 'Parçalama Makinesi'} | MT Makina`;
  const description = `${modelName.toUpperCase()} modeli ${titles[productType] || ''} teknik özellikleri, kapasitesi ve kullanım alanlarıyla ilgili detaylı bilgi.`;
  // URL'yi dinamik ve küçük harf yap
  const productPath = productType.toLowerCase();
  const modelPath = modelName.toLowerCase();
  const canonical = `https://www.parcalamamakinesi.com/${productPath}/${modelPath}`;

  return { title, description, canonical };
};

interface ProductDetailPageProps {
  productType: string;
  modelName?: string;
  // onBackToMain kaldırıldı
  onECatalogClick: () => void;
  onProductDetailClick?: (productType: string, modelName?: string) => void;
}

// --- 👇 EKSİK VERİLER EKLENDİ ---
const allModelSpecs = {
  'single-shaft': {
    'TSH-60': {
      motorPower: '15–30 kW',
      rotorLength: '600 mm',
      rotorDiameter: '600 x 1100 mm',
      bladeCount: '24 adet',
      weight: '2500 kg',
      capacity: '500-800 kg/saat',
    },
    'TSH-80': {
      motorPower: '22–45 kW',
      rotorLength: '800 mm',
      rotorDiameter: '800 x 1300 mm',
      bladeCount: '32 adet',
      weight: '3500 kg',
      capacity: '800-1200 kg/saat',
    },
    'TSH-100': {
      motorPower: '30–75 kW',
      rotorLength: '1000 mm',
      rotorDiameter: '1000 x 1500 mm',
      bladeCount: '40 adet',
      weight: '5000 kg',
      capacity: '1200-1800 kg/saat',
    },
    'TSH-130': {
      motorPower: '45–110 kW',
      rotorLength: '1300 mm',
      rotorDiameter: '1300 x 1800 mm',
      bladeCount: '52 adet',
      weight: '7500 kg',
      capacity: '1800-2500 kg/saat',
    },
    'TSH-160': {
      motorPower: '55–132 kW (2x)',
      rotorLength: '1600 mm',
      rotorDiameter: '1600 x 2100 mm',
      bladeCount: '64 adet',
      weight: '11000 kg',
      capacity: '3500-4500 kg/saat',
    },
    'TSH-200': {
      motorPower: '75–160 kW (2x)',
      rotorLength: '2000 mm',
      rotorDiameter: '2000 x 2500 mm',
      bladeCount: '80 adet',
      weight: '15000 kg',
      capacity: '4500-6000 kg/saat',
    },
  },
  'dual-shaft': {
    // Çift şaftlı modeller buraya eklenebilir
  },
  'quad-shaft': {
    // Dört şaftlı modeller buraya eklenebilir
  }
};
// --- 👆 EKSİK VERİLER EKLENDİ ---


export const ProductDetailPage = ({
  productType,
  modelName = 'TSH-60', // Varsayılan model
  // onBackToMain kaldırıldı
  onECatalogClick,
  onProductDetailClick,
}: ProductDetailPageProps) => {
  const { t, isRTL } = useLanguage();

  const upperModelName = modelName.toUpperCase();
  
  const seo = generateSEO(productType, upperModelName);
  const images = getModelImages(productType, upperModelName);
  const fallbackImage = getFallbackImage(productType);
  
  // Specs'i allModelSpecs'ten al
  const currentSpecs = (allModelSpecs as any)[productType]?.[upperModelName] || null;

  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [productType, modelName]);

  return (
    <div className="bg-[#F5F7F8]" dir={isRTL ? 'rtl' : 'ltr'}>
      {/* 🧠 SEO Metadata (Bu sayfaya özel olduğu için kalmalı) */}
      <Helmet>
        <title>{seo.title}</title>
        <meta name="description" content={seo.description} />
        <link rel="canonical" href={seo.canonical} />
        <meta property="og:title" content={seo.title} />
        <meta property="og:description" content={seo.description} />
        <meta property="og:url" content={seo.canonical} />
        <meta property="og:type" content="product" />
      </Helmet>

      {/* Main Product Content */}
      <section className="pt-32 pb-16 bg-white"> 
        <div className="container mx-auto px-4 lg:px-8 max-w-[1440px]">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center text-[#45474B] mb-6 text-5xl font-bold"
          >
            {seo.title}
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="max-w-5xl mx-auto mb-10"
          >
            <ImageWithFallback
              src={images.main}
              alt={`${seo.title}`}
              className="w-full rounded-2xl shadow-2xl"
              fallbackSrc={fallbackImage}
            />
          </motion.div>

          {currentSpecs && (
            <motion.table 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="w-full max-w-4xl mx-auto bg-[#F5F7F8] rounded-2xl overflow-hidden shadow-lg"
            >
              <tbody>
                {Object.entries(currentSpecs).map(([key, value]) => (
                  <tr key={key} className="border-b border-gray-200">
                    <td className="w-1/3 px-8 py-4 bg-[#F4CE14] font-semibold text-[#1E1E1E] capitalize">
                      {/* 'motorPower' gibi camelCase'i 'Motor Power'a çevir */}
                      {key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
                    </td>
                    <td className="w-2/3 px-8 py-4 text-[#45474B]">{value as string}</td>
                  </tr>
                ))}
              </tbody>
            </motion.table>
          )}

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-center mt-12"
          >
            <Button
              onClick={onECatalogClick}
              className="bg-[#F4CE14] hover:bg-[#F4CE14]/90 text-[#1E1E1E] px-8 py-6 rounded-2xl text-lg shadow-xl"
            >
              <FileDown size={24} className={`${isRTL ? 'ml-2' : 'mr-2'}`} />
              {t('single_shaft_ecatalog_btn')}
            </Button>
          </motion.div>
        </div>
      </section>
      
      {/* TODO: SimilarProductsSection ve YouTubeChannelSection eklenebilir */}
      {/* <SimilarProductsSection currentProduct={productType} onProductClick={onProductDetailClick} /> */}
      {/* <YouTubeChannelSection /> */}
    </div>
  );
};


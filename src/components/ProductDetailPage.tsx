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

  const title = `${modelName} | ${titles[productType] || 'Parçalama Makinesi'} | MT Makina`;
  const description = `${modelName} modeli ${titles[productType] || ''} teknik özellikleri, kapasitesi ve kullanım alanlarıyla ilgili detaylı bilgi.`;
  const canonical = `https://www.parcalamamakinesi.com/${productType}/${modelName}`;

  return { title, description, canonical };
};

interface ProductDetailPageProps {
  productType: string;
  modelName?: string;
  onBackToMain: () => void;
  onECatalogClick: () => void;
  onProductDetailClick?: (productType: string, modelName?: string) => void;
}

export const ProductDetailPage = ({
  productType,
  modelName = 'TSH-60',
  onBackToMain,
  onECatalogClick,
  onProductDetailClick,
}: ProductDetailPageProps) => {
  const { t, isRTL } = useLanguage();

  // Helmet meta verisi
  const seo = generateSEO(productType, modelName);

  const images = getModelImages(productType, modelName);
  const fallbackImage = getFallbackImage(productType);
  const currentSpecs =
    {
      'single-shaft': {
        'TSH-60': {
          motorPower: '15–30 kW',
          rotorLength: '600 mm',
          rotorDiameter: '600 x 1100 mm',
          bladeCount: '24 adet',
          weight: '2500 kg',
          capacity: '500-800 kg/saat',
        },
      },
    }[productType]?.[modelName] || null;

  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [productType, modelName]);

  return (
    <div className="min-h-screen bg-[#F5F7F8]" dir={isRTL ? 'rtl' : 'ltr'}>
      {/* 🧠 SEO Metadata */}
      <Helmet>
        <title>{seo.title}</title>
        <meta name="description" content={seo.description} />
        <link rel="canonical" href={seo.canonical} />
        <meta property="og:title" content={seo.title} />
        <meta property="og:description" content={seo.description} />
        <meta property="og:url" content={seo.canonical} />
        <meta property="og:type" content="product" />
      </Helmet>

      {/* Header Section */}
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

      {/* Main Product Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 lg:px-8 max-w-[1440px]">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center text-[#F4CE14] mb-6 text-5xl font-bold"
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
            <table className="w-full bg-[#F5F7F8] rounded-2xl overflow-hidden shadow-lg">
              <tbody>
                {Object.entries(currentSpecs).map(([key, value]) => (
                  <tr key={key} className="border-b border-gray-200">
                    <td className="px-8 py-4 bg-[#F4CE14] font-semibold text-[#1E1E1E] capitalize">
                      {key.replace(/([A-Z])/g, ' $1')}
                    </td>
                    <td className="px-8 py-4 text-[#45474B]">{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}

          <div className="text-center mt-12">
            <Button
              onClick={onECatalogClick}
              className="bg-[#F4CE14] hover:bg-[#F4CE14]/90 text-[#1E1E1E] px-8 py-6 rounded-2xl text-lg shadow-xl"
            >
              <FileDown size={24} className={`${isRTL ? 'ml-2' : 'mr-2'}`} />
              {t('single_shaft_ecatalog_btn')}
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

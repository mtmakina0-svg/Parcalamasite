import React from 'react';
import { motion } from 'motion/react';
import { useLanguage } from './LanguageContext';
import { ChevronRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { getModelImages } from '../utils/imageConfig';

interface SimilarProduct {
  productType: string;
  translationKey: string;
  defaultModel: string;
  fallbackImage: string;
}

interface SimilarProductsSectionProps {
  currentProductType: string;
  onProductClick?: (productType: string) => void;
}

// Define similar products mapping for each product type
// Using real product cover images from imageConfig.ts
const similarProductsMap: { [key: string]: SimilarProduct[] } = {
  'single-shaft': [
    {
      productType: 'dual-shaft',
      translationKey: 'product_dual_shaft',
      defaultModel: 'CS-20',
      fallbackImage: 'https://i.ibb.co/B2yVNQF0/1-1.png'
    },
    {
      productType: 'quad-shaft',
      translationKey: 'product_quad_shaft',
      defaultModel: 'DS-80',
      fallbackImage: 'https://i.ibb.co/Gf8mjXGm/1-1.png'
    },
    {
      productType: 'metal',
      translationKey: 'product_metal',
      defaultModel: 'RDM-100',
      fallbackImage: 'https://i.ibb.co/m5xLp46J/1-1.png'
    }
  ],
  'dual-shaft': [
    {
      productType: 'single-shaft',
      translationKey: 'product_single_shaft',
      defaultModel: 'TSH-60',
      fallbackImage: 'https://i.ibb.co/Hf47H3b1/1-1.png'
    },
    {
      productType: 'quad-shaft',
      translationKey: 'product_quad_shaft',
      defaultModel: 'DS-80',
      fallbackImage: 'https://i.ibb.co/Gf8mjXGm/1-1.png'
    },
    {
      productType: 'metal',
      translationKey: 'product_metal',
      defaultModel: 'RDM-100',
      fallbackImage: 'https://i.ibb.co/m5xLp46J/1-1.png'
    }
  ],
  'quad-shaft': [
    {
      productType: 'single-shaft',
      translationKey: 'product_single_shaft',
      defaultModel: 'TSH-60',
      fallbackImage: 'https://i.ibb.co/Hf47H3b1/1-1.png'
    },
    {
      productType: 'dual-shaft',
      translationKey: 'product_dual_shaft',
      defaultModel: 'CS-20',
      fallbackImage: 'https://i.ibb.co/B2yVNQF0/1-1.png'
    },
    {
      productType: 'metal',
      translationKey: 'product_metal',
      defaultModel: 'RDM-100',
      fallbackImage: 'https://i.ibb.co/m5xLp46J/1-1.png'
    }
  ],
  'metal': [
    {
      productType: 'single-shaft',
      translationKey: 'product_single_shaft',
      defaultModel: 'TSH-60',
      fallbackImage: 'https://i.ibb.co/Hf47H3b1/1-1.png'
    },
    {
      productType: 'dual-shaft',
      translationKey: 'product_dual_shaft',
      defaultModel: 'CS-20',
      fallbackImage: 'https://i.ibb.co/B2yVNQF0/1-1.png'
    },
    {
      productType: 'quad-shaft',
      translationKey: 'product_quad_shaft',
      defaultModel: 'DS-80',
      fallbackImage: 'https://i.ibb.co/Gf8mjXGm/1-1.png'
    }
  ],
  'granulator': [
    {
      productType: 'single-shaft',
      translationKey: 'product_single_shaft',
      defaultModel: 'TSH-60',
      fallbackImage: 'https://i.ibb.co/Hf47H3b1/1-1.png'
    },
    {
      productType: 'dual-shaft',
      translationKey: 'product_dual_shaft',
      defaultModel: 'CS-20',
      fallbackImage: 'https://i.ibb.co/B2yVNQF0/1-1.png'
    },
    {
      productType: 'metal',
      translationKey: 'product_metal',
      defaultModel: 'RDM-100',
      fallbackImage: 'https://i.ibb.co/m5xLp46J/1-1.png'
    }
  ],
  'baler': [
    {
      productType: 'single-shaft',
      translationKey: 'product_single_shaft',
      defaultModel: 'TSH-60',
      fallbackImage: 'https://i.ibb.co/Hf47H3b1/1-1.png'
    },
    {
      productType: 'dual-shaft',
      translationKey: 'product_dual_shaft',
      defaultModel: 'CS-20',
      fallbackImage: 'https://i.ibb.co/B2yVNQF0/1-1.png'
    },
    {
      productType: 'granulator',
      translationKey: 'product_granulator',
      defaultModel: 'GR-400',
      fallbackImage: 'https://i.ibb.co/5hxMZJ2g/plastic-crusher-machine-4.png'
    }
  ],
  'conveyor': [
    {
      productType: 'single-shaft',
      translationKey: 'product_single_shaft',
      defaultModel: 'TSH-60',
      fallbackImage: 'https://i.ibb.co/Hf47H3b1/1-1.png'
    },
    {
      productType: 'separator',
      translationKey: 'product_separator',
      defaultModel: 'MS-1',
      fallbackImage: 'https://i.ibb.co/4wtQRwBB/1-1.png'
    },
    {
      productType: 'baler',
      translationKey: 'product_baler',
      defaultModel: 'BP-60',
      fallbackImage: 'https://i.ibb.co/svR9Kdq7/1-7.png'
    }
  ],
  'separator': [
    {
      productType: 'conveyor',
      translationKey: 'product_conveyor',
      defaultModel: 'CV-3M',
      fallbackImage: 'https://i.ibb.co/B2yVNQF0/1-1.png'
    },
    {
      productType: 'single-shaft',
      translationKey: 'product_single_shaft',
      defaultModel: 'TSH-60',
      fallbackImage: 'https://i.ibb.co/Hf47H3b1/1-1.png'
    },
    {
      productType: 'baler',
      translationKey: 'product_baler',
      defaultModel: 'BP-60',
      fallbackImage: 'https://i.ibb.co/svR9Kdq7/1-7.png'
    }
  ]
};

export const SimilarProductsSection: React.FC<SimilarProductsSectionProps> = ({
  currentProductType,
  onProductClick
}) => {
  const { t, isRTL } = useLanguage();

  // Get similar products for current product type
  const similarProducts = similarProductsMap[currentProductType] || similarProductsMap['single-shaft'];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {similarProducts.map((product, index) => (
        <motion.div
          key={product.productType}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
          whileHover={{ y: -10 }}
          onClick={() => onProductClick?.(product.productType)}
          className="bg-white rounded-2xl overflow-hidden shadow-lg cursor-pointer group"
        >
          <div className="h-56 overflow-hidden bg-[#F5F7F8]">
            <ImageWithFallback
              src={getModelImages(product.productType, product.defaultModel).main}
              alt={t(product.translationKey)}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              fallbackSrc={product.fallbackImage}
            />
          </div>
          <div className="p-6">
            <h3 className="text-[#45474B] mb-2 group-hover:text-[#F4CE14] transition-colors">
              {t(product.translationKey)}
            </h3>
            <div className="flex items-center text-[#F4CE14] group-hover:gap-2 transition-all">
              <span className="text-sm">{t('btn_view_details')}</span>
              <ChevronRight size={16} className={isRTL ? 'rotate-180' : ''} />
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

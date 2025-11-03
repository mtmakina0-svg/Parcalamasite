/**
 * Central configuration for all image URLs
 * Uses ImgBB hosted images with Unsplash fallbacks
 */

/**
 * Product folder name mapping (for reference)
 */
export const PRODUCT_FOLDER_MAP: { [key: string]: string } = {
  'single-shaft': 'TEK ŞAFTLI PARÇALAMA MAKİNESİ',
  'dual-shaft': 'ÇİFT ŞAFTLI PARÇALAMA MAKİNESİ',
  'quad-shaft': 'DÖRT ŞAFTLI PARÇALAMA MAKİNESİ',
  'metal': 'METAL PARÇALAMA MAKİNESİ',
  'granulator': 'GRANÜLATÖR',
  'baler': 'BALYA PRESİ',
  'conveyor': 'KONVEYÖR SİSTEMİ',
  'separator': 'AYIRICI SİSTEM'
};

/**
 * Get product folder name in Turkish
 */
export const getProductFolderName = (productType: string): string => {
  return PRODUCT_FOLDER_MAP[productType] || 'TEK ŞAFTLI PARÇALAMA MAKİNESİ';
};

/**
 * Model images interface
 */
export interface ModelImages {
  main: string;
  detail1: string;
  detail2: string;
  detail3: string;
  detail4?: string;
}

/**
 * IMAGE URLS - ImgBB Hosted
 * Upload your images to ImgBB and paste URLs here
 * Format: https://i.ibb.co/XXXXX/filename.png
 */
const IMAGE_URLS: { [key: string]: { [model: string]: ModelImages } } = {
  'single-shaft': {
    'TSH-60': {
      main: 'https://i.ibb.co/Hf47H3b1/1-1.png',
      detail1: 'https://i.ibb.co/PvTXDqcZ/1-2.png',
      detail2: 'https://i.ibb.co/F46XQM7W/1-3.png',
      detail3: 'https://i.ibb.co/C3WxQSSv/1-4.png',
      detail4: ''
    },
    'TSH-80': {
      main: 'https://i.ibb.co/ZRS67nMB/1-3.png',
      detail1: 'https://i.ibb.co/G3kFLdfs/1-4.png',
      detail2: 'https://i.ibb.co/gbTbnNLv/1-1.png',
      detail3: 'https://i.ibb.co/7dyL6dKv/1-2.png',
      detail4: ''
    },
    'TSH-100': {
      main: 'https://i.ibb.co/nsYnVHyD/1-12.png',
      detail1: 'https://i.ibb.co/67YDMknp/1-2.png',
      detail2: 'https://i.ibb.co/v4W0yBTc/1-8.png',
      detail3: 'https://i.ibb.co/6RB2rvBc/1-9.png',
      detail4: ''
    },
    'TSH-130': {
      main: 'https://i.ibb.co/q3BqtbZH/1-1.png',
      detail1: 'https://i.ibb.co/WNVQkSFF/1-13.png',
      detail2: 'https://i.ibb.co/GfhWX536/1-15.png',
      detail3: 'https://i.ibb.co/jvG3NGbD/1-16.png',
      detail4: ''
    },
    'TSH-160': {
      main: 'https://i.ibb.co/ZRwBZB21/1-1.png',
      detail1: 'https://i.ibb.co/mrVnwgcX/1-6.png',
      detail2: 'https://i.ibb.co/JRCdjhfZ/1-7.png',
      detail3: 'https://i.ibb.co/Hf4Mt89K/1-9.png',
      detail4: ''
    },
    'TSH-200': {
      main: 'https://i.ibb.co/tTKSpZyS/1-5.png',
      detail1: 'https://i.ibb.co/cnnX46w/1-6.png',
      detail2: 'https://i.ibb.co/058K5Nr/1-7.png',
      detail3: 'https://i.ibb.co/Ng7Cjxz9/1-11.png',
      detail4: ''
    }
  },
  'dual-shaft': {
    'CS-20': { main: 'https://i.ibb.co/Y44y4KHc/cs-double-shaft-shredder-20.png', detail1: '', detail2: '', detail3: '', detail4: '' },
    'CS-40': { main: 'https://i.ibb.co/Y44y4KHc/cs-double-shaft-shredder-20.png', detail1: '', detail2: '', detail3: '', detail4: '' },
    'CS-60': { main: 'https://i.ibb.co/Y44y4KHc/cs-double-shaft-shredder-20.png', detail1: '', detail2: '', detail3: '', detail4: '' },
    'CS-80': { main: 'https://i.ibb.co/Y44y4KHc/cs-double-shaft-shredder-20.png', detail1: '', detail2: '', detail3: '', detail4: '' },
    'CS-100': { main: 'https://i.ibb.co/Y44y4KHc/cs-double-shaft-shredder-20.png', detail1: '', detail2: '', detail3: '', detail4: '' },
    'CS-120': { main: 'https://i.ibb.co/Y44y4KHc/cs-double-shaft-shredder-20.png', detail1: '', detail2: '', detail3: '', detail4: '' },
    'CS-150': { main: 'https://i.ibb.co/Y44y4KHc/cs-double-shaft-shredder-20.png', detail1: '', detail2: '', detail3: '', detail4: '' },
    'CS-180': { main: 'https://i.ibb.co/Y44y4KHc/cs-double-shaft-shredder-20.png', detail1: '', detail2: '', detail3: '', detail4: '' },
    'CS-200': { main: 'https://i.ibb.co/Y44y4KHc/cs-double-shaft-shredder-20.png', detail1: '', detail2: '', detail3: '', detail4: '' }
  },
  'quad-shaft': {
    'QS-80': { main: 'https://i.ibb.co/SDjBQ9cq/1-9.png', detail1: '', detail2: '', detail3: '', detail4: '' },
    'QS-100': { main: 'https://i.ibb.co/SDjBQ9cq/1-9.png', detail1: '', detail2: '', detail3: '', detail4: '' },
    'QS-120': { main: 'https://i.ibb.co/SDjBQ9cq/1-9.png', detail1: '', detail2: '', detail3: '', detail4: '' },
    'QS-150': { main: 'https://i.ibb.co/SDjBQ9cq/1-9.png', detail1: '', detail2: '', detail3: '', detail4: '' }
  },
  'metal': {
    'MP-100': { main: 'https://i.ibb.co/m5xLp46J/1-1.png', detail1: '', detail2: '', detail3: '', detail4: '' },
    'MP-150': { main: 'https://i.ibb.co/m5xLp46J/1-1.png', detail1: '', detail2: '', detail3: '', detail4: '' }
  },
  'granulator': {
    'GR-400': { main: 'https://i.ibb.co/5hxMZJ2g/plastic-crusher-machine-4.png', detail1: '', detail2: '', detail3: '', detail4: '' },
    'GR-600': { main: 'https://i.ibb.co/5hxMZJ2g/plastic-crusher-machine-4.png', detail1: '', detail2: '', detail3: '', detail4: '' },
    'GR-800': { main: 'https://i.ibb.co/5hxMZJ2g/plastic-crusher-machine-4.png', detail1: '', detail2: '', detail3: '', detail4: '' }
  },
  'baler': {
    'BP-60': { main: 'https://i.ibb.co/svR9Kdq7/1-7.png', detail1: '', detail2: '', detail3: '', detail4: '' },
    'BP-100': { main: 'https://i.ibb.co/svR9Kdq7/1-7.png', detail1: '', detail2: '', detail3: '', detail4: '' }
  },
  'conveyor': {
    'CV-3M': { main: 'https://i.ibb.co/Y44y4KHc/cs-double-shaft-shredder-20.png', detail1: '', detail2: '', detail3: '', detail4: '' },
    'CV-5M': { main: 'https://i.ibb.co/Y44y4KHc/cs-double-shaft-shredder-20.png', detail1: '', detail2: '', detail3: '', detail4: '' },
    'CV-10M': { main: 'https://i.ibb.co/Y44y4KHc/cs-double-shaft-shredder-20.png', detail1: '', detail2: '', detail3: '', detail4: '' }
  },
  'separator': {
    'MS-1': { main: 'https://i.ibb.co/4wtQRwBB/1-1.png', detail1: '', detail2: '', detail3: '', detail4: '' },
    'MS-2': { main: 'https://i.ibb.co/4wtQRwBB/1-1.png', detail1: '', detail2: '', detail3: '', detail4: '' }
  }
};

/**
 * Get model images from ImgBB URLs
 */
export const getModelImages = (
  productType: string,
  modelName: string
): ModelImages => {
  const urls = IMAGE_URLS[productType]?.[modelName];
  
  if (urls && urls.main) {
    return urls;
  }
  
  // Fallback to Unsplash placeholder
  const fallback = getFallbackImage(productType);
  return {
    main: fallback,
    detail1: fallback,
    detail2: fallback,
    detail3: fallback,
    detail4: fallback
  };
};

/**
 * Fallback images from Unsplash for different product types
 */
export const FALLBACK_IMAGES: { [key: string]: string } = {
  'single-shaft': 'https://images.unsplash.com/photo-1718512932005-197f55f2e186?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwc2hyZWRkZXIlMjBtYWNoaW5lfGVufDF8fHx8MTc2MjE2NzUyOHww&ixlib=rb-4.1.0&q=80&w=1080',
  'dual-shaft': 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080',
  'quad-shaft': 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080',
  'metal': 'https://images.unsplash.com/photo-1625662276901-4a7ec44fbeed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080',
  'granulator': 'https://images.unsplash.com/photo-1581092160607-ee67e7d27f86?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080',
  'baler': 'https://images.unsplash.com/photo-1610557892470-55d9e80c0bce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080',
  'conveyor': 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080',
  'separator': 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080',
  'default': 'https://images.unsplash.com/photo-1718512932005-197f55f2e186?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080'
};

/**
 * Get fallback image for a product type
 */
export const getFallbackImage = (productType: string): string => {
  return FALLBACK_IMAGES[productType] || FALLBACK_IMAGES['default'];
};

/**
 * Preload critical images for better performance
 */
export const preloadImage = (url: string): Promise<void> => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve();
    img.onerror = () => reject();
    img.src = url;
  });
};

/**
 * Batch preload multiple images
 */
export const preloadImages = async (urls: string[]): Promise<void> => {
  try {
    await Promise.all(urls.map(url => preloadImage(url)));
  } catch (error) {
    console.warn('Some images failed to preload:', error);
  }
};

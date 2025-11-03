/**
 * Central configuration for all image URLs
 * Uses GitHub raw content URLs for static assets hosted in public folder
 */

// Image hosting configuration
const IMAGE_CONFIG = {
  // ✅ PRİORİTY: GitHub'dan çek (public/ klasöründen)
  // ❌ FALLBACK: Manuel URL'ler (ImgBB, Imgur vs.)
  useGitHubFirst: true, // GitHub'ı önceliklendir
  github: {
    username: 'mtmakina0',
    repo: 'parcalamasite',
    branch: 'main', // ⚠️ Eğer 'master' ise değiştirin
    basePath: 'public'
  }
};

/**
 * Test GitHub image URL
 * Tarayıcınızda açarak kontrol edin:
 * https://raw.githubusercontent.com/mtmakina0/parcalamasite/main/public/TEK%20%C5%9EAFTLI%20PAR%C3%87ALAMA%20MAK%C4%B0NES%C4%B0/TSH-60/1.png
 * 
 * Eğer 404 alırsanız:
 * 1. Branch'i kontrol edin (main vs master)
 * 2. Görsellerin GitHub'a push edildiğini kontrol edin
 * 3. Klasör isimlerinin doğru olduğunu kontrol edin
 */

// Base URL for all GitHub-hosted images
const GITHUB_BASE_URL = `https://raw.githubusercontent.com/${IMAGE_CONFIG.github.username}/${IMAGE_CONFIG.github.repo}/${IMAGE_CONFIG.github.branch}/${IMAGE_CONFIG.github.basePath}`;

/**
 * Product folder name mapping (Turkish uppercase names matching GitHub folder structure)
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
 * Get product folder name in Turkish (matching GitHub public folder structure)
 */
export const getProductFolderName = (productType: string): string => {
  return PRODUCT_FOLDER_MAP[productType] || 'TEK ŞAFTLI PARÇALAMA MAKİNESİ';
};

/**
 * Generate GitHub raw URL for a product model image
 */
export const getGitHubImageUrl = (
  productType: string,
  modelName: string,
  filename: string
): string => {
  const folderName = getProductFolderName(productType);
  const encodedFolder = encodeURIComponent(folderName);
  const encodedModel = encodeURIComponent(modelName);
  const encodedFilename = encodeURIComponent(filename);
  
  return `${GITHUB_BASE_URL}/${encodedFolder}/${encodedModel}/${encodedFilename}`;
};

/**
 * Get all image URLs for a specific product model
 */
export interface ModelImages {
  main: string;
  detail1: string;
  detail2: string;
  detail3: string;
  detail4?: string;
}

/**
 * MANUEL GÖRSEL URL'LERİ (Geçici Test Çözümü)
 * GitHub'a push etmeden önce test için kullanın
 * ImgBB, Imgur veya benzeri servisten aldığınız URL'leri buraya ekleyin
 */
const MANUAL_IMAGE_URLS: { [key: string]: { [model: string]: ModelImages } } = {
  'single-shaft': {
    'TSH-60': {
      main: 'https://i.ibb.co/Hf47H3b1/1-1.png',
      detail1: 'https://i.ibb.co/PvTXDqcZ/1-2.png',
      detail2: 'https://i.ibb.co/F46XQM7W/1-3.png',
      detail3: 'https://i.ibb.co/C3WxQSSv/1-4.png',
      detail4: ''
    },
    'TSH-80': {
      main: '',
      detail1: '',
      detail2: '',
      detail3: '',
      detail4: ''
    },
    'TSH-100': {
      main: '',
      detail1: '',
      detail2: '',
      detail3: '',
      detail4: ''
    },
    'TSH-120': {
      main: '',
      detail1: '',
      detail2: '',
      detail3: '',
      detail4: ''
    },
    'TSH-150': {
      main: '',
      detail1: '',
      detail2: '',
      detail3: '',
      detail4: ''
    }
  },
  'dual-shaft': {
    'CS-20': { main: '', detail1: '', detail2: '', detail3: '', detail4: '' },
    'CS-40': { main: '', detail1: '', detail2: '', detail3: '', detail4: '' },
    'CS-60': { main: '', detail1: '', detail2: '', detail3: '', detail4: '' },
    'CS-80': { main: '', detail1: '', detail2: '', detail3: '', detail4: '' },
    'CS-100': { main: '', detail1: '', detail2: '', detail3: '', detail4: '' },
    'CS-120': { main: '', detail1: '', detail2: '', detail3: '', detail4: '' },
    'CS-150': { main: '', detail1: '', detail2: '', detail3: '', detail4: '' },
    'CS-180': { main: '', detail1: '', detail2: '', detail3: '', detail4: '' },
    'CS-200': { main: '', detail1: '', detail2: '', detail3: '', detail4: '' }
  },
  'quad-shaft': {
    'QS-80': { main: '', detail1: '', detail2: '', detail3: '', detail4: '' },
    'QS-100': { main: '', detail1: '', detail2: '', detail3: '', detail4: '' },
    'QS-120': { main: '', detail1: '', detail2: '', detail3: '', detail4: '' },
    'QS-150': { main: '', detail1: '', detail2: '', detail3: '', detail4: '' }
  }
};

/**
 * Get model images with fallback support
 * Returns GitHub URLs as primary, manual URLs as fallback
 */
export const getModelImages = (
  productType: string,
  modelName: string
): ModelImages => {
  // ✅ PRİORİTY 1: GitHub'dan çek (public/ klasöründen)
  if (IMAGE_CONFIG.useGitHubFirst) {
    return {
      main: getGitHubImageUrl(productType, modelName, '1.png'),
      detail1: getGitHubImageUrl(productType, modelName, '2.png'),
      detail2: getGitHubImageUrl(productType, modelName, '3.png'),
      detail3: getGitHubImageUrl(productType, modelName, '4.png'),
      detail4: getGitHubImageUrl(productType, modelName, '5.png')
    };
  }
  
  // ❌ FALLBACK: Manuel URL'leri kullan (GitHub devre dışıysa)
  const manualUrls = MANUAL_IMAGE_URLS[productType]?.[modelName];
  if (manualUrls && manualUrls.main) {
    return manualUrls;
  }
  
  // Son çare: GitHub URL'leri
  return {
    main: getGitHubImageUrl(productType, modelName, '1.png'),
    detail1: getGitHubImageUrl(productType, modelName, '2.png'),
    detail2: getGitHubImageUrl(productType, modelName, '3.png'),
    detail3: getGitHubImageUrl(productType, modelName, '4.png'),
    detail4: getGitHubImageUrl(productType, modelName, '5.png')
  };
};

/**
 * Get manual fallback URLs for a model (if available)
 * Used as secondary fallback in ImageWithFallback component
 */
export const getManualFallbackImages = (
  productType: string,
  modelName: string
): ModelImages | null => {
  const manualUrls = MANUAL_IMAGE_URLS[productType]?.[modelName];
  if (manualUrls && manualUrls.main) {
    return manualUrls;
  }
  return null;
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
 * Static asset URLs (logos, certificates, etc.) hosted on GitHub
 */
export const STATIC_ASSETS = {
  // Logo
  logo: `${GITHUB_BASE_URL}/logo/mt-logo.png`,
  
  // Certificates
  certificates: {
    cert1: `${GITHUB_BASE_URL}/certificates/cert1.png`,
    cert2: `${GITHUB_BASE_URL}/certificates/cert2.png`,
    cert3: `${GITHUB_BASE_URL}/certificates/cert3.png`,
    cert4: `${GITHUB_BASE_URL}/certificates/cert4.png`,
    cert5: `${GITHUB_BASE_URL}/certificates/cert5.png`,
    cert6: `${GITHUB_BASE_URL}/certificates/cert6.png`,
    cert7: `${GITHUB_BASE_URL}/certificates/cert7.png`,
    cert8: `${GITHUB_BASE_URL}/certificates/cert8.png`
  }
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

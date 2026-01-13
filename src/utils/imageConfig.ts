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
  'mobile': 'MOBİL KIRICI',
  'pallet': 'PALET PARÇALAMA MAKİNESİ',
  'harddisk': 'HARDDİSK İMHA MAKİNESİ',
  'tree-root': 'AĞAÇ KÖKÜ PARÇALAMA MAKİNESİ',
  'wood': 'AĞAÇ PARÇALAMA ÖĞÜTME MAKİNESİ',
  'glass': 'CAM ŞİŞE KIRMA MAKİNESİ',
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
      main: 'https://i.ibb.co/jkBZt1Y2/tsh-60-1.jpg',
      detail1: 'https://i.ibb.co/v6x30VGW/tsh-60-2.jpg',
      detail2: 'https://i.ibb.co/zTSFXY5c/tsh-60-4.jpg',
      detail3: 'https://i.ibb.co/C3WxQSSv/1-4.png',
      detail4: ''
    },
    'TSH-80': {
      main: 'https://i.ibb.co/vvq5LB0n/tsh-80-1.jpg',
      detail1: 'https://i.ibb.co/RpmFRV8K/tsh-80-2.jpg',
      detail2: 'https://i.ibb.co/wZvsqz9k/tsh-80-3.jpg',
      detail3: 'https://i.ibb.co/7dyL6dKv/1-2.png',
      detail4: ''
    },
    'TSH-100': {
      main: 'https://i.ibb.co/gLL56xLD/tsh-100-1.jpg',
      detail1: 'https://i.ibb.co/Z16XRPY2/tsh100-2.jpg',
      detail2: 'https://i.ibb.co/N654cpNw/tsh100-3.jpg',
      detail3: 'https://i.ibb.co/6RB2rvBc/1-9.png',
      detail4: ''
    },
    'TSH-130': {
      main: 'https://i.ibb.co/bMkpbL3B/tsh-130-1.jpg',
      detail1: 'https://i.ibb.co/9H151n4j/tsh-130-2.jpg',
      detail2: 'https://i.ibb.co/jPkPC1tG/tsh-130-3.jpg',
      detail3: 'https://i.ibb.co/jvG3NGbD/1-16.png',
      detail4: ''
    },
    'TSH-160': {
      main: 'https://i.ibb.co/dJsJ5wrG/tsh-160-1.jpg',
      detail1: 'https://i.ibb.co/WNZScM9g/tsh-160-2.jpg',
      detail2: 'https://i.ibb.co/5hcSZ7y3/tsh-160-3.jpg',
      detail3: 'https://i.ibb.co/Hf4Mt89K/1-9.png',
      detail4: ''
    },
    'TSH-200': {
      main: 'https://i.ibb.co/RT9FBpHt/tsh-200-1.jpg',
      detail1: 'https://i.ibb.co/9kymGVBV/tsh-200-2.jpg',
      detail2: 'https://i.ibb.co/CKYBxg4F/tsh-200-3.jpg',
      detail3: 'https://i.ibb.co/Ng7Cjxz9/1-11.png',
      detail4: ''
    }
  },
  'dual-shaft': {
    'CS-20': {
      main: 'https://i.ibb.co/sdDwsXjf/CS-20-1.jpg',
      detail1: 'https://i.ibb.co/Cjzp61b/CS-20-2.jpg',
      detail2: 'https://i.ibb.co/R4TjjF0g/CS-20-3.jpg',
      detail3: 'https://i.ibb.co/S4nqh63G/1-4.png',
      detail4: ''
    },
    'CS-40': {
      main: 'https://i.ibb.co/vvksGBh4/CS-40-1.jpg',
      detail1: 'https://i.ibb.co/S7nwHk2t/CS-40-2.jpg',
      detail2: 'https://i.ibb.co/JR1WP547/CS-40-3.jpg',
      detail3: 'https://i.ibb.co/B2yVNQF0/1-1.png',
      detail4: ''
    },
    'CS-60': {
      main: 'https://i.ibb.co/MxFsRq2g/CS-60-1.jpg',
      detail1: 'https://i.ibb.co/gLHnLFqK/CS-60-2.jpg',
      detail2: 'https://i.ibb.co/qF4j60Vy/CS-60-3.jpg',
      detail3: 'https://i.ibb.co/B2yVNQF0/1-1.png',
      detail4: ''
    },
    'CS-80': {
      main: 'https://i.ibb.co/tMmmkP00/CS-80-1.jpg',
      detail1: 'https://i.ibb.co/S4rmgJLP/CS-80-2.jpg',
      detail2: 'https://i.ibb.co/fGVRhTNH/CS-80-3.jpg',
      detail3: 'https://i.ibb.co/B2yVNQF0/1-1.png',
      detail4: ''
    },
    'CS-100': {
      main: 'https://i.ibb.co/r2jnGRn6/1-5.png',
      detail1: 'https://i.ibb.co/XrWHZG0L/1-6.png',
      detail2: 'https://i.ibb.co/B2yVNQF0/1-1.png',
      detail3: 'https://i.ibb.co/FbDPTXxf/1-2.png',
      detail4: ''
    },
    'CS-120': {
      main: 'https://i.ibb.co/XrWHZG0L/1-6.png',
      detail1: 'https://i.ibb.co/B2yVNQF0/1-1.png',
      detail2: 'https://i.ibb.co/FbDPTXxf/1-2.png',
      detail3: 'https://i.ibb.co/1GTVKBRG/1-3.png',
      detail4: ''
    },
    'CS-150': {
      main: 'https://i.ibb.co/F4GJfKtR/CS-150-1.jpg',
      detail1: 'https://i.ibb.co/k2Xq5GQW/CS-150-2.jpg',
      detail2: 'https://i.ibb.co/Xf5Pxdzh/CS-150-3.jpg',
      detail3: 'https://i.ibb.co/S4nqh63G/1-4.png',
      detail4: ''
    },
    'CS-180': {
      main: 'https://i.ibb.co/BHxH2bnG/CS-180-1.jpg',
      detail1: 'https://i.ibb.co/8gnwYFk6/CS-180-2.jpg',
      detail2: 'https://i.ibb.co/FqzS4vnF/CS-180-3.jpg',
      detail3: 'https://i.ibb.co/r2jnGRn6/1-5.png',
      detail4: ''
    },
    'CS-200': {
      main: 'https://i.ibb.co/99s8Xzr7/CS-200-1.jpg',
      detail1: 'https://i.ibb.co/rfqxg6X6/CS-200-2.jpg',
      detail2: 'https://i.ibb.co/Y762g1gN/CS-200-3.jpg',
      detail3: 'https://i.ibb.co/XrWHZG0L/1-6.png',
      detail4: ''
    }
  },
  'quad-shaft': {
    'DS-80': {
      main: 'https://i.ibb.co/Jhzq95f/c1f82948-14f5-4d96-8585-4acd216dd86a.png',
      detail1: 'https://i.ibb.co/Hpb9JQH3/cfee1a74-b179-4cf8-b005-7381cfd1d5ff.png',
      detail2: 'https://i.ibb.co/gbH7YySn/61f9ff40-e0e5-424b-b9bd-2f621f0f4337.png',
      detail3: 'https://i.ibb.co/TqLXPKzr/2090c30f-d9b9-4d41-a512-89eaaafdd693.png',
      detail4: ''
    },
    'DS-100': {
      main: 'https://i.ibb.co/Hpb9JQH3/cfee1a74-b179-4cf8-b005-7381cfd1d5ff.png',
      detail1: 'https://i.ibb.co/Jhzq95f/c1f82948-14f5-4d96-8585-4acd216dd86a.png',
      detail2: 'https://i.ibb.co/gbH7YySn/61f9ff40-e0e5-424b-b9bd-2f621f0f4337.png',
      detail3: 'https://i.ibb.co/TqLXPKzr/2090c30f-d9b9-4d41-a512-89eaaafdd693.png',
      detail4: ''
    },
    'DS-150': {
      main: 'https://i.ibb.co/gbH7YySn/61f9ff40-e0e5-424b-b9bd-2f621f0f4337.png',
      detail1: 'https://i.ibb.co/Jhzq95f/c1f82948-14f5-4d96-8585-4acd216dd86a.png',
      detail2: 'https://i.ibb.co/Hpb9JQH3/cfee1a74-b179-4cf8-b005-7381cfd1d5ff.png',
      detail3: 'https://i.ibb.co/TqLXPKzr/2090c30f-d9b9-4d41-a512-89eaaafdd693.png',
      detail4: ''
    },
    'DS-200': {
      main: 'https://i.ibb.co/TqLXPKzr/2090c30f-d9b9-4d41-a512-89eaaafdd693.png',
      detail1: 'https://i.ibb.co/Jhzq95f/c1f82948-14f5-4d96-8585-4acd216dd86a.png',
      detail2: 'https://i.ibb.co/Hpb9JQH3/cfee1a74-b179-4cf8-b005-7381cfd1d5ff.png',
      detail3: 'https://i.ibb.co/gbH7YySn/61f9ff40-e0e5-424b-b9bd-2f621f0f4337.png',
      detail4: ''
    }
  },
  'metal': {
    'RDM-100': {
      main: 'https://i.ibb.co/m5xLp46J/1-1.png',
      detail1: 'https://i.ibb.co/m5xLp46J/1-1.png',
      detail2: '',
      detail3: '',
      detail4: ''
    },
    'RDM-150': {
      main: 'https://i.ibb.co/m5xLp46J/1-1.png',
      detail1: 'https://i.ibb.co/m5xLp46J/1-1.png',
      detail2: '',
      detail3: '',
      detail4: ''
    },
    'RDM-180': {
      main: 'https://i.ibb.co/m5xLp46J/1-1.png',
      detail1: 'https://i.ibb.co/m5xLp46J/1-1.png',
      detail2: '',
      detail3: '',
      detail4: ''
    },
    'RDM-200': {
      main: 'https://i.ibb.co/m5xLp46J/1-1.png',
      detail1: 'https://i.ibb.co/m5xLp46J/1-1.png',
      detail2: '',
      detail3: '',
      detail4: ''
    }
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
  },
  'mobile': {
    'TSM-150': {
      main: 'https://i.ibb.co/vyD7c7R/1-2.png',
      detail1: 'https://i.ibb.co/vyD7c7R/1-2.png',
      detail2: 'https://i.ibb.co/23gJjf2z/1-3.png',
      detail3: 'https://i.ibb.co/8pzcNvW/1-4.png',
      detail4: 'https://i.ibb.co/mC599QZ5/1-5.png'
    },
    'TSM-300': {
      main: 'https://i.ibb.co/vyD7c7R/1-2.png',
      detail1: 'https://i.ibb.co/vyD7c7R/1-2.png',
      detail2: 'https://i.ibb.co/23gJjf2z/1-3.png',
      detail3: 'https://i.ibb.co/8pzcNvW/1-4.png',
      detail4: 'https://i.ibb.co/mC599QZ5/1-5.png'
    },
    'CSM-150': {
      main: 'https://i.ibb.co/vyD7c7R/1-2.png',
      detail1: 'https://i.ibb.co/vyD7c7R/1-2.png',
      detail2: 'https://i.ibb.co/23gJjf2z/1-3.png',
      detail3: 'https://i.ibb.co/8pzcNvW/1-4.png',
      detail4: 'https://i.ibb.co/mC599QZ5/1-5.png'
    },
    'CSM-200': {
      main: 'https://i.ibb.co/vyD7c7R/1-2.png',
      detail1: 'https://i.ibb.co/vyD7c7R/1-2.png',
      detail2: 'https://i.ibb.co/23gJjf2z/1-3.png',
      detail3: 'https://i.ibb.co/8pzcNvW/1-4.png',
      detail4: 'https://i.ibb.co/mC599QZ5/1-5.png'
    }
  },
  'pallet': {
    'TSV-140': {
      main: 'https://i.ibb.co/svR9Kdq7/1-7.png',
      detail1: 'https://i.ibb.co/svR9Kdq7/1-7.png',
      detail2: '',
      detail3: '',
      detail4: ''
    },
    'TSV-200': {
      main: 'https://i.ibb.co/svR9Kdq7/1-7.png',
      detail1: 'https://i.ibb.co/svR9Kdq7/1-7.png',
      detail2: '',
      detail3: '',
      detail4: ''
    },
    'TSVX-200': {
      main: 'https://i.ibb.co/svR9Kdq7/1-7.png',
      detail1: 'https://i.ibb.co/svR9Kdq7/1-7.png',
      detail2: '',
      detail3: '',
      detail4: ''
    }
  },
  'tree-root': {
    'TW-100': {
      main: 'https://i.ibb.co/zHTgTRVC/agac-koku-parcalama-makinesi-sabit-1.png',
      detail1: 'https://i.ibb.co/wFfH472Y/agac-koku-parcalama-makinesi-sabit-4.png',
      detail2: 'https://i.ibb.co/dJBnRpKg/agac-koku-parcalama-makinesi-sabit-5.png',
      detail3: 'https://i.ibb.co/cc0FFnGZ/agac-koku-parcalama-makinesi-sabit-6.png',
      detail4: 'https://i.ibb.co/LztfNHvz/agac-koku-parcalama-makinesi-sabit-7.png'
    },
    'TW-150': {
      main: 'https://i.ibb.co/wFfH472Y/agac-koku-parcalama-makinesi-sabit-4.png',
      detail1: 'https://i.ibb.co/zHTgTRVC/agac-koku-parcalama-makinesi-sabit-1.png',
      detail2: 'https://i.ibb.co/dJBnRpKg/agac-koku-parcalama-makinesi-sabit-5.png',
      detail3: 'https://i.ibb.co/cc0FFnGZ/agac-koku-parcalama-makinesi-sabit-6.png',
      detail4: 'https://i.ibb.co/LztfNHvz/agac-koku-parcalama-makinesi-sabit-7.png'
    },
    'TW-200': {
      main: 'https://i.ibb.co/dJBnRpKg/agac-koku-parcalama-makinesi-sabit-5.png',
      detail1: 'https://i.ibb.co/zHTgTRVC/agac-koku-parcalama-makinesi-sabit-1.png',
      detail2: 'https://i.ibb.co/wFfH472Y/agac-koku-parcalama-makinesi-sabit-4.png',
      detail3: 'https://i.ibb.co/cc0FFnGZ/agac-koku-parcalama-makinesi-sabit-6.png',
      detail4: 'https://i.ibb.co/LztfNHvz/agac-koku-parcalama-makinesi-sabit-7.png'
    }
  },
  'wood': {
    'TSY-100': {
      main: 'https://i.ibb.co/JFxCGnpc/agac-parcalama-ogutme-makinesi-1.png',
      detail1: 'https://i.ibb.co/3509qcH2/agac-parcalama-ogutme-makinesi-2.png',
      detail2: 'https://i.ibb.co/ksMxp2Gy/agac-parcalama-ogutme-makinesi-3.png',
      detail3: 'https://i.ibb.co/wFrzY3Fk/agac-parcalama-ogutme-makinesi-4.png',
      detail4: ''
    },
    'TSY-150': {
      main: 'https://i.ibb.co/3509qcH2/agac-parcalama-ogutme-makinesi-2.png',
      detail1: 'https://i.ibb.co/JFxCGnpc/agac-parcalama-ogutme-makinesi-1.png',
      detail2: 'https://i.ibb.co/ksMxp2Gy/agac-parcalama-ogutme-makinesi-3.png',
      detail3: 'https://i.ibb.co/wFrzY3Fk/agac-parcalama-ogutme-makinesi-4.png',
      detail4: ''
    },
    'TSY-200': {
      main: 'https://i.ibb.co/ksMxp2Gy/agac-parcalama-ogutme-makinesi-3.png',
      detail1: 'https://i.ibb.co/wFrzY3Fk/agac-parcalama-ogutme-makinesi-4.png',
      detail2: 'https://i.ibb.co/JFxCGnpc/agac-parcalama-ogutme-makinesi-1.png',
      detail3: 'https://i.ibb.co/3509qcH2/agac-parcalama-ogutme-makinesi-2.png',
      detail4: ''
    }
  },
  'glass': {
    'CK-200': { main: 'https://i.ibb.co/4wtQRwBB/1-1.png', detail1: '', detail2: '', detail3: '', detail4: '' },
    'CK-400': { main: 'https://i.ibb.co/4wtQRwBB/1-1.png', detail1: '', detail2: '', detail3: '', detail4: '' },
    'CKS-400': { main: 'https://i.ibb.co/4wtQRwBB/1-1.png', detail1: '', detail2: '', detail3: '', detail4: '' },
    'GB-300': { main: 'https://i.ibb.co/4wtQRwBB/1-1.png', detail1: '', detail2: '', detail3: '', detail4: '' }
  },
  'harddisk': {
    'DATABER-S': {
      main: 'https://i.ibb.co/7JsNwKsS/hard-disk-devre-karti-imha-parcalama-makinesi-1.png',
      detail1: 'https://i.ibb.co/gMVFnz1H/hard-disk-devre-karti-imha-parcalama-makinesi-2.png',
      detail2: 'https://i.ibb.co/LhDh8pFc/hard-disk-devre-karti-imha-parcalama-makinesi-3.webp',
      detail3: 'https://i.ibb.co/Gvmf8ks2/hard-disk-devre-karti-imha-parcalama-makinesi-4.webp',
      detail4: ''
    },
    'DATABER-D': {
      main: 'https://i.ibb.co/gMVFnz1H/hard-disk-devre-karti-imha-parcalama-makinesi-2.png',
      detail1: 'https://i.ibb.co/7JsNwKsS/hard-disk-devre-karti-imha-parcalama-makinesi-1.png',
      detail2: 'https://i.ibb.co/LhDh8pFc/hard-disk-devre-karti-imha-parcalama-makinesi-3.webp',
      detail3: 'https://i.ibb.co/Gvmf8ks2/hard-disk-devre-karti-imha-parcalama-makinesi-4.webp',
      detail4: ''
    },
    'DATABER-T': {
      main: 'https://i.ibb.co/LhDh8pFc/hard-disk-devre-karti-imha-parcalama-makinesi-3.webp',
      detail1: 'https://i.ibb.co/Gvmf8ks2/hard-disk-devre-karti-imha-parcalama-makinesi-4.webp',
      detail2: 'https://i.ibb.co/7JsNwKsS/hard-disk-devre-karti-imha-parcalama-makinesi-1.png',
      detail3: 'https://i.ibb.co/gMVFnz1H/hard-disk-devre-karti-imha-parcalama-makinesi-2.png',
      detail4: ''
    }
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
  'mobile': 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080',
  'pallet': 'https://i.ibb.co/svR9Kdq7/1-7.png',
  'harddisk': 'https://i.ibb.co/7JsNwKsS/hard-disk-devre-karti-imha-parcalama-makinesi-1.png',
  'tree-root': 'https://i.ibb.co/zHTgTRVC/agac-koku-parcalama-makinesi-sabit-1.png',
  'wood': 'https://i.ibb.co/JFxCGnpc/agac-parcalama-ogutme-makinesi-1.png',
  'glass': 'https://i.ibb.co/4wtQRwBB/1-1.png',
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
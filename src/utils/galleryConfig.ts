/**
 * Gallery Configuration — Product image galleries
 * Centralized config for all product gallery images
 * Images are stored in: public/catalogs/assets/makinegörseller/
 */

export interface GalleryImage {
    src: string;
    alt: string;
}

// URL-encoded base paths for Turkish directory names
const PATHS = {
    'single-shaft': '/catalogs/assets/makineg%C3%B6rseller/Tek%20%C5%9Faftl%C4%B1%20par%C3%A7alama',
    'dual-shaft': '/catalogs/assets/makineg%C3%B6rseller/%C3%87ift%20%C5%9Faftl%C4%B1%20par%C3%A7alama',
    'quad-shaft': '/catalogs/assets/makineg%C3%B6rseller/D%C3%B6rt%20%C5%9Faftl%C4%B1%20par%C3%A7alama',
    'metal': '/catalogs/assets/makineg%C3%B6rseller/Metal%20par%C3%A7alama%20makinesi',
    'mobile': '/catalogs/assets/makineg%C3%B6rseller/mobil%20k%C4%B1r%C4%B1c%C4%B1',
    'pallet': '/catalogs/assets/makineg%C3%B6rseller/Palet%20Par%C3%A7alama%20Makinesi',
} as const;

// Alt text templates per product type (Turkish)
const ALT_TEXTS: Record<string, string> = {
    'single-shaft': 'Tek Şaftlı Parçalama Makinesi',
    'dual-shaft': 'Çift Şaftlı Parçalama Makinesi',
    'quad-shaft': 'Dört Şaftlı Parçalama Makinesi',
    'metal': 'Metal Parçalama Makinesi',
    'mobile': 'Mobil Kırıcı',
    'pallet': 'Palet Parçalama Makinesi',
};

// Image file definitions: [prefix, extension, count]
const IMAGE_DEFS: Record<string, { prefix: string; ext: string; count: number }> = {
    'single-shaft': { prefix: 'tek-saft', ext: 'jpeg', count: 24 },
    'dual-shaft': { prefix: 'cift-saft', ext: 'jpeg', count: 22 },
    'quad-shaft': { prefix: 'dort-saft', ext: 'png', count: 4 },
    'metal': { prefix: 'metal', ext: 'png', count: 4 },
    'pallet': { prefix: 'palet', ext: 'webp', count: 14 },
};

// Mobil kırıcı has mixed extensions
const MOBILE_IMAGES: { name: string }[] = [
    // jpeg files
    ...([1, 2, 3, 4, 5, 7, 8, 9, 10].map(n => ({ name: `mobil-${n}.jpeg` }))),
    // png files
    ...([6, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24].map(n => ({ name: `mobil-${n}.png` }))),
];

/**
 * Build gallery images for a given product type
 */
function buildGalleryImages(productType: string): GalleryImage[] {
    const basePath = PATHS[productType as keyof typeof PATHS];
    const altText = ALT_TEXTS[productType];
    if (!basePath || !altText) return [];

    // Handle mobile separately due to mixed extensions
    if (productType === 'mobile') {
        return MOBILE_IMAGES.map((img, i) => ({
            src: `${basePath}/${img.name}`,
            alt: `${altText} - Görsel ${i + 1} - MT Makina`,
        }));
    }

    const def = IMAGE_DEFS[productType];
    if (!def) return [];

    return Array.from({ length: def.count }, (_, i) => ({
        src: `${basePath}/${def.prefix}-${i + 1}.${def.ext}`,
        alt: `${altText} - Görsel ${i + 1} - MT Makina`,
    }));
}

/**
 * Pre-built gallery images cache
 */
export const productGalleryImages: Record<string, GalleryImage[]> = {
    'single-shaft': buildGalleryImages('single-shaft'),
    'dual-shaft': buildGalleryImages('dual-shaft'),
    'quad-shaft': buildGalleryImages('quad-shaft'),
    'metal': buildGalleryImages('metal'),
    'mobile': buildGalleryImages('mobile'),
    'pallet': buildGalleryImages('pallet'),
};

/**
 * Get gallery images for a product type
 */
export const getGalleryImages = (productType: string): GalleryImage[] => {
    return productGalleryImages[productType] || [];
};

/**
 * Check if a product type has gallery images
 */
export const hasGalleryImages = (productType: string): boolean => {
    return (productGalleryImages[productType]?.length ?? 0) > 0;
};

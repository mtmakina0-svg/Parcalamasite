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
    'glass': '/catalogs/assets/makineg%C3%B6rseller/Cam%20%C5%9Ei%C5%9Fe%20K%C4%B1rma%20Makinesi',
} as const;

// Alt text templates per product type (Turkish)
const ALT_TEXTS: Record<string, string> = {
    'single-shaft': 'Tek Şaftlı Parçalama Makinesi',
    'dual-shaft': 'Çift Şaftlı Parçalama Makinesi',
    'quad-shaft': 'Dört Şaftlı Parçalama Makinesi',
    'metal': 'Metal Parçalama Makinesi',
    'mobile': 'Mobil Kırıcı',
    'pallet': 'Palet Parçalama Makinesi',
    'glass': 'Cam Şişe Kırma Makinesi',
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

// Cam Şişe Kırma Makinesi has hash-based filenames
const GLASS_IMAGES: { name: string }[] = [
    { name: 'hf_20260218_080251_94d67375-726f-4e12-a895-cba99037fc8e.webp' },
    { name: 'hf_20260218_080650_4732c07a-fea2-4b5f-b75a-a53a7055b3c8.webp' },
    { name: 'hf_20260218_102434_da900f8f-6a44-4484-9100-0a339a837159.webp' },
    { name: 'hf_20260218_114122_28e1cac8-3352-46ff-acdb-8a64f8d065e3.webp' },
    { name: 'hf_20260218_114641_fd4f5431-d9e1-4dba-9571-4cdb941c7899.webp' },
    { name: 'hf_20260218_115214_940cde12-4596-43d3-ba84-abe45adf3593.webp' },
    { name: 'hf_20260218_115214_e9ea8eed-8bfb-4abf-81c8-bbddcabb8ccd.webp' },
    { name: 'hf_20260218_131000_40893750-2621-4f22-ad80-f27592dec269.webp' },
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

    // Handle glass separately due to hash-based filenames
    if (productType === 'glass') {
        return GLASS_IMAGES.map((img, i) => ({
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
    'glass': buildGalleryImages('glass'),
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

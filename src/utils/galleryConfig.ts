/**
 * Gallery Configuration — Product image galleries
 * Centralized config for all product gallery images
 */

const PALLET_BASE = '/catalogs/assets/makineg%C3%B6rseller/Palet%20Par%C3%A7alama%20Makinesi';

export interface GalleryImage {
    src: string;
    alt: string;
}

/**
 * Product gallery images mapping
 * Key = product type, value = array of gallery images
 */
export const productGalleryImages: Record<string, GalleryImage[]> = {
    'pallet': Array.from({ length: 14 }, (_, i) => ({
        src: `${PALLET_BASE}/palet-${i + 1}.webp`,
        alt: `Palet Parçalama Makinesi - Görsel ${i + 1} - MT Makina`
    }))
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

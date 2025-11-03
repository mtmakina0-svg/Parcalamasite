/**
 * Certificates configuration for ImgBB-hosted certificate images
 */

// Certificate image URLs from ImgBB
export const CERTIFICATE_IMAGES = {
  cert1: 'https://i.ibb.co/wNdQYR6d/SO45001-2018.jpg', // ISO 45001:2018
  cert2: 'https://i.ibb.co/20gwbGYy/SO14001-2015.jpg', // ISO 14001:2015
  cert3: 'https://i.ibb.co/HfNjWmnG/SO18001-OHSAS.jpg', // ISO 18001 OHSAS
  cert4: 'https://i.ibb.co/Gff9mpzP/SO9001-2015.jpg', // ISO 9001:2015
  cert5: 'https://i.ibb.co/ynT0zSKz/CE-T-bbi-At-k-Yakma-F-r-n.jpg', // CE - Tıbbi Atık Yakma Fırını
  cert6: 'https://i.ibb.co/whZFTFch/SO5001-2018.jpg', // ISO 50001:2018
  cert7: 'https://i.ibb.co/rRQhX71m/CE-Dikey-Balya-Presi.jpg', // CE - Dikey Balya Presi
  cert8: 'https://i.ibb.co/ycgMnT0C/CE-Levha-Par-alama-Makinesi.jpg', // CE - Levha Parçalama
};

// Fallback placeholder for certificates
export const CERTIFICATE_FALLBACK = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgZmlsbD0iI0Y1RjdGOCIvPjxyZWN0IHg9IjMwIiB5PSIzMCIgd2lkdGg9IjM0MCIgaGVpZ2h0PSIyNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI0Y0Q0UxNCIgc3Ryb2tlLXdpZHRoPSI0Ii8+PHRleHQgeD0iMjAwIiB5PSIxMzAiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIyNCIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IiM0NTQ3NEIiIHRleHQtYW5jaG9yPSJtaWRkbGUiPkNFUlRJRklDQVRFPC90ZXh0Pjx0ZXh0IHg9IjIwMCIgeT0iMTYwIiBmb250LWZhbWlseT0iQXJpYWwsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTYiIGZpbGw9IiM0NTQ3NEIiIHRleHQtYW5jaG9yPSJtaWRkbGUiPk1UIE1ha2luYTwvdGV4dD48L3N2Zz4=';

// Get certificate URL by index (1-8)
export const getCertificateUrl = (index: number): string => {
  const key = `cert${index}` as keyof typeof CERTIFICATE_IMAGES;
  return CERTIFICATE_IMAGES[key] || CERTIFICATE_FALLBACK;
};

// Get all certificate URLs as an array
export const getAllCertificateUrls = (): string[] => {
  return Object.values(CERTIFICATE_IMAGES);
};

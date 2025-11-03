/**
 * Certificates configuration for GitHub-hosted certificate images
 */

// GitHub base URL for certificates
const GITHUB_BASE_URL = 'https://raw.githubusercontent.com/mtmakina0/parcalamasite/main/public/certificates';

// Certificate image URLs
export const CERTIFICATE_IMAGES = {
  cert1: `${GITHUB_BASE_URL}/cert1.png`,
  cert2: `${GITHUB_BASE_URL}/cert2.png`,
  cert3: `${GITHUB_BASE_URL}/cert3.png`,
  cert4: `${GITHUB_BASE_URL}/cert4.png`,
  cert5: `${GITHUB_BASE_URL}/cert5.png`,
  cert6: `${GITHUB_BASE_URL}/cert6.png`,
  cert7: `${GITHUB_BASE_URL}/cert7.png`,
  cert8: `${GITHUB_BASE_URL}/cert8.png`,
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

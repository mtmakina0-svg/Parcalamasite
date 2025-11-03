/**
 * Image URL validation and testing utilities
 */

import { getModelImages, getFallbackImage, PRODUCT_FOLDER_MAP } from './imageConfig';
import { CERTIFICATE_IMAGES } from './certificatesConfig';

/**
 * Test if a URL is accessible
 */
export const testImageUrl = async (url: string): Promise<boolean> => {
  try {
    const response = await fetch(url, { method: 'HEAD' });
    return response.ok;
  } catch (error) {
    console.error(`Failed to fetch ${url}:`, error);
    return false;
  }
};

/**
 * Validate all images for a specific product model
 */
export const validateModelImages = async (
  productType: string,
  modelName: string
): Promise<{ valid: boolean; results: { [key: string]: boolean } }> => {
  const images = getModelImages(productType, modelName);
  const results: { [key: string]: boolean } = {};

  for (const [key, url] of Object.entries(images)) {
    results[key] = await testImageUrl(url);
  }

  const allValid = Object.values(results).every((v) => v);
  return { valid: allValid, results };
};

/**
 * Validate all certificate images
 */
export const validateCertificateImages = async (): Promise<{
  valid: boolean;
  results: { [key: string]: boolean };
}> => {
  const results: { [key: string]: boolean } = {};

  for (const [key, url] of Object.entries(CERTIFICATE_IMAGES)) {
    results[key] = await testImageUrl(url);
  }

  const allValid = Object.values(results).every((v) => v);
  return { valid: allValid, results };
};

/**
 * Generate a test report for all images
 */
export const generateImageTestReport = async (): Promise<string> => {
  let report = '# Image URL Test Report\n\n';
  report += `Generated: ${new Date().toISOString()}\n\n`;

  // Test product images for each type
  report += '## Product Images\n\n';
  
  const testModels = {
    'single-shaft': 'TSH-60',
    'dual-shaft': 'CS-80',
    'quad-shaft': 'QS-100'
  };

  for (const [productType, modelName] of Object.entries(testModels)) {
    report += `### ${productType} - ${modelName}\n`;
    const { valid, results } = await validateModelImages(productType, modelName);
    report += `Status: ${valid ? '✅ PASS' : '❌ FAIL'}\n\n`;
    
    for (const [key, status] of Object.entries(results)) {
      report += `- ${key}: ${status ? '✅' : '❌'}\n`;
    }
    report += '\n';
  }

  // Test certificates
  report += '## Certificates\n\n';
  const { valid, results } = await validateCertificateImages();
  report += `Status: ${valid ? '✅ PASS' : '❌ FAIL'}\n\n`;
  
  for (const [key, status] of Object.entries(results)) {
    report += `- ${key}: ${status ? '✅' : '❌'}\n`;
  }

  return report;
};

/**
 * Console-friendly image URL checker
 * Usage: Open browser console and call window.checkImages()
 */
export const setupImageChecker = () => {
  if (typeof window !== 'undefined') {
    (window as any).checkImages = async () => {
      console.log('🔍 Starting image URL validation...\n');
      
      const testModels = {
        'single-shaft': 'TSH-60',
        'dual-shaft': 'CS-80',
        'quad-shaft': 'QS-100'
      };

      for (const [productType, modelName] of Object.entries(testModels)) {
        console.log(`\n📦 ${productType} - ${modelName}`);
        const images = getModelImages(productType, modelName);
        
        for (const [key, url] of Object.entries(images)) {
          const valid = await testImageUrl(url);
          console.log(`  ${valid ? '✅' : '❌'} ${key}: ${url}`);
        }
      }

      console.log('\n📜 Certificates');
      for (const [key, url] of Object.entries(CERTIFICATE_IMAGES)) {
        const valid = await testImageUrl(url);
        console.log(`  ${valid ? '✅' : '❌'} ${key}: ${url}`);
      }

      console.log('\n✨ Validation complete!');
    };

    console.log('💡 Tip: Run window.checkImages() to validate all image URLs');
  }
};

/**
 * Get human-readable product name from folder name
 */
export const getProductNameFromFolder = (folderName: string): string => {
  const mapping: { [key: string]: string } = {
    'TEK ŞAFTLI PARÇALAMA MAKİNESİ': 'Single Shaft Shredder',
    'ÇİFT ŞAFTLI PARÇALAMA MAKİNESİ': 'Dual Shaft Shredder',
    'DÖRT ŞAFTLI PARÇALAMA MAKİNESİ': 'Quad Shaft Shredder',
    'METAL PARÇALAMA MAKİNESİ': 'Metal Shredder',
    'GRANÜLATÖR': 'Granulator',
    'BALYA PRESİ': 'Baler Press',
    'KONVEYÖR SİSTEMİ': 'Conveyor System',
    'AYIRICI SİSTEM': 'Separator System'
  };
  
  return mapping[folderName] || folderName;
};

/**
 * Log all configured image paths (for debugging)
 */
export const logAllImagePaths = () => {
  console.group('🖼️ Image Configuration');
  
  console.group('Product Folder Mapping');
  for (const [key, value] of Object.entries(PRODUCT_FOLDER_MAP)) {
    console.log(`${key} → ${value}`);
  }
  console.groupEnd();

  console.group('Example URLs');
  const exampleImages = getModelImages('single-shaft', 'TSH-60');
  for (const [key, url] of Object.entries(exampleImages)) {
    console.log(`${key}:`, url);
  }
  console.groupEnd();

  console.group('Certificate URLs');
  for (const [key, url] of Object.entries(CERTIFICATE_IMAGES)) {
    console.log(`${key}:`, url);
  }
  console.groupEnd();

  console.groupEnd();
};

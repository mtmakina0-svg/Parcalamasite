/**
 * SEO Alt Text Generator for Images
 * Generates descriptive alt text for accessibility and SEO
 */

export interface AltTextConfig {
  productType?: string;
  modelName?: string;
  context?: 'hero' | 'product' | 'detail' | 'reference' | 'certificate' | 'technology';
  language?: 'tr' | 'en' | 'ru' | 'ar';
}

/**
 * Product type translations for alt text
 */
const productTypeNames = {
  tr: {
    'single-shaft': 'Tek Şaftlı Parçalama Makinesi',
    'dual-shaft': 'Çift Şaftlı Parçalama Makinesi',
    'quad-shaft': 'Dörtlü Şaft Parçalama Makinesi',
    'metal': 'Metal Parçalama Makinesi',
    'granulator': 'Granülatör Makinesi',
    'baler': 'Balyalama Makinesi',
    'conveyor': 'Konveyör Sistemi',
    'separator': 'Ayırıcı Makine'
  },
  en: {
    'single-shaft': 'Single Shaft Shredder',
    'dual-shaft': 'Dual Shaft Shredder',
    'quad-shaft': 'Quad Shaft Shredder',
    'metal': 'Metal Shredder',
    'granulator': 'Granulator Machine',
    'baler': 'Baler Press',
    'conveyor': 'Conveyor System',
    'separator': 'Separator Machine'
  },
  ru: {
    'single-shaft': 'Одновальный измельчитель',
    'dual-shaft': 'Двухвальный измельчитель',
    'quad-shaft': 'Четырехвальный измельчитель',
    'metal': 'Металлический измельчитель',
    'granulator': 'Гранулятор',
    'baler': 'Пресс для балирования',
    'conveyor': 'Конвейерная система',
    'separator': 'Сепаратор'
  },
  ar: {
    'single-shaft': 'آلة تقطيع أحادية العمود',
    'dual-shaft': 'آلة تقطيع ثنائية العمود',
    'quad-shaft': 'آلة تقطيع رباعية العمود',
    'metal': 'آلة تقطيع المعادن',
    'granulator': 'آلة الحبيبات',
    'baler': 'آلة الكبس',
    'conveyor': 'نظام النقل',
    'separator': 'آلة الفصل'
  }
};

/**
 * Generate SEO-optimized alt text for product images
 */
export function generateProductAltText(config: AltTextConfig): string {
  const { productType, modelName, context = 'product', language = 'tr' } = config;

  if (!productType) {
    return language === 'tr' 
      ? 'MT Makina Endüstriyel Parçalama Makinesi'
      : 'MT Makina Industrial Shredding Machine';
  }

  const productName = productTypeNames[language]?.[productType] || productType;
  const brandName = 'MT Makina';

  switch (context) {
    case 'hero':
      return language === 'tr'
        ? `${brandName} ${productName} - Endüstriyel Geri Dönüşüm Çözümleri`
        : `${brandName} ${productName} - Industrial Recycling Solutions`;

    case 'product':
      if (modelName) {
        return language === 'tr'
          ? `${brandName} ${modelName} ${productName} - Yüksek Performanslı Parçalama Sistemi`
          : `${brandName} ${modelName} ${productName} - High Performance Shredding System`;
      }
      return `${brandName} ${productName}`;

    case 'detail':
      if (modelName) {
        return language === 'tr'
          ? `${brandName} ${modelName} Model ${productName} - Teknik Özellikler ve Detaylar`
          : `${brandName} ${modelName} Model ${productName} - Technical Specifications and Details`;
      }
      return `${brandName} ${productName} - Detaylı Görünüm`;

    case 'reference':
      return language === 'tr'
        ? `${brandName} ${productName} - Müşteri Referansı ve Uygulama Örneği`
        : `${brandName} ${productName} - Customer Reference and Application Example`;

    case 'certificate':
      return language === 'tr'
        ? `${brandName} Kalite Sertifikası ve Belgeler`
        : `${brandName} Quality Certificate and Documents`;

    case 'technology':
      return language === 'tr'
        ? `${brandName} ${productName} - İleri Teknoloji ve Üretim Süreci`
        : `${brandName} ${productName} - Advanced Technology and Production Process`;

    default:
      return `${brandName} ${productName}`;
  }
}

/**
 * Generate alt text for logo
 */
export function generateLogoAltText(language: 'tr' | 'en' | 'ru' | 'ar' = 'tr'): string {
  const texts = {
    tr: 'MT Makina Logo - Endüstriyel Parçalama Makineleri Üreticisi',
    en: 'MT Makina Logo - Industrial Shredding Machines Manufacturer',
    ru: 'Логотип MT Makina - Производитель промышленных измельчителей',
    ar: 'شعار MT Makina - الشركة المصنعة لآلات التقطيع الصناعية'
  };
  return texts[language] || texts.tr;
}

/**
 * Generate alt text for waste category images
 */
export function generateWasteAltText(
  wasteType: string,
  language: 'tr' | 'en' | 'ru' | 'ar' = 'tr'
): string {
  const wasteNames = {
    tr: {
      'plastik': 'Plastik Atık Geri Dönüşümü',
      'metal': 'Metal Hurda Parçalama',
      'kagit-karton': 'Kağıt Karton Atık İşleme',
      'elektronik': 'Elektronik Atık Geri Kazanımı',
      'ahsap': 'Ahşap Atık Parçalama',
      'lastik': 'Lastik Geri Dönüşümü',
      'tekstil': 'Tekstil Atık İşleme',
      'organik': 'Organik Atık Yönetimi'
    },
    en: {
      'plastik': 'Plastic Waste Recycling',
      'metal': 'Metal Scrap Shredding',
      'kagit-karton': 'Paper Cardboard Waste Processing',
      'elektronik': 'Electronic Waste Recovery',
      'ahsap': 'Wood Waste Shredding',
      'lastik': 'Tire Recycling',
      'tekstil': 'Textile Waste Processing',
      'organik': 'Organic Waste Management'
    },
    ru: {
      'plastik': 'Переработка пластиковых отходов',
      'metal': 'Измельчение металлолома',
      'kagit-karton': 'Переработка бумаги и картона',
      'elektronik': 'Утилизация электронных отходов',
      'ahsap': 'Измельчение древесных отходов',
      'lastik': 'Переработка шин',
      'tekstil': 'Переработка текстиля',
      'organik': 'Управление органическими отходами'
    },
    ar: {
      'plastik': 'إعادة تدوير النفايات البلاستيكية',
      'metal': 'تقطيع خردة المعادن',
      'kagit-karton': 'معالجة نفايات الورق والكرتون',
      'elektronik': 'استرجاع النفايات الإلكترونية',
      'ahsap': 'تقطيع نفايات الخشب',
      'lastik': 'إعادة تدوير الإطارات',
      'tekstil': 'معالجة نفايات المنسوجات',
      'organik': 'إدارة النفايات العضوية'
    }
  };

  return wasteNames[language]?.[wasteType] || wasteType;
}

/**
 * Generate alt text for reference/customer images
 */
export function generateReferenceAltText(
  companyName?: string,
  language: 'tr' | 'en' | 'ru' | 'ar' = 'tr'
): string {
  if (companyName) {
    return language === 'tr'
      ? `${companyName} - MT Makina Müşteri Referansı`
      : `${companyName} - MT Makina Customer Reference`;
  }
  return language === 'tr'
    ? 'MT Makina Müşteri Referansları'
    : 'MT Makina Customer References';
}

/**
 * Generate alt text for technology/feature images
 */
export function generateTechnologyAltText(
  feature: 'hydraulic' | 'blade' | 'automation' | 'energy',
  language: 'tr' | 'en' | 'ru' | 'ar' = 'tr'
): string {
  const featureNames = {
    tr: {
      hydraulic: 'Hidrolik Sistem Teknolojisi - MT Makina',
      blade: 'Kesici Bıçak Teknolojisi - MT Makina',
      automation: 'Otomasyon ve PLC Kontrol Sistemi - MT Makina',
      energy: 'Enerji Verimli Parçalama Sistemi - MT Makina'
    },
    en: {
      hydraulic: 'Hydraulic System Technology - MT Makina',
      blade: 'Cutting Blade Technology - MT Makina',
      automation: 'Automation and PLC Control System - MT Makina',
      energy: 'Energy Efficient Shredding System - MT Makina'
    },
    ru: {
      hydraulic: 'Технология гидравлической системы - MT Makina',
      blade: 'Технология режущих лезвий - MT Makina',
      automation: 'Система автоматизации и управления ПЛК - MT Makina',
      energy: 'Энергоэффективная система измельчения - MT Makina'
    },
    ar: {
      hydraulic: 'تكنولوجيا النظام الهيدروليكي - MT Makina',
      blade: 'تكنولوجيا الشفرات القاطعة - MT Makina',
      automation: 'نظام الأتمتة والتحكم PLC - MT Makina',
      energy: 'نظام تقطيع موفر للطاقة - MT Makina'
    }
  };

  return featureNames[language]?.[feature] || feature;
}

/**
 * Generate alt text for certificate images
 */
export function generateCertificateAltText(
  certificateType: 'ISO' | 'CE' | 'TSE' | 'other',
  language: 'tr' | 'en' | 'ru' | 'ar' = 'tr'
): string {
  const certNames = {
    tr: {
      ISO: 'ISO Kalite Yönetim Sistemi Sertifikası - MT Makina',
      CE: 'CE Uygunluk Belgesi - MT Makina',
      TSE: 'TSE Belgesi - MT Makina',
      other: 'Kalite Belgesi - MT Makina'
    },
    en: {
      ISO: 'ISO Quality Management System Certificate - MT Makina',
      CE: 'CE Conformity Certificate - MT Makina',
      TSE: 'TSE Certificate - MT Makina',
      other: 'Quality Certificate - MT Makina'
    },
    ru: {
      ISO: 'Сертификат системы управления качеством ISO - MT Makina',
      CE: 'Сертификат соответствия CE - MT Makina',
      TSE: 'Сертификат TSE - MT Makina',
      other: 'Сертификат качества - MT Makina'
    },
    ar: {
      ISO: 'شهادة نظام إدارة الجودة ISO - MT Makina',
      CE: 'شهادة المطابقة CE - MT Makina',
      TSE: 'شهادة TSE - MT Makina',
      other: 'شهادة الجودة - MT Makina'
    }
  };

  return certNames[language]?.[certificateType] || certNames[language].other;
}

/**
 * Validate alt text for SEO best practices
 */
export function validateAltText(altText: string): {
  isValid: boolean;
  issues: string[];
  suggestions: string[];
} {
  const issues: string[] = [];
  const suggestions: string[] = [];

  // Length check (ideal: 50-125 characters)
  if (altText.length < 10) {
    issues.push('Alt text is too short (less than 10 characters)');
    suggestions.push('Add more descriptive details about the image');
  }
  if (altText.length > 125) {
    issues.push('Alt text is too long (more than 125 characters)');
    suggestions.push('Keep alt text concise and focused');
  }

  // Keyword stuffing check
  const words = altText.toLowerCase().split(' ');
  const uniqueWords = new Set(words);
  if (words.length - uniqueWords.size > 2) {
    issues.push('Possible keyword stuffing detected');
    suggestions.push('Avoid repeating keywords unnecessarily');
  }

  // Check for generic phrases
  const genericPhrases = ['image', 'picture', 'photo', 'görsel', 'resim', 'fotoğraf'];
  const hasGeneric = genericPhrases.some(phrase => 
    altText.toLowerCase().includes(phrase)
  );
  if (hasGeneric) {
    issues.push('Contains generic descriptors');
    suggestions.push('Focus on what the image shows, not that it is an image');
  }

  // Empty check
  if (altText.trim() === '') {
    issues.push('Alt text is empty');
    suggestions.push('Add descriptive alt text for accessibility and SEO');
  }

  return {
    isValid: issues.length === 0,
    issues,
    suggestions
  };
}

/**
 * Generate comprehensive alt text with automatic validation
 */
export function generateAndValidateAltText(config: AltTextConfig): {
  altText: string;
  validation: ReturnType<typeof validateAltText>;
} {
  const altText = generateProductAltText(config);
  const validation = validateAltText(altText);

  return {
    altText,
    validation
  };
}

// Export default generator
export default {
  generateProductAltText,
  generateLogoAltText,
  generateWasteAltText,
  generateReferenceAltText,
  generateTechnologyAltText,
  generateCertificateAltText,
  validateAltText,
  generateAndValidateAltText
};

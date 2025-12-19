/**
 * Product Model Specifications
 * All product specifications extracted from ProductDetailPage for better maintainability
 */

export interface ModelSpecs {
    motorPower: string;
    rotorLength: string;
    rotorDiameter: string;
    bladeCount: string;
    weight: string;
    capacity: string;
    screenSize?: string;
}

export const modelSpecifications: { [key: string]: { [modelName: string]: ModelSpecs } } = {
    'single-shaft': {
        'TSH-60': {
            motorPower: '15–30 kW',
            rotorLength: '600 mm',
            rotorDiameter: '600 x 1100 mm',
            bladeCount: '24 adet',
            weight: '2500 kg',
            capacity: '500-800 kg/saat'
        },
        'TSH-80': {
            motorPower: '22–45 kW',
            rotorLength: '800 mm',
            rotorDiameter: '800 x 1100 mm',
            bladeCount: '32 adet',
            weight: '3200 kg',
            capacity: '800-1200 kg/saat'
        },
        'TSH-100': {
            motorPower: '30–75 kW',
            rotorLength: '1000 mm',
            rotorDiameter: '1000 x 1300 mm',
            bladeCount: '40 adet',
            weight: '4000 kg',
            capacity: '1200-1800 kg/saat'
        },
        'TSH-130': {
            motorPower: '45–110 kW',
            rotorLength: '1300 mm',
            rotorDiameter: '1300 x 1600 mm',
            bladeCount: '48 adet',
            weight: '5000 kg',
            capacity: '1800-2500 kg/saat'
        },
        'TSH-160': {
            motorPower: '55–132 kW (2x)',
            rotorLength: '1600 mm',
            rotorDiameter: '1600 x 1800 mm',
            bladeCount: '64 adet',
            weight: '7500 kg',
            capacity: '3500-4500 kg/saat'
        },
        'TSH-200': {
            motorPower: '75–160 kW (2x)',
            rotorLength: '2000 mm',
            rotorDiameter: '2000 x 2300 mm',
            bladeCount: '80 adet',
            weight: '9000 kg',
            capacity: '4500-6000 kg/saat'
        }
    },
    'dual-shaft': {
        'CS-20': {
            motorPower: '2 x 7.5 kW',
            rotorLength: '400 mm',
            rotorDiameter: '200 mm',
            bladeCount: '32 adet',
            weight: '1800 kg',
            capacity: '300-500 kg/saat',
            screenSize: '30-80 mm'
        },
        'CS-40': {
            motorPower: '2 x 11 kW',
            rotorLength: '600 mm',
            rotorDiameter: '250 mm',
            bladeCount: '48 adet',
            weight: '2500 kg',
            capacity: '500-800 kg/saat',
            screenSize: '30-100 mm'
        },
        'CS-60': {
            motorPower: '2 x 15 kW',
            rotorLength: '800 mm',
            rotorDiameter: '300 mm',
            bladeCount: '64 adet',
            weight: '3500 kg',
            capacity: '800-1500 kg/saat',
            screenSize: '40-120 mm'
        },
        'CS-80': {
            motorPower: '2 x 22 kW',
            rotorLength: '1000 mm',
            rotorDiameter: '350 mm',
            bladeCount: '80 adet',
            weight: '4800 kg',
            capacity: '1500-2500 kg/saat',
            screenSize: '50-150 mm'
        },
        'CS-100': {
            motorPower: '2 x 30 kW',
            rotorLength: '1200 mm',
            rotorDiameter: '400 mm',
            bladeCount: '96 adet',
            weight: '6000 kg',
            capacity: '2500-4000 kg/saat',
            screenSize: '60-180 mm'
        },
        'CS-120': {
            motorPower: '2 x 37 kW',
            rotorLength: '1400 mm',
            rotorDiameter: '450 mm',
            bladeCount: '112 adet',
            weight: '7500 kg',
            capacity: '4000-6000 kg/saat',
            screenSize: '80-200 mm'
        },
        'CS-150': {
            motorPower: '2 x 45 kW',
            rotorLength: '1600 mm',
            rotorDiameter: '500 mm',
            bladeCount: '128 adet',
            weight: '9000 kg',
            capacity: '6000-8000 kg/saat',
            screenSize: '100-250 mm'
        },
        'CS-180': {
            motorPower: '2 x 55 kW',
            rotorLength: '1800 mm',
            rotorDiameter: '550 mm',
            bladeCount: '144 adet',
            weight: '11000 kg',
            capacity: '8000-12000 kg/saat',
            screenSize: '120-300 mm'
        },
        'CS-200': {
            motorPower: '2 x 75 kW',
            rotorLength: '2000 mm',
            rotorDiameter: '600 mm',
            bladeCount: '160 adet',
            weight: '14000 kg',
            capacity: '12000-18000 kg/saat',
            screenSize: '150-350 mm'
        }
    },
    'quad-shaft': {
        'DS-80': {
            motorPower: '11–22 kW (4x)',
            rotorLength: '800 mm',
            rotorDiameter: '800 x 800 mm',
            bladeCount: '128 adet',
            weight: '5500 kg',
            capacity: '1000-2000 kg/saat',
            screenSize: '20-60 mm'
        },
        'DS-100': {
            motorPower: '22–45 kW (4x)',
            rotorLength: '1000 mm',
            rotorDiameter: '1000 x 1000 mm',
            bladeCount: '160 adet',
            weight: '7500 kg',
            capacity: '2000-3500 kg/saat',
            screenSize: '25-80 mm'
        },
        'DS-150': {
            motorPower: '45–132 kW (4x)',
            rotorLength: '1500 mm',
            rotorDiameter: '1500 x 1500 mm',
            bladeCount: '240 adet',
            weight: '11000 kg',
            capacity: '5000-8000 kg/saat',
            screenSize: '40-120 mm'
        },
        'DS-200': {
            motorPower: '75–160 kW (4x)',
            rotorLength: '2000 mm',
            rotorDiameter: '2000 x 2000 mm',
            bladeCount: '320 adet',
            weight: '15000 kg',
            capacity: '8000-12000 kg/saat',
            screenSize: '50-150 mm'
        }
    },
    'metal': {
        'RDM-100': {
            motorPower: '45–75 kW (2-4X)',
            rotorLength: '1000 mm',
            rotorDiameter: '1000 x 1000 mm',
            bladeCount: '96 adet',
            weight: '6500 kg',
            capacity: '2000-3500 kg/saat'
        },
        'RDM-150': {
            motorPower: '55–90 kW (2-4X)',
            rotorLength: '1500 mm',
            rotorDiameter: '1500 x 1500 mm',
            bladeCount: '120 adet',
            weight: '9000 kg',
            capacity: '3500-5500 kg/saat'
        },
        'RDM-180': {
            motorPower: '75–90 kW (2-4X)',
            rotorLength: '1800 mm',
            rotorDiameter: '1800 x 1500 mm',
            bladeCount: '144 adet',
            weight: '11500 kg',
            capacity: '5500-8000 kg/saat'
        },
        'RDM-200': {
            motorPower: '90–132 kW (2-4X)',
            rotorLength: '2000 mm',
            rotorDiameter: '2000 x 1800 mm',
            bladeCount: '160 adet',
            weight: '14000 kg',
            capacity: '8000-12000 kg/saat'
        }
    },
    'pallet': {
        'TSV-140': {
            motorPower: '30 kW',
            rotorLength: '1400 mm',
            rotorDiameter: '1400 x 400 mm',
            bladeCount: '28 adet',
            weight: '3800 kg',
            capacity: '1500-2500 kg/saat'
        },
        'TSV-200': {
            motorPower: '55 kW',
            rotorLength: '2000 mm',
            rotorDiameter: '2000 x 400 mm',
            bladeCount: '40 adet',
            weight: '5200 kg',
            capacity: '3000-4500 kg/saat'
        },
        'TSVX-200': {
            motorPower: '2 x 45 kW',
            rotorLength: '2000 mm',
            rotorDiameter: '2000 x 400 mm',
            bladeCount: '40 adet',
            weight: '6500 kg',
            capacity: '4500-6000 kg/saat'
        }
    },
    'harddisk': {
        'DATABER-S': {
            motorPower: '3–11 kW',
            rotorLength: '150 x 150 mm',
            rotorDiameter: 'Tekli Parçalayıcı',
            bladeCount: 'Sertleştirilmiş Çelik',
            weight: 'Kompakt',
            capacity: 'Tek Aşamalı İmha'
        },
        'DATABER-D': {
            motorPower: '11–22 kW x 2',
            rotorLength: '400 x 400 mm',
            rotorDiameter: '2 Parçalayıcı',
            bladeCount: 'Sertleştirilmiş Çelik',
            weight: 'Endüstriyel',
            capacity: 'İki Aşamalı İmha'
        },
        'DATABER-T': {
            motorPower: '11–45 kW x 2',
            rotorLength: '400 x 400 mm',
            rotorDiameter: '3 Parçalayıcı',
            bladeCount: 'Sertleştirilmiş Çelik',
            weight: 'Endüstriyel',
            capacity: 'Üç Aşamalı İmha - Toz Boyutu'
        }
    },
    'tree-root': {
        'TW-100': {
            motorPower: '132–160 kW',
            rotorLength: '500 mm',
            rotorDiameter: 'Ø 1000 mm',
            bladeCount: 'Çok Bıçaklı Rotor',
            weight: 'Orta Ölçekli',
            capacity: 'Orta Kapasite'
        },
        'TW-150': {
            motorPower: '160–220 kW',
            rotorLength: '800 mm',
            rotorDiameter: 'Ø 1500 mm',
            bladeCount: '28-32 adet',
            weight: 'Büyük Ölçekli',
            capacity: 'Yüksek Kapasite'
        },
        'TW-200': {
            motorPower: '220–315 kW',
            rotorLength: '1000 mm',
            rotorDiameter: 'Ø 2000 mm',
            bladeCount: '36-40 adet',
            weight: 'Endüstriyel',
            capacity: '8-15 ton/saat'
        }
    },
    'wood': {
        'TSY-100': {
            motorPower: '55–90 kW (2X)',
            rotorLength: '1000 mm',
            rotorDiameter: 'Yatay Tasarım',
            bladeCount: 'Sertleştirilmiş Çelik Bıçak',
            weight: 'Orta Ölçekli',
            capacity: '3-8 ton/saat'
        },
        'TSY-150': {
            motorPower: '75–110 kW (2X)',
            rotorLength: '1500 mm',
            rotorDiameter: 'Yatay Tasarım',
            bladeCount: 'Hardox Özel Alaşım',
            weight: 'Büyük Ölçekli',
            capacity: '5-12 ton/saat'
        },
        'TSY-200': {
            motorPower: '90–200 kW (2X)',
            rotorLength: '2000 mm',
            rotorDiameter: 'Yatay Tasarım',
            bladeCount: 'Hardox 500',
            weight: 'Endüstriyel',
            capacity: '8-15 ton/saat'
        }
    },
    'glass': {
        'CK-200': {
            motorPower: '1.5-3 kW',
            rotorLength: '200 mm',
            rotorDiameter: '200 x 200 mm',
            bladeCount: '12 adet',
            weight: '400 kg',
            capacity: '100-200 kg/saat'
        },
        'CK-400': {
            motorPower: '3-7.5 kW',
            rotorLength: '400 mm',
            rotorDiameter: '400 x 400 mm',
            bladeCount: '24 adet',
            weight: '600 kg',
            capacity: '200-400 kg/saat'
        },
        'CKS-400': {
            motorPower: '3-7.5 kW',
            rotorLength: '400 mm',
            rotorDiameter: '400 x 400 mm',
            bladeCount: '24 adet',
            weight: '650 kg',
            capacity: '200-400 kg/saat'
        },
        'GB-300': {
            motorPower: '3-4 kW',
            rotorLength: '300 mm',
            rotorDiameter: '300 x 300 mm',
            bladeCount: '16 adet',
            weight: '450 kg',
            capacity: '250-450 kg/saat'
        }
    },
    'mobile': {
        'TSM-150': {
            motorPower: '400 HP',
            rotorLength: '1500 mm',
            rotorDiameter: 'Tek Şaftlı',
            bladeCount: 'Sertleştirilmiş Çelik',
            weight: 'Mobil Şase',
            capacity: '1500 x 1800 mm'
        },
        'TSM-300': {
            motorPower: '600 HP',
            rotorLength: '3000 mm',
            rotorDiameter: 'Tek Şaftlı',
            bladeCount: 'Sertleştirilmiş Çelik',
            weight: 'Mobil Şase',
            capacity: '3000 x 2000 mm'
        },
        'CSM-150': {
            motorPower: '400 HP',
            rotorLength: '1500 mm',
            rotorDiameter: 'Çift Şaftlı',
            bladeCount: 'Sertleştirilmiş Çelik',
            weight: 'Mobil Şase',
            capacity: '1500 x 1200 mm'
        },
        'CSM-200': {
            motorPower: '800 HP',
            rotorLength: '2000 mm',
            rotorDiameter: 'Çift Şaftlı',
            bladeCount: 'Sertleştirilmiş Çelik',
            weight: 'Mobil Şase',
            capacity: '2000 x 1800 mm'
        }
    },
};

// Available models for each product type
export const availableModels: { [key: string]: string[] } = {
    'single-shaft': ['TSH-60', 'TSH-80', 'TSH-100', 'TSH-130', 'TSH-160', 'TSH-200'],
    'dual-shaft': ['CS-20', 'CS-40', 'CS-60', 'CS-80', 'CS-100', 'CS-120', 'CS-150', 'CS-180', 'CS-200'],
    'quad-shaft': ['DS-80', 'DS-100', 'DS-150', 'DS-200'],
    'metal': ['RDM-100', 'RDM-150', 'RDM-180', 'RDM-200'],
    'harddisk': ['DATABER-S', 'DATABER-D', 'DATABER-T'],
    'mobile': ['TSM-150', 'TSM-300', 'CSM-150', 'CSM-200'],
    'pallet': ['TSV-140', 'TSV-200', 'TSVX-200'],
    'tree-root': ['TW-100', 'TW-150', 'TW-200'],
    'wood': ['TSY-100', 'TSY-150', 'TSY-200'],
    'glass': ['CK-200', 'CK-400', 'CKS-400', 'GB-300']
};

// Title/Subtitle mapping for each product type
export const productTitleKeys: { [key: string]: { title: string; subtitle: string } } = {
    'single-shaft': { title: 'single_shaft_main_title', subtitle: 'single_shaft_subtitle' },
    'dual-shaft': { title: 'dual_shaft_main_title', subtitle: 'dual_shaft_subtitle' },
    'quad-shaft': { title: 'quad_shaft_main_title', subtitle: 'quad_shaft_subtitle' },
    'metal': { title: 'metal_main_title', subtitle: 'metal_subtitle' },
    'harddisk': { title: 'harddisk_main_title', subtitle: 'harddisk_subtitle' },
    'mobile': { title: 'mobile_main_title', subtitle: 'mobile_subtitle' },
    'pallet': { title: 'pallet_main_title', subtitle: 'pallet_subtitle' },
    'tree-root': { title: 'tree_root_main_title', subtitle: 'tree_root_subtitle' },
    'wood': { title: 'wood_main_title', subtitle: 'wood_subtitle' },
    'glass': { title: 'glass_main_title', subtitle: 'glass_subtitle' }
};

// Description keys mapping for each product type
export const productDescriptionKeys: { [key: string]: string } = {
    'single-shaft': 'single_shaft',
    'dual-shaft': 'dual_shaft',
    'quad-shaft': 'quad_shaft',
    'metal': 'metal',
    'harddisk': 'harddisk',
    'mobile': 'mobile',
    'pallet': 'pallet',
    'tree-root': 'tree_root',
    'wood': 'wood',
    'glass': 'glass'
};

// Helper function to translate Turkish spec values based on current language
export const specValueTranslations: { [key: string]: { en: string; ru: string; ar: string } } = {
    // Blade/Material types
    'Sertleştirilmiş Çelik': { en: 'Hardened Steel', ru: 'Закаленная сталь', ar: 'فولاذ مقوى' },
    'Sertleştirilmiş Çelik Bıçak': { en: 'Hardened Steel Blade', ru: 'Закаленный стальной нож', ar: 'شفرة فولاذية مقواة' },
    'Hardox Özel Alaşım': { en: 'Hardox Special Alloy', ru: 'Специальный сплав Hardox', ar: 'سبيكة هاردوكس الخاصة' },
    'Çok Bıçaklı Rotor': { en: 'Multi-Blade Rotor', ru: 'Многолезвийный ротор', ar: 'دوار متعدد الشفرات' },

    // Shaft types
    'Tek Şaftlı': { en: 'Single Shaft', ru: 'Одновальный', ar: 'عمود واحد' },
    'Çift Şaftlı': { en: 'Dual Shaft', ru: 'Двухвальный', ar: 'عمود مزدوج' },

    // Weight/Size descriptions
    'Mobil Şase': { en: 'Mobile Chassis', ru: 'Мобильное шасси', ar: 'هيكل متنقل' },
    'Kompakt': { en: 'Compact', ru: 'Компактный', ar: 'مضغوط' },
    'Endüstriyel': { en: 'Industrial', ru: 'Промышленный', ar: 'صناعي' },
    'Orta Ölçekli': { en: 'Medium Scale', ru: 'Среднего масштаба', ar: 'متوسط الحجم' },
    'Büyük Ölçekli': { en: 'Large Scale', ru: 'Крупномасштабный', ar: 'واسع النطاق' },

    // Design types
    'Yatay Tasarım': { en: 'Horizontal Design', ru: 'Горизонтальная конструкция', ar: 'تصميم أفقي' },
    'Tekli Parçalayıcı': { en: 'Single Shredder', ru: 'Одинарный измельчитель', ar: 'تقطيع فردي' },
    '2 Parçalayıcı': { en: '2 Shredders', ru: '2 измельчителя', ar: 'وحدتين تقطيع' },
    '3 Parçalayıcı': { en: '3 Shredders', ru: '3 измельчителя', ar: '3 وحدات تقطيع' },

    // Capacity descriptions
    'Orta Kapasite': { en: 'Medium Capacity', ru: 'Средняя мощность', ar: 'سعة متوسطة' },
    'Yüksek Kapasite': { en: 'High Capacity', ru: 'Высокая мощность', ar: 'سعة عالية' },
    'Tek Aşamalı İmha': { en: 'Single Stage Destruction', ru: 'Одноступенчатое уничтожение', ar: 'تدمير مرحلة واحدة' },
    'İki Aşamalı İmha': { en: 'Two Stage Destruction', ru: 'Двухступенчатое уничтожение', ar: 'تدمير مرحلتين' },
    'Üç Aşamalı İmha - Toz Boyutu': { en: 'Three Stage Destruction - Dust Size', ru: 'Трехступенчатое уничтожение - Размер пыли', ar: 'تدمير ثلاث مراحل - حجم الغبار' }
};

export const translateSpecValue = (value: string | undefined, language: string): string => {
    // Handle undefined values
    if (!value) return '';

    // If Turkish or value not in translation map, return original
    if (language === 'tr' || !specValueTranslations[value]) {
        return value;
    }

    const translations = specValueTranslations[value];
    return translations[language as keyof typeof translations] || value;
};

export const getTranslationKeyPrefix = (type: string) => {
    if (type === 'mobile') return 'mobile_crusher';
    if (type === 'single-shaft') return 'single_shaft';
    if (type === 'dual-shaft') return 'dual_shaft';
    if (type === 'quad-shaft') return 'quad_shaft';
    return type.replace(/-/g, '_');
};

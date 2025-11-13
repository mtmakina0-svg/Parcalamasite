/**
 * SEO Configuration - URL Routing and Meta Tags
 * Comprehensive SEO system for MT Makina website
 * Multi-language SEO with language prefix support
 */

export interface SEOMetadata {
  title: string;
  description: string;
  keywords: string[];
  ogTitle?: string;
  ogDescription?: string;
  canonical: string;
}

export type Language = 'tr' | 'en' | 'ru' | 'ar';

// Multi-language URL slugs for each page type
const slugsByLanguage = {
  home: { tr: '', en: '', ru: '', ar: '' },
  about: { tr: 'kurumsal', en: 'about', ru: 'o-kompanii', ar: 'about' },
  products: { tr: 'urunler', en: 'products', ru: 'produkty', ar: 'products' },
  technology: { tr: 'teknoloji', en: 'technology', ru: 'tekhnologiya', ar: 'technology' },
  references: { tr: 'referanslar', en: 'references', ru: 'referencii', ar: 'references' },
  certificates: { tr: 'sertifikalar', en: 'certificates', ru: 'sertifikaty', ar: 'certificates' },
  waste: { tr: 'atik-turleri', en: 'waste-types', ru: 'tipy-otkhodov', ar: 'waste-types' },
  contact: { tr: 'iletisim', en: 'contact', ru: 'kontakty', ar: 'contact' },
  ecatalog: { tr: 'e-katalog', en: 'e-catalog', ru: 'e-katalog', ar: 'e-catalog' }
};

// Product category slugs by language
const productCategorySlugs = {
  'single-saft': {
    tr: 'tek-saftli-parcalama-makinesi',
    en: 'single-shaft-shredder',
    ru: 'odnovalnaya-drobilka',
    ar: 'single-shaft-shredder'
  },
  'dual-saft': {
    tr: 'cift-saftli-parcalama-makinesi',
    en: 'dual-shaft-shredder',
    ru: 'dvukhvalnaya-drobilka',
    ar: 'dual-shaft-shredder'
  },
  'quad-saft': {
    tr: 'dort-saftli-parcalama-makinesi',
    en: 'quad-shaft-shredder',
    ru: 'chetyrekhvalnaya-drobilka',
    ar: 'quad-shaft-shredder'
  },
  'metal': {
    tr: 'metal-parcalama-makinesi',
    en: 'metal-shredder',
    ru: 'drobilka-metalla',
    ar: 'metal-shredder'
  },
  'mobile': {
    tr: 'mobil-kirici',
    en: 'mobile-shredder',
    ru: 'mobilnaya-drobilka',
    ar: 'mobile-shredder'
  },
  'pallet': {
    tr: 'palet-parcalama-makinesi',
    en: 'pallet-shredder',
    ru: 'drobilka-poddonov',
    ar: 'pallet-shredder'
  },
  'harddisk': {
    tr: 'harddisk-imha-makinesi',
    en: 'harddisk-destroyer',
    ru: 'unichtozhitel-zhestkikh-diskov',
    ar: 'harddisk-destroyer'
  },
  'tree-root': {
    tr: 'agac-koku-parcalama-makinesi',
    en: 'tree-root-shredder',
    ru: 'drobilka-kornej-derevev',
    ar: 'tree-root-shredder'
  },
  'wood': {
    tr: 'agac-parcalama-ogutme-makinesi',
    en: 'wood-grinder',
    ru: 'drobilka-drevesiny',
    ar: 'wood-grinder'
  },
  'glass': {
    tr: 'cam-sise-kirma-makinesi',
    en: 'glass-crusher',
    ru: 'drobilka-stekla',
    ar: 'glass-crusher'
  },
  'granulator': {
    tr: 'granulator-makinesi',
    en: 'granulator-machine',
    ru: 'granulyator',
    ar: 'granulator-machine'
  },
  'baler': {
    tr: 'balyalama-makinesi',
    en: 'baling-press',
    ru: 'press-dlya-balirovaniya',
    ar: 'baling-press'
  },
  'conveyor': {
    tr: 'konveyor-sistemi',
    en: 'conveyor-system',
    ru: 'konvejernaya-sistema',
    ar: 'conveyor-system'
  },
  'separator': {
    tr: 'ayristirma-makinesi',
    en: 'separator-machine',
    ru: 'separator',
    ar: 'separator-machine'
  }
};

// URL Path Generator with Multi-language Support
export const generateUrl = {
  home: (lang: Language = 'tr') => `/${lang}`,
  about: (lang: Language = 'tr') => `/${lang}/${slugsByLanguage.about[lang]}`,
  products: (lang: Language = 'tr') => `/${lang}/${slugsByLanguage.products[lang]}`,
  productCategory: (type: string, lang: Language = 'tr') => {
    const slug = productCategorySlugs[type as keyof typeof productCategorySlugs]?.[lang] || `${slugsByLanguage.products[lang]}/${type}`;
    console.log('🔗 generateUrl.productCategory:', { type, lang, slug, fullUrl: `/${lang}/${slug}` });
    return `/${lang}/${slug}`;
  },
  productDetail: (type: string, model: string, lang: Language = 'tr') => {
    const categorySlug = productCategorySlugs[type as keyof typeof productCategorySlugs]?.[lang] || `${slugsByLanguage.products[lang]}/${type}`;
    return `/${lang}/${categorySlug}/${model.toLowerCase()}`;
  },
  technology: (lang: Language = 'tr') => `/${lang}/${slugsByLanguage.technology[lang]}`,
  references: (lang: Language = 'tr') => `/${lang}/${slugsByLanguage.references[lang]}`,
  certificates: (lang: Language = 'tr') => `/${lang}/${slugsByLanguage.certificates[lang]}`,
  waste: (category: string | undefined, lang: Language = 'tr') => 
    category ? `/${lang}/${slugsByLanguage.waste[lang]}/${category}` : `/${lang}/${slugsByLanguage.waste[lang]}`,
  contact: (lang: Language = 'tr') => `/${lang}/${slugsByLanguage.contact[lang]}`,
  ecatalog: (lang: Language = 'tr') => `/${lang}/${slugsByLanguage.ecatalog[lang]}`
};

// SEO Metadata for each page (Turkish only - for now, can be extended with translations)
export const seoMetadata: { [key: string]: SEOMetadata | ((params?: any) => SEOMetadata) } = {
  home: {
    title: 'Parçalama Makinesi | Shredder Machine | MT Makina - Türkiye\'nin 1 Numaralı Üreticisi',
    description: 'Parçalama makinesi, shredder machine, plastik kırma makinesi, metal parçalama, ahşap kırıcı - MT Makina endüstriyel parçalama sistemleri. Tek şaftlı, çift şaftlı TSH serisi. ✓ CE Belgeli ✓ Garanti ✓ Servis',
    keywords: ['parçalama makinesi', 'shredder machine', 'shredder', 'plastik kırma makinesi', 'metal parçalama makinesi', 'ahşap kırma makinesi', 'tek şaftlı parçalama', 'çift şaftlı parçalama', 'TSH parçalama', 'endüstriyel shredder', 'geri dönüşüm makinesi', 'atık kırma makinesi', 'hurda parçalama', 'MT Makina', 'parçalama makinesi fiyatları', 'shredder fiyatları'],
    canonical: 'https://www.parcalamamakinesi.com/tr'
  },
  
  about: {
    title: 'Kurumsal - MT Makina Hakkında | 20+ Yıllık Deneyim',
    description: 'MT Makina olarak 20 yılı aşkın süredir endüstriyel parçalama sistemleri üretiyoruz. Türkiye ve dünya pazarında güvenilir çözüm ortağınız.',
    keywords: ['MT Makina', 'parçalama makinesi üreticisi', 'endüstriyel makine üretimi', 'Türkiye makine sanayi', 'geri dönüşüm ekipmanları'],
    canonical: 'https://www.parcalamamakinesi.com/tr/kurumsal'
  },
  
  products: {
    title: 'Ürünlerimiz - MT Makina Parçalama Makineleri Kataloğu',
    description: 'MT Makina\'nın geniş ürün yelpazesi: Tek şaftlı, çift şaftlı, dörtlü şaft parçalama makineleri, granülatörler, balyalama sistemleri ve daha fazlası.',
    keywords: ['parçalama makinesi modelleri', 'shredder çeşitleri', 'endüstriyel makine kataloğu', 'geri dönüşüm ekipmanları'],
    canonical: 'https://www.parcalamamakinesi.com/tr/urunler'
  },
  
  technology: {
    title: 'Teknoloji - MT Makina İleri Üretim Teknolojileri',
    description: 'MT Makina\'da kullanılan ileri üretim teknolojileri, otomasyon sistemleri, kalite kontrol süreçleri ve Ar-Ge çalışmaları hakkında bilgi edinin.',
    keywords: ['parçalama teknolojisi', 'ileri üretim', 'makine otomasyonu', 'kalite kontrol', 'Ar-Ge'],
    canonical: 'https://www.parcalamamakinesi.com/tr/teknoloji'
  },
  
  references: {
    title: 'Referanslar - MT Makina Müşteri Projeleri ve Başarı Hikayeleri',
    description: 'Türkiye ve dünya genelinde MT Makina parçalama sistemlerini kullanan firmalar, başarılı projeler ve müşteri referansları.',
    keywords: ['MT Makina referanslar', 'müşteri projeleri', 'başarı hikayeleri', 'parçalama makinesi kullanıcıları'],
    canonical: 'https://www.parcalamamakinesi.com/tr/referanslar'
  },
  
  certificates: {
    title: 'Sertifikalar ve Belgeler - MT Makina Kalite Standartları',
    description: 'MT Makina\'nın sahip olduğu ISO sertifikaları, CE belgeleri ve uluslararası kalite standartları.',
    keywords: ['ISO sertifikası', 'CE belgesi', 'kalite belgeleri', 'makine standartları'],
    canonical: 'https://www.parcalamamakinesi.com/tr/sertifikalar'
  },
  
  contact: {
    title: 'İletişim - MT Makina ile İletişime Geçin | Teklif Alın',
    description: 'MT Makina ile iletişime geçin, parçalama makineleri hakkında detaylı bilgi alın ve projeniz için özel teklif isteyin.',
    keywords: ['MT Makina iletişim', 'parçalama makinesi teklif', 'makine fiyat teklifi', 'satış iletişim'],
    canonical: 'https://www.parcalamamakinesi.com/tr/iletisim'
  },
  
  ecatalog: {
    title: 'E-Katalog - MT Makina Ürün Kataloğu PDF İndir',
    description: 'MT Makina ürün kataloğunu PDF olarak indirin. Tüm parçalama makinesi modelleri, teknik özellikler ve fiyat bilgileri.',
    keywords: ['katalog pdf', 'ürün kataloğu', 'parçalama makinesi katalog', 'MT Makina katalog'],
    canonical: 'https://www.parcalamamakinesi.com/tr/e-katalog'
  }
};

// Product Category SEO Metadata (Dynamic)
export const getProductCategorySEO = (type: string, lang: Language = 'tr'): SEOMetadata => {
  const categoryData: { [key: string]: Omit<SEOMetadata, 'canonical'> } = {
    'single-saft': {
      title: 'Tek Şaftlı Parçalama Makinesi | Single Shaft Shredder | MT Makina TSH Serisi',
      description: 'Tek şaftlı parçalama makinesi, single shaft shredder - MT Makina TSH Serisi 500-6000 kg/saat. Plastik kırma, ahşap parçalama, kağıt shredder. ✓ 6 Model ✓ CE Belgeli ✓ Hızlı Teslimat ✓ Garanti',
      keywords: ['tek şaftlı parçalama makinesi', 'single shaft shredder', 'TSH serisi', 'plastik kırma makinesi', 'ahşap parçalama makinesi', 'kağıt parçalama', 'plastik shredder', 'ahşap kırıcı', 'tek şaft shredder', 'endüstriyel parçalama'],
    },
    'dual-saft': {
      title: 'Çift Şaftlı Parçalama Makinesi | Dual Shaft Shredder | MT Makina CS Serisi',
      description: 'Çift şaftlı parçalama makinesi, dual shaft shredder - MT Makina CS Serisi. Metal parçalama, palet kırıcı, lastik shredder. ✓ Ağır Hizmet Tipi ✓ Çift Motor ✓ Yüksek Tork ✓ CE Belgeli',
      keywords: ['çift şaftlı parçalama makinesi', 'dual shaft shredder', 'CS serisi', 'metal parçalama makinesi', 'palet kırıcı', 'lastik parçalama', 'çift şaft shredder', 'ağır hizmet parçalama', 'endüstriyel atık kırıcı'],
    },
    'quad-saft': {
      title: 'Dört Şaftlı Katı Atık Parçalama Makinesi | Quad Shaft Shredder | MT Makina DS Serisi',
      description: 'Dört şaftlı katı atık parçalama makinesi - MT Makina DS Serisi. Plastik, metal, ahşap, kağıt, elektronik atık işleme. ✓ Hidrolik Baskı ✓ Hacimli Malzemeler ✓ Yüksek Verimlilik ✓ CE Belgeli',
      keywords: ['dört şaftlı parçalama makinesi', 'quad shaft shredder', 'DS serisi', 'katı atık parçalayıcı', 'elektronik atık parçalama', 'tıbbi atık parçalama', 'balya parçalama makinesi', 'lastik parçalama', 'hdd parçalama', 'parçalayıcı makine'],
    },
    'metal': {
      title: 'Redmonster Hurda Metal Parçalama Makinesi | MT Makina RDM Serisi',
      description: 'Redmonster hurda metal parçalama makinesi - MT Makina RDM Serisi. Hurda demir, alüminyum, paslanmaz çelik, metal balyaları parçalama. ✓ Yüksek Tork ✓ Dayanıklı Bıçak ✓ Enerji Verimli ✓ CE Belgeli',
      keywords: ['hurda metal parçalama makinesi', 'redmonster', 'RDM serisi', 'metal kırıcı', 'metal shredder', 'hurda demir parçalama', 'alüminyum kırıcı', 'paslanmaz çelik parçalama', 'metal balyası kırıcı', 'çift şaftlı metal parçalama'],
    },
    'mobile': {
      title: 'Mobil Kırıcı | MT Makina Taşınabilir Parçalama Sistemi',
      description: 'MT Makina mobil kırıcı sistemleri, şantiye ve sahada çalışma için tasarlanmış taşınabilir parçalama çözümü. Esnek kullanım, güçlü performans.',
      keywords: ['mobil kırıcı', 'taşınabilir parçalama', 'şantiye kırıcı', 'mobil shredder', 'portatif parçalama'],
    },
    'pallet': {
      title: 'Palet Parçalama Makinesi | Ahşap Palet Geri Dönüşümü | MT Makina TSV Serisi',
      description: 'Palet parçalama makinesi - MT Makina TSV Serisi. Ahşap palet geri dönüşümü, plastik palet kırma, hurda palet işleme. ✓ Tek Şaftlı Sistem ✓ Yüksek Tork ✓ Çivili Palet İşleme ✓ Mıknatıs Seperatör',
      keywords: ['palet parçalama makinesi', 'pallet shredder', 'TSV serisi', 'ahşap palet geri dönüşümü', 'plastik palet parçalama', 'palet kırma makinası', 'hurda palet', 'çivili palet parçalama'],
    },
    'harddisk': {
      title: 'Harddisk İmha Makinesi | MT Makina Veri Güvenliği Çözümü',
      description: 'MT Makina harddisk imha makineleri, veri güvenliği için fiziksel olarak harddiskleri tamamen yok eder. Kurumsal güvenlik çözümü.',
      keywords: ['harddisk imha', 'veri güvenliği', 'harddisk kırıcı', 'data destroyer', 'güvenli veri silme'],
    },
    'tree-root': {
      title: 'Ağaç Kökü Parçalama Makinesi | MT Makina Köksök Kırıcı',
      description: 'MT Makina ağaç kökü parçalama makineleri, sert ve kalın ağaç köklerini güçlü bıçak sistemi ile etkili şekilde parçalar.',
      keywords: ['ağaç kökü kırıcı', 'köksök parçalama', 'kök kırma makinesi', 'tree root shredder', 'ağaç kökü geri dönüşüm'],
    },
    'wood': {
      title: 'Ağaç Parçalama Öğütme Makinesi | MT Makina Ahşap Kırıcı',
      description: 'MT Makina ağaç parçalama ve öğütme makineleri, ahşap atıkları ince boyutlara parçalar. Yüksek verimli, dayanıklı sistem.',
      keywords: ['ağaç öğütme', 'ahşap kırma', 'wood grinder', 'ağaç parçalama', 'ahşap geri dönüşüm'],
    },
    'glass': {
      title: 'Cam Şişe Kırma Makinesi | MT Makina Cam Atık Kırıcı',
      description: 'MT Makina cam şişe kırma makineleri, cam atıkları güvenli ve etkili şekilde parçalar. Geri dönüşüm için ideal çözüm.',
      keywords: ['cam kırıcı', 'şişe kırma makinesi', 'glass crusher', 'cam geri dönüşüm', 'cam atık parçalama'],
    }
  };

  const data = categoryData[type] || {
    title: `${type} - MT Makina Parçalama Makineleri`,
    description: `MT Makina ${type} serisi parçalama makineleri hakkında detaylı bilgi.`,
    keywords: [type, 'parçalama makinesi', 'MT Makina'],
  };

  return {
    ...data,
    canonical: `https://www.parcalamamakinesi.com${generateUrl.productCategory(type, lang)}`
  };
};

// Product Model SEO Metadata (Dynamic)
export const getProductModelSEO = (type: string, model: string, lang: Language = 'tr'): SEOMetadata => {
  // Model specific details
  const modelDetails: { [key: string]: { [model: string]: Omit<SEOMetadata, 'canonical'> } } = {
    'single-saft': {
      'TSH-60': {
        title: 'TSH-60 Parçalama Makinesi | 15-30 kW | 500-800 kg/saat | Fiyat Teklifi',
        description: 'TSH-60 tek şaftlı parçalama makinesi - 15-30 kW motor, 600x1100mm parçalama alanı, 500-800 kg/saat. Plastik, ahşap, kağıt için. ✓ Stokta ✓ Hızlı Teslimat ✓ Fiyat Teklifi Al',
        keywords: ['TSH-60', 'parçalama makinesi fiyat', 'plastik kırma makinesi', 'ahşap kırıcı', '600mm shredder', 'küçük parçalama makinesi', 'tek şaftlı shredder'],
      },
      'TSH-80': {
        title: 'TSH-80 Parçalama Makinesi | 22-45 kW | 800-1200 kg/saat | En İyi Fiyat',
        description: 'TSH-80 tek şaftlı parçalama makinesi - 22-45 kW motor, 800x1100mm parçalama alanı, 800-1200 kg/saat. Orta ölçekli üretim için. ✓ CE Belgeli ✓ 2 Yıl Garanti ✓ Teklif Al',
        keywords: ['TSH-80', 'parçalama makinesi fiyat', 'orta kapasite shredder', '800mm parçalama', '1000 kg saat', 'endüstriyel kırıcı'],
      },
      'TSH-100': {
        title: 'TSH-100 Parçalama Makinesi | 30-75 kW | 1200-1800 kg/saat | Profesyonel',
        description: 'TSH-100 tek şaftlı parçalama makinesi - 30-75 kW motor, 1000x1300mm parçalama alanı, 1200-1800 kg/saat. Yüksek verimli sürekli üretim. ✓ Güçlü Motor ✓ Dayanıklı',
        keywords: ['TSH-100', 'yüksek kapasite shredder', '1000mm parçalama', '1500 kg saat', 'sürekli üretim', 'profesyonel shredder'],
      },
      'TSH-130': {
        title: 'TSH-130 Parçalama Makinesi | 45-110 kW | 1800-2500 kg/saat | Ağır Hizmet',
        description: 'TSH-130 tek şaftlı parçalama makinesi - 45-110 kW motor, 1300x1600mm parçalama alanı, 1800-2500 kg/saat. Ağır hizmet tipi. ✓ Yüksek Tork ✓ Dayanıklı Yapı ✓ Fiyat Al',
        keywords: ['TSH-130', 'ağır hizmet shredder', '1300mm parçalama', '2000 kg saat', 'büyük parçalama makinesi', 'endüstriyel kırıcı'],
      },
      'TSH-160': {
        title: 'TSH-160 Parçalama Makinesi | 55-132 kW (2x) | 3500-4500 kg/saat | Çift Motor',
        description: 'TSH-160 tek şaftlı parçalama makinesi - Çift motor 55-132 kW, 1600x1800mm parçalama alanı, 3500-4500 kg/saat. Ekstra yüksek kapasite. ✓ Çift Motor ✓ Güçlü Sistem',
        keywords: ['TSH-160', 'çift motorlu shredder', '1600mm parçalama', '4000 kg saat', 'ekstra kapasite', 'endüstriyel sınıf'],
      },
      'TSH-200': {
        title: 'TSH-200 Parçalama Makinesi | 75-160 kW (2x) | 4500-6000 kg/saat | Maksimum',
        description: 'TSH-200 tek şaftlı parçalama makinesi - Çift motor 75-160 kW, 2000x2300mm parçalama alanı, 4500-6000 kg/saat. En yüksek kapasite. ✓ Maksimum Performans ✓ Profesyonel',
        keywords: ['TSH-200', 'maksimum kapasite shredder', '2000mm parçalama', '5000 kg saat', 'profesyonel shredder', 'yüksek performans'],
      }
    },
    'dual-saft': {
      'CS-20': {
        title: 'CS-20 Çift Şaftlı Parçalama Makinesi | Kompakt Model | MT Makina',
        description: 'MT Makina CS-20 model çift şaftlı parçalama makinesi. Kompakt tasarım, güçlü çift motor sistemi. Sert plastik, ahşap palet, karton parçalama için ideal.',
        keywords: ['CS-20', 'kompakt çift şaft', 'küçük çift şaftlı', 'palet kırıcı', 'sert plastik'],
      },
      'CS-40': {
        title: 'CS-40 Çift Şaftlı Parçalama Makinesi | Orta Kapasite | MT Makina',
        description: 'MT Makina CS-40 model çift şaftlı parçalama makinesi. Orta ölçekli işletmeler için uygun, çift motorlu hassas kesim sistemi.',
        keywords: ['CS-40', 'orta çift şaft', 'orta kapasite dual', 'hassas kesim'],
      },
      'CS-60': {
        title: 'CS-60 Çift Şaftlı Parçalama Makinesi | Yüksek Performans | MT Makina',
        description: 'MT Makina CS-60 model çift şaftlı parçalama makinesi. Yüksek tork, düşük devir, ağır yük altında sürekli çalışma kapasiteli endüstriyel sistem.',
        keywords: ['CS-60', 'çift şaftlı 60', 'yüksek tork', 'ağır hizmet dual shaft'],
      },
      'CS-80': {
        title: 'CS-80 Çift Şaftlı Parçalama Makinesi | Endüstriyel Sınıf | MT Makina',
        description: 'MT Makina CS-80 model çift şaftlı parçalama makinesi. Endüstriyel atık, palet, kablo, lastik parçalama için güçlü çözüm.',
        keywords: ['CS-80', 'çift şaftlı 80', 'endüstriyel parçalama', 'kablo kırıcı', 'lastik shredder'],
      },
      'CS-100': {
        title: 'CS-100 Çift Şaftlı Parçalama Makinesi | Büyük Kapasite | MT Makina',
        description: 'MT Makina CS-100 model çift şaftlı parçalama makinesi. Büyük hacimli malzemeler için ideal, çift motor sistemi ile maksimum güç.',
        keywords: ['CS-100', 'çift şaftlı 100', 'büyük kapasite', 'yüksek hacim'],
      },
      'CS-120': {
        title: 'CS-120 Çift Şaftlı Parçalama Makinesi | Ağır Sanayi | MT Makina',
        description: 'MT Makina CS-120 model çift şaftlı parçalama makinesi. Ağır sanayi uygulamaları, metal karışık atıklar, otomotiv hurda için profesyonel çözüm.',
        keywords: ['CS-120', 'çift şaftlı 120', 'ağır sanayi', 'otomotiv hurda', 'metal atık'],
      },
      'CS-150': {
        title: 'CS-150 Çift Şaftlı Parçalama Makinesi | Maksimum Güç | MT Makina',
        description: 'MT Makina CS-150 model çift şaftlı parçalama makinesi. Maksimum güç ve kapasite, en zorlu parçalama işleri için tasarlanmış sistem.',
        keywords: ['CS-150', 'çift şaftlı 150', 'maksimum güç', 'zorlu malzeme'],
      },
      'CS-180': {
        title: 'CS-180 Çift Şaftlı Parçalama Makinesi | Ultra Kapasite | MT Makina',
        description: 'MT Makina CS-180 model çift şaftlı parçalama makinesi. Ultra yüksek kapasite, büyük ölçekli geri dönüşüm tesisleri için ideal.',
        keywords: ['CS-180', 'çift şaftlı 180', 'ultra kapasite', 'büyük tesis'],
      },
      'CS-200': {
        title: 'CS-200 Çift Şaftlı Parçalama Makinesi | Sanayi Tipi | MT Makina',
        description: 'MT Makina CS-200 model çift şaftlı parçalama makinesi. En büyük model, sanayi tipi sürekli üretim için tasarlanmış maksimum performans.',
        keywords: ['CS-200', 'çift şaftlı 200', 'sanayi tipi', 'maksimum kapasite', 'sürekli üretim'],
      }
    },
    'quad-saft': {
      'DS-80': {
        title: 'DS-80 Dört Şaftlı Parçalama Makinesi | 800x800 mm | 11-22 kW (4x) | MT Makina',
        description: 'DS-80 dört şaftlı katı atık parçalama makinesi - 800x800 mm parçalama alanı, 11-22 kW (4x) motor. Plastik varil, metal varil, elektronik atık, balya parçalama. ✓ Hidrolik Baskı ✓ Kompakt Çözüm',
        keywords: ['DS-80', 'dört şaftlı 80', 'katı atık parçalayıcı', 'elektronik atık parçalama', 'balya parçalama', 'lastik parçalama', 'hdd parçalama makinesi'],
      },
      'DS-100': {
        title: 'DS-100 Dört Şaftlı Parçalama Makinesi | 1000x1000 mm | 22-45 kW (4x) | MT Makina',
        description: 'DS-100 dört şaftlı katı atık parçalama makinesi - 1000x1000 mm parçalama alanı, 22-45 kW (4x) motor. Palet, ahşap, hurda, kağıt, karton parçalama. ✓ Orta-Büyük Kapasite ✓ Çoklu Malzeme',
        keywords: ['DS-100', 'dört şaftlı 100', 'palet parçalama', 'ahşap parçalama', 'hurda parçalama', 'karton parçalama', 'tıbbi atık parçalama'],
      },
      'DS-150': {
        title: 'DS-150 Dört Şaftlı Parçalama Makinesi | 1500x1500 mm | 45-132 kW (4x) | MT Makina',
        description: 'DS-150 dört şaftlı katı atık parçalama makinesi - 1500x1500 mm parçalama alanı, 45-132 kW (4x) motor. Hacimli atık işleme, buzdolabı, TV, devre kartı parçalama. ✓ Maksimum Kapasite ✓ Profesyonel',
        keywords: ['DS-150', 'dört şaftlı 150', 'hacimli atık parçalama', 'buzdolabı parçalama', 'hayvan parçalama', 'hurda lastik parçalama', 'harddisk imha'],
      },
      'DS-200': {
        title: 'DS-200 Dört Şaftlı Parçalama Makinesi | 2000x2000 mm | 75-160 kW (4x) | MT Makina',
        description: 'DS-200 dört şaftlı katı atık parçalama makinesi - 2000x2000 mm dev parçalama alanı, 75-160 kW (4x) motor. Endüstriyel mega ölçekli projeler. ✓ En Güçlü Model ✓ 7/24 Kesintisiz Çalışma',
        keywords: ['DS-200', 'dört şaftlı 200', 'mega ölçekli parçalama', 'endüstriyel atık yönetimi', 'sürdürülebilir geri dönüşüm', 'parçalayıcı makine', 'katı atık parçalayıcı'],
      }
    },
    'metal': {
      'RDM-100': {
        title: 'RDM-100 Redmonster Hurda Metal Parçalama Makinesi | 1000x1000 mm | 45-75 kW | MT Makina',
        description: 'RDM-100 Redmonster hurda metal parçalama makinesi - 1000x1000 mm parçalama alanı, 45-75 kW motor. Hurda demir, alüminyum, paslanmaz çelik parçalama. ✓ Yüksek Tork ✓ Dayanıklı Bıçak',
        keywords: ['RDM-100', 'redmonster 100', 'hurda metal parçalama', 'hurda demir kırıcı', 'alüminyum parçalama', 'metal balyası kırıcı', 'çift şaftlı metal shredder'],
      },
      'RDM-150': {
        title: 'RDM-150 Redmonster Hurda Metal Parçalama Makinesi | 1500x1500 mm | 55-90 kW | MT Makina',
        description: 'RDM-150 Redmonster hurda metal parçalama makinesi - 1500x1500 mm parçalama alanı, 55-90 kW motor. Ağır metal hurdalar, paslanmaz çelik, alüminyum profil. ✓ Orta-Büyük Kapasite',
        keywords: ['RDM-150', 'redmonster 150', 'ağır metal kırıcı', 'paslanmaz çelik parçalama', 'alüminyum profil kırıcı', 'metal geri dönüşüm makinesi'],
      },
      'RDM-180': {
        title: 'RDM-180 Redmonster Hurda Metal Parçalama Makinesi | 1800x1500 mm | 75-90 kW | MT Makina',
        description: 'RDM-180 Redmonster hurda metal parçalama makinesi - 1800x1500 mm parçalama alanı, 75-90 kW motor. Büyük metal parçalar, otomotiv hurda, beyaz eşya. ✓ Yüksek Kapasite',
        keywords: ['RDM-180', 'redmonster 180', 'otomotiv hurda parçalama', 'beyaz eşya kırıcı', 'büyük metal parçalama', 'endüstriyel metal shredder'],
      },
      'RDM-200': {
        title: 'RDM-200 Redmonster Hurda Metal Parçalama Makinesi | 2000x1800 mm | 90-132 kW | MT Makina',
        description: 'RDM-200 Redmonster hurda metal parçalama makinesi - 2000x1800 mm dev parçalama alanı, 90-132 kW motor. En büyük model, hurdalık ve metal geri dönüşüm tesisleri için. ✓ Maksimum Güç',
        keywords: ['RDM-200', 'redmonster 200', 'hurdalık metal kırıcı', 'maksimum metal parçalama', 'metal geri dönüşüm tesisi', 'endüstriyel hurda parçalama', 'sürekli üretim metal shredder'],
      }
    },
    'pallet': {
      'TSV-140': {
        title: 'TSV-140 Palet Parçalama Makinesi | 1400x400 mm | 30 kW | Ahşap Palet Kırma | MT Makina',
        description: 'TSV-140 palet parçalama makinesi - 1400x400 mm parçalama alanı, 30 kW motor. Ahşap palet geri dönüşümü, plastik palet kırma, çivili palet işleme. ✓ Tek Şaftlı ✓ Yüksek Tork ✓ Mıknatıs Seperatör',
        keywords: ['TSV-140', 'palet parçalama makinesi', 'ahşap palet geri dönüşümü', 'plastik palet kırma', 'palet kırma makinası', 'hurda palet', 'çivili palet parçalama', 'palet hurdası'],
      },
      'TSV-200': {
        title: 'TSV-200 Palet Parçalama Makinesi | 2000x400 mm | 55 kW | Yüksek Kapasite | MT Makina',
        description: 'TSV-200 palet parçalama makinesi - 2000x400 mm parçalama alanı, 55 kW güçlü motor. Büyük hacimli ahşap palet geri dönüşümü, endüstriyel palet kırma. ✓ Yüksek Kapasite ✓ PLC Kontrol',
        keywords: ['TSV-200', 'palet parçalama yüksek kapasite', 'ahşap palet kırma', 'plastik palet geri dönüşümü', 'hurda palet geri dönüşümü', 'satılık hurda palet işleme', 'endüstriyel palet kırıcı'],
      },
      'TSVX-200': {
        title: 'TSVX-200 Palet Parçalama Makinesi | 2000x400 mm | 45x2 kW Çift Motor | MT Makina',
        description: 'TSVX-200 çift motorlu palet parçalama makinesi - 2000x400 mm parçalama alanı, 2x45 kW çift motor. Ağır hizmet tipi ahşap palet geri dönüşümü, maksimum güç. ✓ Çift Motor ✓ Yüksek Tork',
        keywords: ['TSVX-200', 'çift motorlu palet parçalama', 'ağır hizmet palet kırma', 'ahşap palet geri dönüşümü', 'plastik palet parçalama', 'hurda palet işleme', 'maksimum güç palet kırıcı'],
      }
    },
    'mobile': {
      'TSM-150': {
        title: 'TSM-150 Mobil Kırıcı | Tek Şaftlı Taşınabilir Parçalama | 400 HP | MT Makina',
        description: 'TSM-150 mobil kırıcı - Tek şaftlı taşınabilir parçalama sistemi, 400 HP motor, 1500x1800 mm parçalama alanı. Şantiye ve sahada kullanım için ideal. ✓ Mobil Şase ✓ Esnek Kullanım',
        keywords: ['TSM-150', 'mobil kırıcı', 'taşınabilir parçalama', 'şantiye kırıcı', 'tek şaftlı mobil', 'portatif shredder', 'mobil shredder'],
      },
      'TSM-300': {
        title: 'TSM-300 Mobil Kırıcı | Yüksek Kapasiteli Taşınabilir Sistem | 600 HP | MT Makina',
        description: 'TSM-300 mobil kırıcı - Yüksek kapasiteli tek şaftlı sistem, 600 HP motor, 3000x2000 mm parçalama alanı. Büyük projeler için güçlü mobil çözüm. ✓ Yüksek Kapasite ✓ Güçlü Motor',
        keywords: ['TSM-300', 'yüksek kapasite mobil', 'büyük mobil k��rıcı', 'taşınabilir shredder', '600 hp mobil', 'saha kırıcısı'],
      },
      'CSM-150': {
        title: 'CSM-150 Mobil Kırıcı | Çift Şaftlı Taşınabilir Parçalama | 400 HP | MT Makina',
        description: 'CSM-150 mobil kırıcı - Çift şaftlı taşınabilir sistem, 400 HP motor, 1500x1200 mm parçalama alanı. Ağır malzemeler için mobil çözüm. ✓ Çift Şaftlı ✓ Yüksek Tork',
        keywords: ['CSM-150', 'çift şaftlı mobil', 'taşınabilir dual shaft', 'mobil çift şaft', 'şantiye parçalama', 'mobil ağır hizmet'],
      },
      'CSM-200': {
        title: 'CSM-200 Mobil Kırıcı | Maksimum Güçlü Çift Şaftlı Sistem | 800 HP | MT Makina',
        description: 'CSM-200 mobil kırıcı - Maksimum güçlü çift şaftlı sistem, 800 HP motor, 2000x1800 mm parçalama alanı. En zorlu malzemeler için mobil çözüm. ✓ 800 HP ✓ Maksimum Güç',
        keywords: ['CSM-200', 'maksimum mobil güç', 'çift şaftlı 800 hp', 'ağır hizmet mobil', 'büyük mobil parçalama', 'endüstriyel mobil kırıcı'],
      }
    },
    'harddisk': {
      'DATABER-S': {
        title: 'DATABER-S Harddisk İmha Makinesi | Tek Aşamalı Veri İmha | 3-11 kW | MT Makina',
        description: 'DATABER-S harddisk imha makinesi - Tek aşamalı fiziksel veri imha sistemi, 3-11 kW motor, 150x150 mm. Güvenli veri silme ve disk imha. ✓ Fiziksel İmha ✓ Veri Güvenliği',
        keywords: ['DATABER-S', 'harddisk imha', 'veri imha makinesi', 'data destroyer', 'disk kırıcı', 'güvenli veri silme', 'hdd imha'],
      },
      'DATABER-D': {
        title: 'DATABER-D Harddisk İmha Makinesi | İki Aşamalı Veri İmha | 11-22 kW x2 | MT Makina',
        description: 'DATABER-D harddisk imha makinesi - İki aşamalı fiziksel veri imha sistemi, 11-22 kW x2 motor, 400x400 mm. Kurumsal veri güvenliği için profesyonel çözüm. ✓ İki Aşamalı ✓ Endüstriyel',
        keywords: ['DATABER-D', 'iki aşamalı imha', 'kurumsal veri imha', 'harddisk destroyer', 'data security', 'disk parçalama', 'güvenli imha'],
      },
      'DATABER-T': {
        title: 'DATABER-T Harddisk İmha Makinesi | Üç Aşamalı Toz Boyutu İmha | 11-45 kW x2 | MT Makina',
        description: 'DATABER-T harddisk imha makinesi - Üç aşamalı toz boyutuna kadar fiziksel veri imha, 11-45 kW x2 motor, 400x400 mm. Maksimum güvenlik için tam imha. ✓ Üç Aşamalı ✓ Toz Boyutu',
        keywords: ['DATABER-T', 'üç aşamalı imha', 'toz boyutu imha', 'maksimum güvenlik imha', 'tam veri yok etme', 'profesyonel data destroyer', 'hdd toz imha'],
      }
    },
    'granulator': {
      'GR-400': {
        title: 'GR-400 Granülatör Makinesi | Plastik Granül | MT Makina',
        description: 'MT Makina GR-400 model granülatör makinesi. Küçük ve orta ölçekli plastik enjeksiyon atıkları, film granülleme için kompakt çözüm.',
        keywords: ['GR-400', 'granülatör 400', 'plastik granül küçük', 'enjeksiyon atığı', 'kompakt granülatör'],
      },
      'GR-600': {
        title: 'GR-600 Granülatör Makinesi | Orta Kapasite | MT Makina',
        description: 'MT Makina GR-600 model granülatör makinesi. Orta kapasite, hızlı granülleme, plastik film, borular ve profiller için ideal.',
        keywords: ['GR-600', 'granülatör 600', 'orta kapasite granül', 'film granülleme', 'boru granülatör'],
      },
      'GR-800': {
        title: 'GR-800 Granülatör Makinesi | Yüksek Performans | MT Makina',
        description: 'MT Makina GR-800 model granülatör makinesi. Yüksek performans, büyük hacimli plastik atık işleme, endüstriyel üretim tesisleri için.',
        keywords: ['GR-800', 'granülatör 800', 'yüksek performans granül', 'endüstriyel granülatör'],
      }
    },
    'baler': {
      'BP-60': {
        title: 'BP-60 Balyalama Makinesi | Kompakt Balya Presi | MT Makina',
        description: 'MT Makina BP-60 model hidrolik balyalama makinesi. Küçük işletmeler için kompakt balya presi. Karton, kağıt, plastik sıkıştırma.',
        keywords: ['BP-60', 'balya presi 60', 'küçük balyalama', 'karton pres', 'kompakt balya'],
      },
      'BP-100': {
        title: 'BP-100 Balyalama Makinesi | Endüstriyel Balya Presi | MT Makina',
        description: 'MT Makina BP-100 model hidrolik balyalama makinesi. Yüksek sıkıştırma gücü, büyük balya boyutları, endüstriyel atık yönetimi.',
        keywords: ['BP-100', 'balya presi 100', 'endüstriyel balyalama', 'yüksek basınç', 'büyük balya'],
      }
    },
    'conveyor': {
      'CV-3M': {
        title: 'CV-3M Konveyör Sistemi | 3 Metre Taşıma Bandı | MT Makina',
        description: 'MT Makina CV-3M model konveyör sistemi. 3 metre uzunluk, modüler yapı, parçalama hatları için kompakt taşıma çözümü.',
        keywords: ['CV-3M', 'konveyör 3 metre', 'kısa bant', 'kompakt konveyör', 'modüler taşıma'],
      },
      'CV-5M': {
        title: 'CV-5M Konveyör Sistemi | 5 Metre Taşıma Bandı | MT Makina',
        description: 'MT Makina CV-5M model konveyör sistemi. 5 metre uzunluk, orta mesafe malzeme taşıma, ayarlanabilir hız kontrolü.',
        keywords: ['CV-5M', 'konveyör 5 metre', 'orta konveyör', 'hız kontrol', 'taşıma bandı'],
      },
      'CV-10M': {
        title: 'CV-10M Konveyör Sistemi | 10 Metre Taşıma Bandı | MT Makina',
        description: 'MT Makina CV-10M model konveyör sistemi. 10 metre uzunluk, uzun mesafe taşıma, büyük tesisler için güçlü sistem.',
        keywords: ['CV-10M', 'konveyör 10 metre', 'uzun bant', 'endüstriyel konveyör', 'büyük tesis'],
      }
    },
    'separator': {
      'MS-1': {
        title: 'MS-1 Malzeme Ayırıcı | Manyetik Seperatör | MT Makina',
        description: 'MT Makina MS-1 model malzeme ayırıcı. Manyetik ayırma teknolojisi, demir ve metal ayrıştırma, kompakt tasarım.',
        keywords: ['MS-1', 'manyetik ayırıcı', 'metal seperatör', 'demir ayırma', 'kompakt ayırıcı'],
      },
      'MS-2': {
        title: 'MS-2 Malzeme Ayırıcı | Hava Seperatörü | MT Makina',
        description: 'MT Makina MS-2 model malzeme ayırıcı. Hava ayırma sistemi, plastik-metal ayrıştırma, yüksek verim, otomatik kontrol.',
        keywords: ['MS-2', 'hava seperatörü', 'plastik ayırma', 'otomatik ayrıştırma', 'yüksek verim'],
      }
    },
    'tree-root': {
      'TW-100': {
        title: 'TW-100 Ağaç Kökü Parçalama Makinesi | Ø 1000 mm | 132-160 kW | MT Makina',
        description: 'TW-100 ağaç kökü parçalama makinesi - Orta ölçekli odunsu atık işleme, Ø 1000 mm parçalama, 500 mm rotor, 132-160 kW motor. ✓ Çok Bıçaklı Rotor ✓ Otomatik Ters Çalışma',
        keywords: ['TW-100', 'ağaç kökü parçalama', 'odun parçalama', 'kök parçalama makinası', 'ağaç atık işleme', 'biyokütle yakıt', 'orman yönetimi'],
      },
      'TW-150': {
        title: 'TW-150 Ağaç Kökü Parçalama Makinesi | Ø 1500 mm | 160-220 kW | MT Makina',
        description: 'TW-150 ağaç kökü parçalama makinesi - Büyük ölçekli ağaç kökü işleme, Ø 1500 mm parçalama, 800 mm rotor, 160-220 kW motor. ✓ PLC Otomasyon ✓ Mobil Tasarım',
        keywords: ['TW-150', 'büyük ağaç kökü parçalama', 'endüstriyel odun parçalama', 'ağır hizmet kök parçalama', 'orman atık yönetimi', 'ahşap geri dönüşüm', 'biyoenerji üretimi'],
      },
      'TW-200': {
        title: 'TW-200 Ağaç Kökü Parçalama Makinesi | Ø 2000 mm | 220-315 kW | MT Makina',
        description: 'TW-200 ağaç kökü parçalama makinesi - Ultra yüksek kapasite, Ø 2000 mm parçalama, 1000 mm rotor, 220-315 kW motor, 8-15 ton/saat. ✓ Endüstri 4.0 ✓ SCADA',
        keywords: ['TW-200', 'endüstriyel ağaç parçalama', 'mega kapasiteli kök parçalama', 'biyokütle santral ekipmanı', 'ağır hizmet odun işleme', 'orman yönetim makinesi', 'ahşap enerji üretimi'],
      }
    }
  };

  const modelData = modelDetails[type]?.[model] || {
    title: `${model} ${type} Parçalama Makinesi | MT Makina`,
    description: `MT Makina ${model} model parçalama makinesi teknik özellikleri, kapasite bilgileri ve fiyat teklifi.`,
    keywords: [model, type, 'parçalama makinesi', 'MT Makina'],
  };

  return {
    ...modelData,
    canonical: `https://www.parcalamamakinesi.com${generateUrl.productDetail(type, model, lang)}`
  };
};

// Update document title and meta tags
export const updateSEOMetadata = (metadata: SEOMetadata) => {
  // Update title
  document.title = metadata.title;

  // Update meta description
  let metaDescription = document.querySelector('meta[name="description"]');
  if (!metaDescription) {
    metaDescription = document.createElement('meta');
    metaDescription.setAttribute('name', 'description');
    document.head.appendChild(metaDescription);
  }
  metaDescription.setAttribute('content', metadata.description);

  // Update meta keywords
  let metaKeywords = document.querySelector('meta[name="keywords"]');
  if (!metaKeywords) {
    metaKeywords = document.createElement('meta');
    metaKeywords.setAttribute('name', 'keywords');
    document.head.appendChild(metaKeywords);
  }
  metaKeywords.setAttribute('content', metadata.keywords.join(', '));

  // Update Open Graph tags
  updateMetaTag('og:title', metadata.ogTitle || metadata.title);
  updateMetaTag('og:description', metadata.ogDescription || metadata.description);
  updateMetaTag('og:url', metadata.canonical);

  // Update canonical URL
  let linkCanonical = document.querySelector('link[rel="canonical"]');
  if (!linkCanonical) {
    linkCanonical = document.createElement('link');
    linkCanonical.setAttribute('rel', 'canonical');
    document.head.appendChild(linkCanonical);
  }
  linkCanonical.setAttribute('href', metadata.canonical);
};

const updateMetaTag = (property: string, content: string) => {
  let meta = document.querySelector(`meta[property="${property}"]`);
  if (!meta) {
    meta = document.createElement('meta');
    meta.setAttribute('property', property);
    document.head.appendChild(meta);
  }
  meta.setAttribute('content', content);
};

// Generate structured data (JSON-LD) for product
export const generateProductStructuredData = (type: string, model: string) => {
  const categorySEO = getProductCategorySEO(type);
  const modelSEO = getProductModelSEO(type, model);
  
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": `${model} ${categorySEO.title.split('|')[0].trim()}`,
    "description": modelSEO.description,
    "brand": {
      "@type": "Brand",
      "name": "MT Makina"
    },
    "manufacturer": {
      "@type": "Organization",
      "name": "MT Makina",
      "url": "https://www.parcalamamakinesi.com/home"
    },
    "url": modelSEO.canonical,
    "category": "Endüstriyel Parçalama Makineleri"
  };
};

// Generate breadcrumb structured data
export const generateBreadcrumbStructuredData = (items: { name: string; url: string }[]) => {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }))
  };
};

// Insert structured data into document
export const insertStructuredData = (data: any) => {
  // Remove existing structured data
  const existing = document.querySelector('script[type="application/ld+json"]');
  if (existing) {
    existing.remove();
  }

  // Insert new structured data
  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.text = JSON.stringify(data);
  document.head.appendChild(script);
};

// Generate Organization structured data for homepage
export const generateOrganizationStructuredData = () => {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "MT Makina",
    "alternateName": "MT Makina Parçalama Makineleri",
    "url": "https://www.parcalamamakinesi.com",
    "logo": "https://i.ibb.co/HLymGDrz/1-Mt-Makina-Logo.png",
    "description": "Türkiye'nin lider parçalama makinesi üreticisi. Tek şaftlı, çift şaftlı, metal parçalama makineleri, shredder sistemleri.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Cumhuriyet Mahallesi, Nazım Hikmet Bulvarı, 1983 Sk. Kent Palas 2 Kat: 7 D: 85 - 86",
      "addressLocality": "Esenyurt",
      "addressRegion": "İstanbul",
      "postalCode": "34512",
      "addressCountry": "TR"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+90-542-310-99-30",
      "contactType": "Sales",
      "availableLanguage": ["tr", "en", "ru", "ar"]
    },
    "sameAs": [
      "https://www.facebook.com/mtmakina",
      "https://www.instagram.com/mtmakina",
      "https://www.linkedin.com/company/mtmakina"
    ]
  };
};

// Generate LocalBusiness structured data
export const generateLocalBusinessStructuredData = () => {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "MT Makina - Parçalama Makineleri",
    "image": "https://i.ibb.co/HLymGDrz/1-Mt-Makina-Logo.png",
    "telephone": "+90-542-310-99-30",
    "email": "info@mtmakina.com.tr",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Cumhuriyet Mahallesi, Nazım Hikmet Bulvarı, 1983 Sk. Kent Palas 2 Kat: 7 D: 85 - 86",
      "addressLocality": "Esenyurt",
      "addressRegion": "İstanbul",
      "postalCode": "34512",
      "addressCountry": "TR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 41.0082,
      "longitude": 28.9784
    },
    "priceRange": "$$",
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "09:00",
      "closes": "18:00"
    }
  };
};
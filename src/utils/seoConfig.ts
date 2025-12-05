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
export const slugsByLanguage = {
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
export const productCategorySlugs = {
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

// Multilingual SEO Data
const multilingualData = {
  home: {
    tr: {
      title: 'Parçalama Makinesi | Shredder Machine | MT Makina - Türkiye\'nin 1 Numaralı Üreticisi',
      description: 'Parçalama makinesi, shredder machine, plastik kırma makinesi, metal parçalama, ahşap kırıcı - MT Makina endüstriyel parçalama sistemleri. Tek şaftlı, çift şaftlı TSH serisi. ✓ CE Belgeli ✓ Garanti ✓ Servis',
      keywords: ['parçalama makinesi', 'shredder machine', 'shredder', 'plastik kırma makinesi', 'metal parçalama makinesi', 'ahşap kırma makinesi', 'tek şaftlı parçalama', 'çift şaftlı parçalama', 'TSH parçalama', 'endüstriyel shredder', 'geri dönüşüm makinesi', 'atık kırma makinesi', 'hurda parçalama', 'MT Makina']
    },
    en: {
      title: 'Shredder Machine | Industrial Shredding Systems | MT Makina - #1 Manufacturer',
      description: 'Industrial shredder machines, plastic shredder, metal shredder, wood crusher - MT Makina shredding systems. Single shaft, dual shaft TSH series. ✓ CE Certified ✓ Warranty ✓ Service',
      keywords: ['shredder machine', 'industrial shredder', 'plastic shredder', 'metal shredder', 'wood crusher', 'single shaft shredder', 'dual shaft shredder', 'recycling machine', 'waste shredder', 'scrap shredder', 'MT Makina']
    },
    ru: {
      title: 'Промышленный Шредер | Дробилка | MT Makina - Производитель №1',
      description: 'Промышленные шредеры, дробилки пластика, металла, дерева - системы измельчения MT Makina. Однохвальные, двухвальные серии TSH. ✓ Сертификат CE ✓ Гарантия ✓ Сервис',
      keywords: ['шредер', 'промышленный шредер', 'дробилка пластика', 'дробилка металла', 'измельчитель дерева', 'одновальный шредер', 'двухвальный шредер', 'оборудование для переработки', 'измельчитель отходов', 'MT Makina']
    },
    ar: {
      title: 'آلة تمزيق | أنظمة التمزيق الصناعية | MT Makina - الشركة المصنعة رقم 1',
      description: 'آلات التمزيق الصناعية، كسارة البلاستيك، كسارة المعادن، كسارة الخشب - أنظمة التمزيق MT Makina. عمود واحد، عمود مزدوج سلسلة TSH. ✓ معتمد من CE ✓ ضمان ✓ خدمة',
      keywords: ['آلة تمزيق', 'شредер صناعي', 'كسارة بلاستيك', 'كسارة معادن', 'كسارة خشب', 'آلة تمزيق عمود واحد', 'آلة تمزيق عمود مزدوج', 'آلة إعادة تدوير', 'كسارة نفايات', 'MT Makina']
    }
  },
  about: {
    tr: {
      title: 'Kurumsal - MT Makina Hakkında | 20+ Yıllık Deneyim',
      description: 'MT Makina olarak 20 yılı aşkın süredir endüstriyel parçalama sistemleri üretiyoruz. Türkiye ve dünya pazarında güvenilir çözüm ortağınız.',
      keywords: ['MT Makina', 'parçalama makinesi üreticisi', 'endüstriyel makine üretimi', 'Türkiye makine sanayi', 'geri dönüşüm ekipmanları']
    },
    en: {
      title: 'Corporate - About MT Makina | 20+ Years Experience',
      description: 'MT Makina has been manufacturing industrial shredding systems for over 20 years. Your reliable solution partner in Turkey and the world market.',
      keywords: ['MT Makina', 'shredder manufacturer', 'industrial machine production', 'Turkey machinery industry', 'recycling equipment']
    },
    ru: {
      title: 'О компании - MT Makina | 20+ Лет Опыта',
      description: 'MT Makina производит промышленные системы измельчения более 20 лет. Ваш надежный партнер в Турции и на мировом рынке.',
      keywords: ['MT Makina', 'производитель шредеров', 'производство промышленного оборудования', 'машиностроение Турции', 'оборудование для переработки']
    },
    ar: {
      title: 'الشركة - عن MT Makina | خبرة أكثر من 20 عامًا',
      description: 'تقوم MT Makina بتصنيع أنظمة التمزيق الصناعية لأكثر من 20 عامًا. شريكك الموثوق في تركيا والسوق العالمية.',
      keywords: ['MT Makina', 'مصنع آلات التمزيق', 'إنتاج الآلات الصناعية', 'صناعة الآلات في تركيا', 'معدات إعادة التدوير']
    }
  },
  products: {
    tr: {
      title: 'Ürünlerimiz - MT Makina Parçalama Makineleri Kataloğu',
      description: 'MT Makina\'nın geniş ürün yelpazesi: Tek şaftlı, çift şaftlı, dörtlü şaft parçalama makineleri, granülatörler, balyalama sistemleri ve daha fazlası.',
      keywords: ['parçalama makinesi modelleri', 'shredder çeşitleri', 'endüstriyel makine kataloğu', 'geri dönüşüm ekipmanları']
    },
    en: {
      title: 'Our Products - MT Makina Shredder Machines Catalog',
      description: 'MT Makina\'s wide product range: Single shaft, dual shaft, quad shaft shredders, granulators, baling systems and more.',
      keywords: ['shredder models', 'shredder types', 'industrial machine catalog', 'recycling equipment']
    },
    ru: {
      title: 'Продукция - Каталог Шредеров MT Makina',
      description: 'Широкий ассортимент продукции MT Makina: одновальные, двухвальные, четырехвальные шредеры, грануляторы, пакетировочные прессы и многое другое.',
      keywords: ['модели шредеров', 'типы шредеров', 'каталог промышленного оборудования', 'оборудование для переработки']
    },
    ar: {
      title: 'منتجاتنا - كتالوج آلات التمزيق MT Makina',
      description: 'مجموعة منتجات MT Makina الواسعة: آلات تمزيق عمود واحد، عمود مزدوج، أربعة أعمدة، محببات، أنظمة بالات والمزيد.',
      keywords: ['موديلات آلات التمزيق', 'أنواع آلات التمزيق', 'كتالوج الآلات الصناعية', 'معدات إعادة التدوير']
    }
  },
  technology: {
    tr: {
      title: 'Teknoloji - MT Makina İleri Üretim Teknolojileri',
      description: 'MT Makina\'da kullanılan ileri üretim teknolojileri, otomasyon sistemleri, kalite kontrol süreçleri ve Ar-Ge çalışmaları hakkında bilgi edinin.',
      keywords: ['parçalama teknolojisi', 'ileri üretim', 'makine otomasyonu', 'kalite kontrol', 'Ar-Ge']
    },
    en: {
      title: 'Technology - MT Makina Advanced Manufacturing Technologies',
      description: 'Learn about advanced manufacturing technologies, automation systems, quality control processes and R&D studies used at MT Makina.',
      keywords: ['shredding technology', 'advanced manufacturing', 'machine automation', 'quality control', 'R&D']
    },
    ru: {
      title: 'Технологии - Передовые Производственные Технологии MT Makina',
      description: 'Узнайте о передовых производственных технологиях, системах автоматизации, процессах контроля качества и НИОКР, используемых в MT Makina.',
      keywords: ['технология измельчения', 'передовое производство', 'автоматизация машин', 'контроль качества', 'НИОКР']
    },
    ar: {
      title: 'التكنولوجيا - تقنيات التصنيع المتقدمة MT Makina',
      description: 'تعرف على تقنيات التصنيع المتقدمة وأنظمة الأتمتة وعمليات مراقبة الجودة ودراسات البحث والتطوير المستخدمة في MT Makina.',
      keywords: ['تكنولوجيا التمزيق', 'تصنيع متقدم', 'أتمتة الآلات', 'مراقبة الجودة', 'البحث والتطوير']
    }
  },
  references: {
    tr: {
      title: 'Referanslar - MT Makina Müşteri Projeleri ve Başarı Hikayeleri',
      description: 'Türkiye ve dünya genelinde MT Makina parçalama sistemlerini kullanan firmalar, başarılı projeler ve müşteri referansları.',
      keywords: ['MT Makina referanslar', 'müşteri projeleri', 'başarı hikayeleri', 'parçalama makinesi kullanıcıları']
    },
    en: {
      title: 'References - MT Makina Customer Projects and Success Stories',
      description: 'Companies using MT Makina shredding systems worldwide, successful projects and customer references.',
      keywords: ['MT Makina references', 'customer projects', 'success stories', 'shredder users']
    },
    ru: {
      title: 'Референс - Проекты Клиентов и Истории Успеха MT Makina',
      description: 'Компании, использующие системы измельчения MT Makina по всему миру, успешные проекты и отзывы клиентов.',
      keywords: ['MT Makina референс', 'проекты клиентов', 'истории успеха', 'пользователи шредеров']
    },
    ar: {
      title: 'المراجع - مشاريع عملاء MT Makina وقصص النجاح',
      description: 'الشركات التي تستخدم أنظمة التمزيق MT Makina في جميع أنحاء العالم، والمشاريع الناجحة ومراجع العملاء.',
      keywords: ['مراجع MT Makina', 'مشاريع العملاء', 'قصص النجاح', 'مستخدمي آلات التمزيق']
    }
  },
  certificates: {
    tr: {
      title: 'Sertifikalar ve Belgeler - MT Makina Kalite Standartları',
      description: 'MT Makina\'nın sahip olduğu ISO sertifikaları, CE belgeleri ve uluslararası kalite standartları.',
      keywords: ['ISO sertifikası', 'CE belgesi', 'kalite belgeleri', 'makine standartları']
    },
    en: {
      title: 'Certificates - MT Makina Quality Standards',
      description: 'ISO certificates, CE documents and international quality standards held by MT Makina.',
      keywords: ['ISO certificate', 'CE document', 'quality certificates', 'machine standards']
    },
    ru: {
      title: 'Сертификаты - Стандарты Качества MT Makina',
      description: 'Сертификаты ISO, документы CE и международные стандарты качества, которыми обладает MT Makina.',
      keywords: ['сертификат ISO', 'документ CE', 'сертификаты качества', 'стандарты оборудования']
    },
    ar: {
      title: 'الشهادات - معايير الجودة MT Makina',
      description: 'شهادات ISO ووثائق CE ومعايير الجودة الدولية التي تمتلكها MT Makina.',
      keywords: ['شهادة ISO', 'وثيقة CE', 'شهادات الجودة', 'معايير الآلات']
    }
  },
  contact: {
    tr: {
      title: 'İletişim - MT Makina ile İletişime Geçin | Teklif Alın',
      description: 'MT Makina ile iletişime geçin, parçalama makineleri hakkında detaylı bilgi alın ve projeniz için özel teklif isteyin.',
      keywords: ['MT Makina iletişim', 'parçalama makinesi teklif', 'makine fiyat teklifi', 'satış iletişim']
    },
    en: {
      title: 'Contact - Contact MT Makina | Get a Quote',
      description: 'Contact MT Makina, get detailed information about shredder machines and request a special quote for your project.',
      keywords: ['MT Makina contact', 'shredder quote', 'machine price quote', 'sales contact']
    },
    ru: {
      title: 'Контакты - Свяжитесь с MT Makina | Получить Предложение',
      description: 'Свяжитесь с MT Makina, получите подробную информацию о шредерах и запросите специальное предложение для вашего проекта.',
      keywords: ['MT Makina контакты', 'предложение на шредер', 'цена машины', 'контакты отдела продаж']
    },
    ar: {
      title: 'اتصل بنا - اتصل بـ MT Makina | احصل على عرض سعر',
      description: 'اتصل بـ MT Makina، واحصل على معلومات مفصلة حول آلات التمزيق واطلب عرض سعر خاص لمشروعك.',
      keywords: ['اتصال MT Makina', 'عرض سعر آلة تمزيق', 'سعر الآلة', 'اتصال المبيعات']
    }
  },
  ecatalog: {
    tr: {
      title: 'E-Katalog - MT Makina Ürün Kataloğu PDF İndir',
      description: 'MT Makina ürün kataloğunu PDF olarak indirin. Tüm parçalama makinesi modelleri, teknik özellikler ve fiyat bilgileri.',
      keywords: ['katalog pdf', 'ürün kataloğu', 'parçalama makinesi katalog', 'MT Makina katalog']
    },
    en: {
      title: 'E-Catalog - Download MT Makina Product Catalog PDF',
      description: 'Download MT Makina product catalog as PDF. All shredder models, technical specifications and price information.',
      keywords: ['catalog pdf', 'product catalog', 'shredder catalog', 'MT Makina catalog']
    },
    ru: {
      title: 'Э-Каталог - Скачать Каталог Продукции MT Makina PDF',
      description: 'Скачайте каталог продукции MT Makina в формате PDF. Все модели шредеров, технические характеристики и информация о ценах.',
      keywords: ['каталог pdf', 'каталог продукции', 'каталог шредеров', 'каталог MT Makina']
    },
    ar: {
      title: 'الكتالوج الإلكتروني - تحميل كتالوج منتجات MT Makina PDF',
      description: 'قم بتنزيل كتالوج منتجات MT Makina بصيغة PDF. جميع موديلات آلات التمزيق والمواصفات الفنية ومعلومات الأسعار.',
      keywords: ['كتالوج pdf', 'كتالوج المنتجات', 'كتالوج آلة التمزيق', 'كتالوج MT Makina']
    }
  }
};

// SEO Metadata for each page
export const seoMetadata: { [key: string]: (lang?: Language) => SEOMetadata } = {
  home: (lang = 'tr') => ({
    ...multilingualData.home[lang],
    canonical: `https://www.parcalamamakinesi.com${generateUrl.home(lang)}`
  }),
  about: (lang = 'tr') => ({
    ...multilingualData.about[lang],
    canonical: `https://www.parcalamamakinesi.com${generateUrl.about(lang)}`
  }),
  products: (lang = 'tr') => ({
    ...multilingualData.products[lang],
    canonical: `https://www.parcalamamakinesi.com${generateUrl.products(lang)}`
  }),
  technology: (lang = 'tr') => ({
    ...multilingualData.technology[lang],
    canonical: `https://www.parcalamamakinesi.com${generateUrl.technology(lang)}`
  }),
  references: (lang = 'tr') => ({
    ...multilingualData.references[lang],
    canonical: `https://www.parcalamamakinesi.com${generateUrl.references(lang)}`
  }),
  certificates: (lang = 'tr') => ({
    ...multilingualData.certificates[lang],
    canonical: `https://www.parcalamamakinesi.com${generateUrl.certificates(lang)}`
  }),
  contact: (lang = 'tr') => ({
    ...multilingualData.contact[lang],
    canonical: `https://www.parcalamamakinesi.com${generateUrl.contact(lang)}`
  }),
  ecatalog: (lang = 'tr') => ({
    ...multilingualData.ecatalog[lang],
    canonical: `https://www.parcalamamakinesi.com${generateUrl.ecatalog(lang)}`
  })
};

// Product Category SEO Metadata (Dynamic)
export const getProductCategorySEO = (type: string, lang: Language = 'tr'): SEOMetadata => {
  // Fallback to English if language not found, or construct generic
  const categoryData: { [key: string]: { [key in Language]: Omit<SEOMetadata, 'canonical'> } } = {
    'single-saft': {
      tr: {
        title: 'Tek Şaftlı Parçalama Makinesi | Single Shaft Shredder | MT Makina TSH Serisi',
        description: 'Tek şaftlı parçalama makinesi, single shaft shredder - MT Makina TSH Serisi 500-6000 kg/saat. Plastik kırma, ahşap parçalama, kağıt shredder. ✓ 6 Model ✓ CE Belgeli ✓ Hızlı Teslimat ✓ Garanti',
        keywords: ['tek şaftlı parçalama makinesi', 'single shaft shredder', 'TSH serisi', 'plastik kırma makinesi', 'ahşap parçalama makinesi', 'kağıt parçalama', 'plastik shredder', 'ahşap kırıcı', 'tek şaft shredder', 'endüstriyel parçalama'],
      },
      en: {
        title: 'Single Shaft Shredder | TSH Series | MT Makina',
        description: 'Single shaft shredder - MT Makina TSH Series 500-6000 kg/h. Plastic shredder, wood shredder, paper shredder. ✓ 6 Models ✓ CE Certified ✓ Fast Delivery ✓ Warranty',
        keywords: ['single shaft shredder', 'TSH series', 'plastic shredder', 'wood shredder', 'paper shredder', 'industrial shredder'],
      },
      ru: {
        title: 'Одновальный Шредер | Серия TSH | MT Makina',
        description: 'Одновальный шредер - MT Makina Серия TSH 500-6000 кг/ч. Шредер для пластика, дерева, бумаги. ✓ 6 Моделей ✓ Сертификат CE ✓ Быстрая Доставка ✓ Гарантия',
        keywords: ['одновальный шредер', 'серия TSH', 'шредер для пластика', 'шредер для дерева', 'шредер для бумаги', 'промышленный шредер'],
      },
      ar: {
        title: 'آلة تمزيق عمود واحد | سلسلة TSH | MT Makina',
        description: 'آلة تمزيق عمود واحد - MT Makina سلسلة TSH 500-6000 كجم/ساعة. كسارة بلاستيك، كسارة خشب، كسارة ورق. ✓ 6 موديلات ✓ معتمد من CE ✓ توصيل سريع ✓ ضمان',
        keywords: ['آلة تمزيق عمود واحد', 'سلسلة TSH', 'كسارة بلاستيك', 'كسارة خشب', 'كسارة ورق', 'آلة تمزيق صناعية'],
      }
    },
    'glass': {
      tr: {
        title: 'Cam Şişe Kırma Makinesi | Sıvı Ayrıştırmalı | MT Makina',
        description: 'Sıvı ayrıştırmalı cam şişe kırma makinesi - MT Makina. Oteller, restoranlar ve geri dönüşüm tesisleri için ideal. %80 hacim küçültme, sıvı tahliyesi. ✓ CE Belgeli ✓ Sessiz Çalışma',
        keywords: ['cam şişe kırma makinesi', 'glass crusher', 'cam kırıcı', 'şişe kırma makinesi', 'sıvı ayrıştırmalı kırıcı', 'geri dönüşüm makinesi', 'cam atık yönetimi']
      },
      en: {
        title: 'Glass Bottle Crusher | Liquid Separator | MT Makina',
        description: 'Liquid separating glass bottle crusher - MT Makina. Ideal for hotels, restaurants and recycling facilities. 80% volume reduction, liquid drainage. ✓ CE Certified ✓ Quiet Operation',
        keywords: ['glass bottle crusher', 'glass crusher', 'bottle shredder', 'liquid separator crusher', 'glass recycling machine', 'waste glass management']
      },
      ru: {
        title: 'Дробилка для Стеклянных Бутылок | С Сепарацией Жидкости | MT Makina',
        description: 'Дробилка для стеклянных бутылок с отделением жидкости - MT Makina. Идеально для отелей, ресторанов. Сокращение объема на 80%. ✓ Сертификат CE ✓ Тихая Работа',
        keywords: ['дробилка для стекла', 'измельчитель бутылок', 'дробилка с сепарацией', 'переработка стекла']
      },
      ar: {
        title: 'آلة كسارة الزجاج | مع فصل السوائل | MT Makina',
        description: 'آلة كسارة زجاجات الزجاج مع فصل السوائل - MT Makina. مثالية للفنادق والمطاعم. تقليل الحجم بنسبة 80٪. ✓ معتمد من CE ✓ تشغيل صامت',
        keywords: ['كسارة زجاج', 'آلة تكسير الزجاج', 'إعادة تدوير الزجاج', 'فصل السوائل']
      }
    },
    // ... Add other categories similarly (using generic fallback for now to save space, but structure supports all)
  };

  // Default generic data if specific translation missing
  const defaultData = {
    title: `${type} - MT Makina`,
    description: `MT Makina ${type} shredding machines.`,
    keywords: [type, 'shredder', 'MT Makina']
  };

  const data = categoryData[type]?.[lang] || categoryData[type]?.['en'] || defaultData;

  return {
    ...data,
    canonical: `https://www.parcalamamakinesi.com${generateUrl.productCategory(type, lang)}`
  };
};

// Product Model SEO Metadata (Dynamic)
export const getProductModelSEO = (type: string, model: string, lang: Language = 'tr'): SEOMetadata => {
  // Simplified model details for brevity, ideally this would be fully populated
  const modelDetails: { [key: string]: { [model: string]: { [key in Language]: Omit<SEOMetadata, 'canonical'> } } } = {
    'single-saft': {
      'TSH-60': {
        tr: {
          title: 'TSH-60 Parçalama Makinesi | 15-30 kW | 500-800 kg/saat | Fiyat Teklifi',
          description: 'TSH-60 tek şaftlı parçalama makinesi - 15-30 kW motor, 600x1100mm parçalama alanı, 500-800 kg/saat. Plastik, ahşap, kağıt için. ✓ Stokta ✓ Hızlı Teslimat ✓ Fiyat Teklifi Al',
          keywords: ['TSH-60', 'parçalama makinesi fiyat', 'plastik kırma makinesi', 'ahşap kırıcı', '600mm shredder', 'küçük parçalama makinesi', 'tek şaftlı shredder'],
        },
        en: {
          title: 'TSH-60 Shredder Machine | 15-30 kW | 500-800 kg/h | Get Quote',
          description: 'TSH-60 single shaft shredder - 15-30 kW motor, 600x1100mm shredding area, 500-800 kg/h. For plastic, wood, paper. ✓ In Stock ✓ Fast Delivery ✓ Get Quote',
          keywords: ['TSH-60', 'shredder price', 'plastic shredder', 'wood crusher', '600mm shredder', 'small shredder', 'single shaft shredder'],
        },
        ru: {
          title: 'Шредер TSH-60 | 15-30 кВт | 500-800 кг/ч | Запросить Цену',
          description: 'Одновальный шредер TSH-60 - двигатель 15-30 кВт, зона измельчения 600x1100 мм, 500-800 кг/ч. Для пластика, дерева, бумаги. ✓ В Наличии ✓ Быстрая Доставка',
          keywords: ['TSH-60', 'цена шредера', 'дробилка пластика', 'дробилка дерева', 'шредер 600мм', 'малый шредер', 'одновальный шредер'],
        },
        ar: {
          title: 'آلة تمزيق TSH-60 | 15-30 كيلوواط | 500-800 كجم/ساعة | احصل على عرض سعر',
          description: 'آلة تمزيق عمود واحد TSH-60 - محرك 15-30 كيلوواط، منطقة تمزيق 600x1100 مم، 500-800 كجم/ساعة. للبلاستيك، الخشب، الورق. ✓ متوفر ✓ توصيل سريع',
          keywords: ['TSH-60', 'سعر آلة التمزيق', 'كسارة بلاستيك', 'كسارة خشب', 'آلة تمزيق 600 مم', 'آلة تمزيق صغيرة', 'آلة تمزيق عمود واحد'],
        }
      },
      // ... other models
    }
  };

  const defaultData = {
    title: `${model} ${type} - MT Makina`,
    description: `MT Makina ${model} model shredder machine technical specifications and price.`,
    keywords: [model, type, 'shredder', 'MT Makina']
  };

  const data = modelDetails[type]?.[model]?.[lang] || modelDetails[type]?.[model]?.['en'] || defaultData;

  return {
    ...data,
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
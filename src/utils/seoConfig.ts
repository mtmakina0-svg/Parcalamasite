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
  ecatalog: { tr: 'e-katalog', en: 'e-catalog', ru: 'e-katalog', ar: 'e-catalog' },
  blog: { tr: 'blog', en: 'blog', ru: 'blog', ar: 'blog' }
};

// Product category slugs by language
export const productCategorySlugs = {
  'single-shaft': {
    tr: 'tek-saftli-parcalama-makinesi',
    en: 'single-shaft-shredder',
    ru: 'odnovalnaya-drobilka',
    ar: 'single-shaft-shredder'
  },
  'dual-shaft': {
    tr: 'cift-saftli-parcalama-makinesi',
    en: 'dual-shaft-shredder',
    ru: 'dvukhvalnaya-drobilka',
    ar: 'dual-shaft-shredder'
  },
  'quad-shaft': {
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
  home: (lang: Language = 'tr') => lang === 'tr' ? '/' : `/${lang}`,
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
  ecatalog: (lang: Language = 'tr') => `/${lang}/${slugsByLanguage.ecatalog[lang]}`,
  blog: (lang: Language = 'tr') => `/blog`
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
      title: 'Industrial Shredder & Waste Incinerator Manufacturer | MT Makina Turkey',
      description: 'Global manufacturer of Double Shaft Shredders, Medical Waste Incinerators, and Tire Recycling Plants. Heavy duty, high capacity, CE certified solutions exporting worldwide from Turkey.',
      keywords: ['industrial shredder manufacturer', 'shredder machine Turkey', 'waste incinerator manufacturer', 'plastic shredder for sale', 'metal shredder machine', 'wood crusher manufacturer', 'recycling machine Turkey', 'scrap shredder', 'MT Makina', 'Turkish machinery']
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
      title: 'About MT Makina | Industrial Shredder Manufacturer Turkey | 20+ Years',
      description: 'MT Makina - Leading Turkish manufacturer of industrial shredding systems for 20+ years. Turnkey recycling projects, CE certified machinery, exporting to 50+ countries worldwide.',
      keywords: ['MT Makina', 'shredder manufacturer Turkey', 'industrial machine manufacturer', 'Turkish machinery', 'recycling equipment manufacturer', 'turnkey project']
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
      title: 'Industrial Shredding Machines & Scrap Metal Shredders | For Sale | MT Makina',
      description: 'Heavy duty industrial shredders for sale: Single shaft, dual shaft, quad shaft shredders, scrap metal shredders, tire recycling machines. High efficiency, cost-effective solutions from Turkey.',
      keywords: ['shredder for sale', 'industrial shredder machine', 'scrap metal shredder', 'shredder manufacturer', 'recycling equipment for sale', 'heavy duty shredder']
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
      description: 'قم بتنزيل كتالوج منتجات MT Makina بصيغة PDF. جميع موديلات آلات التمزيق والمواصفات الفنية ومعلومات الأسعار.',
      keywords: ['كتالوج pdf', 'كتالوج المنتجات', 'كتالوج آلة التمزيق', 'كتالوج MT Makina']
    }
  },
  blog: {
    tr: {
      title: 'Blog & Haberler - MT Makina | Endüstriyel Geri Dönüşüm',
      description: 'Atık yönetimi, geri dönüşüm teknolojileri ve MT Makina\'dan en güncel haberler. Tıbbi atık imhası, shredder kullanımı ve dahası.',
      keywords: ['geri dönüşüm blog', 'atık yönetimi makaleleri', 'parçalama makinesi blog', 'MT Makina haberler']
    },
    en: {
      title: 'Blog & News - MT Makina | Industrial Recycling',
      description: 'Latest news on waste management, recycling technologies from MT Makina. Medical waste disposal, shredder usage and more.',
      keywords: ['recycling blog', 'waste management articles', 'shredder blog', 'MT Makina news']
    },
    ru: {
      title: 'Блог и Новости - MT Makina | Промышленная Переработка',
      description: 'Последние новости об управлении отходами, технологиях переработки от MT Makina. Утилизация медицинских отходов, использование шредеров и многое другое.',
      keywords: ['блог о переработке', 'статьи об управлении отходами', 'блог о шредерах', 'новости MT Makina']
    },
    ar: {
      title: 'المدونة والأخبار - MT Makina | إعادة التدوير الصناعي',
      description: 'آخر الأخبار حول إدارة النفايات وتقنيات إعادة التدوير من MT Makina. التخلص من النفايات الطبية واستخدام آلات التمزيق والمزيد.',
      keywords: ['مدونة إعادة التدوير', 'مقالات إدارة النفايات', 'مدونة آلة التمزيق', 'أخبار MT Makina']
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
  }),
  blog: (lang = 'tr') => ({
    ...multilingualData.blog[lang],
    canonical: `https://www.parcalamamakinesi.com/blog`
  })
};

// Product Category SEO Metadata (Dynamic)
export const getProductCategorySEO = (type: string, lang: Language = 'tr'): SEOMetadata => {
  // Fallback to English if language not found, or construct generic
  const categoryData: { [key: string]: { [key in Language]: Omit<SEOMetadata, 'canonical'> } } = {
    'single-shaft': {
      tr: {
        title: 'Tek Şaftlı Parçalama Makinesi | Single Shaft Shredder | MT Makina TSH Serisi',
        description: 'Tek şaftlı parçalama makinesi, single shaft shredder - MT Makina TSH Serisi 500-6000 kg/saat. Plastik kırma, ahşap parçalama, kağıt shredder. ✓ 6 Model ✓ CE Belgeli ✓ Hızlı Teslimat ✓ Garanti',
        keywords: ['tek şaftlı parçalama makinesi', 'single shaft shredder', 'TSH serisi', 'plastik kırma makinesi', 'ahşap parçalama makinesi', 'kağıt parçalama', 'plastik shredder', 'ahşap kırıcı', 'tek şaft shredder', 'endüstriyel parçalama'],
      },
      en: {
        title: 'Single Shaft Shredder Manufacturer | Industrial Shredder For Sale | MT Makina Turkey',
        description: 'Heavy duty single shaft shredder manufacturer from Turkey. TSH Series 500-6000 kg/h capacity. High efficiency plastic, wood, paper shredders. Cost-effective solutions, CE certified. ✓ 6 Models ✓ Worldwide Export',
        keywords: ['single shaft shredder manufacturer', 'industrial shredder for sale', 'TSH series', 'plastic shredder machine', 'wood shredder Turkey', 'shredder manufacturer Turkey', 'heavy duty shredder'],
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
        title: 'Glass Bottle Crusher Manufacturer | Liquid Separator | MT Makina Turkey',
        description: 'Industrial glass bottle crusher manufacturer from Turkey. Heavy duty, liquid separating models. High efficiency solution for hotels, restaurants and recycling plants. 80% volume reduction.',
        keywords: ['glass bottle crusher manufacturer', 'glass crusher for sale', 'bottle shredder', 'liquid separator crusher', 'glass recycling machine Turkey', 'industrial glass crusher']
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
    'wood': {
      tr: {
        title: 'Ağaç Parçalama Makinesi | Wood Grinder | MT Makina TSY Serisi',
        description: 'Endüstriyel ağaç parçalama ve öğütme makinesi - MT Makina TSY Serisi 2-12 ton/saat kapasite. Biyokütle, palet, kütük ve orman atığı parçalama. ✓ 3 Farklı Model ✓ Yüksek Performans ✓ 2 Yıl Garanti',
        keywords: ['ağaç parçalama makinesi', 'wood grinder', 'kütük kırma makinesi', 'dal parçalama', 'biyokütle makinesi', 'mobil ağaç kırıcı', 'TSY serisi', 'odun yongalama', 'talaş makinesi']
      },
      en: {
        title: 'Industrial Wood Grinder Manufacturer | Wood Shredder For Sale | MT Makina Turkey',
        description: 'Heavy duty wood grinder and shredder manufacturer from Turkey. TSY Series 2-12 tons/h capacity. High efficiency biomass, pallet, log shredding. Cost-effective turnkey solutions. ✓ CE Certified ✓ Worldwide Export',
        keywords: ['wood grinder manufacturer', 'wood shredder for sale', 'industrial wood chipper', 'biomass shredder Turkey', 'pallet shredder manufacturer', 'forestry mulcher', 'heavy duty wood shredder']
      },
      ru: {
        title: 'Измельчитель Древесины | Промышленный Шредер | MT Makina Серия TSY',
        description: 'Промышленный измельчитель древесины - MT Makina Серия TSY производительность 2-12 т/ч. Дробилка для бревен, поддонов, веток и лесных отходов. ✓ 3 Модели ✓ Высокая Эффективность ✓ Гарантия',
        keywords: ['измельчитель древесины', 'дробилка дерева', 'щепорез', 'шредер для поддонов', 'биомасса', 'промышленный шредер дерева', 'переработка древесных отходов']
      },
      ar: {
        title: 'آلة طحن الخشب | كسارة الخشب الصناعية | MT Makina سلسلة TSY',
        description: 'آلة طحن وتمزيق الخشب الصناعية - MT Makina سلسلة TSY سعة 2-12 طن/ساعة. تكسير الكتلة الحيوية، المنصات، الجذوع ونفايات الغابات. ✓ 3 موديلات ✓ أداء عالي ✓ ضمان سنتين',
        keywords: ['آلة طحن الخشب', 'كسارة خشب', 'تمزيق الجذوع', 'آلة نشارة الخشب', 'إعادة تدوير الخشب', 'طاحونة الكتلة الحيوية', 'نشارة الغابات']
      }
    },
    'dual-shaft': {
      tr: {
        title: 'Çift Şaftlı Parçalama Makinesi | Dual Shaft Shredder | MT Makina CS Serisi',
        description: 'Çift şaftlı parçalama makinesi, dual shaft shredder - MT Makina CS Serisi. Metal parçalama, hurda parçalama makinesi, plastik parçalama. ✓ 9 Model ✓ CE Belgeli ✓ 2 Yıl Garanti',
        keywords: ['çift şaftlı parçalama makinesi', 'dual shaft shredder', 'metal parçalama makinesi', 'hurda parçalama makinesi', 'plastik parçalama makinesi', 'CS serisi', 'endüstriyel shredder', 'parçalama makinesi']
      },
      en: {
        title: 'Dual Shaft Shredder Manufacturer | Metal Shredder For Sale | MT Makina Turkey',
        description: 'Heavy duty dual shaft shredder manufacturer from Turkey. CS Series for metal, plastic, tire shredding. Scrap metal shredder, industrial shredder machine. ✓ 9 Models ✓ CE Certified ✓ Worldwide Export',
        keywords: ['dual shaft shredder manufacturer', 'metal shredder', 'scrap metal shredder', 'metal shredder machine', 'shredder machine', 'industrial shredder for sale', 'shredder']
      },
      ru: {
        title: 'Двухвальный Шредер | Дробилка Металла | MT Makina Серия CS',
        description: 'Двухвальный шредер - MT Makina Серия CS. Измельчение металла, шин, пластика. ✓ 9 Моделей ✓ Сертификат CE ✓ Гарантия',
        keywords: ['двухвальный шредер', 'дробилка металла', 'измельчитель металлолома', 'серия CS', 'промышленный шредер']
      },
      ar: {
        title: 'آلة تمزيق عمود مزدوج | كسارة معادن | MT Makina سلسلة CS',
        description: 'آلة تمزيق عمود مزدوج - MT Makina سلسلة CS. تمزيق المعادن، الإطارات، البلاستيك. ✓ 9 موديلات ✓ معتمد من CE ✓ ضمان',
        keywords: ['آلة تمزيق عمود مزدوج', 'كسارة معادن', 'سلسلة CS', 'آلة تمزيق صناعية']
      }
    },
    'quad-shaft': {
      tr: {
        title: 'Dört Şaftlı Parçalama Makinesi | Quad Shaft Shredder | MT Makina DS Serisi',
        description: 'Dört şaftlı parçalama makinesi, quad shaft shredder - MT Makina DS Serisi. İnce parçalama, homojen çıkış. Plastik parçalama, metal parçalama. ✓ 4 Model ✓ Yüksek Verimlilik',
        keywords: ['dört şaftlı parçalama makinesi', 'quad shaft shredder', 'ince parçalama makinesi', 'DS serisi', 'plastik parçalama makinesi', 'parçalama makinesi', 'shredder']
      },
      en: {
        title: 'Quad Shaft Shredder Manufacturer | Fine Shredding | MT Makina Turkey',
        description: 'Quad shaft shredder manufacturer from Turkey. DS Series for fine shredding with uniform output. Scrap shredder, metal shredder machines. ✓ 4 Models ✓ CE Certified ✓ High Efficiency',
        keywords: ['quad shaft shredder manufacturer', 'scrap shredder', 'metal shredder machines', 'fine shredder', 'shredder machine', 'industrial shredder']
      },
      ru: {
        title: 'Четырехвальный Шредер | Дробилка | MT Makina Серия DS',
        description: 'Четырехвальный шредер - MT Makina Серия DS. Мелкое измельчение, однородный выход. ✓ 4 Модели ✓ Высокая Эффективность',
        keywords: ['четырехвальный шредер', 'серия DS', 'мелкое измельчение', 'промышленный шредер']
      },
      ar: {
        title: 'آلة تمزيق أربعة أعمدة | تمزيق دقيق | MT Makina سلسلة DS',
        description: 'آلة تمزيق أربعة أعمدة - MT Makina سلسلة DS. تمزيق دقيق، مخرج متجانس. ✓ 4 موديلات ✓ كفاءة عالية',
        keywords: ['آلة تمزيق أربعة أعمدة', 'سلسلة DS', 'تمزيق دقيق', 'آلة تمزيق صناعية']
      }
    },
    'metal': {
      tr: {
        title: 'Metal Parçalama Makinesi | Hurda Parçalama | Redmonster | MT Makina',
        description: 'Metal parçalama makinesi Redmonster - hurda parçalama makinesi, hurda kırma makinesi, demir parçalama makinesi. Otomobil hurda, beyaz eşya, ELV için. ✓ 4 Model ✓ Ağır Hizmet',
        keywords: ['metal parçalama makinesi', 'hurda parçalama makinesi', 'hurda kırma makinesi', 'demir parçalama makinesi', 'demir öğütme makinesi', 'redmonster', 'hurda öğütücü', 'metal shredder']
      },
      en: {
        title: 'Metal Shredder Machine Manufacturer | Scrap Metal Crusher | MT Makina Turkey',
        description: 'Heavy duty metal shredder machine manufacturer from Turkey. Redmonster series for scrap metal, ELV, white goods. Scrap metal shredder, scrap metal crusher. ✓ 4 Models ✓ High Capacity',
        keywords: ['metal shredder machine', 'scrap metal shredder', 'scrap metal crusher', 'metal crusher machine', 'scrap car shredder', 'baled scrap shredder', 'metal shredder']
      },
      ru: {
        title: 'Шредер Металла | Дробилка Металлолома | Redmonster | MT Makina',
        description: 'Шредер металла Redmonster - дробилка металлолома, измельчитель автомобилей. ✓ 4 Модели ✓ Высокая Мощность',
        keywords: ['шредер металла', 'дробилка металлолома', 'измельчитель автомобилей', 'redmonster']
      },
      ar: {
        title: 'آلة تمزيق المعادن | كسارة الخردة | Redmonster | MT Makina',
        description: 'آلة تمزيق المعادن Redmonster - كسارة خردة المعادن، تمزيق السيارات. ✓ 4 موديلات ✓ سعة عالية',
        keywords: ['آلة تمزيق المعادن', 'كسارة خردة المعادن', 'تمزيق السيارات', 'redmonster']
      }
    },
    'mobile': {
      tr: {
        title: 'Mobil Parçalama Makinesi | Mobil Kırıcı | MT Makina TSM/CSM Serisi',
        description: 'Mobil parçalama makinesi, mobil kırıcı - MT Makina TSM/CSM Serisi. Saha içi parçalama, taşınabilir shredder. ✓ 4 Model ✓ Dizel Motor ✓ Yüksek Mobilite',
        keywords: ['mobil parçalama makinesi', 'mobil kırıcı', 'taşınabilir shredder', 'saha içi parçalama', 'TSM serisi', 'CSM serisi', 'mobile shredder']
      },
      en: {
        title: 'Mobile Shredder Manufacturer | Portable Shredder | MT Makina Turkey',
        description: 'Mobile shredder manufacturer from Turkey. TSM/CSM Series for on-site shredding. Diesel powered, high mobility. ✓ 4 Models ✓ Heavy Duty ✓ Worldwide Export',
        keywords: ['mobile shredder manufacturer', 'portable shredder', 'on-site shredder', 'mobile crusher', 'mobile drum screen', 'shredder machine car']
      },
      ru: {
        title: 'Мобильный Шредер | Передвижная Дробилка | MT Makina',
        description: 'Мобильный шредер - MT Makina Серия TSM/CSM. Измельчение на месте. ✓ 4 Модели ✓ Дизельный Двигатель',
        keywords: ['мобильный шредер', 'передвижная дробилка', 'измельчение на месте']
      },
      ar: {
        title: 'آلة تمزيق متنقلة | كسارة متنقلة | MT Makina',
        description: 'آلة تمزيق متنقلة - MT Makina سلسلة TSM/CSM. تمزيق في الموقع. ✓ 4 موديلات ✓ محرك ديزل',
        keywords: ['آلة تمزيق متنقلة', 'كسارة متنقلة', 'تمزيق في الموقع']
      }
    },
    'pallet': {
      tr: {
        title: 'Palet Parçalama Makinesi | Odun Parçalama | MT Makina TSV Serisi',
        description: 'Palet parçalama makinesi - MT Makina TSV Serisi. Ahşap palet, odun parçalama makinesi, odun öğütme makinesi. Wood chipper, chipper machine. ✓ 3 Model ✓ Yüksek Kapasite',
        keywords: ['palet parçalama makinesi', 'odun parçalama makinesi', 'odun öğütme makinesi', 'ahşap palet kırıcı', 'wood chipper', 'chipper machine', 'TSV serisi']
      },
      en: {
        title: 'Pallet Shredder Manufacturer | Wood Chipper | MT Makina Turkey',
        description: 'Pallet shredder and wood chipper manufacturer from Turkey. TSV Series for wooden pallets, wood shredding. Chipper machine, wood grinder. ✓ 3 Models ✓ High Efficiency',
        keywords: ['pallet shredder manufacturer', 'wood chipper', 'chipper machine', 'wood shredder', 'pallet crusher', 'wood grinder']
      },
      ru: {
        title: 'Шредер Поддонов | Дробилка Дерева | MT Makina Серия TSV',
        description: 'Шредер поддонов - MT Makina Серия TSV. Для деревянных поддонов. ✓ 3 Модели ✓ Высокая Эффективность',
        keywords: ['шредер поддонов', 'дробилка дерева', 'серия TSV']
      },
      ar: {
        title: 'آلة تمزيق المنصات | كسارة الخشب | MT Makina سلسلة TSV',
        description: 'آلة تمزيق المنصات - MT Makina سلسلة TSV. للمنصات الخشبية. ✓ 3 موديلات ✓ كفاءة عالية',
        keywords: ['آلة تمزيق المنصات', 'كسارة الخشب', 'سلسلة TSV']
      }
    },
    'tree-root': {
      tr: {
        title: 'Ağaç Kökü Parçalama Makinesi | Kök Parçalama | MT Makina TW Serisi',
        description: 'Ağaç kökü parçalama makinesi - MT Makina TW Serisi. Kök parçalama makinesi, ağaç parçalama makinesi, ağaç öğütme makinesi, ağaç kırma makinası. ✓ 3 Model',
        keywords: ['ağaç kökü parçalama makinesi', 'kök parçalama makinesi', 'ağaç parçalama makinesi', 'ağaç öğütme makinesi', 'ağaç kırma makinası', 'TW serisi', 'orman atığı parçalama']
      },
      en: {
        title: 'Tree Root Shredder Manufacturer | Stump Grinder | MT Makina Turkey',
        description: 'Tree root shredder manufacturer from Turkey. TW Series for roots, stumps, forestry waste. Heavy duty tree shredder. ✓ 3 Models ✓ High Power',
        keywords: ['tree root shredder manufacturer', 'stump grinder', 'tree shredder', 'forestry shredder', 'root crusher']
      },
      ru: {
        title: 'Шредер Корней Деревьев | Дробилка Пней | MT Makina Серия TW',
        description: 'Шредер корней - MT Makina Серия TW. Для корней, пней, лесных отходов. ✓ 3 Модели ✓ Высокая Мощность',
        keywords: ['шредер корней', 'дробилка пней', 'серия TW']
      },
      ar: {
        title: 'آلة تمزيق جذور الأشجار | طاحونة الجذوع | MT Makina سلسلة TW',
        description: 'آلة تمزيق جذور الأشجار - MT Makina سلسلة TW. للجذور والجذوع ونفايات الغابات. ✓ 3 موديلات ✓ قوة عالية',
        keywords: ['آلة تمزيق جذور الأشجار', 'طاحونة الجذوع', 'سلسلة TW']
      }
    },
    'harddisk': {
      tr: {
        title: 'Harddisk İmha Makinesi | Veri İmha | DATABER | MT Makina',
        description: 'Harddisk imha makinesi DATABER - veri güvenliği için profesyonel çözüm. Hurda parçalama makinesi, elektronik atık imha. ✓ 3 Model ✓ GDPR Uyumlu',
        keywords: ['harddisk imha makinesi', 'veri imha makinesi', 'DATABER', 'elektronik atık parçalama', 'hurda parçalama makinesi', 'güvenli veri imha']
      },
      en: {
        title: 'Hard Disk Shredder Manufacturer | Data Destruction | DATABER | MT Makina',
        description: 'Hard disk shredder manufacturer from Turkey. DATABER series for secure data destruction. GDPR compliant, NSA/CSS certified. ✓ 3 Models',
        keywords: ['hard disk shredder manufacturer', 'data destruction machine', 'DATABER', 'e-waste shredder', 'secure shredder']
      },
      ru: {
        title: 'Шредер Жестких Дисков | Уничтожение Данных | DATABER | MT Makina',
        description: 'Шредер жестких дисков DATABER - безопасное уничтожение данных. ✓ 3 Модели ✓ GDPR Совместимый',
        keywords: ['шредер жестких дисков', 'уничтожение данных', 'DATABER']
      },
      ar: {
        title: 'آلة تمزيق الأقراص الصلبة | تدمير البيانات | DATABER | MT Makina',
        description: 'آلة تمزيق الأقراص الصلبة DATABER - لتدمير البيانات بشكل آمن. ✓ 3 موديلات ✓ متوافق مع GDPR',
        keywords: ['آلة تمزيق الأقراص الصلبة', 'تدمير البيانات', 'DATABER']
      }
    }
    // End of category data
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
    'single-shaft': {
      'TSH-60': {
        tr: {
          title: 'TSH-60 Parçalama Makinesi | 15-30 kW | 500-800 kg/saat | Fiyat Teklifi',
          description: 'TSH-60 tek şaftlı parçalama makinesi - 15-30 kW motor, 600x1100mm parçalama alanı, 500-800 kg/saat. Plastik, ahşap, kağıt için. ✓ Stokta ✓ Hızlı Teslimat ✓ Fiyat Teklifi Al',
          keywords: ['TSH-60', 'parçalama makinesi fiyat', 'plastik kırma makinesi', 'ahşap kırıcı', '600mm shredder', 'küçük parçalama makinesi', 'tek şaftlı shredder'],
        },
        en: {
          title: 'TSH-60 Single Shaft Shredder Manufacturer | 15-30 kW | MT Makina Turkey',
          description: 'Heavy duty TSH-60 single shaft shredder - 15-30 kW motor, 600x1100mm shredding area, 500-800 kg/h. High efficiency plastic, wood, paper shredder. Cost-effective solution. ✓ CE Certified ✓ Fast Delivery',
          keywords: ['TSH-60', 'shredder manufacturer', 'single shaft shredder Turkey', 'plastic shredder for sale', 'industrial shredder', 'heavy duty shredder'],
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
    },
    'wood': {
      'TSY-100': {
        tr: {
          title: 'TSY-100 Ağaç Parçalama Makinesi | 45-55 kW | 2-4 Ton/Saat',
          description: 'TSY-100 Yatay Ağaç Parçalama Makinesi - 45-55 kW motor, 1000mm rotor. Palet, dal ve marangoz atıkları için ideal. Kompakt tasarım, yüksek verimlilik.',
          keywords: ['TSY-100', 'ağaç parçalama makinesi fiyat', 'orta boy ağaç kırıcı', 'palet kırma makinesi', '55kw shredder']
        },
        en: {
          title: 'TSY-100 Wood Shredder Manufacturer | 45-55 kW | MT Makina Turkey',
          description: 'Heavy duty TSY-100 horizontal wood shredder - 45-55 kW motor, 1000mm rotor. High efficiency solution for pallets, branches and carpentry waste. Cost-effective, compact design.',
          keywords: ['TSY-100', 'wood shredder manufacturer', 'wood grinder Turkey', 'pallet crusher for sale', 'industrial wood shredder']
        },
        ru: {
          title: 'Шредер Дерева TSY-100 | 45-55 кВт | 2-4 Тонн/Час',
          description: 'Горизонтальный шредер дерева TSY-100 - двигатель 45-55 кВт, ротор 1000 мм. Идеально для поддонов, веток и столярных отходов. Компактный дизайн.',
          keywords: ['TSY-100', 'цена шредера дерева', 'дробилка для поддонов', 'шредер 55квт']
        },
        ar: {
          title: 'آلة تمزيق الخشب TSY-100 | 45-55 كيلوواط | 2-4 طن/ساعة',
          description: 'آلة تمزيق الخشب الأفقية TSY-100 - محرك 45-55 كيلوواط، دوار 1000 مم. مثالية للمنصات والفروع ونفايات النجارة. تصميم مدمج.',
          keywords: ['TSY-100', 'سعر كسارة الخشب', 'طاحونة خشب متوسطة', 'كسارة منصات']
        }
      },
      'TSY-150': {
        tr: {
          title: 'TSY-150 Endüstriyel Ağaç Parçalama | 75-110 kW | 4-6 Ton/Saat',
          description: 'TSY-150 Profesyonel Ağaç Parçalama - 75-110 kW çift motor, 1500mm rotor. Kütük, orman atığı ve biyokütle için. Yüksek kapasite, ağır hizmet tipi.',
          keywords: ['TSY-150', 'endüstriyel ağaç parçalama', 'kütük parçalama makinesi', 'biyokütle kırıcı', 'orman atığı parçalama']
        },
        en: {
          title: 'TSY-150 Industrial Wood Shredder Manufacturer | 75-110 kW | MT Makina Turkey',
          description: 'Heavy duty TSY-150 professional wood shredder - 75-110 kW dual motor, 1500mm rotor. High efficiency for logs, forestry waste and biomass. Turnkey project solutions.',
          keywords: ['TSY-150', 'industrial wood shredder manufacturer', 'log shredder Turkey', 'biomass grinder for sale', 'heavy duty wood shredder']
        },
        ru: {
          title: 'Промышленный Шредер TSY-150 | 75-110 кВт | 4-6 Тонн/Час',
          description: 'Профессиональный шредер дерева TSY-150 - два двигателя 75-110 кВт, ротор 1500 мм. Для бревен, лесных отходов и биомассы. Высокая производительность.',
          keywords: ['TSY-150', 'промышленный шредер', 'измельчитель бревен', 'биомасса']
        },
        ar: {
          title: 'آلة تمزيق الخشب الصناعية TSY-150 | 75-110 كيلوواط | 4-6 طن/ساعة',
          description: 'آلة تمزيق الخشب الاحترافية TSY-150 - محرك مزدوج 75-110 كيلوواط، دوار 1500 مم. للجذوع ونفايات الغابات والكتلة الحيوية. سعة عالية.',
          keywords: ['TSY-150', 'كسارة خشب صناعية', 'تمزيق جذوع', 'طاحونة كتلة حيوية']
        }
      },
      'TSY-200': {
        tr: {
          title: 'TSY-200 Premium Ağaç Öğütme | 90-200 kW | 8-12 Ton/Saat',
          description: 'TSY-200 Yüksek Kapasiteli Ağaç Öğütme - 90-200 kW ultra güçlü motorlar, 2000mm rotor. Enerji santralleri ve büyük tesisler için. Maksimum performans.',
          keywords: ['TSY-200', 'ağaç öğütme makinesi', 'biyokütle santrali kırıcı', 'dev ağaç parçalama', '200kw shredder']
        },
        en: {
          title: 'TSY-200 Premium Wood Grinder Manufacturer | 90-200 kW | MT Makina Turkey',
          description: 'Heavy duty TSY-200 high capacity wood grinder - 90-200 kW ultra powerful motors, 2000mm rotor. High efficiency for power plants and large facilities. Cost-effective turnkey projects.',
          keywords: ['TSY-200', 'wood grinder manufacturer', 'biomass plant shredder Turkey', 'industrial wood grinder for sale', 'heavy duty wood shredder']
        },
        ru: {
          title: 'Премиум Шредер TSY-200 | 90-200 кВт | 8-12 Тонн/Час',
          description: 'Высокопроизводительный шредер TSY-200 - двигатели 90-200 кВт, ротор 2000 мм. Для электростанций и крупных объектов. Максимальная производительность.',
          keywords: ['TSY-200', 'измельчитель дерева премиум', 'дробилка для электростанций', 'мощный шредер']
        },
        ar: {
          title: 'طاحونة الخشب الممتازة TSY-200 | 90-200 كيلوواط | 8-12 طن/ساعة',
          description: 'طاحونة خشب عالية السعة TSY-200 - محركات فائقة القوة 90-200 كيلوواط، دوار 2000 مم. لمحطات الطاقة والمرافق الكبيرة. أقصى أداء.',
          keywords: ['TSY-200', 'آلة طحن خشب', 'كسارة محطة كتلة حيوية', 'كسارة خشب ضخمة']
        }
      }
    },
    'glass': {
      'CK-200': {
        tr: {
          title: 'CK-200 Cam Şişe Kırma Makinesi | Otel & Restoran Tipi',
          description: 'CK-200 Kompakt Cam Kırıcı - 100-200 kg/saat. Oteller ve restoranlar için sessiz, güvenli, sıvı ayrıştırmalı. %80 hacim tasarrufu.',
          keywords: ['CK-200', 'otel tipi cam kırıcı', 'şişe kırma makinesi', 'sessiz cam kırıcı', 'restoran geri dönüşüm']
        },
        en: {
          title: 'CK-200 Glass Bottle Crusher | Hotel & Restaurant Type',
          description: 'CK-200 Compact Glass Crusher - 100-200 kg/h. Quiet, safe, with liquid separation for hotels and restaurants. 80% volume saving.',
          keywords: ['CK-200', 'hotel glass crusher', 'bottle crushing machine', 'quiet glass crusher', 'restaurant recycling']
        },
        ru: {
          title: 'Дробилка Стеклянных Бутылок CK-200 | Для Отелей',
          description: 'Компактная дробилка CK-200 - 100-200 кг/ч. Тихая, безопасная, с отделением жидкости. Экономия объема 80%.',
          keywords: ['CK-200', 'дробилка для отелей', 'измельчитель бутылок', 'тихая дробилка']
        },
        ar: {
          title: 'كسارة زجاجات CK-200 | نوع الفنادق والمطاعم',
          description: 'كسارة زجاج مدمجة CK-200 - 100-200 كجم/ساعة. هادئة، آمنة، مع فصل السوائل. توفير 80٪ في الحجم.',
          keywords: ['CK-200', 'كسارة زجاج فنادق', 'آلة تكسير قوارير', 'كسارة زجاج هادئة']
        }
      },
      'CK-400': {
        tr: {
          title: 'CK-400 Şişe ve Kavanoz Kırma Makinesi | 300-500 kg/saat',
          description: 'CK-400 Orta Boy Cam Kırıcı - 4-5.5 kW. 300-500 kg/saat kapasite. Büyük oteller, hastaneler ve AVM\'ler için güçlü çözüm.',
          keywords: ['CK-400', 'kavanoz kırma makinesi', 'cam atık makinesi', 'hastane atık kırıcı']
        },
        en: {
          title: 'CK-400 Bottle & Jar Crusher | 300-500 kg/hour',
          description: 'CK-400 Medium Glass Crusher - 4-5.5 kW. 300-500 kg/h capacity. Powerful solution for large hotels, hospitals and malls.',
          keywords: ['CK-400', 'jar crusher', 'glass waste machine', 'hospital waste crusher']
        },
        ru: {
          title: 'Дробилка Бутылок и Банок CK-400 | 300-500 кг/час',
          description: 'Средняя дробилка CK-400 - 4-5.5 кВт. 300-500 кг/ч. Мощное решение для крупных отелей, больниц и ТЦ.',
          keywords: ['CK-400', 'дробилка банок', 'машина для отходов стекла']
        },
        ar: {
          title: 'كسارة الزجاجات والجرار CK-400 | 300-500 كجم/ساعة',
          description: 'كسارة زجاج متوسطة CK-400 - قوة 4-5.5 كيلوواط. سعة 300-500 كجم/ساعة. حل قوي للفنادق الكبيرة والمستشفيات.',
          keywords: ['CK-400', 'كسارة جرار', 'آلة نفايات الزجاج']
        }
      },
      'CKS-400': {
        tr: {
          title: 'CKS-400 Endüstriyel Cam Parçalama | 600-800 kg/saat',
          description: 'CKS-400 Sanayi Tipi Cam Kırıcı - 5.5-7.5 kW. Konveyörlü besleme, yüksek kapasite. Geri dönüşüm tesisleri ve dolum fabrikaları için.',
          keywords: ['CKS-400', 'endüstriyel cam kırıcı', 'cam geri dönüşüm tesisi makinesi', 'otomatik cam kırma']
        },
        en: {
          title: 'CKS-400 Industrial Glass Shredder | 600-800 kg/hour',
          description: 'CKS-400 Industrial Glass Crusher - 5.5-7.5 kW. Conveyor feeding, high capacity. For recycling plants and bottling factories.',
          keywords: ['CKS-400', 'industrial glass crusher', 'glass recycling plant machine', 'automatic glass crushing']
        },
        ru: {
          title: 'Промышленный Шредер Стекла CKS-400 | 600-800 кг/час',
          description: 'Промышленная дробилка CKS-400 - 5.5-7.5 кВт. Конвейерная подача. Для перерабатывающих заводов.',
          keywords: ['CKS-400', 'промышленная дробилка стекла', 'завод по переработке стекла']
        },
        ar: {
          title: 'تمزيق الزجاج الصناعي CKS-400 | 600-800 كجم/ساعة',
          description: 'كسارة زجاج صناعية CKS-400 - قوة 5.5-7.5 كيلوواط. تغذية بالناقل. لمصانع إعادة التدوير ومصانع التعبئة.',
          keywords: ['CKS-400', 'كسارة زجاج صناعية', 'آلة مصنع إعادة تدوير الزجاج']
        }
      }
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
    "image": ["https://i.ibb.co/HLymGDrz/1-Mt-Makina-Logo.png"], // Google Rich Results requires an image
    "sku": model,
    "mpn": model,
    "brand": {
      "@type": "Brand",
      "name": "MT Makina"
    },
    "offers": {
      "@type": "Offer",
      "url": modelSEO.canonical,
      "priceCurrency": "USD",
      "price": "0", // Contact for price
      "priceValidUntil": "2026-12-31",
      "availability": "https://schema.org/InStock",
      "itemCondition": "https://schema.org/NewCondition"
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

// Generate LocalBusiness structured data with international targeting
export const generateLocalBusinessStructuredData = (language: Language = 'tr') => {
  // Language-specific business descriptions
  const businessNames: { [key in Language]: string } = {
    tr: 'MT Makina - Endüstriyel Parçalama Makineleri',
    en: 'MT Makina - Industrial Shredding Machines',
    ru: 'MT Makina - Промышленные Измельчители',
    ar: 'MT Makina - آلات التكسير الصناعية'
  };

  const descriptions: { [key in Language]: string } = {
    tr: 'Türkiye\'nin lider parçalama makinesi üreticisi. Tek şaftlı, çift şaftlı, metal parçalama makineleri.',
    en: 'Turkey\'s leading shredder manufacturer. Single-shaft, dual-shaft, metal shredding machines with worldwide shipping.',
    ru: 'Ведущий турецкий производитель шредеров. Одновальные, двухвальные, металлические измельчители.',
    ar: 'الشركة الرائدة في تركيا لتصنيع ماكينات التقطيع. ماكينات تقطيع أحادية وثنائية.'
  };

  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://www.parcalamamakinesi.com/#localbusiness",
    "name": businessNames[language],
    "alternateName": ["MT Makina", "MT Makına", "MTMakina"],
    "description": descriptions[language],
    "image": "https://i.ibb.co/HLymGDrz/1-Mt-Makina-Logo.png",
    "telephone": "+90-542-310-99-30",
    "email": "info@mtmakina.com.tr",
    "url": "https://www.parcalamamakinesi.com",
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
    // International targeting - key for regional SEO rankings
    "areaServed": [
      {
        "@type": "Country",
        "name": "Turkey",
        "sameAs": "https://en.wikipedia.org/wiki/Turkey"
      },
      {
        "@type": "Country",
        "name": "Russia",
        "sameAs": "https://en.wikipedia.org/wiki/Russia"
      },
      {
        "@type": "Country",
        "name": "Saudi Arabia",
        "sameAs": "https://en.wikipedia.org/wiki/Saudi_Arabia"
      },
      {
        "@type": "GeoCircle",
        "name": "Middle East",
        "geoMidpoint": {
          "@type": "GeoCoordinates",
          "latitude": 25.2048,
          "longitude": 55.2708
        },
        "geoRadius": "2000 km"
      },
      {
        "@type": "GeoCircle",
        "name": "Europe",
        "geoMidpoint": {
          "@type": "GeoCoordinates",
          "latitude": 48.8566,
          "longitude": 2.3522
        },
        "geoRadius": "2500 km"
      }
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Industrial Shredding Machines",
      "itemListElement": [
        {
          "@type": "OfferCatalog",
          "name": "Single Shaft Shredders"
        },
        {
          "@type": "OfferCatalog",
          "name": "Dual Shaft Shredders"
        },
        {
          "@type": "OfferCatalog",
          "name": "Metal Shredders"
        },
        {
          "@type": "OfferCatalog",
          "name": "Mobile Shredders"
        }
      ]
    },
    "priceRange": "$$",
    "currenciesAccepted": "USD, EUR, TRY",
    "paymentAccepted": "Cash, Bank Transfer, Letter of Credit",
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "09:00",
      "closes": "18:00"
    },
    "sameAs": [
      "https://www.facebook.com/mtmakina",
      "https://www.instagram.com/mtmakina",
      "https://www.linkedin.com/company/mtmakina",
      "https://www.youtube.com/@mtmakina"
    ]
  };
};

// Generate FAQPage structured data
export const generateFAQStructuredData = (faqs: { question: string; answer: string }[]) => {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };
};
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
// All URLs should be consistent with trailing slash where appropriate
export const generateUrl = {
  home: (lang: Language = 'tr') => lang === 'tr' ? '/' : `/${lang}/`,
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
  ecatalog: (lang: Language = 'tr', category?: string) => category
    ? `/${lang}/${slugsByLanguage.ecatalog[lang]}/${category}`
    : `/${lang}/${slugsByLanguage.ecatalog[lang]}`,
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
      title: 'Industrial Shredder Machine For Sale | Shredder Manufacturer Turkey | Best Price | MT Makina',
      description: 'Leading industrial shredder manufacturer from Turkey. Single shaft, dual shaft, quad shaft shredders for sale. Heavy duty plastic shredder, metal crusher, wood grinder. Factory direct prices, worldwide shipping. ✓ CE Certified ✓ 50+ Countries',
      keywords: ['industrial shredder for sale', 'shredder machine manufacturer Turkey', 'plastic shredder machine', 'metal shredder for sale', 'wood shredder manufacturer', 'buy industrial shredder', 'shredder factory Turkey', 'heavy duty shredder', 'recycling machine manufacturer']
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
      title: 'Industrial Shredding Machines For Sale | Scrap Metal Shredder | Best Price Turkey | MT Makina',
      description: 'Heavy duty industrial shredders for sale from Turkey. Single shaft, dual shaft, quad shaft shredders. Scrap metal shredder, tire recycling machine, plastic crusher. Factory direct prices. ✓ CE Certified ✓ Worldwide Shipping',
      keywords: ['shredder for sale', 'industrial shredder machine', 'scrap metal shredder for sale', 'buy shredder machine', 'shredder manufacturer Turkey', 'recycling equipment for sale', 'heavy duty shredder price']
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
        title: 'Single Shaft Shredder For Sale | Industrial Shredder Manufacturer Turkey | Best Price | MT Makina',
        description: 'Heavy duty single shaft shredder for sale from Turkey. TSH Series 500-6000 kg/h capacity. Best price plastic shredder, wood shredder, paper shredder. Factory direct, worldwide shipping. ✓ 6 Models ✓ CE Certified ✓ 2 Year Warranty',
        keywords: ['single shaft shredder for sale', 'buy single shaft shredder', 'industrial shredder Turkey', 'plastic shredder machine price', 'wood shredder for sale', 'shredder manufacturer Turkey', 'heavy duty shredder best price'],
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
        title: 'Dual Shaft Shredder For Sale | Metal Shredder Manufacturer Turkey | Best Price | MT Makina',
        description: 'Heavy duty dual shaft shredder for sale from Turkey. CS Series for metal, plastic, tire shredding. Best price scrap metal shredder. Factory direct, worldwide shipping. ✓ 9 Models ✓ CE Certified ✓ 2 Year Warranty',
        keywords: ['dual shaft shredder for sale', 'metal shredder for sale', 'buy metal shredder', 'scrap metal shredder price', 'shredder machine Turkey', 'industrial shredder best price', 'shredder manufacturer'],
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
        title: 'Quad Shaft Shredder For Sale | Fine Shredder Manufacturer Turkey | Best Price | MT Makina',
        description: 'Quad shaft shredder for sale from Turkey. DS Series for fine shredding with uniform output. Best price industrial shredder. Factory direct, worldwide shipping. ✓ 4 Models ✓ CE Certified ✓ High Efficiency',
        keywords: ['quad shaft shredder for sale', 'buy quad shaft shredder', 'fine shredder price', 'scrap shredder Turkey', 'metal shredder machines for sale', 'industrial shredder best price'],
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
        title: 'Metal Shredder Machine For Sale | Scrap Metal Crusher | Best Price Turkey | MT Makina',
        description: 'Heavy duty metal shredder machine for sale from Turkey. Redmonster series for scrap metal, ELV, white goods. Best price scrap metal crusher. Factory direct, worldwide shipping. ✓ 4 Models ✓ High Capacity',
        keywords: ['metal shredder for sale', 'buy metal shredder machine', 'scrap metal shredder price', 'metal crusher for sale', 'scrap car shredder Turkey', 'baled scrap shredder price', 'metal shredder best price'],
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
        title: 'Mobile Shredder For Sale | Portable Shredder Manufacturer Turkey | Best Price | MT Makina',
        description: 'Mobile shredder for sale from Turkey. TSM/CSM Series for on-site shredding. Best price portable shredder, diesel powered. Factory direct, worldwide shipping. ✓ 4 Models ✓ Heavy Duty ✓ High Mobility',
        keywords: ['mobile shredder for sale', 'buy portable shredder', 'on-site shredder price', 'mobile crusher Turkey', 'portable shredder best price', 'shredder machine manufacturer'],
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
        title: 'Pallet Shredder For Sale | Wood Chipper Manufacturer Turkey | Best Price | MT Makina',
        description: 'Pallet shredder and wood chipper for sale from Turkey. TSV Series for wooden pallets, wood shredding. Best price chipper machine, wood grinder. Factory direct, worldwide shipping. ✓ 3 Models ✓ High Efficiency',
        keywords: ['pallet shredder for sale', 'buy wood chipper', 'chipper machine price', 'wood shredder Turkey', 'pallet crusher for sale', 'wood grinder best price', 'pallet shredder manufacturer'],
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
          title: 'TSH-60 Tek Şaftlı Parçalama Makinesi (Single Shaft Shredder) | MT Makina',
          description: 'TSH-60 tek şaftlı parçalama makinesi - 15-30 kW motor, 600x1100mm parçalama alanı, 500-800 kg/saat. Plastik, ahşap, kağıt için. ✓ Stokta ✓ Hızlı Teslimat ✓ Fiyat Teklifi Al',
          keywords: ['TSH-60', 'parçalama makinesi fiyat', 'plastik kırma makinesi', 'ahşap kırıcı', '600mm shredder', 'küçük parçalama makinesi', 'tek şaftlı shredder'],
        },
        en: {
          title: 'TSH-60 Single Shaft Shredder | MT Makina',
          description: 'Heavy duty TSH-60 single shaft shredder - 15-30 kW motor, 600x1100mm shredding area, 500-800 kg/h. High efficiency plastic, wood, paper shredder. Cost-effective solution. ✓ CE Certified ✓ Fast Delivery',
          keywords: ['TSH-60', 'shredder manufacturer', 'single shaft shredder Turkey', 'plastic shredder for sale', 'industrial shredder', 'heavy duty shredder'],
        },
        ru: {
          title: 'TSH-60 Одновальный Шредер (Single Shaft Shredder) | MT Makina',
          description: 'Одновальный шредер TSH-60 - двигатель 15-30 кВт, зона измельчения 600x1100 мм, 500-800 кг/ч. Для пластика, дерева, бумаги. ✓ В Наличии ✓ Быстрая Доставка',
          keywords: ['TSH-60', 'цена шредера', 'дробилка пластика', 'дробилка дерева', 'шредер 600мм', 'малый шредер', 'одновальный шредер'],
        },
        ar: {
          title: 'TSH-60 آلة تمزيق عمود واحد (Single Shaft Shredder) | MT Makina',
          description: 'آلة تمزيق عمود واحد TSH-60 - محرك 15-30 كيلوواط، منطقة تمزيق 600x1100 مم، 500-800 كجم/ساعة. للبلاستيك، الخشب، الورق. ✓ متوفر ✓ توصيل سريع',
          keywords: ['TSH-60', 'سعر آلة التمزيق', 'كسارة بلاستيك', 'كسارة خشب', 'آلة تمزيق 600 مم', 'آلة تمزيق صغيرة', 'آلة تمزيق عمود واحد'],
        }
      },
      'TSH-80': {
        tr: {
          title: 'TSH-80 Tek Şaftlı Parçalama Makinesi (Single Shaft Shredder) | MT Makina',
          description: 'TSH-80 tek şaftlı parçalama makinesi - 22-45 kW motor, 800x1100mm parçalama alanı, 800-1200 kg/saat. Plastik, ahşap, tekstil için. ✓ CE Belgeli ✓ 2 Yıl Garanti',
          keywords: ['TSH-80', 'parçalama makinesi', 'plastik kırma makinesi', 'tek şaftlı shredder', '800mm shredder'],
        },
        en: {
          title: 'TSH-80 Single Shaft Shredder | MT Makina',
          description: 'Heavy duty TSH-80 single shaft shredder - 22-45 kW motor, 800x1100mm shredding area, 800-1200 kg/h. For plastic, wood, textile. ✓ CE Certified ✓ 2 Year Warranty',
          keywords: ['TSH-80', 'single shaft shredder', 'plastic shredder', 'industrial shredder Turkey'],
        },
        ru: {
          title: 'TSH-80 Одновальный Шредер (Single Shaft Shredder) | MT Makina',
          description: 'Одновальный шредер TSH-80 - двигатель 22-45 кВт, зона измельчения 800x1100 мм, 800-1200 кг/ч. Для пластика, дерева, текстиля.',
          keywords: ['TSH-80', 'одновальный шредер', 'дробилка пластика'],
        },
        ar: {
          title: 'TSH-80 آلة تمزيق عمود واحد (Single Shaft Shredder) | MT Makina',
          description: 'آلة تمزيق عمود واحد TSH-80 - محرك 22-45 كيلوواط، منطقة تمزيق 800x1100 مم، 800-1200 كجم/ساعة.',
          keywords: ['TSH-80', 'آلة تمزيق عمود واحد', 'كسارة بلاستيك'],
        }
      },
      'TSH-100': {
        tr: {
          title: 'TSH-100 Tek Şaftlı Parçalama Makinesi (Single Shaft Shredder) | MT Makina',
          description: 'TSH-100 tek şaftlı parçalama makinesi - 30-75 kW motor, 1000x1300mm parçalama alanı, 1200-1800 kg/saat. Endüstriyel kapasite. ✓ CE Belgeli ✓ Profesyonel Çözüm',
          keywords: ['TSH-100', 'parçalama makinesi', 'endüstriyel shredder', 'tek şaftlı parçalama'],
        },
        en: {
          title: 'TSH-100 Single Shaft Shredder | MT Makina',
          description: 'Industrial TSH-100 single shaft shredder - 30-75 kW motor, 1000x1300mm shredding area, 1200-1800 kg/h. Professional capacity. ✓ CE Certified',
          keywords: ['TSH-100', 'single shaft shredder', 'industrial shredder', 'heavy duty shredder'],
        },
        ru: {
          title: 'TSH-100 Одновальный Шредер (Single Shaft Shredder) | MT Makina',
          description: 'Промышленный одновальный шредер TSH-100 - двигатель 30-75 кВт, 1200-1800 кг/ч. Профессиональная мощность.',
          keywords: ['TSH-100', 'промышленный шредер', 'одновальный измельчитель'],
        },
        ar: {
          title: 'TSH-100 آلة تمزيق عمود واحد (Single Shaft Shredder) | MT Makina',
          description: 'آلة تمزيق صناعية TSH-100 - محرك 30-75 كيلوواط، 1200-1800 كجم/ساعة. سعة احترافية.',
          keywords: ['TSH-100', 'آلة تمزيق صناعية', 'تمزيق عمود واحد'],
        }
      },
      'TSH-130': {
        tr: {
          title: 'TSH-130 Tek Şaftlı Parçalama Makinesi (Single Shaft Shredder) | MT Makina',
          description: 'TSH-130 tek şaftlı parçalama makinesi - 45-110 kW motor, 1300x1600mm parçalama alanı, 1800-2500 kg/saat. Ağır hizmet tipi. ✓ CE Belgeli ✓ 7/24 Çalışma',
          keywords: ['TSH-130', 'parçalama makinesi', 'ağır hizmet shredder', 'yüksek kapasiteli parçalama'],
        },
        en: {
          title: 'TSH-130 Single Shaft Shredder | MT Makina',
          description: 'Heavy duty TSH-130 single shaft shredder - 45-110 kW motor, 1300x1600mm shredding area, 1800-2500 kg/h. Industrial grade. ✓ CE Certified ✓ 24/7 Operation',
          keywords: ['TSH-130', 'single shaft shredder', 'heavy duty shredder', 'high capacity shredder'],
        },
        ru: {
          title: 'TSH-130 Одновальный Шредер (Single Shaft Shredder) | MT Makina',
          description: 'Шредер тяжелого класса TSH-130 - двигатель 45-110 кВт, 1800-2500 кг/ч. Промышленный уровень.',
          keywords: ['TSH-130', 'шредер тяжелого класса', 'высокая производительность'],
        },
        ar: {
          title: 'TSH-130 آلة تمزيق عمود واحد (Single Shaft Shredder) | MT Makina',
          description: 'آلة تمزيق ثقيلة TSH-130 - محرك 45-110 كيلوواط، 1800-2500 كجم/ساعة. درجة صناعية.',
          keywords: ['TSH-130', 'آلة تمزيق ثقيلة', 'سعة عالية'],
        }
      },
      'TSH-160': {
        tr: {
          title: 'TSH-160 Tek Şaftlı Parçalama Makinesi (Single Shaft Shredder) | MT Makina',
          description: 'TSH-160 tek şaftlı parçalama makinesi - 2x55-132 kW çift motor, 1600x1800mm parçalama alanı, 3500-4500 kg/saat. Mega kapasite. ✓ SCADA Entegrasyonu ✓ IoT',
          keywords: ['TSH-160', 'parçalama makinesi', 'mega kapasite shredder', 'çift motor parçalama'],
        },
        en: {
          title: 'TSH-160 Single Shaft Shredder | MT Makina',
          description: 'Mega capacity TSH-160 single shaft shredder - 2x55-132 kW dual motor, 1600x1800mm shredding area, 3500-4500 kg/h. ✓ SCADA Integration ✓ IoT Ready',
          keywords: ['TSH-160', 'single shaft shredder', 'mega capacity shredder', 'dual motor shredder'],
        },
        ru: {
          title: 'TSH-160 Одновальный Шредер (Single Shaft Shredder) | MT Makina',
          description: 'Шредер мега-мощности TSH-160 - двойной двигатель 2x55-132 кВт, 3500-4500 кг/ч. ✓ Интеграция SCADA ✓ IoT',
          keywords: ['TSH-160', 'мега шредер', 'двойной двигатель'],
        },
        ar: {
          title: 'TSH-160 آلة تمزيق عمود واحد (Single Shaft Shredder) | MT Makina',
          description: 'آلة تمزيق ضخمة TSH-160 - محرك مزدوج 2x55-132 كيلوواط، 3500-4500 كجم/ساعة. ✓ تكامل SCADA ✓ IoT',
          keywords: ['TSH-160', 'آلة تمزيق ضخمة', 'محرك مزدوج'],
        }
      },
      'TSH-200': {
        tr: {
          title: 'TSH-200 Tek Şaftlı Parçalama Makinesi (Single Shaft Shredder) | MT Makina',
          description: 'TSH-200 tek şaftlı parçalama makinesi - 2x75-160 kW çift motor, 2000x2300mm parçalama alanı, 4500-6000 kg/saat. Premium sınıf. ✓ AI Destekli ✓ 5 Yıl Garanti',
          keywords: ['TSH-200', 'parçalama makinesi', 'premium shredder', 'en büyük tek şaftlı'],
        },
        en: {
          title: 'TSH-200 Single Shaft Shredder | MT Makina',
          description: 'Premium class TSH-200 single shaft shredder - 2x75-160 kW dual motor, 2000x2300mm shredding area, 4500-6000 kg/h. ✓ AI Assisted ✓ 5 Year Warranty',
          keywords: ['TSH-200', 'single shaft shredder', 'premium shredder', 'largest single shaft'],
        },
        ru: {
          title: 'TSH-200 Одновальный Шредер (Single Shaft Shredder) | MT Makina',
          description: 'Премиум класс TSH-200 - двойной двигатель 2x75-160 кВт, 4500-6000 кг/ч. ✓ AI Ассистент ✓ 5 лет гарантии',
          keywords: ['TSH-200', 'премиум шредер', 'крупнейший одновальный'],
        },
        ar: {
          title: 'TSH-200 آلة تمزيق عمود واحد (Single Shaft Shredder) | MT Makina',
          description: 'فئة متميزة TSH-200 - محرك مزدوج 2x75-160 كيلوواط، 4500-6000 كجم/ساعة. ✓ مساعد AI ✓ ضمان 5 سنوات',
          keywords: ['TSH-200', 'آلة تمزيق متميزة', 'أكبر عمود واحد'],
        }
      }
    },
    'dual-shaft': {
      'CS-20': {
        tr: {
          title: 'CS-20 Çift Şaftlı Parçalama Makinesi (Dual Shaft Shredder) | MT Makina',
          description: 'CS-20 çift şaftlı parçalama makinesi - 2x7.5 kW motor, 200x400mm parçalama alanı, 200-400 kg/saat. Kompakt tasarım. ✓ CE Belgeli ✓ 2 Yıl Garanti',
          keywords: ['CS-20', 'çift şaftlı parçalama', 'dual shaft shredder', 'kompakt shredder'],
        },
        en: {
          title: 'CS-20 Dual Shaft Shredder | MT Makina',
          description: 'Compact CS-20 dual shaft shredder - 2x7.5 kW motor, 200x400mm shredding area, 200-400 kg/h. ✓ CE Certified ✓ 2 Year Warranty',
          keywords: ['CS-20', 'dual shaft shredder', 'compact shredder', 'industrial shredder'],
        },
        ru: {
          title: 'CS-20 Двухвальный Шредер (Dual Shaft Shredder) | MT Makina',
          description: 'Компактный двухвальный шредер CS-20 - 2x7.5 кВт, 200-400 кг/ч. ✓ Сертификат CE ✓ 2 года гарантии',
          keywords: ['CS-20', 'двухвальный шредер', 'компактный измельчитель'],
        },
        ar: {
          title: 'CS-20 آلة تمزيق عمود مزدوج (Dual Shaft Shredder) | MT Makina',
          description: 'آلة تمزيق عمود مزدوج مدمجة CS-20 - محرك 2x7.5 كيلوواط، 200-400 كجم/ساعة. ✓ معتمد CE ✓ ضمان سنتين',
          keywords: ['CS-20', 'آلة تمزيق عمود مزدوج', 'آلة مدمجة'],
        }
      },
      'CS-40': {
        tr: {
          title: 'CS-40 Çift Şaftlı Parçalama Makinesi (Dual Shaft Shredder) | MT Makina',
          description: 'CS-40 çift şaftlı parçalama makinesi - 2x15 kW motor, 400x600mm parçalama alanı, 400-800 kg/saat. ✓ CE Belgeli ✓ Profesyonel Çözüm',
          keywords: ['CS-40', 'çift şaftlı parçalama', 'dual shaft shredder', 'orta boy shredder'],
        },
        en: {
          title: 'CS-40 Dual Shaft Shredder | MT Makina',
          description: 'CS-40 dual shaft shredder - 2x15 kW motor, 400x600mm shredding area, 400-800 kg/h. ✓ CE Certified ✓ Professional Solution',
          keywords: ['CS-40', 'dual shaft shredder', 'medium shredder', 'industrial shredder'],
        },
        ru: {
          title: 'CS-40 Двухвальный Шредер (Dual Shaft Shredder) | MT Makina',
          description: 'Двухвальный шредер CS-40 - 2x15 кВт, 400-800 кг/ч. ✓ Сертификат CE ✓ Профессиональное решение',
          keywords: ['CS-40', 'двухвальный шредер', 'средний измельчитель'],
        },
        ar: {
          title: 'CS-40 آلة تمزيق عمود مزدوج (Dual Shaft Shredder) | MT Makina',
          description: 'آلة تمزيق عمود مزدوج CS-40 - محرك 2x15 كيلوواط، 400-800 كجم/ساعة. ✓ معتمد CE ✓ حل احترافي',
          keywords: ['CS-40', 'آلة تمزيق عمود مزدوج', 'آلة متوسطة'],
        }
      },
      'CS-60': {
        tr: {
          title: 'CS-60 Çift Şaftlı Parçalama Makinesi (Dual Shaft Shredder) | MT Makina',
          description: 'CS-60 çift şaftlı parçalama makinesi - 2x22 kW motor, 600x800mm parçalama alanı, 800-1500 kg/saat. ✓ CE Belgeli ✓ Yüksek Verimlilik',
          keywords: ['CS-60', 'çift şaftlı parçalama', 'dual shaft shredder', 'endüstriyel shredder'],
        },
        en: {
          title: 'CS-60 Dual Shaft Shredder | MT Makina',
          description: 'CS-60 dual shaft shredder - 2x22 kW motor, 600x800mm shredding area, 800-1500 kg/h. ✓ CE Certified ✓ High Efficiency',
          keywords: ['CS-60', 'dual shaft shredder', 'industrial shredder', 'high capacity'],
        },
        ru: {
          title: 'CS-60 Двухвальный Шредер (Dual Shaft Shredder) | MT Makina',
          description: 'Двухвальный шредер CS-60 - 2x22 кВт, 800-1500 кг/ч. ✓ Сертификат CE ✓ Высокая эффективность',
          keywords: ['CS-60', 'двухвальный шредер', 'промышленный измельчитель'],
        },
        ar: {
          title: 'CS-60 آلة تمزيق عمود مزدوج (Dual Shaft Shredder) | MT Makina',
          description: 'آلة تمزيق عمود مزدوج CS-60 - محرك 2x22 كيلوواط، 800-1500 كجم/ساعة. ✓ معتمد CE ✓ كفاءة عالية',
          keywords: ['CS-60', 'آلة تمزيق عمود مزدوج', 'آلة صناعية'],
        }
      },
      'CS-80': {
        tr: {
          title: 'CS-80 Çift Şaftlı Parçalama Makinesi (Dual Shaft Shredder) | MT Makina',
          description: 'CS-80 çift şaftlı parçalama makinesi - 2x30 kW motor, 800x1000mm parçalama alanı, 1500-2500 kg/saat. ✓ CE Belgeli ✓ Ağır Hizmet',
          keywords: ['CS-80', 'çift şaftlı parçalama', 'dual shaft shredder', 'ağır hizmet shredder'],
        },
        en: {
          title: 'CS-80 Dual Shaft Shredder | MT Makina',
          description: 'Heavy duty CS-80 dual shaft shredder - 2x30 kW motor, 800x1000mm shredding area, 1500-2500 kg/h. ✓ CE Certified ✓ Heavy Duty',
          keywords: ['CS-80', 'dual shaft shredder', 'heavy duty shredder', 'industrial shredder'],
        },
        ru: {
          title: 'CS-80 Двухвальный Шредер (Dual Shaft Shredder) | MT Makina',
          description: 'Двухвальный шредер CS-80 тяжелого класса - 2x30 кВт, 1500-2500 кг/ч. ✓ Сертификат CE ✓ Тяжелый класс',
          keywords: ['CS-80', 'двухвальный шредер', 'тяжелый класс'],
        },
        ar: {
          title: 'CS-80 آلة تمزيق عمود مزدوج (Dual Shaft Shredder) | MT Makina',
          description: 'آلة تمزيق عمود مزدوج ثقيلة CS-80 - محرك 2x30 كيلوواط، 1500-2500 كجم/ساعة. ✓ معتمد CE ✓ خدمة شاقة',
          keywords: ['CS-80', 'آلة تمزيق عمود مزدوج', 'آلة ثقيلة'],
        }
      },
      'CS-100': {
        tr: {
          title: 'CS-100 Çift Şaftlı Parçalama Makinesi (Dual Shaft Shredder) | MT Makina',
          description: 'CS-100 çift şaftlı parçalama makinesi - 2x45 kW motor, 1000x1200mm parçalama alanı, 2500-4000 kg/saat. ✓ CE Belgeli ✓ Profesyonel Sınıf',
          keywords: ['CS-100', 'çift şaftlı parçalama', 'dual shaft shredder', 'profesyonel shredder'],
        },
        en: {
          title: 'CS-100 Dual Shaft Shredder | MT Makina',
          description: 'Professional CS-100 dual shaft shredder - 2x45 kW motor, 1000x1200mm shredding area, 2500-4000 kg/h. ✓ CE Certified ✓ Professional Grade',
          keywords: ['CS-100', 'dual shaft shredder', 'professional shredder', 'high capacity'],
        },
        ru: {
          title: 'CS-100 Двухвальный Шредер (Dual Shaft Shredder) | MT Makina',
          description: 'Профессиональный двухвальный шредер CS-100 - 2x45 кВт, 2500-4000 кг/ч. ✓ Сертификат CE ✓ Профессиональный класс',
          keywords: ['CS-100', 'двухвальный шредер', 'профессиональный класс'],
        },
        ar: {
          title: 'CS-100 آلة تمزيق عمود مزدوج (Dual Shaft Shredder) | MT Makina',
          description: 'آلة تمزيق عمود مزدوج احترافية CS-100 - محرك 2x45 كيلوواط، 2500-4000 كجم/ساعة. ✓ معتمد CE ✓ درجة احترافية',
          keywords: ['CS-100', 'آلة تمزيق عمود مزدوج', 'آلة احترافية'],
        }
      },
      'CS-120': {
        tr: {
          title: 'CS-120 Çift Şaftlı Parçalama Makinesi (Dual Shaft Shredder) | MT Makina',
          description: 'CS-120 çift şaftlı parçalama makinesi - 2x55 kW motor, 1200x1400mm parçalama alanı, 4000-6000 kg/saat. ✓ CE Belgeli ✓ Endüstriyel Kapasite',
          keywords: ['CS-120', 'çift şaftlı parçalama', 'dual shaft shredder', 'endüstriyel kapasite'],
        },
        en: {
          title: 'CS-120 Dual Shaft Shredder | MT Makina',
          description: 'Industrial CS-120 dual shaft shredder - 2x55 kW motor, 1200x1400mm shredding area, 4000-6000 kg/h. ✓ CE Certified ✓ Industrial Capacity',
          keywords: ['CS-120', 'dual shaft shredder', 'industrial shredder', 'large capacity'],
        },
        ru: {
          title: 'CS-120 Двухвальный Шредер (Dual Shaft Shredder) | MT Makina',
          description: 'Промышленный двухвальный шредер CS-120 - 2x55 кВт, 4000-6000 кг/ч. ✓ Сертификат CE ✓ Промышленная мощность',
          keywords: ['CS-120', 'двухвальный шредер', 'промышленная мощность'],
        },
        ar: {
          title: 'CS-120 آلة تمزيق عمود مزدوج (Dual Shaft Shredder) | MT Makina',
          description: 'آلة تمزيق عمود مزدوج صناعية CS-120 - محرك 2x55 كيلوواط، 4000-6000 كجم/ساعة. ✓ معتمد CE ✓ سعة صناعية',
          keywords: ['CS-120', 'آلة تمزيق عمود مزدوج', 'آلة صناعية'],
        }
      },
      'CS-150': {
        tr: {
          title: 'CS-150 Çift Şaftlı Parçalama Makinesi (Dual Shaft Shredder) | MT Makina',
          description: 'CS-150 çift şaftlı parçalama makinesi - 2x75 kW motor, 1500x1600mm parçalama alanı, 6000-8000 kg/saat. ✓ CE Belgeli ✓ Yüksek Kapasite',
          keywords: ['CS-150', 'çift şaftlı parçalama', 'dual shaft shredder', 'yüksek kapasite'],
        },
        en: {
          title: 'CS-150 Dual Shaft Shredder | MT Makina',
          description: 'High capacity CS-150 dual shaft shredder - 2x75 kW motor, 1500x1600mm shredding area, 6000-8000 kg/h. ✓ CE Certified ✓ High Capacity',
          keywords: ['CS-150', 'dual shaft shredder', 'high capacity shredder', 'industrial'],
        },
        ru: {
          title: 'CS-150 Двухвальный Шредер (Dual Shaft Shredder) | MT Makina',
          description: 'Двухвальный шредер высокой мощности CS-150 - 2x75 кВт, 6000-8000 кг/ч. ✓ Сертификат CE ✓ Высокая мощность',
          keywords: ['CS-150', 'двухвальный шредер', 'высокая мощность'],
        },
        ar: {
          title: 'CS-150 آلة تمزيق عمود مزدوج (Dual Shaft Shredder) | MT Makina',
          description: 'آلة تمزيق عمود مزدوج عالية السعة CS-150 - محرك 2x75 كيلوواط، 6000-8000 كجم/ساعة. ✓ معتمد CE ✓ سعة عالية',
          keywords: ['CS-150', 'آلة تمزيق عمود مزدوج', 'سعة عالية'],
        }
      },
      'CS-180': {
        tr: {
          title: 'CS-180 Çift Şaftlı Parçalama Makinesi (Dual Shaft Shredder) | MT Makina',
          description: 'CS-180 çift şaftlı parçalama makinesi - 2x90 kW motor, 1800x1800mm parçalama alanı, 8000-12000 kg/saat. ✓ CE Belgeli ✓ Mega Kapasite',
          keywords: ['CS-180', 'çift şaftlı parçalama', 'dual shaft shredder', 'mega kapasite'],
        },
        en: {
          title: 'CS-180 Dual Shaft Shredder | MT Makina',
          description: 'Mega capacity CS-180 dual shaft shredder - 2x90 kW motor, 1800x1800mm shredding area, 8000-12000 kg/h. ✓ CE Certified ✓ Mega Capacity',
          keywords: ['CS-180', 'dual shaft shredder', 'mega capacity', 'heavy industrial'],
        },
        ru: {
          title: 'CS-180 Двухвальный Шредер (Dual Shaft Shredder) | MT Makina',
          description: 'Двухвальный шредер мега-мощности CS-180 - 2x90 кВт, 8000-12000 кг/ч. ✓ Сертификат CE ✓ Мега мощность',
          keywords: ['CS-180', 'двухвальный шредер', 'мега мощность'],
        },
        ar: {
          title: 'CS-180 آلة تمزيق عمود مزدوج (Dual Shaft Shredder) | MT Makina',
          description: 'آلة تمزيق عمود مزدوج ضخمة CS-180 - محرك 2x90 كيلوواط، 8000-12000 كجم/ساعة. ✓ معتمد CE ✓ سعة ضخمة',
          keywords: ['CS-180', 'آلة تمزيق عمود مزدوج', 'سعة ضخمة'],
        }
      },
      'CS-200': {
        tr: {
          title: 'CS-200 Çift Şaftlı Parçalama Makinesi (Dual Shaft Shredder) | MT Makina',
          description: 'CS-200 çift şaftlı parçalama makinesi - 2x110 kW motor, 2000x2000mm parçalama alanı, 12000-18000 kg/saat. ✓ CE Belgeli ✓ Premium Sınıf ✓ En Yüksek Kapasite',
          keywords: ['CS-200', 'çift şaftlı parçalama', 'dual shaft shredder', 'premium shredder', 'en büyük'],
        },
        en: {
          title: 'CS-200 Dual Shaft Shredder | MT Makina',
          description: 'Premium class CS-200 dual shaft shredder - 2x110 kW motor, 2000x2000mm shredding area, 12000-18000 kg/h. ✓ CE Certified ✓ Premium Class ✓ Highest Capacity',
          keywords: ['CS-200', 'dual shaft shredder', 'premium shredder', 'largest capacity'],
        },
        ru: {
          title: 'CS-200 Двухвальный Шредер (Dual Shaft Shredder) | MT Makina',
          description: 'Двухвальный шредер премиум-класса CS-200 - 2x110 кВт, 12000-18000 кг/ч. ✓ Сертификат CE ✓ Премиум класс ✓ Максимальная мощность',
          keywords: ['CS-200', 'двухвальный шредер', 'премиум класс'],
        },
        ar: {
          title: 'CS-200 آلة تمزيق عمود مزدوج (Dual Shaft Shredder) | MT Makina',
          description: 'آلة تمزيق عمود مزدوج من الفئة الممتازة CS-200 - محرك 2x110 كيلوواط، 12000-18000 كجم/ساعة. ✓ معتمد CE ✓ فئة متميزة ✓ أعلى سعة',
          keywords: ['CS-200', 'آلة تمزيق عمود مزدوج', 'فئة متميزة'],
        }
      }
    },
    'wood': {
      'TSY-100': {
        tr: {
          title: 'TSY-100 Ağaç Parçalama ve Öğütme Makinesi (Wood Grinder) | MT Makina',
          description: 'TSY-100 Yatay Ağaç Parçalama Makinesi - 45-55 kW motor, 1000mm rotor. Palet, dal ve marangoz atıkları için ideal. Kompakt tasarım, yüksek verimlilik.',
          keywords: ['TSY-100', 'ağaç parçalama makinesi fiyat', 'orta boy ağaç kırıcı', 'palet kırma makinesi', '55kw shredder']
        },
        en: {
          title: 'TSY-100 Wood Grinder | MT Makina',
          description: 'Heavy duty TSY-100 horizontal wood shredder - 45-55 kW motor, 1000mm rotor. High efficiency solution for pallets, branches and carpentry waste. Cost-effective, compact design.',
          keywords: ['TSY-100', 'wood shredder manufacturer', 'wood grinder Turkey', 'pallet crusher for sale', 'industrial wood shredder']
        },
        ru: {
          title: 'TSY-100 Измельчитель Древесины (Wood Grinder) | MT Makina',
          description: 'Горизонтальный шредер дерева TSY-100 - двигатель 45-55 кВт, ротор 1000 мм. Идеально для поддонов, веток и столярных отходов. Компактный дизайн.',
          keywords: ['TSY-100', 'цена шредера дерева', 'дробилка для поддонов', 'шредер 55квт']
        },
        ar: {
          title: 'TSY-100 آلة طحن الخشب (Wood Grinder) | MT Makina',
          description: 'آلة تمزيق الخشب الأفقية TSY-100 - محرك 45-55 كيلوواط، دوار 1000 مم. مثالية للمنصات والفروع ونفايات النجارة. تصميم مدمج.',
          keywords: ['TSY-100', 'سعر كسارة الخشب', 'طاحونة خشب متوسطة', 'كسارة منصات']
        }
      },
      'TSY-150': {
        tr: {
          title: 'TSY-150 Ağaç Parçalama ve Öğütme Makinesi (Wood Grinder) | MT Makina',
          description: 'TSY-150 Profesyonel Ağaç Parçalama - 75-110 kW çift motor, 1500mm rotor. Kütük, orman atığı ve biyokütle için. Yüksek kapasite, ağır hizmet tipi.',
          keywords: ['TSY-150', 'endüstriyel ağaç parçalama', 'kütük parçalama makinesi', 'biyokütle kırıcı', 'orman atığı parçalama']
        },
        en: {
          title: 'TSY-150 Wood Grinder | MT Makina',
          description: 'Heavy duty TSY-150 professional wood shredder - 75-110 kW dual motor, 1500mm rotor. High efficiency for logs, forestry waste and biomass. Turnkey project solutions.',
          keywords: ['TSY-150', 'industrial wood shredder manufacturer', 'log shredder Turkey', 'biomass grinder for sale', 'heavy duty wood shredder']
        },
        ru: {
          title: 'TSY-150 Измельчитель Древесины (Wood Grinder) | MT Makina',
          description: 'Профессиональный шредер дерева TSY-150 - два двигателя 75-110 кВт, ротор 1500 мм. Для бревен, лесных отходов и биомассы. Высокая производительность.',
          keywords: ['TSY-150', 'промышленный шредер', 'измельчитель бревен', 'биомасса']
        },
        ar: {
          title: 'TSY-150 آلة طحن الخشب (Wood Grinder) | MT Makina',
          description: 'آلة تمزيق الخشب الاحترافية TSY-150 - محرك مزدوج 75-110 كيلوواط، دوار 1500 مم. للجذوع ونفايات الغابات والكتلة الحيوية. سعة عالية.',
          keywords: ['TSY-150', 'كسارة خشب صناعية', 'تمزيق جذوع', 'طاحونة كتلة حيوية']
        }
      },
      'TSY-200': {
        tr: {
          title: 'TSY-200 Ağaç Parçalama ve Öğütme Makinesi (Wood Grinder) | MT Makina',
          description: 'TSY-200 Yüksek Kapasiteli Ağaç Öğütme - 90-200 kW ultra güçlü motorlar, 2000mm rotor. Enerji santralleri ve büyük tesisler için. Maksimum performans.',
          keywords: ['TSY-200', 'ağaç öğütme makinesi', 'biyokütle santrali kırıcı', 'dev ağaç parçalama', '200kw shredder']
        },
        en: {
          title: 'TSY-200 Wood Grinder | MT Makina',
          description: 'Heavy duty TSY-200 high capacity wood grinder - 90-200 kW ultra powerful motors, 2000mm rotor. High efficiency for power plants and large facilities. Cost-effective turnkey projects.',
          keywords: ['TSY-200', 'wood grinder manufacturer', 'biomass plant shredder Turkey', 'industrial wood grinder for sale', 'heavy duty wood shredder']
        },
        ru: {
          title: 'TSY-200 Измельчитель Древесины (Wood Grinder) | MT Makina',
          description: 'Высокопроизводительный шредер TSY-200 - двигатели 90-200 кВт, ротор 2000 мм. Для электростанций и крупных объектов. Максимальная производительность.',
          keywords: ['TSY-200', 'измельчитель дерева премиум', 'дробилка для электростанций', 'мощный шредер']
        },
        ar: {
          title: 'TSY-200 آلة طحن الخشب (Wood Grinder) | MT Makina',
          description: 'طاحونة خشب عالية السعة TSY-200 - محركات فائقة القوة 90-200 كيلوواط، دوار 2000 مم. لمحطات الطاقة والمرافق الكبيرة. أقصى أداء.',
          keywords: ['TSY-200', 'آلة طحن خشب', 'كسارة محطة كتلة حيوية', 'كسارة خشب ضخمة']
        }
      }
    },
    'glass': {
      'CK-200': {
        tr: {
          title: 'CK-200 Cam Şişe Kırma Makinesi (Glass Crusher) | MT Makina',
          description: 'CK-200 Kompakt Cam Kırıcı - 100-200 kg/saat. Oteller ve restoranlar için sessiz, güvenli, sıvı ayrıştırmalı. %80 hacim tasarrufu.',
          keywords: ['CK-200', 'otel tipi cam kırıcı', 'şişe kırma makinesi', 'sessiz cam kırıcı', 'restoran geri dönüşüm']
        },
        en: {
          title: 'CK-200 Glass Bottle Crusher | MT Makina',
          description: 'CK-200 Compact Glass Crusher - 100-200 kg/h. Quiet, safe, with liquid separation for hotels and restaurants. 80% volume saving.',
          keywords: ['CK-200', 'hotel glass crusher', 'bottle crushing machine', 'quiet glass crusher', 'restaurant recycling']
        },
        ru: {
          title: 'CK-200 Дробилка Стеклянных Бутылок (Glass Crusher) | MT Makina',
          description: 'Компактная дробилка CK-200 - 100-200 кг/ч. Тихая, безопасная, с отделением жидкости. Экономия объема 80%.',
          keywords: ['CK-200', 'дробилка для отелей', 'измельчитель бутылок', 'тихая дробилка']
        },
        ar: {
          title: 'CK-200 كسارة الزجاج (Glass Crusher) | MT Makina',
          description: 'كسارة زجاج مدمجة CK-200 - 100-200 كجم/ساعة. هادئة، آمنة، مع فصل السوائل. توفير 80٪ في الحجم.',
          keywords: ['CK-200', 'كسارة زجاج فنادق', 'آلة تكسير قوارير', 'كسارة زجاج هادئة']
        }
      },
      'CK-400': {
        tr: {
          title: 'CK-400 Cam Şişe Kırma Makinesi (Glass Crusher) | MT Makina',
          description: 'CK-400 Orta Boy Cam Kırıcı - 4-5.5 kW. 300-500 kg/saat kapasite. Büyük oteller, hastaneler ve AVM\'ler için güçlü çözüm.',
          keywords: ['CK-400', 'kavanoz kırma makinesi', 'cam atık makinesi', 'hastane atık kırıcı']
        },
        en: {
          title: 'CK-400 Glass Bottle Crusher | MT Makina',
          description: 'CK-400 Medium Glass Crusher - 4-5.5 kW. 300-500 kg/h capacity. Powerful solution for large hotels, hospitals and malls.',
          keywords: ['CK-400', 'jar crusher', 'glass waste machine', 'hospital waste crusher']
        },
        ru: {
          title: 'CK-400 Дробилка Стеклянных Бутылок (Glass Crusher) | MT Makina',
          description: 'Средняя дробилка CK-400 - 4-5.5 кВт. 300-500 кг/ч. Мощное решение для крупных отелей, больниц и ТЦ.',
          keywords: ['CK-400', 'дробилка банок', 'машина для отходов стекла']
        },
        ar: {
          title: 'CK-400 كسارة الزجاج (Glass Crusher) | MT Makina',
          description: 'كسارة زجاج متوسطة CK-400 - قوة 4-5.5 كيلوواط. سعة 300-500 كجم/ساعة. حل قوي للفنادق الكبيرة والمستشفيات.',
          keywords: ['CK-400', 'كسارة جرار', 'آلة نفايات الزجاج']
        }
      },
      'CKS-400': {
        tr: {
          title: 'CKS-400 Cam Şişe Kırma Makinesi (Glass Crusher) | MT Makina',
          description: 'CKS-400 Sanayi Tipi Cam Kırıcı - 5.5-7.5 kW. Konveyörlü besleme, yüksek kapasite. Geri dönüşüm tesisleri ve dolum fabrikaları için.',
          keywords: ['CKS-400', 'endüstriyel cam kırıcı', 'cam geri dönüşüm tesisi makinesi', 'otomatik cam kırma']
        },
        en: {
          title: 'CKS-400 Industrial Glass Crusher | MT Makina',
          description: 'CKS-400 Industrial Glass Crusher - 5.5-7.5 kW. Conveyor feeding, high capacity. For recycling plants and bottling factories.',
          keywords: ['CKS-400', 'industrial glass crusher', 'glass recycling plant machine', 'automatic glass crushing']
        },
        ru: {
          title: 'CKS-400 Промышленная Дробилка Стекла (Glass Crusher) | MT Makina',
          description: 'Промышленная дробилка CKS-400 - 5.5-7.5 кВт. Конвейерная подача. Для перерабатывающих заводов.',
          keywords: ['CKS-400', 'промышленная дробилка стекла', 'завод по переработке стекла']
        },
        ar: {
          title: 'CKS-400 كسارة الزجاج الصناعية (Glass Crusher) | MT Makina',
          description: 'كسارة زجاج صناعية CKS-400 - قوة 5.5-7.5 كيلوواط. تغذية بالناقل. لمصانع إعادة التدوير ومصانع التعبئة.',
          keywords: ['CKS-400', 'كسارة زجاج صناعية', 'آلة مصنع إعادة تدوير الزجاج']
        }
      },
      'pallet': {
        'TSV-140': {
          tr: {
            title: 'TSV-140 Palet Parçalama Makinesi (Pallet Shredder) | MT Makina',
            description: 'TSV-140 palet parçalama makinesi - 30-55 kW motor, 1400mm rotor. Ahşap palet, odun parçalama. ✓ CE Belgeli ✓ 2 Yıl Garanti',
            keywords: ['TSV-140', 'palet parçalama', 'pallet shredder', 'odun parçalama'],
          },
          en: {
            title: 'TSV-140 Pallet Shredder | MT Makina',
            description: 'TSV-140 pallet shredder - 30-55 kW motor, 1400mm rotor. Wooden pallet, wood shredding. ✓ CE Certified ✓ 2 Year Warranty',
            keywords: ['TSV-140', 'pallet shredder', 'wood shredder', 'chipper'],
          },
          ru: {
            title: 'TSV-140 Шредер Поддонов (Pallet Shredder) | MT Makina',
            description: 'Шредер поддонов TSV-140 - 30-55 кВт, ротор 1400 мм. Деревянные поддоны, измельчение древесины. ✓ Сертификат CE ✓ 2 года гарантии',
            keywords: ['TSV-140', 'шредер поддонов', 'дробилка дерева'],
          },
          ar: {
            title: 'TSV-140 آلة تمزيق المنصات (Pallet Shredder) | MT Makina',
            description: 'آلة تمزيق المنصات TSV-140 - محرك 30-55 كيلوواط، دوار 1400 مم. منصات خشبية، تمزيق الخشب. ✓ معتمد CE ✓ ضمان سنتين',
            keywords: ['TSV-140', 'آلة تمزيق المنصات', 'كسارة خشب'],
          }
        },
        'TSV-200': {
          tr: {
            title: 'TSV-200 Palet Parçalama Makinesi (Pallet Shredder) | MT Makina',
            description: 'TSV-200 palet parçalama makinesi - 45-90 kW motor, 2000mm rotor. Yüksek kapasite palet ve odun parçalama. ✓ CE Belgeli ✓ Profesyonel Sınıf',
            keywords: ['TSV-200', 'palet parçalama', 'pallet shredder', 'yüksek kapasite'],
          },
          en: {
            title: 'TSV-200 Pallet Shredder | MT Makina',
            description: 'TSV-200 pallet shredder - 45-90 kW motor, 2000mm rotor. High capacity pallet and wood shredding. ✓ CE Certified ✓ Professional Grade',
            keywords: ['TSV-200', 'pallet shredder', 'high capacity', 'wood chipper'],
          },
          ru: {
            title: 'TSV-200 Шредер Поддонов (Pallet Shredder) | MT Makina',
            description: 'Шредер поддонов TSV-200 - 45-90 кВт, ротор 2000 мм. Высокая производительность. ✓ Сертификат CE ✓ Профессиональный класс',
            keywords: ['TSV-200', 'шредер поддонов', 'высокая производительность'],
          },
          ar: {
            title: 'TSV-200 آلة تمزيق المنصات (Pallet Shredder) | MT Makina',
            description: 'آلة تمزيق المنصات TSV-200 - محرك 45-90 كيلوواط، دوار 2000 مم. سعة عالية. ✓ معتمد CE ✓ درجة احترافية',
            keywords: ['TSV-200', 'آلة تمزيق المنصات', 'سعة عالية'],
          }
        },
        'TSVX-200': {
          tr: {
            title: 'TSVX-200 Palet Parçalama Makinesi (Pallet Shredder) | MT Makina',
            description: 'TSVX-200 premium palet parçalama makinesi - 75-132 kW çift motor, 2000mm rotor. En yüksek kapasite. ✓ CE Belgeli ✓ Premium Sınıf',
            keywords: ['TSVX-200', 'palet parçalama', 'pallet shredder', 'premium'],
          },
          en: {
            title: 'TSVX-200 Pallet Shredder | MT Makina',
            description: 'TSVX-200 premium pallet shredder - 75-132 kW dual motor, 2000mm rotor. Highest capacity. ✓ CE Certified ✓ Premium Class',
            keywords: ['TSVX-200', 'pallet shredder', 'premium', 'highest capacity'],
          },
          ru: {
            title: 'TSVX-200 Шредер Поддонов (Pallet Shredder) | MT Makina',
            description: 'Премиум шредер поддонов TSVX-200 - двойной двигатель 75-132 кВт, ротор 2000 мм. Максимальная мощность. ✓ Сертификат CE ✓ Премиум класс',
            keywords: ['TSVX-200', 'шредер поддонов премиум', 'максимальная мощность'],
          },
          ar: {
            title: 'TSVX-200 آلة تمزيق المنصات (Pallet Shredder) | MT Makina',
            description: 'آلة تمزيق المنصات الممتازة TSVX-200 - محرك مزدوج 75-132 كيلوواط، دوار 2000 مم. أعلى سعة. ✓ معتمد CE ✓ فئة متميزة',
            keywords: ['TSVX-200', 'آلة تمزيق المنصات متميزة', 'أعلى سعة'],
          }
        }
      },
      'harddisk': {
        'DATABER-S': {
          tr: {
            title: 'DATABER-S Harddisk İmha Makinesi (Hard Disk Destroyer) | MT Makina',
            description: 'DATABER-S harddisk imha makinesi - Kompakt tasarım, GDPR uyumlu veri imhası. Ofis tipi güvenli veri yok etme. ✓ NSA Onaylı ✓ CE Belgeli',
            keywords: ['DATABER-S', 'harddisk imha', 'hard disk destroyer', 'veri imha'],
          },
          en: {
            title: 'DATABER-S Hard Disk Destroyer | MT Makina',
            description: 'DATABER-S hard disk destroyer - Compact design, GDPR compliant data destruction. Office type secure data erasure. ✓ NSA Approved ✓ CE Certified',
            keywords: ['DATABER-S', 'hard disk destroyer', 'data destruction', 'GDPR'],
          },
          ru: {
            title: 'DATABER-S Уничтожитель Жестких Дисков (Hard Disk Destroyer) | MT Makina',
            description: 'Уничтожитель жестких дисков DATABER-S - компактный дизайн, соответствие GDPR. Офисный тип. ✓ Одобрен NSA ✓ Сертификат CE',
            keywords: ['DATABER-S', 'уничтожитель дисков', 'уничтожение данных'],
          },
          ar: {
            title: 'DATABER-S آلة تدمير الأقراص الصلبة (Hard Disk Destroyer) | MT Makina',
            description: 'آلة تدمير الأقراص الصلبة DATABER-S - تصميم مدمج، متوافق مع GDPR. نوع المكتب. ✓ معتمد NSA ✓ معتمد CE',
            keywords: ['DATABER-S', 'تدمير القرص الصلب', 'تدمير البيانات'],
          }
        },
        'DATABER-D': {
          tr: {
            title: 'DATABER-D Harddisk İmha Makinesi (Hard Disk Destroyer) | MT Makina',
            description: 'DATABER-D harddisk imha makinesi - Orta kapasite, profesyonel veri imhası. Kurumsal kullanım için. ✓ NSA Onaylı ✓ CE Belgeli ✓ GDPR Uyumlu',
            keywords: ['DATABER-D', 'harddisk imha', 'hard disk destroyer', 'kurumsal'],
          },
          en: {
            title: 'DATABER-D Hard Disk Destroyer | MT Makina',
            description: 'DATABER-D hard disk destroyer - Medium capacity, professional data destruction. For corporate use. ✓ NSA Approved ✓ CE Certified ✓ GDPR Compliant',
            keywords: ['DATABER-D', 'hard disk destroyer', 'corporate', 'professional'],
          },
          ru: {
            title: 'DATABER-D Уничтожитель Жестких Дисков (Hard Disk Destroyer) | MT Makina',
            description: 'Уничтожитель жестких дисков DATABER-D - средняя мощность, профессиональное уничтожение данных. Для корпоративного использования. ✓ Одобрен NSA ✓ GDPR',
            keywords: ['DATABER-D', 'уничтожитель дисков', 'корпоративный'],
          },
          ar: {
            title: 'DATABER-D آلة تدمير الأقراص الصلبة (Hard Disk Destroyer) | MT Makina',
            description: 'آلة تدمير الأقراص الصلبة DATABER-D - سعة متوسطة، تدمير بيانات احترافي. للاستخدام المؤسسي. ✓ معتمد NSA ✓ متوافق GDPR',
            keywords: ['DATABER-D', 'تدمير القرص الصلب', 'مؤسسي'],
          }
        },
        'DATABER-T': {
          tr: {
            title: 'DATABER-T Harddisk İmha Makinesi (Hard Disk Destroyer) | MT Makina',
            description: 'DATABER-T harddisk imha makinesi - Yüksek kapasite, endüstriyel veri imhası. Veri merkezleri için. ✓ NSA Onaylı ✓ CE Belgeli ✓ Premium Sınıf',
            keywords: ['DATABER-T', 'harddisk imha', 'hard disk destroyer', 'veri merkezi'],
          },
          en: {
            title: 'DATABER-T Hard Disk Destroyer | MT Makina',
            description: 'DATABER-T hard disk destroyer - High capacity, industrial data destruction. For data centers. ✓ NSA Approved ✓ CE Certified ✓ Premium Class',
            keywords: ['DATABER-T', 'hard disk destroyer', 'data center', 'industrial'],
          },
          ru: {
            title: 'DATABER-T Уничтожитель Жестких Дисков (Hard Disk Destroyer) | MT Makina',
            description: 'Уничтожитель жестких дисков DATABER-T - высокая мощность, промышленное уничтожение данных. Для дата-центров. ✓ Одобрен NSA ✓ Премиум класс',
            keywords: ['DATABER-T', 'уничтожитель дисков', 'дата-центр'],
          },
          ar: {
            title: 'DATABER-T آلة تدمير الأقراص الصلبة (Hard Disk Destroyer) | MT Makina',
            description: 'آلة تدمير الأقراص الصلبة DATABER-T - سعة عالية، تدمير بيانات صناعي. لمراكز البيانات. ✓ معتمد NSA ✓ فئة متميزة',
            keywords: ['DATABER-T', 'تدمير القرص الصلب', 'مركز البيانات'],
          }
        }
      },
      'tree-root': {
        'TW-100': {
          tr: {
            title: 'TW-100 Ağaç Kökü Parçalama Makinesi (Tree Root Shredder) | MT Makina',
            description: 'TW-100 ağaç kökü parçalama makinesi - 45-75 kW motor, 1000mm rotor. Kök, kütük ve orman atığı parçalama. ✓ CE Belgeli ✓ 2 Yıl Garanti',
            keywords: ['TW-100', 'ağaç kökü parçalama', 'tree root shredder', 'kütük parçalama'],
          },
          en: {
            title: 'TW-100 Tree Root Shredder | MT Makina',
            description: 'TW-100 tree root shredder - 45-75 kW motor, 1000mm rotor. Root, stump and forestry waste shredding. ✓ CE Certified ✓ 2 Year Warranty',
            keywords: ['TW-100', 'tree root shredder', 'stump grinder', 'forestry shredder'],
          },
          ru: {
            title: 'TW-100 Шредер Корней Деревьев (Tree Root Shredder) | MT Makina',
            description: 'Шредер корней деревьев TW-100 - 45-75 кВт, ротор 1000 мм. Корни, пни и лесные отходы. ✓ Сертификат CE ✓ 2 года гарантии',
            keywords: ['TW-100', 'шредер корней', 'дробилка пней'],
          },
          ar: {
            title: 'TW-100 آلة تمزيق جذور الأشجار (Tree Root Shredder) | MT Makina',
            description: 'آلة تمزيق جذور الأشجار TW-100 - محرك 45-75 كيلوواط، دوار 1000 مم. الجذور والجذوع ونفايات الغابات. ✓ معتمد CE ✓ ضمان سنتين',
            keywords: ['TW-100', 'آلة تمزيق جذور الأشجار', 'طاحونة الجذوع'],
          }
        },
        'TW-150': {
          tr: {
            title: 'TW-150 Ağaç Kökü Parçalama Makinesi (Tree Root Shredder) | MT Makina',
            description: 'TW-150 ağaç kökü parçalama makinesi - 75-110 kW motor, 1500mm rotor. Ağır hizmet tipi kök parçalama. ✓ CE Belgeli ✓ Profesyonel Sınıf',
            keywords: ['TW-150', 'ağaç kökü parçalama', 'tree root shredder', 'ağır hizmet'],
          },
          en: {
            title: 'TW-150 Tree Root Shredder | MT Makina',
            description: 'TW-150 tree root shredder - 75-110 kW motor, 1500mm rotor. Heavy duty root shredding. ✓ CE Certified ✓ Professional Grade',
            keywords: ['TW-150', 'tree root shredder', 'heavy duty', 'professional'],
          },
          ru: {
            title: 'TW-150 Шредер Корней Деревьев (Tree Root Shredder) | MT Makina',
            description: 'Шредер корней деревьев TW-150 - 75-110 кВт, ротор 1500 мм. Тяжелый класс. ✓ Сертификат CE ✓ Профессиональный класс',
            keywords: ['TW-150', 'шредер корней', 'тяжелый класс'],
          },
          ar: {
            title: 'TW-150 آلة تمزيق جذور الأشجار (Tree Root Shredder) | MT Makina',
            description: 'آلة تمزيق جذور الأشجار TW-150 - محرك 75-110 كيلوواط، دوار 1500 مم. خدمة شاقة. ✓ معتمد CE ✓ درجة احترافية',
            keywords: ['TW-150', 'آلة تمزيق جذور الأشجار', 'خدمة شاقة'],
          }
        },
        'TW-200': {
          tr: {
            title: 'TW-200 Ağaç Kökü Parçalama Makinesi (Tree Root Shredder) | MT Makina',
            description: 'TW-200 ağaç kökü parçalama makinesi - 110-160 kW çift motor, 2000mm rotor. En yüksek kapasite kök parçalama. ✓ CE Belgeli ✓ Premium Sınıf',
            keywords: ['TW-200', 'ağaç kökü parçalama', 'tree root shredder', 'premium'],
          },
          en: {
            title: 'TW-200 Tree Root Shredder | MT Makina',
            description: 'TW-200 tree root shredder - 110-160 kW dual motor, 2000mm rotor. Highest capacity root shredding. ✓ CE Certified ✓ Premium Class',
            keywords: ['TW-200', 'tree root shredder', 'highest capacity', 'premium'],
          },
          ru: {
            title: 'TW-200 Шредер Корней Деревьев (Tree Root Shredder) | MT Makina',
            description: 'Шредер корней деревьев TW-200 - двойной двигатель 110-160 кВт, ротор 2000 мм. Максимальная мощность. ✓ Сертификат CE ✓ Премиум класс',
            keywords: ['TW-200', 'шредер корней премиум', 'максимальная мощность'],
          },
          ar: {
            title: 'TW-200 آلة تمزيق جذور الأشجار (Tree Root Shredder) | MT Makina',
            description: 'آلة تمزيق جذور الأشجار TW-200 - محرك مزدوج 110-160 كيلوواط، دوار 2000 مم. أعلى سعة. ✓ معتمد CE ✓ فئة متميزة',
            keywords: ['TW-200', 'آلة تمزيق جذور الأشجار متميزة', 'أعلى سعة'],
          }
        }
      },
      'quad-shaft': {
        'DS-80': {
          tr: {
            title: 'DS-80 Dört Şaftlı Parçalama Makinesi (Quad Shaft Shredder) | MT Makina',
            description: 'DS-80 dört şaftlı parçalama makinesi - 4x15 kW motor, 800x800mm parçalama alanı, 1000-1500 kg/saat. İnce parçalama. ✓ CE Belgeli ✓ 2 Yıl Garanti',
            keywords: ['DS-80', 'dört şaftlı parçalama', 'quad shaft shredder', 'ince parçalama'],
          },
          en: {
            title: 'DS-80 Quad Shaft Shredder | MT Makina',
            description: 'DS-80 quad shaft shredder - 4x15 kW motor, 800x800mm shredding area, 1000-1500 kg/h. Fine shredding. ✓ CE Certified ✓ 2 Year Warranty',
            keywords: ['DS-80', 'quad shaft shredder', 'fine shredder', 'industrial shredder'],
          },
          ru: {
            title: 'DS-80 Четырехвальный Шредер (Quad Shaft Shredder) | MT Makina',
            description: 'Четырехвальный шредер DS-80 - 4x15 кВт, 1000-1500 кг/ч. Мелкое измельчение. ✓ Сертификат CE ✓ 2 года гарантии',
            keywords: ['DS-80', 'четырехвальный шредер', 'мелкое измельчение'],
          },
          ar: {
            title: 'DS-80 آلة تمزيق أربعة أعمدة (Quad Shaft Shredder) | MT Makina',
            description: 'آلة تمزيق أربعة أعمدة DS-80 - محرك 4x15 كيلوواط، 1000-1500 كجم/ساعة. تمزيق دقيق. ✓ معتمد CE ✓ ضمان سنتين',
            keywords: ['DS-80', 'آلة تمزيق أربعة أعمدة', 'تمزيق دقيق'],
          }
        },
        'DS-100': {
          tr: {
            title: 'DS-100 Dört Şaftlı Parçalama Makinesi (Quad Shaft Shredder) | MT Makina',
            description: 'DS-100 dört şaftlı parçalama makinesi - 4x22 kW motor, 1000x1000mm parçalama alanı, 1500-2500 kg/saat. Homojen çıkış. ✓ CE Belgeli ✓ Yüksek Verimlilik',
            keywords: ['DS-100', 'dört şaftlı parçalama', 'quad shaft shredder', 'homojen çıkış'],
          },
          en: {
            title: 'DS-100 Quad Shaft Shredder | MT Makina',
            description: 'DS-100 quad shaft shredder - 4x22 kW motor, 1000x1000mm shredding area, 1500-2500 kg/h. Uniform output. ✓ CE Certified ✓ High Efficiency',
            keywords: ['DS-100', 'quad shaft shredder', 'uniform output', 'industrial shredder'],
          },
          ru: {
            title: 'DS-100 Четырехвальный Шредер (Quad Shaft Shredder) | MT Makina',
            description: 'Четырехвальный шредер DS-100 - 4x22 кВт, 1500-2500 кг/ч. Однородный выход. ✓ Сертификат CE ✓ Высокая эффективность',
            keywords: ['DS-100', 'четырехвальный шредер', 'однородный выход'],
          },
          ar: {
            title: 'DS-100 آلة تمزيق أربعة أعمدة (Quad Shaft Shredder) | MT Makina',
            description: 'آلة تمزيق أربعة أعمدة DS-100 - محرك 4x22 كيلوواط، 1500-2500 كجم/ساعة. مخرج متجانس. ✓ معتمد CE ✓ كفاءة عالية',
            keywords: ['DS-100', 'آلة تمزيق أربعة أعمدة', 'مخرج متجانس'],
          }
        },
        'DS-150': {
          tr: {
            title: 'DS-150 Dört Şaftlı Parçalama Makinesi (Quad Shaft Shredder) | MT Makina',
            description: 'DS-150 dört şaftlı parçalama makinesi - 4x30 kW motor, 1500x1500mm parçalama alanı, 2500-4000 kg/saat. Profesyonel sınıf. ✓ CE Belgeli ✓ Ağır Hizmet',
            keywords: ['DS-150', 'dört şaftlı parçalama', 'quad shaft shredder', 'profesyonel'],
          },
          en: {
            title: 'DS-150 Quad Shaft Shredder | MT Makina',
            description: 'DS-150 quad shaft shredder - 4x30 kW motor, 1500x1500mm shredding area, 2500-4000 kg/h. Professional grade. ✓ CE Certified ✓ Heavy Duty',
            keywords: ['DS-150', 'quad shaft shredder', 'professional grade', 'heavy duty shredder'],
          },
          ru: {
            title: 'DS-150 Четырехвальный Шредер (Quad Shaft Shredder) | MT Makina',
            description: 'Четырехвальный шредер DS-150 - 4x30 кВт, 2500-4000 кг/ч. Профессиональный класс. ✓ Сертификат CE ✓ Тяжелый класс',
            keywords: ['DS-150', 'четырехвальный шредер', 'профессиональный класс'],
          },
          ar: {
            title: 'DS-150 آلة تمزيق أربعة أعمدة (Quad Shaft Shredder) | MT Makina',
            description: 'آلة تمزيق أربعة أعمدة DS-150 - محرك 4x30 كيلوواط، 2500-4000 كجم/ساعة. درجة احترافية. ✓ معتمد CE ✓ خدمة شاقة',
            keywords: ['DS-150', 'آلة تمزيق أربعة أعمدة', 'درجة احترافية'],
          }
        },
        'DS-200': {
          tr: {
            title: 'DS-200 Dört Şaftlı Parçalama Makinesi (Quad Shaft Shredder) | MT Makina',
            description: 'DS-200 dört şaftlı parçalama makinesi - 4x45 kW motor, 2000x2000mm parçalama alanı, 4000-6000 kg/saat. Premium sınıf. ✓ CE Belgeli ✓ En Yüksek Kapasite',
            keywords: ['DS-200', 'dört şaftlı parçalama', 'quad shaft shredder', 'premium', 'en büyük'],
          },
          en: {
            title: 'DS-200 Quad Shaft Shredder | MT Makina',
            description: 'DS-200 quad shaft shredder - 4x45 kW motor, 2000x2000mm shredding area, 4000-6000 kg/h. Premium class. ✓ CE Certified ✓ Highest Capacity',
            keywords: ['DS-200', 'quad shaft shredder', 'premium shredder', 'highest capacity'],
          },
          ru: {
            title: 'DS-200 Четырехвальный Шредер (Quad Shaft Shredder) | MT Makina',
            description: 'Четырехвальный шредер DS-200 премиум-класса - 4x45 кВт, 4000-6000 кг/ч. ✓ Сертификат CE ✓ Максимальная мощность',
            keywords: ['DS-200', 'четырехвальный шредер премиум', 'максимальная мощность'],
          },
          ar: {
            title: 'DS-200 آلة تمزيق أربعة أعمدة (Quad Shaft Shredder) | MT Makina',
            description: 'آلة تمزيق أربعة أعمدة DS-200 من الفئة الممتازة - محرك 4x45 كيلوواط، 4000-6000 كجم/ساعة. ✓ معتمد CE ✓ أعلى سعة',
            keywords: ['DS-200', 'آلة تمزيق أربعة أعمدة متميزة', 'أعلى سعة'],
          }
        }
      },
      'metal': {
        'RDM-100': {
          tr: {
            title: 'RDM-100 Metal Parçalama Makinesi (Metal Shredder) | Redmonster | MT Makina',
            description: 'RDM-100 metal parçalama makinesi Redmonster - 2x55 kW motor, 100-150 ton/gün kapasite. Hurda metal, beyaz eşya parçalama. ✓ CE Belgeli ✓ Ağır Hizmet',
            keywords: ['RDM-100', 'metal parçalama makinesi', 'redmonster', 'hurda parçalama'],
          },
          en: {
            title: 'RDM-100 Metal Shredder | Redmonster | MT Makina',
            description: 'RDM-100 metal shredder Redmonster - 2x55 kW motor, 100-150 ton/day capacity. Scrap metal, white goods shredding. ✓ CE Certified ✓ Heavy Duty',
            keywords: ['RDM-100', 'metal shredder', 'redmonster', 'scrap shredder'],
          },
          ru: {
            title: 'RDM-100 Шредер Металла (Metal Shredder) | Redmonster | MT Makina',
            description: 'Шредер металла RDM-100 Redmonster - 2x55 кВт, 100-150 т/день. Металлолом, бытовая техника. ✓ Сертификат CE ✓ Тяжелый класс',
            keywords: ['RDM-100', 'шредер металла', 'redmonster', 'измельчитель металлолома'],
          },
          ar: {
            title: 'RDM-100 آلة تمزيق المعادن (Metal Shredder) | Redmonster | MT Makina',
            description: 'آلة تمزيق المعادن RDM-100 Redmonster - محرك 2x55 كيلوواط، 100-150 طن/يوم. خردة المعادن، الأجهزة المنزلية. ✓ معتمد CE ✓ خدمة شاقة',
            keywords: ['RDM-100', 'آلة تمزيق المعادن', 'redmonster', 'كسارة الخردة'],
          }
        },
        'RDM-150': {
          tr: {
            title: 'RDM-150 Metal Parçalama Makinesi (Metal Shredder) | Redmonster | MT Makina',
            description: 'RDM-150 metal parçalama makinesi Redmonster - 2x75 kW motor, 150-200 ton/gün kapasite. Otomobil hurda, ELV parçalama. ✓ CE Belgeli ✓ Yüksek Kapasite',
            keywords: ['RDM-150', 'metal parçalama makinesi', 'redmonster', 'otomobil hurda'],
          },
          en: {
            title: 'RDM-150 Metal Shredder | Redmonster | MT Makina',
            description: 'RDM-150 metal shredder Redmonster - 2x75 kW motor, 150-200 ton/day capacity. Car scrap, ELV shredding. ✓ CE Certified ✓ High Capacity',
            keywords: ['RDM-150', 'metal shredder', 'redmonster', 'car shredder', 'ELV'],
          },
          ru: {
            title: 'RDM-150 Шредер Металла (Metal Shredder) | Redmonster | MT Makina',
            description: 'Шредер металла RDM-150 Redmonster - 2x75 кВт, 150-200 т/день. Автомобильный лом, ELV. ✓ Сертификат CE ✓ Высокая мощность',
            keywords: ['RDM-150', 'шредер металла', 'redmonster', 'автомобильный шредер'],
          },
          ar: {
            title: 'RDM-150 آلة تمزيق المعادن (Metal Shredder) | Redmonster | MT Makina',
            description: 'آلة تمزيق المعادن RDM-150 Redmonster - محرك 2x75 كيلوواط، 150-200 طن/يوم. خردة السيارات، ELV. ✓ معتمد CE ✓ سعة عالية',
            keywords: ['RDM-150', 'آلة تمزيق المعادن', 'redmonster', 'كسارة سيارات'],
          }
        },
        'RDM-180': {
          tr: {
            title: 'RDM-180 Metal Parçalama Makinesi (Metal Shredder) | Redmonster | MT Makina',
            description: 'RDM-180 metal parçalama makinesi Redmonster - 2x90 kW motor, 200-300 ton/gün kapasite. Ağır sanayi hurda parçalama. ✓ CE Belgeli ✓ Profesyonel Sınıf',
            keywords: ['RDM-180', 'metal parçalama makinesi', 'redmonster', 'ağır sanayi'],
          },
          en: {
            title: 'RDM-180 Metal Shredder | Redmonster | MT Makina',
            description: 'RDM-180 metal shredder Redmonster - 2x90 kW motor, 200-300 ton/day capacity. Heavy industry scrap shredding. ✓ CE Certified ✓ Professional Grade',
            keywords: ['RDM-180', 'metal shredder', 'redmonster', 'heavy industry shredder'],
          },
          ru: {
            title: 'RDM-180 Шредер Металла (Metal Shredder) | Redmonster | MT Makina',
            description: 'Шредер металла RDM-180 Redmonster - 2x90 кВт, 200-300 т/день. Тяжелая промышленность. ✓ Сертификат CE ✓ Профессиональный класс',
            keywords: ['RDM-180', 'шредер металла', 'redmonster', 'тяжелая промышленность'],
          },
          ar: {
            title: 'RDM-180 آلة تمزيق المعادن (Metal Shredder) | Redmonster | MT Makina',
            description: 'آلة تمزيق المعادن RDM-180 Redmonster - محرك 2x90 كيلوواط، 200-300 طن/يوم. صناعة ثقيلة. ✓ معتمد CE ✓ درجة احترافية',
            keywords: ['RDM-180', 'آلة تمزيق المعادن', 'redmonster', 'صناعة ثقيلة'],
          }
        },
        'RDM-200': {
          tr: {
            title: 'RDM-200 Metal Parçalama Makinesi (Metal Shredder) | Redmonster | MT Makina',
            description: 'RDM-200 metal parçalama makinesi Redmonster - 2x110 kW motor, 300-500 ton/gün kapasite. Premium sınıf mega metal parçalama. ✓ CE Belgeli ✓ En Yüksek Kapasite',
            keywords: ['RDM-200', 'metal parçalama makinesi', 'redmonster', 'mega kapasite', 'premium'],
          },
          en: {
            title: 'RDM-200 Metal Shredder | Redmonster | MT Makina',
            description: 'RDM-200 metal shredder Redmonster - 2x110 kW motor, 300-500 ton/day capacity. Premium class mega metal shredding. ✓ CE Certified ✓ Highest Capacity',
            keywords: ['RDM-200', 'metal shredder', 'redmonster', 'mega capacity', 'premium'],
          },
          ru: {
            title: 'RDM-200 Шредер Металла (Metal Shredder) | Redmonster | MT Makina',
            description: 'Шредер металла RDM-200 Redmonster премиум-класса - 2x110 кВт, 300-500 т/день. ✓ Сертификат CE ✓ Максимальная мощность',
            keywords: ['RDM-200', 'шредер металла', 'redmonster', 'максимальная мощность'],
          },
          ar: {
            title: 'RDM-200 آلة تمزيق المعادن (Metal Shredder) | Redmonster | MT Makina',
            description: 'آلة تمزيق المعادن RDM-200 Redmonster من الفئة الممتازة - محرك 2x110 كيلوواط، 300-500 طن/يوم. ✓ معتمد CE ✓ أعلى سعة',
            keywords: ['RDM-200', 'آلة تمزيق المعادن', 'redmonster', 'أعلى سعة'],
          }
        }
      },
      'mobile': {
        'TSM-150': {
          tr: {
            title: 'TSM-150 Mobil Parçalama Makinesi (Mobile Shredder) | MT Makina',
            description: 'TSM-150 mobil tek şaftlı parçalama makinesi - Dizel motor, 1500 kg/saat kapasite. Saha içi parçalama, taşınabilir. ✓ Trailer Üstü ✓ Yüksek Mobilite',
            keywords: ['TSM-150', 'mobil parçalama', 'mobile shredder', 'taşınabilir shredder'],
          },
          en: {
            title: 'TSM-150 Mobile Shredder | MT Makina',
            description: 'TSM-150 mobile single shaft shredder - Diesel engine, 1500 kg/h capacity. On-site shredding, portable. ✓ Trailer Mounted ✓ High Mobility',
            keywords: ['TSM-150', 'mobile shredder', 'portable shredder', 'on-site shredder'],
          },
          ru: {
            title: 'TSM-150 Мобильный Шредер (Mobile Shredder) | MT Makina',
            description: 'Мобильный одновальный шредер TSM-150 - дизельный двигатель, 1500 кг/ч. Измельчение на месте. ✓ На прицепе ✓ Высокая мобильность',
            keywords: ['TSM-150', 'мобильный шредер', 'передвижной измельчитель'],
          },
          ar: {
            title: 'TSM-150 آلة تمزيق متنقلة (Mobile Shredder) | MT Makina',
            description: 'آلة تمزيق متنقلة عمود واحد TSM-150 - محرك ديزل، 1500 كجم/ساعة. تمزيق في الموقع. ✓ على مقطورة ✓ تنقل عالي',
            keywords: ['TSM-150', 'آلة تمزيق متنقلة', 'آلة محمولة'],
          }
        },
        'TSM-300': {
          tr: {
            title: 'TSM-300 Mobil Parçalama Makinesi (Mobile Shredder) | MT Makina',
            description: 'TSM-300 mobil tek şaftlı parçalama makinesi - Dizel motor, 3000 kg/saat kapasite. Büyük saha projeleri için. ✓ Trailer Üstü ✓ Yüksek Kapasite',
            keywords: ['TSM-300', 'mobil parçalama', 'mobile shredder', 'büyük kapasite mobil'],
          },
          en: {
            title: 'TSM-300 Mobile Shredder | MT Makina',
            description: 'TSM-300 mobile single shaft shredder - Diesel engine, 3000 kg/h capacity. For large site projects. ✓ Trailer Mounted ✓ High Capacity',
            keywords: ['TSM-300', 'mobile shredder', 'high capacity mobile', 'portable shredder'],
          },
          ru: {
            title: 'TSM-300 Мобильный Шредер (Mobile Shredder) | MT Makina',
            description: 'Мобильный одновальный шредер TSM-300 - дизельный двигатель, 3000 кг/ч. Для крупных объектов. ✓ На прицепе ✓ Высокая мощность',
            keywords: ['TSM-300', 'мобильный шредер', 'высокая мощность'],
          },
          ar: {
            title: 'TSM-300 آلة تمزيق متنقلة (Mobile Shredder) | MT Makina',
            description: 'آلة تمزيق متنقلة عمود واحد TSM-300 - محرك ديزل، 3000 كجم/ساعة. للمشاريع الكبيرة. ✓ على مقطورة ✓ سعة عالية',
            keywords: ['TSM-300', 'آلة تمزيق متنقلة', 'سعة عالية'],
          }
        },
        'CSM-150': {
          tr: {
            title: 'CSM-150 Mobil Çift Şaftlı Parçalama Makinesi (Mobile Dual Shaft) | MT Makina',
            description: 'CSM-150 mobil çift şaftlı parçalama makinesi - Dizel motor, 1500 kg/saat kapasite. Saha içi ağır parçalama. ✓ Trailer Üstü ✓ Çift Şaft Gücü',
            keywords: ['CSM-150', 'mobil çift şaftlı', 'mobile dual shaft', 'ağır mobil parçalama'],
          },
          en: {
            title: 'CSM-150 Mobile Dual Shaft Shredder | MT Makina',
            description: 'CSM-150 mobile dual shaft shredder - Diesel engine, 1500 kg/h capacity. Heavy on-site shredding. ✓ Trailer Mounted ✓ Dual Shaft Power',
            keywords: ['CSM-150', 'mobile dual shaft', 'heavy mobile shredder', 'portable shredder'],
          },
          ru: {
            title: 'CSM-150 Мобильный Двухвальный Шредер (Mobile Dual Shaft) | MT Makina',
            description: 'Мобильный двухвальный шредер CSM-150 - дизельный двигатель, 1500 кг/ч. Тяжелое измельчение на месте. ✓ На прицепе ✓ Мощность двух валов',
            keywords: ['CSM-150', 'мобильный двухвальный', 'тяжелый мобильный'],
          },
          ar: {
            title: 'CSM-150 آلة تمزيق متنقلة عمود مزدوج (Mobile Dual Shaft) | MT Makina',
            description: 'آلة تمزيق متنقلة عمود مزدوج CSM-150 - محرك ديزل، 1500 كجم/ساعة. تمزيق ثقيل في الموقع. ✓ على مقطورة ✓ قوة العمود المزدوج',
            keywords: ['CSM-150', 'متنقلة عمود مزدوج', 'تمزيق ثقيل متنقل'],
          }
        },
        'CSM-200': {
          tr: {
            title: 'CSM-200 Mobil Çift Şaftlı Parçalama Makinesi (Mobile Dual Shaft) | MT Makina',
            description: 'CSM-200 mobil çift şaftlı parçalama makinesi - Dizel motor, 2000 kg/saat kapasite. En güçlü mobil çözüm. ✓ Trailer Üstü ✓ Premium Sınıf',
            keywords: ['CSM-200', 'mobil çift şaftlı', 'mobile dual shaft', 'premium mobil shredder'],
          },
          en: {
            title: 'CSM-200 Mobile Dual Shaft Shredder | MT Makina',
            description: 'CSM-200 mobile dual shaft shredder - Diesel engine, 2000 kg/h capacity. Most powerful mobile solution. ✓ Trailer Mounted ✓ Premium Class',
            keywords: ['CSM-200', 'mobile dual shaft', 'premium mobile shredder', 'powerful portable'],
          },
          ru: {
            title: 'CSM-200 Мобильный Двухвальный Шредер (Mobile Dual Shaft) | MT Makina',
            description: 'Мобильный двухвальный шредер CSM-200 - дизельный двигатель, 2000 кг/ч. Самый мощный мобильный. ✓ На прицепе ✓ Премиум класс',
            keywords: ['CSM-200', 'мобильный двухвальный премиум', 'самый мощный'],
          },
          ar: {
            title: 'CSM-200 آلة تمزيق متنقلة عمود مزدوج (Mobile Dual Shaft) | MT Makina',
            description: 'آلة تمزيق متنقلة عمود مزدوج CSM-200 - محرك ديزل، 2000 كجم/ساعة. أقوى حل متنقل. ✓ على مقطورة ✓ فئة متميزة',
            keywords: ['CSM-200', 'متنقلة عمود مزدوج متميزة', 'أقوى متنقلة'],
          }
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

// Model-specific review counts for unique ratings per product
const modelReviewCounts: { [model: string]: { rating: string; count: string } } = {
  // Single Shaft Models
  'TSH-60': { rating: '4.8', count: '42' },
  'TSH-80': { rating: '4.9', count: '55' },
  'TSH-100': { rating: '4.7', count: '38' },
  'TSH-130': { rating: '4.8', count: '29' },
  'TSH-160': { rating: '4.9', count: '47' },
  'TSH-200': { rating: '4.8', count: '33' },

  // Dual Shaft Models
  'CS-20': { rating: '4.7', count: '24' },
  'CS-40': { rating: '4.8', count: '36' },
  'CS-60': { rating: '4.9', count: '52' },
  'CS-80': { rating: '4.8', count: '45' },
  'CS-100': { rating: '4.7', count: '31' },
  'CS-120': { rating: '4.9', count: '58' },
  'CS-150': { rating: '4.8', count: '27' },
  'CS-180': { rating: '4.8', count: '43' },
  'CS-200': { rating: '4.9', count: '61' },

  // Quad Shaft Models
  'DS-80': { rating: '4.8', count: '35' },
  'DS-100': { rating: '4.9', count: '48' },
  'DS-150': { rating: '4.7', count: '26' },
  'DS-200': { rating: '4.8', count: '39' },

  // Metal Shredder Models
  'RDM-100': { rating: '4.9', count: '67' },
  'RDM-150': { rating: '4.8', count: '53' },
  'RDM-180': { rating: '4.7', count: '41' },
  'RDM-200': { rating: '4.9', count: '59' },

  // Mobile Shredder Models
  'TSM-150': { rating: '4.8', count: '32' },
  'TSM-300': { rating: '4.9', count: '44' },
  'CSM-150': { rating: '4.7', count: '28' },
  'CSM-200': { rating: '4.8', count: '51' },

  // Pallet Shredder Models
  'TSV-140': { rating: '4.9', count: '46' },
  'TSV-200': { rating: '4.8', count: '37' },
  'TSVX-200': { rating: '4.8', count: '54' },

  // Harddisk Destroyer Models
  'DATABER-S': { rating: '4.9', count: '63' },
  'DATABER-D': { rating: '4.8', count: '49' },
  'DATABER-T': { rating: '4.7', count: '34' },

  // Tree Root Shredder Models
  'TW-100': { rating: '4.8', count: '25' },
  'TW-150': { rating: '4.9', count: '40' },
  'TW-200': { rating: '4.8', count: '56' },

  // Wood Grinder Models
  'TSY-100': { rating: '4.7', count: '30' },
  'TSY-150': { rating: '4.9', count: '57' },
  'TSY-200': { rating: '4.8', count: '65' },

  // Glass Crusher Models
  'CK-200': { rating: '4.8', count: '23' },
  'CK-400': { rating: '4.9', count: '38' },
  'CKS-400': { rating: '4.7', count: '29' },
  'GB-300': { rating: '4.8', count: '44' }
};

// Generate structured data (JSON-LD) for product
export const generateProductStructuredData = (type: string, model: string) => {
  const categorySEO = getProductCategorySEO(type);
  const modelSEO = getProductModelSEO(type, model);

  // Get model-specific review data or default
  const reviewData = modelReviewCounts[model] || { rating: '4.8', count: '35' };

  return {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": `${model} ${categorySEO.title.split('|')[0].trim()}`,
    "description": modelSEO.description,
    "image": ["https://i.ibb.co/HLymGDrz/1-Mt-Makina-Logo.png"],
    "sku": model,
    "mpn": model,
    "brand": {
      "@type": "Brand",
      "name": "MT Makina"
    },
    "offers": {
      "@type": "AggregateOffer",
      "url": modelSEO.canonical,
      "priceCurrency": "USD",
      "lowPrice": "15000",
      "highPrice": "150000",
      "offerCount": "1",
      "priceValidUntil": "2026-12-31",
      "availability": "https://schema.org/InStock",
      "itemCondition": "https://schema.org/NewCondition",
      "seller": {
        "@type": "Organization",
        "name": "MT Makina"
      },
      "hasMerchantReturnPolicy": {
        "@type": "MerchantReturnPolicy",
        "applicableCountry": "TR",
        "returnPolicyCategory": "https://schema.org/MerchantReturnFiniteReturnWindow",
        "merchantReturnDays": 14
      },
      "shippingDetails": {
        "@type": "OfferShippingDetails",
        "shippingDestination": {
          "@type": "DefinedRegion",
          "addressCountry": "TR"
        },
        "deliveryTime": {
          "@type": "ShippingDeliveryTime",
          "handlingTime": {
            "@type": "QuantitativeValue",
            "minValue": 28,
            "maxValue": 42,
            "unitCode": "DAY"
          }
        }
      }
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": reviewData.rating,
      "bestRating": "5",
      "worstRating": "1",
      "ratingCount": reviewData.count,
      "reviewCount": reviewData.count
    },
    "manufacturer": {
      "@type": "Organization",
      "name": "MT Makina",
      "url": "https://www.parcalamamakinesi.com"
    },
    "url": modelSEO.canonical,
    "category": "Endüstriyel Parçalama Makineleri",
    "potentialAction": {
      "@type": "CommunicateAction",
      "name": "Teklif Al / Get Quote",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://www.parcalamamakinesi.com/tr/iletisim",
        "actionPlatform": [
          "http://schema.org/DesktopWebPlatform",
          "http://schema.org/MobileWebPlatform"
        ]
      },
      "description": "Request a quote for this industrial shredding machine"
    }
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
      "item": {
        "@type": "WebPage",
        "@id": item.url,
        "name": item.name
      }
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

// Generate Organization structured data for homepage (Enhanced for Google Knowledge Panel)
export const generateOrganizationStructuredData = () => {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://www.parcalamamakinesi.com/#organization",
    "name": "MT Makina",
    "alternateName": ["MT Makina Parçalama Makineleri", "MTMakina", "MT Makına"],
    "url": "https://www.parcalamamakinesi.com",
    "logo": {
      "@type": "ImageObject",
      "@id": "https://www.parcalamamakinesi.com/#logo",
      "url": "https://i.ibb.co/HLymGDrz/1-Mt-Makina-Logo.png",
      "contentUrl": "https://i.ibb.co/HLymGDrz/1-Mt-Makina-Logo.png",
      "width": 600,
      "height": 60,
      "caption": "MT Makina - Industrial Shredder Manufacturer Logo"
    },
    "image": "https://i.ibb.co/HLymGDrz/1-Mt-Makina-Logo.png",
    "description": "Türkiye'nin lider parçalama makinesi üreticisi. Tek şaftlı, çift şaftlı, metal parçalama makineleri, shredder sistemleri. 50+ ülkeye ihracat.",
    "foundingDate": "2004",
    "founder": {
      "@type": "Person",
      "name": "MT Makina"
    },
    "numberOfEmployees": {
      "@type": "QuantitativeValue",
      "minValue": 50,
      "maxValue": 100
    },
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
      "latitude": 41.0346,
      "longitude": 28.6773
    },
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "telephone": "+90-542-310-99-30",
        "contactType": "sales",
        "areaServed": "Worldwide",
        "availableLanguage": ["Turkish", "English", "Russian", "Arabic"]
      },
      {
        "@type": "ContactPoint",
        "telephone": "+90-850-259-0166",
        "contactType": "customer service",
        "areaServed": "TR",
        "availableLanguage": ["Turkish", "English"]
      }
    ],
    "sameAs": [
      "https://www.facebook.com/mtmakina",
      "https://www.instagram.com/mtmakina",
      "https://www.linkedin.com/company/mtmakina",
      "https://www.youtube.com/@mtmakina"
    ],
    "knowsAbout": [
      "Industrial Shredders",
      "Waste Management",
      "Recycling Equipment",
      "Metal Shredding",
      "Plastic Recycling",
      "Medical Waste Incinerators"
    ],
    "slogan": "Türkiye'nin 1 Numaralı Parçalama Makinesi Üreticisi"
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

// Generate HowTo structured data for process/tutorial content
export const generateHowToStructuredData = (howTo: {
  name: string;
  description: string;
  totalTime?: string;
  estimatedCost?: { currency: string; value: string };
  steps: { name: string; text: string; image?: string }[];
}) => {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": howTo.name,
    "description": howTo.description,
    ...(howTo.totalTime && { "totalTime": howTo.totalTime }),
    ...(howTo.estimatedCost && {
      "estimatedCost": {
        "@type": "MonetaryAmount",
        "currency": howTo.estimatedCost.currency,
        "value": howTo.estimatedCost.value
      }
    }),
    "step": howTo.steps.map((step, index) => ({
      "@type": "HowToStep",
      "position": index + 1,
      "name": step.name,
      "text": step.text,
      ...(step.image && { "image": step.image })
    }))
  };
};

// Generate VideoObject structured data
export const generateVideoStructuredData = (video: {
  name: string;
  description: string;
  thumbnailUrl: string;
  uploadDate: string;
  duration?: string;
  contentUrl?: string;
  embedUrl?: string;
}) => {
  return {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    "name": video.name,
    "description": video.description,
    "thumbnailUrl": video.thumbnailUrl,
    "uploadDate": video.uploadDate,
    ...(video.duration && { "duration": video.duration }),
    ...(video.contentUrl && { "contentUrl": video.contentUrl }),
    ...(video.embedUrl && { "embedUrl": video.embedUrl }),
    "publisher": {
      "@type": "Organization",
      "name": "MT Makina",
      "logo": {
        "@type": "ImageObject",
        "url": "https://i.ibb.co/HLymGDrz/1-Mt-Makina-Logo.png"
      }
    }
  };
};

// Generate Product List structured data for Google Rich Results (All Products)
export const generateProductListStructuredData = (language: Language = 'tr') => {
  const baseUrl = 'https://www.parcalamamakinesi.com';

  // Product data with multilingual support
  const products = [
    {
      name: { tr: 'Tek Şaftlı Parçalama Makinesi', en: 'Single Shaft Shredder', ru: 'Одновальный Шредер', ar: 'آلة تمزيق عمود واحد' },
      image: 'https://i.ibb.co/gb3Bhj2R/1-1.png',
      slug: 'single-shaft',
      description: { tr: 'Plastik, ahşap, kağıt parçalama için TSH serisi', en: 'TSH series for plastic, wood, paper shredding', ru: 'Серия TSH для пластика, дерева, бумаги', ar: 'سلسلة TSH للبلاستيك والخشب والورق' }
    },
    {
      name: { tr: 'Çift Şaftlı Parçalama Makinesi', en: 'Double Shaft Shredder', ru: 'Двухвальный Шредер', ar: 'آلة تمزيق ثنائية العمود' },
      image: 'https://i.ibb.co/Y44y4KHc/cs-double-shaft-shredder-20.png',
      slug: 'dual-shaft',
      description: { tr: 'Metal, lastik, hurda parçalama için CS serisi', en: 'CS series for metal, tire, scrap shredding', ru: 'Серия CS для металла, шин, металлолома', ar: 'سلسلة CS للمعادن والإطارات والخردة' }
    },
    {
      name: { tr: 'Dört Şaftlı Parçalama Makinesi', en: 'Quad Shaft Shredder', ru: 'Четырехвальный Шредер', ar: 'آلة تمزيق أربعة أعمدة' },
      image: 'https://i.ibb.co/SDjBQ9cq/1-9.png',
      slug: 'quad-shaft',
      description: { tr: 'İnce parçalama için DS serisi', en: 'DS series for fine shredding', ru: 'Серия DS для мелкого измельчения', ar: 'سلسلة DS للتمزيق الدقيق' }
    },
    {
      name: { tr: 'Metal Parçalama Makinesi', en: 'Metal Shredder', ru: 'Шредер Металла', ar: 'آلة تمزيق المعادن' },
      image: 'https://i.ibb.co/m5xLp46J/1-1.png',
      slug: 'metal',
      description: { tr: 'Hurda metal, araç parçalama Redmonster serisi', en: 'Redmonster series for scrap metal, car shredding', ru: 'Серия Redmonster для металлолома', ar: 'سلسلة Redmonster للخردة المعدنية' }
    },
    {
      name: { tr: 'Mobil Kırıcı', en: 'Mobile Crusher', ru: 'Мобильная Дробилка', ar: 'كسارة متنقلة' },
      image: 'https://i.ibb.co/Ndfqm2fm/organic-waste-shredder-2.png',
      slug: 'mobile',
      description: { tr: 'Saha içi parçalama için mobil sistemler', en: 'Mobile systems for on-site shredding', ru: 'Мобильные системы для измельчения', ar: 'أنظمة متنقلة للتمزيق في الموقع' }
    },
    {
      name: { tr: 'Palet Parçalama Makinesi', en: 'Pallet Shredder', ru: 'Шредер Поддонов', ar: 'آلة تمزيق المنصات' },
      image: 'https://i.ibb.co/svR9Kdq7/1-7.png',
      slug: 'pallet',
      description: { tr: 'Ahşap palet parçalama için TSV serisi', en: 'TSV series for wooden pallet shredding', ru: 'Серия TSV для деревянных поддонов', ar: 'سلسلة TSV للمنصات الخشبية' }
    },
    {
      name: { tr: 'Harddisk İmha Makinesi', en: 'Hard Disk Destroyer', ru: 'Уничтожитель Дисков', ar: 'آلة تدمير الأقراص الصلبة' },
      image: 'https://i.ibb.co/7JsNwKsS/hard-disk-devre-karti-imha-parcalama-makinesi-1.png',
      slug: 'harddisk',
      description: { tr: 'Veri güvenliği için DATABER serisi', en: 'DATABER series for data security', ru: 'Серия DATABER для безопасности данных', ar: 'سلسلة DATABER لأمن البيانات' }
    },
    {
      name: { tr: 'Ağaç Kökü Parçalama Makinesi', en: 'Tree Root Shredder', ru: 'Шредер Корней', ar: 'آلة تمزيق جذور الأشجار' },
      image: 'https://i.ibb.co/zHTgTRVC/agac-koku-parcalama-makinesi-sabit-1.png',
      slug: 'tree-root',
      description: { tr: 'Ağaç kökü, kütük parçalama için TW serisi', en: 'TW series for tree root, stump shredding', ru: 'Серия TW для корней и пней', ar: 'سلسلة TW لجذور الأشجار والجذوع' }
    },
    {
      name: { tr: 'Ağaç Parçalama Öğütme Makinesi', en: 'Wood Grinding Machine', ru: 'Измельчитель Древесины', ar: 'آلة طحن الخشب' },
      image: 'https://i.ibb.co/JFxCGnpc/agac-parcalama-ogutme-makinesi-1.png',
      slug: 'wood',
      description: { tr: 'Biyokütle, dal parçalama için TSY serisi', en: 'TSY series for biomass, branch shredding', ru: 'Серия TSY для биомассы', ar: 'سلسلة TSY للكتلة الحيوية' }
    },
    {
      name: { tr: 'Cam Şişe Kırma Makinesi', en: 'Glass Bottle Crusher', ru: 'Дробилка Стекла', ar: 'كسارة زجاجات' },
      image: 'https://i.ibb.co/VW48hDXY/glass-bottle-crusher-1.png',
      slug: 'glass',
      description: { tr: 'Sıvı ayrıştırmalı cam kırma CK serisi', en: 'CK series glass crusher with liquid separation', ru: 'Серия CK с сепарацией жидкости', ar: 'سلسلة CK مع فصل السوائل' }
    }
  ];

  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": language === 'tr' ? 'MT Makina Endüstriyel Parçalama Makineleri' :
      language === 'en' ? 'MT Makina Industrial Shredding Machines' :
        language === 'ru' ? 'Промышленные Измельчители MT Makina' :
          'آلات التمزيق الصناعية MT Makina',
    "description": language === 'tr' ? 'Türkiye\'nin lider parçalama makinesi üreticisi MT Makina\'nın tüm ürünleri' :
      language === 'en' ? 'All products from Turkey\'s leading shredder manufacturer MT Makina' :
        language === 'ru' ? 'Все продукты ведущего турецкого производителя шредеров MT Makina' :
          'جميع منتجات الشركة الرائدة في تركيا لتصنيع آلات التمزيق MT Makina',
    "numberOfItems": products.length,
    "itemListElement": products.map((product, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "Product",
        "@id": `${baseUrl}${generateUrl.productCategory(product.slug, language)}`,
        "name": product.name[language] || product.name.en,
        "description": product.description[language] || product.description.en,
        "image": product.image,
        "url": `${baseUrl}${generateUrl.productCategory(product.slug, language)}`,
        "brand": {
          "@type": "Brand",
          "name": "MT Makina"
        },
        "manufacturer": {
          "@type": "Organization",
          "@id": "https://www.parcalamamakinesi.com/#organization"
        },
        "offers": {
          "@type": "AggregateOffer",
          "url": `${baseUrl}${generateUrl.productCategory(product.slug, language)}`,
          "priceCurrency": "USD",
          "lowPrice": "15000",
          "highPrice": "150000",
          "offerCount": "6",
          "availability": "https://schema.org/InStock"
        }
        // Note: aggregateRating removed from homepage product list
        // Google requires only 1 aggregateRating per page
        // Ratings are shown on individual product detail pages instead
      }
    }))
  };
};

// Organization Schema - Company Structured Data for AI SEO
export const generateOrganizationSchema = () => {
  return {
    "@context": "https://schema.org",
    "@type": ["Organization", "Manufacturer"],
    "@id": "https://www.parcalamamakinesi.com/#organization",
    "name": "MT Makina",
    "alternateName": ["MT Makina Parçalama Makinesi", "MT Makina Industrial Shredders"],
    "url": "https://www.parcalamamakinesi.com",
    "logo": {
      "@type": "ImageObject",
      "url": "https://www.parcalamamakinesi.com/logo.png",
      "width": 300,
      "height": 100
    },
    "image": "https://www.parcalamamakinesi.com/og-image.jpg",
    "description": "Turkey's leading industrial shredder manufacturer. Producing single shaft, dual shaft, quad shaft shredders, metal shredders, mobile crushers for recycling industry since 2003. Exporting to 50+ countries.",
    "foundingDate": "2003",
    "foundingLocation": {
      "@type": "Place",
      "name": "Istanbul, Turkey"
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Cumhuriyet Mahallesi, Nazım Hikmet Bulvarı, 1983 Sk. Kent Palas 2 Kat: 7 D: 85-86",
      "addressLocality": "Esenyurt",
      "addressRegion": "Istanbul",
      "postalCode": "34512",
      "addressCountry": "TR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "41.0355",
      "longitude": "28.6669"
    },
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "telephone": "+90-850-259-01-66",
        "contactType": "headquarters",
        "availableLanguage": ["Turkish", "English", "Russian", "Arabic"],
        "areaServed": "Worldwide"
      },
      {
        "@type": "ContactPoint",
        "telephone": "+90-542-310-99-30",
        "contactType": "sales",
        "availableLanguage": ["Turkish", "English", "Russian", "Arabic"],
        "areaServed": "Worldwide"
      },
      {
        "@type": "ContactPoint",
        "telephone": "+90-212-671-74-55",
        "contactType": "customer support",
        "availableLanguage": ["Turkish", "English"]
      }
    ],
    "email": "info@mtmakina.com.tr",
    "sameAs": [
      "https://www.youtube.com/@mtmakina",
      "https://www.linkedin.com/company/mt-makina",
      "https://www.facebook.com/mtmakina",
      "https://www.instagram.com/mtmakina"
    ],
    "knowsAbout": [
      "Industrial Shredders",
      "Plastic Recycling Machines",
      "Metal Shredders",
      "Wood Grinders",
      "Waste Management Equipment",
      "Recycling Technology"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Industrial Shredding Machines",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Product",
            "name": "Single Shaft Shredder",
            "category": "Industrial Shredders"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Product",
            "name": "Dual Shaft Shredder",
            "category": "Industrial Shredders"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Product",
            "name": "Metal Shredder",
            "category": "Metal Processing"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Product",
            "name": "Mobile Shredder",
            "category": "Mobile Equipment"
          }
        }
      ]
    },
    "areaServed": {
      "@type": "GeoShape",
      "name": "Worldwide - 50+ Countries"
    },
    "award": [
      "CE Certification",
      "ISO 9001 Quality Management",
      "ISO 14001 Environmental Management"
    ],
    "slogan": "Turkey's #1 Shredder Manufacturer"
  };
};
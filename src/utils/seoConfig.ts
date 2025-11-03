/**
 * SEO Configuration - URL Routing and Meta Tags
 * Comprehensive SEO system for MT Makina website
 */

export interface SEOMetadata {
  title: string;
  description: string;
  keywords: string[];
  ogTitle?: string;
  ogDescription?: string;
  canonical: string;
}

// URL Path Generator
export const generateUrl = {
  home: () => '/home',
  about: () => '/kurumsal',
  products: () => '/urunler',
  productCategory: (type: string) => {
    const slugs: { [key: string]: string } = {
      'single-shaft': '/tek-shaftli-parcalama-makinesi',
      'dual-shaft': '/cift-shaftli-parcalama-makinesi',
      'quad-shaft': '/dort-shaftli-parcalama-makinesi',
      'metal': '/metal-parcalama-makinesi',
      'granulator': '/granulator-makinesi',
      'baler': '/balyalama-makinesi',
      'conveyor': '/konveyor-sistemi',
      'separator': '/ayristirma-makinesi'
    };
    return slugs[type] || `/urunler/${type}`;
  },
  productDetail: (type: string, model: string) => {
    const categorySlug = generateUrl.productCategory(type);
    return `${categorySlug}/${model.toLowerCase()}`;
  },
  technology: () => '/teknoloji',
  references: () => '/referanslar',
  certificates: () => '/sertifikalar',
  waste: (category?: string) => category ? `/atik-turleri/${category}` : '/atik-turleri',
  contact: () => '/iletisim',
  ecatalog: () => '/e-katalog'
};

// SEO Metadata for each page
export const seoMetadata: { [key: string]: SEOMetadata | ((params?: any) => SEOMetadata) } = {
  home: {
    title: 'Parçalama Makinesi | Shredder Machine | MT Makina - Türkiye\'nin 1 Numaralı Üreticisi',
    description: 'Parçalama makinesi, shredder machine, plastik kırma makinesi, metal parçalama, ahşap kırıcı - MT Makina endüstriyel parçalama sistemleri. Tek şaftlı, çift şaftlı TSH serisi. ✓ CE Belgeli ✓ Garanti ✓ Servis',
    keywords: ['parçalama makinesi', 'shredder machine', 'shredder', 'plastik kırma makinesi', 'metal parçalama makinesi', 'ahşap kırma makinesi', 'tek şaftlı parçalama', 'çift şaftlı parçalama', 'TSH parçalama', 'endüstriyel shredder', 'geri dönüşüm makinesi', 'atık kırma makinesi', 'hurda parçalama', 'MT Makina', 'parçalama makinesi fiyatları', 'shredder fiyatları'],
    canonical: 'https://www.parcalamamakinesi.com/home'
  },
  
  about: {
    title: 'Kurumsal - MT Makina Hakkında | 20+ Yıllık Deneyim',
    description: 'MT Makina olarak 20 yılı aşkın süredir endüstriyel parçalama sistemleri üretiyoruz. Türkiye ve dünya pazarında güvenilir çözüm ortağınız.',
    keywords: ['MT Makina', 'parçalama makinesi üreticisi', 'endüstriyel makine üretimi', 'Türkiye makine sanayi', 'geri dönüşüm ekipmanları'],
    canonical: 'https://www.parcalamamakinesi.com/kurumsal'
  },
  
  products: {
    title: 'Ürünlerimiz - MT Makina Parçalama Makineleri Kataloğu',
    description: 'MT Makina\'nın geniş ürün yelpazesi: Tek şaftlı, çift şaftlı, dörtlü şaft parçalama makineleri, granülatörler, balyalama sistemleri ve daha fazlası.',
    keywords: ['parçalama makinesi modelleri', 'shredder çeşitleri', 'endüstriyel makine kataloğu', 'geri dönüşüm ekipmanları'],
    canonical: 'https://www.parcalamamakinesi.com/urunler'
  },
  
  technology: {
    title: 'Teknoloji - MT Makina İleri Üretim Teknolojileri',
    description: 'MT Makina\'da kullanılan ileri üretim teknolojileri, otomasyon sistemleri, kalite kontrol süreçleri ve Ar-Ge çalışmaları hakkında bilgi edinin.',
    keywords: ['parçalama teknolojisi', 'ileri üretim', 'makine otomasyonu', 'kalite kontrol', 'Ar-Ge'],
    canonical: 'https://www.parcalamamakinesi.com/teknoloji'
  },
  
  references: {
    title: 'Referanslar - MT Makina Müşteri Projeleri ve Başarı Hikayeleri',
    description: 'Türkiye ve dünya genelinde MT Makina parçalama sistemlerini kullanan firmalar, başarılı projeler ve müşteri referansları.',
    keywords: ['MT Makina referanslar', 'müşteri projeleri', 'başarı hikayeleri', 'parçalama makinesi kullanıcıları'],
    canonical: 'https://www.parcalamamakinesi.com/referanslar'
  },
  
  certificates: {
    title: 'Sertifikalar ve Belgeler - MT Makina Kalite Standartları',
    description: 'MT Makina\'nın sahip olduğu ISO sertifikaları, CE belgeleri ve uluslararası kalite standartları.',
    keywords: ['ISO sertifikası', 'CE belgesi', 'kalite belgeleri', 'makine standartları'],
    canonical: 'https://www.parcalamamakinesi.com/sertifikalar'
  },
  
  contact: {
    title: 'İletişim - MT Makina ile İletişime Geçin | Teklif Alın',
    description: 'MT Makina ile iletişime geçin, parçalama makineleri hakkında detaylı bilgi alın ve projeniz için özel teklif isteyin.',
    keywords: ['MT Makina iletişim', 'parçalama makinesi teklif', 'makine fiyat teklifi', 'satış iletişim'],
    canonical: 'https://www.parcalamamakinesi.com/iletisim'
  },
  
  ecatalog: {
    title: 'E-Katalog - MT Makina Ürün Kataloğu PDF İndir',
    description: 'MT Makina ürün kataloğunu PDF olarak indirin. Tüm parçalama makinesi modelleri, teknik özellikler ve fiyat bilgileri.',
    keywords: ['katalog pdf', 'ürün kataloğu', 'parçalama makinesi katalog', 'MT Makina katalog'],
    canonical: 'https://www.parcalamamakinesi.com/e-katalog'
  }
};

// Product Category SEO Metadata (Dynamic)
export const getProductCategorySEO = (type: string): SEOMetadata => {
  const categoryData: { [key: string]: Omit<SEOMetadata, 'canonical'> } = {
    'single-shaft': {
      title: 'Tek Şaftlı Parçalama Makinesi | Single Shaft Shredder | MT Makina TSH Serisi',
      description: 'Tek şaftlı parçalama makinesi, single shaft shredder - MT Makina TSH Serisi 500-6000 kg/saat. Plastik kırma, ahşap parçalama, kağıt shredder. ✓ 6 Model ✓ CE Belgeli ✓ Hızlı Teslimat ✓ Garanti',
      keywords: ['tek şaftlı parçalama makinesi', 'single shaft shredder', 'TSH serisi', 'plastik kırma makinesi', 'ahşap parçalama makinesi', 'kağıt parçalama', 'plastik shredder', 'ahşap kırıcı', 'tek şaft shredder', 'endüstriyel parçalama'],
    },
    'dual-shaft': {
      title: 'Çift Şaftlı Parçalama Makinesi | Dual Shaft Shredder | MT Makina CS Serisi',
      description: 'Çift şaftlı parçalama makinesi, dual shaft shredder - MT Makina CS Serisi. Metal parçalama, palet kırıcı, lastik shredder. ✓ Ağır Hizmet Tipi ✓ Çift Motor ✓ Yüksek Tork ✓ CE Belgeli',
      keywords: ['çift şaftlı parçalama makinesi', 'dual shaft shredder', 'CS serisi', 'metal parçalama makinesi', 'palet kırıcı', 'lastik parçalama', 'çift şaft shredder', 'ağır hizmet parçalama', 'endüstriyel atık kırıcı'],
    },
    'quad-shaft': {
      title: 'Dörtlü Şaft Parçalama Makinesi | MT Makina QS Serisi',
      description: 'MT Makina dörtlü şaft parçalama makineleri (QS Serisi) ultra hassas boyut kontrolü, dört motorlu sistem. E-atık, elektronik hurda ve değerli malzeme geri kazanımı.',
      keywords: ['dörtlü şaft parçalama', 'quad shaft shredder', 'QS serisi', 'e-atık parçalama', 'elektronik hurda', 'hassas parçalama'],
    },
    'metal': {
      title: 'Metal Parçalama Makinesi | MT Makina MP Serisi Kırıcı',
      description: 'MT Makina metal parçalama makineleri (MP Serisi) güçlü motor, özel bıçak sistemi ile demir, alüminyum, bakır ve karışık metal hurdaları parçalar.',
      keywords: ['metal kırıcı', 'metal shredder', 'demir parçalama', 'alüminyum kırıcı', 'hurda parçalama', 'metal geri dönüşüm'],
    },
    'granulator': {
      title: 'Granülatör Makinesi | MT Makina GR Serisi',
      description: 'MT Makina granülatör makineleri (GR Serisi) plastik enjeksiyon kalıntıları, film atıkları ve plastik parça granülleme için yüksek performanslı çözüm.',
      keywords: ['granülatör', 'plastik granül', 'plastik kırma', 'enjeksiyon atığı', 'film granülleme'],
    },
    'baler': {
      title: 'Balyalama Makinesi | MT Makina BP Serisi Balya Presi',
      description: 'MT Makina hidrolik balyalama makineleri (BP Serisi) kağıt, karton, plastik, tekstil atıklarını sıkıştırarak depolama ve nakliye maliyetlerini azaltır.',
      keywords: ['balyalama makinesi', 'balya presi', 'hidrolik pres', 'atık sıkıştırma', 'karton balya'],
    },
    'conveyor': {
      title: 'Konveyör Sistemi | MT Makina CV Serisi Taşıma Bantları',
      description: 'MT Makina endüstriyel konveyör sistemleri (CV Serisi) parçalama hatları için modüler taşıma çözümleri, özelleştirilebilir boyutlar.',
      keywords: ['konveyör sistemi', 'taşıma bandı', 'endüstriyel konveyör', 'malzeme taşıma', 'modüler sistem'],
    },
    'separator': {
      title: 'Ayırıcı Makine | MT Makina MS Serisi Malzeme Ayırma',
      description: 'MT Makina malzeme ayırıcı sistemleri (MS Serisi) manyetik ve hava ayırma teknolojisi ile metal ve plastik ayrıştırma çözümü.',
      keywords: ['malzeme ayırıcı', 'manyetik ayırıcı', 'hava seperatörü', 'metal ayırma', 'plastik ayrıştırma'],
    }
  };

  const data = categoryData[type] || {
    title: `${type} - MT Makina Parçalama Makineleri`,
    description: `MT Makina ${type} serisi parçalama makineleri hakkında detaylı bilgi.`,
    keywords: [type, 'parçalama makinesi', 'MT Makina'],
  };

  return {
    ...data,
    canonical: `https://www.parcalamamakinesi.com${generateUrl.productCategory(type)}`
  };
};

// Product Model SEO Metadata (Dynamic)
export const getProductModelSEO = (type: string, model: string): SEOMetadata => {
  // Model specific details
  const modelDetails: { [key: string]: { [model: string]: Omit<SEOMetadata, 'canonical'> } } = {
    'single-shaft': {
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
    'dual-shaft': {
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
    'quad-shaft': {
      'QS-80': {
        title: 'QS-80 Dörtlü Şaft Parçalama Makinesi | Hassas Boyut | MT Makina',
        description: 'MT Makina QS-80 model dörtlü şaft parçalama makinesi. 4 motorlu sistem, hassas boyut kontrolü, homojen çıktı. E-atık ve değerli malzeme geri kazanımı.',
        keywords: ['QS-80', 'dörtlü şaft 80', 'hassas parçalama', 'e-atık geri kazanım', '4 motor'],
      },
      'QS-100': {
        title: 'QS-100 Dörtlü Şaft Parçalama Makinesi | E-Atık Uzmanı | MT Makina',
        description: 'MT Makina QS-100 model dörtlü şaft parçalama makinesi. Elektronik hurda, PCB kartları, kablolar için özel tasarım, yüksek verim.',
        keywords: ['QS-100', 'dörtlü şaft 100', 'elektronik hurda', 'PCB parçalama', 'kablo ayrıştırma'],
      },
      'QS-120': {
        title: 'QS-120 Dörtlü Şaft Parçalama Makinesi | Yüksek Kapasite | MT Makina',
        description: 'MT Makina QS-120 model dörtlü şaft parçalama makinesi. Yüksek kapasite, hassas kesim, orta ve büyük ölçekli geri dönüşüm tesisleri için.',
        keywords: ['QS-120', 'dörtlü şaft 120', 'yüksek kapasite quad', 'hassas kesim'],
      },
      'QS-150': {
        title: 'QS-150 Dörtlü Şaft Parçalama Makinesi | Maksimum Hassasiyet | MT Makina',
        description: 'MT Makina QS-150 model dörtlü şaft parçalama makinesi. En yüksek hassasiyet ve kapasite, büyük hacimli e-atık işleme için profesyonel sistem.',
        keywords: ['QS-150', 'dörtlü şaft 150', 'maksimum hassasiyet', 'büyük hacim e-atık'],
      }
    },
    'metal': {
      'MP-100': {
        title: 'MP-100 Metal Parçalama Makinesi | Demir Kırıcı | MT Makina',
        description: 'MT Makina MP-100 model metal parçalama makinesi. Güçlü motor, sert bıçak sistemi. Demir, çelik, alüminyum hurda parçalama için ideal.',
        keywords: ['MP-100', 'metal kırıcı 100', 'demir parçalama', 'çelik shredder', 'hurda kırıcı'],
      },
      'MP-150': {
        title: 'MP-150 Metal Parçalama Makinesi | Ağır Metal Kırıcı | MT Makina',
        description: 'MT Makina MP-150 model metal parçalama makinesi. Ağır metal hurdalar için tasarlanmış, yüksek güç, dayanıklı yapı, sürekli çalışma.',
        keywords: ['MP-150', 'metal kırıcı 150', 'ağır metal', 'otomotiv hurda', 'beyaz eşya kırıcı'],
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
    }
  };

  const modelData = modelDetails[type]?.[model] || {
    title: `${model} ${type} Parçalama Makinesi | MT Makina`,
    description: `MT Makina ${model} model parçalama makinesi teknik özellikleri, kapasite bilgileri ve fiyat teklifi.`,
    keywords: [model, type, 'parçalama makinesi', 'MT Makina'],
  };

  return {
    ...modelData,
    canonical: `https://www.parcalamamakinesi.com${generateUrl.productDetail(type, model)}`
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

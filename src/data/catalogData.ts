import { Language } from '../components/LanguageContext';

export type CatalogCategory = 'single-shaft' | 'dual-shaft' | 'quad-shaft' | 'metal' | 'mobile' | 'pallet' | 'tree-root' | 'wood' | 'glass' | 'harddisk';

export interface CatalogTranslation {
    title: string;
    description: string;
    keywords: string[];
}

export interface CatalogSpecs {
    capacity?: string;
    power?: string;
}

export interface CatalogPaths {
    html: string;
    pdf: string;
}

export interface CatalogItem {
    id: string;
    model: string;
    category: CatalogCategory;
    series: string;
    // Multi-language paths - falls back to 'tr' if language not available
    paths: Partial<Record<Language, CatalogPaths>> & { tr: CatalogPaths };
    thumbnail: string;
    specs: CatalogSpecs;
    translations: Record<Language, CatalogTranslation>;
}

// Helper function to get catalog paths for a specific language
export const getCatalogPaths = (catalog: CatalogItem, language: Language): CatalogPaths => {
    return catalog.paths[language] || catalog.paths.tr;
};

export const catalogs: CatalogItem[] = [
    {
        id: 'tsh-60',
        model: 'TSH-60',
        category: 'single-shaft',
        series: 'TSH',
        paths: {
            tr: {
                html: '/catalogs/tsh/tsh-60/catalog.html',
                pdf: '/catalogs/tsh/tsh-60/catalog.pdf'
            },
            en: {
                html: '/catalogs/tsh/tsh-60/catalog-en.html',
                pdf: '/catalogs/tsh/tsh-60/catalog.pdf'
            },
            ru: {
                html: '/catalogs/tsh/tsh-60/catalog-ru.html',
                pdf: '/catalogs/tsh/tsh-60/catalog.pdf'
            },
            ar: {
                html: '/catalogs/tsh/tsh-60/catalog-ar.html',
                pdf: '/catalogs/tsh/tsh-60/catalog.pdf'
            }
        },
        thumbnail: '/mt-logo-white.png',
        specs: {
            capacity: '500-1000 kg/h',
            power: '30-37 kW'
        },
        translations: {
            tr: {
                title: 'TSH-60 Tek Şaftlı Parçalama Makinesi Kataloğu',
                description: 'TSH-60 tek şaftlı parçalama makinesi teknik özellikleri, kapasite bilgileri ve uygulama alanları. PDF olarak indirin.',
                keywords: ['TSH-60', 'tek şaftlı parçalama', 'parçalama makinesi katalog', 'shredder']
            },
            en: {
                title: 'TSH-60 Single Shaft Shredder Catalog',
                description: 'TSH-60 single shaft shredder technical specifications, capacity information and application areas. Download as PDF.',
                keywords: ['TSH-60', 'single shaft shredder', 'shredder catalog', 'industrial shredder']
            },
            ru: {
                title: 'Каталог одновального шредера TSH-60',
                description: 'Технические характеристики одновального шредера TSH-60, информация о производительности и области применения. Скачать в формате PDF.',
                keywords: ['TSH-60', 'одновальный шредер', 'каталог шредера', 'промышленный шредер']
            },
            ar: {
                title: 'كتالوج ماكينة التقطيع ذات العمود الواحد TSH-60',
                description: 'المواصفات الفنية لماكينة التقطيع ذات العمود الواحد TSH-60، معلومات السعة ومجالات التطبيق. تحميل بصيغة PDF.',
                keywords: ['TSH-60', 'ماكينة تقطيع عمود واحد', 'كتالوج ماكينة تقطيع', 'ماكينة تقطيع صناعية']
            }
        }
    },
    {
        id: 'tsh-80',
        model: 'TSH-80',
        category: 'single-shaft',
        series: 'TSH',
        paths: {
            tr: {
                html: '/catalogs/tsh/tsh-80/catalog.html',
                pdf: '/catalogs/tsh/tsh-80/catalog.pdf'
            },
            en: {
                html: '/catalogs/tsh/tsh-80/catalog-en.html',
                pdf: '/catalogs/tsh/tsh-80/catalog.pdf'
            },
            ru: {
                html: '/catalogs/tsh/tsh-80/catalog-ru.html',
                pdf: '/catalogs/tsh/tsh-80/catalog.pdf'
            },
            ar: {
                html: '/catalogs/tsh/tsh-80/catalog-ar.html',
                pdf: '/catalogs/tsh/tsh-80/catalog.pdf'
            }
        },
        thumbnail: '/mt-logo-white.png',
        specs: {
            capacity: '1000-2000 kg/h',
            power: '45-55 kW'
        },
        translations: {
            tr: {
                title: 'TSH-80 Tek Şaftlı Parçalama Makinesi Kataloğu',
                description: 'TSH-80 tek şaftlı parçalama makinesi teknik özellikleri, kapasite bilgileri ve uygulama alanları. PDF olarak indirin.',
                keywords: ['TSH-80', 'tek şaftlı parçalama', 'parçalama makinesi katalog', 'shredder']
            },
            en: {
                title: 'TSH-80 Single Shaft Shredder Catalog',
                description: 'TSH-80 single shaft shredder technical specifications, capacity information and application areas. Download as PDF.',
                keywords: ['TSH-80', 'single shaft shredder', 'shredder catalog', 'industrial shredder']
            },
            ru: {
                title: 'Каталог одновального шредера TSH-80',
                description: 'Технические характеристики одновального шредера TSH-80, информация о производительности и области применения. Скачать в формате PDF.',
                keywords: ['TSH-80', 'одновальный шредер', 'каталог шредера', 'промышленный шредер']
            },
            ar: {
                title: 'كتالوج ماكينة التقطيع ذات العمود الواحد TSH-80',
                description: 'المواصفات الفنية لماكينة التقطيع ذات العمود الواحد TSH-80، معلومات السعة ومجالات التطبيق. تحميل بصيغة PDF.',
                keywords: ['TSH-80', 'ماكينة تقطيع عمود واحد', 'كتالوج ماكينة تقطيع', 'ماكينة تقطيع صناعية']
            }
        }
    },
    {
        id: 'tsh-100',
        model: 'TSH-100',
        category: 'single-shaft',
        series: 'TSH',
        paths: {
            tr: {
                html: '/catalogs/tsh/tsh-100/catalog.html',
                pdf: '/catalogs/tsh/tsh-100/catalog.pdf'
            },
            en: {
                html: '/catalogs/tsh/tsh-100/catalog-en.html',
                pdf: '/catalogs/tsh/tsh-100/catalog.pdf'
            },
            ru: {
                html: '/catalogs/tsh/tsh-100/catalog-ru.html',
                pdf: '/catalogs/tsh/tsh-100/catalog.pdf'
            },
            ar: {
                html: '/catalogs/tsh/tsh-100/catalog-ar.html',
                pdf: '/catalogs/tsh/tsh-100/catalog.pdf'
            }
        },
        thumbnail: '/mt-logo-white.png',
        specs: {
            capacity: '2000-3500 kg/h',
            power: '75-90 kW'
        },
        translations: {
            tr: {
                title: 'TSH-100 Tek Şaftlı Parçalama Makinesi Kataloğu',
                description: 'TSH-100 tek şaftlı parçalama makinesi teknik özellikleri, kapasite bilgileri ve uygulama alanları. PDF olarak indirin.',
                keywords: ['TSH-100', 'tek şaftlı parçalama', 'parçalama makinesi katalog', 'shredder']
            },
            en: {
                title: 'TSH-100 Single Shaft Shredder Catalog',
                description: 'TSH-100 single shaft shredder technical specifications, capacity information and application areas. Download as PDF.',
                keywords: ['TSH-100', 'single shaft shredder', 'shredder catalog', 'industrial shredder']
            },
            ru: {
                title: 'Каталог одновального шредера TSH-100',
                description: 'Технические характеристики одновального шредера TSH-100, информация о производительности и области применения. Скачать в формате PDF.',
                keywords: ['TSH-100', 'одновальный шредер', 'каталог шредера', 'промышленный шредер']
            },
            ar: {
                title: 'كتالوج ماكينة التقطيع ذات العمود الواحد TSH-100',
                description: 'المواصفات الفنية لماكينة التقطيع ذات العمود الواحد TSH-100، معلومات السعة ومجالات التطبيق. تحميل بصيغة PDF.',
                keywords: ['TSH-100', 'ماكينة تقطيع عمود واحد', 'كتالوج ماكينة تقطيع', 'ماكينة تقطيع صناعية']
            }
        }
    },
    {
        id: 'tsh-130',
        model: 'TSH-130',
        category: 'single-shaft',
        series: 'TSH',
        paths: {
            tr: {
                html: '/catalogs/tsh/tsh-130/catalog.html',
                pdf: '/catalogs/tsh/tsh-130/catalog.pdf'
            },
            en: {
                html: '/catalogs/tsh/tsh-130/catalog-en.html',
                pdf: '/catalogs/tsh/tsh-130/catalog.pdf'
            },
            ru: {
                html: '/catalogs/tsh/tsh-130/catalog-ru.html',
                pdf: '/catalogs/tsh/tsh-130/catalog.pdf'
            },
            ar: {
                html: '/catalogs/tsh/tsh-130/catalog-ar.html',
                pdf: '/catalogs/tsh/tsh-130/catalog.pdf'
            }
        },
        thumbnail: '/mt-logo-white.png',
        specs: {
            capacity: '3500-5000 kg/h',
            power: '110-132 kW'
        },
        translations: {
            tr: {
                title: 'TSH-130 Tek Şaftlı Parçalama Makinesi Kataloğu',
                description: 'TSH-130 tek şaftlı parçalama makinesi teknik özellikleri, kapasite bilgileri ve uygulama alanları. PDF olarak indirin.',
                keywords: ['TSH-130', 'tek şaftlı parçalama', 'parçalama makinesi katalog', 'shredder']
            },
            en: {
                title: 'TSH-130 Single Shaft Shredder Catalog',
                description: 'TSH-130 single shaft shredder technical specifications, capacity information and application areas. Download as PDF.',
                keywords: ['TSH-130', 'single shaft shredder', 'shredder catalog', 'industrial shredder']
            },
            ru: {
                title: 'Каталог одновального шредера TSH-130',
                description: 'Технические характеристики одновального шредера TSH-130, информация о производительности и области применения. Скачать в формате PDF.',
                keywords: ['TSH-130', 'одновальный шредер', 'каталог шредера', 'промышленный шредер']
            },
            ar: {
                title: 'كتالوج ماكينة التقطيع ذات العمود الواحد TSH-130',
                description: 'المواصفات الفنية لماكينة التقطيع ذات العمود الواحد TSH-130، معلومات السعة ومجالات التطبيق. تحميل بصيغة PDF.',
                keywords: ['TSH-130', 'ماكينة تقطيع عمود واحد', 'كتالوج ماكينة تقطيع', 'ماكينة تقطيع صناعية']
            }
        }
    },
    {
        id: 'tsh-160',
        model: 'TSH-160',
        category: 'single-shaft',
        series: 'TSH',
        paths: {
            tr: {
                html: '/catalogs/tsh/tsh-160/catalog.html',
                pdf: '/catalogs/tsh/tsh-160/catalog.pdf'
            },
            en: {
                html: '/catalogs/tsh/tsh-160/catalog-en.html',
                pdf: '/catalogs/tsh/tsh-160/catalog.pdf'
            },
            ru: {
                html: '/catalogs/tsh/tsh-160/catalog-ru.html',
                pdf: '/catalogs/tsh/tsh-160/catalog.pdf'
            },
            ar: {
                html: '/catalogs/tsh/tsh-160/catalog-ar.html',
                pdf: '/catalogs/tsh/tsh-160/catalog.pdf'
            }
        },
        thumbnail: '/mt-logo-white.png',
        specs: {
            capacity: '5000-8000 kg/h',
            power: '160-200 kW'
        },
        translations: {
            tr: {
                title: 'TSH-160 Tek Şaftlı Parçalama Makinesi Kataloğu',
                description: 'TSH-160 tek şaftlı parçalama makinesi teknik özellikleri, kapasite bilgileri ve uygulama alanları. PDF olarak indirin.',
                keywords: ['TSH-160', 'tek şaftlı parçalama', 'parçalama makinesi katalog', 'shredder']
            },
            en: {
                title: 'TSH-160 Single Shaft Shredder Catalog',
                description: 'TSH-160 single shaft shredder technical specifications, capacity information and application areas. Download as PDF.',
                keywords: ['TSH-160', 'single shaft shredder', 'shredder catalog', 'industrial shredder']
            },
            ru: {
                title: 'Каталог одновального шредера TSH-160',
                description: 'Технические характеристики одновального шредера TSH-160, информация о производительности и области применения. Скачать в формате PDF.',
                keywords: ['TSH-160', 'одновальный шредер', 'каталог шредера', 'промышленный шредер']
            },
            ar: {
                title: 'كتالوج ماكينة التقطيع ذات العمود الواحد TSH-160',
                description: 'المواصفات الفنية لماكينة التقطيع ذات العمود الواحد TSH-160، معلومات السعة ومجالات التطبيق. تحميل بصيغة PDF.',
                keywords: ['TSH-160', 'ماكينة تقطيع عمود واحد', 'كتالوج ماكينة تقطيع', 'ماكينة تقطيع صناعية']
            }
        }
    },
    // ========================================
    // CS SERIES - Dual Shaft Shredders
    // ========================================
    {
        id: 'cs-20',
        model: 'CS-20',
        category: 'dual-shaft',
        series: 'CS',
        paths: {
            tr: { html: '/catalogs/cs/cs-20/catalog.html', pdf: '/catalogs/cs/cs-20/catalog.pdf' },
            en: { html: '/catalogs/cs/cs-20/catalog-en.html', pdf: '/catalogs/cs/cs-20/catalog.pdf' },
            ru: { html: '/catalogs/cs/cs-20/catalog-ru.html', pdf: '/catalogs/cs/cs-20/catalog.pdf' },
            ar: { html: '/catalogs/cs/cs-20/catalog-ar.html', pdf: '/catalogs/cs/cs-20/catalog.pdf' }
        },
        thumbnail: '/catalogs/cs/cs-20/images/CS-20-1.jpeg',
        specs: { capacity: '100-300 kg/h', power: '2.2-11 kW' },
        translations: {
            tr: { title: 'CS-20 Çift Şaftlı Parçalama Makinesi Kataloğu', description: 'CS-20 kompakt çift şaftlı parçalama makinesi. Küçük işletmeler için ideal.', keywords: ['CS-20', 'çift şaftlı', 'kompakt parçalayıcı'] },
            en: { title: 'CS-20 Dual Shaft Shredder Catalog', description: 'CS-20 compact dual shaft shredder. Ideal for small businesses.', keywords: ['CS-20', 'dual shaft', 'compact shredder'] },
            ru: { title: 'Каталог CS-20 двухвального шредера', description: 'CS-20 компактный двухвальный шредер. Идеально для малого бизнеса.', keywords: ['CS-20', 'двухвальный', 'шредер'] },
            ar: { title: 'كتالوج CS-20 آلة التمزيق ثنائية العمود', description: 'CS-20 آلة تمزيق مدمجة ثنائية العمود. مثالية للشركات الصغيرة.', keywords: ['CS-20', 'ثنائي العمود', 'آلة تمزيق'] }
        }
    },
    {
        id: 'cs-40',
        model: 'CS-40',
        category: 'dual-shaft',
        series: 'CS',
        paths: {
            tr: { html: '/catalogs/cs/cs-40/catalog.html', pdf: '/catalogs/cs/cs-40/catalog.pdf' },
            en: { html: '/catalogs/cs/cs-40/catalog-en.html', pdf: '/catalogs/cs/cs-40/catalog.pdf' },
            ru: { html: '/catalogs/cs/cs-40/catalog-ru.html', pdf: '/catalogs/cs/cs-40/catalog.pdf' },
            ar: { html: '/catalogs/cs/cs-40/catalog-ar.html', pdf: '/catalogs/cs/cs-40/catalog.pdf' }
        },
        thumbnail: '/catalogs/cs/cs-40/images/CS-40-1.jpeg',
        specs: { capacity: '300-600 kg/h', power: '5.5-22 kW' },
        translations: {
            tr: { title: 'CS-40 Çift Şaftlı Parçalama Makinesi Kataloğu', description: 'CS-40 orta kapasiteli çift şaftlı parçalama makinesi.', keywords: ['CS-40', 'çift şaftlı', 'orta kapasite'] },
            en: { title: 'CS-40 Dual Shaft Shredder Catalog', description: 'CS-40 medium capacity dual shaft shredder.', keywords: ['CS-40', 'dual shaft', 'medium capacity'] },
            ru: { title: 'Каталог CS-40 двухвального шредера', description: 'CS-40 двухвальный шредер средней мощности.', keywords: ['CS-40', 'двухвальный', 'шредер'] },
            ar: { title: 'كتالوج CS-40 آلة التمزيق ثنائية العمود', description: 'CS-40 آلة تمزيق ثنائية العمود متوسطة السعة.', keywords: ['CS-40', 'ثنائي العمود', 'آلة تمزيق'] }
        }
    },
    {
        id: 'cs-60',
        model: 'CS-60',
        category: 'dual-shaft',
        series: 'CS',
        paths: {
            tr: { html: '/catalogs/cs/cs-60/catalog.html', pdf: '/catalogs/cs/cs-60/catalog.pdf' },
            en: { html: '/catalogs/cs/cs-60/catalog-en.html', pdf: '/catalogs/cs/cs-60/catalog.pdf' },
            ru: { html: '/catalogs/cs/cs-60/catalog-ru.html', pdf: '/catalogs/cs/cs-60/catalog.pdf' },
            ar: { html: '/catalogs/cs/cs-60/catalog-ar.html', pdf: '/catalogs/cs/cs-60/catalog.pdf' }
        },
        thumbnail: '/catalogs/cs/cs-60/images/CS-60-1.jpeg',
        specs: { capacity: '500-1000 kg/h', power: '11-45 kW (2x)' },
        translations: {
            tr: { title: 'CS-60 Çift Şaftlı Parçalama Makinesi Kataloğu', description: 'CS-60 endüstriyel çift şaftlı parçalama makinesi. Yüksek tork kapasitesi.', keywords: ['CS-60', 'çift şaftlı', 'endüstriyel parçalayıcı'] },
            en: { title: 'CS-60 Dual Shaft Shredder Catalog', description: 'CS-60 industrial dual shaft shredder. High torque capacity.', keywords: ['CS-60', 'dual shaft', 'industrial shredder'] },
            ru: { title: 'Каталог CS-60 двухвального шредера', description: 'CS-60 промышленный двухвальный шредер. Высокий крутящий момент.', keywords: ['CS-60', 'двухвальный', 'промышленный шредер'] },
            ar: { title: 'كتالوج CS-60 آلة التمزيق ثنائية العمود', description: 'CS-60 آلة تمزيق صناعية ثنائية العمود. عزم دوران عالي.', keywords: ['CS-60', 'ثنائي العمود', 'آلة تمزيق صناعية'] }
        }
    },
    {
        id: 'cs-80',
        model: 'CS-80',
        category: 'dual-shaft',
        series: 'CS',
        paths: {
            tr: { html: '/catalogs/cs/cs-80/catalog.html', pdf: '/catalogs/cs/cs-80/catalog.pdf' },
            en: { html: '/catalogs/cs/cs-80/catalog-en.html', pdf: '/catalogs/cs/cs-80/catalog.pdf' },
            ru: { html: '/catalogs/cs/cs-80/catalog-ru.html', pdf: '/catalogs/cs/cs-80/catalog.pdf' },
            ar: { html: '/catalogs/cs/cs-80/catalog-ar.html', pdf: '/catalogs/cs/cs-80/catalog.pdf' }
        },
        thumbnail: '/catalogs/cs/cs-80/images/CS-80-1.jpeg',
        specs: { capacity: '1000-2000 kg/h', power: '15-55 kW (2x)' },
        translations: {
            tr: { title: 'CS-80 Çift Şaftlı Parçalama Makinesi Kataloğu', description: 'CS-80 ağır hizmet çift şaftlı parçalama makinesi apply.', keywords: ['CS-80', 'çift şaftlı', 'ağır sanayi'] },
            en: { title: 'CS-80 Dual Shaft Shredder Catalog', description: 'CS-80 heavy-duty dual shaft shredder.', keywords: ['CS-80', 'dual shaft', 'heavy duty'] },
            ru: { title: 'Каталог CS-80 двухвального шредера', description: 'CS-80 двухвальный шредер для тяжелых условий.', keywords: ['CS-80', 'двухвальный', 'шредер'] },
            ar: { title: 'كتالوج CS-80 آلة التمزيق ثنائية العمود', description: 'CS-80 آلة تمزيق ثنائية العمود للتطبيقات الشاقة.', keywords: ['CS-80', 'ثنائي العمود', 'آلة تمزيق'] }
        }
    },
    {
        id: 'cs-150',
        model: 'CS-150',
        category: 'dual-shaft',
        series: 'CS',
        paths: {
            tr: { html: '/catalogs/cs/cs-150/catalog.html', pdf: '/catalogs/cs/cs-150/catalog.pdf' },
            en: { html: '/catalogs/cs/cs-150/catalog-en.html', pdf: '/catalogs/cs/cs-150/catalog.pdf' },
            ru: { html: '/catalogs/cs/cs-150/catalog-ru.html', pdf: '/catalogs/cs/cs-150/catalog.pdf' },
            ar: { html: '/catalogs/cs/cs-150/catalog-ar.html', pdf: '/catalogs/cs/cs-150/catalog.pdf' }
        },
        thumbnail: '/catalogs/cs/cs-150/images/CS-150-1.jpeg',
        specs: { capacity: '3000-5000 kg/h', power: '45-132 kW (2x)' },
        translations: {
            tr: { title: 'CS-150 Çift Şaftlı Parçalama Makinesi Kataloğu', description: 'CS-150 yüksek kapasiteli çift şaftlı parçalama makinesi.', keywords: ['CS-150', 'çift şaftlı', 'yüksek kapasite'] },
            en: { title: 'CS-150 Dual Shaft Shredder Catalog', description: 'CS-150 high capacity dual shaft shredder.', keywords: ['CS-150', 'dual shaft', 'high capacity'] },
            ru: { title: 'Каталог CS-150 двухвального шредера', description: 'CS-150 высокопроизводительный двухвальный шредер.', keywords: ['CS-150', 'двухвальный', 'шредер'] },
            ar: { title: 'كتالوج CS-150 آلة التمزيق ثنائية العمود', description: 'CS-150 آلة تمزيق ثنائية العمود عالية السعة.', keywords: ['CS-150', 'ثنائي العمود', 'آلة تمزيق'] }
        }
    },
    {
        id: 'cs-180',
        model: 'CS-180',
        category: 'dual-shaft',
        series: 'CS',
        paths: {
            tr: { html: '/catalogs/cs/cs-180/catalog.html', pdf: '/catalogs/cs/cs-180/catalog.pdf' },
            en: { html: '/catalogs/cs/cs-180/catalog-en.html', pdf: '/catalogs/cs/cs-180/catalog.pdf' },
            ru: { html: '/catalogs/cs/cs-180/catalog-ru.html', pdf: '/catalogs/cs/cs-180/catalog.pdf' },
            ar: { html: '/catalogs/cs/cs-180/catalog-ar.html', pdf: '/catalogs/cs/cs-180/catalog.pdf' }
        },
        thumbnail: '/catalogs/cs/cs-180/images/CS-180-1.jpeg',
        specs: { capacity: '5000-8000 kg/h', power: '55-132 kW (2x)' },
        translations: {
            tr: { title: 'CS-180 Çift Şaftlı Parçalama Makinesi Kataloğu', description: 'CS-180 ağır sanayi çift şaftlı parçalama makinesi.', keywords: ['CS-180', 'çift şaftlı', 'ağır sanayi'] },
            en: { title: 'CS-180 Dual Shaft Shredder Catalog', description: 'CS-180 heavy industry dual shaft shredder.', keywords: ['CS-180', 'dual shaft', 'heavy industry'] },
            ru: { title: 'Каталог CS-180 двухвального шредера', description: 'CS-180 двухвальный шредер для тяжелой промышленности.', keywords: ['CS-180', 'двухвальный', 'шредер'] },
            ar: { title: 'كتالوج CS-180 آلة التمزيق ثنائية العمود', description: 'CS-180 آلة تمزيق ثنائية العمود للصناعة الثقيلة.', keywords: ['CS-180', 'ثنائي العمود', 'آلة تمزيق'] }
        }
    },
    {
        id: 'cs-200',
        model: 'CS-200',
        category: 'dual-shaft',
        series: 'CS',
        paths: {
            tr: { html: '/catalogs/cs/cs-200/catalog.html', pdf: '/catalogs/cs/cs-200/catalog.pdf' },
            en: { html: '/catalogs/cs/cs-200/catalog-en.html', pdf: '/catalogs/cs/cs-200/catalog.pdf' },
            ru: { html: '/catalogs/cs/cs-200/catalog-ru.html', pdf: '/catalogs/cs/cs-200/catalog.pdf' },
            ar: { html: '/catalogs/cs/cs-200/catalog-ar.html', pdf: '/catalogs/cs/cs-200/catalog.pdf' }
        },
        thumbnail: '/catalogs/cs/cs-200/images/CS-200-1.jpeg',
        specs: { capacity: '8000-15000 kg/h', power: '75-200 kW (2x)' },
        translations: {
            tr: { title: 'CS-200 Çift Şaftlı Parçalama Makinesi Kataloğu', description: 'CS-200 serinin en güçlü modeli. Maksimum kapasite ve güç.', keywords: ['CS-200', 'çift şaftlı', 'maksimum güç'] },
            en: { title: 'CS-200 Dual Shaft Shredder Catalog', description: 'CS-200 the most powerful in the series. Maximum capacity and power.', keywords: ['CS-200', 'dual shaft', 'maximum power'] },
            ru: { title: 'Каталог CS-200 двухвального шредера', description: 'CS-200 самый мощный в серии. Максимальная производительность.', keywords: ['CS-200', 'двухвальный', 'шредер'] },
            ar: { title: 'كتالوج CS-200 آلة التمزيق ثنائية العمود', description: 'CS-200 الأقوى في السلسلة. أقصى سعة وقوة.', keywords: ['CS-200', 'ثنائي العمود', 'آلة تمزيق'] }
        }
    },
    // DS Series - Quad Shaft Shredders
    {
        id: 'ds-80',
        model: 'DS-80',
        category: 'quad-shaft',
        series: 'DS',
        paths: {
            tr: { html: '/catalogs/ds/ds-80/catalog.html', pdf: '/catalogs/ds/ds-80/catalog.pdf' },
            en: { html: '/catalogs/ds/ds-80/catalog-en.html', pdf: '/catalogs/ds/ds-80/catalog.pdf' },
            ru: { html: '/catalogs/ds/ds-80/catalog-ru.html', pdf: '/catalogs/ds/ds-80/catalog.pdf' },
            ar: { html: '/catalogs/ds/ds-80/catalog-ar.html', pdf: '/catalogs/ds/ds-80/catalog.pdf' }
        },
        thumbnail: '/catalogs/ds/ds-80/images/1.jpeg',
        specs: { capacity: '500-1500 kg/h', power: '11-22 kW (4x)' },
        translations: {
            tr: { title: 'DS-80 Dört Şaftlı Parçalama Makinesi Kataloğu', description: 'DS-80 kompakt dört şaftlı parçalama makinesi. Hassas parçalama için ideal.', keywords: ['DS-80', 'dört şaftlı', 'parçalama makinesi'] },
            en: { title: 'DS-80 Four Shaft Shredder Catalog', description: 'DS-80 compact four shaft shredder. Ideal for precise shredding.', keywords: ['DS-80', 'four shaft', 'shredder'] },
            ru: { title: 'Каталог DS-80 четырехвального шредера', description: 'DS-80 компактный четырехвальный шредер для точного измельчения.', keywords: ['DS-80', 'четырехвальный', 'шредер'] },
            ar: { title: 'كتالوج DS-80 آلة التمزيق رباعية العمود', description: 'DS-80 آلة تمزيق رباعية العمود للتمزيق الدقيق.', keywords: ['DS-80', 'رباعي العمود', 'آلة تمزيق'] }
        }
    },
    {
        id: 'ds-100',
        model: 'DS-100',
        category: 'quad-shaft',
        series: 'DS',
        paths: {
            tr: { html: '/catalogs/ds/ds-100/catalog.html', pdf: '/catalogs/ds/ds-100/catalog.pdf' },
            en: { html: '/catalogs/ds/ds-100/catalog-en.html', pdf: '/catalogs/ds/ds-100/catalog.pdf' },
            ru: { html: '/catalogs/ds/ds-100/catalog-ru.html', pdf: '/catalogs/ds/ds-100/catalog.pdf' },
            ar: { html: '/catalogs/ds/ds-100/catalog-ar.html', pdf: '/catalogs/ds/ds-100/catalog.pdf' }
        },
        thumbnail: '/catalogs/ds/ds-100/images/1.jpeg',
        specs: { capacity: '1000-3000 kg/h', power: '22-45 kW (4x)' },
        translations: {
            tr: { title: 'DS-100 Dört Şaftlı Parçalama Makinesi Kataloğu', description: 'DS-100 endüstriyel dört şaftlı parçalama makinesi.', keywords: ['DS-100', 'dört şaftlı', 'endüstriyel'] },
            en: { title: 'DS-100 Four Shaft Shredder Catalog', description: 'DS-100 industrial four shaft shredder.', keywords: ['DS-100', 'four shaft', 'industrial'] },
            ru: { title: 'Каталог DS-100 четырехвального шредера', description: 'DS-100 промышленный четырехвальный шредер.', keywords: ['DS-100', 'четырехвальный', 'промышленный'] },
            ar: { title: 'كتالوج DS-100 آلة التمزيق رباعية العمود', description: 'DS-100 آلة تمزيق رباعية العمود صناعية.', keywords: ['DS-100', 'رباعي العمود', 'صناعي'] }
        }
    },
    {
        id: 'ds-150',
        model: 'DS-150',
        category: 'quad-shaft',
        series: 'DS',
        paths: {
            tr: { html: '/catalogs/ds/ds-150/catalog.html', pdf: '/catalogs/ds/ds-150/catalog.pdf' },
            en: { html: '/catalogs/ds/ds-150/catalog-en.html', pdf: '/catalogs/ds/ds-150/catalog.pdf' },
            ru: { html: '/catalogs/ds/ds-150/catalog-ru.html', pdf: '/catalogs/ds/ds-150/catalog.pdf' },
            ar: { html: '/catalogs/ds/ds-150/catalog-ar.html', pdf: '/catalogs/ds/ds-150/catalog.pdf' }
        },
        thumbnail: '/catalogs/ds/ds-150/images/1.jpeg',
        specs: { capacity: '3000-6000 kg/h', power: '45-132 kW (4x)' },
        translations: {
            tr: { title: 'DS-150 Dört Şaftlı Parçalama Makinesi Kataloğu', description: 'DS-150 yüksek kapasiteli dört şaftlı parçalama makinesi.', keywords: ['DS-150', 'dört şaftlı', 'yüksek kapasite'] },
            en: { title: 'DS-150 Four Shaft Shredder Catalog', description: 'DS-150 high capacity four shaft shredder.', keywords: ['DS-150', 'four shaft', 'high capacity'] },
            ru: { title: 'Каталог DS-150 четырехвального шредера', description: 'DS-150 высокопроизводительный четырехвальный шредер.', keywords: ['DS-150', 'четырехвальный', 'высокая производительность'] },
            ar: { title: 'كتالوج DS-150 آلة التمزيق رباعية العمود', description: 'DS-150 آلة تمزيق رباعية العمود عالية السعة.', keywords: ['DS-150', 'رباعي العمود', 'سعة عالية'] }
        }
    },
    {
        id: 'ds-200',
        model: 'DS-200',
        category: 'quad-shaft',
        series: 'DS',
        paths: {
            tr: { html: '/catalogs/ds/ds-200/catalog.html', pdf: '/catalogs/ds/ds-200/catalog.pdf' },
            en: { html: '/catalogs/ds/ds-200/catalog-en.html', pdf: '/catalogs/ds/ds-200/catalog.pdf' },
            ru: { html: '/catalogs/ds/ds-200/catalog-ru.html', pdf: '/catalogs/ds/ds-200/catalog.pdf' },
            ar: { html: '/catalogs/ds/ds-200/catalog-ar.html', pdf: '/catalogs/ds/ds-200/catalog.pdf' }
        },
        thumbnail: '/catalogs/ds/ds-200/images/1.jpeg',
        specs: { capacity: '6000-12000 kg/h', power: '75-160 kW (4x)' },
        translations: {
            tr: { title: 'DS-200 Dört Şaftlı Parçalama Makinesi Kataloğu', description: 'DS-200 serinin amiral gemisi. Mega kapasiteli dört şaftlı parçalama makinesi.', keywords: ['DS-200', 'dört şaftlı', 'mega kapasite'] },
            en: { title: 'DS-200 Four Shaft Shredder Catalog', description: 'DS-200 the flagship of the series. Mega capacity four shaft shredder.', keywords: ['DS-200', 'four shaft', 'mega capacity'] },
            ru: { title: 'Каталог DS-200 четырехвального шредера', description: 'DS-200 флагман серии. Мегапроизводительный четырехвальный шредер.', keywords: ['DS-200', 'четырехвальный', 'мега производительность'] },
            ar: { title: 'كتالوج DS-200 آلة التمزيق رباعية العمود', description: 'DS-200 الرائد في السلسلة. آلة تمزيق رباعية العمود بسعة ضخمة.', keywords: ['DS-200', 'رباعي العمود', 'سعة ضخمة'] }
        }
    },
    // Mobile Shredders
    {
        id: 'tsm-150',
        model: 'TSM-150',
        category: 'mobile',
        series: 'TSM',
        paths: {
            tr: { html: '/catalogs/mobile/tsm-150/catalog.html', pdf: '/catalogs/mobile/tsm-150/catalog.pdf' },
            en: { html: '/catalogs/mobile/tsm-150/catalog-en.html', pdf: '/catalogs/mobile/tsm-150/catalog.pdf' },
            ru: { html: '/catalogs/mobile/tsm-150/catalog-ru.html', pdf: '/catalogs/mobile/tsm-150/catalog.pdf' },
            ar: { html: '/catalogs/mobile/tsm-150/catalog-ar.html', pdf: '/catalogs/mobile/tsm-150/catalog.pdf' }
        },
        thumbnail: '/catalogs/mobile/tsm-150/images/1.jpeg',
        specs: { capacity: '1500 x 1800 mm', power: '400 HP' },
        translations: {
            tr: { title: 'TSM-150 Mobil Kırıcı Kataloğu', description: 'TSM-150 tek şaftlı mobil kırıcı. 1500mm rotor boyu.', keywords: ['TSM-150', 'mobil kırıcı', 'tek şaftlı', 'taşınabilir'] },
            en: { title: 'TSM-150 Mobile Shredder Catalog', description: 'TSM-150 single-shaft mobile shredder. 1500mm rotor length.', keywords: ['TSM-150', 'mobile shredder', 'single-shaft', 'portable'] },
            ru: { title: 'Каталог мобильного измельчителя TSM-150', description: 'TSM-150 одновальный мобильный измельчитель. Длина ротора 1500мм.', keywords: ['TSM-150', 'мобильный измельчитель', 'одновальный'] },
            ar: { title: 'كتالوج الكسارة المتنقلة TSM-150', description: 'TSM-150 كسارة متنقلة أحادية العمود. طول الدوار 1500 مم.', keywords: ['TSM-150', 'كسارة متنقلة', 'أحادي العمود'] }
        }
    },
    {
        id: 'tsm-300',
        model: 'TSM-300',
        category: 'mobile',
        series: 'TSM',
        paths: {
            tr: { html: '/catalogs/mobile/tsm-300/catalog.html', pdf: '/catalogs/mobile/tsm-300/catalog.pdf' },
            en: { html: '/catalogs/mobile/tsm-300/catalog-en.html', pdf: '/catalogs/mobile/tsm-300/catalog.pdf' },
            ru: { html: '/catalogs/mobile/tsm-300/catalog-ru.html', pdf: '/catalogs/mobile/tsm-300/catalog.pdf' },
            ar: { html: '/catalogs/mobile/tsm-300/catalog-ar.html', pdf: '/catalogs/mobile/tsm-300/catalog.pdf' }
        },
        thumbnail: '/catalogs/mobile/tsm-300/images/1.jpeg',
        specs: { capacity: '3000 x 2000 mm', power: '600 HP' },
        translations: {
            tr: { title: 'TSM-300 Mobil Kırıcı Kataloğu', description: 'TSM-300 tek şaftlı mobil kırıcı. 3000mm rotor boyu ile yüksek kapasite.', keywords: ['TSM-300', 'mobil kırıcı', 'tek şaftlı', 'yüksek kapasite'] },
            en: { title: 'TSM-300 Mobile Shredder Catalog', description: 'TSM-300 single-shaft mobile shredder. High capacity with 3000mm rotor.', keywords: ['TSM-300', 'mobile shredder', 'single-shaft', 'high capacity'] },
            ru: { title: 'Каталог мобильного измельчителя TSM-300', description: 'TSM-300 одновальный мобильный измельчитель. Высокая производительность с ротором 3000мм.', keywords: ['TSM-300', 'мобильный измельчитель', 'высокая производительность'] },
            ar: { title: 'كتالوج الكسارة المتنقلة TSM-300', description: 'TSM-300 كسارة متنقلة أحادية العمود. سعة عالية مع دوار 3000 مم.', keywords: ['TSM-300', 'كسارة متنقلة', 'سعة عالية'] }
        }
    },
    {
        id: 'csm-150',
        model: 'CSM-150',
        category: 'mobile',
        series: 'CSM',
        paths: {
            tr: { html: '/catalogs/mobile/csm-150/catalog.html', pdf: '/catalogs/mobile/csm-150/catalog.pdf' },
            en: { html: '/catalogs/mobile/csm-150/catalog-en.html', pdf: '/catalogs/mobile/csm-150/catalog.pdf' },
            ru: { html: '/catalogs/mobile/csm-150/catalog-ru.html', pdf: '/catalogs/mobile/csm-150/catalog.pdf' },
            ar: { html: '/catalogs/mobile/csm-150/catalog-ar.html', pdf: '/catalogs/mobile/csm-150/catalog.pdf' }
        },
        thumbnail: '/catalogs/mobile/csm-150/images/1.jpeg',
        specs: { capacity: '1500 x 1200 mm', power: '400 HP' },
        translations: {
            tr: { title: 'CSM-150 Mobil Kırıcı Kataloğu', description: 'CSM-150 çift şaftlı mobil kırıcı. 1500mm rotor boyu.', keywords: ['CSM-150', 'mobil kırıcı', 'çift şaftlı', 'taşınabilir'] },
            en: { title: 'CSM-150 Mobile Shredder Catalog', description: 'CSM-150 dual-shaft mobile shredder. 1500mm rotor length.', keywords: ['CSM-150', 'mobile shredder', 'dual-shaft', 'portable'] },
            ru: { title: 'Каталог мобильного измельчителя CSM-150', description: 'CSM-150 двухвальный мобильный измельчитель. Длина ротора 1500мм.', keywords: ['CSM-150', 'мобильный измельчитель', 'двухвальный'] },
            ar: { title: 'كتالوج الكسارة المتنقلة CSM-150', description: 'CSM-150 كسارة متنقلة ثنائية العمود. طول الدوار 1500 مم.', keywords: ['CSM-150', 'كسارة متنقلة', 'ثنائي العمود'] }
        }
    },
    {
        id: 'csm-200',
        model: 'CSM-200',
        category: 'mobile',
        series: 'CSM',
        paths: {
            tr: { html: '/catalogs/mobile/csm-200/catalog.html', pdf: '/catalogs/mobile/csm-200/catalog.pdf' },
            en: { html: '/catalogs/mobile/csm-200/catalog-en.html', pdf: '/catalogs/mobile/csm-200/catalog.pdf' },
            ru: { html: '/catalogs/mobile/csm-200/catalog-ru.html', pdf: '/catalogs/mobile/csm-200/catalog.pdf' },
            ar: { html: '/catalogs/mobile/csm-200/catalog-ar.html', pdf: '/catalogs/mobile/csm-200/catalog.pdf' }
        },
        thumbnail: '/catalogs/mobile/csm-200/images/1.jpeg',
        specs: { capacity: '2000 x 1800 mm', power: '800 HP' },
        translations: {
            tr: { title: 'CSM-200 Mobil Kırıcı Kataloğu', description: 'CSM-200 çift şaftlı mobil kırıcı. 2000mm rotor boyu ile en yüksek kapasite.', keywords: ['CSM-200', 'mobil kırıcı', 'çift şaftlı', 'mega kapasite'] },
            en: { title: 'CSM-200 Mobile Shredder Catalog', description: 'CSM-200 dual-shaft mobile shredder. Highest capacity with 2000mm rotor.', keywords: ['CSM-200', 'mobile shredder', 'dual-shaft', 'mega capacity'] },
            ru: { title: 'Каталог мобильного измельчителя CSM-200', description: 'CSM-200 двухвальный мобильный измельчитель. Максимальная производительность с ротором 2000мм.', keywords: ['CSM-200', 'мобильный измельчитель', 'максимальная производительность'] },
            ar: { title: 'كتالوج الكسارة المتنقلة CSM-200', description: 'CSM-200 كسارة متنقلة ثنائية العمود. أعلى سعة مع دوار 2000 مم.', keywords: ['CSM-200', 'كسارة متنقلة', 'سعة قصوى'] }
        }
    }
];

// Backward compatibility alias
export const catalogItems = catalogs;

// Category translations for UI
export const categoryTranslations: Record<CatalogCategory, Record<Language, string>> = {
    'single-shaft': {
        tr: 'Tek Şaftlı Parçalama Makineleri',
        en: 'Single Shaft Shredders',
        ru: 'Одновальные шредеры',
        ar: 'ماكينات التقطيع ذات العمود الواحد'
    },
    'dual-shaft': {
        tr: 'Çift Şaftlı Parçalama Makineleri',
        en: 'Dual Shaft Shredders',
        ru: 'Двухвальные шредеры',
        ar: 'ماكينات التقطيع ذات العمودين'
    },
    'quad-shaft': {
        tr: 'Dört Şaftlı Parçalama Makineleri',
        en: 'Quad Shaft Shredders',
        ru: 'Четырехвальные шредеры',
        ar: 'ماكينات التقطيع ذات أربعة أعمدة'
    },
    'metal': {
        tr: 'Metal Parçalama Makineleri',
        en: 'Metal Shredders',
        ru: 'Шредеры для металла',
        ar: 'ماكينات تقطيع المعادن'
    },
    'mobile': {
        tr: 'Mobil Kırıcılar',
        en: 'Mobile Shredders',
        ru: 'Мобильные шредеры',
        ar: 'الكسارات المتنقلة'
    },
    'pallet': {
        tr: 'Palet Parçalama Makineleri',
        en: 'Pallet Shredders',
        ru: 'Шредеры для паллет',
        ar: 'ماكينات تقطيع المنصات'
    },
    'harddisk': {
        tr: 'Harddisk İmha Makineleri',
        en: 'Hard Disk Destroyers',
        ru: 'Уничтожители жестких дисков',
        ar: 'ماكينات تدمير الأقراص الصلبة'
    },
    'tree-root': {
        tr: 'Ağaç Kökü Parçalama Makineleri',
        en: 'Tree Root Shredders',
        ru: 'Шредеры для корней деревьев',
        ar: 'ماكينات تقطيع جذور الأشجار'
    },
    'wood': {
        tr: 'Ağaç Parçalama Makineleri',
        en: 'Wood Shredders',
        ru: 'Шредеры для древесины',
        ar: 'ماكينات تقطيع الخشب'
    },
    'glass': {
        tr: 'Cam Şişe Kırma Makineleri',
        en: 'Glass Bottle Crushers',
        ru: 'Дробилки стеклянных бутылок',
        ar: 'ماكينات سحق الزجاجات'
    }
};

// Get catalog by ID
export const getCatalogById = (id: string): CatalogItem | undefined => {
    return catalogs.find(c => c.id === id);
};

// Get catalogs by category
export const getCatalogsByCategory = (category: CatalogCategory): CatalogItem[] => {
    return catalogs.filter(c => c.category === category);
};

// Get all catalog IDs
export const getAllCatalogIds = (): string[] => {
    return catalogs.map(c => c.id);
};

// Get all unique categories that have catalogs
export const getAllCategories = (): CatalogCategory[] => {
    const categories = new Set<CatalogCategory>();
    catalogs.forEach(catalog => categories.add(catalog.category));
    return Array.from(categories);
};

// Get category translation
export const getCategoryTranslation = (category: string, language: Language): string => {
    const cat = category as CatalogCategory;
    if (categoryTranslations[cat]) {
        return categoryTranslations[cat][language] || categoryTranslations[cat].en;
    }
    return category;
};

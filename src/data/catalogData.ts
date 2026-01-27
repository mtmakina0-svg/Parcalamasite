import { Language } from '../contexts/LanguageContext';

export type CatalogCategory = 'single-shaft' | 'dual-shaft' | 'quad-shaft' | 'metal' | 'mobile' | 'pallet' | 'tree-root' | 'wood' | 'glass' | 'harddisk';

export interface CatalogTranslation {
    title: string;
    description: string;
    keywords: string[];
}

export interface CatalogItem {
    id: string;
    model: string;
    category: CatalogCategory;
    series: string;
    htmlPath: string;
    pdfPath: string;
    thumbnail: string;
    capacity: string;
    power: string;
    translations: Record<Language, CatalogTranslation>;
}

export const catalogs: CatalogItem[] = [
    {
        id: 'tsh-60',
        model: 'TSH-60',
        category: 'single-shaft',
        series: 'TSH',
        htmlPath: '/catalogs/tsh/tsh-60/catalog.html',
        pdfPath: '/catalogs/tsh/tsh-60/catalog.pdf',
        thumbnail: '/images/products/single-shaft/tsh-60.webp',
        capacity: '500-1000 kg/h',
        power: '30-37 kW',
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
        htmlPath: '/catalogs/tsh/tsh-80/catalog.html',
        pdfPath: '/catalogs/tsh/tsh-80/catalog.pdf',
        thumbnail: '/images/products/single-shaft/tsh-80.webp',
        capacity: '1000-2000 kg/h',
        power: '45-55 kW',
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
        htmlPath: '/catalogs/tsh/tsh-100/catalog.html',
        pdfPath: '/catalogs/tsh/tsh-100/catalog.pdf',
        thumbnail: '/images/products/single-shaft/tsh-100.webp',
        capacity: '2000-3500 kg/h',
        power: '75-90 kW',
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
        htmlPath: '/catalogs/tsh/tsh-130/catalog.html',
        pdfPath: '/catalogs/tsh/tsh-130/catalog.pdf',
        thumbnail: '/images/products/single-shaft/tsh-130.webp',
        capacity: '3500-5000 kg/h',
        power: '110-132 kW',
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
        htmlPath: '/catalogs/tsh/tsh-160/catalog.html',
        pdfPath: '/catalogs/tsh/tsh-160/catalog.pdf',
        thumbnail: '/images/products/single-shaft/tsh-160.webp',
        capacity: '5000-8000 kg/h',
        power: '160-200 kW',
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
    }
];

// Helper function to get catalog by ID
export const getCatalogById = (id: string): CatalogItem | undefined => {
    return catalogs.find(catalog => catalog.id === id);
};

// Helper function to get catalogs by category
export const getCatalogsByCategory = (category: CatalogCategory): CatalogItem[] => {
    return catalogs.filter(catalog => catalog.category === category);
};

// Helper function to get all catalog IDs
export const getAllCatalogIds = (): string[] => {
    return catalogs.map(catalog => catalog.id);
};

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
        ar: 'ماكينات التقطيع ذات الأربعة أعمدة'
    },
    'metal': {
        tr: 'Metal Parçalama Makineleri',
        en: 'Metal Shredders',
        ru: 'Шредеры для металла',
        ar: 'ماكينات تقطيع المعادن'
    },
    'mobile': {
        tr: 'Mobil Parçalama Makineleri',
        en: 'Mobile Shredders',
        ru: 'Мобильные шредеры',
        ar: 'ماكينات التقطيع المتنقلة'
    },
    'pallet': {
        tr: 'Palet Parçalama Makineleri',
        en: 'Pallet Shredders',
        ru: 'Шредеры для поддонов',
        ar: 'ماكينات تقطيع المنصات'
    },
    'tree-root': {
        tr: 'Ağaç Kök Parçalama Makineleri',
        en: 'Tree Root Shredders',
        ru: 'Шредеры для корней деревьев',
        ar: 'ماكينات تقطيع جذور الأشجار'
    },
    'wood': {
        tr: 'Odun Parçalama Makineleri',
        en: 'Wood Shredders',
        ru: 'Шредеры для древесины',
        ar: 'ماكينات تقطيع الخشب'
    },
    'glass': {
        tr: 'Cam Parçalama Makineleri',
        en: 'Glass Shredders',
        ru: 'Шредеры для стекла',
        ar: 'ماكينات تقطيع الزجاج'
    },
    'harddisk': {
        tr: 'Sabit Disk Parçalama Makineleri',
        en: 'Hard Disk Shredders',
        ru: 'Шредеры для жестких дисков',
        ar: 'ماكينات تقطيع الأقراص الصلبة'
    }
};

import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { FileDown, BookOpen, ChevronRight, ArrowLeft, ExternalLink } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { useLanguage, Language } from './LanguageContext';
import { catalogs, getCatalogPaths, categoryTranslations, CatalogCategory, CatalogItem } from '../data/catalogData';
import { getModelImages } from '../utils/imageConfig';

interface ECatalogPageProps {
  onBackToMain: () => void;
  onNavigate?: (page: string, catalogId?: string) => void;
}

// Category item interface
interface CategoryInfo {
  id: CatalogCategory;
  catalogCount: number;
  thumbnail: string;
}

// Category slug mapping for URLs
const categorySlugMap: Record<CatalogCategory, Record<Language, string>> = {
  'single-shaft': { tr: 'tek-saftli', en: 'single-shaft', ru: 'odnosnatnyj', ar: 'single-shaft' },
  'dual-shaft': { tr: 'cift-saftli', en: 'dual-shaft', ru: 'dvukhvalnyj', ar: 'dual-shaft' },
  'quad-shaft': { tr: 'dort-saftli', en: 'quad-shaft', ru: 'chetyrekhvalnyj', ar: 'quad-shaft' },
  'metal': { tr: 'metal', en: 'metal', ru: 'metall', ar: 'metal' },
  'mobile': { tr: 'mobil', en: 'mobile', ru: 'mobilnyj', ar: 'mobile' },
  'pallet': { tr: 'palet', en: 'pallet', ru: 'pallet', ar: 'pallet' },
  'harddisk': { tr: 'harddisk', en: 'harddisk', ru: 'harddisk', ar: 'harddisk' },
  'tree-root': { tr: 'agac-koku', en: 'tree-root', ru: 'tree-root', ar: 'tree-root' },
  'wood': { tr: 'odun', en: 'wood', ru: 'wood', ar: 'wood' },
  'glass': { tr: 'cam', en: 'glass', ru: 'glass', ar: 'glass' }
};

// Get category from URL slug
const getCategoryFromSlug = (slug: string, language: Language): CatalogCategory | null => {
  // First, check if the slug is a direct category ID
  if (Object.keys(categorySlugMap).includes(slug as CatalogCategory)) {
    return slug as CatalogCategory;
  }

  // Then check language-specific slugs
  for (const [category, slugs] of Object.entries(categorySlugMap)) {
    if (slugs[language] === slug) {
      return category as CatalogCategory;
    }
  }
  return null;
};

// Get available categories with catalog count
const getAvailableCategories = (): CategoryInfo[] => {
  const categoryMap = new Map<CatalogCategory, { count: number; thumbnail: string }>();

  catalogs.forEach(catalog => {
    if (!categoryMap.has(catalog.category)) {
      // Get first product image for category thumbnail
      const images = getModelImages(catalog.category, catalog.model);
      categoryMap.set(catalog.category, { count: 1, thumbnail: images.main });
    } else {
      const current = categoryMap.get(catalog.category)!;
      categoryMap.set(catalog.category, { ...current, count: current.count + 1 });
    }
  });

  return Array.from(categoryMap.entries()).map(([id, data]) => ({
    id,
    catalogCount: data.count,
    thumbnail: data.thumbnail
  }));
};

// Get catalogs for a category with images
const getCatalogsWithImages = (category: CatalogCategory): (CatalogItem & { imageUrl: string })[] => {
  return catalogs
    .filter(c => c.category === category)
    .map(catalog => ({
      ...catalog,
      imageUrl: getModelImages(catalog.category, catalog.model).main
    }));
};

// Category Card Component
const CategoryCard = ({
  category,
  language,
  onClick
}: {
  category: CategoryInfo;
  language: Language;
  onClick: () => void;
}) => {
  const categoryName = categoryTranslations[category.id]?.[language] || category.id;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -8, boxShadow: '0 20px 40px rgba(0,0,0,0.15)' }}
      onClick={onClick}
      className="group bg-white rounded-2xl overflow-hidden shadow-lg cursor-pointer border border-gray-100 transition-all duration-300"
    >
      {/* Thumbnail - object-cover for full fill */}
      <div className="relative h-64 overflow-hidden">
        <img
          src={category.thumbnail}
          alt={categoryName}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        <div className="absolute bottom-4 left-4 right-4">
          <span className="bg-[#F4CE14] text-[#1E1E1E] px-3 py-1 rounded-full text-sm font-medium">
            {category.catalogCount} Katalog
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-[#45474B] mb-3 group-hover:text-[#F4CE14] transition-colors flex items-center justify-between">
          {categoryName}
          <ChevronRight size={24} className="text-[#F4CE14] group-hover:translate-x-2 transition-transform" />
        </h3>
      </div>
    </motion.div>
  );
};

// Model Card Component
const ModelCard = ({
  catalog,
  imageUrl,
  language,
  t,
  onViewCatalog,
  onDownloadPDF
}: {
  catalog: CatalogItem;
  imageUrl: string;
  language: Language;
  t: (key: string) => string;
  onViewCatalog: (catalog: CatalogItem) => void;
  onDownloadPDF: (catalog: CatalogItem) => void;
}) => {
  const translation = catalog.translations[language] || catalog.translations.tr;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
    >
      {/* Thumbnail - object-cover for full fill */}
      <div className="relative h-56 overflow-hidden bg-gradient-to-br from-[#F5F7F8] to-[#E8EAEC]">
        <img
          src={imageUrl}
          alt={catalog.model}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        <div className="absolute top-4 left-4">
          <span className="bg-[#F4CE14] text-[#1E1E1E] px-3 py-1 rounded-full text-sm font-bold">
            {catalog.model}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-lg font-bold text-[#45474B] mb-2 group-hover:text-[#F4CE14] transition-colors">
          {translation.title.replace(' Kataloğu', '').replace(' Catalog', '')}
        </h3>
        <p className="text-[#6B7280] text-sm mb-4 line-clamp-2">
          {translation.description}
        </p>

        {/* Specs */}
        <div className="flex flex-wrap gap-2 mb-5">
          {catalog.specs.capacity && (
            <span className="bg-[#F5F7F8] text-[#45474B] px-3 py-1 rounded-lg text-xs">
              {t('ecatalog_capacity')}: {catalog.specs.capacity}
            </span>
          )}
          {catalog.specs.power && (
            <span className="bg-[#F5F7F8] text-[#45474B] px-3 py-1 rounded-lg text-xs">
              {t('ecatalog_power')}: {catalog.specs.power}
            </span>
          )}
        </div>

        {/* Actions */}
        <div className="flex gap-3">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => onViewCatalog(catalog)}
            className="flex-1 flex items-center justify-center gap-2 bg-[#45474B] text-white py-3 px-4 rounded-lg hover:bg-[#35373A] transition-colors"
          >
            <ExternalLink size={18} />
            <span className="text-sm font-medium">{t('ecatalog_view_catalog')}</span>
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => onDownloadPDF(catalog)}
            className="flex items-center justify-center gap-2 bg-[#F4CE14] text-[#1E1E1E] py-3 px-4 rounded-lg hover:bg-[#E5BF12] transition-colors"
          >
            <FileDown size={18} />
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export const ECatalogPage = ({ onBackToMain }: ECatalogPageProps) => {
  const { t, language } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<CatalogCategory | null>(null);

  const categories = getAvailableCategories();
  const catalogsInCategory = selectedCategory ? getCatalogsWithImages(selectedCategory) : [];

  // Track current pathname to detect changes
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  // Listen for URL changes (popstate for browser back/forward, and custom event for programmatic navigation)
  useEffect(() => {
    const handleLocationChange = () => {
      setCurrentPath(window.location.pathname);
    };

    // Listen for browser back/forward navigation
    window.addEventListener('popstate', handleLocationChange);

    // Also listen for custom navigation events (from header links)
    window.addEventListener('urlchange', handleLocationChange);

    return () => {
      window.removeEventListener('popstate', handleLocationChange);
      window.removeEventListener('urlchange', handleLocationChange);
    };
  }, []);

  // Parse URL to get initial category - now depends on currentPath
  useEffect(() => {
    const pathParts = currentPath.split('/').filter(Boolean);

    // URL format: /tr/e-katalog/tek-saftli or /tr/e-katalog
    if (pathParts.length >= 2 && (pathParts[1] === 'e-katalog' || pathParts[1] === 'e-catalog')) {
      if (pathParts.length >= 3) {
        // Category is specified in URL
        const categorySlug = pathParts[2];
        const category = getCategoryFromSlug(categorySlug, language as Language);
        if (category) {
          setSelectedCategory(category);
        } else {
          setSelectedCategory(null);
        }
      } else {
        // Just /tr/e-katalog - show category list
        setSelectedCategory(null);
      }
    }
  }, [language, currentPath]);

  // Update URL when category changes
  const updateUrl = (category: CatalogCategory | null) => {
    const langPrefix = language === 'tr' ? '/tr' : `/${language}`;
    const ecatalogSlug = language === 'tr' ? 'e-katalog' : 'e-catalog';

    let newUrl: string;
    if (category) {
      const categorySlug = categorySlugMap[category]?.[language as Language] || category;
      newUrl = `${langPrefix}/${ecatalogSlug}/${categorySlug}`;
    } else {
      newUrl = `${langPrefix}/${ecatalogSlug}`;
    }

    window.history.pushState({}, '', newUrl);
  };

  // Handle category selection with URL update
  const handleCategorySelect = (category: CatalogCategory) => {
    setSelectedCategory(category);
    updateUrl(category);
  };

  // Handle back to categories with URL update
  const handleBackToCategories = () => {
    setSelectedCategory(null);
    updateUrl(null);
  };

  // Handle PDF download with custom filename
  const handleDownloadPDF = async (catalog: CatalogItem) => {
    const translation = catalog.translations[language as Language] || catalog.translations.tr;
    const machineName = translation.title.replace(' Kataloğu', '').replace(' Catalog', '');
    const filename = `MT Makina - ${catalog.model} ${machineName}.pdf`;
    const catalogPaths = getCatalogPaths(catalog, language as Language);

    try {
      // First check if a real PDF file exists
      const headResponse = await fetch(catalogPaths.pdf, { method: 'HEAD' });
      const contentType = headResponse.headers.get('content-type') || '';
      const isPdf = headResponse.ok && contentType.includes('application/pdf');

      if (isPdf) {
        // Real PDF exists — download it
        const response = await fetch(catalogPaths.pdf);
        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        window.URL.revokeObjectURL(url);
      } else {
        // No PDF file — open HTML catalog for print-to-PDF
        window.open(catalogPaths.html, '_blank');
      }
    } catch {
      // Fallback: open HTML catalog in new tab
      window.open(catalogPaths.html, '_blank');
    }
  };

  // Handle catalog view - opens in new tab for proper asset loading
  const handleViewCatalog = (catalog: CatalogItem) => {
    // Open HTML catalog in new tab - assets will load correctly with relative paths
    const catalogPaths = getCatalogPaths(catalog, language as Language);
    window.open(catalogPaths.html, '_blank');
  };

  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: 'Mulish, sans-serif' }}>
      {/* SEO - Explicit robots meta for indexing */}
      <Helmet>
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow" />
      </Helmet>

      {/* Header Spacer */}
      <div className="h-20"></div>

      {/* Hero Section */}
      <section className="relative py-16 bg-gradient-to-br from-[#45474B] via-[#3A3C3F] to-[#2F3032]">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,.1) 35px, rgba(255,255,255,.1) 70px)',
          }}></div>
        </div>

        <div className="container mx-auto px-4 lg:px-8 max-w-[1440px] relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="flex items-center justify-center mb-4">
              <BookOpen size={48} className="text-[#F4CE14]" />
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl text-white mb-3">
              {t('ecatalog_grid_title')}
            </h1>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              {t('ecatalog_grid_subtitle')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Breadcrumb & Back Button */}
      {selectedCategory && (
        <section className="py-4 bg-[#F5F7F8] border-b border-gray-200">
          <div className="container mx-auto px-4 lg:px-8 max-w-[1440px]">
            <motion.button
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              onClick={handleBackToCategories}
              className="flex items-center gap-2 text-[#45474B] hover:text-[#F4CE14] transition-colors font-medium"
            >
              <ArrowLeft size={20} />
              <span>{t('ecatalog_back_to_list')}</span>
            </motion.button>
          </div>
        </section>
      )}

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 lg:px-8 max-w-[1440px]">
          {!selectedCategory ? (
            // Category Grid
            <>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-2xl md:text-3xl font-bold text-[#45474B] mb-8 text-center"
              >
                {language === 'tr' ? 'Katalog Kategorileri' :
                  language === 'en' ? 'Catalog Categories' :
                    language === 'ru' ? 'Категории каталогов' : 'فئات الكتالوج'}
              </motion.h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {categories.map((category) => (
                  <CategoryCard
                    key={category.id}
                    category={category}
                    language={language as Language}
                    onClick={() => handleCategorySelect(category.id)}
                  />
                ))}
              </div>
            </>
          ) : (
            // Models Grid
            <>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-2xl md:text-3xl font-bold text-[#45474B] mb-2 text-center"
              >
                {categoryTranslations[selectedCategory]?.[language as Language] || selectedCategory}
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-[#6B7280] mb-8 text-center"
              >
                {catalogsInCategory.length} {language === 'tr' ? 'model katalog' :
                  language === 'en' ? 'model catalogs' :
                    language === 'ru' ? 'каталогов моделей' : 'كتالوجات النماذج'}
              </motion.p>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {catalogsInCategory.map((catalog) => (
                  <ModelCard
                    key={catalog.id}
                    catalog={catalog}
                    imageUrl={catalog.imageUrl}
                    language={language as Language}
                    t={t}
                    onViewCatalog={handleViewCatalog}
                    onDownloadPDF={handleDownloadPDF}
                  />
                ))}
              </div>
            </>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-[#45474B] to-[#35373A]">
        <div className="container mx-auto px-4 lg:px-8 max-w-[1440px] text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl md:text-3xl text-white mb-4">
              {t('ecatalog_cta_title')}
            </h2>
            <p className="text-white/70 mb-8 max-w-xl mx-auto">
              {t('ecatalog_cta_description')}
            </p>
            <motion.a
              href="https://wa.me/905423109930?text=Merhaba%20MT%20Makina%2C%20özel%20bir%20çözüm%20için%20görüşmek%20istiyorum."
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 bg-[#F4CE14] text-[#1E1E1E] px-8 py-4 rounded-lg text-lg font-medium transition-all shadow-lg hover:shadow-xl"
            >
              {t('ecatalog_cta_button')}
              <ChevronRight size={20} />
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};
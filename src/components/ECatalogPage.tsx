import React, { useState } from 'react';
import { motion } from 'motion/react';
import { FileDown, BookOpen, ChevronRight, ArrowLeft, Eye } from 'lucide-react';
import { useLanguage, Language } from './LanguageContext';
import { catalogs, getCatalogById, categoryTranslations, CatalogCategory, CatalogItem } from '../data/catalogData';
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
      {/* Thumbnail */}
      <div className="relative h-64 bg-gradient-to-br from-[#45474B] to-[#2F3032] overflow-hidden">
        <img
          src={category.thumbnail}
          alt={categoryName}
          className="w-full h-full object-contain p-6 group-hover:scale-110 transition-transform duration-500"
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
  onViewCatalog: (catalogId: string) => void;
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
      {/* Thumbnail */}
      <div className="relative h-56 bg-gradient-to-br from-[#F5F7F8] to-[#E8EAEC] overflow-hidden">
        <img
          src={imageUrl}
          alt={catalog.model}
          className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-500"
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
            onClick={() => onViewCatalog(catalog.id)}
            className="flex-1 flex items-center justify-center gap-2 bg-[#45474B] text-white py-3 px-4 rounded-lg hover:bg-[#35373A] transition-colors"
          >
            <Eye size={18} />
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

// Catalog Viewer Modal
const CatalogViewer = ({
  catalog,
  onClose
}: {
  catalog: CatalogItem;
  onClose: () => void;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="bg-white rounded-2xl w-full max-w-6xl h-[90vh] overflow-hidden flex flex-col"
        onClick={e => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b bg-[#45474B]">
          <h3 className="text-xl font-bold text-white">{catalog.model} Katalog</h3>
          <button
            onClick={onClose}
            className="text-white hover:text-[#F4CE14] transition-colors text-2xl font-bold"
          >
            ×
          </button>
        </div>

        {/* Catalog Content */}
        <div className="flex-1 overflow-hidden">
          <iframe
            src={catalog.htmlPath}
            title={`${catalog.model} Katalog`}
            className="w-full h-full border-0"
            style={{ minHeight: '100%' }}
          />
        </div>
      </motion.div>
    </motion.div>
  );
};

export const ECatalogPage = ({ onBackToMain, onNavigate }: ECatalogPageProps) => {
  const { t, language } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<CatalogCategory | null>(null);
  const [viewingCatalog, setViewingCatalog] = useState<CatalogItem | null>(null);

  const categories = getAvailableCategories();
  const catalogsInCategory = selectedCategory ? getCatalogsWithImages(selectedCategory) : [];

  // Handle PDF download with custom filename
  const handleDownloadPDF = async (catalog: CatalogItem) => {
    const translation = catalog.translations[language] || catalog.translations.tr;
    const machineName = translation.title.replace(' Kataloğu', '').replace(' Catalog', '');
    const filename = `MT Makina - ${catalog.model} ${machineName}.pdf`;

    try {
      const response = await fetch(catalog.pdfPath);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = filename;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      // Fallback to direct link
      const a = document.createElement('a');
      a.href = catalog.pdfPath;
      a.download = filename;
      a.click();
    }
  };

  const handleViewCatalog = (catalogId: string) => {
    const catalog = getCatalogById(catalogId);
    if (catalog) {
      setViewingCatalog(catalog);
    }
  };

  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: 'Mulish, sans-serif' }}>
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
              onClick={() => setSelectedCategory(null)}
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
                    language={language}
                    onClick={() => setSelectedCategory(category.id)}
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
                {categoryTranslations[selectedCategory]?.[language] || selectedCategory}
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
                    language={language}
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

      {/* Catalog Viewer Modal */}
      {viewingCatalog && (
        <CatalogViewer
          catalog={viewingCatalog}
          onClose={() => setViewingCatalog(null)}
        />
      )}
    </div>
  );
};
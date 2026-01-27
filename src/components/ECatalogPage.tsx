import React, { useState, useMemo } from 'react';
import { motion } from 'motion/react';
import { FileDown, BookOpen, Eye, ArrowRight, Filter, Grid3X3 } from 'lucide-react';
import { useLanguage, Language } from './LanguageContext';
import { catalogItems, getCatalogsByCategory, getAllCategories, getCategoryTranslation, CatalogItem } from '../data/catalogData';

interface ECatalogPageProps {
  onBackToMain: () => void;
  onNavigate?: (page: string, catalogId?: string) => void;
}

// Catalog Card Component
const CatalogCard = ({
  catalog,
  language,
  t,
  onViewCatalog
}: {
  catalog: CatalogItem;
  language: Language;
  t: (key: string) => string;
  onViewCatalog: (catalogId: string) => void;
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
          src={catalog.thumbnail}
          alt={translation.title}
          className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        <div className="absolute top-4 left-4">
          <span className="bg-[#F4CE14] text-[#1E1E1E] px-3 py-1 rounded-full text-sm font-medium">
            {getCategoryTranslation(catalog.category, language)}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-[#45474B] mb-2 group-hover:text-[#F4CE14] transition-colors">
          {translation.title}
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

          <motion.a
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            href={catalog.pdfPath}
            download
            className="flex items-center justify-center gap-2 bg-[#F4CE14] text-[#1E1E1E] py-3 px-4 rounded-lg hover:bg-[#E5BF12] transition-colors"
          >
            <FileDown size={18} />
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
};

export const ECatalogPage = ({ onBackToMain, onNavigate }: ECatalogPageProps) => {
  const { t, language } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  // Get all categories
  const categories = useMemo(() => getAllCategories(), []);

  // Filter catalogs by category
  const filteredCatalogs = useMemo(() => {
    if (selectedCategory === 'all') {
      return catalogItems;
    }
    return getCatalogsByCategory(selectedCategory);
  }, [selectedCategory]);

  const handleViewCatalog = (catalogId: string) => {
    if (onNavigate) {
      onNavigate('catalog-detail', catalogId);
    }
  };

  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: 'Mulish, sans-serif' }}>
      {/* Header Spacer */}
      <div className="h-20"></div>

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-[#45474B] via-[#3A3C3F] to-[#2F3032]">
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
            <div className="flex items-center justify-center mb-5">
              <BookOpen size={52} className="text-[#F4CE14]" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl text-white mb-4">
              {t('ecatalog_grid_title')}
            </h1>
            <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto">
              {t('ecatalog_grid_subtitle')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-[#F5F7F8] border-b border-gray-200">
        <div className="container mx-auto px-4 lg:px-8 max-w-[1440px]">
          <div className="flex items-center gap-4 overflow-x-auto pb-2">
            <div className="flex items-center gap-2 text-[#45474B] shrink-0">
              <Filter size={18} />
              <span className="font-medium">{t('ecatalog_filter_category')}:</span>
            </div>

            <button
              onClick={() => setSelectedCategory('all')}
              className={`shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-all ${selectedCategory === 'all'
                  ? 'bg-[#F4CE14] text-[#1E1E1E]'
                  : 'bg-white text-[#45474B] hover:bg-gray-100'
                }`}
            >
              {t('ecatalog_all_categories')}
            </button>

            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-all ${selectedCategory === category
                    ? 'bg-[#F4CE14] text-[#1E1E1E]'
                    : 'bg-white text-[#45474B] hover:bg-gray-100'
                  }`}
              >
                {getCategoryTranslation(category, language)}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Catalog Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 lg:px-8 max-w-[1440px]">
          {filteredCatalogs.length > 0 ? (
            <>
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-2 text-[#6B7280]">
                  <Grid3X3 size={18} />
                  <span>{filteredCatalogs.length} {t('ecatalog_series')}</span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredCatalogs.map((catalog, index) => (
                  <CatalogCard
                    key={catalog.id}
                    catalog={catalog}
                    language={language}
                    t={t}
                    onViewCatalog={handleViewCatalog}
                  />
                ))}
              </div>
            </>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center py-16"
            >
              <BookOpen size={64} className="mx-auto mb-4 text-[#D1D5DB]" />
              <p className="text-[#6B7280] text-lg">{t('ecatalog_no_catalogs')}</p>
            </motion.div>
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
              <ArrowRight size={20} />
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};
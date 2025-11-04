import React, { useEffect, useState } from 'react';
import { HelmetProvider } from "react-helmet-async"; // ✅ HelmetProvider eklendi
import { LanguageProvider, useLanguage } from './components/LanguageContext';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { IntroSection } from './components/IntroSection';
import { ProductsSection } from './components/ProductsSection';
import { TechnologySection } from './components/TechnologySection';
import { ReferencesSection } from './components/ReferencesSection';
import { ContactSection } from './components/ContactSection';
import { CTASection } from './components/CTASection';
import { Footer } from './components/Footer';
import { WasteCategoriesPage } from './components/WasteCategoriesPage';
import { WasteDetailPage } from './components/WasteDetailPage';
import { ChatWidget } from './components/ChatWidget';
import { ProductsOverviewPage } from './components/ProductsOverviewPage';
import { AboutPage } from './components/AboutPage';
import { ReferencesOverviewPage } from './components/ReferencesOverviewPage';
import { TechnologyPage } from './components/TechnologyPage';
import { CertificatesPage } from './components/CertificatesPage';
import { ProductDetailPage } from './components/ProductDetailPage';
import { ProductCategoryPage } from './components/ProductCategoryPage';
import { ECatalogPage } from './components/ECatalogPage';
import { ContactPage } from './components/ContactPage';
import { IntroLoader } from './components/IntroLoader';
import { 
  generateUrl, 
  seoMetadata, 
  getProductCategorySEO, 
  getProductModelSEO, 
  updateSEOMetadata,
  generateProductStructuredData,
  generateBreadcrumbStructuredData,
  insertStructuredData,
  generateOrganizationStructuredData,
  generateLocalBusinessStructuredData
} from './utils/seoConfig';

type PageView = 'main' | 'waste-categories' | 'waste-detail' | 'products-overview' | 'about' | 'references-overview' | 'technology' | 'certificates' | 'product-category' | 'product-detail' | 'ecatalog' | 'contact';
type ProductType = 'single-shaft' | 'dual-shaft' | 'quad-shaft' | 'metal' | 'granulator' | 'baler' | 'conveyor' | 'separator' | null;

/* ---------------------------------------------------------
   URL OKUMA – hangi sayfadayız?
--------------------------------------------------------- */
function parseUrl(): { page: PageView; product?: ProductType; model?: string; wasteCategory?: string } {
  const path = window.location.pathname;
  console.log('parseUrl - path:', path);

  if (path === '/' || path === '/home') return { page: 'main' };
  if (path === '/kurumsal') return { page: 'about' };
  if (path === '/urunler') return { page: 'products-overview' };
  if (path === '/teknoloji') return { page: 'technology' };
  if (path === '/referanslar') return { page: 'references-overview' };
  if (path === '/sertifikalar') return { page: 'certificates' };
  if (path === '/iletisim') return { page: 'contact' };
  if (path === '/e-katalog') return { page: 'ecatalog' };
  if (path === '/atik-turleri') return { page: 'waste-categories' };

  if (path.startsWith('/atik-turleri/')) {
    const category = path.substring('/atik-turleri/'.length);
    return { page: 'waste-detail', wasteCategory: category };
  }

  const productCategoryMap: { [key: string]: ProductType } = {
    '/tek-shaftli-parcalama-makinesi': 'single-shaft',
    '/cift-shaftli-parcalama-makinesi': 'dual-shaft',
    '/dort-shaftli-parcalama-makinesi': 'quad-shaft',
    '/metal-parcalama-makinesi': 'metal',
    '/granulator-makinesi': 'granulator',
    '/balyalama-makinesi': 'baler',
    '/konveyor-sistemi': 'conveyor',
    '/ayristirma-makinesi': 'separator'
  };

  for (const [urlPath, productType] of Object.entries(productCategoryMap)) {
    if (path === urlPath) return { page: 'product-category', product: productType };
    if (path.startsWith(urlPath + '/')) {
      const model = path.substring(urlPath.length + 1).toUpperCase();
      return { page: 'product-detail', product: productType, model };
    }
  }

  return { page: 'main' };
}

/* ---------------------------------------------------------
   SAYFA İÇERİĞİ
--------------------------------------------------------- */
function AppContent() {
  const { isRTL } = useLanguage();
  const [showIntro, setShowIntro] = useState(true);
  const [currentPage, setCurrentPage] = useState<PageView>('main');
  const [selectedProduct, setSelectedProduct] = useState<ProductType>(null);
  const [selectedModelName, setSelectedModelName] = useState<string>('TSH-60');
  const [selectedWasteCategory, setSelectedWasteCategory] = useState<string | null>(null);

  useEffect(() => {
    const urlState = parseUrl();
    setCurrentPage(urlState.page);
    if (urlState.product) setSelectedProduct(urlState.product);
    if (urlState.model) setSelectedModelName(urlState.model);
    if (urlState.wasteCategory) setSelectedWasteCategory(urlState.wasteCategory);
  }, []);

  // dil yönü
  useEffect(() => {
    document.documentElement.dir = isRTL ? 'rtl' : 'ltr';
  }, [isRTL]);

  // scroll top
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [currentPage]);

  /* --------------------------
     SAYFA SEÇİMİ
  -------------------------- */
  if (currentPage === 'contact') return <ContactPage onBackToMain={() => setCurrentPage('main')} />;
  if (currentPage === 'about') return <AboutPage onBackToMain={() => setCurrentPage('main')} />;
  if (currentPage === 'product-detail' && selectedProduct)
    return <ProductDetailPage productType={selectedProduct} modelName={selectedModelName} onBackToMain={() => setCurrentPage('main')} />;
  
  // Ana sayfa
  return (
    <>
      {showIntro && <IntroLoader onComplete={() => setShowIntro(false)} />}

      {!showIntro && (
        <div className="min-h-screen bg-white">
          <Header />
          <main>
            <HeroSection />
            <IntroSection />
            <ProductsSection />
            <TechnologySection />
            <ReferencesSection />
            <ContactSection />
            <CTASection />
          </main>
          <Footer />
          <ChatWidget />
        </div>
      )}
    </>
  );
}

/* ---------------------------------------------------------
   UYGULAMANIN ANA KISMI (HelmetProvider eklendi)
--------------------------------------------------------- */
export default function App() {
  return (
    <HelmetProvider>
      <LanguageProvider>
        <AppContent />
      </LanguageProvider>
    </HelmetProvider>
  );
}

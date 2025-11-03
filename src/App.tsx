import React, { useEffect, useState } from 'react';
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
import { ECatalogPage } from './components/ECatalogPage';
import { ContactPage } from './components/ContactPage';
import { IntroLoader } from './components/IntroLoader';

type PageView = 'main' | 'waste-categories' | 'waste-detail' | 'products-overview' | 'about' | 'references-overview' | 'technology' | 'certificates' | 'product-detail' | 'ecatalog' | 'contact';
type ProductType = 'single-shaft' | 'dual-shaft' | 'quad-shaft' | 'metal' | 'pallet' | 'glass' | 'plastic' | 'organic' | 'tire' | null;

function AppContent() {
  const { isRTL } = useLanguage();
  const [showIntro, setShowIntro] = useState(true);
  const [currentPage, setCurrentPage] = useState<PageView>('main');
  const [selectedWasteCategory, setSelectedWasteCategory] = useState<string | null>(null);
  const [selectedProduct, setSelectedProduct] = useState<ProductType>(null);

  useEffect(() => {
    // Update document direction based on language
    document.documentElement.dir = isRTL ? 'rtl' : 'ltr';
  }, [isRTL]);

  useEffect(() => {
    // Scroll to top immediately when page changes
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [currentPage, selectedWasteCategory, selectedProduct]);

  const handleNavigateToWasteCategories = () => {
    setCurrentPage('waste-categories');
  };

  const handleNavigateToMain = () => {
    setCurrentPage('main');
    setSelectedWasteCategory(null);
  };

  const handleWasteCategorySelect = (categoryId: string) => {
    setSelectedWasteCategory(categoryId);
    setCurrentPage('waste-detail');
  };

  const handleBackFromDetail = () => {
    setCurrentPage('waste-categories');
    setSelectedWasteCategory(null);
  };

  const handleNavigateToProducts = () => {
    setCurrentPage('products-overview');
  };

  const handleNavigateToAbout = () => {
    setCurrentPage('about');
  };

  const handleNavigateToReferences = () => {
    setCurrentPage('references-overview');
  };

  const handleNavigateToTechnology = () => {
    setCurrentPage('technology');
  };

  const handleNavigateToCertificates = () => {
    setCurrentPage('certificates');
  };

  const handleNavigateToECatalog = () => {
    setCurrentPage('ecatalog');
  };

  const handleNavigateToProductDetail = (productType: string) => {
    setSelectedProduct(productType as ProductType);
    setCurrentPage('product-detail');
  };

  const handleNavigateToWasteDetail = (wasteType: string) => {
    setSelectedWasteCategory(wasteType);
    setCurrentPage('waste-detail');
  };

  const handleNavigateToContact = () => {
    setCurrentPage('contact');
  };

  // Render different pages based on current view
  if (currentPage === 'contact') {
    return (
      <>
        <Header 
          onWasteClick={handleNavigateToWasteCategories}
          onWasteDetailClick={handleNavigateToWasteDetail}
          onMainClick={handleNavigateToMain}
          onProductsClick={handleNavigateToProducts}
          onAboutClick={handleNavigateToAbout}
          onReferencesClick={handleNavigateToReferences}
          onTechnologyClick={handleNavigateToTechnology}
          onCertificatesClick={handleNavigateToCertificates}
          onECatalogClick={handleNavigateToECatalog}
          onProductDetailClick={handleNavigateToProductDetail}
          onContactClick={handleNavigateToContact}
        />
        <ContactPage onBackToMain={handleNavigateToMain} />
        <ChatWidget />
      </>
    );
  }

  if (currentPage === 'ecatalog') {
    return (
      <>
        <Header 
          onWasteClick={handleNavigateToWasteCategories}
          onWasteDetailClick={handleNavigateToWasteDetail}
          onMainClick={handleNavigateToMain}
          onProductsClick={handleNavigateToProducts}
          onAboutClick={handleNavigateToAbout}
          onReferencesClick={handleNavigateToReferences}
          onTechnologyClick={handleNavigateToTechnology}
          onCertificatesClick={handleNavigateToCertificates}
          onECatalogClick={handleNavigateToECatalog}
          onProductDetailClick={handleNavigateToProductDetail}
          onContactClick={handleNavigateToContact}
        />
        <ECatalogPage onBackToMain={handleNavigateToMain} />
        <ChatWidget />
      </>
    );
  }

  if (currentPage === 'product-detail' && selectedProduct) {
    return (
      <>
        <Header 
          onWasteClick={handleNavigateToWasteCategories}
          onWasteDetailClick={handleNavigateToWasteDetail}
          onMainClick={handleNavigateToMain}
          onProductsClick={handleNavigateToProducts}
          onAboutClick={handleNavigateToAbout}
          onReferencesClick={handleNavigateToReferences}
          onTechnologyClick={handleNavigateToTechnology}
          onCertificatesClick={handleNavigateToCertificates}
          onECatalogClick={handleNavigateToECatalog}
          onProductDetailClick={handleNavigateToProductDetail}
          onContactClick={handleNavigateToContact}
        />
        <ProductDetailPage 
          productType={selectedProduct} 
          onBackToMain={handleNavigateToMain}
          onECatalogClick={handleNavigateToECatalog}
        />
        <ChatWidget />
      </>
    );
  }

  if (currentPage === 'certificates') {
    return (
      <>
        <Header 
          onWasteClick={handleNavigateToWasteCategories}
          onWasteDetailClick={handleNavigateToWasteDetail}
          onMainClick={handleNavigateToMain}
          onProductsClick={handleNavigateToProducts}
          onAboutClick={handleNavigateToAbout}
          onReferencesClick={handleNavigateToReferences}
          onTechnologyClick={handleNavigateToTechnology}
          onCertificatesClick={handleNavigateToCertificates}
          onECatalogClick={handleNavigateToECatalog}
          onProductDetailClick={handleNavigateToProductDetail}
          onContactClick={handleNavigateToContact}
        />
        <CertificatesPage onBackToMain={handleNavigateToMain} />
        <ChatWidget />
      </>
    );
  }

  if (currentPage === 'technology') {
    return (
      <>
        <Header 
          onWasteClick={handleNavigateToWasteCategories}
          onWasteDetailClick={handleNavigateToWasteDetail}
          onMainClick={handleNavigateToMain}
          onProductsClick={handleNavigateToProducts}
          onAboutClick={handleNavigateToAbout}
          onReferencesClick={handleNavigateToReferences}
          onTechnologyClick={handleNavigateToTechnology}
          onCertificatesClick={handleNavigateToCertificates}
          onECatalogClick={handleNavigateToECatalog}
          onProductDetailClick={handleNavigateToProductDetail}
          onContactClick={handleNavigateToContact}
        />
        <TechnologyPage onBackToMain={handleNavigateToMain} />
        <ChatWidget />
      </>
    );
  }

  if (currentPage === 'products-overview') {
    return (
      <>
        <Header 
          onWasteClick={handleNavigateToWasteCategories}
          onWasteDetailClick={handleNavigateToWasteDetail}
          onMainClick={handleNavigateToMain}
          onProductsClick={handleNavigateToProducts}
          onAboutClick={handleNavigateToAbout}
          onReferencesClick={handleNavigateToReferences}
          onTechnologyClick={handleNavigateToTechnology}
          onCertificatesClick={handleNavigateToCertificates}
          onECatalogClick={handleNavigateToECatalog}
          onProductDetailClick={handleNavigateToProductDetail}
          onContactClick={handleNavigateToContact}
        />
        <ProductsOverviewPage 
          onBackToMain={handleNavigateToMain}
          onProductClick={handleNavigateToProductDetail}
        />
        <ChatWidget />
      </>
    );
  }

  if (currentPage === 'about') {
    return (
      <>
        <Header 
          onWasteClick={handleNavigateToWasteCategories}
          onWasteDetailClick={handleNavigateToWasteDetail}
          onMainClick={handleNavigateToMain}
          onProductsClick={handleNavigateToProducts}
          onAboutClick={handleNavigateToAbout}
          onReferencesClick={handleNavigateToReferences}
          onTechnologyClick={handleNavigateToTechnology}
          onCertificatesClick={handleNavigateToCertificates}
          onECatalogClick={handleNavigateToECatalog}
          onProductDetailClick={handleNavigateToProductDetail}
          onContactClick={handleNavigateToContact}
        />
        <AboutPage onBackToMain={handleNavigateToMain} />
        <ChatWidget />
      </>
    );
  }

  if (currentPage === 'references-overview') {
    return (
      <>
        <Header 
          onWasteClick={handleNavigateToWasteCategories}
          onWasteDetailClick={handleNavigateToWasteDetail}
          onMainClick={handleNavigateToMain}
          onProductsClick={handleNavigateToProducts}
          onAboutClick={handleNavigateToAbout}
          onReferencesClick={handleNavigateToReferences}
          onTechnologyClick={handleNavigateToTechnology}
          onCertificatesClick={handleNavigateToCertificates}
          onECatalogClick={handleNavigateToECatalog}
          onProductDetailClick={handleNavigateToProductDetail}
          onContactClick={handleNavigateToContact}
        />
        <ReferencesOverviewPage onBackToMain={handleNavigateToMain} />
        <ChatWidget />
      </>
    );
  }

  if (currentPage === 'waste-categories') {
    return (
      <>
        <Header 
          onWasteClick={handleNavigateToWasteCategories}
          onWasteDetailClick={handleNavigateToWasteDetail}
          onMainClick={handleNavigateToMain}
          onProductsClick={handleNavigateToProducts}
          onAboutClick={handleNavigateToAbout}
          onReferencesClick={handleNavigateToReferences}
          onTechnologyClick={handleNavigateToTechnology}
          onCertificatesClick={handleNavigateToCertificates}
          onECatalogClick={handleNavigateToECatalog}
          onProductDetailClick={handleNavigateToProductDetail}
          onContactClick={handleNavigateToContact}
        />
        <WasteCategoriesPage
          onCategorySelect={handleWasteCategorySelect}
          onBackToMain={handleNavigateToMain}
        />
        <ChatWidget />
      </>
    );
  }

  if (currentPage === 'waste-detail' && selectedWasteCategory) {
    return (
      <>
        <Header 
          onWasteClick={handleNavigateToWasteCategories}
          onWasteDetailClick={handleNavigateToWasteDetail}
          onMainClick={handleNavigateToMain}
          onProductsClick={handleNavigateToProducts}
          onAboutClick={handleNavigateToAbout}
          onReferencesClick={handleNavigateToReferences}
          onTechnologyClick={handleNavigateToTechnology}
          onCertificatesClick={handleNavigateToCertificates}
          onECatalogClick={handleNavigateToECatalog}
          onProductDetailClick={handleNavigateToProductDetail}
          onContactClick={handleNavigateToContact}
        />
        <WasteDetailPage
          categoryId={selectedWasteCategory}
          onBack={handleBackFromDetail}
        />
        <ChatWidget />
      </>
    );
  }

  // Main homepage
  return (
    <>
      {showIntro && <IntroLoader onComplete={() => setShowIntro(false)} />}
      
      {!showIntro && (
        <div className="min-h-screen bg-white">
          <Header 
            onWasteClick={handleNavigateToWasteCategories}
            onWasteDetailClick={handleNavigateToWasteDetail}
            onMainClick={handleNavigateToMain}
            onProductsClick={handleNavigateToProducts}
            onAboutClick={handleNavigateToAbout}
            onReferencesClick={handleNavigateToReferences}
            onTechnologyClick={handleNavigateToTechnology}
            onCertificatesClick={handleNavigateToCertificates}
            onECatalogClick={handleNavigateToECatalog}
            onProductDetailClick={handleNavigateToProductDetail}
            onContactClick={handleNavigateToContact}
          />
          <main>
            <HeroSection />
            <IntroSection />
            <ProductsSection onProductClick={handleNavigateToProductDetail} />
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

export default function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}

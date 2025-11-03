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
import { ProductCategoryPage } from './components/ProductCategoryPage';
import { ECatalogPage } from './components/ECatalogPage';
import { ContactPage } from './components/ContactPage';
import { IntroLoader } from './components/IntroLoader';

type PageView = 'main' | 'waste-categories' | 'waste-detail' | 'products-overview' | 'about' | 'references-overview' | 'technology' | 'certificates' | 'product-category' | 'product-detail' | 'ecatalog' | 'contact';
type ProductType = 'single-shaft' | 'dual-shaft' | 'quad-shaft' | 'metal' | 'pallet' | 'glass' | 'plastic' | 'organic' | 'tire' | null;

// History stack for browser back button
interface HistoryState {
  page: PageView;
  product?: ProductType;
  model?: string;
  wasteCategory?: string;
}

function AppContent() {
  const { isRTL } = useLanguage();
  const [showIntro, setShowIntro] = useState(true);
  const [currentPage, setCurrentPage] = useState<PageView>('main');
  const [selectedWasteCategory, setSelectedWasteCategory] = useState<string | null>(null);
  const [selectedProduct, setSelectedProduct] = useState<ProductType>(null);
  const [selectedModelName, setSelectedModelName] = useState<string>('TSH-60'); // Default model
  const [historyStack, setHistoryStack] = useState<HistoryState[]>([{ page: 'main' }]);

  useEffect(() => {
    // Update document direction based on language
    document.documentElement.dir = isRTL ? 'rtl' : 'ltr';
  }, [isRTL]);

  useEffect(() => {
    // Scroll to top immediately when page changes
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [currentPage, selectedWasteCategory, selectedProduct]);

  // Browser back button handler
  useEffect(() => {
    const handlePopState = (event: PopStateEvent) => {
      if (historyStack.length > 1) {
        const previousState = historyStack[historyStack.length - 2];
        setCurrentPage(previousState.page);
        if (previousState.product) setSelectedProduct(previousState.product);
        if (previousState.model) setSelectedModelName(previousState.model);
        if (previousState.wasteCategory) setSelectedWasteCategory(previousState.wasteCategory);
        setHistoryStack(prev => prev.slice(0, -1));
      } else {
        setCurrentPage('main');
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, [historyStack]);

  // Push to history stack
  const pushHistory = (state: HistoryState) => {
    window.history.pushState(state, '');
    setHistoryStack(prev => [...prev, state]);
  };

  const handleNavigateToWasteCategories = () => {
    setCurrentPage('waste-categories');
    pushHistory({ page: 'waste-categories' });
  };

  const handleNavigateToMain = () => {
    setCurrentPage('main');
    setSelectedWasteCategory(null);
    setHistoryStack([{ page: 'main' }]);
    window.history.replaceState({ page: 'main' }, '');
  };

  const handleWasteCategorySelect = (categoryId: string) => {
    setSelectedWasteCategory(categoryId);
    setCurrentPage('waste-detail');
  };

  const handleBackFromWasteDetail = () => {
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

  // Navigate to product category page (overview with all models)
  const handleNavigateToProductCategory = (productType: string) => {
    setSelectedProduct(productType as ProductType);
    setCurrentPage('product-category');
    pushHistory({ page: 'product-category', product: productType as ProductType });
  };

  // Navigate to specific product model detail
  const handleNavigateToProductDetail = (productType: string, modelName?: string) => {
    setSelectedProduct(productType as ProductType);
    // Set model name based on product type if not provided
    if (modelName) {
      setSelectedModelName(modelName);
    } else {
      // Set default model based on product type
      if (productType === 'single-shaft') {
        setSelectedModelName('TSH-60');
      } else if (productType === 'dual-shaft') {
        setSelectedModelName('CS-20');
      } else if (productType === 'quad-shaft') {
        setSelectedModelName('QS-80');
      } else {
        setSelectedModelName('TSH-60'); // fallback
      }
    }
    setCurrentPage('product-detail');
    pushHistory({ 
      page: 'product-detail', 
      product: productType as ProductType, 
      model: modelName || 'TSH-60' 
    });
  };

  const handleNavigateToWasteDetail = (wasteType: string) => {
    setSelectedWasteCategory(wasteType);
    setCurrentPage('waste-detail');
  };

  const handleNavigateToContact = () => {
    setCurrentPage('contact');
    pushHistory({ page: 'contact' });
  };

  // Back from product category to main (or previous page)
  const handleBackFromCategory = () => {
    if (historyStack.length > 1) {
      window.history.back();
    } else {
      handleNavigateToMain();
    }
  };

  // Back from product detail to category page
  const handleBackFromProductDetail = () => {
    if (selectedProduct) {
      handleNavigateToProductCategory(selectedProduct);
    } else {
      handleNavigateToMain();
    }
  };

  // Render different pages based on current view
  if (currentPage === 'product-category' && selectedProduct) {
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
          onProductCategoryClick={handleNavigateToProductCategory}
          onProductDetailClick={handleNavigateToProductDetail}
          onContactClick={handleNavigateToContact}
        />
        <ProductCategoryPage 
          productType={selectedProduct}
          onBackToMain={handleBackFromCategory}
          onModelSelect={(modelName) => handleNavigateToProductDetail(selectedProduct, modelName)}
        />
        <ChatWidget />
      </>
    );
  }

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
          onProductCategoryClick={handleNavigateToProductCategory}
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
          onProductCategoryClick={handleNavigateToProductCategory}
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
          onProductCategoryClick={handleNavigateToProductCategory}
          onProductDetailClick={handleNavigateToProductDetail}
          onContactClick={handleNavigateToContact}
        />
        <ProductDetailPage 
          productType={selectedProduct}
          modelName={selectedModelName}
          onBackToMain={handleBackFromProductDetail}
          onECatalogClick={handleNavigateToECatalog}
          onProductDetailClick={handleNavigateToProductDetail}
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
          onProductCategoryClick={handleNavigateToProductCategory}
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
          onProductCategoryClick={handleNavigateToProductCategory}
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
          onProductCategoryClick={handleNavigateToProductCategory}
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
          onProductCategoryClick={handleNavigateToProductCategory}
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
          onProductCategoryClick={handleNavigateToProductCategory}
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
          onProductCategoryClick={handleNavigateToProductCategory}
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
          onProductCategoryClick={handleNavigateToProductCategory}
          onProductDetailClick={handleNavigateToProductDetail}
          onContactClick={handleNavigateToContact}
        />
        <WasteDetailPage
          categoryId={selectedWasteCategory}
          onBack={handleBackFromWasteDetail}
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
            onProductCategoryClick={handleNavigateToProductCategory}
            onProductDetailClick={handleNavigateToProductDetail}
            onContactClick={handleNavigateToContact}
          />
          <main>
            <HeroSection />
            <IntroSection />
            <ProductsSection onProductClick={handleNavigateToProductCategory} />
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

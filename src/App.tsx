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

// Parse URL and determine current page
function parseUrl(): { page: PageView; product?: ProductType; model?: string; wasteCategory?: string } {
  const path = window.location.pathname;
  
  // Home page
  if (path === '/' || path === '' || path === '/home') {
    return { page: 'main' };
  }
  
  // Kurumsal (About)
  if (path === '/kurumsal') {
    return { page: 'about' };
  }
  
  // Ürünler (Products Overview)
  if (path === '/urunler') {
    return { page: 'products-overview' };
  }
  
  // Product Categories
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
  
  // Check if it's a product category page
  for (const [urlPath, productType] of Object.entries(productCategoryMap)) {
    if (path === urlPath) {
      return { page: 'product-category', product: productType };
    }
    // Check if it's a product detail page (e.g., /tek-shaftli-parcalama-makinesi/tsh-60)
    if (path.startsWith(urlPath + '/')) {
      const model = path.substring(urlPath.length + 1).toUpperCase();
      return { page: 'product-detail', product: productType, model };
    }
  }
  
  // Teknoloji
  if (path === '/teknoloji') {
    return { page: 'technology' };
  }
  
  // Referanslar
  if (path === '/referanslar') {
    return { page: 'references-overview' };
  }
  
  // Sertifikalar
  if (path === '/sertifikalar') {
    return { page: 'certificates' };
  }
  
  // İletişim
  if (path === '/iletisim') {
    return { page: 'contact' };
  }
  
  // E-Katalog
  if (path === '/e-katalog') {
    return { page: 'ecatalog' };
  }
  
  // Atık Türleri
  if (path === '/atik-turleri') {
    return { page: 'waste-categories' };
  }
  if (path.startsWith('/atik-turleri/')) {
    const category = path.substring('/atik-turleri/'.length);
    return { page: 'waste-detail', wasteCategory: category };
  }
  
  // Default to main page
  return { page: 'main' };
}

function AppContent() {
  const { isRTL } = useLanguage();
  const [showIntro, setShowIntro] = useState(true);
  const [currentPage, setCurrentPage] = useState<PageView>('main');
  const [selectedWasteCategory, setSelectedWasteCategory] = useState<string | null>(null);
  const [selectedProduct, setSelectedProduct] = useState<ProductType>(null);
  const [selectedModelName, setSelectedModelName] = useState<string>('TSH-60');

  // Initialize from URL on mount
  useEffect(() => {
    // Check if there's a saved redirect path from 404 page
    const savedPath = sessionStorage.getItem('spa_redirect_path');
    if (savedPath) {
      sessionStorage.removeItem('spa_redirect_path');
      // Use pushState to update URL without reloading
      window.history.pushState({}, '', savedPath);
    }
    
    const urlState = parseUrl();
    setCurrentPage(urlState.page);
    if (urlState.product) setSelectedProduct(urlState.product);
    if (urlState.model) setSelectedModelName(urlState.model);
    if (urlState.wasteCategory) setSelectedWasteCategory(urlState.wasteCategory);
    
    // Update SEO based on initial page
    updatePageSEO(urlState.page, urlState.product, urlState.model);
  }, []);

  // Update document direction based on language
  useEffect(() => {
    document.documentElement.dir = isRTL ? 'rtl' : 'ltr';
  }, [isRTL]);

  // Scroll to top when page changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [currentPage, selectedWasteCategory, selectedProduct]);

  // Handle browser back/forward buttons
  useEffect(() => {
    const handlePopState = () => {
      const urlState = parseUrl();
      setCurrentPage(urlState.page);
      if (urlState.product) setSelectedProduct(urlState.product);
      if (urlState.model) setSelectedModelName(urlState.model);
      if (urlState.wasteCategory) setSelectedWasteCategory(urlState.wasteCategory);
      updatePageSEO(urlState.page, urlState.product, urlState.model);
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Update SEO metadata for current page
  const updatePageSEO = (page: PageView, product?: ProductType, model?: string) => {
    let metadata;
    let structuredData;

    switch (page) {
      case 'main':
        metadata = typeof seoMetadata.home === 'function' ? seoMetadata.home() : seoMetadata.home;
        // Add comprehensive organization structured data for home page
        structuredData = {
          "@context": "https://schema.org",
          "@graph": [
            generateOrganizationStructuredData(),
            generateLocalBusinessStructuredData(),
            {
              "@type": "WebSite",
              "name": "MT Makina - Parçalama Makineleri",
              "url": "https://www.parcalamamakinesi.com",
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://www.parcalamamakinesi.com/urunler?q={search_term_string}",
                "query-input": "required name=search_term_string"
              }
            },
            {
              "@type": "ItemList",
              "name": "Parçalama Makinesi Türleri",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "Tek Şaftlı Parçalama Makinesi",
                  "url": "https://www.parcalamamakinesi.com/tek-shaftli-parcalama-makinesi"
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "name": "Çift Şaftlı Parçalama Makinesi",
                  "url": "https://www.parcalamamakinesi.com/cift-shaftli-parcalama-makinesi"
                }
              ]
            }
          ]
        };
        break;
      
      case 'product-category':
        if (product) {
          metadata = getProductCategorySEO(product);
          structuredData = {
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            "name": metadata.title,
            "description": metadata.description,
            "url": metadata.canonical,
            "publisher": {
              "@type": "Organization",
              "name": "MT Makina",
              "logo": "https://i.ibb.co/HLymGDrz/1-Mt-Makina-Logo.png"
            },
            "breadcrumb": generateBreadcrumbStructuredData([
              { name: "Ana Sayfa", url: "https://www.parcalamamakinesi.com/home" },
              { name: "Ürünler", url: "https://www.parcalamamakinesi.com/urunler" },
              { name: metadata.title.split('|')[0].trim(), url: metadata.canonical }
            ])
          };
        }
        break;
      
      case 'about':
        metadata = typeof seoMetadata.about === 'function' ? seoMetadata.about() : seoMetadata.about;
        break;
      
      case 'products-overview':
        metadata = typeof seoMetadata.products === 'function' ? seoMetadata.products() : seoMetadata.products;
        break;
      
      case 'product-category':
        if (product) {
          metadata = getProductCategorySEO(product);
          structuredData = generateBreadcrumbStructuredData([
            { name: 'Ana Sayfa', url: 'https://www.parcalamamakinesi.com/home' },
            { name: 'Ürünler', url: 'https://www.parcalamamakinesi.com/urunler' },
            { name: metadata.title.split('|')[0].trim(), url: metadata.canonical }
          ]);
        }
        break;
      
      case 'product-detail':
        if (product && model) {
          metadata = getProductModelSEO(product, model);
          const categoryMeta = getProductCategorySEO(product);
          structuredData = {
            ...generateProductStructuredData(product, model),
            breadcrumb: generateBreadcrumbStructuredData([
              { name: 'Ana Sayfa', url: 'https://www.parcalamamakinesi.com/home' },
              { name: 'Ürünler', url: 'https://www.parcalamamakinesi.com/urunler' },
              { name: categoryMeta.title.split('|')[0].trim(), url: categoryMeta.canonical },
              { name: model, url: metadata.canonical }
            ])
          };
        }
        break;
      
      case 'technology':
        metadata = typeof seoMetadata.technology === 'function' ? seoMetadata.technology() : seoMetadata.technology;
        break;
      
      case 'references-overview':
        metadata = typeof seoMetadata.references === 'function' ? seoMetadata.references() : seoMetadata.references;
        break;
      
      case 'certificates':
        metadata = typeof seoMetadata.certificates === 'function' ? seoMetadata.certificates() : seoMetadata.certificates;
        break;
      
      case 'contact':
        metadata = typeof seoMetadata.contact === 'function' ? seoMetadata.contact() : seoMetadata.contact;
        break;
      
      case 'ecatalog':
        metadata = typeof seoMetadata.ecatalog === 'function' ? seoMetadata.ecatalog() : seoMetadata.ecatalog;
        break;
      
      default:
        metadata = typeof seoMetadata.home === 'function' ? seoMetadata.home() : seoMetadata.home;
    }

    if (metadata) {
      updateSEOMetadata(metadata);
    }
    
    if (structuredData) {
      insertStructuredData(structuredData);
    }
  };

  // Navigation with URL updates
  const navigateWithUrl = (page: PageView, url: string, extraState?: { product?: ProductType; model?: string; wasteCategory?: string }) => {
    setCurrentPage(page);
    if (extraState?.product) setSelectedProduct(extraState.product);
    if (extraState?.model) setSelectedModelName(extraState.model);
    if (extraState?.wasteCategory) setSelectedWasteCategory(extraState.wasteCategory);
    window.history.pushState({ page, ...extraState }, '', url);
    updatePageSEO(page, extraState?.product, extraState?.model);
  };

  const handleNavigateToMain = () => {
    navigateWithUrl('main', generateUrl.home());
    setSelectedWasteCategory(null);
    setSelectedProduct(null);
  };

  const handleNavigateToAbout = () => {
    navigateWithUrl('about', generateUrl.about());
  };

  const handleNavigateToProducts = () => {
    navigateWithUrl('products-overview', generateUrl.products());
  };

  const handleNavigateToTechnology = () => {
    navigateWithUrl('technology', generateUrl.technology());
  };

  const handleNavigateToReferences = () => {
    navigateWithUrl('references-overview', generateUrl.references());
  };

  const handleNavigateToCertificates = () => {
    navigateWithUrl('certificates', generateUrl.certificates());
  };

  const handleNavigateToContact = () => {
    navigateWithUrl('contact', generateUrl.contact());
  };

  const handleNavigateToECatalog = () => {
    navigateWithUrl('ecatalog', generateUrl.ecatalog());
  };

  const handleNavigateToProductCategory = (productType: string) => {
    const url = generateUrl.productCategory(productType);
    navigateWithUrl('product-category', url, { product: productType as ProductType });
  };

  const handleNavigateToProductDetail = (productType: string, modelName?: string) => {
    const model = modelName || (productType === 'single-shaft' ? 'TSH-60' : 
                                 productType === 'dual-shaft' ? 'CS-20' : 
                                 productType === 'quad-shaft' ? 'QS-80' : 'TSH-60');
    const url = generateUrl.productDetail(productType, model);
    navigateWithUrl('product-detail', url, { product: productType as ProductType, model });
  };

  const handleNavigateToWasteCategories = () => {
    navigateWithUrl('waste-categories', generateUrl.waste());
  };

  const handleNavigateToWasteDetail = (wasteType: string) => {
    const url = generateUrl.waste(wasteType);
    navigateWithUrl('waste-detail', url, { wasteCategory: wasteType });
  };

  const handleWasteCategorySelect = (categoryId: string) => {
    handleNavigateToWasteDetail(categoryId);
  };

  const handleBackFromWasteDetail = () => {
    handleNavigateToWasteCategories();
  };

  const handleBackFromCategory = () => {
    window.history.back();
  };

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

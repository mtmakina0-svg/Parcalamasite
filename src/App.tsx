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
  generateLocalBusinessStructuredData,
  type Language
} from './utils/seoConfig';
import { SEOHead } from './components/SEOHead';

type PageView = 'main' | 'waste-categories' | 'waste-detail' | 'products-overview' | 'about' | 'references-overview' | 'technology' | 'certificates' | 'product-category' | 'product-detail' | 'ecatalog' | 'contact';
type ProductType = 'single-saft' | 'dual-saft' | 'quad-saft' | 'metal' | 'mobile' | 'pallet' | 'harddisk' | 'tree-root' | 'wood' | 'glass' | null;

// Parse URL and determine current page (Multi-language support)
function parseUrl(): { page: PageView; product?: ProductType; model?: string; wasteCategory?: string } {
  const path = window.location.pathname;
  console.log('parseUrl - Parsing path:', path);
  
  // Extract language prefix if present
  const langMatch = path.match(/^\/(tr|en|ru|ar)/);
  const pathWithoutLang = langMatch ? path.substring(3) : path; // Remove /tr, /en, etc.
  console.log('parseUrl - Path without lang:', pathWithoutLang);
  
  // Home page
  if (path === '/' || pathWithoutLang === '' || pathWithoutLang === '/' || path.match(/^\/(tr|en|ru|ar)\/?$/)) {
    console.log('parseUrl - Detected: main/home page');
    return { page: 'main' };
  }
  
  // Multi-language page detection
  // About page (kurumsal, about, o-kompanii)
  if (pathWithoutLang.match(/^\/(kurumsal|about|o-kompanii)$/)) {
    console.log('parseUrl - Detected: about page');
    return { page: 'about' };
  }
  
  // Products Overview (urunler, products, produkty)
  if (pathWithoutLang.match(/^\/(urunler|products|produkty)$/)) {
    console.log('parseUrl - Detected: products-overview page');
    return { page: 'products-overview' };
  }
  
  // Product Categories - Multi-language slugs
  const productCategoryPatterns: { pattern: RegExp; type: ProductType }[] = [
    { pattern: /^\/(tek-saftli-parcalama-makinesi|single-shaft-shredder|odnovalnaya-drobilka)/, type: 'single-saft' },
    { pattern: /^\/(cift-saftli-parcalama-makinesi|dual-shaft-shredder|dvukhvalnaya-drobilka)/, type: 'dual-saft' },
    { pattern: /^\/(dort-saftli-parcalama-makinesi|quad-shaft-shredder|chetyrekhvalnaya-drobilka)/, type: 'quad-saft' },
    { pattern: /^\/(metal-parcalama-makinesi|metal-shredder|drobilka-metalla)/, type: 'metal' },
    { pattern: /^\/(mobil-kirici|mobile-shredder|mobilnaya-drobilka)/, type: 'mobile' },
    { pattern: /^\/(palet-parcalama-makinesi|pallet-shredder|drobilka-poddonov)/, type: 'pallet' },
    { pattern: /^\/(harddisk-imha-makinesi|harddisk-destroyer|unichtozhitel-zhestkikh-diskov)/, type: 'harddisk' },
    { pattern: /^\/(agac-koku-parcalama-makinesi|tree-root-shredder|drobilka-kornej-derevev)/, type: 'tree-root' },
    { pattern: /^\/(agac-parcalama-ogutme-makinesi|wood-grinder|drobilka-drevesiny)/, type: 'wood' },
    { pattern: /^\/(cam-sise-kirma-makinesi|glass-crusher|drobilka-stekla)/, type: 'glass' }
  ];
  
  // Check product categories and details
  for (const { pattern, type } of productCategoryPatterns) {
    const match = pathWithoutLang.match(pattern);
    if (match) {
      const matchedSlug = match[0];
      // Check if it's just the category page
      if (pathWithoutLang === matchedSlug) {
        console.log('parseUrl - Detected: product-category page, product:', type);
        return { page: 'product-category', product: type };
      }
      // Check if it's a product detail page (has model after category)
      if (pathWithoutLang.startsWith(matchedSlug + '/')) {
        const model = pathWithoutLang.substring(matchedSlug.length + 1).toUpperCase();
        console.log('parseUrl - Detected: product-detail page, product:', type, 'model:', model);
        return { page: 'product-detail', product: type, model };
      }
    }
  }
  
  // Technology (teknoloji, technology, tekhnologiya)
  if (pathWithoutLang.match(/^\/(teknoloji|technology|tekhnologiya)$/)) {
    console.log('parseUrl - Detected: technology page');
    return { page: 'technology' };
  }
  
  // References (referanslar, references, referencii)
  if (pathWithoutLang.match(/^\/(referanslar|references|referencii)$/)) {
    console.log('parseUrl - Detected: references-overview page');
    return { page: 'references-overview' };
  }
  
  // Certificates (sertifikalar, certificates, sertifikaty)
  if (pathWithoutLang.match(/^\/(sertifikalar|certificates|sertifikaty)$/)) {
    console.log('parseUrl - Detected: certificates page');
    return { page: 'certificates' };
  }
  
  // Contact (iletisim, contact, kontakty)
  if (pathWithoutLang.match(/^\/(iletisim|contact|kontakty)$/)) {
    console.log('parseUrl - Detected: contact page');
    return { page: 'contact' };
  }
  
  // E-Catalog (e-katalog, e-catalog)
  if (pathWithoutLang.match(/^\/(e-katalog|e-catalog)$/)) {
    console.log('parseUrl - Detected: ecatalog page');
    return { page: 'ecatalog' };
  }
  
  // Waste Types (atik-turleri, waste-types, tipy-otkhodov)
  if (pathWithoutLang.match(/^\/(atik-turleri|waste-types|tipy-otkhodov)$/)) {
    console.log('parseUrl - Detected: waste-categories page');
    return { page: 'waste-categories' };
  }
  if (pathWithoutLang.match(/^\/(atik-turleri|waste-types|tipy-otkhodov)\//)) {
    const match = pathWithoutLang.match(/^\/(atik-turleri|waste-types|tipy-otkhodov)\/(.+)$/);
    if (match) {
      const category = match[2];
      console.log('parseUrl - Detected: waste-detail page, category:', category);
      return { page: 'waste-detail', wasteCategory: category };
    }
  }
  
  // Default to main page
  console.log('parseUrl - No match found, defaulting to main page');
  return { page: 'main' };
}

function AppContent() {
  const { isRTL, language } = useLanguage();
  const [showIntro, setShowIntro] = useState(true);
  const [currentPage, setCurrentPage] = useState<PageView>('main');
  const [selectedWasteCategory, setSelectedWasteCategory] = useState<string | null>(null);
  const [selectedProduct, setSelectedProduct] = useState<ProductType>(null);
  const [selectedModelName, setSelectedModelName] = useState<string>('TSH-60');
  
  // SEO Head data based on current page
  const getSEOData = () => {
    const path = window.location.pathname;
    const langMatch = path.match(/^\/(tr|en|ru|ar)/);
    const currentLang: Language = (langMatch?.[1] as Language) || language || 'tr';
    
    let seoData = seoMetadata.home;
    let pageTypeForHreflang: any = 'home';
    let productTypeForHreflang = undefined;
    let modelForHreflang = undefined;
    let wasteCategoryForHreflang = undefined;
    
    if (currentPage === 'product-category' && selectedProduct) {
      seoData = getProductCategorySEO(selectedProduct, currentLang);
      pageTypeForHreflang = 'product-category';
      productTypeForHreflang = selectedProduct;
    } else if (currentPage === 'product-detail' && selectedProduct && selectedModelName) {
      seoData = getProductModelSEO(selectedProduct, selectedModelName, currentLang);
      pageTypeForHreflang = 'product-detail';
      productTypeForHreflang = selectedProduct;
      modelForHreflang = selectedModelName;
    } else if (currentPage === 'about') {
      seoData = seoMetadata.about;
      pageTypeForHreflang = 'about';
    } else if (currentPage === 'products-overview') {
      seoData = seoMetadata.products;
      pageTypeForHreflang = 'products';
    } else if (currentPage === 'technology') {
      seoData = seoMetadata.technology;
      pageTypeForHreflang = 'technology';
    } else if (currentPage === 'references-overview') {
      seoData = seoMetadata.references;
      pageTypeForHreflang = 'references';
    } else if (currentPage === 'certificates') {
      seoData = seoMetadata.certificates;
      pageTypeForHreflang = 'certificates';
    } else if (currentPage === 'contact') {
      seoData = seoMetadata.contact;
      pageTypeForHreflang = 'contact';
    } else if (currentPage === 'ecatalog') {
      seoData = seoMetadata.ecatalog;
      pageTypeForHreflang = 'ecatalog';
    } else if (currentPage === 'waste-categories') {
      pageTypeForHreflang = 'waste-categories';
    } else if (currentPage === 'waste-detail' && selectedWasteCategory) {
      pageTypeForHreflang = 'waste-detail';
      wasteCategoryForHreflang = selectedWasteCategory;
    }
    
    if (typeof seoData === 'function') {
      seoData = seoData();
    }
    
    return {
      ...seoData,
      pageType: pageTypeForHreflang,
      productType: productTypeForHreflang,
      model: modelForHreflang,
      wasteCategory: wasteCategoryForHreflang
    };
  };

  // Initialize from URL on mount
  useEffect(() => {
    console.log('App.tsx - Initializing, current pathname:', window.location.pathname);
    
    // Check if there's a saved redirect path from 404 page
    const savedPath = sessionStorage.getItem('spa_redirect_path');
    if (savedPath) {
      console.log('App.tsx - Found saved redirect path:', savedPath);
      sessionStorage.removeItem('spa_redirect_path');
      // Use replaceState to update URL without reloading and without adding to history
      window.history.replaceState({}, '', savedPath);
    }
    
    const urlState = parseUrl();
    console.log('App.tsx - Parsed URL state:', urlState);
    
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

  // Update SEO when language changes (for URL language detection)
  useEffect(() => {
    updatePageSEO(currentPage, selectedProduct, selectedModelName);
  }, [language]);

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
    // Get current language from URL
    const path = window.location.pathname;
    const langMatch = path.match(/^\/(tr|en|ru|ar)/);
    const currentLang: Language = (langMatch?.[1] as Language) || 'tr';
    
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
          metadata = getProductCategorySEO(product, currentLang);
          const baseUrl = 'https://www.parcalamamakinesi.com';
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
              { name: "Ana Sayfa", url: baseUrl + generateUrl.home(currentLang) },
              { name: "Ürünler", url: baseUrl + generateUrl.products(currentLang) },
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
      
      case 'product-detail':
        if (product && model) {
          metadata = getProductModelSEO(product, model, currentLang);
          const categoryMeta = getProductCategorySEO(product, currentLang);
          const baseUrl = 'https://www.parcalamamakinesi.com';
          structuredData = {
            ...generateProductStructuredData(product, model),
            breadcrumb: generateBreadcrumbStructuredData([
              { name: 'Ana Sayfa', url: baseUrl + generateUrl.home(currentLang) },
              { name: 'Ürünler', url: baseUrl + generateUrl.products(currentLang) },
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
    navigateWithUrl('main', generateUrl.home(language as Language));
    setSelectedWasteCategory(null);
    setSelectedProduct(null);
  };

  const handleNavigateToAbout = () => {
    navigateWithUrl('about', generateUrl.about(language as Language));
  };

  const handleNavigateToProducts = () => {
    navigateWithUrl('products-overview', generateUrl.products(language as Language));
  };

  const handleNavigateToTechnology = () => {
    navigateWithUrl('technology', generateUrl.technology(language as Language));
  };

  const handleNavigateToReferences = () => {
    navigateWithUrl('references-overview', generateUrl.references(language as Language));
  };

  const handleNavigateToCertificates = () => {
    navigateWithUrl('certificates', generateUrl.certificates(language as Language));
  };

  const handleNavigateToContact = () => {
    navigateWithUrl('contact', generateUrl.contact(language as Language));
  };

  const handleNavigateToECatalog = () => {
    navigateWithUrl('ecatalog', generateUrl.ecatalog(language as Language));
  };

  const handleNavigateToProductCategory = (productType: string) => {
    console.log('🎯 handleNavigateToProductCategory called with:', productType);
    const url = generateUrl.productCategory(productType, language as Language);
    navigateWithUrl('product-category', url, { product: productType as ProductType });
  };

  const handleNavigateToProductDetail = (productType: string, modelName?: string) => {
    const model = modelName || (
      productType === 'single-saft' ? 'TSH-60' : 
      productType === 'dual-saft' ? 'CS-20' : 
      productType === 'quad-saft' ? 'DS-80' : 
      productType === 'metal' ? 'RDM-100' :
      productType === 'pallet' ? 'TSV-140' :
      productType === 'harddisk' ? 'DATABER-S' :
      productType === 'mobile' ? 'TSM-150' :
      productType === 'tree-root' ? 'TW-100' :
      productType === 'wood' ? 'TSY-100' :
      'TSH-60'
    );
    const url = generateUrl.productDetail(productType, model, language as Language);
    navigateWithUrl('product-detail', url, { product: productType as ProductType, model });
  };

  const handleNavigateToWasteCategories = () => {
    navigateWithUrl('waste-categories', generateUrl.waste(undefined, language as Language));
  };

  const handleNavigateToWasteDetail = (wasteType: string) => {
    const url = generateUrl.waste(wasteType, language as Language);
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

  // Get SEO data for current page
  const currentSEOData = getSEOData();
  
  // Render different pages based on current view
  if (currentPage === 'product-category' && selectedProduct) {
    return (
      <>
        <SEOHead
          title={currentSEOData.title}
          description={currentSEOData.description}
          keywords={currentSEOData.keywords}
          canonical={currentSEOData.canonical}
          pageType={currentSEOData.pageType}
          productType={currentSEOData.productType}
          model={currentSEOData.model}
          wasteCategory={currentSEOData.wasteCategory}
        />
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
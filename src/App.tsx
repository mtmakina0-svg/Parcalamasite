import { Helmet, HelmetProvider } from 'react-helmet-async';
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
import { NotFoundPage } from './components/NotFoundPage';
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
  slugsByLanguage,
  productCategorySlugs,
  type Language,
  type SEOMetadata
} from './utils/seoConfig';
import { SEOHead } from './components/SEOHead';

type PageView = 'main' | 'waste-categories' | 'waste-detail' | 'products-overview' | 'about' | 'references-overview' | 'technology' | 'certificates' | 'product-category' | 'product-detail' | 'ecatalog' | 'contact' | 'not-found';
type ProductType = 'single-shaft' | 'dual-shaft' | 'quad-shaft' | 'metal' | 'mobile' | 'pallet' | 'harddisk' | 'tree-root' | 'wood' | 'glass' | null;

// Parse URL and determine current page (Multi-language support)
// Parse URL and determine current page (Multi-language support)
function parseUrl(): { page: PageView; product?: ProductType; model?: string; wasteCategory?: string } {
  const path = window.location.pathname;

  // Extract language prefix if present
  const langMatch = path.match(/^\/(tr|en|ru|ar)/);
  const pathWithoutLang = langMatch ? path.substring(3) : path; // Remove /tr, /en, etc.
  const cleanPath = pathWithoutLang.replace(/^\//, ''); // Remove leading slash for matching

  // Home page
  if (path === '/' || cleanPath === '') {
    return { page: 'main' };
  }

  // Check static pages defined in slugsByLanguage
  // We skip 'waste' here because it has sub-routes (categories) which we handle separately
  for (const [pageKey, slugs] of Object.entries(slugsByLanguage)) {
    if (pageKey === 'home' || pageKey === 'waste') continue;

    // Check if current path matches any of the language slugs for this page
    const slugValues = Object.values(slugs);
    if (slugValues.includes(cleanPath)) {
      // Map legacy page keys to PageView type if needed, or ensure strict typing
      // Our PageView type matches keys in slugsByLanguage mostly:
      // about -> about
      // products -> products-overview
      // references -> references-overview
      // technology -> technology
      // certificates -> certificates
      // contact -> contact
      // ecatalog -> ecatalog

      switch (pageKey) {
        case 'products': return { page: 'products-overview' };
        case 'references': return { page: 'references-overview' };
        default: return { page: pageKey as PageView };
      }
    }
  }

  // Check Waste Pages (Category & Detail)
  const wasteSlugs = Object.values(slugsByLanguage.waste);
  for (const wSlug of wasteSlugs) {
    if (cleanPath === wSlug) {
      return { page: 'waste-categories' };
    }
    if (cleanPath.startsWith(wSlug + '/')) {
      const category = cleanPath.substring(wSlug.length + 1);
      return { page: 'waste-detail', wasteCategory: category };
    }
  }

  // Check Product Pages (Category & Detail)
  for (const [type, slugs] of Object.entries(productCategorySlugs)) {
    const slugValues = Object.values(slugs);

    // Check for Category Page match
    if (slugValues.includes(cleanPath)) {
      return { page: 'product-category', product: type as ProductType };
    }

    // Check for Detail Page match
    for (const slug of slugValues) {
      if (cleanPath.startsWith(slug + '/')) {
        const model = cleanPath.substring(slug.length + 1).toUpperCase();
        return { page: 'product-detail', product: type as ProductType, model };
      }
    }
  }

  // Default to not found page for unknown routes
  return { page: 'not-found' };
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

    // Explicitly define the type to handle both Function and Object based metadata
    let seoDataSource: SEOMetadata | ((lang?: Language) => SEOMetadata) = seoMetadata.home;

    let pageTypeForHreflang: any = 'home';
    let productTypeForHreflang: string | undefined = undefined;
    let modelForHreflang: string | undefined = undefined;
    let wasteCategoryForHreflang: string | undefined = undefined;

    if (currentPage === 'product-category' && selectedProduct) {
      seoDataSource = getProductCategorySEO(selectedProduct, currentLang);
      pageTypeForHreflang = 'product-category';
      productTypeForHreflang = selectedProduct;
    } else if (currentPage === 'product-detail' && selectedProduct && selectedModelName) {
      seoDataSource = getProductModelSEO(selectedProduct, selectedModelName, currentLang);
      pageTypeForHreflang = 'product-detail';
      productTypeForHreflang = selectedProduct;
      modelForHreflang = selectedModelName;
    } else if (currentPage === 'about') {
      seoDataSource = seoMetadata.about;
      pageTypeForHreflang = 'about';
    } else if (currentPage === 'products-overview') {
      seoDataSource = seoMetadata.products;
      pageTypeForHreflang = 'products';
    } else if (currentPage === 'technology') {
      seoDataSource = seoMetadata.technology;
      pageTypeForHreflang = 'technology';
    } else if (currentPage === 'references-overview') {
      seoDataSource = seoMetadata.references;
      pageTypeForHreflang = 'references';
    } else if (currentPage === 'certificates') {
      seoDataSource = seoMetadata.certificates;
      pageTypeForHreflang = 'certificates';
    } else if (currentPage === 'contact') {
      seoDataSource = seoMetadata.contact;
      pageTypeForHreflang = 'contact';
    } else if (currentPage === 'ecatalog') {
      seoDataSource = seoMetadata.ecatalog;
      pageTypeForHreflang = 'ecatalog';
    } else if (currentPage === 'waste-categories') {
      // Waste categories uses generic data or specific? Assuming it defaults to home or has specific
      // Assuming waste categories might not have dedicated seoMetadata entry yet in the snippet provided
      // falling back to home or implementing if available.
      // Checking seoConfig content, waste is there in slugs but maybe not in metadata structure explicitly
      // Actually seoMetadata has 'waste-categories'? No, it has keys matching slugs?
      // seoMetadata keys: home, about, products, technology, references, certificates, contact, ecatalog.
      // waste is missing! I should probably default to products or add it.
      // For now, let's use products SEO as fallback or home
      seoDataSource = seoMetadata.products;
      pageTypeForHreflang = 'waste-categories';
    } else if (currentPage === 'waste-detail' && selectedWasteCategory) {
      // Similar for waste detail
      seoDataSource = seoMetadata.products;
      pageTypeForHreflang = 'waste-detail';
      wasteCategoryForHreflang = selectedWasteCategory;
    }

    // Resolve the SEO Data
    const resolvedSEO: SEOMetadata = (typeof seoDataSource === 'function')
      ? seoDataSource(currentLang)
      : seoDataSource;

    return {
      ...resolvedSEO,
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
        metadata = seoMetadata.home(currentLang);
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
        metadata = seoMetadata.about(currentLang);
        break;

      case 'products-overview':
        metadata = seoMetadata.products(currentLang);
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
        metadata = seoMetadata.technology(currentLang);
        break;

      case 'references-overview':
        metadata = seoMetadata.references(currentLang);
        break;

      case 'certificates':
        metadata = seoMetadata.certificates(currentLang);
        break;

      case 'contact':
        metadata = seoMetadata.contact(currentLang);
        break;

      case 'ecatalog':
        metadata = seoMetadata.ecatalog(currentLang);
        break;

      default:
        metadata = seoMetadata.home(currentLang);
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
      productType === 'single-shaft' ? 'TSH-60' :
        productType === 'dual-shaft' ? 'CS-20' :
          productType === 'quad-shaft' ? 'DS-80' :
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
        <ContactPage onBackToMain={handleNavigateToMain} />
        <ChatWidget />
      </>
    );
  }

  if (currentPage === 'ecatalog') {
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
        <ECatalogPage onBackToMain={handleNavigateToMain} />
        <ChatWidget />
      </>
    );
  }

  if (currentPage === 'product-detail' && selectedProduct) {
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
        <CertificatesPage onBackToMain={handleNavigateToMain} />
        <ChatWidget />
      </>
    );
  }

  if (currentPage === 'technology') {
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
        <TechnologyPage onBackToMain={handleNavigateToMain} />
        <ChatWidget />
      </>
    );
  }

  if (currentPage === 'products-overview') {
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
        <AboutPage onBackToMain={handleNavigateToMain} />
        <ChatWidget />
      </>
    );
  }

  if (currentPage === 'references-overview') {
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
        <ReferencesOverviewPage onBackToMain={handleNavigateToMain} />
        <ChatWidget />
      </>
    );
  }

  if (currentPage === 'waste-categories') {
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
        <WasteDetailPage
          categoryId={selectedWasteCategory}
          onBack={handleBackFromWasteDetail}
        />
        <ChatWidget />
      </>
    );
  }

  if (currentPage === 'not-found') {
    return (
      <>
        <SEOHead
          title="Sayfa Bulunamadı - MT Makina"
          description="Aradığınız sayfa mevcut değil."
          keywords={[]}
          canonical={'https://www.parcalamamakinesi.com' + window.location.pathname}
          noindex={true}
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
        <NotFoundPage onBackToMain={handleNavigateToMain} />
        <ChatWidget />
      </>
    );
  }

  // Main homepage
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
    <HelmetProvider> {/* <-- BURAYA EKLEDİK */}
      <LanguageProvider>
        <AppContent />
      </LanguageProvider>
    </HelmetProvider>
  );
}
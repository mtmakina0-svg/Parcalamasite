import React, { useEffect, useState } from 'react';
import { HelmetProvider } from 'react-helmet-async'; // ✅ EKLENDİ (SEO için şart)
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
} from './utils/seoConfig';

type PageView =
  | 'main'
  | 'waste-categories'
  | 'waste-detail'
  | 'products-overview'
  | 'about'
  | 'references-overview'
  | 'technology'
  | 'certificates'
  | 'product-category'
  | 'product-detail'
  | 'ecatalog'
  | 'contact';
type ProductType =
  | 'single-shaft'
  | 'dual-shaft'
  | 'quad-shaft'
  | 'metal'
  | 'mobile'
  | 'pallet'
  | 'harddisk'
  | 'tree-root'
  | 'wood-grinder'
  | 'glass'
  | null;

// Parse URL and determine current page
function parseUrl(): {
  page: PageView;
  product?: ProductType;
  model?: string;
  wasteCategory?: string;
} {
  const path = window.location.pathname;
  console.log('parseUrl - Parsing path:', path);

  // Home page
  if (path === '/' || path === '' || path === '/home') {
    console.log('parseUrl - Detected: main/home page');
    return { page: 'main' };
  }

  // Kurumsal (About)
  if (path === '/kurumsal') {
    console.log('parseUrl - Detected: about page');
    return { page: 'about' };
  }

  // Ürünler (Products Overview)
  if (path === '/urunler') {
    console.log('parseUrl - Detected: products-overview page');
    return { page: 'products-overview' };
  }

  // Product Categories
  const productCategoryMap: { [key: string]: ProductType } = {
    '/tek-shaftli-parcalama-makinesi': 'single-shaft',
    '/cift-shaftli-parcalama-makinesi': 'dual-shaft',
    '/dort-shaftli-parcalama-makinesi': 'quad-shaft',
    '/metal-parcalama-makinesi': 'metal',
    '/mobil-kirici': 'mobile',
    '/palet-parcalama-makinesi': 'pallet',
    '/harddisk-imha-makinesi': 'harddisk',
    '/agac-koku-parcalama-makinesi': 'tree-root',
    '/agac-parcalama-ogutme-makinesi': 'wood-grinder',
    '/cam-sise-kirma-makinesi': 'glass',
  };

  // Check if it's a product category page
  for (const [urlPath, productType] of Object.entries(productCategoryMap)) {
    if (path === urlPath) {
      console.log(
        'parseUrl - Detected: product-category page, product:',
        productType,
      );
      return { page: 'product-category', product: productType };
    }
    // Check if it's a product detail page (e.g., /tek-shaftli-parcalama-makinesi/tsh-60)
    if (path.startsWith(urlPath + '/')) {
      const model = path.substring(urlPath.length + 1).toUpperCase();
      console.log(
        'parseUrl - Detected: product-detail page, product:',
        productType,
        'model:',
        model,
      );
      return { page: 'product-detail', product: productType, model };
    }
  }

  // Teknoloji
  if (path === '/teknoloji') {
    console.log('parseUrl - Detected: technology page');
    return { page: 'technology' };
  }

  // Referanslar
  if (path === '/referanslar') {
    console.log('parseUrl - Detected: references-overview page');
    return { page: 'references-overview' };
  }

  // Sertifikalar
  if (path === '/sertifikalar') {
    console.log('parseUrl - Detected: certificates page');
    return { page: 'certificates' };
  }

  // İletişim
  if (path === '/iletisim') {
    console.log('parseUrl - Detected: contact page');
    return { page: 'contact' };
  }

  // E-Katalog
  if (path === '/e-katalog') {
    console.log('parseUrl - Detected: ecatalog page');
    return { page: 'ecatalog' };
  }

  // Atık Türleri
  if (path === '/atik-turleri') {
    console.log('parseUrl - Detected: waste-categories page');
    return { page: 'waste-categories' };
  }
  if (path.startsWith('/atik-turleri/')) {
    const category = path.substring('/atik-turleri/'.length);
    console.log('parseUrl - Detected: waste-detail page, category:', category);
    return { page: 'waste-detail', wasteCategory: category };
  }

  // Default to main page
  console.log('parseUrl - No match found, defaulting to main page');
  return { page: 'main' };
}

// --- ✅ YENİ KAYAN BIÇAK ANİMASYONU BİLEŞENİ ---
const ShredderBladeAnimation = () => {
  const [scrollY, setScrollY] = useState(0);

  // Scroll dinleyicisi
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Animasyonun başlayacağı ve biteceği scroll değerleri
  const startScroll = 600; // Ana 'Hero' bölümünün bittiği yer (yaklaşık)
  const endScroll = document.documentElement.scrollHeight - window.innerHeight - 300; // Footer'dan 300px önce bitir

  // Scroll'a göre hesaplamalar
  let progress = 0;
  if (scrollY > startScroll && scrollY < endScroll) {
    progress = (scrollY - startScroll) / (endScroll - startScroll);
  } else if (scrollY >= endScroll) {
    progress = 1;
  }

  // Opacity (Görünürlük): Başta ve sonda kaybolsun
  let opacity = 0;
  if (progress > 0.01 && progress < 0.95) {
    // 0.01 ile 0.95 arasında görünür
    opacity = 1;
  } else if (progress <= 0.01 && scrollY > startScroll) {
    // Başlangıçta fade-in
    opacity = progress / 0.01;
  } else if (progress >= 0.95) {
    // Sonda fade-out
    opacity = (1 - progress) / 0.05;
  }
  if (scrollY <= startScroll) opacity = 0; // En başta görünmez

  // Yatay Hareket (translateX): Ekran genişliğine göre ilerlesin
  const translateX = progress * 90; // %0'dan %90'a kadar ilerler (vw = viewport width)
  // Dönüş (rotate): Scroll ile birlikte dönsün
  const rotate = scrollY * 0.5; // Scroll'a bağlı hız

  // Kıvılcım için CSS
  const sparkStyle: React.CSSProperties = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    width: '3px',
    height: '3px',
    background: '#F4CE14',
    borderRadius: '50%',
    boxShadow: '0 0 4px #F4CE14, 0 0 8px #F4CE14, 0 0 12px #FFD700',
    // ✅ DÜZELTİLDİ: Template literal'in tamamı burada
    animation: `sparkle ${0.3 + Math.random() * 0.3}s ease-out infinite alternate`,
  };

  return (
    <>
      {/* Keyframes'i bir kez <style> olarak ekleyelim */}
      <style>
        {`
          @keyframes sparkle {
            0% { 
              transform: scale(1) translate(0, 0); 
              opacity: 1; 
            }
            100% { 
              transform: scale(0) translate(${Math.random() * 40 - 20}px, ${
          Math.random() * 40 - 20
        }px); 
              opacity: 0; 
            }
          }
        `}
      </style>
      <div
        className="fixed top-24 left-0 z-40 transition-opacity duration-300" // Header'ın hemen altında
        style={{
          opacity: opacity,
          transform: `translateX(${translateX}vw)`,
          display: opacity > 0 ? 'block' : 'none',
          pointerEvents: 'none', // Tıklanamaz olsun
        }}
      >
        <div style={{ transform: `rotate(${rotate}deg)` }} className="relative w-12 h-12"> {/* Boyut küçültüldü */}
          {/* SVG Shredder Blade (Parçalayıcı Bıçağı) */}
          <svg
            viewBox="0 0 100 100"
            fill="#45474B" // Gri alanla aynı renk
            xmlns="http://www.w3.org/2000/svg"
            style={{ filter: 'drop-shadow(2px 2px 4px rgba(0,0,0,0.3))' }} // Gölgeli
          >
            <path d="M50 0 L65 35 L100 50 L65 65 L50 100 L35 65 L0 50 L35 35 Z" />
            <circle cx="50" cy="50" r="20" fill="#F5F7F8" />
            <circle cx="50" cy="50" r="10" fill="#F4CE14" />
          </svg>

          {/* Kıvılcımlar (Daha fazla) */}
          <div style={{ ...sparkStyle, transform: 'translate(10px, -5px) scale(0.8)' }} />
          <div style={{ ...sparkStyle, transform: 'translate(8px, 8px) scale(1.0)' }} />
          <div style={{ ...sparkStyle, transform: 'translate(-5px, 10px) scale(0.7)' }} />
        </div>
      </div>
    </>
  );
};
// --- YENİ ANİMASYON BİLEŞENİ BİTİŞİ ---

function AppContent() {
  const { isRTL } = useLanguage();
  const [showIntro, setShowIntro] = useState(true);
  const [currentPage, setCurrentPage] = useState<PageView>('main');
  const [selectedWasteCategory,
    setSelectedWasteCategory,] = useState<string | null>(null);
  const [selectedProduct, setSelectedProduct] = useState<ProductType>(null);
  const [selectedModelName, setSelectedModelName] = useState<string>('TSH-60');

  // Initialize from URL on mount
  useEffect(() => {
    console.log(
      'App.tsx - Initializing, current pathname:',
      window.location.pathname,
    );

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
    if (urlState.wasteCategory)
      setSelectedWasteCategory(urlState.wasteCategory);

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
      if (urlState.wasteCategory)
        setSelectedWasteCategory(urlState.wasteCategory);
      updatePageSEO(urlState.page, urlState.product, urlState.model);
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Update SEO metadata for current page
  const updatePageSEO = (
    page: PageView,
    product?: ProductType,
    model?: string,
  ) => {
    let metadata;
    let structuredData;

    switch (page) {
      case 'main':
        metadata =
          typeof seoMetadata.home === 'function'
            ? seoMetadata.home()
            : seoMetadata.home;
        // Add comprehensive organization structured data for home page
        structuredData = {
          '@context': 'https://schema.org',
          '@graph': [
            generateOrganizationStructuredData(),
            generateLocalBusinessStructuredData(),
            {
              '@type': 'WebSite',
              name: 'MT Makina - Parçalama Makineleri',
              url: 'https://www.parcalamamakinesi.com',
              potentialAction: {
                '@type': 'SearchAction',
                target:
                  'https://www.parcalamamakinesi.com/urunler?q={search_term_string}',
                'query-input': 'required name=search_term_string',
              },
            },
            {
              '@type': 'ItemList',
              name: 'Parçalama Makinesi Türleri',
              itemListElement: [
                {
                  '@type': 'ListItem',
                  position: 1,
                  name: 'Tek Şaftlı Parçalama Makinesi',
                  url: 'https://www.parcalamamakinesi.com/tek-shaftli-parcalama-makinesi',
                },
                {
                  '@type': 'ListItem',
                  position: 2,
                  name: 'Çift Şaftlı Parçalama Makinesi',
                  url: 'https://www.parcalamamakinesi.com/cift-shaftli-parcalama-makinesi',
                },
              ],
            },
          ],
        };
        break;

      case 'product-category':
        if (product) {
          metadata = getProductCategorySEO(product);
          structuredData = {
            '@context': 'https://schema.org',
            '@type': 'CollectionPage',
            name: metadata.title,
            description: metadata.description,
            url: metadata.canonical,
            publisher: {
              '@type': 'Organization',
              name: 'MT Makina',
              logo: 'https://i.ibb.co/HLymGDrz/1-Mt-Makina-Logo.png',
            },
            breadcrumb: generateBreadcrumbStructuredData([
              {
                name: 'Ana Sayfa',
                url: 'https://www.parcalamamakinesi.com/home',
              },
              {
                name: 'Ürünler',
                url: 'https://www.parcalamamakinesi.com/urunler',
              },
              {
                name: metadata.title.split('|')[0].trim(),
                url: metadata.canonical,
              },
            ]),
          };
        }
        break;

      case 'about':
        metadata =
          typeof seoMetadata.about === 'function'
            ? seoMetadata.about()
            : seoMetadata.about;
        break;

      case 'products-overview':
        metadata =
          typeof seoMetadata.products === 'function'
            ? seoMetadata.products()
            : seoMetadata.products;
        break;

      // Bu case 'product-category' ile zaten cover edilmişti, tekrarı silebiliriz ama kalsın.
      // case 'product-category':
      //   if (product) {
      //     metadata = getProductCategorySEO(product);
      //     structuredData = generateBreadcrumbStructuredData([
      //       { name: 'Ana Sayfa', url: 'https://www.parcalamamakinesi.com/home' },
      //       { name: 'Ürünler', url: 'https://www.parcalamamakinesi.com/urunler' },
      //       { name: metadata.title.split('|')[0].trim(), url: metadata.canonical }
      //     ]);
      //   }
      //   break;

      case 'product-detail':
        if (product && model) {
          metadata = getProductModelSEO(product, model);
          const categoryMeta = getProductCategorySEO(product);
          structuredData = {
            ...generateProductStructuredData(product, model),
            breadcrumb: generateBreadcrumbStructuredData([
              {
                name: 'Ana Sayfa',
                url: 'https://www.parcalamamakinesi.com/home',
              },
              {
                name: 'Ürünler',
                url: 'https://www.parcalamamakinesi.com/urunler',
              },
              {
                name: categoryMeta.title.split('|')[0].trim(),
                url: categoryMeta.canonical,
              },
              { name: model, url: metadata.canonical },
            ]),
          };
        }
        break;

      case 'technology':
        metadata =
          typeof seoMetadata.technology === 'function'
            ? seoMetadata.technology()
            : seoMetadata.technology;
        break;

      case 'references-overview':
        metadata =
          typeof seoMetadata.references === 'function'
            ? seoMetadata.references()
            : seoMetadata.references;
        break;

      case 'certificates':
        metadata =
          typeof seoMetadata.certificates === 'function'
            ? seoMetadata.certificates()
            : seoMetadata.certificates;
        break;

      case 'contact':
        metadata =
          typeof seoMetadata.contact === 'function'
            ? seoMetadata.contact()
            : seoMetadata.contact;
        break;

      case 'ecatalog':
        metadata =
          typeof seoMetadata.ecatalog === 'function'
            ? seoMetadata.ecatalog()
            : seoMetadata.ecatalog;
        break;

      default:
        metadata =
          typeof seoMetadata.home === 'function'
            ? seoMetadata.home()
            : seoMetadata.home;
    }

    if (metadata) {
      updateSEOMetadata(metadata);
    }

    if (structuredData) {
      insertStructuredData(structuredData);
    }
  };

  // Navigation with URL updates
  const navigateWithUrl = (
    page: PageView,
    url: string,
    extraState?: {
      product?: ProductType;
      model?: string;
      wasteCategory?: string;
    },
  ) => {
    setCurrentPage(page);
    if (extraState?.product) setSelectedProduct(extraState.product);
    if (extraState?.model) setSelectedModelName(extraState.model);
    if (extraState?.wasteCategory)
      setSelectedWasteCategory(extraState.wasteCategory);
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
    navigateWithUrl('product-category', url, {
      product: productType as ProductType,
    });
  };

  const handleNavigateToProductDetail = (
    productType: string,
    modelName?: string,
  ) => {
    const model =
      modelName ||
      (productType === 'single-shaft'
        ? 'TSH-60'
        : productType === 'dual-shaft'
        ? 'CS-20'
        : productType === 'quad-shaft'
        ? 'QS-80'
        : 'TSH-60');
    const url = generateUrl.productDetail(productType, model);
    navigateWithUrl('product-detail', url, {
      product: productType as ProductType,
      model,
    });
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

  // --- ✅ YENİ TEKİL SAYFA DÜZENİ (BÜTÜNLÜK KURALI) ---
  // Header ve Footer'ı her sayfa için tekrar etmek yerine
  // bir üst seviyeye taşıdık.
  const renderPage = () => {
    switch (currentPage) {
      case 'main':
        return (
          <main>
            <HeroSection />
            <IntroSection />
            <ProductsSection onProductClick={handleNavigateToProductCategory} />
            <TechnologySection />
            <ReferencesSection />
            <ContactSection />
            <CTASection />
          </main>
        );
      case 'product-category':
        if (selectedProduct) {
          return (
            <ProductCategoryPage
              productType={selectedProduct}
              onBackToMain={handleBackFromCategory}
              onModelSelect={(modelName) =>
                handleNavigateToProductDetail(selectedProduct, modelName)
              }
            />
          );
        }
        return null; // veya bir yüklenme/hata ekranı
      case 'contact':
        return <ContactPage onBackToMain={handleNavigateToMain} />;
      case 'ecatalog':
        return <ECatalogPage onBackToMain={handleNavigateToMain} />;
      case 'product-detail':
        if (selectedProduct) {
          return (
            <ProductDetailPage
              productType={selectedProduct}
              modelName={selectedModelName}
              onBackToMain={handleBackFromProductDetail}
              onECatalogClick={handleNavigateToECatalog}
              onProductDetailClick={handleNavigateToProductDetail}
            />
          );
        }
        return null;
      case 'certificates':
        return <CertificatesPage onBackToMain={handleNavigateToMain} />;
      case 'technology':
        return <TechnologyPage onBackToMain={handleNavigateToMain} />;
      case 'products-overview':
        return (
          <ProductsOverviewPage
            onBackToMain={handleNavigateToMain}
            onProductClick={handleNavigateToProductDetail}
          />
        );
      case 'about':
        return <AboutPage onBackToMain={handleNavigateToMain} />;
      case 'references-overview':
        return <ReferencesOverviewPage onBackToMain={handleNavigateToMain} />;
      case 'waste-categories':
        return (
          <WasteCategoriesPage
            onCategorySelect={handleWasteCategorySelect}
            onBackToMain={handleNavigateToMain}
          />
        );
      case 'waste-detail':
        if (selectedWasteCategory) {
          return (
            <WasteDetailPage
              categoryId={selectedWasteCategory}
              onBack={handleBackFromWasteDetail}
            />
          );
        }
        return null;
      default:
        // Ana sayfa için olanı varsayılan olarak döndür
        return (
          <main>
            <HeroSection />
            <IntroSection />
            <ProductsSection onProductClick={handleNavigateToProductCategory} />
            <TechnologySection />
            <ReferencesSection />
            <ContactSection />
            <CTASection />
          </main>
        );
    }
  };

  // Main homepage
  return (
    <>
      {showIntro && <IntroLoader onComplete={() => setShowIntro(false)} />}
      
      {/* ✅ YENİ ANİMASYONU SADECE ANA SAYFADA GÖSTER */}
      {currentPage === 'main' && !showIntro && <ShredderBladeAnimation />}

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
          {/* ✅ DÜZELTME: renderPage() zaten <main> tag'i içermiyor, o yüzden <main> tag'i burada olmalı. */}
          <main>
             {renderPage()}
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
    // ✅ YENİ: HelmetProvider tüm uygulamayı sarmalıyor
    <HelmetProvider>
      <LanguageProvider>
        <AppContent />
      </LanguageProvider>
    </HelmetProvider>
  );
}
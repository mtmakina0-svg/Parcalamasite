import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
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
   SEO ETİKETLERİNİ OLUŞTURAN BÖLÜM
--------------------------------------------------------- */
function PageSpecificSEO({ page, product, model, wasteCategory }: { page: PageView; product?: ProductType; model?: string; wasteCategory?: string }) {
  let title = "Parçalama Makinesi | Geri Dönüşüm Sistemleri | MT Makina"; // Varsayılan Başlık
  let description = "Endstriyel parçalama makineleri, geri dönüşüm çözümleri ve özel üretim makineler için MT Makina ile iletişime geçin. Uygun fiyatlar, yüksek kalite."; // Varsayılan Açıklama
  let canonical = "https://parcalamamakinesi.com/"; // Varsayılan URL
  
  switch (page) {
    case 'main':
      break;
    case 'about':
      title = "Hakkımızda | Kurumsal | MT Makina";
      description = "MT Makina'nın vizyonu, misyonu ve kurumsal değerleri hakkında bilgi edinin. Sektördeki tecrübemizle tanışın.";
      canonical = "https://parcalamamakinesi.com/kurumsal";
      break;
    case 'contact':
      title = "İletişim ve Teklif | MT Makina";
      description = "Bize ulaşın, projeniz için en uygun parçalama makinesi teklifini alın. Adres, telefon ve e-posta bilgileri.";
      canonical = "https://parcalamamakinesi.com/iletisim";
      break;
    case 'products-overview':
      title = "Ürünlerimiz | Parçalama Makineleri | MT Makina";
      description = "Tüm parçalama makinesi modellerimizi (tek, çift, dört shaftlı) ve geri dönüşüm sistemlerimizi (kırıcı, granülatör) inceleyin.";
      canonical = "https://parcalamamakinesi.com/urunler";
      break;
    case 'technology':
      title = "Teknoloji ve AR-GE | MT Makina";
      description = "Yenilikçi parçalama teknolojilerimiz, AR-GE çalışmalarımız ve üretim süreçlerimiz hakkında detaylı bilgi alın.";
      canonical = "https://parcalamamakinesi.com/teknoloji";
      break;
    case 'references-overview':
      title = "Referanslar | MT Makina";
      description = "Başarıyla tamamladığımız projeler, mutlu müşterilerimiz ve parçalama makinesi referanslarımızı inceleyin.";
      canonical = "https://parcalamamakinesi.com/referanslar";
      break;
    case 'certificates':
      title = "Sertifikalar ve Kalite | MT Makina";
      description = "Kalite standartlarımızı ve uluslararası geçerliliğe sahip sertifikalarımızı (CE, ISO) bu sayfada bulabilirsiniz.";
      canonical = "https://parcalamamakinesi.com/sertifikalar";
      break;
    case 'ecatalog':
      title = "E-Katalog | MT Makina";
      description = "Güncel ürün kataloğumuzu inceleyin ve indirin. Parçalama makineleri ve geri dönüşüm sistemleri.";
      canonical = "https://parcalamamakinesi.com/e-katalog";
      break;
    case 'waste-categories':
      title = "Atık Türleri | Geri Dönüşüm Çözümleri | MT Makina";
      description = "Evsel atık, lastik, plastik, metal ve daha birçok atık türü için sunduğumuz parçalama ve geri dönüşüm çözümlerini keşfedin.";
      canonical = "https://parcalamamakinesi.com/atik-turleri";
      break;
    // Diğer 'case'ler (product-detail vb.) eklenebilir
  }

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />
    </Helmet>
  );
}


/* ---------------------------------------------------------
   SAYFA İÇERİĞİ
--------------------------------------------------------- */
function AppContent() {
  const { isRTL } = useLanguage();
  const [showIntro, setShowIntro] = useState(true);

  // Sayfa ilk yüklendiğinde URL'i okur
  const [urlState, setUrlState] = useState(parseUrl());
  const { page: currentPage, product: selectedProduct, model: selectedModelName, wasteCategory: selectedWasteCategory } = urlState;

  // URL değiştiğinde (ileri/geri tuşları) state'i güncelle
  useEffect(() => {
    const handlePopState = () => {
      setUrlState(parseUrl());
    };
    window.addEventListener('popstate', handlePopState);
    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, []);

  // Navigasyon Yakalayıcı (Link tıklamalarını yönetir)
  useEffect(() => {
    const handleLinkClick = (event: MouseEvent) => {
      const target = (event.target as HTMLElement).closest('a');
      
      if (!target || target.hostname !== window.location.hostname || target.target === '_blank' || event.ctrlKey || event.metaKey) {
        return;
      }
      
      if (target.pathname === window.location.pathname && target.hash) {
        return; 
      }

      event.preventDefault();
      window.history.pushState(null, '', target.pathname);
      setUrlState(parseUrl()); // Tıklamadan sonra state'i güncelle
    };

    document.addEventListener('click', handleLinkClick);
    return () => {
      document.removeEventListener('click', handleLinkClick);
    };
  }, []);

  // dil yönü
  useEffect(() => {
    document.documentElement.dir = isRTL ? 'rtl' : 'ltr';
  }, [isRTL]);

  // scroll top
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [currentPage]); // Artık 'currentPage' yerine 'urlState'e bağlı olabilir: }, [urlState.page]);

  /* --------------------------
     SAYFA SEÇİMİ (ROUTER) - DÜZELTİLDİ
   -------------------------- */

  const seoTags = <PageSpecificSEO page={currentPage} product={selectedProduct} model={selectedModelName} wasteCategory={selectedWasteCategory} />;

  // Ana sayfaya dönmek için kullanılacak fonksiyon
  const backToMain = () => setUrlState({ page: 'main' });

  // Her sayfa için doğru component'i (bileşeni) döndür
  if (currentPage === 'contact') {
    return <> {seoTags} <ContactPage onBackToMain={backToMain} /> </>;
  }
  if (currentPage === 'about') {
    return <> {seoTags} <AboutPage onBackToMain={backToMain} /> </>;
  }
  if (currentPage === 'products-overview') {
    return <> {seoTags} <ProductsOverviewPage onBackToMain={backToMain} /> </>;
  }
  if (currentPage === 'technology') {
    return <> {seoTags} <TechnologyPage onBackToMain={backToMain} /> </>;
  }
  if (currentPage === 'references-overview') {
    return <> {seoTags} <ReferencesOverviewPage onBackToMain={backToMain} /> </>;
  }
  if (currentPage === 'certificates') {
    return <> {seoTags} <CertificatesPage onBackToMain={backToMain} /> </>;
  }
  if (currentPage === 'ecatalog') {
    return <> {seoTags} <ECatalogPage onBackToMain={backToMain} /> </>;
  }
  if (currentPage === 'waste-categories') {
    return <> {seoTags} <WasteCategoriesPage onBackToMain={backToMain} /> </>;
  }
  if (currentPage === 'waste-detail' && selectedWasteCategory) {
    return <> {seoTags} <WasteDetailPage wasteCategory={selectedWasteCategory} onBackToMain={backToMain} /> </>;
  }
  if (currentPage === 'product-category' && selectedProduct) {
    return <> {seoTags} <ProductCategoryPage productType={selectedProduct} onBackToMain={backToMain} /> </>;
  }
  if (currentPage === 'product-detail' && selectedProduct) {
    return <> {seoTags} <ProductDetailPage productType={selectedProduct} modelName={selectedModelName || ""} onBackToMain={backToMain} /> </>;
  }

  // Eğer `currentPage` 'main' ise veya başka bir durumla eşleşmezse, ana sayfayı göster
  return (
    <>
      {seoTags} 
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
   UYGULAMANIN ANA KISMI
--------------------------------------------------------- */
export default function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}


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
    animation: `sparkle ${0.3 + Math.random() *
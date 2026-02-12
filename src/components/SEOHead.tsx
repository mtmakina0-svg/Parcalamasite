import { useContext } from 'react';
import { Helmet } from 'react-helmet-async';
import { LanguageContext } from './LanguageContext';
import { generateUrl, type Language } from '../utils/seoConfig';

/**
 * SEOHead Component - Advanced SEO Optimization with React Helmet
 * Google-first SEO with multilingual support, structured data, and social media optimization
 */

interface SEOHeadProps {
  title: string;
  description: string;
  keywords: string[];
  canonical: string;
  ogImage?: string;
  ogType?: string;
  structuredData?: Record<string, unknown>;
  noindex?: boolean;
  pageType?: 'home' | 'about' | 'products' | 'technology' | 'references' | 'certificates' | 'contact' | 'ecatalog' | 'product-category' | 'product-detail' | 'waste-categories' | 'waste-detail';
  productType?: string;
  model?: string;
  wasteCategory?: string;
}

export const SEOHead: React.FC<SEOHeadProps> = ({
  title,
  description,
  keywords,
  canonical,
  ogImage = 'https://i.ibb.co/HLymGDrz/1-Mt-Makina-Logo.png',
  ogType = 'website',
  structuredData,
  noindex = false,
  pageType,
  productType,
  model,
  wasteCategory,
}) => {
  const { language } = useContext(LanguageContext);

  // Language-specific locale mapping
  const localeMap: { [key: string]: string } = {
    'tr': 'tr_TR',
    'en': 'en_US',
    'ru': 'ru_RU',
    'ar': 'ar_SA'
  };

  // Content-Language mapping
  const contentLanguageMap: { [key: string]: string } = {
    'tr': 'tr-TR',
    'en': 'en-US',
    'ru': 'ru-RU',
    'ar': 'ar-SA'
  };

  // Generate hreflang URLs
  const baseUrl = 'https://www.parcalamamakinesi.com';
  const supportedLanguages: Language[] = ['tr', 'en', 'ru', 'ar'];

  const generateHreflangUrls = () => {
    const urls: { code: string; url: string }[] = [];

    supportedLanguages.forEach(lang => {
      let url = baseUrl;

      if (pageType === 'home') {
        url += generateUrl.home(lang);
      } else if (pageType === 'about') {
        url += generateUrl.about(lang);
      } else if (pageType === 'products') {
        url += generateUrl.products(lang);
      } else if (pageType === 'technology') {
        url += generateUrl.technology(lang);
      } else if (pageType === 'references') {
        url += generateUrl.references(lang);
      } else if (pageType === 'certificates') {
        url += generateUrl.certificates(lang);
      } else if (pageType === 'contact') {
        url += generateUrl.contact(lang);
      } else if (pageType === 'ecatalog') {
        url += generateUrl.ecatalog(lang);
      } else if (pageType === 'product-category' && productType) {
        url += generateUrl.productCategory(productType, lang);
      } else if (pageType === 'product-detail' && productType && model) {
        url += generateUrl.productDetail(productType, model, lang);
      } else if (pageType === 'waste-categories') {
        url += generateUrl.waste(undefined, lang);
      } else if (pageType === 'waste-detail' && wasteCategory) {
        url += generateUrl.waste(wasteCategory, lang);
      } else {
        url = canonical.replace(/\/(tr|en|ru|ar)\//, `/${lang}/`);
      }

      urls.push({ code: lang, url });
    });

    // Add x-default (defaults to Turkish)
    urls.push({
      code: 'x-default',
      url: urls.find(u => u.code === 'tr')?.url || canonical
    });

    return urls;
  };

  const hreflangUrls = generateHreflangUrls();
  const robotsContent = noindex
    ? 'noindex, nofollow'
    : 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1';

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <html lang={language} dir={language === 'ar' ? 'rtl' : 'ltr'} />
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords.join(', ')} />
      <meta name="author" content="MT Makina - Industrial Shredding Solutions" />
      <meta name="robots" content={robotsContent} />
      <meta name="googlebot" content={noindex ? 'noindex, nofollow' : 'index, follow'} />
      <meta httpEquiv="Content-Language" content={contentLanguageMap[language] || 'tr-TR'} />

      {/* Canonical URL */}
      <link rel="canonical" href={canonical} />

      {/* Hreflang Tags for Multilingual SEO */}
      {hreflangUrls.map(({ code, url }) => (
        <link key={code} rel="alternate" hrefLang={code} href={url} />
      ))}

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonical} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content="MT Makina - Industrial Shredding Machines" />
      <meta property="og:site_name" content="MT Makina" />
      <meta property="og:locale" content={localeMap[language] || 'tr_TR'} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={canonical} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:image:alt" content="MT Makina - Industrial Shredding Machines" />
      <meta name="twitter:creator" content="@mtmakina" />
      <meta name="twitter:site" content="@mtmakina" />

      {/* Mobile & Theme */}
      <meta name="theme-color" content="#F4CE14" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />

      {/* Structured Data (JSON-LD) */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
};

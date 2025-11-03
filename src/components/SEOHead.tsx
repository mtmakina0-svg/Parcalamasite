import { useEffect, useContext } from 'react';
import { LanguageContext } from './LanguageContext';

/**
 * SEOHead Component - Advanced SEO Optimization
 * Google-first SEO with multilingual support, structured data, and social media optimization
 */

interface SEOHeadProps {
  title: string;
  description: string;
  keywords: string[];
  canonical: string;
  ogImage?: string;
  ogType?: string;
  structuredData?: any; // JSON-LD structured data
  noindex?: boolean; // Option to prevent indexing
}

export const SEOHead: React.FC<SEOHeadProps> = ({
  title,
  description,
  keywords,
  canonical,
  ogImage = 'https://i.ibb.co/HLymGDrz/1-Mt-Makina-Logo.png',
  ogType = 'website',
  structuredData,
  noindex = false
}) => {
  const { language } = useContext(LanguageContext);

  useEffect(() => {
    // Update document title
    document.title = title;

    // Set language attribute on html element
    document.documentElement.lang = language;
    
    // Set dir attribute for RTL languages
    if (language === 'ar') {
      document.documentElement.dir = 'rtl';
    } else {
      document.documentElement.dir = 'ltr';
    }

    // Helper function to update or create meta tags
    const updateMetaTag = (selector: string, attribute: string, value: string) => {
      let element = document.querySelector(selector);
      if (!element) {
        element = document.createElement('meta');
        if (attribute === 'name' || attribute === 'property') {
          element.setAttribute(attribute, selector.replace(/meta\[(name|property)=\"(.+?)\"\]/, '$2'));
        }
        document.head.appendChild(element);
      }
      element.setAttribute('content', value);
    };

    // Update basic meta tags
    updateMetaTag('meta[name="description"]', 'name', description);
    updateMetaTag('meta[name="keywords"]', 'name', keywords.join(', '));
    updateMetaTag('meta[name="author"]', 'name', 'MT Makina - Industrial Shredding Solutions');
    
    // Robots meta tag - optimized for Google
    const robotsContent = noindex 
      ? 'noindex, nofollow' 
      : 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1';
    updateMetaTag('meta[name="robots"]', 'name', robotsContent);
    updateMetaTag('meta[name="googlebot"]', 'name', noindex ? 'noindex, nofollow' : 'index, follow');
    
    // Additional Google optimization tags
    updateMetaTag('meta[name="google"]', 'name', 'notranslate'); // Prevent auto-translation
    updateMetaTag('meta[name="google-site-verification"]', 'name', 'YOUR_GOOGLE_VERIFICATION_CODE_HERE');
    updateMetaTag('meta[name="viewport"]', 'name', 'width=device-width, initial-scale=1, maximum-scale=5');
    
    // Charset
    let charset = document.querySelector('meta[charset]');
    if (!charset) {
      charset = document.createElement('meta');
      charset.setAttribute('charset', 'UTF-8');
      document.head.insertBefore(charset, document.head.firstChild);
    }
    
    // Mobile optimization
    updateMetaTag('meta[name="theme-color"]', 'name', '#F4CE14'); // Brand yellow
    updateMetaTag('meta[name="mobile-web-app-capable"]', 'name', 'yes');
    updateMetaTag('meta[name="apple-mobile-web-app-capable"]', 'name', 'yes');
    updateMetaTag('meta[name="apple-mobile-web-app-status-bar-style"]', 'name', 'black-translucent');
    
    // Open Graph tags - optimized for social sharing
    updateMetaTag('meta[property="og:title"]', 'property', title);
    updateMetaTag('meta[property="og:description"]', 'property', description);
    updateMetaTag('meta[property="og:url"]', 'property', canonical);
    updateMetaTag('meta[property="og:type"]', 'property', ogType);
    updateMetaTag('meta[property="og:image"]', 'property', ogImage);
    updateMetaTag('meta[property="og:image:width"]', 'property', '1200');
    updateMetaTag('meta[property="og:image:height"]', 'property', '630');
    updateMetaTag('meta[property="og:image:alt"]', 'property', 'MT Makina - Industrial Shredding Machines');
    updateMetaTag('meta[property="og:site_name"]', 'property', 'MT Makina');
    
    // Language-specific locale
    const localeMap: { [key: string]: string } = {
      'tr': 'tr_TR',
      'en': 'en_US',
      'ru': 'ru_RU',
      'ar': 'ar_SA'
    };
    updateMetaTag('meta[property="og:locale"]', 'property', localeMap[language] || 'tr_TR');
    
    // Alternate locales
    const alternateLocales = Object.values(localeMap).filter(loc => loc !== localeMap[language]);
    alternateLocales.forEach((locale, index) => {
      updateMetaTag(`meta[property="og:locale:alternate"][data-index="${index}"]`, 'property', locale);
    });

    // Twitter Card tags - optimized for Twitter/X sharing
    updateMetaTag('meta[name="twitter:card"]', 'name', 'summary_large_image');
    updateMetaTag('meta[name="twitter:title"]', 'name', title);
    updateMetaTag('meta[name="twitter:description"]', 'name', description);
    updateMetaTag('meta[name="twitter:image"]', 'name', ogImage);
    updateMetaTag('meta[name="twitter:image:alt"]', 'name', 'MT Makina - Industrial Shredding Machines');
    updateMetaTag('meta[name="twitter:creator"]', 'name', '@mtmakina');
    updateMetaTag('meta[name="twitter:site"]', 'name', '@mtmakina');

    // Update canonical link
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', canonical);

    // Add hreflang tags for multilingual SEO (critical for Google international ranking)
    const languages = [
      { code: 'tr', label: 'Turkish' },
      { code: 'en', label: 'English' },
      { code: 'ru', label: 'Russian' },
      { code: 'ar', label: 'Arabic' },
      { code: 'x-default', label: 'Default' }
    ];
    
    // Remove old hreflang tags
    document.querySelectorAll('link[hreflang]').forEach(link => link.remove());
    
    languages.forEach(lang => {
      const hreflangLink = document.createElement('link');
      hreflangLink.setAttribute('rel', 'alternate');
      hreflangLink.setAttribute('hreflang', lang.code);
      hreflangLink.setAttribute('href', 
        lang.code === 'x-default' 
          ? canonical 
          : `${canonical}?lang=${lang.code}`
      );
      document.head.appendChild(hreflangLink);
    });

    // Add structured data (JSON-LD) for rich snippets
    if (structuredData) {
      // Remove existing structured data
      document.querySelectorAll('script[type="application/ld+json"]').forEach(script => script.remove());
      
      // Add new structured data
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.text = JSON.stringify(structuredData);
      document.head.appendChild(script);
    }

    // Preconnect to external domains for performance
    const preconnectDomains = [
      'https://i.ibb.co',
      'https://www.youtube.com',
      'https://fonts.googleapis.com',
      'https://fonts.gstatic.com'
    ];
    
    preconnectDomains.forEach(domain => {
      let preconnect = document.querySelector(`link[rel="preconnect"][href="${domain}"]`);
      if (!preconnect) {
        preconnect = document.createElement('link');
        preconnect.setAttribute('rel', 'preconnect');
        preconnect.setAttribute('href', domain);
        preconnect.setAttribute('crossorigin', 'anonymous');
        document.head.appendChild(preconnect);
      }
    });

    // DNS Prefetch for additional performance
    const prefetchDomains = ['https://www.google-analytics.com'];
    prefetchDomains.forEach(domain => {
      let dnsPrefetch = document.querySelector(`link[rel="dns-prefetch"][href="${domain}"]`);
      if (!dnsPrefetch) {
        dnsPrefetch = document.createElement('link');
        dnsPrefetch.setAttribute('rel', 'dns-prefetch');
        dnsPrefetch.setAttribute('href', domain);
        document.head.appendChild(dnsPrefetch);
      }
    });

  }, [title, description, keywords, canonical, ogImage, ogType, structuredData, noindex, language]);

  return null; // This component doesn't render anything
};

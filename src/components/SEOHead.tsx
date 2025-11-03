import { useEffect } from 'react';

/**
 * SEOHead Component
 * This component updates the document head with SEO metadata
 * Note: In a production React app, you would typically use React Helmet or similar
 */

interface SEOHeadProps {
  title: string;
  description: string;
  keywords: string[];
  canonical: string;
  ogImage?: string;
  ogType?: string;
}

export const SEOHead: React.FC<SEOHeadProps> = ({
  title,
  description,
  keywords,
  canonical,
  ogImage = 'https://i.ibb.co/HLymGDrz/1-Mt-Makina-Logo.png',
  ogType = 'website'
}) => {
  useEffect(() => {
    // Update document title
    document.title = title;

    // Helper function to update or create meta tags
    const updateMetaTag = (selector: string, attribute: string, value: string) => {
      let element = document.querySelector(selector);
      if (!element) {
        element = document.createElement('meta');
        if (attribute === 'name' || attribute === 'property') {
          element.setAttribute(attribute, selector.replace(/meta\[(name|property)="(.+?)"\]/, '$2'));
        }
        document.head.appendChild(element);
      }
      element.setAttribute('content', value);
    };

    // Update basic meta tags
    updateMetaTag('meta[name="description"]', 'name', description);
    updateMetaTag('meta[name="keywords"]', 'name', keywords.join(', '));
    updateMetaTag('meta[name="author"]', 'name', 'MT Makina');
    updateMetaTag('meta[name="robots"]', 'name', 'index, follow');
    
    // Update Open Graph tags
    updateMetaTag('meta[property="og:title"]', 'property', title);
    updateMetaTag('meta[property="og:description"]', 'property', description);
    updateMetaTag('meta[property="og:url"]', 'property', canonical);
    updateMetaTag('meta[property="og:type"]', 'property', ogType);
    updateMetaTag('meta[property="og:image"]', 'property', ogImage);
    updateMetaTag('meta[property="og:site_name"]', 'property', 'MT Makina');
    updateMetaTag('meta[property="og:locale"]', 'property', 'tr_TR');

    // Update Twitter Card tags
    updateMetaTag('meta[name="twitter:card"]', 'name', 'summary_large_image');
    updateMetaTag('meta[name="twitter:title"]', 'name', title);
    updateMetaTag('meta[name="twitter:description"]', 'name', description);
    updateMetaTag('meta[name="twitter:image"]', 'name', ogImage);

    // Update canonical link
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', canonical);

    // Add alternate language links
    const languages = ['tr', 'en', 'ru', 'ar'];
    languages.forEach(lang => {
      let alternateLinkId = `alternate-${lang}`;
      let alternateLink = document.getElementById(alternateLinkId) as HTMLLinkElement;
      if (!alternateLink) {
        alternateLink = document.createElement('link');
        alternateLink.id = alternateLinkId;
        alternateLink.setAttribute('rel', 'alternate');
        alternateLink.setAttribute('hreflang', lang);
        document.head.appendChild(alternateLink);
      }
      alternateLink.setAttribute('href', `${canonical}?lang=${lang}`);
    });

  }, [title, description, keywords, canonical, ogImage, ogType]);

  return null; // This component doesn't render anything
};

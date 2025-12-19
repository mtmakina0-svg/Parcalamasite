import React, { createContext, useContext, useState, useEffect, ReactNode, useCallback } from 'react';
import { slugsByLanguage, productCategorySlugs } from '../utils/seoConfig';

// Import translations - Vite will code-split these automatically
import trTranslations from '../locales/tr.json';
import enTranslations from '../locales/en.json';
import ruTranslations from '../locales/ru.json';
import arTranslations from '../locales/ar.json';

export type Language = 'tr' | 'en' | 'ru' | 'ar';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  isRTL: boolean;
}

// Type-safe translations object
const translations: Record<Language, Record<string, string>> = {
  tr: trTranslations,
  en: enTranslations,
  ru: ruTranslations,
  ar: arTranslations,
};

export const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  // Detect language from URL on initial load
  const getLanguageFromURL = useCallback((): Language => {
    const path = window.location.pathname;
    const match = path.match(/^\/(tr|en|ru|ar)/);
    return (match?.[1] as Language) || 'tr';
  }, []);

  const [language, setLanguage] = useState<Language>(getLanguageFromURL);

  // Update language when URL changes (for navigation)
  useEffect(() => {
    const updateLanguageFromURL = () => {
      const newLang = getLanguageFromURL();
      if (newLang !== language) {
        setLanguage(newLang);
      }
    };

    // Listen to popstate (browser back/forward)
    window.addEventListener('popstate', updateLanguageFromURL);

    return () => {
      window.removeEventListener('popstate', updateLanguageFromURL);
    };
  }, [language, getLanguageFromURL]);

  // Custom setLanguage that also updates URL
  const changeLanguage = useCallback((newLang: Language) => {
    const currentPath = window.location.pathname;
    const currentLang = currentPath.match(/^\/(tr|en|ru|ar)/)?.[1] as Language || 'tr';

    // Parse current URL to determine page type
    const pathWithoutLang = currentPath.replace(/^\/(tr|en|ru|ar)\//, '');
    const pathParts = pathWithoutLang.split('/').filter(p => p);

    let newPath = `/${newLang}`;

    // Detect page type and rebuild URL
    if (pathParts.length === 0) {
      // Home page
      newPath = `/${newLang}`;
    } else {
      // Check if first part matches any static page
      const firstPart = pathParts[0];
      let pageFound = false;

      // Check static pages
      for (const [pageKey, slugs] of Object.entries(slugsByLanguage)) {
        if (slugs[currentLang] === firstPart) {
          newPath = `/${newLang}/${slugs[newLang]}`;
          pageFound = true;
          break;
        }
      }

      // Check product categories
      if (!pageFound) {
        for (const [productKey, slugs] of Object.entries(productCategorySlugs)) {
          if (slugs[currentLang] === firstPart) {
            newPath = `/${newLang}/${slugs[newLang]}`;

            // If there's a model (second part), append it
            if (pathParts.length > 1) {
              newPath += `/${pathParts[1]}`;
            }

            pageFound = true;
            break;
          }
        }
      }

      // Check blog routes (blog URL stays the same, just change language prefix)
      if (!pageFound && firstPart === 'blog') {
        newPath = `/${newLang}/blog`;
        // If there's a slug (second part), append it
        if (pathParts.length > 1) {
          newPath += `/${pathParts[1]}`;
        }
        pageFound = true;
      }

      // If no match found, just replace language prefix
      if (!pageFound) {
        newPath = currentPath.replace(/^\/(tr|en|ru|ar)/, `/${newLang}`);
      }
    }

    // Navigate to new URL with full page reload to ensure proper state
    window.location.href = newPath;
  }, []);

  const t = useCallback((key: string): string => {
    return translations[language][key] || key;
  }, [language]);

  const isRTL = language === 'ar';

  return (
    <LanguageContext.Provider value={{ language, setLanguage: changeLanguage, t, isRTL }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Globe, Menu, X, ChevronDown } from 'lucide-react';
import { useLanguage, Language } from './LanguageContext';
import { Button } from './ui/button';
import logoImage from 'figma:asset/bdf06c0f90a7df2b90e10c7d5a1fb0f4c37b8c94.png';

interface HeaderProps {
  onWasteClick?: () => void;
  onWasteDetailClick?: (wasteType: string) => void;
  onMainClick?: () => void;
  onProductsClick?: () => void;
  onAboutClick?: () => void;
  onReferencesClick?: () => void;
  onTechnologyClick?: () => void;
  onCertificatesClick?: () => void;
  onECatalogClick?: () => void;
  onProductDetailClick?: (productType: string, modelName?: string) => void;
  onContactClick?: () => void;
}

export const Header = ({ onWasteClick, onWasteDetailClick, onMainClick, onProductsClick, onAboutClick, onReferencesClick, onTechnologyClick, onCertificatesClick, onECatalogClick, onProductDetailClick, onContactClick }: HeaderProps = {}) => {
  const { language, setLanguage, t, isRTL } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [languageMenuOpen, setLanguageMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [dropdownTimeout, setDropdownTimeout] = useState<NodeJS.Timeout | null>(null);
  const [hoveredProduct, setHoveredProduct] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const languages = [
    { code: 'tr' as Language, label: 'Türkçe' },
    { code: 'en' as Language, label: 'English' },
    { code: 'ru' as Language, label: 'Русский' },
    { code: 'ar' as Language, label: 'العربية' },
  ];

  const corporateDropdown = [
    { key: 'nav_about', action: 'about' },
    { key: 'nav_certificates', action: 'certificates' }
  ];

  // Product models for mega menu
  const productModels: { [key: string]: { label: string, models: string[] } } = {
    'single-shaft': {
      label: 'Tek Şaftlı Parçalama Makinesi',
      models: ['TSH-60', 'TSH-80', 'TSH-100', 'TSH-120', 'TSH-150']
    },
    'dual-shaft': {
      label: 'Çift Şaftlı Parçalama Makinesi',
      models: ['CS-20', 'CS-40', 'CS-60', 'CS-80', 'CS-100', 'CS-120', 'CS-150', 'CS-180', 'CS-200']
    },
    'quad-shaft': {
      label: 'Dört Şaftlı Parçalama Makinesi',
      models: ['QS-80', 'QS-100', 'QS-120', 'QS-150']
    }
  };
  
  const productsDropdown = [
    { key: 'product_single_shaft', action: 'single-shaft', hasModels: true },
    { key: 'product_dual_shaft', action: 'dual-shaft', hasModels: true },
    { key: 'product_quad_shaft', action: 'quad-shaft', hasModels: true },
    { key: 'product_metal', action: 'metal', hasModels: false },
    { key: 'product_pallet', action: 'pallet', hasModels: false },
    { key: 'product_glass', action: 'glass', hasModels: false },
    { key: 'product_plastic', action: 'plastic', hasModels: false },
    { key: 'product_organic', action: 'organic', hasModels: false },
    { key: 'product_tire', action: 'tire', hasModels: false }
  ];
  
  const wastesDropdown = [
    { key: 'waste_household', action: 'evsel-atiklar' },
    { key: 'waste_tire', action: 'lastik-atiklari' },
    { key: 'waste_glass', action: 'cam-atiklar' },
    { key: 'waste_plastic', action: 'plastik-atiklar' },
    { key: 'waste_medical', action: 'tibbi-atiklar' },
    { key: 'waste_electronic', action: 'elektronik-atiklar' },
    { key: 'waste_metal', action: 'metal-atiklar' },
    { key: 'waste_paper', action: 'kagit-karton-atiklar' },
    { key: 'waste_organic', action: 'organik-atiklar' },
    { key: 'waste_animal', action: 'hayvan-atiklari' }
  ];

  const navItems = [
    { key: 'nav_home', href: '#hero', action: 'home' },
    { key: 'nav_corporate', href: '#', dropdown: corporateDropdown, noPointerEvents: true },
    { key: 'nav_products', href: '#', dropdown: productsDropdown, action: 'products' },
    { key: 'nav_wastes', href: '#', dropdown: wastesDropdown, action: 'wastes' },
    { key: 'nav_technology', href: '#technology', action: 'technology' },
    { key: 'nav_references', href: '#references', action: 'references' },
    { key: 'nav_contact', href: '#contact', action: 'contact' },
    { key: 'nav_ecatalog', label: 'E-Katalog', href: '#', action: 'ecatalog' },
  ];

  const handleContactLinkClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (onContactClick) {
      onContactClick();
    } else {
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handleMouseEnter = (itemKey: string) => {
    if (dropdownTimeout) {
      clearTimeout(dropdownTimeout);
      setDropdownTimeout(null);
    }
    setOpenDropdown(itemKey);
  };

  const handleMouseLeave = () => {
    // Delay closing to allow smooth cursor movement to dropdown
    const timeout = setTimeout(() => {
      setOpenDropdown(null);
    }, 200);
    setDropdownTimeout(timeout);
  };

  const handleDropdownEnter = () => {
    if (dropdownTimeout) {
      clearTimeout(dropdownTimeout);
      setDropdownTimeout(null);
    }
  };

  const handleDropdownLeave = () => {
    setOpenDropdown(null);
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#45474B]/95 backdrop-blur-md shadow-lg'
          : 'bg-[#45474B]/90 backdrop-blur-sm'
      }`}
      dir={isRTL ? 'rtl' : 'ltr'}
    >
      <div className="container mx-auto px-4 lg:px-8 max-w-[1440px]">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
              if (onMainClick) {
                onMainClick();
              }
            }}
            whileHover={{ scale: 1.05, filter: 'brightness(1.2)' }}
            className="flex items-center cursor-pointer"
          >
            <img 
              src={logoImage} 
              alt="MT Makina" 
              className="h-12 w-auto"
              style={{ filter: 'drop-shadow(0 0 3px rgba(255,255,255,0.2))' }}
            />
          </motion.a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6">
            {navItems.map((item, index) => (
              <div
                key={item.key}
                className="relative"
                onMouseEnter={() => item.dropdown && handleMouseEnter(item.key)}
                onMouseLeave={handleMouseLeave}
              >
                <motion.a
                  href={item.key === 'nav_home' ? '#' : item.href}
                  onClick={(e) => {
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                    if (item.noPointerEvents && item.dropdown) {
                      e.preventDefault();
                      return;
                    }
                    if (item.action === 'home' && onMainClick) {
                      e.preventDefault();
                      onMainClick();
                    } else if (item.action === 'products' && onProductsClick) {
                      e.preventDefault();
                      onProductsClick();
                    } else if (item.action === 'references' && onReferencesClick) {
                      e.preventDefault();
                      onReferencesClick();
                    } else if (item.action === 'technology' && onTechnologyClick) {
                      e.preventDefault();
                      onTechnologyClick();
                    } else if (item.action === 'contact') {
                      handleContactLinkClick(e);
                    } else if (item.action === 'wastes' && onWasteClick) {
                      e.preventDefault();
                      onWasteClick();
                    } else if (item.action === 'ecatalog' && onECatalogClick) {
                      e.preventDefault();
                      onECatalogClick();
                    }
                  }}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className={`text-[#F5F7F8] hover:text-[#F4CE14] transition-colors relative group flex items-center gap-1 ${item.noPointerEvents && item.dropdown ? 'cursor-default' : 'cursor-pointer'}`}
                >
                  {item.label || t(item.key)}
                  {item.dropdown && <ChevronDown size={16} />}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#F4CE14] group-hover:w-full transition-all duration-300"></span>
                </motion.a>

                {/* Dropdown Menu */}
                {item.dropdown && openDropdown === item.key && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    onMouseEnter={handleDropdownEnter}
                    onMouseLeave={handleDropdownLeave}
                    className={`absolute ${isRTL ? 'right-0' : 'left-0'} mt-2 bg-[#2F3032] rounded-lg shadow-xl border border-[#F4CE14]/20 overflow-hidden z-[9999] ${
                      item.key === 'nav_wastes' ? 'grid grid-cols-2 gap-1 p-2 min-w-[420px]' : 
                      item.key === 'nav_products' ? 'grid grid-cols-3 gap-2 p-2 min-w-[780px]' : 
                      'min-w-[240px]'
                    }`}
                  >
                    {/* Products Mega Menu with Dropdown Models */}
                    {item.key === 'nav_products' ? (
                      item.dropdown.map((subItem: any) => (
                        <div
                          key={subItem.key || subItem}
                          className="relative"
                          onMouseEnter={() => subItem.hasModels && setHoveredProduct(subItem.action)}
                          onMouseLeave={() => setHoveredProduct(null)}
                        >
                          {/* Main Product */}
                          <motion.a
                            href="#"
                            onClick={(e) => {
                              e.preventDefault();
                              window.scrollTo({ top: 0, behavior: 'smooth' });
                              setOpenDropdown(null);
                              setHoveredProduct(null);
                              if (subItem.action && onProductDetailClick) {
                                onProductDetailClick(subItem.action);
                              }
                            }}
                            whileHover={{ backgroundColor: 'rgba(244,206,20,0.1)' }}
                            className="block px-4 py-2 text-sm text-[#F5F7F8] hover:text-[#F4CE14] transition-colors whitespace-normal leading-tight rounded"
                          >
                            {subItem.label || t(subItem.key || subItem)}
                          </motion.a>
                          
                          {/* Models Dropdown (appears below product name) */}
                          {hoveredProduct === subItem.action && productModels[subItem.action] && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              transition={{ duration: 0.2 }}
                              className="mt-1 ml-2 border-l-2 border-[#F4CE14]/30 pl-3 space-y-1"
                            >
                              {productModels[subItem.action].models.map((model) => (
                                <motion.a
                                  key={model}
                                  href="#"
                                  onClick={(e) => {
                                    e.preventDefault();
                                    window.scrollTo({ top: 0, behavior: 'smooth' });
                                    setOpenDropdown(null);
                                    setHoveredProduct(null);
                                    if (onProductDetailClick) {
                                      onProductDetailClick(subItem.action, model);
                                    }
                                  }}
                                  whileHover={{ backgroundColor: 'rgba(244,206,20,0.15)', x: 3 }}
                                  className="block px-3 py-1.5 text-xs text-[#F5F7F8]/80 hover:text-[#F4CE14] transition-all rounded"
                                >
                                  {model}
                                </motion.a>
                              ))}
                            </motion.div>
                          )}
                        </div>
                      ))
                    ) : (
                      /* Other Dropdowns (Corporate, Wastes) */
                      item.dropdown.map((subItem: any) => (
                        <motion.a
                          key={subItem.key || subItem}
                          href="#"
                          onClick={(e) => {
                            e.preventDefault();
                            window.scrollTo({ top: 0, behavior: 'smooth' });
                            setOpenDropdown(null);
                            
                            if (item.key === 'nav_corporate') {
                              if (subItem.action === 'about' && onAboutClick) {
                                onAboutClick();
                              } else if (subItem.action === 'certificates' && onCertificatesClick) {
                                onCertificatesClick();
                              }
                            } else if (item.key === 'nav_wastes' && subItem.action && onWasteDetailClick) {
                              onWasteDetailClick(subItem.action);
                            }
                          }}
                          whileHover={{ backgroundColor: 'rgba(244,206,20,0.1)' }}
                          className={`block px-4 py-2 text-sm text-[#F5F7F8] hover:text-[#F4CE14] transition-colors ${
                            item.key === 'nav_wastes' ? 'whitespace-normal leading-tight' : ''
                          }`}
                        >
                          {subItem.label || t(subItem.key || subItem)}
                        </motion.a>
                      ))
                    )}
                  </motion.div>
                )}
              </div>
            ))}
          </nav>

          {/* CTA and Language Switcher */}
          <div className="hidden lg:flex items-center space-x-4">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                onClick={() => window.open('https://wa.me/905423109930?text=Merhaba%20MT%20Makina%2C%20bir%20ürün%20hakkında%20teklif%20almak%20istiyorum.', '_blank')}
                className="bg-[#25D366] text-white hover:bg-[#25D366]/90 hover:shadow-lg transition-all flex items-center gap-2"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                {t('btn_quote')}
              </Button>
            </motion.div>

            <div className="relative">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setLanguageMenuOpen(!languageMenuOpen)}
                className="flex items-center space-x-2 px-3 py-2 rounded-lg border border-[#F4CE14]/30 hover:border-[#F4CE14] transition-all text-[#F5F7F8]"
              >
                <Globe size={20} className="text-[#F4CE14]" />
                <span>{language.toUpperCase()}</span>
              </motion.button>

              {languageMenuOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="absolute right-0 mt-2 w-40 bg-[#2F3032] rounded-lg shadow-xl border border-[#F4CE14]/30 overflow-hidden"
                >
                  {languages.map((lang) => (
                    <motion.button
                      key={lang.code}
                      whileHover={{ backgroundColor: 'rgba(244,206,20,0.1)' }}
                      onClick={() => {
                        setLanguage(lang.code);
                        setLanguageMenuOpen(false);
                      }}
                      className="w-full px-4 py-3 text-left text-[#F5F7F8] hover:text-[#F4CE14] transition-colors"
                    >
                      {lang.label}
                    </motion.button>
                  ))}
                </motion.div>
              )}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden text-[#F4CE14] p-2"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden pb-4"
          >
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <div key={item.key}>
                  <a
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                      setMobileMenuOpen(false);
                      
                      if (item.action === 'home' && onMainClick) {
                        onMainClick();
                      } else if (item.action === 'products' && onProductsClick) {
                        onProductsClick();
                      } else if (item.action === 'references' && onReferencesClick) {
                        onReferencesClick();
                      } else if (item.action === 'technology' && onTechnologyClick) {
                        onTechnologyClick();
                      } else if (item.action === 'contact') {
                        if (onContactClick) {
                          onContactClick();
                        } else {
                          const contactSection = document.getElementById('contact');
                          if (contactSection) {
                            contactSection.scrollIntoView({ behavior: 'smooth' });
                          }
                        }
                      } else if (item.action === 'wastes' && onWasteClick) {
                        onWasteClick();
                      } else if (item.action === 'ecatalog' && onECatalogClick) {
                        onECatalogClick();
                      }
                    }}
                    className="text-[#F5F7F8] hover:text-[#F4CE14] transition-colors py-2 block"
                  >
                    {item.label || t(item.key)}
                  </a>
                  {item.dropdown && (item.key === 'nav_corporate' || item.key === 'nav_products' || item.key === 'nav_wastes') && (
                    <div className="pl-4 mt-2 space-y-2">
                      {item.dropdown.map((subItem: any) => (
                        <a
                          key={subItem.key}
                          href="#"
                          onClick={(e) => {
                            e.preventDefault();
                            window.scrollTo({ top: 0, behavior: 'smooth' });
                            setMobileMenuOpen(false);
                            if (item.key === 'nav_corporate') {
                              if (subItem.action === 'about' && onAboutClick) {
                                onAboutClick();
                              } else if (subItem.action === 'certificates' && onCertificatesClick) {
                                onCertificatesClick();
                              }
                            } else if (item.key === 'nav_products' && subItem.action && onProductDetailClick) {
                              onProductDetailClick(subItem.action);
                            } else if (item.key === 'nav_wastes' && subItem.action && onWasteDetailClick) {
                              onWasteDetailClick(subItem.action);
                            }
                          }}
                          className="text-[#F5F7F8]/80 hover:text-[#F4CE14] transition-colors py-1 text-sm block"
                        >
                          {subItem.label || t(subItem.key)}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <Button 
                onClick={() => {
                  window.open('https://wa.me/905423109930?text=Merhaba%20MT%20Makina%2C%20bir%20ürün%20hakkında%20teklif%20almak%20istiyorum.', '_blank');
                  setMobileMenuOpen(false);
                }}
                className="bg-[#25D366] text-white hover:bg-[#25D366]/90 w-full"
              >
                {t('btn_quote')}
              </Button>
              <div className="flex items-center justify-around pt-2 border-t border-[#F4CE14]/30">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => {
                      setLanguage(lang.code);
                      setMobileMenuOpen(false);
                    }}
                    className={`px-3 py-2 rounded-lg transition-all text-[#F5F7F8] ${
                      language === lang.code ? 'bg-[#F4CE14]/30 text-[#F4CE14]' : ''
                    }`}
                  >
                    {lang.code.toUpperCase()}
                  </button>
                ))}
              </div>
            </nav>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
};

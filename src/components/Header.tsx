import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Globe, Menu, X, ChevronDown, ChevronRight } from 'lucide-react';
import { useLanguage, Language } from './LanguageContext';
import { Button } from './ui/button';
import { Logo } from './Logo';

/*
  BU DOSYA, AŞAĞIDAKİ SORUNLARI ÇÖZMEK İÇİN YENİDEN YAZILMIŞTIR:
  1. HATA: "Hiç açılmama" / "Direkt kapanan" alt menü sorunu (setTimeout/clearTimeout mantığı düzeltildi).
  2. HATA: `href="#"` ve `onClick` çakışması (Artık app.tsx'teki global yakalayıcı için doğru `href`'ler kullanılıyor).
  3. TASARIM: İstenen "kademeli menü" (flyout) tasarımı uygulandı.
*/

// --- 1. VERİ TANIMLAMALARI (URL'LER DÜZELTİLDİ) ---

// app.tsx'teki parseUrl ile eşleşen URL yolları
const productPathMap: { [key: string]: string } = {
  'single-shaft': '/tek-shaftli-parcalama-makinesi',
  'dual-shaft': '/cift-shaftli-parcalama-makinesi',
  'quad-shaft': '/dort-shaftli-parcalama-makinesi',
  'metal': '/metal-parcalama-makinesi',
  'mobile': '/mobil-kirici', // Bu URL'in app.tsx'te tanımlı olduğundan emin ol
  'pallet': '/palet-parcalama-makinesi',
  'harddisk': '/harddisk-imha-makinesi',
  'tree-root': '/agac-koku-parcalama-makinesi',
  'wood-grinder': '/agac-parcalama-ogutme-makinesi',
  'glass': '/cam-sise-kirma-makinesi',
};

// Alt modeller (Kullanıcıdan gelen veriden alındı)
const productModels: { [key: string]: { label: string; models: string[] } } = {
  'single-shaft': {
    label: 'Tek Şaftlı Parçalama Makinesi',
    models: ['TSH-60', 'TSH-80', 'TSH-100', 'TSH-130', 'TSH-160', 'TSH-200'],
  },
  'dual-shaft': {
    label: 'Çift Şaftlı Parçalama Makinesi',
    models: ['CS-20', 'CS-40', 'CS-60', 'CS-80', 'CS-100', 'CS-120', 'CS-150', 'CS-180', 'CS-200'],
  },
  'quad-shaft': {
    label: 'Dört Şaftlı Parçalama Makinesi',
    models: ['DS-80', 'DS-100', 'DS-150', 'DS-200'],
  },
  'metal': {
    label: 'Metal Parçalama Makinesi (Redmonster)',
    models: ['RDM-100', 'RDM-150', 'RDM-180', 'RDM-200'],
  },
  'mobile': { label: 'Mobil Kırıcı', models: ['MK-1', 'MK-2', 'MK-3'] },
  'pallet': { label: 'Palet Parçalama Makinesi', models: ['PL-800'] },
  'harddisk': {
    label: 'Harddisk İmha Makinesi',
    models: ['DATABER-S', 'DATABER-D', 'DATABER-T'],
  },
  'tree-root': { label: 'Ağaç Kökü Parçalama Makinesi', models: ['TR-1000'] },
  'wood-grinder': {
    label: 'Ağaç Parçalama Öğütme Makinesi',
    models: ['WG-500', 'WG-800', 'WG-1200'],
  },
  'glass': { label: 'Cam Şişe Kırma Makinesi', models: ['GB-300'] },
};

// Alt menü listeleri (URL'ler eklendi)
const corporateDropdown = [
  { key: 'nav_about', href: '/kurumsal' },
  { key: 'nav_certificates', href: '/sertifikalar' },
];

const productsDropdown = Object.keys(productPathMap).map((key) => ({
  key: `product_${key}`,
  action: key,
  href: productPathMap[key],
  hasModels: productModels[key]?.models.length > 0,
}));

const wastesDropdown = [
  { key: 'waste_household', href: '/atik-turleri/evsel-atiklar' },
  { key: 'waste_tire', href: '/atik-turleri/lastik-atiklari' },
  { key: 'waste_glass', href: '/atik-turleri/cam-atiklar' },
  { key: 'waste_plastic', href: '/atik-turleri/plastik-atiklar' },
  { key: 'waste_medical', href: '/atik-turleri/tibbi-atiklar' },
  { key: 'waste_electronic', href: '/atik-turleri/elektronik-atiklar' },
  { key: 'waste_metal', href: '/atik-turleri/metal-atiklar' },
  { key: 'waste_paper', href: '/atik-turleri/kagit-karton-atiklar' },
  { key: 'waste_organic', href: '/atik-turleri/organik-atiklar' },
  { key: 'waste_animal', href: '/atik-turleri/hayvan-atiklari' },
];

// Ana navigasyon (URL'ler eklendi)
const navItems = [
  { key: 'nav_home', href: '/', action: 'home' },
  { key: 'nav_corporate', href: '/kurumsal', dropdown: corporateDropdown, noPointerEvents: true },
  { key: 'nav_products', href: '/urunler', dropdown: productsDropdown, action: 'products' },
  { key: 'nav_wastes', href: '/atik-turleri', dropdown: wastesDropdown, action: 'wastes' },
  { key: 'nav_technology', href: '/teknoloji', action: 'technology' },
  { key: 'nav_references', href: '/referanslar', action: 'references' },
  { key: 'nav_contact', href: '/iletisim', action: 'contact' },
  { key: 'nav_ecatalog', label: 'E-Katalog', href: '/e-katalog', action: 'ecatalog' },
];

// --- 2. HEADER BİLEŞENİ (DÜZELTİLMİŞ MANTIK) ---
export const Header = () => {
  const { language, setLanguage, t, isRTL } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [languageMenuOpen, setLanguageMenuOpen] = useState(false);
  const [mobileExpandedProduct, setMobileExpandedProduct] = useState<string | null>(null);

  // --- DÜZELTİLMİŞ HOVER MANTIĞI ---
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [openSubMenu, setOpenSubMenu] = useState<string | null>(null);
  const [menuTimer, setMenuTimer] = useState<NodeJS.Timeout | null>(null);
  // ---

  // Scroll dinleyicisi
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Zamanlayıcıyı temizle
  useEffect(() => {
    return () => {
      if (menuTimer) clearTimeout(menuTimer);
    };
  }, [menuTimer]);

  const languages = [
    { code: 'tr' as Language, label: 'Türkçe' },
    { code: 'en' as Language, label: 'English' },
    { code: 'ru' as Language, label: 'Русский' },
    { code: 'ar' as Language, label: 'العربية' },
  ];

  // --- DÜZELTİLMİŞ HOVER FONKSİYONLARI ---
  const handleDropdownEnter = (key: string) => {
    if (menuTimer) clearTimeout(menuTimer);
    setOpenDropdown(key);
  };

  const handleDropdownLeave = () => {
    const timer = setTimeout(() => {
      setOpenDropdown(null);
      setOpenSubMenu(null);
    }, 300); // 300ms gecikme
    setMenuTimer(timer);
  };

  const handleSubMenuEnter = (actionKey: string) => {
    if (menuTimer) clearTimeout(menuTimer); // Kapanmayı iptal et
    setOpenSubMenu(actionKey);
  };
  
  // Tıklayınca tüm menüleri kapat
  const closeAllMenus = () => {
    setOpenDropdown(null);
    setOpenSubMenu(null);
    setMobileMenuOpen(false);
  };
  // ---

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
          {/* Logo (onClick kaldırıldı, <a> etiketi app.tsx tarafından yakalanacak) */}
          <motion.a
            href="/"
            whileHover={{ scale: 1.05, filter: 'brightness(1.2)' }}
            className="flex items-center cursor-pointer"
            onClick={closeAllMenus}
          >
            <Logo alt="MT Makina" className="h-12 w-auto" />
          </motion.a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6" aria-label="Ana navigasyon">
            {navItems.map((item, index) => (
              <div
                key={item.key}
                className="relative"
                onMouseEnter={() => item.dropdown && handleDropdownEnter(item.key)}
                onMouseLeave={handleDropdownLeave}
              >
                <motion.a
                  href={item.href} // DÜZGÜN HREF
                  aria-label={item.label || t(item.key)}
                  onClick={(e) => {
                    // Sadece 'noPointerEvents' ise tıklamayı engelle
                    if (item.noPointerEvents) e.preventDefault();
                    // Diğer tüm linkler app.tsx'teki global handler tarafından yakalanacak
                    // Menü kapanmasın diye closeAllMenus() buradan kaldırıldı
                  }}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className={`text-[#F5F7F8] hover:text-[#F4CE14] transition-colors relative group flex items-center gap-1 ${
                    item.noPointerEvents ? 'cursor-default' : 'cursor-pointer'
                  }`}
                >
                  {item.label || t(item.key)}
                  {item.dropdown && <ChevronDown size={16} />}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#F4CE14] group-hover:w-full transition-all duration-300"></span>
                </motion.a>

                {/* Dropdown Menu (Ana Konteyner) */}
                {item.dropdown && openDropdown === item.key && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    onMouseEnter={() => { if (menuTimer) clearTimeout(menuTimer); }} // Bu ana konteynere girince de kapanmayı iptal et
                    onMouseLeave={handleDropdownLeave} // Buradan ayrılınca kapanma zamanlayıcısını başlat
                    className={`absolute ${
                      isRTL ? 'right-0' : 'left-0'
                    } mt-2 bg-[#2F3032] rounded-lg shadow-xl border border-[#F4CE14]/20 z-[9999] overflow-hidden ${
                      item.key === 'nav_wastes' ? 'grid grid-cols-2 gap-1 p-2 min-w-[420px]' :
                      item.key === 'nav_products' ? 'min-w-[320px]' :
                      'min-w-[240px]'
                    }`}
                    role="menu"
                  >
                    {/* Kademeli Ürünler Menüsü */}
                    {item.key === 'nav_products' ? (
                      <ul className="py-2">
                        {productsDropdown.map((subItem: any) => (
                          <li
                            key={subItem.key}
                            className="relative"
                            // Fare üzerine gelince alt menüyü aç
                            onMouseEnter={() => subItem.hasModels && handleSubMenuEnter(subItem.action)}
                            // Fareden ayrılınca alt menüyü kapat (gecikme mantığı ana konteynerde)
                          >
                            <a
                              href={subItem.href} // DÜZGÜN HREF
                              onClick={closeAllMenus} // Tıklayınca menü kapansın
                              className="block px-4 py-3 text-sm text-[#F5F7F8] hover:text-[#F4CE14] hover:bg-[#F4CE14]/10 transition-colors flex items-center justify-between"
                              role="menuitem"
                            >
                              {productModels[subItem.action]?.label || t(subItem.key)}
                              {subItem.hasModels && (
                                <ChevronRight size={16} className={`${isRTL ? 'rotate-180' : ''} opacity-60`} />
                              )}
                            </a>

                            {/* Flyout Submenu (Alt Modeller) */}
                            {subItem.hasModels && openSubMenu === subItem.action && (
                              <ul
                                onMouseEnter={() => { if (menuTimer) clearTimeout(menuTimer); }} // Buraya girince de kapanmayı iptal et
                                className={`absolute ${isRTL ? 'right-full -mr-px' : 'left-full -ml-px'} top-0 bg-[#2F3032] rounded-lg shadow-xl border border-[#F4CE14]/20 overflow-hidden min-w-[200px] py-2 z-[99999]`}
                                role="menu"
                              >
                                {productModels[subItem.action].models.map((model) => {
                                  const modelHref = `${subItem.href}/${model.toLowerCase()}`;
                                  return (
                                    <li key={model}>
                                      <a
                                        href={modelHref} // DÜZGÜN HREF
                                        onClick={closeAllMenus} // Tıklayınca menü kapansın
                                        className="block px-4 py-2 text-sm text-[#F5F7F8]/80 hover:text-[#F4CE14] hover:bg-[#F4CE14]/10 transition-all"
                                        role="menuitem"
                                      >
                                        {model}
                                      </a>
                                    </li>
                                  );
                                })}
                              </ul>
                            )}
                          </li>
                        ))}
                      </ul>
                    ) : (
                      /* Diğer (Kurumsal, Atıklar) menüleri */
                      item.dropdown.map((subItem: any) => (
                        <motion.a
                          key={subItem.key}
                          href={subItem.href} // DÜZGÜN HREF
                          onClick={closeAllMenus} // Tıklayınca menü kapansın
                          whileHover={{ backgroundColor: 'rgba(244,206,20,0.1)' }}
                          className={`block px-4 py-2 text-sm text-[#F5F7F8] hover:text-[#F4CE14] transition-colors ${
                            item.key === 'nav_wastes' ? 'whitespace-normal leading-tight' : ''
                          }`}
                        >
                          {t(subItem.key)}
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
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                onClick={() => window.open('https://wa.me/905423109930?text=Merhaba%20MT%20Makina%2C%20bir%20ürün%20hakkında%20teklif%20almak%20istiyorum.', '_blank')}
                className="bg-[#25D366] text-white hover:bg-[#25D366]/90 hover:shadow-lg transition-all flex items-center gap-2"
                aria-label="WhatsApp ile hızlı teklif alın"
                title="WhatsApp ile iletişime geçin"
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
                aria-label="Dil seçimi"
              >
                <Globe size={20} className="text-[#F4CE14]" />
                <span>{language.toUpperCase()}</span>
              </motion.button>
              {languageMenuOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
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
            aria-label="Mobil menü"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu (DÜZELTİLMİŞ) */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden pb-4"
          >
            <nav className="flex flex-col space-y-2 p-4">
              {navItems.map((item) => (
                <div key={item.key}>
                  <a
                    href={item.href}
                    onClick={(e) => {
                      if (item.dropdown) {
                        e.preventDefault(); // Ana linke gitmeyi engelle
                        if (item.key === 'nav_products') {
                          setMobileExpandedProduct(mobileExpandedProduct === 'nav_products' ? null : 'nav_products');
                        }
                        // Diğer dropdownlar için de benzer mantık eklenebilir
                      } else {
                        closeAllMenus(); // Tıklayınca kapat
                      }
                    }}
                    className="text-[#F5F7F8] hover:text-[#F4CE14] transition-colors py-2 block flex items-center justify-between"
                  >
                    {item.label || t(item.key)}
                    {item.dropdown && <ChevronDown size={16} className={`transition-transform ${mobileExpandedProduct === item.key ? 'rotate-180' : ''}`} />}
                  </a>
                  
                  {/* Mobil Ürünler Alt Menüsü */}
                  {item.key === 'nav_products' && mobileExpandedProduct === 'nav_products' && item.dropdown && (
                    <div className="pl-4 mt-2 space-y-2 border-l border-[#F4CE14]/30">
                      {productsDropdown.map((subItem: any) => (
                        <div key={subItem.key}>
                          <a
                            href={subItem.href}
                            onClick={(e) => {
                              if (subItem.hasModels) {
                                e.preventDefault();
                                setMobileExpandedProduct(mobileExpandedProduct === subItem.action ? null : subItem.action);
                              } else {
                                closeAllMenus();
                              }
                            }}
                            className="text-[#F5F7F8]/80 hover:text-[#F4CE14] transition-colors py-1 text-sm block flex items-center justify-between"
                          >
                            {productModels[subItem.action]?.label || t(subItem.key)}
                            {subItem.hasModels && <ChevronDown size={14} className={`transition-transform ${mobileExpandedProduct === subItem.action ? 'rotate-180' : ''}`} />}
                          </a>

                          {/* Mobil Model Alt Menüsü */}
                          {subItem.hasModels && mobileExpandedProduct === subItem.action && productModels[subItem.action] && (
                            <div className="pl-4 mt-1 space-y-1">
                              {productModels[subItem.action].models.map((model) => (
                                <a
                                  key={model}
                                  href={`${subItem.href}/${model.toLowerCase()}`}
                                  onClick={closeAllMenus}
                                  className="text-[#F5F7F8]/60 hover:text-[#F4CE14] transition-colors py-1 text-xs block"
                                >
                                  {model}
                                </a>
                              ))}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                  {/* Diğer mobil dropdownlar (Kurumsal, Atıklar) buraya eklenebilir */}
                </div>
              ))}
            </nav>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
};
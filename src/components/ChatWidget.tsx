import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageCircle, X, Clock } from 'lucide-react';
import { useLanguage } from './LanguageContext';
import { trackWhatsAppClick } from '../utils/analytics';

// Helper function to check if within working hours (Turkey time, Mon-Fri 09:00-18:00)
const isWithinWorkingHours = (): boolean => {
  // Get current time in Turkey timezone
  const now = new Date();
  const turkeyTime = new Date(now.toLocaleString('en-US', { timeZone: 'Europe/Istanbul' }));

  const day = turkeyTime.getDay(); // 0 = Sunday, 6 = Saturday
  const hour = turkeyTime.getHours();

  // Check if weekday (Mon-Fri = 1-5) and between 09:00-18:00
  const isWeekday = day >= 1 && day <= 5;
  const isWorkingHour = hour >= 9 && hour < 18;

  return isWeekday && isWorkingHour;
};

// Check if on homepage
const isHomePage = (): boolean => {
  const path = window.location.pathname;
  return path === '/' || path === '/tr' || path === '/en' || path === '/ru' || path === '/ar' || path === '';
};

// Check if mobile
const isMobileDevice = (): boolean => {
  return window.innerWidth < 768;
};

export const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOnline, setIsOnline] = useState(false);
  const [hideOnMobileHome, setHideOnMobileHome] = useState(false);
  const { language } = useLanguage();

  // Check working hours on mount and every minute
  useEffect(() => {
    setIsOnline(isWithinWorkingHours());
    const interval = setInterval(() => {
      setIsOnline(isWithinWorkingHours());
    }, 60000); // Check every minute
    return () => clearInterval(interval);
  }, []);

  // Check if should hide on mobile homepage
  useEffect(() => {
    const checkHideOnMobileHome = () => {
      setHideOnMobileHome(isHomePage() && isMobileDevice());
    };

    checkHideOnMobileHome();
    window.addEventListener('resize', checkHideOnMobileHome);

    // Also check on route changes (popstate)
    window.addEventListener('popstate', checkHideOnMobileHome);

    return () => {
      window.removeEventListener('resize', checkHideOnMobileHome);
      window.removeEventListener('popstate', checkHideOnMobileHome);
    };
  }, []);

  // Translations for offline message
  const offlineText = {
    tr: {
      title: 'Mesai Saatleri Dışında',
      subtitle: 'Mesaj bırakabilirsiniz, en kısa sürede dönüş yapacağız.',
      hours: 'Çalışma Saatleri: Hafta içi 09:00 - 18:00',
      leaveMessage: 'Mesaj Bırak'
    },
    en: {
      title: 'Outside Working Hours',
      subtitle: 'Leave a message and we will get back to you soon.',
      hours: 'Working Hours: Mon-Fri 09:00 - 18:00',
      leaveMessage: 'Leave Message'
    },
    ru: {
      title: 'Нерабочее время',
      subtitle: 'Оставьте сообщение, мы свяжемся с вами.',
      hours: 'Рабочие часы: Пн-Пт 09:00 - 18:00',
      leaveMessage: 'Оставить сообщение'
    },
    ar: {
      title: 'خارج ساعات العمل',
      subtitle: 'اترك رسالة وسنرد عليك قريباً.',
      hours: 'ساعات العمل: الإثنين-الجمعة 09:00 - 18:00',
      leaveMessage: 'اترك رسالة'
    }
  };

  const onlineText = {
    tr: {
      title: 'Canlı Destek',
      subtitle: 'Size nasıl yardımcı olabiliriz?',
      welcome: 'Merhaba! MT Makina\'ya hoş geldiniz. Ürünlerimiz ve hizmetlerimiz hakkında bilgi almak için lütfen bize ulaşın.',
      products: 'Ürünler Hakkında',
      quote: 'Fiyat Teklifi',
      support: 'Teknik Destek',
      connect: 'WhatsApp ile Bağlan'
    },
    en: {
      title: 'Live Support',
      subtitle: 'How can we help you?',
      welcome: 'Hello! Welcome to MT Makina. Please contact us for information about our products and services.',
      products: 'About Products',
      quote: 'Price Quote',
      support: 'Technical Support',
      connect: 'Connect via WhatsApp'
    },
    ru: {
      title: 'Онлайн поддержка',
      subtitle: 'Чем мы можем вам помочь?',
      welcome: 'Здравствуйте! Добро пожаловать в MT Makina. Свяжитесь с нами для получения информации о нашей продукции.',
      products: 'О продуктах',
      quote: 'Ценовое предложение',
      support: 'Техническая поддержка',
      connect: 'Связаться через WhatsApp'
    },
    ar: {
      title: 'الدعم المباشر',
      subtitle: 'كيف يمكننا مساعدتك؟',
      welcome: 'مرحباً! أهلاً بكم في MT Makina. يرجى التواصل معنا للحصول على معلومات حول منتجاتنا.',
      products: 'حول المنتجات',
      quote: 'عرض سعر',
      support: 'الدعم الفني',
      connect: 'تواصل عبر واتساب'
    }
  };

  const txt = isOnline
    ? (onlineText[language as keyof typeof onlineText] || onlineText.tr)
    : (offlineText[language as keyof typeof offlineText] || offlineText.tr);

  // Hide on mobile homepage to prevent overlap with bottom bar
  if (hideOnMobileHome) {
    return null;
  }

  return (
    <>
      {/* Floating Button */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.4, delay: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-8 right-8 w-16 h-16 rounded-full shadow-lg hover:shadow-xl flex items-center justify-center z-50 transition-all"
        style={{
          backgroundColor: isOnline ? '#25D366' : '#F4CE14',
          boxShadow: isOnline ? '0 4px 20px rgba(37, 211, 102, 0.4)' : '0 4px 20px rgba(244, 206, 20, 0.4)',
        }}
      >
        {/* Online/Offline indicator */}
        <div
          className="absolute top-0 right-0 w-4 h-4 rounded-full border-2 border-white"
          style={{ backgroundColor: isOnline ? '#22c55e' : '#f59e0b' }}
        />

        <AnimatePresence mode="wait">
          {!isOpen ? (
            <motion.div
              key="message"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <MessageCircle size={28} className="text-[#1E1E1E]" />
            </motion.div>
          ) : (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <X size={28} className="text-[#1E1E1E]" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-28 right-8 w-80 bg-white rounded-lg shadow-2xl z-50 overflow-hidden"
          >
            {/* Header */}
            <div
              className="p-4 text-white"
              style={{
                background: isOnline
                  ? 'linear-gradient(to right, #25D366, #128C7E)'
                  : 'linear-gradient(to right, #45474B, #35373A)'
              }}
            >
              <div className="flex items-center gap-2">
                {!isOnline && <Clock size={18} className="text-[#F4CE14]" />}
                <h3 className="text-lg font-semibold">{txt.title}</h3>
              </div>
              <p className="text-sm text-white/80">{txt.subtitle}</p>
            </div>

            {/* Chat Area */}
            <div className="p-4 h-64 bg-[#F5F7F8] overflow-y-auto">
              {isOnline ? (
                <>
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="bg-white rounded-lg p-3 mb-3 shadow-sm"
                  >
                    <p className="text-sm text-[#45474B]">
                      {(txt as typeof onlineText.tr).welcome}
                    </p>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="flex gap-2 flex-wrap"
                  >
                    <button
                      onClick={() => window.open('https://wa.me/905423109930?text=Ürünleriniz%20hakkında%20bilgi%20almak%20istiyorum.', '_blank')}
                      className="text-sm bg-[#25D366]/20 hover:bg-[#25D366]/30 text-[#1E1E1E] px-3 py-2 rounded-full transition-all"
                    >
                      {(txt as typeof onlineText.tr).products}
                    </button>
                    <button
                      onClick={() => window.open('https://wa.me/905423109930?text=Fiyat%20teklifi%20almak%20istiyorum.', '_blank')}
                      className="text-sm bg-[#25D366]/20 hover:bg-[#25D366]/30 text-[#1E1E1E] px-3 py-2 rounded-full transition-all"
                    >
                      {(txt as typeof onlineText.tr).quote}
                    </button>
                    <button
                      onClick={() => window.open('https://wa.me/905423109930?text=Teknik%20destek%20almak%20istiyorum.', '_blank')}
                      className="text-sm bg-[#25D366]/20 hover:bg-[#25D366]/30 text-[#1E1E1E] px-3 py-2 rounded-full transition-all"
                    >
                      {(txt as typeof onlineText.tr).support}
                    </button>
                  </motion.div>
                </>
              ) : (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center py-8"
                >
                  <div className="w-16 h-16 bg-[#F4CE14]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Clock size={32} className="text-[#F4CE14]" />
                  </div>
                  <p className="text-sm text-[#45474B] mb-2">
                    {(txt as typeof offlineText.tr).hours}
                  </p>
                  <p className="text-xs text-gray-500">
                    (GMT+3 Türkiye Saati)
                  </p>
                </motion.div>
              )}
            </div>

            {/* Footer */}
            <div className="p-4 border-t border-[#F5F7F8]">
              <button
                onClick={() => {
                  trackWhatsAppClick(isOnline ? 'online' : 'offline');
                  window.open('https://wa.me/905423109930', '_blank');
                }}
                className="w-full py-3 rounded-lg flex items-center justify-center gap-2 transition-all text-white font-medium"
                style={{
                  backgroundColor: isOnline ? '#25D366' : '#45474B'
                }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                {isOnline
                  ? (txt as typeof onlineText.tr).connect
                  : (txt as typeof offlineText.tr).leaveMessage}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

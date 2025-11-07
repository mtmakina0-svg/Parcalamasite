import React, { useState } from 'react';
import { motion } from "framer-motion";
import { MessageCircle, X } from 'lucide-react';

export const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);

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
        className="fixed bottom-8 right-8 w-16 h-16 bg-[#F4CE14] rounded-full shadow-lg hover:shadow-xl flex items-center justify-center z-50 transition-all"
        style={{
          boxShadow: '0 4px 20px rgba(244, 206, 20, 0.4)',
        }}
      >
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
            <div className="bg-gradient-to-r from-[#45474B] to-[#35373A] p-4 text-white">
              <h3 className="text-lg">Canlı Destek</h3>
              <p className="text-sm text-[#F5F7F8]/80">Size nasıl yardımcı olabiliriz?</p>
            </div>

            {/* Chat Area */}
            <div className="p-4 h-64 bg-[#F5F7F8] overflow-y-auto">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="bg-white rounded-lg p-3 mb-3 shadow-sm"
              >
                <p className="text-sm text-[#45474B]">
                  Merhaba! MT Makina'ya hoş geldiniz. Ürünlerimiz ve hizmetlerimiz hakkında
                  bilgi almak için lütfen bize ulaşın.
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
                  className="text-sm bg-[#F4CE14]/20 hover:bg-[#F4CE14]/30 text-[#1E1E1E] px-3 py-2 rounded-full transition-all"
                >
                  Ürünler Hakkında
                </button>
                <button
                  onClick={() => window.open('https://wa.me/905423109930?text=Fiyat%20teklifi%20almak%20istiyorum.', '_blank')}
                  className="text-sm bg-[#F4CE14]/20 hover:bg-[#F4CE14]/30 text-[#1E1E1E] px-3 py-2 rounded-full transition-all"
                >
                  Fiyat Teklifi
                </button>
                <button
                  onClick={() => window.open('https://wa.me/905423109930?text=Teknik%20destek%20almak%20istiyorum.', '_blank')}
                  className="text-sm bg-[#F4CE14]/20 hover:bg-[#F4CE14]/30 text-[#1E1E1E] px-3 py-2 rounded-full transition-all"
                >
                  Teknik Destek
                </button>
              </motion.div>
            </div>

            {/* Footer */}
            <div className="p-4 border-t border-[#F5F7F8]">
              <button
                onClick={() => window.open('https://wa.me/905423109930', '_blank')}
                className="w-full bg-[#25D366] hover:bg-[#25D366]/90 text-white py-3 rounded-lg flex items-center justify-center gap-2 transition-all"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                WhatsApp ile Bağlan
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

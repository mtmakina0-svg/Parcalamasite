import React from 'react';
import { motion } from 'motion/react';
import { useLanguage } from './LanguageContext';
import { AlertTriangle, Home } from 'lucide-react';

interface NotFoundPageProps {
    onBackToMain: () => void;
}

export const NotFoundPage: React.FC<NotFoundPageProps> = ({ onBackToMain }) => {
    const { isRTL } = useLanguage();

    return (
        <div className="min-h-[80vh] flex items-center justify-center bg-[#1E1E1E] text-white px-4 relative overflow-hidden" dir={isRTL ? 'rtl' : 'ltr'}>
            {/* Background decoration */}
            <div className="absolute inset-0 z-0 opacity-10">
                <div className="absolute top-10 left-10 w-64 h-64 bg-[#F4CE14] rounded-full blur-[100px]" />
                <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#F4CE14] rounded-full blur-[150px]" />
            </div>

            <div className="relative z-10 text-center max-w-2xl mx-auto">
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="mb-8 flex justify-center"
                >
                    <div className="w-24 h-24 bg-[#F4CE14]/10 rounded-full flex items-center justify-center border-2 border-[#F4CE14]">
                        <AlertTriangle className="w-12 h-12 text-[#F4CE14]" />
                    </div>
                </motion.div>

                <motion.h1
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    className="text-5xl md:text-7xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400"
                >
                    404
                </motion.h1>

                <motion.h2
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                    className="text-2xl md:text-3xl font-semibold mb-6 text-[#F5F7F8]"
                >
                    Aradığınız Sayfa Bulunamadı
                </motion.h2>

                <motion.p
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                    className="text-gray-400 text-lg mb-10 max-w-lg mx-auto leading-relaxed"
                >
                    Üzgünüz, aradığınız sayfa mevcut değil veya taşınmış olabilir. Lütfen ana sayfaya dönerek devam edin.
                </motion.p>

                <motion.button
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={onBackToMain}
                    className="px-8 py-4 bg-[#F4CE14] text-[#1E1E1E] font-bold rounded-lg
                     shadow-[0_0_20px_rgba(244,206,20,0.3)] hover:shadow-[0_0_30px_rgba(244,206,20,0.5)]
                     transition-all duration-300 flex items-center gap-2 mx-auto"
                >
                    <Home className="w-5 h-5" />
                    Ana Sayfaya Dön
                </motion.button>
            </div>
        </div>
    );
};

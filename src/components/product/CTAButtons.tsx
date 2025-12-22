import { motion } from 'motion/react';
import { FileDown, FileText } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

interface CTAButtonsProps {
    onECatalogClick: () => void;
    onQuoteClick: () => void;
    catalogButtonKey?: string;
}

export function CTAButtons({ onECatalogClick, onQuoteClick, catalogButtonKey = 'single_shaft_ecatalog_btn' }: CTAButtonsProps) {
    const { t, isRTL, language } = useLanguage();

    const quoteButtonText = language === 'tr' ? 'Teklif İste'
        : language === 'en' ? 'Request Quote'
            : language === 'ru' ? 'Запросить цену'
                : 'طلب عرض سعر';

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-12 flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
            <button
                onClick={onECatalogClick}
                className="inline-flex items-center justify-center gap-2 rounded-2xl text-lg font-medium shadow-xl hover:shadow-2xl transition-all duration-300"
                style={{
                    padding: '16px 32px',
                    backgroundColor: '#F4CE14',
                    color: '#1E1E1E'
                }}
                onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#e0b912';
                }}
                onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = '#F4CE14';
                }}
            >
                <FileDown size={24} className={`${isRTL ? 'ml-2' : 'mr-2'}`} />
                {t(catalogButtonKey)}
            </button>

            <button
                onClick={onQuoteClick}
                className="inline-flex items-center justify-center gap-2 rounded-2xl text-lg font-medium shadow-xl hover:shadow-2xl transition-all duration-300"
                style={{
                    padding: '16px 32px',
                    background: 'linear-gradient(to right, #dc2626, #b91c1c)',
                    color: '#ffffff'
                }}
                onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'linear-gradient(to right, #b91c1c, #991b1b)';
                }}
                onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'linear-gradient(to right, #dc2626, #b91c1c)';
                }}
            >
                <FileText size={24} className={`${isRTL ? 'ml-2' : 'mr-2'}`} />
                {quoteButtonText}
            </button>
        </motion.div>
    );
}

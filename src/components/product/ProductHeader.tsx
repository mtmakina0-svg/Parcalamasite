import { motion } from 'motion/react';
import { ArrowLeft } from 'lucide-react';
import { useLanguage } from '../LanguageContext';
import { Breadcrumbs } from '../Breadcrumbs';
import { productCategorySlugs } from '../../utils/seoConfig';

interface ProductHeaderProps {
    productType: string;
    modelName: string;
    title: string;
    onBackToMain: () => void;
}

export function ProductHeader({ productType, modelName, title, onBackToMain }: ProductHeaderProps) {
    const { t, isRTL, language } = useLanguage();

    return (
        <>
            {/* Back Button */}
            <div className="bg-[#45474B] py-4">
                <div className="container mx-auto px-4 lg:px-8 max-w-[1440px]">
                    <motion.button
                        onClick={onBackToMain}
                        whileHover={{ x: isRTL ? 5 : -5 }}
                        className="flex items-center gap-2 text-[#F4CE14] hover:text-[#F5F7F8] transition-colors"
                    >
                        <ArrowLeft size={20} className={isRTL ? 'rotate-180' : ''} />
                        <span>{t('nav_home')}</span>
                    </motion.button>
                </div>
            </div>

            {/* Breadcrumb Navigation */}
            <div className="bg-[#45474B]">
                <div className="container mx-auto px-4 lg:px-8 max-w-[1440px]">
                    <Breadcrumbs
                        items={[
                            {
                                label: t('nav_products'),
                                href: `/${language}/${productCategorySlugs[productType as keyof typeof productCategorySlugs]?.[language as 'tr' | 'en' | 'ru' | 'ar'] || 'urunler'}`.replace(/\/[^/]+$/, ''),
                                onClick: onBackToMain
                            },
                            {
                                label: title,
                                href: `/${language}/${productCategorySlugs[productType as keyof typeof productCategorySlugs]?.[language as 'tr' | 'en' | 'ru' | 'ar'] || productType}`
                            },
                            {
                                label: modelName
                            }
                        ]}
                    />
                </div>
            </div>
        </>
    );
}

import React from 'react';
import { ChevronRight, Home } from 'lucide-react';
import { useLanguage } from './LanguageContext';

export interface BreadcrumbItem {
    label: string;
    href?: string;
    onClick?: () => void;
}

interface BreadcrumbsProps {
    items: BreadcrumbItem[];
    className?: string;
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items, className = '' }) => {
    const { language, isRTL } = useLanguage();

    // Generate JSON-LD Schema for breadcrumbs
    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": items.map((item, index) => ({
            "@type": "ListItem",
            "position": index + 1,
            "name": item.label,
            "item": item.href ? `https://www.parcalamamakinesi.com${item.href}` : undefined
        }))
    };

    const translations = {
        tr: { home: 'Ana Sayfa' },
        en: { home: 'Home' },
        ru: { home: 'Главная' },
        ar: { home: 'الرئيسية' }
    };

    const t = translations[language as keyof typeof translations] || translations.tr;

    return (
        <>
            {/* JSON-LD Schema */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />

            {/* Breadcrumb Navigation */}
            <nav
                aria-label="Breadcrumb"
                className={`py-3 ${className}`}
                dir={isRTL ? 'rtl' : 'ltr'}
            >
                <ol className="flex flex-wrap items-center gap-1 text-sm">
                    {/* Home Link */}
                    <li className="flex items-center">
                        <a
                            href={`/${language}`}
                            className="flex items-center gap-1 text-gray-300 hover:text-[#F4CE14] transition-colors"
                            aria-label={t.home}
                        >
                            <Home size={14} className="flex-shrink-0" />
                            <span className="hidden sm:inline">{t.home}</span>
                        </a>
                    </li>

                    {/* Breadcrumb Items */}
                    {items.map((item, index) => (
                        <li key={index} className="flex items-center">
                            <ChevronRight
                                size={14}
                                className={`text-gray-400 mx-1 flex-shrink-0 ${isRTL ? 'rotate-180' : ''}`}
                            />
                            {item.href || item.onClick ? (
                                <a
                                    href={item.href || '#'}
                                    onClick={(e) => {
                                        if (item.onClick) {
                                            e.preventDefault();
                                            item.onClick();
                                        }
                                    }}
                                    className={`transition-colors ${index === items.length - 1
                                        ? 'text-[#F4CE14] font-medium cursor-default pointer-events-none'
                                        : 'text-gray-300 hover:text-[#F4CE14]'
                                        }`}
                                    aria-current={index === items.length - 1 ? 'page' : undefined}
                                >
                                    {item.label}
                                </a>
                            ) : (
                                <span
                                    className="text-[#F4CE14] font-medium"
                                    aria-current="page"
                                >
                                    {item.label}
                                </span>
                            )}
                        </li>
                    ))}
                </ol>
            </nav>
        </>
    );
};

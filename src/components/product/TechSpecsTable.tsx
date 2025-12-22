import { motion } from 'motion/react';
import { useLanguage } from '../LanguageContext';

export interface ModelSpecs {
    motorPower: string;
    rotorLength: string;
    rotorDiameter: string;
    bladeCount: string;
    weight: string;
    capacity: string;
    screenSize?: string;
}

// Spec value translations for different languages
const specValueTranslations: { [key: string]: { en: string; ru: string; ar: string } } = {
    // Blade/Material types
    'Sertleştirilmiş Çelik': { en: 'Hardened Steel', ru: 'Закаленная сталь', ar: 'فولاذ مقوى' },
    'Özel Alaşım': { en: 'Special Alloy', ru: 'Специальный сплав', ar: 'سبيكة خاصة' },
    // Capacity/Scale types
    'Küçük Ölçekli': { en: 'Small Scale', ru: 'Небольшого масштаба', ar: 'صغير الحجم' },
    'Orta Ölçekli': { en: 'Medium Scale', ru: 'Среднего масштаба', ar: 'متوسط الحجم' },
    'Büyük Ölçekli': { en: 'Large Scale', ru: 'Крупномасштабный', ar: 'واسع النطاق' },
    // Design types
    'Yatay Tasarım': { en: 'Horizontal Design', ru: 'Горизонтальная конструкция', ar: 'تصميم أفقي' },
    'Dikey Tasarım': { en: 'Vertical Design', ru: 'Вертикальная конструкция', ar: 'تصميم رأسي' },
    // Common units
    'adet': { en: 'pcs', ru: 'шт', ar: 'قطعة' },
};

export function translateSpecValue(value: string | undefined, language: string): string {
    if (!value) return '-';
    if (language === 'tr') return value;

    // Check for direct translation
    if (specValueTranslations[value]) {
        return specValueTranslations[value][language as 'en' | 'ru' | 'ar'] || value;
    }

    // Check for partial translations (e.g., "32 adet" -> "32 pcs")
    for (const [tr, translations] of Object.entries(specValueTranslations)) {
        if (value.includes(tr)) {
            return value.replace(tr, translations[language as 'en' | 'ru' | 'ar'] || tr);
        }
    }

    return value;
}

interface TechSpecsTableProps {
    specs: ModelSpecs;
    modelName: string;
    titleKey?: string;
}

export function TechSpecsTable({ specs, modelName, titleKey = 'single_shaft_tech_specs_title' }: TechSpecsTableProps) {
    const { t, language } = useLanguage();

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto rounded-xl overflow-hidden shadow-xl bg-white ring-1 ring-gray-100"
        >
            <h3 className="text-center text-[#45474B] py-6 text-2xl font-bold bg-gray-50 border-b">
                {t(titleKey)}
            </h3>
            <table className="w-full table-fixed">
                <tbody>
                    <tr className="border-b border-gray-200">
                        <td className="px-6 py-4 bg-[#F4CE14] text-[#1E1E1E] font-bold w-1/2 text-lg text-center">{t('spec_model')}</td>
                        <td className="px-6 py-4 text-[#1E1E1E] font-medium text-lg bg-white text-center">{modelName}</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                        <td className="px-6 py-4 bg-[#F4CE14] text-[#1E1E1E] font-bold text-lg text-center">{t('spec_motor_power')}</td>
                        <td className="px-6 py-4 text-[#1E1E1E] font-medium text-lg bg-white text-center">{specs.motorPower}</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                        <td className="px-6 py-4 bg-[#F4CE14] text-[#1E1E1E] font-bold text-lg text-center">{t('spec_rotor_length')}</td>
                        <td className="px-6 py-4 text-[#1E1E1E] font-medium text-lg bg-white text-center">{specs.rotorLength}</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                        <td className="px-6 py-4 bg-[#F4CE14] text-[#1E1E1E] font-bold text-lg text-center">{t('spec_rotor_diameter')}</td>
                        <td className="px-6 py-4 text-[#1E1E1E] font-medium text-lg bg-white text-center">{translateSpecValue(specs.rotorDiameter, language)}</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                        <td className="px-6 py-4 bg-[#F4CE14] text-[#1E1E1E] font-bold text-lg text-center">{t('spec_blade_count')}</td>
                        <td className="px-6 py-4 text-[#1E1E1E] font-medium text-lg bg-white text-center">{translateSpecValue(specs.bladeCount, language)}</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                        <td className="px-6 py-4 bg-[#F4CE14] text-[#1E1E1E] font-bold text-lg text-center">{t('spec_weight')}</td>
                        <td className="px-6 py-4 text-[#1E1E1E] font-medium text-lg bg-white text-center">{translateSpecValue(specs.weight, language)}</td>
                    </tr>
                    {specs.screenSize && (
                        <tr className="border-b border-gray-200">
                            <td className="px-6 py-4 bg-[#F4CE14] text-[#1E1E1E] font-bold text-lg text-center">{t('spec_screen_size')}</td>
                            <td className="px-6 py-4 text-[#1E1E1E] font-medium text-lg bg-white text-center">{specs.screenSize}</td>
                        </tr>
                    )}
                    <tr>
                        <td className="px-6 py-4 bg-[#F4CE14] text-[#1E1E1E] font-bold text-lg text-center">{t('spec_capacity')}</td>
                        <td className="px-6 py-4 text-[#1E1E1E] font-medium text-lg bg-white text-center">{translateSpecValue(specs.capacity, language)}</td>
                    </tr>
                </tbody>
            </table>
        </motion.div>
    );
}


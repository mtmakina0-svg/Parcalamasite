import React, { useState, useMemo } from 'react';
import { motion } from 'motion/react';
import { Calculator, TrendingUp, DollarSign, Clock, Trash2, Factory, ChevronRight } from 'lucide-react';
import { useLanguage } from './LanguageContext';

interface CalculatorInputs {
    dailyCapacity: number;
    currentDisposalCost: number;
    workingDaysPerYear: number;
    machineInvestment: number;
    operatingCostPerTon: number;
}

export const ROICalculator: React.FC = () => {
    const { language, isRTL } = useLanguage();

    const [inputs, setInputs] = useState<CalculatorInputs>({
        dailyCapacity: 5,
        currentDisposalCost: 50,
        workingDaysPerYear: 250,
        machineInvestment: 75000,
        operatingCostPerTon: 10
    });

    // Translations
    const translations = {
        tr: {
            title: 'ROI Hesaplayıcı',
            subtitle: 'Parçalama makinesi yatırımınızın geri dönüşünü hesaplayın',
            dailyCapacity: 'Günlük İşleme Kapasitesi (ton)',
            currentDisposalCost: 'Mevcut Atık Bertaraf Maliyeti ($/ton)',
            workingDays: 'Yıllık Çalışma Günü (gün)',
            machineInvestment: 'Makine Yatırım Maliyeti ($)',
            operatingCost: 'İşletme Maliyeti ($/ton)',
            results: 'Analiz Sonuçları',
            annualSavings: 'Yıllık Tasarruf',
            paybackPeriod: 'Geri Ödeme Süresi',
            months: 'ay',
            fiveYearROI: '5 Yıllık Net Kazanç',
            roiPercentage: 'Yatırım Getirisi (ROI)',
            totalProcessed: 'Yıllık İşlenen Atık',
            tons: 'ton',
            requestQuote: 'Size Özel Teklif Alın',
            disclaimer: '* Tahmini değerler içerir. Gerçek sonuçlar değişebilir.'
        },
        en: {
            title: 'ROI Calculator',
            subtitle: 'Calculate the return on investment for your shredder',
            dailyCapacity: 'Daily Processing Capacity (tons)',
            currentDisposalCost: 'Current Waste Disposal Cost ($/ton)',
            workingDays: 'Working Days Per Year (days)',
            machineInvestment: 'Machine Investment Cost ($)',
            operatingCost: 'Operating Cost ($/ton)',
            results: 'Analysis Results',
            annualSavings: 'Annual Savings',
            paybackPeriod: 'Payback Period',
            months: 'months',
            fiveYearROI: '5-Year Net Profit',
            roiPercentage: 'Return on Investment (ROI)',
            totalProcessed: 'Annual Waste Processed',
            tons: 'tons',
            requestQuote: 'Get Your Custom Quote',
            disclaimer: '* Contains estimated values. Actual results may vary.'
        },
        ru: {
            title: 'Калькулятор ROI',
            subtitle: 'Рассчитайте окупаемость инвестиций в измельчитель',
            dailyCapacity: 'Дневная Производительность (тонн)',
            currentDisposalCost: 'Текущая Стоимость Утилизации ($/тонна)',
            workingDays: 'Рабочих Дней в Году (дней)',
            machineInvestment: 'Стоимость Оборудования ($)',
            operatingCost: 'Эксплуатационные Расходы ($/тонна)',
            results: 'Результаты Анализа',
            annualSavings: 'Годовая Экономия',
            paybackPeriod: 'Срок Окупаемости',
            months: 'месяцев',
            fiveYearROI: '5-летняя Чистая Прибыль',
            roiPercentage: 'Рентабельность (ROI)',
            totalProcessed: 'Годовой Объем Переработки',
            tons: 'тонн',
            requestQuote: 'Получить Предложение',
            disclaimer: '* Оценочные значения. Фактические результаты могут отличаться.'
        },
        ar: {
            title: 'حاسبة عائد الاستثمار',
            subtitle: 'احسب عائد الاستثمار لآلة التقطيع',
            dailyCapacity: 'القدرة الإنتاجية اليومية (طن)',
            currentDisposalCost: 'تكلفة التخلص الحالية ($/طن)',
            workingDays: 'أيام العمل السنوية (يوم)',
            machineInvestment: 'تكلفة الاستثمار ($)',
            operatingCost: 'تكلفة التشغيل ($/طن)',
            results: 'نتائج التحليل',
            annualSavings: 'التوفير السنوي',
            paybackPeriod: 'فترة الاسترداد',
            months: 'شهر',
            fiveYearROI: 'صافي الربح لـ 5 سنوات',
            roiPercentage: 'عائد الاستثمار',
            totalProcessed: 'النفايات المعالجة سنوياً',
            tons: 'طن',
            requestQuote: 'احصل على عرض سعر',
            disclaimer: '* قيم تقديرية. قد تختلف النتائج الفعلية.'
        }
    };

    const txt = translations[language as keyof typeof translations] || translations.tr;

    // Calculate ROI
    const results = useMemo(() => {
        const annualCapacity = inputs.dailyCapacity * inputs.workingDaysPerYear;
        const currentAnnualCost = annualCapacity * inputs.currentDisposalCost;
        const newAnnualCost = annualCapacity * inputs.operatingCostPerTon;
        const annualSavings = currentAnnualCost - newAnnualCost;
        const paybackMonths = annualSavings > 0 ? (inputs.machineInvestment / annualSavings) * 12 : 999;
        const fiveYearProfit = (annualSavings * 5) - inputs.machineInvestment;
        const roiPercentage = inputs.machineInvestment > 0 ? ((annualSavings - (inputs.machineInvestment / 5)) / inputs.machineInvestment) * 100 : 0;

        return {
            annualCapacity,
            annualSavings,
            paybackMonths: Math.max(0, Math.min(paybackMonths, 999)),
            fiveYearProfit,
            roiPercentage
        };
    }, [inputs]);

    const handleInputChange = (field: keyof CalculatorInputs, value: string) => {
        const numValue = parseFloat(value) || 0;
        setInputs(prev => ({ ...prev, [field]: numValue }));
    };

    const formatCurrency = (value: number) => {
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
            maximumFractionDigits: 0
        }).format(value);
    };

    const formatNumber = (value: number) => {
        return new Intl.NumberFormat('en-US', { maximumFractionDigits: 0 }).format(value);
    };

    const paybackProgress = Math.min(100, Math.max(0, (36 - results.paybackMonths) / 36 * 100));

    return (
        <section
            id="roi-calculator"
            className="py-32 bg-gradient-to-b from-[#45474B] via-[#3A3C3F] to-[#45474B] text-white relative overflow-hidden"
            dir={isRTL ? 'rtl' : 'ltr'}
        >
            {/* Animated Background Elements - Same as TechnologySection */}
            <div className="absolute inset-0 opacity-10">
                <motion.div
                    animate={{ rotate: 360, scale: [1, 1.1, 1] }}
                    transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
                    className="absolute top-20 right-20 w-64 h-64 border-4 border-[#F4CE14] rounded-full"
                />
                <motion.div
                    animate={{ rotate: -360, scale: [1, 1.2, 1] }}
                    transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
                    className="absolute bottom-20 left-20 w-96 h-96 border-4 border-[#F4CE14] rounded-full"
                />
            </div>

            {/* Glow Effects */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#F4CE14]/10 rounded-full blur-[120px]" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#F4CE14]/10 rounded-full blur-[120px]" />

            <div className="container mx-auto px-4 lg:px-8 max-w-[1440px] relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="inline-flex items-center gap-3 bg-gradient-to-r from-[#F4CE14] to-[#F4CE14]/80 text-[#1E1E1E] px-8 py-4 rounded-full mb-8 shadow-[0_0_30px_rgba(244,206,20,0.3)]"
                    >
                        <Calculator size={28} />
                        <span className="font-bold text-xl">{txt.title}</span>
                    </motion.div>
                    <p className="text-lg md:text-xl text-[#F5F7F8] max-w-3xl mx-auto">{txt.subtitle}</p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-10">
                    {/* Input Form */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="bg-gradient-to-br from-[#35373A] to-[#2A2C2F] rounded-xl p-8 border-2 border-[#F4CE14]/20 hover:border-[#F4CE14]/40 transition-all duration-300"
                    >
                        <div className="space-y-6">
                            {/* Daily Capacity */}
                            <div>
                                <label className="flex items-center gap-3 text-[#F5F7F8] mb-3 text-lg">
                                    <Trash2 size={20} className="text-[#F4CE14]" />
                                    {txt.dailyCapacity}
                                </label>
                                <div className="flex items-center gap-3">
                                    <input
                                        type="range"
                                        min="1"
                                        max="100"
                                        value={Math.min(Math.max(inputs.dailyCapacity, 1), 100)}
                                        onChange={(e) => handleInputChange('dailyCapacity', e.target.value)}
                                        className="flex-1 h-2 bg-[#45474B] rounded-lg appearance-none cursor-pointer accent-[#F4CE14]"
                                    />
                                    <input
                                        type="number"
                                        min="1"
                                        value={inputs.dailyCapacity || ''}
                                        onChange={(e) => handleInputChange('dailyCapacity', e.target.value || '1')}
                                        className="w-28 bg-[#2A2C2F] border-2 border-[#F4CE14]/30 rounded-lg px-3 py-2 text-[#F4CE14] text-center font-bold focus:border-[#F4CE14] focus:outline-none"
                                    />
                                </div>
                            </div>

                            {/* Current Disposal Cost */}
                            <div>
                                <label className="flex items-center gap-3 text-[#F5F7F8] mb-3 text-lg">
                                    <DollarSign size={20} className="text-[#F4CE14]" />
                                    {txt.currentDisposalCost}
                                </label>
                                <div className="flex items-center gap-3">
                                    <input
                                        type="range"
                                        min="1"
                                        max="500"
                                        value={Math.min(Math.max(inputs.currentDisposalCost, 1), 500)}
                                        onChange={(e) => handleInputChange('currentDisposalCost', e.target.value)}
                                        className="flex-1 h-2 bg-[#45474B] rounded-lg appearance-none cursor-pointer accent-[#F4CE14]"
                                    />
                                    <input
                                        type="number"
                                        min="1"
                                        value={inputs.currentDisposalCost || ''}
                                        onChange={(e) => handleInputChange('currentDisposalCost', e.target.value || '1')}
                                        className="w-28 bg-[#2A2C2F] border-2 border-[#F4CE14]/30 rounded-lg px-3 py-2 text-[#F4CE14] text-center font-bold focus:border-[#F4CE14] focus:outline-none"
                                    />
                                </div>
                            </div>

                            {/* Working Days */}
                            <div>
                                <label className="flex items-center gap-3 text-[#F5F7F8] mb-3 text-lg">
                                    <Clock size={20} className="text-[#F4CE14]" />
                                    {txt.workingDays}
                                </label>
                                <div className="flex items-center gap-3">
                                    <input
                                        type="range"
                                        min="1"
                                        max="365"
                                        value={Math.min(Math.max(inputs.workingDaysPerYear, 1), 365)}
                                        onChange={(e) => handleInputChange('workingDaysPerYear', e.target.value)}
                                        className="flex-1 h-2 bg-[#45474B] rounded-lg appearance-none cursor-pointer accent-[#F4CE14]"
                                    />
                                    <input
                                        type="number"
                                        min="1"
                                        value={inputs.workingDaysPerYear || ''}
                                        onChange={(e) => handleInputChange('workingDaysPerYear', e.target.value || '1')}
                                        className="w-28 bg-[#2A2C2F] border-2 border-[#F4CE14]/30 rounded-lg px-3 py-2 text-[#F4CE14] text-center font-bold focus:border-[#F4CE14] focus:outline-none"
                                    />
                                </div>
                            </div>

                            {/* Machine Investment */}
                            <div>
                                <label className="flex items-center gap-3 text-[#F5F7F8] mb-3 text-lg">
                                    <Factory size={20} className="text-[#F4CE14]" />
                                    {txt.machineInvestment}
                                </label>
                                <div className="flex items-center gap-3">
                                    <input
                                        type="range"
                                        min="10000"
                                        max="1000000"
                                        step="5000"
                                        value={Math.min(Math.max(inputs.machineInvestment, 10000), 1000000)}
                                        onChange={(e) => handleInputChange('machineInvestment', e.target.value)}
                                        className="flex-1 h-2 bg-[#45474B] rounded-lg appearance-none cursor-pointer accent-[#F4CE14]"
                                    />
                                    <input
                                        type="number"
                                        min="1000"
                                        value={inputs.machineInvestment || ''}
                                        onChange={(e) => handleInputChange('machineInvestment', e.target.value || '1000')}
                                        className="w-28 bg-[#2A2C2F] border-2 border-[#F4CE14]/30 rounded-lg px-2 py-2 text-[#F4CE14] text-center font-bold focus:border-[#F4CE14] focus:outline-none text-sm"
                                    />
                                </div>
                            </div>

                            {/* Operating Cost */}
                            <div>
                                <label className="flex items-center gap-3 text-[#F5F7F8] mb-3 text-lg">
                                    <TrendingUp size={20} className="text-[#F4CE14]" />
                                    {txt.operatingCost}
                                </label>
                                <div className="flex items-center gap-3">
                                    <input
                                        type="range"
                                        min="1"
                                        max="100"
                                        value={Math.min(Math.max(inputs.operatingCostPerTon, 1), 100)}
                                        onChange={(e) => handleInputChange('operatingCostPerTon', e.target.value)}
                                        className="flex-1 h-2 bg-[#45474B] rounded-lg appearance-none cursor-pointer accent-[#F4CE14]"
                                    />
                                    <input
                                        type="number"
                                        min="1"
                                        value={inputs.operatingCostPerTon || ''}
                                        onChange={(e) => handleInputChange('operatingCostPerTon', e.target.value || '1')}
                                        className="w-28 bg-[#2A2C2F] border-2 border-[#F4CE14]/30 rounded-lg px-3 py-2 text-[#F4CE14] text-center font-bold focus:border-[#F4CE14] focus:outline-none"
                                    />
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Results Panel */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="bg-gradient-to-br from-[#35373A] to-[#2A2C2F] rounded-xl p-8 border-2 border-[#F4CE14]/40 hover:shadow-[0_0_30px_rgba(244,206,20,0.2)] transition-all duration-300"
                    >
                        <h3 className="text-2xl text-[#F4CE14] mb-8 flex items-center gap-3" style={{ textShadow: '0 1px 2px rgba(0,0,0,0.3)' }}>
                            <TrendingUp size={28} />
                            {txt.results}
                        </h3>

                        {/* 2x2 Grid Layout */}
                        <div className="grid grid-cols-2 gap-6 mb-6">
                            {/* Annual Savings */}
                            <motion.div
                                whileHover={{ scale: 1.02, borderColor: 'rgba(244,206,20,0.6)' }}
                                className="bg-gradient-to-br from-[#45474B] to-[#3A3C3F] rounded-2xl p-6 border-2 border-[#F4CE14]/30 text-center transition-all"
                            >
                                <div className="text-[#F5F7F8]/70 text-sm mb-2">{txt.annualSavings}</div>
                                <div className="text-3xl md:text-4xl font-bold text-green-400">
                                    {formatCurrency(results.annualSavings)}
                                </div>
                            </motion.div>

                            {/* Payback Period */}
                            <motion.div
                                whileHover={{ scale: 1.02, borderColor: 'rgba(244,206,20,0.6)' }}
                                className="bg-gradient-to-br from-[#45474B] to-[#3A3C3F] rounded-2xl p-6 border-2 border-[#F4CE14]/30 text-center transition-all"
                            >
                                <div className="text-[#F5F7F8]/70 text-sm mb-2">{txt.paybackPeriod}</div>
                                <div className="text-3xl md:text-4xl font-bold text-[#F4CE14]">
                                    {results.paybackMonths < 999 ? results.paybackMonths.toFixed(1) : '∞'} <span className="text-xl">{txt.months}</span>
                                </div>
                            </motion.div>

                            {/* 5-Year ROI */}
                            <motion.div
                                whileHover={{ scale: 1.02, borderColor: 'rgba(244,206,20,0.6)' }}
                                className="bg-gradient-to-br from-[#45474B] to-[#3A3C3F] rounded-2xl p-6 border-2 border-[#F4CE14]/30 text-center transition-all"
                            >
                                <div className="text-[#F5F7F8]/70 text-sm mb-2">{txt.fiveYearROI}</div>
                                <div className={`text-3xl md:text-4xl font-bold ${results.fiveYearProfit >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                                    {formatCurrency(results.fiveYearProfit)}
                                </div>
                            </motion.div>

                            {/* ROI Percentage */}
                            <motion.div
                                whileHover={{ scale: 1.02, borderColor: 'rgba(244,206,20,0.6)' }}
                                className="bg-gradient-to-br from-[#45474B] to-[#3A3C3F] rounded-2xl p-6 border-2 border-[#F4CE14]/30 text-center transition-all"
                            >
                                <div className="text-[#F5F7F8]/70 text-sm mb-2">{txt.roiPercentage}</div>
                                <div className={`text-3xl md:text-4xl font-bold ${results.roiPercentage >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                                    {results.roiPercentage.toFixed(0)}%
                                </div>
                            </motion.div>
                        </div>

                        {/* Progress Bar - Full Width */}
                        <div className="bg-[#45474B]/50 rounded-xl p-5 border border-[#F4CE14]/20 mb-6">
                            <div className="flex justify-between items-center mb-3">
                                <span className="text-[#F5F7F8]/70 text-sm">{txt.totalProcessed}</span>
                                <span className="text-xl font-bold text-[#F5F7F8]">
                                    {formatNumber(results.annualCapacity)} {txt.tons}
                                </span>
                            </div>
                            <div className="h-3 bg-[#2A2C2F] rounded-full overflow-hidden">
                                <motion.div
                                    initial={{ width: 0 }}
                                    animate={{ width: `${paybackProgress}%` }}
                                    transition={{ duration: 1, delay: 0.3 }}
                                    className="h-full bg-gradient-to-r from-[#F4CE14] to-[#F4CE14]/70 rounded-full"
                                />
                            </div>
                            <div className="flex justify-between text-xs text-[#F5F7F8]/50 mt-2">
                                <span>0</span>
                                <span>12 {txt.months}</span>
                                <span>24 {txt.months}</span>
                                <span>36 {txt.months}</span>
                            </div>
                        </div>

                        {/* CTA Button */}
                        <motion.button
                            whileHover={{ scale: 1.02, boxShadow: '0 0 30px rgba(244,206,20,0.4)' }}
                            whileTap={{ scale: 0.98 }}
                            className="w-full py-5 bg-gradient-to-r from-[#F4CE14] to-[#F4CE14]/80 text-[#1E1E1E] font-bold text-lg rounded-xl flex items-center justify-center gap-3 transition-all"
                            onClick={() => window.location.href = `/${language}/iletisim`}
                        >
                            {txt.requestQuote}
                            <ChevronRight size={24} />
                        </motion.button>

                        <p className="text-sm text-[#F5F7F8]/50 mt-4 text-center">
                            {txt.disclaimer}
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default ROICalculator;

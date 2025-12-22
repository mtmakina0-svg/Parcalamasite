import { motion } from 'motion/react';
import { useLanguage } from '../LanguageContext';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '../ui/accordion';

// Helper to get the translation key prefix for a product type
export function getTranslationKeyPrefix(type: string): string {
    switch (type) {
        case 'single-shaft': return 'single_shaft';
        case 'dual-shaft': return 'dual_shaft';
        case 'quad-shaft': return 'quad_shaft';
        case 'tree-root': return 'tree_root';
        case 'mobile': return 'mobile_crusher';
        case 'harddisk': return 'harddisk';
        case 'wood': return 'wood';
        case 'glass': return 'glass';
        case 'pallet': return 'pallet';
        case 'metal': return 'metal';
        default: return type.replace(/-/g, '_');
    }
}

interface FAQSectionProps {
    productType: string;
    maxQuestions?: number;
}

export function FAQSection({ productType, maxQuestions = 12 }: FAQSectionProps) {
    const { t } = useLanguage();
    const prefix = getTranslationKeyPrefix(productType);

    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4 lg:px-8 max-w-[1440px]">
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center text-[#45474B] mb-12 text-3xl font-bold"
                >
                    {t(`${prefix}_faq_title`)}
                </motion.h2>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-4xl mx-auto"
                >
                    <Accordion type="single" collapsible className="space-y-4">
                        {Array.from({ length: maxQuestions }, (_, i) => i + 1).map((num) => {
                            const questionKey = `${prefix}_faq_q${num}`;
                            const answerKey = `${prefix}_faq_a${num}`;
                            const question = t(questionKey);
                            const answer = t(answerKey);

                            // Skip if translation returns the key itself
                            if (question === questionKey || answer === answerKey) {
                                return null;
                            }

                            return (
                                <AccordionItem
                                    key={`item-${num}`}
                                    value={`item-${num}`}
                                    className="bg-[#F5F7F8] rounded-xl px-6 border-none"
                                >
                                    <AccordionTrigger className="text-[#45474B] hover:text-[#F4CE14]">
                                        {question}
                                    </AccordionTrigger>
                                    <AccordionContent className="text-[#45474B] leading-relaxed">
                                        {answer}
                                    </AccordionContent>
                                </AccordionItem>
                            );
                        })}
                    </Accordion>
                </motion.div>
            </div>
        </section>
    );
}

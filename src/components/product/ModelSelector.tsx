import { motion } from 'motion/react';
import { useLanguage } from '../LanguageContext';

interface ModelSelectorProps {
    models: string[];
    currentModel: string;
    onModelChange: (model: string) => void;
}

export function ModelSelector({ models, currentModel, onModelChange }: ModelSelectorProps) {
    const { t } = useLanguage();

    if (models.length === 0) return null;

    return (
        <section className="bg-[#45474B] py-6 border-t border-[#F4CE14]/20">
            <div className="container mx-auto px-4 lg:px-8 max-w-[1440px]">
                <div className="flex flex-wrap items-center gap-3">
                    <span className="text-[#F4CE14] text-sm uppercase tracking-wide">
                        {t('models')}:
                    </span>
                    {models.map((model) => (
                        <motion.button
                            key={model}
                            onClick={() => onModelChange(model)}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className={`px-4 py-2 rounded-lg font-medium transition-all ${model === currentModel
                                ? 'bg-[#F4CE14] text-[#1E1E1E]'
                                : 'bg-[#F5F7F8]/10 text-[#F5F7F8] hover:bg-[#F4CE14]/20'
                                }`}
                        >
                            {model}
                        </motion.button>
                    ))}
                </div>
            </div>
        </section>
    );
}

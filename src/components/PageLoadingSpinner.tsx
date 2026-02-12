import { motion } from 'motion/react';

/**
 * Lightweight loading spinner shown during lazy-loaded page transitions.
 */
export function PageLoadingSpinner() {
    return (
        <div className="min-h-[60vh] flex flex-col items-center justify-center bg-[#45474B]">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex flex-col items-center gap-4"
            >
                <div className="w-12 h-12 border-4 border-[#F4CE14] border-t-transparent rounded-full animate-spin" />
                <p className="text-[#F5F7F8]/60 text-sm font-medium">Yükleniyor...</p>
            </motion.div>
        </div>
    );
}

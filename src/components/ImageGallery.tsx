import React, { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ChevronLeft, ChevronRight, ZoomIn, Grid3X3 } from 'lucide-react';
import type { GalleryImage } from '../utils/galleryConfig';

interface ImageGalleryProps {
    images: GalleryImage[];
    title?: string;
}

/**
 * Premium Image Gallery with Lightbox
 * Features: Grid layout, fullscreen lightbox, keyboard nav, swipe, zoom
 */
export const ImageGallery: React.FC<ImageGalleryProps> = ({ images, title }) => {
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isZoomed, setIsZoomed] = useState(false);
    const touchStartX = useRef<number | null>(null);
    const touchEndX = useRef<number | null>(null);

    // Keyboard navigation
    useEffect(() => {
        if (!lightboxOpen) return;
        const handleKey = (e: KeyboardEvent) => {
            if (e.key === 'Escape') { setLightboxOpen(false); setIsZoomed(false); }
            if (e.key === 'ArrowRight') setCurrentIndex(prev => (prev + 1) % images.length);
            if (e.key === 'ArrowLeft') setCurrentIndex(prev => (prev - 1 + images.length) % images.length);
        };
        document.body.style.overflow = 'hidden';
        window.addEventListener('keydown', handleKey);
        return () => {
            document.body.style.overflow = '';
            window.removeEventListener('keydown', handleKey);
        };
    }, [lightboxOpen, images.length]);

    const openLightbox = useCallback((index: number) => {
        setCurrentIndex(index);
        setLightboxOpen(true);
        setIsZoomed(false);
    }, []);

    const navigate = useCallback((dir: 1 | -1) => {
        setIsZoomed(false);
        setCurrentIndex(prev => (prev + dir + images.length) % images.length);
    }, [images.length]);

    // Touch swipe handlers
    const handleTouchStart = (e: React.TouchEvent) => {
        touchStartX.current = e.touches[0].clientX;
    };
    const handleTouchMove = (e: React.TouchEvent) => {
        touchEndX.current = e.touches[0].clientX;
    };
    const handleTouchEnd = () => {
        if (touchStartX.current !== null && touchEndX.current !== null) {
            const diff = touchStartX.current - touchEndX.current;
            if (Math.abs(diff) > 60) {
                navigate(diff > 0 ? 1 : -1);
            }
        }
        touchStartX.current = null;
        touchEndX.current = null;
    };

    if (!images.length) return null;

    // Show first image large, next 3 as thumbnails, rest hidden until lightbox
    const heroImage = images[0];
    const visibleThumbs = images.slice(1, 5);
    const remainingCount = Math.max(0, images.length - 5);

    return (
        <>
            {/* Gallery Section */}
            <section className="py-16 bg-gradient-to-b from-[#1a1a2e] to-[#16213e]">
                <div className="container mx-auto px-4 lg:px-8 max-w-[1440px]">
                    {/* Section Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <div className="flex items-center justify-center gap-3 mb-4">
                            <div className="h-px w-12 bg-gradient-to-r from-transparent to-[#F4CE14]" />
                            <Grid3X3 size={20} className="text-[#F4CE14]" />
                            <div className="h-px w-12 bg-gradient-to-l from-transparent to-[#F4CE14]" />
                        </div>
                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                            {title || 'Ürün Galerisi'}
                        </h2>
                        <p className="text-white/50 text-sm">{images.length} Fotoğraf</p>
                    </motion.div>

                    {/* Gallery Grid — Hero + Thumbs Layout */}
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-3 max-w-5xl mx-auto">
                        {/* Hero Image — Spans 2 cols, 2 rows */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="md:col-span-2 md:row-span-2 relative group cursor-pointer overflow-hidden rounded-2xl"
                            onClick={() => openLightbox(0)}
                        >
                            <img
                                src={heroImage.src}
                                alt={heroImage.alt}
                                className="w-full h-full object-cover min-h-[300px] md:min-h-[500px] transition-transform duration-700 group-hover:scale-110"
                                loading="lazy"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
                            <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0">
                                <span className="text-white text-sm font-medium bg-black/40 backdrop-blur-sm px-3 py-1.5 rounded-full">
                                    1 / {images.length}
                                </span>
                                <div className="w-10 h-10 rounded-full bg-[#F4CE14]/90 backdrop-blur-sm flex items-center justify-center">
                                    <ZoomIn size={18} className="text-[#1a1a2e]" />
                                </div>
                            </div>
                        </motion.div>

                        {/* Thumbnail Images */}
                        {visibleThumbs.map((img, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 * (idx + 1) }}
                                className="relative group cursor-pointer overflow-hidden rounded-xl"
                                onClick={() => openLightbox(idx + 1)}
                            >
                                <img
                                    src={img.src}
                                    alt={img.alt}
                                    className="w-full h-full object-cover min-h-[180px] md:min-h-[240px] transition-transform duration-500 group-hover:scale-110"
                                    loading="lazy"
                                />
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300" />
                                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                                    <div className="w-10 h-10 rounded-full bg-[#F4CE14]/90 backdrop-blur-sm flex items-center justify-center transform scale-75 group-hover:scale-100 transition-transform duration-300">
                                        <ZoomIn size={16} className="text-[#1a1a2e]" />
                                    </div>
                                </div>

                                {/* "+N more" overlay on last visible thumb */}
                                {idx === visibleThumbs.length - 1 && remainingCount > 0 && (
                                    <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px] flex items-center justify-center">
                                        <span className="text-white text-2xl font-bold">+{remainingCount}</span>
                                    </div>
                                )}
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Lightbox Modal */}
            <AnimatePresence>
                {lightboxOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[9999] bg-black/95 backdrop-blur-xl flex items-center justify-center"
                        onClick={(e) => {
                            if (e.target === e.currentTarget) {
                                setLightboxOpen(false);
                                setIsZoomed(false);
                            }
                        }}
                        onTouchStart={handleTouchStart}
                        onTouchMove={handleTouchMove}
                        onTouchEnd={handleTouchEnd}
                    >
                        {/* Top Bar */}
                        <div className="absolute top-0 left-0 right-0 z-10 flex items-center justify-between p-4 md:p-6">
                            <div className="flex items-center gap-3">
                                <span className="text-white/80 text-sm font-medium bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                                    {currentIndex + 1} / {images.length}
                                </span>
                            </div>
                            <div className="flex items-center gap-2">
                                <button
                                    onClick={() => setIsZoomed(!isZoomed)}
                                    className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white/80 hover:text-white hover:bg-white/20 transition-all"
                                >
                                    <ZoomIn size={18} />
                                </button>
                                <button
                                    onClick={() => { setLightboxOpen(false); setIsZoomed(false); }}
                                    className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white/80 hover:text-white hover:bg-red-500/30 transition-all"
                                >
                                    <X size={18} />
                                </button>
                            </div>
                        </div>

                        {/* Navigation Arrows */}
                        <button
                            onClick={() => navigate(-1)}
                            className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white/80 hover:text-white hover:bg-white/20 transition-all hover:scale-110"
                        >
                            <ChevronLeft size={24} />
                        </button>
                        <button
                            onClick={() => navigate(1)}
                            className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white/80 hover:text-white hover:bg-white/20 transition-all hover:scale-110"
                        >
                            <ChevronRight size={24} />
                        </button>

                        {/* Main Image */}
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentIndex}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.3, ease: 'easeOut' }}
                                className="w-full h-full flex items-center justify-center p-4 md:p-16 pt-16 pb-24"
                            >
                                <img
                                    src={images[currentIndex].src}
                                    alt={images[currentIndex].alt}
                                    className={`max-w-full max-h-full object-contain rounded-lg shadow-2xl transition-transform duration-500 ${isZoomed ? 'scale-150 cursor-zoom-out' : 'cursor-zoom-in'
                                        }`}
                                    onClick={() => setIsZoomed(!isZoomed)}
                                    draggable={false}
                                />
                            </motion.div>
                        </AnimatePresence>

                        {/* Bottom Thumbnail Strip */}
                        <div className="absolute bottom-0 left-0 right-0 z-10 p-3 md:p-4">
                            <div className="flex items-center justify-center gap-1.5 md:gap-2 overflow-x-auto pb-1 px-4 max-w-4xl mx-auto scrollbar-hide">
                                {images.map((img, idx) => (
                                    <button
                                        key={idx}
                                        onClick={() => { setCurrentIndex(idx); setIsZoomed(false); }}
                                        className={`flex-shrink-0 rounded-lg overflow-hidden transition-all duration-300 ${idx === currentIndex
                                                ? 'ring-2 ring-[#F4CE14] ring-offset-2 ring-offset-black scale-105'
                                                : 'opacity-50 hover:opacity-80'
                                            }`}
                                    >
                                        <img
                                            src={img.src}
                                            alt={img.alt}
                                            className="w-14 h-14 md:w-16 md:h-16 object-cover"
                                            loading="lazy"
                                        />
                                    </button>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default ImageGallery;

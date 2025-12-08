import { motion } from 'motion/react';
import { blogPosts, getLocalizedValue, Language } from '../data/blogPosts';
import { Calendar, User, ArrowRight } from 'lucide-react';
import { useLanguage } from './LanguageContext';

export const BlogPage = () => {
    const { language, t } = useLanguage();
    const lang = language as Language;

    const handlePostClick = (slug: string) => {
        window.location.href = `/blog/${slug}`;
    };

    return (
        <div className="min-h-screen bg-white pt-20">
            {/* Hero Section */}
            <section className="bg-[#1E1E1E] text-white py-20 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent z-10"></div>
                <div className="container mx-auto px-4 relative z-20">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-3xl"
                    >
                        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-[#F4CE14]">
                            {t('blog_title')}
                        </h1>
                        <p className="text-xl text-gray-300 leading-relaxed">
                            {t('blog_subtitle')}
                        </p>
                    </motion.div>
                </div>
                {/* Decorative Background Element */}
                <div className="absolute right-0 top-0 w-1/3 h-full bg-[#F4CE14]/10 skew-x-12 transform origin-top hidden md:block"></div>
            </section>

            {/* Blog Posts Grid */}
            <section className="py-16">
                <div className="container mx-auto px-4 max-w-[1440px]">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {blogPosts.map((post, index) => (
                            <motion.article
                                key={post.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="bg-white rounded-xl shadow-lg overflow-hidden group hover:shadow-2xl transition-all duration-300 border border-gray-100 flex flex-col h-full"
                            >
                                {/* Image */}
                                <div className="relative h-64 overflow-hidden cursor-pointer" onClick={() => handlePostClick(post.slug)}>
                                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10 w-full h-full"></div>
                                    <img
                                        src={post.image}
                                        alt={getLocalizedValue(post.title, lang)}
                                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                                    />
                                    <div className="absolute top-4 left-4 z-20 flex gap-2">
                                        {post.tags.slice(0, 2).map((tag, idx) => (
                                            <span key={idx} className="bg-[#F4CE14] text-[#1E1E1E] text-xs font-bold px-3 py-1 rounded-full shadow-md">
                                                {getLocalizedValue(tag, lang)}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-8 flex flex-col flex-grow blog-card-content">
                                    <style>{`
                                        .blog-card-content * { color: #000000 !important; }
                                        .blog-card-content h2 { color: #000000 !important; font-weight: 800 !important; }
                                        .blog-card-content p { color: #000000 !important; }
                                        .blog-card-content button { color: #000000 !important; font-weight: 700 !important; }
                                    `}</style>
                                    <div className="flex items-center text-sm !text-black mb-4 space-x-4">
                                        <div className="flex items-center">
                                            <Calendar size={16} className="mr-2 !text-[#F4CE14]" />
                                            {post.date}
                                        </div>
                                        <div className="flex items-center">
                                            <User size={16} className="mr-2 !text-[#F4CE14]" />
                                            {getLocalizedValue(post.author, lang)}
                                        </div>
                                    </div>

                                    <h2
                                        className="text-2xl font-bold !text-black mb-4 group-hover:!text-[#F4CE14] transition-colors cursor-pointer line-clamp-2"
                                        onClick={() => handlePostClick(post.slug)}
                                    >
                                        {getLocalizedValue(post.title, lang)}
                                    </h2>

                                    <p className="!text-black mb-6 line-clamp-3 flex-grow leading-relaxed font-normal">
                                        {getLocalizedValue(post.summary, lang)}
                                    </p>

                                    <button
                                        onClick={() => handlePostClick(post.slug)}
                                        className="flex items-center !text-black font-bold group/btn self-start mt-auto hover:!text-[#F4CE14] transition-colors"
                                    >
                                        {t('blog_read_more')}
                                        <ArrowRight size={20} className="ml-2 transform group-hover/btn:translate-x-2 transition-transform" />
                                    </button>
                                </div>
                            </motion.article>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

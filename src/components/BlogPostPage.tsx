
import { useEffect } from 'react';
import { motion } from 'motion/react';
import { blogPosts, getLocalizedValue, Language } from '../data/blogPosts';
import { Calendar, User, ArrowLeft, Share2 } from 'lucide-react';
import { SEOHead } from './SEOHead';
import { useLanguage } from './LanguageContext';

interface BlogPostPageProps {
    slug: string;
}

export const BlogPostPage = ({ slug }: BlogPostPageProps) => {
    const { language, t } = useLanguage();
    const lang = language as Language;
    const post = blogPosts.find(p => p.slug === slug);

    // Scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [slug]);

    if (!post) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-50">
                <div className="text-center">
                    <h1 className="text-4xl font-bold text-[#1E1E1E] mb-4">404</h1>
                    <p className="text-xl text-gray-600 mb-8">{t('blog_not_found')}</p>
                    <a href="/blog" className="text-[#F4CE14] font-bold hover:underline">{t('blog_back_home')}</a>
                </div>
            </div>
        );
    }

    const otherPosts = blogPosts.filter(p => p.id !== post.id).slice(0, 3);
    const localizedTitle = getLocalizedValue(post.title, lang);
    const localizedSummary = getLocalizedValue(post.summary, lang);
    const localizedContent = getLocalizedValue(post.content, lang);
    const localizedAuthor = getLocalizedValue(post.author, lang);

    return (
        <>
            <SEOHead
                title={`${localizedTitle} | MT Makina Blog`}
                description={localizedSummary}
                keywords={post.tags.map(tag => getLocalizedValue(tag, lang))}
                canonical={`https://www.parcalamamakinesi.com/blog/${post.slug}`}
            />

            <article className="min-h-screen bg-white pt-24 pb-20">
                {/* Article Hero */}
                <div className="container mx-auto px-4 max-w-[1440px]">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="max-w-4xl mx-auto"
                    >
                        <a href="/blog" className="inline-flex items-center text-gray-600 hover:text-[#F4CE14] mb-8 transition-colors font-medium">
                            <ArrowLeft size={20} className="mr-2" />
                            {t('blog_back')}
                        </a>

                        <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-12 border border-gray-100">
                            <div className="relative h-[400px] w-full">
                                <div className="absolute inset-0 bg-black/40 z-10 w-full h-full"></div>
                                <img src={post.image} alt={localizedTitle} className="w-full h-full object-cover" />
                                <div className="absolute bottom-0 left-0 right-0 z-20 p-8 md:p-12 bg-gradient-to-t from-black via-black/70 to-transparent">
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {post.tags.map((tag, idx) => (
                                            <span key={idx} className="bg-[#F4CE14] text-black text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                                                {getLocalizedValue(tag, lang)}
                                            </span>
                                        ))}
                                    </div>
                                    <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-6 leading-tight" style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.9), 0 0 20px rgba(0,0,0,0.8)' }}>
                                        {localizedTitle}
                                    </h1>
                                    <div className="flex items-center text-white font-medium space-x-6 text-sm md:text-base" style={{ textShadow: '1px 1px 4px rgba(0,0,0,0.9)' }}>
                                        <div className="flex items-center">
                                            <Calendar size={18} className="mr-2 text-[#F4CE14]" style={{ filter: 'drop-shadow(1px 1px 2px rgba(0,0,0,0.8))' }} />
                                            {post.date}
                                        </div>
                                        <div className="flex items-center">
                                            <User size={18} className="mr-2 text-[#F4CE14]" style={{ filter: 'drop-shadow(1px 1px 2px rgba(0,0,0,0.8))' }} />
                                            {localizedAuthor}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Content Body */}
                            <div className="p-8 md:p-12 bg-white">
                                <style>{`
                                    #blog-content-wrapper {
                                        color: #000000 !important;
                                    }
                                    #blog-content-wrapper * {
                                        color: #000000 !important;
                                    }
                                    #blog-content-wrapper h1, 
                                    #blog-content-wrapper h2, 
                                    #blog-content-wrapper h3, 
                                    #blog-content-wrapper h4, 
                                    #blog-content-wrapper strong {
                                        font-weight: 700 !important;
                                        color: #000000 !important;
                                    }
                                    #blog-content-wrapper a {
                                        color: #E31E24 !important;
                                        text-decoration: none !important;
                                    }
                                    #blog-content-wrapper a:hover {
                                        color: #F4CE14 !important;
                                        text-decoration: underline !important;
                                    }
                                `}</style>
                                <div
                                    id="blog-content-wrapper"
                                    className="prose prose-lg max-w-none text-black"
                                    dangerouslySetInnerHTML={{ __html: localizedContent }}
                                />
                            </div>

                            {/* Footer of Article */}
                            <div className="bg-gray-50 p-8 border-t border-gray-200 mt-8">
                                <div className="flex justify-between items-center">
                                    <span className="font-bold text-black">{t('blog_share')}:</span>
                                    <button className="flex items-center gap-2 bg-black text-white px-4 py-2 rounded-lg hover:bg-[#F4CE14] hover:text-black transition-colors">
                                        <Share2 size={18} />
                                        {t('blog_share_btn')}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Read Next */}
                {otherPosts.length > 0 && (
                    <div className="container mx-auto px-4 max-w-[1440px] mt-20">
                        <h3 className="text-3xl font-bold text-[#1E1E1E] mb-10 text-center">{t('blog_related')}</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {otherPosts.map((op) => (
                                <a key={op.id} href={`/blog/${op.slug}`} className="group block bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow">
                                    <div className="h-48 overflow-hidden">
                                        <img src={op.image} alt={getLocalizedValue(op.title, lang)} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                                    </div>
                                    <div className="p-6">
                                        <h4 className="text-xl font-bold text-[#1E1E1E] mb-2 group-hover:text-[#F4CE14] transition-colors line-clamp-2">{getLocalizedValue(op.title, lang)}</h4>
                                        <p className="text-gray-600 text-sm line-clamp-3">{getLocalizedValue(op.summary, lang)}</p>
                                    </div>
                                </a>
                            ))}
                        </div>
                    </div>
                )}
            </article>
        </>
    );
};

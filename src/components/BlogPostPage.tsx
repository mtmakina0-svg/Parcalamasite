
import { useEffect } from 'react';
import { motion } from 'motion/react';
import { blogPosts, getLocalizedValue, Language } from '../data/blogPosts';
import { Calendar, User, ArrowLeft, Share2 } from 'lucide-react';
import { SEOHead } from './SEOHead';
import { useLanguage } from './LanguageContext';
import { Breadcrumbs } from './Breadcrumbs';

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
                    <a href={`/${language}/blog`} className="text-[#F4CE14] font-bold hover:underline">{t('blog_back_home')}</a>
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
                        <a href={`/${language}/blog`} className="inline-flex items-center text-gray-600 hover:text-[#F4CE14] mb-4 transition-colors font-medium">
                            <ArrowLeft size={20} className="mr-2" />
                            {t('blog_back')}
                        </a>

                        {/* Breadcrumb Navigation */}
                        <Breadcrumbs
                            items={[
                                {
                                    label: 'Blog',
                                    href: `/${language}/blog`
                                },
                                {
                                    label: localizedTitle
                                }
                            ]}
                            className="mb-6"
                        />

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
                            <div className="p-6 sm:p-8 md:p-12 lg:p-16 bg-white">
                                <style>{`
                                    #blog-content-wrapper {
                                        color: #1a1a1a !important;
                                        font-size: 1.125rem;
                                        line-height: 1.9;
                                        letter-spacing: 0.01em;
                                    }
                                    
                                    #blog-content-wrapper * {
                                        color: #1a1a1a !important;
                                    }
                                    
                                    /* Headings */
                                    #blog-content-wrapper h1 {
                                        font-size: 2.25rem;
                                        font-weight: 800 !important;
                                        color: #000000 !important;
                                        margin-top: 2.5rem;
                                        margin-bottom: 1.5rem;
                                        line-height: 1.3;
                                        border-bottom: 3px solid #F4CE14;
                                        padding-bottom: 0.75rem;
                                    }
                                    
                                    #blog-content-wrapper h2 {
                                        font-size: 1.75rem;
                                        font-weight: 700 !important;
                                        color: #000000 !important;
                                        margin-top: 2.5rem;
                                        margin-bottom: 1.25rem;
                                        line-height: 1.4;
                                        padding-left: 1rem;
                                        border-left: 4px solid #E31E24;
                                    }
                                    
                                    #blog-content-wrapper h3 {
                                        font-size: 1.375rem;
                                        font-weight: 600 !important;
                                        color: #1a1a1a !important;
                                        margin-top: 2rem;
                                        margin-bottom: 1rem;
                                        line-height: 1.4;
                                    }
                                    
                                    #blog-content-wrapper h4 {
                                        font-size: 1.125rem;
                                        font-weight: 600 !important;
                                        color: #1a1a1a !important;
                                        margin-top: 1.5rem;
                                        margin-bottom: 0.75rem;
                                    }
                                    
                                    #blog-content-wrapper strong {
                                        font-weight: 700 !important;
                                        color: #000000 !important;
                                    }
                                    
                                    /* Paragraphs */
                                    #blog-content-wrapper p {
                                        margin-bottom: 1.5rem;
                                        text-align: justify;
                                        text-justify: inter-word;
                                    }
                                    
                                    /* Links */
                                    #blog-content-wrapper a {
                                        color: #E31E24 !important;
                                        text-decoration: none !important;
                                        font-weight: 500;
                                        border-bottom: 2px solid transparent;
                                        transition: all 0.3s ease;
                                    }
                                    
                                    #blog-content-wrapper a:hover {
                                        color: #F4CE14 !important;
                                        border-bottom-color: #F4CE14 !important;
                                    }
                                    
                                    /* Lists */
                                    #blog-content-wrapper ul,
                                    #blog-content-wrapper ol {
                                        margin: 1.5rem 0;
                                        padding-left: 1.5rem;
                                    }
                                    
                                    #blog-content-wrapper ul {
                                        list-style-type: none;
                                    }
                                    
                                    #blog-content-wrapper ul li {
                                        position: relative;
                                        padding-left: 1.5rem;
                                        margin-bottom: 0.875rem;
                                        line-height: 1.7;
                                    }
                                    
                                    #blog-content-wrapper ul li::before {
                                        content: '';
                                        position: absolute;
                                        left: 0;
                                        top: 0.6em;
                                        width: 8px;
                                        height: 8px;
                                        background: linear-gradient(135deg, #E31E24 0%, #F4CE14 100%);
                                        border-radius: 50%;
                                    }
                                    
                                    #blog-content-wrapper ol {
                                        list-style-type: decimal;
                                        counter-reset: item;
                                    }
                                    
                                    #blog-content-wrapper ol li {
                                        margin-bottom: 0.875rem;
                                        line-height: 1.7;
                                        padding-left: 0.5rem;
                                    }
                                    
                                    #blog-content-wrapper ol li::marker {
                                        color: #E31E24;
                                        font-weight: 700;
                                    }
                                    
                                    /* Tables */
                                    #blog-content-wrapper table {
                                        width: 100%;
                                        margin: 2rem 0;
                                        border-collapse: separate;
                                        border-spacing: 0;
                                        border-radius: 12px;
                                        overflow: hidden;
                                        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
                                    }
                                    
                                    #blog-content-wrapper th {
                                        background: linear-gradient(135deg, #1a1a1a 0%, #333333 100%);
                                        color: #ffffff !important;
                                        font-weight: 600;
                                        padding: 1rem 1.25rem;
                                        text-align: left;
                                        font-size: 0.9375rem;
                                        text-transform: uppercase;
                                        letter-spacing: 0.05em;
                                    }
                                    
                                    #blog-content-wrapper td {
                                        padding: 1rem 1.25rem;
                                        border-bottom: 1px solid #e5e7eb;
                                        font-size: 1rem;
                                    }
                                    
                                    #blog-content-wrapper tr:last-child td {
                                        border-bottom: none;
                                    }
                                    
                                    #blog-content-wrapper tr:nth-child(even) {
                                        background-color: #f9fafb;
                                    }
                                    
                                    #blog-content-wrapper tr:hover {
                                        background-color: #fef9c3;
                                        transition: background-color 0.2s ease;
                                    }
                                    
                                    /* Blockquotes */
                                    #blog-content-wrapper blockquote {
                                        margin: 2rem 0;
                                        padding: 1.5rem 2rem;
                                        background: linear-gradient(135deg, #fef9c3 0%, #fef3c7 100%);
                                        border-left: 4px solid #F4CE14;
                                        border-radius: 0 12px 12px 0;
                                        font-style: italic;
                                    }
                                    
                                    /* First paragraph emphasis */
                                    #blog-content-wrapper > p:first-of-type {
                                        font-size: 1.25rem;
                                        font-weight: 500;
                                        color: #374151 !important;
                                        line-height: 1.8;
                                    }
                                    
                                    /* Responsive adjustments */
                                    @media (max-width: 768px) {
                                        #blog-content-wrapper {
                                            font-size: 1rem;
                                            line-height: 1.8;
                                        }
                                        
                                        #blog-content-wrapper h1 {
                                            font-size: 1.75rem;
                                        }
                                        
                                        #blog-content-wrapper h2 {
                                            font-size: 1.5rem;
                                        }
                                        
                                        #blog-content-wrapper h3 {
                                            font-size: 1.25rem;
                                        }
                                        
                                        #blog-content-wrapper p {
                                            text-align: left;
                                        }
                                        
                                        #blog-content-wrapper table {
                                            display: block;
                                            overflow-x: auto;
                                        }
                                        
                                        #blog-content-wrapper th,
                                        #blog-content-wrapper td {
                                            padding: 0.75rem;
                                            font-size: 0.875rem;
                                        }
                                    }
                                    
                                    /* RTL Support for Arabic */
                                    [dir="rtl"] #blog-content-wrapper {
                                        text-align: right;
                                    }
                                    
                                    [dir="rtl"] #blog-content-wrapper h2 {
                                        padding-left: 0;
                                        padding-right: 1rem;
                                        border-left: none;
                                        border-right: 4px solid #E31E24;
                                    }
                                    
                                    [dir="rtl"] #blog-content-wrapper ul li {
                                        padding-left: 0;
                                        padding-right: 1.5rem;
                                    }
                                    
                                    [dir="rtl"] #blog-content-wrapper ul li::before {
                                        left: auto;
                                        right: 0;
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
                                <a key={op.id} href={`/${language}/blog/${op.slug}`} className="group block bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow">
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

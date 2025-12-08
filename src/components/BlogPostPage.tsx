
import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { blogPosts, BlogPost } from '../data/blogPosts';
import { Calendar, User, Tag, ArrowLeft, Share2 } from 'lucide-react';
import { generateUrl } from '../utils/seoConfig';
import { SEOHead } from './SEOHead';

interface BlogPostPageProps {
    slug: string;
}

export const BlogPostPage = ({ slug }: BlogPostPageProps) => {
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
                    <p className="text-xl text-gray-600 mb-8">Aradığınız yazı bulunamadı.</p>
                    <a href="/blog" className="text-[#F4CE14] font-bold hover:underline">Blog Anasayfasına Dön</a>
                </div>
            </div>
        );
    }

    const otherPosts = blogPosts.filter(p => p.id !== post.id).slice(0, 3);

    return (
        <>
            <SEOHead
                title={`${post.title} | MT Makina Blog`}
                description={post.summary}
                keywords={post.tags}
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
                            Blog'a Dön
                        </a>

                        <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-12 border border-gray-100">
                            <div className="relative h-[400px] w-full">
                                <div className="absolute inset-0 bg-black/40 z-10 w-full h-full"></div>
                                <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
                                <div className="absolute bottom-0 left-0 right-0 z-20 p-8 md:p-12 bg-gradient-to-t from-black/90 to-transparent">
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {post.tags.map(tag => (
                                            <span key={tag} className="bg-[#F4CE14] text-[#1E1E1E] text-xs font-bold px-3 py-1 rounded-full">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                    <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight drop-shadow-md">
                                        {post.title}
                                    </h1>
                                    <div className="flex items-center text-white/90 space-x-6 text-sm md:text-base font-medium">
                                        <div className="flex items-center">
                                            <Calendar size={18} className="mr-2 text-[#F4CE14]" />
                                            {post.date}
                                        </div>
                                        <div className="flex items-center">
                                            <User size={18} className="mr-2 text-[#F4CE14]" />
                                            {post.author}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Content Body */}
                            <div className="p-8 md:p-12 bg-white">
                                <div
                                    className="prose prose-lg max-w-none 
                                    prose-headings:font-bold prose-headings:text-gray-900 
                                    prose-p:text-gray-800 prose-p:leading-relaxed
                                    prose-li:text-gray-800 prose-strong:text-gray-900
                                    prose-a:text-[#E31E24] prose-a:no-underline hover:prose-a:underline hover:prose-a:text-[#F4CE14] 
                                    prose-img:rounded-xl prose-img:shadow-lg"
                                    dangerouslySetInnerHTML={{ __html: post.content }}
                                />
                            </div>

                            {/* Footer of Article */}
                            <div className="bg-gray-50 p-8 border-t border-gray-100 mt-8">
                                <div className="flex justify-between items-center">
                                    <span className="font-bold text-gray-700">Bu yazıyı paylaş:</span>
                                    <button className="flex items-center gap-2 bg-[#1E1E1E] text-white px-4 py-2 rounded-lg hover:bg-[#F4CE14] hover:text-[#1E1E1E] transition-colors">
                                        <Share2 size={18} />
                                        Paylaş
                                    </button>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Read Next */}
                {otherPosts.length > 0 && (
                    <div className="container mx-auto px-4 max-w-[1440px] mt-20">
                        <h3 className="text-3xl font-bold text-[#1E1E1E] mb-10 text-center">İlginizi Çekebilecek Diğer Yazılar</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {otherPosts.map((op, idx) => (
                                <a key={op.id} href={`/blog/${op.slug}`} className="group block bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow">
                                    <div className="h-48 overflow-hidden">
                                        <img src={op.image} alt={op.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                                    </div>
                                    <div className="p-6">
                                        <h4 className="text-xl font-bold text-[#1E1E1E] mb-2 group-hover:text-[#F4CE14] transition-colors line-clamp-2">{op.title}</h4>
                                        <p className="text-gray-600 text-sm line-clamp-3">{op.summary}</p>
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

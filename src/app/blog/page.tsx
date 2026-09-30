'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { blogPosts } from '@/lib/blogData';

const categories = ['All', 'Web Dev', '3D Graphics', 'AI/ML', 'Design'];

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory = activeCategory === 'All' || post.category === activeCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: 'spring' as const, stiffness: 100 } }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 pb-20">
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6 text-center max-w-4xl mx-auto">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500 mb-6"
        >
          Insights & Explorations
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-slate-400 text-lg mb-10"
        >
          Diving deep into 3D web development, modern frontend engineering, and the future of user interfaces.
        </motion.p>

        {/* Search Bar (Glassmorphism) */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
          className="relative max-w-md mx-auto"
        >
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <svg className="w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
            </svg>
          </div>
          <input 
            type="text" 
            placeholder="Search articles..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-white/5 border border-white/10 backdrop-blur-md rounded-full py-3 pl-10 pr-4 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all"
          />
        </motion.div>
      </section>

      {/* Category Filters */}
      <div className="flex flex-wrap justify-center gap-3 px-6 mb-12">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
              activeCategory === cat 
                ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/30' 
                : 'bg-white/5 text-slate-300 hover:bg-white/10'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Blog Grid */}
      <main className="max-w-7xl mx-auto px-6">
        {filteredPosts.length > 0 ? (
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredPosts.map((post) => (
              <motion.article 
                key={post.id} 
                variants={itemVariants}
                className="group relative bg-slate-900 rounded-2xl overflow-hidden border border-slate-800 hover:border-transparent transition-all duration-300"
              >
                {/* Gradient Hover Border Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 opacity-0 group-hover:opacity-10 transition-opacity duration-500 z-0"></div>
                
                <Link href={`/blog/${post.slug}`} className="relative z-10 block h-full flex flex-col">
                  {/* Image Placeholder */}
                  <div className="h-48 w-full bg-gradient-to-br from-slate-800 to-slate-900 relative">
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-black/50 backdrop-blur-sm rounded-full text-xs font-semibold text-blue-400 border border-white/10">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6 flex flex-col flex-grow">
                    <h2 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-slate-400 text-sm mb-6 flex-grow">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-800">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-slate-700 flex items-center justify-center text-xs font-bold">
                          {post.author.name.charAt(0)}
                        </div>
                        <div className="text-xs">
                          <p className="text-slate-200 font-medium">{post.author.name}</p>
                          <p className="text-slate-500">{post.date}</p>
                        </div>
                      </div>
                      <span className="text-xs text-slate-500">{post.readTime}</span>
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </motion.div>
        ) : (
          <div className="text-center py-20 text-slate-400">
            <p>No articles found matching your criteria.</p>
          </div>
        )}

        {/* Pagination */}
        {filteredPosts.length > 0 && (
          <div className="mt-16 flex justify-center items-center gap-4">
            <button className="px-6 py-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:bg-slate-800 transition-colors disabled:opacity-50">
              Previous
            </button>
            <span className="text-slate-500">Page 1 of 1</span>
            <button className="px-6 py-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:bg-slate-800 transition-colors disabled:opacity-50">
              Next
            </button>
          </div>
        )}
      </main>
    </div>
  );
}

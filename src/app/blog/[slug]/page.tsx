import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { blogPosts } from '@/lib/blogData';

// Generate static params for all blog posts
export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  // Get related posts (just taking 3 other posts for sample)
  const relatedPosts = blogPosts.filter(p => p.id !== post.id).slice(0, 3);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200">
      {/* Hero Section */}
      <div className="w-full bg-slate-900 border-b border-slate-800 pt-32 pb-16 px-6">
        <div className="max-w-4xl mx-auto">
          <Link href="/blog" className="inline-flex items-center text-blue-400 hover:text-blue-300 text-sm font-medium mb-8 transition-colors">
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
            </svg>
            Back to Blog
          </Link>
          
          <div className="flex items-center gap-4 mb-6">
            <span className="px-3 py-1 bg-blue-500/10 text-blue-400 border border-blue-500/20 rounded-full text-sm font-semibold">
              {post.category}
            </span>
            <span className="text-slate-400 text-sm flex items-center gap-1">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              {post.readTime}
            </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            {post.title}
          </h1>
          
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center text-lg font-bold text-white">
              {post.author.name.charAt(0)}
            </div>
            <div>
              <p className="text-white font-medium">{post.author.name}</p>
              <p className="text-slate-400 text-sm">{post.author.role} • {post.date}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col lg:flex-row gap-12">
        
        {/* Main Content */}
        <main className="w-full lg:w-2/3 xl:w-3/4">
          <article className="prose prose-invert prose-lg max-w-none prose-headings:text-slate-100 prose-a:text-blue-400 prose-pre:bg-slate-900 prose-pre:border prose-pre:border-slate-800">
            {/* If content is defined, use dangerouslySetInnerHTML for HTML content */}
            {post.content ? (
              <div dangerouslySetInnerHTML={{ __html: post.content }} />
            ) : (
              <p>Content for this article is coming soon.</p>
            )}
          </article>
          
          {/* Share Buttons */}
          <div className="mt-12 pt-8 border-t border-slate-800 flex items-center gap-4">
            <span className="text-slate-400 font-medium">Share this article:</span>
            <button className="p-2 rounded-full bg-slate-900 hover:bg-blue-600 hover:text-white transition-colors border border-slate-800">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
            </button>
            <button className="p-2 rounded-full bg-slate-900 hover:bg-blue-700 hover:text-white transition-colors border border-slate-800">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
            </button>
            <button className="p-2 rounded-full bg-slate-900 hover:bg-slate-700 hover:text-white transition-colors border border-slate-800">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"></path></svg>
            </button>
          </div>
        </main>

        {/* Sidebar */}
        <aside className="w-full lg:w-1/3 xl:w-1/4">
          <div className="sticky top-24">
            <h3 className="text-lg font-bold text-white mb-4">Table of Contents</h3>
            <ul className="space-y-3 text-sm text-slate-400 border-l border-slate-800 pl-4">
              <li><a href="#" className="hover:text-blue-400 transition-colors">Introduction</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Setting up the Scene</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Adding Geometries</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Conclusion</a></li>
            </ul>

            <div className="mt-12">
              <h3 className="text-lg font-bold text-white mb-6">Tags</h3>
              <div className="flex flex-wrap gap-2">
                {post.tags.map(tag => (
                  <span key={tag} className="px-3 py-1 bg-slate-900 border border-slate-800 rounded-full text-xs text-slate-300">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </aside>
      </div>

      {/* Related Posts */}
      <div className="bg-slate-900 border-t border-slate-800 py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-8">Related Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedPosts.map(related => (
              <Link key={related.id} href={`/blog/${related.slug}`} className="group block bg-slate-950 rounded-xl overflow-hidden border border-slate-800 hover:border-slate-700 transition-colors">
                <div className="h-32 bg-gradient-to-br from-slate-800 to-slate-900"></div>
                <div className="p-5">
                  <span className="text-xs font-semibold text-blue-400 mb-2 block">{related.category}</span>
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-blue-400 transition-colors line-clamp-2">{related.title}</h3>
                  <p className="text-sm text-slate-500">{related.date}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

'use client';

import { useState } from 'react'; // Import useState
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { blogPosts } from '@/data/blogPost';

export default function Blog() {
  const [searchTerm, setSearchTerm] = useState('');

  // 1. Sort posts: Newest first
  const sortedPosts = [...blogPosts].reverse();

  // 2. Filter posts based on Search Term
  const filteredPosts = sortedPosts.filter((post) => {
    const term = searchTerm.toLowerCase();
    return (
      post.title.toLowerCase().includes(term) ||
      post.category.toLowerCase().includes(term)
    );
  });

  // 3. Define Featured vs Grid
  // If searching, we don't separate a "Featured" post; we just show matches.
  const isSearching = searchTerm.length > 0;
  const featuredPost = sortedPosts[0];
  const gridPosts = isSearching ? filteredPosts : sortedPosts.slice(1);

  return (
    <>
      <Head>
        <title>Blog – Design Inspired</title>
      </Head>

      <div className="bg-black text-white min-h-screen mt-16 pt-8 pb-20">
        <main className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
          
          {/* Header & Search Bar */}
          <div className="flex flex-col sm:flex-row justify-between items-end gap-4 mb-12">
            <div>
              <h1 className="text-3xl sm:text-4xl font-bold">Our Blog</h1>
              <p className="text-gray-400 mt-2">Latest news, updates, and guides.</p>
            </div>
            
            <div className="relative w-full sm:w-72">
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-gray-900 border border-gray-800 text-white px-4 py-2 pl-10 rounded-lg focus:outline-none focus:border-blue-500 transition-colors"
              />
              {/* Search Icon SVG */}
              <svg 
                className="w-5 h-5 text-gray-400 absolute left-3 top-2.5" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>

          {/* Featured Post (Only show if NOT searching) */}
          {!isSearching && (
            <section className="mb-16">
              <h2 className="text-xl text-blue-400 font-semibold mb-4 uppercase tracking-wider">Featured Post</h2>

              <Link
                href={`/blog/${featuredPost.slug}`}
                className="block relative rounded-xl overflow-hidden group border border-gray-800 hover:border-blue-500/50 transition-colors"
              >
                <div className="relative w-full h-[400px] sm:h-[500px]">
                  <Image
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    fill
                    className="object-cover object-left-top transition-transform duration-500 group-hover:scale-105"
                    priority
                  />
                </div>
                
                <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black via-black/90 to-transparent p-6 sm:p-10 pt-20">
                  <div className="max-w-2xl">
                    <span className="inline-block bg-blue-600 text-white text-xs px-2 py-1 rounded mb-3">
                      {featuredPost.category}
                    </span>
                    <h3 className="text-2xl sm:text-4xl font-bold leading-tight mb-2">
                      {featuredPost.title}
                    </h3>
                    <p className="text-gray-300 mb-4 line-clamp-2 sm:line-clamp-none">
                      {featuredPost.description.substring(0, 150)}...
                    </p>
                    <span className="text-blue-400 font-medium group-hover:underline decoration-blue-500 underline-offset-4">
                      Read Article →
                    </span>
                  </div>
                </div>
              </Link>
            </section>
          )}

          {/* Blog Grid Results */}
          <section>
             {isSearching && (
               <h2 className="text-xl mb-6">
                 {filteredPosts.length > 0 
                   ? `Found ${filteredPosts.length} result${filteredPosts.length === 1 ? '' : 's'}` 
                   : 'No articles found matching your search.'}
               </h2>
             )}

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {gridPosts.map((post, index) => (
                <div
                  key={post.slug}
                  className="bg-gray-900 border border-gray-800 rounded-xl overflow-hidden shadow-lg hover:border-blue-500/30 transition-all hover:-translate-y-1 group"
                >
                  <Link href={`/blog/${post.slug}`} className="block relative h-56 bg-black">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-contain object-center p-2 transition-transform duration-300 group-hover:scale-105"
                    />
                  </Link>

                  <div className="p-6">
                    <div className="flex items-center justify-between text-xs text-blue-400 mb-3 font-medium uppercase tracking-wider">
                      <span>{post.category}</span>
                      <span className="text-gray-500">{post.date}</span>
                    </div>
                    
                    <h4 className="text-lg font-bold leading-snug mb-3 line-clamp-2">
                      <Link
                        href={`/blog/${post.slug}`}
                        className="group-hover:text-blue-400 transition-colors"
                      >
                        {post.title}
                      </Link>
                    </h4>

                    <Link
                      href={`/blog/${post.slug}`}
                      className="text-sm font-semibold text-gray-400 group-hover:text-white transition-colors inline-flex items-center gap-1"
                    >
                      Read More <span>→</span>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </section>

        </main>
      </div>
    </>
  );
}
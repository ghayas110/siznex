'use client';

import Head from 'next/head';
import Image from 'next/image';

const blogPosts = [
  {
    title: 'The Future of AI in Web Design',
    date: 'April 18, 2024',
    category: 'Artificial Intelligence',
    image: '/project01.webp',
  },
  {
    title: 'Web Design Trends to Embrace in 2024',
    date: 'March 25, 2024',
    category: 'Web Design',
    image: '/project02.webp',
  },
  {
    title: 'Design Principles for Dark Mode Websites',
    date: 'March 8, 2024',
    category: 'Design',
    image: '/project03.jpg',
  },

];

export default function Blog() {
  return (
  

      <div className="text-black bg-white min-h-screen mt-7">
        <main className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
          {/* Featured Post */}
          <section className="mb-16">
            <h2 className="text-2xl sm:text-3xl font-semibold mb-6">Featured Post</h2>
            <div className="relative rounded-lg overflow-hidden">
              <Image
                src={blogPosts[0].image}
                alt={blogPosts[0].title}
                width={1200}
                height={600}
                className="w-full h-auto object-cover"
              />
              <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 bg-black/60 p-4 rounded-lg max-w-xs sm:max-w-sm">
                <h3 className="text-lg sm:text-2xl font-bold">{blogPosts[0].title}</h3>
                <p className="text-xs sm:text-sm text-gray-300 mt-1">
                  {blogPosts[0].date} · {blogPosts[0].category}
                </p>
              </div>
            </div>
          </section>

          {/* Blog Grid */}
          <section className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {blogPosts.slice(1).map((post, index) => (
              <div
                key={index}
                className="bg-gray-900 rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-[1.01]"
              >
                <Image
                  src={post.image}
                  alt={post.title}
                  width={600}
                  height={300}
                  className="w-full h-48 object-cover"
                />
                <div className="p-5">
                  <h4 className="text-lg sm:text-xl font-semibold mb-2">{post.title}</h4>
                  <p className="text-sm text-gray-400">{post.date} · {post.category}</p>
                </div>
              </div>
            ))}
          </section>
        </main>
      </div>
  
  );
}

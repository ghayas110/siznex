import { blogPosts } from "@/data/blogPost";
import Image from "next/image";
import React from "react";

interface BlogPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogDetailPage({ params }: BlogPageProps) {
  const { slug } = await params;

  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="bg-black text-white min-h-screen flex justify-center items-center">
        <h2 className="text-3xl font-semibold">Blog Not Found</h2>
      </div>
    );
  }

  // --- Helper to format text ---
  // This splits the string by newlines so we can style paragraphs and bullets separately
  const renderFormattedText = (text: string) => {
    return text.split('\n').map((line, index) => {
      const trimmedLine = line.trim();

      // 1. Handle Empty Lines (Double spacing)
      if (!trimmedLine) {
        return <div key={index} className="h-4" />; 
      }

      // 2. Handle Bullet Points (lines starting with •)
      if (trimmedLine.startsWith('•')) {
        return (
          <div key={index} className="flex items-start gap-3 ml-4 mb-2">
            <span className="text-blue-500 mt-1.5">•</span>
            <p className="text-gray-300 leading-relaxed m-0">
              {trimmedLine.substring(1).trim()}
            </p>
          </div>
        );
      }

      // 3. Handle Section Headers (Optional heuristic: short lines without punctuation might be headers)
      // You can adjust the length check (e.g., < 60 chars) to detect "titles" inside the text
      if (trimmedLine.length < 80 && !trimmedLine.endsWith('.') && !trimmedLine.endsWith(':')) {
         return (
            <h3 key={index} className="text-xl font-bold text-white mt-8 mb-4">
              {trimmedLine}
            </h3>
         );
      }

      // 4. Default Paragraph
      return (
        <p key={index} className="mb-4 text-gray-300 leading-7">
          {trimmedLine}
        </p>
      );
    });
  };

  return (
    <div className="bg-black text-white min-h-screen mt-7">
      <div className="max-w-3xl mx-auto px-5 py-12 md:py-20">

        {/* Header: Category + Date */}
        <div className="flex items-center gap-3 text-sm mb-6">
          <span className="px-3 py-1 bg-blue-600/20 text-blue-400 border border-blue-500/30 rounded-full font-medium">
            {post.category}
          </span>
          <span className="text-gray-500">•</span>
          <span className="text-gray-400">{post.date}</span>
        </div>

        {/* Main Title */}
        <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-8">
          {post.title}
        </h1>

        {/* Featured Image */}
        <div className="relative w-full aspect-video overflow-hidden rounded-2xl mb-12 border border-gray-800 bg-gray-900">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-contain object-center"
            priority
          />
        </div>

        {/* Dynamic Content */}
        <div className="prose prose-invert prose-lg max-w-none">
          {/* This replaces the single <p> tag */}
          {renderFormattedText(post.description)}
          
          {/* Static Footer Content (Optional - Keep only if relevant for ALL posts) */}
          <div className="mt-12 pt-8 border-t border-gray-800">
            <h2 className="text-2xl font-bold text-white mb-4">
              Why This Matters
            </h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              Understanding these fundamentals helps business owners improve visibility,
              conversions, customer satisfaction, and long-term business performance.
            </p>

            <h3 className="text-xl font-bold text-white mb-4">
              Final Thoughts
            </h3>
            <p className="text-gray-300 leading-relaxed">
              Stay consistent, optimize your strategies, and keep refining your approach to succeed.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}
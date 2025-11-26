import { blogPosts } from "@/data/blogPost";
import Image from "next/image";

interface BlogPageProps {
  params: { slug: string };
}

export default function BlogDetailPage({ params }: BlogPageProps) {
  const { slug } = params;

  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="bg-black text-white min-h-screen flex justify-center items-center">
        <h2 className="text-3xl font-semibold">Blog Not Found</h2>
      </div>
    );
  }

  return (
    <div className="bg-black text-white min-h-screen px-5 pt-24 pb-20">
      <div className="max-w-3xl mx-auto">

        {/* Category + Date */}
        <div className="flex items-center gap-4 text-sm text-gray-300 mb-4">
          <span className="px-3 py-1 bg-gray-800 border border-gray-700 rounded-md text-gray-300">
            {post.category}
          </span>
          <span className="text-gray-400">{post.date}</span>
        </div>

        {/* Title */}
        <h1 className="text-4xl font-bold text-white leading-snug mb-6">
          {post.title}
        </h1>

        {/* Image */}
        <div className="w-full overflow-hidden rounded-xl mb-10 shadow-lg shadow-gray-900">
          <Image
            src={post.image}
            alt={post.title}
            width={900}
            height={500}
            className="w-full object-cover rounded-xl"
          />
        </div>

        {/* Content */}
        <div className="prose prose-invert prose-lg max-w-none text-gray-300 leading-relaxed">
          <p className="mb-6">{post.description}</p>

          <h2 className="text-2xl font-semibold text-white mt-10">
            Why This Topic Matters
          </h2>
          <p className="text-gray-300 mt-3">
            Understanding Amazon fundamentals helps sellers improve visibility,
            conversions, customer satisfaction, and long-term business performance.
          </p>

          <h3 className="text-xl font-semibold text-white mt-10">
            Final Thoughts
          </h3>
          <p className="text-gray-300 mt-3">
            Stay consistent, optimize your product listings, learn marketplace
            trends, and keep refining your strategies to succeed on Amazon.
          </p>
        </div>

      </div>
    </div>
  );
}

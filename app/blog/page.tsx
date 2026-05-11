/**
 * Blog System - Blog Home
 */

import { Metadata } from 'next';
import Link from 'next/link';
import { PageLayout } from '@/components/layout/Layout';
import { AdBannerTop, AdBannerMiddle } from '@/components/ads/AdUnits';

export const metadata: Metadata = {
  title: 'Blog - SEO Tips, Content Optimization & Tool Guides',
  description: 'Read our blog for SEO best practices, content optimization tips, and guides on using our tools effectively.',
};

// Sample blog posts
const BLOG_POSTS = [
  {
    id: 1,
    slug: 'what-is-keyword-density',
    title: 'What Is Keyword Density and Why Does It Matter for SEO?',
    description: 'Learn everything about keyword density, its importance for SEO, and how to optimize your content.',
    category: 'SEO',
    date: '2024-01-15',
    readTime: '5 min read',
    image: '📊',
  },
  {
    id: 2,
    slug: 'optimize-images-for-seo',
    title: 'How to Optimize Images for SEO and Web Performance',
    description: 'Complete guide to image optimization including sizing, compression, and metadata.',
    category: 'SEO',
    date: '2024-01-14',
    readTime: '7 min read',
    image: '🖼️',
  },
  {
    id: 3,
    slug: 'word-count-seo-impact',
    title: 'Does Word Count Really Impact SEO Rankings?',
    description: 'Explore the relationship between article length and search engine rankings.',
    category: 'SEO',
    date: '2024-01-13',
    readTime: '6 min read',
    image: '📝',
  },
  {
    id: 4,
    slug: 'content-optimization-checklist',
    title: 'Ultimate Content Optimization Checklist for 2024',
    description: 'A comprehensive checklist to optimize all aspects of your content.',
    category: 'Content',
    date: '2024-01-12',
    readTime: '8 min read',
    image: '✅',
  },
  {
    id: 5,
    slug: 'free-seo-tools-guide',
    title: 'Complete Guide to Free SEO Tools for Content Creators',
    description: 'Discover the best free SEO tools and how to use them effectively.',
    category: 'Tools',
    date: '2024-01-11',
    readTime: '9 min read',
    image: '🛠️',
  },
  {
    id: 6,
    slug: 'blog-seo-best-practices',
    title: 'Blog SEO Best Practices: A Complete Guide',
    description: 'Learn the best practices for optimizing your blog for search engines.',
    category: 'SEO',
    date: '2024-01-10',
    readTime: '10 min read',
    image: '📚',
  },
];

export default function BlogPage() {
  const categories = ['All', 'SEO', 'Content', 'Tools'];

  return (
    <PageLayout>
      {/* Header */}
      <div className="tool-header">
        <div className="container-section">
          <h1 className="tool-title">Our Blog</h1>
          <p className="tool-subtitle">
            SEO tips, content strategies, and guides to help you succeed
          </p>
        </div>
      </div>

      <div className="container-section py-12">
        {/* Top Ad */}
        <AdBannerTop />

        {/* Category Filter */}
        <div className="my-8">
          <div className="flex flex-wrap gap-2">
            {categories.map(cat => (
              <button
                key={cat}
                className={`px-4 py-2 rounded-lg font-medium transition ${
                  cat === 'All'
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Featured Post */}
        <div className="my-12 card bg-gradient-to-r from-blue-50 to-indigo-50 border-2 border-blue-200">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
            <div className="text-6xl text-center md:text-left">{BLOG_POSTS[0].image}</div>
            <div className="md:col-span-2">
              <span className="badge">Featured</span>
              <h2 className="text-3xl font-bold my-4">{BLOG_POSTS[0].title}</h2>
              <p className="text-gray-700 mb-4">{BLOG_POSTS[0].description}</p>
              <div className="flex items-center gap-4 mb-4">
                <span className="text-sm text-gray-600">{BLOG_POSTS[0].date}</span>
                <span className="text-sm text-gray-600">•</span>
                <span className="text-sm text-gray-600">{BLOG_POSTS[0].readTime}</span>
              </div>
              <Link href={`/blog/${BLOG_POSTS[0].slug}`} className="btn-primary">
                Read Article →
              </Link>
            </div>
          </div>
        </div>

        {/* Middle Ad */}
        <AdBannerMiddle />

        {/* Blog Posts Grid */}
        <div className="my-12">
          <h2 className="text-3xl font-bold mb-8">Latest Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {BLOG_POSTS.slice(1).map(post => (
              <Link
                key={post.id}
                href={`/blog/${post.slug}`}
                className="card group hover:shadow-lg transition"
              >
                <div className="text-4xl mb-4">{post.image}</div>
                <span className="inline-block badge mb-3">{post.category}</span>
                <h3 className="text-xl font-bold group-hover:text-blue-600 transition mb-3">
                  {post.title}
                </h3>
                <p className="text-gray-700 text-sm mb-4">{post.description}</p>
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <span>{post.date}</span>
                  <span>{post.readTime}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Subscribe Section */}
        <section className="my-12 bg-blue-50 border border-blue-200 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Stay Updated</h2>
          <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
            Subscribe to our newsletter to get the latest SEO tips, tool updates, and content strategies delivered to your inbox.
          </p>
          <div className="flex gap-2 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email..."
              className="flex-1 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
            <button className="btn-primary">Subscribe</button>
          </div>
        </section>
      </div>
    </PageLayout>
  );
}

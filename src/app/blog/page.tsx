"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Modal } from "@/components/ui/Modal";
import { QuoteForm } from "@/components/QuoteForm";
import { BLOG_POSTS, BLOG_CATEGORIES } from "@/data/blogs";
import { BlogCategory } from "@/types/blog";
import { Calendar, Clock, ArrowRight } from "lucide-react";

export default function BlogPage() {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<BlogCategory | "all">("all");

  const filteredPosts = selectedCategory === "all"
    ? BLOG_POSTS
    : BLOG_POSTS.filter(post => post.category === selectedCategory);

  return (
    <main className="min-h-screen bg-white font-sans">
      <Navbar onOpenQuote={() => setIsQuoteOpen(true)} />

      {/* Hero Section */}
      <section className="pt-40 pb-16 text-center bg-linear-to-br from-brand-dark via-gray-900 to-black relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,77,21,0.1),transparent_50%)]" />
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <h1 className="text-5xl md:text-7xl font-extrabold uppercase tracking-tight mb-6">
            <span className="text-white">Blogs & </span>
            <span className="text-brand-orange">Insights</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Expert guides, industry insights, and success stories to help your clothing brand thrive with custom patches.
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-12 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-4 justify-center items-center">
            <button
              onClick={() => setSelectedCategory("all")}
              className={`px-8 py-3 rounded-lg font-bold text-sm uppercase tracking-wide transition-all duration-300 ${
                selectedCategory === "all"
                  ? "bg-brand-orange text-white shadow-lg hover:bg-brand-red"
                  : "bg-gray-100 text-brand-dark border-2 border-gray-200 hover:border-brand-orange hover:bg-white"
              }`}
            >
              All Posts
            </button>
            {BLOG_CATEGORIES.map((category) => (
              <button
                key={category.slug}
                onClick={() => setSelectedCategory(category.slug)}
                className={`px-6 py-3 rounded-lg font-semibold text-sm transition-all duration-300 whitespace-nowrap ${
                  selectedCategory === category.slug
                    ? "bg-brand-orange text-white shadow-lg hover:bg-brand-red"
                    : "bg-gray-100 text-brand-dark border-2 border-gray-200 hover:border-brand-orange hover:bg-white"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredPosts.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-xl text-gray-500">No posts found in this category.</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <Link key={post.id} href={`/blog/${post.slug}`}>
                  <article className="group h-full flex flex-col bg-brand-dark rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-800 hover:-translate-y-1">
                    {/* Image */}
                    <div className="relative h-56 w-full overflow-hidden bg-gray-800">
                      <Image
                        src={post.image}
                        alt={post.imageAlt}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      {post.featured && (
                        <div className="absolute top-4 left-4 bg-brand-orange text-white px-3 py-1 rounded-full text-xs font-bold uppercase">
                          Featured
                        </div>
                      )}
                    </div>

                    {/* Content */}
                    <div className="flex-1 flex flex-col p-6">
                      {/* Category Badge */}
                      <div className="mb-3">
                        <span className="inline-block px-3 py-1 bg-gray-800 text-brand-orange text-xs font-semibold rounded-full uppercase">
                          {BLOG_CATEGORIES.find(c => c.slug === post.category)?.name}
                        </span>
                      </div>

                      {/* Title */}
                      <h2 className="text-xl font-bold text-white mb-3 line-clamp-2 group-hover:text-brand-orange transition-colors">
                        {post.title}
                      </h2>

                      {/* Excerpt */}
                      <p className="text-gray-400 text-sm leading-relaxed mb-4 line-clamp-3 flex-1">
                        {post.excerpt}
                      </p>

                      {/* Meta Info */}
                      <div className="flex items-center justify-between text-xs text-gray-500 pt-4 border-t border-gray-800">
                        <div className="flex items-center gap-4">
                          <div className="flex items-center gap-1">
                            <Calendar className="w-3.5 h-3.5" />
                            <span>{new Date(post.publishDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="w-3.5 h-3.5" />
                            <span>{post.readTime}</span>
                          </div>
                        </div>
                        <ArrowRight className="w-4 h-4 text-brand-orange group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-linear-to-r from-brand-dark to-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Start Your <span className="text-brand-orange">Patch Project?</span>
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            Get a custom quote for your clothing brand today. Rush delivery available in 4-7 days.
          </p>
          <button
            onClick={() => setIsQuoteOpen(true)}
            className="bg-white hover:bg-brand-orange text-black hover:text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 hover:scale-105 shadow-lg"
          >
            Get Custom Quote
          </button>
        </div>
      </section>

      <Modal isOpen={isQuoteOpen} onClose={() => setIsQuoteOpen(false)}>
        <div className="mb-6 text-center">
          <h2 className="text-2xl font-bold">
            <span className="text-white">Unlock </span>
            <span className="text-brand-orange">Special Rates</span>
          </h2>
          <p className="mt-2 text-sm text-gray-400">
            Fill out the details below and attach your design.
          </p>
        </div>
        <QuoteForm />
      </Modal>

      <Footer />
    </main>
  );
}

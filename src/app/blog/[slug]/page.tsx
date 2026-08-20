"use client";

import { useState, useEffect } from "react";
import { useParams, notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Modal } from "@/components/ui/Modal";
import { QuoteForm } from "@/components/QuoteForm";
import { BlogContent } from "@/components/BlogContent";
import { getBlogBySlug, getRelatedBlogs, BLOG_CATEGORIES } from "@/data/blogs";
import { Calendar, Clock, User, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/Button";

export default function BlogPostPage() {
  const params = useParams();
  const slug = params?.slug as string;
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  const post = getBlogBySlug(slug);
  const relatedPosts = post ? getRelatedBlogs(slug, 3) : [];

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!post) {
    notFound();
  }

  const category = BLOG_CATEGORIES.find(c => c.slug === post.category);

  // Generate article schema for SEO
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "description": post.description,
    "image": post.image,
    "datePublished": post.publishDate,
    "dateModified": post.publishDate,
    "author": {
      "@type": "Organization",
      "name": post.author.name,
    },
    "publisher": {
      "@type": "Organization",
      "name": "Panda Patches",
      "logo": {
        "@type": "ImageObject",
        "url": "/assets/logo.png",
      },
    },
  };

  return (
    <>
      {isMounted && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
        />
      )}

      <main className="min-h-screen bg-white font-sans">
        <Navbar onOpenQuote={() => setIsQuoteOpen(true)} />

        {/* Breadcrumb */}
        <div className="pt-32 pb-8 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-2 text-sm text-gray-600 overflow-x-auto">
              <Link href="/" className="hover:text-brand-orange transition-colors whitespace-nowrap">Home</Link>
              <span className="shrink-0">/</span>
              <Link href="/blog" className="hover:text-brand-orange transition-colors whitespace-nowrap">Blog</Link>
              <span className="shrink-0">/</span>
              <Link href={`/blog?category=${post.category}`} className="hover:text-brand-orange transition-colors whitespace-nowrap">
                {category?.name}
              </Link>
              <span className="shrink-0">/</span>
              <span className="text-brand-dark font-medium truncate">{post.title}</span>
            </div>
          </div>
        </div>

        {/* Hero Section */}
        <article className="pb-16">
          <header className="bg-gray-50 pb-12">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              {/* Category Badge */}
              <div className="mb-6">
                <Link href={`/blog?category=${post.category}`}>
                  <span className="inline-block px-4 py-1.5 bg-brand-orange text-white text-sm font-semibold rounded-full uppercase hover:bg-brand-red transition-colors">
                    {category?.icon} {category?.name}
                  </span>
                </Link>
              </div>

              {/* Title */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-brand-dark mb-6 leading-tight">
                {post.title}
              </h1>

              {/* Meta Info */}
              <div className="flex flex-wrap items-center gap-6 text-gray-600 mb-8">
                <div className="flex items-center gap-2">
                  <User className="w-5 h-5" />
                  <span className="font-medium">{post.author.name}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-5 h-5" />
                  <span>{new Date(post.publishDate).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5" />
                  <span>{post.readTime}</span>
                </div>
              </div>

              {/* Excerpt */}
              <p className="text-xl text-gray-600 leading-relaxed">
                {post.excerpt}
              </p>
            </div>
          </header>

          {/* Featured Image */}
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 mb-12">
            <div className="relative h-96 w-full rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src={post.image}
                alt={post.imageAlt}
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* Content */}
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <BlogContent content={post.content} post={post} />

            {/* CTA Box */}
            <div className="mt-16 bg-black rounded-2xl p-8 md:p-12 text-center text-white shadow-xl">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to Create Your Custom Patches?
              </h2>
              <p className="text-lg mb-8 text-white/90 max-w-2xl mx-auto">
                Get a custom quote for your clothing brand. We offer rush delivery in 4-7 days and US quality standards.
              </p>
              <Button
                size="lg"
                onClick={() => setIsQuoteOpen(true)}
                className="bg-brand-orange text-white hover:bg-brand-red font-bold"
              >
                Get Custom Quote
              </Button>
            </div>

            {/* Author Bio */}
            <div className="mt-12 p-6 bg-gray-50 rounded-xl border border-gray-200">
              <div className="flex items-start gap-4">
                <div className="relative w-16 h-16 rounded-full overflow-hidden shrink-0">
                  <Image
                    src={post.author.avatar}
                    alt={post.author.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-brand-dark mb-1">{post.author.name}</h3>
                  <p className="text-sm text-brand-orange font-semibold mb-2">{post.author.role}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">{post.author.bio}</p>
                </div>
              </div>
            </div>

            {/* Tags */}
            {post.tags.length > 0 && (
              <div className="mt-12 pt-8 border-t border-gray-200">
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full hover:bg-gray-200 transition-colors"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </article>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <section className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                <span className="text-brand-dark">Related </span>
                <span className="text-brand-orange">Articles</span>
              </h2>

              <div className="grid md:grid-cols-3 gap-8">
                {relatedPosts.map((relatedPost) => (
                  <Link key={relatedPost.id} href={`/blog/${relatedPost.slug}`}>
                    <article className="group h-full flex flex-col bg-brand-dark rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border border-gray-800">
                      <div className="relative h-48 w-full overflow-hidden bg-gray-800">
                        <Image
                          src={relatedPost.image}
                          alt={relatedPost.imageAlt}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                      </div>
                      <div className="flex-1 flex flex-col p-6">
                        <h3 className="text-lg font-bold text-white mb-2 line-clamp-2 group-hover:text-brand-orange transition-colors">
                          {relatedPost.title}
                        </h3>
                        <p className="text-gray-400 text-sm line-clamp-2 mb-4 flex-1">
                          {relatedPost.excerpt}
                        </p>
                        <div className="flex items-center text-xs text-gray-500">
                          <Clock className="w-3.5 h-3.5 mr-1" />
                          <span>{relatedPost.readTime}</span>
                        </div>
                      </div>
                    </article>
                  </Link>
                ))}
              </div>

              <div className="text-center mt-12">
                <Link href="/blog">
                  <Button variant="outline" size="lg">
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    View All Articles
                  </Button>
                </Link>
              </div>
            </div>
          </section>
        )}

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
    </>
  );
}

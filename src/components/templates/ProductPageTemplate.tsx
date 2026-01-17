"use client";

import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Check } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SpecialRates } from "@/components/SpecialRates"; // Reuse the bottom form
import { ProductGallery } from "@/components/ProductGallery";
import { RelatedProducts } from "@/components/RelatedProducts";
import { BottomCTA } from "@/components/BottomCTA";
import { useState } from "react";
import { Modal } from "@/components/ui/Modal";
import { QuoteForm } from "@/components/QuoteForm";
import Lightbox from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";

interface ProductPageProps {
  title: string;
  subtitle: string;
  description: string;
  heroImage: string;
  galleryImages: string[];
  features: string[];
  faqs: { q: string; a: string }[];
  masterpieceImages: string[];
  relatedBlogPosts?: { title: string; url: string; description: string }[];
}

export function ProductPageTemplate({
  title,
  subtitle,
  description,
  heroImage,
  galleryImages,
  features,
  faqs,
  masterpieceImages,
  relatedBlogPosts
}: ProductPageProps) {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  // Simple state for active image in gallery
  const [activeImage, setActiveImage] = useState(heroImage);
  // Lightbox state
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  // Combine all images for lightbox
  const allImages = [heroImage, ...galleryImages];
  const lightboxSlides = allImages.map((src) => ({ src }));

  const openLightbox = (imageUrl: string) => {
    const index = allImages.findIndex((img) => img === imageUrl);
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  return (
    <main className="min-h-screen bg-white font-sans">
      <Navbar onOpenQuote={() => setIsQuoteOpen(true)} />

      {/* --- HERO SECTION --- */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-24">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            
            {/* LEFT: GALLERY */}
            <div className="flex flex-col-reverse lg:flex-row gap-4">
              {/* Thumbnails (Vertical on Desktop, Horizontal on Mobile) */}
              <div className="flex lg:flex-col gap-4 overflow-x-auto lg:overflow-visible">
                {[heroImage, ...galleryImages].map((img, idx) => (
                  <div
                    key={idx}
                    onClick={() => {
                      setActiveImage(img);
                      openLightbox(img);
                    }}
                    className={`relative w-20 h-20 lg:w-24 lg:h-24 shrink-0 rounded-lg overflow-hidden cursor-pointer border-2 transition-all group ${activeImage === img ? 'border-brand-orange' : 'border-gray-200 hover:border-brand-orange/50'}`}
                  >
                    <Image src={img} alt="Thumbnail" fill className="object-cover group-hover:scale-110 transition-transform duration-300" />

                    {/* Zoom Icon Overlay */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <svg className="w-6 h-6 text-white drop-shadow-lg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Main Image */}
              <div
                onClick={() => openLightbox(activeImage)}
                className="relative flex-1 aspect-square lg:aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl bg-gray-100 cursor-pointer group"
              >
                <Image src={activeImage} alt={title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" priority />

                {/* Zoom Hint Overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <svg className="w-16 h-16 text-white drop-shadow-lg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT: DETAILS */}
            <div className="flex flex-col items-start space-y-8 sticky top-24">
              <div>
                <h1 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight">
                  <span className="text-brand-dark">Custom </span>
                  <span className="text-brand-orange">{title.replace('Custom ', '')}</span>
                </h1>
                <p className="text-lg font-medium text-brand-orange uppercase tracking-wide">
                  {subtitle}
                </p>
              </div>

              <p className="text-gray-600 text-lg leading-relaxed">
                {description}
              </p>

              {/* Feature Bullets */}
              <ul className="space-y-3">
                {features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-brand-dark font-medium">
                    <div className="h-6 w-6 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                      <Check className="h-4 w-4" />
                    </div>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* CTA Area */}
              <div className="w-full pt-4">
                <Button 
                  onClick={() => setIsQuoteOpen(true)}
                  className="w-full md:w-auto bg-white hover:bg-brand-orange text-black hover:text-white border-2 border-brand-orange h-14 px-10 text-lg font-bold uppercase tracking-wide shadow-xl"
                >
                  Get Instant Quote
                </Button>
                <p className="text-xs text-gray-400 mt-3 text-center md:text-left whitespace-nowrap">
                  Low Minimums • Fast Turnaround • Free Shipping
                </p>
              </div>

              {/* Trust Badges */}
              <div className="pt-8 border-t border-gray-100 w-full">
                <h3 className="text-sm font-bold text-brand-dark mb-4 uppercase">Trusted By 1000+ Brands</h3>
                <div className="flex flex-wrap gap-3 md:gap-6 opacity-90">
                   <Image src="/assets/badge-asi.png" width={100} height={40} className="h-6 md:h-12 w-auto shrink-0" alt="ASI" />
                   <Image src="/assets/badge-trustpilot.png" width={100} height={40} className="h-6 md:h-12 w-auto shrink-0" alt="Trustpilot" />
                   <Image src="/assets/badge-google.png" width={100} height={40} className="h-6 md:h-12 w-auto shrink-0" alt="Google" />
                   <Image src="/assets/badge-etsy.png" width={100} height={40} className="h-6 md:h-12 w-auto shrink-0" alt="Etsy" />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* --- MASTERPIECES GALLERY SECTION --- */}
      <ProductGallery images={masterpieceImages} />

      {/* --- REUSE: SPECIAL RATES (Lead Gen) --- */}
      <SpecialRates />

      {/* --- RELATED BLOG POSTS SECTION --- */}
      {relatedBlogPosts && relatedBlogPosts.length > 0 && (
        <section className="py-16 bg-gray-50">
          <div className="mx-auto max-w-6xl px-6">
            <h2 className="text-3xl font-bold text-center text-brand-dark mb-12">Learn More</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedBlogPosts.map((post, idx) => (
                <a
                  key={idx}
                  href={post.url}
                  className="bg-white rounded-lg p-6 shadow-md hover:shadow-xl transition-shadow border-l-4 border-brand-orange group"
                >
                  <h3 className="font-bold text-xl text-brand-dark mb-3 group-hover:text-brand-orange transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {post.description}
                  </p>
                  <span className="inline-block mt-4 text-brand-orange font-semibold text-sm group-hover:underline">
                    Read Article →
                  </span>
                </a>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* --- FAQ SECTION (Specific to Product) --- */}
      <section className="py-20">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="text-3xl font-bold text-center text-brand-dark mb-12">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {faqs.map((faq, idx) => (
              <div key={idx} className="flex border-l-4 border-brand-orange pl-6 py-1">
                <div>
                  <h3 className="font-bold text-lg text-brand-dark mb-2">{faq.q}</h3>
                  <p className="text-gray-600 text-base leading-relaxed">{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        </section>

        {/* --- RELATED PRODUCTS (Cross-Sell) --- */}
        <RelatedProducts />

        {/* --- BOTTOM CTA --- */}
        <BottomCTA onOpenQuote={() => setIsQuoteOpen(true)} />

        <Footer />

      {/* MODAL */}
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

      {/* Lightbox for Hero Images */}
      <Lightbox
        open={lightboxOpen}
        close={() => setLightboxOpen(false)}
        slides={lightboxSlides}
        index={lightboxIndex}
        plugins={[Zoom, Thumbnails]}
        zoom={{
          maxZoomPixelRatio: 3,
          zoomInMultiplier: 2,
          doubleTapDelay: 300,
          doubleClickDelay: 300,
          doubleClickMaxStops: 2,
          keyboardMoveDistance: 50,
          wheelZoomDistanceFactor: 100,
          pinchZoomDistanceFactor: 100,
          scrollToZoom: true,
        }}
        thumbnails={{
          position: "bottom",
          width: 120,
          height: 80,
          border: 2,
          borderRadius: 8,
          padding: 0,
          gap: 16,
        }}
        animation={{ fade: 250 }}
        controller={{ closeOnBackdropClick: true }}
      />
    </main>
  );
}
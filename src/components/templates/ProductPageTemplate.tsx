"use client";

import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Check, Star } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SpecialRates } from "@/components/SpecialRates"; // Reuse the bottom form
import { ProductGallery } from "@/components/ProductGallery";
import { RelatedProducts } from "@/components/RelatedProducts";
import { BottomCTA } from "@/components/BottomCTA";
import { useState } from "react";
import { Modal } from "@/components/ui/Modal";
import { QuoteForm } from "@/components/QuoteForm";

interface ProductPageProps {
  title: string;
  subtitle: string;
  description: string;
  heroImage: string;
  galleryImages: string[];
  features: string[];
  faqs: { q: string; a: string }[];
  masterpieceImages: string[];
}

export function ProductPageTemplate({
  title,
  subtitle,
  description,
  heroImage,
  galleryImages,
  features,
  faqs,
  masterpieceImages
}: ProductPageProps) {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  // Simple state for active image in gallery
  const [activeImage, setActiveImage] = useState(heroImage);

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
                    onClick={() => setActiveImage(img)}
                    className={`relative w-20 h-20 lg:w-24 lg:h-24 shrink-0 rounded-lg overflow-hidden cursor-pointer border-2 transition-all ${activeImage === img ? 'border-brand-orange' : 'border-gray-200 hover:border-gray-300'}`}
                  >
                    <Image src={img} alt="Thumbnail" fill className="object-cover" />
                  </div>
                ))}
              </div>
              
              {/* Main Image */}
              <div className="relative flex-1 aspect-square lg:aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl bg-gray-100">
                <Image src={activeImage} alt={title} fill className="object-cover" priority />
              </div>
            </div>

            {/* RIGHT: DETAILS */}
            <div className="flex flex-col items-start space-y-8 sticky top-24">
              <div>
                <h1 className="text-4xl md:text-5xl font-extrabold text-brand-dark mb-4 leading-tight">
                  {title}
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
                  No Minimums • Fast Turnaround • Free Shipping
                </p>
              </div>

              {/* Trust Badges */}
              <div className="pt-8 border-t border-gray-100 w-full">
                <h3 className="text-sm font-bold text-brand-dark mb-4 uppercase">Trusted By 1000+ Brands</h3>
                <div className="flex flex-nowrap gap-3 md:gap-6 overflow-x-auto pb-2 opacity-90">
                   <Image src="/assets/badge-asi.png" width={120} height={48} className="h-8 md:h-12 w-auto shrink-0" alt="ASI" />
                   <Image src="/assets/badge-trustpilot.png" width={120} height={48} className="h-8 md:h-12 w-auto shrink-0" alt="Trustpilot" />
                   <Image src="/assets/badge-google.png" width={120} height={48} className="h-8 md:h-12 w-auto shrink-0" alt="Google" />
                   <Image src="/assets/badge-etsy.png" width={120} height={48} className="h-8 md:h-12 w-auto shrink-0" alt="Etsy" />
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
          <h2 className="text-2xl font-bold text-white">Get Your Free Quote</h2>
          <p className="mt-2 text-sm text-gray-400">
            Fill out the details below and attach your design.
          </p>
        </div>
        <QuoteForm />
      </Modal>
    </main>
  );
}
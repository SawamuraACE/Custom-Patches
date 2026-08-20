"use client";

import { useState, useRef } from "react";
import dynamic from "next/dynamic";
import { Navbar } from "../components/Navbar";
import { Hero } from "../components/Hero";
import { Footer } from "../components/Footer";
import { Modal } from "../components/ui/Modal";
import { QuoteForm } from "../components/QuoteForm";

// Dynamic imports for below-the-fold components (lazy loading)
const SpecialRates = dynamic(() => import("../components/SpecialRates").then(mod => ({ default: mod.SpecialRates })), {
  loading: () => <div className="h-96 bg-brand-blue animate-pulse" />,
});

const Testimonials = dynamic(() => import("../components/Testimonials").then(mod => ({ default: mod.Testimonials })), {
  loading: () => <div className="h-96 bg-white animate-pulse" />,
});

const ProductsGrid = dynamic(() => import("../components/ProductsGrid").then(mod => ({ default: mod.ProductsGrid })), {
  loading: () => <div className="h-96 bg-brand-blue animate-pulse" />,
});

const BeyondPatches = dynamic(() => import("../components/BeyondPatches").then(mod => ({ default: mod.BeyondPatches })), {
  loading: () => <div className="h-64 bg-brand-blue animate-pulse" />,
});

const ProcessSteps = dynamic(() => import("../components/ProcessSteps").then(mod => ({ default: mod.ProcessSteps })), {
  loading: () => <div className="h-64 bg-white animate-pulse" />,
});

const QueenCTA = dynamic(() => import("../components/QueenCTA").then(mod => ({ default: mod.QueenCTA })), {
  loading: () => <div className="h-96 bg-brand-lime animate-pulse" />,
});

const FaqSection = dynamic(() => import("../components/FaqSection").then(mod => ({ default: mod.FaqSection })), {
  loading: () => <div className="h-64 bg-white animate-pulse" />,
});

export default function Home() {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const productsRef = useRef<HTMLDivElement>(null);

  const scrollToProducts = () => {
    productsRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="min-h-screen bg-white font-sans">
      <Navbar onOpenQuote={() => setIsQuoteOpen(true)} />

      {/* 1. Hero - Above the fold, loaded immediately */}
      <Hero onOpenQuote={() => setIsQuoteOpen(true)} onSeeAllProducts={scrollToProducts} />

      {/* 2. Free Quote Form */}
      <SpecialRates />

      {/* 3. Real Order From Real Customers */}
      <Testimonials />

      {/* 4. Products Grid (Pick Your Patch Type) */}
      <div ref={productsRef}>
        <ProductsGrid />
      </div>

      {/* 5. Beyond Patches (coins, pins, keychains, charms) */}
      <BeyondPatches onOpenQuote={() => setIsQuoteOpen(true)} />

      {/* 6. Process Steps (Sketch -> Mockup -> Patch) */}
      <ProcessSteps />

      {/* 7. Iron-On Magic */}
      <QueenCTA onOpenQuote={() => setIsQuoteOpen(true)} />

      {/* 8. FAQ Section */}
      <FaqSection />

      {/* Modal & Footer */}
      <Modal isOpen={isQuoteOpen} onClose={() => setIsQuoteOpen(false)}>
        <div className="mb-6 text-center">
          <h2 className="text-2xl font-bold">
            <span className="text-white">Get Your </span>
            <span className="text-brand-mint">Free Quote</span>
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

"use client";

import { useState } from "react";
import { Navbar } from "../components/Navbar";
import { Hero } from "../components/Hero";
import { SpecialRates } from "../components/SpecialRates";
import { ValueProps } from "../components/ValueProps";
import { ProductsGrid } from "../components/ProductsGrid";
import { ProcessSteps } from "../components/ProcessSteps";
import { QueenCTA } from "../components/QueenCTA";
import { FaqSection } from "../components/FaqSection";
import { BlogsSection } from "../components/BlogsSection";
import { BottomCTA } from "../components/BottomCTA";
import { Modal } from "../components/ui/Modal";
import { QuoteForm } from "../components/QuoteForm";
import { Footer } from "../components/Footer";

export default function Home() {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);

  return (
    <main className="min-h-screen bg-white font-sans">
      <Navbar onOpenQuote={() => setIsQuoteOpen(true)} />
      
      {/* 1. Hero */}
      <Hero onOpenQuote={() => setIsQuoteOpen(true)} />
      
      {/* 2. Unlock Special Rates (Dark Form) */}
      <SpecialRates />

      {/* 3. Our Value (Icons) */}
      <ValueProps />

      {/* 4. Products Grid (Infuse Your Style) */}
      <ProductsGrid />

      {/* 5. Process Steps (Patch Quest) */}
      <ProcessSteps />

      {/* 6. Queen CTA (Journey) */}
      <QueenCTA onOpenQuote={() => setIsQuoteOpen(true)} />

      {/* 7. FAQ Section */}
      <FaqSection />

      {/* 8. Blogs Section */}
      <BlogsSection />

      {/* 9. Bottom CTA */}
      <BottomCTA onOpenQuote={() => setIsQuoteOpen(true)} />

      {/* Modal & Footer */}
      <Modal isOpen={isQuoteOpen} onClose={() => setIsQuoteOpen(false)}>
        <div className="mb-6 text-center">
          <h2 className="text-2xl font-bold text-brand-dark">Get Your Free Quote</h2>
          <p className="mt-2 text-sm text-gray-500">
            Fill out the details below and attach your design.
          </p>
        </div>
        <QuoteForm />
      </Modal>
      
      <Footer />
    </main>
  );
}
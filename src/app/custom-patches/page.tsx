"use client";

import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ProductsGrid } from "@/components/ProductsGrid";
import { BottomCTA } from "@/components/BottomCTA";
import { Modal } from "@/components/ui/Modal";
import { QuoteForm } from "@/components/QuoteForm";

export default function CustomPatchesCategory() {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);

  return (
    <main className="min-h-screen bg-white font-sans">
      <Navbar onOpenQuote={() => setIsQuoteOpen(true)} />

      {/* HEADER SECTION */}
      <section className="pt-32 pb-12 text-center bg-gray-50 border-b border-gray-100">
        <div className="mx-auto max-w-4xl px-6">
          <h1 className="text-4xl md:text-5xl font-extrabold text-brand-dark uppercase tracking-tight mb-4">
            Custom <span className="text-brand-orange">Patches</span>
          </h1>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Browse our complete collection of premium custom patches. 
            From classic embroidery to modern PVC, we have the perfect backing and style for your brand.
          </p>
        </div>
      </section>

      {/* THE GRID (Shows all your patch types) */}
      <ProductsGrid />

      {/* CTA Section */}
      <BottomCTA onOpenQuote={() => setIsQuoteOpen(true)} />

      <Footer />

      {/* Quote Modal Logic */}
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
    </main>
  );
}

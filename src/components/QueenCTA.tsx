"use client";

import { Button } from "./ui/Button";

interface QuoteButtonProps {
  onClick: () => void;
}

function QuoteBtn({ onClick }: QuoteButtonProps) {
  return (
    <Button onClick={onClick} className="bg-[#1A1A1A] hover:bg-black text-white border border-brand-orange/30 px-6 py-2 h-auto text-xs uppercase tracking-widest font-bold mt-4 rounded-none skew-x-[-10deg]">
      <span className="skew-x-[10deg] text-brand-orange mr-2">❝</span>
      <span className="skew-x-[10deg]">Get Quote Now</span>
    </Button>
  );
}

interface QueenCTAProps {
  onOpenQuote: () => void;
}

export function QueenCTA({ onOpenQuote }: QueenCTAProps) {
  return (
    <section className="bg-[#EDEBE8] py-24 overflow-hidden">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-brand-dark uppercase tracking-wide leading-tight mb-4">
            From Idea to Iron-on Patches: <br />
            Your Patch Journey Starts Here!
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-sm">
            From sparking ideas to stunning iron-on patches, your patch journey begins here!
            Experience our top-tier customer care and commitment to 100% quality.
          </p>
        </div>

        {/* 
           GRID LAYOUT (The Fix)
           - Mobile: 1 column (Stack vertical)
           - Desktop (lg): 3 columns [1fr_auto_1fr]
           - The center column (Image) creates a physical wall between text.
        */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] gap-8 lg:gap-4 items-center">
          {/* --- LEFT COLUMN --- */}
          <div className="flex flex-col gap-12 lg:gap-32 text-center lg:text-right order-2 lg:order-1">
            <div>
              <h3 className="font-bold text-xl text-brand-dark">Crafting Your Ideal Patch</h3>
              <p className="text-brand-orange text-xs font-bold uppercase mb-2">We're here to Wow You</p>
              <p className="text-sm text-gray-600 leading-relaxed max-w-xs mx-auto lg:ml-auto lg:mr-0">
                Your satisfaction fuels us. We craft patches with your happiness in mind, ensuring
                excellence in every detail.
              </p>
              <div className="flex justify-center lg:justify-end">
                <QuoteBtn onClick={onOpenQuote} />
              </div>
            </div>

            <div>
              <h3 className="font-bold text-xl text-brand-dark">Ring, Ring! Your Patch is Here!</h3>
              <p className="text-brand-orange text-xs font-bold uppercase mb-2">Get set to be impressed!</p>
              <p className="text-sm text-gray-600 leading-relaxed max-w-xs mx-auto lg:ml-auto lg:mr-0">
                Quality checks, meet delivery magic! Your patch arrives, complete with iron-on patch
                instructions.
              </p>
              <div className="flex justify-center lg:justify-end">
                <QuoteBtn onClick={onOpenQuote} />
              </div>
            </div>
          </div>

          {/* --- CENTER IMAGE --- */}
          {/* Order 1 on mobile (Top), Order 2 on Desktop (Middle) */}
          <div className="relative flex justify-center order-1 lg:order-2">
            <img
              src="/assets/queen-illustration.png"
              alt="Queen Illustration"
              className="w-[280px] md:w-[400px] lg:w-[450px] object-contain z-10"
            />
          </div>

          {/* --- RIGHT COLUMN --- */}
          <div className="flex flex-col gap-12 lg:gap-32 text-center lg:text-left order-3">
            <div>
              <h3 className="font-bold text-xl text-brand-dark">Start Your patch Quest!</h3>
              <p className="text-brand-orange text-xs font-bold uppercase mb-2">Easy, Swift, and Enjoyable</p>
              <p className="text-sm text-gray-600 leading-relaxed max-w-xs mx-auto lg:mx-0">
                Excited to order something out-of-the-box? Let's make it happen! Reach out through
                chat or fill out quote form.
              </p>
              <div className="flex justify-center lg:justify-start">
                <QuoteBtn onClick={onOpenQuote} />
              </div>
            </div>

            <div>
              <h3 className="font-bold text-xl text-brand-dark">The Magic of Production Begins!</h3>
              <p className="text-brand-orange text-xs font-bold uppercase mb-2">Patching Your Ideas</p>
              <p className="text-sm text-gray-600 leading-relaxed max-w-xs mx-auto lg:mx-0">
                Give us a go-ahead and our skilled artisans will swing into action, ensuring
                perfection in every stitch.
              </p>
              <div className="flex justify-center lg:justify-start">
                <QuoteBtn onClick={onOpenQuote} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

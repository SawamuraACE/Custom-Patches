"use client";

import { Button } from "./ui/Button";

interface BottomCTAProps {
  onOpenQuote?: () => void;
}

export function BottomCTA({ onOpenQuote }: BottomCTAProps) {
  return (
    <section className="bg-[#1A1A1A] py-24 text-center">
      <div className="mx-auto max-w-4xl px-4">
        <h2 className="text-3xl md:text-5xl font-extrabold text-white uppercase tracking-wide leading-tight mb-6">
          GET CREATIVE WITH MY CUSTOM <br />
          PATCHES: <span className="text-brand-orange">START TODAY!</span>
        </h2>

        <p className="text-gray-400 text-lg mb-10 font-light">
          Let's stitch a tale of your brand story with custom patches. <br className="hidden md:block" />
          Start now for a timeless touch of creativity!
        </p>

        <Button onClick={onOpenQuote} className="bg-white hover:bg-brand-orange text-black hover:text-white px-10 py-6 text-lg rounded-md font-bold uppercase tracking-wider shadow-xl border-2 border-white">
          Get Quote
        </Button>
      </div>
    </section>
  );
}

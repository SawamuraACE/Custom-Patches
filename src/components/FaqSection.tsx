"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const FAQS = [
  {
    q: "How much do custom patches cost?",
    a: "Custom patches start from $0.91 per piece for a 2x2-inch embroidered design at 1,000 pieces. Smaller orders cost more per piece. Pricing depends on patch type, size, and quantity. Free digital mockup, no setup fees. Economy delivery saves 10 percent off the order total.",
  },
  {
    q: "Embroidered vs woven vs chenille vs PVC. Which should I choose?",
    a: "Embroidered suits detailed logos and text. Woven is best for very fine detail and small text. Chenille gives a bold, varsity-style look. PVC is durable and weatherproof for outdoor gear. Tell us your design and we'll recommend the right type.",
  },
  {
    q: "What's your turnaround time?",
    a: "Standard production is 12-14 days from design approval to delivery. Rush production is available in 4-7 days for urgent collection launches.",
  },
  {
    q: "What are your minimum order quantities?",
    a: "MOQ starts at just 50 units, perfect for testing new designs or limited releases. Every order includes digitization, sampling, production, quality inspection, and shipping.",
  },
];

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="bg-white pt-4 pb-20 lg:pb-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <h2 className="text-center font-display text-4xl sm:text-5xl text-black mb-10">FAQS</h2>

        <div className="space-y-4">
          {FAQS.map((faq, idx) => (
            <div key={faq.q} className="rounded-2xl bg-black overflow-hidden">
              <button
                onClick={() => toggle(idx)}
                className="w-full flex items-center gap-4 p-5 text-left"
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border-2 border-white font-mouse text-xs text-white">
                  {idx + 1}
                </span>
                <span className="grow font-mouse text-sm sm:text-base text-white">
                  {faq.q}
                </span>
                {openIndex === idx ? (
                  <ChevronUp className="h-5 w-5 text-brand-mint shrink-0" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-white/50 shrink-0" />
                )}
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === idx ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <p className="pr-5 pb-5 pl-[68px] font-mouse text-sm text-white/70 leading-relaxed">
                  {faq.a}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

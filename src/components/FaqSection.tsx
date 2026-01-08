"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const FAQS = [
  {
    q: "Why to opt for custom iron-on or Velcro patches and what exactly do they entail?",
    a: "Custom iron-on and Velcro patches are fabric designs stitched onto a backing. They're great for adding logos or personal touches to clothes and accessories, offering durability and easy attachment.",
  },
  {
    q: "How can I get custom Velcro patches?",
    a: "Custom iron-on and Velcro patches are fabric designs stitched onto a backing. They're great for adding logos or personal touches to clothes and accessories, offering durability and easy attachment.",
  },
  {
    q: "When can I expect my iron-on patches?",
    a: "Custom iron-on and Velcro patches are fabric designs stitched onto a backing. They're great for adding logos or personal touches to clothes and accessories, offering durability and easy attachment.",
  },
  {
    q: "Are custom iron-on patches restricted by size or color?",
    a: "Custom iron-on and Velcro patches are fabric designs stitched onto a backing. They're great for adding logos or personal touches to clothes and accessories, offering durability and easy attachment.",
  },
  {
    q: "What makes embroidered iron-on patches different from woven ones?",
    a: "Custom iron-on and Velcro patches are fabric designs stitched onto a backing. They're great for adding logos or personal touches to clothes and accessories, offering durability and easy attachment.",
  },
];

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="bg-white pt-12 pb-6 md:py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <h2 className="text-center text-2xl md:text-3xl font-extrabold text-brand-dark mb-8 md:mb-12 uppercase tracking-wide">
          FREQUENTLY ASKED QUESTIONS
        </h2>

        <div className="space-y-4">
          {FAQS.map((faq, idx) => (
            <div
              key={idx}
              className={`border rounded-lg overflow-hidden transition-all duration-300 ${
                openIndex === idx ? "border-brand-orange bg-gray-50" : "border-gray-200"
              }`}
            >
              <button
                onClick={() => toggle(idx)}
                className="w-full flex items-center justify-between p-5 text-left focus:outline-none"
              >
                <span className="font-semibold text-sm md:text-base text-brand-dark pr-8">
                  {faq.q}
                </span>
                {openIndex === idx ? (
                  <ChevronUp className="h-5 w-5 text-brand-orange shrink-0" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-gray-400 shrink-0" />
                )}
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === idx ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="p-5 pt-0 text-sm text-gray-600 leading-relaxed">
                  {faq.a}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

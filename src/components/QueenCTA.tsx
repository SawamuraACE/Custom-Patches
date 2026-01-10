"use client";

import Image from "next/image";
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
    <section className="bg-[#EDEBE8] py-12 md:py-24 overflow-hidden">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8 relative">
        
        {/* Header */}
        <div className="text-center mb-8 relative z-10">
          <h2 className="text-2xl md:text-4xl font-extrabold text-brand-dark uppercase tracking-wide leading-tight mb-4">
            From Idea to Iron-on Patches: <br/>
            Your Patch Journey Starts Here!
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-sm">
            From sparking ideas to stunning iron-on patches, your patch journey begins here!
          </p>
        </div>

        {/* MAIN LAYOUT */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] gap-8 lg:gap-4 items-center">
          
          {/* --- LEFT COLUMN --- */}
          <div className="flex flex-col gap-8 lg:gap-32 text-center lg:text-right order-2 lg:order-1">
             <div className="pt-0 md:pt-24">
               <h3 className="font-bold text-lg md:text-xl text-brand-dark">Crafting Your Ideal Patch</h3>
               <p className="text-brand-orange text-xs font-bold uppercase mb-2">We're here to Wow You</p>
               <p className="text-sm text-gray-600 leading-relaxed max-w-xs mx-auto lg:ml-auto lg:mr-0">
                 Your satisfaction fuels us. We craft patches with your happiness in mind.
               </p>
               <div className="flex justify-center lg:justify-end">
                 <QuoteBtn onClick={onOpenQuote} />
               </div>
             </div>

             <div className="pb-0 md:pb-24">
               <h3 className="font-bold text-lg md:text-xl text-brand-dark">Ring, Ring! Your Patch is Here!</h3>
               <p className="text-brand-orange text-xs font-bold uppercase mb-2">Get set to be impressed!</p>
               <p className="text-sm text-gray-600 leading-relaxed max-w-xs mx-auto lg:ml-auto lg:mr-0">
                 Quality checks, meet delivery magic! Your patch arrives ready for action.
               </p>
               <div className="flex justify-center lg:justify-end">
                 <QuoteBtn onClick={onOpenQuote} />
               </div>
             </div>
          </div>

          {/* --- CENTER IMAGE --- */}
          <div className="relative flex justify-center order-1 lg:order-2 my-4 lg:my-0">
             <Image
               src="/assets/queen-illustration.png"
               alt="Queen Illustration"
               width={450}
               height={500}
               sizes="(max-width: 768px) 200px, (max-width: 1024px) 400px, 450px"
               className="w-[200px] md:w-[400px] lg:w-[450px] object-contain z-10"
             />
          </div>

          {/* --- RIGHT COLUMN --- */}
          <div className="flex flex-col gap-8 lg:gap-32 text-center lg:text-left order-3">
             <div className="pt-0 md:pt-24">
               <h3 className="font-bold text-lg md:text-xl text-brand-dark">Start Your patch Quest!</h3>
               <p className="text-brand-orange text-xs font-bold uppercase mb-2">Easy, Swift, and Enjoyable</p>
               <p className="text-sm text-gray-600 leading-relaxed max-w-xs mx-auto lg:mx-0">
                 Excited to order something out-of-the-box? Let's make it happen!
               </p>
               <div className="flex justify-center lg:justify-start">
                 <QuoteBtn onClick={onOpenQuote} />
               </div>
             </div>

             <div className="pb-0 md:pb-24">
               <h3 className="font-bold text-lg md:text-xl text-brand-dark">The Magic of Production Begins!</h3>
               <p className="text-brand-orange text-xs font-bold uppercase mb-2">Patching Your Ideas</p>
               <p className="text-sm text-gray-600 leading-relaxed max-w-xs mx-auto lg:mx-0">
                 Give us a go-ahead and our skilled artisans will swing into action.
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

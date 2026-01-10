"use client";

import { useState } from "react";
import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Modal } from "@/components/ui/Modal";
import { QuoteForm } from "@/components/QuoteForm";
import { Star } from "lucide-react";
import { motion } from "framer-motion";

// --- DATA: PATCH CIRCLES ---
const PATCH_TYPES = [
  { name: "Embroidered Patches", img: "/assets/aboutus/circle-embroidered.png" },
  { name: "Chenille Patches", img: "/assets/aboutus/circle-chenille.png" },
  { name: "PVC Patches", img: "/assets/aboutus/circle-pvc.png" },
  { name: "Woven Patches", img: "/assets/aboutus/circle-woven.png" },
  { name: "Leather Patches", img: "/assets/aboutus/circle-leather.png" },
];

// --- DATA: REVIEWS ---
const REVIEWS = [
  "/assets/aboutus/review-1.png",
  "/assets/aboutus/review-2.png",
  "/assets/aboutus/review-3.png",
];

// --- DATA: TEXT CONTENT ---
const TEXT_BLOCKS = [
  {
    title: "More Than Just Patches, We're Patch Partners!",
    desc: "Welcome to Panda Patches, where we are more than just patch makers – we are your patch partners. For over 8 years, we have woven brand stories into the hearts of customers worldwide. Trusted by businesses, teams, and organizations, we craft top-quality custom patches that leave a lasting impression."
  },
  {
    title: "Rooted in Expertise, Stitched with Dedication",
    desc: "We proudly stand as a division of Custom Patch Pro LLC, a powerhouse in the custom patch industry. This legacy ensures unmatched expertise and craftsmanship in every patch we create. Our skilled artisans infuse passion into every stitch, transforming your patches into more than just fabric – they become symbols of quality and dedication."
  },
  {
    title: "Your Brand Story Sewn to Perfection",
    desc: "At Panda Patches, we're all about telling your brand's story with style! Imagine your logo or design stitched onto a patch – it's like a mini billboard that speaks volumes about your brand wherever it goes. Whether you're a business, team, or organization, our custom patches are the perfect way to showcase your unique identity and leave a lasting impression. Let's stitch your story together!"
  },
  {
    title: "Fast and Flawless Patch-Making Process",
    desc: "At Panda Patches, we turn your patch ideas into reality with speed and precision. From the initial design concept to the final product, our top-notch patch making services ensure your vision shines through in every stitch. Our advanced production facilities, coupled with a dedication to quality, result in patches that are second to none."
  }
];

export default function AboutUs() {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);

  return (
    <main className="min-h-screen bg-white font-sans">
      <Navbar onOpenQuote={() => setIsQuoteOpen(true)} />

      {/* 1. HERO SECTION (Updated to Black) */}
      <section className="pt-40 pb-24 text-center bg-[#111] relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <h1 className="text-5xl md:text-7xl font-extrabold uppercase tracking-tight mb-4">
            <span className="text-white">About </span>
            <span className="text-brand-orange">Us!!</span>
          </h1>
          {/* Decorative Underline */}
          <div className="w-32 h-1.5 bg-brand-orange mx-auto rounded-full" />
        </div>
      </section>

      {/* 2. THE STORY TEXT */}
      <section className="py-20 md:py-28">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="flex flex-col gap-16">
            
            {TEXT_BLOCKS.map((block, idx) => (
              <div key={idx} className="flex flex-col items-start text-left">
                {/* 30px Heading */}
                <h2 className="text-[24px] md:text-[30px] font-bold text-brand-dark uppercase mb-4 leading-tight">
                  {block.title}
                </h2>
                {/* 18px Body with Orange Line */}
                <div className="flex border-l-4 border-brand-orange pl-6 py-1">
                  <p className="text-[16px] md:text-[18px] text-gray-600 font-normal leading-relaxed max-w-[1130px]">
                    {block.desc}
                  </p>
                </div>
              </div>
            ))}

            {/* 3. TRUST BADGES */}
            <div className="mt-4">
              <h3 className="text-lg font-bold text-brand-dark uppercase mb-4">5 Star Ratings</h3>
              <div className="flex flex-wrap items-center gap-6 md:gap-8">
                 <Image src="/assets/badge-asi.png" alt="ASI" width={100} height={40} className="h-8 md:h-10 w-auto object-contain" />
                 <Image src="/assets/badge-trustpilot.png" alt="Trustpilot" width={100} height={40} className="h-8 md:h-10 w-auto object-contain" />
                 <Image src="/assets/badge-google.png" alt="Google" width={100} height={40} className="h-8 md:h-10 w-auto object-contain" />
                 <Image src="/assets/badge-etsy.png" alt="Etsy" width={100} height={40} className="h-8 md:h-10 w-auto object-contain" />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. FACTORY SECTION (Updated Layout & Text) */}
      <section className="py-16 bg-white">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            
            {/* Left Column: Text */}
            <div className="space-y-8">
              {/* 50px Heading */}
              <h2 className="text-[36px] md:text-[50px] font-bold uppercase leading-tight">
                <span className="text-brand-dark">PANDA PATCHES <br/></span>
                <span className="text-brand-orange">FACTORY</span>
              </h2>
              
              {/* Text with Orange Line */}
              <div className="flex border-l-4 border-brand-orange pl-6 py-1">
                <p className="text-[16px] md:text-[18px] text-gray-600 font-normal leading-relaxed">
                  Customer satisfaction isn't just a goal; it's our badge of honor. We're not just in the business of creating patches; we're in the business of building relationships. From the initial inquiry to the final delivery, our friendly and knowledgeable team is dedicated to guiding you through every step of the process. Your satisfaction is our top priority, and we're here to ensure a seamless experience from start to finish.
                </p>
              </div>
              
              <div className="text-gray-400 text-sm italic pt-2">
                 Where technology meets artistry.
              </div>
            </div>

            {/* Right Column: Image */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl h-full min-h-[400px]">
              <Image 
                src="/assets/aboutus/factory-wide.png" 
                alt="Panda Patches Factory" 
                width={800} 
                height={600} 
                className="w-full h-full object-cover"
              />
            </div>

          </div>
        </div>
      </section>

      {/* 5. SOCIAL REVIEWS */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-[36px] md:text-[40px] font-extrabold uppercase mb-4">
            <span className="text-brand-dark">Social </span>
            <span className="text-brand-orange">Reviews</span>
          </h2>
          <div className="flex justify-center gap-1 mb-16">
            {[1,2,3,4,5].map(i => <Star key={i} className="w-8 h-8 text-yellow-400 fill-yellow-400" />)}
          </div>

          <div className="grid md:grid-cols-3 gap-8 items-center justify-center">
            {REVIEWS.map((src, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -10 }}
                className="relative rounded-xl overflow-hidden shadow-xl border border-gray-200 bg-white max-w-[320px] mx-auto"
              >
                <Image src={src} alt="Review" width={320} height={400} className="w-full h-auto" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. PICK YOUR PATCH */}
      <section className="py-24 bg-white">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-[36px] md:text-[40px] font-extrabold uppercase mb-16">
            <span className="text-brand-dark">Pick Your </span>
            <span className="text-brand-orange">Patch!</span>
          </h2>
          
          <div className="flex flex-wrap justify-center gap-10 md:gap-16">
            {PATCH_TYPES.map((patch, idx) => (
              <div key={idx} className="group flex flex-col items-center gap-6">
                <div className="relative w-40 h-40 md:w-48 md:h-48 rounded-full border-[6px] border-brand-orange p-1 shadow-xl transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3 bg-white">
                  <div className="w-full h-full rounded-full overflow-hidden relative">
                    <Image 
                      src={patch.img} 
                      alt={patch.name} 
                      fill 
                      className="object-cover"
                    />
                  </div>
                </div>
                <h3 className="font-bold text-lg text-brand-dark group-hover:text-brand-orange transition-colors">
                  {patch.name}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

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

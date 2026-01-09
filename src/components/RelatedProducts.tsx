"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const RELATED = [
  { 
    name: "Custom Chenille", 
    img: "/assets/product-chenille.png", 
    link: "/custom-patches/custom-chenille-patches",
    color: "text-red-600"
  },
  { 
    name: "Custom PVC", 
    img: "/assets/product-pvc.png", 
    link: "/custom-patches/custom-pvc-patches",
    color: "text-gray-800"
  },
  { 
    name: "Custom Woven", 
    img: "/assets/product-woven.png", 
    link: "/custom-patches/custom-woven-patches",
    color: "text-slate-600"
  },
  { 
    name: "Custom Leather", 
    img: "/assets/product-leather.png", 
    link: "/custom-patches/custom-leather-patches",
    color: "text-amber-700"
  },
];

export function RelatedProducts() {
  return (
    <section className="py-24 bg-white border-t border-gray-100">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
          <div>
             <h2 className="text-3xl font-extrabold text-brand-dark uppercase tracking-wide">
               You Might Also Like
             </h2>
             <p className="text-gray-500 text-sm mt-2">
               Explore other premium backing and material options.
             </p>
          </div>
          <Link href="/custom-patches" className="text-brand-orange font-bold text-sm flex items-center hover:underline group whitespace-nowrap">
            View All Products 
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* 4 Column Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {RELATED.map((item, idx) => (
            <Link 
              key={idx} 
              href={item.link} 
              className="group block rounded-2xl overflow-hidden border border-gray-200 hover:border-brand-orange/50 transition-all duration-300 hover:shadow-xl bg-white flex flex-col"
            >
              {/* IMAGE AREA - FIXED */}
              <div className="relative h-64 w-full bg-gray-50 flex items-center justify-center p-6">
                <Image 
                  src={item.img} 
                  alt={item.name} 
                  fill 
                  className="object-contain group-hover:scale-110 transition-transform duration-500 drop-shadow-md" 
                />
              </div>
              
              {/* TEXT AREA */}
              <div className="p-6 bg-white border-t border-gray-100">
                <h3 className={`font-extrabold text-lg ${item.color} group-hover:text-brand-orange transition-colors`}>
                  {item.name}
                </h3>
                <div className="flex items-center gap-2 mt-2 text-xs font-bold text-brand-dark uppercase tracking-wider group-hover:text-brand-orange transition-colors">
                  <span>View Details</span>
                  <ArrowRight className="h-3 w-3" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

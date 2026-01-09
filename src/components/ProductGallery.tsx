"use client";

import Image from "next/image";

interface ProductGalleryProps {
  images?: string[]; 
}

const DEFAULT_IMAGES = [
  "/assets/products/embroidered-hero.png",
  "/assets/products/embroidered-group.png",
  "/assets/products/embroidered-back.png",
  "/assets/products/embroidered-jacket.png",
];

export function ProductGallery({ images }: ProductGalleryProps) {
  const displayImages = images && images.length > 0 ? images : DEFAULT_IMAGES;

  return (
    <section className="py-24 bg-gray-50">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-brand-dark uppercase tracking-wide mb-4">
            Our Recent Masterpieces
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg">
            Check out some of the custom designs we've brought to life.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {displayImages.map((src, idx) => (
            <div 
              key={idx} 
              className="relative aspect-square rounded-2xl overflow-hidden bg-white border border-gray-200 shadow-sm hover:shadow-2xl hover:border-brand-orange/30 transition-all duration-500 group"
            >
              {/* Full Image Display */}
              <div className="absolute inset-0 flex items-center justify-center bg-white">
                <Image 
                  src={src} 
                  alt="Gallery Image" 
                  fill 
                  className="object-contain p-2 group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

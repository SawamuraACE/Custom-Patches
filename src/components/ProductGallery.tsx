"use client";

import { useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Lightbox from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";

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
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openLightbox = (index: number) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
  };

  // Convert image paths to lightbox format
  const lightboxSlides = displayImages.map((src) => ({
    src,
  }));

  return (
    <section className="py-24 bg-gray-50">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-8">

        <div className="text-center mb-16">
         <h2 className="text-4xl font-extrabold uppercase tracking-wide mb-4">
           Our Recent <span className="text-brand-orange">Masterpieces</span>
         </h2>
         <p className="text-gray-500 max-w-2xl mx-auto text-lg">
           Check out some of the custom designs we've brought to life.
         </p>
        </div>

        {/* Swiper Carousel */}
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={32}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          loop={true}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 24,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 32,
            },
          }}
          className="masterpieces-swiper"
        >
          {displayImages.map((src, idx) => (
            <SwiperSlide key={idx}>
              <div
                onClick={() => openLightbox(idx)}
                className="relative aspect-square rounded-2xl overflow-hidden bg-white border border-gray-200 shadow-xs hover:shadow-2xl hover:border-brand-orange/30 transition-all duration-500 group cursor-pointer"
              >
                {/* Full Image Display */}
                <div className="absolute inset-0 flex items-center justify-center bg-white">
                  <Image
                    src={src}
                    alt={`Gallery Image ${idx + 1}`}
                    fill
                    className="object-contain p-2 group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                </div>

                {/* Zoom Hint Overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <svg className="w-12 h-12 text-white drop-shadow-lg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
                    </svg>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

      </div>

      {/* Lightbox Modal */}
      <Lightbox
        open={lightboxOpen}
        close={() => setLightboxOpen(false)}
        slides={lightboxSlides}
        index={currentIndex}
        plugins={[Zoom, Thumbnails]}
        zoom={{
          maxZoomPixelRatio: 3,
          zoomInMultiplier: 2,
          doubleTapDelay: 300,
          doubleClickDelay: 300,
          doubleClickMaxStops: 2,
          keyboardMoveDistance: 50,
          wheelZoomDistanceFactor: 100,
          pinchZoomDistanceFactor: 100,
          scrollToZoom: true,
        }}
        thumbnails={{
          position: "bottom",
          width: 120,
          height: 80,
          border: 2,
          borderRadius: 8,
          padding: 0,
          gap: 16,
        }}
        animation={{ fade: 250 }}
        controller={{ closeOnBackdropClick: true }}
      />

      {/* Custom Swiper Styles */}
      <style jsx global>{`
        .masterpieces-swiper .swiper-button-prev,
        .masterpieces-swiper .swiper-button-next {
          color: #FF5722;
          background: white;
          width: 44px;
          height: 44px;
          border-radius: 50%;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        }

        .masterpieces-swiper .swiper-button-prev:after,
        .masterpieces-swiper .swiper-button-next:after {
          font-size: 20px;
          font-weight: bold;
        }

        .masterpieces-swiper .swiper-button-prev:hover,
        .masterpieces-swiper .swiper-button-next:hover {
          background: #FF5722;
          color: white;
        }

        .masterpieces-swiper .swiper-pagination-bullet {
          background: #9CA3AF;
          opacity: 1;
          width: 10px;
          height: 10px;
        }

        .masterpieces-swiper .swiper-pagination-bullet-active {
          background: #FF5722;
          width: 24px;
          border-radius: 5px;
        }

        .masterpieces-swiper {
          padding-bottom: 48px;
        }
      `}</style>
    </section>
  );
}

"use client";

import { useState, useEffect } from "react";
import { Button } from "./ui/Button";
import Image from "next/image";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper modules
import { Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const BLOGS = [
  {
    id: 1,
    title: "Custom Patches for Businesses & Personal Use",
    desc: "Custom patches are an incredible way to make a statement and add personal flair to clothing, hats, bags, and more.",
    image: "/assets/blog-1.png",
  },
  {
    id: 2,
    title: "The Ultimate Guide to Custom Patch Backings",
    desc: "From Iron-on to Velcro, choosing the right backing is crucial for your patch's longevity and application.",
    image: "/assets/blog-2.png",
  },
  {
    id: 3,
    title: "Why Embroidery is Timeless",
    desc: "Explore the history and durability of classic embroidery methods compared to modern printing.",
    image: "/assets/blog-1.png",
  },
  {
    id: 4,
    title: "PVC vs Embroidered: Which is Best?",
    desc: "A deep dive into the pros and cons of different patch materials for outdoor gear.",
    image: "/assets/blog-2.png",
  },
];

export function BlogsSection() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="bg-white pt-6 pb-16 md:py-24">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-brand-dark mb-4 uppercase tracking-wide">
            BLOGS
          </h2>
          <p className="text-gray-500 text-sm md:text-base">
            Latest news and guides from the patch experts.
          </p>
        </div>

        {mounted && (
        <div className="relative" suppressHydrationWarning>
          <Swiper
            modules={[Pagination]}
            spaceBetween={24}
            slidesPerView={1.2}
            loop={false}
            speed={600}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            breakpoints={{
              320: { slidesPerView: 1.1, spaceBetween: 16 },
              640: { slidesPerView: 2, spaceBetween: 20 },
              1024: { slidesPerView: 2.5, spaceBetween: 30 },
            }}
            className="w-full pb-12"
          >
            {BLOGS.map((blog) => (
              <SwiperSlide key={blog.id} className="h-auto">
                <div className="group flex flex-col h-full rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 bg-white">

                  <div className="h-48 md:h-64 w-full relative overflow-hidden bg-gray-100">
                     <Image
                       src={blog.image}
                       alt={blog.title}
                       fill
                       className="object-cover transition-transform duration-500 group-hover:scale-105"
                       unoptimized
                     />
                  </div>

                  <div className="p-6 md:p-8 bg-[#1A1A1A] text-white flex-1 flex flex-col items-start justify-between">
                    <div>
                      <h3 className="text-lg md:text-xl font-bold mb-3 leading-tight line-clamp-2">
                        {blog.title}
                      </h3>
                      <p className="text-gray-400 text-xs md:text-sm leading-relaxed mb-6 line-clamp-3">
                        {blog.desc}
                      </p>
                    </div>

                    <Button className="bg-brand-orange hover:bg-brand-red text-white border-none px-6 rounded-md text-xs font-bold uppercase w-max">
                      Read More
                    </Button>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <style jsx global>{`
            .swiper-pagination-bullet-active {
              background-color: #FF4D15 !important;
            }
            .swiper-pagination-bullet {
              background-color: #ccc;
              width: 10px;
              height: 10px;
            }
          `}</style>
        </div>
        )}

      </div>
    </section>
  );
}

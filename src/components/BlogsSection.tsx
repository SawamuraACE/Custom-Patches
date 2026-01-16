"use client";

import { useState, useEffect } from "react";
import { Button } from "./ui/Button";
import Image from "next/image";
import Link from "next/link";
import { getFeaturedBlogs } from "@/data/blogs";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper modules
import { Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

export function BlogsSection() {
  const [mounted, setMounted] = useState(false);
  const blogs = getFeaturedBlogs();

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="bg-white pt-6 pb-16 md:py-24">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4 uppercase tracking-wide">
            <span className="text-brand-dark">INDUSTRY INSIGHTS & </span>
            <span className="text-brand-orange">EXPERT GUIDES</span>
          </h2>
          <p className="text-gray-600 text-sm md:text-base max-w-3xl mx-auto">
            Learn from 8+ years of patch manufacturing experience. Our comprehensive guides cover everything clothing brands need to know about custom patches, production efficiency, quality standards, and scaling your apparel line with professional embellishments.
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
            {blogs.map((blog) => (
              <SwiperSlide key={blog.id} className="h-auto">
                <Link href={`/blog/${blog.slug}`}>
                  <div className="group flex flex-col h-full rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-800 bg-[#1A1A1A] cursor-pointer">

                    <div className="h-48 md:h-64 w-full relative overflow-hidden bg-gray-800">
                       <Image
                         src={blog.image}
                         alt={blog.imageAlt}
                         fill
                         sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                         className="object-cover transition-transform duration-500 group-hover:scale-105"
                         loading="lazy"
                       />
                       {blog.featured && (
                         <div className="absolute top-4 left-4 bg-brand-orange text-white px-3 py-1 rounded-full text-xs font-bold uppercase">
                           Featured
                         </div>
                       )}
                    </div>

                    <div className="p-6 md:p-8 bg-[#1A1A1A] text-white flex-1 flex flex-col items-start justify-between">
                      <div>
                        <h3 className="text-lg md:text-xl font-bold mb-3 leading-tight line-clamp-2">
                          {blog.title}
                        </h3>
                        <p className="text-gray-400 text-xs md:text-sm leading-relaxed mb-6 line-clamp-3">
                          {blog.excerpt}
                        </p>
                      </div>

                      <Button className="bg-brand-orange hover:bg-brand-red text-white border-none px-6 rounded-md text-xs font-bold uppercase w-max">
                        Read More
                      </Button>
                    </div>
                  </div>
                </Link>
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

        {/* View All Blogs Button */}
        <div className="text-center mt-12">
          <Link href="/blog">
            <Button size="lg" className="bg-black text-white hover:bg-brand-orange hover:text-black border-none px-8 font-bold uppercase transition-all duration-300">
              View All Articles
            </Button>
          </Link>
        </div>

      </div>
    </section>
  );
}

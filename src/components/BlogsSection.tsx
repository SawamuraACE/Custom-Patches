"use client";

import { Button } from "./ui/Button";
import { ChevronLeft, ChevronRight } from "lucide-react";

const BLOGS = [
  {
    id: 1,
    title: "Custom Patches for Businesses & Personal Use",
    desc: "Custom patches are an incredible way to make a statement and add personal flair to clothing, hats, bags, and more. Whether for branding or style, they stand out.",
    image: "/assets/blog-1.png",
  },
  {
    id: 2,
    title: "The Ultimate Guide to Custom Patch Backings",
    desc: "From Iron-on to Velcro, choosing the right backing is crucial for your patch's longevity and application. Learn which one fits your needs best.",
    image: "/assets/blog-2.png",
  },
];

export function BlogsSection() {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-4xl font-extrabold text-brand-dark mb-16 uppercase tracking-wide">
          BLOGS
        </h2>

        <div className="flex items-center justify-center gap-4 md:gap-8">
          {/* Left Arrow */}
          <button className="hidden md:flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md border border-gray-100 hover:bg-gray-50 text-gray-600">
            <ChevronLeft className="h-6 w-6" />
          </button>

          {/* Cards */}
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl w-full">
            {BLOGS.map((blog) => (
              <div
                key={blog.id}
                className="group flex flex-col rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 border border-gray-100 bg-white"
              >
                <div className="h-96 w-full relative flex items-center justify-center bg-white">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="p-8 bg-[#1A1A1A] text-white flex-1 flex flex-col items-start">
                  <h3 className="text-2xl font-bold mb-4 leading-tight">{blog.title}</h3>
                  <p className="text-gray-400 text-base leading-relaxed mb-6 line-clamp-4">
                    {blog.desc}
                  </p>

                  <Button className="mt-auto bg-white hover:bg-brand-orange text-black hover:text-white border-2 border-white px-8 py-3 rounded-md text-sm font-bold uppercase">
                    Read More
                  </Button>
                </div>
              </div>
            ))}
          </div>

          {/* Right Arrow */}
          <button className="hidden md:flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md border border-gray-100 hover:bg-gray-50 text-gray-600">
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>
      </div>
    </section>
  );
}

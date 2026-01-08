"use client";

import { Button } from "./ui/Button";

const PRODUCTS = [
  // --- ROW 1 ---
  {
    id: 1,
    title: "Custom Chenille Patches",
    desc: "Transform your designs into vibrant masterpieces with custom embroidered patches. Timeless classics, everyone's favorite choice!",
    bgColor: "bg-[#DC2626]",
    image: "/assets/product-chenille.png",
    width: "lg:w-[532px]",
    isWide: true,
  },
  {
    id: 2,
    title: "Custom PVC Patches",
    desc: "Transform your designs into vibrant masterpieces with custom embroidered patches. Timeless classics, everyone's favorite choice!",
    bgColor: "bg-[#1A1A1A]",
    image: "/assets/product-pvc.png",
    width: "lg:w-[340px]",
    isWide: false,
  },
  {
    id: 3,
    title: "Custom Woven Patches",
    desc: "Transform your designs into vibrant masterpieces with custom embroidered patches. Timeless classics, everyone's favorite choice!",
    bgColor: "bg-[#2F4248]",
    image: "/assets/product-woven.png",
    width: "lg:w-[340px]",
    isWide: false,
  },

  // --- ROW 2 ---
  {
    id: 4,
    title: "Custom Leather Patches",
    desc: "Transform your designs into vibrant masterpieces with custom embroidered patches. Timeless classics, everyone's favorite choice!",
    bgColor: "bg-[#261818]",
    image: "/assets/product-leather.png",
    width: "lg:w-[340px]",
    isWide: false,
  },
  {
    id: 5,
    title: "Custom Shoes Charm",
    desc: "Transform your designs into vibrant masterpieces with custom embroidered patches. Timeless classics, everyone's favorite choice!",
    bgColor: "bg-[#D4A373]",
    image: "/assets/product-charm.png",
    width: "lg:w-[340px]",
    isWide: false,
  },
  {
    id: 6,
    title: "Custom Embroidery Patches",
    desc: "Transform your designs into vibrant masterpieces with custom embroidered patches. Timeless classics, everyone's favorite choice!",
    bgColor: "bg-[#22386E]",
    image: "/assets/product-embroidery.png",
    width: "lg:w-[532px]",
    isWide: true,
  },
];

export function ProductsGrid() {
  return (
    <section className="bg-white pt-6 pb-24 md:py-24 overflow-hidden">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20 space-y-4">
          <h2 className="text-4xl md:text-5xl font-extrabold text-brand-dark uppercase tracking-wide leading-tight">
            INFUSE YOUR STYLE WITH EXCLUSIVE <br />
            CUSTOM PATCH DESIGNS
          </h2>
          <p className="max-w-4xl mx-auto text-gray-600 text-lg leading-relaxed">
            From custom logo patches to iron-on patches, military patches, and custom Velcro patches, our tailored selection ensures a lasting impression, showcasing your unique style. At My Custom Patches, we're dedicated to providing custom-made patches that bring brand vision to life and take your product to the next level.
          </p>
        </div>

        {/* Grid Layout */}
        <div className="flex flex-wrap justify-center gap-[54px]">
          {PRODUCTS.map((product) => (
            <div
              key={product.id}
              className={`
                relative overflow-hidden rounded-[10px] p-6 md:p-8 text-white shadow-lg group
                h-[295px] w-full ${product.width} ${product.bgColor}
                transition-all duration-300 hover:shadow-2xl hover:-translate-y-1
              `}
            >
              {/* 
                 LAYER 1: Text Content (Z-Index 20 - ON TOP) 
                 - We set a max-width of 240px to force the line breaks to match Figma
                 - We use 'relative' to keep it in flow
              */}
              <div className="relative z-20 flex flex-col h-full justify-between items-start max-w-[240px]">
                <div>
                  <h3 className="text-xl md:text-2xl font-bold mb-3 leading-tight">
                    {product.title}
                  </h3>
                  <p className="text-[13px] leading-relaxed opacity-90 font-light">
                    {product.desc}
                  </p>
                </div>

                {/* Button: Reverted to White Box (Figma Style) */}
                <Button
                  className="bg-white text-brand-dark hover:bg-gray-100 border-none font-bold text-xs px-6 h-9 w-max rounded-md"
                  size="sm"
                >
                  Learn More
                </Button>
              </div>

              {/* 
                 LAYER 2: The Image (Z-Index 10 - BEHIND) 
                 - Positioned Absolute Right
                 - It's okay if it slides under the text slightly
              */}
              <div className="absolute top-0 right-[-10px] h-full w-[55%] flex items-center justify-center z-10 pointer-events-none">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-contain transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 ease-out"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

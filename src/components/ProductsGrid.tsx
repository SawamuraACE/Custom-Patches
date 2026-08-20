"use client";

import Image from "next/image";
import Link from "next/link";
import { Plus } from "lucide-react";
import { CheckerBand } from "./ui/CheckerBand";

const PRODUCTS = [
  {
    title: "Custom PVC Patches",
    price: "$0.91",
    image: "/assets/product-pvc-mockup.png",
    imageSize: { width: 312, height: 233 },
    link: "/custom-patches/custom-pvc-patches",
  },
  {
    title: "Custom Chenille Patches",
    price: "$0.91",
    image: "/assets/product-chenille-mockup.png",
    imageSize: { width: 312, height: 233 },
    link: "/custom-patches/custom-chenille-patches",
  },
  {
    title: "Custom Woven Patches",
    price: "$1.54",
    image: "/assets/product-woven-mockup.png",
    imageSize: { width: 311, height: 234 },
    link: "/custom-patches/custom-woven-patches",
  },
  {
    title: "Custom Leather Patches",
    price: "$1.74",
    image: "/assets/product-leather-mockup.png",
    imageSize: { width: 311, height: 234 },
    link: "/custom-patches/custom-leather-patches",
  },
  {
    title: "Custom Printed Patches",
    price: "$0.74",
    image: "/assets/product-printed-mockup.png",
    imageSize: { width: 220, height: 234 },
    link: "/custom-patches/custom-printed-patches",
  },
  {
    title: "Custom No BG 3D Embroidery",
    price: "$1.58",
    image: "/assets/product-3d-embroidery-mockup.png",
    imageSize: { width: 311, height: 233 },
    link: "/custom-patches/custom-3d-embroidery-transfer",
  },
  {
    title: "Custom Sequin Patches",
    price: "$1.44",
    image: "/assets/product-sequin-mockup.png",
    imageSize: { width: 243, height: 233 },
    link: "/custom-patches/custom-sequin-patch",
  },
];

function ProductImageFrame({
  image,
  title,
  imageSize = { width: 246, height: 233 },
}: {
  image: string;
  title: string;
  imageSize?: { width: number; height: number };
}) {
  return (
    <div className="relative aspect-square w-full flex items-center justify-center bg-white">
      <CheckerBand bleed />
      <Image
        src={image}
        alt={title}
        width={imageSize.width}
        height={imageSize.height}
        className="relative z-10 h-[62%] w-auto object-contain drop-shadow-md transition-transform duration-300 group-hover:scale-105"
      />
    </div>
  );
}

function ProductCard({ title, price, image, imageSize, link }: (typeof PRODUCTS)[number]) {
  return (
    <Link
      href={link}
      className="group relative flex flex-col rounded-2xl bg-white p-4 overflow-hidden"
    >
      <span className="absolute top-4 right-4 z-20 flex h-9 w-9 items-center justify-center rounded-full bg-brand-mint text-black group-hover:bg-brand-lime transition-colors">
        <Plus className="h-4 w-4" />
      </span>

      <ProductImageFrame image={image} title={title} imageSize={imageSize} />

      <div className="mt-4 flex items-end justify-between gap-2">
        <h3 className="font-mouse text-2xl sm:text-3xl text-black leading-tight">{title}</h3>
        <p className="shrink-0 text-right font-mouse text-2xl sm:text-3xl text-black">
          {price}
          <span className="block text-xs text-gray-500 font-sans">/per pc</span>
        </p>
      </div>
    </Link>
  );
}

export function ProductsGrid() {
  return (
    <section className="bg-brand-blue pt-16 pb-20 lg:pt-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="font-display text-4xl sm:text-5xl text-white">PICK YOUR PATCH TYPE</h2>
        <p className="mt-4 max-w-2xl font-mouse text-sm text-white/80 leading-relaxed">
          Transparent USD pricing. The per-piece price drops as quantity rises, so smaller orders cost more per piece.
          Each &quot;from&quot; price is for 2&quot; x 2&quot;, 1,000 pcs. Enter your size and quantity for your exact price.
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {/* Flagship promo card for embroidered patches */}
          <Link
            href="/custom-patches/custom-embroidered-patches"
            className="group relative flex flex-col rounded-2xl bg-white p-4 overflow-hidden"
          >
            <span className="absolute top-4 right-4 z-20 flex h-9 w-9 items-center justify-center rounded-full bg-brand-mint text-black group-hover:bg-brand-lime transition-colors">
              <Plus className="h-4 w-4" />
            </span>

            <div className="relative aspect-square w-full">
              <ProductImageFrame image="/assets/product-embroidered-mockup.png" title="Custom Embroidered Patches" />

              <div className="absolute inset-x-3 bottom-3 z-20 rounded-lg bg-white/95 p-3 opacity-0 translate-y-1 transition-all duration-200 group-hover:opacity-100 group-hover:translate-y-0">
                <span className="inline-block rounded-md bg-brand-lime px-2.5 py-1 font-mouse text-[11px] text-black mb-2">
                  Save 25% at 100+ pcs
                </span>
                <p className="font-mouse text-xs text-black/80 leading-relaxed">
                  We turn your creative vision into beautifully crafted embroidered patches with vivid thread colors.
                </p>
              </div>
            </div>

            <div className="mt-4 flex items-end justify-between gap-2">
              <h3 className="font-mouse text-2xl sm:text-3xl text-black leading-tight">Custom Embroidered Patches</h3>
              <span className="shrink-0 rounded-full border-2 border-black px-4 py-1.5 font-mouse text-xs text-black">
                From $0.91
              </span>
            </div>
          </Link>

          {PRODUCTS.map((product) => (
            <ProductCard key={product.title} {...product} />
          ))}

          <div
            className="pointer-events-none relative hidden items-end justify-center lg:col-start-3 lg:row-start-3 lg:flex"
            aria-hidden="true"
          >
            <Image
              src="/assets/Images_23.png"
              alt=""
              width={230}
              height={250}
              className="h-auto w-40 xl:w-48"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

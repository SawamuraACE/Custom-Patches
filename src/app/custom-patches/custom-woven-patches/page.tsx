import { ProductPageTemplate } from "@/components/templates/ProductPageTemplate";

export default function WovenPatchesPage() {
  return (
    <ProductPageTemplate
      // --- SEO & HEADER ---
      title="Custom Woven Patches"
      subtitle="High Detail. Smooth Finish. Modern Look."
      description="When detail matters, choose Woven. Unlike embroidery which uses thick threads on top of fabric, woven patches stitch thinner threads together to create a seamless, flat surface. This allows for microscopic detail, small text, and complex gradients that would be impossible with embroidery. Perfect for sportswear, airsoft teams, and intricate brand logos."

      // --- HERO GALLERY IMAGES ---
      heroImage="/assets/products/woven-hero.png"
      galleryImages={[
        "/assets/products/woven-group.png",
        "/assets/products/woven-back.png",
        "/assets/products/woven-lifestyle.png"
      ]}

      // --- FEATURES ---
      features={[
        "Capable of capturing tiny text and fine details",
        "Smooth, flat surface (no raised texture)",
        "Thinner and lighter than embroidery (great for sportswear)",
        "Tighter weave allows for cleaner lines",
        "Available with Merrowed (stitched) or Laser-cut borders",
        "Cost-effective for bulk orders"
      ]}

      // --- FAQS ---
      faqs={[
        {
          q: "Why choose Woven over Embroidered?",
          a: "Choose Woven if your design has small text (under 3mm), complex details, or gradients. If you want a classic 'puffy' feel, go Embroidered. If you want HD clarity, go Woven."
        },
        {
          q: "Are they cheaper than embroidery?",
          a: "Generally, yes! Woven patches use less material bulk and are faster to produce in high quantities, making them a very cost-effective option for large runs."
        },
        {
          q: "What is the standard backing?",
          a: "Most woven patches come with a smooth plastic backing for stability, or an Iron-on backing for easy application. Velcro is also very popular for tactical gear."
        },
        {
          q: "Do they look 'cheap' because they are flat?",
          a: "Not at all. In fact, many luxury sportswear brands (like soccer clubs) prefer woven patches because they look sharper, modern, and don't weigh down the jersey."
        }
      ]}

      // --- MASTERPIECES GALLERY ---
      masterpieceImages={[
        "/assets/products/woven-master-1.png",
        "/assets/products/woven-master-2.png",
        "/assets/products/woven-master-3.png",
        "/assets/products/woven-master-4.png",
      ]}
    />
  );
}

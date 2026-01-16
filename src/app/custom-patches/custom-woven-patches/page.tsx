import { ProductPageTemplate } from "@/components/templates/ProductPageTemplate";

export default function WovenPatchesPage() {
  return (
    <ProductPageTemplate
      // --- SEO & HEADER ---
      title="Custom Woven Patches"
      subtitle="High-Definition Detail. Professional Finish."
      description="Achieve intricate detail with custom woven patches that capture fine lines, small text, and complex designs impossible with traditional embroidery. Using ultrafine threads woven together (not stitched on top), woven patches create smooth, flat surfaces perfect for logos with tiny elements. Ideal for sportswear, corporate apparel, and brands requiring high-definition patch quality. Cost-effective for bulk orders. Standard turnaround: 12-14 days. Rush available: 4-7 days."

      // --- HERO GALLERY IMAGES ---
      heroImage="/assets/products/woven-hero.png"
      galleryImages={[
        "/assets/products/woven-group.png",
        "/assets/products/woven-back.png",
        "/assets/products/woven-lifestyle.png"
      ]}

      // --- FEATURES ---
      features={[
        "Captures intricate details and text as small as 1mm",
        "Smooth, flat surface ideal for sportswear and performance apparel",
        "Thinner and lighter than embroidered patches",
        "Tighter weave creates crisp, clean lines and sharp edges",
        "Cost-effective for bulk production runs (500+ units)",
        "Heat press or sew-on backing options available",
        "Perfect for complex logos, team crests, and detailed designs",
        "MOQ starting at 50 units with significant volume discounts"
      ]}

      // --- FAQS ---
      faqs={[
        {
          q: "When should clothing brands choose woven over embroidered patches?",
          a: "Choose woven patches when your design includes small text under 3mm tall, fine lines, gradients, or intricate details. Woven patches excel at high-definition reproduction that embroidery can't achieve. They're also thinner and lighter, making them ideal for performance sportswear, jerseys, and lightweight apparel where bulk would be undesirable."
        },
        {
          q: "Are woven patches less durable than embroidered?",
          a: "Not at all. Woven patches meet the same US durability standards as embroidery, withstanding 50+ commercial wash cycles. The tightly woven construction actually prevents fraying and maintains appearance through heavy use. Many premium sportswear brands prefer woven specifically for its durability combined with refined appearance."
        },
        {
          q: "What's the cost difference between woven and embroidered patches?",
          a: "Woven patches typically cost 10-20% less than embroidered patches, especially on bulk orders (500+ units). The streamlined production process and reduced material usage make woven very economical for clothing brands producing large quantities while maintaining premium quality."
        },
        {
          q: "Can woven patches be applied with heat press?",
          a: "Yes. We can provide woven patches with heat press transfer backing that applies in 10-15 seconds at 320°F. This combines the high-definition quality of woven patches with fast production application, perfect for clothing brands with high output requirements."
        },
        {
          q: "What file specifications work best for woven patches?",
          a: "Vector files (AI, EPS, PDF) are ideal since woven patches can reproduce extremely fine detail. The tighter weave means we can capture details down to 1mm, so high-resolution artwork translates directly to high-definition patches. We recommend providing artwork at actual patch size or larger."
        },
        {
          q: "Do woven patches look 'cheaper' because they're flat?",
          a: "Absolutely not. Many luxury brands choose woven patches specifically for their sophisticated, modern appearance. The flat, refined finish looks high-end on sportswear, polo shirts, and contemporary apparel. It's a different aesthetic than raised embroidery – not lesser quality, just a different premium look."
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

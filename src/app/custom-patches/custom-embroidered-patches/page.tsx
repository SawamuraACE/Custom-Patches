import { ProductPageTemplate } from "@/components/templates/ProductPageTemplate";

export default function EmbroideredPatchesPage() {
  return (
    <ProductPageTemplate
      // --- 1. SEO & HEADER ---
      title="Custom Embroidered Patches"
      subtitle="Premium Quality. Heat Press Efficiency."
      description="Elevate your clothing line with custom embroidered patches that combine traditional craftsmanship with innovative heat press transfer technology. Our premium embroidered patches deliver the classic 3D textured look your customers expect, while our heat press application method gives your production team the speed and consistency needed to scale. Perfect for clothing brands, corporate apparel programs, and promotional products. Standard turnaround: 12-14 days. Rush available: 4-7 days."
      
      // --- 2. HERO GALLERY IMAGES (The 4 Product Shots) ---
      heroImage="/assets/products/embroidered-hero.png"
      galleryImages={[
        "/assets/products/embroidered-group.png", // Shows Variety
        "/assets/products/embroidered-back.png",  // Shows Technical Backing
        "/assets/products/embroidered-jacket.png" // Shows Lifestyle/Context
      ]}

      // --- 3. MASTERPIECES GALLERY (The NEW 4 Customer Showcase Images) ---
      masterpieceImages={[
        "/assets/products/embroidered-master-1.png",
        "/assets/products/embroidered-master-2.png",
        "/assets/products/embroidered-master-3.png",
        "/assets/products/embroidered-master-4.png",
      ]}

      // --- 3. FEATURES (Selling Points) ---
      features={[
        "Heat Press Transfer Technology – Apply in seconds, looks like direct embroidery",
        "Classic 3D textured look with premium thread quality",
        "Withstands 50+ commercial wash cycles – US quality standards",
        "Up to 9 thread colors for complex designs",
        "Merrowed or laser-cut borders for professional finishing",
        "Perfect placement consistency across large production runs",
        "MOQ as low as 50 units – ideal for testing new designs",
        "Rush production available in 4-7 days for tight deadlines"
      ]}

      // --- 4. FAQ CONTENT (Specific to Embroidery) ---
      faqs={[
        {
          q: "How does heat press transfer technology work for embroidered patches?",
          a: "Our embroidered patches are created on special placement tape backing. You position the patch on your garment and use a commercial heat press for 10-15 seconds at 320°F. The result looks identical to direct embroidery but applies in seconds instead of minutes, dramatically improving production efficiency for clothing brands."
        },
        {
          q: "What's the durability compared to sewn-on patches?",
          a: "Our heat press embroidered patches undergo rigorous wash testing and withstand 50+ commercial wash cycles without lifting or degrading. The industrial-strength adhesive creates permanent bonds equivalent to traditional sewn applications, meeting US quality standards for commercial apparel."
        },
        {
          q: "What's your minimum order quantity for clothing brands?",
          a: "MOQs start at just 50 units, perfect for testing new designs or limited edition releases. Volume pricing applies at 100, 500, and 1000+ units, helping you scale as your brand grows while keeping initial inventory risk low."
        },
        {
          q: "Can you match our brand's Pantone colors?",
          a: "Yes, we can match Pantone colors using our comprehensive thread charts with hundreds of color options. We'll provide thread color samples for your approval before production begins to ensure perfect brand consistency across all your patches."
        },
        {
          q: "What turnaround times do you offer?",
          a: "Standard production is 12-14 days from design approval to delivery. For urgent needs, we offer rush production in 4-7 days. This includes digitization, sampling, full production, quality inspection, and shipping – perfect for keeping up with your production schedule."
        },
        {
          q: "What file format do you need for our logo?",
          a: "Vector files (AI, EPS, PDF) work best. High-resolution raster images (PNG, JPG at 300+ DPI) are also acceptable. If you only have low-resolution files, our design team can recreate them for a small fee ($75-200 depending on complexity)."
        }
      ]}
    />
  );
}

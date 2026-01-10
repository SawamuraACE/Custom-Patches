import { ProductPageTemplate } from "@/components/templates/ProductPageTemplate";

export default function LeatherPatchesPage() {
  return (
    <ProductPageTemplate
      // --- SEO & HEADER ---
      title="Custom Leather Patches"
      subtitle="Rugged. Authentic. Premium."
      description="Add a touch of timeless class to your brand. Our Custom Leather Patches are crafted from high-quality genuine or faux leather, featuring logos that are debossed (pressed), embossed (raised), or printed. They are the #1 choice for hats, denim brands, and outdoor apparel, aging beautifully over time."

      // --- HERO GALLERY IMAGES ---
      heroImage="/assets/products/leather-hero.png"
      galleryImages={[
        "/assets/products/leather-group.png",
        "/assets/products/leather-back.png",
        "/assets/products/leather-lifestyle.png"
      ]}

      // --- FEATURES ---
      features={[
        "Available in Genuine Leather (Real) or Faux Leather (Vegan)",
        "Deep Debossing for a premium 'branded' look",
        "Multiple colors: Cognac, Tan, Dark Brown, Black, and more",
        "Includes a sewing channel for easy stitching",
        "Can be applied via Heat Press (Iron-on) or Sewing",
        "Perfect for Trucker Hats, Beanies, and Jeans"
      ]}

      // --- FAQS ---
      faqs={[
        {
          q: "Real Leather vs. Faux Leather: Which should I choose?",
          a: "Real Leather offers that authentic smell and patina that gets better with age (great for premium brands). Faux Leather is uniform, waterproof, vegan-friendly, and often more affordable. Both look amazing."
        },
        {
          q: "How do I attach leather patches to hats?",
          a: "The most common method is using a Heat Press with our special heat-activated backing. Alternatively, many hat manufacturers prefer to sew them on using the pre-made stitch channel border."
        },
        {
          q: "Can I wash garments with leather patches?",
          a: "Faux leather is machine washable! Real leather requires more care—we recommend hand washing or dry cleaning to prevent the leather from drying out or shrinking."
        },
        {
          q: "Can I add color to the logo?",
          a: "Yes! Standard leather patches use 'Debossing' (burnt/pressed look), but we can also Screen Print or UV Print full-color logos directly onto the leather surface."
        }
      ]}

      // --- MASTERPIECES GALLERY ---
      masterpieceImages={[
        "/assets/products/leather-master-1.png",
        "/assets/products/leather-master-2.png",
        "/assets/products/leather-master-3.png",
        "/assets/products/leather-master-4.png",
      ]}
    />
  );
}

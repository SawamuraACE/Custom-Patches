import { ProductPageTemplate } from "@/components/templates/ProductPageTemplate";

export default function ChenillePatchesPage() {
  return (
    <ProductPageTemplate
      // --- SEO & HEADER ---
      title="Custom Chenille Patches"
      subtitle="Premium Varsity Aesthetic. Heat Press Efficiency."
      description="Elevate your streetwear and varsity collections with custom chenille patches featuring signature plush texture. Our innovative heat press transfer technology brings classic chenille craftsmanship to modern production speeds – perfect for clothing brands creating letterman jackets, hoodies, and retro-inspired apparel. The bold, touchable texture customers love, with the production consistency brands need. Standard turnaround: 12-14 days. Rush available: 4-7 days."

      // --- HERO GALLERY IMAGES ---
      heroImage="/assets/products/chenille-hero.png"
      galleryImages={[
        "/assets/products/chenille-group.png",
        "/assets/products/chenille-back.png",
        "/assets/products/chenille-jacket.png"
      ]}

      // --- FEATURES ---
      features={[
        "Heat Press Transfer Technology for chenille patches – applies in seconds",
        "Signature raised, velvety chenille texture customers love to touch",
        "Perfect for streetwear, varsity jackets, hoodies, and retro collections",
        "Durable felt backing withstands heavy fabric applications",
        "Can combine chenille with standard embroidery for intricate details",
        "MOQ as low as 50 units – test designs before scaling",
        "Ideal for large letters, mascots, and bold statement pieces",
        "Rush production available in 4-7 days for collection launches"
      ]}

      // --- FAQS ---
      faqs={[
        {
          q: "How does heat press transfer work for chenille patches?",
          a: "Our chenille patches are mounted on heat press placement tape. Using a commercial heat press at 320°F for 10-15 seconds creates a permanent bond. The result maintains the premium chenille texture while dramatically reducing application time compared to traditional sewing – perfect for clothing brands producing hundreds of units."
        },
        {
          q: "What types of designs work best for chenille patches?",
          a: "Chenille yarn is thick and creates bold, raised texture. It works best for large letters, numbers, simple mascots, and statement graphics. For intricate details within chenille designs, we can combine standard embroidery thread to create contrast and definition."
        },
        {
          q: "Are chenille patches durable enough for commercial apparel?",
          a: "Yes. Our chenille patches on heavy felt backing withstand 50+ commercial wash cycles. The chenille maintains its plush appearance and doesn't mat down with proper care. Ideal for letterman jackets, premium hoodies, and varsity-style streetwear."
        },
        {
          q: "What's your minimum order quantity?",
          a: "MOQs start at 50 units, allowing clothing brands to test chenille patches in limited collections before committing to large production runs. Volume pricing applies at 100, 500, and 1000+ units."
        },
        {
          q: "Can you match specific chenille yarn colors?",
          a: "Yes. We stock a wide range of chenille yarn colors and can match your brand palette. We'll provide color samples for approval before production to ensure consistency across your entire collection."
        },
        {
          q: "What turnaround time should we expect?",
          a: "Standard production is 12-14 days from design approval. For urgent collection launches or restocks, we offer rush production in 4-7 days. This includes digitization, sampling, production, quality inspection, and shipping."
        }
      ]}

      // --- MASTERPIECES GALLERY ---
      masterpieceImages={[
        "/assets/products/chenille-master-1.png",
        "/assets/products/chenille-master-2.png",
        "/assets/products/chenille-master-3.png",
        "/assets/products/chenille-master-4.png",
      ]}
    />
  );
}

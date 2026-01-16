import { ProductPageTemplate } from "@/components/templates/ProductPageTemplate";

export default function LeatherPatchesPage() {
  return (
    <ProductPageTemplate
      // --- SEO & HEADER ---
      title="Custom Leather Patches"
      subtitle="Authentic Craftsmanship. Premium Brand Positioning."
      description="Position your brand as premium with custom leather patches that communicate quality and authenticity. Available in genuine leather or vegan-friendly faux leather, these patches feature debossed, embossed, or printed logos that develop beautiful patina over time. Perfect for denim brands, outdoor apparel, trucker hats, and leather goods. Heat press application available for production efficiency. Standard turnaround: 12-14 days. Rush available: 4-7 days."

      // --- HERO GALLERY IMAGES ---
      heroImage="/assets/products/leather-hero.png"
      galleryImages={[
        "/assets/products/leather-group.png",
        "/assets/products/leather-back.png",
        "/assets/products/leather-lifestyle.png"
      ]}

      // --- FEATURES ---
      features={[
        "Genuine leather or vegan faux leather options available",
        "Debossed (pressed) or embossed (raised) branding effects",
        "Full-color printing on leather surface also available",
        "Heat press application creates permanent bond in seconds",
        "Multiple color options: Cognac, tan, dark brown, black, natural",
        "Develops authentic patina over time (genuine leather)",
        "Perfect for denim jeans, trucker hats, beanies, bags",
        "MOQ starting at 50 units with volume pricing"
      ]}

      // --- FAQS ---
      faqs={[
        {
          q: "Should clothing brands choose genuine or faux leather patches?",
          a: "Genuine leather offers authentic smell, texture, and develops beautiful patina over time – perfect for premium brands emphasizing heritage and craftsmanship. Faux leather is vegan-friendly, waterproof, more uniform in color, and often more cost-effective for large production runs. Both look premium; choice depends on brand positioning and target market values."
        },
        {
          q: "Can leather patches be applied with heat press?",
          a: "Yes. We can provide leather patches with heat-activated backing that bonds permanently using commercial heat press at 300°F for 15-20 seconds. This works especially well for trucker hat production and denim applications, dramatically faster than traditional sewing while maintaining premium appearance."
        },
        {
          q: "How do leather patches hold up to washing?",
          a: "Faux leather patches are machine washable and maintain appearance through 50+ cycles. Genuine leather requires more care – we recommend spot cleaning or dry cleaning to preserve the leather's natural properties and prevent drying or shrinking. For jeans and jackets, genuine leather develops character with age."
        },
        {
          q: "Can you add color to leather patches?",
          a: "Yes. Standard leather patches use debossing (pressed/burnt appearance). We can also screen print or UV print full-color logos directly onto the leather surface, allowing for multi-color designs while maintaining the premium leather aesthetic. Great for brand logos with specific color requirements."
        },
        {
          q: "What's your minimum order quantity for leather patches?",
          a: "MOQs start at 50 units. Leather patches have slightly higher setup costs due to custom die-cutting and stamping, but per-unit costs decrease significantly at 100, 500, and 1000+ units. The premium positioning often justifies the investment for brands targeting quality-conscious customers."
        },
        {
          q: "What turnaround times do you offer?",
          a: "Standard production is 12-14 days including custom die-cutting, stamping/printing, and quality inspection. Rush production in 4-7 days is available for urgent collection launches or restock situations. Lead time includes creating custom dies which are then reused for future orders at no additional charge."
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

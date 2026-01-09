import { ProductPageTemplate } from "@/components/templates/ProductPageTemplate";

export default function LeatherPatchesPage() {
  return (
    <ProductPageTemplate
      title="Custom Leather Patches"
      subtitle="Premium, Timeless, Professional"
      description="Elevate your brand with custom leather patches. Made from genuine leather with embossed or laser-engraved designs, these premium patches convey quality and sophistication. Perfect for luxury brands, heritage products, and premium merchandise that demands excellence."
      
      heroImage="/assets/products/leather-hero.png"
      galleryImages={[
        "/assets/products/leather-group.png",
        "/assets/products/leather-back.png",
        "/assets/products/leather-detail.png"
      ]}

      features={[
        "Genuine leather construction",
        "Embossed or laser-engraved designs",
        "Premium luxury appearance",
        "Multiple leather color options",
        "Available with sew-on backing",
        "Perfect for heritage and luxury brands"
      ]}

      faqs={[
        {
          q: "Is this real leather?",
          a: "Yes! We use genuine leather patches. We offer natural full-grain leather and various colored leather options."
        },
        {
          q: "How are designs applied to leather?",
          a: "Designs are embossed or laser-engraved into the leather surface, creating a permanent, high-quality finish."
        },
        {
          q: "Are leather patches durable?",
          a: "Extremely! Leather patches age gracefully and become even more beautiful over time with proper care and use."
        },
        {
          q: "What backing options are available?",
          a: "Leather patches come with sew-on backing. They can be attached to jackets, bags, and other leather goods."
        }
      ]}
    />
  );
}

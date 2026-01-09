import { ProductPageTemplate } from "@/components/templates/ProductPageTemplate";

export default function WovenPatchesPage() {
  return (
    <ProductPageTemplate
      title="Custom Woven Patches"
      subtitle="Fine Details, Premium Quality"
      description="Discover the elegance of custom woven patches. Using interlaced threads to create a smooth, detailed surface, woven patches are perfect for intricate designs, fine text, and photographic details. Ideal for corporate brands, high-end merchandise, and detailed artwork."
      
      heroImage="/assets/products/woven-hero.png"
      galleryImages={[
        "/assets/products/woven-group.png",
        "/assets/products/woven-back.png",
        "/assets/products/woven-logo.png"
      ]}

      features={[
        "Fine, detailed finish with smooth surface",
        "Perfect for intricate designs and text",
        "Up to 12 colors per design",
        "Premium look and feel",
        "Available in all backing types",
        "Ideal for corporate and high-end brands"
      ]}

      faqs={[
        {
          q: "What's the difference between woven and embroidered?",
          a: "Woven patches use interlaced threads creating a smooth surface, while embroidered patches use stitched threads on backing. Woven is better for fine details."
        },
        {
          q: "Can woven patches handle small text?",
          a: "Yes! Woven patches excel at reproducing small text and fine details. Text can be as small as 0.15 inches and still be legible."
        },
        {
          q: "Are woven patches more expensive?",
          a: "Woven patches are typically priced between embroidered and printed patches, offering excellent value for detailed designs."
        },
        {
          q: "How many colors can I use?",
          a: "Woven patches can include up to 12 colors per design, giving you excellent flexibility for complex artwork."
        }
      ]}
    />
  );
}

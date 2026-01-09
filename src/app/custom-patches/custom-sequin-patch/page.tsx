import { ProductPageTemplate } from "@/components/templates/ProductPageTemplate";

export default function SequinPatchPage() {
  return (
    <ProductPageTemplate
      title="Custom Sequin Patches"
      subtitle="Glitzy, Eye-Catching, Statement-Making"
      description="Make a statement with custom sequin patches! These dazzling patches feature reversible sequins that shimmer and change colors with movement. Perfect for fashion, events, merchandise, and anyone wanting to add sparkle and pizzazz to their style."
      
      heroImage="/assets/products/sequin-hero.png"
      galleryImages={[
        "/assets/products/sequin-group.png",
        "/assets/products/sequin-back.png",
        "/assets/products/sequin-sparkle.png"
      ]}

      features={[
        "Reversible sequins with color-changing effect",
        "Eye-catching and glamorous appearance",
        "Perfect for fashion and events",
        "Durable sequin construction",
        "Multiple color combinations available",
        "Great for merchandise and promotions"
      ]}

      faqs={[
        {
          q: "How do reversible sequins work?",
          a: "Reversible sequins flip between two colors as they're brushed or moved, creating an interactive, eye-catching effect."
        },
        {
          q: "Are sequin patches durable?",
          a: "Yes! Quality sequin patches are designed to withstand regular wear, though gentle washing is recommended to preserve the effect."
        },
        {
          q: "What color combinations are available?",
          a: "We offer many popular combinations like silver-to-gold, pink-to-silver, and custom color options to match your brand."
        },
        {
          q: "Is it good for merchandise?",
          a: "Absolutely! Sequin patches are incredibly popular for merchandise, fashion items, and promotional products."
        }
      ]}
    />
  );
}

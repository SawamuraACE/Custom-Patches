import { ProductPageTemplate } from "@/components/templates/ProductPageTemplate";

export default function PVCPatchesPage() {
  return (
    <ProductPageTemplate
      title="Custom PVC Patches"
      subtitle="Modern, Durable, and Waterproof"
      description="Experience next-generation patch technology with custom PVC patches. Made from flexible rubber, these patches are waterproof, extremely durable, and perfect for outdoor gear, tactical equipment, and adventure wear. They offer unlimited color options and stunning 3D effects."
      
      heroImage="/assets/products/pvc-hero.png"
      galleryImages={[
        "/assets/products/pvc-group.png",
        "/assets/products/pvc-back.png",
        "/assets/products/pvc-lifestyle.png"
      ]}
      
      masterpieceImages={[
        "/assets/products/pvc-master-1.png",
        "/assets/products/pvc-master-2.png",
        "/assets/products/pvc-master-3.png",
        "/assets/products/pvc-master-4.png"
      ]}

      features={[
        "100% waterproof and weather-resistant",
        "Extremely durable and flexible",
        "Unlimited color options and gradients",
        "3D effects and depth",
        "Perfect for outdoor and tactical gear",
        "Velcro and sew-on backing available"
      ]}

      faqs={[
        {
          q: "Are PVC patches waterproof?",
          a: "Yes! PVC patches are completely waterproof and resistant to UV fading, making them ideal for outdoor use."
        },
        {
          q: "Can PVC patches handle extreme conditions?",
          a: "Absolutely. PVC patches are designed for rugged conditions including extreme temperatures, moisture, and UV exposure."
        },
        {
          q: "What designs work best for PVC?",
          a: "PVC patches excel with bold designs, logos, and 3D effects. Complex details and gradients look stunning on PVC."
        },
        {
          q: "How long do PVC patches last?",
          a: "With proper care, PVC patches can last for many years. They don't fade or deteriorate easily, even with heavy use."
        }
      ]}
    />
  );
}

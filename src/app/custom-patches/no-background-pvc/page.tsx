import { ProductPageTemplate } from "@/components/templates/ProductPageTemplate";

export default function NoBackgroundPVCPage() {
  return (
    <ProductPageTemplate
      title="No Background PVC Patches"
      subtitle="Clean, Modern, Minimalist"
      description="Get the perfect custom patch without the background. Our no-background PVC patches feature clean edges and transparent backing, allowing your design to stand out on any surface. Ideal for modern brands seeking a sleek, contemporary look."
      
      heroImage="/assets/products/no-bg-pvc-hero.png"
      galleryImages={[
        "/assets/products/no-bg-pvc-group.png",
        "/assets/products/no-bg-pvc-back.png",
        "/assets/products/no-bg-pvc-clean.png"
      ]}

      features={[
        "No background or white space",
        "Clean, precise edges",
        "Transparent PVC material",
        "Modern minimalist design",
        "100% waterproof",
        "Perfect for contemporary brands"
      ]}

      faqs={[
        {
          q: "How is the background removed?",
          a: "We use precision cutting and transparent PVC material to eliminate the background, showing only your design."
        },
        {
          q: "Will it look good on different surfaces?",
          a: "Absolutely! No-background patches work beautifully on any color or material since there's no white or colored backing."
        },
        {
          q: "Is it still waterproof?",
          a: "Yes! No-background PVC patches maintain full waterproof properties while offering a cleaner aesthetic."
        },
        {
          q: "How do I apply it?",
          a: "These patches come with velcro or sew-on backing depending on your needs. Apply just like any other patch."
        }
      ]}
    />
  );
}

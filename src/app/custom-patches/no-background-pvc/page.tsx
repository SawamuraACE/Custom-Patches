import { ProductPageTemplate } from "@/components/templates/ProductPageTemplate";

export default function NoBgPvcPage() {
  return (
    <ProductPageTemplate
      // --- SEO & HEADER ---
      title="No Background PVC Patches"
      subtitle="Precision Cut. Modern Aesthetic. Zero Bulk."
      description="Achieve the cleanest look possible with No Background PVC patches. Unlike traditional patches that sit on a base shape (circle/square), these are die-cut exactly to the outline of your design. Whether it's floating text or a complex logo, the 'No Background' style integrates seamlessly with your gear, making it look like it belongs there."
      
      // --- HERO GALLERY IMAGES ---
      heroImage="/assets/products/nobg-pvc-hero.png"
      galleryImages={[
        "/assets/products/nobg-pvc-group.png",
        "/assets/products/nobg-pvc-back.png",
        "/assets/products/nobg-pvc-lifestyle.png"
      ]}

      // --- FEATURES ---
      features={[
        "Die-cut exactly to your logo's shape (No square/circle borders)",
        "Lightweight and streamlined (Less bulk)",
        "Waterproof and durable soft rubber",
        "Ideal for floating text or irregular shapes",
        "Available with Velcro or Heat Press backing",
        "Modern, tactical, and high-tech look"
      ]}

      // --- FAQS ---
      faqs={[
        {
          q: "What does 'No Background' mean?",
          a: "It means we cut the patch exactly to the edge of your design elements. There is no extra material or 'border' shape surrounding your logo. It creates a floating effect."
        },
        {
          q: "Are small details possible?",
          a: "Yes, but there are limits. Since we are cutting rubber, elements usually need to be at least 2mm thick. If your design has floating islands (unconnected parts), we use a thin transparent base to hold them together."
        },
        {
          q: "Is Velcro available for these?",
          a: "Yes! We laser-cut the Velcro to match the exact shape of your PVC design, so it sits flush on your gear."
        },
        {
          q: "What is the minimum order?",
          a: "No minimums! Whether you need a single prototype or 500 pieces for a unit, we can manufacture it."
        }
      ]}

      // --- MASTERPIECES GALLERY ---
      masterpieceImages={[
        "/assets/products/nobg-pvc-master-1.png",
        "/assets/products/nobg-pvc-master-2.png",
        "/assets/products/nobg-pvc-master-3.png",
        "/assets/products/nobg-pvc-master-4.png",
      ]}
    />
  );
}

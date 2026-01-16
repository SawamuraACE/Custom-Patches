import { ProductPageTemplate } from "@/components/templates/ProductPageTemplate";

export default function PVCPatchesPage() {
  return (
    <ProductPageTemplate
      title="Custom PVC Patches"
      subtitle="Waterproof Durability. Modern Aesthetics."
      description="Deliver next-level durability with custom PVC (rubber) patches designed for outdoor apparel, tactical gear, and adventure brands. Made from flexible, waterproof rubber with stunning 3D effects and unlimited color options, PVC patches withstand the harshest conditions while maintaining premium appearance. Perfect for outdoor brands, workwear, and tactical clothing lines requiring maximum durability. Standard turnaround: 12-14 days. Rush available: 4-7 days."

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
        "100% waterproof and weather-resistant – perfect for outdoor apparel",
        "UV-resistant colors that don't fade in sunlight",
        "Flexible rubber material withstands extreme temperatures",
        "Stunning 3D depth effects and raised details",
        "Unlimited color options including gradients and metallics",
        "Velcro, sew-on, or adhesive backing options",
        "Extremely durable – withstands 100+ wash cycles",
        "MOQ starting at 50 units with volume pricing available"
      ]}

      faqs={[
        {
          q: "Why choose PVC patches for outdoor apparel brands?",
          a: "PVC patches are 100% waterproof, UV-resistant, and flexible in extreme temperatures (-40°F to 160°F). Unlike fabric patches that fade, wear, or absorb moisture, PVC maintains appearance and integrity through years of outdoor use. Ideal for hiking gear, tactical clothing, outdoor workwear, and adventure apparel brands."
        },
        {
          q: "Can PVC patches handle commercial washing?",
          a: "Yes. PVC patches withstand 100+ commercial wash cycles without degradation. They're resistant to detergents, bleach (in normal concentrations), and high-temperature drying. This makes them perfect for workwear and uniforms that require frequent, heavy-duty washing."
        },
        {
          q: "What design capabilities does PVC offer?",
          a: "PVC excels at 3D effects, raised details, and complex color work including gradients and metallic finishes. The molding process allows for depth and dimension impossible with fabric patches. Logos, mascots, and intricate designs translate beautifully to PVC."
        },
        {
          q: "How are PVC patches applied to garments?",
          a: "PVC patches typically attach via Velcro backing (popular for tactical gear allowing patch swapping), strong adhesive backing, or sewn on using the border edge. For production runs, we can customize backing to match your manufacturing process."
        },
        {
          q: "What's your MOQ and pricing structure?",
          a: "Minimum order is 50 units. PVC patches have slightly higher per-unit costs than fabric patches due to mold creation, but prices decrease significantly at 100, 500, and 1000+ units. The extreme durability often makes PVC more cost-effective long-term for rugged applications."
        },
        {
          q: "Can you create custom molds for unique shapes?",
          a: "Absolutely. We create custom molds for any shape design you need. While there's a one-time mold fee, it's included in your first order and reorders use the existing mold at no additional charge, making repeated orders very economical."
        }
      ]}
    />
  );
}

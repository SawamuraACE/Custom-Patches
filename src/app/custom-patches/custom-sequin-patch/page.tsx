import { ProductPageTemplate } from "@/components/templates/ProductPageTemplate";

export default function SequinPatchesPage() {
  return (
    <ProductPageTemplate
      // --- SEO & HEADER ---
      title="Custom Sequin Patches"
      subtitle="Sparkle. Shine. Stand Out."
      description="Add a touch of glam to your apparel with Custom Sequin Patches. Whether you want a simple glittery design or the popular 'Reversible Flip' sequins that change color when you brush them, these patches are pure fun. Perfect for fashion brands, dance teams, and children's clothing."
      
      // --- HERO GALLERY IMAGES ---
      heroImage="/assets/products/sequin-hero.png"
      galleryImages={[
        "/assets/products/sequin-group.png",
        "/assets/products/sequin-back.png",
        "/assets/products/sequin-lifestyle.png"
      ]}

      // --- FEATURES ---
      features={[
        "Available in Reversible (Flip) Sequins",
        "High-sparkle finish for maximum visibility",
        "Soft felt backing for easy sewing",
        "Vibrant colors that don't fade",
        "Perfect for T-shirts, Totes, and Jackets",
        "Unique interactive texture"
      ]}

      // --- FAQS ---
      faqs={[
        {
          q: "Can I get the 'Flip' sequins?",
          a: "Yes! Reversible sequins (two-tone) are our most popular option. You can brush them up to show one color/image, and down to show another."
        },
        {
          q: "Are they machine washable?",
          a: "We recommend hand washing and air drying for sequin patches to prevent the sequins from snagging or bending in a machine."
        },
        {
          q: "How do I attach them?",
          a: "Sequin patches are usually Sew-On only, as the heat from an iron can damage the plastic sequins. We provide a felt border to make sewing easy."
        },
        {
          q: "Is there a minimum order?",
          a: "No minimums! We can create a single custom sequin patch or produce thousands for your clothing line."
        }
      ]}

      // --- MASTERPIECES GALLERY ---
      masterpieceImages={[
        "/assets/products/sequin-master-1.png",
        "/assets/products/sequin-master-2.png",
        "/assets/products/sequin-master-3.png",
        "/assets/products/sequin-master-4.png",
      ]}
    />
  );
}

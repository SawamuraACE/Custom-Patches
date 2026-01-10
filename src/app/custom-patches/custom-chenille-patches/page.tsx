import { ProductPageTemplate } from "@/components/templates/ProductPageTemplate";

export default function ChenillePatchesPage() {
  return (
    <ProductPageTemplate
      // --- SEO & HEADER ---
      title="Custom Chenille Patches"
      subtitle="Bold, Fluffy, and Old-School Cool."
      description="Bring the classic Varsity look to life with Custom Chenille Patches. Known for their plush, carpet-like texture, these patches are the gold standard for Letterman jackets and retro apparel. They are bold, simple, and incredibly soft to the touch."

      // --- HERO GALLERY IMAGES ---
      heroImage="/assets/products/chenille-hero.png"
      galleryImages={[
        "/assets/products/chenille-group.png",
        "/assets/products/chenille-back.png",
        "/assets/products/chenille-jacket.png"
      ]}

      // --- FEATURES ---
      features={[
        "Signature fluffy 'towel' texture",
        "Perfect for Varsity Jackets & Hoodies",
        "Mounted on sturdy felt backing",
        "Can include embroidery for fine details",
        "Available in Iron-on or Sew-on",
        "Best for large, simple shapes (Letters, Mascots)"
      ]}

      // --- FAQS ---
      faqs={[
        {
          q: "What is Chenille exactly?",
          a: "Chenille is a type of yarn that creates a raised, tufted, velvety surface. It looks and feels like a soft carpet or towel. It is most famous for use on Letterman/Varsity jackets."
        },
        {
          q: "Can I do small detailed designs with Chenille?",
          a: "No. Chenille yarn is thick, so it works best for large, bold shapes like letters or simple mascots. For tiny details, we combine Chenille with standard Embroidery."
        },
        {
          q: "How long do they last?",
          a: "Chenille patches are very durable, especially when sewn onto heavy garments like wool jackets. They maintain their fluffiness for years if cared for properly."
        },
        {
          q: "What is the standard backing?",
          a: "Chenille patches typically come on a stiff felt backing to support the yarn. We can add an iron-on layer, but for heavy jackets, we highly recommend sewing them on."
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

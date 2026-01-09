import { ProductPageTemplate } from "@/components/templates/ProductPageTemplate";

export default function EmbroideredPatchesPage() {
  return (
    <ProductPageTemplate
      // --- 1. SEO & HEADER ---
      title="Custom Embroidered Patches"
      subtitle="The Classic Look. The Premium Feel."
      description="Experience the timeless tradition of embroidery. Using high-quality threads stitched onto a durable twill backing, our custom embroidered patches offer a classic, textured look that conveys professionalism and quality. Perfect for uniforms, motorcycle clubs, fashion brands, and military gear. We use high-speed digitized machines to ensure every stitch is precise."
      
      // --- 2. HERO GALLERY IMAGES (The 4 Product Shots) ---
      heroImage="/assets/products/embroidered-hero.png"
      galleryImages={[
        "/assets/products/embroidered-group.png", // Shows Variety
        "/assets/products/embroidered-back.png",  // Shows Technical Backing
        "/assets/products/embroidered-jacket.png" // Shows Lifestyle/Context
      ]}

      // --- 3. MASTERPIECES GALLERY (The NEW 4 Customer Showcase Images) ---
      masterpieceImages={[
        "/assets/products/embroidered-master-1.png",
        "/assets/products/embroidered-master-2.png",
        "/assets/products/embroidered-master-3.png",
        "/assets/products/embroidered-master-4.png",
      ]}

      // --- 3. FEATURES (Selling Points) ---
      features={[
        "Classic 3D textured look and feel",
        "Durable, washable, and fade-resistant threads",
        "Available in Iron-on, Velcro, Sew-on, or Adhesive backing",
        "Up to 9 thread colors included per design",
        "Merrowed border (classic) or Laser-cut border (complex shapes)",
        "Perfect for Hats, Jackets, Uniforms, and Bags"
      ]}

      // --- 4. FAQ CONTENT (Specific to Embroidery) ---
      faqs={[
        {
          q: "What is the difference between Embroidered and Woven patches?",
          a: "Embroidered patches use thicker thread stitched ONTO a fabric backing, creating a traditional raised feel. Woven patches use thinner threads woven TOGETHER, creating a smooth surface better for tiny details and text."
        },
        {
          q: "How much detail can I include?",
          a: "Embroidery is great for bold designs. Text should be at least 0.25 inches tall to be legible. If your design has tiny details or gradients, we might recommend Woven or Printed patches instead."
        },
        {
          q: "What backing options are available?",
          a: "We offer Iron-on (most popular for DIY), Velcro (Hook & Loop) for tactical gear, Peel & Stick for events, or standard Plastic backing for sew-on application."
        },
        {
          q: "Is there a minimum order quantity?",
          a: "We have NO minimums! You can order 1 patch or 10,000. However, the price per patch drops significantly when you order in bulk (e.g., 50+ pieces)."
        },
        {
          q: "How do I apply Iron-On patches?",
          a: "Set your iron to the hottest setting (no steam). Place the patch, cover with a thin cloth, and press firmly for 30-45 seconds. Flip the garment and press the back for another 20 seconds. Let it cool completely."
        }
      ]}
    />
  );
}

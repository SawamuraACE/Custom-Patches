import { ProductPageTemplate } from "@/components/templates/ProductPageTemplate";

export default function PrintedPatchesPage() {
  return (
    <ProductPageTemplate
      // --- SEO & HEADER ---
      title="Custom Printed Patches"
      subtitle="Photo-Realistic. Unlimited Colors. Gradients."
      description="When your design is too complex for threads, Printed Patches are the answer. Using dye-sublimation technology, we dye the image directly into the fabric molecules. This allows for photographic quality, fading gradients, and infinite colors without adding any weight or texture. The perfect choice for complex artwork, portraits, and detailed logos."

      // --- HERO GALLERY IMAGES ---
      heroImage="/assets/products/printed-hero.png"
      galleryImages={[
        "/assets/products/printed-group.png",
        "/assets/products/printed-back.png",
        "/assets/products/printed-lifestyle.png"
      ]}

      // --- FEATURES ---
      features={[
        "Photo-realistic quality (perfect for faces/scenery)",
        "Unlimited colors and smooth gradients included",
        "Flat, smooth surface (dye-sublimation process)",
        "Waterproof and machine washable (Image won't crack)",
        "Capture tiny details that embroidery cannot",
        "Available with Merrowed (stitched) borders for a classic look"
      ]}

      // --- FAQS ---
      faqs={[
        {
          q: "Will the image fade or crack in the wash?",
          a: "No! Unlike screen printing which sits on top, Dye Sublimation fuses the ink into the fabric fibers. The image is permanent, breathable, and will not crack or peel."
        },
        {
          q: "Why choose Printed over Woven?",
          a: "Choose Printed if you have gradients (colors fading into each other) or photographs. Woven patches still use threads, so they can't do smooth gradients. Printed patches have zero limitations on color."
        },
        {
          q: "Does it look like a patch or a sticker?",
          a: "It looks like a high-quality patch! We use high-quality twill fabric and finish it with a classic embroidered 'Merrowed' border, so it still has that premium patch feel, just with a sharper image."
        },
        {
          q: "Can I use a photo from my phone?",
          a: "Yes! As long as the photo is high resolution, we can print it directly onto a patch. This is very popular for memorials, pet portraits, and album covers."
        }
      ]}

      // --- MASTERPIECES GALLERY ---
      masterpieceImages={[
        "/assets/products/printed-master-1.png",
        "/assets/products/printed-master-2.png",
        "/assets/products/printed-master-3.png",
        "/assets/products/printed-master-4.png",
      ]}
    />
  );
}

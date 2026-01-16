import { ProductPageTemplate } from "@/components/templates/ProductPageTemplate";

export default function PrintedPatchesPage() {
  return (
    <ProductPageTemplate
      // --- SEO & HEADER ---
      title="Custom Printed Patches"
      subtitle="Photo-Realistic Quality. Unlimited Colors."
      description="Achieve photographic detail with custom printed patches using dye-sublimation technology. When your design includes gradients, photographs, or complex color work beyond thread capabilities, printed patches deliver stunning results. The dye fuses directly into fabric fibers for permanent, crack-proof images with unlimited colors. Perfect for portrait patches, complex artwork, memorial pieces, and designs requiring precise color matching. Standard turnaround: 12-14 days. Rush available: 4-7 days."

      // --- HERO GALLERY IMAGES ---
      heroImage="/assets/products/printed-hero.png"
      galleryImages={[
        "/assets/products/printed-group.png",
        "/assets/products/printed-back.png",
        "/assets/products/printed-lifestyle.png"
      ]}

      // --- FEATURES ---
      features={[
        "Photo-realistic quality captures portraits and complex imagery",
        "Unlimited colors including smooth gradients and color fades",
        "Dye-sublimation process prevents cracking or peeling",
        "Heat press transfer backing available for production efficiency",
        "Waterproof and machine washable – maintains appearance 50+ cycles",
        "Capture details impossible with embroidery or woven methods",
        "Merrowed borders create premium patch appearance",
        "MOQ as low as 50 units with volume pricing available"
      ]}

      // --- FAQS ---
      faqs={[
        {
          q: "When should clothing brands choose printed over embroidered patches?",
          a: "Choose printed patches when designs include: (1) Photographic elements or portraits, (2) Smooth color gradients or ombré effects, (3) More than 10 colors, (4) Extremely fine details under 1mm. Dye-sublimation has zero color limitations and captures photo-realistic quality that thread-based methods can't achieve – perfect for album cover merch, memorial collections, or highly detailed artwork."
        },
        {
          q: "Will printed patches fade or crack like screen printing?",
          a: "No. Unlike screen printing where ink sits on top of fabric, dye-sublimation fuses ink directly into fabric fibers at molecular level. The image becomes part of the fabric itself, making it permanent, breathable, and impossible to crack or peel. Withstands 50+ commercial wash cycles maintaining original vibrancy."
        },
        {
          q: "Can you match exact Pantone or brand colors with printing?",
          a: "Yes. Dye-sublimation offers precise color matching capabilities superior to thread-based methods. We can match specific Pantone colors, brand guidelines, or even complex photographs. This makes printed patches ideal for brands requiring exact color reproduction across multiple products or maintaining strict brand standards."
        },
        {
          q: "Do printed patches look cheap or like stickers?",
          a: "Not at all. We use premium twill fabric and finish printed patches with classic embroidered merrowed borders, maintaining traditional patch appearance and quality feel. The only difference is the image printing method – customers typically can't distinguish printed from woven patches at casual glance. Many high-end brands use printed patches for complex designs."
        },
        {
          q: "Can you print from phone photos or low-resolution images?",
          a: "We need high-resolution images (minimum 300 DPI at final patch size) for best results. Phone photos work if taken in good lighting at high resolution. For low-resolution images, our design team can sometimes recreate or enhance them for an additional fee, but original high-quality artwork always produces superior results."
        },
        {
          q: "What's your turnaround time and pricing?",
          a: "Standard production is 12-14 days. Printed patches typically cost similarly to embroidered patches despite unlimited colors – the streamlined production process offsets color complexity. MOQs start at 50 units with volume pricing at 100, 500, and 1000+ units. Rush production available in 4-7 days."
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

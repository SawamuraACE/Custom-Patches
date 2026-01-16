import { ProductPageTemplate } from "@/components/templates/ProductPageTemplate";

export default function ThreeDEmbroideryPage() {
  return (
    <ProductPageTemplate
      // --- SEO & HEADER ---
      title="Custom 3D Embroidery Transfer"
      subtitle="Innovative Technology. Direct Embroidery Appearance."
      description="Experience our revolutionary 3D embroidery transfer technology – the innovation that changes everything for clothing brands. Embroidery is created on special placement tape that heat presses onto garments in 10-15 seconds, looking identical to direct embroidery while dramatically improving production efficiency. No sewing machines. No misalignment. No quality inconsistency. Perfect for clothing brands producing hundreds or thousands of units requiring professional embroidery results with modern production speeds. Standard turnaround: 12-14 days. Rush available: 4-7 days."

      // --- HERO GALLERY IMAGES ---
      heroImage="/assets/products/nobg-pvc-hero.png"
      galleryImages={[
        "/assets/products/nobg-pvc-group.png",
        "/assets/products/nobg-pvc-back.png",
        "/assets/products/nobg-pvc-lifestyle.png"
      ]}

      // --- FEATURES ---
      features={[
        "Revolutionary heat press transfer technology for embroidery",
        "Looks identical to direct embroidery – customers can't tell difference",
        "Apply patches in 10-15 seconds vs minutes with traditional methods",
        "Perfect placement consistency across large production runs",
        "No sewing machines or skilled operators required",
        "Withstands 50+ commercial wash cycles – US quality standards",
        "Inspect patches before application – zero defects reach customers",
        "Dramatically reduce labor costs while maintaining premium quality"
      ]}

      // --- FAQS ---
      faqs={[
        {
          q: "How does 3D embroidery transfer technology work?",
          a: "We create traditional embroidery on special placement tape backing instead of applying directly to garments. In your production facility, position the patch and use a commercial heat press for 10-15 seconds at 320°F. The placement tape bonds permanently while positioning the embroidery perfectly. Result: direct embroidery appearance with heat press speed and consistency."
        },
        {
          q: "Why is this revolutionary for clothing brands?",
          a: "Traditional direct embroidery requires: specialized machines, skilled operators, individual garment hooping, careful positioning, and 5-10 minutes per placement. Our transfer technology requires: basic heat press, minimal training, 10-15 seconds per placement. You go from producing 6-12 garments per hour to 150+ garments per hour while maintaining premium embroidery quality."
        },
        {
          q: "Is the durability equivalent to sewn embroidery?",
          a: "Yes. Our transfer patches undergo the same rigorous wash testing as traditional embroidery and withstand 50+ commercial wash cycles without lifting, degrading, or quality loss. The industrial-strength adhesive creates permanent bonds meeting US manufacturing standards for commercial apparel."
        },
        {
          q: "Can we handle complex designs or multiple colors?",
          a: "Absolutely. Since we're creating actual embroidery (just on placement tape), there are no design limitations. Complex logos, multiple thread colors (up to 9 colors), various stitch densities – everything traditional embroidery can achieve, transfer embroidery delivers with faster application."
        },
        {
          q: "What production volumes make this technology worthwhile?",
          a: "Any volume benefits from transfer technology, but it's transformational for brands producing 100+ units per design. The consistency, speed, and labor savings compound dramatically at scale. Many brands producing 1000+ units monthly report 60-70% reduction in application labor costs compared to direct embroidery or sewn patches."
        },
        {
          q: "What equipment do we need in our facility?",
          a: "Just a commercial heat press (clamshell or swing-away style). Most clothing brands already have heat presses for other applications. If not, commercial heat presses cost $500-2000 depending on size. ROI typically occurs within first 500-1000 units compared to outsourcing direct embroidery or hand-sewing patches."
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

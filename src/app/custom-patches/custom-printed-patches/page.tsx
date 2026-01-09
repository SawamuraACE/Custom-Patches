import { ProductPageTemplate } from "@/components/templates/ProductPageTemplate";

export default function PrintedPatchesPage() {
  return (
    <ProductPageTemplate
      title="Custom Printed Patches"
      subtitle="Full Color, Photographic Detail"
      description="Unlock unlimited creativity with custom printed patches. Using advanced printing technology, we can reproduce any design with photographic accuracy. Perfect for artwork, photographs, and complex multi-color designs that tell your unique story."
      
      heroImage="/assets/products/printed-hero.png"
      galleryImages={[
        "/assets/products/printed-group.png",
        "/assets/products/printed-back.png",
        "/assets/products/printed-photo.png"
      ]}

      features={[
        "Unlimited full-color printing",
        "Photographic detail and accuracy",
        "Perfect for artwork and photographs",
        "Available with rubber backing",
        "No stitch limit or complexity",
        "Cost-effective for complex designs"
      ]}

      faqs={[
        {
          q: "Can printed patches show photographs?",
          a: "Absolutely! Printed patches can reproduce any photograph or artwork with amazing detail and color accuracy."
        },
        {
          q: "Are printed patches durable?",
          a: "Yes! Our printed patches use weather-resistant inks and durable backing materials designed to last through regular use and washing."
        },
        {
          q: "What file formats do you accept?",
          a: "We accept JPG, PNG, PDF, and AI formats. The higher the resolution, the better the print quality."
        },
        {
          q: "Can I use gradients and shading?",
          a: "Yes! Printed patches are excellent for designs with gradients, shading, and subtle color variations that would be difficult in embroidery."
        }
      ]}
    />
  );
}

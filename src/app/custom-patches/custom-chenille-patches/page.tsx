import { ProductPageTemplate } from "@/components/templates/ProductPageTemplate";

export default function ChenillePatchesPage() {
  return (
    <ProductPageTemplate
      title="Custom Chenille Patches"
      subtitle="Fluffy, Bold, and Eye-Catching"
      description="Make a statement with custom chenille patches! These plush, oversized patches feature soft, fuzzy threads that create a bold, eye-catching look. Perfect for varsity jackets, streetwear, and promotional items. Our chenille patches combine classic appeal with modern styling."
      
      heroImage="/assets/products/chenille-hero.png"
      galleryImages={[
        "/assets/products/chenille-group.png",
        "/assets/products/chenille-back.png",
        "/assets/products/chenille-jacket.png"
      ]}

      features={[
        "Soft, fluffy, and touchable texture",
        "Bold and vibrant colors",
        "Perfect for varsity and streetwear",
        "Available in various sizes",
        "Multiple backing options",
        "Great for promotional merchandise"
      ]}

      faqs={[
        {
          q: "What makes chenille patches different?",
          a: "Chenille patches have a soft, fuzzy appearance due to their unique thread construction. They're bulkier than embroidered patches and perfect for creating a bold statement."
        },
        {
          q: "Are chenille patches durable?",
          a: "Yes! Our chenille patches are made with high-quality materials and can withstand regular wear and washing when properly applied."
        },
        {
          q: "What's the best backing for chenille?",
          a: "Iron-on backing is most popular for chenille patches, offering easy application while maintaining durability through multiple washes."
        },
        {
          q: "Can I customize the size?",
          a: "Absolutely! We offer custom sizing to match your design specifications. Larger sizes work best to showcase the chenille texture."
        }
      ]}
    />
  );
}

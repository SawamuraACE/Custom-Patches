import { ProductPageTemplate } from "@/components/templates/ProductPageTemplate";

export default function SequinPatchesPage() {
  return (
    <ProductPageTemplate
      // --- SEO & HEADER ---
      title="Custom Sequin Patches"
      subtitle="Interactive Sparkle. Collectible Appeal."
      description="Create interactive, eye-catching apparel with custom sequin patches featuring reversible flip sequins. These tactile patches change color when brushed, creating engaging customer experiences perfect for fashion brands, dance wear, children's clothing, and limited-edition collections. Available with heat press transfer backing for efficient production. The sparkle and interactivity customers remember. Standard turnaround: 12-14 days. Rush available: 4-7 days."

      // --- HERO GALLERY IMAGES ---
      heroImage="/assets/products/sequin-hero.png"
      galleryImages={[
        "/assets/products/sequin-group.png",
        "/assets/products/sequin-back.png",
        "/assets/products/sequin-lifestyle.png"
      ]}

      // --- FEATURES ---
      features={[
        "Reversible flip sequins (two-tone interactive design)",
        "Heat press transfer technology available for sequin patches",
        "High-sparkle finish creates memorable visual impact",
        "Soft felt backing for comfort against skin",
        "Vibrant, fade-resistant colors maintain appearance",
        "Perfect for fashion brands, dance teams, children's wear",
        "Creates collectible, limited-edition appeal",
        "MOQ as low as 50 units for testing market response"
      ]}

      // --- FAQS ---
      faqs={[
        {
          q: "How does heat press transfer work for sequin patches?",
          a: "Our innovative sequin patches on transfer tape can be applied with commercial heat press at lower temperature (275°F for 10 seconds) to prevent sequin damage. The placement tape positions sequins perfectly while creating permanent bond. This dramatically speeds production compared to hand-sewing individual sequin patches – perfect for clothing brands producing fashion collections."
        },
        {
          q: "What are reversible flip sequins?",
          a: "Reversible sequins are two-toned – one color on each side. Customers can brush the sequins up to reveal one color/design, and down to show another. This interactive element creates engagement and social media sharing, making sequin patches excellent for brands targeting younger demographics or creating viral-worthy products."
        },
        {
          q: "Are sequin patches suitable for commercial apparel?",
          a: "Yes, with proper care instructions. Sequin patches withstand gentle machine washing (inside out, cold water) and air drying. For best results, we recommend including care tags specifying gentle wash to maintain sequin appearance. Many fashion brands successfully use sequin patches on limited-edition pieces that customers treasure and care for."
        },
        {
          q: "What design considerations matter for sequin patches?",
          a: "Sequin patches work best with bold, simple shapes and solid color blocks. Small details get lost in the sequin texture. Letters, hearts, stars, and simple logos translate beautifully. For reversible sequins, contrasting colors (like black/silver or red/gold) create the most dramatic flip effect customers love."
        },
        {
          q: "What's your minimum order quantity?",
          a: "MOQs start at 50 units, allowing fashion brands to test sequin patches in small collections before scaling. Sequin patches have higher material costs than standard embroidery, but the unique interactive quality often justifies premium pricing – many brands successfully charge 20-30% more for sequin patch items."
        },
        {
          q: "What applications work best for sequin patches?",
          a: "T-shirts, sweatshirts, tote bags, denim jackets, and children's apparel are ideal. Sequin patches add premium, playful touches to otherwise simple garments, transforming basic items into special pieces. Particularly effective for limited-edition releases, collaborations, and seasonal collections that create urgency and collectibility."
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

import { Button } from "./ui/Button";
import { VideoRevealCard } from "./VideoRevealCard";

interface HeroProps {
  onOpenQuote: () => void;
}

const DEMO_CARDS = [
  { id: 1, title: "", iconSrc: "/assets/icons/sample1.png", videoSrc: "/assets/videos/sample1.mp4" },
  { id: 2, title: "", iconSrc: "/assets/icons/sample2.png", videoSrc: "/assets/videos/sample2.mp4" },
  { id: 3, title: "", iconSrc: "/assets/icons/sample3.png", videoSrc: "/assets/videos/sample3.mp4" },
  { id: 4, title: "", iconSrc: "/assets/icons/sample4.png", videoSrc: "/assets/videos/sample4.mp4" },
];

export function Hero({ onOpenQuote }: HeroProps) {
  
  // Reusable Video Grid Component
  const VideoGridComponent = () => (
    <div className="grid grid-cols-2 gap-4 w-full">
      <VideoRevealCard title={DEMO_CARDS[0].title} iconSrc={DEMO_CARDS[0].iconSrc} videoSrc={DEMO_CARDS[0].videoSrc} className="w-full rounded-tl-[3rem]" />
      <VideoRevealCard title={DEMO_CARDS[1].title} iconSrc={DEMO_CARDS[1].iconSrc} videoSrc={DEMO_CARDS[1].videoSrc} className="w-full rounded-tr-[3rem]" />
      <VideoRevealCard title={DEMO_CARDS[2].title} iconSrc={DEMO_CARDS[2].iconSrc} videoSrc={DEMO_CARDS[2].videoSrc} className="w-full rounded-bl-[3rem]" />
      <VideoRevealCard title={DEMO_CARDS[3].title} iconSrc={DEMO_CARDS[3].iconSrc} videoSrc={DEMO_CARDS[3].videoSrc} className="w-full rounded-br-[3rem]" />
    </div>
  );

  return (
    <section className="relative overflow-hidden bg-white pt-24 pb-6 lg:pt-32 lg:pb-24">
      
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">
        
        {/* DESKTOP LAYOUT (2 Columns) */}
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          
          {/* LEFT COLUMN */}
          <div className="flex flex-col items-start text-left space-y-8">
            
            {/* Heading */}
            <div className="relative">
              <h1 className="text-4xl font-extrabold tracking-tight text-brand-dark sm:text-6xl lg:text-7xl leading-[1.1] relative z-10">
                Your Custom <br />
                <span className="text-transparent bg-clip-text bg-brand-gradient">
                  Patches Provider
                </span>
              </h1>
              
              <p className="max-w-xl text-base lg:text-lg text-gray-600 leading-relaxed mt-4">
                Welcome to My Custom Patches, where brand stories are stitched into reality! From company logos to promotional swag, let your brand speak loud and clear with our custom iron-on patches. Crafted with care, delivered with precision – Unfolds your brand story!
              </p>
            </div>

            {/* --- MOBILE ONLY: VIDEO GRID --- */}
            <div className="block lg:hidden w-full">
              <VideoGridComponent />
            </div>

            {/* Buttons & Reviews Wrapper */}
            <div className="w-full flex flex-col gap-6 relative">
              
              {/* Reviews */}
              <div className="flex flex-wrap items-center gap-4">
                 <div className="flex flex-col">
                   <h3 className="text-sm font-bold text-brand-dark uppercase tracking-wide">5 Star Ratings</h3>
                   <div className="flex flex-wrap items-center gap-3 mt-2">
                      <img src="/assets/badge-asi.png" alt="ASI" className="h-6 w-auto object-contain" />
                      <img src="/assets/badge-trustpilot.png" alt="Trustpilot" className="h-6 w-auto object-contain" />
                      <img src="/assets/badge-google.png" alt="Google" className="h-6 w-auto object-contain" />
                      <img src="/assets/badge-etsy.png" alt="Etsy" className="h-6 w-auto object-contain" />
                   </div>
                 </div>
              </div>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                <Button size="lg" variant="outline" onClick={onOpenQuote} className="w-full sm:w-auto">
                  Get Quote
                </Button>
                <Button size="lg" variant="outline" className="w-full sm:w-auto">
                  See All Products
                </Button>
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN (DESKTOP ONLY: VIDEO GRID) */}
          <div className="hidden lg:block w-full">
            <VideoGridComponent />
          </div>

        </div>
      </div>
    </section>
  );
}

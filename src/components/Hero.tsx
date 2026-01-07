import { Button } from "./ui/Button";
import { VideoRevealCard } from "./VideoRevealCard";

interface HeroProps {
  onOpenQuote: () => void;
}

const DEMO_CARDS = [
  {
    id: 1,
    title: "Embroidered",
    iconSrc: "/assets/icons/sample1.png",
    videoSrc: "/assets/videos/sample1.mp4",
  },
  {
    id: 2,
    title: "PVC Patches",
    iconSrc: "/assets/icons/sample2.png",
    videoSrc: "/assets/videos/sample2.mp4",
  },
  {
    id: 3,
    title: "Woven Labels",
    iconSrc: "/assets/icons/sample3.png",
    videoSrc: "/assets/videos/sample3.mp4",
  },
  {
    id: 4,
    title: "Chenille",
    iconSrc: "/assets/icons/sample4.png",
    videoSrc: "/assets/videos/sample4.mp4",
  },
];

export function Hero({ onOpenQuote }: HeroProps) {
  return (
    <section className="relative overflow-hidden bg-white pt-24 pb-16 lg:pt-32 lg:pb-24">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Left Column: Text Content */}
          <div className="relative flex flex-col items-start space-y-8 text-left">
            <h1 className="text-5xl font-extrabold tracking-tight text-brand-dark sm:text-6xl lg:text-7xl leading-[1.1] relative z-10">
              Your Custom <br />
              <span className="text-transparent bg-clip-text bg-brand-gradient">
                Patches Provider
              </span>
            </h1>

            <p className="max-w-xl text-lg text-gray-600 leading-relaxed">
              Welcome to My Custom Patches. We deliver high-quality custom patches
              with fast turnaround times. From embroidery to PVC, we bring your
              designs to life.
            </p>

            <div className="flex flex-row gap-4 w-full sm:w-auto">
              <Button
                size="lg"
                onClick={onOpenQuote}
                className="bg-white text-black hover:bg-brand-orange hover:text-white shadow-lg border-2 border-brand-orange"
              >
                Get Quote
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-brand-orange text-brand-dark hover:bg-brand-orange hover:text-white"
              >
                See All Products
              </Button>
            </div>

            <div className="flex flex-col gap-3 pt-6 relative">
              <h3 className="text-lg font-bold text-brand-dark">5 Star Ratings</h3>
              <div className="flex flex-wrap items-center gap-4">
                <img
                  src="/assets/badge-asi.png"
                  alt="ASI"
                  className="h-8 w-auto object-contain"
                />
                <img
                  src="/assets/badge-trustpilot.png"
                  alt="Trustpilot"
                  className="h-8 w-auto object-contain"
                />
                <img
                  src="/assets/badge-google.png"
                  alt="Google"
                  className="h-8 w-auto object-contain"
                />
                <img
                   src="/assets/badge-etsy.png"
                   alt="Etsy"
                   className="h-8 w-auto object-contain"
                 />
              </div>
            </div>
          </div>

          {/* Right Column: Video Grid with SPECIFIC CORNERS */}
          <div className="grid grid-cols-2 gap-4">
            {/* CARD 1: Top Left (Rounded TL) */}
            <VideoRevealCard
              title={DEMO_CARDS[0].title}
              iconSrc={DEMO_CARDS[0].iconSrc}
              videoSrc={DEMO_CARDS[0].videoSrc}
              className="w-full rounded-tl-[3rem]"
            />

            {/* CARD 2: Top Right (Rounded TR) */}
            <VideoRevealCard
              title={DEMO_CARDS[1].title}
              iconSrc={DEMO_CARDS[1].iconSrc}
              videoSrc={DEMO_CARDS[1].videoSrc}
              className="w-full rounded-tr-[3rem]"
            />

            {/* CARD 3: Bottom Left (Rounded BL) */}
            <VideoRevealCard
              title={DEMO_CARDS[2].title}
              iconSrc={DEMO_CARDS[2].iconSrc}
              videoSrc={DEMO_CARDS[2].videoSrc}
              className="w-full rounded-bl-[3rem]"
            />

            {/* CARD 4: Bottom Right (Rounded BR) */}
            <VideoRevealCard
              title={DEMO_CARDS[3].title}
              iconSrc={DEMO_CARDS[3].iconSrc}
              videoSrc={DEMO_CARDS[3].videoSrc}
              className="w-full rounded-br-[3rem]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

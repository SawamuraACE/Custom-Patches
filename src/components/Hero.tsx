"use client";

import { Button } from "./ui/Button";
import { VideoRevealCard } from "./VideoRevealCard";
import { Star } from "lucide-react";

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
        title: "Leather",
        iconSrc: "/assets/icons/sample4.png",
        videoSrc: "/assets/videos/sample4.mp4",
    },
];

export function Hero({ onOpenQuote }: HeroProps) {
    return (
        <section className="relative overflow-hidden bg-white pt-24 pb-16 lg:pt-32 lg:pb-24">
            {/* Background Pattern */}
            <div className="absolute inset-0 -z-10 h-full w-full bg-white [background-image:radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-50" />

            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">

                    {/* Left Column: Text Content */}
                    <div className="flex flex-col items-start space-y-6 text-left">
                        <h1 className="text-4xl font-extrabold tracking-tight text-brand-dark sm:text-5xl lg:text-6xl">
                            Your Custom <br />
                            <span className="text-transparent bg-clip-text bg-brand-gradient">
                                Patches Provider
                            </span>
                        </h1>

                        <p className="max-w-xl text-lg text-gray-600">
                            Welcome to My Custom Patches. We deliver high-quality custom patches with fast turnaround times. From embroidery to PVC, we bring your designs to life.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                            <Button size="lg" variant="outline" onClick={onOpenQuote}>
                                Get Quote
                            </Button>
                            <Button size="lg" variant="outline">
                                See All Products
                            </Button>
                        </div>

                        {/* Trust Badges */}
                        <div className="flex items-center gap-4 pt-4">
                            <div className="flex -space-x-1">
                                {[1, 2, 3, 4, 5].map((star) => (
                                    <Star key={star} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                                ))}
                            </div>
                            <span className="text-sm font-medium text-gray-600">
                                Trusted by 1000+ Brands
                            </span>
                        </div>
                    </div>

                    {/* Right Column: Video Grid */}
                    <div className="grid grid-cols-2 gap-4">
                        {DEMO_CARDS.map((card) => (
                            <VideoRevealCard
                                key={card.id}
                                title={card.title}
                                iconSrc={card.iconSrc}
                                videoSrc={card.videoSrc}
                                className="w-full"
                            />
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
}
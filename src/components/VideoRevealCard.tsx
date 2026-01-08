"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { cn } from "../lib/utils";
import { Play } from "lucide-react";

interface VideoRevealCardProps {
  iconSrc: string;
  videoSrc: string;
  title: string;
  className?: string;
}

export function VideoRevealCard({
  iconSrc,
  videoSrc,
  title,
  className,
}: VideoRevealCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Detect if device is touch-based
  useEffect(() => {
    const isTouchDevice = () => {
      return (
        typeof window !== "undefined" &&
        (navigator.maxTouchPoints > 0 ||
          /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
            navigator.userAgent
          ))
      );
    };
    setIsTouchDevice(isTouchDevice());
  }, []);

  useEffect(() => {
    if (videoRef.current) {
      // Desktop: Play on hover
      if (!isTouchDevice && isHovered) {
        videoRef.current.currentTime = 0;
        const playPromise = videoRef.current.play();
        if (playPromise !== undefined) {
          playPromise.catch(() => {});
        }
      } else if (!isTouchDevice && !isHovered) {
        videoRef.current.pause();
      }
    }
  }, [isHovered, isTouchDevice]);

  // Mobile: Play on button click
  const handlePlayClick = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {});
      }
      setIsPlaying(true);
    }
  };

  return (
    <div
      className={cn(
        "group relative aspect-square overflow-hidden bg-gray-100 transition-all duration-300 cursor-pointer",
        "hover:ring-4 hover:ring-brand-orange hover:shadow-2xl hover:z-10",
        className
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* LAYER 1: Video */}
      <video
        ref={videoRef}
        src={videoSrc}
        loop
        muted
        playsInline
        onCanPlay={() => setIsVideoLoaded(true)}
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* LAYER 2: Image Thumbnail (Optimized) */}
      <div
        className={cn(
          "absolute inset-0 z-20 bg-white transition-opacity duration-500",
          isHovered && isVideoLoaded ? "opacity-0" : "opacity-100"
        )}
      >
        {/* ✅ INDUSTRY STANDARD: Next.js Image Component */}
        <Image
          src={iconSrc}
          alt={title}
          fill
          className="object-cover"
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      </div>

      {/* LAYER 3: Text (Only Show on Hover) */}
      <div className="absolute inset-0 z-30 flex flex-col items-center justify-center p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <h3 className="text-2xl font-bold text-white drop-shadow-md text-center uppercase tracking-wide">
          {title}
        </h3>
      </div>

      {/* LAYER 4: Play Button (Mobile Only) */}
      {isTouchDevice && !isPlaying && (
        <button
          onClick={handlePlayClick}
          className="absolute inset-0 z-40 flex items-center justify-center bg-black/20 hover:bg-black/40 transition-all duration-300"
        >
          <Play
            className="w-16 h-16 text-white drop-shadow-lg hover:scale-110 transition-transform"
            fill="currentColor"
          />
        </button>
      )}
    </div>
  );
}

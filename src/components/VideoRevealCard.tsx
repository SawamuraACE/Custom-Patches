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
        "group relative aspect-square overflow-hidden bg-gray-100 transition-all duration-300 cursor-pointer rounded-2xl",
        "hover:ring-4 hover:ring-brand-orange hover:shadow-2xl hover:z-10",
        className
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* LAYER 1: Video - preload="metadata" for hover functionality */}
      <video
        ref={videoRef}
        src={videoSrc}
        loop
        muted
        playsInline
        preload="metadata"
        onLoadedData={() => setIsVideoLoaded(true)}
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* LAYER 2: Image Thumbnail (Optimized) */}
      <div
        className={cn(
          "absolute inset-0 z-20 bg-white transition-opacity duration-500",
          isHovered && isVideoLoaded ? "opacity-0" : "opacity-100"
        )}
      >
        {/* Next.js Image Component - no priority for below-fold */}
        <Image
          src={iconSrc}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 50vw, 25vw"
          loading="lazy"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      </div>

      {/* LAYER 3: "Hover to Play" hint (Desktop Only - shows when NOT hovered) */}
      {!isTouchDevice && !isHovered && (
        <div className="absolute inset-0 z-30 flex items-center justify-center pointer-events-none">
          <span className="text-sm font-medium text-white bg-black/50 px-3 py-1.5 rounded-full backdrop-blur-sm">
            Hover to Play
          </span>
        </div>
      )}

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

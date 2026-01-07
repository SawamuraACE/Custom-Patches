"use client";

import { useState, useRef, useEffect } from "react";
import { cn } from "../lib/utils";

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
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      if (isHovered) {
        videoRef.current.currentTime = 0;
        const playPromise = videoRef.current.play();
        if (playPromise !== undefined) {
          playPromise.catch(() => {});
        }
      } else {
        videoRef.current.pause();
      }
    }
  }, [isHovered]);

  return (
    <div
      className={cn(
        "group relative aspect-square overflow-hidden bg-gray-100 transition-all duration-300 cursor-pointer",
        // Note: No 'rounded' classes here anymore. We pass them in via 'className'
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
        preload="auto"
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* LAYER 2: Image Thumbnail */}
      <div className="absolute inset-0 z-20 transition-opacity duration-500 group-hover:opacity-0 bg-white">
        <img
          src={iconSrc}
          alt={title}
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      </div>

      {/* LAYER 3: Text */}
      <div className="absolute inset-0 z-30 flex flex-col items-center justify-center p-4">
        <div className="overflow-hidden h-6">
          <p className="text-[14px] font-medium text-white/90 uppercase tracking-widest transition-transform duration-300 group-hover:-translate-y-0">
            Hover to Reveal
          </p>
        </div>
      </div>
    </div>
  );
}

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

  // Desktop: Play on hover
  useEffect(() => {
    if (videoRef.current && !isTouchDevice) {
      const video = videoRef.current;

      if (isHovered) {
        // Load video if not loaded yet
        if (video.readyState < 2) {
          video.load();
        }

        video.currentTime = 0;
        video.play().catch((error) => {
          console.log('Desktop hover play failed:', error);
        });
      } else {
        video.pause();
        video.currentTime = 0;
      }
    }
  }, [isHovered, isTouchDevice]);

  // Mobile: Play on button click
  const handlePlayClick = async (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    if (!videoRef.current) return;

    const video = videoRef.current;

    try {
      // Force load the video if not loaded
      if (!isVideoLoaded) {
        video.load();

        // Wait for the video to be ready
        await new Promise<void>((resolve, reject) => {
          const onCanPlay = () => {
            video.removeEventListener('canplay', onCanPlay);
            video.removeEventListener('error', onError);
            resolve();
          };

          const onError = () => {
            video.removeEventListener('canplay', onCanPlay);
            video.removeEventListener('error', onError);
            reject(new Error('Video failed to load'));
          };

          video.addEventListener('canplay', onCanPlay);
          video.addEventListener('error', onError);

          // Timeout after 5 seconds
          setTimeout(() => {
            video.removeEventListener('canplay', onCanPlay);
            video.removeEventListener('error', onError);
            resolve(); // Try to play anyway
          }, 5000);
        });
      }

      video.currentTime = 0;
      video.muted = true;

      await video.play();
      setIsPlaying(true);
    } catch (error) {
      console.error('Mobile video play failed:', error);
    }
  };

  // Handle video end on mobile
  const handleVideoEnd = () => {
    if (isTouchDevice) {
      setIsPlaying(false);
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
      {/* LAYER 1: Video - preload="none" to save bandwidth, load on demand */}
      <video
        ref={videoRef}
        src={videoSrc}
        loop
        muted
        playsInline
        preload="none"
        onLoadedData={() => setIsVideoLoaded(true)}
        onEnded={handleVideoEnd}
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* LAYER 2: Image Thumbnail (Optimized) */}
      <div
        className={cn(
          "absolute inset-0 z-20 bg-white transition-opacity duration-500",
          (isHovered && !isTouchDevice) || (isPlaying && isTouchDevice) ? "opacity-0" : "opacity-100"
        )}
      >
        {/* Next.js Image Component - priority for hero section */}
        <Image
          src={iconSrc}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 50vw, 25vw"
          priority
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
          aria-label="Play video"
          className="absolute inset-0 z-40 flex items-center justify-center bg-black/20 active:bg-black/40 transition-all duration-300"
        >
          <Play
            className="w-16 h-16 text-white drop-shadow-lg active:scale-110 transition-transform"
            fill="currentColor"
            aria-hidden="true"
          />
        </button>
      )}
    </div>
  );
}

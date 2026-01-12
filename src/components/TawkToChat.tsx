"use client";

import { useEffect } from "react";

export function TawkToChat() {
  useEffect(() => {
    // Only run on client side
    if (typeof window === "undefined") {
      return;
    }

    // Check if already loaded
    if ((window as any).Tawk_API) {
      console.log("Tawk.to already loaded");
      return;
    }

    console.log("Loading Tawk.to widget...");

    // Initialize Tawk API
    (window as any).Tawk_API = (window as any).Tawk_API || {};
    (window as any).Tawk_LoadStart = new Date();

    // Get referrer source for tracking
    const getReferrerSource = () => {
      const referrer = document.referrer.toLowerCase();

      // Check for AI assistants first (ChatGPT, Claude, Perplexity, etc.)
      if (referrer.includes("chat.openai.com") || referrer.includes("chatgpt.com")) {
        return "v-ChatGPT";
      } else if (referrer.includes("claude.ai")) {
        return "v-Claude";
      } else if (referrer.includes("perplexity.ai")) {
        return "v-Perplexity";
      } else if (referrer.includes("bard.google.com") || referrer.includes("gemini.google.com")) {
        return "v-Gemini";
      } else if (referrer.includes("bing.com/chat") || referrer.includes("copilot.microsoft.com")) {
        return "v-Copilot";
      } else if (referrer.includes("you.com")) {
        return "v-YouAI";
      } else if (referrer.includes("phind.com")) {
        return "v-Phind";
      // Social Media
      } else if (referrer.includes("google.com")) {
        return "v-Google";
      } else if (referrer.includes("facebook.com") || referrer.includes("fb.com")) {
        return "v-Facebook";
      } else if (referrer.includes("instagram.com")) {
        return "v-Instagram";
      } else if (referrer.includes("twitter.com") || referrer.includes("t.co") || referrer.includes("x.com")) {
        return "v-Twitter";
      } else if (referrer.includes("linkedin.com")) {
        return "v-LinkedIn";
      } else if (referrer.includes("youtube.com")) {
        return "v-YouTube";
      } else if (referrer.includes("tiktok.com")) {
        return "v-TikTok";
      } else if (referrer.includes("pinterest.com")) {
        return "v-Pinterest";
      // Search Engines
      } else if (referrer.includes("bing.com")) {
        return "v-Bing";
      } else if (referrer.includes("yahoo.com")) {
        return "v-Yahoo";
      } else if (referrer.includes("duckduckgo.com")) {
        return "v-DuckDuckGo";
      } else if (referrer) {
        return "v-Referral";
      } else {
        return "v-Direct";
      }
    };

    // Load Tawk.to script
    const script = document.createElement("script");
    script.async = true;
    script.src = "https://embed.tawk.to/696251def40b4a197e1db44a/1jek0vjen";
    script.charset = "UTF-8";
    script.setAttribute("crossorigin", "*");

    // Add error handler
    script.onerror = () => {
      console.error("Failed to load Tawk.to script");
    };

    // Insert script into document
    const firstScript = document.getElementsByTagName("script")[0];
    if (firstScript && firstScript.parentNode) {
      firstScript.parentNode.insertBefore(script, firstScript);
    } else {
      document.body.appendChild(script);
    }

    // Setup auto-popup and referrer tracking once Tawk loads
    script.onload = () => {
      console.log("Tawk.to script loaded successfully");
      const Tawk_API = (window as any).Tawk_API;

      if (!Tawk_API) {
        console.error("Tawk_API not available after script load");
        return;
      }

      // Set visitor name before load
      const referrerSource = getReferrerSource();
      Tawk_API.visitor = Tawk_API.visitor || {};
      Tawk_API.visitor.name = referrerSource;

      // Wait for Tawk to be fully ready
      Tawk_API.onLoad = function() {
        console.log("Tawk.to widget fully loaded and ready");
        try {
          // Set visitor attributes with referrer source
          const referrerSource = getReferrerSource();

          if (typeof Tawk_API.setAttributes === 'function') {
            Tawk_API.setAttributes({
              'source': referrerSource,
              'traffic_source': referrerSource
            }, function(error: any) {
              if (error) {
                console.error("Error setting Tawk attributes:", error);
              }
            });
          }

          // Check if popup has been shown before
          const hasShownPopup = localStorage.getItem("tawk_popup_shown");

          if (!hasShownPopup) {
            console.log("Scheduling Tawk.to auto-popup in 10 seconds...");
            // Auto-popup after 10 seconds (one time only)
            setTimeout(() => {
              try {
                if (typeof Tawk_API.isChatMinimized === 'function' && Tawk_API.isChatMinimized()) {
                  if (typeof Tawk_API.maximize === 'function') {
                    console.log("Auto-maximizing Tawk.to chat widget");
                    Tawk_API.maximize();
                    // Mark as shown
                    localStorage.setItem("tawk_popup_shown", "true");
                  }
                }
              } catch (e) {
                console.error("Error auto-maximizing Tawk.to:", e);
              }
            }, 10000); // 10 seconds
          } else {
            console.log("Tawk.to auto-popup already shown before, skipping");
          }
        } catch (e) {
          console.error("Error in Tawk.to onLoad setup:", e);
        }
      };
    };

    // Cleanup
    return () => {
      // Optional: Remove script on unmount (usually not needed for chat widgets)
    };
  }, []);

  return null; // This component doesn't render anything
}

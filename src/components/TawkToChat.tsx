"use client";

import { useEffect } from "react";

export function TawkToChat() {
  useEffect(() => {
    // Check if already loaded
    if (typeof window !== "undefined" && (window as any).Tawk_API) {
      return;
    }

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

    const firstScript = document.getElementsByTagName("script")[0];
    firstScript.parentNode?.insertBefore(script, firstScript);

    // Setup auto-popup and referrer tracking once Tawk loads
    script.onload = () => {
      const Tawk_API = (window as any).Tawk_API;

      // Set visitor name before load
      if (Tawk_API) {
        const referrerSource = getReferrerSource();
        Tawk_API.visitor = Tawk_API.visitor || {};
        Tawk_API.visitor.name = referrerSource;
      }

      // Wait for Tawk to be fully ready
      Tawk_API.onLoad = function() {
        try {
          // Set visitor attributes with referrer source
          const referrerSource = getReferrerSource();

          if (typeof Tawk_API.setAttributes === 'function') {
            Tawk_API.setAttributes({
              'source': referrerSource,
              'traffic_source': referrerSource
            }, function(error: any) {
              // Silently handle errors
            });
          }

          // Check if popup has been shown before
          const hasShownPopup = localStorage.getItem("tawk_popup_shown");

          if (!hasShownPopup) {
            // Auto-popup after 10 seconds (one time only)
            setTimeout(() => {
              try {
                if (typeof Tawk_API.isChatMinimized === 'function' && Tawk_API.isChatMinimized()) {
                  if (typeof Tawk_API.maximize === 'function') {
                    Tawk_API.maximize();
                    // Mark as shown
                    localStorage.setItem("tawk_popup_shown", "true");
                  }
                }
              } catch (e) {
                // Silently handle popup errors
              }
            }, 10000); // 10 seconds
          }
        } catch (e) {
          // Silently handle any setup errors
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

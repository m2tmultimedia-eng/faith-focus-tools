"use client";

import { useEffect } from "react";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/lib/site";

declare global {
  interface Window {
    adsbygoogle?: unknown[];
  }
}

type AdsenseAdProps = {
  slot?: string;
  label?: string;
  className?: string;
  format?: "auto" | "rectangle" | "horizontal";
};

export function AdsenseAd({
  slot = siteConfig.defaultAdSlot,
  label = "Advertisement",
  className,
  format = "auto",
}: AdsenseAdProps) {
  useEffect(() => {
    if (!slot) return;

    try {
      window.adsbygoogle = window.adsbygoogle || [];
      window.adsbygoogle.push({});
    } catch {
      // Ad blockers and preview environments can reject this. The layout still holds space.
    }
  }, [slot]);

  if (!slot) {
    return (
      <div className={cn("ad-box", className)} aria-label={label}>
        {label}
      </div>
    );
  }

  return (
    <div className={cn("ad-unit", className)} aria-label={label}>
      <span>{label}</span>
      <ins
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client={siteConfig.adsensePublisherId}
        data-ad-slot={slot}
        data-ad-format={format}
        data-full-width-responsive="true"
      />
    </div>
  );
}

"use client";

import { AdsenseAd } from "@/components/adsense-ad";
import { PremiumGenerator } from "@/components/premium-generator";
import { affirmationsByCategory, affirmationItems } from "@/lib/data";

const moodOptions = [
  { label: "Anxiety", lookup: "peace" },
  { label: "Confidence", lookup: "confidence" },
  { label: "Wealth", lookup: "abundance" },
  { label: "Healing", lookup: "healing" },
  { label: "Focus", lookup: "focus" },
  { label: "Faith", lookup: "faith" },
  { label: "Sleep", lookup: "peace" },
];

export function AffirmationGeneratorContent() {
  return (
    <>
      <AdsenseAd className="top-ad" />
      <PremiumGenerator
        type="affirmation"
        title="Faith Focus Affirmation"
        dailyTitle="Daily Affirmation"
        generateLabel="Generate Affirmation"
        items={affirmationItems}
        index={affirmationsByCategory}
        moodOptions={moodOptions}
        getDeeperText={(item) =>
          `${item.text} Let this truth move from a sentence into a practice. Breathe slowly, repeat it with intention, and choose one action today that agrees with the person God is helping you become.`
        }
      />
    </>
  );
}

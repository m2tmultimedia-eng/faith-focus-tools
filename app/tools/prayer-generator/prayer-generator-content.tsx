"use client";

import { AdsenseAd } from "@/components/adsense-ad";
import { PremiumGenerator } from "@/components/premium-generator";
import { prayerItems, prayersByCategoryIndex } from "@/lib/data";

const moodOptions = [
  { label: "Anxiety", lookup: "anxiety" },
  { label: "Confidence", lookup: "strength" },
  { label: "Wealth", lookup: "financial breakthrough" },
  { label: "Healing", lookup: "healing" },
  { label: "Focus", lookup: "guidance" },
  { label: "Faith", lookup: "gratitude" },
  { label: "Sleep", lookup: "protection" },
];

export function PrayerGeneratorContent() {
  return (
    <>
      <AdsenseAd className="top-ad" />
      <PremiumGenerator
        type="prayer"
        title="Faith Focus Prayer"
        dailyTitle="Daily Prayer"
        generateLabel="Generate Prayer"
        items={prayerItems}
        index={prayersByCategoryIndex}
        moodOptions={moodOptions}
        getDeeperText={(item) =>
          `${item.text} Help me stay honest about what I feel while still choosing faith. Show me the next wise step, cover the parts of me that feel tired, and let Your peace settle into my thoughts, my words, and my decisions today. Amen.`
        }
      />
    </>
  );
}

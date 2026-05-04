"use client";

import { AdsenseAd } from "@/components/adsense-ad";
import { PremiumGenerator } from "@/components/premium-generator";
import { bibleVerses, bibleVersesByCategory } from "@/lib/data";

const moodOptions = [
  { label: "Anxiety", lookup: "anxiety" },
  { label: "Confidence", lookup: "strength" },
  { label: "Wealth", lookup: "faith" },
  { label: "Healing", lookup: "healing" },
  { label: "Focus", lookup: "faith" },
  { label: "Faith", lookup: "faith" },
  { label: "Sleep", lookup: "peace" },
];

export function BibleVerseGeneratorContent() {
  return (
    <>
      <AdsenseAd className="top-ad" />
      <PremiumGenerator
        type="bibleVerse"
        title="Faith Focus Bible Verse"
        dailyTitle="Daily Bible Verse"
        generateLabel="Generate Verse"
        items={bibleVerses}
        index={bibleVersesByCategory}
        moodOptions={moodOptions}
        getDisplayText={(item) => item.text}
        getShareText={(item, deeperText) =>
          deeperText || `${item.text} - ${item.reference}`
        }
        getDeeperText={(item) =>
          `${item.text} - ${item.reference} Pause with this verse for a moment. Notice the promise, instruction, or comfort inside it, then carry one phrase with you as a steady reminder throughout the day.`
        }
      />
    </>
  );
}

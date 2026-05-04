import {
  affirmations as affirmationItems,
  affirmationsByCategory,
} from "@/lib/affirmations";
import {
  bibleVerses,
  bibleVersesByCategory,
} from "@/lib/bibleVerses";
import {
  prayers as prayerItems,
  prayersByCategoryIndex,
} from "@/lib/prayers";

export type Topic = {
  slug: string;
  title: string;
  description: string;
  affirmations: string[];
  verses: string[];
};

export { affirmationItems, affirmationsByCategory };
export { bibleVerses, bibleVersesByCategory };
export { prayerItems, prayersByCategoryIndex };

// Compatibility exports for existing topic pages and simple string rendering.
export const affirmations = affirmationItems.map((item) => item.text);
export const prayers = prayerItems.map((item) => item.text);

export const topics: Topic[] = [
  {
    slug: "anxiety",
    title: "Bible Verses and Affirmations for Anxiety",
    description: "Faith-based encouragement for anxious thoughts and overwhelm.",
    affirmations: [],
    verses: [],
  },
  {
    slug: "confidence",
    title: "Bible Verses and Affirmations for Confidence",
    description: "Build courage, identity, and faithful self-belief.",
    affirmations: [],
    verses: [],
  },
  {
    slug: "success",
    title: "Bible Verses and Affirmations for Success",
    description: "Growth, purpose, stewardship, and disciplined progress.",
    affirmations: [],
    verses: [],
  },
  {
    slug: "peace",
    title: "Bible Verses and Affirmations for Peace",
    description: "Inner calm, rest, and spiritual steadiness.",
    affirmations: [],
    verses: [],
  },
  {
    slug: "money",
    title: "Bible Verses and Affirmations for Money",
    description: "Abundance, financial wisdom, and faithful stewardship.",
    affirmations: [],
    verses: [],
  },
];

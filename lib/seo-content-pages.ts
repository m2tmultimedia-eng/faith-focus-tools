import {
  affirmationItems,
  bibleVerses,
  prayerItems,
} from "@/lib/data";

export type SeoContentType = "affirmation" | "bible" | "prayer";

export type SeoContentPage = {
  slug: string;
  keyword: string;
  type: SeoContentType;
  category: string;
  metaTitle: string;
  metaDescription: string;
  painPoint: string;
  promise: string;
  practice: string;
  listTitle: string;
  h2s: string[];
  faq: Array<{ question: string; answer: string }>;
  related: string[];
};

export type SeoListItem = {
  text: string;
  reference?: string;
};

const toolByType = {
  affirmation: {
    href: "/tools/affirmation-generator",
    label: "Affirmation Generator",
    cta: "Use the generator for a personalized version",
  },
  bible: {
    href: "/tools/bible-verse-generator",
    label: "Bible Verse Generator",
    cta: "Use the generator for a personalized version",
  },
  prayer: {
    href: "/tools/prayer-generator",
    label: "Prayer Generator",
    cta: "Use the generator for a personalized version",
  },
};

const affirmationPages = [
  ["affirmations for anxiety at night", "peace", "when the house is quiet but your thoughts are not", "help your nervous system slow down before sleep"],
  ["affirmations for self discipline and focus", "self-discipline", "when you know what needs to be done but your attention keeps drifting", "turn intention into steady action"],
  ["affirmations for confidence and self worth", "confidence", "when self-doubt makes you question your value", "rebuild identity from a calmer, stronger place"],
  ["affirmations for success and money mindset", "abundance", "when financial pressure makes your future feel smaller", "practice abundance with discipline and wisdom"],
  ["daily affirmations for motivation and success", "focus", "when your motivation fades before your responsibilities do", "create a repeatable mindset for progress"],
  ["positive affirmations for men confidence", "confidence", "when pressure to perform makes confidence feel heavy", "build quiet strength without pretending"],
  ["morning affirmations for energy and focus", "focus", "when the day starts faster than your mind can settle", "begin with clarity, energy, and direction"],
  ["affirmations to reprogram your subconscious mind", "faith", "when old thoughts keep replaying even after you want to change", "replace mental loops with faith-filled repetition"],
  ["affirmations for healing emotionally and mentally", "healing", "when you are functioning but still carrying invisible weight", "make room for restoration and emotional honesty"],
  ["affirmations for letting go and moving on", "peace", "when part of you is ready to heal but another part keeps looking back", "release what no longer deserves control"],
] as const;

const biblePages = [
  ["bible verses for anxiety and fear kjv", "anxiety", "when fear feels louder than faith", "let Scripture speak peace into anxious moments"],
  ["bible verses about strength during hard times", "strength", "when endurance feels thin and life keeps asking for more", "remember where lasting strength comes from"],
  ["bible verses for healing and recovery", "healing", "when recovery is slower than you hoped", "hold on to God’s nearness in the healing process"],
  ["bible verses about faith and trusting god", "faith", "when you cannot see the next step clearly", "practice trust without needing every answer first"],
  ["bible verses for depression and loneliness", "peace", "when sadness makes you feel unseen", "find words that remind you God is near"],
  ["bible verses for fear and worry", "fear", "when your mind keeps rehearsing what could go wrong", "return to courage, safety, and truth"],
  ["bible verses about peace and calm", "peace", "when your spirit needs quiet more than more information", "settle your heart with steady promises"],
  ["bible verses about overcoming struggles", "strength", "when the struggle has lasted longer than expected", "remember that hardship is not the end of the story"],
  ["bible verses about hope and encouragement", "faith", "when hope feels practical, not poetic", "receive encouragement you can carry into the day"],
  ["bible verses for protection and guidance", "fear", "when you need covering and direction at the same time", "pray Scripture over your next step"],
] as const;

const prayerPages = [
  ["prayer for anxiety and overthinking", "anxiety", "when your thoughts keep circling the same fear", "turn racing thoughts into honest prayer"],
  ["prayer for strength in difficult times", "strength", "when you are tired of being strong but still need to keep going", "ask for endurance without pretending you are fine"],
  ["prayer for financial breakthrough and stability", "financial breakthrough", "when money stress follows you through the day", "pray for provision, wisdom, and order"],
  ["prayer for healing a loved one", "healing", "when someone you love is hurting and you feel helpless", "bring their pain to God with tenderness"],
  ["prayer for guidance and direction in life", "guidance", "when too many options make your heart feel crowded", "ask God to make the next step clear"],
  ["bedtime prayer for peace and protection", "protection", "when you want to sleep without carrying the whole day with you", "end the day covered, calm, and surrendered"],
  ["short powerful morning prayer for today", "gratitude", "when you need to begin the day with more than a rushed checklist", "start with gratitude, strength, and intention"],
  ["prayer to remove fear and doubt", "protection", "when fear has started making decisions for you", "ask for courage and a steadier heart"],
  ["prayer for stress and emotional healing", "healing", "when stress has become emotional heaviness", "invite God into the pressure beneath the surface"],
  ["prayer for clarity and decision making", "guidance", "when a decision feels too important to rush", "seek wisdom, peace, and direction"],
] as const;

function slugify(keyword: string) {
  return keyword.replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}

function makeFaq(keyword: string, type: SeoContentType) {
  const label =
    type === "affirmation" ? "affirmations" : type === "bible" ? "Bible verses" : "prayers";

  return [
    {
      question: `How should I use ${keyword}?`,
      answer: `Use ${keyword} slowly and consistently. Read one line, pause long enough to notice what it brings up, and choose one small action that agrees with the truth you want to practice.`,
    },
    {
      question: `Can ${label} help right away?`,
      answer:
        "They can create a quick reset, especially when your thoughts feel scattered. The deeper benefit usually comes from returning to them daily and letting the words shape your next choice.",
    },
    {
      question: "What is the best time to use this page?",
      answer:
        "Morning, bedtime, or stressful transition moments work well. Use it whenever you need a calmer thought, a prayerful pause, or a more grounded way to respond.",
    },
    {
      question: "Should I save the ones that stand out?",
      answer:
        "Yes. Saving the lines that feel personal helps you build a small library of encouragement you can revisit when your mind needs support.",
    },
  ];
}

function makePage(
  tuple: readonly [string, string, string, string],
  type: SeoContentType,
  index: number,
  relatedPool: readonly (readonly [string, string, string, string])[]
): SeoContentPage {
  const [keyword, category, painPoint, promise] = tuple;
  const slug = slugify(keyword);
  const related = relatedPool
    .filter((item) => item[0] !== keyword)
    .slice(index % 5, index % 5 + 3)
    .map((item) => slugify(item[0]));

  const typeLabel =
    type === "affirmation" ? "Affirmations" : type === "bible" ? "Bible Verses" : "Prayers";

  return {
    slug,
    keyword,
    type,
    category,
    metaTitle: keyword,
    metaDescription: `Find ${keyword} with a practical reflection, curated list, FAQs, and a personalized generator for daily encouragement.`,
    painPoint,
    promise,
    practice:
      type === "affirmation"
        ? "Repeat one line out loud, write it once, and attach it to a simple action. The words work best when they become a rhythm, not a performance."
        : type === "bible"
          ? "Read the verse slowly, notice one phrase that stands out, and turn that phrase into a one-sentence prayer before you move on."
          : "Pray honestly first, then simply. You do not have to sound polished; you only need to bring the real thing to God.",
    listTitle: `${typeLabel} for ${keyword.replace(/^(affirmations|bible verses|prayer) (for|about|to) /, "")}`,
    h2s: [
      `Why ${keyword} matter when life feels heavy`,
      `How to use these words without rushing the moment`,
      `A simple daily practice for ${promise}`,
    ],
    faq: makeFaq(keyword, type),
    related,
  };
}

export const seoContentPages: SeoContentPage[] = [
  ...affirmationPages.map((item, index) =>
    makePage(item, "affirmation", index, affirmationPages)
  ),
  ...biblePages.map((item, index) => makePage(item, "bible", index, biblePages)),
  ...prayerPages.map((item, index) => makePage(item, "prayer", index, prayerPages)),
];

export function getSeoContentPage(slug: string) {
  return seoContentPages.find((page) => page.slug === slug);
}

export function getToolForPage(page: SeoContentPage) {
  return toolByType[page.type];
}

export function getListItems(page: SeoContentPage): SeoListItem[] {
  if (page.type === "affirmation") {
    return affirmationItems
      .filter((item) => item.category === page.category)
      .slice(0, 10)
      .map((item) => ({ text: item.text }));
  }

  if (page.type === "bible") {
    return bibleVerses
      .filter((item) => item.category === page.category)
      .slice(0, 5)
      .map((item) => ({ text: item.text, reference: item.reference }));
  }

  return prayerItems
    .filter((item) => item.category === page.category)
    .slice(0, 7)
    .map((item) => ({ text: item.text }));
}

export function getRelatedPages(page: SeoContentPage) {
  return page.related
    .map(getSeoContentPage)
    .filter((item): item is SeoContentPage => Boolean(item));
}

export function pagePath(page: SeoContentPage) {
  return `/resources/${page.slug}`;
}

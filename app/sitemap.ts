import { MetadataRoute } from "next";

const articleSlugs = [
  "prayers-for-anxiety",
  "how-biblical-affirmations-work",
  "morning-prayer-routine",
  "scriptures-for-financial-stress",
  "christian-goal-setting",
  "bible-verses-for-confidence",
  "prayers-for-overthinking",
  "gratitude-journaling-with-god",
  "christian-productivity",
  "faith-and-fear",
  "how-to-pray-consistently",
  "bible-verses-for-stress",
  "night-prayers-for-peace",
  "healing-after-disappointment",
  "christian-morning-habits",
  "how-to-renew-your-mind",
  "gratitude-and-faith",
  "prayer-for-strength",
  "prayers-for-family-peace",
  "prayers-for-work-stress",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://faithfocustools.com";

  const articleUrls = articleSlugs.map((slug) => ({
    url: `${base}/articles/${slug}`,
    lastModified: new Date(),
  }));

  return [
    {
      url: base,
      lastModified: new Date(),
    },
    {
      url: `${base}/articles`,
      lastModified: new Date(),
    },
    {
      url: `${base}/about`,
      lastModified: new Date(),
    },
    {
      url: `${base}/privacy`,
      lastModified: new Date(),
    },
    ...articleUrls,
  ];
}

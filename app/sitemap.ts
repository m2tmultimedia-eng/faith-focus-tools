import { MetadataRoute } from "next";
import { topics } from "@/lib/data";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://faithfocustools.com";

  const staticPages = [
    "",
    "/topics",
    "/tools/affirmation-generator",
    "/tools/bible-verse-generator",
    "/tools/prayer-generator",
    "/privacy-policy",
    "/terms",
    "/contact",
  ];

  const topicPages = topics.map((topic) => ({
    url: `${baseUrl}/topics/${topic.slug}`,
    lastModified: new Date(),
  }));

  return [
    ...staticPages.map((page) => ({
      url: `${baseUrl}${page}`,
      lastModified: new Date(),
    })),
    ...topicPages,
  ];
}
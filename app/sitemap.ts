import { MetadataRoute } from "next";
import { topics } from "@/lib/data";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://yourdomain.com";

  const staticPages = [
    "",
    "/tools/affirmation-generator",
    "/tools/bible-verse-generator",
    "/tools/prayer-generator",
  ];

  const topicPages = topics.map((topic) => `/topics/${topic.slug}`);

  return [...staticPages, ...topicPages].map((url) => ({
    url: `${baseUrl}${url}`,
    lastModified: new Date(),
  }));
}
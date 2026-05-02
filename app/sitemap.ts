import { MetadataRoute } from "next";
import { topics } from "@/lib/data";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://yourdomain.com";

  const routes = [
    "",
    "/topics",
    "/tools/affirmation-generator",
    "/tools/bible-verse-generator",
    "/tools/prayer-generator",
    ...topics.map((topic) => `/topics/${topic.slug}`),
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: route === "" ? 1 : route === "/topics" ? 0.9 : 0.8,
  }));
}
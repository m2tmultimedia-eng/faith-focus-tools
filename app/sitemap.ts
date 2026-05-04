import { MetadataRoute } from "next";
import { topics } from "@/lib/data";
import { pagePath, seoContentPages } from "@/lib/seo-content-pages";
import { siteConfig } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    { path: "", priority: 1 },
    { path: "/topics", priority: 0.8 },
    { path: "/tools/affirmation-generator", priority: 0.9 },
    { path: "/tools/bible-verse-generator", priority: 0.9 },
    { path: "/tools/prayer-generator", priority: 0.9 },
    { path: "/resources", priority: 0.8 },
    { path: "/favorites", priority: 0.5 },
    { path: "/privacy-policy", priority: 0.3 },
    { path: "/terms", priority: 0.3 },
    { path: "/contact", priority: 0.4 },
  ];

  const topicPages = topics.map((topic) => ({
    url: `${siteConfig.url}/topics/${topic.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  const resourcePages = seoContentPages.map((page) => ({
    url: `${siteConfig.url}${pagePath(page)}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.72,
  }));

  return [
    ...staticPages.map((page) => ({
      url: `${siteConfig.url}${page.path}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: page.priority,
    })),
    ...topicPages,
    ...resourcePages,
  ];
}

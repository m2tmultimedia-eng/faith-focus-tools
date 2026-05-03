import type { Metadata } from "next";
import { ProductCTA } from "@/components/product-cta";
import { JsonLd, toolJsonLd } from "@/lib/seo";
import { PrayerGeneratorContent } from "./prayer-generator-content";

export const metadata: Metadata = {
  title: "Prayer Generator",
  description:
    "Generate simple faith-based prayer prompts for peace, guidance, strength, discipline, and daily focus.",
  alternates: {
    canonical: "/tools/prayer-generator",
  },
};

export default function PrayerGenerator() {
  const description =
    "Generate simple faith-based prayer prompts for peace, guidance, strength, discipline, and daily focus.";

  return (
    <main className="container">
      <JsonLd data={toolJsonLd("Prayer Generator", "/tools/prayer-generator", description)} />
      <section className="hero">
        <p className="eyebrow">Prayer Reset</p>
        <h1>Prayer Generator</h1>
        <p>
          Choose what you need today and generate a simple prayer for focus,
          peace, strength, or guidance.
        </p>
      </section>

      <PrayerGeneratorContent />

      <section className="card">
        <h2>Simple Prayer Prompt</h2>
        <p>
          Use the prayer as-is, or make it personal. The point is to pause,
          breathe, and reconnect before the day starts throwing furniture.
        </p>
      </section>

      <ProductCTA />
    </main>
  );
}

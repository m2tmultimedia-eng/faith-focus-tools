import type { Metadata } from "next";
import { ProductCTA } from "@/components/product-cta";
import { JsonLd, toolJsonLd } from "@/lib/seo";
import { BibleVerseGeneratorContent } from "./bible-verse-generator-content";

export const metadata: Metadata = {
  title: "Bible Verse Generator",
  description:
    "Generate a free KJV Bible verse for prayer, journaling, encouragement, and daily faith reflection.",
  alternates: {
    canonical: "/tools/bible-verse-generator",
  },
};

export default function BibleVerseGenerator() {
  const description =
    "Generate a free KJV Bible verse for prayer, journaling, encouragement, and daily faith reflection.";

  return (
    <main className="container">
      <JsonLd
        data={toolJsonLd("KJV Bible Verse Generator", "/tools/bible-verse-generator", description)}
      />
      <section className="hero">
        <p className="eyebrow">Scripture Reset</p>
        <h1>Bible Verse Generator</h1>
        <p>
          Generate a KJV Bible verse for reflection, prayer, journaling, or a
          quick faith reset.
        </p>
      </section>

      <BibleVerseGeneratorContent />

      <section className="card">
        <h2>Daily Bible Encouragement</h2>
        <p>
          Use this as a quick spiritual reset. Read the verse slowly, reflect on
          it, and carry one phrase with you through the day.
        </p>
      </section>

      <ProductCTA />
    </main>
  );
}

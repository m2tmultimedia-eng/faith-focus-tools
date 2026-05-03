import type { Metadata } from "next";
import { ProductCTA } from "@/components/product-cta";
import { JsonLd, toolJsonLd } from "@/lib/seo";
import { AffirmationGeneratorContent } from "./affirmation-generator-content";

export const metadata: Metadata = {
  title: "Affirmation Generator",
  description:
    "Generate free faith-friendly affirmations for peace, confidence, discipline, money mindset, and daily focus.",
  alternates: {
    canonical: "/tools/affirmation-generator",
  },
};

export default function AffirmationGenerator() {
  const description =
    "Generate free faith-friendly affirmations for peace, confidence, discipline, money mindset, and daily focus.";

  return (
    <main className="container">
      <JsonLd
        data={toolJsonLd("Faith Affirmation Generator", "/tools/affirmation-generator", description)}
      />
      <section className="hero">
        <p className="eyebrow">Mindset Reset</p>
        <h1>Affirmation Generator</h1>
        <p>
          Choose a focus area and generate a faith-friendly affirmation for your
          mindset, your money moves, your peace, or your discipline.
        </p>
      </section>

      <AffirmationGeneratorContent />

      <section className="card">
        <h2>How to Use It</h2>
        <p>
          Pick a category, generate one affirmation, then repeat it slowly. The
          goal is not magic words. The goal is focused repetition with action
          behind it. Tiny bit inconvenient, yes. Effective, also yes.
        </p>
      </section>

      <ProductCTA />
    </main>
  );
}

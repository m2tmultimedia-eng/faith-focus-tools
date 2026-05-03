import Link from "next/link";
import { siteConfig } from "@/lib/site";

const products = [
  {
    title: "7-Day Faith & Focus Reset",
    description:
      "A simple opt-in guide that turns verses, prayers, and affirmations into a daily routine.",
    cta: "Get the Guide",
    href: siteConfig.freeGuideUrl,
  },
  {
    title: "Prayer Journal",
    description:
      "A partner-ready slot for a printable journal, digital planner, or devotional product.",
    cta: "Partner With Us",
    href: siteConfig.partnerUrl,
  },
  {
    title: "Affirmation Cards",
    description:
      "A natural affiliate placement for faith-based cards, printables, or encouragement decks.",
    cta: "Sponsor This Slot",
    href: siteConfig.partnerUrl,
  },
];

export function ProductCTA() {
  return (
    <section className="product-section" aria-labelledby="faith-resources">
      <p className="eyebrow">Faith Resources</p>
      <h2 id="faith-resources">Recommended Next Steps</h2>
      <div className="product-grid">
        {products.map((product) => (
          <article key={product.title} className="product-card">
            <h3>{product.title}</h3>
            <p>{product.description}</p>
            <Link href={product.href} className="text-link">
              {product.cta} →
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}

import Link from "next/link";
import { notFound } from "next/navigation";
import { AdsenseAd } from "@/components/adsense-ad";
import { ProductCTA } from "@/components/product-cta";
import {
  affirmations,
  bibleVersesByCategory,
  topics,
} from "@/lib/data";
import { getItemsForCategory } from "@/lib/content";
import { JsonLd, faqJsonLd } from "@/lib/seo";

export function generateStaticParams() {
  return topics.map((topic) => ({
    slug: topic.slug,
  }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const topic = topics.find((t) => t.slug === params.slug);

  if (!topic) return { title: "Faith Topic" };

  return {
    title: `${topic.title} | FaithFocusTools`,
    description: `Discover ${topic.title.toLowerCase()} including affirmations, Bible verses, and daily encouragement.`,
  };
}

/* =========================
   FALLBACK CONTENT
========================= */

function getAffirmations(slug: string) {
  const mappedSlug = slug === "money" ? "abundance" : slug === "success" ? "self-discipline" : slug;
  const matches = affirmations.filter((item) =>
    item.toLowerCase().includes(mappedSlug)
  );
  return matches.length ? matches.slice(0, 6) : affirmations.slice(0, 6);
}

function getVerses(slug: string) {
  const mappedSlug = slug === "confidence" ? "faith" : slug === "money" ? "faith" : slug;
  const selected = getItemsForCategory(bibleVersesByCategory, mappedSlug);
  return selected
    .slice(0, 6)
    .map((item) => `${item.text} — ${item.reference}`);
}

/* =========================
   MAIN PAGE
========================= */

export default function TopicPage({ params }: { params: { slug: string } }) {
  const topic = topics.find((t) => t.slug === params.slug);
  if (!topic) notFound();

  const pageAffirmations = getAffirmations(topic.slug);
  const pageVerses = getVerses(topic.slug);
  const faqs = [
    {
      question: `What are the best affirmations for ${topic.slug}?`,
      answer:
        "The best affirmations are simple, consistent, and repeated daily. Focus on statements that reinforce growth, calm, and direction.",
    },
    {
      question: "Do affirmations really work?",
      answer:
        "Affirmations work best when paired with repetition and action. They help shift thinking and reinforce positive habits over time.",
    },
    {
      question: "How often should I use affirmations?",
      answer:
        "Daily use is most effective. Morning and night are strong times to reinforce new thought patterns.",
    },
  ];

  return (
    <main className="container">
      <JsonLd data={faqJsonLd(faqs)} />
      {/* HERO */}
      <section className="hero">
        <h1>{topic.title}</h1>
        <p>
          Looking for {topic.slug} affirmations and Bible verses? Here are simple,
          powerful words to help you refocus, reset, and move forward with faith.
        </p>

        <Link className="button" href="/">
          Home
        </Link>
      </section>

      <AdsenseAd className="top-ad" />

      {/* AFFIRMATIONS */}
      <section className="card">
        <h2>{topic.slug} Affirmations</h2>
        {pageAffirmations.map((item) => (
          <p key={item}>“{item}”</p>
        ))}
      </section>

      {/* BIBLE VERSES */}
      <section className="card">
        <h2>Bible Verses for {topic.slug}</h2>
        {pageVerses.map((item) => (
          <p key={item}>{item}</p>
        ))}
      </section>

      {/* SEO CONTENT BLOCK */}
      <section className="card">
        <h2>How to Use {topic.slug} Affirmations Daily</h2>
        <p>
          Using affirmations for {topic.slug} works best when you repeat them
          consistently and pair them with action. Start by choosing one
          affirmation and repeating it in the morning. Then apply it during your
          day when situations challenge your mindset.
        </p>

        <p>
          Bible verses for {topic.slug} can be used alongside affirmations to
          strengthen your focus and faith. Read one verse slowly, reflect on its
          meaning, and carry it with you throughout the day.
        </p>
      </section>

      {/* FAQ SECTION (SEO BOOST) */}
      <section className="card">
        <h2>Frequently Asked Questions</h2>

        {faqs.map((item) => (
          <div key={item.question}>
            <h3>{item.question}</h3>
            <p>{item.answer}</p>
          </div>
        ))}
      </section>

      {/* INTERNAL LINKS (CRITICAL) */}
      <section className="card">
        <h2>Try These Tools</h2>

        <Link href="/tools/affirmation-generator">
          → Affirmation Generator
        </Link>
        <br />
        <Link href="/tools/bible-verse-generator">
          → Bible Verse Generator
        </Link>
        <br />
        <Link href="/tools/prayer-generator">
          → Prayer Generator
        </Link>
      </section>

      <ProductCTA />
    </main>
  );
}

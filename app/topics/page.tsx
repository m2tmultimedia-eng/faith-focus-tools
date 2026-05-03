import Link from "next/link";
import { AdsenseAd } from "@/components/adsense-ad";
import { topics } from "@/lib/data";

export const metadata = {
  title: "Faith Topics | Bible Verses & Affirmations by Topic",
  description:
    "Browse Bible verses and affirmations by topic including anxiety, confidence, success, peace, healing, money, discipline, and more.",
};

export default function TopicsPage() {
  return (
    <main className="container">
      <section className="hero">
        <p className="eyebrow">Faith Topic Directory</p>
        <h1>Browse Bible Verses & Affirmations by Topic</h1>
        <p>
          Find quick encouragement for anxiety, confidence, peace, discipline,
          purpose, work, relationships, and more.
        </p>
      </section>

      <section className="directory-intro card">
        <h2>Choose What You Need Today</h2>
        <p>
          Each topic includes faith-based affirmations and KJV Bible verses for
          reflection, prayer, journaling, or a quick mindset reset.
        </p>
      </section>

      <AdsenseAd className="top-ad" />

      <section className="grid">
        {topics.map((topic) => (
          <Link key={topic.slug} href={`/topics/${topic.slug}`} className="card">
            <h2>{topic.title}</h2>
            <p>{topic.description}</p>
            <span className="text-link">Open topic →</span>
          </Link>
        ))}
      </section>

      <section className="cta">
        <h2>Need a Daily Faith Reset?</h2>
        <p>
          Use these pages as a quick daily reset when your mind is loud and your
          coffee is doing its best but clearly underqualified.
        </p>
        <Link className="button" href="/tools/affirmation-generator">
          Generate an Affirmation
        </Link>
      </section>
    </main>
  );
}

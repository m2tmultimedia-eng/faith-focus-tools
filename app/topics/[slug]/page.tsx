import Link from "next/link";
import { notFound } from "next/navigation";
import { affirmations, bibleVerses, topics } from "@/lib/data";

export function generateStaticParams() {
  return topics.map((topic) => ({
    slug: topic.slug,
  }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const topic = topics.find((t) => t.slug === params.slug);

  if (!topic) {
    return {
      title: "Faith Topic | FaithFocusTools",
    };
  }

  return {
    title: `${topic.title} | FaithFocusTools`,
    description: topic.description,
  };
}

function getFallbackAffirmations(slug: string) {
  const keywordMap: Record<string, string[]> = {
    anxiety: ["peace", "calm", "worry", "fear", "stress"],
    confidence: ["confidence", "stronger", "potential", "courage"],
    success: ["success", "growth", "progress", "purpose", "results"],
    fear: ["fear", "faith", "courage"],
    peace: ["peace", "calm", "grounded"],
    healing: ["healing", "restore", "stronger", "grow"],
    purpose: ["purpose", "aligned", "direction", "future"],
    money: ["money", "wealth", "financial", "value", "income"],
    discipline: ["discipline", "consistent", "habits", "show up"],
    motivation: ["progress", "future", "move forward", "growth"],
    morning: ["today", "clarity", "purpose"],
    night: ["peace", "release", "rest"],
    gratitude: ["blessings", "thank", "growth"],
    stress: ["stress", "calm", "peace", "breathe"],
    work: ["work", "value", "results", "effort"],
    relationships: ["love", "peace", "wisdom"],
  };

  const keywords = keywordMap[slug] || [slug];

  const matches = affirmations.filter((item) =>
    keywords.some((keyword) => item.toLowerCase().includes(keyword))
  );

  return matches.length ? matches.slice(0, 6) : affirmations.slice(0, 6);
}

function getFallbackVerses(slug: string) {
  const matches = bibleVerses.filter((item) => item.mood === slug);

  if (matches.length) {
    return matches
      .slice(0, 6)
      .map((item) => `${item.verse} — ${item.reference}`);
  }

  return bibleVerses
    .slice(0, 6)
    .map((item) => `${item.verse} — ${item.reference}`);
}

export default function TopicPage({ params }: { params: { slug: string } }) {
  const topic = topics.find((t) => t.slug === params.slug);

  if (!topic) notFound();

  const pageAffirmations =
    topic.affirmations.length > 0
      ? topic.affirmations
      : getFallbackAffirmations(topic.slug);

  const pageVerses =
    topic.verses.length > 0 ? topic.verses : getFallbackVerses(topic.slug);

  const relatedTopics = topics
    .filter((item) => item.slug !== topic.slug)
    .slice(0, 6);

  return (
    <main className="container">
      <section className="hero">
        <p className="eyebrow">Faith Topic</p>
        <h1>{topic.title}</h1>
        <p>{topic.description}</p>
        <Link className="button" href="/topics">
          Browse All Topics
        </Link>
      </section>

      <section className="content-section">
        <div className="card">
          <h2>Affirmations</h2>
          {pageAffirmations.map((item) => (
            <p key={item} className="quote">
              “{item}”
            </p>
          ))}
        </div>

        <div className="card">
          <h2>Bible Verses</h2>
          {pageVerses.map((item) => (
            <p key={item} className="verse">
              {item}
            </p>
          ))}
        </div>
      </section>

      <section className="card">
        <h2>How to Use These Words Today</h2>
        <p>
          Read one affirmation slowly. Then read one Bible verse. Take a breath,
          write down one action you can take today, and keep it simple. Faith
          works better when it has feet.
        </p>
      </section>

      <section className="cta">
        <h2>Want a Quick Daily Reset?</h2>
        <p>
          Generate a fresh affirmation or prayer when you need a simple moment
          of focus.
        </p>
        <Link className="button" href="/tools/affirmation-generator">
          Affirmation Generator
        </Link>
        <Link className="button" href="/tools/prayer-generator">
          Prayer Generator
        </Link>
      </section>

      <section>
        <h2 className="section-title">Related Faith Topics</h2>
        <div className="grid">
          {relatedTopics.map((related) => (
            <Link
              key={related.slug}
              href={`/topics/${related.slug}`}
              className="card"
            >
              <h3>{related.title}</h3>
              <p>{related.description}</p>
              <span className="text-link">Read more →</span>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
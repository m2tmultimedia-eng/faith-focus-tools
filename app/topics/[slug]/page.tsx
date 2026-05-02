import { topics } from "@/lib/data";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return topics.map((topic) => ({
    slug: topic.slug,
  }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const topic = topics.find((t) => t.slug === params.slug);

  if (!topic) {
    return {
      title: "Faith Topic",
    };
  }

  return {
    title: `${topic.title} | FaithFocusTools`,
    description: topic.description,
  };
}

export default function TopicPage({ params }: { params: { slug: string } }) {
  const topic = topics.find((t) => t.slug === params.slug);

  if (!topic) notFound();

  return (
    <main className="container">
      <section className="hero">
        <h1>{topic.title}</h1>
        <p>{topic.description}</p>
      </section>

      <div className="ad-box">Ad Placeholder — Topic Page Top</div>

      <section className="grid">
        <div className="card">
          <h2>Affirmations</h2>
          {topic.affirmations.map((item) => (
            <p key={item}>“{item}”</p>
          ))}
        </div>

        <div className="card">
          <h2>Bible Verses</h2>
          {topic.verses.map((item) => (
            <p key={item}>{item}</p>
          ))}
        </div>
      </section>

      <section className="cta">
        <h2>Need a Daily Faith Reset?</h2>
        <p>Promote your ebook, planner, Gumroad product, or email freebie here.</p>
        <a className="button" href="#">Download the Free Reset</a>
      </section>

      <div className="ad-box">Ad Placeholder — Topic Page Bottom</div>
    </main>
  );
}
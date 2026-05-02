import Link from "next/link";
import { topics } from "@/lib/data";

export const metadata = {
  title: "Faith Topics | Bible Verses & Affirmations by Topic",
  description:
    "Browse Bible verses and affirmations by topic including anxiety, confidence, success, peace, and more.",
};

export default function TopicsPage() {
  return (
    <main className="container">
      <section className="hero">
        <h1>Browse Faith Topics</h1>
        <p>
          Find Bible verses and affirmations for every season — whether you need
          peace, direction, motivation, or just a reset.
        </p>
      </section>

      <div className="ad-box">Ad Placeholder — Directory Top</div>

      <section className="grid">
        {topics.map((topic) => (
          <Link
            key={topic.slug}
            href={`/topics/${topic.slug}`}
            className="card"
          >
            <h2>{topic.title}</h2>
            <p>{topic.description}</p>
          </Link>
        ))}
      </section>

      <section className="cta">
        <h2>Need a Daily Reset?</h2>
        <p>
          Get the 7-Day Faith & Focus guide to help you stay consistent,
          grounded, and clear.
        </p>
        <a className="button" href="#">
          Get the Free Guide
        </a>
      </section>

      <div className="ad-box">Ad Placeholder — Directory Bottom</div>
    </main>
  );
}
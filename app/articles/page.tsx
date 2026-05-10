import Link from "next/link";
import { articles } from "./data";

export const metadata = {
  title: "Faith Articles and Bible-Based Encouragement",
  description:
    "Read faith-based articles on prayer, biblical affirmations, anxiety, confidence, gratitude, financial stress, productivity, and Christian mindset.",
};

export default function ArticlesPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-12">
      <section className="mx-auto max-w-3xl text-center space-y-4">
        <h1 className="text-4xl font-bold">Faith Articles</h1>
        <p className="text-lg opacity-80">
          Practical, scripture-inspired encouragement for prayer, mindset,
          peace, confidence, gratitude, and daily focus.
        </p>
      </section>

      <section className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {articles.map((article) => (
          <Link
            key={article.slug}
            href={`/articles/${article.slug}`}
            className="rounded-2xl border p-6 hover:shadow-md transition"
          >
            <h2 className="text-xl font-semibold">{article.title}</h2>
            <p className="mt-3 text-sm opacity-75">{article.description}</p>
            <p className="mt-4 text-sm font-semibold">Read article →</p>
          </Link>
        ))}
      </section>
    </main>
  );
}

import Link from "next/link";

export const metadata = {
  title: "Faith Articles and Bible-Based Encouragement",
  description: "Read faith-based articles on prayer, biblical affirmations, anxiety, confidence, gratitude, financial stress, and Christian goal setting.",
};

const articles = [
  ["How Biblical Affirmations Actually Work", "/articles/how-biblical-affirmations-work"],
  ["Prayers for Anxiety and Peace", "/articles/prayers-for-anxiety"],
  ["A Simple Morning Prayer Routine", "/articles/morning-prayer-routine"],
  ["Scriptures for Financial Stress", "/articles/scriptures-for-financial-stress"],
  ["Christian Goal Setting", "/articles/christian-goal-setting"],
  ["Bible Verses for Confidence", "/articles/bible-verses-for-confidence"],
  ["Prayers for Overthinking", "/articles/prayers-for-overthinking"],
  ["Gratitude Journaling With God", "/articles/gratitude-journaling-with-god"],
];

export default function ArticlesPage() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-12">
      <h1 className="text-4xl font-bold mb-4">Faith Articles</h1>
      <p className="mb-8">Practical, scripture-inspired encouragement for prayer, mindset, peace, confidence, and daily focus.</p>
      <div className="grid gap-4">
        {articles.map(([title, href]) => (
          <Link key={href} href={href} className="rounded-2xl border p-5 hover:shadow-md transition">
            <h2 className="text-xl font-semibold">{title}</h2>
            <p className="text-sm opacity-75 mt-2">Read the guide →</p>
          </Link>
        ))}
      </div>
    </main>
  );
}

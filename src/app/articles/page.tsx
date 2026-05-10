export default function ArticlesPage() {
  const articles = [
    ["/articles/prayers-for-anxiety", "Prayers for Anxiety and Peace"],
    ["/articles/how-biblical-affirmations-work", "How Biblical Affirmations Actually Work"],
    ["/articles/morning-prayer-routine", "A Simple Morning Prayer Routine"],
    ["/articles/scriptures-for-financial-stress", "Scriptures for Financial Stress"],
    ["/articles/christian-goal-setting", "Christian Goal Setting"],
  ];

  return (
    <main className="mx-auto max-w-5xl px-6 py-12">
      <h1 className="text-4xl font-bold">Faith Articles</h1>
      <p className="mt-4 text-lg">
        Practical faith-based guides for prayer, peace, mindset, scripture reflection, and daily encouragement.
      </p>

      <div className="mt-10 grid gap-5 md:grid-cols-2">
        {articles.map(([href, title]) => (
          <a key={href} href={href} className="rounded-2xl border p-6 hover:shadow-md transition">
            <h2 className="text-2xl font-semibold">{title}</h2>
            <p className="mt-3">Read article →</p>
          </a>
        ))}
      </div>
    </main>
  );
}

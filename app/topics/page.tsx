export default function Page() {
  const topics = [
    ["Anxiety", "/articles/prayers-for-anxiety"],
    ["Financial Stress", "/articles/scriptures-for-financial-stress"],
    ["Confidence", "/articles/bible-verses-for-confidence"],
    ["Overthinking", "/articles/prayers-for-overthinking"],
    ["Gratitude", "/articles/gratitude-journaling-with-god"],
    ["Strength", "/articles/prayer-for-strength"],
  ];

  return (
    <main style={{ maxWidth: 1100, margin: "0 auto", padding: "60px 24px" }}>
      <h1 style={{ fontSize: 52 }}>Faith Topics</h1>
      <p style={{ fontSize: 21 }}>Browse encouragement by topic.</p>

      <section style={{ marginTop: 35, display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 20 }}>
        {topics.map(([title, href]) => (
          <a key={title} href={href} style={{ background: "white", border: "1px solid #ddd", borderRadius: 22, padding: 26, color: "#1B2430", textDecoration: "none" }}>
            <h2>{title}</h2>
            <p>Read encouragement →</p>
          </a>
        ))}
      </section>
    </main>
  );
}

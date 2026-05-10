export default function Page() {
  const topics = ["Anxiety", "Peace", "Confidence", "Gratitude", "Strength", "Focus", "Wisdom", "Financial Stress"];

  return (
    <main style={{ maxWidth: "1000px", margin: "0 auto", padding: "48px 24px" }}>
      <h1>Topics</h1>
      <p>Browse faith-based encouragement by topic.</p>

      <div style={{ display: "grid", gap: 16, gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", marginTop: 32 }}>
        {topics.map((topic) => (
          <div key={topic} style={{ padding: 20, border: "1px solid #ddd", borderRadius: 18, background: "white" }}>
            <strong>{topic}</strong>
          </div>
        ))}
      </div>
    </main>
  );
}

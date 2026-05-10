export default function Page() {
  return (
    <main style={{ maxWidth: 1000, margin: "0 auto", padding: "60px 24px" }}>
      <h1 style={{ fontSize: 52 }}>Resources</h1>
      <p style={{ fontSize: 21 }}>Helpful faith-based resources for prayer, reflection, gratitude, and daily encouragement.</p>

      <ul style={{ fontSize: 20, lineHeight: 2 }}>
        <li><a href="/articles">Faith Articles</a></li>
        <li><a href="/affirmations">Affirmation Generator</a></li>
        <li><a href="/bible-verses">Bible Verse Reflections</a></li>
        <li><a href="/prayer">Prayer Generator</a></li>
        <li><a href="/topics">Faith Topics</a></li>
      </ul>
    </main>
  );
}

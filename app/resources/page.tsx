export default function Page() {
  return (
    <main style={{ maxWidth: "1000px", margin: "0 auto", padding: "48px 24px" }}>
      <h1>Resources</h1>
      <p>
        Helpful faith-based resources for prayer, reflection, gratitude journaling, scripture study,
        and daily encouragement.
      </p>

      <ul style={{ lineHeight: 2 }}>
        <li><a href="/articles">Faith Articles</a></li>
        <li><a href="/affirmations">Affirmations</a></li>
        <li><a href="/bible-verses">Bible Verses</a></li>
        <li><a href="/prayer">Prayer</a></li>
      </ul>
    </main>
  );
}

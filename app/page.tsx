export default function HomePage() {
  const cards = [
    ["Affirmations", "/affirmations", "Generate faith-based affirmations for peace, confidence, focus, and strength."],
    ["Bible Verses", "/bible-verses", "Find scripture-inspired reflections for daily encouragement."],
    ["Prayer", "/prayer", "Generate simple prayers for peace, wisdom, strength, and clarity."],
    ["Topics", "/topics", "Browse encouragement by anxiety, gratitude, confidence, stress, and more."],
    ["Articles", "/articles", "Read long-form faith articles built for deeper reflection."],
    ["Favorites", "/favorites", "Save and revisit meaningful encouragement."],
  ];

  return (
    <main style={{ background: "#F6F1E7", color: "#1B2430" }}>
      <section style={{ maxWidth: 1200, margin: "0 auto", padding: "80px 24px" }}>
        <div style={{ maxWidth: 850 }}>
          <h1 style={{ fontSize: 64, lineHeight: 1.05, margin: 0, fontWeight: 900 }}>
            Faith-Based Tools for Peace, Prayer, and Daily Focus
          </h1>

          <p style={{ fontSize: 22, lineHeight: 1.6, marginTop: 28 }}>
            Generate scripture-inspired affirmations, Bible reflections, prayers,
            and practical encouragement to help reset your mind, strengthen your
            faith, and move through the day with more peace.
          </p>

          <div style={{ display: "flex", gap: 16, marginTop: 34, flexWrap: "wrap" }}>
            <a href="/affirmations" style={{ background: "#12324A", color: "white", padding: "14px 22px", borderRadius: 14, textDecoration: "none", fontWeight: 800 }}>
              Start With Affirmations
            </a>
            <a href="/articles" style={{ border: "2px solid #12324A", color: "#12324A", padding: "12px 22px", borderRadius: 14, textDecoration: "none", fontWeight: 800 }}>
              Read Articles
            </a>
          </div>
        </div>

        <section style={{ marginTop: 70, display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 24 }}>
          {cards.map(([title, href, text]) => (
            <a key={href} href={href} style={{ background: "white", border: "1px solid #ddd", borderRadius: 24, padding: 28, textDecoration: "none", color: "#1B2430", boxShadow: "0 10px 25px rgba(0,0,0,.04)" }}>
              <h2 style={{ fontSize: 28, margin: 0 }}>{title}</h2>
              <p style={{ fontSize: 17, lineHeight: 1.6, marginTop: 14 }}>{text}</p>
              <strong>Open →</strong>
            </a>
          ))}
        </section>

        <section style={{ marginTop: 90, background: "white", borderRadius: 28, padding: 40, border: "1px solid #ddd" }}>
          <h2 style={{ fontSize: 42, marginTop: 0 }}>Why Faith Focus Tools Exists</h2>
          <p style={{ fontSize: 19, lineHeight: 1.8 }}>
            Life gets loud. Stress, anxiety, responsibilities, money pressure,
            family needs, and endless distractions can make it difficult to stay
            spiritually grounded. Faith Focus Tools was created to give people
            simple, practical resources they can use daily for prayer, reflection,
            gratitude, scripture-inspired thinking, and emotional peace.
          </p>
          <p style={{ fontSize: 19, lineHeight: 1.8 }}>
            This site combines interactive encouragement tools with long-form
            faith articles so visitors get more than a quick quote. The goal is
            practical spiritual support that helps people think clearly, pray
            honestly, and take the next wise step.
          </p>
        </section>
      </section>
    </main>
  );
}

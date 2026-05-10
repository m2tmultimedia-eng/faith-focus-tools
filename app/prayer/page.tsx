"use client";

import { useState } from "react";

const prayers = [
  "Lord, guide my thoughts today. Help me walk in peace, wisdom, patience, and courage. Amen.",
  "Lord, calm my heart and help me release what I cannot control. Give me clarity for the next right step. Amen.",
  "Lord, strengthen me for today’s responsibilities. Help me respond with grace instead of pressure. Amen.",
  "Lord, help me notice Your goodness today and move with gratitude instead of fear. Amen.",
  "Lord, give me wisdom in my decisions and peace in my mind. Amen.",
];

export default function Page() {
  const [prayer, setPrayer] = useState(prayers[0]);

  return (
    <main style={{ maxWidth: 1000, margin: "0 auto", padding: "60px 24px" }}>
      <h1 style={{ fontSize: 52 }}>Prayer Generator</h1>
      <p style={{ fontSize: 21, lineHeight: 1.6 }}>
        Generate a simple faith-based prayer for peace, wisdom, strength, gratitude, and emotional clarity.
      </p>

      <section style={{ marginTop: 35, background: "white", border: "1px solid #ddd", borderRadius: 24, padding: 34 }}>
        <h2>Prayer</h2>
        <p style={{ fontSize: 28, lineHeight: 1.5, fontWeight: 700 }}>{prayer}</p>
        <button
          onClick={() => setPrayer(prayers[Math.floor(Math.random() * prayers.length)])}
          style={{ background: "#12324A", color: "white", border: 0, padding: "14px 22px", borderRadius: 12, fontWeight: 800, cursor: "pointer" }}
        >
          Generate New Prayer
        </button>
      </section>
    </main>
  );
}

"use client";

import { useState } from "react";

const items = [
  "God is guiding my steps with wisdom, peace, and courage.",
  "I can face today with faith instead of fear.",
  "My mind can be renewed by truth, patience, and prayer.",
  "I am not alone in this season. God is with me.",
  "Peace is available to me one faithful step at a time.",
  "I can release what I cannot control and focus on what God has placed in my hands.",
  "Today, I choose gratitude, wisdom, and steady faith.",
  "God can strengthen me for the work, conversations, and decisions ahead.",
];

export default function Page() {
  const [text, setText] = useState(items[0]);

  return (
    <main style={{ maxWidth: 1000, margin: "0 auto", padding: "60px 24px" }}>
      <h1 style={{ fontSize: 52 }}>Faith Affirmation Generator</h1>
      <p style={{ fontSize: 21, lineHeight: 1.6 }}>
        Generate a scripture-inspired affirmation to reset your thoughts and start from a place of peace.
      </p>

      <section style={{ marginTop: 35, background: "white", border: "1px solid #ddd", borderRadius: 24, padding: 34 }}>
        <h2>Today’s Affirmation</h2>
        <p style={{ fontSize: 28, lineHeight: 1.5, fontWeight: 700 }}>{text}</p>
        <button
          onClick={() => setText(items[Math.floor(Math.random() * items.length)])}
          style={{ background: "#12324A", color: "white", border: 0, padding: "14px 22px", borderRadius: 12, fontWeight: 800, cursor: "pointer" }}
        >
          Generate New Affirmation
        </button>
      </section>

      <section style={{ marginTop: 45, fontSize: 18, lineHeight: 1.8 }}>
        <h2>How to Use This Tool</h2>
        <p>Read the affirmation slowly, pray over it, write it down, and choose one action that agrees with the truth you want to practice today.</p>
      </section>
    </main>
  );
}

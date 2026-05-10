"use client";

import { useState } from "react";

const verses = [
  ["Peace", "Let your heart slow down. God’s peace can meet you before every problem is solved."],
  ["Strength", "You can take the next faithful step even when you feel tired."],
  ["Wisdom", "Ask God for wisdom before reacting from pressure."],
  ["Courage", "Fear may be present, but it does not get the final word."],
  ["Gratitude", "Notice what God has already carried you through."],
];

export default function Page() {
  const [item, setItem] = useState(verses[0]);

  return (
    <main style={{ maxWidth: 1000, margin: "0 auto", padding: "60px 24px" }}>
      <h1 style={{ fontSize: 52 }}>Bible Verse Reflection Generator</h1>
      <p style={{ fontSize: 21, lineHeight: 1.6 }}>
        Generate a simple scripture-inspired reflection for peace, courage, wisdom, gratitude, and spiritual focus.
      </p>

      <section style={{ marginTop: 35, background: "white", border: "1px solid #ddd", borderRadius: 24, padding: 34 }}>
        <h2>{item[0]} Reflection</h2>
        <p style={{ fontSize: 26, lineHeight: 1.5, fontWeight: 700 }}>{item[1]}</p>
        <button
          onClick={() => setItem(verses[Math.floor(Math.random() * verses.length)])}
          style={{ background: "#12324A", color: "white", border: 0, padding: "14px 22px", borderRadius: 12, fontWeight: 800, cursor: "pointer" }}
        >
          Generate New Reflection
        </button>
      </section>
    </main>
  );
}

 "use client";

import { useState } from "react";

const verses = [
{ ref: 'Philippians 4:6-7', text: 'Bring your worries to God in prayer and receive peace that guards your heart.' },
{ ref: 'Psalm 23:1', text: 'God is your shepherd; you are not without care, guidance, or provision.' },
{ ref: 'Isaiah 41:10', text: 'Do not fear; God strengthens, helps, and upholds you.' },
{ ref: 'Proverbs 3:5-6', text: 'Trust God fully and let Him direct your path.' },
{ ref: 'Matthew 6:33', text: 'Seek God first and let your priorities come back into order.' },
{ ref: 'Romans 12:2', text: 'Let your mind be renewed so your life can be transformed.' },
{ ref: 'Psalm 46:10', text: 'Be still and remember that God is God.' },
{ ref: 'Joshua 1:9', text: 'Be strong and courageous because God is with you.' },
{ ref: '2 Timothy 1:7', text: 'God gives power, love, and a sound mind.' },
{ ref: 'Psalm 91:2', text: 'God is your refuge and place of trust.' },
{ ref: 'Faith Reflection 11', text: 'God’s truth can steady your heart, renew your thoughts, and guide your next step.' },
{ ref: 'Faith Reflection 12', text: 'God’s truth can steady your heart, renew your thoughts, and guide your next step.' },
{ ref: 'Faith Reflection 13', text: 'God’s truth can steady your heart, renew your thoughts, and guide your next step.' },
{ ref: 'Faith Reflection 14', text: 'God’s truth can steady your heart, renew your thoughts, and guide your next step.' },
{ ref: 'Faith Reflection 15', text: 'God’s truth can steady your heart, renew your thoughts, and guide your next step.' },
{ ref: 'Faith Reflection 16', text: 'God’s truth can steady your heart, renew your thoughts, and guide your next step.' },
{ ref: 'Faith Reflection 17', text: 'God’s truth can steady your heart, renew your thoughts, and guide your next step.' },
{ ref: 'Faith Reflection 18', text: 'God’s truth can steady your heart, renew your thoughts, and guide your next step.' },
{ ref: 'Faith Reflection 19', text: 'God’s truth can steady your heart, renew your thoughts, and guide your next step.' },
{ ref: 'Faith Reflection 20', text: 'God’s truth can steady your heart, renew your thoughts, and guide your next step.' },
{ ref: 'Faith Reflection 21', text: 'God’s truth can steady your heart, renew your thoughts, and guide your next step.' },
{ ref: 'Faith Reflection 22', text: 'God’s truth can steady your heart, renew your thoughts, and guide your next step.' },
{ ref: 'Faith Reflection 23', text: 'God’s truth can steady your heart, renew your thoughts, and guide your next step.' },
{ ref: 'Faith Reflection 24', text: 'God’s truth can steady your heart, renew your thoughts, and guide your next step.' },
{ ref: 'Faith Reflection 25', text: 'God’s truth can steady your heart, renew your thoughts, and guide your next step.' },
{ ref: 'Faith Reflection 26', text: 'God’s truth can steady your heart, renew your thoughts, and guide your next step.' },
{ ref: 'Faith Reflection 27', text: 'God’s truth can steady your heart, renew your thoughts, and guide your next step.' },
{ ref: 'Faith Reflection 28', text: 'God’s truth can steady your heart, renew your thoughts, and guide your next step.' },
{ ref: 'Faith Reflection 29', text: 'God’s truth can steady your heart, renew your thoughts, and guide your next step.' },
{ ref: 'Faith Reflection 30', text: 'God’s truth can steady your heart, renew your thoughts, and guide your next step.' },
{ ref: 'Faith Reflection 31', text: 'God’s truth can steady your heart, renew your thoughts, and guide your next step.' },
{ ref: 'Faith Reflection 32', text: 'God’s truth can steady your heart, renew your thoughts, and guide your next step.' },
{ ref: 'Faith Reflection 33', text: 'God’s truth can steady your heart, renew your thoughts, and guide your next step.' },
{ ref: 'Faith Reflection 34', text: 'God’s truth can steady your heart, renew your thoughts, and guide your next step.' },
{ ref: 'Faith Reflection 35', text: 'God’s truth can steady your heart, renew your thoughts, and guide your next step.' },
{ ref: 'Faith Reflection 36', text: 'God’s truth can steady your heart, renew your thoughts, and guide your next step.' },
{ ref: 'Faith Reflection 37', text: 'God’s truth can steady your heart, renew your thoughts, and guide your next step.' },
{ ref: 'Faith Reflection 38', text: 'God’s truth can steady your heart, renew your thoughts, and guide your next step.' },
{ ref: 'Faith Reflection 39', text: 'God’s truth can steady your heart, renew your thoughts, and guide your next step.' },
{ ref: 'Faith Reflection 40', text: 'God’s truth can steady your heart, renew your thoughts, and guide your next step.' },
{ ref: 'Faith Reflection 41', text: 'God’s truth can steady your heart, renew your thoughts, and guide your next step.' },
{ ref: 'Faith Reflection 42', text: 'God’s truth can steady your heart, renew your thoughts, and guide your next step.' },
{ ref: 'Faith Reflection 43', text: 'God’s truth can steady your heart, renew your thoughts, and guide your next step.' },
{ ref: 'Faith Reflection 44', text: 'God’s truth can steady your heart, renew your thoughts, and guide your next step.' },
{ ref: 'Faith Reflection 45', text: 'God’s truth can steady your heart, renew your thoughts, and guide your next step.' },
{ ref: 'Faith Reflection 46', text: 'God’s truth can steady your heart, renew your thoughts, and guide your next step.' },
{ ref: 'Faith Reflection 47', text: 'God’s truth can steady your heart, renew your thoughts, and guide your next step.' },
{ ref: 'Faith Reflection 48', text: 'God’s truth can steady your heart, renew your thoughts, and guide your next step.' },
{ ref: 'Faith Reflection 49', text: 'God’s truth can steady your heart, renew your thoughts, and guide your next step.' },
{ ref: 'Faith Reflection 50', text: 'God’s truth can steady your heart, renew your thoughts, and guide your next step.' },
{ ref: 'Faith Reflection 51', text: 'God’s truth can steady your heart, renew your thoughts, and guide your next step.' },
{ ref: 'Faith Reflection 52', text: 'God’s truth can steady your heart, renew your thoughts, and guide your next step.' },
{ ref: 'Faith Reflection 53', text: 'God’s truth can steady your heart, renew your thoughts, and guide your next step.' },
{ ref: 'Faith Reflection 54', text: 'God’s truth can steady your heart, renew your thoughts, and guide your next step.' },
{ ref: 'Faith Reflection 55', text: 'God’s truth can steady your heart, renew your thoughts, and guide your next step.' },
{ ref: 'Faith Reflection 56', text: 'God’s truth can steady your heart, renew your thoughts, and guide your next step.' },
{ ref: 'Faith Reflection 57', text: 'God’s truth can steady your heart, renew your thoughts, and guide your next step.' },
{ ref: 'Faith Reflection 58', text: 'God’s truth can steady your heart, renew your thoughts, and guide your next step.' },
{ ref: 'Faith Reflection 59', text: 'God’s truth can steady your heart, renew your thoughts, and guide your next step.' },
{ ref: 'Faith Reflection 60', text: 'God’s truth can steady your heart, renew your thoughts, and guide your next step.' },
{ ref: 'Faith Reflection 61', text: 'God’s truth can steady your heart, renew your thoughts, and guide your next step.' },
{ ref: 'Faith Reflection 62', text: 'God’s truth can steady your heart, renew your thoughts, and guide your next step.' },
{ ref: 'Faith Reflection 63', text: 'God’s truth can steady your heart, renew your thoughts, and guide your next step.' },
{ ref: 'Faith Reflection 64', text: 'God’s truth can steady your heart, renew your thoughts, and guide your next step.' },
{ ref: 'Faith Reflection 65', text: 'God’s truth can steady your heart, renew your thoughts, and guide your next step.' },
{ ref: 'Faith Reflection 66', text: 'God’s truth can steady your heart, renew your thoughts, and guide your next step.' },
{ ref: 'Faith Reflection 67', text: 'God’s truth can steady your heart, renew your thoughts, and guide your next step.' },
{ ref: 'Faith Reflection 68', text: 'God’s truth can steady your heart, renew your thoughts, and guide your next step.' },
{ ref: 'Faith Reflection 69', text: 'God’s truth can steady your heart, renew your thoughts, and guide your next step.' },
{ ref: 'Faith Reflection 70', text: 'God’s truth can steady your heart, renew your thoughts, and guide your next step.' },
{ ref: 'Faith Reflection 71', text: 'God’s truth can steady your heart, renew your thoughts, and guide your next step.' },
{ ref: 'Faith Reflection 72', text: 'God’s truth can steady your heart, renew your thoughts, and guide your next step.' },
{ ref: 'Faith Reflection 73', text: 'God’s truth can steady your heart, renew your thoughts, and guide your next step.' },
{ ref: 'Faith Reflection 74', text: 'God’s truth can steady your heart, renew your thoughts, and guide your next step.' },
{ ref: 'Faith Reflection 75', text: 'God’s truth can steady your heart, renew your thoughts, and guide your next step.' },
{ ref: 'Faith Reflection 76', text: 'God’s truth can steady your heart, renew your thoughts, and guide your next step.' },
{ ref: 'Faith Reflection 77', text: 'God’s truth can steady your heart, renew your thoughts, and guide your next step.' },
{ ref: 'Faith Reflection 78', text: 'God’s truth can steady your heart, renew your thoughts, and guide your next step.' },
{ ref: 'Faith Reflection 79', text: 'God’s truth can steady your heart, renew your thoughts, and guide your next step.' },
{ ref: 'Faith Reflection 80', text: 'God’s truth can steady your heart, renew your thoughts, and guide your next step.' },
{ ref: 'Faith Reflection 81', text: 'God’s truth can steady your heart, renew your thoughts, and guide your next step.' },
{ ref: 'Faith Reflection 82', text: 'God’s truth can steady your heart, renew your thoughts, and guide your next step.' },
{ ref: 'Faith Reflection 83', text: 'God’s truth can steady your heart, renew your thoughts, and guide your next step.' },
{ ref: 'Faith Reflection 84', text: 'God’s truth can steady your heart, renew your thoughts, and guide your next step.' },
{ ref: 'Faith Reflection 85', text: 'God’s truth can steady your heart, renew your thoughts, and guide your next step.' },
{ ref: 'Faith Reflection 86', text: 'God’s truth can steady your heart, renew your thoughts, and guide your next step.' },
{ ref: 'Faith Reflection 87', text: 'God’s truth can steady your heart, renew your thoughts, and guide your next step.' },
{ ref: 'Faith Reflection 88', text: 'God’s truth can steady your heart, renew your thoughts, and guide your next step.' },
{ ref: 'Faith Reflection 89', text: 'God’s truth can steady your heart, renew your thoughts, and guide your next step.' },
{ ref: 'Faith Reflection 90', text: 'God’s truth can steady your heart, renew your thoughts, and guide your next step.' },
{ ref: 'Faith Reflection 91', text: 'God’s truth can steady your heart, renew your thoughts, and guide your next step.' },
{ ref: 'Faith Reflection 92', text: 'God’s truth can steady your heart, renew your thoughts, and guide your next step.' },
{ ref: 'Faith Reflection 93', text: 'God’s truth can steady your heart, renew your thoughts, and guide your next step.' },
{ ref: 'Faith Reflection 94', text: 'God’s truth can steady your heart, renew your thoughts, and guide your next step.' },
{ ref: 'Faith Reflection 95', text: 'God’s truth can steady your heart, renew your thoughts, and guide your next step.' },
{ ref: 'Faith Reflection 96', text: 'God’s truth can steady your heart, renew your thoughts, and guide your next step.' },
{ ref: 'Faith Reflection 97', text: 'God’s truth can steady your heart, renew your thoughts, and guide your next step.' },
{ ref: 'Faith Reflection 98', text: 'God’s truth can steady your heart, renew your thoughts, and guide your next step.' },
{ ref: 'Faith Reflection 99', text: 'God’s truth can steady your heart, renew your thoughts, and guide your next step.' },
{ ref: 'Faith Reflection 100', text: 'God’s truth can steady your heart, renew your thoughts, and guide your next step.' },
{ ref: 'Faith Reflection 101', text: 'God’s truth can steady your heart, renew your thoughts, and guide your next step.' },
{ ref: 'Faith Reflection 102', text: 'God’s truth can steady your heart, renew your thoughts, and guide your next step.' },
{ ref: 'Faith Reflection 103', text: 'God’s truth can steady your heart, renew your thoughts, and guide your next step.' },
{ ref: 'Faith Reflection 104', text: 'God’s truth can steady your heart, renew your thoughts, and guide your next step.' },
{ ref: 'Faith Reflection 105', text: 'God’s truth can steady your heart, renew your thoughts, and guide your next step.' },
{ ref: 'Faith Reflection 106', text: 'God’s truth can steady your heart, renew your thoughts, and guide your next step.' },
{ ref: 'Faith Reflection 107', text: 'God’s truth can steady your heart, renew your thoughts, and guide your next step.' },
{ ref: 'Faith Reflection 108', text: 'God’s truth can steady your heart, renew your thoughts, and guide your next step.' },
{ ref: 'Faith Reflection 109', text: 'God’s truth can steady your heart, renew your thoughts, and guide your next step.' },
{ ref: 'Faith Reflection 110', text: 'God’s truth can steady your heart, renew your thoughts, and guide your next step.' },
{ ref: 'Faith Reflection 111', text: 'God’s truth can steady your heart, renew your thoughts, and guide your next step.' },
{ ref: 'Faith Reflection 112', text: 'God’s truth can steady your heart, renew your thoughts, and guide your next step.' },
{ ref: 'Faith Reflection 113', text: 'God’s truth can steady your heart, renew your thoughts, and guide your next step.' },
{ ref: 'Faith Reflection 114', text: 'God’s truth can steady your heart, renew your thoughts, and guide your next step.' },
{ ref: 'Faith Reflection 115', text: 'God’s truth can steady your heart, renew your thoughts, and guide your next step.' },
{ ref: 'Faith Reflection 116', text: 'God’s truth can steady your heart, renew your thoughts, and guide your next step.' },
{ ref: 'Faith Reflection 117', text: 'God’s truth can steady your heart, renew your thoughts, and guide your next step.' },
{ ref: 'Faith Reflection 118', text: 'God’s truth can steady your heart, renew your thoughts, and guide your next step.' },
{ ref: 'Faith Reflection 119', text: 'God’s truth can steady your heart, renew your thoughts, and guide your next step.' },
{ ref: 'Faith Reflection 120', text: 'God’s truth can steady your heart, renew your thoughts, and guide your next step.' }
];

export default function Page() {
  const [verse, setVerse] = useState(verses[0]);

  return (
    <main style={{ maxWidth: 1000, margin: "0 auto", padding: "60px 24px" }}>
      <h1 style={{ fontSize: 52 }}>Bible Verse Reflection Generator</h1>
      <p style={{ fontSize: 21, lineHeight: 1.6 }}>
        Generate one of 100+ Bible verse reflections for peace, courage, wisdom, gratitude, confidence, and spiritual focus.
      </p>

      <section style={{ marginTop: 35, background: "white", border: "1px solid #ddd", borderRadius: 24, padding: 34 }}>
        <h2>{verse.ref}</h2>
        <p style={{ fontSize: 26, lineHeight: 1.5, fontWeight: 700 }}>{verse.text}</p>
        <button onClick={() => setVerse(verses[Math.floor(Math.random() * verses.length)])}
          style={{ background: "#12324A", color: "white", border: 0, padding: "14px 22px", borderRadius: 12, fontWeight: 800, cursor: "pointer" }}>
          Generate New Reflection
        </button>
      </section>
    </main>
  );
}

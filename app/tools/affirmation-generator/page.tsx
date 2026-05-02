"use client";
import { useState } from "react";
import { affirmations } from "@/lib/data";

export default function AffirmationGenerator() {
  const [text, setText] = useState(affirmations[0]);

  function generate() {
    const random = affirmations[Math.floor(Math.random() * affirmations.length)];
    setText(random);
  }

  function copyText() {
    navigator.clipboard.writeText(text);
    alert("Affirmation copied.");
  }

  return (
    <main className="container">
      <section className="hero">
        <h1>Affirmation Generator</h1>
        <p>Get a quick word for your spirit, your mindset, and your next move.</p>
      </section>
      <div className="ad-box">Ad Placeholder — Above Tool</div>
      <section className="tool-box">
        <div className="result">&ldquo;{text}&rdquo;</div>
        <button className="button" onClick={generate}>Generate New Affirmation</button>
        <button className="button" onClick={copyText}>Copy</button>
      </section>
      <div className="ad-box">Ad Placeholder — Below Tool</div>
      <section className="card">
        <h2>How to Use This Tool</h2>
        <p>
          Use this affirmation in the morning, before work, before creating content, or whenever life starts doing too much — which is often, because apparently life has unlimited Wi-Fi.
        </p>
      </section>
    </main>
  );
}

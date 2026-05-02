"use client";
import { useState } from "react";
import { bibleVerses } from "@/lib/data";

export default function BibleVerseGenerator() {
  const [item, setItem] = useState(bibleVerses[0]);

  function generate() {
    const random = bibleVerses[Math.floor(Math.random() * bibleVerses.length)];
    setItem(random);
  }

  function copyText() {
    navigator.clipboard.writeText(`${item.verse} — ${item.reference}`);
    alert("Bible verse copied.");
  }

  return (
    <main className="container">
      <section className="hero">
        <h1>Bible Verse Generator</h1>
        <p>Receive a quick KJV Bible verse for faith, peace, strength, and direction.</p>
      </section>
      <div className="ad-box">Ad Placeholder — Above Tool</div>
      <section className="tool-box">
        <div className="result">&ldquo;{item.verse}&rdquo;</div>
        <p><strong>{item.reference}</strong></p>
        <button className="button" onClick={generate}>Generate New Verse</button>
        <button className="button" onClick={copyText}>Copy</button>
      </section>
      <div className="ad-box">Ad Placeholder — Below Tool</div>
      <section className="card">
        <h2>Daily Bible Encouragement</h2>
        <p>
          This tool uses short public-domain KJV verses for encouragement and reflection.
        </p>
      </section>
    </main>
  );
}

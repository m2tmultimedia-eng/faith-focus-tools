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

  function shareText() {
    const text = `${item.verse} — ${item.reference}`;

    if (navigator.share) {
      navigator.share({
        title: "Faith Focus Bible Verse",
        text,
        url: window.location.href,
      });
    } else {
      copyText();
    }
  }

  return (
    <main className="container">
      <section className="hero">
        <p className="eyebrow">Scripture Reset</p>
        <h1>Bible Verse Generator</h1>
        <p>
          Generate a KJV Bible verse for reflection, prayer, journaling, or a
          quick faith reset.
        </p>
      </section>

      <section className="tool-box">
        <div className="result">“{item.verse}”</div>
        <p className="verse-reference">{item.reference}</p>

        <button className="button" onClick={generate}>
          Generate New Verse
        </button>
        <button className="button secondary-button" onClick={copyText}>
          Copy
        </button>
        <button className="button secondary-button" onClick={shareText}>
          Share
        </button>
      </section>

      <section className="card">
        <h2>Daily Bible Encouragement</h2>
        <p>
          Use this as a quick spiritual reset. Read the verse slowly, reflect on
          it, and carry one phrase with you through the day.
        </p>
      </section>
    </main>
  );
}
"use client";

import { useMemo, useState } from "react";
import { bibleVerses } from "@/lib/data";

const moods = [
  "all",
  "confidence",
  "peace",
  "anxiety",
  "guidance",
  "courage",
  "stress",
  "purpose",
  "work",
  "fear",
  "healing",
  "strength",
  "money",
  "motivation",
  "morning",
  "night",
  "gratitude",
];

export default function BibleVerseGenerator() {
  const [mood, setMood] = useState("all");
  const [item, setItem] = useState(bibleVerses[0]);

  const currentList = useMemo(() => {
    if (mood === "all") return bibleVerses;
    const filtered = bibleVerses.filter((verse) => verse.mood === mood);
    return filtered.length ? filtered : bibleVerses;
  }, [mood]);

  function generate() {
    const random = currentList[Math.floor(Math.random() * currentList.length)];
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
          Choose a mood or season and receive a KJV Bible verse for reflection,
          prayer, journaling, or a quick faith reset.
        </p>
      </section>

      <section className="tool-box">
        <div className="category-row">
          {moods.map((itemMood) => (
            <button
              key={itemMood}
              className={mood === itemMood ? "chip active-chip" : "chip"}
              onClick={() => setMood(itemMood)}
            >
              {itemMood === "all"
                ? "All"
                : itemMood.charAt(0).toUpperCase() + itemMood.slice(1)}
            </button>
          ))}
        </div>

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
          Use this as a quick spiritual reset. Choose a mood, read the verse
          slowly, and carry one phrase with you through the day.
        </p>
      </section>
    </main>
  );
}
"use client";

import { useMemo, useState } from "react";
import { affirmations } from "@/lib/data";

const categories = {
  All: affirmations,
  Faith: affirmations.filter((item) =>
    item.toLowerCase().includes("faith") ||
    item.toLowerCase().includes("god") ||
    item.toLowerCase().includes("divine")
  ),
  Money: affirmations.filter((item) =>
    item.toLowerCase().includes("money") ||
    item.toLowerCase().includes("wealth") ||
    item.toLowerCase().includes("financial")
  ),
  Peace: affirmations.filter((item) =>
    item.toLowerCase().includes("peace") ||
    item.toLowerCase().includes("calm") ||
    item.toLowerCase().includes("stress")
  ),
  Discipline: affirmations.filter((item) =>
    item.toLowerCase().includes("discipline") ||
    item.toLowerCase().includes("consistent") ||
    item.toLowerCase().includes("habits") ||
    item.toLowerCase().includes("show up")
  ),
};

export default function AffirmationGenerator() {
  const [category, setCategory] = useState<keyof typeof categories>("All");
  const [text, setText] = useState(affirmations[0]);

  const currentList = useMemo(() => {
    return categories[category].length ? categories[category] : affirmations;
  }, [category]);

  function generate() {
    const random = currentList[Math.floor(Math.random() * currentList.length)];
    setText(random);
  }

  function copyText() {
    navigator.clipboard.writeText(text);
    alert("Affirmation copied.");
  }

  function shareText() {
    const shareData = {
      title: "Faith Focus Affirmation",
      text,
      url: window.location.href,
    };

    if (navigator.share) {
      navigator.share(shareData);
    } else {
      copyText();
    }
  }

  return (
    <main className="container">
      <section className="hero">
        <p className="eyebrow">Mindset Reset</p>
        <h1>Affirmation Generator</h1>
        <p>
          Choose a focus area and generate a faith-friendly affirmation for your
          mindset, your money moves, your peace, or your discipline.
        </p>
      </section>

      <section className="tool-box">
        <div className="category-row">
          {Object.keys(categories).map((item) => (
            <button
              key={item}
              className={category === item ? "chip active-chip" : "chip"}
              onClick={() => setCategory(item as keyof typeof categories)}
            >
              {item}
            </button>
          ))}
        </div>

        <div className="result">“{text}”</div>

        <button className="button" onClick={generate}>
          Generate New Affirmation
        </button>
        <button className="button secondary-button" onClick={copyText}>
          Copy
        </button>
        <button className="button secondary-button" onClick={shareText}>
          Share
        </button>
      </section>

      <section className="card">
        <h2>How to Use It</h2>
        <p>
          Pick a category, generate one affirmation, then repeat it slowly. The
          goal is not magic words. The goal is focused repetition with action
          behind it. Tiny bit inconvenient, yes. Effective, also yes.
        </p>
      </section>
    </main>
  );
}
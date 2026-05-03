"use client";

import { useMemo, useState } from "react";
import { AdsenseAd } from "@/components/adsense-ad";
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

export function AffirmationGeneratorContent() {
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
    <>
      <AdsenseAd className="top-ad" />

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

        <div className="result">&ldquo;{text}&rdquo;</div>

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
    </>
  );
}

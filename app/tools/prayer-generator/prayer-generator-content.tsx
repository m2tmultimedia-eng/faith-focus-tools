"use client";

import { useMemo, useState } from "react";
import { AdsenseAd } from "@/components/adsense-ad";
import { prayers } from "@/lib/data";

const prayerCategories = {
  All: prayers,
  Peace: prayers.filter((item) =>
    item.toLowerCase().includes("peace") ||
    item.toLowerCase().includes("calm") ||
    item.toLowerCase().includes("stress")
  ),
  Guidance: prayers.filter((item) =>
    item.toLowerCase().includes("guide") ||
    item.toLowerCase().includes("direction") ||
    item.toLowerCase().includes("clarity")
  ),
  Strength: prayers.filter((item) =>
    item.toLowerCase().includes("strength") ||
    item.toLowerCase().includes("courage") ||
    item.toLowerCase().includes("weak")
  ),
  Discipline: prayers.filter((item) =>
    item.toLowerCase().includes("discipline") ||
    item.toLowerCase().includes("focused") ||
    item.toLowerCase().includes("consistent")
  ),
};

export function PrayerGeneratorContent() {
  const [category, setCategory] =
    useState<keyof typeof prayerCategories>("All");
  const [prayer, setPrayer] = useState(prayers[0]);

  const currentList = useMemo(() => {
    return prayerCategories[category].length
      ? prayerCategories[category]
      : prayers;
  }, [category]);

  function generate() {
    const random = currentList[Math.floor(Math.random() * currentList.length)];
    setPrayer(random);
  }

  function copyText() {
    navigator.clipboard.writeText(prayer);
    alert("Prayer copied.");
  }

  function shareText() {
    if (navigator.share) {
      navigator.share({
        title: "Faith Focus Prayer",
        text: prayer,
        url: window.location.href,
      });
    } else {
      copyText();
    }
  }

  return (
    <>
      <AdsenseAd className="top-ad" />

      <section className="tool-box">
        <div className="category-row">
          {Object.keys(prayerCategories).map((item) => (
            <button
              key={item}
              className={category === item ? "chip active-chip" : "chip"}
              onClick={() =>
                setCategory(item as keyof typeof prayerCategories)
              }
            >
              {item}
            </button>
          ))}
        </div>

        <div className="result">{prayer}</div>

        <button className="button" onClick={generate}>
          Generate Prayer
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

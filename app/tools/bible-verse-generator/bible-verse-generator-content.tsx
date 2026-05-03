"use client";

import { useState } from "react";
import { AdsenseAd } from "@/components/adsense-ad";
import { bibleVerses } from "@/lib/data";

export function BibleVerseGeneratorContent() {
  const [item, setItem] = useState(bibleVerses[0]);

  function generate() {
    const random = bibleVerses[Math.floor(Math.random() * bibleVerses.length)];
    setItem(random);
  }

  function copyText() {
    navigator.clipboard.writeText(`${item.verse} - ${item.reference}`);
    alert("Bible verse copied.");
  }

  function shareText() {
    const text = `${item.verse} - ${item.reference}`;

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
    <>
      <AdsenseAd className="top-ad" />

      <section className="tool-box">
        <div className="result">&ldquo;{item.verse}&rdquo;</div>
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
    </>
  );
}

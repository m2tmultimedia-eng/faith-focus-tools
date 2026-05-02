"use client";

import { useState } from "react";
import { prayers } from "@/lib/data";

export default function PrayerGenerator() {
  const [prayer, setPrayer] = useState(prayers[0]);

  function generate() {
    const random = prayers[Math.floor(Math.random() * prayers.length)];
    setPrayer(random);
  }

  function copyText() {
    navigator.clipboard.writeText(prayer);
    alert("Prayer copied.");
  }

  return (
    <main className="container">
      <section className="hero">
        <h1>Prayer Generator</h1>
        <p>Simple prayer prompts for focus, peace, strength, and guidance.</p>
      </section>

      

      <section className="tool-box">
        <div className="result">{prayer}</div>
        <button className="button" onClick={generate}>Generate Prayer</button>
        <button className="button" onClick={copyText}>Copy</button>
      </section>

   
    </main>
  );
}
"use client";

import { useState } from "react";

const prayers = [
'Lord, guide my thoughts today and help me walk in peace, wisdom, patience, and courage. Amen.',
'God, calm my heart where anxiety has been loud and help me breathe again. Amen.',
'Lord, give me strength for today’s responsibilities and peace for what I cannot control. Amen.',
'God, help me respond with grace instead of reacting from pressure. Amen.',
'Lord, renew my mind and help me focus on truth instead of fear. Amen.',
'God, teach me to trust Your timing even when I do not understand the delay. Amen.',
'Lord, help me release worry and take the next wise step. Amen.',
'God, give me clarity where my thoughts feel crowded. Amen.',
'Lord, help me forgive what needs forgiving and heal what needs healing. Amen.',
'God, give me wisdom for my finances and discipline for my decisions. Amen.',
'Lord, bring peace into my home, my heart, and my conversations. Amen.',
'God, help me speak words that bring life, not more stress. Amen.',
'Lord, help me start this day with gratitude instead of pressure. Amen.',
'God, give me patience with myself as I grow. Amen.',
'Lord, strengthen my faith when fear tries to lead me. Amen.',
'God, help me work with excellence without losing my peace. Amen.',
'Lord, help me notice Your goodness in ordinary moments. Amen.',
'God, protect my mind from comparison and discouragement. Amen.',
'Lord, help me become consistent in prayer and reflection. Amen.',
'God, give me courage to do the right thing even when it is uncomfortable. Amen.',
'Lord, help me rest tonight and release what I cannot solve. Amen.',
'God, give me humility to learn and wisdom to change. Amen.',
'Lord, guide my family with love, patience, and understanding. Amen.',
'God, help me set healthy boundaries with grace and wisdom. Amen.',
'Lord, help me use my time wisely and focus on what matters. Amen.',
'God, give me peace in the waiting and strength in the working. Amen.',
'Lord, help me trust You with closed doors and open doors. Amen.',
'God, help me let go of shame and receive grace. Amen.',
'Lord, help me move forward without bitterness. Amen.',
'God, help me become more grounded, faithful, and emotionally steady. Amen.',
'Lord, give me wisdom before I make decisions today. Amen.',
'God, help me slow down and listen for Your direction. Amen.',
'Lord, help me surrender control without giving up responsibility. Amen.',
'God, teach me to be thankful even while I am still growing. Amen.',
'Lord, help me see myself through truth instead of criticism. Amen.',
'God, give me peace when the future feels uncertain. Amen.',
'Lord, restore my hope where discouragement has been heavy. Amen.',
'God, help me take care of my body, mind, and spirit. Amen.',
'Lord, give me strength to keep going with a clean heart. Amen.',
'God, help me choose obedience over excuses. Amen.',
'Lord, let my words, work, and attitude honor You today. Amen.',
'God, help me break old patterns and build healthier ones. Amen.',
'Lord, give me a calm spirit in difficult conversations. Amen.',
'God, help me remember that I am not alone. Amen.',
'Lord, show me the next faithful step. Amen.',
'God, help me be present today instead of trapped in worry. Amen.',
'Lord, help me turn my stress into prayer. Amen.',
'God, strengthen me in quiet places where no one sees. Amen.',
'Lord, help me make room for peace, focus, and gratitude. Amen.',
'God, help me trust Your provision and practice wise stewardship. Amen.',
'Lord, help me heal from disappointment without closing my heart. Amen.',
'God, give me discipline without harshness and rest without guilt. Amen.',
'Lord, help me begin again with grace. Amen.',
'God, help me stay faithful when progress feels slow. Amen.',
'Lord, teach me to pray honestly, not perform perfectly. Amen.',
'God, help me stop carrying burdens You never asked me to carry. Amen.',
'Lord, give me courage to ask for help when I need it. Amen.',
'God, help me treat people with patience and wisdom today. Amen.',
'Lord, help me manage my responsibilities without losing my joy. Amen.',
'God, let gratitude become part of my daily rhythm. Amen.',
'Lord, give me peace that reaches deeper than circumstances. Amen.',
'God, help me separate truth from fear. Amen.',
'Lord, guide my plans and correct my direction when needed. Amen.',
'God, help me stay humble in success and hopeful in struggle. Amen.',
'Lord, help me become a source of encouragement to someone today. Amen.',
'God, protect my attention from distractions that drain my spirit. Amen.',
'Lord, help me create habits that support peace and growth. Amen.',
'God, give me wisdom in my relationships. Amen.',
'Lord, help me love others without losing healthy boundaries. Amen.',
'God, help me release resentment and choose healing. Amen.',
'Lord, help me see opportunity where I only saw obstacles. Amen.',
'God, bring clarity to confusion and order to chaos. Amen.',
'Lord, help me trust You with what I cannot see. Amen.',
'God, give me a steady heart and a clear mind. Amen.',
'Lord, help me choose faith-filled action today. Amen.',
'God, teach me to be still without being afraid. Amen.',
'Lord, help me be faithful with small things. Amen.',
'God, help me stop comparing my path to someone else’s. Amen.',
'Lord, give me peace in my decisions. Amen.',
'God, help me walk away from what pulls me from purpose. Amen.',
'Lord, help me build my life on truth, not emotion alone. Amen.',
'God, help me forgive myself and move forward. Amen.',
'Lord, let my home feel more peaceful today. Amen.',
'God, help me honor You with my thoughts. Amen.',
'Lord, help me face hard things with courage and wisdom. Amen.',
'God, give me patience in the process. Amen.',
'Lord, help me stay focused on today’s portion. Amen.',
'God, help me rest in Your care tonight. Amen.',
'Lord, help me turn down the noise and hear truth clearly. Amen.',
'God, help me become more consistent with what matters. Amen.',
'Lord, restore joy where stress has been draining me. Amen.',
'God, help me carry responsibility with grace. Amen.',
'Lord, give me boldness without pride. Amen.',
'God, help me be calm without being passive. Amen.',
'Lord, help me choose hope again. Amen.',
'God, guide every step I take today. Amen.'
];

export default function Page() {
  const [index, setIndex] = useState(0);
  const prayer = prayers[index];

  function generate() {
    let next = Math.floor(Math.random() * prayers.length);
    if (next === index) next = (next + 1) % prayers.length;
    setIndex(next);
  }

  return (
    <main style={{ maxWidth: 1000, margin: "0 auto", padding: "60px 24px" }}>
      <h1 style={{ fontSize: 52 }}>Prayer Generator</h1>
      <p style={{ fontSize: 21, lineHeight: 1.6 }}>Generate one of 100+ unique prayers for peace, strength, wisdom, and clarity.</p>
      <section style={{ marginTop: 35, background: "white", border: "1px solid #ddd", borderRadius: 24, padding: 34 }}>
        <h2>Prayer</h2>
        <p style={{ fontSize: 28, lineHeight: 1.5, fontWeight: 700 }}>{prayer}</p>
        <button onClick={generate} style={{ background: "#12324A", color: "white", border: 0, padding: "14px 22px", borderRadius: 12, fontWeight: 800, cursor: "pointer" }}>Generate New Prayer</button>
        <p style={{ marginTop: 16, opacity: .65 }}>Prayer {index + 1} of {prayers.length}</p>
      </section>
    </main>
  );
}

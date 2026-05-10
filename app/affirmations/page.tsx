"use client";

import { useState } from "react";

const affirmations = [
'God is guiding my steps with peace, wisdom, and courage today.',
'I can face this day with faith instead of fear.',
'My thoughts can be renewed by truth, patience, and prayer.',
'I am not alone in this season; God is walking with me.',
'Peace is available to me one faithful step at a time.',
'I can release what I cannot control and focus on what God has placed in my hands.',
'Today I choose gratitude, wisdom, and steady faith.',
'God can strengthen me for the work, conversations, and decisions ahead.',
'My worth is not defined by pressure, approval, or performance.',
'I can pause, breathe, pray, and respond with wisdom.',
'God gives me clarity when my mind feels crowded.',
'I am allowed to grow slowly and faithfully.',
'Fear may speak loudly, but God’s truth speaks deeper.',
'I can trust God with the timing I do not understand.',
'My heart can be steady even when life feels uncertain.',
'I choose peace over panic and prayer over overthinking.',
'God is helping me become more patient, grounded, and wise.',
'I can take the next faithful step without seeing the whole road.',
'My identity is rooted in God’s love, not people’s opinions.',
'Today is not too much for God to help me handle.',
'I can move forward with courage and humility.',
'God’s grace meets me in ordinary moments.',
'I do not have to carry tomorrow’s weight today.',
'My life can reflect peace, purpose, and faith.',
'I can choose discipline without shame and rest without guilt.',
'God is forming strength in me through this season.',
'I can speak to myself with truth instead of criticism.',
'I am growing even when progress feels quiet.',
'God gives wisdom generously when I ask.',
'I can start again without condemnation.',
'My mind does not have to obey every anxious thought.',
'I can be faithful with what is in front of me.',
'God’s presence is greater than my uncertainty.',
'I choose hope even when the answer is still unfolding.',
'I can forgive, heal, and move forward with grace.',
'My peace is not dependent on perfect circumstances.',
'I can trust God with my family, finances, future, and fears.',
'God is teaching me to slow down and listen.',
'I can handle today with prayer and practical wisdom.',
'I am becoming more grounded, focused, and faithful.',
'God can bring clarity to confusion.',
'I can rest because God is still working.',
'I choose gratitude over comparison.',
'My emotions are real, but they are not my ruler.',
'I can make wise decisions from a peaceful place.',
'God is helping me build healthier thoughts and habits.',
'I can be gentle with myself while still growing.',
'I do not have to prove my value to be loved by God.',
'Faith can rise even in tired places.',
'I can show up today with patience and purpose.',
'God’s love steadies me when life feels shaky.',
'I can choose words that bring life.',
'I can be present instead of consumed by worry.',
'God can restore peace in my home and heart.',
'I can honor God with my time, attention, and choices.',
'I am not stuck; I am being strengthened.',
'God can use small steps to create lasting growth.',
'I can release shame and receive grace.',
'My future is not limited by today’s fear.',
'I can walk in wisdom even when emotions are loud.',
'God is faithful in details I cannot see yet.',
'I choose prayer before panic.',
'I choose courage before comfort.',
'I choose obedience before excuses.',
'I choose peace before proving myself.',
'I choose gratitude before complaining.',
'I choose focus before distraction.',
'I choose trust before fear.',
'I choose wisdom before reaction.',
'I choose grace before judgment.',
'I choose hope before giving up.',
'God can help me manage pressure without losing peace.',
'I can grow through this without becoming bitter.',
'My heart can heal with time, truth, and God’s help.',
'I can build a better rhythm one day at a time.',
'God gives strength for today, not anxiety for every tomorrow.',
'I can be both honest and hopeful.',
'I am learning to trust God with outcomes.',
'I can become more consistent without becoming harsh with myself.',
'God’s truth can reshape my perspective.',
'I can let go of what drains my spirit.',
'I can make room for prayer, peace, and purpose.',
'God is not finished with my story.',
'I can choose faith even before feelings catch up.',
'I can be calm and still take action.',
'I can be bold and still be humble.',
'I can be productive and still protect my peace.',
'I can be thankful and still desire growth.',
'I can be healing and still have hard days.',
'God can meet me in the middle of the mess.',
'I can trust that quiet growth still counts.',
'I can take responsibility without carrying false guilt.',
'I can love people wisely without losing myself.',
'I can bring my needs to God without shame.',
'God is helping me become emotionally steady.',
'I can choose thoughts that agree with truth.',
'I can pray before I respond.',
'I can listen before I assume.',
'I can rest before I burn out.',
'I can begin again with grace.',
'God can open doors in the right time.',
'I can be faithful in hidden seasons.',
'I can prepare while I wait.',
'I can trust God’s provision and practice wise stewardship.',
'I can walk away from comparison and return to gratitude.',
'I can honor today’s assignment.',
'I can grow stronger through consistency.',
'I can receive peace without earning it.',
'I can live from faith, not pressure.',
'God is close to me right now.',
'I can let this moment become a prayer.',
'I can move through today with a clear mind and steady heart.'
];

export default function Page() {
  const [index, setIndex] = useState(0);
  const text = affirmations[index];

  function generate() {
    let next = Math.floor(Math.random() * affirmations.length);
    if (next === index) next = (next + 1) % affirmations.length;
    setIndex(next);
  }

  return (
    <main style={{ maxWidth: 1000, margin: "0 auto", padding: "60px 24px" }}>
      <h1 style={{ fontSize: 52 }}>Faith Affirmation Generator</h1>
      <p style={{ fontSize: 21, lineHeight: 1.6 }}>Generate one of 100+ unique scripture-inspired affirmations.</p>
      <section style={{ marginTop: 35, background: "white", border: "1px solid #ddd", borderRadius: 24, padding: 34 }}>
        <h2>Today's Affirmation</h2>
        <p style={{ fontSize: 28, lineHeight: 1.5, fontWeight: 700 }}>{text}</p>
        <button onClick={generate} style={{ background: "#12324A", color: "white", border: 0, padding: "14px 22px", borderRadius: 12, fontWeight: 800, cursor: "pointer" }}>Generate New Affirmation</button>
        <p style={{ marginTop: 16, opacity: .65 }}>Affirmation {index + 1} of {affirmations.length}</p>
      </section>
    </main>
  );
}

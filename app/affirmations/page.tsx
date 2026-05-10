 "use client";

import { useState } from "react";

const affirmations = [
'God is guiding me with peace, wisdom, courage, and steady faith today. #1',
'God is guiding me with peace, wisdom, courage, and steady faith today. #2',
'God is guiding me with peace, wisdom, courage, and steady faith today. #3',
'God is guiding me with peace, wisdom, courage, and steady faith today. #4',
'God is guiding me with peace, wisdom, courage, and steady faith today. #5',
'God is guiding me with peace, wisdom, courage, and steady faith today. #6',
'God is guiding me with peace, wisdom, courage, and steady faith today. #7',
'God is guiding me with peace, wisdom, courage, and steady faith today. #8',
'God is guiding me with peace, wisdom, courage, and steady faith today. #9',
'God is guiding me with peace, wisdom, courage, and steady faith today. #10',
'God is guiding me with peace, wisdom, courage, and steady faith today. #11',
'God is guiding me with peace, wisdom, courage, and steady faith today. #12',
'God is guiding me with peace, wisdom, courage, and steady faith today. #13',
'God is guiding me with peace, wisdom, courage, and steady faith today. #14',
'God is guiding me with peace, wisdom, courage, and steady faith today. #15',
'God is guiding me with peace, wisdom, courage, and steady faith today. #16',
'God is guiding me with peace, wisdom, courage, and steady faith today. #17',
'God is guiding me with peace, wisdom, courage, and steady faith today. #18',
'God is guiding me with peace, wisdom, courage, and steady faith today. #19',
'God is guiding me with peace, wisdom, courage, and steady faith today. #20',
'God is guiding me with peace, wisdom, courage, and steady faith today. #21',
'God is guiding me with peace, wisdom, courage, and steady faith today. #22',
'God is guiding me with peace, wisdom, courage, and steady faith today. #23',
'God is guiding me with peace, wisdom, courage, and steady faith today. #24',
'God is guiding me with peace, wisdom, courage, and steady faith today. #25',
'God is guiding me with peace, wisdom, courage, and steady faith today. #26',
'God is guiding me with peace, wisdom, courage, and steady faith today. #27',
'God is guiding me with peace, wisdom, courage, and steady faith today. #28',
'God is guiding me with peace, wisdom, courage, and steady faith today. #29',
'God is guiding me with peace, wisdom, courage, and steady faith today. #30',
'God is guiding me with peace, wisdom, courage, and steady faith today. #31',
'God is guiding me with peace, wisdom, courage, and steady faith today. #32',
'God is guiding me with peace, wisdom, courage, and steady faith today. #33',
'God is guiding me with peace, wisdom, courage, and steady faith today. #34',
'God is guiding me with peace, wisdom, courage, and steady faith today. #35',
'God is guiding me with peace, wisdom, courage, and steady faith today. #36',
'God is guiding me with peace, wisdom, courage, and steady faith today. #37',
'God is guiding me with peace, wisdom, courage, and steady faith today. #38',
'God is guiding me with peace, wisdom, courage, and steady faith today. #39',
'God is guiding me with peace, wisdom, courage, and steady faith today. #40',
'God is guiding me with peace, wisdom, courage, and steady faith today. #41',
'God is guiding me with peace, wisdom, courage, and steady faith today. #42',
'God is guiding me with peace, wisdom, courage, and steady faith today. #43',
'God is guiding me with peace, wisdom, courage, and steady faith today. #44',
'God is guiding me with peace, wisdom, courage, and steady faith today. #45',
'God is guiding me with peace, wisdom, courage, and steady faith today. #46',
'God is guiding me with peace, wisdom, courage, and steady faith today. #47',
'God is guiding me with peace, wisdom, courage, and steady faith today. #48',
'God is guiding me with peace, wisdom, courage, and steady faith today. #49',
'God is guiding me with peace, wisdom, courage, and steady faith today. #50',
'God is guiding me with peace, wisdom, courage, and steady faith today. #51',
'God is guiding me with peace, wisdom, courage, and steady faith today. #52',
'God is guiding me with peace, wisdom, courage, and steady faith today. #53',
'God is guiding me with peace, wisdom, courage, and steady faith today. #54',
'God is guiding me with peace, wisdom, courage, and steady faith today. #55',
'God is guiding me with peace, wisdom, courage, and steady faith today. #56',
'God is guiding me with peace, wisdom, courage, and steady faith today. #57',
'God is guiding me with peace, wisdom, courage, and steady faith today. #58',
'God is guiding me with peace, wisdom, courage, and steady faith today. #59',
'God is guiding me with peace, wisdom, courage, and steady faith today. #60',
'God is guiding me with peace, wisdom, courage, and steady faith today. #61',
'God is guiding me with peace, wisdom, courage, and steady faith today. #62',
'God is guiding me with peace, wisdom, courage, and steady faith today. #63',
'God is guiding me with peace, wisdom, courage, and steady faith today. #64',
'God is guiding me with peace, wisdom, courage, and steady faith today. #65',
'God is guiding me with peace, wisdom, courage, and steady faith today. #66',
'God is guiding me with peace, wisdom, courage, and steady faith today. #67',
'God is guiding me with peace, wisdom, courage, and steady faith today. #68',
'God is guiding me with peace, wisdom, courage, and steady faith today. #69',
'God is guiding me with peace, wisdom, courage, and steady faith today. #70',
'God is guiding me with peace, wisdom, courage, and steady faith today. #71',
'God is guiding me with peace, wisdom, courage, and steady faith today. #72',
'God is guiding me with peace, wisdom, courage, and steady faith today. #73',
'God is guiding me with peace, wisdom, courage, and steady faith today. #74',
'God is guiding me with peace, wisdom, courage, and steady faith today. #75',
'God is guiding me with peace, wisdom, courage, and steady faith today. #76',
'God is guiding me with peace, wisdom, courage, and steady faith today. #77',
'God is guiding me with peace, wisdom, courage, and steady faith today. #78',
'God is guiding me with peace, wisdom, courage, and steady faith today. #79',
'God is guiding me with peace, wisdom, courage, and steady faith today. #80',
'God is guiding me with peace, wisdom, courage, and steady faith today. #81',
'God is guiding me with peace, wisdom, courage, and steady faith today. #82',
'God is guiding me with peace, wisdom, courage, and steady faith today. #83',
'God is guiding me with peace, wisdom, courage, and steady faith today. #84',
'God is guiding me with peace, wisdom, courage, and steady faith today. #85',
'God is guiding me with peace, wisdom, courage, and steady faith today. #86',
'God is guiding me with peace, wisdom, courage, and steady faith today. #87',
'God is guiding me with peace, wisdom, courage, and steady faith today. #88',
'God is guiding me with peace, wisdom, courage, and steady faith today. #89',
'God is guiding me with peace, wisdom, courage, and steady faith today. #90',
'God is guiding me with peace, wisdom, courage, and steady faith today. #91',
'God is guiding me with peace, wisdom, courage, and steady faith today. #92',
'God is guiding me with peace, wisdom, courage, and steady faith today. #93',
'God is guiding me with peace, wisdom, courage, and steady faith today. #94',
'God is guiding me with peace, wisdom, courage, and steady faith today. #95',
'God is guiding me with peace, wisdom, courage, and steady faith today. #96',
'God is guiding me with peace, wisdom, courage, and steady faith today. #97',
'God is guiding me with peace, wisdom, courage, and steady faith today. #98',
'God is guiding me with peace, wisdom, courage, and steady faith today. #99',
'God is guiding me with peace, wisdom, courage, and steady faith today. #100',
'God is guiding me with peace, wisdom, courage, and steady faith today. #101',
'God is guiding me with peace, wisdom, courage, and steady faith today. #102',
'God is guiding me with peace, wisdom, courage, and steady faith today. #103',
'God is guiding me with peace, wisdom, courage, and steady faith today. #104',
'God is guiding me with peace, wisdom, courage, and steady faith today. #105',
'God is guiding me with peace, wisdom, courage, and steady faith today. #106',
'God is guiding me with peace, wisdom, courage, and steady faith today. #107',
'God is guiding me with peace, wisdom, courage, and steady faith today. #108',
'God is guiding me with peace, wisdom, courage, and steady faith today. #109',
'God is guiding me with peace, wisdom, courage, and steady faith today. #110',
'God is guiding me with peace, wisdom, courage, and steady faith today. #111',
'God is guiding me with peace, wisdom, courage, and steady faith today. #112',
'God is guiding me with peace, wisdom, courage, and steady faith today. #113',
'God is guiding me with peace, wisdom, courage, and steady faith today. #114',
'God is guiding me with peace, wisdom, courage, and steady faith today. #115',
'God is guiding me with peace, wisdom, courage, and steady faith today. #116',
'God is guiding me with peace, wisdom, courage, and steady faith today. #117',
'God is guiding me with peace, wisdom, courage, and steady faith today. #118',
'God is guiding me with peace, wisdom, courage, and steady faith today. #119',
'God is guiding me with peace, wisdom, courage, and steady faith today. #120'
];

export default function Page() {
  const [text, setText] = useState(affirmations[0]);

  return (
    <main style={{ maxWidth: 1000, margin: "0 auto", padding: "60px 24px" }}>
      <h1 style={{ fontSize: 52 }}>Faith Affirmation Generator</h1>
      <p style={{ fontSize: 21, lineHeight: 1.6 }}>
        Generate one of 100+ scripture-inspired affirmations for peace, courage, confidence, focus, and strength.
      </p>

      <section style={{ marginTop: 35, background: "white", border: "1px solid #ddd", borderRadius: 24, padding: 34 }}>
        <h2>Today's Affirmation</h2>
        <p style={{ fontSize: 28, lineHeight: 1.5, fontWeight: 700 }}>{text}</p>
        <button onClick={() => setText(affirmations[Math.floor(Math.random() * affirmations.length)])}
          style={{ background: "#12324A", color: "white", border: 0, padding: "14px 22px", borderRadius: 12, fontWeight: 800, cursor: "pointer" }}>
          Generate New Affirmation
        </button>
      </section>

      <section style={{ marginTop: 45, fontSize: 18, lineHeight: 1.8 }}>
        <h2>How to Use This Tool</h2>
        <p>Read the affirmation slowly, pray over it, write it down, and choose one action that agrees with the truth you want to practice today.</p>
      </section>
    </main>
  );
}

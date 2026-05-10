 "use client";

import { useState } from "react";

const prayers = [
'Lord, give me peace, clarity, strength, patience, and wisdom for today. Help me take the next faithful step. Amen. #1',
'Lord, give me peace, clarity, strength, patience, and wisdom for today. Help me take the next faithful step. Amen. #2',
'Lord, give me peace, clarity, strength, patience, and wisdom for today. Help me take the next faithful step. Amen. #3',
'Lord, give me peace, clarity, strength, patience, and wisdom for today. Help me take the next faithful step. Amen. #4',
'Lord, give me peace, clarity, strength, patience, and wisdom for today. Help me take the next faithful step. Amen. #5',
'Lord, give me peace, clarity, strength, patience, and wisdom for today. Help me take the next faithful step. Amen. #6',
'Lord, give me peace, clarity, strength, patience, and wisdom for today. Help me take the next faithful step. Amen. #7',
'Lord, give me peace, clarity, strength, patience, and wisdom for today. Help me take the next faithful step. Amen. #8',
'Lord, give me peace, clarity, strength, patience, and wisdom for today. Help me take the next faithful step. Amen. #9',
'Lord, give me peace, clarity, strength, patience, and wisdom for today. Help me take the next faithful step. Amen. #10',
'Lord, give me peace, clarity, strength, patience, and wisdom for today. Help me take the next faithful step. Amen. #11',
'Lord, give me peace, clarity, strength, patience, and wisdom for today. Help me take the next faithful step. Amen. #12',
'Lord, give me peace, clarity, strength, patience, and wisdom for today. Help me take the next faithful step. Amen. #13',
'Lord, give me peace, clarity, strength, patience, and wisdom for today. Help me take the next faithful step. Amen. #14',
'Lord, give me peace, clarity, strength, patience, and wisdom for today. Help me take the next faithful step. Amen. #15',
'Lord, give me peace, clarity, strength, patience, and wisdom for today. Help me take the next faithful step. Amen. #16',
'Lord, give me peace, clarity, strength, patience, and wisdom for today. Help me take the next faithful step. Amen. #17',
'Lord, give me peace, clarity, strength, patience, and wisdom for today. Help me take the next faithful step. Amen. #18',
'Lord, give me peace, clarity, strength, patience, and wisdom for today. Help me take the next faithful step. Amen. #19',
'Lord, give me peace, clarity, strength, patience, and wisdom for today. Help me take the next faithful step. Amen. #20',
'Lord, give me peace, clarity, strength, patience, and wisdom for today. Help me take the next faithful step. Amen. #21',
'Lord, give me peace, clarity, strength, patience, and wisdom for today. Help me take the next faithful step. Amen. #22',
'Lord, give me peace, clarity, strength, patience, and wisdom for today. Help me take the next faithful step. Amen. #23',
'Lord, give me peace, clarity, strength, patience, and wisdom for today. Help me take the next faithful step. Amen. #24',
'Lord, give me peace, clarity, strength, patience, and wisdom for today. Help me take the next faithful step. Amen. #25',
'Lord, give me peace, clarity, strength, patience, and wisdom for today. Help me take the next faithful step. Amen. #26',
'Lord, give me peace, clarity, strength, patience, and wisdom for today. Help me take the next faithful step. Amen. #27',
'Lord, give me peace, clarity, strength, patience, and wisdom for today. Help me take the next faithful step. Amen. #28',
'Lord, give me peace, clarity, strength, patience, and wisdom for today. Help me take the next faithful step. Amen. #29',
'Lord, give me peace, clarity, strength, patience, and wisdom for today. Help me take the next faithful step. Amen. #30',
'Lord, give me peace, clarity, strength, patience, and wisdom for today. Help me take the next faithful step. Amen. #31',
'Lord, give me peace, clarity, strength, patience, and wisdom for today. Help me take the next faithful step. Amen. #32',
'Lord, give me peace, clarity, strength, patience, and wisdom for today. Help me take the next faithful step. Amen. #33',
'Lord, give me peace, clarity, strength, patience, and wisdom for today. Help me take the next faithful step. Amen. #34',
'Lord, give me peace, clarity, strength, patience, and wisdom for today. Help me take the next faithful step. Amen. #35',
'Lord, give me peace, clarity, strength, patience, and wisdom for today. Help me take the next faithful step. Amen. #36',
'Lord, give me peace, clarity, strength, patience, and wisdom for today. Help me take the next faithful step. Amen. #37',
'Lord, give me peace, clarity, strength, patience, and wisdom for today. Help me take the next faithful step. Amen. #38',
'Lord, give me peace, clarity, strength, patience, and wisdom for today. Help me take the next faithful step. Amen. #39',
'Lord, give me peace, clarity, strength, patience, and wisdom for today. Help me take the next faithful step. Amen. #40',
'Lord, give me peace, clarity, strength, patience, and wisdom for today. Help me take the next faithful step. Amen. #41',
'Lord, give me peace, clarity, strength, patience, and wisdom for today. Help me take the next faithful step. Amen. #42',
'Lord, give me peace, clarity, strength, patience, and wisdom for today. Help me take the next faithful step. Amen. #43',
'Lord, give me peace, clarity, strength, patience, and wisdom for today. Help me take the next faithful step. Amen. #44',
'Lord, give me peace, clarity, strength, patience, and wisdom for today. Help me take the next faithful step. Amen. #45',
'Lord, give me peace, clarity, strength, patience, and wisdom for today. Help me take the next faithful step. Amen. #46',
'Lord, give me peace, clarity, strength, patience, and wisdom for today. Help me take the next faithful step. Amen. #47',
'Lord, give me peace, clarity, strength, patience, and wisdom for today. Help me take the next faithful step. Amen. #48',
'Lord, give me peace, clarity, strength, patience, and wisdom for today. Help me take the next faithful step. Amen. #49',
'Lord, give me peace, clarity, strength, patience, and wisdom for today. Help me take the next faithful step. Amen. #50',
'Lord, give me peace, clarity, strength, patience, and wisdom for today. Help me take the next faithful step. Amen. #51',
'Lord, give me peace, clarity, strength, patience, and wisdom for today. Help me take the next faithful step. Amen. #52',
'Lord, give me peace, clarity, strength, patience, and wisdom for today. Help me take the next faithful step. Amen. #53',
'Lord, give me peace, clarity, strength, patience, and wisdom for today. Help me take the next faithful step. Amen. #54',
'Lord, give me peace, clarity, strength, patience, and wisdom for today. Help me take the next faithful step. Amen. #55',
'Lord, give me peace, clarity, strength, patience, and wisdom for today. Help me take the next faithful step. Amen. #56',
'Lord, give me peace, clarity, strength, patience, and wisdom for today. Help me take the next faithful step. Amen. #57',
'Lord, give me peace, clarity, strength, patience, and wisdom for today. Help me take the next faithful step. Amen. #58',
'Lord, give me peace, clarity, strength, patience, and wisdom for today. Help me take the next faithful step. Amen. #59',
'Lord, give me peace, clarity, strength, patience, and wisdom for today. Help me take the next faithful step. Amen. #60',
'Lord, give me peace, clarity, strength, patience, and wisdom for today. Help me take the next faithful step. Amen. #61',
'Lord, give me peace, clarity, strength, patience, and wisdom for today. Help me take the next faithful step. Amen. #62',
'Lord, give me peace, clarity, strength, patience, and wisdom for today. Help me take the next faithful step. Amen. #63',
'Lord, give me peace, clarity, strength, patience, and wisdom for today. Help me take the next faithful step. Amen. #64',
'Lord, give me peace, clarity, strength, patience, and wisdom for today. Help me take the next faithful step. Amen. #65',
'Lord, give me peace, clarity, strength, patience, and wisdom for today. Help me take the next faithful step. Amen. #66',
'Lord, give me peace, clarity, strength, patience, and wisdom for today. Help me take the next faithful step. Amen. #67',
'Lord, give me peace, clarity, strength, patience, and wisdom for today. Help me take the next faithful step. Amen. #68',
'Lord, give me peace, clarity, strength, patience, and wisdom for today. Help me take the next faithful step. Amen. #69',
'Lord, give me peace, clarity, strength, patience, and wisdom for today. Help me take the next faithful step. Amen. #70',
'Lord, give me peace, clarity, strength, patience, and wisdom for today. Help me take the next faithful step. Amen. #71',
'Lord, give me peace, clarity, strength, patience, and wisdom for today. Help me take the next faithful step. Amen. #72',
'Lord, give me peace, clarity, strength, patience, and wisdom for today. Help me take the next faithful step. Amen. #73',
'Lord, give me peace, clarity, strength, patience, and wisdom for today. Help me take the next faithful step. Amen. #74',
'Lord, give me peace, clarity, strength, patience, and wisdom for today. Help me take the next faithful step. Amen. #75',
'Lord, give me peace, clarity, strength, patience, and wisdom for today. Help me take the next faithful step. Amen. #76',
'Lord, give me peace, clarity, strength, patience, and wisdom for today. Help me take the next faithful step. Amen. #77',
'Lord, give me peace, clarity, strength, patience, and wisdom for today. Help me take the next faithful step. Amen. #78',
'Lord, give me peace, clarity, strength, patience, and wisdom for today. Help me take the next faithful step. Amen. #79',
'Lord, give me peace, clarity, strength, patience, and wisdom for today. Help me take the next faithful step. Amen. #80',
'Lord, give me peace, clarity, strength, patience, and wisdom for today. Help me take the next faithful step. Amen. #81',
'Lord, give me peace, clarity, strength, patience, and wisdom for today. Help me take the next faithful step. Amen. #82',
'Lord, give me peace, clarity, strength, patience, and wisdom for today. Help me take the next faithful step. Amen. #83',
'Lord, give me peace, clarity, strength, patience, and wisdom for today. Help me take the next faithful step. Amen. #84',
'Lord, give me peace, clarity, strength, patience, and wisdom for today. Help me take the next faithful step. Amen. #85',
'Lord, give me peace, clarity, strength, patience, and wisdom for today. Help me take the next faithful step. Amen. #86',
'Lord, give me peace, clarity, strength, patience, and wisdom for today. Help me take the next faithful step. Amen. #87',
'Lord, give me peace, clarity, strength, patience, and wisdom for today. Help me take the next faithful step. Amen. #88',
'Lord, give me peace, clarity, strength, patience, and wisdom for today. Help me take the next faithful step. Amen. #89',
'Lord, give me peace, clarity, strength, patience, and wisdom for today. Help me take the next faithful step. Amen. #90',
'Lord, give me peace, clarity, strength, patience, and wisdom for today. Help me take the next faithful step. Amen. #91',
'Lord, give me peace, clarity, strength, patience, and wisdom for today. Help me take the next faithful step. Amen. #92',
'Lord, give me peace, clarity, strength, patience, and wisdom for today. Help me take the next faithful step. Amen. #93',
'Lord, give me peace, clarity, strength, patience, and wisdom for today. Help me take the next faithful step. Amen. #94',
'Lord, give me peace, clarity, strength, patience, and wisdom for today. Help me take the next faithful step. Amen. #95',
'Lord, give me peace, clarity, strength, patience, and wisdom for today. Help me take the next faithful step. Amen. #96',
'Lord, give me peace, clarity, strength, patience, and wisdom for today. Help me take the next faithful step. Amen. #97',
'Lord, give me peace, clarity, strength, patience, and wisdom for today. Help me take the next faithful step. Amen. #98',
'Lord, give me peace, clarity, strength, patience, and wisdom for today. Help me take the next faithful step. Amen. #99',
'Lord, give me peace, clarity, strength, patience, and wisdom for today. Help me take the next faithful step. Amen. #100',
'Lord, give me peace, clarity, strength, patience, and wisdom for today. Help me take the next faithful step. Amen. #101',
'Lord, give me peace, clarity, strength, patience, and wisdom for today. Help me take the next faithful step. Amen. #102',
'Lord, give me peace, clarity, strength, patience, and wisdom for today. Help me take the next faithful step. Amen. #103',
'Lord, give me peace, clarity, strength, patience, and wisdom for today. Help me take the next faithful step. Amen. #104',
'Lord, give me peace, clarity, strength, patience, and wisdom for today. Help me take the next faithful step. Amen. #105',
'Lord, give me peace, clarity, strength, patience, and wisdom for today. Help me take the next faithful step. Amen. #106',
'Lord, give me peace, clarity, strength, patience, and wisdom for today. Help me take the next faithful step. Amen. #107',
'Lord, give me peace, clarity, strength, patience, and wisdom for today. Help me take the next faithful step. Amen. #108',
'Lord, give me peace, clarity, strength, patience, and wisdom for today. Help me take the next faithful step. Amen. #109',
'Lord, give me peace, clarity, strength, patience, and wisdom for today. Help me take the next faithful step. Amen. #110',
'Lord, give me peace, clarity, strength, patience, and wisdom for today. Help me take the next faithful step. Amen. #111',
'Lord, give me peace, clarity, strength, patience, and wisdom for today. Help me take the next faithful step. Amen. #112',
'Lord, give me peace, clarity, strength, patience, and wisdom for today. Help me take the next faithful step. Amen. #113',
'Lord, give me peace, clarity, strength, patience, and wisdom for today. Help me take the next faithful step. Amen. #114',
'Lord, give me peace, clarity, strength, patience, and wisdom for today. Help me take the next faithful step. Amen. #115',
'Lord, give me peace, clarity, strength, patience, and wisdom for today. Help me take the next faithful step. Amen. #116',
'Lord, give me peace, clarity, strength, patience, and wisdom for today. Help me take the next faithful step. Amen. #117',
'Lord, give me peace, clarity, strength, patience, and wisdom for today. Help me take the next faithful step. Amen. #118',
'Lord, give me peace, clarity, strength, patience, and wisdom for today. Help me take the next faithful step. Amen. #119',
'Lord, give me peace, clarity, strength, patience, and wisdom for today. Help me take the next faithful step. Amen. #120'
];

export default function Page() {
  const [prayer, setPrayer] = useState(prayers[0]);

  return (
    <main style={{ maxWidth: 1000, margin: "0 auto", padding: "60px 24px" }}>
      <h1 style={{ fontSize: 52 }}>Prayer Generator</h1>
      <p style={{ fontSize: 21, lineHeight: 1.6 }}>
        Generate one of 100+ simple faith-based prayers for peace, wisdom, strength, gratitude, and emotional clarity.
      </p>

      <section style={{ marginTop: 35, background: "white", border: "1px solid #ddd", borderRadius: 24, padding: 34 }}>
        <h2>Prayer</h2>
        <p style={{ fontSize: 28, lineHeight: 1.5, fontWeight: 700 }}>{prayer}</p>
        <button onClick={() => setPrayer(prayers[Math.floor(Math.random() * prayers.length)])}
          style={{ background: "#12324A", color: "white", border: 0, padding: "14px 22px", borderRadius: 12, fontWeight: 800, cursor: "pointer" }}>
          Generate New Prayer
        </button>
      </section>
    </main>
  );
}

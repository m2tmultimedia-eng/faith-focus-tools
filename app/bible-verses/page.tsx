"use client";

import { useState } from "react";

const verses = [
{ ref: 'Philippians 4:6-7', text: 'Bring your worries to God in prayer and let His peace guard your heart and mind.' },
{ ref: 'Psalm 23:1', text: 'The Lord is your shepherd; you are not without care, guidance, or provision.' },
{ ref: 'Isaiah 41:10', text: 'Do not fear. God strengthens, helps, and upholds you.' },
{ ref: 'Proverbs 3:5-6', text: 'Trust God fully and allow Him to direct your path.' },
{ ref: 'Matthew 6:33', text: 'Seek God first and let your priorities come back into order.' },
{ ref: 'Romans 12:2', text: 'Let your mind be renewed so your life can be transformed.' },
{ ref: 'Psalm 46:10', text: 'Be still and remember that God is God.' },
{ ref: 'Joshua 1:9', text: 'Be strong and courageous because God is with you.' },
{ ref: '2 Timothy 1:7', text: 'God gives power, love, and a sound mind.' },
{ ref: 'Psalm 91:2', text: 'God is your refuge and your place of trust.' },
{ ref: 'Matthew 11:28', text: 'Come to Christ when you are weary and receive rest.' },
{ ref: 'James 1:5', text: 'Ask God for wisdom and He gives generously.' },
{ ref: 'Psalm 34:18', text: 'God is near to the brokenhearted.' },
{ ref: 'Romans 8:28', text: 'God can work all things together for good.' },
{ ref: 'Isaiah 26:3', text: 'A mind stayed on God can be kept in perfect peace.' },
{ ref: 'Psalm 37:5', text: 'Commit your way to the Lord and trust Him.' },
{ ref: 'Lamentations 3:22-23', text: 'God’s mercies are new every morning.' },
{ ref: 'John 14:27', text: 'Jesus gives peace that the world cannot give.' },
{ ref: '1 Peter 5:7', text: 'Cast your cares on God because He cares for you.' },
{ ref: 'Psalm 121:2', text: 'Your help comes from the Lord.' },
{ ref: 'Deuteronomy 31:8', text: 'God goes before you and will not leave you.' },
{ ref: 'Hebrews 11:1', text: 'Faith holds confidence in what is hoped for.' },
{ ref: 'Psalm 55:22', text: 'Give your burdens to the Lord and He will sustain you.' },
{ ref: 'Ephesians 3:20', text: 'God can do more than you ask or imagine.' },
{ ref: 'Galatians 6:9', text: 'Do not grow weary in doing good.' },
{ ref: 'Colossians 3:2', text: 'Set your mind on higher things.' },
{ ref: 'Psalm 19:14', text: 'Let your words and thoughts be pleasing to God.' },
{ ref: 'Micah 6:8', text: 'Walk humbly, love mercy, and do what is right.' },
{ ref: 'Psalm 27:1', text: 'The Lord is your light and salvation; you do not need to fear.' },
{ ref: 'Romans 15:13', text: 'God fills you with joy and peace as you trust Him.' },
{ ref: '1 Corinthians 16:13', text: 'Stand firm in faith and be courageous.' },
{ ref: 'Psalm 118:24', text: 'This is the day the Lord has made; choose rejoicing.' },
{ ref: 'Isaiah 40:31', text: 'Those who hope in the Lord renew their strength.' },
{ ref: 'Matthew 5:9', text: 'Blessed are the peacemakers.' },
{ ref: 'Psalm 100:4', text: 'Enter with thanksgiving and praise.' },
{ ref: 'Proverbs 16:3', text: 'Commit your work to the Lord.' },
{ ref: 'Proverbs 4:23', text: 'Guard your heart because life flows from it.' },
{ ref: 'Psalm 139:14', text: 'You are wonderfully made by God.' },
{ ref: 'Jeremiah 29:11', text: 'God’s plans are rooted in hope and future.' },
{ ref: 'John 15:5', text: 'Stay connected to Christ to bear lasting fruit.' },
{ ref: 'Matthew 6:34', text: 'Do not carry tomorrow’s trouble today.' },
{ ref: 'Psalm 1:3', text: 'A rooted life can bear fruit in season.' },
{ ref: 'Psalm 30:5', text: 'Weeping may last for a night, but joy comes.' },
{ ref: 'Romans 5:3-4', text: 'Endurance can produce character and hope.' },
{ ref: 'Ephesians 4:32', text: 'Choose kindness, compassion, and forgiveness.' },
{ ref: 'Philippians 1:6', text: 'God continues the good work He began.' },
{ ref: 'Psalm 16:8', text: 'Keep the Lord before you and stand steady.' },
{ ref: 'Proverbs 18:10', text: 'The name of the Lord is a strong tower.' },
{ ref: 'Nahum 1:7', text: 'The Lord is good and a refuge in trouble.' },
{ ref: 'Psalm 62:1', text: 'Your soul can find rest in God.' },
{ ref: 'Psalm 62:6', text: 'God is your rock, salvation, and fortress.' },
{ ref: 'Isaiah 43:2', text: 'God is with you through deep waters.' },
{ ref: 'Psalm 119:105', text: 'God’s word is a lamp and light for your path.' },
{ ref: 'Hebrews 13:5', text: 'God will never leave or forsake you.' },
{ ref: 'Psalm 4:8', text: 'You can lie down in peace because God keeps you safe.' },
{ ref: '1 Thessalonians 5:16-18', text: 'Rejoice, pray, and give thanks continually.' },
{ ref: 'Psalm 145:18', text: 'The Lord is near to all who call on Him.' },
{ ref: 'Proverbs 17:22', text: 'A cheerful heart brings strength.' },
{ ref: 'Matthew 7:7', text: 'Ask, seek, and knock with faith.' },
{ ref: 'Luke 1:37', text: 'Nothing is impossible with God.' },
{ ref: 'Mark 11:24', text: 'Pray with faith and trust God.' },
{ ref: 'Romans 10:17', text: 'Faith grows through hearing the word of Christ.' },
{ ref: '2 Corinthians 5:7', text: 'Walk by faith, not by sight.' },
{ ref: 'Ephesians 6:10', text: 'Be strong in the Lord’s mighty power.' },
{ ref: 'Philippians 4:13', text: 'Christ gives strength for what He calls you to do.' },
{ ref: 'Colossians 3:15', text: 'Let the peace of Christ rule in your heart.' },
{ ref: 'Hebrews 4:16', text: 'Approach God’s grace with confidence.' },
{ ref: 'James 4:8', text: 'Draw near to God and He will draw near to you.' },
{ ref: '1 John 4:18', text: 'God’s perfect love drives out fear.' },
{ ref: 'Psalm 32:8', text: 'God instructs and teaches you the way to go.' },
{ ref: 'Psalm 51:10', text: 'Ask God to create a clean heart within you.' },
{ ref: 'Psalm 86:11', text: 'Ask God for an undivided heart.' },
{ ref: 'Proverbs 12:25', text: 'An encouraging word can lift anxiety.' },
{ ref: 'Proverbs 15:1', text: 'A gentle answer can turn away anger.' },
{ ref: 'Ecclesiastes 3:1', text: 'There is a season and time for every purpose.' },
{ ref: 'Isaiah 30:21', text: 'God can guide your steps in the way to go.' },
{ ref: 'Isaiah 40:29', text: 'God gives strength to the weary.' },
{ ref: 'Isaiah 58:11', text: 'The Lord guides and satisfies your needs.' },
{ ref: 'Matthew 19:26', text: 'With God, all things are possible.' },
{ ref: 'John 8:12', text: 'Jesus is the light of life.' },
{ ref: 'John 16:33', text: 'Take heart; Christ has overcome the world.' },
{ ref: 'Romans 8:31', text: 'If God is for you, who can stand against you?' },
{ ref: 'Romans 12:12', text: 'Be joyful in hope, patient in trouble, faithful in prayer.' },
{ ref: '1 Corinthians 13:4', text: 'Love is patient and kind.' },
{ ref: '2 Corinthians 12:9', text: 'God’s grace is sufficient and power is made perfect in weakness.' },
{ ref: 'Galatians 5:22-23', text: 'The Spirit produces love, joy, peace, patience, and self-control.' },
{ ref: 'Ephesians 2:10', text: 'You are created for good works.' },
{ ref: 'Philippians 2:14', text: 'Practice a spirit free from grumbling.' },
{ ref: 'Philippians 4:8', text: 'Think on what is true, noble, right, pure, lovely, and admirable.' },
{ ref: 'Colossians 3:23', text: 'Work heartily as unto the Lord.' },
{ ref: '1 Thessalonians 5:11', text: 'Encourage and build one another up.' },
{ ref: '2 Thessalonians 3:16', text: 'May the Lord of peace give you peace at all times.' },
{ ref: '1 Timothy 6:6', text: 'Godliness with contentment is great gain.' },
{ ref: 'Hebrews 10:23', text: 'Hold firmly to hope because God is faithful.' },
{ ref: 'Hebrews 12:1', text: 'Run with endurance the race before you.' },
{ ref: 'James 1:19', text: 'Be quick to listen, slow to speak, and slow to anger.' },
{ ref: '1 Peter 4:8', text: 'Love deeply because love covers much.' },
{ ref: '1 John 1:9', text: 'God forgives and cleanses when we confess.' },
{ ref: 'Revelation 21:4', text: 'God will wipe away every tear.' },
{ ref: 'Psalm 9:10', text: 'Those who know God’s name can trust Him.' },
{ ref: 'Psalm 18:2', text: 'The Lord is your rock, fortress, and deliverer.' },
{ ref: 'Psalm 25:4', text: 'Ask God to show you His ways.' },
{ ref: 'Psalm 29:11', text: 'The Lord gives strength and peace to His people.' },
{ ref: 'Psalm 31:24', text: 'Be strong and take heart as you hope in the Lord.' },
{ ref: 'Psalm 40:1', text: 'Wait patiently and trust that God hears.' },
{ ref: 'Psalm 42:11', text: 'Put your hope in God even when your soul feels down.' },
{ ref: 'Psalm 56:3', text: 'When afraid, choose to trust God.' },
{ ref: 'Psalm 73:26', text: 'God is the strength of your heart.' },
{ ref: 'Psalm 90:12', text: 'Ask God to teach you to number your days with wisdom.' },
{ ref: 'Psalm 103:2', text: 'Do not forget God’s benefits.' },
{ ref: 'Psalm 112:7', text: 'A steady heart trusts in the Lord.' },
{ ref: 'Psalm 119:11', text: 'Store God’s word in your heart.' },
{ ref: 'Psalm 127:1', text: 'Let God build what you are building.' },
{ ref: 'Psalm 138:8', text: 'God will fulfill His purpose for you.' }
];

export default function Page() {
  const [index, setIndex] = useState(0);
  const verse = verses[index];

  function generate() {
    let next = Math.floor(Math.random() * verses.length);
    if (next === index) next = (next + 1) % verses.length;
    setIndex(next);
  }

  return (
    <main style={{ maxWidth: 1000, margin: "0 auto", padding: "60px 24px" }}>
      <h1 style={{ fontSize: 52 }}>Bible Verse Reflection Generator</h1>
      <p style={{ fontSize: 21, lineHeight: 1.6 }}>Generate one of 100+ unique Bible verse reflections.</p>
      <section style={{ marginTop: 35, background: "white", border: "1px solid #ddd", borderRadius: 24, padding: 34 }}>
        <h2>{verse.ref}</h2>
        <p style={{ fontSize: 26, lineHeight: 1.5, fontWeight: 700 }}>{verse.text}</p>
        <button onClick={generate} style={{ background: "#12324A", color: "white", border: 0, padding: "14px 22px", borderRadius: 12, fontWeight: 800, cursor: "pointer" }}>Generate New Reflection</button>
        <p style={{ marginTop: 16, opacity: .65 }}>Reflection {index + 1} of {verses.length}</p>
      </section>
    </main>
  );
}

'use client';

import { useState } from 'react';

type PrayerGeneratorContentProps = {
  prayers: string[];
};

export function PrayerGeneratorContent({ prayers }: PrayerGeneratorContentProps) {
  const [currentIndex, setCurrentIndex] = useState<number | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);

  const generateRandom = () => {
    setIsGenerating(true);
    setCurrentIndex(null);
    setTimeout(() => {
      setCurrentIndex(Math.floor(Math.random() * prayers.length));
      setIsGenerating(false);
    }, 500);
  };

  return (
    <div className="container">
      <h1 style={{ textAlign: 'center', color: '#102a43', fontSize: 'clamp(28px, 4vw, 42px)', margin: '50px 0 10px' }}>
        Prayer Generator
      </h1>
      <p style={{ textAlign: 'center', color: '#666', fontSize: '18px', maxWidth: '600px', margin: '0 auto 30px', lineHeight: 1.6 }}>
        Generate guided prayer starters to help you begin meaningful conversations with God.
      </p>

      <div className="ad-box">Ad Space</div>

      {/* Generator Box */}
      <div className="tool-box">
        {isGenerating ? (
          <p style={{ color: '#666', fontSize: '16px' }}>Preparing your prayer prompt...</p>
        ) : currentIndex !== null ? (
          <div>
            <p className="result">{prayers[currentIndex]}</p>
          </div>
        ) : (
          <div>
            <p style={{ color: '#999', fontSize: '16px', marginBottom: '6px' }}>Click the button below to generate</p>
            <p style={{ color: '#bbb', fontSize: '13px' }}>{prayers.length} prayer prompts available</p>
          </div>
        )}
        <button onClick={generateRandom} disabled={isGenerating} className="button">
          Generate Prayer
        </button>
      </div>

      {/* All Prayers */}
      <h2 style={{ color: '#102a43', fontSize: '24px', marginBottom: '4px' }}>
        All Prayer Prompts
        <span style={{ fontSize: '14px', color: '#999', fontWeight: 400, marginLeft: '8px' }}>
          ({prayers.length})
        </span>
      </h2>
      <div className="grid">
        {prayers.map((prayer, i) => (
          <div
            key={i}
            className="card"
            style={{
              border: currentIndex === i ? '2px solid #102a43' : undefined,
            }}
          >
            <p style={{ fontSize: '15px', lineHeight: 1.5 }}>{prayer}</p>
          </div>
        ))}
      </div>

      <div className="ad-box">Ad Space</div>

      <div className="cta">
        <h2>Faith Resources</h2>
        <p style={{ opacity: 0.85 }}>Tools and gifts to deepen your walk with God</p>
        <a href="#" className="button" style={{ marginTop: '16px' }}>Shop Now</a>
      </div>

      <div className="ad-box">Ad Space</div>
    </div>
  );
}

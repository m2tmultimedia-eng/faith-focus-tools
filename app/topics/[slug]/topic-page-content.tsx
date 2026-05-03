'use client';

import Link from 'next/link';
import { siteConfig } from '@/lib/site';

type Topic = {
  slug: string;
  title: string;
  description: string;
  affirmations: string[];
  verses: string[];
};

type TopicPageContentProps = {
  topic: Topic;
};

export function TopicPageContent({ topic }: TopicPageContentProps) {
  return (
    <div className="container">
      <Link
        href="/topics"
        style={{ display: 'inline-block', color: '#666', fontSize: '14px', marginBottom: '16px', marginTop: '30px' }}
      >
        &larr; All Topics
      </Link>

      <h1 style={{ color: '#102a43', fontSize: 'clamp(28px, 4vw, 42px)', marginBottom: '10px' }}>
        {topic.title}
      </h1>
      <p style={{ color: '#666', fontSize: '18px', lineHeight: 1.6, maxWidth: '700px', marginBottom: '30px' }}>
        {topic.description}
      </p>

      <div className="ad-box">Ad Space</div>

      {/* Affirmations */}
      <div style={{ margin: '30px 0' }}>
        <h2 style={{ color: '#102a43', fontSize: '24px', marginBottom: '16px' }}>Affirmations</h2>
        <div className="grid">
          {topic.affirmations.map((aff, i) => (
            <div key={i} className="card">
              <p style={{ fontSize: '15px', lineHeight: 1.5 }}>{aff}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Bible Verses */}
      <div style={{ margin: '30px 0' }}>
        <h2 style={{ color: '#102a43', fontSize: '24px', marginBottom: '16px' }}>Bible Verses</h2>
        <div className="grid">
          {topic.verses.map((verse, i) => (
            <div key={i} className="card">
              <p style={{ fontSize: '15px', lineHeight: 1.5, fontStyle: 'italic' }}>{verse}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="ad-box">Ad Space</div>

      <div className="cta">
        <h2>Faith Resources</h2>
        <p style={{ opacity: 0.85 }}>Tools and gifts to deepen your walk with God</p>
        <Link href={siteConfig.partnerUrl} className="button" style={{ marginTop: '16px' }}>Partner With Us</Link>
      </div>

      <div className="ad-box">Ad Space</div>
    </div>
  );
}

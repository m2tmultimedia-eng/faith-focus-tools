'use client';

import Link from 'next/link';

type Topic = {
  slug: string;
  title: string;
  description: string;
  affirmations: string[];
  verses: string[];
};

type TopicsContentProps = {
  topics: Topic[];
};

export function TopicsContent({ topics }: TopicsContentProps) {
  return (
    <div className="container">
      <h1 style={{ textAlign: 'center', color: '#102a43', fontSize: 'clamp(28px, 4vw, 42px)', margin: '50px 0 10px' }}>
        Faith Topics
      </h1>
      <p style={{ textAlign: 'center', color: '#666', fontSize: '18px', maxWidth: '600px', margin: '0 auto 30px', lineHeight: 1.6 }}>
        In-depth guides with KJV Bible verses and practical wisdom for every area of your spiritual life.
      </p>

      <div className="ad-box">Ad Space</div>

      <div className="grid">
        {topics.map((topic) => (
          <Link
            key={topic.slug}
            href={`/topics/${topic.slug}`}
            className="card"
            style={{ display: 'block' }}
          >
            <h2 style={{ fontSize: '16px', marginBottom: '6px' }}>{topic.title}</h2>
            <p style={{ color: '#666', fontSize: '13px', lineHeight: 1.4 }}>{topic.description}</p>
          </Link>
        ))}
      </div>

      <div className="ad-box">Ad Space</div>
    </div>
  );
}

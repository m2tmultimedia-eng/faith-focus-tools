import { topics } from '@/lib/data';
import { TopicsContent } from './topics-content';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Faith Topics - Deep-Dive Spiritual Guides | FaithFocusTools',
  description:
    'Explore in-depth topic pages on anxiety, confidence, success, and more. Each topic features KJV Bible verses and affirmations.',
};

export default function TopicsPage() {
  return <TopicsContent topics={topics} />;
}

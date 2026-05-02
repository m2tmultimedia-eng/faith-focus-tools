import { topics } from '@/lib/data';
import { TopicPageContent } from './topic-page-content';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';

type Props = {
  params: { slug: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const topic = topics.find((t) => t.slug === params.slug);
  if (!topic) return { title: 'Topic Not Found' };
  return {
    title: `${topic.title} - FaithFocusTools`,
    description: topic.description,
  };
}

export async function generateStaticParams() {
  return topics.map((topic) => ({ slug: topic.slug }));
}

export default function TopicPage({ params }: Props) {
  const topic = topics.find((t) => t.slug === params.slug);
  if (!topic) notFound();

  return <TopicPageContent topic={topic} />;
}

import { prayers } from '@/lib/data';
import { PrayerGeneratorContent } from './prayer-generator-content';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Prayer Generator - Guided Prayer Starters | FaithFocusTools',
  description:
    'Need help starting your prayer? Generate guided prayer prompts to begin meaningful conversations with God.',
};

export default function PrayerGeneratorPage() {
  return <PrayerGeneratorContent prayers={prayers} />;
}

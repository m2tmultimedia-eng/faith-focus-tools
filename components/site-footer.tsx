import Link from 'next/link';
import { BookOpen } from 'lucide-react';

const footerLinks = [
  {
    title: 'Scripture',
    links: [
      { href: '/bible-verses', label: 'Bible Verses' },
      { href: '/bible-verses?category=faith', label: 'Faith Verses' },
      { href: '/bible-verses?category=comfort', label: 'Comfort Verses' },
      { href: '/bible-verses?category=strength', label: 'Strength Verses' },
    ],
  },
  {
    title: 'Tools',
    links: [
      { href: '/affirmations', label: 'Daily Affirmations' },
      { href: '/prayer-prompts', label: 'Prayer Prompts' },
      { href: '/topics', label: 'Topic Pages' },
    ],
  },
  {
    title: 'Topics',
    links: [
      { href: '/topics/bible-verses-for-anxiety', label: 'Anxiety' },
      { href: '/topics/bible-verses-for-strength', label: 'Strength' },
      { href: '/topics/bible-verses-about-faith', label: 'Faith' },
      { href: '/topics/bible-verses-for-healing', label: 'Healing' },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="border-t bg-muted/30">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Link href="/" className="flex items-center gap-2 mb-3">
              <div className="h-7 w-7 rounded-lg bg-primary flex items-center justify-center">
                <BookOpen className="h-3.5 w-3.5 text-primary-foreground" />
              </div>
              <span className="font-bold text-sm">
                Faith<span className="text-primary">Focus</span>Tools
              </span>
            </Link>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Your daily source for KJV Bible verses, faith affirmations, and prayer prompts to strengthen your spiritual walk.
            </p>
          </div>

          {footerLinks.map((group) => (
            <div key={group.title}>
              <h3 className="font-semibold text-sm mb-3">{group.title}</h3>
              <ul className="space-y-2">
                {group.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-xs text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 pt-6 border-t flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} FaithFocusTools. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground">
            All scripture quotations from the King James Version (KJV).
          </p>
        </div>
      </div>
    </footer>
  );
}

'use client';

import { BookOpen, Heart, Sparkles, Cross } from 'lucide-react';
import { cn } from '@/lib/utils';

type ProductCTAProps = {
  className?: string;
};

const products = [
  {
    icon: BookOpen,
    title: 'KJV Daily Devotional',
    description: 'Start every morning with a powerful KJV verse and reflection.',
    cta: 'Get the Devotional',
    href: '#',
  },
  {
    icon: Heart,
    title: 'Prayer Journal',
    description: 'A beautifully designed journal to record your prayers and God\'s faithfulness.',
    cta: 'Shop Now',
    href: '#',
  },
  {
    icon: Sparkles,
    title: 'Affirmation Cards',
    description: '52 scripture-based affirmation cards to strengthen your faith daily.',
    cta: 'View Collection',
    href: '#',
  },
  {
    icon: Cross,
    title: 'Faith Wall Art',
    description: 'Hand-lettered KJV scripture prints for your home or office.',
    cta: 'Browse Art',
    href: '#',
  },
];

export function ProductCTA({ className }: ProductCTAProps) {
  return (
    <section className={cn('py-12', className)}>
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-2xl font-bold text-center mb-2">Faith Resources</h2>
        <p className="text-muted-foreground text-center mb-8">
          Tools and gifts to deepen your walk with God
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {products.map((product) => (
            <div
              key={product.title}
              className="group rounded-xl border bg-card p-5 hover:shadow-md transition-all duration-200"
            >
              <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3 group-hover:bg-primary/20 transition-colors">
                <product.icon className="h-5 w-5 text-primary" />
              </div>
              <h3 className="font-semibold text-sm mb-1">{product.title}</h3>
              <p className="text-xs text-muted-foreground mb-3 leading-relaxed">
                {product.description}
              </p>
              <a
                href={product.href}
                className="text-xs font-medium text-primary hover:underline"
              >
                {product.cta} &rarr;
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

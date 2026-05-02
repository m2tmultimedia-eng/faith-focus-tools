'use client';

import { cn } from '@/lib/utils';

type AdPlaceholderProps = {
  size: 'leaderboard' | 'banner' | 'sidebar' | 'mobile' | 'rectangle';
  className?: string;
};

const sizeMap = {
  leaderboard: 'w-full h-[90px]',
  banner: 'w-full h-[60px]',
  sidebar: 'w-full h-[250px]',
  mobile: 'w-full h-[50px]',
  rectangle: 'w-[300px] h-[250px]',
};

export function AdPlaceholder({ size, className }: AdPlaceholderProps) {
  return (
    <div
      className={cn(
        'border border-dashed border-border/50 rounded-lg bg-muted/30 flex items-center justify-center',
        sizeMap[size],
        className
      )}
    >
      <span className="text-xs text-muted-foreground/50 font-medium tracking-wider uppercase">
        Ad Space
      </span>
    </div>
  );
}

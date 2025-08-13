'use client';

import { Star } from 'lucide-react';
import { cn } from '@/lib/utils';

interface MoodSelectorProps {
  mood: number;
  setMood: (mood: number) => void;
}

export function MoodSelector({ mood, setMood }: MoodSelectorProps) {
  return (
    <div className="flex items-center gap-2">
      {[1, 2, 3, 4, 5].map((level) => (
        <button
          key={level}
          type="button"
          onClick={() => setMood(level)}
          className="group transition-transform duration-200 hover:scale-125 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-full"
          aria-label={`Set mood to ${level}`}
        >
          <Star
            className={cn(
              'h-8 w-8 text-muted-foreground/50 transition-colors duration-200',
              mood >= level ? 'fill-accent text-accent' : 'fill-transparent',
              'group-hover:text-accent'
            )}
          />
        </button>
      ))}
    </div>
  );
}

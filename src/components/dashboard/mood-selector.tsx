'use client';

import { Frown, Meh, Smile, Laugh, Grin } from 'lucide-react';
import { cn } from '@/lib/utils';

interface MoodSelectorProps {
  mood: number;
  setMood: (mood: number) => void;
}

const moodOptions = [
  { level: 1, icon: Frown, label: 'Muy mal' },
  { level: 2, icon: Meh, label: 'Mal' },
  { level: 3, icon: Smile, label: 'Normal' },
  { level: 4, icon: Laugh, label: 'Bien' },
  { level: 5, icon: Grin, label: 'Muy bien' },
];

export function MoodSelector({ mood, setMood }: MoodSelectorProps) {
  return (
    <div className="flex items-center gap-2">
      {moodOptions.map(({level, icon: Icon, label}) => (
        <button
          key={level}
          type="button"
          onClick={() => setMood(level)}
          className="group transition-transform duration-200 hover:scale-125 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-full"
          aria-label={label}
        >
          <Icon
            className={cn(
              'h-8 w-8 text-muted-foreground/50 transition-colors duration-200',
              mood === level ? 'fill-accent text-accent' : 'fill-transparent',
              'group-hover:text-accent group-hover:fill-accent/20'
            )}
          />
        </button>
      ))}
    </div>
  );
}

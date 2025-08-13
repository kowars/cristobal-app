'use client';

import { Frown, Meh, Smile, Laugh, SmilePlus } from 'lucide-react';
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
  { level: 5, icon: SmilePlus, label: 'Muy bien' },
];

export function MoodSelector({ mood, setMood }: MoodSelectorProps) {
  return (
    <div className="flex items-center justify-center gap-4 py-2">
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
              'h-10 w-10 text-muted-foreground/50 transition-all duration-200 ease-in-out',
              mood === level ? 'text-accent scale-110' : 'hover:text-accent/70',
            )}
            strokeWidth={1.5}
          />
        </button>
      ))}
    </div>
  );
}

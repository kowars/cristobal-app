'use client';

import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Briefcase, BookOpen, Bed, Smile as SmileIcon, MessageSquare, Frown, Meh, Smile, Laugh, Grin } from 'lucide-react';
import type { Status, StatusOption } from '@/lib/types';
import { cn } from '@/lib/utils';

interface FamilyViewProps {
  currentStatus: Status;
}

const statusIcons: Record<StatusOption, React.ReactNode> = {
  Trabajando: <Briefcase className="h-12 w-12 text-primary" />,
  Estudiando: <BookOpen className="h-12 w-12 text-primary" />,
  Durmiendo: <Bed className="h-12 w-12 text-primary" />,
  Libre: <SmileIcon className="h-12 w-12 text-primary" />,
};

const moodIcons: Record<number, React.ReactNode> = {
    1: <Frown className="h-8 w-8 text-accent" />,
    2: <Meh className="h-8 w-8 text-accent" />,
    3: <Smile className="h-8 w-8 text-accent" />,
    4: <Laugh className="h-8 w-8 text-accent" />,
    5: <Grin className="h-8 w-8 text-accent" />,
};


export function FamilyView({ currentStatus }: FamilyViewProps) {
  const [animationKey, setAnimationKey] = useState(0);

  useEffect(() => {
    setAnimationKey(prev => prev + 1);
  }, [currentStatus]);

  return (
    <Card className="w-full shadow-lg lg:sticky lg:top-28">
      <CardHeader>
        <CardTitle className="font-headline text-2xl">Vista Familiar</CardTitle>
        <CardDescription>Así es como tu familia ve tu estado en tiempo real.</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col items-center justify-center text-center space-y-6 pt-6">
        <div className="flex flex-col items-center gap-2">
          <p className="font-bold text-lg">Cristóbal</p>
          <p className="text-sm text-muted-foreground">está actualmente...</p>
        </div>

        <div className="relative w-48 h-48 flex items-center justify-center">
            <div className="absolute inset-0 bg-accent/10 rounded-full animate-pulse" />
            <div className="absolute inset-2 bg-secondary/10 rounded-full animate-pulse [animation-delay:-2s]" />
             <div
                key={animationKey}
                className="p-6 bg-card rounded-full shadow-md animate-in fade-in zoom-in-95 duration-500"
            >
                {statusIcons[currentStatus.type]}
            </div>
        </div>

        <div className="space-y-4 w-full" key={`content-${animationKey}`}>
            <h2 className="text-3xl font-bold font-headline text-primary animate-in fade-in-0 slide-in-from-bottom-5 duration-500">
                {currentStatus.type}
            </h2>

            <div className="flex justify-center items-center gap-1 animate-in fade-in-0 slide-in-from-bottom-5 duration-500 [animation-delay:100ms]">
                <p className="text-sm text-muted-foreground mr-2">Mi estado de ánimo es:</p>
                <div className="w-10 h-10 flex items-center justify-center">
                 {moodIcons[currentStatus.mood] || moodIcons[3]}
                </div>
            </div>

            {currentStatus.message && (
                <div className="flex items-center justify-center gap-2 text-muted-foreground bg-muted p-3 rounded-lg animate-in fade-in-0 slide-in-from-bottom-5 duration-500 [animation-delay:200ms]">
                    <MessageSquare className="h-5 w-5 flex-shrink-0" />
                    <p className="italic text-sm">"{currentStatus.message}"</p>
                </div>
            )}
        </div>
      </CardContent>
    </Card>
  );
}

'use client';

import { Button } from '@/components/ui/button';
import { User, Users } from 'lucide-react';
import Link from 'next/link';

export default function WelcomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-background p-8 text-center">
      <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center shadow-lg mb-4">
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="hsl(var(--primary-foreground))" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-heart-pulse"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/><path d="M3.22 12H9.5l.71-.71.71.71H15l.71-.71.71.71h5.56"/></svg>
      </div>
      <h1 className="text-4xl font-bold tracking-tighter text-primary font-headline">
        Cristobal App
      </h1>
      <p className="max-w-md text-muted-foreground mt-2 mb-8">
        ¿Quién eres?
      </p>
      <div className="flex flex-col sm:flex-row gap-4 w-full max-w-xs">
        <Button asChild variant="outline" className="w-full h-24 text-lg">
          <Link href="/login" className="flex-col gap-2">
            <User className="h-8 w-8" />
            Cristóbal
          </Link>
        </Button>
        <Button asChild className="w-full h-24 text-lg">
          <Link href="/status" className="flex-col gap-2">
            <Users className="h-8 w-8" />
            Familiar / Amigo
          </Link>
        </Button>
      </div>
    </main>
  );
}

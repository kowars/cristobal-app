'use client';

import { useState } from 'react';
import type { Status } from '@/lib/types';
import { FamilyView } from '@/components/dashboard/family-view';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ChevronLeft } from 'lucide-react';

export default function StatusPage() {
  const [status, setStatus] = useState<Status>({
    type: 'Libre',
    message: '',
    mood: 5,
  });

  return (
    <div className="min-h-screen bg-background text-foreground">
       <header className="flex items-center justify-between p-4 border-b bg-card/80 backdrop-blur-sm sticky top-0 z-10">
        <div className="flex items-center gap-2">
           <Link href="/">
                <Button variant="ghost">
                    <ChevronLeft className="mr-2 h-4 w-4" />
                    Volver
                </Button>
           </Link>
        </div>
        <div className="flex items-center gap-2">
           <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="hsl(var(--primary-foreground))" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-heart-pulse"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/><path d="M3.22 12H9.5l.71-.71.71.71H15l.71-.71.71.71h5.56"/></svg>
          </div>
          <h1 className="text-xl font-bold font-headline text-primary">Cristobal App</h1>
        </div>
      </header>
      <main className="flex justify-center p-4 sm:p-8">
        <div className="w-full max-w-2xl">
            <FamilyView currentStatus={status} />
        </div>
      </main>
    </div>
  );
}

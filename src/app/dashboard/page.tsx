'use client';

import { useStatusStore } from '@/lib/status-store';
import { StatusUpdater } from '@/components/dashboard/status-updater';
import { FamilyView } from '@/components/dashboard/family-view';
import { Button } from '@/components/ui/button';
import { LogOut, Bell } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function DashboardPage() {
  const [status, setStatus] = useStatusStore();
  const router = useRouter();

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="flex items-center justify-between p-4 border-b bg-card/80 backdrop-blur-sm sticky top-0 z-10">
        <div className="flex items-center gap-2">
           <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="hsl(var(--primary-foreground))" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-heart-pulse"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/><path d="M3.22 12H9.5l.71-.71.71.71H15l.71-.71.71.71h5.56"/></svg>
          </div>
          <h1 className="text-xl font-bold font-headline text-primary">Cristobal App</h1>
        </div>
        <div className="flex items-center gap-2 md:gap-4">
          <Button variant="ghost" size="icon">
            <Bell className="h-5 w-5 text-primary"/>
            <span className="sr-only">Notificaciones</span>
          </Button>
          <Button variant="ghost" size="icon" onClick={() => router.push('/')}>
            <LogOut className="h-5 w-5 text-primary"/>
            <span className="sr-only">Cerrar Sesión</span>
          </Button>
        </div>
      </header>
      <main className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-4 sm:p-8 items-start">
        {status ? (
          <>
            <StatusUpdater />
            <FamilyView />
          </>
        ) : (
          <div className="text-center col-span-1 lg:col-span-2">Cargando estado...</div>
        )}
      </main>
    </div>
  );

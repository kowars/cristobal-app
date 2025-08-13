'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { MoodSelector } from './mood-selector';
import { Briefcase, BookOpen, Bed, Smile, Send } from 'lucide-react';
import type { Status, StatusOption } from '@/lib/types';
import { useToast } from '@/hooks/use-toast';
import { useStatusStore } from '@/lib/status-store';

const statusOptions: { value: StatusOption; label: string; icon: React.ReactNode }[] = [
  { value: 'Trabajando', label: 'Trabajando', icon: <Briefcase className="h-5 w-5" /> },
  { value: 'Estudiando', label: 'Estudiando', icon: <BookOpen className="h-5 w-5" /> },
  { value: 'Durmiendo', label: 'Durmiendo', icon: <Bed className="h-5 w-5" /> },
  { value: 'Libre', label: 'Libre', icon: <Smile className="h-5 w-5" /> },
];

export function StatusUpdater() {
  const [currentStatus, setStatus] = useStatusStore();
  const [tempStatus, setTempStatus] = useState<Status>(currentStatus);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus(tempStatus);
    toast({
      title: '¡Estado Actualizado!',
      description: 'Tu familia ahora puede ver tu nuevo estado.',
    });
  };

  return (
    <Card className="w-full shadow-lg">
      <form onSubmit={handleSubmit}>
        <CardHeader>
          <CardTitle className="font-headline text-2xl">Actualiza Tu Estado</CardTitle>
          <CardDescription>Hazle saber a tu familia qué estás haciendo.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <Label>¿Qué estás haciendo?</Label>
            <RadioGroup
              value={tempStatus.type}
              onValueChange={(value: StatusOption) => setTempStatus({ ...tempStatus, type: value })}
              className="grid grid-cols-2 gap-4"
            >
              {statusOptions.map((option) => (
                <Label
                  key={option.value}
                  htmlFor={option.value}
                  className="flex flex-col items-center justify-center rounded-lg border-2 border-muted bg-popover p-4 hover:bg-accent/20 [&:has([data-state=checked])]:border-primary transition-all cursor-pointer"
                >
                  <RadioGroupItem value={option.value} id={option.value} className="sr-only" />
                  <span className="text-primary mb-2">{option.icon}</span>
                  <span className="font-medium">{option.label}</span>
                </Label>
              ))}
            </RadioGroup>
          </div>
          <div className="space-y-2">
            <Label htmlFor="message">Añade un mensaje (opcional)</Label>
            <Textarea
              id="message"
              placeholder="ej., 'Terminando un informe, ¡no molestar!'"
              value={tempStatus.message}
              onChange={(e) => setTempStatus({ ...tempStatus, message: e.target.value })}
            />
          </div>
          <div className="space-y-2">
            <Label>¿Cómo te sientes?</Label>
            <MoodSelector
              mood={tempStatus.mood}
              setMood={(mood) => setTempStatus({ ...tempStatus, mood })}
            />
          </div>
        </CardContent>
        <CardFooter>
          <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
            <Send className="mr-2 h-4 w-4" /> Actualizar
          </Button>
        </CardFooter>
      </form>
    </Card>
  );
}

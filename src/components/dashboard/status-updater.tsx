'use client';

import type { Dispatch, SetStateAction } from 'react';
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

interface StatusUpdaterProps {
  currentStatus: Status;
  setStatus: Dispatch<SetStateAction<Status>>;
}

const statusOptions: { value: StatusOption; label: string; icon: React.ReactNode }[] = [
  { value: 'Working', label: 'Working', icon: <Briefcase className="h-5 w-5" /> },
  { value: 'Studying', label: 'Studying', icon: <BookOpen className="h-5 w-5" /> },
  { value: 'Sleeping', label: 'Sleeping', icon: <Bed className="h-5 w-5" /> },
  { value: 'Free', label: 'Free', icon: <Smile className="h-5 w-5" /> },
];

export function StatusUpdater({ currentStatus, setStatus }: StatusUpdaterProps) {
  const [tempStatus, setTempStatus] = useState<Status>(currentStatus);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus(tempStatus);
    toast({
      title: 'Status Updated!',
      description: 'Your family can now see your new status.',
    });
  };

  return (
    <Card className="w-full shadow-lg">
      <form onSubmit={handleSubmit}>
        <CardHeader>
          <CardTitle className="font-headline text-2xl">Update Your Status</CardTitle>
          <CardDescription>Let your family know what you're up to.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <Label>What are you doing?</Label>
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
            <Label htmlFor="message">Add a message (optional)</Label>
            <Textarea
              id="message"
              placeholder="e.g., 'Finishing up a report, DND!'"
              value={tempStatus.message}
              onChange={(e) => setTempStatus({ ...tempStatus, message: e.target.value })}
            />
          </div>
          <div className="space-y-2">
            <Label>How are you feeling?</Label>
            <MoodSelector
              mood={tempStatus.mood}
              setMood={(mood) => setTempStatus({ ...tempStatus, mood })}
            />
          </div>
        </CardContent>
        <CardFooter>
          <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
            <Send className="mr-2 h-4 w-4" /> Update
          </Button>
        </CardFooter>
      </form>
    </Card>
  );
}

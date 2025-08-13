'use client';

import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Mail, Lock } from 'lucide-react';

export function LoginForm() {
  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate login and redirect
    router.push('/dashboard');
  };

  return (
    <Card className="w-full max-w-sm mt-8 shadow-2xl shadow-primary/10">
      <form onSubmit={handleLogin}>
        <CardHeader>
          <CardTitle className="text-2xl font-headline text-primary">Welcome Back</CardTitle>
          <CardDescription>
            Enter your credentials to access your dashboard.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input id="email" type="email" placeholder="family@member.com" required className="pl-10" />
            </div>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="password">Password</Label>
             <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input id="password" type="password" placeholder="••••••••" required className="pl-10" />
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex flex-col gap-4">
          <Button type="submit" className="w-full" variant="default">
            Sign In
          </Button>
          <p className="text-xs text-muted-foreground">
            Don't have an account?{' '}
            <a href="#" className="underline text-primary hover:text-secondary transition-colors">
              Sign up
            </a>
          </p>
        </CardFooter>
      </form>
    </Card>
  );
}

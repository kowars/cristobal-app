'use client';

import { useState } from 'react';
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
import { Lock } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export function LoginForm() {
  const router = useRouter();
  const { toast } = useToast();
  const [password, setPassword] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === 'cristobal') {
      router.push('/dashboard');
    } else {
      toast({
        variant: 'destructive',
        title: 'Error',
        description: 'Contraseña incorrecta. Inténtalo de nuevo.',
      });
    }
  };

  return (
    <Card className="w-full max-w-sm mt-8 shadow-2xl shadow-primary/10">
      <form onSubmit={handleLogin}>
        <CardHeader>
          <CardTitle className="text-2xl font-headline text-primary">Bienvenido de Nuevo</CardTitle>
          <CardDescription>
            Ingresa tu contraseña para acceder a tu panel.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="password">Contraseña</Label>
             <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                id="password"
                type="password"
                placeholder="••••••••"
                required
                className="pl-10"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex flex-col gap-4">
          <Button type="submit" className="w-full" variant="default">
            Iniciar Sesión
          </Button>
        </CardFooter>
      </form>
    </Card>
  );
}

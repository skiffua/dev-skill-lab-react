'use client';

import { useState, FormEvent } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/lib/contexts/AuthContext';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Card } from '@/components/ui/Card';

export function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  const router = useRouter();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    const success = await login(username, password);

    if (success) {
      router.push('/algorithms');
    } else {
      setError('Invalid credentials. Try demo/demo123');
      setLoading(false);
    }
  };

  return (
    <Card className="w-full max-w-md animate-fade-in">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-foreground mb-2">Welcome Back</h2>
        <p className="text-secondary text-sm">
          Sign in to access your dashboard
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <Input
          label="Username"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="demo"
          required
          autoComplete="username"
        />

        <Input
          label="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="demo123"
          required
          autoComplete="current-password"
        />

        {error && (
          <div className="p-3 rounded-lg bg-error/10 border border-error/20">
            <p className="text-error text-sm">{error}</p>
          </div>
        )}

        <Button type="submit" className="w-full" disabled={loading}>
          {loading ? 'Signing in...' : 'Sign In'}
        </Button>

        <div className="mt-4 p-3 rounded-lg bg-card-bg border border-border">
          <p className="text-xs text-secondary">
            <strong>Demo credentials:</strong>
            <br />
            Username: demo
            <br />
            Password: demo123
          </p>
        </div>
      </form>
    </Card>
  );
}

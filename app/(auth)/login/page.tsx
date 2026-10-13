import { LoginForm } from '@/components/auth/LoginForm';

export default function LoginPage() {
  return (
    <div className="w-full max-w-md">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-foreground mb-2">Skill Lab</h1>
        <p className="text-secondary">Your learning playground</p>
      </div>
      <LoginForm />
    </div>
  );
}

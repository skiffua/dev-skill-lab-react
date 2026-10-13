import { cn } from '@/lib/utils/cn';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  className?: string;
}

export function SectionHeader({ title, subtitle, className }: SectionHeaderProps) {
  return (
    <div className={cn('mb-8 animate-fade-in', className)}>
      <h1 className="text-4xl font-bold text-foreground mb-2">{title}</h1>
      {subtitle && <p className="text-lg text-secondary">{subtitle}</p>}
    </div>
  );
}

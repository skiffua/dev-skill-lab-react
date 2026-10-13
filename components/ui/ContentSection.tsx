import { ReactNode, HTMLAttributes } from 'react';
import { Card } from './Card';
import { cn } from '@/lib/utils/cn';

interface ContentSectionProps extends HTMLAttributes<HTMLDivElement> {
  title: string;
  description?: string;
  children?: ReactNode;
}

export function ContentSection({
  title,
  description,
  children,
  className,
  ...props
}: ContentSectionProps) {
  return (
    <Card hover className={cn('min-h-[200px]', className)} {...props}>
      <h3 className="text-xl font-semibold text-foreground mb-2">{title}</h3>
      {description && (
        <p className="text-secondary text-sm mb-4">{description}</p>
      )}
      <div className="text-foreground">
        {children || (
          <p className="text-secondary italic">Content coming soon...</p>
        )}
      </div>
    </Card>
  );
}

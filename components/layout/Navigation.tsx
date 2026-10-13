'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { mainNavigation } from '@/config/navigation';
import { cn } from '@/lib/utils/cn';

interface NavigationProps {
  mobile?: boolean;
  onLinkClick?: () => void;
}

export function Navigation({ mobile = false, onLinkClick }: NavigationProps) {
  const pathname = usePathname();

  return (
    <nav
      className={cn(
        mobile
          ? 'flex flex-col gap-4'
          : 'hidden md:flex md:items-center md:gap-6'
      )}
    >
      {mainNavigation.map((link) => {
        const isActive = pathname === link.href;
        return (
          <Link
            key={link.href}
            href={link.href}
            onClick={onLinkClick}
            className={cn(
              'text-sm font-medium transition-colors duration-200',
              isActive
                ? 'text-primary'
                : 'text-foreground hover:text-primary',
              mobile && 'text-lg'
            )}
          >
            {link.label}
          </Link>
        );
      })}
    </nav>
  );
}

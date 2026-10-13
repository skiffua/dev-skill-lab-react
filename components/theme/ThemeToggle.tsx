'use client';

import { useTheme } from '@/lib/contexts/ThemeContext';
import { themes, THEME_LIST } from '@/config/themes';
import { Button } from '@/components/ui/Button';

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="flex items-center gap-2">
      {THEME_LIST.map((themeName) => (
        <Button
          key={themeName}
          variant={theme === themeName ? 'primary' : 'ghost'}
          size="sm"
          onClick={() => setTheme(themeName)}
          className="capitalize"
        >
          {themes[themeName].label}
        </Button>
      ))}
    </div>
  );
}

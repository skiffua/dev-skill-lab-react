import { Theme, ThemeConfig } from '@/lib/types/theme';

export const THEME_STORAGE_KEY = 'app-theme';
export const DEFAULT_THEME: Theme = 'light';

export const themes: Record<Theme, ThemeConfig> = {
  light: {
    name: 'light',
    label: 'Light',
    colors: {
      background: '#ffffff',
      foreground: '#171717',
      cardBg: '#f9fafb',
      border: '#e5e7eb',
      primary: '#3b82f6',
      primaryHover: '#2563eb',
      secondary: '#64748b',
      accent: '#8b5cf6',
      success: '#10b981',
      warning: '#f59e0b',
      error: '#ef4444',
    },
  },
  dark: {
    name: 'dark',
    label: 'Dark',
    colors: {
      background: '#0a0a0a',
      foreground: '#ededed',
      cardBg: '#1a1a1a',
      border: '#2a2a2a',
      primary: '#60a5fa',
      primaryHover: '#3b82f6',
      secondary: '#94a3b8',
      accent: '#a78bfa',
      success: '#34d399',
      warning: '#fbbf24',
      error: '#f87171',
    },
  },
  ocean: {
    name: 'ocean',
    label: 'Ocean',
    colors: {
      background: '#0c1222',
      foreground: '#e0f2fe',
      cardBg: '#162033',
      border: '#1e3a5f',
      primary: '#0ea5e9',
      primaryHover: '#0284c7',
      secondary: '#67e8f9',
      accent: '#06b6d4',
      success: '#2dd4bf',
      warning: '#fcd34d',
      error: '#fb7185',
    },
  },
};

export const THEME_LIST: Theme[] = ['light', 'dark', 'ocean'];

export type Theme = 'light' | 'dark' | 'ocean';

export interface ThemeColors {
  background: string;
  foreground: string;
  cardBg: string;
  border: string;
  primary: string;
  primaryHover: string;
  secondary: string;
  accent: string;
  success: string;
  warning: string;
  error: string;
}

export interface ThemeConfig {
  name: Theme;
  label: string;
  colors: ThemeColors;
}

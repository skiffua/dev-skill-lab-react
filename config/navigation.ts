export interface NavLink {
  href: string;
  label: string;
  icon?: string;
}

export const mainNavigation: NavLink[] = [
  { href: '/algorithms', label: 'Алгоритми' },
  { href: '/javascript', label: 'JavaScript' },
  { href: '/css-showcase', label: 'CSS Features' },
  { href: '/components-demo', label: 'Components' },
  { href: '/animations', label: 'Animations' },
  { href: '/data-visualization', label: 'Data Viz' },
];

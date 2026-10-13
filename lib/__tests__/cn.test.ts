import { cn } from '../utils/cn';

describe('cn utility', () => {
  it('should merge class names correctly', () => {
    const result = cn('px-4', 'py-2', 'bg-blue-500');
    expect(result).toContain('px-4');
    expect(result).toContain('py-2');
    expect(result).toContain('bg-blue-500');
  });

  it('should handle conditional classes', () => {
    const isActive = true;
    const result = cn('base-class', isActive && 'active-class');
    expect(result).toContain('base-class');
    expect(result).toContain('active-class');
  });

  it('should merge conflicting Tailwind classes', () => {
    const result = cn('px-2', 'px-4');
    expect(result).toBe('px-4');
  });

  it('should handle undefined and null values', () => {
    const result = cn('base', undefined, null, 'end');
    expect(result).toContain('base');
    expect(result).toContain('end');
  });

  it('should handle empty input', () => {
    const result = cn();
    expect(result).toBe('');
  });
});

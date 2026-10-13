import { render, screen, act } from '@testing-library/react';
import { ThemeProvider, useTheme } from '../ThemeContext';

function TestComponent() {
  const { theme, setTheme } = useTheme();
  return (
    <div>
      <span data-testid="current-theme">{theme}</span>
      <button onClick={() => setTheme('dark')}>Set Dark</button>
      <button onClick={() => setTheme('ocean')}>Set Ocean</button>
    </div>
  );
}

describe('ThemeContext', () => {
  let getItemSpy: jest.SpyInstance;
  let setItemSpy: jest.SpyInstance;

  beforeEach(() => {
    getItemSpy = jest.spyOn(Storage.prototype, 'getItem');
    setItemSpy = jest.spyOn(Storage.prototype, 'setItem');
    document.documentElement.removeAttribute('data-theme');
  });

  afterEach(() => {
    getItemSpy.mockRestore();
    setItemSpy.mockRestore();
  });

  it('should provide default theme when localStorage is empty', () => {
    getItemSpy.mockReturnValue(null);

    render(
      <ThemeProvider>
        <TestComponent />
      </ThemeProvider>
    );

    expect(screen.getByTestId('current-theme')).toHaveTextContent('light');
  });

  it('should load theme from localStorage', () => {
    getItemSpy.mockReturnValue('dark');

    render(
      <ThemeProvider>
        <TestComponent />
      </ThemeProvider>
    );

    expect(screen.getByTestId('current-theme')).toHaveTextContent('dark');
  });

  it('should update theme and localStorage when setTheme is called', () => {
    getItemSpy.mockReturnValue('light');

    render(
      <ThemeProvider>
        <TestComponent />
      </ThemeProvider>
    );

    act(() => {
      screen.getByText('Set Dark').click();
    });

    expect(screen.getByTestId('current-theme')).toHaveTextContent('dark');
    expect(setItemSpy).toHaveBeenCalledWith('app-theme', 'dark');
  });

  it('should set data-theme attribute on document element', () => {
    getItemSpy.mockReturnValue('ocean');

    render(
      <ThemeProvider>
        <TestComponent />
      </ThemeProvider>
    );

    expect(document.documentElement.getAttribute('data-theme')).toBe('ocean');
  });

  it('should update data-theme attribute when theme changes', () => {
    getItemSpy.mockReturnValue('light');

    render(
      <ThemeProvider>
        <TestComponent />
      </ThemeProvider>
    );

    act(() => {
      screen.getByText('Set Ocean').click();
    });

    expect(document.documentElement.getAttribute('data-theme')).toBe('ocean');
  });

  it('should throw error when useTheme is used outside provider', () => {
    const consoleSpy = jest.spyOn(console, 'error').mockImplementation();

    expect(() => {
      render(<TestComponent />);
    }).toThrow('useTheme must be used within a ThemeProvider');

    consoleSpy.mockRestore();
  });

  it('should handle invalid theme in localStorage', () => {
    getItemSpy.mockReturnValue('invalid-theme');

    render(
      <ThemeProvider>
        <TestComponent />
      </ThemeProvider>
    );

    expect(screen.getByTestId('current-theme')).toHaveTextContent('light');
  });
});

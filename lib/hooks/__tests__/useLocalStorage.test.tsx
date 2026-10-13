import { renderHook, act } from '@testing-library/react';
import { useLocalStorage } from '../useLocalStorage';

describe('useLocalStorage', () => {
  let getItemSpy: jest.SpyInstance;
  let setItemSpy: jest.SpyInstance;

  beforeEach(() => {
    getItemSpy = jest.spyOn(Storage.prototype, 'getItem');
    setItemSpy = jest.spyOn(Storage.prototype, 'setItem');
  });

  afterEach(() => {
    getItemSpy.mockRestore();
    setItemSpy.mockRestore();
  });

  it('should return initial value when localStorage is empty', () => {
    getItemSpy.mockReturnValue(null);

    const { result } = renderHook(() => useLocalStorage('test-key', 'initial'));

    expect(result.current[0]).toBe('initial');
    expect(localStorage.getItem).toHaveBeenCalledWith('test-key');
  });

  it('should return stored value from localStorage', () => {
    getItemSpy.mockReturnValue(JSON.stringify('stored-value'));

    const { result } = renderHook(() => useLocalStorage('test-key', 'initial'));

    expect(result.current[0]).toBe('stored-value');
  });

  it('should update localStorage when value changes', () => {
    getItemSpy.mockReturnValue(null);

    const { result } = renderHook(() => useLocalStorage('test-key', 'initial'));

    act(() => {
      result.current[1]('new-value');
    });

    expect(localStorage.setItem).toHaveBeenCalledWith(
      'test-key',
      JSON.stringify('new-value')
    );
    expect(result.current[0]).toBe('new-value');
  });

  it('should handle function updates', () => {
    getItemSpy.mockReturnValue(JSON.stringify(5));

    const { result } = renderHook(() => useLocalStorage<number>('counter', 0));

    act(() => {
      result.current[1]((prev) => prev + 1);
    });

    expect(result.current[0]).toBe(6);
    expect(localStorage.setItem).toHaveBeenCalledWith('counter', JSON.stringify(6));
  });

  it('should handle complex objects', () => {
    const complexObject = { name: 'Test', nested: { value: 42 } };
    getItemSpy.mockReturnValue(null);

    const { result } = renderHook(() =>
      useLocalStorage('complex', complexObject)
    );

    expect(result.current[0]).toEqual(complexObject);
  });

  it('should handle JSON parse errors gracefully', () => {
    getItemSpy.mockReturnValue('invalid-json{');
    const consoleSpy = jest.spyOn(console, 'error').mockImplementation();

    const { result } = renderHook(() => useLocalStorage('test-key', 'fallback'));

    expect(result.current[0]).toBe('fallback');
    expect(consoleSpy).toHaveBeenCalled();

    consoleSpy.mockRestore();
  });
});

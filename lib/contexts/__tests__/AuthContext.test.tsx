import { render, screen, act, waitFor } from '@testing-library/react';
import { AuthProvider, useAuth } from '../AuthContext';
import { DEMO_CREDENTIALS } from '@/lib/types/auth';

function TestComponent() {
  const { isAuthenticated, user, login, logout, isLoading } = useAuth();
  return (
    <div>
      <span data-testid="loading">{isLoading.toString()}</span>
      <span data-testid="authenticated">{isAuthenticated.toString()}</span>
      <span data-testid="user-name">{user?.name || 'none'}</span>
      <button onClick={() => login('demo', 'demo123')}>Login</button>
      <button onClick={() => login('wrong', 'wrong')}>Login Wrong</button>
      <button onClick={logout}>Logout</button>
    </div>
  );
}

describe('AuthContext', () => {
  let getItemSpy: jest.SpyInstance;
  let setItemSpy: jest.SpyInstance;
  let removeItemSpy: jest.SpyInstance;

  beforeEach(() => {
    getItemSpy = jest.spyOn(Storage.prototype, 'getItem');
    setItemSpy = jest.spyOn(Storage.prototype, 'setItem');
    removeItemSpy = jest.spyOn(Storage.prototype, 'removeItem');
  });

  afterEach(() => {
    getItemSpy.mockRestore();
    setItemSpy.mockRestore();
    removeItemSpy.mockRestore();
  });

  it('should start with unauthenticated state', async () => {
    getItemSpy.mockReturnValue(null);

    render(
      <AuthProvider>
        <TestComponent />
      </AuthProvider>
    );

    await waitFor(() => {
      expect(screen.getByTestId('loading')).toHaveTextContent('false');
    });

    expect(screen.getByTestId('authenticated')).toHaveTextContent('false');
    expect(screen.getByTestId('user-name')).toHaveTextContent('none');
  });

  it('should load authenticated user from localStorage', async () => {
    const storedUser = JSON.stringify(DEMO_CREDENTIALS.user);
    getItemSpy.mockReturnValue(storedUser);

    render(
      <AuthProvider>
        <TestComponent />
      </AuthProvider>
    );

    await waitFor(() => {
      expect(screen.getByTestId('loading')).toHaveTextContent('false');
    });

    expect(screen.getByTestId('authenticated')).toHaveTextContent('true');
    expect(screen.getByTestId('user-name')).toHaveTextContent(DEMO_CREDENTIALS.user.name);
  });

  it('should successfully login with correct credentials', async () => {
    getItemSpy.mockReturnValue(null);

    render(
      <AuthProvider>
        <TestComponent />
      </AuthProvider>
    );

    await waitFor(() => {
      expect(screen.getByTestId('loading')).toHaveTextContent('false');
    });

    await act(async () => {
      screen.getByText('Login').click();
    });

    expect(screen.getByTestId('authenticated')).toHaveTextContent('true');
    expect(screen.getByTestId('user-name')).toHaveTextContent(DEMO_CREDENTIALS.user.name);
    expect(setItemSpy).toHaveBeenCalledWith(
      'auth_user',
      JSON.stringify(DEMO_CREDENTIALS.user)
    );
  });

  it('should fail login with wrong credentials', async () => {
    getItemSpy.mockReturnValue(null);

    render(
      <AuthProvider>
        <TestComponent />
      </AuthProvider>
    );

    await waitFor(() => {
      expect(screen.getByTestId('loading')).toHaveTextContent('false');
    });

    await act(async () => {
      screen.getByText('Login Wrong').click();
    });

    expect(screen.getByTestId('authenticated')).toHaveTextContent('false');
    expect(screen.getByTestId('user-name')).toHaveTextContent('none');
  });

  it('should logout and clear localStorage', async () => {
    const storedUser = JSON.stringify(DEMO_CREDENTIALS.user);
    getItemSpy.mockReturnValue(storedUser);

    render(
      <AuthProvider>
        <TestComponent />
      </AuthProvider>
    );

    await waitFor(() => {
      expect(screen.getByTestId('authenticated')).toHaveTextContent('true');
    });

    act(() => {
      screen.getByText('Logout').click();
    });

    expect(screen.getByTestId('authenticated')).toHaveTextContent('false');
    expect(screen.getByTestId('user-name')).toHaveTextContent('none');
    expect(removeItemSpy).toHaveBeenCalledWith('auth_user');
  });

  it('should handle corrupted localStorage data', async () => {
    getItemSpy.mockReturnValue('invalid-json{');
    const consoleSpy = jest.spyOn(console, 'error').mockImplementation();

    render(
      <AuthProvider>
        <TestComponent />
      </AuthProvider>
    );

    await waitFor(() => {
      expect(screen.getByTestId('loading')).toHaveTextContent('false');
    });

    expect(screen.getByTestId('authenticated')).toHaveTextContent('false');
    expect(consoleSpy).toHaveBeenCalled();
    expect(removeItemSpy).toHaveBeenCalledWith('auth_user');

    consoleSpy.mockRestore();
  });

  it('should throw error when useAuth is used outside provider', () => {
    const consoleSpy = jest.spyOn(console, 'error').mockImplementation();

    expect(() => {
      render(<TestComponent />);
    }).toThrow('useAuth must be used within an AuthProvider');

    consoleSpy.mockRestore();
  });
});

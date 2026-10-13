export interface User {
  name: string;
  email: string;
}

export interface AuthState {
  isAuthenticated: boolean;
  user: User | null;
}

export const AUTH_STORAGE_KEY = 'auth_user';

export const DEMO_CREDENTIALS = {
  username: 'demo',
  password: 'demo123',
  user: {
    name: 'Demo User',
    email: 'demo@example.com',
  },
};

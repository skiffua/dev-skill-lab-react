import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { API_URL } from '@/store/api';
import axios from "axios";

interface User {
    id: number;
    email: string;
    role?: string;
}

interface AuthState {
    isAuthenticated: boolean;
    user: { id: number; email: string; role?: string } | null;
    loading: boolean;
    error: any;
}

const initialState: AuthState = {
    isAuthenticated: false,
    user: null,
    loading: false,
    error: null,
};

export const loginUser = createAsyncThunk(
    'auth/loginUser',
    async (credentials: { userName: string; }, { rejectWithValue }) => {
        console.log('GET TOKEN ACTION',API_URL);
        try {
            const response = await fetch(`${API_URL}/api/login`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                credentials: 'include',
                body: JSON.stringify(credentials),
            });

            if (!response.ok) {
                throw new Error('Invalid credentials');
            }

            // Parse JSON response only once
            const data = await response.json();
            console.log('response data', data);

            return data.user;
        } catch (err: any) {
            return rejectWithValue(err.message || 'Auth error');
        }
    }
);

export const checkAuth = createAsyncThunk(
    'auth/checkAuth',
    async (_, { rejectWithValue }) => {
        try {
            const response = await fetch(`${API_URL}/api/me`, {
                method: 'GET',
                headers: { 'Content-Type': 'application/json' },
                credentials: 'include', // Automatically sends the HttpOnly cookie
            });

            if (!response.ok) {
                throw new Error('Session expired or invalid');
            }

            const result = await response.json();

            // Returns the user object to extraReducers (.fulfilled)
            return result.data.user;
        } catch (err: any) {
            return rejectWithValue(err.message || 'Not authenticated');
        }
    }
);

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setAuthUser: (state, action: PayloadAction<any>) => {
            state.isAuthenticated = true;
            state.user = action.payload;
        },
        logoutUser: (state) => {
            state.isAuthenticated = false;
            state.user = null;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(loginUser.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(loginUser.fulfilled, (state, action: PayloadAction<User>) => {
                state.loading = false;
                state.isAuthenticated = true;
                state.user = action.payload;
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string;
            })
            .addCase(checkAuth.fulfilled, (state, action) => {
                state.isAuthenticated = true;
                state.user = action.payload; // Automatically log in the user from the cookie data!
            })
            .addCase(checkAuth.rejected, (state) => {
                state.isAuthenticated = false;
                state.user = null; // Cookie is dead or missing, keep user logged out
            });
    },
});

export const { setAuthUser, logoutUser } = authSlice.actions;
export default authSlice.reducer;
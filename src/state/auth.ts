import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

type Token = string | null;

type AuthState = {
    token: Token;
    setToken: (token: Token) => void;
};

export const useAuthState = create<AuthState>()(
    devtools(
        persist(
            (set) => ({
                token: null,
                setToken: (token) => set({ token }),
            }),
            {
                name: 'auth',
            }
        )
    )
);

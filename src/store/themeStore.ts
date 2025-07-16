import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { ThemeMode } from '../types';

interface ThemeState {
  mode: ThemeMode;
  toggleTheme: () => void;
  setTheme: (theme: ThemeMode) => void;
}

export const useThemeStore = create<ThemeState>()(
  persist(
    (set) => ({
      mode: 'light',
      toggleTheme: () => set((state) => ({ mode: state.mode === 'light' ? 'dark' : 'light' })),
      setTheme: (theme) => set({ mode: theme }),
    }),
    {
      name: 'theme-storage',
    }
  )
);
import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { User } from '../types';
import { supabase } from '../lib/supabase';

interface AuthState {
  user: User | null;
  isLoading: boolean;
  signIn: (email: string, password: string) => Promise<{ error: any | null }>;
  signUp: (email: string, password: string) => Promise<{ error: any | null }>;
  signOut: () => Promise<void>;
  updateProfile: (data: Partial<User>) => Promise<void>;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set, get) => ({
      user: null,
      isLoading: false,
      
      signIn: async (email: string, password: string) => {
        set({ isLoading: true });
        const { data, error } = await supabase.auth.signInWithPassword({
          email,
          password,
        });
        
        if (data.user) {
          set({ user: { id: data.user.id, email: data.user.email! } });
        }
        
        set({ isLoading: false });
        return { error };
      },
      
      signUp: async (email: string, password: string) => {
        set({ isLoading: true });
        const { data, error } = await supabase.auth.signUp({
          email,
          password,
        });
        
        if (data.user) {
          set({ user: { id: data.user.id, email: data.user.email! } });
        }
        
        set({ isLoading: false });
        return { error };
      },
      
      signOut: async () => {
        await supabase.auth.signOut();
        set({ user: null });
      },
      
      updateProfile: async (data) => {
        const user = get().user;
        if (!user) return;
        
        set({ isLoading: true });
        
        // Update user profile in database
        const { error } = await supabase
          .from('profiles')
          .update(data)
          .eq('id', user.id);
          
        if (!error) {
          set({ user: { ...user, ...data } });
        }
        
        set({ isLoading: false });
      },
    }),
    {
      name: 'auth-storage',
    }
  )
);
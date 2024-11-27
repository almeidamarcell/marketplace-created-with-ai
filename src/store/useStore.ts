import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { User, Listing, Filter } from '../types';

interface Store {
  user: User | null;
  listings: Listing[];
  filters: Filter;
  darkMode: boolean;
  setUser: (user: User | null) => void;
  setListings: (listings: Listing[]) => void;
  setFilters: (filters: Filter) => void;
  addFavorite: (listingId: string) => void;
  removeFavorite: (listingId: string) => void;
  toggleDarkMode: () => void;
}

export const useStore = create<Store>()(
  persist(
    (set) => ({
      user: null,
      listings: [],
      filters: {},
      darkMode: false,
      setUser: (user) => set({ user }),
      setListings: (listings) => set({ listings }),
      setFilters: (filters) => set({ filters }),
      addFavorite: (listingId) =>
        set((state) => ({
          user: state.user
            ? { ...state.user, favorites: [...state.user.favorites, listingId] }
            : null,
        })),
      removeFavorite: (listingId) =>
        set((state) => ({
          user: state.user
            ? {
                ...state.user,
                favorites: state.user.favorites.filter((id) => id !== listingId),
              }
            : null,
        })),
      toggleDarkMode: () => set((state) => ({ darkMode: !state.darkMode })),
    }),
    {
      name: 'app-storage',
    }
  )
);
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface SearchState {
  searchOpen: boolean;
  openSearch: () => void;
  closeSearch: () => void;
  toggleSearch: () => void;
}

export const useSearchStore = create<SearchState>((set) => ({
  searchOpen: false,
  openSearch: () => set({ searchOpen: true }),
  closeSearch: () => set({ searchOpen: false }),
  toggleSearch: () => set((state) => ({ searchOpen: !state.searchOpen })),
}));

interface MuseumState {
  favorites: string[]; // aircraft slugs
  compareList: string[]; // aircraft slugs
  toggleFavorite: (slug: string) => void;
  addToCompare: (slug: string) => void;
  removeFromCompare: (slug: string) => void;
  clearCompare: () => void;
}

export const useMuseumStore = create<MuseumState>()(
  persist(
    (set, get) => ({
      favorites: [],
      compareList: [],
      toggleFavorite: (slug) => {
        const { favorites } = get();
        if (favorites.includes(slug)) {
          set({ favorites: favorites.filter((s) => s !== slug) });
        } else {
          set({ favorites: [...favorites, slug] });
        }
      },
      addToCompare: (slug) => {
        const { compareList } = get();
        if (compareList.includes(slug)) return; // already in compare
        if (compareList.length >= 4) {
          // Limit to 4 aircraft
          alert('You can compare a maximum of 4 aircraft at a time.');
          return;
        }
        set({ compareList: [...compareList, slug] });
      },
      removeFromCompare: (slug) => {
        const { compareList } = get();
        set({ compareList: compareList.filter((s) => s !== slug) });
      },
      clearCompare: () => set({ compareList: [] }),
    }),
    {
      name: 'aero-museum-store',
    }
  )
);

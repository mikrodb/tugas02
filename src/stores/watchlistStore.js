import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useWatchlistStore = create(
  persist(
    (set, get) => ({
      // states
      movies: [],

      // actions
      add: (m) =>
        set((s) => ({
          movies: [...s.movies, m],
        })),

      remove: (id) =>
        set((s) => ({
          movies: s.movies.filter((m) => m.id !== id),
        })),

      has: (id) => get().movies.some((m) => m.id === id),
    }),
    {
      name: "sinema-watchlist",
    },
  ),
);

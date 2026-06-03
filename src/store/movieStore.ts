import { create } from 'zustand';
import type { Movie } from '@/types/movie';
import { persist } from 'zustand/middleware';

// TODO: Define your store state interface
interface MovieStore {
  //   // TODO: Add state properties
  // example  , watchlist, selectedMovie, etc.
  favorites: Movie[];

  //   // TODO: Add action methods
  addToFavorite: (movie: Movie) => void;
  removeFromFavorite: (movieId: number) => void;
  toggleFavorite: (movie: Movie) => void;

  isFavorite: (movieId: number) => boolean;
}

// TODO: Create Zustand store
// Reference: https://zustand.docs.pmnd.rs/getting-started/introduction

export const useMovieStore = create<MovieStore>()(
  persist(
    (set, get) => ({
      favorites: [],

      addToFavorite: (movie) =>
        set((state) => ({
          favorites: [...state.favorites, movie],
        })),

      removeFromFavorite: (movieId) =>
        set((state) => ({
          favorites: state.favorites.filter((movie) => movie.id !== movieId),
        })),

      toggleFavorite: (movie) => {
        const exists = get().favorites.some((item) => item.id === movie.id);

        if (exists) {
          get().removeFromFavorite(movie.id);
        } else {
          get().addToFavorite(movie);
        }
      },

      isFavorite: (movieId) => get().favorites.some((movie) => movie.id === movieId),

      //   // TODO: Initialize state and implement actions
    }),
    {
      name: 'movie-favorites',
    }
  )
);

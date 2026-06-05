import { create } from 'zustand';
import type { DetailResponse, Movie } from '@/types/movie';
import { persist } from 'zustand/middleware';

interface MovieStore {
  favorites: Movie[];

  addToFavorite: (movie: Movie) => void;
  removeFromFavorite: (movieId: number) => void;
  toggleFavorite: (movie: Movie | DetailResponse) => void;

  isFavorite: (movieId: number) => boolean;
}

export const useMovieStore = create<MovieStore>()(
  persist(
    (set, get) => ({
      favorites: [],

      addToFavorite: (movie) =>
        set((state) => {
          const exists = state.favorites.some((item) => item.id === movie.id);
          if (exists) {
            return state;
          }
          return {
            favorites: [...state.favorites, movie],
          };
        }),

      removeFromFavorite: (movieId) =>
        set((state) => ({
          favorites: state.favorites.filter((movie) => movie.id !== movieId),
        })),

      // toggleFavorite: (movie) => {
      toggleFavorite: (movie) => {
        const exists = get().favorites.some((item) => item.id === movie.id);

        if (exists) {
          get().removeFromFavorite(movie.id);
        } else {
          const normalizedMovie: Movie = {
            id: movie.id,
            title: movie.title,
            overview: movie.overview,
            poster_path: movie.poster_path,
            backdrop_path: movie.backdrop_path,
            adult: movie.adult,
            original_language: movie.original_language,
            original_title: movie.original_title,
            popularity: movie.popularity,
            release_date: movie.release_date,
            video: movie.video,
            vote_average: movie.vote_average,
            vote_count: movie.vote_count,

            genre_ids:
              'genre_ids' in movie ? movie.genre_ids : movie.genres?.map((g) => g.id) || [],
          };

          get().addToFavorite(normalizedMovie);
        }
      },

      isFavorite: (movieId) => get().favorites.some((movie) => movie.id === movieId),
    }),
    {
      name: 'movie-favorites',
    }
  )
);

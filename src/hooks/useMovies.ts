import { useQuery } from '@tanstack/react-query';
import { movieService } from '@/services/movieService';
import type { MovieResponse } from '@/types/movie';
// import type { Movie } from '@/types/movie';
// import {movieService} from "../../src/services/movieService";
// TODO: Create custom hooks using React Query
// Reference: https://tanstack.com/query/latest/docs/framework/react/overview

// Example: Hook to fetch popular movies
export const usePopularMovies = () => {
  // TODO: Implement useQuery hook
  // Hint: Use movieService.getPopularMovies as queryFn
  // ['movies', 'popular'],
  return useQuery({
    queryKey: ['popular-movies'],
    // queryFn: () => {
    //   // TODO: Call your movie service function
    //   throw new Error('Not implemented');
    // },
    queryFn: movieService.getPopularMovies,
  });
};

// Hook to fetch trending movies
export const useTrendingMovies = (timeWindow: 'day' | 'week') => {
  return useQuery<MovieResponse>({
    queryKey: ['trending-movies', timeWindow],
    queryFn: () => movieService.trendingMovies(timeWindow),
  });
};
// TODO: Add more hooks for different endpoints
// Examples: useMovieDetails, useSearchMovies, useNowPlayingMovies

// Hook to fetch now playing movies
export const useNowPlayingMovies = () => {
  return useQuery<MovieResponse>({
    queryKey: ['now-playing'],

    queryFn: movieService.getNowPlayingMovies,
  });
};

// Hook to fetch new release movies regions based country specific
export const useNewReleaseMovies = (region: 'ID') => {
  return useQuery<MovieResponse>({
    queryKey: ['new-release', region],

    queryFn: () => movieService.newReleaseMovies(region),
  });
};

// Hook to fetch movie credits
export const useMovieCredits = (movieId: number) => {
  return useQuery({
    queryKey: ['movie-credits', movieId],

    queryFn: () => movieService.getMovieCredits(movieId),

    enabled: !!movieId,
  });
};

import { useQuery } from '@tanstack/react-query';
import { movieService } from '@/services/movieService';
import type { MovieResponse } from '@/types/movie';

// Hook to fetch search movie
export const useSearchMovies = (query: string) => {
  // const [searchQuery, setSearhQuery] = useState('');
  return useQuery({
    queryKey: ['search-movies', query],
    queryFn: () => movieService.searchMovies(query),
    enabled: query.length > 0,
  });
};

// Example: Hook to fetch popular movies
export const usePopularMovies = () => {
  return useQuery({
    queryKey: ['popular-movies'],

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

// Hook to fetch now playing movies
export const useNowPlayingMovies = () => {
  return useQuery<MovieResponse>({
    queryKey: ['now-playing'],

    queryFn: movieService.getNowPlayingMovies,
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

// Hook to fetch movie detail
export const useMovieDetail = (movieId: number) => {
  return useQuery({
    queryKey: ['movie-detail', movieId],

    queryFn: () => movieService.getMovieDetail(movieId),

    enabled: !!movieId,
  });
};

// Hook to fetch movie trailer
export const useWatchTrailer = (movieId: number) => {
  return useQuery({
    queryKey: [`movie-videos`, movieId],

    queryFn: () => movieService.getMovieTrailer(movieId),

    enabled: !!movieId,
  });
};

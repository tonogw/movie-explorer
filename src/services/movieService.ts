import api from '@/lib/axios';
import type { CreditResponse, Movie, MovieResponse, DetailResponse } from '@/types/movie';

// TODO: Create service functions to fetch data from TMDB API
// Reference: https://developer.themoviedb.org/reference/intro/getting-started

export const movieService = {
  // TODO: Implement getPopularMovies function
  // Endpoint: GET /movie/popular

  getPopularMovies: async (): Promise<MovieResponse> => {
    const response = await api.get<MovieResponse>('/movie/popular');

    return response.data;
  },

  // TODO: Implement getNowPlayingMovies function
  // Endpoint: GET /movie/now_playing
  getNowPlayingMovies: async (): Promise<MovieResponse> => {
    const response = await api.get<MovieResponse>('/movie/now_playing');

    return response.data;
  },

  // TODO: Implement getMovieDetails function
  // Endpoint: GET /movie/{movie_id}
  getMovieDetails: async (movieId: number): Promise<Movie> => {
    const response = await api.get<Movie>(`/movie/${movieId}`);

    return response.data;
  },

  // TODO: Implement searchMovies function
  // Endpoint: GET /search/movie
  searchMovies: async (query: string): Promise<MovieResponse> => {
    const response = await api.get<MovieResponse>('/search/movie', {
      params: {
        query,
      },
    });

    return response.data;
  },

  // TODO: Add more endpoints as needed
  // ENDpoint: GET /trending/movie/?timeWindow
  trendingMovies: async (timeWindow: 'day' | 'week'): Promise<MovieResponse> => {
    const response = await api.get<MovieResponse>(`/trending/movie/${timeWindow}`);

    return response.data;
  },

  // ENDpoint: GET /search/movie/region?"ID"
  newReleaseMovies: async (region: 'ID'): Promise<MovieResponse> => {
    const response = await api.get<MovieResponse>(`/search/movie/${region}`);
    return response.data;
  },

  // ENDpoint: GET Casts
  getMovieCredits: async (movieId: number): Promise<CreditResponse> => {
    const response = await api.get<CreditResponse>(`/movie/${movieId}/credits`);
    return response.data;
  },

  // ENDpoint: GET Image detail
  getMovieDetail: async (movieId: number): Promise<DetailResponse> => {
    const response = await api.get<DetailResponse>(`/movie/${movieId}`);
    return response.data;
  },

  // ENDpoint: GET YouTube
  getMovieTrailer: async (movieId: number) => {
    const response = await api.get(`/movie/${movieId}/video`);

    return response.data;
  },
};

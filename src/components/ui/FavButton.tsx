import { useMovieStore } from '@/store/movieStore';
import { Button } from '@/components/ui/button';
import type { Movie, DetailResponse } from '@/types/movie';
import { Heart } from 'lucide-react';

type FavButtonProps = {
  movie: Movie | DetailResponse;
};

function normalizeMovie(input: Movie | DetailResponse): Movie {
  return {
    id: input.id,
    title: input.title,
    poster_path: input.poster_path,
    overview: input.overview,
    release_date: input.release_date,
    vote_average: input.vote_average,
    genre_ids: 'genre_ids' in input ? input.genre_ids : [],
  };
}

export default function FavButton({ movie }: FavButtonProps) {
  const toggleFavorite = useMovieStore((state) => state.toggleFavorite);

  const isFavorite = useMovieStore((state) => state.isFavorite(movie.id));

  return (
    <Button
      variant="favorite"
      size="icon"
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        toggleFavorite(normalizeMovie(movie));
      }}
    >
      <Heart size={32} className={isFavorite ? 'fill-red-500 text-red-500' : 'text-white'} />
    </Button>
  );
}

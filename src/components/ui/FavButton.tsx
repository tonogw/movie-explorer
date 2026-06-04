import { useMovieStore } from '@/store/movieStore';
import { Button } from './button';
import type { Movie } from '@/types/movie';

type FavButtonProps = {
  movie: Movie;
};

export default function FavButton({ movie }: FavButtonProps) {
  const toggleFavorite = useMovieStore((state) => state.toggleFavorite);

  const isFavorite = useMovieStore((state) => state.isFavorite(movie.id));

  return (
    <Button variant="favorite" size="icon" onClick={() => toggleFavorite(movie)}>
      <Heart clasName={isFavorite ? 'fill-red-500 text-red-500' : 'text-white'} />
    </Button>
  );
}

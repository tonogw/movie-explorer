import { useMovieStore } from '@/store/movieStore';
import { Button } from '@/components/ui/button';
import type { Movie, DetailResponse } from '@/types/movie';
import { Heart } from 'lucide-react';

type FavButtonProps = {
  movie: Movie | DetailResponse;
};

export default function FavButton({ movie }: FavButtonProps) {
  const toggleFavorite = useMovieStore((state) => state.toggleFavorite);
  // const toggleFavorite:(movie: FavoriteMovie) => void;

  const isFavorite = useMovieStore((state) => state.isFavorite(movie.id));

  return (
    <Button
      variant="favorite"
      size="icon"
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        toggleFavorite(movie);
      }}
    >
      <Heart size={32} className={isFavorite ? 'fill-red-500 text-red-500' : 'text-white'} />
    </Button>
  );
}

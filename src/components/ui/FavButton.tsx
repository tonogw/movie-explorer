import { useMovieStore } from '@/store/movieStore';
import { Button } from '@/components/ui/button';
import type { Movie, DetailResponse } from '@/types/movie';
import { Heart } from 'lucide-react';

type FavButtonProps = {
  movie: Movie | DetailResponse;
};

// export type FavoriteMovie = {
//   id: number;
//   title: string;
//   poster_path: string| null;
// };

//  function normalizeMovie(): Movie | DetailResponse): FavoriteMovie => {
//    return {
//      id: number,
//      title: String,
//      poster_path: string | null,
//      overview: String,
//      release_date: String,
//      vote_average: number,
//      genre_ids: 'genre_ids' in input ? input.genre_ids : [],
//    };
//  };

// const normalizeFavorite = (input: Movie | DetailResponse): FavoriteMovie => {
//   return {
//     id: input.id,
//     title: input.title,
//     poster_path: input.poster_path,
//   };
// };

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

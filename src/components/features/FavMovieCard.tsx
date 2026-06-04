import type { Movie } from '@/types/movie';

type FavMovieCardProps = {
  movie: Movie;
};

export default function FavMovieCard({ movie }: FavMovieCardProps) {
  return (
    <div>
      <h3>{movie.title}</h3>
    </div>
  );
}

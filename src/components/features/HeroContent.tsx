import type { Movie } from '@/types/movie';
import HeroButton from '../features/heroButton';

interface HeroContentProps {
  movie: Movie;
}

export default function HeroContent({ movie }: HeroContentProps) {
  return (
    <div className="absolute inset-0 z-20">
      <h1>{movie.title}</h1>
      <p>{movie.overview}</p>
      <HeroButton movie={movie} />
    </div>
  );
}

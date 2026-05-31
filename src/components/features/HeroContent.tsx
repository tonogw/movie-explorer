import type { Movie } from '@/types/movie';
import HeroButton from '../features/heroButton';

interface HeroContentProps {
  movie: Movie;
}

export default function HeroContent({ movie }: HeroContentProps) {
  return (
    <div className="absolute inset-0 z-20">
      <div className="max-w-360 mx-auto px-35 pt-75">
        <h1 className="text-5xl font-bold">{movie.title}</h1>
        <p className="mt-4 max-w-2xl">{movie.overview}</p>
        <HeroButton movie={movie} />
      </div>
    </div>
  );
}

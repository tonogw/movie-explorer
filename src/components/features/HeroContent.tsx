import type { Movie } from '@/types/movie';
import HeroButton from '@/components/features/HeroButton';

interface HeroContentProps {
  movie: Movie;
}

export default function HeroContent({ movie }: HeroContentProps) {
  return (
    <div className="absolute inset-0 z-20">
      <div className="max-w-360 mx-auto px-2 lg:pl-35 pt-75 text-[#FDFDFD]">
        <h1 className="text-5xl font-bold">{movie.title}</h1>
        <p className="mt-4 max-w-2xl ">{movie.overview}</p>

        <HeroButton movie={movie} />
      </div>
    </div>
  );
}

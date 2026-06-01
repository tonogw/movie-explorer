import { getImageUrl } from '@/lib/utils';
import { useTrendingMovies } from '@/hooks/useMovies';
import { IMAGE_SIZES } from '@/lib/constants';
import HeroContent from './HeroContent';
// import { Link } from 'react-router-dom';

export default function HeroSection() {
  const { data: trendingMovies, isLoading: trendingLoading, isError } = useTrendingMovies('week');

  const movies = trendingMovies?.results ?? [];
  const heroMovie = movies.length > 0 ? movies[0] : null;
  // LOADING
  if (trendingLoading) {
    return <div>Loading trending moview . . .</div>;
  }
  //   // ERROR
  if (isError) {
    return <div>Failed to fetch movies</div>;
  }

  if (!heroMovie) {
    return null;
  }

  //   RENDER
  return (
    <section id="home" className="relative  h-150 md:h-175 lg:h-225">
      <img
        src={getImageUrl(heroMovie.backdrop_path, IMAGE_SIZES.backdrop.original)}
        alt={heroMovie.title}
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      <div className="overlay absolute inset-0 bg-linear-to-t from-black via-transparent  to-transparent" />
      {/* <div className="min-w-97.5 min-h-97 lg:max-h-225 lg:max-w-360 absolute inset-0 bg-linear-to-t from-black via-transparent  to-transparent " /> */}

      <HeroContent movie={heroMovie} />
    </section>
  );
}

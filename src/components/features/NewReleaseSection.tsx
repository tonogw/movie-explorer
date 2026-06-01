import { useNowPlayingMovies } from '@/hooks/useMovies';
import MovieCard from './MovieCard';
import type { Movie } from '@/types/movie';

export default function NewReleaseSection() {
  const { data, isLoading, isError } = useNowPlayingMovies();

  if (isLoading) {
    return <div>Loading movies...</div>;
  }

  if (isError) {
    return <div>Failed to fetch movies...</div>;
  }

  const releases: Movie[] = data?.results ?? [];

  return (
    <section className="relative z-30 px-2 md:px-10 lg:px-35 pt-2 md:pt-5 lg:pt-20 bg-black text-[#FDFDFD]">
      <h2 className="text-4xl font-bold mb-10">New Release</h2>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
        {releases.slice(0, 10).map((movie) => (
          //   <div key={movie.id} className="group block min-w-43.25 min-h-66.5 lg:w-55">
          <div key={movie.id} className="">
            <MovieCard movie={movie} />
          </div>
        ))}
        {/* <div className="lg:max-h-225 absolute inset-0 bg-linear-to-t from-black via-transparent  to-transparent " /> */}
        <button
          onClick={() => console.log('LOAD MORE clicked')}
          className="col-span-full flex font-bolt items-center justify-center w-57.5 h-13 text-base border border-gray-600 rounded-full  bg-black/20 backdrop-opacity-15 text-[#FDFDFD]"
        >
          Load More
        </button>
      </div>
    </section>
  );
}

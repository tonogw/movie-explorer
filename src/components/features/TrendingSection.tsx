import { useTrendingMovies } from '@/hooks/useMovies';
import MovieCard from './MovieCard';
// import useGridColumns from '@/hooks/useGridColumns';
// columnimport { useCardWidth } from '@/hooks/useCardWidth';

interface TrendingSectionProps {
  cardWidth: number;
}

export default function TrendingSection({ cardWidth }: TrendingSectionProps) {
  //   const columns = useGridColumns();

  const { data, isLoading, isError } = useTrendingMovies('week');

  if (isLoading) {
    return <div>Loading trending movies...</div>;
  }

  if (isError) {
    return <div>Failed to fetch trending movies...</div>;
  }

  const movies = data?.results ?? [];

  //   const cardWidth = columns === 5 ? 'w-55' : columns === 3 ? 'w-50' : 'w-43.25';

  return (
    <section className="relative z-20 pt-5 lg:pt-10 px-2 md:px-20 lg:px-35 bg-black text-[#FDFDFD]">
      {/* TRENDING MOVIE TITLE  */}
      <h2 className="h-10 text-4xl font-bold">Trending Now</h2>

      <div className="mx-auto pt-10 flex gap-4 lg:gap-5 overflow-x-auto scrollbar-hide">
        <div className="col-start-6 bg-linear-to-l from-gray-900 via-black/0 to-transparent  " />
        {movies.map((movie) => (
          // min-w-43.25 lg:max-w-55 min-h-66.5 lg:w-55
          // overflow-x-hidden
          //   group block min-w-43.25 lg:max-w-55 min-h-66.5 lg:w-55
          //   scrollbar-hide

          <div
            key={movie.id}
            className="
                shrink-0 
              "
            style={{ width: cardWidth > 0 ? `${cardWidth}px` : undefined }}
          >
            <MovieCard movie={movie} />
          </div>
        ))}
      </div>
    </section>
  );
}

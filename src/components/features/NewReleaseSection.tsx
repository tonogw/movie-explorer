import { useNowPlayingMovies } from '@/hooks/useMovies';
import MovieCard from './MovieCard';
import type { Movie } from '@/types/movie';
import { useEffect, useRef, useState } from 'react';
import useGridColumns from '@/hooks/useGridColumns';

interface NewReleaseSectionProps {
  onWidthChange: (width: number) => void;
}

export default function NewReleaseSection({ onWidthChange }: NewReleaseSectionProps) {
  const columns = useGridColumns();
  //   const { ref, width } = useColumnWidth();

  const firstCardRef = useRef<HTMLDivElement>(null);

  const [visibleCount, setVisibleCount] = useState(10);
  const { data, isLoading, isError } = useNowPlayingMovies();
  const releases: Movie[] = data?.results ?? [];

  useEffect(() => {
    const updateWidth = () => {
      if (firstCardRef.current) {
        const cardWidth = firstCardRef.current.getBoundingClientRect().width;

        onWidthChange(cardWidth);
      }
    };
    updateWidth();

    window.addEventListener('resize', updateWidth);

    return () => window.removeEventListener('resize', updateWidth);
  }, [releases, onWidthChange]);

  if (isLoading) {
    return <div>Loading movies...</div>;
  }

  if (isError) {
    return <div>Failed to fetch movies...</div>;
  }

  const loadMore = () => {
    setVisibleCount((prev) => prev + columns);
  };

  return (
    <section className="relative z-30 px-2 md:px-10 lg:px-35 pt-2 md:pt-5 lg:pt-20 bg-black text-[#FDFDFD]">
      <h2 className="text-4xl font-bold mb-10">New Release </h2>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
        {releases.slice(0, visibleCount).map((movie, index) => (
          //   min-w-43.25 min-h-66.5 lg:w-55
          <div key={movie.id} ref={index === 0 ? firstCardRef : undefined} className="group block ">
            <MovieCard movie={movie} />
          </div>
        ))}
      </div>

      <div className="col-span-full flex justify-center mt-8">
        <button
          onClick={loadMore}
          className="
             w-full h-13 max-w-57.5 text-base border border-gray-600 rounded-full  bg-black/20 backdrop-opacity-15 text-[#FDFDFD]
            "
        >
          Load More
        </button>
      </div>
    </section>
  );
}

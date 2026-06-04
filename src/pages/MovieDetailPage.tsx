import { useParams } from 'react-router-dom';
import { useMovieCredits, useMovieDetail, useWatchTrailer } from '@/hooks/useMovies';

import MobileLayout from '@/components/layout/MobileLayout';
import DesktopLayout from '@/components/layout/DesktopLayout';
// import { useMovieStore } from '@/store/movieStore';
// import { Button } from '@/components/ui/button';
// import { useMovieStore } from '@/store/movieStore';
// import { Heart, HeartIcon } from 'lucide-react';
// import FavButton from '@/components/ui/FavButton';
// import { getImageUrl } from '@/lib/utils';

export default function MovieDetailPage() {
  const { movieId } = useParams();

  const { data, isLoading } = useMovieDetail(Number(movieId));
  const { data: credits } = useMovieCredits(Number(movieId));
  const { data: trailerData } = useWatchTrailer(Number(movieId));

  // const toggleFavorite = useMovieStore((state) => state.toggleFavorite);

  // const isFavorite = useMovieStore((state) => (data ? state.isFavorite(data.id) : false));

  if (isLoading || !data || !credits || !trailerData) {
    return <div>Loading movie details ... </div>;
  }

  const trailer = trailerData?.results?.find(
    (video) => video.site === 'YouTube' && video.type === 'Trailer'
  );

  return (
    <>
      <div className="md:hidden">
        <MobileLayout
          data={data}
          credits={credits}
          trailer={trailer}
          // isFavorite={isFavorite}
          // toggleFavorite={() => toggleFavorite(data)}
        />

        {/* <Button
          disabled={!trailer}
          onClick={() => {
            if (trailer) {
              window.open(`https://youtube.com/watch?v=${trailer.key}`, '_blank');
            }
          }}
        >
          Watch Trailer
        </Button> */}
      </div>

      <div className="hidden md:block">
        <DesktopLayout
          data={data}
          credits={credits}
          trailer={trailer}
          // isFavorite={isFavorite}
          // toggleFavorite={() => toggleFavorite(data)}
        />
      </div>
    </>
  );
}

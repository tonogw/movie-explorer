import { useParams } from 'react-router-dom';
import { useMovieCredits, useMovieDetail, useWatchTrailer } from '@/hooks/useMovies';

import MobileLayout from '@/components/layout/MobileLayout';
import DesktopLayout from '@/components/layout/DesktopLayout';
import Navbar from '@/components/layout/Navbar';

export default function MovieDetailPage() {
  const { movieId } = useParams();

  const { data, isLoading } = useMovieDetail(Number(movieId));
  const { data: credits } = useMovieCredits(Number(movieId));
  const { data: trailerData } = useWatchTrailer(Number(movieId));

  if (isLoading || !data || !credits || !trailerData) {
    return <div>Loading movie details ... </div>;
  }

  const trailer = trailerData?.results?.find(
    (video) => video.site === 'YouTube' && video.type === 'Trailer'
  );
  return (
    <>
      <Navbar />
      <div className="md:hidden">
        <MobileLayout data={data} credits={credits} trailer={trailer} />
      </div>

      <div className="hidden md:block">
        <DesktopLayout data={data} credits={credits} trailer={trailer} />
      </div>
    </>
  );
}

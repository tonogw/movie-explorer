// import Navbar from '@/components/layout/Navbar';
import { useParams } from 'react-router-dom';
// import { getImageUrl } from '@/lib/utils';
// import { useMovieDetail } from '@/hooks/useMovies';
// import {getMovieDetails} from "../services/movieService";
import { useMovieCredits, useMovieDetail, useWatchTrailer } from '@/hooks/useMovies';
// import { IMAGE_SIZES } from '@/lib/constants';
// import { Link } from 'react-router-dom';
// import { Button } from '@/components/ui/button';
// import { Star, Video, Heart, BabyIcon, Calendar } from 'lucide-react';
// import MovieCard from '@/components/features/MovieCard';
// import { Video } from 'lucide-react';
// import Footer from '@/components/layout/Footer';
import MobileLayout from '@/components/layout/MobileLayout';
import DesktopLayout from '@/components/layout/DesktopLayout';
// import { useMovieStore } from '@/store/movieStore';
import { Button } from '@/components/ui/button';
// import { getImageUrl } from '@/lib/utils';

export default function MovieDetailPage() {
  const { movieId } = useParams();

  const { data, isLoading } = useMovieDetail(Number(movieId));
  const { data: credits } = useMovieCredits(Number(movieId));
  const { data: trailerData } = useWatchTrailer(Number(movieId));

  // const toggleFavorite = useMovieStore((state) => state.toggleFavorite);

  // const isFavorite = useMovieStore((state) => state.isFavorite(data?.id));
  if (isLoading || !data || !credits || !trailerData) {
    return <div>Loading movie details ... </div>;
  }

  const trailer = trailerData?.results?.find(
    (video) => video.site === 'YouTube' && video.type === 'Trailer'
  );

  return (
    <>
      <div className="md:hidden">
        <MobileLayout data={data} credits={credits} trailer={trailer} />
        <Button
          disabled={!trailer}
          onClick={() => {
            if (trailer) {
              window.open(`https://youtube.com/watch?v=${trailer.key}`, '_blank');
            }
          }}
        >
          Watch Trailer
        </Button>
      </div>

      <div className="hidden md:block">
        <DesktopLayout data={data} credits={credits} trailer={trailer} />
      </div>
    </>
  );
}

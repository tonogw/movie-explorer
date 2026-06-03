// import Navbar from '@/components/layout/Navbar';
import { useParams } from 'react-router-dom';
// import { getImageUrl } from '@/lib/utils';
// import { useMovieDetail } from '@/hooks/useMovies';
// import {getMovieDetails} from "../services/movieService";
import { useMovieCredits, useMovieDetail } from '@/hooks/useMovies';
// import { IMAGE_SIZES } from '@/lib/constants';
// import { Link } from 'react-router-dom';
// import { Button } from '@/components/ui/button';
// import { Star, Video, Heart, BabyIcon, Calendar } from 'lucide-react';
// import MovieCard from '@/components/features/MovieCard';
// import { Video } from 'lucide-react';
// import Footer from '@/components/layout/Footer';
import MoobileLayout from '@/components/layout/MobileLayout';
import DesktopLayout from '@/components/layout/DesktopLayout';
// import { getImageUrl } from '@/lib/utils';

export default function MovieDetailPage() {
  const { movieId } = useParams();

  const { data, isLoading } = useMovieDetail(Number(movieId));
  const { data: credits } = useMovieCredits(Number(movieId));

  if (isLoading) {
    return <div>Loading movie details ... </div>;
  }

  return (
    <>
      <div className="md:hidden">
        <MoobileLayout data={data} credits={credits} />
      </div>

      <div className="hidden md:block">
        <DesktopLayout data={data} credits={credits} />
      </div>
    </>
  );
}

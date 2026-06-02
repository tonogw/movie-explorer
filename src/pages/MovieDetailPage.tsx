import Navbar from '@/components/layout/Navbar';
import { useParams } from 'react-router-dom';
import { getImageUrl } from '@/lib/utils';
// import { useMovieDetail } from '@/hooks/useMovies';
// import {getMovieDetails} from "../services/movieService";
import { useMovieDetail } from '@/hooks/useMovies';
import { IMAGE_SIZES } from '@/lib/constants';
import { Link } from 'react-router-dom';
// import { getImageUrl } from '@/lib/utils';

export default function MovieDetailPage() {
  const { movieId } = useParams();

  const { data, isLoading } = useMovieDetail(Number(movieId));

  if (isLoading) {
    return <div>Loading movie details ... </div>;
  }

  return (
    <>
      <div className="bg-black text-[#FDFDFD] ">
        <div>
          <img
            src={getImageUrl(data?.backdrop_path, IMAGE_SIZES.backdrop.original)}
            alt={data?.title}
          />
        </div>

        <div className="z-50">
          <Navbar />
        </div>
        <br />
        <br />

        <br />
        <br />
        <br />
        <h1 className="text-4xl text-center">Movie Detail</h1>
        <p>Movie ID: {movieId}</p>
      </div>
    </>
  );
}

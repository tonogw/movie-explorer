import Navbar from '@/components/layout/Navbar';
import { useParams } from 'react-router-dom';
// import { useMovieDetail } from '@/hooks/useMovies';

export default function MovieDetailPage() {
  const { movieId } = useParams();

  //   const { data, isLoading } = useMovieDetail(Number(id));
  return (
    <>
      <div className="bg-black text-[#FDFDFD]  pt-10">
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

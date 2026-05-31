import { useParams } from 'react-router-dom';
// import { useMovieDetail } from '@/hooks/useMovies';

export default function MovieDetailPage() {
  const { movieId } = useParams();

  //   const { data, isLoading } = useMovieDetail(Number(id));
  return (
    <div className="bg-black text-[#FDFDFD] text-4xl text-center pt-10">
      <h1>Movie Detail</h1>
      <p>Movie ID: {movieId}</p>
    </div>
  );
}

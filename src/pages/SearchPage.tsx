import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import FavMovieCard from '@/components/features/FavMovieCard';

import { useSearchParams } from 'react-router-dom';
import { useSearchMovies } from '@/hooks/useMovies';
import { Clapperboard } from 'lucide-react';
// import { getImageUrl } from '@/lib/utils';
// import { IMAGE_SIZES } from '@/lib/constants';
// import MovieCard from '@/components/features/MovieCard';

export default function SearchPage() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q') || '';
  const { data, isLoading } = useSearchMovies(query);
  const movies = data?.results || [];

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      <main className="max-w-290 mx-auto  pt-24">
        {!query ? (
          <p className="text-gray-400 text-center mt-20">Type keyword to search movies</p>
        ) : isLoading ? (
          <p className="text-gray-400 text-center mt-20 ">Loading movies . . .</p>
        ) : movies.length === 0 ? (
          <div>
            <Clapperboard size={72} />
            <h3 className="text-center mt-20">Data Not Found</h3>
            <p className="text-gray-500">Try another keyword</p>
          </div>
        ) : (
          <div>
            {movies.map((movie) => (
              <FavMovieCard key={movie.id} movie={movie} />
            ))}
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}

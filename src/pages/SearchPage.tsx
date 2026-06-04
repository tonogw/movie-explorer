import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import FavMovieCard from '@/components/features/FavMovieCard';
import { useSearchMovies } from '@/hooks/useMovies';
import { useSearchParams } from 'react-router-dom';
import { Clapperboard } from 'lucide-react';

export default function SearchPage() {
  const [searchParams] = useSearchParams();

  const query = searchParams.get('q') || '';

  const { data, isLoading } = useSearchMovies(query);

  const movies = data?.results || [];

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      <main id="search-page" className="max-w-[1160px] mx-auto px-4 pt-24">
        {isLoading ? (
          <div className="flex items-center justify-center min-h-[70vh]">
            <p>Loading movie...</p>
          </div>
        ) : movies.length === 0 ? (
          <div className="flex items-center justify-center min-h-[70vh]">
            <div className="w-[300px] h-[358px] flex flex-col items-center justify-center text-center">
              <Clapperboard size={72} className="text-gray-500" />

              <h3 className="mt-4 text-gray-400">Data Not Found</h3>

              <p className="mt-3 text-gray-400">Try other keywords</p>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-4">
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

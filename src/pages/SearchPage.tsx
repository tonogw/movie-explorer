import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import FavMovieCard from '@/components/features/FavMovieCard';

import { useSearchParams } from 'react-router-dom';
import { useSearchMovies } from '@/hooks/useMovies';

export default function SearchPage() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q') || '';
  const { data, isLoading } = useSearchMovies(query);
  const movies = data?.results || [];

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      <main className="max-w-[1160px] mx-auto px-4 pt-24">
        {isLoading ? (
          <p>Loading movies . . . </p>
        ) : (
          movies.map((movie) => <FavMovieCard key={movie.id} movie={movie} />)
        )}
        {/* <h1>Search Page</h1> */}
      </main>

      <Footer />
    </div>
  );
}

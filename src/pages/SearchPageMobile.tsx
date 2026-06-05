import Footer from '@/components/layout/Footer';
import FavMovieCard from '@/components/features/FavMovieCard';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { useSearchMovies } from '@/hooks/useMovies';
import { Clapperboard, ArrowLeft, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function SearchPageMobile() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q') || '';
  const { data, isLoading } = useSearchMovies(query);
  const movies = data?.results || [];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* <Navbar /> */}
      <header
        className="
        fixed top-0 left-0 right-0 h-20
        bg-black border-b border-zinc-800
        flex items-center gap-3 px-4 z-50
        "
      >
        <Button onClick={() => navigate(-1)} className="shrink-0">
          <ArrowLeft size={20} />
        </Button>

        <div className="relative flex-1">
          <Search size={20} className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400" />
          <input
            type="text"
            value={query}
            readOnly
            className="w-full pl-10 pr-4 py-2 bg-zinc-900 border border-zinc-800 rounded-md text-white focus:outline-none"
          />
        </div>
      </header>
      <main id="search-mobile" className="max-w-290 mx-auto border pt-24">
        {!query ? (
          <p className="text-gray-400 text-center mt-20">Type keyword to search movies</p>
        ) : isLoading ? (
          <p className="text-gray-400 text-center mt-20 ">Loading movies . . .</p>
        ) : movies.length === 0 ? (
          <div>
            <Clapperboard size={72} className="items-center" />
            <h3 className="text-center mt-20">Data Not Found</h3>
            <p className="text-center text-gray-500 ">Try another keyword</p>
          </div>
        ) : (
          <div className="border">
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

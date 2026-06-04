import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
// import type { Movie } from '@/types/movie';
import { useMovieStore } from '@/store/movieStore';
import MovieCard from '@/components/features/MovieCard';
import { Clapperboard } from 'lucide-react';
import { Link } from 'react-router-dom';
import FavMovieCard from '@/components/features/FavMovieCard';

//  interface FavoritesPageProps {
//     movie: Movie;
// }

export default function FavoritesPage() {
  const favorites = useMovieStore((state) => state.favorites);

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <main id="favorites" className="max-w-[1160px] mx-auto px-4 pt-24">
        <h1 className="text-3xl font-bold mb-8">Favorites Movie</h1>
        {favorites.length === 0 ? (
          <div className="flex items-center justify-center min-h-70vh">
            <div className="w-[300px] h-[358px] flex flex-col items-center justify-center text-center ">
              <Clapperboard size={72} className="#A4A7AE" />

              <h3 className="text-gray-400">Data Empty</h3>
              <p className="mt-3 text-gray-400">You don't have any favorite movie yet</p>
              <Link
                to="/"
                className="mt-8 w-full h-12 flex
              items-center justify-center rounded-full
              bg-[#961200] transition-colors
              "
              >
                Explore Movies
              </Link>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 ">
            {favorites.map((movie) => (
              <FavMovieCard movie={movie} key={movie.id} />
            ))}
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}

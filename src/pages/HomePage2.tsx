import { getImageUrl } from '@/lib/utils';
import { useTrendingMovies, useNowPlayingMovies } from '../hooks/useMovies';

import { useState } from 'react';

import { LucideTv, Play, Search } from 'lucide-react';
import { IMAGE_SIZES } from '@/lib/constants';
import { Link } from 'react-router-dom';
// import MovieCard from '@/components/features/MovieCard';

export default function HomePage2() {
  const [searchQuery, setSearchQuery] = useState('');
  const { data: trendingMovies, isLoading: trendingLoading, isError } = useTrendingMovies('week');
  // const { data: popularMovies, isLoading: popularLoading } = usePopularMovies();

  const { data: nowPlayingMovies, isLoading: playingLoading } = useNowPlayingMovies();
  //   const { data: newReleaseMovies, isLoading: releaseLoading } = useNewReleaseMovies('ID');

  //   const releases = nowPlayingMovies?.results ?? [];

  if (playingLoading) {
    return <div>Loading new release... </div>;
  }
  if (isError) {
    return <div>Failed to fetch new release ... </div>;
  }

  const movies = trendingMovies?.results ?? [];

  const heroMovie = movies.length > 0 ? movies[0] : null;

  if (trendingLoading) {
    return <div>Loading trending movies...</div>;
  }
  // ERROR
  if (isError) {
    return <div>Failed to fetch movies</div>;
  }

  return (
    <div id="home">
      <section>
        <img
          src={getImageUrl(heroMovie?.backdrop_path, IMAGE_SIZES.backdrop.large)}
          alt={heroMovie?.title}
          className="absolute inset-0 w-full lg:max-h-225 object-cover z-0"
        />
        <div className="lg:max-h-225 absolute inset-0 bg-linear-to-t from-black via-transparent  to-transparent " />
      </section>

      <header className="absolute top-0 left-0 w-full z-50">
        <div className="max-w-360 mx-auto px-35">
          <div className="pt-10 grid grid-cols-5 items-center h-24 ">
            {/* COL-1 */}
            <div className="absolute flex items-center gap-2">
              <LucideTv size={32} className="fill-yellow-400" />
              <span className="font-bold text-4xl ">Movie</span>
            </div>
            {/* COL-2 */}
            <nav className="col-start-2  flex  items-center justify-center gap-8 text-base font-semibold z-50">
              <a href="#home">Home</a>
              <a href="#favorites">Favorites</a>
            </nav>
            <div className="col-start-5">
              <div className="relative ">
                <Search
                  size={18}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                />

                <input
                  id="search-movie"
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search Movie"
                  className="w-full pl-10 rounded-lg h-10 bg-gray-700 text-white placeholder:text-gray-400"
                />
              </div>
            </div>

            <div className="grid grid-cols-subgrid col-span-2">
              <h1 className="row-start-2 col-start-1 pt-[298px] text-5xl  font-bold ">
                {heroMovie?.title}
              </h1>

              <p className="col-span-2 row-start-3 pt-2  text-base">{heroMovie?.overview}</p>

              <button
                onClick={() => console.log('clicked')}
                className="row-start-4 col-start-1 relative flex justify-center items-center w-full h-12 gap-2 font-bold text-center text-base text-white   bg-[#961200] rounded-full z-50"
              >
                <span>Watch Trailer</span>
                <Play
                  size={24}
                  className=" bg-white fill-[#961200] rounded-full items-end cursor-pointer"
                />
              </button>
              <Link
                to={`/movie/${heroMovie?.id}`}
                className="row-start-4 col-start-2 flex h-12 items-center justify-center  text-center align-middle z-50"
              >
                See Detail
              </Link>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

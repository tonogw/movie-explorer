// import { getImageUrl } from '@/lib/utils';
import { getImageUrl } from '@/lib/utils';
import {
  //   usePopularMovies,
  useTrendingMovies,
  //   useWatchTrailer,
  useNowPlayingMovies,
  // useNewReleaseMovies,
  //   useMovieDetail,
  //   useSearchMovies,
} from '../hooks/useMovies';

import { useState } from 'react';

import { LucideTv, Play, Search } from 'lucide-react';
import { IMAGE_SIZES } from '@/lib/constants';
import { Link } from 'react-router-dom';
import MovieCard from '@/components/features/MovieCard';
// import { useSearchParams } from 'react-router-dom';

// const movies = trendingMovies?.results ?? [];

export default function HomePage() {
  const [searchQuery, setSearchQuery] = useState('');
  const { data: trendingMovies, isLoading: trendingLoading, isError } = useTrendingMovies('week');
  // const { data: popularMovies, isLoading: popularLoading } = usePopularMovies();

  const { data: nowPlayingMovies, isLoading: playingLoading } = useNowPlayingMovies();
  //   const { data: newReleaseMovies, isLoading: releaseLoading } = useNewReleaseMovies('ID');

  const releases = nowPlayingMovies?.results ?? [];

  if (playingLoading) {
    return <div>Loading new release... </div>;
  }
  if (isError) {
    return <div>Failed to fetch new release ... </div>;
  }

  // const play = nowPlayingMovies?.results ?? [];
  // const playing = play.length > 0 ? play[0]:null;
  //   FALLBACK EMPTY ARRAY

  //   const { data: videoData } = useWatchTrailer(heroMovie?.id ?? 0);

  //   const trailer = videoData?.results?.find(
  //     (video) => video.site === 'YouTube' && video.type === 'Trailer'
  //   );

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
      <img
        // src={`https://image.tmdb.org/t/p/original${heroMovie?.backdrop_path}`}
        src={getImageUrl(heroMovie?.backdrop_path, IMAGE_SIZES.backdrop.large)}
        alt={heroMovie?.title}
        className="absolute inset-0 w-full lg:max-h-225 object-cover z-0"
      />
      <div className="lg:max-h-225 absolute inset-0 bg-linear-to-t from-black via-transparent  to-transparent pb-20 " />

      <header className="absolute top-0 left-0 w-full z-50">
        <div className="max-w-360 mx-auto px-35">
          <div className="grid grid-cols-5 items-center h-24 ">
            {/* COL-1 */}
            <div className="absolute flex items-center gap-2">
              <LucideTv size={32} className="fill-yellow-400" />
              <span className="font-bold text-4xl ">Movie</span>
            </div>
            {/* COL-2 */}
            <nav className="flex gap-8 text-base font-semibold">
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
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className=" pb-25 z-30">
        <div className="absolute inset-0  flex flex-col justify-center  items-start">
          <div className="my-auto max-w-158.75 max-h-66.5 pl-35">
            <h1 className="text-5xl  font-bold ">{heroMovie?.title}</h1>
            <p className="text-base">{heroMovie?.overview}</p>
            <div className="mt-12 grid grid-cols-2">
              <div className="relative">
                <button
                  onClick={() => console.log('clicked')}
                  className="relative flex justify-center items-center w-full h-12 gap-2 font-bold text-center text-base text-white   bg-[#961200] rounded-full z-50"
                >
                  <span>Watch Trailer</span>
                  <Play
                    size={24}
                    className=" bg-white fill-[#961200] rounded-full items-end cursor-pointer"
                  />
                </button>
              </div>

              <Link
                to={`/movie/${heroMovie?.id}`}
                className="flex h-12 justify-center items-center text-center align-middle z-50"
              >
                See Detail
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* TRENDING NOW */}
      <section className="relative z-20 lg:pt-202.5 px-35">
        <h2 className="h-10 text-4xl font-bold">Trending Now</h2>
        <div className="pt-10 flex gap-5 overflow-x-auto ">
          <div className="col-start-6 bg-linear-to-l from-gray-900 via-black/0 to-transparent  " />
          {movies.map((movie) => (
            <div
              key={movie.id}
              className="
            overflow-x-hidden
            group block min-w-55
            scrollbar-hide

            "
            >
              <MovieCard movie={movie} />
            </div>
          ))}
        </div>
      </section>

      {/* NEW RELEASE */}
      <section className="relative z-30 px-35 pt-20">
        <h2 className="text-4xl font-bold mb-10">New Release</h2>
        {playingLoading ? (
          <p>Loading . . . </p>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
            {releases.map((movie) => (
              // console.log(movie.title, movie.poster_path);
              <div key={movie.id} className="group">
                <MovieCard movie={movie} />

                {/* <img
                  //   src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  src={getImageUrl(movie.poster_path, IMAGE_SIZES.poster.large)}
                  alt={movie.title}
                  className="
                        rounded-xl
                        transition
                        duration-300
                        group-hover:scale-105
                        "
                />
                <div className="mt-4">
                  <h3 className="font-semibold line-clamp-1">{movie.title}</h3>
                  <div className="flex items-center gap-2">
                    <Star size={16} className="fill-yellow-400 text-yellow-400" />
                    <span className="text-yellow-400">{movie.vote_average.toFixed(1)}</span>
                  </div>
                </div> */}
              </div>
            ))}
          </div>
        )}
        <button className="rounded-full font-bolt items-center w-57.5 h-13 text-base bg-gray-800 text-[#FDFDFD]">
          Load More
        </button>
      </section>

      {/* FOOTER */}
      <footer className="h-30 flex justify-between">
        <div className="flex pl-35">
          <LucideTv size={32} />
          <span className="font-bold text-4xl">Movie</span>
          <p className="text-right ">Copyright &copy;2025 Movie Explorer</p>
        </div>
      </footer>
    </div>
  );
}

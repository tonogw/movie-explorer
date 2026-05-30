import {
  //   usePopularMovies,
  useTrendingMovies,
  //   useNowPlayingMovies,
  //   useNewReleaseMovies,
  //   useMovieDetail,
} from '../hooks/useMovies';

import { LucideTv, Play, Search, Star } from 'lucide-react';

// const movies = trendingMovies?.results ?? [];

export default function HomePage() {
  const { data: trendingMovies, isLoading: trendingLoading, isError } = useTrendingMovies('week');
  // const { data: popularMovies, isLoading: popularLoading } = usePopularMovies();

  // const { data: nowPlayingMovies, isLoading: playingLoading } = useNowPlayingMovies();
  //   const { data: newReleaseMovies, isLoading: releaseLoading } = useNewReleaseMovies('ID');

  //   FALLBACK EMPTY ARRAY
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
    <div id="home" className="bg-linear-to-t from-black to-0%">
      <img
        src={`https://image.tmdb.org/t/p/original${heroMovie?.backdrop_path}`}
        alt={heroMovie?.title}
        className="absolute inset-0 w-full h-full object-cover z-0"
      />
      <div className="absolute inset-0 bg-linear-to-t from-black via-transparent  to-transparent pb-20 z-20" />

      <header className="absolute top-0 left-0 w-full z-50">
        <div className="max-w-360 mx-auto px-35">
          <div className="grid grid-cols-5 items-center h-24 ">
            {/* COL-1 */}
            <div className="flex items-center gap-2">
              <LucideTv size={32} />
              <span className="font-bold text-4xl ">Movie</span>
            </div>
            {/* COL-2 */}
            <nav className="flex gap-8 text-base font-semibold">
              <a href="#home">Home</a>
              <a href="#favorites">Favorites</a>
            </nav>
            <div className="col-start-5">
              <div className="relative flex justify-center items-center">
                <Search size={18} className="absolute items-start" />
                <input
                  id="search-movie"
                  placeholder="Search Movie"
                  type="text"
                  className="w-full rounded-lg h-10 bg-gray-700"
                />
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className="absolute inset-0 z-20 flex flex-col justify-center  items-start">
        <div className="max-w-158.75 pl-35">
          <h1 className="text-5xl  font-bold  z-60">{heroMovie?.title}</h1>
          <p className="text-base">{heroMovie?.overview}</p>
          <div className="mt-12 grid grid-cols-2">
            <div className="relative">
              <button className="flex justify-center items-center w-full h-12 gap-2 font-bold text-center text-base text-white   bg-[#961200] rounded-full">
                <span>Watch Trailer</span>
                <Play size={24} className=" bg-white fill-[#961200] rounded-full items-end" />
              </button>
            </div>

            <a
              href={`/movie/${heroMovie?.id}`}
              className="flex h-12 justify-center items-center text-center align-middle"
            >
              See Detail
            </a>
          </div>
        </div>
      </div>

      <div className=" px-35">
        <div className="flex gap-6 overflow-x-auto">
          {movies.map((movie) => (
            <div
              key={movie.id}
              className="
            min-w-55
            overflow-x-hidden
            "
            >
              <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
              <div className="p-4 ">
                <h3 className="font-semibold ">{movie.title}</h3>
                <div className="flex gap-4">
                  <Star size={16} className="fill-yellow-400 text-yellow-400" />
                  <span className="text-yellow-400 text-base">{movie.vote_average.toFixed(1)}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* NEW RELEASE MOVIES SECTION */}
      {/* <div className="grid grid-cols-5"
      key={newReleaseMovies?.region}
      >
        {newReleaseMovies?.list}
        <img src={Star size(28)} alt="Rating" />
        <span>
            {newReleaseMovies.vote}
        </span>
        <button>Load more</button>
      </div> */}
      <footer>
        {/* <img src="" alt="movie logo app" /> */}
        <p>Copyright &copy;2025 Movie Explorer</p>
      </footer>
    </div>
  );
}

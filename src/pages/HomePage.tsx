import {
  //   usePopularMovies,
  useTrendingMovies,
  //   useNowPlayingMovies,
  //   useNewReleaseMovies,
  //   useMovieDetail,
} from '../hooks/useMovies';

import { Star } from 'lucide-react';

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
      />
      <header>
        <div className="flex ">
          {/* <img src="" alt="Movie App Logo" /> */}
          <nav>
            <a href="#home">Home</a>
            <a href="#favorites">Favorites</a>

            <input id="search-movie" type="text" className="h-9 bg-gray-700" />
          </nav>
        </div>
      </header>
      <h1>{heroMovie?.title}</h1>
      <p>{heroMovie?.overview}</p>

      <div className="grid ">
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
                <h3 className="font-semibold">{movie.title}</h3>
                <div>
                  <Star size={16} className="" />
                  <span>{movie.vote_average.toFixed(1)}</span>
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

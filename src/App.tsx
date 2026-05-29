import './index.css';

import {
  usePopularMovies,
  useTrendingMovies,
  useNowPlayingMovies,
  useNewReleaseMovies,
} from './hooks/useMovies';

function App() {
  // TODO: Setup routing dengan React Router
  // TODO: Implement layout structure
  // TODO: Add navigation between pages
  // { data, isLoading, isError }

  const { data, isLoading } = usePopularMovies();
  const { data: trendingData, isLoading: trendingLoading } = useTrendingMovies('week');

  const { data: useNowPlayingData, isLoading: playingLoading } = useNowPlayingMovies();

  const { data: useNewReleaseData, isLoading: releaseLoading } = useNewReleaseMovies('ID');

  return (
    <div className="min-h-screen bg-background bg-black text-[#FDFDFD]">
      <header className="border-b">
        <div className="container mx-auto px-4 py-4">
          <h1 className="text-2xl font-bold">Movie Explorer</h1>
          {/* TODO: Add navigation menu */}
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {isLoading && <h2>Loading movies . . . </h2>}

        <div className="text-center space-y-4">
          {data?.results.map((movie) => (
            <div key={movie.id} className="border p-4 rounded-lg">
              <h2 className="text-xl font-bold">{movie.title}</h2>

              <p>
                rating:
                {movie.vote_average}
              </p>

              <p>
                Release:
                {movie.release_date}
              </p>
            </div>
          ))}

          <h2 className="text-4xl font-bold">Challenge 9 - Movie App</h2>
          <p className="text-muted-foreground">
            Mulai dengan membaca README.md untuk instruksi lengkap!
          </p>

          <div className="mt-8 p-6 border rounded-lg bg-card">
            <h3 className="text-xl font-semibold mb-2">Langkah Pertama:</h3>
            <ol className="text-left space-y-2 max-w-2xl mx-auto">
              <li>1. Copy file .env.example menjadi .env</li>
              <li>2. Daftar di TheMovieDB dan dapatkan API key</li>
              <li>3. Isi VITE_TMDB_API_KEY di file .env</li>
              <li>4. Jalankan npm install untuk menginstall dependencies</li>
              <li>5. Mulai develop dengan npm run dev</li>
            </ol>
          </div>
        </div>

        {/* TODO: Replace this with your actual application routes and components */}
      </main>
    </div>
  );
}

export default App;

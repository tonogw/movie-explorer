import './index.css';
import { Routes, Route } from 'react-router-dom';
// import HomePage from '@/pages/HomePage';
// import MovieDetailPage from './pages/MovieDetailPage';
import HomePage from './pages/HomePage';
// import { Button } from './components/ui/button';
// import HeroContent from './components/features/HeroContent';
// import HeroSection from './components/features/HeroSection';
import MovieDetailPage from '@/pages/MovieDetailPage';
import FavoritesPage from './pages/FavoritesPage';
// import SearchPage from './pages/SearchPage';
import SearchPageMobile from '@/pages/SearchPageMobile';
// import MobileLayout from './components/layout/MobileLayout';
// import MovieDetailPage from './pages/MovieDetailPage';
// import DesktopLayout from './components/layout/DesktopLayout';

function App() {
  // TODO: Setup routing dengan React Router
  // TODO: Implement layout structure
  // TODO: Add navigation between pages
  // { data, isLoading, isError }

  return (
    // <div className=" bg-background bg-black text-[#FDFDFD]">
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/favorites" element={<FavoritesPage />} />
      {/* <Route path="/search-page" element={<SearchPage />} /> */}
      <Route path="/search-page" element={<SearchPageMobile />} />
      {/* <Route path="/" element={<HeroSection />} /> */}
      <Route path="/movie/:movieId" element={<MovieDetailPage />} />
      {/* <Route path="/movie/:movieId" element={<MobileLayout />} /> */}
      {/* <Route path="/movie/:movieId" element={<DesktopLayout />} /> */}
    </Routes>

    // </div>
  );
}
export default App;
// {}
// {}
/* <header className="border-b">
        <div className="container mx-auto px-4 py-4">
          <h1 className="text-2xl font-bold">Movie Explorer</h1> */
// {}
// {}
/* TODO: Add navigation menu */
// {}
// {}
/* </div>
      </header> */
// {}
// {}
/* <main className="container mx-auto px-4 py-8">
        <div className="text-center space-y-4">
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
      </main> */

// </div>
//   )
// };

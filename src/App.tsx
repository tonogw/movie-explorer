import './index.css';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import MovieDetailPage from '@/pages/MovieDetailPage';
import FavoritesPage from './pages/FavoritesPage';
import SearchPage from './pages/SearchPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/favorites" element={<FavoritesPage />} />
      <Route path="/search-page" element={<SearchPage />} />
      {/* <Route path="/search-page" element={<SearchPageMobile />} /> */}
      {/* <Route path="/" element={<HeroSection />} /> */}
      <Route path="/movie/:movieId" element={<MovieDetailPage />} />
      {/* <Route path="/movie/:movieId" element={<MobileLayout />} /> */}
      {/* <Route path="/movie/:movieId" element={<DesktopLayout />} /> */}
    </Routes>

    // </div>
  );
}
export default App;

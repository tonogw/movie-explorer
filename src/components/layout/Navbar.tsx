import { LucideTv } from 'lucide-react';
import SearchBar from '../features/SearchBar';
import MobileMenu from '../features/MobileMenu';

export default function Navbar() {
  //   const [searchQuery, setSearchQuery] = useState('');

  return (
    <nav className="absolute top-0 left-0 w-full z-50  text-[#FDFDFD]">
      <div className="max-w-360 mx-auto px-4 lg:px-35 h-20 lg:h-22.5 flex items-center justify-between">
        {/* LOGO  */}
        <div className="flex items-center gap-2">
          <LucideTv size={32} className="fill-yellow-400" />
          <span className="font-bold text-2xl lg:text-4xl">Movie</span>
        </div>
        {/* MENU */}

        <div className="hidden  md:flex  gap-8 font-semibold">
          <a href="#home">Home</a>
          <a href="#favorites">Favorites</a>
        </div>
        <div className="flex items-center gap-4">
          <SearchBar />
          <MobileMenu />
        </div>
      </div>
    </nav>
  );
}

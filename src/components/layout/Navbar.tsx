import { LucideTv } from 'lucide-react';
import SearchBar from '../features/SearchBar';
import MobileMenu from '../features/MobileMenu';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function Navbar() {
  //   const [searchQuery, setSearchQuery] = useState('');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav
      className={`
      fixed  top-0 left-0 w-full z-[9999]
      transition-all duration-300
      text-[#FDFDFD]
      ${scrolled ? 'bg-black/70 backdrop-blur-md' : 'bg-transparent'}
      
      `}
    >
      <div className="mx-auto max-w-[359px]  md:max-w-160 md:px-20 lg:max-w-360 lg:px-35 h-20 lg:h-22.5 flex items-center justify-between">
        {/* LOGO  */}
        <div className="flex items-center gap-2">
          <LucideTv size={32} className="fill-yellow-400" />
          <span className="font-bold text-2xl lg:text-4xl">Movie</span>
        </div>
        {/* MENU */}

        <div className="hidden  md:flex  gap-8 font-semibold">
          <Link to="/">Home</Link>
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

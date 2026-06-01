import { useState } from 'react';
import { Search, X } from 'lucide-react';

export default function SearchBar() {
  const [open, setOpen] = useState('false');
  const [searchQuery, setSearchQuery] = useState('');
  return (
    // DESKTOP
    <div className="hidden md:block ">
      <Search size={32} className=" relative min-w-97.5 lg:max-w-360 px-2 lg:px-35" />
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Search Movie"
        className="absolute pl-10 min-w-97.5 md:max-w-60.75 border  rounded-lg h-10 bg-gray-700 text-white placeholder:text-gray-400 "
      />
      // MOBILE
      <button
        onClick={() => setOpen('true')}
        className="
    md:hidden
    "
      >
        <Search size={24} />
      </button>
      {open && (
        <div
          className="
                fixed inset-0
                z-999
                bg-black
                p-4
                "
        >
          <div className="flex gap-2">
            <input
              autoFocus
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search Movie"
              className="flex-1 h-12 rounded-lg px-4"
              type="text"
            />
            <button onClick={() => setOpen('false')}>
              <X />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

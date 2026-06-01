import { useState } from 'react';
import { Search, X } from 'lucide-react';
// import { useSearchMovies } from '../../hooks/';

export default function SearchBar() {
  const [open, setOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  // const {data} = useSearchMovies(searchQuery);
  return (
    // DESKTOP
    <div className="hidden md:block ">
      <div className="relative">
        <Search size={24} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
        <input
          id="desktop-search"
          name="desktop-search"
          type="text"
          autoFocus
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search Movie"
          className=" pl-10 min-w-60.75 md:max-w-60.75 border border-gray-600 rounded-lg h-10 bg-gray-700 text-white placeholder:text-gray-400 "
        />
      </div>
      <div />

      {/* // MOBILE */}
      <button
        onClick={() => setOpen(true)}
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
              id="mobile-search"
              name="mobile-search"
              autoFocus
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search Movie"
              className="flex-1 h-12 rounded-lg px-4"
              type="text"
            />
            {searchQuery && (
              <div className="absolute top-12 left-0 w-full bg-black rounded-lg">
                {/* {data?.results?.slice(0, 5).map((data:null) => ( */}
                {/* <div key={data.id}>{data.title}</div> */}
                {/* ))} */}
              </div>
            )}
            <button onClick={() => setOpen(false)}>
              <X />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

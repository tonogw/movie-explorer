import { useState } from 'react';
import { Search } from 'lucide-react';

export default function SearchBar() {
  const [searchQuery, setSearchQuery] = useState('');
  return (
    <div className="min-w-97.5 lg:max-w-360 px-2 lg:px-35">
      <Search size={32} />
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Search Movie"
        className=" min-w-97.5 md:max-w-60.75 border  rounded-lg h-10 bg-gray-700 text-white placeholder:text-gray-400 "
      />
    </div>
  );
}

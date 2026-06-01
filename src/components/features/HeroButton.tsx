import { Link } from 'react-router-dom';
import { Play } from 'lucide-react';
import type { Movie } from '@/types/movie';

interface HeroContentProps {
  movie: Movie;
}

export default function HeroButton({ movie }: HeroContentProps) {
  return (
    <div className="mt-8 flex flex-col md:flex-row gap-4 ">
      <button
        onClick={() => console.log('WATCH TRAILER clicked')}
        className="w-full md:w-57.5 h-12  flex justify-center items-center  gap-2 font-bold text-center text-base text-[#FDFDFD]   bg-[#961200] rounded-full z-50"
      >
        <span>Watch Trailer</span>
        <Play
          size={16}
          className=" bg-white fill-[#961200] rounded-full items-end cursor-pointer"
        />
      </button>
      <Link
        to={`/movie/${movie.id}`}
        className="w-full md:w-57.5 h-12 flex items-center justify-center  text-center align-middle z-50 border border-gray-600 rounded-full bg-black/20 backdrop-opacity-15"
      >
        See Detail
      </Link>
    </div>
  );
}

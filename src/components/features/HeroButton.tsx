import { Link } from 'react-router-dom';
import { Play } from 'lucide-react';
import type { Movie } from '@/types/movie';

interface HeroContentProps {
  movie: Movie;
}

export default function HeroButton({ movie }: HeroContentProps) {
  return (
    <div className="flex">
      <button
        onClick={() => console.log('WATCH TRAILER clicked')}
        className="col-span-2 lg:row-start-4 col-start-1 relative flex justify-center items-center w-full h-12 gap-2 font-bold text-center text-base text-white   bg-[#961200] rounded-full z-50"
      >
        <span>Watch Trailer</span>
        <Play
          size={24}
          className=" bg-white fill-[#961200] rounded-full items-end cursor-pointer"
        />
      </button>
      <Link
        to={`/movie/${movie}`}
        className="row-start-4 col-start-2 flex h-12 items-center justify-center  text-center align-middle z-50 border border-gray-600 rounded-full ml-5 bg-black/20 backdrop-opacity-15"
      >
        See Detail
      </Link>
    </div>
  );
}

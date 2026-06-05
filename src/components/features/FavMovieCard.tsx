// import type { Movie } from '@/types/movie';

// type FavMovieCardProps = {
//   movie: Movie;
// };

// export default function FavMovieCard({ movie }: FavMovieCardProps) {
//   return (
//     <div>
//       <h3>{movie.title}</h3>
//     </div>
//   );
// }

import { Link } from 'react-router-dom';
import { getImageUrl } from '@/lib/utils';
import { IMAGE_SIZES } from '@/lib/constants';
import { Star } from 'lucide-react';
import type { Movie } from '@/types/movie';
// import { Button } from '@/components/ui/button';
import FavButton from '../ui/FavButton';
// import TrailerButton from '@/components/ui/TrailerButton';

type Props = {
  movie: Movie;
};

export default function FavMovieCard({ movie }: Props) {
  return (
    <div className="w-full border border-gray-800 rounded-xl flex py-12 gap-6">
      {/* POSTER */}
      {/* <div className="grid grid-cols-3  border"> */}
      {/* <div className=" mx-auto gap-4 "> */}
      <Link
        to={`/movie/${movie.id}`}
        className="
            shrink-0 
            
            "
      >
        <img
          src={getImageUrl(movie.poster_path, IMAGE_SIZES.poster.large)}
          alt={movie.title}
          className="w-[104px] h-[156px] md:w-[182px] md:h-[270px]  rounded-lg object-cover"
        />
      </Link>
      {/* DETAIL */}
      <div className="flex-1 flex flex-col justify-between border">
        {/* TOP CONTENT */}
        <div className="border border-red-500">
          {/* TITLE */}
          <h3 className="text-lg font-semibold">{movie.title}</h3>
          {/* RATING */}
          <div className="flex items-center gap-2 mt-2">
            <Star size={16} className="text-yellow-400 fill-yellow-400" />
            <span className="text-yellow-400">{movie.vote_average.toFixed(1)}</span>
          </div>
          {/* OVERVIEW */}
          <p className="text-sm text-gray-400 mt-2 bg-amber-100 line-clamp-3">{movie.overview}</p>
        </div>
        {/* WATCH MOVIE TRAILER */}
        <div className="mt-4 border">{/* <TrailerButton /> */}</div>
      </div>
      <div className="w-[182px] flex justify-end items-start">
        <FavButton movie={movie} />
      </div>
    </div>
  );
}

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
import { Star, Play } from 'lucide-react';
import type { Movie } from '@/types/movie';
import { Button } from '@/components/ui/button';
import FavButton from '../ui/FavButton';

type Props = {
  movie: Movie;
};

export default function FavMovieCard({ movie }: Props) {
  return (
    <div className="flex gap-4 py-4 border border-gray-800 rounded-xl">
      {/* POSTER */}
      <div className="grid grid-cols-3  border">
        <div className="max-w-[1160px] mx-auto gap-4">
          <Link to={`/movie/${movie.id}`}>
            <img
              src={getImageUrl(movie.poster_path, IMAGE_SIZES.poster.large)}
              alt={movie.title}
              className=" w-[182px] rounded-lg"
            />
          </Link>
        </div>
        {/* DETAIL */}
        <div className="flex-1 border max-w-[772px] ">
          <h3 className="text-lg font-semibold">{movie.title}</h3>
          <div className="flex items-center gap-2 mt-2">
            <Star size={16} className="text-yellow-400 fill-yellow-400" />
            <span className="text-yellow-400">{movie.vote_average.toFixed(1)}</span>
          </div>
          {/* OVERVIEW */}
          <p className="text-sm text-gray-400 mt-2 line-clamp-3">{movie.overview}</p>
          {/* WATCH MOVIE TRAILER */}
          <Button
            disabled={!trailer}
            onClick={() => {
              if (trailer) {
                window.open(`https://youtube.com/watch?v=${trailer.key}`, '_blank');
              }
            }}
            className=" border  w-full bg-[#961200] text-white rounded-full"
          >
            Watch Trailer
          </Button>
        </div>
        {/* FAVORITE BUTTON */}
        <FavButton movie={movie} />
      </div>
    </div>
  );
}

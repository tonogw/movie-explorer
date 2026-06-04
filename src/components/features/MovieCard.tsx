import { Link } from 'react-router-dom';
import { Star } from 'lucide-react';
// import {Card} from '@/components/ui/card'
import { getImageUrl } from '@/lib/utils';
import { IMAGE_SIZES } from '@/lib/constants';

import type { MovieCardProps } from '../../types/movie';
// import FavButton from '@/components/ui/FavButton';

export default function MovieCard({ movie }: MovieCardProps) {
  return (
    <div className="relative">
      {/* <FavButton movie={movie} /> */}

      <Link to={`/movie/${movie.id}`}>
        <img
          src={getImageUrl(movie.poster_path, IMAGE_SIZES.poster.large)}
          alt={movie.title}
          className="
        rounded-xl"
        />

        <div
          className="
        mt-4
        "
        >
          <h3
            className="
          font-semibold
          "
          >
            {movie.title}
          </h3>

          <div className="flex items-center gap-2">
            <Star
              size={16}
              className="
            fill-yellow-400
            text-yellow-400
            "
            />
            <span
              className="
            text-yellow-400 text-base
            "
            >
              {movie.vote_average.toFixed(1)}
            </span>
          </div>
        </div>
      </Link>
    </div>
  );
}

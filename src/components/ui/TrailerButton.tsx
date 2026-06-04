import { Button } from '@/components/ui/button';

import type { Movie, DetailResponse } from '@/types/movie';

type TrailerButtonProps = {
  movie: Movie | DetailResponse;
};

export default function TrailerButton({ movie }: TrailerButtonProps) {
  return (
    <Button
      variant="trailer"
      onClick={async () => {
        const res = await fetch(`/movie/${movie.id}/videos`);

        const data = await res.json();

        const trailer = data.results.find((v) => v.type === 'Trailer' && v.site === 'YouTube');

        if (trailer) {
          window.open(`https://youtube.com/watch?v=${trailer.key}`, '_blank');
        }
      }}
    >
      Watch Trailer
    </Button>
  );
}

import { Button } from '@/components/ui/button';
// import { getMovieTrailer } from '@/services/movieService';
import type { Movie, TrailerResponse } from '@/types/movie';
import { movieService } from '@/services/movieService';

type TrailerButtonProps = {
  movie: Movie | TrailerResponse;
};

export default function TrailerButton({ movie }: TrailerButtonProps) {
  const handleClick = async () => {
    try {
      const data = await movieService.getMovieTrailer(movie.id);

      const trailer = data?.results?.find((v) => v.site === 'YouTube' && v.type === 'Trailer');

      if (trailer?.key) {
        window.open(`https://youtube.com/watch?v=${trailer.key}`, '_blank');
      }
    } catch (err) {
      console.error('Failed to load trailer', err);
    }
  };

  return (
    <Button variant="trailer" onClick={handleClick}>
      Watch Trailer
    </Button>
  );
}

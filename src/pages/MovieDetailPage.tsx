import { useParams } from "react-router-dom";
import { useMovieDetail } from "@/hooks/useMovies";



export default function MovieDetailPage() {
    const { id } = useParams();
    return (

          <Routes>
          <Route path="/" element={<HomePage />} />

          <Route path="/movie/:id" element={<MovieDetailPage />} />
        </Routes>
        {isLoading && <h2>Loading movies . . . </h2>}

        {/* TODO: Replace this with your actual application routes and components */}
        {data?.results.map((movie) => (
          <div key={movie.id} className="border p-4 rounded-lg">
            <h2 className="text-xl font-bold">{movie.title}</h2>

            <p>
              rating:
              {movie.vote_average}
            </p>

            <p>
              Release:
              {movie.release_date}
            </p>
          </div>
        ))}
    )
}
import Navbar from '@/components/layout/Navbar';
import { useParams } from 'react-router-dom';
import { getImageUrl } from '@/lib/utils';
// import { useMovieDetail } from '@/hooks/useMovies';
// import {getMovieDetails} from "../services/movieService";
import { useMovieCredits, useMovieDetail } from '@/hooks/useMovies';
import { IMAGE_SIZES } from '@/lib/constants';
// import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Star, Camera, Heart, LucideScanFace, Cast, BabyIcon } from 'lucide-react';
import MovieCard from '@/components/features/MovieCard';
import { Video } from 'lucide-react';
import Footer from '@/components/layout/Footer';
// import { getImageUrl } from '@/lib/utils';

export default function MovieDetailPage() {
  const { movieId } = useParams();

  const { data, isLoading } = useMovieDetail(Number(movieId));
  const { data: credits } = useMovieCredits(Number(movieId));

  if (isLoading) {
    return <div>Loading movie details ... </div>;
  }

  return (
    <>
      <div className="bg-black text-[#FDFDFD] ">
        <div className="relative bg-red-400 z-20 ">
          {/* BACKDROP */}
          <img
            src={getImageUrl(data?.backdrop_path, IMAGE_SIZES.backdrop.original)}
            alt={data?.title}
          />
          {/* GRADIENT OVERLAY */}

          <div
            className="absolute inset-0 bg-gradient-to-t
      from-black via-black/60 to bg-transparent
      "
          />

          {/* NAVBAR */}
          <div className="absolute top-0 left-0 w-full z-30">
            <Navbar />
          </div>
        </div>
        {/* POSTER AND INFO */}
        <div className="absolute w-full left-0 right0 top-[412px] z-40 px-4 lg:px-35">
          {/* BLOK POSTER */}
          <div className="flex gap-8 border border-red-400">
            {/* FETCH POSTER */}
            <img
              src={getImageUrl(data?.poster_path, IMAGE_SIZES.poster.large)}
              alt={data?.title}
              className="w-48 lg:w-65 z-60  rounded-xl border-4 border-gray-600"
            />
            {/* BLOK DETAIL */}
            <div className="w-full text-left border border-yellow-400">
              {/* BLOK TITLE, RATING, GENRE AND AGE */}
              <div className="mx-4 text-[40px] font-bold border">
                {/* GET TITLE */}
                <h1 className="text-4xl font-bold">{data?.title}</h1>
                {/* GET RELEASE DATE */}
                <p className="border">calender</p>
                {/* BLOK INTERACTIVE */}
                <div className="flex border ">
                  {/* FETCH TRAILER */}
                  <Button className="border bg-[#961200] text-white rounded-full">
                    Watch Trailer
                  </Button>
                  {/* FAVORITES */}
                  <Heart className="align-center justify-middle" />
                </div>
                {/* BLOK RATING, GENRE, AGE */}
                <div className="grid grid-cols-3 text-base">
                  {/* GET RATING */}
                  <div className="flex flex-col bg-gray-950 border rounded-xl p-4  items-center text-center">
                    <Star size={32} className="mb-2  fill-amber-400" />
                    <p className="text-sm text-gray-400">Rating</p>
                    <p> {data?.vote_average}</p>
                  </div>
                  {/* GET GENRE */}
                  <div className="flex flex-col bg-gray-950 border rounded-xl p-4  items-center text-center">
                    <Video size={32} className="mb-2" />
                    <p className="text-sm text-gray-400">Genre </p>
                    <p>{data?.genres?.map((genre) => genre.name).join(',')} </p>
                  </div>
                  {/* GET AGE LIMIT */}
                  <div className="flex flex-col bg-gray-950 border rounded-xl p-4  items-center text-center">
                    <BabyIcon size={32} className="mb-2" />
                    <p className="text-sm text-gray-400">Age Limit </p>
                    <p>{data?.adult ? '18+' : 'PG-13'}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* BLOK OVERVIEW */}
        <div className="pt-[84px] lg:px-35 border">
          {/* OVERVIEW */}
          <h2 className="font-bold text-5xl ">Overview</h2>
          {/* GET OVERVIEW DETAIL */}
          <p>{data?.overview} </p>
        </div>

        {/* BLOK CAST & CREW */}
        <div className="w-full mt-12 border pb-36.5">
          <div className="lg:px-35">
            {/* CAST & CREW */}
            <h2 className="py-4 font-bold text-5xl">Cast & Crew</h2>
            {/* BLOK GRID */}
            <div className="border border-amber-400 grid grid-cols-3 justify-between">
              {/* FETCH DETAIL CREDITS */}
              {credits?.cast.slice(0, 10).map((cast) => (
                // GET MOVIE ID
                <div
                  className="border border-red-500 max-w-90  grid grid-cols-3  justify-between py-5 pr-5"
                  key={cast.id}
                >
                  {/* GET CAST/CREW IMAGE */}
                  <img
                    src={getImageUrl(cast.profile_path, IMAGE_SIZES.profile.medium)}
                    alt={cast.name}
                    className=""
                  />
                  {/* BLOK PROFILE */}
                  <div className="col col-span-2 py-5 px-2.5">
                    {/* GET PERSON NAME */}
                    <h3 className="h-[30px] text-base font-bold ">{cast.name}</h3>
                    {/* GET CHARACTER NAME */}
                    <p className="h-[30px] text-base text-[#A4A7AE]"> {cast.character}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* BLOK FOOTER */}
      <div className="">
        <Footer />
      </div>
    </>
  );
}

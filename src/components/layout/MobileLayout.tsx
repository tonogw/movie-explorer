import Navbar from '@/components/layout/Navbar';
// import { useParams } from 'react-router-dom';
import { getImageUrl } from '@/lib/utils';
import type { DetailResponse, CreditResponse, VideoResult } from '@/types/movie';
// import { useMovieDetail } from '@/hooks/useMovies';
// import {getMovieDetails} from "../services/movieService";
// import { useMovieCredits, useMovieDetail } from '@/hooks/useMovies';
import { IMAGE_SIZES } from '@/lib/constants';
// import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Star, Video as VideoIcon, Heart, BabyIcon, Calendar } from 'lucide-react';
// import MovieCard from '@/components/features/MovieCard';
// import { Video } from 'lucide-react';
import Footer from '@/components/layout/Footer';
// import { getImageUrl } from '@/lib/utils';

type MobileLayoutProps = {
  data: DetailResponse;
  credits: CreditResponse;
  trailer?: VideoResult;
};

export default function MobileLayout({ data, credits, trailer }: MobileLayoutProps) {
  // const { movieId } = useParams();

  // const { data, isLoading } = useMovieDetail(Number(movieId));
  // const { data: credits } = useMovieCredits(Number(movieId));

  // if (isLoading) {
  //   return <div>Loading movie details ... </div>;
  // }

  return (
    <div className="md:hidden bg-black text-[#FDFDFD] px-4">
      <div className="bg-black text-[#FDFDFD] ">
        <div className="relative bg-red-400 z-20 ">
          {/* BACKDROP */}
          <img
            src={getImageUrl(data.backdrop_path, IMAGE_SIZES.backdrop.original)}
            alt={data.title}
          />
          {/* GRADIENT OVERLAY */}

          <div
            className="absolute inset-0 bg-linear-to-t
          from-black via-black/10 to bg-transparent
          "
          />

          {/* NAVBAR */}
          <div className="absolute top-0 left-0 w-full z-30">
            <Navbar />
          </div>
        </div>
      </div>

      {/* MOBILE CONTAINER MAX-W-359 */}
      <div className="mx-auto w-full max-w-[359px]">
        <div className="-mt-20  relative z-40">
          {/* BLOK POSTER */}
          <div className=" flex gap-2  items-start border border-red-400">
            {/* FETCH POSTER */}
            <img
              src={getImageUrl(data.poster_path, IMAGE_SIZES.poster.large)}
              alt={data.title}
              className="w-28    rounded-xl border-4 border-gray-600 shadow-lg shrink-0"
            />
            {/* BLOK DETAIL */}
            {/* <div className=" mx-auto max-w-[359px]  text-left border border-yellow-400"> */}
            {/* BLOK TITLE, RATING, GENRE AND AGE */}
            <div className="flex-1 pb-4 max-w-[359px] border">
              {/* GET TITLE */}
              <h1 className="pt-2 text-xl font-bold leading-tight">{data.title}</h1>
              {/* GET RELEASE DATE */}
              <div className="flex items-center mt-2 gap-2 text-sm text-[#A4A7AE]">
                <Calendar size={16} />
                <span>{data.release_date}</span>
              </div>
            </div>
            {/* </div> */}
          </div>
        </div>
        {/* START HERE */}

        <div className="mx-auto max-w-[359px]">
          <div className="mt-6 flex border gap-4 items-center">
            {/* FETCH TRAILER */}
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
            {/* FAVORITES */}
            <span>
              <Button variant="favorite" size="icon">
                <Heart size={24} className="mr-2.5" />
              </Button>
            </span>
          </div>
          {/* BLOK RATING, GENRE, AGE */}
          <div className="grid grid-cols-3 gap-2 mt-6 text-base  ">
            {/* GET RATING */}
            <div
              className="
           flex flex-col bg-gray-950 border rounded-xl p-4  items-center text-center hover:bg-red-500 z-30"
            >
              <Star
                size={32}
                className="mb-2  fill-amber-400  hover:bg-gray-600 hover:fill-red-500"
              />
              <p className="text-xs text-gray-400">Rating</p>
              <p className="text-lg font-semibold"> {Number(data.vote_average?.toFixed(1))} /10</p>
            </div>
            {/* BLOK GENRE */}
            <div className="flex flex-col bg-gray-950 border rounded-xl p-4  items-center text-center z-30">
              <VideoIcon size={32} className="mb-2" />
              <p className="text-xs text-gray-400">Genre </p>
              {/* GET GENRE !FIRST */}
              <p className="text-lg font-semibold">
                {/* {data?.genres?.map((genre) => genre.name).join(',')} */}
                {data.genres?.[0]?.name}
              </p>
            </div>
            {/* GET AGE LIMIT */}
            <div className="flex flex-col bg-gray-950 border rounded-xl p-4  items-center text-center z-30">
              <BabyIcon size={32} className="mb-2" />
              <p className="text-xs text-gray-400">Age Limit </p>
              <p className="text-lg font-semibold">{data.adult ? '18+' : 'PG-13'}</p>
            </div>
          </div>
        </div>

        <div
          className="
      mt-6
      "
        >
          {/* BLOK OVERVIEW */}
          <div className="mx-auto max-w-[359px]  lg:px-35 border">
            {/* OVERVIEW */}
            <h2 className="font-bold text-xl ">Overview</h2>
            {/* GET OVERVIEW DETAIL */}
            <p>{data.overview} </p>
          </div>
        </div>

        {/* BLOK CAST & CREW */}
        <div className="mx-auto max-w-[359px] mt-6 border pb-10">
          <div className="">
            {/* CAST & CREW */}
            <h2 className=" py-4 font-bold text-xl">Cast & Crew</h2>
            {/* BLOK GRID */}
            <div className="border border-amber-400 grid grid-cols-1">
              {/* FETCH DETAIL CREDITS */}
              {credits.cast.slice(0, 10).map((cast) => (
                // GET MOVIE ID
                <div
                  className="border border-red-500 max-w-90  grid grid-cols-3   py-5 pr-5"
                  key={cast.id}
                >
                  {/* GET CAST/CREW IMAGE */}
                  <img
                    src={getImageUrl(cast.profile_path, IMAGE_SIZES.profile.medium)}
                    alt={cast.name}
                    className="w-13.75 h-21"
                  />
                  {/* BLOK PROFILE */}
                  <div className="col col-span-2 py-5 ">
                    {/* GET PERSON NAME */}
                    <h3 className="h-7.5 text-sm font-bold ">{cast.name}</h3>
                    {/* GET CHARACTER NAME */}
                    <p className="h-7.5 text-sm text-[#A4A7AE]"> {cast.character}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* CONTAINER */}

      {/* POSTER AND INFO */}

      {/* BLOK INTERACTIVE */}

      {/* </div> */}
      {/* BLOK FOOTER */}
      <div className="">
        <Footer />
      </div>
    </div>
  );
}

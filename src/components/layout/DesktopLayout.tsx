import Navbar from '@/components/layout/Navbar';
import type { DetailResponse, CreditResponse, VideoResult } from '@/types/movie';
import Footer from '@/components/layout/Footer';

import { getImageUrl } from '@/lib/utils';
import { IMAGE_SIZES } from '@/lib/constants';
import { Button } from '@/components/ui/button';
import { Star, BabyIcon, Calendar, Video as VideoIcon } from 'lucide-react';
import FavButton from '../ui/FavButton';

// backdrop-poster-title-releaseDate-overview-button-rating-genre-age|
// div className="mx-auto max-w-[1160px] px-8"
// HEADER: className:"flex gap-8"
// IMG: className:"w-64 lg:w-80 rounded-xl"
// DETAIL: className:"flex-1"
// TITLE: clasName:"text-4xl lg:text-6xl font-bold"
// OVERVIEW: className:"mt-6 text-base lg:text-lg text-gray-300"
// CARDS: className:"mt-8 grid grid-cols-3 gap-4 max-w-xl"
// ++ runtime data.runtime
// SIMILAR MOVIE => MovieCard
// FAVORITES (ZUZTAND) Add | Remove | Persist | Heart Indicator |

type DesktopLayoutProps = {
  data: DetailResponse;
  credits: CreditResponse;
  trailer?: VideoResult;
};

export default function DesktopLayout({ data, credits, trailer }: DesktopLayoutProps) {
  //   const trailer = trailerData?.results?.find(
  //     (video) => video.site === 'YouTube' && video.type === 'Trailer'
  //   );

  return (
    <div className="bg-black text-white  border ">
      {/* NAVBAR */}

      <Navbar />
      <div className="relative">
        {/* BACKDROP */}
        <img
          src={getImageUrl(data.backdrop_path, IMAGE_SIZES.backdrop.original)}
          alt={data.title}
          className="h-180 w-full object-cover"
        />

        <div
          className="absolute inset-0 bg-linear-to-t
          from-black via-black/10 to bg-transparent
          "
        />
      </div>
      {/* // CONTAINER */}
      {/* HEADER */}
      <div className="relative  -mt-64 mx-auto max-w-[1160px]">
        {/* MOVIE POSTER */}
        <div className="flex gap-8">
          {/* FETCH POSTER */}
          <img
            src={getImageUrl(data.poster_path, IMAGE_SIZES.poster.large)}
            alt={data.title}
            className="w-65 h-91    rounded-xl border-4 border-gray-600 shadow-lg shrink-0"
          />
          {/* BLOK TITLE */}
          <div className="flex-1">
            {/* FETCH TITLE */}
            <h1 className="text-[40px]">{data.title}</h1>
            <div className="flex gap-2">
              <Calendar size={32} />
              <span>{data.release_date}</span>
            </div>

            {/* BLOK INTERACTIVE */}
            <div className="my-6 flex border items-center gap-4">
              {/* FETCH TRAILER */}
              <Button
                onClick={() => {
                  if (trailer) {
                    window.open(`https://youtube.com/watch?v=${trailer.key}`, '_blank');
                  }
                }}
                className="w-[220px] border bg-[#961200] text-white rounded-full"
              >
                Watch Trailer
              </Button>
              {/* FAVORITES */}
              {/* <Heart size={24} className="align-center justify-middle" /> */}

              {/* <Button variant="favorite" size="icon" onClick={() => toggleFavorite(data)}>
                <Heart className={isFavorite ? 'fill-red-500 text-red-500' : 'text-white'} />
              </Button> */}
              {/* <FavButton movie={data} /> */}
            </div>

            {/* BLOK RATING, GENRE, AGE */}
            <div className="grid grid-cols-3 text-base gap-5">
              {/* GET RATING */}
              <div className="flex flex-col bg-gray-950 border rounded-xl p-4  items-center text-center">
                <Star size={32} className="mb-2  fill-amber-400" />
                <p className="text-sm text-gray-400">Rating</p>
                <p> {data.vote_average.toFixed(1)}/10</p>
              </div>
              {/* GET GENRE */}
              <div className="flex flex-col bg-gray-950 border rounded-xl p-4  items-center text-center">
                <VideoIcon size={32} className="mb-2" />
                <p className="text-sm text-gray-400">Genre </p>
                {/* <p>{data.genres?.map((genre) => genre.name).join(',')} </p> */}
                <p>{data.genres[0]?.name} </p>
              </div>
              {/* GET AGE LIMIT */}
              <div className="flex flex-col bg-gray-950 border rounded-xl p-4  items-center text-center">
                <BabyIcon size={32} className="mb-2" />
                <p className="text-sm text-gray-400">Age Limit </p>
                <p>{data.adult ? '18+' : 'PG-13'}</p>
              </div>
            </div>
          </div>
        </div>
        {/* BLOK OVERVIEW */}

        <div className="my-12 text-4xl lg:text-base font-bold border">
          {/* FETCH OVERVIEW */}
          <h2 className="text-[32px]">Overview</h2>
          <p className="text-[#A4A7AE]">{data.overview}</p>
          <div className="mt-6 text-base lg:text-lg text-gray-300">{/* MOVIE CARDS */}</div>
        </div>
      </div>

      {/* BLOK CAST & CREW */}
      <div className="mx-auto max-w-[1160px] mt-6 border pb-10">
        <div className="">
          {/* CAST & CREW */}
          <h2 className=" py-4 font-bold text-xl">Cast & Crew</h2>
          {/* BLOK GRID */}
          <div className="border border-amber-400 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {/* FETCH DETAIL CREDITS */}
            {credits.cast.slice(0, 10).map((cast) => (
              // GET MOVIE ID
              <div
                className="border border-red-500 max-w-90  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3   py-5 pr-5"
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

      <div>
        <Footer />
      </div>
    </div>
  );
}

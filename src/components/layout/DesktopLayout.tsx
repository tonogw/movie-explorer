import Navbar from '@/components/layout/Navbar';
import type { DetailResponse, CreditResponse } from '@/types/movie';
import Footer from '@/components/layout/Footer';

import { getImageUrl } from '@/lib/utils';
import { IMAGE_SIZES } from '@/lib/constants';
import { Button } from '@/components/ui/button';
import { Star, Heart, BabyIcon, Calendar, Video } from 'lucide-react';

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
};

export default function DesktopLayout({ data }: DesktopLayoutProps) {
  return (
    <div className="bg-black text-white  border ">
      <div className="relative">
        {/* BACKDROP */}
        <img
          src={getImageUrl(data?.backdrop_path, IMAGE_SIZES.backdrop.original)}
          alt={data?.title}
          className="w-full  rounded-xl"
        />

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
      {/* // CONTAINER */}
      {/* HEADER */}
      <div className=" mx-auto max-w-[1160px] px-8">
        {/* MOVIE POSTER */}
        <div className="flex gap-8">
          {/* FETCH POSTER */}
          <img
            src={getImageUrl(data?.poster_path, IMAGE_SIZES.poster.large)}
            alt={data?.title}
            className="w-65 h-91    rounded-xl border-4 border-gray-600 shadow-lg shrink-0"
          />
          {/* BLOK TITLE */}
          <div className="flex-1">
            {/* FETCH TITLE */}
            <h1 className="text-[40px]">{data?.title}</h1>
            <div>
              <Calendar size={32} />
              <span>{data?.release_date}</span>
            </div>

            {/* BLOK INTERACTIVE */}
            <div className="flex border ">
              {/* FETCH TRAILER */}
              <Button className="border bg-[#961200] text-white rounded-full">Watch Trailer</Button>
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
        {/* BLOK OVERVIEW */}

        <div className="text-4xl lg:text-base font-bold border">
          {/* FETCH OVERVIEW */}
          <h2 className="text-[32px]">Overview</h2>
          <p className="text-[#A4A7AE]">{data?.overview}</p>
          <div className="mt-6 text-base lg:text-lg text-gray-300">
            {/* MOVIE CARDS */}

            <div className="mt-8 grid grid-cols-3 gap-4 max-w-xl">
              <p>MOVIE CARDS</p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

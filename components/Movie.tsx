import { ThumbUpIcon } from "@heroicons/react/outline";
import Image from "next/image";
import MovieListResult from "../types/MovieListResult";
import { forwardRef } from "react";

type MovieProps = {
  result: MovieListResult;
};

const Movie = forwardRef(({ result }: MovieProps, ref: any) => {
  const BASE_URL = "https://image.tmdb.org/t/p/original";

  return (
    <div
      className="group cursor-pointer p-2 transition duration-200 ease-in transform sm:hover:scale-105 hover:z-50"
      ref={ref}
    >
      <Image
        layout="responsive"
        src={
          `${BASE_URL}${
            (result.backdrop_path as string) || (result.poster_path as string)
          }` || `${BASE_URL}${result.poster_path as string}`
        }
        width={1920}
        height={1080}
      />

      <div className="p-2">
        <p className="truncate max-w-md">{result.overview as string}</p>
        <h2 className="mt-1 text-2xl text-white transition-all duration-100 ease-in-out group-hover:font-bold">
          {(result.title as string) ||
            (result.original_title as string) ||
            (result.name as string)}
        </h2>
        <p className="flex items-center opacity-0 group-hover:opacity-100">
          {(result.release_date as string) || (result.first_air_date as string)}{" "}
          • <ThumbUpIcon className="h-5 mx-2" /> {result.vote_count as number}
        </p>
      </div>
    </div>
  );
});

export default Movie;

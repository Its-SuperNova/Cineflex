"use client";
import Link from "next/link";
import { Star, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { nowShowingMovies, comingSoonMovies } from "@/data/movie";

interface MovieGridProps {
  category: "now-showing" | "coming-soon";
}

interface Movie {
  id: string;
  title: string;
  image: string;
  rating: number;
  duration: string;
  genres: string[];
  releaseDate?: string;
}

export default function MovieGrid({ category }: MovieGridProps) {
  const movies: Movie[] =
    category === "now-showing" ? nowShowingMovies : comingSoonMovies;

  return (
    <>
      {category === "now-showing" ? (
        <div className="relative">
          <div className="flex overflow-x-auto pb-6 pt-2 scrollbar-hide -mx-4 px-4">
            <div className="flex gap-4 md:gap-6">
              {movies.map((movie) => (
                <Link
                  href={`/movies/${movie.id}`}
                  key={movie.id}
                  className="group"
                >
                  <div
                    className="movie-card bg-zinc-800 rounded-lg overflow-hidden flex-shrink-0"
                    style={{ width: "240px" }}
                  >
                    <div className="relative aspect-[2/3] overflow-hidden">
                      <img
                        src={movie.image || "/placeholder.svg"}
                        alt={movie.title}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute top-2 left-2 flex items-center bg-black/70 px-2 py-1 rounded text-white text-xs">
                        <Star className="h-3 w-3 mr-1 fill-[#FC174D] text-[#FC174D]" />
                        <span>{movie.rating}</span>
                      </div>
                    </div>

                    <div className="p-3">
                      <h3 className="font-semibold text-white line-clamp-1 group-hover:text-[#FC174D] transition-colors">
                        {movie.title}
                      </h3>

                      <div className="flex items-center text-xs text-gray-400 mt-1">
                        <Clock className="h-3 w-3 mr-1" />
                        <span>{movie.duration}</span>
                      </div>

                      <div className="flex flex-wrap gap-1 mt-2">
                        {movie.genres.map((genre) => (
                          <span
                            key={genre}
                            className="text-xs bg-zinc-700 text-gray-300 px-2 py-0.5 rounded"
                          >
                            {genre}
                          </span>
                        ))}
                      </div>

                      <div className="mt-3">
                        <Button
                          size="sm"
                          className="w-full bg-[#FC174D] hover:bg-[#d91341] text-white text-xs"
                        >
                          Book Now
                        </Button>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 mt-6">
          {movies.map((movie) => (
            <Link href={`/movies/${movie.id}`} key={movie.id} className="group">
              <div className="movie-card bg-zinc-800 rounded-lg overflow-hidden">
                <div className="relative aspect-[2/3] overflow-hidden">
                  <img
                    src={movie.image || "/placeholder.svg"}
                    alt={movie.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute top-2 left-2 flex items-center bg-black/70 px-2 py-1 rounded text-white text-xs">
                    <Star className="h-3 w-3 mr-1 fill-[#FC174D] text-[#FC174D]" />
                    <span>{movie.rating}</span>
                  </div>
                </div>

                <div className="p-3">
                  <h3 className="font-semibold text-white line-clamp-1 group-hover:text-[#FC174D] transition-colors">
                    {movie.title}
                  </h3>

                  <div className="flex items-center text-xs text-gray-400 mt-1">
                    <Clock className="h-3 w-3 mr-1" />
                    <span>{movie.duration}</span>
                  </div>

                  <div className="flex flex-wrap gap-1 mt-2">
                    {movie.genres.map((genre) => (
                      <span
                        key={genre}
                        className="text-xs bg-zinc-700 text-gray-300 px-2 py-0.5 rounded"
                      >
                        {genre}
                      </span>
                    ))}
                  </div>

                  {movie.releaseDate && (
                    <div className="mt-2 text-xs text-[#FC174D]">
                      {movie.releaseDate}
                    </div>
                  )}

                  <div
                    className={cn(
                      "mt-3",
                      "opacity-0 group-hover:opacity-100 transition-opacity"
                    )}
                  >
                    <Button
                      size="sm"
                      className="w-full bg-[#FC174D] hover:bg-[#d91341] text-white text-xs"
                    >
                      Notify Me
                    </Button>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </>
  );
}

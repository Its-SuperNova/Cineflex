"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Star,
  Clock,
  Calendar,
  MessageCircle,
  Share2,
  Heart,
} from "lucide-react";
import { useRouter } from "next/navigation";
import CastCrew from "@/components/cast-crew";
import SeatCountModal from "@/components/seat-count-model";
import { getMovieById } from "@/data/movie";

export default function MovieDetailsPage({
  params,
}: {
  params: { id: string };
}) {
  const movie = getMovieById(params.id);
  const router = useRouter();
  const [showSeatModal, setShowSeatModal] = useState(false);

  const handleBookTickets = () => {
    setShowSeatModal(true);
  };

  const handleSelectSeats = (seatCount: number) => {
    // Navigate to booking page with seat count as query parameter
    router.push(`/booking/${movie.id}?seats=${seatCount}`);
  };

  return (
    <main className="flex-1 overflow-x-hidden">
      {/* Movie Backdrop */}
      <div className="relative h-[40vh] md:h-[70vh] w-full">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${movie.backdrop})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent" />
      </div>

      {/* Movie Details */}
      <div className="container px-4 md:px-6 -mt-16 sm:-mt-24 md:-mt-32 relative z-10 max-w-full overflow-hidden">
        <div className="grid md:grid-cols-[300px_1fr] gap-6 md:gap-8 w-full min-w-0">
          {/* Movie Poster */}

          <div className="hidden md:block">
            <div className="rounded-lg overflow-hidden shadow-xl aspect-[2/3]">
              <img
                src={movie.image || "/placeholder.svg"}
                alt={movie.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="mt-6 space-y-4">
              <Button
                className="w-full bg-[#FC174D] hover:bg-[#d91341] text-white"
                onClick={handleBookTickets}
              >
                Book Tickets
              </Button>

              <div className="flex gap-2">
                <Button
                  variant="outline"
                  size="icon"
                  className="flex-1 text-white border-zinc-700 hover:bg-zinc-800"
                >
                  <Heart className="h-5 w-5" />
                  <span className="sr-only">Add to Wishlist</span>
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="flex-1 text-white border-zinc-700 hover:bg-zinc-800"
                >
                  <Share2 className="h-5 w-5" />
                  <span className="sr-only">Share</span>
                </Button>
              </div>
            </div>
          </div>

          {/* Movie Info */}
          <div className="min-w-0 w-full">
            <div className="flex flex-wrap items-center gap-2 mb-3">
              <div className="flex items-center bg-[#FC174D]/90 px-2 py-1 rounded text-white text-xs sm:text-sm">
                <Star className="h-3 w-3 sm:h-4 sm:w-4 mr-1 fill-white" />
                <span>{movie.rating}/10</span>
              </div>
              <div className="flex items-center bg-black/60 px-2 py-1 rounded text-white text-xs sm:text-sm">
                <Clock className="h-3 w-3 sm:h-4 sm:w-4 mr-1" />
                <span>{movie.duration}</span>
              </div>
              <div className="flex items-center bg-black/60 px-2 py-1 rounded text-white text-xs sm:text-sm">
                <Calendar className="h-3 w-3 sm:h-4 sm:w-4 mr-1" />
                <span className="hidden sm:inline">{movie.releaseDate}</span>
                <span className="sm:hidden">
                  {movie.releaseDate.split(",")[0]}
                </span>
              </div>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white mb-4 leading-tight break-words min-w-0">
              {movie.title}
            </h1>

            <div className="flex flex-wrap gap-2 mb-6">
              {movie.genres.map((genre) => (
                <span
                  key={genre}
                  className="text-xs sm:text-sm bg-zinc-800 text-gray-300 px-2 sm:px-3 py-1 rounded-full"
                >
                  {genre}
                </span>
              ))}
            </div>

            <div className="mb-6">
              <h2 className="text-lg sm:text-xl font-semibold text-white mb-2">
                Synopsis
              </h2>
              <p className="text-sm sm:text-base text-gray-300 leading-relaxed break-words">
                {movie.description}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 mb-6 sm:mb-8">
              <div>
                <h3 className="text-xs sm:text-sm text-gray-400">Director</h3>
                <p className="text-sm sm:text-base text-white">
                  {movie.director}
                </p>
              </div>
              <div>
                <h3 className="text-xs sm:text-sm text-gray-400">
                  Release Date
                </h3>
                <p className="text-sm sm:text-base text-white">
                  {movie.releaseDate}
                </p>
              </div>
              <div className="sm:col-span-2 md:col-span-1">
                <h3 className="text-xs sm:text-sm text-gray-400">Languages</h3>
                <p className="text-sm sm:text-base text-white">
                  {movie.languages.join(", ")}
                </p>
              </div>
            </div>

            {/* Mobile Book Button */}
            <div className="md:hidden mb-6 sm:mb-8 w-full">
              <div className="flex gap-3 w-full">
                <Button
                  className="flex-1 bg-[#FC174D] hover:bg-[#d91341] text-white py-4 sm:py-6 text-base sm:text-lg font-semibold"
                  onClick={handleBookTickets}
                >
                  Book Tickets
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="w-12 h-12 sm:w-14 sm:h-14 text-white border-zinc-700 hover:bg-zinc-800"
                >
                  <Heart className="h-5 w-5" />
                  <span className="sr-only">Add to Wishlist</span>
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="w-12 h-12 sm:w-14 sm:h-14 text-white border-zinc-700 hover:bg-zinc-800"
                >
                  <Share2 className="h-5 w-5" />
                  <span className="sr-only">Share</span>
                </Button>
              </div>
            </div>

            {/* Cast & Crew */}
            <div className="mb-6 sm:mb-8">
              <h2 className="text-lg sm:text-xl font-semibold text-white mb-4">
                Cast & Crew
              </h2>
              <CastCrew cast={movie.cast} />
            </div>

            {/* Trailer */}
            <div className="mb-6 sm:mb-8">
              <h2 className="text-lg sm:text-xl font-semibold text-white mb-4">
                Trailer
              </h2>
              <div className="aspect-video rounded-lg overflow-hidden">
                <iframe
                  width="100%"
                  height="100%"
                  src={movie.trailerUrl}
                  title={`${movie.title} Trailer`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>
            </div>

            {/* User Reviews */}
            <div>
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4">
                <h2 className="text-lg sm:text-xl font-semibold text-white">
                  User Reviews
                </h2>
                <Button
                  variant="outline"
                  className="text-white border-zinc-700 hover:bg-zinc-800 text-sm"
                >
                  <MessageCircle className="h-4 w-4 mr-2" />
                  <span>Write a Review</span>
                </Button>
              </div>

              <div className="space-y-4">
                <div className="bg-zinc-800 rounded-lg p-4">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-zinc-700 overflow-hidden flex-shrink-0">
                      <img
                        src="/placeholder.svg?height=40&width=40&query=person avatar"
                        alt="User Avatar"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h4 className="font-medium text-white text-sm sm:text-base">
                        John Doe
                      </h4>
                      <div className="flex items-center mt-1">
                        <Star className="h-3 w-3 fill-[#FC174D] text-[#FC174D]" />
                        <Star className="h-3 w-3 fill-[#FC174D] text-[#FC174D]" />
                        <Star className="h-3 w-3 fill-[#FC174D] text-[#FC174D]" />
                        <Star className="h-3 w-3 fill-[#FC174D] text-[#FC174D]" />
                        <Star className="h-3 w-3 text-gray-400" />
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-300 text-sm sm:text-base leading-relaxed break-words">
                    Villeneuve has done it again. This is a masterpiece of
                    sci-fi filmmaking that expands on the first film in every
                    way. The visuals are breathtaking, the performances are
                    stellar, and the story is epic in scope.
                  </p>
                </div>

                <div className="bg-zinc-800 rounded-lg p-4">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-zinc-700 overflow-hidden flex-shrink-0">
                      <img
                        src="/placeholder.svg?height=40&width=40&query=woman avatar"
                        alt="User Avatar"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h4 className="font-medium text-white text-sm sm:text-base">
                        Jane Smith
                      </h4>
                      <div className="flex items-center mt-1">
                        <Star className="h-3 w-3 fill-[#FC174D] text-[#FC174D]" />
                        <Star className="h-3 w-3 fill-[#FC174D] text-[#FC174D]" />
                        <Star className="h-3 w-3 fill-[#FC174D] text-[#FC174D]" />
                        <Star className="h-3 w-3 fill-[#FC174D] text-[#FC174D]" />
                        <Star className="h-3 w-3 fill-[#FC174D] text-[#FC174D]" />
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-300 text-sm sm:text-base leading-relaxed break-words">
                    One of the best sequels I've ever seen. The world-building
                    is incredible, and the way the story unfolds is both
                    satisfying and thought-provoking. The cast is perfect,
                    especially Zendaya who gets much more screen time in this
                    one.
                  </p>
                </div>
              </div>

              <div className="mt-4 text-center">
                <Button
                  variant="link"
                  className="text-[#FC174D] text-sm sm:text-base"
                >
                  View All Reviews
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Seat Count Modal */}
      <SeatCountModal
        isOpen={showSeatModal}
        onClose={() => setShowSeatModal(false)}
        onSelectSeats={handleSelectSeats}
        movieTitle={movie.title}
      />
    </main>
  );
}

"use client";
import { Button } from "@/components/ui/button";
import { Star, Calendar } from "lucide-react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import { featuredMovies } from "@/data/movie";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function FeaturedMovies() {
  return (
    <div className="featured-slider">
      <Swiper
        modules={[Pagination, Navigation, Autoplay]}
        pagination={{ clickable: true }}
        navigation={true}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        className="rounded-xl swiper-custom"
      >
        {featuredMovies.map((movie, index) => (
          <SwiperSlide key={movie.id}>
            <div className="relative h-[400px] md:h-[500px] w-full">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: `url(${movie.image})`,
                  backgroundPosition: movie.alignment,
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />

              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10">
                <div className="flex items-center gap-2 mb-2">
                  <div className="flex items-center bg-[#FC174D]/90 px-2 py-1 rounded text-white text-sm">
                    <Star className="h-4 w-4 mr-1 fill-white" />
                    <span>{movie.rating}/10</span>
                  </div>
                  <div className="flex items-center bg-black/60 px-2 py-1 rounded text-white text-sm">
                    <Calendar className="h-4 w-4 mr-1" />
                    <span>{movie.releaseDate}</span>
                  </div>
                </div>

                <h3 className="text-2xl md:text-4xl font-bold text-white mb-2">
                  {movie.title}
                </h3>
                <p className="text-white/80 mb-4 max-w-2xl">
                  {movie.description}
                </p>

                <div className="flex flex-wrap gap-3">
                  <Button className="bg-[#FC174D] hover:bg-[#d91341] text-white">
                    <Link href={`/movies/${movie.id}`}>Book Now</Link>
                  </Button>
                  <Button
                    variant="outline"
                    className="text-white border-white hover:bg-white/10 bg-zinc-800"
                  >
                    Watch Trailer
                  </Button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

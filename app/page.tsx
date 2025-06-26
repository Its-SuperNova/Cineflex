import FeaturedMovies from "@/components/featured-movies"
import MovieGrid from "@/components/movie-grid"
import GenreFilter from "@/components/genre-filter"

export default function Home() {
  return (
    <main className="flex-1">
      <section className="bg-black pt-0">
        <FeaturedMovies />
      </section>

      {/* Now Showing */}
      <section className="py-12 bg-black">
        <div className="container px-4 md:px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Now Showing</h2>
          <GenreFilter />
          <MovieGrid category="now-showing" />
        </div>
      </section>

      {/* Coming Soon */}
      <section className="py-12 bg-black">
        <div className="container px-4 md:px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Coming Soon</h2>
          <MovieGrid category="coming-soon" />
        </div>
      </section>
    </main>
  )
}

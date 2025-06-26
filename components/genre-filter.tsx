"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const genres = [
  "All",
  "Action",
  "Adventure",
  "Animation",
  "Comedy",
  "Crime",
  "Drama",
  "Fantasy",
  "Horror",
  "Sci-Fi",
  "Thriller",
]

export default function GenreFilter() {
  const [selectedGenre, setSelectedGenre] = useState("All")

  return (
    <div className="flex overflow-x-auto pb-4 scrollbar-hide -mx-1 px-1">
      <div className="flex gap-2">
        {genres.map((genre) => (
          <Button
            key={genre}
            variant="outline"
            size="sm"
            className={cn(
              "rounded-full border-zinc-700 text-sm whitespace-nowrap",
              selectedGenre === genre
                ? "bg-[#FC174D] text-white border-[#FC174D] hover:bg-[#d91341] hover:text-white"
                : "bg-transparent text-gray-400 hover:text-white hover:bg-zinc-800",
            )}
            onClick={() => setSelectedGenre(genre)}
          >
            {genre}
          </Button>
        ))}
      </div>
    </div>
  )
}
